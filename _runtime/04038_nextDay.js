// _runtime/04038_nextDay.js
import 03798__ from "metro/03798__.js";
import 03913__ from "metro/03913__.js";
import requiredArgs from "03651_requiredArgs.js";

if (!module_3798) {
  let obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
if (!module_3913) {
  obj = { default: module_3913 };
  let tmp5 = obj;
} else {
  tmp5 = module_3913;
}
module_3913 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_3913.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3798.default(arg0, sum);
};
export default exports.default;