// _runtime/metro/04618__.js
import module_4610_mod from "04610__.js";
import requiredArgs_mod from "../04259_requiredArgs.js";

let module_4610 = module_4610_mod;
if (!module_4610) {
  const obj = { default: module_4610 };
  let tmp3 = obj;
} else {
  tmp3 = module_4610;
}
module_4610 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4610.default(Date.now(), arg0);
};
export default exports.default;