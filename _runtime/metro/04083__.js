// _runtime/metro/04083__.js
import module_4075_mod from "04075__.js";
import requiredArgs_mod from "../03726_requiredArgs.js";

let module_4075 = module_4075_mod;
if (!module_4075) {
  const obj = { default: module_4075 };
  let tmp3 = obj;
} else {
  tmp3 = module_4075;
}
module_4075 = tmp3;
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
  return module_4075.default(Date.now(), arg0);
};
export default exports.default;