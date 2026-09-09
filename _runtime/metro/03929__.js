// === Module 3929: ? ===

// Module 3929
import _typeof from "module_3663" /* 3663 */;
import module_3930 from "module_3930" /* 3930 */;
import requiredArgs from "requiredArgs" /* 3664 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3930) {
  obj = { default: module_3930 };
  let tmp5 = obj;
} else {
  tmp5 = module_3930;
}
module_3930 = tmp5;
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
    if (module_3930.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;