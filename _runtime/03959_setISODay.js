// _runtime/03959_setISODay.js
import toInteger from "03544_toInteger.js";
import _typeof from "metro/03540__typeof.js";
import addDays from "03688_addDays.js";
import getISODay from "03811_getISODay.js";
import requiredArgs from "03541_requiredArgs.js";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!addDays) {
  obj = { default: null };
  obj[0] = addDays;
  let tmp7 = obj;
} else {
  tmp7 = addDays;
}
addDays = tmp7;
if (!getISODay) {
  const obj1 = { default: null };
  obj1[0] = getISODay;
  let tmp9 = obj1;
} else {
  tmp9 = getISODay;
}
getISODay = tmp9;
if (!requiredArgs) {
  const obj2 = { default: null };
  obj2[0] = requiredArgs;
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return addDays.default(defaultResult1, toInteger.default(arg1) - getISODay.default(defaultResult1));
};
export default exports.default;