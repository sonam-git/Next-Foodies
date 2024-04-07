// it works but we are not using it in this application for loading
import classes from '../meals/loading.module.css'

const MealsLoadingPage = () => {
  return (
  <p className={classes.loading}>Fetching Meals...</p>
  )
}

export default MealsLoadingPage;