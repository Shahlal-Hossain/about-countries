document.getElementById('submit').addEventListener("click",async function(){
    const allUser = ('https://restcountries.com/v3.1/all')
    await fetch(allUser)
    .then(res => res.json())
    .then(bigData => allCountries(bigData))

function allCountries(ilimet){
    ilimet.map(country =>{
    const allCountry = document.getElementById('allCountry') 
    const div = document.createElement('div')
    div.className = "country";
    div.innerHTML = `
    <h2> Name: ${country.name.common} </h2>
    <h3> Capital: ${country.capital} </h3>
    <h3> Subregion: ${country.subregion}</h3>
    <p> Population: ${country.population} </p>
    <img src=${country.flags.png}  />
    <button id="view"> view address </button>
    `
    allCountry.appendChild(div);
    })
}
})

function allCountryName(){
    const input = document.getElementById('inpt').value;

    const users = `https://restcountries.com/v3.1/name/${input}`
    fetch(users)
    .then(resp => resp.json())
    .then(data => CountryName(data [0]))
    
}
const CountryName = (data) =>{
    const container = document.getElementById('container')
    container.innerHTML = ''
    const div = document.createElement('div')
    div.className = "country";
    div.innerHTML = `
    <h2> Name: ${data.name.common} </h2>
    <h3> Capital: ${data.capital} </h3>
    <h3> Subregion: ${data.subregion}</h3>
    <p> Population: ${data.population} </p>
    <img src=${data.flags.png}  />
    <button > view about </button>
    `
    container.appendChild(div)
}
document.getElementById('inpt').addEventListener('keypress',function(event){
    if(event.keyCode === 13){
        document.getElementById('btn').click();
    }
})