// _runtime/metro/04778__.js
import module_4770_mod from "04770__.js";
import requiredArgs_mod from "../04421_requiredArgs.js";

let module_4770 = module_4770_mod;
if (!module_4770) {
  const obj = { default: module_4770 };
  let tmp3 = obj;
} else {
  tmp3 = module_4770;
}
module_4770 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4770.default(Date.now(), arg0);
};
export default exports.default;