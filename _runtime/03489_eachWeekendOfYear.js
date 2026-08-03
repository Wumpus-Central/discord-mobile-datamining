// === Module 3489: eachWeekendOfYear ===

// Module 3489 (eachWeekendOfYear)
import eachWeekendOfInterval from "eachWeekendOfInterval";
import endOfYear from "endOfYear";
import startOfYear from "startOfYear";
import requiredArgs from "requiredArgs";

if (!eachWeekendOfInterval) {
  let obj = { default: null };
  obj[0] = eachWeekendOfInterval;
  let tmp3 = obj;
} else {
  tmp3 = eachWeekendOfInterval;
}
let c0 = tmp3;
if (!endOfYear) {
  obj = { default: null };
  obj[0] = endOfYear;
  let tmp5 = obj;
} else {
  tmp5 = endOfYear;
}
let closure_1 = tmp5;
if (!startOfYear) {
  obj = { default: null };
  obj[0] = startOfYear;
  let tmp7 = obj;
} else {
  tmp7 = startOfYear;
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

export default function eachWeekendOfYear(arg0) {
  tmp9.default(1, arguments);
  const defaultResult1 = tmp7.default(arg0);
  return tmp3.default({ start: tmp7.default(arg0), end: tmp5.default(arg0) });
};
export default exports.default;