function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"1zJhX":"library.6aeb23ad.js","gRmRH":"ghostlibrary.d8654048.png","5UbS1":"index.bf9c5309.css","b9auz":"index.f2504747.js"}'));const a=document.querySelector(".js-watched"),d=document.querySelector(".js-queue");a.addEventListener("click",(function(){a.classList.add("header__button--active"),d.classList.remove("header__button--active")})),d.addEventListener("click",(function(){a.classList.remove("header__button--active"),d.classList.add("header__button--active")}));var l=i("gXygc"),c=i("37v9V");const s={closeModalBtn:document.querySelector("[data-modal-close]"),filmCard:document.querySelector(".films__list"),backdropEl:document.querySelector(".backdrop"),startTrailerBtn:document.querySelector(".trailer__btn"),addToWatchedBtn:document.querySelector(".btn-add-watched"),addToQueueBtn:document.querySelector(".btn-add-queue")};function u(e){s.backdropEl.classList.add("is-hidden"),document.removeEventListener("keydown",m),document.body.style.overflow=""}function m(e){"Escape"===e.code&&u()}function f(e){e.target===s.backdropEl&&u()}s.filmCard.addEventListener("click",(function(e){if(!e.target.closest(".films__item"))return;s.backdropEl.classList.remove("is-hidden"),s.closeModalBtn.addEventListener("click",u),document.addEventListener("keydown",m),document.addEventListener("click",f),document.body.style.overflow="hidden",(0,l.renderFilmCard)(e)})),s.startTrailerBtn.addEventListener("click",(e=>(0,c.launchTrailer)(e))),i("7bYU0");var v,p=i("cBso0"),h=i("5uEKZ"),y=i("eWCmQ");v=new URL(i("kyEFX").resolve("gRmRH"),import.meta.url).toString();const g=(0,h.getFromLocalStorage)("watchedList")||[],_=(0,h.getFromLocalStorage)("queueList")||[],L=!1,b={filmContainer:document.querySelector(".films__list"),watchedBtn:document.querySelector(".js-watched"),queueBtn:document.querySelector(".js-queue"),removeFromWatchedBtn:document.querySelector(".btn-add-watched"),removeFromQueueBtn:document.querySelector(".btn-add-queue"),backdropEl:document.querySelector(".backdrop")},w=new(0,p.MovieApi);function E(e){return e.map((({genres:e,originalTitle:t,overview:n,populatiry:r,posterPath:o,releaseDate:i,title:a,voteAverage:d,voteCount:l,id:c})=>{const s=e.split(","),u=new Date(i).getFullYear();return` <li class='films__item' style="min-height:100px" data-id='${c}' data-title='${a}' data-release-date='${i}' data-poster-path='${o}' data-genres='${e}' data-vote-average='${d}' data-vote-count='${l}' data-original-title='${t}' data-overview='${n}' data-populatiry='${r}'>\n                    <a class='films__link'>\n                    <img class='films__poster' src='${o?`${w.imgUrl}${w.imgSize}${o}`:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}' alt='${a} poster' />\n                    <div class='films__info'>\n                    <h2 class='films__title'>${a}</h2>\n                    <p class='films__genres'>${s.length>3?s[0]+", "+s[1]+" and others":s.join(", ")||"No genre"} | ${u||"Unknown release date"}</p>\n                    </div></a>\n                </li>`})).join("")}function k(){const e=document.createElement("li");e.classList.add("empty__container");const n=document.createElement("img");n.src=t(v),n.alt="Empty library",n.classList.add("empty__image"),e.append(n),b.filmContainer.append(e),L=!0}window.addEventListener("load",(function(){if(!g.length)return void k();b.removeFromWatchedBtn.innerHTML="Remove from watched",b.removeFromQueueBtn.style.display="none",b.filmContainer.innerHTML=E(g)})),b.watchedBtn.addEventListener("click",(function(){if(!g.length&&""===b.filmContainer.innerHTML)return void k();if(b.filmContainer.firstElementChild.classList.contains("empty__container"))return;b.removeFromWatchedBtn.style.display="block",b.removeFromWatchedBtn.innerHTML="Remove from watched",b.removeFromQueueBtn.style.display="none",b.filmContainer.innerHTML=E(g)})),b.queueBtn.addEventListener("click",(function(){if(!_.length&&""===b.filmContainer.innerHTML)return void k();if(b.removeFromQueueBtn.style.display="block",b.removeFromQueueBtn.innerHTML="Remove from queue",b.removeFromWatchedBtn.style.display="none",b.filmContainer.innerHTML=E(_),!_.length&&""===b.filmContainer.innerHTML)return void k()})),b.removeFromWatchedBtn.addEventListener("click",(function(e){if(!g.length)return void k();const t=e.target.closest("#film-modal").dataset.id,n=g.find((e=>e.id===t));g.splice(g.indexOf(n),1),(0,h.addToLocalStorage)("watchedList",g),b.filmContainer.innerHTML=E(g),u(),y.Notify.success("This movie was successfully removed from your watched list"),g.length||k()})),b.removeFromQueueBtn.addEventListener("click",(function(e){_.length||k();const t=e.target.closest("#film-modal").dataset.id,n=_.find((e=>e.id===t));_.splice(_.indexOf(n),1),(0,h.addToLocalStorage)("queueList",_),b.filmContainer.innerHTML=E(_),u(),y.Notify.success("This movie was successfully removed from your queue list"),_.length||k()})),i("1h4OK"),i("cxCVv"),i("aR4bl"),i("zEbIk");
//# sourceMappingURL=library.6aeb23ad.js.map
