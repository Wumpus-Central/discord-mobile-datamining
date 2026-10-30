// === Module 9392: replaceCodePoint ===

// Module 9392 (replaceCodePoint)
const exports = arg5;
const items = [[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]];
const map = new Map(items);
let fn = String.fromCodePoint;
if (null === fn) {
  fn = (arg0) => {
    let str = "";
    let tmp = arg0;
    if (arg0 > 65535) {
      const diff = arg0 - 65536;
      const _String = String;
      str = `${String.fromCharCode(tmp2 >>> 10 & 1023 | 55296)}`;
      tmp = 56320 | 1023 & diff;
    }
    return str + String.fromCharCode(tmp);
  };
}

export const fromCodePoint = fn;
export function replaceCodePoint(entityResult) {
  if (entityResult < 55296) {
    let num2 = 65533;
    if (entityResult <= 1114111) {
      value = map.get(entityResult);
      let tmp4 = entityResult;
      if (null !== value) {
        tmp4 = entityResult;
        if (undefined !== value) {
          tmp4 = value;
        }
      }
      num2 = tmp4;
    }
  } else {
    num2 = 65533;
  }
  return num2;
}
export default function decodeCodePoint(arg0) {
  if (arg0 < 55296) {
    let num2 = 65533;
    if (arg0 <= 1114111) {
      value = map.get(arg0);
      let tmp4 = arg0;
      if (null !== value) {
        tmp4 = arg0;
        if (undefined !== value) {
          tmp4 = value;
        }
      }
      num2 = tmp4;
    }
  } else {
    num2 = 65533;
  }
  return exports.fromCodePoint(num2);
};