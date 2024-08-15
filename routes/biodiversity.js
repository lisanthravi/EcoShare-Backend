const express = require('express');
const router = express.Router();
const Biodiversity = require('../models/Biodiversity');

// Get all tips and projects
router.get('/', async (req, res) => {
    try {
        const tips = await Biodiversity.find();
        res.json(tips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new tip or project
router.post('/', async (req, res) => {
    const tip = new Biodiversity({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const newTip = await tip.save();
        res.status(201).json(newTip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
