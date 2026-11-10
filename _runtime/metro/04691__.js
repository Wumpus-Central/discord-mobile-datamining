// === Module 4691: ? ===

// Module 4691
import _mod4427 from "module_4427" /* 4427 */;
import assign_mod from "assign" /* 4672 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4427.getDefaultOptions());
};
export default exports.default;