// === Module 4384: subMinutes ===

// Module 4384 (subMinutes)
import module_4113_mod from "module_4113" /* 4113 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;
import module_3952_mod from "module_3952" /* 3952 */;

let module_4113 = module_4113_mod;
if (!module_4113) {
  const obj = { default: module_4113 };
  let tmp3 = obj;
} else {
  tmp3 = module_4113;
}
module_4113 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj3 = { default: module_3952 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3952;
}
module_3952 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4113.default(arg0, -module_3952.default(arg1));
};
export default exports.default;