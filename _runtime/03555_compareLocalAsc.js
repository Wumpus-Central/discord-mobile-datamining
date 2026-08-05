// _runtime/03555_compareLocalAsc.js
import _typeof from "_typeof";
import differenceInCalendarDays from "differenceInCalendarDays";
import requiredArgs from "requiredArgs";

function compareLocalAsc(defaultResult1, defaultResult2) {
  const fullYear = defaultResult1.getFullYear();
  let diff = fullYear - defaultResult2.getFullYear();
  if (!diff) {
    const month = defaultResult1.getMonth();
    diff = month - defaultResult2.getMonth();
  }
  if (!diff) {
    diff = defaultResult1.getDate() - defaultResult2.getDate();
    const date = defaultResult1.getDate();
  }
  if (!diff) {
    const hours = defaultResult1.getHours();
    diff = hours - defaultResult2.getHours();
  }
  if (!diff) {
    const minutes = defaultResult1.getMinutes();
    diff = minutes - defaultResult2.getMinutes();
  }
  if (!diff) {
    const seconds = defaultResult1.getSeconds();
    diff = seconds - defaultResult2.getSeconds();
  }
  if (!diff) {
    const milliseconds = defaultResult1.getMilliseconds();
    diff = milliseconds - defaultResult2.getMilliseconds();
  }
  let num = -1;
  if (diff >= 0) {
    let num2 = 1;
    if (diff <= 0) {
      num2 = diff;
    }
    num = num2;
  }
  return num;
}
if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!differenceInCalendarDays) {
  obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarDays;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function differenceInDays(arg0, arg1) {
  tmp7.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const defaultResult2 = tmp3.default(arg1);
  tmp3 = compareLocalAsc(defaultResult1, defaultResult2);
  const absolute = Math.abs(tmp5.default(defaultResult1, defaultResult2));
  defaultResult1.setDate(defaultResult1.getDate() - tmp3 * absolute);
  const result = tmp3 * (absolute - Number(compareLocalAsc(defaultResult1, defaultResult2) === -tmp3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;