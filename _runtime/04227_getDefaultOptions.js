// === Module 4227: getDefaultOptions ===

// Module 4227 (getDefaultOptions)
import _mod3963 from "module_3963" /* 3963 */;
import assign_mod from "assign" /* 4208 */;

let tmp3;
let assign = assign_mod;
if (!assign) {
  tmp3 = { default: assign };
  const obj = { default: assign };
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3963.getDefaultOptions());
};