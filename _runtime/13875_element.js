// _runtime/13875_element.js
import _mod13839 from "metro/13839__.js";
import all from "13864_all.js";

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