// _runtime/03972_M.js
import module_3971_mod from "metro/03971__.js";

let module_3971 = module_3971_mod;
if (!module_3971) {
  const obj = { default: module_3971 };
  let tmp3 = obj;
} else {
  tmp3 = module_3971;
}
module_3971 = tmp3;

export default {
  y(getUTCFullYear, arg1) {
    const uTCFullYear = getUTCFullYear.getUTCFullYear();
    let diff = uTCFullYear;
    if (uTCFullYear <= 0) {
      diff = 1 - uTCFullYear;
    }
    let result = diff;
    if ("yy" === arg1) {
      result = diff % 100;
    }
    return module_3971.default(result, arg1.length);
  },
  M(getUTCMonth, arg1) {
    const uTCMonth = getUTCMonth.getUTCMonth();
    if ("M" === arg1) {
      const _String = String;
      let StringResult = String(uTCMonth + 1);
    } else {
      StringResult = module_3971.default(uTCMonth + 1, 2);
    }
    return StringResult;
  },
  d(getUTCDate, arg1) {
    return module_3971.default(getUTCDate.getUTCDate(), arg1.length);
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
    return module_3971.default(getUTCHours.getUTCHours() % 12 || 12, arg1.length);
  },
  H(getUTCHours, arg1) {
    return module_3971.default(getUTCHours.getUTCHours(), arg1.length);
  },
  m(getUTCMinutes, arg1) {
    return module_3971.default(getUTCMinutes.getUTCMinutes(), arg1.length);
  },
  s(getUTCSeconds, arg1) {
    return module_3971.default(getUTCSeconds.getUTCSeconds(), arg1.length);
  },
  S(getUTCMilliseconds, arg1) {
    const uTCMilliseconds = getUTCMilliseconds.getUTCMilliseconds();
    return module_3971.default(Math.floor(uTCMilliseconds * Math.pow(10, arg1.length - 3)), arg1.length);
  }
};
export default exports.default;