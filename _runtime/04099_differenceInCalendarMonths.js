// === Module 4099: differenceInCalendarMonths ===

// Module 4099 (differenceInCalendarMonths)
import _typeof_mod from "module_3913" /* 3913 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  const month = defaultResult1.getMonth();
  return 12 * diff + (month - defaultResult2.getMonth());
};
export default exports.default;