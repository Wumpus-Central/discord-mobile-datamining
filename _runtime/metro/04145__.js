// === Module 4145: ? ===

// Module 4145
import module_3729 from "module_3729" /* 3729 */;
import _typeof from "module_3725" /* 3725 */;
import module_3997 from "module_3997" /* 3997 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!module_3729) {
  let obj = { default: module_3729 };
  let tmp3 = obj;
} else {
  tmp3 = module_3729;
}
module_3729 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_3997) {
  obj = { default: module_3997 };
  let tmp7 = obj;
} else {
  tmp7 = module_3997;
}
module_3997 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3997.default(defaultResult1) - module_3729.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;