import React from 'react'
import RecipeItemIngredientsLI from './RecipeItemIngredientsLI/RecipeItemIngredientsLI'
import RecipeItemProcessLI from './RecipeItemProcessLI/RecipeItemProcessLI'

function RecipeItem({ item }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center fs-1">{item.title}</div>
      </div>

      <div className="row">
        <div className={item.imgClass}>
          <img className="w-100" src={item.img} alt={item.title} />
        </div>
        <div className="col-12 col-md-4 text-md-start">
          <h5 className='text-center'>Состав</h5>
          <ul>
            {
              item.ingredients?.map(item => (
                <RecipeItemIngredientsLI key={item.id} item={item} />
              ))
            }
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-md-start">
          <h5 className='text-center'>Приготовление</h5>
          <ol>
            {
              item.process?.map(item => (
                <RecipeItemProcessLI key={item.id} item={item} />
              ))
            }
          </ol>
        </div>
      </div>

    </div>
  )
}

export default RecipeItem