let countries = ['Mexico', 'India', 'Canada'];

const paragraph = document.querySelector('.add-country');

paragraph.addEventListener('click', addCountry);

function addCountry() {
  const country = prompt('Enter new Country');
  countries.push(country);
  render();
}

function render() {
  const countriesElement = document.querySelector('#countries');
  countriesElement.innerHTML = '';
  countries.forEach((country) => {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = country;
    countriesElement.appendChild(newListItem);
  })
}

render()

// ===============
// ASYNC FUNCTIONS
// ===============

// // XMLHttpRequest
// // ===============
// function fetchCountries() {
  //   const xhr = new XMLHttpRequest();
  //   xhr.withCredentials = true;

  //   xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === this.DONE) {
      //       const countryList = JSON.parse(this.responseText);
      //       countries = countryList.map((country) => country.name.common)
      //       render();
      //     }
      //   });

      //   xhr.open("GET", "https://restcountries.com/v3.1/all");

      //   xhr.send();
      // }



// // Wrap XMLHttpRequest in Promise
// // ===============
// function fetchApi(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
//     xhr.addEventListener("readystatechange", function () {
//       if (this.readyState === this.DONE) {
//         resolve(JSON.parse(this.responseText));
//       }
//     });
//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

// fetchApi("https://restcountries.com/v3.1/all")
//   .then((countryList) => {
//     countries = countryList.map((country) => country.name.common)
//     render();
//   })
//   .catch((err) => console.error(err))
//   .finally(() => console.log("All done"))



// // Fetch
// // ===============
// fetch("https://restcountries.com/v3.1/all")
//   .then(response => response.json())
//   .then((countryList) => {
//     countries = countryList.map((country) => country.name.common)
//     render();
//   })
//   .catch((err) => console.error(err))
//   .finally(() => console.log("All done"))


// // Async/await Fetch
// // ===============
// async function fetchCountries() {
//   const response = await fetch("https://restcountries.com/v3.1/all")
//   const countryList = await response.json();
//   countries = countryList.map((country) => country.name.common)
//   render();
// }

// fetchCountries();
