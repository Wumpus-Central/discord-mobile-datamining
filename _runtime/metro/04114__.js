// === Module 4114: ? ===

// Module 4114
import _mod3850 from "module_3850" /* 3850 */;
import assign_mod from "assign" /* 4095 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3850.getDefaultOptions());
};
export default exports.default;