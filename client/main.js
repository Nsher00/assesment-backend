const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const animalsBtn = document.getElementById('animalsButton')
const animalPost = document.getElementById('animal-form')
const animalPostName = document.getElementById('post-animal-name')
const animalPostSpeed = document.getElementById('post-animal-speed')
const deleteAnimalForm = document.getElementById('delete-fortune-form')
const speedAnimalForm = document.getElementById('speed-form')
const deleteAnimalInput = document.getElementById('delete-fortune')
const animalSpeedInput = document.getElementById('animal-speed')
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            console.log(res.data);
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getAnimal = () => {
    axios.get("http://localhost:4000/api/animal/")
        .then(res => {
            const data = res.data;
            alert(JSON.stringify(data));
    });
};

animalPost.addEventListener('submit', (event)=>{
    event.preventDefault()

    const newAnimal ={
        animal: animalPostName.value,
        speed: animalPostSpeed.value
    }
    
    axios.post('http://localhost:4000/api/animal', newAnimal)
    .then((res) =>{
        alert('posted new animal to list.')
        console.log(newAnimal);
    })
    .catch((err) => {
        console.log('backend brokie');
    });
})

deleteAnimalForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    let animal = deleteAnimalInput.value

    axios.delete('http://localhost:4000/api/animal/' + animal).then((result)=>{
        console.log(`the animal ${animal} has been deleted from the database.`)
        console.log(result.data);
    })

})

speedAnimalForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    let animal = animalSpeedInput.value

    axios.put('http://localhost:4000/api/animal?animal=' + animal).then((result)=>{
        alert('The animal speed is now super!')
        console.log(result.data);
    })

})


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
animalsBtn.addEventListener('click', getAnimal)