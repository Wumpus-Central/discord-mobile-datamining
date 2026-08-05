// discord_common/js/shared/utils/SnowflakeUtils.tsx
function extractTimestamp(arg0) {
  return Math.floor(Number(arg0) / 4194304) + c2;
}
let c2 = 1420070400000;
let c3 = 4095;
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/SnowflakeUtils.tsx");
class SnowflakeSequence {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj.seq = 0;
    return obj;
  }
}
const prototype = SnowflakeSequence.prototype;
prototype["next"] = function next() {
  const self = this;
  if (this.seq > c3) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Snowflake sequence number overflow: " + self.seq);
    throw error;
  } else {
    self.seq = +self.seq + 1;
    return +self.seq;
  }
};
prototype["willOverflowNext"] = function willOverflowNext() {
  return this.seq > c3;
};
prototype["reset"] = function reset() {
  this.seq = 0;
};

export const DISCORD_EPOCH = 1420070400000;
export const MAX_SNOWFLAKE_SEQ = 4095;
export { extractTimestamp };
export const fromTimestamp = function fromTimestamp(arg0) {
  const diff = arg0 - c2;
  let str = "0";
  if (diff > 0) {
    const obj = require("../../../../_runtime/00014_Integer.js")(diff);
    str = require("../../../../_runtime/00014_Integer.js")(diff).shiftLeft(22).toString();
    const str2 = require("../../../../_runtime/00014_Integer.js")(diff).shiftLeft(22);
  }
  return str;
};
export const fromTimestampWithSequence = function fromTimestampWithSequence(arg0, next) {
  const diff = arg0 - c2;
  let num = 0;
  if (diff > 0) {
    num = diff;
  }
  const tmp2 = require("../../../../_runtime/00014_Integer.js");
  const tmp2Result = require("../../../../_runtime/00014_Integer.js")(num);
  const shiftLeftResult = require("../../../../_runtime/00014_Integer.js")(num).shiftLeft(22);
  return require("../../../../_runtime/00014_Integer.js")(num).shiftLeft(22).add(next.next()).toString();
};
export const atPreviousMillisecond = function atPreviousMillisecond(arg0) {
  const diff = Math.floor(Number(arg0) / 4194304) + c2 - 1 - c2;
  let str = "0";
  if (diff > 0) {
    const obj = require("../../../../_runtime/00014_Integer.js")(diff);
    str = require("../../../../_runtime/00014_Integer.js")(diff).shiftLeft(22).toString();
    const str2 = require("../../../../_runtime/00014_Integer.js")(diff).shiftLeft(22);
  }
  return str;
};
export const atNextMillisecond = function atNextMillisecond(arg0) {
  const diff = Math.floor(Number(arg0) / 4194304) + c2 + 1 - c2;
  let str = "0";
  if (diff > 0) {
    const obj = require("../../../../_runtime/00014_Integer.js")(diff);
    str = require("../../../../_runtime/00014_Integer.js")(diff).shiftLeft(22).toString();
    const str2 = require("../../../../_runtime/00014_Integer.js")(diff).shiftLeft(22);
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
    if (obj.test(arg0)) {
      try {
        return extractTimestamp(arg0) >= c2;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
    obj = /^\d{17,19}$/;
  }
};
export { SnowflakeSequence };