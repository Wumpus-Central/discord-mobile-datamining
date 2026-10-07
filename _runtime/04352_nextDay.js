// === Module 4352: nextDay ===

// Module 4352 (nextDay)
import module_4112_mod from "module_4112" /* 4112 */;
import module_4227_mod from "module_4227" /* 4227 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let module_4112 = module_4112_mod;
if (!module_4112) {
  const obj = { default: module_4112 };
  let tmp3 = obj;
} else {
  tmp3 = module_4112;
}
module_4112 = tmp3;
let module_4227 = module_4227_mod;
if (!module_4227) {
  const obj2 = { default: module_4227 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4227;
}
module_4227 = tmp5;
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
  const diff = arg1 - module_4227.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_4112.default(arg0, sum);
};
export default exports.default;