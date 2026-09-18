// === Module 4174: ? ===

// Module 4174
import module_4166_mod from "module_4166" /* 4166 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_4166 = module_4166_mod;
if (!module_4166) {
  const obj = { default: module_4166 };
  let tmp3 = obj;
} else {
  tmp3 = module_4166;
}
module_4166 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4166.default(arg0, Date.now());
};
export default exports.default;