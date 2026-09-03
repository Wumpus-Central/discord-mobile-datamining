// _runtime/14227_element.js
import _mod14191 from "metro/14191__.js";
import all from "14216_all.js";

let _moduleResult = all(_mod14191.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14191.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod14191.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
