// _runtime/13522_element.js
import all from "all";
import { 13486__ } from "metro/13486__.js";

let _moduleResult = all(require("module_13486").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13486").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13486__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};