// === Module 3961: ? ===

// Module 3961
import _typeof from "module_3695" /* 3695 */;
import module_3962 from "module_3962" /* 3962 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3962) {
  obj = { default: module_3962 };
  let tmp5 = obj;
} else {
  tmp5 = module_3962;
}
module_3962 = tmp5;
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
    if (module_3962.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;