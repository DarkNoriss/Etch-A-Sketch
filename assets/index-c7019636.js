(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();document.querySelector("body");const d=document.querySelector("#newPaintBoard"),c=document.querySelector("#app");let a=[];s(16);function s(e){let o=e;for(let i=0;i<o;i++){let n=document.createElement("div");for(let t=0;t<o;t++){let r=document.createElement("div");r.classList.add("app__dot"),n.appendChild(r)}c.appendChild(n)}a=document.querySelectorAll('[class*="app__dot"]'),p()}function u(){c.innerHTML=""}function f(){let e=parseInt(prompt("How big u want the paint board to be?"));e>900?alert("U cant make paint board bigger than 200!"):e<0||e==null||e==""||isNaN(e)?alert("Paint board must be bigger than 0!"):(u(),s(e))}d.addEventListener("click",e=>{f()});function p(){for(let e=0;e<a.length;e++)a[e].addEventListener("mousedown",m),a[e].addEventListener("mouseenter",b)}function m(e){e.target.style.backgroundColor="black"}function b(e){e.buttons>0&&(e.target.style.backgroundColor="black")}
