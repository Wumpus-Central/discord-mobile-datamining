// _runtime/04391_subMonths.js
import module_3962_mod from "metro/03962__.js";
import module_4107_mod from "metro/04107__.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let module_4107 = module_4107_mod;
if (!module_4107) {
  const obj2 = { default: module_4107 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4107;
}
module_4107 = tmp5;
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
  return module_4107.default(arg0, -module_3962.default(arg1));
};
export default exports.default;