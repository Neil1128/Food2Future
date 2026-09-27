


/// WASTE CALCULATOR

let waste = 0;


function calculateWaste() {

    
    let foodWaste =
        document.getElementById("wasteAmount").value;

        
    waste = waste + Number(foodWaste);


    document.getElementById("wasteResult").innerHTML =
        "Total Food Waste: " + waste + " grams";

}


/* QUIZ */

function rightAnswer() {

    document.getElementById("quiz").innerHTML =
        "✅ Correct! Banana peel is organic waste.";

}


function wrongAnswer() {

    document.getElementById("quiz").innerHTML =
        "❌ Wrong answer. Try again!";

}

function rightAnswer2() {

    document.getElementById("quiz2").innerHTML =
        "✅ Correct! Bottles and Cans are plastic waste.";

}

function wrongAnswer2() {

    document.getElementById("quiz2").innerHTML =
        "❌ Wrong answer. Try again!";

}

function rightAnswer3() {

    document.getElementById("quiz3").innerHTML =
        "✅ Correct! Paper is recyclable waste.";
}
function wrongAnswer3() {

    document.getElementById("quiz3").innerHTML =
        "❌ Wrong answer. Try again!";
}