const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  level: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  try {
    return await Course
    .find({})
    .and([{ tags: 'express' }, { tags: 'backend' }])
    .count()
  } catch (error) {
    console.log(error.message)
  }
  
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
