// === Module 3995: ? ===

// Module 3995
import _mod3731 from "module_3731" /* 3731 */;
import assign_mod from "assign" /* 3976 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3731.getDefaultOptions());
};
export default exports.default;