// === Module 4233: getDefaultOptions ===

// Module 4233 (getDefaultOptions)
import _mod3969 from "module_3969" /* 3969 */;
import assign_mod from "assign" /* 4214 */;

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
  return assign.default({}, _mod3969.getDefaultOptions());
};