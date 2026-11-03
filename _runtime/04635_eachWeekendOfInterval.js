// _runtime/04635_eachWeekendOfInterval.js
import eachDayOfInterval_mod from "04627_eachDayOfInterval.js";
import module_4573_mod from "metro/04573__.js";
import module_4572_mod from "metro/04572__.js";
import requiredArgs_mod from "04422_requiredArgs.js";

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_4573 = module_4573_mod;
if (!module_4573) {
  const obj2 = { default: module_4573 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4573;
}
module_4573 = tmp5;
let module_4572 = module_4572_mod;
if (!module_4572) {
  const obj3 = { default: module_4572 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4572;
}
module_4572 = tmp7;
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
      if (module_4572.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_4573.default(tmp3)) {
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