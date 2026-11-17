// _runtime/metro/04951__.js
import module_4937_mod from "04937__.js";
import requiredArgs_mod from "../04590_requiredArgs.js";

let module_4937 = module_4937_mod;
if (!module_4937) {
  const obj = { default: module_4937 };
  let tmp3 = obj;
} else {
  tmp3 = module_4937;
}
module_4937 = tmp3;
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
  return module_4937.default(arg0, Date.now(), arg1);
};
export default exports.default;