// _runtime/metro/04120__.js
import module_3968_mod from "03968__.js";
import module_4121_mod from "04121__.js";
import module_4124_mod from "04124__.js";
import requiredArgs_mod from "../03965_requiredArgs.js";

let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj = { default: module_3968 };
  let tmp3 = obj;
} else {
  tmp3 = module_3968;
}
module_3968 = tmp3;
let module_4121 = module_4121_mod;
if (!module_4121) {
  const obj2 = { default: module_4121 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4121;
}
module_4121 = tmp5;
let module_4124 = module_4124_mod;
if (!module_4124) {
  const obj3 = { default: module_4124 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4124;
}
module_4124 = tmp7;
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
  return module_4124.default(arg0, module_4121.default(arg0) + module_3968.default(arg1));
};
export default exports.default;