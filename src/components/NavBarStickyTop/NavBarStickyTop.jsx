import React, { useState } from 'react'

function NavBarStickyTop() {

  const [isOpen, setOpen] = useState(false)

  const navbarClass = `collapse navbar-collapse justify-content-end ${isOpen && "show"}`

  function handleTogglerClick() {
    setOpen(!isOpen);
  }

  return (
    <section className="navBarStickyTop container-fluid">
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top bg-light p-3 shadow-sm">
        <div className="container-fluid bg-light bg-gradient">

          <div className="col-6 col-lg-4">
            <a className="title nav-link text-bg-warning text-center rounded fw-bold p-2" href="/">
              MyFavoriteRecipes.ru
            </a>
          </div>

          <button
            className="navbar-toggler text-dark fs-2 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleTogglerClick}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className={navbarClass} id="navbarTogglerDemo02">
            <form className="d-flex my-2 my-md-0" role="search">
              <input className="form-control me-2 border border-primary" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <button type="button" className="btn btn-outline-primary ms-md-2 btn-sm">
              Войти
              <i className="fa-solid fa-right-to-bracket ms-1"></i>
            </button>
          </div>

        </div>
      </nav>
    </section>
  )
}

export default NavBarStickyTop