// _runtime/metro/04528__.js
import module_4339_mod from "04339__.js";
import subDays_mod from "../04529_subDays.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let module_4339 = module_4339_mod;
if (!module_4339) {
  const obj = { default: module_4339 };
  let tmp3 = obj;
} else {
  tmp3 = module_4339;
}
module_4339 = tmp3;
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
  return module_4339.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;