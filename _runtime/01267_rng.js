// === Module 1267: rng ===

// Module 1267 (rng)
import rngDefault from "rng" /* 1268 */;
import stringify from "stringify" /* 1269 */;

let closure_4, items;

let msecs = 0;
let num6 = 0;

export default function v1(dependencyMap, framesToPop, arg2) {
  let tmp8;
  let tmp9;
  let unsafeStringifyResult = framesToPop;
  let array = unsafeStringifyResult;
  if (!array) {
    const _Array = Array;
    const self = this;
    const self2 = this;
    array = new Array(16);
  }
  const tmp5 = dependencyMap || {};
  const tmp7 = undefined !== tmp5.clockseq ? tmp5.clockseq : closure_4;
  if (null == (tmp5.node || items)) {
    let random = tmp5.random;
    if (!random) {
      const rng = tmp5.rng || rngDefault;
      random = rng();
    }
    let tmp12 = tmp6;
    if (null == (tmp5.node || items)) {
      items = [1 | random[0], random[1], random[2], random[3], random[4], random[5]];
      tmp12 = items;
    }
    tmp9 = tmp7;
    tmp8 = tmp12;
    if (null == tmp7) {
      closure_4 = tmp13;
      tmp9 = tmp13;
      tmp8 = tmp12;
    }
  } else {
    tmp8 = tmp6;
    tmp9 = tmp7;
  }
  if (undefined !== tmp5.msecs) {
    msecs = tmp5.msecs;
  } else {
    const _Date = Date;
    msecs = Date.now();
  }
  if (undefined !== tmp5.nsecs) {
    num6 = tmp5.nsecs;
  } else {
    num6 = num6 + 1;
  }
  const sum = msecs - msecs + (num6 - num6) / 10000;
  let tmp17 = sum < 0;
  let tmp18 = tmp17;
  if (sum < 0) {
    tmp18 = undefined === tmp5.clockseq;
  }
  let tmp19 = tmp9;
  if (tmp18) {
    tmp19 = tmp9 + 1 & 16383;
  }
  if (sum >= 0) {
    tmp17 = msecs > msecs;
  }
  if (tmp17) {
    tmp17 = undefined === tmp5.nsecs;
  }
  if (tmp17) {
    num6 = 0;
  }
  if (num6 >= 10000) {
    const _Error = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    throw error;
  } else {
    closure_4 = tmp19;
    const sum1 = msecs + 12219292800000;
    const result = (10000 * (268435455 & sum1) + num6) % 4294967296;
    array[+framesToPop && arg2 || 0] = result >>> 24 & 255;
    array[+(+framesToPop && arg2 || 0 + 1)] = result >>> 16 & 255;
    const tmp30 = +(+(+framesToPop && arg2 || 0 + 1) + 1);
    array[tmp30] = result >>> 8 & 255;
    array[+tmp30 + 1] = 255 & result;
    array[+(+tmp30 + 1 + 1)] = (sum1 / 4294967296 * 10000 & 268435455) >>> 8 & 255;
    const tmp34 = +(+(+tmp30 + 1 + 1) + 1);
    array[tmp34] = 255 & (sum1 / 4294967296 * 10000 & 268435455);
    array[+tmp34 + 1] = (sum1 / 4294967296 * 10000 & 268435455) >>> 24 & 15 | 16;
    array[+(+tmp34 + 1 + 1)] = (sum1 / 4294967296 * 10000 & 268435455) >>> 16 & 255;
    const tmp37 = +(+(+tmp34 + 1 + 1) + 1);
    array[tmp37] = tmp19 >>> 8 | 128;
    array[+tmp37 + 1] = 255 & tmp19;
    let num9 = 0;
    do {
      array[tmp38 + 1 + num9] = tmp8[num9];
      num9 = num9 + 1;
    } while (num9 < 6);
    if (!unsafeStringifyResult) {
      const obj = stringify;
      unsafeStringifyResult = obj.unsafeStringify(array);
    }
    return unsafeStringifyResult;
  }
};