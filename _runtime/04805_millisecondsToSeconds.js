// === Module 4805: millisecondsToSeconds ===

// Module 4805 (millisecondsToSeconds)
import daysInWeek from "daysInWeek" /* 4602 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInSecond);
};
export default exports.default;