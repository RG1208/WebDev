// Callback is a function inside a function

// function sum(a, b) {
//     console.log(a + b)
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b)
// }

// calculator(1, 2, sum)

//***************************************************************

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);

// }
// getData(123)


//***************************************************************

// Callback hell **************************************************


function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }

    }, 2000);
}

console.log("Fetching Data.....");
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            console.log("No more Data Found.");
        }
        )
    }
    )
});

// **********************************************************************
