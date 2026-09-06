// === Module 4073: ? ===

// Module 4073
import module_3654 from "module_3654" /* 3654 */;
import _typeof from "module_3650" /* 3650 */;
import module_4063 from "module_4063" /* 4063 */;
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
if (!module_4063) {
  obj = { default: module_4063 };
  let tmp7 = obj;
} else {
  tmp7 = module_4063;
}
module_4063 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3654.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4063.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;