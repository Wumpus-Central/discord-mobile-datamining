// _runtime/metro/04444__.js
import module_4292_mod from "04292__.js";
import module_4445_mod from "04445__.js";
import module_4448_mod from "04448__.js";
import requiredArgs_mod from "../04289_requiredArgs.js";

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
let module_4445 = module_4445_mod;
if (!module_4445) {
  const obj2 = { default: module_4445 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4445;
}
module_4445 = tmp5;
let module_4448 = module_4448_mod;
if (!module_4448) {
  const obj3 = { default: module_4448 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4448;
}
module_4448 = tmp7;
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
  return module_4448.default(arg0, module_4445.default(arg0) + module_4292.default(arg1));
};
export default exports.default;