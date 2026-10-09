// _runtime/metro/04424__.js
import _typeof_mod from "04158__.js";
import module_4425_mod from "04425__.js";
import requiredArgs_mod from "../04159_requiredArgs.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj2 = { default: module_4425 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4425;
}
module_4425 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getDaysInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if ("Invalid Date" === String(date)) {
    return NaN;
  } else {
    let num = 365;
    if (module_4425.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;