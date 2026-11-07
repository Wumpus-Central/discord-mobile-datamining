// _runtime/04853_subMonths.js
import module_4424_mod from "metro/04424__.js";
import module_4569_mod from "metro/04569__.js";
import requiredArgs_mod from "04421_requiredArgs.js";

let module_4424 = module_4424_mod;
if (!module_4424) {
  const obj = { default: module_4424 };
  let tmp3 = obj;
} else {
  tmp3 = module_4424;
}
module_4424 = tmp3;
let module_4569 = module_4569_mod;
if (!module_4569) {
  const obj2 = { default: module_4569 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4569;
}
module_4569 = tmp5;
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
  return module_4569.default(arg0, -module_4424.default(arg1));
};
export default exports.default;