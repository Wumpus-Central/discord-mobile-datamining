// === Module 13480: element ===

// Module 13480 (element)
import all from "all";

let _moduleResult = all(require("module_13444").document);
if (_moduleResult) {
  const _module1 = require("all");
  _moduleResult = _module1(require("module_13444").document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = require(13444).document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};