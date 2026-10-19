// _runtime/metro/04601__.js
import module_4412_mod from "04412__.js";
import subDays_mod from "../04602_subDays.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4412 = module_4412_mod;
if (!module_4412) {
  const obj = { default: module_4412 };
  let tmp3 = obj;
} else {
  tmp3 = module_4412;
}
module_4412 = tmp3;
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
  return module_4412.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;