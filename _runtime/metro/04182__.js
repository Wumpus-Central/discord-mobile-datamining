// === Module 4182: ? ===

// Module 4182
import _mod3918 from "module_3918" /* 3918 */;
import assign_mod from "assign" /* 4163 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3918.getDefaultOptions());
};
export default exports.default;