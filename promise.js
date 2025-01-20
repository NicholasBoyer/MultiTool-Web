const SUCCESS = false;

const p = new Promise((resolve, reject) => {
    if (SUCCESS) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected!");
    }
});

p.then((val) => console.log(val))
.catch((val) => console.log(val));

fetch("https://api.ipify.org?format=json.me")
.then((response) => {
    if (response.headers.get("content-type")?.includes("application/json")) {
        return response.json();
    }
        return response.text();
})
.then((data) => {
    console.log(`Your IP address is: ${data}`);
})
.catch((error) => {
    console.log(error);
});