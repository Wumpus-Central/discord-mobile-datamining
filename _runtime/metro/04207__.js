// _runtime/metro/04207__.js
import module_4193_mod from "04193__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_4193 = module_4193_mod;
if (!module_4193) {
  const obj = { default: module_4193 };
  let tmp3 = obj;
} else {
  tmp3 = module_4193;
}
module_4193 = tmp3;
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
  return module_4193.default(arg0, Date.now(), arg1);
};
export default exports.default;