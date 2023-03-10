const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way", "A friend is a present you give yourself."];

const animals = []

module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAnimal: (req, res) => {
        console.log(animals);
        res.status(200).send(animals);
    },

    addAnimal: (req,res)=>{
        console.log(req.body);
        animals.push(req.body)
        res.status(200).send(animals)
    },

    deleteAnimal: (req,res)=>{
        let animal = req.params.animal
        let index
        for (let i = 0; i < animals.length; i++) {
           let currentName = animals[i].animal
           if(currentName === animal){
            index = i
           }
        }
        if(index === undefined){
            res.status(200).send(animals)
        }else{
            animals.splice(index, 1)
            res.status(200).send(animals)
        }
    },

    animalSpeed: (req,res)=>{
        let animal = req.query.animal
        let index
        for (let i = 0; i < animals.length; i++) {
           let currentName = animals[i].animal
           if(currentName === animal){
            index = i
           }
        }
        if(index === undefined){
            res.status(400).send('animal not found')
        }else{
            animals[index].speed = 'Super ' + animals[index].speed
            res.status(200).send(animals)
        }
    }
}