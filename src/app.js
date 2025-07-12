import mostrarClima from './mostrarclima'; 

export function setupFormLogic(form, input) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = input.value.trim();
    if (!city) return;

    // Limpiar tarjeta anterior
    const tarjeta = document.querySelector(".Tarjetadeclima");
    if (tarjeta) {
      tarjeta.style.display = 'none';
      tarjeta.innerHTML = "";
    }

    console.log("Buscando clima para:", city);

    const apiKey = 'BG4XNPSZTBQ8H5G64CBACW2KL';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Ciudad no encontrada");

      const data = await response.json();
      console.log("Datos del clima:", data);

      mostrarClima(data);  // Mostrar los datos en la tarjeta
      input.value = "";    // Limpiar el input después de buscar
    } catch (error) {
      console.error("Error al buscar el clima:", error.message);
    }
  });
}
