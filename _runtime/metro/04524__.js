// === Module 4524: ? ===

// Module 4524
import _mod4260 from "module_4260" /* 4260 */;
import assign_mod from "assign" /* 4505 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4260.getDefaultOptions());
};
export default exports.default;