// === Module 4558: ? ===

// Module 4558
import _mod4294 from "module_4294" /* 4294 */;
import assign_mod from "assign" /* 4539 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4294.getDefaultOptions());
};
export default exports.default;