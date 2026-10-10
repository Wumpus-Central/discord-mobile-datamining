// _runtime/metro/04355__.js
import module_4203_mod from "04203__.js";
import module_4356_mod from "04356__.js";
import module_4359_mod from "04359__.js";
import requiredArgs_mod from "../04200_requiredArgs.js";

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4356 = module_4356_mod;
if (!module_4356) {
  const obj2 = { default: module_4356 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4356;
}
module_4356 = tmp5;
let module_4359 = module_4359_mod;
if (!module_4359) {
  const obj3 = { default: module_4359 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4359;
}
module_4359 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4359.default(arg0, module_4356.default(arg0) + module_4203.default(arg1));
};
export default exports.default;