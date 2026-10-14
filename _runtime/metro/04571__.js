// _runtime/metro/04571__.js
import module_4382_mod from "04382__.js";
import subDays_mod from "../04572_subDays.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4382 = module_4382_mod;
if (!module_4382) {
  const obj = { default: module_4382 };
  let tmp3 = obj;
} else {
  tmp3 = module_4382;
}
module_4382 = tmp3;
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
  return module_4382.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;