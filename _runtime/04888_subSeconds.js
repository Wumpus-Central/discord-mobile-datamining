// _runtime/04888_subSeconds.js
import module_4454_mod from "metro/04454__.js";
import module_4617_mod from "metro/04617__.js";
import requiredArgs_mod from "04451_requiredArgs.js";

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let module_4617 = module_4617_mod;
if (!module_4617) {
  const obj2 = { default: module_4617 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4617;
}
module_4617 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4617.default(arg0, -module_4454.default(arg1));
};
export default exports.default;