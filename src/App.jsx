import logo from '../public/logo.svg'
import './App.css'

function App() {

  return (
    <>
      <header className='header_container'>
        <nav className='nav_bar'>
          <div className='logo'>
            <img src={logo} alt="logo windbnb" />
          </div>
          <div className='options'>
            <ul className='search_bar_mini'>
              <li className='item_search_mini'>Location </li>
              <li className='item_search_mini'>Guests</li>
              <li className='item_search_mini'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
            </ul>
          </div>
        </nav>
      </header>


      <main className='card_container'>
        <div className='card_item'>

        </div>
      </main>

      <div className='modal_search'>
        <ul className='search_bar'>
          <li className='item_search item_search_location'>
            <label htmlFor="location">LOCATION</label>
            <input type="text" placeholder='Add location' id='location' />
          </li>
          <li className='item_search item_search_guests'>
            <label htmlFor="guests">GUESTS</label>
            <input type="text" placeholder='Add guests' id='guests' readOnly />
          </li>
          <li className='item_search item_search_button'>
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
              search
            </button>
          </li>
        </ul>
        <body className='conditional_render'>
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
          <section></section>
        </body>
      </div>
    </>
  )
}

export default App
