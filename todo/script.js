document.getElementById("btn").addEventListener("click", function() {
    let myText = document.getElementById("inputItem").value;

    if (myText !== "") {
        const newBtn = document.createElement("button");
        newBtn.innerHTML= "\u274C";

        const newLi = document.createElement("li");
        newLi.textContent= myText;
        newLi.appendChild(newBtn);

        document.getElementById("favs").appendChild(newLi)

        document.getElementById("inputItem").value = ""
    }

});