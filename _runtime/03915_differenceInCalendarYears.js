// === Module 3915: differenceInCalendarYears ===

// Module 3915 (differenceInCalendarYears)
import _typeof from "module_3725" /* 3725 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  return fullYear - _typeof.default(arg1).getFullYear();
};
export default exports.default;