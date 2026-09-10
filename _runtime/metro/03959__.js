// === Module 3959: ? ===

// Module 3959
import _typeof from "module_3693" /* 3693 */;
import module_3960 from "module_3960" /* 3960 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3960) {
  obj = { default: module_3960 };
  let tmp5 = obj;
} else {
  tmp5 = module_3960;
}
module_3960 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getDaysInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if ("Invalid Date" === String(date)) {
    return NaN;
  } else {
    let num = 365;
    if (module_3960.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;