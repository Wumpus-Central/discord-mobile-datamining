// === Module 3716: M ===

// Module 3716 (M)
import addLeadingZeros from "addLeadingZeros" /* 3715 */;

if (!addLeadingZeros) {
  const obj = { default: null };
  obj[0] = addLeadingZeros;
  let tmp3 = obj;
} else {
  tmp3 = addLeadingZeros;
}
addLeadingZeros = tmp3;

export default {
  y(getUTCFullYear) {
    const uTCFullYear = getUTCFullYear.getUTCFullYear();
    let diff = uTCFullYear;
    if (uTCFullYear <= 0) {
      diff = 1 - uTCFullYear;
    }
    let result = diff;
    if ("yy" === arg1) {
      result = diff % 100;
    }
    return addLeadingZeros.default(result, arg1.length);
  },
  M(getUTCMonth) {
    const uTCMonth = getUTCMonth.getUTCMonth();
    if ("M" === arg1) {
      const _String = String;
      let StringResult = String(uTCMonth + 1);
    } else {
      StringResult = addLeadingZeros.default(uTCMonth + 1, 2);
    }
    return StringResult;
  },
  d(getUTCDate) {
    return addLeadingZeros.default(getUTCDate.getUTCDate(), arg1.length);
  },
  a(getUTCHours) {
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
  h(getUTCHours) {
    return addLeadingZeros.default(getUTCHours.getUTCHours() % 12 || 12, arg1.length);
  },
  H(getUTCHours) {
    return addLeadingZeros.default(getUTCHours.getUTCHours(), arg1.length);
  },
  m(getUTCMinutes) {
    return addLeadingZeros.default(getUTCMinutes.getUTCMinutes(), arg1.length);
  },
  s(getUTCSeconds) {
    return addLeadingZeros.default(getUTCSeconds.getUTCSeconds(), arg1.length);
  },
  S(getUTCMilliseconds) {
    const uTCMilliseconds = getUTCMilliseconds.getUTCMilliseconds();
    return addLeadingZeros.default(Math.floor(uTCMilliseconds * Math.pow(10, arg1.length - 3)), arg1.length);
  }
};
export default exports.default;