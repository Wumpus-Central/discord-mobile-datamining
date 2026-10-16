// _runtime/metro/04426__.js
import module_4262_mod from "04262__.js";
import module_4406_mod from "04406__.js";
import requiredArgs_mod from "../04259_requiredArgs.js";

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj2 = { default: module_4406 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4406;
}
module_4406 = tmp5;
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
  return module_4406.default(arg0, 7 * module_4262.default(arg1));
};
export default exports.default;