import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

const lillevideo = document.querySelector("#videofil");
lillevideo.pause();

scroll(
  ({ y }) => {
    if (!lillevideo.readyState) return;
    lillevideo.currentTime = lillevideo.duration * y.progress;
  },
  {
    target: document.querySelector(".videoarticle"),
    offset: ["-100vh", "end end"],
  }
);
inView(".staggeranimation", ({ target }) => {
  animate(
    ".staggeranimation div",
    { opacity: [0, 1] },
    {
      delay: stagger(1, { start: 1 }),
    }
  );
});

const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);

scroll(animate(".progress-bar", { scaleX: [0, 1] }));

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("p");
  scroll(animate(elementderskalparallaxes, { y: [50, 500] }), {
    target: elementderskalparallaxes,
  });
});

// slut scrub video
const lillevideo_2 = document.querySelector("#videofil_2");
lillevideo_2.pause();
scroll(
  ({ y }) => {
    if (!lillevideo_2.readyState) return;
    lillevideo_2.currentTime = lillevideo_2.duration * y.progress;
  },
  {
    target: document.querySelector(".videoarticle_2"),
    offset: ["-100vh", "end end"],
  }
);

// window scroll scale in animation (question marks)
let elements = document.querySelectorAll("img.qm");
let scroll_position = 0;
let section_position = 20200;
let noElementsLeft = false;
let counter = 0;
function startAnimation() {
  // Set the class with the animation to the element

  elements[counter].classList.add("scale-in-center");
  if (noElementsLeft === false) {
    setTimeout(startAnimation, 1200);
  }
  if (counter < elements.length - 1) {
    counter++;
  } else {
    noElementsLeft = true;
  }
}

window.addEventListener("scroll", function (e) {
  scroll_position = window.scrollY;
  console.log(scroll_position);
  if (scroll_position > section_position) {
    // Start the animation -> startAnimation()
    setTimeout(startAnimation(), 1200);
  }
});
