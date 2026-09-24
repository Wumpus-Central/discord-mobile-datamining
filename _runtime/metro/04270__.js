// _runtime/metro/04270__.js
import module_4260_mod from "04260__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_4260 = module_4260_mod;
if (!module_4260) {
  const obj = { default: module_4260 };
  let tmp3 = obj;
} else {
  tmp3 = module_4260;
}
module_4260 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_4260.default(arg0, Date.now());
};
export default exports.default;