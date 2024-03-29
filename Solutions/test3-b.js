const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-td')
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.error(' Could not connect to MongoDB'))


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
  return await Course
    .find({ tags: { $eq: ['express', 'backend'] } })
    .count()
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
