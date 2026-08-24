// _runtime/13767_element.js
import _mod13731 from "metro/13731__.js";
import all from "13756_all.js";

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