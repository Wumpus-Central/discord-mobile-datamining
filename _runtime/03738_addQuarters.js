// === Module 3738: addQuarters ===

// Module 3738 (addQuarters)
import toInteger from "toInteger" /* 3576 */;
import addMonths from "addMonths" /* 3721 */;
import requiredArgs from "requiredArgs" /* 3573 */;

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