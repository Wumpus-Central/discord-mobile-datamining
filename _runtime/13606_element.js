// _runtime/13606_element.js
import all from "all";
import { 13570__ } from "metro/13570__.js";

let _moduleResult = all(require("module_13570").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13570").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13570__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};