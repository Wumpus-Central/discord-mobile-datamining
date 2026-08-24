// _runtime/03913_subSeconds.js
import toInteger from "03479_toInteger.js";
import addSeconds from "03642_addSeconds.js";
import requiredArgs from "03476_requiredArgs.js";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addSeconds) {
  obj = { default: null };
  obj[0] = addSeconds;
  let tmp5 = obj;
} else {
  tmp5 = addSeconds;
}
addSeconds = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addSeconds.default(arg0, -toInteger.default(arg1));
};
export default exports.default;