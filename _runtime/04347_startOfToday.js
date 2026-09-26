// === Module 4347: startOfToday ===

// Module 4347 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4082 */;

let startOfDay = startOfDay_mod;
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