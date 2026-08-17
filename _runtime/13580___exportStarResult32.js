// _runtime/13580___exportStarResult32.js
import digitsToString from "digitsToString" /* 13581 */;
import getMultiInternalSlots from "getMultiInternalSlots" /* 13582 */;
import TEN from "TEN" /* 13584 */;

require = arg1;
const dependencyMap = arg6;
class ToNumber {
  constructor(arg0) {
    if (typeof arg0 === "number") {
      tmp23 = closure_0;
      tmp24 = closure_1;
      tmp25 = new.target;
      tmp26 = new.target;
      tmp27 = arg0;
      decimal = new require("digitsToString").Decimal(arg0);
      tmp29 = decimal;
      return decimal;
    } else {
      tmp30 = closure_0;
      tmp31 = closure_1;
      tmp32 = typeof arg0 !== "bigint";
      if (typeof arg0 !== "bigint") {
        tmp32 = typeof arg0 !== "symbol";
      }
      tmp4 = globalThis;
      _TypeError = TypeError;
      str = "BigInt and Symbol are not supported";
      invariantResult = require("getMultiInternalSlots").invariant(tmp32, "BigInt and Symbol are not supported", TypeError);
      if (undefined === arg0) {
        tmp19 = new.target;
        num3 = NaN;
        tmp20 = new.target;
        decimal1 = new require("digitsToString").Decimal(NaN);
        tmp22 = decimal1;
        return decimal1;
      } else {
        tmp33 = null;
        if (null !== arg0) {
          num4 = 0;
          if (0 !== arg0) {
            flag = true;
            if (true === arg0) {
              tmp15 = new.target;
              num2 = 1;
              tmp16 = new.target;
              decimal2 = new require("digitsToString").Decimal(1);
              tmp18 = decimal2;
              return decimal2;
            } else if (typeof arg0 === "string") {
              try {
                tmp6 = new.target;
                tmp7 = new.target;
                tmp8 = arg0;
                decimal3 = new require("digitsToString").Decimal(arg0);
                tmp10 = decimal3;
                return decimal3;
              } catch (err) {
                tmp11 = new.target;
                num = NaN;
                tmp12 = new.target;
                decimal4 = new require("digitsToString").Decimal(NaN);
                tmp14 = decimal4;
                return decimal4;
              }
            } else {
              _TypeError2 = TypeError;
              str2 = "object expected";
              invariantResult1 = require("getMultiInternalSlots").invariant(typeof arg0 === "object", "object expected", TypeError);
              tmp35 = ToPrimitive;
              str3 = "number";
              tmp36 = ToPrimitive(arg0, "number");
              _TypeError3 = TypeError;
              invariantResult2 = require("getMultiInternalSlots").invariant(typeof tmp36 !== "object", "object expected", TypeError);
              tmp38 = ToNumber;
              return ToNumber(tmp36);
            }
          }
        }
        return require("TEN").ZERO;
      }
    }
  }
}
class MonthFromTime {
  constructor(arg0) {
    tmp = c3;
    rounded = Math.floor(arg0 / c3);
    date = new Date(arg0);
    uTCFullYear = date.getUTCFullYear();
    if (uTCFullYear < 100) {
      _Date2 = Date;
      tmp5 = new.target;
      num2 = 0;
      tmp6 = new.target;
      num3 = 0;
      date1 = new Date(0);
      tmp7 = date1;
      num4 = 1;
      setUTCFullYearResult = date1.setUTCFullYear(uTCFullYear, 0, 1);
      tmp9 = date1;
      num5 = 0;
      num6 = 0;
      num7 = 0;
      num8 = 0;
      setUTCHoursResult = require("module_0");
      result = date1.getTime() / tmp;
    } else {
      _Date = Date;
      num = 0;
      result = Date.UTC(uTCFullYear, 0) / tmp;
    }
    diff = rounded - result;
    date2 = new Date(arg0);
    uTCFullYear1 = date2.getUTCFullYear();
    num9 = 365;
    if (uTCFullYear1 % 4 === 0) {
      num10 = 366;
      num11 = 366;
      if (uTCFullYear1 % 100 === 0) {
        num12 = 400;
        if (uTCFullYear1 % 400 !== 0) {
          num10 = 365;
        }
        num11 = num10;
      }
      num9 = num11;
    }
    num13 = 1;
    if (365 === num9) {
      num13 = 0;
    }
    if (0 <= diff) {
      num14 = 31;
      if (diff < 31) {
        return 0;
      }
    }
    if (diff < 59 + num13) {
      return 1;
    } else {
      num28 = 90;
      if (diff < 90 + num13) {
        num27 = 2;
        return 2;
      } else {
        num29 = 120;
        if (diff < 120 + num13) {
          num26 = 3;
          return 3;
        } else {
          num30 = 151;
          if (diff < 151 + num13) {
            return 4;
          } else {
            num31 = 181;
            if (diff < 181 + num13) {
              num25 = 5;
              return 5;
            } else {
              num32 = 212;
              if (diff < 212 + num13) {
                num24 = 6;
                return 6;
              } else {
                num15 = 243;
                if (diff < 243 + num13) {
                  num23 = 7;
                  return 7;
                } else {
                  num16 = 273;
                  if (diff < 273 + num13) {
                    num22 = 8;
                    return 8;
                  } else {
                    num17 = 304;
                    if (diff < 304 + num13) {
                      num21 = 9;
                      return 9;
                    } else {
                      num18 = 334;
                      if (diff < 334 + num13) {
                        num20 = 10;
                        return 10;
                      } else if (diff < 365 + num13) {
                        num19 = 11;
                        return 11;
                      } else {
                        _Error = Error;
                        tmp13 = new.target;
                        str = "Invalid time";
                        tmp14 = new.target;
                        error = new Error("Invalid time");
                        tmp16 = error;
                        throw error;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
class ToPrimitive {
  constructor(arg0, arg1) {
    if (typeof arg0 === "object") {
      tmp15 = null;
      if (null != arg0) {
        tmp = globalThis;
        _Symbol = Symbol;
        tmp2 = undefined;
        if (Symbol.toPrimitive in arg0) {
          _Symbol2 = Symbol;
          tmp2 = arg0[Symbol.toPrimitive];
        }
        tmp3 = arg1;
        if (undefined !== tmp2) {
          str4 = "default";
          if (undefined !== arg1) {
            str4 = "string";
            if ("string" !== arg1) {
              tmp11 = closure_0;
              tmp12 = closure_1;
              str5 = "preferredType must be \"string\" or \"number\"";
              str6 = "number";
              invariantResult = require("getMultiInternalSlots").invariant("number" === arg1, "preferredType must be \"string\" or \"number\"");
              str4 = "number";
            }
          }
          call = tmp2.call;
          tmp14 = typeof call === "unknown" ? tmp2(str4) : call(arg0, str4);
          if (typeof tmp14 !== "object") {
            return tmp14;
          } else {
            _TypeError2 = TypeError;
            tmp16 = new.target;
            str7 = "Cannot convert exotic object to primitive.";
            tmp17 = new.target;
            typeError = new TypeError("Cannot convert exotic object to primitive.");
            tmp19 = typeError;
            throw typeError;
          }
        } else {
          str = arg1;
          if (undefined === arg1) {
            str = "number";
          }
          str2 = "string";
          arr = "string" === str ? ["toString", "valueOf"] : ["valueOf", "toString"];
          num = 0;
          num2 = 1;
          if (0 < arr.length) {
            while (true) {
              tmp4 = arg0[arr[num]];
              tmp5 = num;
              if (typeof tmp4 === "function") {
                call2 = tmp4.call;
                tmp6 = typeof call2 === "unknown" ? tmp4() : call2(arg0);
                if (typeof tmp6 !== "object") {
                  break;
                }
              }
              num = num + 1;
            }
            return tmp6;
          }
          _TypeError = TypeError;
          tmp7 = new.target;
          str3 = "Cannot convert object to primitive value";
          tmp8 = new.target;
          typeError1 = new TypeError("Cannot convert object to primitive value");
          tmp10 = typeError1;
          throw typeError1;
        }
      }
    }
    return arg0;
  }
}
arg5.ToString = function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const _TypeError = TypeError;
    throw TypeError("Cannot convert a Symbol value to a string");
  } else {
    const _String = String;
    return String(arg0);
  }
};
arg5.ToNumber = ToNumber;
arg5.TimeClip = function TimeClip(isFinite) {
  if (isFinite.isFinite()) {
    if (absResult.greaterThan(8640000000000001)) {
      const decimal = new digitsToString.Decimal(NaN);
      return decimal;
    } else {
      const obj2 = ToNumber(isFinite);
      if (!obj2.isNaN()) {
        if (!obj2.isZero()) {
          let ZERO = obj2;
          if (!obj2.isFinite()) {
            const floorResult = obj2.abs().floor();
            let negatedResult = floorResult;
            if (obj2.isNegative()) {
              negatedResult = floorResult.negated();
            }
            ZERO = negatedResult;
            const absResult1 = obj2.abs();
          }
        }
        return ZERO;
      }
      ZERO = TEN.ZERO;
    }
    absResult = isFinite.abs();
  } else {
    const decimal1 = new digitsToString.Decimal(NaN);
    return decimal1;
  }
};
arg5.ToObject = function ToObject(arg0) {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("undefined/null cannot be converted to object");
    throw typeError;
  } else {
    const _Object = Object;
    return Object(arg0);
  }
};
arg5.SameValue = function SameValue(arg0, arg1) {
  if (Object.is) {
    const _Object = Object;
    return Object.is(arg0, arg1);
  } else if (arg0 === arg1) {
    let tmp2 = 0 !== arg0;
    if (!tmp2) {
      tmp2 = 1 / arg0 === 1 / arg1;
    }
    return tmp2;
  } else {
    return arg0 != arg0 && arg1 != arg1;
  }
};
arg5.ArrayCreate = function ArrayCreate(arg0) {
  const array = new Array(arg0);
  return array;
};
arg5.HasOwnProperty = function HasOwnProperty(defaultResult, initializedLocale) {
  const call = hasOwnProperty.call;
  return typeof call === "unknown" ? hasOwnProperty(initializedLocale) : call(defaultResult, initializedLocale);
};
arg5.Type = function Type(fn) {
  if (null === fn) {
    return "Null";
  } else if (undefined === fn) {
    return "Undefined";
  } else {
    if (typeof fn !== "function") {
      if (typeof fn !== "object") {
        if (typeof fn === "number") {
          return "Number";
        } else if (typeof fn === "boolean") {
          return "Boolean";
        } else if (typeof fn === "string") {
          return "String";
        } else if (typeof fn === "symbol") {
          return "Symbol";
        } else if (typeof fn === "bigint") {
          return "BigInt";
        }
      }
    }
    return "Object";
  }
};
arg5.Day = function Day(arg0) {
  return Math.floor(arg0 / c3);
};
arg5.WeekDay = function WeekDay(arg0) {
  const sum = Math.floor(arg0 / c3) + 4;
  return sum - Math.floor(sum / 7) * 7;
};
arg5.DayFromYear = function DayFromYear(arg0) {
  if (arg0 < 100) {
    const _Date2 = Date;
    const date = new Date(0);
    date.setUTCFullYear(arg0, 0, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date.getTime() / c3;
  } else {
    const _Date = Date;
    return Date.UTC(arg0, 0) / c3;
  }
};
arg5.TimeFromYear = function TimeFromYear(arg0) {
  return Date.UTC(arg0, 0);
};
arg5.YearFromTime = function YearFromTime(arg0) {
  return new Date(arg0).getUTCFullYear();
};
arg5.DaysInYear = function DaysInYear(arg0) {
  let num = 365;
  if (arg0 % 4 === 0) {
    let num3 = 366;
    let num4 = 366;
    if (arg0 % 100 === 0) {
      if (arg0 % 400 !== 0) {
        num3 = 365;
      }
      num4 = num3;
    }
    num = num4;
  }
  return num;
};
arg5.DayWithinYear = function DayWithinYear(arg0) {
  const rounded = Math.floor(arg0 / c3);
  const uTCFullYear = new Date(arg0).getUTCFullYear();
  if (uTCFullYear < 100) {
    const _Date2 = Date;
    const date1 = new Date(0);
    date1.setUTCFullYear(uTCFullYear, 0, 1);
    date1.setUTCHours(0, 0, 0, 0);
    let result = date1.getTime() / tmp;
  } else {
    const _Date = Date;
    result = Date.UTC(uTCFullYear, 0) / tmp;
  }
  return rounded - result;
};
arg5.InLeapYear = function InLeapYear(arg0) {
  const uTCFullYear = new Date(arg0).getUTCFullYear();
  let num = 365;
  if (uTCFullYear % 4 === 0) {
    let num3 = 366;
    let num4 = 366;
    if (uTCFullYear % 100 === 0) {
      if (uTCFullYear % 400 !== 0) {
        num3 = 365;
      }
      num4 = num3;
    }
    num = num4;
  }
  let num6 = 1;
  if (365 === num) {
    num6 = 0;
  }
  return num6;
};
arg5.MonthFromTime = MonthFromTime;
arg5.DateFromTime = function DateFromTime(arg0) {
  const rounded = Math.floor(arg0 / c3);
  const uTCFullYear = new Date(arg0).getUTCFullYear();
  if (uTCFullYear < 100) {
    const _Date2 = Date;
    const date1 = new Date(0);
    date1.setUTCFullYear(uTCFullYear, 0, 1);
    date1.setUTCHours(0, 0, 0, 0);
    let result = date1.getTime() / tmp;
  } else {
    const _Date = Date;
    result = Date.UTC(uTCFullYear, 0) / tmp;
  }
  const diff = rounded - result;
  const tmp12 = MonthFromTime(arg0);
  const date = new Date(arg0);
  const uTCFullYear1 = new Date(arg0).getUTCFullYear();
  let num9 = 365;
  if (uTCFullYear1 % 4 === 0) {
    let num10 = 366;
    let num11 = 366;
    if (uTCFullYear1 % 100 === 0) {
      if (uTCFullYear1 % 400 !== 0) {
        num10 = 365;
      }
      num11 = num10;
    }
    num9 = num11;
  }
  let num13 = 1;
  if (365 === num9) {
    num13 = 0;
  }
  if (0 === tmp12) {
    return diff + 1;
  } else if (1 === tmp12) {
    return diff - 30;
  } else if (2 === tmp12) {
    return diff - 58 - num13;
  } else if (3 === tmp12) {
    return diff - 89 - num13;
  } else if (4 === tmp12) {
    return diff - 119 - num13;
  } else if (5 === tmp12) {
    return diff - 150 - num13;
  } else if (6 === tmp12) {
    return diff - 180 - num13;
  } else if (7 === tmp12) {
    return diff - 211 - num13;
  } else if (8 === tmp12) {
    return diff - 242 - num13;
  } else if (9 === tmp12) {
    return diff - 272 - num13;
  } else if (10 === tmp12) {
    return diff - 303 - num13;
  } else if (11 === tmp12) {
    return diff - 333 - num13;
  } else {
    const _Error = Error;
    error = new Error("Invalid time");
    throw error;
  }
  const date2 = new Date(arg0);
};
arg5.HourFromTime = function HourFromTime(arg0) {
  const rounded = Math.floor(arg0 / c10);
  return rounded - Math.floor(rounded / c5) * c5;
};
arg5.MinFromTime = function MinFromTime(arg0) {
  const rounded = Math.floor(arg0 / c9);
  return rounded - Math.floor(rounded / c6) * c6;
};
arg5.SecFromTime = function SecFromTime(arg0) {
  const rounded = Math.floor(arg0 / c8);
  return rounded - Math.floor(rounded / c7) * c7;
};
arg5.OrdinaryHasInstance = function OrdinaryHasInstance(fn, obj, boundTargetFunction) {
  if (typeof fn === "function") {
    boundTargetFunction = undefined;
    if (null != boundTargetFunction) {
      boundTargetFunction = boundTargetFunction.boundTargetFunction;
    }
    if (boundTargetFunction) {
      let boundTargetFunction1;
      if (null != boundTargetFunction) {
        boundTargetFunction1 = boundTargetFunction.boundTargetFunction;
      }
      return obj instanceof boundTargetFunction1;
    } else if (typeof obj !== "object") {
      return false;
    } else {
      const prototype = fn.prototype;
      if (typeof prototype !== "object") {
        const _TypeError = TypeError;
        const typeError = new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        throw typeError;
      } else {
        const _Object = Object;
        const call = isPrototypeOf.call;
        return typeof call === "unknown" ? isPrototypeOf(obj) : call(prototype, obj);
      }
    }
  } else {
    return false;
  }
};
arg5.msFromTime = function msFromTime(arg0) {
  return arg0 - Math.floor(arg0 / c8) * c8;
};
arg5.ToPrimitive = ToPrimitive;
let c3 = 86400000;
let c5 = 24;
let c6 = 60;
let c7 = 60;
let c8 = 1000;
let c9 = 60000;
let c10 = 3600000;