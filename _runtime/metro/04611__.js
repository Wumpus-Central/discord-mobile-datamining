// _runtime/metro/04611__.js
import module_4603_mod from "04603__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4603 = module_4603_mod;
if (!module_4603) {
  const obj = { default: module_4603 };
  let tmp3 = obj;
} else {
  tmp3 = module_4603;
}
module_4603 = tmp3;
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
  return module_4603.default(Date.now(), arg0);
};
export default exports.default;