// === Module 3942: eachWeekendOfInterval ===

// Module 3942 (eachWeekendOfInterval)
import eachDayOfInterval_mod from "eachDayOfInterval" /* 3934 */;
import module_3880_mod from "module_3880" /* 3880 */;
import module_3879_mod from "module_3879" /* 3879 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_3880 = module_3880_mod;
if (!module_3880) {
  const obj2 = { default: module_3880 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3880;
}
module_3880 = tmp5;
let module_3879 = module_3879_mod;
if (!module_3879) {
  const obj3 = { default: module_3879 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3879;
}
module_3879 = tmp7;
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
      if (module_3879.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_3880.default(tmp3)) {
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