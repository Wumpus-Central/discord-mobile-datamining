// _runtime/metro/04879__.js
import module_4869_mod from "04869__.js";
import requiredArgs_mod from "../04523_requiredArgs.js";

let module_4869 = module_4869_mod;
if (!module_4869) {
  const obj = { default: module_4869 };
  let tmp3 = obj;
} else {
  tmp3 = module_4869;
}
module_4869 = tmp3;
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
  return module_4869.default(arg0, Date.now());
};
export default exports.default;