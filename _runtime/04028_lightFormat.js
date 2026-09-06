// _runtime/04028_lightFormat.js
import _typeof from "metro/03650__.js";
import M from "03894_M.js";
import 03813__ from "metro/03813__.js";
import 03832__ from "metro/03832__.js";
import subMilliseconds from "03883_subMilliseconds.js";
import requiredArgs from "03651_requiredArgs.js";

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!M) {
  obj = { default: M };
  let tmp5 = obj;
} else {
  tmp5 = M;
}
let closure_1 = tmp5;
if (!module_3813) {
  obj = { default: module_3813 };
  let tmp7 = obj;
} else {
  tmp7 = module_3813;
}
module_3813 = tmp7;
if (!module_3832) {
  const obj1 = { default: module_3832 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3832;
}
module_3832 = tmp9;
if (!subMilliseconds) {
  const obj2 = { default: subMilliseconds };
  let tmp11 = obj2;
} else {
  tmp11 = subMilliseconds;
}
subMilliseconds = tmp11;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp13 = obj3;
} else {
  tmp13 = requiredArgs;
}
requiredArgs = tmp13;
const re6 = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re7 = /^'([^]*?)'?$/;
const re8 = /''/g;
const re9 = /[a-zA-Z]/;

export default function lightFormat(arg0, str) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if (module_3832.default(defaultResult1)) {
    _typeof = subMilliseconds.default(defaultResult1, module_3813.default(defaultResult1));
    let match = str.match(closure_6);
    let str3 = "";
    if (match) {
      const mapped = match.map((item) => {
        let str = item;
        if ("''" === item) {
          return "'";
        } else if ("'" === str[0]) {
          const match = str.match(re7);
          if (match) {
            str = match[1].replace(re8, "'");
          }
          return str;
        } else if (closure_1.default[str6]) {
          return tmp2(closure_0, str);
        } else if (str6.match(re9)) {
          const _RangeError = RangeError;
          const rangeError = new RangeError("Format string contains an unescaped latin alphabet character `" + str6 + "`");
          throw rangeError;
        } else {
          return str;
        }
      });
      str3 = mapped.join("");
    }
    return str3;
  } else {
    let _RangeError = RangeError;
    let rangeError = new RangeError("Invalid time value");
    throw rangeError;
  }
};
export default exports.default;