// _runtime/13673_element.js
import all from "all";
import { 13637__ } from "metro/13637__.js";

let _moduleResult = all(require("module_13637").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13637").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13637__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};