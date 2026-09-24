// _runtime/metro/04078__.js
import module_3917_mod from "03917__.js";
import module_4068_mod from "04068__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let module_4068 = module_4068_mod;
if (!module_4068) {
  const obj2 = { default: module_4068 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4068;
}
module_4068 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4068.default(interval, module_3917.default(arg1) * c3);
};
export default exports.default;