// _runtime/04858_subMinutes.js
import module_4587_mod from "metro/04587__.js";
import requiredArgs_mod from "04423_requiredArgs.js";
import module_4426_mod from "metro/04426__.js";

let module_4587 = module_4587_mod;
if (!module_4587) {
  const obj = { default: module_4587 };
  let tmp3 = obj;
} else {
  tmp3 = module_4587;
}
module_4587 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj3 = { default: module_4426 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4426;
}
module_4426 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4587.default(arg0, -module_4426.default(arg1));
};
export default exports.default;