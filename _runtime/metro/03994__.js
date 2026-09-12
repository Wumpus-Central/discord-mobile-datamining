// === Module 3994: ? ===

// Module 3994
import _mod3730 from "module_3730" /* 3730 */;
import assign from "assign" /* 3975 */;

if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3730.getDefaultOptions());
};
export default exports.default;