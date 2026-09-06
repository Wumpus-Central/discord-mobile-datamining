// === Module 1241: MurmurHashV3 ===

// Module 1241 (MurmurHashV3)
class MurmurHashV3 {
  constructor(arg0, arg1) {
    encodeResult = global;
    if (typeof global === "string") {
      tmp23 = globalThis;
      _TextEncoder = TextEncoder;
      tmp24 = new.target;
      tmp25 = new.target;
      encoder = new TextEncoder();
      tmp26 = encoder;
      encodeResult = encoder.encode(global);
    }
    tmp = 3 & encodeResult.length;
    diff = encodeResult.length - tmp;
    num = 0;
    sum3 = require;
    num2 = 0;
    tmp4 = require;
    if (0 < diff) {
      do {
        sum = num + 1;
        sum1 = sum + 1;
        sum2 = sum1 + 1;
        tmp8 = 255 & encodeResult[num] | (255 & encodeResult[sum]) << 8 | (255 & encodeResult[sum1]) << 16 | (255 & encodeResult[sum2]) << 24;
        num = sum2 + 1;
        tmp9 = (65535 & tmp8) * 3432918353 + (((tmp8 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
        tmp10 = tmp9 << 15 | tmp9 >>> 17;
        tmp11 = sum3 ^ (65535 & tmp10) * 461845907 + (((tmp10 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
        tmp12 = tmp11 << 13 | tmp11 >>> 19;
        tmp13 = 5 * (65535 & tmp12) + ((5 * (tmp12 >>> 16) & 65535) << 16) & 4294967295;
        sum3 = 27492 + (65535 & tmp13) + ((58964 + (tmp13 >>> 16) & 65535) << 16);
        tmp4 = sum3;
        num2 = num;
      } while (num < diff);
    }
    if (3 === tmp) {
      num6 = 2;
      num4 = 0 ^ (255 & encodeResult[num2 + 2]) << 16;
    } else {
      num3 = 2;
      num4 = 0;
      if (2 !== tmp) {
        num5 = 0;
        tmp14 = tmp4;
        tmp18 = tmp14 ^ encodeResult.length;
        tmp19 = tmp18 ^ tmp18 >>> 16;
        num7 = 2246822507;
        tmp20 = 2246822507 * (65535 & tmp19) + ((2246822507 * (tmp19 >>> 16) & 65535) << 16) & 4294967295;
        tmp21 = tmp20 ^ tmp20 >>> 13;
        num8 = 3266489909;
        tmp22 = 3266489909 * (65535 & tmp21) + ((3266489909 * (tmp21 >>> 16) & 65535) << 16) & 4294967295;
        return (tmp22 ^ tmp22 >>> 16) >>> 0;
      }
      tmp15 = num5 ^ 255 & encodeResult[num2];
      tmp16 = (65535 & tmp15) * 3432918353 + (((tmp15 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
      tmp17 = tmp16 << 15 | tmp16 >>> 17;
      tmp14 = tmp4 ^ (65535 & tmp17) * 461845907 + (((tmp17 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
    }
    num5 = num4 ^ (255 & encodeResult[num2 + 1]) << 8;
    return;
  }
}
MurmurHashV3.v2 = function MurmurHashV2(str, arg1) {
  let encodeResult = str;
  if (typeof str === "string") {
    const _TextEncoder = TextEncoder;
    const encoder = new TextEncoder();
    encodeResult = encoder.encode(str);
  }
  let tmp = arg1 ^ length;
  let num = 0;
  let diff = length;
  let num2 = 0;
  let tmp3 = tmp;
  let tmp4 = length;
  if (encodeResult.length >= 4) {
    do {
      let sum = num + 1;
      let sum1 = sum + 1;
      let sum2 = sum1 + 1;
      let tmp8 = 255 & encodeResult[num] | (255 & encodeResult[sum]) << 8 | (255 & encodeResult[sum1]) << 16 | (255 & encodeResult[sum2]) << 24;
      let sum3 = 1540483477 * (65535 & tmp8) + ((1540483477 * (tmp8 >>> 16) & 65535) << 16);
      let tmp10 = sum3 ^ sum3 >>> 24;
      tmp = 1540483477 * (65535 & tmp) + ((1540483477 * (tmp >>> 16) & 65535) << 16) ^ 1540483477 * (65535 & tmp10) + ((1540483477 * (tmp10 >>> 16) & 65535) << 16);
      diff = diff - 4;
      num = sum2 + 1;
      num2 = num;
      tmp3 = tmp;
      tmp4 = diff;
    } while (4 <= diff);
  }
  if (3 === tmp4) {
    let tmp11 = tmp3 ^ (255 & encodeResult[num2 + 2]) << 16;
  } else {
    tmp11 = tmp3;
    if (2 !== tmp4) {
      let sum5 = tmp3;
      const sum4 = 1540483477 * (65535 & tmp15) + ((1540483477 * (tmp15 >>> 16) & 65535) << 16);
      return (sum4 ^ sum4 >>> 15) >>> 0;
    }
    sum5 = 1540483477 * (65535 & tmp14) + ((1540483477 * (tmp14 >>> 16) & 65535) << 16);
  }
  const tmp12 = tmp11 ^ (255 & encodeResult[num2 + 1]) << 8;
};
MurmurHashV3.v3 = MurmurHashV3;
if (undefined !== module) {
  module.exports = MurmurHashV3;
} else {
  class MurmurHashV3 {
    constructor(arg0, arg1) {
      encodeResult = global;
      if (typeof global === "string") {
        tmp23 = globalThis;
        _TextEncoder = TextEncoder;
        tmp24 = new.target;
        tmp25 = new.target;
        encoder = new TextEncoder();
        tmp26 = encoder;
        encodeResult = encoder.encode(global);
      }
      tmp = 3 & encodeResult.length;
      diff = encodeResult.length - tmp;
      num = 0;
      sum3 = require;
      num2 = 0;
      tmp4 = require;
      if (0 < diff) {
        do {
          sum = num + 1;
          sum1 = sum + 1;
          sum2 = sum1 + 1;
          tmp8 = 255 & encodeResult[num] | (255 & encodeResult[sum]) << 8 | (255 & encodeResult[sum1]) << 16 | (255 & encodeResult[sum2]) << 24;
          num = sum2 + 1;
          tmp9 = (65535 & tmp8) * 3432918353 + (((tmp8 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
          tmp10 = tmp9 << 15 | tmp9 >>> 17;
          tmp11 = sum3 ^ (65535 & tmp10) * 461845907 + (((tmp10 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
          tmp12 = tmp11 << 13 | tmp11 >>> 19;
          tmp13 = 5 * (65535 & tmp12) + ((5 * (tmp12 >>> 16) & 65535) << 16) & 4294967295;
          sum3 = 27492 + (65535 & tmp13) + ((58964 + (tmp13 >>> 16) & 65535) << 16);
          tmp4 = sum3;
          num2 = num;
        } while (num < diff);
      }
      if (3 === tmp) {
        num6 = 2;
        num4 = 0 ^ (255 & encodeResult[num2 + 2]) << 16;
      } else {
        num3 = 2;
        num4 = 0;
        if (2 !== tmp) {
          num5 = 0;
          tmp14 = tmp4;
          tmp18 = tmp14 ^ encodeResult.length;
          tmp19 = tmp18 ^ tmp18 >>> 16;
          num7 = 2246822507;
          tmp20 = 2246822507 * (65535 & tmp19) + ((2246822507 * (tmp19 >>> 16) & 65535) << 16) & 4294967295;
          tmp21 = tmp20 ^ tmp20 >>> 13;
          num8 = 3266489909;
          tmp22 = 3266489909 * (65535 & tmp21) + ((3266489909 * (tmp21 >>> 16) & 65535) << 16) & 4294967295;
          return (tmp22 ^ tmp22 >>> 16) >>> 0;
        }
        tmp15 = num5 ^ 255 & encodeResult[num2];
        tmp16 = (65535 & tmp15) * 3432918353 + (((tmp15 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
        tmp17 = tmp16 << 15 | tmp16 >>> 17;
        tmp14 = tmp4 ^ (65535 & tmp17) * 461845907 + (((tmp17 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
      }
      num5 = num4 ^ (255 & encodeResult[num2 + 1]) << 8;
      return;
    }
  }
  MurmurHashV3.noConflict = () => {
    globalThis.murmur = murmur;
    return MurmurHashV3;
  };
  globalThis.murmur = MurmurHashV3;
}