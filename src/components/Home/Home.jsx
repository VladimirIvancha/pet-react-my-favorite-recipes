import React from 'react'
import { RecipeItemsInitialData } from '../../utils/initialData'
import NavBarStickyTop from '../NavBarStickyTop/NavBarStickyTop'
import RecipeItem from '../RecipeItem/RecipeItem'
import HomeSideBar from './HomeSideBar/HomeSideBar'

function Home() {
  return (
    <section className="home">
      <NavBarStickyTop />
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <HomeSideBar />
          </div>
          <div className="col-8">
            {
              RecipeItemsInitialData.map(item => (
                <RecipeItem key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home