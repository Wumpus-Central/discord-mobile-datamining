// _runtime/03895_setQuarter.js
import toInteger from "03476_toInteger.js";
import _typeof from "metro/03472__typeof.js";
import setMonth from "03885_setMonth.js";
import requiredArgs from "03473_requiredArgs.js";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!setMonth) {
  obj = { default: null };
  obj[0] = setMonth;
  let tmp7 = obj;
} else {
  tmp7 = setMonth;
}
setMonth = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = toInteger.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return setMonth.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;