// _runtime/04128_areIntervalsOverlapping.js
import toDate_mod from "03958_toDate.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
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

export default function areIntervalsOverlapping(start, start2, inclusive) {
  requiredArgs.default(2, arguments);
  start = undefined;
  const _default = toDate.default;
  if (null != start) {
    start = start.start;
  }
  const _defaultResult = _default(start);
  const time = _defaultResult.getTime();
  let end;
  const _default2 = toDate.default;
  if (null != start) {
    end = start.end;
  }
  const _default2Result = _default2(end);
  const time1 = _default2Result.getTime();
  let start1;
  const _default3 = toDate.default;
  if (null != start2) {
    start1 = start2.start;
  }
  const _default3Result = _default3(start1);
  const time2 = _default3Result.getTime();
  let end1;
  const _default4 = toDate.default;
  if (null != start2) {
    end1 = start2.end;
  }
  const _default4Result = _default4(end1);
  const time3 = _default4Result.getTime();
  if (time <= time1) {
    if (time2 <= time3) {
      if (null != inclusive) {
        if (inclusive.inclusive) {
          return time <= time3 && time2 <= time1;
        }
      }
      return time < time3 && time2 < time1;
    }
  }
  const rangeError = new RangeError("Invalid interval");
  throw rangeError;
}
