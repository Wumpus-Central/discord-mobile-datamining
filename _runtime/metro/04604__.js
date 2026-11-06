// _runtime/metro/04604__.js
import module_4454_mod from "04454__.js";
import module_4605_mod from "04605__.js";
import requiredArgs_mod from "../04451_requiredArgs.js";

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let module_4605 = module_4605_mod;
if (!module_4605) {
  const obj2 = { default: module_4605 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4605;
}
module_4605 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4605.default(interval, module_4454.default(arg1) * c3);
};
export default exports.default;