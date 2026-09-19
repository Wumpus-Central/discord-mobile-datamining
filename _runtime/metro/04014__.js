// _runtime/metro/04014__.js
import module_3849_mod from "03849__.js";
import module_3994_mod from "03994__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let module_3994 = module_3994_mod;
if (!module_3994) {
  const obj2 = { default: module_3994 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3994;
}
module_3994 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3994.default(interval, 12 * module_3849.default(arg1));
};
export default exports.default;