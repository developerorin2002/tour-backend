const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const hotels = require('./Data/travelcategory.json')
app.get('/hotelcategory',(req,res)=>{
    res.send(hotels)
})

const allHotels = require('./Data/travelPlace.json');
app.get('/hotels/:name',(req , res)=>{
    const names = req.params.name;
    console.log(names)
    const filteredHotel = allHotels.filter(hotel => hotel.category_name === names);
    res.send(filteredHotel);
})
// get specifically hotel / single hotel 

app.get('/hotel/:id',(req,res)=>{
    const getId = req.params.id;
    const findHotel = allHotels.find(hotel => hotel.hotel_id == getId);
    res.send(findHotel);
})

app.listen(port,()=>{
    console.log(`Hotel Server Running ON Port ${port}`)
})