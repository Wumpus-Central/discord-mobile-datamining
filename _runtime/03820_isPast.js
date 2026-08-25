// === Module 3820: isPast ===

// Module 3820 (isPast)
import _typeof from "_typeof" /* 3476 */;
import requiredArgs from "requiredArgs" /* 3477 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isPast(arg0) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(arg0).getTime();
  return time < Date.now();
};
export default exports.default;