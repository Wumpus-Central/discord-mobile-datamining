// _runtime/04415_eachWeekendOfInterval.js
import eachDayOfInterval_mod from "04407_eachDayOfInterval.js";
import module_4353_mod from "metro/04353__.js";
import module_4352_mod from "metro/04352__.js";
import requiredArgs_mod from "04202_requiredArgs.js";

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_4353 = module_4353_mod;
if (!module_4353) {
  const obj2 = { default: module_4353 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4353;
}
module_4353 = tmp5;
let module_4352 = module_4352_mod;
if (!module_4352) {
  const obj3 = { default: module_4352 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4352;
}
module_4352 = tmp7;
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
      if (module_4352.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_4353.default(tmp3)) {
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