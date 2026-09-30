// === Module 4217: ? ===

// Module 4217
import _mod3953 from "module_3953" /* 3953 */;
import assign_mod from "assign" /* 4198 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3953.getDefaultOptions());
};
export default exports.default;