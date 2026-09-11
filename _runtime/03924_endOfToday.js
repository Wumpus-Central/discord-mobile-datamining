// === Module 3924: endOfToday ===

// Module 3924 (endOfToday)
import endOfDay from "endOfDay" /* 3895 */;

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