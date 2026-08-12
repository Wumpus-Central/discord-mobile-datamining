// _runtime/03651_eachQuarterOfInterval.js
import addQuarters from "addQuarters";
import startOfQuarter from "startOfQuarter";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!addQuarters) {
  let obj = { default: null };
  obj[0] = addQuarters;
  let tmp3 = obj;
} else {
  tmp3 = addQuarters;
}
let c0 = tmp3;
if (!startOfQuarter) {
  obj = { default: null };
  obj[0] = startOfQuarter;
  let tmp5 = obj;
} else {
  tmp5 = startOfQuarter;
}
let closure_1 = tmp5;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp7 = obj;
} else {
  tmp7 = _typeof;
}
let obj1 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c3 = tmp9;

export default function eachQuarterOfInterval(arg0) {
  let time2;
  let obj = arg0;
  tmp9.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = tmp7.default(obj.start);
  const defaultResult2 = tmp7.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = tmp5.default(defaultResult1);
    const time1 = tmp5.default(defaultResult2).getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let tmp10 = tmp7;
        let arr = items.push(tmp7.default(defaultResult3));
        let tmp12 = tmp3;
        let defaultResult5 = tmp3.default(defaultResult3, 1);
        defaultResult3 = defaultResult5;
        time2 = defaultResult5.getTime();
      } while (time2 <= time1);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
};
export default exports.default;