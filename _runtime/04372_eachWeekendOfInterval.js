// === Module 4372: eachWeekendOfInterval ===

// Module 4372 (eachWeekendOfInterval)
import eachDayOfInterval_mod from "eachDayOfInterval" /* 4364 */;
import module_4310_mod from "module_4310" /* 4310 */;
import module_4309_mod from "module_4309" /* 4309 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_4310 = module_4310_mod;
if (!module_4310) {
  const obj2 = { default: module_4310 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4310;
}
module_4310 = tmp5;
let module_4309 = module_4309_mod;
if (!module_4309) {
  const obj3 = { default: module_4309 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4309;
}
module_4309 = tmp7;
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
      if (module_4309.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_4310.default(tmp3)) {
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