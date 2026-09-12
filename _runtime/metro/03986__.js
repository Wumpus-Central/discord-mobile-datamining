// === Module 3986: ? ===

// Module 3986
import _typeof from "module_3725" /* 3725 */;
import module_3729 from "module_3729" /* 3729 */;
import requiredArgs from "requiredArgs" /* 3726 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3729) {
  obj = { default: module_3729 };
  let tmp5 = obj;
} else {
  tmp5 = module_3729;
}
module_3729 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3729.default(arg0));
};
export default exports.default;