import React from 'react'
import classes from './meal-grid.module.css'

const MealsGrid = ({meals}) => {
  return (
   <ul className={classes.meals}> 
{meals.map(meal => <li key={meal.id}>

</li>)}
   </ul>
  )
}

export default MealsGrid