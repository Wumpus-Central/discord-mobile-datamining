// === Module 14211: element ===

// Module 14211 (element)
import _mod14175 from "module_14175" /* 14175 */;
import all from "all" /* 14200 */;

let _moduleResult = all(_mod14175.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14175.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod14175.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};