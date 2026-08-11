// _runtime/03569_areIntervalsOverlapping.js
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function areIntervalsOverlapping(start, start2, inclusive) {
  tmp5.default(2, arguments);
  start = undefined;
  if (null != start) {
    start = start.start;
  }
  const time = tmp3.default(start).getTime();
  let end;
  if (null != start) {
    end = start.end;
  }
  const defaultResult1 = tmp3.default(start);
  const time1 = tmp3.default(end).getTime();
  let start1;
  if (null != start2) {
    start1 = start2.start;
  }
  const defaultResult2 = tmp3.default(end);
  const time2 = tmp3.default(start1).getTime();
  let end1;
  if (null != start2) {
    end1 = start2.end;
  }
  const defaultResult3 = tmp3.default(start1);
  const time3 = tmp3.default(end1).getTime();
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
};
export default exports.default;