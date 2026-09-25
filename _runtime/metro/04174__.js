// === Module 4174: ? ===

// Module 4174
import _typeof_mod from "module_3915" /* 3915 */;
import module_4097_mod from "module_4097" /* 4097 */;
import module_4158_mod from "module_4158" /* 4158 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4097 = module_4097_mod;
if (!module_4097) {
  const obj2 = { default: module_4097 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4097;
}
module_4097 = tmp5;
let module_4158 = module_4158_mod;
if (!module_4158) {
  const obj3 = { default: module_4158 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4158;
}
module_4158 = tmp7;
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
    if (module_4097.default(defaultResult)) {
      const uTCFullYear = defaultResult.getUTCFullYear();
      const defaultResult1 = module_4158.default(defaultResult.getUTCDate(), 2);
      const defaultResult2 = module_4158.default(defaultResult.getUTCHours(), 2);
      const concat = "".concat;
      const defaultResult3 = module_4158.default(defaultResult.getUTCMinutes(), 2);
      const combined = "".concat(closure_3[defaultResult.getUTCDay(defaultResult)], ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(closure_4[defaultResult.getUTCMonth(defaultResult)], " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(module_4158.default(defaultResult.getUTCSeconds(), 2), " GMT");
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
};
export default exports.default;