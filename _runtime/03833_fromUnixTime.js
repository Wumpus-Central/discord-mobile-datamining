// === Module 3833: fromUnixTime ===

// Module 3833 (fromUnixTime)
import _typeof from "_typeof" /* 3572 */;
import toInteger from "toInteger" /* 3576 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp5 = obj;
} else {
  tmp5 = toInteger;
}
toInteger = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * toInteger.default(arg0));
};
export default exports.default;