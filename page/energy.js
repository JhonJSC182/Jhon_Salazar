const textOverImage = document.querySelectorAll(".onClickTextOverImage div"); //div with image inside

let previousText;

for (let i = 0; i < textOverImage.length; i++) {

    textOverImage[i].onclick = function() { //when clicking on the image
        let classes = this.classList; //classes = window properties
        if (classes.contains("show")) { //if the current image is showing
            classes.remove("show"); //when clicked on, remove the "show"
        } else {
            if (previousText != null) //if the variable "previousText" is not equal to null
            previousText.classList.remove("show"); //remove the "show" property
            previousText = this; //equal to the "this" object
            classes.add("show"); //show the the image text
        }
    }
}


