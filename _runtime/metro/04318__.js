// _runtime/metro/04318__.js
import module_4310_mod from "04310__.js";
import requiredArgs_mod from "../03959_requiredArgs.js";

let module_4310 = module_4310_mod;
if (!module_4310) {
  const obj = { default: module_4310 };
  let tmp3 = obj;
} else {
  tmp3 = module_4310;
}
module_4310 = tmp3;
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
  return module_4310.default(Date.now(), arg0);
};
export default exports.default;