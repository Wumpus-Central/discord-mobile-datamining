// === Module 4521: ? ===

// Module 4521
import _mod4257 from "module_4257" /* 4257 */;
import assign_mod from "assign" /* 4502 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4257.getDefaultOptions());
};
export default exports.default;