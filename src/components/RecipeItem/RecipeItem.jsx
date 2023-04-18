import React from 'react'
import RecipeItemIngredientsLI from './RecipeItemIngredientsLI/RecipeItemIngredientsLI'
import RecipeItemProcessLI from './RecipeItemProcessLI/RecipeItemProcessLI'

function RecipeItem({ item }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center text-light fs-1 bg-primary rounded mt-4 mb-2 py-2">{item.title}</div>
      </div>

      <div className="row">
        <div className={item.imgClass}>
          <img className="w-100 rounded mb-2" src={item.img} alt={item.title} />
        </div>
        <div className="col-12 col-lg-5 col-xl-4 text-lg-start bg-info py-4 px-3 mb-2 rounded">
          <h5 className='text-center'>Состав</h5>
          <ul>
            {
              item.ingredients?.map(item => (
                <RecipeItemIngredientsLI key={item.id} item={item} />
              ))
            }
          </ul>
          <h6 className='text-start ms-3'>{item.subtitle}</h6>
          <ul>
            {
              item.ingredientsAdditional?.map(item => (
                <RecipeItemIngredientsLI key={item.id} item={item} />
              ))
            }
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-lg-start bg-secondary text-light rounded py-4">
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