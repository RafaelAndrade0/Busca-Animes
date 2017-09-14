const clickButton = document.querySelector('#btnClick');
clickButton.addEventListener('click', clickEvent);

function clickEvent() {
    const inputValue = document.querySelector('#input').value;
    //console.log(inputValue);
    getInfoAnime(inputValue);
}


function getInfoAnime(value) {
    const url = `http://jikan.me/api/anime/${value}`;
    console.log(url);
    //console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let output = '<h2>Resultados:</h2>'
        output = `            
            <img src="${data.image}" align="left" height="200" width="150">
            <h3>Título: ${data.title}</h3>
            <p>Passou/Passa durante: ${data.aired}</p>
            <p>Onde: ${data.type}</p>
            <p>Episodios: ${data.episodes}</p>
            <p>Status: ${data.status}</p>
        `;
        
        /*document.getElementById('showAnime').insertAdjacentHTML('beforeend',
        output);*/
        document.getElementById('showAnime').innerHTML = "";
        document.getElementById('showAnime').insertAdjacentHTML('beforeend',
        output);
    })
}