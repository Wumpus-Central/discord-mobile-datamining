// _runtime/04632_subMonths.js
import module_4203_mod from "metro/04203__.js";
import module_4348_mod from "metro/04348__.js";
import requiredArgs_mod from "04200_requiredArgs.js";

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4348 = module_4348_mod;
if (!module_4348) {
  const obj2 = { default: module_4348 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4348;
}
module_4348 = tmp5;
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
  return module_4348.default(arg0, -module_4203.default(arg1));
};
export default exports.default;