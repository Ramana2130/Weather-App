import "./index.css";
import { WeatherAPIResponse } from "./types/WeatherAPI";

const apiKey: string = "94fa4499c7efac103154b496e0d31e1a";
const apiUrl: string =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput: HTMLInputElement | null = document.querySelector("#search");
const image: HTMLImageElement | null = document.querySelector("#image");

async function checkWeather(city: string): Promise<void> {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = (await response.json()) as WeatherAPIResponse;

    console.log(data);

    document.querySelector<HTMLElement>("#city")!.innerHTML = data.name;
    document.querySelector<HTMLElement>("#temp")!.innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector<HTMLElement>("#humidity")!.innerHTML =
      data.main.humidity + "%";
    document.querySelector<HTMLElement>("#wind")!.innerHTML =
      data.wind.speed + " km/h";

    if (image !== null && data.weather[0].main == "Clouds") {
      image.src = "./src/img/cloud.png";
    } else if (image !== null && data.weather[0].main == "Clear") {
      image.src = "./src/img/sun1.png";
    } else if (image !== null && data.weather[0].main == "Drizzle") {
      image.src = "./src/img/sun.png";
    } else if (image !== null && data.weather[0].main == "Mist") {
      image.src = "./src/img/mizz.png";
    }
  } catch (error) {
    console.error("An error occurred while fetching weather data:", error);
  }
}

function handleSearch(): void {
  const city: string | null = searchInput?.value.trim() ?? null;
  if (city) {
    checkWeather(city);
  }
}

searchInput?.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
