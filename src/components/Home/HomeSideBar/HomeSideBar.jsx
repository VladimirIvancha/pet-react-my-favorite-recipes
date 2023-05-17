import React from 'react'
import { homeSideBarInitialData } from '../../../utils/initialData'
import HomeSideBarItem from './HomeSideBarItem/HomeSideBarItem'

function HomeSideBar({ setRecipeType }) {


  return (
    <section className='homeSideBar'>
      <nav className='mainNavigationWrapper asideMainNavigation'>
        <div className="mainNavigationSection">
          <div className="section_title">Почитать</div>
          {
            homeSideBarInitialData.map((item) => (
                <HomeSideBarItem key={item.id} item={item} setRecipeType={setRecipeType} />
            ))
          }
        </div>
        <div className="mainNavigationSection"></div>
      </nav>
    </section>
  )
}

export default HomeSideBar