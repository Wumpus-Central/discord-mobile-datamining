// _runtime/metro/04314__.js
import module_4096_mod from "04096__.js";
import module_4129_mod from "04129__.js";
import requiredArgs_mod from "../03949_requiredArgs.js";

let module_4096 = module_4096_mod;
if (!module_4096) {
  const obj = { default: module_4096 };
  let tmp3 = obj;
} else {
  tmp3 = module_4096;
}
module_4096 = tmp3;
let module_4129 = module_4129_mod;
if (!module_4129) {
  const obj2 = { default: module_4129 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4129;
}
module_4129 = tmp5;
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
  return module_4129.default(arg0, module_4096.default(Date.now(), 1));
};
export default exports.default;