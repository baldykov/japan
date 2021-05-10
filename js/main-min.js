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
      });
})(),
  document.querySelectorAll(".js-scroll").forEach((e) => {
    e.addEventListener("click", function () {
      !(function (e, t) {
        const c = document.querySelector(".header").clientHeight;
        let n = document.querySelector(e).getBoundingClientRect().top - c,
          r = window.pageYOffset,
          o = null;
        const a = function (e) {
          null === o && (o = e);
          const c = e - o,
            i =
              ((s = c),
              (d = r),
              (l = n),
              (s /= t / 2) < 1
                ? (l / 2) * s * s + d
                : (-l / 2) * (--s * (s - 2) - 1) + d);
          var s, d, l;
          window.scrollTo(0, i), c < t && requestAnimationFrame(a);
        };
        requestAnimationFrame(a);
      })(this.getAttribute("href"), 1e3);
    });
  });
