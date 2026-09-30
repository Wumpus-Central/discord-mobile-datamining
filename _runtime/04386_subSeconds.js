// === Module 4386: subSeconds ===

// Module 4386 (subSeconds)
import module_3952_mod from "module_3952" /* 3952 */;
import module_4115_mod from "module_4115" /* 4115 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_3952 = module_3952_mod;
if (!module_3952) {
  const obj = { default: module_3952 };
  let tmp3 = obj;
} else {
  tmp3 = module_3952;
}
module_3952 = tmp3;
let module_4115 = module_4115_mod;
if (!module_4115) {
  const obj2 = { default: module_4115 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4115;
}
module_4115 = tmp5;
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
  return module_4115.default(arg0, -module_3952.default(arg1));
};
export default exports.default;