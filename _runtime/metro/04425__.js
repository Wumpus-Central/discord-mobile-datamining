// === Module 4425: ? ===

// Module 4425
import _mod4161 from "module_4161" /* 4161 */;
import assign_mod from "assign" /* 4406 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4161.getDefaultOptions());
};
export default exports.default;