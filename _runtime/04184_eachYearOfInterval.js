// _runtime/04184_eachYearOfInterval.js
import toDate_mod from "03964_toDate.js";
import requiredArgs_mod from "03965_requiredArgs.js";

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

export default function eachYearOfInterval(arg0) {
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
    defaultResult1.setMonth(0, 1);
    if (defaultResult1.getTime() <= time) {
      do {
        let arr = items.push(toDate.default(defaultResult1));
        let setFullYearResult = defaultResult1.setFullYear(defaultResult1.getFullYear() + 1);
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
}
