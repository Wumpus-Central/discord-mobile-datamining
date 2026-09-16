// _runtime/metro/03985__.js
import _typeof_mod from "03726__.js";
import module_3908_mod from "03908__.js";
import module_3969_mod from "03969__.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3908 = module_3908_mod;
if (!module_3908) {
  const obj2 = { default: module_3908 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3908;
}
module_3908 = tmp5;
let module_3969 = module_3969_mod;
if (!module_3969) {
  const obj3 = { default: module_3969 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3969;
}
module_3969 = tmp7;
let closure_3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let closure_4 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function formatRFC7231(arg0) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = _typeof.default(arg0);
    if (module_3908.default(defaultResult)) {
      const uTCFullYear = defaultResult.getUTCFullYear();
      const defaultResult1 = module_3969.default(defaultResult.getUTCDate(), 2);
      const defaultResult2 = module_3969.default(defaultResult.getUTCHours(), 2);
      const concat = "".concat;
      const defaultResult3 = module_3969.default(defaultResult.getUTCMinutes(), 2);
      const combined = "".concat(closure_3[defaultResult.getUTCDay(defaultResult)], ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(closure_4[defaultResult.getUTCMonth(defaultResult)], " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(module_3969.default(defaultResult.getUTCSeconds(), 2), " GMT");
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
};
export default exports.default;