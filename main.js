let elements = document.querySelectorAll("[data-animate]");
elements.forEach((el) => {
  el.classList.add("opacity-0", "transition-all", "duration-500");
});

let options = {
  threshold: 0.4,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(callback, options);
elements.forEach((el) => {
  observer.observe(el);
});
