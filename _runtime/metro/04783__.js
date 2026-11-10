// _runtime/metro/04783__.js
import module_4775_mod from "04775__.js";
import requiredArgs_mod from "../04423_requiredArgs.js";

let module_4775 = module_4775_mod;
if (!module_4775) {
  const obj = { default: module_4775 };
  let tmp3 = obj;
} else {
  tmp3 = module_4775;
}
module_4775 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4775.default(Date.now(), arg0);
};
export default exports.default;