// _runtime/03864_eachWeekendOfInterval.js
import eachDayOfInterval from "03856_eachDayOfInterval.js";
import 03802__ from "metro/03802__.js";
import 03801__ from "metro/03801__.js";
import requiredArgs from "03651_requiredArgs.js";

if (!eachDayOfInterval) {
  let obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
if (!module_3802) {
  obj = { default: module_3802 };
  let tmp5 = obj;
} else {
  tmp5 = module_3802;
}
module_3802 = tmp5;
if (!module_3801) {
  obj = { default: module_3801 };
  let tmp7 = obj;
} else {
  tmp7 = module_3801;
}
module_3801 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfInterval(arg0) {
  let tmp5;
  requiredArgs.default(1, arguments);
  const defaultResult1 = eachDayOfInterval.default(arg0);
  const items = [];
  let num = 0;
  if (0 < defaultResult1.length) {
    do {
      let sum = num + 1;
      let tmp3 = defaultResult1[num];
      tmp5 = sum;
      if (module_3801.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_3802.default(tmp3)) {
          sum1 = sum + 5;
        }
        tmp5 = sum1;
      }
      num = tmp5;
    } while (tmp5 < defaultResult1.length);
  }
  return items;
};
export default exports.default;