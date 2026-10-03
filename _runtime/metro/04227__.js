// === Module 4227: ? ===

// Module 4227
import _mod3963 from "module_3963" /* 3963 */;
import assign_mod from "assign" /* 4208 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3963.getDefaultOptions());
};
export default exports.default;