// _runtime/00624__process.js
import _mod610 from "metro/00610__.js";

let tmp = typeof exports === "object";
if (typeof exports === "object") {
  tmp = exports;
}
if (tmp) {
  tmp = !exports.nodeType;
}
if (tmp) {
  tmp = exports;
}
let tmp2 = tmp;
if (tmp) {
  tmp2 = typeof module === "object";
}
if (tmp2) {
  tmp2 = module;
}
if (tmp2) {
  tmp2 = !module.nodeType;
}
if (tmp2) {
  tmp2 = module;
}
module = tmp2;
let _process = tmp2;
if (tmp2) {
  _process = tmp2.exports === tmp;
}
if (_process) {
  _process = _mod610.process;
}

export default (() => {
  try {
    let types = module;
    if (module) {
      types = obj.require;
    }
    if (types) {
      types = obj.require("util").types;
    }
    if (!types) {
      let binding = _process;
      if (_process) {
        binding = obj2.binding;
      }
      if (binding) {
        binding = obj2.binding("util");
      }
      types = binding;
    }
    return types;
  } catch (err) {}
})();
