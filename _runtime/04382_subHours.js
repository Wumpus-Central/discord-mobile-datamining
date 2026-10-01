// _runtime/04382_subHours.js
import module_4101_mod from "metro/04101__.js";
import requiredArgs_mod from "03948_requiredArgs.js";
import module_3951_mod from "metro/03951__.js";

let module_4101 = module_4101_mod;
if (!module_4101) {
  const obj = { default: module_4101 };
  let tmp3 = obj;
} else {
  tmp3 = module_4101;
}
module_4101 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj3 = { default: module_3951 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3951;
}
module_3951 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4101.default(arg0, -module_3951.default(arg1));
};
export default exports.default;