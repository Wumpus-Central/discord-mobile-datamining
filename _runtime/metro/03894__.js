// _runtime/metro/03894__.js
import module_3732_mod from "03732__.js";
import module_3877_mod from "03877__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_3732 = module_3732_mod;
if (!module_3732) {
  const obj = { default: module_3732 };
  let tmp3 = obj;
} else {
  tmp3 = module_3732;
}
module_3732 = tmp3;
let module_3877 = module_3877_mod;
if (!module_3877) {
  const obj2 = { default: module_3877 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3877;
}
module_3877 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3877.default(arg0, 3 * module_3732.default(arg1));
};
export default exports.default;