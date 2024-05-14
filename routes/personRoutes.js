const express = require("express");
const router = express.Router();
const Person = require("../models/personModel");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved successfully");
    res.status(201).json(response);
  } catch (error) {
    console.log("data failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find({});
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log("data failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const response = await Person.find({ work: workType });
      console.log("data fetched successfully");

      res.status(200).json(response);
    }
    res.status(404).json("Invalid workType details");
  } catch (error) {
    console.log("data failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const updateData = await Person.findByIdAndUpdate(id, data, { new: true });

    if (!updateData) {
      res.status(404).json("Person not found");
    }
    console.log("Update data");
    res.status(200).json(updateData);
  } catch (error) {
    console.log("data failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await Person.findByIdAndDelete(id);

    if (!deleteUser) {
      res.status(404).json("Person not found");
    }

    console.log("Deleted Successfully");
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log("data failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
