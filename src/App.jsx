import { useState } from "react"
import "./App.css"
import images from "./assets/grilled-cheeseburger.jpg"


const App = () => {
    const [count, setCount] = useState(0)
    const [discount, setDiscount] = useState(0)
    return (
        <div>
            <div className="main">
                <div className="card">
                    
                    <center><img src={images} alt="" /></center>
                    <h2>Product Name : <br /> <span><center>Grilled Cheeseburger</center></span></h2>

                    <div className="one">
                        <h3>No of items :
                        <button onClick={() => setCount(count + 1)}>+</button>
                        {count}&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <button onClick={() => setCount(count - 1)}>-</button> */}
                        <button onClick={() => {if(count>0){setCount(count - 1)}else{setCount(0)}}}>-</button></h3> 
                    </div>

                    <div className="one">

                        <h3>Discount :&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => setDiscount(discount + 1)}>+</button>
                            {discount}% 
                            <button onClick={() => {if(discount>0){setDiscount(discount - 1)}else{setDiscount(0)}}}>-</button></h3>

                    </div>
                    <br />
                    <h3>Total Price : {count * 50}</h3>
                    <h3>Discount Amt : {(count * 50 * discount) / 100}</h3>
                    <h3><span>****************************</span></h3>
                    <h2><span>Final Amount : {count * 50 - (count * 50 * discount) / 100}</span></h2>
                </div>
            </div>

        </div>
    )
}

export default App
