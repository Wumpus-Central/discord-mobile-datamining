// === Module 3552: getUnixTime ===

// Module 3552 (getUnixTime)
import getTime from "getTime";
import requiredArgs from "requiredArgs";

if (!getTime) {
  let obj = { default: null };
  obj[0] = getTime;
  let tmp3 = obj;
} else {
  tmp3 = getTime;
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

export default function getUnixTime(arg0) {
  tmp5.default(1, arguments);
  return Math.floor(tmp3.default(arg0) / 1000);
};
export default exports.default;