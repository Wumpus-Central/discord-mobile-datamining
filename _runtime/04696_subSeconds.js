// === Module 4696: subSeconds ===

// Module 4696 (subSeconds)
import module_4262_mod from "module_4262" /* 4262 */;
import module_4425_mod from "module_4425" /* 4425 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj2 = { default: module_4425 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4425;
}
module_4425 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4425.default(arg0, -module_4262.default(arg1));
};
export default exports.default;