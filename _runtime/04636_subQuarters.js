// _runtime/04636_subQuarters.js
import module_4203_mod from "metro/04203__.js";
import module_4365_mod from "metro/04365__.js";
import requiredArgs_mod from "04200_requiredArgs.js";

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4365 = module_4365_mod;
if (!module_4365) {
  const obj2 = { default: module_4365 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4365;
}
module_4365 = tmp5;
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
  return module_4365.default(arg0, -module_4203.default(arg1));
};
export default exports.default;