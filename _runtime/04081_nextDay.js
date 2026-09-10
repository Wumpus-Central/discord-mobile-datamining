// _runtime/04081_nextDay.js
import 03841__ from "metro/03841__.js";
import 03956__ from "metro/03956__.js";
import requiredArgs from "03694_requiredArgs.js";

if (!module_3841) {
  let obj = { default: module_3841 };
  let tmp3 = obj;
} else {
  tmp3 = module_3841;
}
module_3841 = tmp3;
if (!module_3956) {
  obj = { default: module_3956 };
  let tmp5 = obj;
} else {
  tmp5 = module_3956;
}
module_3956 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_3956.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3841.default(arg0, sum);
};
export default exports.default;