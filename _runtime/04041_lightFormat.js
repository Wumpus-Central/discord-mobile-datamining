// === Module 4041: lightFormat ===

// Module 4041 (lightFormat)
import _typeof from "module_3663" /* 3663 */;
import M from "M" /* 3907 */;
import module_3826 from "module_3826" /* 3826 */;
import module_3845 from "module_3845" /* 3845 */;
import subMilliseconds from "subMilliseconds" /* 3896 */;
import requiredArgs from "requiredArgs" /* 3664 */;

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
if (!module_3826) {
  obj = { default: module_3826 };
  let tmp7 = obj;
} else {
  tmp7 = module_3826;
}
module_3826 = tmp7;
if (!module_3845) {
  const obj1 = { default: module_3845 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3845;
}
module_3845 = tmp9;
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
  if (module_3845.default(defaultResult1)) {
    _typeof = subMilliseconds.default(defaultResult1, module_3826.default(defaultResult1));
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