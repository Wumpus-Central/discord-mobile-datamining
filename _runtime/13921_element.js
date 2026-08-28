// _runtime/13921_element.js
import _mod13885 from "metro/13885__.js";
import all from "13910_all.js";

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