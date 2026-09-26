// === Module 4187: ? ===

// Module 4187
import _mod3923 from "module_3923" /* 3923 */;
import assign_mod from "assign" /* 4168 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3923.getDefaultOptions());
};
export default exports.default;