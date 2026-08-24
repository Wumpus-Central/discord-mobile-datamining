// === Module 3762: getYear ===

// Module 3762 (getYear)
import _typeof from "_typeof" /* 3475 */;
import requiredArgs from "requiredArgs" /* 3476 */;

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

export default function getYear(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getFullYear();
};
export default exports.default;