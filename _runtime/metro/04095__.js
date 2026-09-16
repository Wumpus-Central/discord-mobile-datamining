// _runtime/metro/04095__.js
import _typeof_mod from "03726__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isWithinInterval(arg0, start) {
  requiredArgs.default(2, arguments);
  const time = _typeof.default(arg0).getTime();
  const defaultResult1 = _typeof.default(arg0);
  const time1 = _typeof.default(start.start).getTime();
  const defaultResult2 = _typeof.default(start.start);
  const time2 = _typeof.default(start.end).getTime();
  if (time1 <= time2) {
    return time >= time1 && time <= time2;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
  const defaultResult3 = _typeof.default(start.end);
};
export default exports.default;