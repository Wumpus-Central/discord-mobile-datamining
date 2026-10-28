// _runtime/04724_subQuarters.js
import module_4291_mod from "metro/04291__.js";
import module_4453_mod from "metro/04453__.js";
import requiredArgs_mod from "04288_requiredArgs.js";

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let module_4453 = module_4453_mod;
if (!module_4453) {
  const obj2 = { default: module_4453 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4453;
}
module_4453 = tmp5;
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
  return module_4453.default(arg0, -module_4291.default(arg1));
};
export default exports.default;