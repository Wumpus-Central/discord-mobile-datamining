// === Module 3991: ? ===

// Module 3991
import _typeof from "module_3725" /* 3725 */;
import module_3992 from "module_3992" /* 3992 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3992) {
  obj = { default: module_3992 };
  let tmp5 = obj;
} else {
  tmp5 = module_3992;
}
module_3992 = tmp5;
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
    if (module_3992.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;