// === Module 4470: ? ===

// Module 4470
import _mod4206 from "module_4206" /* 4206 */;
import assign_mod from "assign" /* 4451 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4206.getDefaultOptions());
};
export default exports.default;