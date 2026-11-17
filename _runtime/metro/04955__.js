// _runtime/metro/04955__.js
import module_4737_mod from "04737__.js";
import module_4770_mod from "04770__.js";
import requiredArgs_mod from "../04590_requiredArgs.js";

let module_4737 = module_4737_mod;
if (!module_4737) {
  const obj = { default: module_4737 };
  let tmp3 = obj;
} else {
  tmp3 = module_4737;
}
module_4737 = tmp3;
let module_4770 = module_4770_mod;
if (!module_4770) {
  const obj2 = { default: module_4770 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4770;
}
module_4770 = tmp5;
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
  return module_4770.default(arg0, module_4737.default(Date.now(), 1));
};
export default exports.default;