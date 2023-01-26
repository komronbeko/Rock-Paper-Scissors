const score = document.querySelector("#score");
const images = document.querySelector(".images");
const imagesChild = images.querySelectorAll("div");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const rectangle = document.querySelector(".rectangle");
const overall = document.querySelector(".overall");
const replayBtn = document.querySelector(".replayBtn")





imagesChild.forEach(item=>{
    item.addEventListener("click", ()=>{
        randomNumber = Math.ceil(Math.random() * 3);
        
        if(item.className === "paper"){
            let a = item.id
            if(randomNumber == 2){
                rock.classList.add("remove")
                overall.innerHTML = `<h2 class="case1">Loose</h2>`
            } else if (randomNumber == 3){
                scissors.classList.add("remove")
                overall.innerHTML = `<h2 class="case2">Win!</h2>`
            } else{
                overall.innerHTML = `<h2 class="case3">Draw</h2>`
            }
                                
        } else if(item.className === "scissors"){
            let a = item.id
            if(randomNumber == 1){
                rock.classList.add("remove")
                overall.innerHTML = `<h2 class="case1">Win!</h2>`
            } else if (randomNumber == 3){
                paper.classList.add("remove")
                overall.innerHTML = `<h2 class="case2">Loose</h2>`
            } else{
                overall.innerHTML = `<h2 class="case3">Draw</h2>`
            }
                                
        } else if(item.className === "rock"){
            let a = item.id
            if(randomNumber == 1){
                scissors.classList.add("remove")
                overall.innerHTML = `<h2 class="case2">Loose</h2>`
            } else if (randomNumber == 2){
                paper.classList.add("remove")
                overall.innerHTML = `<h2 class="case2">Win!</h2>`
            } else{
                overall.innerHTML = `<h2 class="case3">Draw</h2>`
            }
                                
        }
    })
})

replayBtn.addEventListener("click", ()=>{
    overall.innerHTML = "";
    paper.classList.remove("remove");
    scissors.classList.remove("remove");
    rock.classList.remove("remove");
})
