// === Module 3997: ? ===

// Module 3997
import _mod3733 from "module_3733" /* 3733 */;
import assign_mod from "assign" /* 3978 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3733.getDefaultOptions());
};
export default exports.default;