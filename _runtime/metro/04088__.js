// _runtime/metro/04088__.js
import _typeof_mod from "03811__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  let obj2 = { default: requiredArgs };
  let tmp5 = obj2;
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
  let obj2 = arg1;
  if (!arg1) {
    obj2 = {};
  }
  const time = _typeof.default(obj.start).getTime();
  const defaultResult1 = _typeof.default(obj.start);
  const time1 = _typeof.default(obj.end).getTime();
  const defaultResult2 = _typeof.default(obj.end);
  let time2 = _typeof.default(obj2.start).getTime();
  const defaultResult3 = _typeof.default(obj2.start);
  let time3 = _typeof.default(obj2.end).getTime();
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