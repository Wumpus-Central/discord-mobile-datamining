// === Module 624: _process ===

// Module 624 (_process)
import _mod610 from "module_610" /* 610 */;

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
      types = module.require;
    }
    if (types) {
      types = module.require("util").types;
    }
    if (!types) {
      let binding = _process;
      if (_process) {
        binding = _process.binding;
      }
      if (binding) {
        binding = _process.binding("util");
      }
      types = binding;
    }
    return types;
  } catch (err) {
  }
})();