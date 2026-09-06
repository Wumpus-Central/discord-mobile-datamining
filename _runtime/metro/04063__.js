// === Module 4063: ? ===

// Module 4063
import module_3654 from "module_3654" /* 3654 */;
import _typeof from "module_3650" /* 3650 */;
import module_3915 from "module_3915" /* 3915 */;
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
if (!module_3915) {
  obj = { default: module_3915 };
  let tmp7 = obj;
} else {
  tmp7 = module_3915;
}
module_3915 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3654.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_3915.default(date1)));
  return defaultResult1;
};
export default exports.default;