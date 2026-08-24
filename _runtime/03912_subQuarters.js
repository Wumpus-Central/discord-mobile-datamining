// === Module 3912: subQuarters ===

// Module 3912 (subQuarters)
import toInteger from "toInteger" /* 3479 */;
import addQuarters from "addQuarters" /* 3641 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addQuarters) {
  obj = { default: null };
  obj[0] = addQuarters;
  let tmp5 = obj;
} else {
  tmp5 = addQuarters;
}
addQuarters = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addQuarters.default(arg0, -toInteger.default(arg1));
};
export default exports.default;