// === Module 3964: ? ===

// Module 3964
import _mod3700 from "module_3700" /* 3700 */;
import assign from "assign" /* 3945 */;

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3700.getDefaultOptions());
};
export default exports.default;