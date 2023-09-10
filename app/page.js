"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect,useState,useContext } from 'react'
import CategoryData from './../components/HomePage/CategoryData'
import RangeSelection from '@/components/HomePage/RangeSelection'
import MapView from '@/components/HomePage/MapView'
import GlobalApi from '@/Shared/GlobalApi'
import { UserLocationContext } from '@/context/UserLocationContext';
import PlacesList from '@/components/HomePage/PlacesList'
import { Category } from '@/context/Category'
import { DarkMode } from "@/context/DarkMode";


export default function Home() {

  const {category,handleCategoryChange}=useContext(Category);
  const [radius,setRadius]=useState(100);
  const {data:session}=useSession()
  const [placeList,setPlaceList] = useState([])
  const {userLocation,setUserLocation}=useContext(UserLocationContext);
  const { isToggled, handleToggle } = useContext(DarkMode);
  
  const router = useRouter()
  useEffect(()=>{
    if(!session?.user){
      router.push("/Login")
    }
  },[session])

  useEffect(()=>{
    GetGoogleApi();
  },[category,radius])

  const GetGoogleApi=()=>{
    GlobalApi.GooglePlaceApi(category,radius,userLocation.lat,userLocation.lng).then(res=>{
      console.log(res.data.product.results)
      setPlaceList(res.data.product.results)
    })
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 h-screen'>
      <div className='p-3'>
        <h2 className={`font-bold ${isToggled ? "text-gray-300":""}`}>Quick Picks</h2>
        <CategoryData onCategoryChange={handleCategoryChange}/>
        <RangeSelection onRadiusChange={(value)=>setRadius(value)}/>
      </div>
      <div className='col-span-3'>
        <MapView placeList={placeList}/>
        <div className='md:absolute w-[90%] md:w-[70%] ml-6 md:ml-11 bottom-36 relative md:bottom-3'>
        <PlacesList placeList={placeList}/>
        </div>
      </div>
    </div>
  )
}