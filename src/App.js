import React, { useState } from "react";
import MealList from "./MealList";
import "./App.css";
import Darkmode from "./Darkmode";
import Logo from './logo';
import Main from './main';
import Footer from './footer'


function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

      //e is the event in the function
function handleChange(e){
        if(e.target.value<0){
            window.alert("Calories cannot be negative!")
        }          
        else if(e.target.value.length===4 && e.target.value<1600){
          window.alert("Minimum amount of recommended calories per day is 1600")
          setCalories(1600)
        }        
        else if(e.target.value>2500){
            window.alert("Maximum amount of recommended calories per day is 2500")
            setCalories(2500)
        }
        else if(e.target.value.length===5){
            window.alert("Calories shouldn't exceed 4 digits")
        }
        else setCalories(e.target.value);  
      
  }


  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }



  return (
    <div className="App">
      <nav>
        <Logo />
        <Darkmode />
      </nav>
      <section className="controls">
        <h2 class="greeting">Welcome to Eat Well</h2>
        <p> Please input your calories below</p>
        <input
            maxLength={4}
            min="0"
            max="3000"
            type="number"
            pattern="[0-9]"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
