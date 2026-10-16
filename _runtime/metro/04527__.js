// === Module 4527: ? ===

// Module 4527
import _mod4263 from "module_4263" /* 4263 */;
import assign_mod from "assign" /* 4508 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4263.getDefaultOptions());
};
export default exports.default;