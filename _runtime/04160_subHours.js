// _runtime/04160_subHours.js
import module_3879_mod from "metro/03879__.js";
import requiredArgs_mod from "03726_requiredArgs.js";
import module_3729_mod from "metro/03729__.js";

let module_3879 = module_3879_mod;
if (!module_3879) {
  const obj = { default: module_3879 };
  let tmp3 = obj;
} else {
  tmp3 = module_3879;
}
module_3879 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3729 = module_3729_mod;
if (!module_3729) {
  const obj3 = { default: module_3729 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3729;
}
module_3729 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3879.default(arg0, -module_3729.default(arg1));
};
export default exports.default;