// _runtime/03762_previousDay.js
import requiredArgs from "requiredArgs";
import getDay from "getDay";
import subDays from "subDays";

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let c0 = tmp3;
if (!getDay) {
  obj = { default: null };
  obj[0] = getDay;
  let tmp5 = obj;
} else {
  tmp5 = getDay;
}
let closure_1 = tmp5;
if (!subDays) {
  obj = { default: null };
  obj[0] = subDays;
  let tmp7 = obj;
} else {
  tmp7 = subDays;
}

export default function previousDay(arg0, arg1) {
  tmp3.default(2, arguments);
  const diff = tmp5.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return tmp7.default(arg0, sum);
};
export default exports.default;