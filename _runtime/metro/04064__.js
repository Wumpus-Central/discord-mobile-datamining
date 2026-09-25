// === Module 4064: ? ===

// Module 4064
import module_3919_mod from "module_3919" /* 3919 */;
import _typeof_mod from "module_3915" /* 3915 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addMonths(interval, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(interval);
  const defaultResult2 = module_3919.default(arg1);
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