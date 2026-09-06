// === Module 3837: differenceInCalendarQuarters ===

// Module 3837 (differenceInCalendarQuarters)
import module_3838 from "module_3838" /* 3838 */;
import _typeof from "module_3650" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3838) {
  let obj = { default: module_3838 };
  let tmp3 = obj;
} else {
  tmp3 = module_3838;
}
module_3838 = tmp3;
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
  return 4 * diff + (module_3838.default(defaultResult1) - module_3838.default(defaultResult2));
};
export default exports.default;