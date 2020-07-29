import React from 'react'
import styles from "./page1.css"

function Page1() {
    return (
        <div class='page1'>
            <h6 class='mainPageHeading6'> CONNECTING THE DISCONNECTED </h6>
    
            <h1 class='mainHeading'>
            <span class="orangeText"> Vyorius </span>brings<br /> <span class="textinSingleline">
            unmanned robots <span class="orangeText"> together</span></span>, wherever they 
            </h1>
            <p class="mainPageP"> With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re Delivering </p>
            <button type="button" class=" btn  button1"> Try Vyorius </button>
            <button class=" btn button2"> Learn More </button>
            <p class="deliveryLink"> <span> Need to order  ? <a href="#page2" class="link1"> Get Started </a></span> </p>
        </div>
    )
}

export default Page1
