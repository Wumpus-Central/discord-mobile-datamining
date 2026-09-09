// === Module 3932: ? ===

// Module 3932
import _mod3668 from "module_3668" /* 3668 */;
import assign from "assign" /* 3913 */;

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3668.getDefaultOptions());
};
export default exports.default;