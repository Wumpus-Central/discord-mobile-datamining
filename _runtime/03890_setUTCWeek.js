// _runtime/03890_setUTCWeek.js
import toInteger from "03576_toInteger.js";
import _typeof from "metro/03572__typeof.js";
import getUTCWeek from "03812_getUTCWeek.js";
import requiredArgs from "03573_requiredArgs.js";

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
if (!getUTCWeek) {
  obj = { default: null };
  obj[0] = getUTCWeek;
  let tmp7 = obj;
} else {
  tmp7 = getUTCWeek;
}
getUTCWeek = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = getUTCWeek.default(defaultResult1, arg2) - toInteger.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;