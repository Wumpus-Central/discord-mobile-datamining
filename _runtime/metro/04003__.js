// _runtime/metro/04003__.js
import startOfSecond from "../04004_startOfSecond.js";
import requiredArgs from "../03651_requiredArgs.js";

if (!startOfSecond) {
  let obj = { default: startOfSecond };
  let tmp3 = obj;
} else {
  tmp3 = startOfSecond;
}
startOfSecond = tmp3;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameSecond(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfSecond.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfSecond.default(arg1).getTime();
};
export default exports.default;