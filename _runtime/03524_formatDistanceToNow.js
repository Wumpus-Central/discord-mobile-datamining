import formatDistance from "formatDistance";
import requiredArgs from "requiredArgs";

if (!formatDistance) {
  let obj = { default: null };
  obj[0] = formatDistance;
  let tmp3 = obj;
} else {
  tmp3 = formatDistance;
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

export default function formatDistanceToNow(arg0, arg1) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, Date.now(), arg1);
};
export default exports.default;