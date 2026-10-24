// === Module 4523: ? ===

// Module 4523
import _mod4259 from "module_4259" /* 4259 */;
import assign_mod from "assign" /* 4504 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4259.getDefaultOptions());
};
export default exports.default;