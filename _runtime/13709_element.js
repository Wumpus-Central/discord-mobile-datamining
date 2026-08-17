// _runtime/13709_element.js
import _mod13673 from "metro/13673__.js";
import all from "13698_all.js";

let _moduleResult = all(_mod13673.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13673.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13673.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};