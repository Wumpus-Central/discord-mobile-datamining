// _runtime/metro/04275__.js
import module_4267_mod from "04267__.js";
import requiredArgs_mod from "../03916_requiredArgs.js";

let module_4267 = module_4267_mod;
if (!module_4267) {
  const obj = { default: module_4267 };
  let tmp3 = obj;
} else {
  tmp3 = module_4267;
}
module_4267 = tmp3;
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
  return module_4267.default(Date.now(), arg0);
};
export default exports.default;