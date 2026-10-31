// === Module 4563: ? ===

// Module 4563
import _mod4299 from "module_4299" /* 4299 */;
import assign_mod from "assign" /* 4544 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4299.getDefaultOptions());
};
export default exports.default;