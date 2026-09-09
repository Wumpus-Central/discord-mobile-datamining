// _runtime/03877_eachWeekendOfInterval.js
import eachDayOfInterval from "03869_eachDayOfInterval.js";
import 03815__ from "metro/03815__.js";
import 03814__ from "metro/03814__.js";
import requiredArgs from "03664_requiredArgs.js";

if (!eachDayOfInterval) {
  let obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
if (!module_3815) {
  obj = { default: module_3815 };
  let tmp5 = obj;
} else {
  tmp5 = module_3815;
}
module_3815 = tmp5;
if (!module_3814) {
  obj = { default: module_3814 };
  let tmp7 = obj;
} else {
  tmp7 = module_3814;
}
module_3814 = tmp7;
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
      if (module_3814.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_3815.default(tmp3)) {
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