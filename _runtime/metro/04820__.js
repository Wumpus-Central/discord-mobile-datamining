// _runtime/metro/04820__.js
import module_4631_mod from "04631__.js";
import subDays_mod from "../04821_subDays.js";
import requiredArgs_mod from "../04451_requiredArgs.js";

let module_4631 = module_4631_mod;
if (!module_4631) {
  const obj = { default: module_4631 };
  let tmp3 = obj;
} else {
  tmp3 = module_4631;
}
module_4631 = tmp3;
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
  return module_4631.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;