// _runtime/04091_previousDay.js
import requiredArgs from "03694_requiredArgs.js";
import 03956__ from "metro/03956__.js";
import subDays from "04064_subDays.js";

if (!requiredArgs) {
  let obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!module_3956) {
  obj = { default: module_3956 };
  let tmp5 = obj;
} else {
  tmp5 = module_3956;
}
module_3956 = tmp5;
if (!subDays) {
  obj = { default: subDays };
  let tmp7 = obj;
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = module_3956.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;