// === Module 4241: getOverlappingDaysInIntervals ===

// Module 4241 (getOverlappingDaysInIntervals)
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

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
let c2 = 86400000;

export default function getOverlappingDaysInIntervals(arg0, arg1) {
  let obj = arg0;
  requiredArgs.default(2, arguments);
  if (!arg0) {
    obj = {};
  }
  const tmp2 = arg1 || {};
  const defaultResult1 = toDate.default(obj.start);
  const time = defaultResult1.getTime();
  const defaultResult2 = toDate.default(obj.end);
  const time1 = defaultResult2.getTime();
  const defaultResult3 = toDate.default(tmp2.start);
  let time2 = defaultResult3.getTime();
  const defaultResult4 = toDate.default(tmp2.end);
  let time3 = defaultResult4.getTime();
  if (time <= time1) {
    if (time2 <= time3) {
      if (time < time3) {
        if (time2 < time1) {
          if (time3 > time1) {
            time3 = time1;
          }
          if (time2 < time) {
            time2 = time;
          }
          const _Math = Math;
          return Math.ceil((time3 - time2) / c2);
        }
      }
      return 0;
    }
  }
  const rangeError = new RangeError("Invalid interval");
  throw rangeError;
};