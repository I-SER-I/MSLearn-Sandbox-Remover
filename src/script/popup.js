button = document.getElementById('switch_button')

controller = new Controller()

button.onclick = function () {
    if (this.checked) {
        controller.remove()
    } else {
        controller.add()
    }
}
