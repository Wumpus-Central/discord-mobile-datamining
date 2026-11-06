// === Module 4719: ? ===

// Module 4719
import _mod4455 from "module_4455" /* 4455 */;
import assign_mod from "assign" /* 4700 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4455.getDefaultOptions());
};
export default exports.default;