// === Module 4144: endOfToday ===

// Module 4144 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4115 */;

let endOfDay = endOfDay_mod;
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