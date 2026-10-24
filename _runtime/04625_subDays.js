// === Module 4625: subDays ===

// Module 4625 (subDays)
import module_4402_mod from "module_4402" /* 4402 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;
import module_4258_mod from "module_4258" /* 4258 */;

let module_4402 = module_4402_mod;
if (!module_4402) {
  const obj = { default: module_4402 };
  let tmp3 = obj;
} else {
  tmp3 = module_4402;
}
module_4402 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj3 = { default: module_4258 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4258;
}
module_4258 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4402.default(arg0, -module_4258.default(arg1));
};
export default exports.default;