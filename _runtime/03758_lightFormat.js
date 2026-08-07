// _runtime/03758_lightFormat.js
import _typeof from "_typeof";
import M from "M";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import isValid from "isValid";
import subMilliseconds from "subMilliseconds";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
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
let obj1 = tmp7;
if (!isValid) {
  obj1 = { default: null };
  obj1[0] = isValid;
  let tmp9 = obj1;
} else {
  tmp9 = isValid;
}
let c3 = tmp9;
if (!subMilliseconds) {
  const obj2 = { default: null };
  obj2[0] = subMilliseconds;
  let tmp11 = obj2;
} else {
  tmp11 = subMilliseconds;
}
let c4 = tmp11;
if (!requiredArgs) {
  const obj3 = { default: null };
  obj3[0] = requiredArgs;
  let tmp13 = obj3;
} else {
  tmp13 = requiredArgs;
}
let c5 = tmp13;
const re6 = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re7 = /^'([^]*?)'?$/;
const re8 = /''/g;
const re9 = /[a-zA-Z]/;

export default function lightFormat(arg0, str) {
  tmp13.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  if (tmp9.default(defaultResult1)) {
    tmp3 = tmp11.default(defaultResult1, tmp7.default(defaultResult1));
    let match = str.match(closure_6);
    let str3 = "";
    if (match) {
      const mapped = match.map((arg0) => {
        let str = arg0;
        if ("''" === arg0) {
          return "'";
        } else if ("'" === str[0]) {
          const match = str.match(outer1_7);
          if (match) {
            str = match[1].replace(outer1_8, "'");
            const str4 = match[1];
          }
          return str;
        } else if (outer1_1.default[str6]) {
          return tmp2(closure_0, str);
        } else if (str6.match(outer1_9)) {
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
    tmp3 = globalThis;
    let _RangeError = RangeError;
    let rangeError = new RangeError("Invalid time value");
    throw rangeError;
  }
};
export default exports.default;