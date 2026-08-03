import toInteger from "toInteger";
import getISOWeekYear from "getISOWeekYear";
import setISOWeekYear from "setISOWeekYear";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!getISOWeekYear) {
  obj = { default: null };
  obj[0] = getISOWeekYear;
  let tmp5 = obj;
} else {
  tmp5 = getISOWeekYear;
}
let closure_1 = tmp5;
if (!setISOWeekYear) {
  obj = { default: null };
  obj[0] = setISOWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = setISOWeekYear;
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

export default function addISOWeekYears(arg0, arg1) {
  tmp9.default(2, arguments);
  return tmp7.default(arg0, tmp5.default(arg0) + tmp3.default(arg1));
};
export default exports.default;