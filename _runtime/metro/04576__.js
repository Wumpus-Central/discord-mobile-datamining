// _runtime/metro/04576__.js
import module_4424_mod from "04424__.js";
import module_4577_mod from "04577__.js";
import module_4580_mod from "04580__.js";
import requiredArgs_mod from "../04421_requiredArgs.js";

let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj = { default: module_4424 };
  let tmp3 = obj;
} else {
  tmp3 = module_4424;
}
module_4424 = tmp3;
let module_4577 = module_4577_mod;
if (!module_4577) {
  const obj2 = { default: module_4577 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4577;
}
module_4577 = tmp5;
let module_4580 = module_4580_mod;
if (!module_4580) {
  const obj3 = { default: module_4580 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4580;
}
module_4580 = tmp7;
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
  return module_4580.default(arg0, module_4577.default(arg0) + module_4424.default(arg1));
};
export default exports.default;