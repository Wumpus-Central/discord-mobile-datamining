// === Module 4636: subQuarters ===

// Module 4636 (subQuarters)
import module_4203_mod from "module_4203" /* 4203 */;
import module_4365_mod from "module_4365" /* 4365 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4365 = module_4365_mod;
if (!module_4365) {
  const obj2 = { default: module_4365 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4365;
}
module_4365 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4365.default(arg0, -module_4203.default(arg1));
};
export default exports.default;