// _runtime/metro/04075__.js
import module_4076_mod from "04076__.js";
import requiredArgs_mod from "../03729_requiredArgs.js";

let module_4076 = module_4076_mod;
if (!module_4076) {
  const obj = { default: module_4076 };
  let tmp3 = obj;
} else {
  tmp3 = module_4076;
}
module_4076 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4076.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;