var mainContainer = document.getElementById("main-container");

isToggle = false;
    toggleBetweenAreas = () => {
        if (isToggle) {
            mainContainer.classList.replace("main-area-2", "main-area-1")
            this.isToggle = false;
        } else {
            mainContainer.classList.replace("main-area-1", "main-area-2")
            this.isToggle = true;
        }
    }

var toggle = document.getElementById("toggle-lateral");
toggle.addEventListener("click", toggleBetweenAreas);

