const btnSevenTeen = document.querySelector(".seventeen");
const btnEightTeen = document.querySelector(".eigthteen");
const btnNineTeen = document.querySelector(".nineteen");
const result = document.querySelector(".result");

btnSevenTeen.onclick = function() {
    alert("Try again");
    result.textContent = "NO"
}

btnEightTeen.onclick = function() {
    alert("Right!");
    result.textContent = "YES"
}

btnNineTeen.onclick = function() {
    alert("Try again");
    result.textContent = "NO"
}