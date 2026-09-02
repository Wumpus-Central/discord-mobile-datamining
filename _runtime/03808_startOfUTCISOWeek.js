// === Module 3808: startOfUTCISOWeek ===

// Module 3808 (startOfUTCISOWeek)
import _typeof from "_typeof" /* 3571 */;
import requiredArgs from "requiredArgs" /* 3572 */;

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

export default function startOfUTCISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const uTCDay = defaultResult1.getUTCDay();
  let num = 0;
  if (uTCDay < 1) {
    num = 7;
  }
  const sum = num + uTCDay;
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - (sum - 1));
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;