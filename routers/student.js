const express = require("express");
const router = express.Router();
const studentSchema = require("../models/studentSchema");

router.get("/list", async function (req, res) {
  try {
    const students = await studentSchema.find();
    res.send(students);
  } catch (err) {
    res.send("Error occured while fetching students " + err);
  }
});

router.post("/add", async function (req, res) {
  try {
    const student = new studentSchema({
      name: req.query.name,
      rollNo: req.query.rollNo,
      id: req.query.id,
    });

    await student.save();

    res.json(student);
  } catch (err) {
    res.json("Error occured while creating  students " + err);
  }
});

router.get("/:id", async function (req, res) {
  try {
    const students = await studentSchema.findById(req.params.id);
    res.send(students);
  } catch (err) {
    res.send("Error occured while fetching students " + err);
  }
});

module.exports = router;
