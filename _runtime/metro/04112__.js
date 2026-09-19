// _runtime/metro/04112__.js
import _typeof_mod from "03845__.js";
import requiredArgs_mod from "../03846_requiredArgs.js";

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

export default function isLeapYear(arg0) {
  requiredArgs.default(1, arguments);
  const fullYear = _typeof.default(arg0).getFullYear();
  const result = fullYear % 400;
  let tmp4 = result === 0;
  if (result !== 0) {
    const result1 = fullYear % 4;
    let tmp6 = result1 === 0;
    if (result1 === 0) {
      tmp6 = fullYear % 100 !== 0;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};
export default exports.default;