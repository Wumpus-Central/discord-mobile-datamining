// _runtime/metro/04651__.js
import module_4641_mod from "04641__.js";
import requiredArgs_mod from "../04295_requiredArgs.js";

let module_4641 = module_4641_mod;
if (!module_4641) {
  const obj = { default: module_4641 };
  let tmp3 = obj;
} else {
  tmp3 = module_4641;
}
module_4641 = tmp3;
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
  return module_4641.default(arg0, Date.now());
};
export default exports.default;