// _runtime/metro/04326__.js
import module_4312_mod from "04312__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_4312 = module_4312_mod;
if (!module_4312) {
  const obj = { default: module_4312 };
  let tmp3 = obj;
} else {
  tmp3 = module_4312;
}
module_4312 = tmp3;
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
  return module_4312.default(arg0, Date.now(), arg1);
};
export default exports.default;