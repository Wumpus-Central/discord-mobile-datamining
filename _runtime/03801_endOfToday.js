// === Module 3801: endOfToday ===

// Module 3801 (endOfToday)
import endOfDay from "endOfDay" /* 3772 */;

if (!endOfDay) {
  const obj = { default: null };
  obj[0] = endOfDay;
  let tmp3 = obj;
} else {
  tmp3 = endOfDay;
}
endOfDay = tmp3;

export default function endOfToday() {
  return endOfDay.default(Date.now());
};
export default exports.default;