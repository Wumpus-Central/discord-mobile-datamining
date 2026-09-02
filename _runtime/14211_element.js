// _runtime/14211_element.js
import _mod14175 from "metro/14175__.js";
import all from "14200_all.js";

let _moduleResult = all(_mod14175.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14175.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod14175.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
