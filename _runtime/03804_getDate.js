// === Module 3804: getDate ===

// Module 3804 (getDate)
import _typeof from "_typeof" /* 3542 */;
import requiredArgs from "requiredArgs" /* 3543 */;

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

export default function getDate(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getDate();
};
export default exports.default;