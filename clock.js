setInterval(() => {
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    if (hour > 12) {

        hour = hour % 12
    }
    if(hour == 0) {
        hour = 12
    }
    document.querySelector(".hour p").innerHTML = hour
    document.querySelector(".min p").innerHTML = min
    document.querySelector(".sec p").innerHTML = sec


})
