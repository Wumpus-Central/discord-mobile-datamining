// === Module 13988: element ===

// Module 13988 (element)
import _mod13952 from "module_13952" /* 13952 */;
import all from "all" /* 13977 */;

let _moduleResult = all(_mod13952.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13952.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13952.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};