// _runtime/03641_isWithinInterval.js
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

export default function isWithinInterval(arg0, start) {
  tmp5.default(2, arguments);
  const time = tmp3.default(arg0).getTime();
  const defaultResult1 = tmp3.default(arg0);
  const time1 = tmp3.default(start.start).getTime();
  const defaultResult2 = tmp3.default(start.start);
  const time2 = tmp3.default(start.end).getTime();
  if (time1 <= time2) {
    return time >= time1 && time <= time2;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
  const defaultResult3 = tmp3.default(start.end);
};
export default exports.default;