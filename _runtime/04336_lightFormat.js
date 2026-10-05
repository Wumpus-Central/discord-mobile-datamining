// _runtime/04336_lightFormat.js
import toDate_mod from "03958_toDate.js";
import addLeadingZeros_mod from "04202_addLeadingZeros.js";
import getTimezoneOffsetInMilliseconds_mod from "04121_getTimezoneOffsetInMilliseconds.js";
import isValid_mod from "04140_isValid.js";
import subMilliseconds_mod from "04191_subMilliseconds.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp11;
let tmp13;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let addLeadingZeros = addLeadingZeros_mod;
if (!addLeadingZeros) {
  tmp5 = { default: addLeadingZeros };
  const obj2 = { default: addLeadingZeros };
} else {
  tmp5 = addLeadingZeros;
}
addLeadingZeros = tmp5;
let getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds_mod;
if (!getTimezoneOffsetInMilliseconds) {
  tmp7 = { default: getTimezoneOffsetInMilliseconds };
  const obj3 = { default: getTimezoneOffsetInMilliseconds };
} else {
  tmp7 = getTimezoneOffsetInMilliseconds;
}
getTimezoneOffsetInMilliseconds = tmp7;
let isValid = isValid_mod;
if (!isValid) {
  tmp9 = { default: isValid };
  const obj4 = { default: isValid };
} else {
  tmp9 = isValid;
}
isValid = tmp9;
let subMilliseconds = subMilliseconds_mod;
if (!subMilliseconds) {
  tmp11 = { default: subMilliseconds };
  const obj5 = { default: subMilliseconds };
} else {
  tmp11 = subMilliseconds;
}
subMilliseconds = tmp11;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp13 = { default: requiredArgs };
  const obj6 = { default: requiredArgs };
} else {
  tmp13 = requiredArgs;
}
requiredArgs = tmp13;
const re6 = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re7 = /^'([^]*?)'?$/;
const re8 = /''/g;
const re9 = /[a-zA-Z]/;

export default function lightFormat(arg0, str) {
  let closure_0;
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  if (isValid.default(defaultResult1)) {
    toDate = subMilliseconds.default(defaultResult1, getTimezoneOffsetInMilliseconds.default(defaultResult1));
    let match = str.match(closure_6);
    let str3 = "";
    if (match) {
      const mapped = match.map(function (item) {
        let str = item;
        if ("''" === item) {
          return "'";
        } else if ("'" === str[0]) {
          const match = str.match(re7);
          if (match) {
            const str4 = match[1];
            str = str4.replace(re8, "'");
          }
          return str;
        } else if (addLeadingZeros.default[str[0]]) {
          return addLeadingZeros.default[str[0]](closure_0, str);
        } else if (str[0].match(re9)) {
          const _RangeError = RangeError;
          const self = this;
          const self2 = this;
          const rangeError = new RangeError(
            "Format string contains an unescaped latin alphabet character `" + str6 + "`",
          );
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
    let self = this;
    str = "Invalid time value";
    let self2 = this;
    let rangeError = new RangeError("Invalid time value");
    throw rangeError;
  }
}
