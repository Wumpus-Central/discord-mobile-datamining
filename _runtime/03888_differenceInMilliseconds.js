// === Module 3888: differenceInMilliseconds ===

// Module 3888 (differenceInMilliseconds)
import _typeof from "module_3695" /* 3695 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const time = _typeof.default(arg0).getTime();
  const defaultResult1 = _typeof.default(arg0);
  return time - _typeof.default(arg1).getTime();
};
export default exports.default;