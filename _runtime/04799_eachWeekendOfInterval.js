// === Module 4799: eachWeekendOfInterval ===

// Module 4799 (eachWeekendOfInterval)
import eachDayOfInterval_mod from "eachDayOfInterval" /* 4791 */;
import module_4737_mod from "module_4737" /* 4737 */;
import module_4736_mod from "module_4736" /* 4736 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_4737 = module_4737_mod;
if (!module_4737) {
  const obj2 = { default: module_4737 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4737;
}
module_4737 = tmp5;
let module_4736 = module_4736_mod;
if (!module_4736) {
  const obj3 = { default: module_4736 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4736;
}
module_4736 = tmp7;
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
  items = [];
  let num = 0;
  if (0 < defaultResult1.length) {
    do {
      let sum = num + 1;
      let tmp3 = defaultResult1[num];
      tmp5 = sum;
      if (module_4736.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_4737.default(tmp3)) {
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