// _runtime/03860_nextDay.js
import addDays from "addDays";
import getDay from "getDay";
import requiredArgs from "requiredArgs";

if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
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
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function nextDay(arg0, arg1) {
  tmp7.default(2, arguments);
  const diff = arg1 - tmp5.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return tmp3.default(arg0, sum);
};
export default exports.default;