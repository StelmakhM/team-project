var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("epHO8"),i("bUb57");const a=document.querySelector(".js-watched"),r=document.querySelector(".js-queue");a.addEventListener("click",(function(){a.classList.toggle("header__button--active"),r.classList.remove("header__button--active")})),r.addEventListener("click",(function(){a.classList.remove("header__button--active"),r.classList.toggle("header__button--active")})),i("fQE3M"),i("7bYU0");var o=i("eugXO"),l=i("cBso0");const s={filmContainer:document.querySelector(".films__list"),watchedBtn:document.querySelector(".js-watched"),queueBtn:document.querySelector(".js-queue")};window.addEventListener("load",(function(){s.filmContainer.innerHTML=c(o.watchedArr)})),s.watchedBtn.addEventListener("click",(function(){s.filmContainer.innerHTML=c(o.watchedArr)})),s.queueBtn.addEventListener("click",(function(){s.filmContainer.innerHTML=c(o.queueArr)}));const d=new(0,l.MovieApi);function c(e){return e.map((({genres:e,originalTitle:t,overview:n,populatiry:i,posterPath:a,releaseDate:r,title:o,voteAverage:l,voteCount:s,id:c})=>{const u=e.split(","),f=new Date(r).getFullYear();return` <li class='films__item' style="min-height:100px" data-id='${c}' data-title='${o}' data-release-date='${r}' data-poster-path='${a}' data-genres='${e}' data-vote-average='${l}' data-vote-count='${s}' data-original-title='${t}' data-overview='${n}' data-populatiry='${i}'>\n                    <a class='films__link'>\n                    <img class='films__poster' src='${a?`${d.imgUrl}${d.imgSize}${a}`:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}' alt='${o} poster' />\n                    <div class='films__info'>\n                    <h2 class='films__title'>${o}</h2>\n                    <p class='films__genres'>${u.length>3?u[0]+", "+u[1]+" and others":u.join(", ")||"No genre"} | ${f||"Unknown release date"}</p>\n                    </div></a>\n                </li>`})).join("")}i("1h4OK");
//# sourceMappingURL=library.bdf106f9.js.map