// === Module 4168: eachMonthOfInterval ===

// Module 4168 (eachMonthOfInterval)
import toDate_mod from "toDate" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  let obj = { default: toDate };
  tmp3 = obj;
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function eachMonthOfInterval(arg0) {
  let time1;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = toDate.default(obj.start);
  const defaultResult2 = toDate.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    const items = [];
    defaultResult1.setHours(0, 0, 0, 0);
    defaultResult1.setDate(1);
    if (defaultResult1.getTime() <= time) {
      do {
        let arr = items.push(toDate.default(defaultResult1));
        let setMonthResult = defaultResult1.setMonth(defaultResult1.getMonth() + 1);
        time1 = defaultResult1.getTime();
      } while (time1 <= time);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const self = this;
    const self2 = this;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
};