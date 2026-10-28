// _runtime/04658_subDays.js
import module_4435_mod from "metro/04435__.js";
import requiredArgs_mod from "04288_requiredArgs.js";
import module_4291_mod from "metro/04291__.js";

let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj = { default: module_4435 };
  let tmp3 = obj;
} else {
  tmp3 = module_4435;
}
module_4435 = tmp3;
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

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4435.default(arg0, -module_4291.default(arg1));
};
export default exports.default;