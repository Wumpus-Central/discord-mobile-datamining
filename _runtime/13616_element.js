// _runtime/13616_element.js
import all from "all";
import { 13580__ } from "metro/13580__.js";

let _moduleResult = all(require("module_13580").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13580").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13580__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};