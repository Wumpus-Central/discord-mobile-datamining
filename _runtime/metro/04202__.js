// _runtime/metro/04202__.js
import module_4192_mod from "04192__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_4192 = module_4192_mod;
if (!module_4192) {
  const obj = { default: module_4192 };
  let tmp3 = obj;
} else {
  tmp3 = module_4192;
}
module_4192 = tmp3;
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
  return module_4192.default(arg0, Date.now());
};
export default exports.default;