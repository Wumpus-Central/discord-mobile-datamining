// === Module 4675: nextDay ===

// Module 4675 (nextDay)
import module_4435_mod from "module_4435" /* 4435 */;
import module_4550_mod from "module_4550" /* 4550 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj = { default: module_4435 };
  let tmp3 = obj;
} else {
  tmp3 = module_4435;
}
module_4435 = tmp3;
let module_4550 = module_4550_mod;
if (!module_4550) {
  const obj2 = { default: module_4550 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4550;
}
module_4550 = tmp5;
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
  const diff = arg1 - module_4550.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4435.default(arg0, sum);
};
export default exports.default;