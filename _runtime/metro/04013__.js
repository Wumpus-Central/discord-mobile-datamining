// === Module 4013: ? ===

// Module 4013
import module_3697 from "module_3697" /* 3697 */;
import _typeof from "module_3693" /* 3693 */;
import module_3929 from "module_3929" /* 3929 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!_typeof) {
  obj = { default: _typeof };
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!module_3929) {
  obj = { default: module_3929 };
  let tmp7 = obj;
} else {
  tmp7 = module_3929;
}
module_3929 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3929.default(defaultResult1) - module_3697.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;