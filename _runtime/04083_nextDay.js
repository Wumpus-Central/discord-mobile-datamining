// === Module 4083: nextDay ===

// Module 4083 (nextDay)
import module_3843 from "module_3843" /* 3843 */;
import module_3958 from "module_3958" /* 3958 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3843) {
  let obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
if (!module_3958) {
  obj = { default: module_3958 };
  let tmp5 = obj;
} else {
  tmp5 = module_3958;
}
module_3958 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_3958.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3843.default(arg0, sum);
};
export default exports.default;