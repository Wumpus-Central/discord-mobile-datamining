// === Module 3794: formatDistanceToNowStrict ===

// Module 3794 (formatDistanceToNowStrict)
import formatDistanceStrict from "formatDistanceStrict" /* 3792 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!formatDistanceStrict) {
  let obj = { default: null };
  obj[0] = formatDistanceStrict;
  let tmp3 = obj;
} else {
  tmp3 = formatDistanceStrict;
}
formatDistanceStrict = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return formatDistanceStrict.default(arg0, Date.now(), arg1);
};
export default exports.default;