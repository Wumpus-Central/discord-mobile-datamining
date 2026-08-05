// _runtime/03761_setYear.js
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

export default function setYear(date, arg1) {
  tmp7.default(2, arguments);
  const defaultResult1 = tmp5.default(date);
  if (isNaN(defaultResult1.getTime())) {
    const _Date = Date;
    date = new Date(NaN);
    return date;
  } else {
    defaultResult1.setFullYear(defaultResult2);
    return defaultResult1;
  }
  defaultResult2 = tmp3.default(arg1);
};
export default exports.default;