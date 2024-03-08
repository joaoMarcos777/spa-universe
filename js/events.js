import { linkTheUniverse } from "./elements.js";

export function registerButtonClick() {
  window.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
      linkTheUniverse.click();
    }
  });
}
