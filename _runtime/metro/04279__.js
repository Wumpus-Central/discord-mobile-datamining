// _runtime/metro/04279__.js
import module_4061_mod from "04061__.js";
import module_4094_mod from "04094__.js";
import requiredArgs_mod from "../03914_requiredArgs.js";

let module_4061 = module_4061_mod;
if (!module_4061) {
  const obj = { default: module_4061 };
  let tmp3 = obj;
} else {
  tmp3 = module_4061;
}
module_4061 = tmp3;
let module_4094 = module_4094_mod;
if (!module_4094) {
  const obj2 = { default: module_4094 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4094;
}
module_4094 = tmp5;
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
  return module_4094.default(arg0, module_4061.default(Date.now(), 1));
};
export default exports.default;