// _runtime/03859_minutesToMilliseconds.js
import keys from "03654_keys.js";
import requiredArgs from "03476_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.millisecondsInMinute);
};
export default exports.default;