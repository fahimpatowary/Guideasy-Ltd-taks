import { Inter } from 'next/font/google'
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'
import { IoIosArrowDown, IoMdCloseCircle, IoMdRepeat } from "react-icons/io";


const inter = Inter({ subsets: ['latin'] })

const contryList = [
  {
    id:1,
    name: "Dhaka",
    location: "Uttara, Dhaka"
  },
  {
    id:2,
    name: "india",
    location: "BOM, Chhatrapati Shivaji International Airport India"
  },
  {
    id:3,
    name: "UK",
    location: "222 --- Uttara, Dhaka"
  },
  {
    id:4,
    name: "USA",
    location: "222 --- BOM, Chhatrapati Shivaji International Airport India"
  },
]

export default function Home() {
  const [isItOneway, setIsItOneway] = useState(true);
  const [fromCountry, setFromCountry] = useState("Bangladesh");
  const [toCountry, setToCountry] = useState("India");
  const [fromLocation, setFromLocation] = useState("uttara, Dhaka")
  const [toLocation, setToLocation] = useState("DEL, Indira Gandhi International Airport India")
  const [isFormSeclectVisibal, setISFormSelectionVisibal] = useState(false);
  const [isToSeclectVisibal, setISToSelectionVisibal] = useState(false);

  const ChageWay = () =>{
    if(isItOneway === true){
      setIsItOneway(false)
    }else{
      setIsItOneway(true)
    }
  }

  const makeFromSelctVisibal = () =>{
    if(!isFormSeclectVisibal){
      setISFormSelectionVisibal(true)
      setISToSelectionVisibal(false)
    }else{
      setISFormSelectionVisibal(false)
    }
  }

  const makeToSelctVisibal = () =>{
    if(!isToSeclectVisibal){
      setISToSelectionVisibal(true)
      setISFormSelectionVisibal(false)
    }else{
      setISToSelectionVisibal(false)
    }
  }

  const ChangeFromToData = () =>{
    let tempCountry = fromCountry;
    let temoLocation = fromLocation;

    setFromCountry(toCountry)
    setFromLocation(toLocation)

    setToCountry(tempCountry)
    setToLocation(temoLocation)
  }

  return (
    <main
      className={`min-h-screen p-24 ${inter.className}`}
    >
      <div className="w-full max-w-5xln font-mono text-sm bg-white p-6 rounded-lg" >
        {/* selecr way */}
        <div className='mb-3'>
          <ul className='flex'>
            <li className={`mb-0 rounded-[24px] px-2 flex-6 cursor-pointer ${isItOneway ? "bg-blue-200" : null}`} onClick={ChageWay}> 
              {/* <input type='checkbox' className='bg-white colo-black border-1 border-gray-800 rounded-[50%] me-2' /> */}
              <span className='font-bold text-lg'>One Way</span>
            </li>
            <li className={`mb-0 rounded-[24px] px-2 flex-6 cursor-pointer ${!isItOneway ? "bg-blue-200" : null}`} onClick={ChageWay}>
              {/* <input type='checkbox' className='bg-white colo-black border-[1px] border-gray-800 rounded-[50%] me-2' /> */}
              <span className='font-bold text-lg'>One Way</span>
            </li>
          </ul>
        </div>

        {/* location date time */}
        <div className="rounded-xl border-[1px] border-gray-300 flex">
          <div className='w-3/12 relative border-e-2 border-gray-300 p-3 px-8 hover:bg-blue-200 cursor-pointer'>
            <p className='text-gray-700 mb-3'>From</p>

            <div className='mb-2 relative cursor-pointer' onClick={makeFromSelctVisibal}>
              <h2 className='font-bold text-2xl mb-1'>{fromCountry}</h2>
              <p className='truncate'>{fromLocation}</p>

              <div className={`absolute top-10 left-0 bg-white w-full border-2 max-h-48 rounded-md overflow-y-auto ${!isFormSeclectVisibal ? 'invisible' : 'visible' }`}>
                {contryList.map((item)=>(
                  <div className='border-b-2 p-2 border-gray-300 mb-2 pb-2 cursor-pointer hover:bg-gray-300' 
                       key={item.id}
                       onClick={()=>{
                        setFromCountry(item.name);
                        setFromLocation(item.location);
                      }}
                  >
                    <h2 className='font-[600] text-lg'>{item.name}</h2>
                    <p className='truncate text-[11px]'>{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* <select className='bg-white w-full outline-none' name="cars" id="cars">
              <option className='blcok' value="volvo">
                <div children>
                  <h2>Bangladesh</h2>
                  <p>BOM, Chhatrapati Shivaji International Airport India</p>
                </div>
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select> */}
            <div className='absolute top-[37%] left-[94%]' onClick={ChangeFromToData}>
              <IoMdRepeat className='text-4xl bg-white rounded-lg' />
            </div>
          </div>

          <div className='w-3/12 border-e-2 border-gray-300 p-3 px-8 hover:bg-blue-200 cursor-pointer' onClick={makeToSelctVisibal}>
            <p className='text-gray-700 mb-3'>To</p>

            <div className='mb-2 relative cursor-pointer'>
              <h2 className='font-bold text-2xl mb-1'>{toCountry}</h2>
              <p className='truncate'>{toLocation}</p>

              <div className={`absolute top-10 left-0 bg-white w-full border-2 max-h-48 rounded-md overflow-y-auto ${!isToSeclectVisibal ? 'invisible' : 'visible' }`}>
                {contryList.map((item)=>(
                  <div className='border-b-2 p-2 border-gray-300 mb-2 pb-2 cursor-pointer hover:bg-gray-300' 
                       key={item.id}
                       onClick={()=>{
                        setToCountry(item.name);
                        setToLocation(item.location);
                      }}
                  >
                    <h2 className='font-[600] text-lg'>{item.name}</h2>
                    <p className='truncate text-[11px]'>{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='w-2/12 border-e-2 border-gray-300 p-3 hover:bg-blue-200 cursor-pointer'>
            <p className='text-gray-700 mb-7 flex'>
              Departure 
              <IoIosArrowDown className='ms-3 text-Emerald-700' />
              {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
            </p>
            <input className='w-full outline-none text-xl' type="date" id="birthdaytime" name="birthdaytime"></input>
          </div>

          <div 
              className='w-2/12 border-e-2 border-gray-300 p-3 hover:bg-blue-200 cursor-pointer' 
              onClick={()=>{if(isItOneway){setIsItOneway(false)}}}
          >
            <p className='text-gray-700 mb-4 flex'> 
              Return 
              <IoIosArrowDown  className='text-xl ms-2 mr-[4rem]'/> 
              {!isItOneway && <IoMdCloseCircle className='text-xl cursor-pointer z-10' onClick={ChageWay} />}
            </p>
            
            
            {!isItOneway ? 
              <input className='w-full outline-none text-xl mt-3' type="date" id="birthdaytime" name="birthdaytime"></input>
              : <span>Tap to add a return date for bigger discounts</span>
            }
          </div>

          <div className='w-2/12 p-3 hover:bg-blue-200 cursor-pointer'>
            <p className='text-gray-700 mb-3'>From</p>

            <div className='mb-2 relative cursor-pointer'>
              <h2 className='font-bold text-2xl mb-1'>1 traveler</h2>
              <p className='truncate'>Economy/Premium Economy</p>
            </ div>
          </div>
        </div>

      </div>
    </main>
  )
}
