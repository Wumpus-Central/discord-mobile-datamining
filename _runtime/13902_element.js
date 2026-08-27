// _runtime/13902_element.js
import _mod13866 from "metro/13866__.js";
import all from "13891_all.js";

let _moduleResult = all(_mod13866.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod13866.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod13866.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};