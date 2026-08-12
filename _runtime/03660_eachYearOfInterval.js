// _runtime/03660_eachYearOfInterval.js
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

export default function eachYearOfInterval(arg0) {
  let time1;
  let obj = arg0;
  tmp5.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = tmp3.default(obj.start);
  const time = tmp3.default(obj.end).getTime();
  if (defaultResult1.getTime() <= time) {
    const items = [];
    defaultResult1.setHours(0, 0, 0, 0);
    defaultResult1.setMonth(0, 1);
    if (defaultResult1.getTime() <= time) {
      do {
        let tmp11 = tmp3;
        let arr = items.push(tmp3.default(defaultResult1));
        let setFullYearResult = defaultResult1.setFullYear(defaultResult1.getFullYear() + 1);
        time1 = defaultResult1.getTime();
      } while (time1 <= time);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
  const defaultResult2 = tmp3.default(obj.end);
};
export default exports.default;