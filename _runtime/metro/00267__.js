// _runtime/metro/00267__.js
import polyfillObjectProperty from "../00123_polyfillObjectProperty.js";

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export default function setUpMutationObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("MutationObserver", () => require("MutationObserver").default);
    polyfillObjectProperty.polyfillGlobal("MutationRecord", () => require("MutationRecord").default);
  }
}
