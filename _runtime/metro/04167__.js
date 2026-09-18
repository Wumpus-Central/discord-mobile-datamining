// _runtime/metro/04167__.js
import module_4156_mod from "04156__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let module_4156 = module_4156_mod;
if (!module_4156) {
  const obj = { default: module_4156 };
  let tmp3 = obj;
} else {
  tmp3 = module_4156;
}
module_4156 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4156.default(Date.now(), arg0);
};
export default exports.default;