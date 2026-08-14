// _runtime/13677_element.js
import all from "all";
import { 13641__ } from "metro/13641__.js";

let _moduleResult = all(require("module_13641").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13641").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13641__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};