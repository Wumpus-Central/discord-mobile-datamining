// _runtime/13665_element.js
import all from "all";
import { 13629__ } from "metro/13629__.js";

let _moduleResult = all(require("module_13629").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13629").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13629__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};