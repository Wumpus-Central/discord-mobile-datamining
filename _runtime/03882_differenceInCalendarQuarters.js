// === Module 3882: differenceInCalendarQuarters ===

// Module 3882 (differenceInCalendarQuarters)
import module_3883 from "module_3883" /* 3883 */;
import _typeof from "module_3695" /* 3695 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3883) {
  let obj = { default: module_3883 };
  let tmp3 = obj;
} else {
  tmp3 = module_3883;
}
module_3883 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
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
  return 4 * diff + (module_3883.default(defaultResult1) - module_3883.default(defaultResult2));
};
export default exports.default;