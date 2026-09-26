// === Module 4184: ? ===

// Module 4184
import _typeof_mod from "module_3918" /* 3918 */;
import module_4185_mod from "module_4185" /* 4185 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4185 = module_4185_mod;
if (!module_4185) {
  const obj2 = { default: module_4185 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4185;
}
module_4185 = tmp5;
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
    if (module_4185.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;