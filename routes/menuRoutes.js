const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItemModel");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const item = new MenuItem(data);
    const response = await item.save();

    console.log("data saved successfully");
    res.status(201).json(response);
  } catch (error) {
    console.log("error occured", error);
    res.status(500).json({ error: "Interal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const getData = await MenuItem.find({});
    console.log("data fetched");
    res.status(200).json(getData);
  } catch (error) {
    console.log("error occured", error);
    res.status(500).json({ error: "Interal Server Error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste === "Spicy" || taste === "Sour" || taste === "Sweet") {
      const response = await MenuItem.find({ taste: taste });
      console.log("data fetched successfully");
      res.status(200).json(response);
    }

    res.status(404).json("invalid taste type")
  } catch (error) {
    console.log("error occured", error);
    res.status(500).json({ error: "Interal Server Error" });
  }
});

module.exports = router;
