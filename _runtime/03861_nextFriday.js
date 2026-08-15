// _runtime/03861_nextFriday.js
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";

if (!nextDay) {
  let obj = { default: null };
  obj[0] = nextDay;
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
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

export default function nextFriday(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, 5);
};
export default exports.default;