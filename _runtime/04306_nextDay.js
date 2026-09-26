// _runtime/04306_nextDay.js
import module_4066_mod from "metro/04066__.js";
import module_4181_mod from "metro/04181__.js";
import requiredArgs_mod from "03919_requiredArgs.js";

let module_4066 = module_4066_mod;
if (!module_4066) {
  const obj = { default: module_4066 };
  let tmp3 = obj;
} else {
  tmp3 = module_4066;
}
module_4066 = tmp3;
let module_4181 = module_4181_mod;
if (!module_4181) {
  const obj2 = { default: module_4181 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4181;
}
module_4181 = tmp5;
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
  const diff = arg1 - module_4181.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4066.default(arg0, sum);
};
export default exports.default;