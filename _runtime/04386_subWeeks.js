// _runtime/04386_subWeeks.js
import module_3951_mod from "metro/03951__.js";
import module_4115_mod from "metro/04115__.js";
import requiredArgs_mod from "03948_requiredArgs.js";

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let module_4115 = module_4115_mod;
if (!module_4115) {
  const obj2 = { default: module_4115 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4115;
}
module_4115 = tmp5;
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
  return module_4115.default(arg0, -module_3951.default(arg1));
};
export default exports.default;