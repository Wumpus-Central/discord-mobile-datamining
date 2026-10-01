// _runtime/metro/04112__.js
import module_3951_mod from "03951__.js";
import module_4102_mod from "04102__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let module_4102 = module_4102_mod;
if (!module_4102) {
  const obj2 = { default: module_4102 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4102;
}
module_4102 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4102.default(interval, module_3951.default(arg1) * c3);
};
export default exports.default;