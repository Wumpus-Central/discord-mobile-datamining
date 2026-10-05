// _runtime/04202_addLeadingZeros.js
import addLeadingZeros_mod from "04201_addLeadingZeros.js";

let tmp3;
let addLeadingZeros = addLeadingZeros_mod;
if (!addLeadingZeros) {
  tmp3 = { default: addLeadingZeros };
  const obj = { default: addLeadingZeros };
} else {
  tmp3 = addLeadingZeros;
}
addLeadingZeros = tmp3;

export default {
  y(getUTCFullYear, arg1) {
    const uTCFullYear = getUTCFullYear.getUTCFullYear();
    let diff = uTCFullYear;
    if (uTCFullYear <= 0) {
      diff = 1 - uTCFullYear;
    }
    let result = diff;
    const _default = addLeadingZeros.default;
    if ("yy" === arg1) {
      result = diff % 100;
    }
    return _default(result, arg1.length);
  },
  M(getUTCMonth, arg1) {
    let StringResult;
    const uTCMonth = getUTCMonth.getUTCMonth();
    if ("M" === arg1) {
      const _String = String;
      StringResult = String(uTCMonth + 1);
    } else {
      StringResult = addLeadingZeros.default(uTCMonth + 1, 2);
    }
    return StringResult;
  },
  d(getUTCDate, arg1) {
    return addLeadingZeros.default(getUTCDate.getUTCDate(), arg1.length);
  },
  a(getUTCHours, arg1) {
    let str = "am";
    if (1 <= getUTCHours.getUTCHours() / 12) {
      str = "pm";
    }
    if ("a" !== arg1) {
      if ("aa" !== arg1) {
        if ("aaa" === arg1) {
          return str;
        } else if ("aaaaa" === arg1) {
          return str[0];
        } else {
          let str5 = "p.m.";
          if ("am" === str) {
            str5 = "a.m.";
          }
          return str5;
        }
      }
    }
    return str.toUpperCase();
  },
  h(getUTCHours, arg1) {
    const _default = addLeadingZeros.default;
    const tmp = getUTCHours.getUTCHours() % 12 || 12;
    return _default(tmp, arg1.length);
  },
  H(getUTCHours, arg1) {
    return addLeadingZeros.default(getUTCHours.getUTCHours(), arg1.length);
  },
  m(getUTCMinutes, arg1) {
    return addLeadingZeros.default(getUTCMinutes.getUTCMinutes(), arg1.length);
  },
  s(getUTCSeconds, arg1) {
    return addLeadingZeros.default(getUTCSeconds.getUTCSeconds(), arg1.length);
  },
  S(getUTCMilliseconds, arg1) {
    const length = arg1.length;
    const uTCMilliseconds = getUTCMilliseconds.getUTCMilliseconds();
    return addLeadingZeros.default(Math.floor(uTCMilliseconds * Math.pow(10, length - 3)), arg1.length);
  },
};
