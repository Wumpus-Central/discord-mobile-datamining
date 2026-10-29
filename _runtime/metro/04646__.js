// _runtime/metro/04646__.js
import module_4638_mod from "04638__.js";
import requiredArgs_mod from "../04289_requiredArgs.js";

let module_4638 = module_4638_mod;
if (!module_4638) {
  const obj = { default: module_4638 };
  let tmp3 = obj;
} else {
  tmp3 = module_4638;
}
module_4638 = tmp3;
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
  return module_4638.default(Date.now(), arg0);
};
export default exports.default;