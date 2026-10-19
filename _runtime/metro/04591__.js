// _runtime/metro/04591__.js
import module_4583_mod from "04583__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4583 = module_4583_mod;
if (!module_4583) {
  const obj = { default: module_4583 };
  let tmp3 = obj;
} else {
  tmp3 = module_4583;
}
module_4583 = tmp3;
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
  return module_4583.default(Date.now(), arg0);
};
export default exports.default;