// _runtime/04305_nextMonday.js
import nextDay_mod from "04303_nextDay.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let nextDay = nextDay_mod;
if (!nextDay) {
  const obj = { default: nextDay };
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
}
nextDay = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function nextMonday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 1);
};
export default exports.default;