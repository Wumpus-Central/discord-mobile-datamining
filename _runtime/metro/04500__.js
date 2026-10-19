// === Module 4500: ? ===

// Module 4500
import _mod4236 from "module_4236" /* 4236 */;
import assign_mod from "assign" /* 4481 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4236.getDefaultOptions());
};
export default exports.default;