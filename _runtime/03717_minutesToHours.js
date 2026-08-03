// === Module 3717: minutesToHours ===

// Module 3717 (minutesToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function minutesToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3513) /* keys */.minutesInHour);
};
export default exports.default;