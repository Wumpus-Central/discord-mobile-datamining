// === Module 527: sha1 ===

// Module 527 (sha1)
arg5.default = function sha1(str) {
  let length;
  if (typeof str === "string") {
    const _unescape = unescape;
    const _encodeURIComponent = encodeURIComponent;
    const unescapeResult = unescape(encodeURIComponent(str));
    const items = [];
    let num = 0;
    let arr = items;
    if (0 < unescapeResult.length) {
      do {
        arr = items.push(unescapeResult.charCodeAt(num));
        num = num + 1;
        arr = items;
        length = unescapeResult.length;
      } while (num < length);
    }
  } else {
    const _Array2 = Array;
    arr = str;
    if (!Array.isArray(str)) {
      const _Array = Array;
      const call = slice.call;
      arr = typeof call === "unknown" ? slice() : call(str);
    }
  }
  arr = arr.push(128);
  const rounded = Math.ceil((arr.length / 4 + 2) / 16);
  const array = new Array(rounded);
  let num3 = 0;
  if (0 < rounded) {
    const _Uint32Array = Uint32Array;
    const uint32Array = new Uint32Array(16);
    let num5 = 0;
    do {
      do {
        let sum = tmp10 + 4 * num5;
        uint32Array[num5] = arr[sum] << 24 | arr[sum + 1] << 16 | arr[sum + 2] << 8 | arr[sum + 3];
        num5 = num5 + 1;
      } while (num5 < 16);
      array[num3] = uint32Array;
      num3 = num3 + 1;
    } while (num3 < rounded);
  }
  const items1 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  const diff = arr.length - 1;
  array[rounded - 1][14] = 8 * diff / Math.pow(2, 32);
  array[rounded - 1][14] = Math.floor(array[rounded - 1][14]);
  array[rounded - 1][15] = 8 * (arr.length - 1) & 4294967295;
  let num6 = 0;
  if (0 < rounded) {
    const _Uint32Array2 = Uint32Array;
    const uint32Array1 = new Uint32Array(80);
    let num8 = 0;
    do {
      do {
        uint32Array1[num8] = array[num6][num8];
        num8 = num8 + 1;
        let num9 = 16;
      } while (num8 < 16);
      do {
        let tmp19 = uint32Array1[num9 - 3] ^ uint32Array1[num9 - 8] ^ uint32Array1[num9 - 14] ^ uint32Array1[num9 - 16];
        uint32Array1[num9] = tmp19 << 1 | tmp19 >>> 31;
        num9 = num9 + 1;
      } while (num9 < 80);
      [tmp20, tmp21, tmp22, tmp23, tmp24] = items1;
      let num10 = 0;
      do {
        let _Math = Math;
        let rounded1 = Math.floor(num10 / 20);
        let tmp28 = num10;
        let tmp29 = tmp24;
        let tmp32 = tmp21;
        let tmp26 = tmp20 << 5;
        let tmp27 = tmp20 >>> 27;
        let tmp30 = tmp23;
        let tmp31 = tmp22;
        let tmp33 = tmp20;
        if (0 === rounded1) {
          let tmp34 = tmp21 & tmp22 ^ ~tmp21 & tmp23;
        } else {
          if (1 !== rounded1) {
            if (3 !== rounded1) {
              if (2 === rounded1) {
                tmp34 = tmp21 & tmp22 ^ tmp21 & tmp23 ^ tmp22 & tmp23;
              }
            }
          }
          tmp34 = tmp21 ^ tmp22 ^ tmp23;
        }
        let tmp35 = (tmp26 | tmp27) + tmp34 + tmp24 + [1518500249, 1859775393, 2400959708, 3395469782][rounded1] + uint32Array1[num10] >>> 0;
        let tmp36 = (tmp21 << 30 | tmp21 >>> 2) >>> 0;
        num10 = num10 + 1;
        tmp24 = tmp23;
        tmp23 = tmp22;
        tmp22 = tmp36;
        tmp21 = tmp20;
        tmp20 = tmp35;
      } while (num10 < 80);
      items1[0] = items1[0] + tmp35 >>> 0;
      items1[1] = items1[1] + tmp33 >>> 0;
      items1[2] = items1[2] + tmp36 >>> 0;
      items1[3] = items1[3] + tmp31 >>> 0;
      items1[4] = items1[4] + tmp30 >>> 0;
      num6 = num6 + 1;
    } while (num6 < rounded);
  }
  const items2 = [items1[0] >> 24 & 255, items1[0] >> 16 & 255, items1[0] >> 8 & 255, 255 & items1[0], items1[1] >> 24 & 255, items1[1] >> 16 & 255, items1[1] >> 8 & 255, 255 & items1[1], items1[2] >> 24 & 255, items1[2] >> 16 & 255, items1[2] >> 8 & 255, 255 & items1[2], items1[3] >> 24 & 255, items1[3] >> 16 & 255, items1[3] >> 8 & 255, 255 & items1[3], items1[4] >> 24 & 255, items1[4] >> 16 & 255, items1[4] >> 8 & 255, 255 & items1[4]];
  return items2;
};