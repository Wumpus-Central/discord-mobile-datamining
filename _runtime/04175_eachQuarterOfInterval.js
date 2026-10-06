// === Module 4175: eachQuarterOfInterval ===

// Module 4175 (eachQuarterOfInterval)
import addQuarters_mod from "addQuarters" /* 4130 */;
import startOfQuarter_mod from "startOfQuarter" /* 4176 */;
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let addQuarters = addQuarters_mod;
if (!addQuarters) {
  let obj = { default: addQuarters };
  tmp3 = obj;
} else {
  tmp3 = addQuarters;
}
addQuarters = tmp3;
let startOfQuarter = startOfQuarter_mod;
if (!startOfQuarter) {
  tmp5 = { default: startOfQuarter };
  const obj2 = { default: startOfQuarter };
} else {
  tmp5 = startOfQuarter;
}
startOfQuarter = tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp7 = { default: toDate };
  const obj3 = { default: toDate };
} else {
  tmp7 = toDate;
}
toDate = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachQuarterOfInterval(arg0) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = toDate.default(obj.start);
  const defaultResult2 = toDate.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = startOfQuarter.default(defaultResult1);
    const defaultResult4 = startOfQuarter.default(defaultResult2);
    const time1 = defaultResult4.getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let arr = items.push(toDate.default(defaultResult3));
        let defaultResult5 = addQuarters.default(defaultResult3, 1);
        defaultResult3 = defaultResult5;
        time2 = defaultResult5.getTime();
      } while (time2 <= time1);
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