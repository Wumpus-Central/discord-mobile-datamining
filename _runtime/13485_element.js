// _runtime/13485_element.js
import all from "all";
import { 13449__ } from "metro/13449__.js";

let _moduleResult = all(require("module_13449").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13449").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13449__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};