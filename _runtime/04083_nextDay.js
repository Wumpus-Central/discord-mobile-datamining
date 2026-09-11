// _runtime/04083_nextDay.js
import 03843__ from "metro/03843__.js";
import 03958__ from "metro/03958__.js";
import requiredArgs from "03696_requiredArgs.js";

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