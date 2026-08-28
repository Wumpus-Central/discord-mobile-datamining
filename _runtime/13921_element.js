// === Module 13921: element ===

// Module 13921 (element)
import _mod13885 from "module_13885" /* 13885 */;
import all from "all" /* 13910 */;

let _moduleResult = all(_mod13885.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13885.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13885.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};