// === Module 3927: ? ===

// Module 3927
import _typeof from "module_3650" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
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
  obj = arg1;
  if (!arg1) {
    obj = {};
  }
  const time = _typeof.default(obj.start).getTime();
  const defaultResult1 = _typeof.default(obj.start);
  const time1 = _typeof.default(obj.end).getTime();
  const defaultResult2 = _typeof.default(obj.end);
  let time2 = _typeof.default(obj.start).getTime();
  const defaultResult3 = _typeof.default(obj.start);
  let time3 = _typeof.default(obj.end).getTime();
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
export default exports.default;