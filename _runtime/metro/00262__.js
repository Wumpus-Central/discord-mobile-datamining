// _runtime/metro/00262__.js
import polyfillObjectProperty from "../00123_polyfillObjectProperty.js";

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export default function setUpIntersectionObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("IntersectionObserver", () => require("IntersectionObserver").default);
  }
}
