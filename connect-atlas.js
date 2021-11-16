const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://denisdupont:pass@cluster0.c1gwa.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.error(' Could not connect to MongoDB'))

const basicSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isFinished: Boolean,
  level: Number
})

const Basic = mongoose.model('Basic', basicSchema);

async function getCourses() {
  try {
    return await Basic
    .find({ })
    .count();
  } catch (error) {
    console.log(error)
  }

}

async function run() {
  try {
    const courses = await getCourses();
    console.log(`Total backend: ${courses}`)
  } catch (error) {
    console.log(error)
  }
}

run();