// === Module 4179: ? ===

// Module 4179
import _typeof_mod from "module_3913" /* 3913 */;
import module_4180_mod from "module_4180" /* 4180 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4180 = module_4180_mod;
if (!module_4180) {
  const obj2 = { default: module_4180 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4180;
}
module_4180 = tmp5;
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
    if (module_4180.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;