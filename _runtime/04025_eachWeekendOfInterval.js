// _runtime/04025_eachWeekendOfInterval.js
import eachDayOfInterval_mod from "04017_eachDayOfInterval.js";
import module_3963_mod from "metro/03963__.js";
import module_3962_mod from "metro/03962__.js";
import requiredArgs_mod from "03812_requiredArgs.js";

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_3963 = module_3963_mod;
if (!module_3963) {
  const obj2 = { default: module_3963 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3963;
}
module_3963 = tmp5;
let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj3 = { default: module_3962 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3962;
}
module_3962 = tmp7;
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
      if (module_3962.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_3963.default(tmp3)) {
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