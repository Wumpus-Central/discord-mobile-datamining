// _runtime/metro/04309__.js
import module_4301_mod from "04301__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_4301 = module_4301_mod;
if (!module_4301) {
  const obj = { default: module_4301 };
  let tmp3 = obj;
} else {
  tmp3 = module_4301;
}
module_4301 = tmp3;
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
  return module_4301.default(Date.now(), arg0);
};
export default exports.default;