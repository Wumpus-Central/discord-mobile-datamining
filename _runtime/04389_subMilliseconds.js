// === Module 4389: subMilliseconds ===

// Module 4389 (subMilliseconds)
import module_4311_mod from "module_4311" /* 4311 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;
import module_4160_mod from "module_4160" /* 4160 */;

let module_4311 = module_4311_mod;
if (!module_4311) {
  const obj = { default: module_4311 };
  let tmp3 = obj;
} else {
  tmp3 = module_4311;
}
module_4311 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj3 = { default: module_4160 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4160;
}
module_4160 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4311.default(arg0, -module_4160.default(arg1));
};
export default exports.default;