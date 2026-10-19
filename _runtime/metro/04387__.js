// _runtime/metro/04387__.js
import module_4235_mod from "04235__.js";
import module_4388_mod from "04388__.js";
import module_4391_mod from "04391__.js";
import requiredArgs_mod from "../04232_requiredArgs.js";

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
let module_4388 = module_4388_mod;
if (!module_4388) {
  const obj2 = { default: module_4388 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4388;
}
module_4388 = tmp5;
let module_4391 = module_4391_mod;
if (!module_4391) {
  const obj3 = { default: module_4391 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4391;
}
module_4391 = tmp7;
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
  return module_4391.default(arg0, module_4388.default(arg0) + module_4235.default(arg1));
};
export default exports.default;