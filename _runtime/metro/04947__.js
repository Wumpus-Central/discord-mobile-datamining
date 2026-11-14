// === Module 4947: ? ===

// Module 4947
import module_4933_mod from "module_4933" /* 4933 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

let module_4933 = module_4933_mod;
if (!module_4933) {
  const obj = { default: module_4933 };
  let tmp3 = obj;
} else {
  tmp3 = module_4933;
}
module_4933 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4933.default(arg0, Date.now(), arg1);
};
export default exports.default;