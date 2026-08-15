// _runtime/03842_isYesterday.js
import isSameDay from "isSameDay";
import subDays from "subDays";
import requiredArgs from "requiredArgs";

if (!isSameDay) {
  let obj = { default: null };
  obj[0] = isSameDay;
  let tmp3 = obj;
} else {
  tmp3 = isSameDay;
}
let c0 = tmp3;
if (!subDays) {
  obj = { default: null };
  obj[0] = subDays;
  let tmp5 = obj;
} else {
  tmp5 = subDays;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function isYesterday(arg0) {
  tmp7.default(1, arguments);
  return tmp3.default(arg0, tmp5.default(Date.now(), 1));
};
export default exports.default;