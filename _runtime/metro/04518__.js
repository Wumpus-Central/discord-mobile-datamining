// _runtime/metro/04518__.js
import module_4504_mod from "04504__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4504 = module_4504_mod;
if (!module_4504) {
  const obj = { default: module_4504 };
  let tmp3 = obj;
} else {
  tmp3 = module_4504;
}
module_4504 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4504.default(arg0, Date.now(), arg1);
};
export default exports.default;