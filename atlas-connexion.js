const axios = require("axios");
const mongoose = require('mongoose');

main().catch(err => console.log(" Huston, we have a pb ! "+ err));

async function main() {
    await mongoose.connect('mongodb+srv://xxxx:xxxx@cluster0.xxxxx.mongodb.net/playground?retryWrites=true&w=majority');
    
    const persSchema = new mongoose.Schema({
        name: String
    });

    const Pers = mongoose.model('Pers', persSchema);
      
    async function create() {
        const query = await axios.get("https://randomuser.me/api/?results=1");
        const my = new Pers({ name: query.data.results[0].name.last });
        return await my.save();
    }

    const newPers = await create();
    console.log(`create: ${newPers}`)

    async function readAll() {
        return await Pers.find();
    }
    
    const pers = await readAll();
    console.log(`People: ${pers}`);
}