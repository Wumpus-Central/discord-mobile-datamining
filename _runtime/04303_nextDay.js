// === Module 4303: nextDay ===

// Module 4303 (nextDay)
import module_4063_mod from "module_4063" /* 4063 */;
import module_4178_mod from "module_4178" /* 4178 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4063 = module_4063_mod;
if (!module_4063) {
  const obj = { default: module_4063 };
  let tmp3 = obj;
} else {
  tmp3 = module_4063;
}
module_4063 = tmp3;
let module_4178 = module_4178_mod;
if (!module_4178) {
  const obj2 = { default: module_4178 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4178;
}
module_4178 = tmp5;
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
  const diff = arg1 - module_4178.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4063.default(arg0, sum);
};
export default exports.default;