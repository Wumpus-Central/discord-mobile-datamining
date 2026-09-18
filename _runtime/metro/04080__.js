// === Module 4080: ? ===

// Module 4080
import _mod3816 from "module_3816" /* 3816 */;
import assign_mod from "assign" /* 4061 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3816.getDefaultOptions());
};
export default exports.default;