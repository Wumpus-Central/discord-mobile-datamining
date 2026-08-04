// _runtime/03713_weeksToDays.js
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function weeksToDays(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3451) /* keys */.daysInWeek);
};
export default exports.default;