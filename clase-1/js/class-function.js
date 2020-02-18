export default clasesFunction{
    isToggle = false;
    toggleBetweenAreas = (class1, class2) => {
        if (isToggle) {
            mainContainer.classList.replace(class2, class1)
            this.isToggle = false;
        } else {
            mainContainer.classList.replace(class1, class2)
            this.isToggle = true;
        }
    }
    sayHello = () => {
        console.log("Hello")
    }
}