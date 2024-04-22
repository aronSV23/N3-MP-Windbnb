import { useEffect, useState } from 'react'
import flats from '../public/stays.json'
import './App.css'
import { CardContainer } from './components/CardContainer/CardContainer'
import { ModalSearch } from './components/ModalSearch/ModalSearch'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRooms, setShowRooms] = useState([])
  const [adultGuests, setAdultGuests] = useState(0)
  const [childGuests, setChildGuests] = useState(0)
  const [guests, setGuests] = useState(adultGuests + childGuests)
  const [searchLocation, setSearchLocation] = useState('')

  const flatsFilter = () => {
    if (guests > 0 && searchLocation != '') {
      const citySelected = searchLocation.trim().split(',')[0].trim();
      const rs = flats.filter(flat => flat.city.toLowerCase() === citySelected.toLowerCase() && flat.maxGuests >= guests)
      setShowRooms(rs)
      setIsOpen(false)
      return
    }

    if (guests > 0 && searchLocation === '') {
      const rs = flats.filter(flat => flat.maxGuests >= guests)
      setShowRooms(rs)
      setIsOpen(false)
      return
    }

    if (guests === 0 && searchLocation != '') {
      const citySelected = searchLocation.trim().split(',')[0].trim();
      const rs = flats.filter(flat => flat.city.toLowerCase() === citySelected.toLowerCase())
      setShowRooms(rs)
      setIsOpen(false)
      return
    }

    setShowRooms(flats)
    setIsOpen(false)
  }

  useEffect(() => {
    flatsFilter()
  }, [])

  return (
    <>
      <header className='header_container'>
        <NavBar setIsOpen={setIsOpen} searchLocation={searchLocation} guests={guests} />
        <div className='header_subtitle'>
          <h2 className='country_location'>Stays in Finland</h2>
          <span className='locations_found'>{showRooms.length}+ stays</span>
        </div>
      </header>


      <CardContainer arreglo={showRooms} />

      {isOpen &&
        <ModalSearch setIsOpen={setIsOpen} flats={flats} guests={guests} setGuests={setGuests} searchLocation={searchLocation} setSearchLocation={setSearchLocation} flatsFilter={flatsFilter} setAdultGuests={setAdultGuests} setChildGuests={setChildGuests} adultGuests={adultGuests} childGuests={childGuests} />
      }
    </>
  )
}

export default App
