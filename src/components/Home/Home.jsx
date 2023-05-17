import React, { useState } from 'react'
import { RecipeItemsInitialData } from '../../utils/initialData'
import NavBarStickyTop from '../NavBarStickyTop/NavBarStickyTop'
import RecipeItem from '../RecipeItem/RecipeItem'
import HomeSideBar from './HomeSideBar/HomeSideBar'

function Home() {

  const [recipeType, setRecipeType] = useState('all');

  return (
    <section className="home">
      <NavBarStickyTop />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-4">
            <HomeSideBar setRecipeType={setRecipeType} />
          </div>
          <div className="col-12 col-sm-8">
            {
              RecipeItemsInitialData.map(item => (
                recipeType === 'all' ?
                  <RecipeItem key={item.id} item={item} />
                  :
                  item.type === recipeType &&
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