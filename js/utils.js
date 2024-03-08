import { links } from "./elements.js";

export function markAsSelected() {
  links.forEach((link) => {
    link.classList.remove("selected");
  });

  const currentUrlSegment = getUrlSegments();
  for (const link of links) {
    const linkPath = link.href.split("/").pop();

    if (linkPath === currentUrlSegment) {
      link.classList.add("selected");
    }
  }
}

function getUrlSegments() {
  return window.location.pathname.split("/").pop();
}
