// _runtime/metro/04094__.js
import module_3876_mod from "03876__.js";
import module_3909_mod from "03909__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
let module_3909 = module_3909_mod;
if (!module_3909) {
  const obj2 = { default: module_3909 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3909;
}
module_3909 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3909.default(arg0, module_3876.default(Date.now(), 1));
};
export default exports.default;