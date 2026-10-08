// _runtime/metro/04526__.js
import module_4337_mod from "04337__.js";
import subDays_mod from "../04527_subDays.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4337 = module_4337_mod;
if (!module_4337) {
  const obj = { default: module_4337 };
  let tmp3 = obj;
} else {
  tmp3 = module_4337;
}
module_4337 = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  const obj2 = { default: subDays };
  let tmp5 = obj2;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4337.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;