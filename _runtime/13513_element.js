import { 13477__ } from "metro/13477__.js";
// _runtime/13513_element.js
import all from "all";

let _moduleResult = all(require("module_13477").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13477").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13477__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};