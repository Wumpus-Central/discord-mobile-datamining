// === Module 4180: ? ===

// Module 4180
import _mod3916 from "module_3916" /* 3916 */;
import assign_mod from "assign" /* 4161 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3916.getDefaultOptions());
};
export default exports.default;