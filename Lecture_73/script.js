function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    let fx = ` 
    <div class="card">

        <div class="left" >
            <img src="${thumbnail}" class="image" alt="thumbnail">
            <div class="time">${duration}</div>
        </div>

        <div class="right">

            <div class="up">
                <h3>${title}</h3>
            </div>

            <div class="down">
                <p>${cName} &#183 ${viewStr} &#183 ${monthsOld} months ago </p>

            </div>

        </div>
    </div>
    `
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + fx
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 9, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Your First HTML Website | Sigma Web Dev video #3", "CodeWithHarry", 5600, 11, "11:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")