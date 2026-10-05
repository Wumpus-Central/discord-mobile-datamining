// === Module 13968: ? ===

// Module 13968
import _mod13969 from "module_13969" /* 13969 */;
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 13970 */;
import TEN from "TEN" /* 13972 */;

let hasOwnProperty;

class ToNumber {
  constructor(num) {
    if (typeof num === "number") {
      const self9 = this;
      const self10 = this;
      const decimal = new _mod13969.Decimal(num);
      return decimal;
    } else {
      let tmp19 = typeof num !== "bigint";
      const invariant = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
      if (typeof num !== "bigint") {
        tmp19 = typeof num !== "symbol";
      }
      const _TypeError = TypeError;
      invariant(tmp19, "BigInt and Symbol are not supported", TypeError);
      if (undefined === num) {
        const self7 = this;
        const self8 = this;
        const decimal1 = new _mod13969.Decimal(NaN);
        return decimal1;
      } else {
        if (null !== num) {
          if (0 !== num) {
            if (true === num) {
              const self5 = this;
              const self6 = this;
              const decimal2 = new _mod13969.Decimal(1);
              return decimal2;
            } else if (typeof num === "string") {
              try {
                const self = this;
                const self2 = this;
                const decimal3 = new _mod13969.Decimal(num);
                return decimal3;
              } catch (err) {
                const self3 = this;
                const self4 = this;
                const decimal4 = new _mod13969.Decimal(NaN);
                return decimal4;
              }
            } else {
              const _TypeError2 = TypeError;
              UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(typeof num === "object", "object expected", TypeError);
              const tmp23 = ToPrimitive(num, "number");
              const _TypeError3 = TypeError;
              UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(typeof tmp23 !== "object", "object expected", TypeError);
              return ToNumber(tmp23);
            }
          }
        }
        return TEN.ZERO;
      }
    }
  }
}
class MonthFromTime {
  constructor(arg0) {
    let result;
    const rounded = Math.floor(arg0 / c3);
    const date = new Date(arg0);
    const uTCFullYear = date.getUTCFullYear();
    if (uTCFullYear < 100) {
      const _Date2 = Date;
      const self = this;
      const self2 = this;
      const date1 = new Date(0);
      date1.setUTCFullYear(uTCFullYear, 0, 1);
      date1.setUTCHours(0, 0, 0, 0);
      result = date1.getTime() / c3;
    } else {
      const _Date = Date;
      result = Date.UTC(uTCFullYear, 0) / c3;
    }
    const diff = rounded - result;
    const date2 = new Date(arg0);
    const uTCFullYear1 = date2.getUTCFullYear();
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
    if (0 <= diff) {
      if (diff < 31) {
        return 0;
      }
    }
    if (diff < 59 + num13) {
      return 1;
    } else if (diff < 90 + num13) {
      return 2;
    } else if (diff < 120 + num13) {
      return 3;
    } else if (diff < 151 + num13) {
      return 4;
    } else if (diff < 181 + num13) {
      return 5;
    } else if (diff < 212 + num13) {
      return 6;
    } else if (diff < 243 + num13) {
      return 7;
    } else if (diff < 273 + num13) {
      return 8;
    } else if (diff < 304 + num13) {
      return 9;
    } else if (diff < 334 + num13) {
      return 10;
    } else if (diff < 365 + num13) {
      return 11;
    } else {
      const _Error = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Invalid time");
      throw error;
    }
  }
}
class ToPrimitive {
  constructor(obj, arg1) {
    let callResult1;
    if (typeof obj === "object") {
      if (null != obj) {
        const _Symbol = Symbol;
        let tmp2;
        if (Symbol.toPrimitive in obj) {
          const _Symbol2 = Symbol;
          tmp2 = obj[Symbol.toPrimitive];
        }
        if (undefined !== tmp2) {
          let str4 = "default";
          if (undefined !== arg1) {
            str4 = "string";
            if ("string" !== arg1) {
              UNICODE_EXTENSION_SEQUENCE_REGEX.invariant("number" === arg1, "preferredType must be \"string\" or \"number\"");
              str4 = "number";
            }
          }
          const callResult = tmp2.call(obj, str4);
          if (typeof callResult !== "object") {
            return callResult;
          } else {
            const _TypeError2 = TypeError;
            const self3 = this;
            const self4 = this;
            const typeError = new TypeError("Cannot convert exotic object to primitive.");
            throw typeError;
          }
        } else {
          let str = arg1;
          if (undefined === arg1) {
            str = "number";
          }
          const arr = "string" === str ? ["toString", "valueOf"] : ["valueOf", "toString"];
          let num = 0;
          if (0 < arr.length) {
            while (true) {
              obj = obj[arr[num]];
              if (typeof obj === "function") {
                callResult1 = obj.call(obj);
                if (typeof callResult1 !== "object") {
                  break;
                }
              }
              num = num + 1;
            }
            return callResult1;
          }
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError1 = new TypeError("Cannot convert object to primitive value");
          throw typeError1;
        }
      }
    }
    return obj;
  }
}
let c3 = 86400000;
let c5 = 24;
let c6 = 60;
let c7 = 60;
let c8 = 1000;
let c9 = 60000;
let c10 = 3600000;

export const ToString = function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const _TypeError = TypeError;
    throw TypeError("Cannot convert a Symbol value to a string");
  } else {
    const _String = String;
    return String(arg0);
  }
};
export { ToNumber };
export const TimeClip = function TimeClip(isFinite) {
  if (isFinite.isFinite()) {
    const absResult = isFinite.abs();
    if (absResult.greaterThan(8640000000000001)) {
      const self3 = this;
      const self4 = this;
      const decimal = new _mod13969.Decimal(NaN);
      return decimal;
    } else {
      const obj2 = ToNumber(isFinite);
      if (!obj2.isNaN()) {
        let ZERO;
        if (!obj2.isZero()) {
          ZERO = obj2;
          if (!obj2.isFinite()) {
            const absResult1 = obj2.abs();
            const floorResult = absResult1.floor();
            let negatedResult = floorResult;
            if (obj2.isNegative()) {
              negatedResult = floorResult.negated();
            }
            ZERO = negatedResult;
          }
        }
        return ZERO;
      }
      ZERO = TEN.ZERO;
    }
  } else {
    const self = this;
    const self2 = this;
    const decimal1 = new _mod13969.Decimal(NaN);
    return decimal1;
  }
};
export const ToObject = function ToObject(arg0) {
  if (null == arg0) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("undefined/null cannot be converted to object");
    throw typeError;
  } else {
    const _Object = Object;
    return Object(arg0);
  }
};
export const SameValue = function SameValue(arg0, arg1) {
  if (Object.is) {
    const _Object = Object;
    return Object.is(arg0, arg1);
  } else if (arg0 === arg1) {
    return 0 !== arg0 || 1 / arg0 === 1 / arg1;
  } else {
    return arg0 != arg0 && arg1 != arg1;
  }
};
export const ArrayCreate = function ArrayCreate(arg0) {
  const array = new Array(arg0);
  return array;
};
export const HasOwnProperty = function HasOwnProperty(defaultResult, initializedLocale) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  return hasOwnProperty.call(defaultResult, initializedLocale);
};
export const Type = function Type(fn) {
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
export const Day = function Day(arg0) {
  return Math.floor(arg0 / c3);
};
export const WeekDay = function WeekDay(arg0) {
  const sum = Math.floor(arg0 / c3) + 4;
  return sum - Math.floor(sum / 7) * 7;
};
export const DayFromYear = function DayFromYear(arg0) {
  if (arg0 < 100) {
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    const date = new Date(0);
    date.setUTCFullYear(arg0, 0, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date.getTime() / c3;
  } else {
    const _Date = Date;
    return Date.UTC(arg0, 0) / c3;
  }
};
export const TimeFromYear = function TimeFromYear(arg0) {
  return Date.UTC(arg0, 0);
};
export const YearFromTime = function YearFromTime(arg0) {
  const date = new Date(arg0);
  return date.getUTCFullYear();
};
export const DaysInYear = function DaysInYear(arg0) {
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
export const DayWithinYear = function DayWithinYear(arg0) {
  let result;
  const rounded = Math.floor(arg0 / c3);
  const date = new Date(arg0);
  const uTCFullYear = date.getUTCFullYear();
  if (uTCFullYear < 100) {
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    const date1 = new Date(0);
    date1.setUTCFullYear(uTCFullYear, 0, 1);
    date1.setUTCHours(0, 0, 0, 0);
    result = date1.getTime() / c3;
  } else {
    const _Date = Date;
    result = Date.UTC(uTCFullYear, 0) / c3;
  }
  return rounded - result;
};
export const InLeapYear = function InLeapYear(arg0) {
  const date = new Date(arg0);
  const uTCFullYear = date.getUTCFullYear();
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
export { MonthFromTime };
export const DateFromTime = function DateFromTime(arg0) {
  let result;
  const rounded = Math.floor(arg0 / c3);
  const date = new Date(arg0);
  const uTCFullYear = date.getUTCFullYear();
  if (uTCFullYear < 100) {
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    const date1 = new Date(0);
    date1.setUTCFullYear(uTCFullYear, 0, 1);
    date1.setUTCHours(0, 0, 0, 0);
    result = date1.getTime() / c3;
  } else {
    const _Date = Date;
    result = Date.UTC(uTCFullYear, 0) / c3;
  }
  const diff = rounded - result;
  const tmp10 = MonthFromTime(arg0);
  const date2 = new Date(arg0);
  const uTCFullYear1 = date2.getUTCFullYear();
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
  if (0 === tmp10) {
    return diff + 1;
  } else if (1 === tmp10) {
    return diff - 30;
  } else if (2 === tmp10) {
    return diff - 58 - num13;
  } else if (3 === tmp10) {
    return diff - 89 - num13;
  } else if (4 === tmp10) {
    return diff - 119 - num13;
  } else if (5 === tmp10) {
    return diff - 150 - num13;
  } else if (6 === tmp10) {
    return diff - 180 - num13;
  } else if (7 === tmp10) {
    return diff - 211 - num13;
  } else if (8 === tmp10) {
    return diff - 242 - num13;
  } else if (9 === tmp10) {
    return diff - 272 - num13;
  } else if (10 === tmp10) {
    return diff - 303 - num13;
  } else if (11 === tmp10) {
    return diff - 333 - num13;
  } else {
    const _Error = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("Invalid time");
    throw error;
  }
};
export const HourFromTime = function HourFromTime(arg0) {
  const rounded = Math.floor(arg0 / c10);
  return rounded - Math.floor(rounded / c5) * c5;
};
export const MinFromTime = function MinFromTime(arg0) {
  const rounded = Math.floor(arg0 / c9);
  return rounded - Math.floor(rounded / c6) * c6;
};
export const SecFromTime = function SecFromTime(arg0) {
  const rounded = Math.floor(arg0 / c8);
  return rounded - Math.floor(rounded / c7) * c7;
};
export const OrdinaryHasInstance = function OrdinaryHasInstance(fn, obj, boundTargetFunction) {
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
        const self = this;
        const self2 = this;
        const typeError = new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        throw typeError;
      } else {
        const _Object = Object;
        return isPrototypeOf.call(prototype, obj);
      }
    }
  } else {
    return false;
  }
};
export const msFromTime = function msFromTime(arg0) {
  return arg0 - Math.floor(arg0 / c8) * c8;
};
export { ToPrimitive };