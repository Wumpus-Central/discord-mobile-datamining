// === Module 13802: element ===

// Module 13802 (element)
import _mod13766 from "module_13766" /* 13766 */;
import all from "all" /* 13791 */;

let _moduleResult = all(_mod13766.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13766.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13766.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};