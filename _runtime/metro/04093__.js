// _runtime/metro/04093__.js
import module_3909_mod from "03909__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_3909 = module_3909_mod;
if (!module_3909) {
  const obj = { default: module_3909 };
  let tmp3 = obj;
} else {
  tmp3 = module_3909;
}
module_3909 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3909.default(arg0, Date.now());
};
export default exports.default;