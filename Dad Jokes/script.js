//fetch('getAPI')
fetch('https://icanhazdadjoke.com/slack')//.then returns response
    .then(data => data.json())//converts data to data.json
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement')

        jokeElement.innerHTML = jokeText;
    })