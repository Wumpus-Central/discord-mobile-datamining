// === Module 624: _process ===

// Module 624 (_process)
let tmp = typeof exports === "ay";
if (typeof exports !== "window") {
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
  tmp2 = typeof module === "ay";
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
let c0 = tmp2;
let _process = tmp2;
if (tmp2) {
  _process = tmp2.exports === tmp;
}
if (_process) {
  _process = require("module_610").process;
}

export default (() => {
  try {
    let types = closure_0;
    if (closure_0) {
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
  } catch (err) {
  }
})();