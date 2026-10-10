// _runtime/metro/04558__.js
import module_4550_mod from "04550__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4550 = module_4550_mod;
if (!module_4550) {
  const obj = { default: module_4550 };
  let tmp3 = obj;
} else {
  tmp3 = module_4550;
}
module_4550 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4550.default(Date.now(), arg0);
};
export default exports.default;