// _runtime/04643_nextDay.js
import module_4403_mod from "metro/04403__.js";
import module_4518_mod from "metro/04518__.js";
import requiredArgs_mod from "04256_requiredArgs.js";

let module_4403 = module_4403_mod;
if (!module_4403) {
  const obj = { default: module_4403 };
  let tmp3 = obj;
} else {
  tmp3 = module_4403;
}
module_4403 = tmp3;
let module_4518 = module_4518_mod;
if (!module_4518) {
  const obj2 = { default: module_4518 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4518;
}
module_4518 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_4518.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4403.default(arg0, sum);
};
export default exports.default;