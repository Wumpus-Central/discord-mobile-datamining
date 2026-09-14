// _runtime/metro/03879__.js
import module_3729_mod from "03729__.js";
import module_3880_mod from "03880__.js";
import requiredArgs_mod from "../03726_requiredArgs.js";

let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
let module_3880 = module_3880_mod;
if (!module_3880) {
  const obj2 = { default: module_3880 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3880;
}
module_3880 = tmp5;
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
  return module_3880.default(interval, module_3729.default(arg1) * c3);
};
export default exports.default;