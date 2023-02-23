import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react'

const FoodBox = ({food, foods, setFoods}) => {

    const deleteFood = (thisFood) =>{
        let newFoods = [...foods].filter((food) => food !== thisFood)
        setFoods(newFoods)

    }
    
    return (
      <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={60} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          <Button type="primary" onClick={()=>deleteFood(food)}> Delete </Button>
        </Card>
      </Col>
    );
  }
  

export default FoodBox;
