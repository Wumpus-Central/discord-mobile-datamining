// _runtime/metro/04271__.js
import module_4263_mod from "04263__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_4263 = module_4263_mod;
if (!module_4263) {
  const obj = { default: module_4263 };
  let tmp3 = obj;
} else {
  tmp3 = module_4263;
}
module_4263 = tmp3;
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
  return module_4263.default(Date.now(), arg0);
};
export default exports.default;