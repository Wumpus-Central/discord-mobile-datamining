// === Module 3907: eachWeekendOfInterval ===

// Module 3907 (eachWeekendOfInterval)
import eachDayOfInterval from "eachDayOfInterval" /* 3899 */;
import module_3845 from "module_3845" /* 3845 */;
import module_3844 from "module_3844" /* 3844 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!eachDayOfInterval) {
  let obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
if (!module_3845) {
  obj = { default: module_3845 };
  let tmp5 = obj;
} else {
  tmp5 = module_3845;
}
module_3845 = tmp5;
if (!module_3844) {
  obj = { default: module_3844 };
  let tmp7 = obj;
} else {
  tmp7 = module_3844;
}
module_3844 = tmp7;
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
      if (module_3844.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_3845.default(tmp3)) {
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