// _runtime/00515_v1.js
import { unsafeStringify } from "00517_unsafeStringify.js";
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c5 = 0;
let c6 = 0;
arg5.default = function v1(arg0, arg1, arg2) {
  let unsafeStringifyResult = arg1;
  let num = arg1;
  if (arg1) {
    num = arg2;
  }
  if (!num) {
    num = 0;
  }
  let array = unsafeStringifyResult;
  if (!unsafeStringifyResult) {
    const _Array = Array;
    array = new Array(16);
  }
  let obj = arg0;
  if (!arg0) {
    obj = {};
  }
  const tmp7 = undefined !== obj.clockseq ? obj.clockseq : closure_4;
  if (null == (obj.node || items)) {
    let random = obj.random;
    if (!random) {
      let rng = obj.rng;
      if (!rng) {
        rng = module(516);
      }
      random = rng();
    }
    let tmp12 = tmp6;
    if (null == tmp6) {
      items = [1 | random[0], random[1], random[2], random[3], random[4], random[5]];
      tmp12 = items;
    }
    let tmp9 = tmp7;
    let tmp8 = tmp12;
    if (null == tmp7) {
      closure_4 = tmp13;
      tmp9 = tmp13;
      tmp8 = tmp12;
    }
  } else {
    tmp8 = tmp6;
    tmp9 = tmp7;
  }
  if (undefined !== obj.msecs) {
    let msecs = obj.msecs;
  } else {
    const _Date = Date;
    msecs = Date.now();
  }
  if (undefined !== obj.nsecs) {
    let num7 = obj.nsecs;
  } else {
    num7 = num7 + 1;
  }
  const sum = msecs - msecs + (num7 - num7) / 10000;
  let tmp17 = sum < 0;
  let tmp18 = tmp17;
  if (sum < 0) {
    tmp18 = undefined === obj.clockseq;
  }
  let tmp19 = tmp9;
  if (tmp18) {
    tmp19 = tmp9 + 1 & 16383;
  }
  if (sum >= 0) {
    tmp17 = msecs > msecs;
  }
  if (tmp17) {
    tmp17 = undefined === obj.nsecs;
  }
  if (tmp17) {
    num7 = 0;
  }
  if (num7 >= 10000) {
    const _Error = Error;
    const error = new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    throw error;
  } else {
    closure_4 = tmp19;
    const sum1 = msecs + 12219292800000;
    const result = (10000 * (268435455 & sum1) + num7) % 4294967296;
    array[+num] = result >>> 24 & 255;
    array[++num + 1] = result >>> 16 & 255;
    const tmp32 = +++num + 1 + 1;
    array[tmp32] = result >>> 8 & 255;
    array[+tmp32 + 1] = 255 & result;
    array[++tmp32 + 1 + 1] = (sum1 / 4294967296 * 10000 & 268435455) >>> 8 & 255;
    const tmp36 = +++tmp32 + 1 + 1 + 1;
    array[tmp36] = 255 & (sum1 / 4294967296 * 10000 & 268435455);
    array[+tmp36 + 1] = (sum1 / 4294967296 * 10000 & 268435455) >>> 24 & 15 | 16;
    array[++tmp36 + 1 + 1] = (sum1 / 4294967296 * 10000 & 268435455) >>> 16 & 255;
    const tmp39 = +++tmp36 + 1 + 1 + 1;
    array[tmp39] = tmp19 >>> 8 | 128;
    array[+tmp39 + 1] = 255 & tmp19;
    let num10 = 0;
    do {
      array[tmp40 + 1 + num10] = tmp8[num10];
      num10 = num10 + 1;
    } while (num10 < 6);
    if (!unsafeStringifyResult) {
      unsafeStringifyResult = unsafeStringify.unsafeStringify(array);
      const obj2 = unsafeStringify;
    }
    return unsafeStringifyResult;
  }
};