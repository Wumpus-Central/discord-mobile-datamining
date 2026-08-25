// === Module 3889: setMonth ===

// Module 3889 (setMonth)
import toInteger from "toInteger" /* 3480 */;
import _typeof from "_typeof" /* 3476 */;
import getDaysInMonth from "getDaysInMonth" /* 3741 */;
import requiredArgs from "requiredArgs" /* 3477 */;

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
if (!getDaysInMonth) {
  obj = { default: null };
  obj[0] = getDaysInMonth;
  let tmp7 = obj;
} else {
  tmp7 = getDaysInMonth;
}
getDaysInMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), getDaysInMonth.default(date1)));
  return defaultResult1;
};
export default exports.default;