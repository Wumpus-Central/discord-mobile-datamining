// _runtime/04857_subBusinessDays.js
import module_4573_mod from "metro/04573__.js";
import requiredArgs_mod from "04424_requiredArgs.js";
import module_4427_mod from "metro/04427__.js";

let module_4573 = module_4573_mod;
if (!module_4573) {
  const obj = { default: module_4573 };
  let tmp3 = obj;
} else {
  tmp3 = module_4573;
}
module_4573 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj3 = { default: module_4427 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4427;
}
module_4427 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4573.default(arg0, -module_4427.default(arg1));
};
export default exports.default;