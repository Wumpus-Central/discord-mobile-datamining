// _runtime/metro/04441__.js
import module_4291_mod from "04291__.js";
import module_4442_mod from "04442__.js";
import requiredArgs_mod from "../04288_requiredArgs.js";

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let module_4442 = module_4442_mod;
if (!module_4442) {
  const obj2 = { default: module_4442 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4442;
}
module_4442 = tmp5;
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
  return module_4442.default(interval, module_4291.default(arg1) * c3);
};
export default exports.default;