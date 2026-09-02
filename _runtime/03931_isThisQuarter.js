// _runtime/03931_isThisQuarter.js
import isSameQuarter from "03923_isSameQuarter.js";
import requiredArgs from "03572_requiredArgs.js";

if (!isSameQuarter) {
  let obj = { default: null };
  obj[0] = isSameQuarter;
  let tmp3 = obj;
} else {
  tmp3 = isSameQuarter;
}
isSameQuarter = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return isSameQuarter.default(Date.now(), arg0);
};
export default exports.default;