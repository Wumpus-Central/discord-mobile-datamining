// _runtime/metro/04103__.js
import module_3951_mod from "03951__.js";
import module_4104_mod from "04104__.js";
import module_4107_mod from "04107__.js";
import requiredArgs_mod from "../03948_requiredArgs.js";

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let module_4104 = module_4104_mod;
if (!module_4104) {
  const obj2 = { default: module_4104 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4104;
}
module_4104 = tmp5;
let module_4107 = module_4107_mod;
if (!module_4107) {
  const obj3 = { default: module_4107 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4107;
}
module_4107 = tmp7;
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
  return module_4107.default(arg0, module_4104.default(arg0) + module_3951.default(arg1));
};
export default exports.default;