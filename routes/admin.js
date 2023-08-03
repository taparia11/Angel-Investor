const express = require('express');
const router = express.Router();
const InvestorSignup = require('../models/InvestorSignup');

// ROUTE 1: Get all the Investors using GET "/api/invest/fetchallinvestors" Login required
router.get('/fetchallinvestors', async (req, res)=>{
    try {
        const Details = await InvestorSignup.find();
        res.json(Details)    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: fTo test the backend and API
router.post('/testing', async (req, res)=>{

    try {
    
    const{name} = req.body;
    // if there are error return bad request and error

   
    res.json(name + ' done') 
        
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})


module.exports = router