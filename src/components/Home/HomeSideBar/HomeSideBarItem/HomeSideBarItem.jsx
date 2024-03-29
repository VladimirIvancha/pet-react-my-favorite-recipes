import React from 'react'

function HomeSideBarItem({ item, setRecipeType }) {

  function sidebarItemClick() {
    setRecipeType(item.type);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className={item.className}>
        <button className={item.titleClassName} type='button' onClick={sidebarItemClick}>
          {item.title}
        </button>
        <button className="categoryHeader_button" type="button">
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="categoryHeader_chevron">
            <path d="m1 4 4.293 4.293a1 1 0 0 0 1.414 0L11 4" stroke="#241F20" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default HomeSideBarItem