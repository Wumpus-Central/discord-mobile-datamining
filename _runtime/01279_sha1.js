// _runtime/01279_sha1.js

export default function sha1(str) {
  let callResult;
  let length;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  if (typeof str === "string") {
    const _unescape = unescape;
    const _encodeURIComponent = encodeURIComponent;
    const unescapeResult = unescape(encodeURIComponent(str));
    const items = [];
    let num = 0;
    callResult = items;
    if (0 < unescapeResult.length) {
      do {
        let arr = items.push(unescapeResult.charCodeAt(num));
        num = num + 1;
        callResult = items;
        length = unescapeResult.length;
      } while (num < length);
    }
  } else {
    const _Array2 = Array;
    callResult = str;
    if (!Array.isArray(str)) {
      const _Array = Array;
      callResult = slice.call(str);
    }
  }
  callResult.push(128);
  const rounded = Math.ceil((callResult.length / 4 + 2) / 16);
  const array = new Array(rounded);
  let num3 = 0;
  if (0 < rounded) {
    const _Uint32Array = Uint32Array;
    const self = this;
    const self2 = this;
    const uint32Array = new Uint32Array(16);
    let num5 = 0;
    do {
      do {
        let sum = tmp8 + 4 * num5;
        uint32Array[num5] =
          (callResult[sum] << 24) | (callResult[sum + 1] << 16) | (callResult[sum + 2] << 8) | callResult[sum + 3];
        num5 = num5 + 1;
      } while (num5 < 16);
      array[num3] = uint32Array;
      num3 = num3 + 1;
    } while (num3 < rounded);
  }
  const items1 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  const diff = callResult.length - 1;
  array[rounded - 1][14] = (8 * diff) / Math.pow(2, 32);
  array[rounded - 1][14] = Math.floor(array[rounded - 1][14]);
  array[rounded - 1][15] = (8 * (callResult.length - 1)) & 4294967295;
  let num6 = 0;
  if (0 < rounded) {
    const _Uint32Array2 = Uint32Array;
    const self3 = this;
    const self4 = this;
    const uint32Array1 = new Uint32Array(80);
    let num8 = 0;
    do {
      let num9;
      let tmp26;
      let tmp27;
      let tmp29;
      let tmp31;
      let tmp32;
      do {
        uint32Array1[num8] = array[num6][num8];
        num8 = num8 + 1;
        num9 = 16;
      } while (num8 < 16);
      do {
        let tmp15 = uint32Array1[num9 - 3] ^ uint32Array1[num9 - 8] ^ uint32Array1[num9 - 14] ^ uint32Array1[num9 - 16];
        uint32Array1[num9] = (tmp15 << 1) | (tmp15 >>> 31);
        num9 = num9 + 1;
      } while (num9 < 80);
      [tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
      let num10 = 0;
      do {
        let tmp30;
        let _Math = Math;
        let rounded1 = Math.floor(num10 / 20);
        let tmp22 = tmp16 << 5;
        let tmp23 = tmp16 >>> 27;
        tmp26 = tmp19;
        tmp27 = tmp18;
        tmp29 = tmp16;
        if (0 === rounded1) {
          tmp30 = (tmp17 & tmp18) ^ (~tmp17 & tmp19);
        } else {
          if (1 !== rounded1) {
            if (3 !== rounded1) {
              if (2 === rounded1) {
                tmp30 = (tmp17 & tmp18) ^ (tmp17 & tmp19) ^ (tmp18 & tmp19);
              }
            }
          }
          tmp30 = tmp17 ^ tmp18 ^ tmp19;
        }
        tmp31 =
          ((tmp22 | tmp23) +
            tmp30 +
            tmp20 +
            [1518500249, 1859775393, 2400959708, 3395469782][rounded1] +
            uint32Array1[num10]) >>>
          0;
        tmp32 = ((tmp17 << 30) | (tmp17 >>> 2)) >>> 0;
        num10 = num10 + 1;
        tmp20 = tmp19;
        tmp19 = tmp18;
        tmp18 = tmp32;
        tmp17 = tmp16;
        tmp16 = tmp31;
      } while (num10 < 80);
      items1[0] = (items1[0] + tmp31) >>> 0;
      items1[1] = (items1[1] + tmp29) >>> 0;
      items1[2] = (items1[2] + tmp32) >>> 0;
      items1[3] = (items1[3] + tmp27) >>> 0;
      items1[4] = (items1[4] + tmp26) >>> 0;
      num6 = num6 + 1;
    } while (num6 < rounded);
  }
  const items2 = [
    (items1[0] >> 24) & 255,
    (items1[0] >> 16) & 255,
    (items1[0] >> 8) & 255,
    255 & items1[0],
    (items1[1] >> 24) & 255,
    (items1[1] >> 16) & 255,
    (items1[1] >> 8) & 255,
    255 & items1[1],
    (items1[2] >> 24) & 255,
    (items1[2] >> 16) & 255,
    (items1[2] >> 8) & 255,
    255 & items1[2],
    (items1[3] >> 24) & 255,
    (items1[3] >> 16) & 255,
    (items1[3] >> 8) & 255,
    255 & items1[3],
    (items1[4] >> 24) & 255,
    (items1[4] >> 16) & 255,
    (items1[4] >> 8) & 255,
    255 & items1[4],
  ];
  return items2;
}
