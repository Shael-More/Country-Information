const countryInfo = document.getElementById('country-info');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener("click", () => {
    let countryName = countryInfo.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
    .then(response => response.json())
    .then((data) =>  {
        result.innerHTML = `
        <img src="${data[0].flags.png}"
        class="flag-img">

        <h2>${data[0].name.common}</h2>

        <div class= "wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span> ${data[0].capital[0]} </span> 
            </div>
        </div>
        <div class= "wrapper">
          <div class="data-wrapper">
                <h4>Continents :</h4>
                <span> ${data[0].continents[0]}</span> 
            </div>
        </div>
        <div class= "wrapper">
          <div class="data-wrapper">
                <h4>Population :</h4>
                <span> ${data[0].population}</span> 
            </div>
        </div>
        <div class= "wrapper">
          <div class="data-wrapper">
                <h4>Currency :</h4>
                <span> ${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span> 
            </div>
        </div>
        <div class= "wrapper">
          <div class="data-wrapper">
                <h4>Common Languages :</h4>
                <span> ${Object.values(data[0].languages)
                  .toString()
                  .split(',')
                  .join(',')}</span> 
            </div>
        </div>
        
        `;
    }).catch(() => {
        if(countryName.length == 0) {
            result.innerHTML = `<h2>The input field cannot be empty</h2>`
        } else {
            result.innerHTML = "<h3>Please enter a valid name</h3>"
        }
    })

  
});