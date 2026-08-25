// _runtime/13802_element.js
import _mod13766 from "metro/13766__.js";
import all from "13791_all.js";

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