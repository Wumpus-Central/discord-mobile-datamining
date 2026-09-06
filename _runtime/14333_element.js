// _runtime/14333_element.js
import _mod14297 from "metro/14297__.js";
import all from "14322_all.js";

let _moduleResult = all(_mod14297.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14297.document.createElement);
}

export default (arg0) => {
  if (closure_2) {
    const _document = _mod14297.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
