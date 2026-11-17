// === Module 4858: ? ===

// Module 4858
import _mod4594 from "module_4594" /* 4594 */;
import assign_mod from "assign" /* 4839 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4594.getDefaultOptions());
};
export default exports.default;