// === Module 3919: lightFormat ===

// Module 3919 (lightFormat)
import _typeof from "_typeof" /* 3541 */;
import M from "M" /* 3785 */;
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds" /* 3704 */;
import isValid from "isValid" /* 3723 */;
import subMilliseconds from "subMilliseconds" /* 3774 */;
import requiredArgs from "requiredArgs" /* 3542 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!M) {
  obj = { default: null };
  obj[0] = M;
  let tmp5 = obj;
} else {
  tmp5 = M;
}
let closure_1 = tmp5;
if (!getTimezoneOffsetInMilliseconds) {
  obj = { default: null };
  obj[0] = getTimezoneOffsetInMilliseconds;
  let tmp7 = obj;
} else {
  tmp7 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp7;
if (!isValid) {
  const obj1 = { default: null };
  obj1[0] = isValid;
  let tmp9 = obj1;
} else {
  tmp9 = isValid;
}
isValid = tmp9;
if (!subMilliseconds) {
  const obj2 = { default: null };
  obj2[0] = subMilliseconds;
  let tmp11 = obj2;
} else {
  tmp11 = subMilliseconds;
}
subMilliseconds = tmp11;
if (!requiredArgs) {
  const obj3 = { default: null };
  obj3[0] = requiredArgs;
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
  if (isValid.default(defaultResult1)) {
    _typeof = subMilliseconds.default(defaultResult1, getTimezoneOffsetInMilliseconds.default(defaultResult1));
    let match = str.match(closure_6);
    let str3 = "";
    if (match) {
      const mapped = match.map((arg0) => {
        let str = arg0;
        if ("''" === arg0) {
          return "'";
        } else if ("'" === str[0]) {
          const match = str.match(closure_1_7);
          if (match) {
            str = match[1].replace(closure_1_8, "'");
            const str4 = match[1];
          }
          return str;
        } else if (closure_1_1.default[str6]) {
          return tmp2(closure_0, str);
        } else if (str6.match(closure_1_9)) {
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