const mongoose = require('mongoose');

// modifier URI
mongoose.connect('mongodb+srv://xxxx:xxxx@cluster0.xxxx.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.error(' Could not connect to MongoDB'))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isFinished: Boolean,
  level: Number
})

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  try {
    return await Course.find({ })
  } catch (error) {
     console.log( error )
  }
}

async function run() {
  const courses = await getCourses();
  console.log(`Total backend: ${courses}`)
}

run();