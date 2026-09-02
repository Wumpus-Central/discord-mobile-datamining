// _runtime/03758_differenceInCalendarQuarters.js
import getQuarter from "03759_getQuarter.js";
import _typeof from "metro/03571__typeof.js";
import requiredArgs from "03572_requiredArgs.js";

if (!getQuarter) {
  let obj = { default: null };
  obj[0] = getQuarter;
  let tmp3 = obj;
} else {
  tmp3 = getQuarter;
}
getQuarter = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function differenceInCalendarQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  return 4 * diff + (getQuarter.default(defaultResult1) - getQuarter.default(defaultResult2));
};
export default exports.default;