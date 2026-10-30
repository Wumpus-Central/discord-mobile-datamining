// _runtime/04725_subMinutes.js
import module_4454_mod from "metro/04454__.js";
import requiredArgs_mod from "04290_requiredArgs.js";
import module_4293_mod from "metro/04293__.js";

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj3 = { default: module_4293 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4293;
}
module_4293 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4454.default(arg0, -module_4293.default(arg1));
};
export default exports.default;