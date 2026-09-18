// _runtime/04182_subDays.js
import module_3959_mod from "metro/03959__.js";
import requiredArgs_mod from "03812_requiredArgs.js";
import module_3815_mod from "metro/03815__.js";

let module_3959 = module_3959_mod;
if (!module_3959) {
  const obj = { default: module_3959 };
  let tmp3 = obj;
} else {
  tmp3 = module_3959;
}
module_3959 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj3 = { default: module_3815 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3815;
}
module_3815 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3959.default(arg0, -module_3815.default(arg1));
};
export default exports.default;