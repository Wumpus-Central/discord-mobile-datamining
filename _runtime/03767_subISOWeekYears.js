// _runtime/03767_subISOWeekYears.js
import addISOWeekYears from "03727_addISOWeekYears.js";
import requiredArgs from "03572_requiredArgs.js";
import toInteger from "03575_toInteger.js";

if (!addISOWeekYears) {
  let obj = { default: null };
  obj[0] = addISOWeekYears;
  let tmp3 = obj;
} else {
  tmp3 = addISOWeekYears;
}
addISOWeekYears = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addISOWeekYears.default(arg0, -toInteger.default(arg1));
};
export default exports.default;