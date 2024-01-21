p1 = document.getElementById("number1");
p2 = document.getElementById("number2");

b1 = document.getElementById("player1")
b2 = document.getElementById("player2")
const audio = new Audio("dice-142528.mp3");
const claps = new Audio("claps.mp3")

const LADDERS = {
    2:8,
    14:21
}

const SNAKES = {
    15:7,
    35:27

}
var gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(function(item){
    if (item.classList.contains('player1color') && item.classList.contains('player2color')){
        item.classList.add("both")
        
    }
    if(parseInt(item.textContent)%2 == 0 ){
        item.style.backgroundColor = "#d7e3fa"
    }
})




function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}



b1.addEventListener("click",()=>{
    x = generateRandomNumber();
    p1.innerHTML = x;

    let num = null;
    let oldnum = null;


    gridItems.forEach(function (item) {
        // Check if the current grid item has the "player1color" class
        if (item.classList.contains('player1color')) {
            // Log the content or do something with the grid item
            console.log('Grid item with player1color class:', item.textContent);
            let newnum = parseInt(item.textContent)
            oldnum = newnum
            num = newnum + x
            
            
        }
    });

    if (num == 48){
        
        alert("player 1 won")
        window.location.reload();
    }
    if (num <48){

        if (LADDERS.hasOwnProperty(num)) {
            num = LADDERS[num]
            
            
        }

        if (SNAKES.hasOwnProperty(num)){
            num = SNAKES[num]
        }
        
        oldnum = "" + oldnum
        num = ""+num
    

        gridItems.forEach(function (item) {
            // Check if the current grid item has the "player1color" class
            if (item.textContent === oldnum) {
                // Log the content or do something with the grid item
                item.classList.remove("player1color")    
            }
            if (item.textContent === num) {
                // Log the content or do something with the grid item
                item.classList.add("player1color")    
            }
        });
        gridItems.forEach(function(item) {
            if (item.classList.contains('player1color') && item.classList.contains('player2color')) {
                item.classList.add("both");
            } else {
                item.classList.remove("both"); // Remove "both" class from other grid items
            }
        });
        
        


        



}
    



    
    b2.removeAttribute("disabled");
    b1.setAttribute("disabled",true);
    
    
})




//button for player 2

b2.addEventListener("click",()=>{
    x = generateRandomNumber();
    p2.innerHTML = x;

    let num = null;
    let oldnum = null;
    
    gridItems.forEach(function (item) {
        // Check if the current grid item has the "player1color" class
        if (item.classList.contains('player2color')) {
            // Log the content or do something with the grid item
            console.log('Grid item with player1color class:', item.textContent);
            let newnum = parseInt(item.textContent)
            oldnum = newnum
            num = newnum + x
            
            
        }
    });

    if (num == 48){
        
        alert("pplyer2 won")
        window.location.reload();
    }
    if (num <48){

        if (LADDERS.hasOwnProperty(num)) {
            num = LADDERS[num]
        
        }
        if (SNAKES.hasOwnProperty(num)){
            num = SNAKES[num]
        }
        
    oldnum = "" + oldnum
    num = ""+num
    

    gridItems.forEach(function (item) {
        // Check if the current grid item has the "player1color" class
        if (item.textContent === oldnum) {
            // Log the content or do something with the grid item
            item.classList.remove("player2color")    
        }
        if (item.textContent === num) {
            // Log the content or do something with the grid item
            item.classList.add("player2color")    
        }
    });
    
    }
   
    gridItems.forEach(function(item) {
        if (item.classList.contains('player1color') && item.classList.contains('player2color')) {
            item.classList.add("both");
        } else {
            item.classList.remove("both"); // Remove "both" class from other grid items
        }
    });
    
    



    b1.removeAttribute("disabled");
    b2.setAttribute("disabled",true);
    
})