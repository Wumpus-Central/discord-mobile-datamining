// === Module 3884: G ===

// Module 3884 (G)
import module_3885 from "module_3885" /* 3885 */;
import module_3886 from "module_3886" /* 3886 */;
import module_3889 from "module_3889" /* 3889 */;
import module_3890 from "module_3890" /* 3890 */;
import module_3892 from "module_3892" /* 3892 */;
import module_3893 from "module_3893" /* 3893 */;
import M from "M" /* 3894 */;

if (!module_3885) {
  let obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
if (!module_3886) {
  obj = { default: module_3886 };
  let tmp5 = obj;
} else {
  tmp5 = module_3886;
}
module_3886 = tmp5;
if (!module_3889) {
  obj = { default: module_3889 };
  let tmp7 = obj;
} else {
  tmp7 = module_3889;
}
module_3889 = tmp7;
if (!module_3890) {
  const obj1 = { default: module_3890 };
  let tmp9 = obj1;
} else {
  tmp9 = module_3890;
}
module_3890 = tmp9;
if (!module_3892) {
  const obj2 = { default: module_3892 };
  let tmp11 = obj2;
} else {
  tmp11 = module_3892;
}
module_3892 = tmp11;
if (!module_3893) {
  const obj3 = { default: module_3893 };
  let tmp13 = obj3;
} else {
  tmp13 = module_3893;
}
module_3893 = tmp13;
if (!M) {
  const obj4 = { default: M };
  let tmp15 = obj4;
} else {
  tmp15 = M;
}
let closure_6 = tmp15;
const midnight = "midnight";
const noon = "noon";
const morning = "morning";
const afternoon = "afternoon";
const evening = "evening";
const night = "night";

export default {
  G(getUTCFullYear, arg1, era) {
    let num = 0;
    if (getUTCFullYear.getUTCFullYear() > 0) {
      num = 1;
    }
    if ("G" !== arg1) {
      if ("GG" !== arg1) {
        if ("GGG" !== arg1) {
          if ("GGGGG" === arg1) {
            return era.era(num, { width: "narrow" });
          } else {
            return era.era(num, { width: "wide" });
          }
        }
      }
    }
    return era.era(num, { width: "abbreviated" });
  },
  y(getUTCFullYear, arg1, ordinalNumber) {
    if ("yo" === arg1) {
      const uTCFullYear = getUTCFullYear.getUTCFullYear();
      let diff = uTCFullYear;
      if (uTCFullYear <= 0) {
        diff = 1 - uTCFullYear;
      }
      return ordinalNumber.ordinalNumber(diff, { unit: "year" });
    } else {
      return closure_6.default.y(getUTCFullYear, arg1);
    }
  },
  Y(arg0, arg1, ordinalNumber, arg3) {
    const defaultResult = module_3892.default(arg0, arg3);
    let diff = defaultResult;
    if (defaultResult <= 0) {
      diff = 1 - defaultResult;
    }
    if ("YY" === arg1) {
      return module_3893.default(diff % 100, 2);
    } else {
      if ("Yo" === arg1) {
        let ordinalNumberResult = ordinalNumber.ordinalNumber(diff, { unit: "year" });
      } else {
        ordinalNumberResult = module_3893.default(diff, arg1.length);
      }
      return ordinalNumberResult;
    }
  },
  R(arg0, arg1) {
    return module_3893.default(module_3889.default(arg0), arg1.length);
  },
  u(getUTCFullYear, arg1) {
    return module_3893.default(getUTCFullYear.getUTCFullYear(), arg1.length);
  },
  Q(getUTCMonth, arg1, ordinalNumber) {
    const rounded = Math.ceil((getUTCMonth.getUTCMonth() + 1) / 3);
    if ("Q" === arg1) {
      const _String = String;
      return String(rounded);
    } else if ("QQ" === arg1) {
      return module_3893.default(rounded, 2);
    } else if ("Qo" === arg1) {
      return ordinalNumber.ordinalNumber(rounded, { unit: "quarter" });
    } else if ("QQQ" === arg1) {
      return ordinalNumber.quarter(rounded, { width: "abbreviated", context: "formatting" });
    } else if ("QQQQQ" === arg1) {
      return ordinalNumber.quarter(rounded, { width: "narrow", context: "formatting" });
    } else {
      return ordinalNumber.quarter(rounded, { width: "wide", context: "formatting" });
    }
  },
  q(getUTCMonth, arg1, ordinalNumber) {
    const rounded = Math.ceil((getUTCMonth.getUTCMonth() + 1) / 3);
    if ("q" === arg1) {
      const _String = String;
      return String(rounded);
    } else if ("qq" === arg1) {
      return module_3893.default(rounded, 2);
    } else if ("qo" === arg1) {
      return ordinalNumber.ordinalNumber(rounded, { unit: "quarter" });
    } else if ("qqq" === arg1) {
      return ordinalNumber.quarter(rounded, { width: "abbreviated", context: "standalone" });
    } else if ("qqqqq" === arg1) {
      return ordinalNumber.quarter(rounded, { width: "narrow", context: "standalone" });
    } else {
      return ordinalNumber.quarter(rounded, { width: "wide", context: "standalone" });
    }
  },
  M(getUTCMonth, arg1, ordinalNumber) {
    const uTCMonth = getUTCMonth.getUTCMonth();
    if ("M" !== arg1) {
      if ("MM" !== arg1) {
        if ("Mo" === arg1) {
          return ordinalNumber.ordinalNumber(uTCMonth + 1, { unit: "month" });
        } else if ("MMM" === arg1) {
          return ordinalNumber.month(uTCMonth, { width: "abbreviated", context: "formatting" });
        } else if ("MMMMM" === arg1) {
          return ordinalNumber.month(uTCMonth, { width: "narrow", context: "formatting" });
        } else {
          return ordinalNumber.month(uTCMonth, { width: "wide", context: "formatting" });
        }
      }
    }
    return closure_6.default.M(getUTCMonth, arg1);
  },
  L(getUTCMonth, arg1, ordinalNumber) {
    const uTCMonth = getUTCMonth.getUTCMonth();
    if ("L" === arg1) {
      const _String = String;
      return String(uTCMonth + 1);
    } else if ("LL" === arg1) {
      return module_3893.default(uTCMonth + 1, 2);
    } else if ("Lo" === arg1) {
      return ordinalNumber.ordinalNumber(uTCMonth + 1, { unit: "month" });
    } else if ("LLL" === arg1) {
      return ordinalNumber.month(uTCMonth, { width: "abbreviated", context: "standalone" });
    } else if ("LLLLL" === arg1) {
      return ordinalNumber.month(uTCMonth, { width: "narrow", context: "standalone" });
    } else {
      return ordinalNumber.month(uTCMonth, { width: "wide", context: "standalone" });
    }
  },
  w(arg0, arg1, ordinalNumber, arg3) {
    const defaultResult = module_3890.default(arg0, arg3);
    if ("wo" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(defaultResult, { unit: "week" });
    } else {
      ordinalNumberResult = module_3893.default(defaultResult, arg1.length);
    }
    return ordinalNumberResult;
  },
  I(arg0, arg1, ordinalNumber) {
    const defaultResult = module_3886.default(arg0);
    if ("Io" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(defaultResult, { unit: "week" });
    } else {
      ordinalNumberResult = module_3893.default(defaultResult, arg1.length);
    }
    return ordinalNumberResult;
  },
  d(getUTCDate, arg1, ordinalNumber) {
    if ("do" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(getUTCDate.getUTCDate(), { unit: "date" });
    } else {
      ordinalNumberResult = closure_6.default.d(getUTCDate, arg1);
      const _default = closure_6.default;
    }
    return ordinalNumberResult;
  },
  D(arg0, arg1, ordinalNumber) {
    const defaultResult = module_3885.default(arg0);
    if ("Do" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(defaultResult, { unit: "dayOfYear" });
    } else {
      ordinalNumberResult = module_3893.default(defaultResult, arg1.length);
    }
    return ordinalNumberResult;
  },
  E(getUTCDay, arg1, day) {
    const uTCDay = getUTCDay.getUTCDay();
    if ("E" !== arg1) {
      if ("EE" !== arg1) {
        if ("EEE" !== arg1) {
          if ("EEEEE" === arg1) {
            return day.day(uTCDay, { width: "narrow", context: "formatting" });
          } else if ("EEEEEE" === arg1) {
            return day.day(uTCDay, { width: "short", context: "formatting" });
          } else {
            return day.day(uTCDay, { width: "wide", context: "formatting" });
          }
        }
      }
    }
    return day.day(uTCDay, { width: "abbreviated", context: "formatting" });
  },
  e(getUTCDay, arg1, ordinalNumber, weekStartsOn) {
    const uTCDay = getUTCDay.getUTCDay();
    const tmp2 = (uTCDay - weekStartsOn.weekStartsOn + 8) % 7 || 7;
    if ("e" === arg1) {
      const _String = String;
      return String(tmp2);
    } else if ("ee" === arg1) {
      return module_3893.default(tmp2, 2);
    } else if ("eo" === arg1) {
      return ordinalNumber.ordinalNumber(tmp2, { unit: "day" });
    } else if ("eee" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "abbreviated", context: "formatting" });
    } else if ("eeeee" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "narrow", context: "formatting" });
    } else if ("eeeeee" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "short", context: "formatting" });
    } else {
      return ordinalNumber.day(uTCDay, { width: "wide", context: "formatting" });
    }
  },
  c(getUTCDay, arg1, ordinalNumber, weekStartsOn) {
    const uTCDay = getUTCDay.getUTCDay();
    const tmp2 = (uTCDay - weekStartsOn.weekStartsOn + 8) % 7 || 7;
    if ("c" === arg1) {
      const _String = String;
      return String(tmp2);
    } else if ("cc" === arg1) {
      return module_3893.default(tmp2, arg1.length);
    } else if ("co" === arg1) {
      return ordinalNumber.ordinalNumber(tmp2, { unit: "day" });
    } else if ("ccc" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "abbreviated", context: "standalone" });
    } else if ("ccccc" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "narrow", context: "standalone" });
    } else if ("cccccc" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "short", context: "standalone" });
    } else {
      return ordinalNumber.day(uTCDay, { width: "wide", context: "standalone" });
    }
  },
  i(getUTCDay, arg1, ordinalNumber) {
    const uTCDay = getUTCDay.getUTCDay();
    let num = 7;
    if (0 !== uTCDay) {
      num = uTCDay;
    }
    if ("i" === arg1) {
      const _String = String;
      return String(num);
    } else if ("ii" === arg1) {
      return module_3893.default(num, arg1.length);
    } else if ("io" === arg1) {
      return ordinalNumber.ordinalNumber(num, { unit: "day" });
    } else if ("iii" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "abbreviated", context: "formatting" });
    } else if ("iiiii" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "narrow", context: "formatting" });
    } else if ("iiiiii" === arg1) {
      return ordinalNumber.day(uTCDay, { width: "short", context: "formatting" });
    } else {
      return ordinalNumber.day(uTCDay, { width: "wide", context: "formatting" });
    }
  },
  a(getUTCHours, arg1, dayPeriod) {
    let str = "am";
    if (1 <= getUTCHours.getUTCHours() / 12) {
      str = "pm";
    }
    if ("a" !== arg1) {
      if ("aa" !== arg1) {
        if ("aaa" === arg1) {
          return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" }).toLowerCase();
        } else if ("aaaaa" === arg1) {
          return dayPeriod.dayPeriod(str, { width: "narrow", context: "formatting" });
        } else {
          return dayPeriod.dayPeriod(str, { width: "wide", context: "formatting" });
        }
      }
    }
    return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" });
  },
  b(getUTCHours, arg1, dayPeriod) {
    const uTCHours = getUTCHours.getUTCHours();
    if (12 === uTCHours) {
      let str = noon;
    } else if (0 === uTCHours) {
      str = midnight;
    } else {
      str = "am";
      if (1 <= uTCHours / 12) {
        str = "pm";
      }
    }
    if ("b" !== arg1) {
      if ("bb" !== arg1) {
        if ("bbb" === arg1) {
          return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" }).toLowerCase();
        } else if ("bbbbb" === arg1) {
          return dayPeriod.dayPeriod(str, { width: "narrow", context: "formatting" });
        } else {
          return dayPeriod.dayPeriod(str, { width: "wide", context: "formatting" });
        }
      }
    }
    return dayPeriod.dayPeriod(str, { width: "abbreviated", context: "formatting" });
  },
  B(getUTCHours, arg1, dayPeriod) {
    const uTCHours = getUTCHours.getUTCHours();
    if (uTCHours >= 17) {
      let tmp2 = evening;
    } else if (uTCHours >= 12) {
      tmp2 = afternoon;
    } else {
      tmp2 = uTCHours >= 4 ? morning : night;
    }
    if ("B" !== arg1) {
      if ("BB" !== arg1) {
        if ("BBB" !== arg1) {
          if ("BBBBB" === arg1) {
            return dayPeriod.dayPeriod(tmp2, { width: "narrow", context: "formatting" });
          } else {
            return dayPeriod.dayPeriod(tmp2, { width: "wide", context: "formatting" });
          }
        }
      }
    }
    return dayPeriod.dayPeriod(tmp2, { width: "abbreviated", context: "formatting" });
  },
  h(getUTCHours, arg1, ordinalNumber) {
    if ("ho" === arg1) {
      let num2 = getUTCHours.getUTCHours() % 12;
      if (0 === num2) {
        num2 = 12;
      }
      return ordinalNumber.ordinalNumber(num2, { unit: "hour" });
    } else {
      return closure_6.default.h(getUTCHours, arg1);
    }
  },
  H(getUTCHours, arg1, ordinalNumber) {
    if ("Ho" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(getUTCHours.getUTCHours(), { unit: "hour" });
    } else {
      ordinalNumberResult = closure_6.default.H(getUTCHours, arg1);
      const _default = closure_6.default;
    }
    return ordinalNumberResult;
  },
  K(getUTCHours, arg1, ordinalNumber) {
    const result = getUTCHours.getUTCHours() % 12;
    if ("Ko" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(result, { unit: "hour" });
    } else {
      ordinalNumberResult = module_3893.default(result, arg1.length);
    }
    return ordinalNumberResult;
  },
  k(getUTCHours, arg1, ordinalNumber) {
    let num = getUTCHours.getUTCHours();
    if (0 === num) {
      num = 24;
    }
    if ("ko" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(num, { unit: "hour" });
    } else {
      ordinalNumberResult = module_3893.default(num, arg1.length);
    }
    return ordinalNumberResult;
  },
  m(getUTCMinutes, arg1, ordinalNumber) {
    if ("mo" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(getUTCMinutes.getUTCMinutes(), { unit: "minute" });
    } else {
      ordinalNumberResult = closure_6.default.m(getUTCMinutes, arg1);
      const _default = closure_6.default;
    }
    return ordinalNumberResult;
  },
  s(getUTCSeconds, arg1, ordinalNumber) {
    if ("so" === arg1) {
      let ordinalNumberResult = ordinalNumber.ordinalNumber(getUTCSeconds.getUTCSeconds(), { unit: "second" });
    } else {
      ordinalNumberResult = closure_6.default.s(getUTCSeconds, arg1);
      const _default = closure_6.default;
    }
    return ordinalNumberResult;
  },
  S(arg0, arg1) {
    return closure_6.default.S(arg0, arg1);
  },
  X(arg0, arg1, arg2, _originalDate) {
    const timezoneOffset = _originalDate._originalDate || arg0.getTimezoneOffset();
    if (0 === timezoneOffset) {
      return "Z";
    } else if ("X" === arg1) {
      if (timezoneOffset % 60 === 0) {
        let str5 = "+";
        if (timezoneOffset > 0) {
          str5 = "-";
        }
        const _Math7 = Math;
        let sum = str5 + module_3893.default(Math.abs(timezoneOffset) / 60, 2);
      } else {
        let str4 = "+";
        if (timezoneOffset > 0) {
          str4 = "-";
        }
        const _Math5 = Math;
        const absolute = Math.abs(timezoneOffset);
        const _Math6 = Math;
        const sum1 = str4 + module_3893.default(Math.floor(absolute / 60), 2);
        sum = sum1 + module_3893.default(absolute % 60, 2);
      }
      return sum;
    } else {
      if ("XXXX" !== arg1) {
        if ("XX" !== arg1) {
          let str = "+";
          if (timezoneOffset > 0) {
            str = "-";
          }
          const _Math = Math;
          const absolute1 = Math.abs(timezoneOffset);
          const _Math2 = Math;
          const sum2 = str + module_3893.default(Math.floor(absolute1 / 60), 2);
          return sum2 + ":" + module_3893.default(absolute1 % 60, 2);
        }
      }
      let str3 = "+";
      if (timezoneOffset > 0) {
        str3 = "-";
      }
      const _Math3 = Math;
      const absolute2 = Math.abs(timezoneOffset);
      const _Math4 = Math;
      const sum3 = str3 + module_3893.default(Math.floor(absolute2 / 60), 2);
      return sum3 + module_3893.default(absolute2 % 60, 2);
    }
    const obj = _originalDate._originalDate || arg0;
  },
  x(arg0, arg1, arg2, _originalDate) {
    const timezoneOffset = _originalDate._originalDate || arg0.getTimezoneOffset();
    if ("x" === arg1) {
      if (timezoneOffset % 60 === 0) {
        let str5 = "+";
        if (timezoneOffset > 0) {
          str5 = "-";
        }
        const _Math7 = Math;
        let sum = str5 + module_3893.default(Math.abs(timezoneOffset) / 60, 2);
      } else {
        let str4 = "+";
        if (timezoneOffset > 0) {
          str4 = "-";
        }
        const _Math5 = Math;
        const absolute = Math.abs(timezoneOffset);
        const _Math6 = Math;
        const sum1 = str4 + module_3893.default(Math.floor(absolute / 60), 2);
        sum = sum1 + module_3893.default(absolute % 60, 2);
      }
      return sum;
    } else {
      if ("xxxx" !== arg1) {
        if ("xx" !== arg1) {
          let str = "+";
          if (timezoneOffset > 0) {
            str = "-";
          }
          const _Math = Math;
          const absolute1 = Math.abs(timezoneOffset);
          const _Math2 = Math;
          const sum2 = str + module_3893.default(Math.floor(absolute1 / 60), 2);
          return sum2 + ":" + module_3893.default(absolute1 % 60, 2);
        }
      }
      let str3 = "+";
      if (timezoneOffset > 0) {
        str3 = "-";
      }
      const _Math3 = Math;
      const absolute2 = Math.abs(timezoneOffset);
      const _Math4 = Math;
      const sum3 = str3 + module_3893.default(Math.floor(absolute2 / 60), 2);
      return sum3 + module_3893.default(absolute2 % 60, 2);
    }
    const obj = _originalDate._originalDate || arg0;
  },
  O(arg0, arg1, arg2, _originalDate) {
    const timezoneOffset = _originalDate._originalDate || arg0.getTimezoneOffset();
    if ("O" !== arg1) {
      if ("OO" !== arg1) {
        if ("OOO" !== arg1) {
          let str = "+";
          if (timezoneOffset > 0) {
            str = "-";
          }
          const _Math = Math;
          const absolute = Math.abs(timezoneOffset);
          const _Math2 = Math;
          const sum = str + module_3893.default(Math.floor(absolute / 60), 2);
          return "GMT" + (sum + ":" + module_3893.default(absolute % 60, 2));
        }
      }
    }
    let str4 = "+";
    if (timezoneOffset > 0) {
      str4 = "-";
    }
    const absolute1 = Math.abs(timezoneOffset);
    const rounded = Math.floor(absolute1 / 60);
    const result = absolute1 % 60;
    if (0 === result) {
      const _String2 = String;
      let sum1 = str4 + String(rounded);
    } else {
      const _String = String;
      const sum2 = str4 + String(rounded);
      sum1 = `${tmp9}:${module_3893.default(tmp8, 2)}`;
    }
    return "GMT" + sum1;
  },
  z(arg0, arg1, arg2, _originalDate) {
    const timezoneOffset = _originalDate._originalDate || arg0.getTimezoneOffset();
    if ("z" !== arg1) {
      if ("zz" !== arg1) {
        if ("zzz" !== arg1) {
          let str = "+";
          if (timezoneOffset > 0) {
            str = "-";
          }
          const _Math = Math;
          const absolute = Math.abs(timezoneOffset);
          const _Math2 = Math;
          const sum = str + module_3893.default(Math.floor(absolute / 60), 2);
          return "GMT" + (sum + ":" + module_3893.default(absolute % 60, 2));
        }
      }
    }
    let str4 = "+";
    if (timezoneOffset > 0) {
      str4 = "-";
    }
    const absolute1 = Math.abs(timezoneOffset);
    const rounded = Math.floor(absolute1 / 60);
    const result = absolute1 % 60;
    if (0 === result) {
      const _String2 = String;
      let sum1 = str4 + String(rounded);
    } else {
      const _String = String;
      const sum2 = str4 + String(rounded);
      sum1 = `${tmp9}:${module_3893.default(tmp8, 2)}`;
    }
    return "GMT" + sum1;
  },
  t(arg0, arg1, arg2, _originalDate) {
    return module_3893.default(Math.floor(_originalDate._originalDate || arg0.getTime() / 1000), arg1.length);
  },
  T(arg0, arg1, arg2, _originalDate) {
    return module_3893.default(_originalDate._originalDate || arg0.getTime(), arg1.length);
  }
};
export default exports.default;