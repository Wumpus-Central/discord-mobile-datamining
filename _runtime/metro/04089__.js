// _runtime/metro/04089__.js
import module_4081_mod from "04081__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_4081 = module_4081_mod;
if (!module_4081) {
  const obj = { default: module_4081 };
  let tmp3 = obj;
} else {
  tmp3 = module_4081;
}
module_4081 = tmp3;
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
  return module_4081.default(Date.now(), arg0);
};
export default exports.default;