// _runtime/metro/04618__.js
import module_4400_mod from "04400__.js";
import module_4433_mod from "04433__.js";
import requiredArgs_mod from "../04253_requiredArgs.js";

let module_4400 = module_4400_mod;
if (!module_4400) {
  const obj = { default: module_4400 };
  let tmp3 = obj;
} else {
  tmp3 = module_4400;
}
module_4400 = tmp3;
let module_4433 = module_4433_mod;
if (!module_4433) {
  const obj2 = { default: module_4433 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4433;
}
module_4433 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4433.default(arg0, module_4400.default(Date.now(), 1));
};
export default exports.default;