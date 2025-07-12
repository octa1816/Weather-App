import './style.css';
import { setupFormLogic } from './app';
import weatherIcon from './assets/icons.png';
const body = document.body;
const app = document.createElement('div');
app.id = 'app';
body.appendChild(app);

//Header and logo
const content = document.getElementById('app');

const header = document.createElement("header");
header.classList.add("header")

const icon = document.createElement('img');
icon.src = weatherIcon;
icon.alt = "weather icon";
icon.classList.add('weather-icon');


const title = document.createElement("h1");
title.classList.add("title-header")
title.textContent = "Weather App";

const headerContent = document.createElement('div');
headerContent.classList.add('header-content');

headerContent.appendChild(icon);
headerContent.appendChild(title);
header.appendChild(headerContent);

app.appendChild(header);


//Creating Input For Search

const searchBar = document.createElement("form")
searchBar.classList.add("Searchdiv-form")

const input = document.createElement("input")
input.classList.add("input-form")
input.type = "text";
input.placeholder = "Enter city name";

const button = document.createElement("button")
button.classList.add("button-class")
button.type = "submit";
button.textContent = "Search";

searchBar.appendChild(input)
searchBar.appendChild(button)
app.appendChild(searchBar)

//Tarjeta de Clima
const divMostrarClima = document.createElement("div");
divMostrarClima.classList.add("Tarjetadeclima");
divMostrarClima.style.display = "none"; // 👈 Ocultamos al iniciar
app.appendChild(divMostrarClima);


//Creating Footer
const footer = document.createElement("footer")
footer.classList.add("footer-class")
footer.textContent="By Imanol Suarez"
app.appendChild(footer)



setupFormLogic(searchBar, input); // 👈 Acá le pasás el formulario y el input
