// === Module 14227: element ===

// Module 14227 (element)
import _mod14191 from "module_14191" /* 14191 */;
import all from "all" /* 14216 */;

let _moduleResult = all(_mod14191.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14191.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod14191.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};