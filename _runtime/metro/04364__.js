// _runtime/metro/04364__.js
import module_4203_mod from "04203__.js";
import module_4354_mod from "04354__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4354 = module_4354_mod;
if (!module_4354) {
  const obj2 = { default: module_4354 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4354;
}
module_4354 = tmp5;
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
  return module_4354.default(interval, module_4203.default(arg1) * c3);
};
export default exports.default;