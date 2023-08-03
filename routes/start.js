const express = require('express');
const router = express.Router();
const InvestorSignup = require('../models/InvestorSignup');

// ROUTE 1: Get all the notes using GET "/api/notes/fetchallinvestors" Login required
router.get('/fetchallinvestors', async (req, res) => {
    try {
        const Details = await InvestorSignup.find();
        res.json(Details)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/get-investor/:id', async (req, res) => {
    try {
        const noSpecialCharacters = String(req.params.id.replace(/[^a-zA-Z0-9_.-]/g, ''));

        // find the note to be updated and update it
        const query = { name: noSpecialCharacters };
        let Inverstor = await InvestorSignup.findOne(query);
        if (!Inverstor) { return res.status(400).send("Not Found") }

        res.json(Inverstor);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Create a New Account using POST "/api/investor-signup" No Login required
router.post('/investor-signup', async (req, res) => {

    try {

        const { username, name, email, phone, role, companyName, socialMediaHandle, industries, industriesType, chequesSize, angleSyndicate, leadRounds, shortIntro, topInvestments } = req.body;
        // if there are error return bad request and error

        const Details = new InvestorSignup({
            username, name, email, phone, role, companyName, socialMediaHandle, industries, industriesType, chequesSize, angleSyndicate, leadRounds, shortIntro, topInvestments
        })

        const saveDetails = await Details.save()

        res.json(saveDetails)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: fTo test the backend and API
router.post('/testing', async (req, res) => {

    try {

        const { name } = req.body;
        // if there are error return bad request and error


        res.json(name + ' done')

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router