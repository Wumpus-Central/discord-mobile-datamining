// _runtime/04724_subMinutes.js
import module_4453_mod from "metro/04453__.js";
import requiredArgs_mod from "04289_requiredArgs.js";
import module_4292_mod from "metro/04292__.js";

let module_4453 = module_4453_mod;
if (!module_4453) {
  const obj = { default: module_4453 };
  let tmp3 = obj;
} else {
  tmp3 = module_4453;
}
module_4453 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj3 = { default: module_4292 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4292;
}
module_4292 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4453.default(arg0, -module_4292.default(arg1));
};
export default exports.default;