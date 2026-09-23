// _runtime/metro/04277__.js
import module_4059_mod from "04059__.js";
import module_4092_mod from "04092__.js";
import requiredArgs_mod from "../03912_requiredArgs.js";

let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj = { default: module_4059 };
  let tmp3 = obj;
} else {
  tmp3 = module_4059;
}
module_4059 = tmp3;
let module_4092 = module_4092_mod;
if (!module_4092) {
  const obj2 = { default: module_4092 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4092;
}
module_4092 = tmp5;
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
  return module_4092.default(arg0, module_4059.default(Date.now(), 1));
};
export default exports.default;