// Async Function returns a Promise 

// ******************************************************************************************************************

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data")
//             resolve("success")
//         }, 2000);
//     });
// }

// async function gettingData() {
//     await api();  //1st 
//     await api();  //2nd
// }

// gettingData()

// ******************************************************************************************************************

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success")
        }, 2000);
    });
}

async function getWeatherData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

getWeatherData()

// ******************************************************************************************************************

