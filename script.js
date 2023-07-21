let imageCollection = document.getElementsByClassName("image");

let divToSwap = [];

for (let i = 0; i < imageCollection.length; i++) {
    imageCollection[i].addEventListener("dragstart", function(event) {
        divToSwap[0] = event.target.id;
    });

    imageCollection[i].addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    imageCollection[i].addEventListener("drop", function(event) {
        divToSwap[1] = event.target.id;

        if (
            divToSwap[0] != divToSwap[1] &&
            divToSwap[0] != "" &&
            divToSwap[1] != ""
        ) {
            let div1 = document.getElementById(divToSwap[0]);
            let div2 = document.getElementById(divToSwap[1]);
            div1.setAttribute("id", divToSwap[1]);
            div2.setAttribute("id", divToSwap[0]);
        }
    });
}