// _runtime/metro/04307__.js
import module_4299_mod from "04299__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_4299 = module_4299_mod;
if (!module_4299) {
  const obj = { default: module_4299 };
  let tmp3 = obj;
} else {
  tmp3 = module_4299;
}
module_4299 = tmp3;
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
  return module_4299.default(Date.now(), arg0);
};
export default exports.default;