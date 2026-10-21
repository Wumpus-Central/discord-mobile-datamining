// _runtime/metro/04614__.js
import module_4600_mod from "04600__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4600 = module_4600_mod;
if (!module_4600) {
  const obj = { default: module_4600 };
  let tmp3 = obj;
} else {
  tmp3 = module_4600;
}
module_4600 = tmp3;
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
  return module_4600.default(arg0, Date.now(), arg1);
};
export default exports.default;