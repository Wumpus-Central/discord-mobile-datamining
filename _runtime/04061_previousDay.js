// _runtime/04061_previousDay.js
import requiredArgs from "03664_requiredArgs.js";
import 03926__ from "metro/03926__.js";
import subDays from "04034_subDays.js";

if (!requiredArgs) {
  let obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!module_3926) {
  obj = { default: module_3926 };
  let tmp5 = obj;
} else {
  tmp5 = module_3926;
}
module_3926 = tmp5;
if (!subDays) {
  obj = { default: subDays };
  let tmp7 = obj;
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = module_3926.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;