// === Module 13875: element ===

// Module 13875 (element)
import _mod13839 from "module_13839" /* 13839 */;
import all from "all" /* 13864 */;

let _moduleResult = all(_mod13839.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13839.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13839.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};