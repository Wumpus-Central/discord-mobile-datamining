// _runtime/03934_isThisYear.js
import isSameYear from "03926_isSameYear.js";
import requiredArgs from "03572_requiredArgs.js";

if (!isSameYear) {
  let obj = { default: null };
  obj[0] = isSameYear;
  let tmp3 = obj;
} else {
  tmp3 = isSameYear;
}
isSameYear = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return isSameYear.default(arg0, Date.now());
};
export default exports.default;