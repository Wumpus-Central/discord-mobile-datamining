// _runtime/04862_subYears.js
import module_4426_mod from "metro/04426__.js";
import module_4591_mod from "metro/04591__.js";
import requiredArgs_mod from "04423_requiredArgs.js";

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let module_4591 = module_4591_mod;
if (!module_4591) {
  const obj2 = { default: module_4591 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4591;
}
module_4591 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4591.default(arg0, -module_4426.default(arg1));
};
export default exports.default;