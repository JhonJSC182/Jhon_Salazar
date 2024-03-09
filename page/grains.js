const textOverImage = document.querySelectorAll(".onClickTextOverImage div");

let previousText;

for (let i = 0; i < textOverImage.length; i++) {

    textOverImage[i].onclick = function() {
        let classes = this.classList;
        if (classes.contains("show")) {
            classes.remove("show");
        } else {
            if (previousText != null)
            previousText.classList.remove("show");
            previousText = this;
            classes.add("show");
        }
    }
}

