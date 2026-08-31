// _runtime/13955_element.js
import _mod13919 from "metro/13919__.js";
import all from "13944_all.js";

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