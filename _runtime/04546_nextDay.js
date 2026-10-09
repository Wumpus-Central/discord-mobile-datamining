// === Module 4546: nextDay ===

// Module 4546 (nextDay)
import module_4306_mod from "module_4306" /* 4306 */;
import module_4421_mod from "module_4421" /* 4421 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4306 = module_4306_mod;
if (!module_4306) {
  const obj = { default: module_4306 };
  let tmp3 = obj;
} else {
  tmp3 = module_4306;
}
module_4306 = tmp3;
let module_4421 = module_4421_mod;
if (!module_4421) {
  const obj2 = { default: module_4421 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4421;
}
module_4421 = tmp5;
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
  const diff = arg1 - module_4421.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4306.default(arg0, sum);
};
export default exports.default;