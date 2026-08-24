// === Module 13767: element ===

// Module 13767 (element)
import _mod13731 from "module_13731" /* 13731 */;
import all from "all" /* 13756 */;

let _moduleResult = all(_mod13731.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13731.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13731.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};