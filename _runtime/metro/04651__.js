// _runtime/metro/04651__.js
import module_4643_mod from "04643__.js";
import requiredArgs_mod from "../04289_requiredArgs.js";

let module_4643 = module_4643_mod;
if (!module_4643) {
  const obj = { default: module_4643 };
  let tmp3 = obj;
} else {
  tmp3 = module_4643;
}
module_4643 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4643.default(arg0, Date.now());
};
export default exports.default;