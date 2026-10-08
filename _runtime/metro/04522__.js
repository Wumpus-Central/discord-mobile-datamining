// _runtime/metro/04522__.js
import module_4304_mod from "04304__.js";
import module_4337_mod from "04337__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4304 = module_4304_mod;
if (!module_4304) {
  const obj = { default: module_4304 };
  let tmp3 = obj;
} else {
  tmp3 = module_4304;
}
module_4304 = tmp3;
let module_4337 = module_4337_mod;
if (!module_4337) {
  const obj2 = { default: module_4337 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4337;
}
module_4337 = tmp5;
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
  return module_4337.default(arg0, module_4304.default(Date.now(), 1));
};
export default exports.default;