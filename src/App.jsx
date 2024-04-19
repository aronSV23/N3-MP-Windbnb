import { useState } from 'react'
import logo from '../public/logo.svg'
import './App.css'

function App() {
  const [esInput, setEsInput] = useState('')

  const dataPrueba = {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": true,
    "title": "Stylist apartment in center of the city",
    "rating": 4.4,
    "maxGuests": 3,
    "type": "Entire apartment",
    "beds": 2,
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
  }

  const showOptions = (e) => {
    setEsInput(e.target.id)
  }

  return (
    <>
      <header className='header_container'>
        <nav className='nav_bar'>
          <div className='logo'>
            <img src={logo} alt="logo windbnb" />
          </div>
          <div className='options'>
            <ul className='search_bar_mini'>
              <li className='item_search_mini'>
                <input type="text" placeholder='Location' readOnly/>
              </li>
              <li className='item_search_mini'>
                <input type="text" placeholder='Guests' readOnly/>
              </li>
              <li className='item_search_mini'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <h2 className='country_location'>Stays in Finland</h2>

      <main className='card_container'>
        <ul className='card_list'>
          <li className='card_item'>
            <figure>
              <img src={dataPrueba.photo} alt={dataPrueba.title} />
            </figure>
            <div className='title_rating_container'>
              <div>
                {dataPrueba.superHost &&
                  <span className='card_superhost'>Super Host</span>
                }
                <span className='card_type_beds'>{dataPrueba.type}.{dataPrueba.beds}</span>

              </div>
              <span className='card_rating'><i className="fa-solid fa-star"></i>{dataPrueba.rating}</span>
            </div>
            <h3 className='card_title'>
              {dataPrueba.title}
            </h3>
          </li>
        </ul>
      </main>

      <div className='modal_search'>
        <ul className='search_bar'>
          <li className='item_search'>
            <div onClick={showOptions} className='item_search_location'>
              <label htmlFor="location">LOCATION</label>
              <input type="text" placeholder='Add location' id='location' autoComplete='off'/>
            </div>
            {esInput === 'location' &&
              <section className='section_locations'>
                <ul className='location_list'>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Helsinki, Finland</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Turku, Finland</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Oulul, Finland</p>
                  </li>
                </ul>
              </section>
            }
          </li>
          <li className='item_search'>
            <div onClick={showOptions} className='item_search_guests'>
              <label htmlFor="guests">GUESTS</label>
              <input type="text" placeholder='Add guests' id='guests' readOnly />
            </div>
            {esInput === 'guests' &&
              <section className='section_guests'>
                <div className='btn_guest'>
                  <span className='btn_title'>Adults</span>
                  <span className='btn_subtitle'>Ages 13 or above</span>
                  <div className='btns'>
                    <button><i className="fa-solid fa-plus"></i></button>
                    <span>0</span>
                    <button><i className="fa-solid fa-minus"></i></button>
                  </div>
                </div>
                <div className='btn_guest'>
                  <span className='btn_title'>children</span>
                  <span className='btn_subtitle'>Ages 2-12</span>
                  <div className='btns'>
                    <button><i className="fa-solid fa-plus"></i></button>
                    <span>0</span>
                    <button><i className="fa-solid fa-minus"></i></button>
                  </div>
                </div>
              </section>
            }
          </li>
          <li className='item_search'>
            <div className='item_search_button'>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
                search
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
