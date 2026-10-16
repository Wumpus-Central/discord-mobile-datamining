// _runtime/04695_subQuarters.js
import module_4262_mod from "metro/04262__.js";
import module_4424_mod from "metro/04424__.js";
import requiredArgs_mod from "04259_requiredArgs.js";

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj2 = { default: module_4424 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4424;
}
module_4424 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4424.default(arg0, -module_4262.default(arg1));
};
export default exports.default;