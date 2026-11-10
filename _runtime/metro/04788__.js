// _runtime/metro/04788__.js
import module_4570_mod from "04570__.js";
import module_4603_mod from "04603__.js";
import requiredArgs_mod from "../04423_requiredArgs.js";

let module_4570 = module_4570_mod;
if (!module_4570) {
  const obj = { default: module_4570 };
  let tmp3 = obj;
} else {
  tmp3 = module_4570;
}
module_4570 = tmp3;
let module_4603 = module_4603_mod;
if (!module_4603) {
  const obj2 = { default: module_4603 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4603;
}
module_4603 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4603.default(arg0, module_4570.default(Date.now(), 1));
};
export default exports.default;