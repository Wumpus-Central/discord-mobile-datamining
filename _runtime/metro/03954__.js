// === Module 3954: ? ===

// Module 3954
import _typeof from "module_3693" /* 3693 */;
import module_3697 from "module_3697" /* 3697 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3697) {
  obj = { default: module_3697 };
  let tmp5 = obj;
} else {
  tmp5 = module_3697;
}
module_3697 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3697.default(arg0));
};
export default exports.default;