// _runtime/13988_element.js
import _mod13952 from "metro/13952__.js";
import all from "13977_all.js";

let _moduleResult = all(_mod13952.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13952.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13952.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
