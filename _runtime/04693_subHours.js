// _runtime/04693_subHours.js
import module_4412_mod from "metro/04412__.js";
import requiredArgs_mod from "04259_requiredArgs.js";
import module_4262_mod from "metro/04262__.js";

let module_4412 = module_4412_mod;
if (!module_4412) {
  const obj = { default: module_4412 };
  let tmp3 = obj;
} else {
  tmp3 = module_4412;
}
module_4412 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj3 = { default: module_4262 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4262;
}
module_4262 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4412.default(arg0, -module_4262.default(arg1));
};
export default exports.default;