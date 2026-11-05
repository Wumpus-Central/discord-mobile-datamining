// === Module 4692: ? ===

// Module 4692
import _mod4428 from "module_4428" /* 4428 */;
import assign_mod from "assign" /* 4673 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4428.getDefaultOptions());
};
export default exports.default;