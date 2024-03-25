(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="94fa4499c7efac103154b496e0d31e1a",u="https://api.openweathermap.org/data/2.5/weather?units=metric&q=",c=document.querySelector("#search"),n=document.querySelector("#image");async function d(i){try{const t=await(await fetch(`${u}${i}&appid=${l}`)).json();console.log(t),document.querySelector("#city").innerHTML=t.name,document.querySelector("#temp").innerHTML=Math.round(t.main.temp)+"°C",document.querySelector("#humidity").innerHTML=t.main.humidity+"%",document.querySelector("#wind").innerHTML=t.wind.speed+" km/h",n!==null&&t.weather[0].main=="Clouds"?n.src="./img/cloud.png":n!==null&&t.weather[0].main=="Clear"?n.src="./img/sun1.png":n!==null&&t.weather[0].main=="Drizzle"?n.src="./img/sun.png":n!==null&&t.weather[0].main=="Mist"&&(n.src="./img/mizz.png")}catch(o){console.error("An error occurred while fetching weather data:",o)}}function m(){const i=(c==null?void 0:c.value.trim())??null;i&&d(i)}c==null||c.addEventListener("keydown",i=>{i.key==="Enter"&&m()});
