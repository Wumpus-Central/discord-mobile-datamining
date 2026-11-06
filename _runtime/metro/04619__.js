// _runtime/metro/04619__.js
import module_4454_mod from "04454__.js";
import module_4599_mod from "04599__.js";
import requiredArgs_mod from "../04451_requiredArgs.js";

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let module_4599 = module_4599_mod;
if (!module_4599) {
  const obj2 = { default: module_4599 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4599;
}
module_4599 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4599.default(interval, 12 * module_4454.default(arg1));
};
export default exports.default;