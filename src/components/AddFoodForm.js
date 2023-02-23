import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({newFood, foods, setFoods, hide}) {
    // const [allFoods, setFoods] = useState(foods)

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleNameInput = e => setName(e.target.value);
 
    const handleImgInput = e => setImage(e.target.value);
 
    const handleCaloriesInput = e => setCalories(e.target.value);
 
    const handleServingsInput = e => setServings(e.target.value);


    const clearForm = () => {
        setName("")
        setImage("")
        setCalories(5)
        setServings(0)
    }

    const AddNewFood = (newFood) =>{
        if (!newFood.name) {
            setErrorMessage(!errorMessage)
            clearForm()
            return
        }
    
        let newFoods = [newFood, ...foods]
        console.log("New array ===>", newFoods)
        setFoods(newFoods)

    
        clearForm()
        setErrorMessage(false)

    }

    const handleSubmit = (e) => {       
        e.preventDefault();
        const newFood = { name, calories, image,  servings };
    
        AddNewFood(newFood)
     
        console.log("Submitted: ", newFood);
      }
    





  return (
    <form className={hide ? 'hidden': ''} style={{width: "30%"}} onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name = "name" value={name} type="text" onChange={handleNameInput} />


      <label>Calories</label>
      <Input name = "calories" value={calories} type="text" onChange={handleCaloriesInput} />

      
      <label>Image</label>
      <Input name = "image" value={image} type="text" onChange={handleImgInput} />


      <label>Servings</label>
      <Input name = "servings" value={servings} type="text" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;