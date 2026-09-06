// === Module 583: mapValues ===

// Module 583 (mapValues)
import baseAssignValue from "baseAssignValue" /* 668 */;


export default function mapValues(arg0, arg1) {
  _require = arg1;
  const obj = {};
  _require = require("baseIteratee")(arg1, 3);
  require("module_528")(arg0, (arg0, arg1, arg2) => {
    baseAssignValue(obj, arg1, closure_0(arg0, arg1, arg2));
  });
  return obj;
};