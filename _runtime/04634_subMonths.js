// === Module 4634: subMonths ===

// Module 4634 (subMonths)
import module_4205_mod from "module_4205" /* 4205 */;
import module_4350_mod from "module_4350" /* 4350 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj = { default: module_4205 };
  let tmp3 = obj;
} else {
  tmp3 = module_4205;
}
module_4205 = tmp3;
let module_4350 = module_4350_mod;
if (!module_4350) {
  const obj2 = { default: module_4350 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4350;
}
module_4350 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4350.default(arg0, -module_4205.default(arg1));
};
export default exports.default;