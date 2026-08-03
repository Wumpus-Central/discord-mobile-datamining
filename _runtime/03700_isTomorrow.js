// === Module 3700: isTomorrow ===

// Module 3700 (isTomorrow)
import addDays from "addDays";
import isSameDay from "isSameDay";
import requiredArgs from "requiredArgs";

if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
}
let c0 = tmp3;
if (!isSameDay) {
  obj = { default: null };
  obj[0] = isSameDay;
  let tmp5 = obj;
} else {
  tmp5 = isSameDay;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function isTomorrow(arg0) {
  tmp7.default(1, arguments);
  return tmp5.default(arg0, tmp3.default(Date.now(), 1));
};
export default exports.default;