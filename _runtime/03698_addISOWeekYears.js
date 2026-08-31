// === Module 3698: addISOWeekYears ===

// Module 3698 (addISOWeekYears)
import toInteger from "toInteger" /* 3546 */;
import getISOWeekYear from "getISOWeekYear" /* 3699 */;
import setISOWeekYear from "setISOWeekYear" /* 3702 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!getISOWeekYear) {
  obj = { default: null };
  obj[0] = getISOWeekYear;
  let tmp5 = obj;
} else {
  tmp5 = getISOWeekYear;
}
getISOWeekYear = tmp5;
if (!setISOWeekYear) {
  obj = { default: null };
  obj[0] = setISOWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = setISOWeekYear;
}
setISOWeekYear = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return setISOWeekYear.default(arg0, getISOWeekYear.default(arg0) + toInteger.default(arg1));
};
export default exports.default;