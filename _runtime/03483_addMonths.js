// _runtime/03483_addMonths.js
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function addMonths(interval) {
  tmp7.default(2, arguments);
  const defaultResult1 = tmp5.default(interval);
  const defaultResult2 = tmp3.default(arg1);
  if (isNaN(defaultResult2)) {
    const _Date2 = Date;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    const date1 = defaultResult1.getDate();
    const _Date = Date;
    const date2 = new Date(defaultResult1.getTime());
    date2.setMonth(defaultResult1.getMonth() + defaultResult2 + 1, 0);
    let tmp8 = date2;
    if (date1 < date2.getDate()) {
      const fullYear = date2.getFullYear();
      defaultResult1.setFullYear(fullYear, date2.getMonth(), date1);
      tmp8 = defaultResult1;
    }
    return tmp8;
  } else {
    return defaultResult1;
  }
};
export default exports.default;