// === Module 4217: ? ===

// Module 4217
import _typeof_mod from "module_3958" /* 3958 */;
import module_4140_mod from "module_4140" /* 4140 */;
import module_4201_mod from "module_4201" /* 4201 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4140 = module_4140_mod;
if (!module_4140) {
  const obj2 = { default: module_4140 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4140;
}
module_4140 = tmp5;
let module_4201 = module_4201_mod;
if (!module_4201) {
  const obj3 = { default: module_4201 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4201;
}
module_4201 = tmp7;
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
    if (module_4140.default(defaultResult)) {
      const uTCFullYear = defaultResult.getUTCFullYear();
      const defaultResult1 = module_4201.default(defaultResult.getUTCDate(), 2);
      const defaultResult2 = module_4201.default(defaultResult.getUTCHours(), 2);
      const concat = "".concat;
      const defaultResult3 = module_4201.default(defaultResult.getUTCMinutes(), 2);
      const combined = "".concat(closure_3[defaultResult.getUTCDay(defaultResult)], ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(closure_4[defaultResult.getUTCMonth(defaultResult)], " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(module_4201.default(defaultResult.getUTCSeconds(), 2), " GMT");
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
};
export default exports.default;