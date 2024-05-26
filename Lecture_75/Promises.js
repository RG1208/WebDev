// Promise Resolve
// let promise = new Promise((resolve, reject) => {
//     console.log("promise");
//     resolve(123);
// })

// ********************************************************************************************

// Promise Rejected
// let promise1 = new Promise((resolve, reject) => {
//     console.log("promise1");
//     reject(123);
// })

// ********************************************************************************************


// promise can be used by using then and catch(for fulfilled and reject resp.)


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("promise");
//         resolve("success");
//     })
// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled")
// }
// );

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("promise");
//         reject("error occured")
//     })
// }

// let promise = getPromise();
// promise.catch(() => {
//     console.log("promise rejected")
// }
// );

// *****************************************************************************************
// Promise Chain

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("success");
//         }, 2000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("success");
//         }, 2000);
//     });
// }

// console.log("fetching data....");

// let p1 = asyncFunc();
// p1.then((res) => {
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//     });
// });

// *******************************************************************************


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataId);
            resolve("Success")
        }, 2000);
    });
}


// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res)
//     let p2 = getData(2);
//     p2.then((res) => {
//         console.log(res)
//     })
// })

getData(1).then((res) => {
    return getData(2)
}).then((res) => {

})

