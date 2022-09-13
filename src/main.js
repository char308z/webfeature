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

scroll(animate(".progress-bar", { scaleX: [0, 1] }));
