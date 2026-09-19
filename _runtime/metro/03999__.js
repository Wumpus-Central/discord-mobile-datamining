// _runtime/metro/03999__.js
import module_3849_mod from "03849__.js";
import module_4000_mod from "04000__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let module_4000 = module_4000_mod;
if (!module_4000) {
  const obj2 = { default: module_4000 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4000;
}
module_4000 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4000.default(interval, module_3849.default(arg1) * c3);
};
export default exports.default;