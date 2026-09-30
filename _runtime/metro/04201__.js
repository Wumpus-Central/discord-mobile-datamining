// _runtime/metro/04201__.js
import module_4199_mod from "04199__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_4199 = module_4199_mod;
if (!module_4199) {
  const obj = { default: module_4199 };
  let tmp3 = obj;
} else {
  tmp3 = module_4199;
}
module_4199 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4199.default(arg0, Date.now(), arg1);
};
export default exports.default;