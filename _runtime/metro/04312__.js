// _runtime/metro/04312__.js
import module_4160_mod from "04160__.js";
import module_4313_mod from "04313__.js";
import module_4316_mod from "04316__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";

let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj = { default: module_4160 };
  let tmp3 = obj;
} else {
  tmp3 = module_4160;
}
module_4160 = tmp3;
let module_4313 = module_4313_mod;
if (!module_4313) {
  const obj2 = { default: module_4313 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4313;
}
module_4313 = tmp5;
let module_4316 = module_4316_mod;
if (!module_4316) {
  const obj3 = { default: module_4316 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4316;
}
module_4316 = tmp7;
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
  return module_4316.default(arg0, module_4313.default(arg0) + module_4160.default(arg1));
};
export default exports.default;