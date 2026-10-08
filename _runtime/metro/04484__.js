// _runtime/metro/04484__.js
import _typeof_mod from "04156__.js";
import requiredArgs_mod from "../04157_requiredArgs.js";
import module_4160_mod from "04160__.js";

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
let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj3 = { default: module_4160 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4160;
}
module_4160 = tmp7;

export default function setUTCISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = module_4160.default(arg1);
  let diff = defaultResult1;
  if (defaultResult1 % 7 === 0) {
    diff = defaultResult1 - 7;
  }
  const defaultResult2 = _typeof.default(arg0);
  let num = 0;
  const uTCDay = defaultResult2.getUTCDay();
  if ((diff % 7 + 7) % 7 < 1) {
    num = 7;
  }
  const diff1 = num + diff - uTCDay;
  defaultResult2.setUTCDate(defaultResult2.getUTCDate() + diff1);
  return defaultResult2;
};
export default exports.default;