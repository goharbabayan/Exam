import { CardComponent } from "./Cardcomponent.js";

const ApiKey = "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3";
const url = "https://api.pixels.com/v1/serach";
// const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);


const category = document.querySelectorAll("#category");
console.log(category);
 

function displayRadioValue() {
    const card = document.getElementById("card");
    category.forEach(item => {
        for (let i =0; i< 4; i++){
        if(item[i].checked){
            console.log(checked);
        card.innerHTML = CardComponent.render()
        }
    }
    })
}
displayRadioValue()


fetch("https://api.pexels.com/v1/search?query=nature&per_page=5", {
    method: "GET",
    headers : {
        "Authorization" : "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3",
    }
    }).then(res => res.json()).then(data => console.log(data.page))
    

fetch("https://api.pexels.com/v1/search?query=nature&per_page=5", {
    method: "GET",
    headers : {
        "Authorization" : "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3",
    }
    }).then(res => res.json()).then(data => console.log(data.photos))


async function getData() {
    await fetch("https://api.pexels.com/v1/search?query=nature&per_page=5", {
        method: "GET",
        headers : {
            "Authorization" : "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3",
        }
        }).then(res => res.json()).then(data => CardComponent.render(data.photos))
        
} 

getData()

function shuffle(cards) {
    cards.forEach(card => {
      card.style.order = Math.floor(Math.random() * cards.length).toString();
    });
  }