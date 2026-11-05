// _runtime/metro/04591__.js
import module_4427_mod from "04427__.js";
import module_4571_mod from "04571__.js";
import requiredArgs_mod from "../04424_requiredArgs.js";

let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj = { default: module_4427 };
  let tmp3 = obj;
} else {
  tmp3 = module_4427;
}
module_4427 = tmp3;
let module_4571 = module_4571_mod;
if (!module_4571) {
  const obj2 = { default: module_4571 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4571;
}
module_4571 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4571.default(arg0, 7 * module_4427.default(arg1));
};
export default exports.default;