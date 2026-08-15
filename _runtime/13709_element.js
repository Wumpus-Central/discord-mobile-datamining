// _runtime/13709_element.js
import all from "all";
import { 13673__ } from "metro/13673__.js";

let _moduleResult = all(require("module_13673").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13673").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = 13673__.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};