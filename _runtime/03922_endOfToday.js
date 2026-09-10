// === Module 3922: endOfToday ===

// Module 3922 (endOfToday)
import endOfDay from "endOfDay" /* 3893 */;

if (!endOfDay) {
  const obj = { default: endOfDay };
  let tmp3 = obj;
} else {
  tmp3 = endOfDay;
}
endOfDay = tmp3;

export default function endOfToday() {
  return endOfDay.default(Date.now());
};
export default exports.default;