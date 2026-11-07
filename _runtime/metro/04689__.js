// === Module 4689: ? ===

// Module 4689
import _mod4425 from "module_4425" /* 4425 */;
import assign_mod from "assign" /* 4670 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4425.getDefaultOptions());
};
export default exports.default;