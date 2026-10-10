// _runtime/metro/04555__.js
import module_4544_mod from "04544__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4544 = module_4544_mod;
if (!module_4544) {
  const obj = { default: module_4544 };
  let tmp3 = obj;
} else {
  tmp3 = module_4544;
}
module_4544 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4544.default(Date.now(), arg0);
};
export default exports.default;