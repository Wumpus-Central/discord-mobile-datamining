// _runtime/04720_subMonths.js
import module_4291_mod from "metro/04291__.js";
import module_4436_mod from "metro/04436__.js";
import requiredArgs_mod from "04288_requiredArgs.js";

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj2 = { default: module_4436 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4436;
}
module_4436 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4436.default(arg0, -module_4291.default(arg1));
};
export default exports.default;