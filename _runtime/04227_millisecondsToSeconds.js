// === Module 4227: millisecondsToSeconds ===

// Module 4227 (millisecondsToSeconds)
import daysInWeek from "daysInWeek" /* 4024 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

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