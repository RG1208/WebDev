const URL = "https://cat-fact.herokuapp.com/facts";

const factsPara = document.querySelector("#fact");

const getFacts = async () => {
    console.log("Fetching Data......")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factsPara.innerText = data[0].text;

};

getFacts();