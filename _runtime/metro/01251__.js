// === Module 1251: ? ===

// Module 1251
class MurmurHashV3 {
  constructor(str, arg1) {
    let num4;
    let encodeResult = str;
    if (typeof str === "string") {
      const _TextEncoder = TextEncoder;
      const self = this;
      const self2 = this;
      const encoder = new TextEncoder();
      encodeResult = encoder.encode(str);
    }
    const diff = encodeResult.length - tmp;
    let num = 0;
    let sum3 = arg1;
    let num2 = 0;
    let tmp4 = arg1;
    if (0 < diff) {
      do {
        let sum = num + 1;
        let sum1 = sum + 1;
        let sum2 = sum1 + 1;
        let tmp8 = 255 & encodeResult[num] | (255 & encodeResult[sum]) << 8 | (255 & encodeResult[sum1]) << 16 | (255 & encodeResult[sum2]) << 24;
        num = sum2 + 1;
        let tmp9 = (65535 & tmp8) * 3432918353 + (((tmp8 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
        let tmp10 = tmp9 << 15 | tmp9 >>> 17;
        let tmp11 = sum3 ^ (65535 & tmp10) * 461845907 + (((tmp10 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
        let tmp12 = tmp11 << 13 | tmp11 >>> 19;
        let tmp13 = 5 * (65535 & tmp12) + ((5 * (tmp12 >>> 16) & 65535) << 16) & 4294967295;
        sum3 = 27492 + (65535 & tmp13) + ((58964 + (tmp13 >>> 16) & 65535) << 16);
        tmp4 = sum3;
        num2 = num;
      } while (num < diff);
    }
    if (3 === (3 & encodeResult.length)) {
      num4 = 0 ^ (255 & encodeResult[num2 + 2]) << 16;
    } else {
      num4 = 0;
      if (2 !== (3 & encodeResult.length)) {
        let tmp14 = tmp4;
        const tmp20 = 2246822507 * (65535 & (tmp14 ^ encodeResult.length ^ (tmp14 ^ encodeResult.length) >>> 16)) + ((2246822507 * ((tmp14 ^ encodeResult.length ^ (tmp14 ^ encodeResult.length) >>> 16) >>> 16) & 65535) << 16) & 4294967295;
        const tmp22 = 3266489909 * (65535 & (tmp20 ^ tmp20 >>> 13)) + ((3266489909 * ((tmp20 ^ tmp20 >>> 13) >>> 16) & 65535) << 16) & 4294967295;
        return (tmp22 ^ tmp22 >>> 16) >>> 0;
      }
      tmp14 = tmp4 ^ (65535 & tmp17) * 461845907 + (((tmp17 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
    }
    const num5 = num4 ^ (255 & encodeResult[num2 + 1]) << 8;
  }
}
MurmurHashV3.v2 = function MurmurHashV2(str, arg1) {
  let encodeResult = str;
  if (typeof str === "string") {
    const _TextEncoder = TextEncoder;
    const self = this;
    const self2 = this;
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
    const tmp11 = tmp3 ^ (255 & encodeResult[num2 + 2]) << 16;
  } else {
    if (2 !== tmp4) {
      let sum5 = tmp3;
      const sum4 = 1540483477 * (65535 & tmp15) + ((1540483477 * (tmp15 >>> 16) & 65535) << 16);
      return (sum4 ^ sum4 >>> 15) >>> 0;
    }
    sum5 = 1540483477 * (65535 & tmp14) + ((1540483477 * (tmp14 >>> 16) & 65535) << 16);
  }
};
MurmurHashV3.v3 = MurmurHashV3;
if (undefined !== module) {
  module.exports = MurmurHashV3;
} else {
  let tmp = globalThis;
  class MurmurHashV3 {
    constructor(str, arg1) {
      let num4;
      let encodeResult = str;
      if (typeof str === "string") {
        const _TextEncoder = TextEncoder;
        const self = this;
        const self2 = this;
        const encoder = new TextEncoder();
        encodeResult = encoder.encode(str);
      }
      const diff = encodeResult.length - tmp;
      let num = 0;
      let sum3 = arg1;
      let num2 = 0;
      let tmp4 = arg1;
      if (0 < diff) {
        do {
          let sum = num + 1;
          let sum1 = sum + 1;
          let sum2 = sum1 + 1;
          let tmp8 = 255 & encodeResult[num] | (255 & encodeResult[sum]) << 8 | (255 & encodeResult[sum1]) << 16 | (255 & encodeResult[sum2]) << 24;
          num = sum2 + 1;
          let tmp9 = (65535 & tmp8) * 3432918353 + (((tmp8 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
          let tmp10 = tmp9 << 15 | tmp9 >>> 17;
          let tmp11 = sum3 ^ (65535 & tmp10) * 461845907 + (((tmp10 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
          let tmp12 = tmp11 << 13 | tmp11 >>> 19;
          let tmp13 = 5 * (65535 & tmp12) + ((5 * (tmp12 >>> 16) & 65535) << 16) & 4294967295;
          sum3 = 27492 + (65535 & tmp13) + ((58964 + (tmp13 >>> 16) & 65535) << 16);
          tmp4 = sum3;
          num2 = num;
        } while (num < diff);
      }
      if (3 === (3 & encodeResult.length)) {
        num4 = 0 ^ (255 & encodeResult[num2 + 2]) << 16;
      } else {
        num4 = 0;
        if (2 !== (3 & encodeResult.length)) {
          let tmp14 = tmp4;
          const tmp20 = 2246822507 * (65535 & (tmp14 ^ encodeResult.length ^ (tmp14 ^ encodeResult.length) >>> 16)) + ((2246822507 * ((tmp14 ^ encodeResult.length ^ (tmp14 ^ encodeResult.length) >>> 16) >>> 16) & 65535) << 16) & 4294967295;
          const tmp22 = 3266489909 * (65535 & (tmp20 ^ tmp20 >>> 13)) + ((3266489909 * ((tmp20 ^ tmp20 >>> 13) >>> 16) & 65535) << 16) & 4294967295;
          return (tmp22 ^ tmp22 >>> 16) >>> 0;
        }
        tmp14 = tmp4 ^ (65535 & tmp17) * 461845907 + (((tmp17 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
      }
      const num5 = num4 ^ (255 & encodeResult[num2 + 1]) << 8;
    }
  }
  MurmurHashV3.noConflict = () => {
    globalThis.murmur = murmur;
    return MurmurHashV3;
  };
  globalThis.murmur = MurmurHashV3;
}