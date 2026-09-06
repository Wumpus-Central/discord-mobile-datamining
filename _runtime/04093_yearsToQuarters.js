// _runtime/04093_yearsToQuarters.js
import keys from "03829_keys.js";
import requiredArgs from "03651_requiredArgs.js";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function yearsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * keys.quartersInYear);
};
export default exports.default;