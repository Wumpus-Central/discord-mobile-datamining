// _runtime/metro/04884__.js
import module_4870_mod from "04870__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4870 = module_4870_mod;
if (!module_4870) {
  const obj = { default: module_4870 };
  let tmp3 = obj;
} else {
  tmp3 = module_4870;
}
module_4870 = tmp3;
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
  return module_4870.default(arg0, Date.now(), arg1);
};
export default exports.default;