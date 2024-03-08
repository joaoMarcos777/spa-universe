import { links } from "./elements.js";

export function markAsSelected() {
  removeSelection();

  const currentUrlSegment = getUrlSegments();
  for (const link of links) {
    const linkPath = link.href.split("/").pop();

    if (linkPath === currentUrlSegment) {
      link.classList.add("selected");
    }
  }
}

function removeSelection() {
  links.forEach((link) => {
    link.classList.remove("selected");
  });
}

function getUrlSegments() {
  return window.location.pathname.split("/").pop();
}
