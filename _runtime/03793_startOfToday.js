// _runtime/03793_startOfToday.js
import startOfDay from "startOfDay";

if (!startOfDay) {
  const obj = { default: null };
  obj[0] = startOfDay;
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
let c0 = tmp3;

export default function startOfToday() {
  return tmp3.default(Date.now());
};
export default exports.default;