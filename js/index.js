import { Router } from "./router.js";
import { markAsSelected } from "./utils.js";
import { registerButtonClick } from "./events.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/the-universe", "/pages/the-universe.html");
router.add("/exploration", "/pages/exploration.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
markAsSelected();
registerButtonClick();
