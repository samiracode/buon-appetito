const express = require('express')
const axios = require('axios')
const app = express()

const fetchMeals = (search)=>{
const meals = axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
return meals
}
app.get('/:meal', (req,res)=>{
    const meal = req.params.meal
    const data =
    res.json(fetchMeals(meal)).end()
    
    
    
    
    
});

app.listen(5000,()=>console.log('server is runnin on port 5000'))
