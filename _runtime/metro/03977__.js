// _runtime/metro/03977__.js
import module_3973_mod from "03973__.js";
import requiredArgs_mod from "../03726_requiredArgs.js";

let module_3973 = module_3973_mod;
if (!module_3973) {
  const obj = { default: module_3973 };
  let tmp3 = obj;
} else {
  tmp3 = module_3973;
}
module_3973 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3973.default(arg0, Date.now(), arg1);
};
export default exports.default;