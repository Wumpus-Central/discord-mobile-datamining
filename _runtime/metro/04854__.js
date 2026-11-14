// === Module 4854: ? ===

// Module 4854
import _mod4590 from "module_4590" /* 4590 */;
import assign_mod from "assign" /* 4835 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4590.getDefaultOptions());
};
export default exports.default;