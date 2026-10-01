// === Module 4216: ? ===

// Module 4216
import _mod3952 from "module_3952" /* 3952 */;
import assign_mod from "assign" /* 4197 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3952.getDefaultOptions());
};
export default exports.default;