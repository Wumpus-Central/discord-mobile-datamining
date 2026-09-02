// === Module 3872: isMatch ===

// Module 3872 (isMatch)
import _typeof from "_typeof" /* 3873 */;
import isValid from "isValid" /* 3753 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!isValid) {
  obj = { default: null };
  obj[0] = isValid;
  let tmp5 = obj;
} else {
  tmp5 = isValid;
}
isValid = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isMatch(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  return isValid.default(_typeof.default(arg0, arg1, new Date(), arg2));
};
export default exports.default;