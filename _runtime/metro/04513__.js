// _runtime/metro/04513__.js
import module_4503_mod from "04503__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4503 = module_4503_mod;
if (!module_4503) {
  const obj = { default: module_4503 };
  let tmp3 = obj;
} else {
  tmp3 = module_4503;
}
module_4503 = tmp3;
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
  return module_4503.default(arg0, Date.now());
};
export default exports.default;