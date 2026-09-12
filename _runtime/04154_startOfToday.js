// === Module 4154: startOfToday ===

// Module 4154 (startOfToday)
import startOfDay from "startOfDay" /* 3889 */;

if (!startOfDay) {
  const obj = { default: startOfDay };
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;

export default function startOfToday() {
  return startOfDay.default(Date.now());
};
export default exports.default;