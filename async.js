"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const button = document.querySelector(".btn-country");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 100000
        ).toFixed(2)} million</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

// XML
const getCountryAndNeighbour = function (country) {
  // Ajax Call, Country (1)
  let request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render Country one
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("Germany");

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found"
  )
    .then((data) => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour found!");
      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", function () {});

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem with geolocation");
    const dataGeo = await resGeo.json();

    // Country Data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Problem with getting country");
    const data = await res.json();
    console.log(data);

    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(`${err.message} `);

    // Reject promise returned from async function- rethrowing an error
    throw err;
  }
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// Promise all

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map((country) => country[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries("somalia", "tanzania", "egypt");

// Promise.race
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.race([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    // console.log(data.map((country) => country[0].capital));
    console.log(data[0].capital);
  } catch (err) {
    console.error(err);
  }
};

// Another application of Promise.race

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Request took too long"));
    }, s * 1000);
  });
};

Promise.race([get3Countries("somalia", "oman", "indonesia"), timeout(1)])
  .then((res) => console.log(res[0].capital))
  .catch((err) => console.error(err));

// Promise.allSettled

Promise.allSettled([
  getJSON(`https://restcountries.eu/rest/v2/name/somalia`),
  getJSON(`https://restcountries.eu/rest/v2/name/oman`),
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
])
  .then((res) => console.log(res.map((country) => country.value[0].name)))
  .catch((err) => console.error(err));
