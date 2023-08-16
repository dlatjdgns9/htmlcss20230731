function toDate() {
    today = new Date()
    year = today.getFullYear(); month = twoLength(today.getMonth() + 1); date = twoLength(today.getDate());
    return year + "-" + month + "-" + date
}

function twoLength(num) {
    return (num<10)?"0"+num:num
}

function toDayTime() {
    today = new Date()
    hour = today.getHours(); minute = twoLength(today.getMinutes()) ; second = twoLength(today.getSeconds());
    return toDate() + " T " + twoLength(hour) + ":" + twoLength(minute) + ":" + second
}