// === Module 14333: element ===

// Module 14333 (element)
import _mod14297 from "module_14297" /* 14297 */;
import all from "all" /* 14322 */;

let _moduleResult = all(_mod14297.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14297.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod14297.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};