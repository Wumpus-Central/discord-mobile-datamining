// === Module 3799: ? ===

// Module 3799
import module_3654 from "module_3654" /* 3654 */;
import _typeof from "module_3650" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!module_3654) {
  let obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
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

export default function addMonths(interval, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(interval);
  const defaultResult2 = module_3654.default(arg1);
  if (isNaN(defaultResult2)) {
    const _Date2 = Date;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    const date1 = defaultResult1.getDate();
    const _Date = Date;
    const date2 = new Date(defaultResult1.getTime());
    date2.setMonth(defaultResult1.getMonth() + defaultResult2 + 1, 0);
    let tmp8 = date2;
    if (date1 < date2.getDate()) {
      const fullYear = date2.getFullYear();
      defaultResult1.setFullYear(fullYear, date2.getMonth(), date1);
      tmp8 = defaultResult1;
    }
    return tmp8;
  } else {
    return defaultResult1;
  }
};
export default exports.default;