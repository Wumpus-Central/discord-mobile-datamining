// _runtime/metro/04445__.js
import module_4293_mod from "04293__.js";
import module_4446_mod from "04446__.js";
import module_4449_mod from "04449__.js";
import requiredArgs_mod from "../04290_requiredArgs.js";

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let module_4446 = module_4446_mod;
if (!module_4446) {
  const obj2 = { default: module_4446 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4446;
}
module_4446 = tmp5;
let module_4449 = module_4449_mod;
if (!module_4449) {
  const obj3 = { default: module_4449 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4449;
}
module_4449 = tmp7;
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
  return module_4449.default(arg0, module_4446.default(arg0) + module_4293.default(arg1));
};
export default exports.default;