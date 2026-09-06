// === Module 1264: ? ===

// Module 1264
import validateDefault from "validate" /* 1260 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function parse(arr) {
  if (validateDefault(arr)) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(16);
    const _parseInt = parseInt;
    const parsed = parseInt(arr.slice(0, 8), 16);
    uint8Array[0] = parsed >>> 24;
    uint8Array[1] = parsed >>> 16 & 255;
    uint8Array[2] = parsed >>> 8 & 255;
    uint8Array[3] = 255 & parsed;
    const _parseInt2 = parseInt;
    const parsed1 = parseInt(arr.slice(9, 13), 16);
    uint8Array[4] = parsed1 >>> 8;
    uint8Array[5] = 255 & parsed1;
    const _parseInt3 = parseInt;
    const parsed2 = parseInt(arr.slice(14, 18), 16);
    uint8Array[6] = parsed2 >>> 8;
    uint8Array[7] = 255 & parsed2;
    const _parseInt4 = parseInt;
    const parsed3 = parseInt(arr.slice(19, 23), 16);
    uint8Array[8] = parsed3 >>> 8;
    uint8Array[9] = 255 & parsed3;
    const _parseInt5 = parseInt;
    const parsed4 = parseInt(arr.slice(24, 36), 16);
    uint8Array[10] = parsed4 / 1099511627776 & 255;
    uint8Array[11] = parsed4 / 4294967296 & 255;
    uint8Array[12] = parsed4 >>> 24 & 255;
    uint8Array[13] = parsed4 >>> 16 & 255;
    uint8Array[14] = parsed4 >>> 8 & 255;
    uint8Array[15] = 255 & parsed4;
    return uint8Array;
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};