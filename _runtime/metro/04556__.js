// === Module 4556: ? ===

// Module 4556
import _mod4292 from "module_4292" /* 4292 */;
import assign_mod from "assign" /* 4537 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4292.getDefaultOptions());
};
export default exports.default;