// _runtime/metro/04357__.js
import module_4205_mod from "04205__.js";
import module_4358_mod from "04358__.js";
import module_4361_mod from "04361__.js";
import requiredArgs_mod from "../04202_requiredArgs.js";

let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj = { default: module_4205 };
  let tmp3 = obj;
} else {
  tmp3 = module_4205;
}
module_4205 = tmp3;
let module_4358 = module_4358_mod;
if (!module_4358) {
  const obj2 = { default: module_4358 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4358;
}
module_4358 = tmp5;
let module_4361 = module_4361_mod;
if (!module_4361) {
  const obj3 = { default: module_4361 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4361;
}
module_4361 = tmp7;
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
  return module_4361.default(arg0, module_4358.default(arg0) + module_4205.default(arg1));
};
export default exports.default;