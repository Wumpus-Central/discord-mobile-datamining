// _runtime/03774_secondsToMilliseconds.js
import requiredArgs from "requiredArgs";
import { keys } from "03543_keys.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function secondsToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return arg0 * keys.millisecondsInSecond;
};
export default exports.default;