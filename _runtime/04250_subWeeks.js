// _runtime/04250_subWeeks.js
import module_3815_mod from "metro/03815__.js";
import module_3979_mod from "metro/03979__.js";
import requiredArgs_mod from "03812_requiredArgs.js";

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let module_3979 = module_3979_mod;
if (!module_3979) {
  const obj2 = { default: module_3979 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3979;
}
module_3979 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3979.default(arg0, -module_3815.default(arg1));
};
export default exports.default;