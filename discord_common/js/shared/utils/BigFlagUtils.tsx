// === Module 506: fromString ===

// Module 506 (fromString)
import closure_2 from "_slicedToArray" /* 32 */;
import tmp6Result from "module_0" /* 0 */;

let HighLow;
class HighLow {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.parts = global;
    obj.str = arg1;
    return obj;
  }
}
const prototype = HighLow.prototype;
HighLow["fromString"] = function fromString(arg0) {
  const items = [];
  for (let num = 0; num < arg0.length; num = num + 1) {
    let _Number = Number;
    let NumberResult = Number(arg0[num]);
    let tmp2 = num;
    let num2 = 0;
    let tmp3 = NumberResult;
    if (NumberResult) {
      while (true) {
        let num3 = items[num2];
        let tmp4 = num2;
        let tmp5 = tmp3;
        if (!num3) {
          num3 = 0;
        }
        let num4 = 10;
        let sum = tmp3 + 10 * num3;
        let num5 = 16;
        items[num2] = sum % 16;
        let result = (sum - items[num2]) / 16;
        let sum1 = num2 + 1;
        num2 = sum1;
        tmp3 = result;
        if (result) {
          continue;
        } else {
          tmp3 = result;
          num2 = sum1;
          if (sum1 >= items.length) {
            break;
          }
        }
        continue;
      }
    } else {
      num2 = 0;
      tmp3 = NumberResult;
    }
  }
  let num6 = 0;
  let num7 = 0;
  let num8 = 0;
  do {
    let tmp10 = items[4 * num6 + num7];
    let tmp12 = num8;
    let tmp13 = num8;
    while (undefined !== tmp10) {
      let num9 = 16;
      let tmp14 = num7;
      num8 = num8 + tmp10 * 16 ** tmp11;
      num7 = num7 + 1;
      tmp13 = num8;
      if (num7 >= 4) {
        break;
      }
    }
    tmp9[3 - num6] = tmp13;
    num6 = num6 + 1;
  } while (num6 < 4);
};
HighLow["fromBit"] = function fromBit(arg0) {
  const ArrayResult = Array(4);
  const rounded = Math.floor(arg0 / 16);
  let num = 0;
  do {
    let tmp3 = num;
    let num2 = 0;
    if (num === rounded) {
      num2 = 1 << arg0 - 16 * rounded;
    }
    ArrayResult[3 - num] = num2;
    num = num + 1;
  } while (num < 4);
  if (typeof HighLow !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(HighLow.prototype);
  obj.parts = ArrayResult;
  obj.str = undefined;
  return obj;
};
HighLow["asUintN"] = function asUintN(arg0, flags) {
  const parts = flags.parts;
  let num = 0;
  if (0 < arg0) {
    let num4 = 0;
    let num5 = 0;
    num = 0;
    if (0 < 16 * parts.length) {
      const _Math = Math;
      const bound = Math.min(arg0 - num4, 16);
      const _Math2 = Math;
      const tmp4 = num5 | (parts[parts.length - Math.floor(Math, num4 / 16) - 1] & (1 << bound) - 1) << num4;
      const sum = num4 + bound;
      num = tmp4;
      while (sum < arg0) {
        num5 = tmp4;
        num = tmp4;
        num4 = sum;
        if (sum >= 16 * parts.length) {
          break;
        }
      }
      const tmp3 = 1 << bound;
    }
  }
  return num;
};
prototype["and"] = function and(parts) {
  parts = parts.parts;
  parts = this.parts;
  const mapped = parts.map((arg0, arg1) => arg0 & parts[arg1]);
  if (typeof HighLow !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(HighLow.prototype);
  obj.parts = mapped;
  obj.str = undefined;
  return obj;
};
prototype["or"] = function or(parts) {
  parts = parts.parts;
  parts = this.parts;
  const mapped = parts.map((arg0, arg1) => arg0 | parts[arg1]);
  if (typeof HighLow !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(HighLow.prototype);
  obj.parts = mapped;
  obj.str = undefined;
  return obj;
};
prototype["xor"] = function xor(parts) {
  parts = parts.parts;
  parts = this.parts;
  const mapped = parts.map((arg0, arg1) => arg0 ^ parts[arg1]);
  if (typeof HighLow !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(HighLow.prototype);
  obj.parts = mapped;
  obj.str = undefined;
  return obj;
};
prototype["not"] = function not() {
  const parts = this.parts;
  const mapped = parts.map((arg0) => ~arg0);
  if (typeof HighLow !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(HighLow.prototype);
  obj.parts = mapped;
  obj.str = undefined;
  return obj;
};
prototype["equals"] = function equals(parts) {
  parts = parts.parts;
  parts = this.parts;
  return parts.every((arg0, arg1) => arg0 === parts[arg1]);
};
prototype["toString"] = function toString() {
  const self = this;
  if (null != this.str) {
    return self.str;
  } else {
    const _Array = Array;
    const array = new Array(16);
    const parts = self.parts;
    const item = parts.forEach((arg0, arg1) => {
      let sum2;
      const str = arg0.toString();
      const items = [];
      let num = 0;
      let num2 = 0;
      if (0 < str.length) {
        do {
          let _Number = Number;
          let NumberResult = Number(str[num]);
          let tmp2 = num;
          let num3 = 0;
          let tmp3 = NumberResult;
          if (NumberResult) {
            while (true) {
              let num4 = items[num3];
              let tmp4 = num3;
              let tmp5 = tmp3;
              if (!num4) {
                num4 = 0;
              }
              let num5 = 10;
              let sum = tmp3 + 10 * num4;
              let num6 = 16;
              items[num3] = sum % 16;
              let result = (sum - items[num3]) / 16;
              let sum1 = num3 + 1;
              num3 = sum1;
              tmp3 = result;
              if (result) {
                continue;
              } else {
                tmp3 = result;
                num3 = sum1;
                if (sum1 >= items.length) {
                  break;
                }
              }
              continue;
            }
          } else {
            num3 = 0;
            tmp3 = NumberResult;
          }
          sum2 = num + 1;
          num = sum2;
          num2 = 0;
        } while (sum2 < str.length);
      }
      do {
        let num7 = items[3 - num2];
        let tmp12 = num2;
        let tmp10 = array;
        let result1 = 4 * arg1;
        if (!num7) {
          num7 = 0;
        }
        tmp10[num2 + result1] = num7;
        num2 = num2 + 1;
      } while (num2 < 4);
    });
    let str = array(14).fromArray(array, 16);
    str = str.toString();
    self.str = str;
    return str;
  }
};
prototype["toJSON"] = function toJSON() {
  return this.toString();
};
let tmp2 = (function checkBrowserSupportsBigInt() {
  try {
    const _BigInt = BigInt;
    return true;
  } catch (err) {
    return false;
  }
})();
let tmp3 = tmp2;
if (tmp2) {
  let _BigInt = BigInt;
  tmp3 = null == BigInt.prototype.toJSON;
}
if (tmp3) {
  const _BigInt2 = BigInt;
  BigInt.prototype.toJSON = function() {
    return this.toString();
  };
}
let closure_4 = {};
let tmp6 = tmp2 ? ((arg0) => BigInt(arg0)) : ((num) => {
  let tmp = num;
  if (!(num instanceof HighLow)) {
    let str = num;
    if (typeof num === "number") {
      str = num.toString();
    }
    if (null == table[str]) {
      tmp3[str] = HighLow.fromString(str);
    }
    tmp = tmp3[str];
  }
  return tmp;
});
let closure_5 = tmp6Result;
const tmp8 = tmp2 ? (() => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_5;
  }
  let tmp2 = arg1;
  if (arg1 === undefined) {
    tmp2 = closure_5;
  }
  return tmp & tmp2;
}) : (() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_5;
  }
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_5;
  }
  return obj.and(tmp);
});
let closure_6 = tmp8;
let closure_7 = tmp2 ? (() => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_5;
  }
  let tmp2 = arg1;
  if (arg1 === undefined) {
    tmp2 = closure_5;
  }
  return tmp | tmp2;
}) : (() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_5;
  }
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_5;
  }
  return obj.or(tmp);
});
let closure_8 = tmp2 ? (() => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_5;
  }
  let tmp2 = arg1;
  if (arg1 === undefined) {
    tmp2 = closure_5;
  }
  return tmp ^ tmp2;
}) : (() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_5;
  }
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_5;
  }
  return obj.xor(tmp);
});
let tmp10 = tmp2 ? ((arg0, arg1) => arg0 === arg1) : ((equals) => {
  if (null != equals) {
    if (null != arg1) {
      let equalsResult = equals.equals(arg1);
    }
    return equalsResult;
  }
  equalsResult = equals == arg1;
});
let closure_9 = tmp10;
const tmp11 = tmp2 ? ((arg0) => BigInt(1) << BigInt(arg0)) : ((arg0) => HighLow.fromBit(arg0));
let closure_10 = tmp11;
let result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/BigFlagUtils.tsx");

export const isBigFlag = tmp2 ? ((arg0) => typeof arg0 === "bigint") : ((arg0) => arg0 instanceof HighLow);
export const deserialize = tmp6;
export const EMPTY_FLAG = tmp6Result;
export const filter = tmp8;
export const invert = tmp2 ? (() => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_5;
  }
  return ~tmp;
}) : (() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_5;
  }
  return obj.not();
});
export const equals = tmp10;
export const combine = function combine() {
  let length;
  const items = [...arguments];
  let first = items[0];
  let num = 1;
  let tmp2 = first;
  if (1 < items.length) {
    do {
      let tmp3 = callback3;
      first = callback3(first, items[num]);
      num = num + 1;
      tmp2 = first;
      length = items.length;
    } while (num < length);
  }
  return tmp2;
};
export const has = function has(arg0, arg1) {
  return callback5(callback2(arg0, arg1), arg1);
};
export const hasAny = function hasAny(arg0, arg1) {
  return !callback5(callback2(arg0, arg1), closure_5);
};
export const add = function add(arg0, arg1) {
  let tmp = arg0;
  if (arg1 !== closure_5) {
    tmp = callback3(arg0, arg1);
  }
  return tmp;
};
export const remove = function remove(arg0, arg1) {
  let tmp = arg0;
  if (arg1 !== closure_5) {
    tmp = callback4(arg0, callback2(arg0, arg1));
  }
  return tmp;
};
export const getFlag = tmp11;
export const asUintN = tmp2 ? ((arg0, flags) => Number(BigInt.asUintN(arg0, flags))) : ((arg0, flags) => HighLow.asUintN(arg0, flags));
export const getBrandedFlag = function getBrandedFlag(arg0) {
  return callback6(arg0);
};
export const flagNameOf = function flagNameOf(arg0, arg1) {
  const entries = Object.entries(arg1);
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    let tmp5 = callback5;
    if (callback5(arg0, tmp4[1])) {
      let tmp6 = obj;
      obj.return();
      return tmp4[0];
    }
  }
};