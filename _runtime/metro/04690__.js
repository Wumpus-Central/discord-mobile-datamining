// === Module 4690: ? ===

// Module 4690
import _mod4426 from "module_4426" /* 4426 */;
import assign_mod from "assign" /* 4671 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4426.getDefaultOptions());
};
export default exports.default;