// _runtime/04127_eachWeekendOfInterval.js
import eachDayOfInterval_mod from "04119_eachDayOfInterval.js";
import module_4065_mod from "metro/04065__.js";
import module_4064_mod from "metro/04064__.js";
import requiredArgs_mod from "03914_requiredArgs.js";

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_4065 = module_4065_mod;
if (!module_4065) {
  const obj2 = { default: module_4065 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4065;
}
module_4065 = tmp5;
let module_4064 = module_4064_mod;
if (!module_4064) {
  const obj3 = { default: module_4064 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4064;
}
module_4064 = tmp7;
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
      if (module_4064.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_4065.default(tmp3)) {
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