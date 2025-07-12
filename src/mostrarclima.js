export default function mostrarClima(data){

    const contenedor = document.querySelector(".Tarjetadeclima");
    contenedor.style.display = 'block'
contenedor.innerHTML = `
<h2>${data.resolvedAddress}</h2>
<p>🌡️ Temperatura: ${data.days[0].temp}°C</p>
<p>🌤️ Clima: ${data.days[0].conditions}</p>
<p>💧 Humedad: ${data.days[0].humidity}%</p>
`
}







