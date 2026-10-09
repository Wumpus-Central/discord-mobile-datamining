// === Module 4427: ? ===

// Module 4427
import _mod4163 from "module_4163" /* 4163 */;
import assign_mod from "assign" /* 4408 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4163.getDefaultOptions());
};
export default exports.default;