// === Module 3880: ? ===

// Module 3880
import module_3729 from "module_3729" /* 3729 */;
import _typeof from "module_3725" /* 3725 */;
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
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const time = _typeof.default(arg0).getTime();
  const defaultResult1 = _typeof.default(arg0);
  return new Date(time + module_3729.default(arg1));
};
export default exports.default;