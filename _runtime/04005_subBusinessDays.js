// _runtime/04005_subBusinessDays.js
import addBusinessDays from "03721_addBusinessDays.js";
import requiredArgs from "03572_requiredArgs.js";
import toInteger from "03575_toInteger.js";

if (!addBusinessDays) {
  let obj = { default: null };
  obj[0] = addBusinessDays;
  let tmp3 = obj;
} else {
  tmp3 = addBusinessDays;
}
addBusinessDays = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addBusinessDays.default(arg0, -toInteger.default(arg1));
};
export default exports.default;