// _runtime/metro/04169__.js
import module_4161_mod from "04161__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let module_4161 = module_4161_mod;
if (!module_4161) {
  const obj = { default: module_4161 };
  let tmp3 = obj;
} else {
  tmp3 = module_4161;
}
module_4161 = tmp3;
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
  return module_4161.default(Date.now(), arg0);
};
export default exports.default;