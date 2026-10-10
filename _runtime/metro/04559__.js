// _runtime/metro/04559__.js
import module_4551_mod from "04551__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4551 = module_4551_mod;
if (!module_4551) {
  const obj = { default: module_4551 };
  let tmp3 = obj;
} else {
  tmp3 = module_4551;
}
module_4551 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4551.default(Date.now(), arg0);
};
export default exports.default;