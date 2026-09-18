// _runtime/metro/04238__.js
import module_3815_mod from "03815__.js";
import _typeof_mod from "03811__.js";
import requiredArgs_mod from "../03812_requiredArgs.js";

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setYear(date, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(date);
  if (isNaN(defaultResult1.getTime())) {
    const _Date = Date;
    date = new Date(NaN);
    return date;
  } else {
    defaultResult1.setFullYear(defaultResult2);
    return defaultResult1;
  }
  defaultResult2 = module_3815.default(arg1);
};
export default exports.default;