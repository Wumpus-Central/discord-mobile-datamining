// === Module 4184: ? ===

// Module 4184
import _mod3920 from "module_3920" /* 3920 */;
import assign_mod from "assign" /* 4165 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3920.getDefaultOptions());
};
export default exports.default;