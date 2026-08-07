// _runtime/13536_element.js
import all from "all";
import { 13500__ } from "metro/13500__.js";

let _moduleResult = all(require("module_13500").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13500").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13500__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};