// === Module 4557: ? ===

// Module 4557
import _mod4293 from "module_4293" /* 4293 */;
import assign_mod from "assign" /* 4538 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4293.getDefaultOptions());
};
export default exports.default;