// _runtime/03633_formatDistanceToNowStrict.js
import formatDistanceStrict from "formatDistanceStrict";
import requiredArgs from "requiredArgs";

if (!formatDistanceStrict) {
  let obj = { default: null };
  obj[0] = formatDistanceStrict;
  let tmp3 = obj;
} else {
  tmp3 = formatDistanceStrict;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, Date.now(), arg1);
};
export default exports.default;