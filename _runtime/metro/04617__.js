// _runtime/metro/04617__.js
import module_4609_mod from "04609__.js";
import requiredArgs_mod from "../04259_requiredArgs.js";

let module_4609 = module_4609_mod;
if (!module_4609) {
  const obj = { default: module_4609 };
  let tmp3 = obj;
} else {
  tmp3 = module_4609;
}
module_4609 = tmp3;
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
  return module_4609.default(Date.now(), arg0);
};
export default exports.default;