!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.faacf4d7.js","ee16w":"sprite.786c7fd5.svg"}'));var c=document.querySelector(".js-watched"),i=document.querySelector(".js-queue");c.addEventListener("click",(function(){c.classList.toggle("header__button--active"),i.classList.remove("header__button--active")})),i.addEventListener("click",(function(){c.classList.remove("header__button--active"),i.classList.toggle("header__button--active")}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l.default(e,t,n[t])}))}return e};var d,l=(d=a("hKHmD"))&&d.__esModule?d:{default:d};var u;u=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("ee16w");var p={filmCard:document.querySelector(".modal"),filmsContainer:document.querySelector(".films__list")};function f(e){var n=e.target.closest("li").dataset,r=t(s)({},n),o=r.genres,a=r.originalTitle,c=r.overview,i=r.posterPath,d=r.title,l=r.voteAverage,f=r.voteCount,v=r.populatiry,_=r.id,b=r.releaseDate,m=o.split(","),g=m.length>3?m[0]+", "+m[1]+" and others":m.join(", ")||"No genre",h='\n  <div class="modal" data-genres=\''.concat(o,"' data-original-title='").concat(a,"' data-overview='").concat(c,"' data-posterPath='").concat(i,"' data-title='").concat(d,"' data-vote-average='").concat(l,"' data-vote-count='").concat(f,"' data-populatiry='").concat(v,"' data-id='").concat(_,"' data-release-date='").concat(b,'\'>\n    <button class="modal__btn-close" data-modal-close>\n        <svg class="icon icon-close" width="16" height="16">\n            <use href=').concat(t(u),'#icon-close></use>\n        </svg>\n    </button>\n    <div class="general-wrapper">\n        <div class="card__img-wrapper">\n            <img src=').concat(i," alt=").concat(d,' />\n        </div>\n        <div>\n            <h2 class="card__film-title">').concat(d||a,'</h2>\n            <div class="card__info-wrapper">\n                <div class="card__info-wrapper-left">\n                    <p class="card__subdivision card__votes">Vote/Votes</p>\n                    <p class="card__subdivision">Popularity</p>\n                    <p class="card__subdivision">Original Title</p>\n                    <p class="card__subdivision">Genre</p>\n                </div>\n                <div class="card__info-wrapper-right">\n                    <p class="card__votes">\n                        <span class="card__vote-title">').concat(Number.parseFloat(l).toFixed(1),'</span> /\n                        <span class="card__info-text card__vote-number">\n                              ').concat(f,'\n                        </span>\n                    </p>\n                    <p class="card__info-text">').concat(Number.parseFloat(v).toFixed(1),'</p>\n                    <p class="card__info-text">').concat(d||a,'</p>\n                    <p class="card__genre">').concat(g,'</p>\n                </div>\n            </div>\n            <p class="card__about">About</p>\n            <p class="card__description">').concat(c,'</p>\n            <div class="btn-wrapper">\n                <button class="btn-add-watched" type="button">\n                    add to Watched\n                </button>\n                <button class="btn-add-queue" type="button">\n                    add to queue\n                </button>\n            </div>\n        </div>\n    </div>\n</div>');p.filmCard.innerHTML=h}var v={closeModalBtn:document.querySelector("[data-modal-close]"),filmCard:document.querySelector(".films__list"),backdropEl:document.querySelector(".backdrop")};function _(e){v.backdropEl.classList.add("is-hidden"),document.removeEventListener("keydown",b),document.body.style.overflow=""}function b(e){"Escape"===e.code&&_()}function m(e){e.target===v.backdropEl&&(_(),console.log(e.target))}v.filmCard.addEventListener("click",(function(e){if(!e.target.closest(".films__item"))return;v.backdropEl.classList.remove("is-hidden"),v.closeModalBtn.addEventListener("click",_),document.addEventListener("keydown",b),document.addEventListener("click",m),document.body.style.overflow="hidden",f(e)}))}();
//# sourceMappingURL=library.faacf4d7.js.map
