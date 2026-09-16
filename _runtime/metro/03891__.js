// _runtime/metro/03891__.js
import module_3730_mod from "03730__.js";
import module_3881_mod from "03881__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj2 = { default: module_3881 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3881;
}
module_3881 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3881.default(interval, module_3730.default(arg1) * c3);
};
export default exports.default;