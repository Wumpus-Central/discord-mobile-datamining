// _runtime/metro/04115__.js
import module_3951_mod from "03951__.js";
import module_4095_mod from "04095__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let module_4095 = module_4095_mod;
if (!module_4095) {
  const obj2 = { default: module_4095 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4095;
}
module_4095 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4095.default(arg0, 7 * module_3951.default(arg1));
};
export default exports.default;