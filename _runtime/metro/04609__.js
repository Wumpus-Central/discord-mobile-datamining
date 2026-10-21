// _runtime/metro/04609__.js
import module_4599_mod from "04599__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4599 = module_4599_mod;
if (!module_4599) {
  const obj = { default: module_4599 };
  let tmp3 = obj;
} else {
  tmp3 = module_4599;
}
module_4599 = tmp3;
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
  return module_4599.default(arg0, Date.now());
};
export default exports.default;