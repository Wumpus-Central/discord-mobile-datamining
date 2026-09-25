// === Module 4129: eachWeekendOfInterval ===

// Module 4129 (eachWeekendOfInterval)
import eachDayOfInterval_mod from "eachDayOfInterval" /* 4121 */;
import module_4067_mod from "module_4067" /* 4067 */;
import module_4066_mod from "module_4066" /* 4066 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_4067 = module_4067_mod;
if (!module_4067) {
  const obj2 = { default: module_4067 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4067;
}
module_4067 = tmp5;
let module_4066 = module_4066_mod;
if (!module_4066) {
  const obj3 = { default: module_4066 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4066;
}
module_4066 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
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
      if (module_4066.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_4067.default(tmp3)) {
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