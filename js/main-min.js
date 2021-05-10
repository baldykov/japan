"use strict";
!(function () {
  const e = document.querySelector(".header");
  window.onscroll = () => {
    window.pageYOffset > 50
      ? e.classList.add("header_active")
      : e.classList.remove("header_active");
  };
  const t = document.querySelector(".header__nav");
  document.querySelector(".header__burger").addEventListener("click", () => {
    t.classList.add("header__nav_active");
  }),
    document
      .querySelector(".header__nav-close")
      .addEventListener("click", () => {
        t.classList.remove("header__nav_active");
      }),
    t.addEventListener("click", (e) => {
      e.target.classList.contains("nav__link") &&
        t.classList.remove("header__nav_active");
    });
})(),
  document.querySelectorAll(".js-scroll").forEach((e) => {
    e.addEventListener("click", function () {
      !(function (e, t) {
        const n = document.querySelector(".header").clientHeight;
        let c = document.querySelector(e).getBoundingClientRect().top - n,
          r = window.pageYOffset,
          a = null;
        const o = function (e) {
          null === a && (a = e);
          const n = e - a,
            i =
              ((s = n),
              (d = r),
              (l = c),
              (s /= t / 2) < 1
                ? (l / 2) * s * s + d
                : (-l / 2) * (--s * (s - 2) - 1) + d);
          var s, d, l;
          window.scrollTo(0, i), n < t && requestAnimationFrame(o);
        };
        requestAnimationFrame(o);
      })(this.getAttribute("href"), 1e3);
    });
  });
