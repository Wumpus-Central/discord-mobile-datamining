// === Module 1097: BigFlagUtils ===

// Module 1097 (BigFlagUtils)
import _modDef14 from "module_14" /* 14 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function checkBrowserSupportsBigInt() {
  try {
    const _BigInt = BigInt;
    return true;
  } catch (err) {
    return false;
  }
}
class HighLow {
  constructor(parts, str) {
    const obj = Object.create(new.target.prototype);
    obj.parts = parts;
    obj.str = str;
    return obj;
  }
  static fromString(arg0) {
    let num;
    const items = [];
    for (let num = 0; num < arg0.length; num = num + 1) {
      let _Number = Number;
      let NumberResult = Number(arg0[num]);
      let num2 = 0;
      let tmp3 = NumberResult;
      if (tmp3) {
        while (true) {
          let num3 = items[num2];
          if (!num3) {
            num3 = 0;
          }
          let sum = tmp3 + 10 * num3;
          items[num2] = sum % 16;
          let result = (sum - items[num2]) / 16;
          let sum1 = num2 + 1;
          num2 = sum1;
          tmp3 = result;
          if (tmp3) {
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
      let tmp13 = num8;
      while (undefined !== tmp10) {
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
  }
  static fromBit(arg0) {
    const ArrayResult = Array(4);
    const rounded = Math.floor(arg0 / 16);
    let num = 0;
    do {
      let num2 = 0;
      if (num === rounded) {
        num2 = 1 << arg0 - 16 * rounded;
      }
      ArrayResult[3 - num] = num2;
      num = num + 1;
    } while (num < 4);
    if (typeof HighLow === "function") {
      const obj = Object.create(HighLow.prototype);
      obj.parts = ArrayResult;
      obj.str = undefined;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static asUintN(arg0, flags) {
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
        const tmp3 = 1 << bound;
        const tmp4 = num5 | (parts[parts.length - Math.floor(Math, num4 / 16) - 1] & tmp3 - 1) << num4;
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
      }
    }
    return num;
  }
  and(parts) {
    parts = parts.parts;
    if (typeof HighLow === "function") {
      const obj = Object.create(HighLow.prototype);
      obj.parts = tmp2;
      obj.str = undefined;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  or(parts) {
    parts = parts.parts;
    if (typeof HighLow === "function") {
      const obj = Object.create(HighLow.prototype);
      obj.parts = tmp2;
      obj.str = undefined;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  xor(parts) {
    parts = parts.parts;
    if (typeof HighLow === "function") {
      const obj = Object.create(HighLow.prototype);
      obj.parts = tmp2;
      obj.str = undefined;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  not() {
    if (typeof HighLow === "function") {
      const obj = Object.create(HighLow.prototype);
      obj.parts = tmp2;
      obj.str = undefined;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  equals(parts) {
    parts = this.parts;
    return parts.every((item, index) => item === parts[index]);
  }
  toString() {
    const self = this;
    if (null != this.str) {
      return self.str;
    } else {
      const _Array = Array;
      const self2 = this;
      let num = 16;
      const self3 = this;
      let num2 = 16;
      const array = new Array(16);
      let tmp3 = array;
      const parts = self.parts;
      const item = parts.forEach((item, index) => {
        let sum2;
        const str = item.toString();
        const items = [];
        let num = 0;
        let num2 = 0;
        if (0 < str.length) {
          do {
            let _Number = Number;
            let NumberResult = Number(str[num]);
            let num3 = 0;
            let tmp3 = NumberResult;
            if (tmp3) {
              while (true) {
                let num4 = items[num3];
                if (!num4) {
                  num4 = 0;
                }
                let sum = tmp3 + 10 * num4;
                items[num3] = sum % 16;
                let result = (sum - items[num3]) / 16;
                let sum1 = num3 + 1;
                num3 = sum1;
                tmp3 = result;
                if (tmp3) {
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
          let result1 = 4 * index;
          if (!num7) {
            num7 = 0;
          }
          array[num2 + result1] = num7;
          num2 = num2 + 1;
        } while (num2 < 4);
      });
      const obj = _modDef14;
      let str = obj.fromArray(array, 16);
      const str1 = str.toString();
      self.str = str1;
      return str1;
    }
  }
  toJSON() {
    return this.toString();
  }
}
const prototype = HighLow.prototype;
let tmp2 = checkBrowserSupportsBigInt();
let tmp3 = tmp2;
if (tmp3) {
  let _BigInt = BigInt;
  let tmp4 = null;
  tmp3 = null == BigInt.prototype.toJSON;
}
if (tmp3) {
  const _BigInt2 = BigInt;
  BigInt.prototype.toJSON = function() {
    return this.toString();
  };
}
let closure_4 = {};
const tmp6 = tmp2 ? ((arg0) => BigInt(arg0)) : ((num) => {
  let tmp = num;
  if (!(num instanceof HighLow)) {
    let str = num;
    if (typeof num === "number") {
      str = num.toString();
    }
    if (null == closure_4[str]) {
      closure_4[str] = HighLow.fromString(str);
    }
    tmp = closure_4[str];
  }
  return tmp;
});
let tmp5 = tmp2 ? ((arg0) => typeof arg0 === "bigint") : ((arg0) => arg0 instanceof HighLow);
const tmp6Result = tmp6(0);
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
let tmp10 = tmp2 ? ((arg0, arg1) => arg0 === arg1) : ((equals, arg1) => {
  if (null != equals) {
    let equalsResult;
    if (null != arg1) {
      equalsResult = equals.equals(arg1);
    }
    return equalsResult;
  }
  equalsResult = equals == arg1;
});
let closure_9 = tmp10;
const tmp11 = tmp2 ? ((arg0) => {
  const BigIntResult = BigInt(1);
  return BigIntResult << BigInt(arg0);
}) : ((arg0) => HighLow.fromBit(arg0));
let closure_10 = tmp11;
const tmp9 = tmp2 ? (() => {
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
let tmp12 = tmp2 ? ((arg0, flags) => Number(BigInt.asUintN(arg0, flags))) : ((arg0, flags) => HighLow.asUintN(arg0, flags));
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/BigFlagUtils.tsx");

export const isBigFlag = tmp5;
export const deserialize = tmp6;
export const EMPTY_FLAG = tmp6Result;
export const filter = tmp8;
export const invert = tmp9;
export const equals = tmp10;
export const combine = function combine() {
  let length;
  const items = [...arguments];
  let first = items[0];
  let num = 1;
  let tmp2 = first;
  if (1 < items.length) {
    do {
      first = closure_7(first, items[num]);
      num = num + 1;
      tmp2 = first;
      length = items.length;
    } while (num < length);
  }
  return tmp2;
};
export const has = function has(deny, VIEW_CHANNEL) {
  return closure_9(closure_6(deny, VIEW_CHANNEL), VIEW_CHANNEL);
};
export const hasAny = function hasAny(guildPermissions, RESTRICTED_TO_ADULT) {
  return !closure_9(closure_6(guildPermissions, RESTRICTED_TO_ADULT), closure_5);
};
export const add = function add(NONE, VIEW_CHANNEL) {
  let tmp = NONE;
  if (VIEW_CHANNEL !== closure_5) {
    tmp = closure_7(NONE, VIEW_CHANNEL);
  }
  return tmp;
};
export const remove = function remove(allow, deny) {
  let tmp = allow;
  if (deny !== closure_5) {
    tmp = closure_8(allow, closure_6(allow, deny));
  }
  return tmp;
};
export const getFlag = tmp11;
export const asUintN = tmp12;
export const getBrandedFlag = function getBrandedFlag(arg0) {
  return closure_10(arg0);
};
export const flagNameOf = function flagNameOf(arg0, arg1) {
  const entries = Object.entries(arg1);
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    let first = tmp4[0];
    if (closure_9(arg0, tmp4[1])) {
      obj.return();
      return first;
    }
  }
};