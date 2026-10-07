// === Module 4233: ? ===

// Module 4233
import _mod3969 from "module_3969" /* 3969 */;
import assign_mod from "assign" /* 4214 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3969.getDefaultOptions());
};
export default exports.default;