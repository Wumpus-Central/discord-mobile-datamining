import startOfISOWeekYear from "startOfISOWeekYear";
import addWeeks from "addWeeks";
import requiredArgs from "requiredArgs";

if (!startOfISOWeekYear) {
  let obj = { default: null };
  obj[0] = startOfISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
let c0 = tmp3;
if (!addWeeks) {
  obj = { default: null };
  obj[0] = addWeeks;
  let tmp5 = obj;
} else {
  tmp5 = addWeeks;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  tmp7.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const defaultResult2 = tmp3.default(tmp5.default(defaultResult1, 60));
  return Math.round((tmp3.default(tmp5.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;