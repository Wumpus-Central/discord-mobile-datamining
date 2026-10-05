// === Module 13: utils/SnowflakeUtils ===

// Module 13 (utils/SnowflakeUtils)
import _modDef14 from "module_14" /* 14 */;
import size from "module_2" /* 2 */;

function extractTimestamp(arg0) {
  return Math.floor(Number(arg0) / 4194304) + c2;
}
let c2 = 1420070400000;
let c3 = 4095;
let obj = _modDef14(1);
let shiftLeftResult = obj.shiftLeft(22);
let closure_5 = shiftLeftResult.minus(1);
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/SnowflakeUtils.tsx");
class SnowflakeSequence {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.seq = 0;
    return obj;
  }
  next() {
    const self = this;
    if (this.seq > c3) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const error = new Error("Snowflake sequence number overflow: " + self.seq);
      throw error;
    } else {
      self.seq = +self.seq + 1;
      return +self.seq;
    }
  }
  willOverflowNext() {
    return this.seq > c3;
  }
  reset() {
    this.seq = 0;
  }
}
const prototype = SnowflakeSequence.prototype;

export const DISCORD_EPOCH = 1420070400000;
export const MAX_SNOWFLAKE_SEQ = 4095;
export { extractTimestamp };
export const fromTimestamp = function fromTimestamp(arg0) {
  const diff = arg0 - c2;
  let str = "0";
  if (diff > 0) {
    const obj = _modDef14(diff);
    const str2 = obj.shiftLeft(22);
    str = str2.toString();
  }
  return str;
};
export const getNonTimestampBits = function getNonTimestampBits(arg0) {
  const obj = _modDef14(arg0);
  const andResult = obj.and(closure_5);
  return andResult.toJSNumber();
};
export const setNonTimestampBits = function setNonTimestampBits(arg0, arg1) {
  const obj = _modDef14(arg0);
  const or = obj.and(closure_5.not()).or;
  obj.and(closure_5.not());
  const obj2 = _modDef14(arg1);
  const str = or(obj2.and(closure_5));
  return str.toString();
};
export const fromTimestampWithSequence = function fromTimestampWithSequence(arg0, next) {
  const diff = arg0 - c2;
  let num = 0;
  const tmp2 = _modDef14;
  if (diff > 0) {
    num = diff;
  }
  const tmp2Result = tmp2(num);
  const shiftLeftResult = tmp2Result.shiftLeft(22);
  const str = shiftLeftResult.add(next.next());
  return str.toString();
};
export const atPreviousMillisecond = function atPreviousMillisecond(arg0) {
  const diff = Math.floor(Number(arg0) / 4194304) + c2 - 1 - c2;
  let str = "0";
  if (diff > 0) {
    const obj = _modDef14(diff);
    const str2 = obj.shiftLeft(22);
    str = str2.toString();
  }
  return str;
};
export const atNextMillisecond = function atNextMillisecond(arg0) {
  const diff = Math.floor(Number(arg0) / 4194304) + c2 + 1 - c2;
  let str = "0";
  if (diff > 0) {
    const obj = _modDef14(diff);
    const str2 = obj.shiftLeft(22);
    str = str2.toString();
  }
  return str;
};
export const age = function age(arg0) {
  const timestamp = Date.now();
  return timestamp - (Math.floor(Number(arg0) / 4194304) + c2);
};
export const compare = function compare(arg0, arg1) {
  let num = 0;
  if (arg0 !== arg1) {
    let num3 = 1;
    if (null != arg1) {
      let num4 = -1;
      let num5 = -1;
      if (null != arg0) {
        let num6 = 1;
        if (arg0.length <= arg1.length) {
          let tmp2 = num4;
          if (arg0.length >= arg1.length) {
            if (arg0 > arg1) {
              num4 = 1;
            }
            tmp2 = num4;
          }
          num6 = tmp2;
        }
        num5 = num6;
      }
      num3 = num5;
    }
    num = num3;
  }
  return num;
};
export const isProbablyAValidSnowflake = function isProbablyAValidSnowflake(arg0) {
  if (null == arg0) {
    return false;
  } else {
    const obj = /^\d{17,19}$/;
    if (obj.test(arg0)) {
      try {
        return extractTimestamp(arg0) >= c2;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  }
};
export { SnowflakeSequence };