const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
//const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
const options = {
  method: "GET",
  headers: {
    'Accept': 'application/json'
  },
};
const apiURL = "https://icanhazdadjoke.com/";
async function getJoke(){
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);   
    const data = await response.json();
    console.log(data)
    jokeEl.innerText = data.joke;
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";  
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}
btnEl.addEventListener("click", getJoke);