// _runtime/metro/04069__.js
import module_3919_mod from "03919__.js";
import module_4070_mod from "04070__.js";
import requiredArgs_mod from "../03916_requiredArgs.js";

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let module_4070 = module_4070_mod;
if (!module_4070) {
  const obj2 = { default: module_4070 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4070;
}
module_4070 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4070.default(interval, module_3919.default(arg1) * c3);
};
export default exports.default;