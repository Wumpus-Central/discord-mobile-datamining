// _runtime/metro/04305__.js
import module_4297_mod from "04297__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_4297 = module_4297_mod;
if (!module_4297) {
  const obj = { default: module_4297 };
  let tmp3 = obj;
} else {
  tmp3 = module_4297;
}
module_4297 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4297.default(Date.now(), arg0);
};
export default exports.default;