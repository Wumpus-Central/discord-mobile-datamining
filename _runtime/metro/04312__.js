// _runtime/metro/04312__.js
import module_4128_mod from "04128__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_4128 = module_4128_mod;
if (!module_4128) {
  const obj = { default: module_4128 };
  let tmp3 = obj;
} else {
  tmp3 = module_4128;
}
module_4128 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4128.default(arg0, Date.now());
};
export default exports.default;