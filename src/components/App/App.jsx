import React from 'react'
import RecipeItemsInitialData from '../../utils/initialData'
import RecipeItem from '../RecipeItem/RecipeItem'

function App() {
  return (
    <div className='App'>
      {
        RecipeItemsInitialData.map(item => (
          <RecipeItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default App