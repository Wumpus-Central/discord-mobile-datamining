// _runtime/04051_nextDay.js
import 03811__ from "metro/03811__.js";
import 03926__ from "metro/03926__.js";
import requiredArgs from "03664_requiredArgs.js";

if (!module_3811) {
  let obj = { default: module_3811 };
  let tmp3 = obj;
} else {
  tmp3 = module_3811;
}
module_3811 = tmp3;
if (!module_3926) {
  obj = { default: module_3926 };
  let tmp5 = obj;
} else {
  tmp5 = module_3926;
}
module_3926 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_3926.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3811.default(arg0, sum);
};
export default exports.default;