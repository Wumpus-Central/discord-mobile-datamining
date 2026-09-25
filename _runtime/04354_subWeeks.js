// _runtime/04354_subWeeks.js
import module_3919_mod from "metro/03919__.js";
import module_4083_mod from "metro/04083__.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let module_4083 = module_4083_mod;
if (!module_4083) {
  const obj2 = { default: module_4083 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4083;
}
module_4083 = tmp5;
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
  return module_4083.default(arg0, -module_3919.default(arg1));
};
export default exports.default;