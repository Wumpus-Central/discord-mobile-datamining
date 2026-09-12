// === Module 3954: endOfToday ===

// Module 3954 (endOfToday)
import endOfDay from "endOfDay" /* 3925 */;

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