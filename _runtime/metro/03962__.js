// === Module 3962: ? ===

// Module 3962
import _mod3698 from "module_3698" /* 3698 */;
import assign from "assign" /* 3943 */;

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3698.getDefaultOptions());
};
export default exports.default;