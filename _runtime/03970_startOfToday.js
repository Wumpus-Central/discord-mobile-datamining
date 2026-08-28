// === Module 3970: startOfToday ===

// Module 3970 (startOfToday)
import startOfDay from "startOfDay" /* 3705 */;

if (!startOfDay) {
  const obj = { default: null };
  obj[0] = startOfDay;
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;

export default function startOfToday() {
  return startOfDay.default(Date.now());
};
export default exports.default;