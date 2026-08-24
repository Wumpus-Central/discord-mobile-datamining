// _runtime/03776_isMatch.js
import _typeof from "metro/03777__typeof.js";
import isValid from "03657_isValid.js";
import requiredArgs from "03476_requiredArgs.js";

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