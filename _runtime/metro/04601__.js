// === Module 4601: ? ===

// Module 4601
import module_4602_mod from "module_4602" /* 4602 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

let module_4602 = module_4602_mod;
if (!module_4602) {
  const obj = { default: module_4602 };
  let tmp3 = obj;
} else {
  tmp3 = module_4602;
}
module_4602 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4602.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;