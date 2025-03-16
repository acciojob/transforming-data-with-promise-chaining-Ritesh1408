document.getElementById("btn").addEventListener("click", function() {
    let input = parseFloat(document.getElementById("ip").value);
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
    
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML += `Result: ${input} <br>`;
            resolve(input);
        }, 2000);
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num * 2;
                outputDiv.innerHTML += `Result: ${result} <br>`;
                resolve(result);
            }, 2000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num - 3;
                outputDiv.innerHTML += `Result: ${result} <br>`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num / 2;
                outputDiv.innerHTML += `Result: ${result} <br>`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num + 10;
                outputDiv.innerHTML += `Final Result: ${result} <br>`;
                resolve(result);
            }, 1000);
        });
    });
});
