// === Module 13955: element ===

// Module 13955 (element)
import _mod13919 from "module_13919" /* 13919 */;
import all from "all" /* 13944 */;

let _moduleResult = all(_mod13919.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13919.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13919.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};