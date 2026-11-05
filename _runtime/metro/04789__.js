// _runtime/metro/04789__.js
import module_4571_mod from "04571__.js";
import module_4604_mod from "04604__.js";
import requiredArgs_mod from "../04424_requiredArgs.js";

let module_4571 = module_4571_mod;
if (!module_4571) {
  const obj = { default: module_4571 };
  let tmp3 = obj;
} else {
  tmp3 = module_4571;
}
module_4571 = tmp3;
let module_4604 = module_4604_mod;
if (!module_4604) {
  const obj2 = { default: module_4604 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4604;
}
module_4604 = tmp5;
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
  return module_4604.default(arg0, module_4571.default(Date.now(), 1));
};
export default exports.default;