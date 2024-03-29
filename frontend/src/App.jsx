import reviewArr from "./assets/reviews_data.json"
import {ReviewList} from "./components/ReviewList.jsx"

function App() {


  return (
    <div className="flex justify-items-center mx-52 my-10">
      <ReviewList arrToFetch={reviewArr}/>
    </div>
  )
}

export default App
