import React from 'react'
import Card1 from './CardOne.jsx'
import Card2 from './CardTwo.jsx'
import './app.css'

const App = () => {
  return (
    <div className='comp'>
        <div className='card1'>
        <Card1 imgURL = "https://static.toiimg.com/photo/53110049.cms" title="Cheese Pizza"  description="A delicious cheesy pizza topped with fresh veggies." price= "₹299" rating= "4.5" />
        </div>

        <div className='card1'>
        <Card2 imgURL = "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg" title="Chicken Pizza"  description="A delicious chicken pizza topped with fresh chicken." price= "₹349" rating= "4.8" />
        </div>


    </div>
  )
}

export default App