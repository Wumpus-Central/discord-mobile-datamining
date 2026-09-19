// === Module 4059: eachWeekendOfInterval ===

// Module 4059 (eachWeekendOfInterval)
import eachDayOfInterval_mod from "eachDayOfInterval" /* 4051 */;
import module_3997_mod from "module_3997" /* 3997 */;
import module_3996_mod from "module_3996" /* 3996 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj2 = { default: module_3997 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3997;
}
module_3997 = tmp5;
let module_3996 = module_3996_mod;
if (!module_3996) {
  const obj3 = { default: module_3996 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3996;
}
module_3996 = tmp7;
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
      if (module_3996.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_3997.default(tmp3)) {
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