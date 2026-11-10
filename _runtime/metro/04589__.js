// _runtime/metro/04589__.js
import module_4426_mod from "04426__.js";
import module_4577_mod from "04577__.js";
import requiredArgs_mod from "../04423_requiredArgs.js";

let module_4426 = module_4426_mod;
if (!module_4426) {
  const obj = { default: module_4426 };
  let tmp3 = obj;
} else {
  tmp3 = module_4426;
}
module_4426 = tmp3;
let module_4577 = module_4577_mod;
if (!module_4577) {
  const obj2 = { default: module_4577 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4577;
}
module_4577 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4577.default(interval, 1000 * module_4426.default(arg1));
};
export default exports.default;