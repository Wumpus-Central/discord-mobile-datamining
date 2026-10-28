// _runtime/04722_subHours.js
import module_4441_mod from "metro/04441__.js";
import requiredArgs_mod from "04288_requiredArgs.js";
import module_4291_mod from "metro/04291__.js";

let module_4441 = module_4441_mod;
if (!module_4441) {
  const obj = { default: module_4441 };
  let tmp3 = obj;
} else {
  tmp3 = module_4441;
}
module_4441 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj3 = { default: module_4291 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4291;
}
module_4291 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4441.default(arg0, -module_4291.default(arg1));
};
export default exports.default;