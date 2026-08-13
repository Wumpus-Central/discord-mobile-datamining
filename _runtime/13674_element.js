// _runtime/13674_element.js
import all from "all";
import { 13638__ } from "metro/13638__.js";

let _moduleResult = all(require("module_13638").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13638").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13638__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};