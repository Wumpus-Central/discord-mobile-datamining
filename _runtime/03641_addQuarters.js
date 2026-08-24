// === Module 3641: addQuarters ===

// Module 3641 (addQuarters)
import toInteger from "toInteger" /* 3479 */;
import addMonths from "addMonths" /* 3624 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addMonths) {
  obj = { default: null };
  obj[0] = addMonths;
  let tmp5 = obj;
} else {
  tmp5 = addMonths;
}
addMonths = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(arg0, 3 * toInteger.default(arg1));
};
export default exports.default;