/**
 * Template Name: Knight - v4.3.0
 * Template URL: https://bootstrapmade.com/knight-free-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  'use strict';

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  });
})();

// The API
const link = 'https://api.thecatapi.com/v1/images/search';

const catGenerator = () => {
  fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const url = data[0].url;
      const img = "<img class='img-fluid p-3' src='" + url + "'/>";
      document.getElementById('result').innerHTML = img;
    });
};

// The loading button
const simulation = (action, ms) => setTimeout(action, ms);
const form = document.querySelector('.form-submit');
const btnSubmit = document.querySelector('.btn-submit');
const btnSubmitSpan = document.querySelector('.btn-submit span');
const loaderSubmit = document.querySelector('.loader-submit');

form.addEventListener('submit', (response) => {
  response.preventDefault();
  btnSubmit.classList.add('disabled');
  btnSubmitSpan.innerHTML = 'Loading...';
  loaderSubmit.style.display = 'block';

  simulation(() => {
    btnSubmit.classList.remove('disabled');
    btnSubmitSpan.innerHTML = 'Generate!';
    loaderSubmit.style.display = 'none';
  }, 2000);
});
