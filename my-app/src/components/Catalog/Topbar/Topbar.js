import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar bg-dark text-light py-3">
        <div className="container-fluid d-flex align-items-center gap-3">
          
          {/* Filter Dropdowns */}
          <div className="filters d-flex gap-3">
            {/* Genre Filter */}
            <div className="dropdown">
              <button 
                className="btn btn-dark dropdown-toggle" 
                type="button" 
                id="genreDropdown" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Genre
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="genreDropdown">
                <li><button className="dropdown-item" type="button">Rock</button></li>
                <li><button className="dropdown-item" type="button">Pop</button></li>
                <li><button className="dropdown-item" type="button">Metal</button></li>
                <li><button className="dropdown-item" type="button">Indie</button></li>
                <li><button className="dropdown-item" type="button">Alternative</button></li>
              </ul>
            </div>

            {/* Release Filter */}
            <div className="dropdown">
              <button 
                className="btn btn-dark dropdown-toggle" 
                type="button" 
                id="releaseDropdown" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Release
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="releaseDropdown">
                <li><button className="dropdown-item" type="button">2023</button></li>
                <li><button className="dropdown-item" type="button">2022</button></li>
                <li><button className="dropdown-item" type="button">2021</button></li>
                <li><button className="dropdown-item" type="button">2020</button></li>
                <li><button className="dropdown-item" type="button">2010s</button></li>
                <li><button className="dropdown-item" type="button">2000s</button></li>
              </ul>
            </div>

            {/* Artist Names Filter */}
            <div className="dropdown">
              <button 
                className="btn btn-dark dropdown-toggle" 
                type="button" 
                id="artistDropdown" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Artist Names
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="artistDropdown">
                <li><button className="dropdown-item" type="button">Artist A</button></li>
                <li><button className="dropdown-item" type="button">Artist B</button></li>
                <li><button className="dropdown-item" type="button">Artist C</button></li>
                <li><button className="dropdown-item" type="button">Artist D</button></li>
              </ul>
            </div>
          </div>

          {/* Apply Button */}
          <button className="btn btn-success apply-button ms-auto" type="button">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
