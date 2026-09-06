// === Module 3911: ? ===

// Module 3911
import _typeof from "module_3650" /* 3650 */;
import module_3654 from "module_3654" /* 3654 */;
import requiredArgs from "requiredArgs" /* 3651 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3654) {
  obj = { default: module_3654 };
  let tmp5 = obj;
} else {
  tmp5 = module_3654;
}
module_3654 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3654.default(arg0));
};
export default exports.default;