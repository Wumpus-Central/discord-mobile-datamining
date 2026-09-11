// === Module 3909: eachWeekendOfInterval ===

// Module 3909 (eachWeekendOfInterval)
import eachDayOfInterval from "eachDayOfInterval" /* 3901 */;
import module_3847 from "module_3847" /* 3847 */;
import module_3846 from "module_3846" /* 3846 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!eachDayOfInterval) {
  let obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
if (!module_3847) {
  obj = { default: module_3847 };
  let tmp5 = obj;
} else {
  tmp5 = module_3847;
}
module_3847 = tmp5;
if (!module_3846) {
  obj = { default: module_3846 };
  let tmp7 = obj;
} else {
  tmp7 = module_3846;
}
module_3846 = tmp7;
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
      if (module_3846.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_3847.default(tmp3)) {
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