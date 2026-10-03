// _runtime/metro/04315__.js
import module_4305_mod from "04305__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4305 = module_4305_mod;
if (!module_4305) {
  const obj = { default: module_4305 };
  let tmp3 = obj;
} else {
  tmp3 = module_4305;
}
module_4305 = tmp3;
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
  return module_4305.default(arg0, Date.now());
};
export default exports.default;