// === Module 4468: ? ===

// Module 4468
import _mod4204 from "module_4204" /* 4204 */;
import assign_mod from "assign" /* 4449 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4204.getDefaultOptions());
};
export default exports.default;