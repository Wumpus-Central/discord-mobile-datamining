// _runtime/01238_q.js
if (typeof window !== "undefined") {
  let self = window;
} else {
  self = this;
  if (undefined !== arg0) {
    self = arg0;
  }
}
const fn = function q(arg0) {
  let arr = arg0;
  const bound = Math.min(65536, arg0.length + 1);
  const uint16Array = new Uint16Array(bound);
  const items = [];
  let num = 0;
  let num2 = 0;
  while (true) {
    let tmp2 = num2 < arr.length;
    let tmp3 = num;
    let tmp4 = num2;
    let tmp5 = arr;
    if (!tmp2) {
      let _String = String;
      arr = items.push(fromCharCode.apply(null, uint16Array.subarray(0, num)));
      if (!tmp2) {
        break;
      } else {
        let subarrayResult = arr.subarray(num2);
        let num4 = 0;
        let num3 = 0;
      }
    } else {
      num3 = num2;
      subarrayResult = arr;
      num4 = num;
    }
    let sum = num3 + 1;
    let tmp9 = subarrayResult[num3];
    if (128 & tmp9) {
      if (192 === (224 & tmp9)) {
        num2 = sum + 1;
        num = num4 + 1;
        uint16Array[num4] = ((31 & tmp9) << 6) | (63 & subarrayResult[sum]);
        arr = subarrayResult;
        continue;
      } else {
        if (224 === (240 & tmp9)) {
          let sum1 = sum + 1;
          num2 = sum1 + 1;
          num = num4 + 1;
          uint16Array[num4] = ((31 & tmp9) << 12) | ((63 & subarrayResult[sum]) << 6) | (63 & subarrayResult[sum1]);
          arr = subarrayResult;
          continue;
        } else {
          num = num4;
          num2 = sum;
          arr = subarrayResult;
          if (240 !== (248 & tmp9)) {
            continue;
          } else {
            let sum2 = sum + 1;
            let sum3 = sum2 + 1;
            let tmp16 =
              ((7 & tmp9) << 18) |
              ((63 & subarrayResult[sum]) << 12) |
              ((63 & subarrayResult[sum2]) << 6) |
              (63 & subarrayResult[sum3]);
            let sum4 = num4;
            let tmp12 = tmp16;
            if (65535 < tmp16) {
              let diff = tmp16 - 65536;
              sum4 = num4 + 1;
              uint16Array[num4] = ((diff >>> 10) & 1023) | 55296;
              tmp12 = 56320 | (1023 & diff);
            }
            num2 = sum3 + 1;
            num = sum4 + 1;
            uint16Array[sum4] = tmp12;
            arr = subarrayResult;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    } else {
      num = num4 + 1;
      uint16Array[num4] = tmp9;
      num2 = sum;
      arr = subarrayResult;
      continue;
    }
    continue;
  }
  return items.join("");
};
class m {
  constructor() {
    return;
  }
  encode(arg0, arg1) {
    obj = arg1;
    if (undefined === arg1) {
      obj = { stream: false };
    }
    if (obj.stream) {
      _Error = Error;
      str = "Failed to encode: the 'stream' option is unsupported.";
      throw Error("Failed to encode: the 'stream' option is unsupported.");
    } else {
      tmp = arg0;
      length = arg0.length;
      _Math = Math;
      num = 1;
      num2 = 32;
      num3 = 7;
      bound = require("metro/00032__slicedToArray.js");
      _Uint8Array = Uint8Array;
      num4 = 3;
      tmp3 = new.target;
      tmp4 = new.target;
      uint8Array = new Uint8Array((bound >>> 3) << 3);
      arr = uint8Array;
      num5 = 0;
      num6 = 63;
      num7 = 128;
      num8 = 18;
      num9 = 240;
      num10 = 12;
      num11 = 6;
      num12 = 4292870144;
      num13 = 224;
      num14 = 15;
      num15 = 4294901760;
      num16 = 192;
      num17 = 31;
      num18 = 4294965248;
      num19 = 4294967168;
      num20 = 8;
      num21 = 2;
      num22 = 4;
      num23 = 56319;
      num24 = 55296;
      num25 = 1023;
      num26 = 65536;
      num27 = 10;
      num28 = 64512;
      num29 = 56320;
      num30 = 0;
      num31 = 0;
      arr2 = uint8Array;
      num32 = 0;
      if (0 < length) {
        while (true) {
          sum = num31 + 1;
          charCodeAtResult = arg0.charCodeAt(num31);
          tmp8 = arr;
          tmp9 = bound;
          sum4 = num30;
          tmp11 = sum;
          tmp12 = charCodeAtResult;
          if (55296 <= charCodeAtResult) {
            tmp12 = charCodeAtResult;
            tmp11 = sum;
            if (56319 >= charCodeAtResult) {
              sum2 = charCodeAtResult;
              sum1 = sum;
              if (sum < length) {
                charCodeAtResult1 = arg0.charCodeAt(sum);
                sum2 = charCodeAtResult;
                sum1 = sum;
                if (56320 === (64512 & charCodeAtResult1)) {
                  sum1 = sum + 1;
                  sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                }
              }
              tmp12 = sum2;
              tmp11 = sum1;
              if (55296 <= sum2) {
                tmp11 = sum1;
                tmp16 = arr;
                tmp17 = bound;
                sum8 = sum4;
                tmp19 = sum1;
                tmp12 = sum2;
              }
              arr = tmp16;
              bound = tmp17;
              num30 = sum8;
              num31 = tmp19;
              arr2 = tmp16;
              num32 = sum8;
              if (tmp19 >= length) {
                break;
              }
            }
          }
          tmp20 = arr;
          tmp21 = bound;
          if (sum4 + 4 > arr.length) {
            tmp22 = (((bound + 8) * (1 + (tmp11 / arg0.length) * 2)) >>> 3) << 3;
            _Uint8Array2 = Uint8Array;
            tmp23 = new.target;
            tmp24 = new.target;
            tmp25 = tmp22;
            uint8Array1 = new Uint8Array(tmp22);
            tmp26 = uint8Array1;
            result = uint8Array1.set(arr);
            tmp20 = uint8Array1;
            tmp21 = tmp22;
          }
          if (4294967168 & tmp12) {
            if (4294965248 & tmp12) {
              if (4294901760 & tmp12) {
                tmp16 = tmp20;
                tmp17 = tmp21;
                sum8 = sum4;
                tmp19 = tmp11;
                if (!(4292870144 & tmp12)) {
                  sum3 = sum4 + 1;
                  tmp20[sum4] = ((tmp12 >>> 18) & 7) | 240;
                  sum4 = sum3 + 1;
                  tmp20[sum3] = ((tmp12 >>> 12) & 63) | 128;
                  sum5 = sum4 + 1;
                  tmp20[sum4] = ((tmp12 >>> 6) & 63) | 128;
                }
              } else {
                sum6 = sum4 + 1;
                tmp20[sum4] = ((tmp12 >>> 12) & 15) | 224;
                sum5 = sum6 + 1;
                tmp20[sum6] = ((tmp12 >>> 6) & 63) | 128;
              }
            } else {
              sum5 = sum4 + 1;
              tmp20[sum4] = ((tmp12 >>> 6) & 31) | 192;
            }
            sum7 = sum5 + 1;
            tmp20[sum5] = (63 & tmp12) | 128;
            tmp32 = tmp20;
            tmp33 = tmp21;
            tmp34 = tmp11;
          } else {
            sum8 = sum4 + 1;
            tmp20[sum4] = tmp12;
            tmp16 = tmp20;
            tmp17 = tmp21;
            tmp19 = tmp11;
          }
        }
      }
      if (arr2.slice) {
        substr = require("../discord_app/index.native.tsx");
      } else {
        substr = require("../discord_app/index.native.tsx");
      }
      return substr;
    }
  }
}
const fn2 = function k(arg0, arg1) {
  let str = "utf-8";
  if (undefined !== arg0) {
    str = arg0;
  }
  let obj = arg1;
  if (undefined === arg1) {
    obj = { fatal: false };
  }
  if (-1 === closure_1.indexOf(str.toLowerCase())) {
    const _RangeError = RangeError;
    const rangeError = new RangeError(
      "Failed to construct 'TextDecoder': The encoding label provided ('" + str + "') is invalid.",
    );
    throw rangeError;
  } else if (obj.fatal) {
    const _Error = Error;
    throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
  }
};
let closure_1 = ["utf-8", "utf8", "unicode-1-1-utf-8"];
Object.defineProperty(m.prototype, "encoding", { value: "utf-8" });
Object.defineProperty(fn2.prototype, "encoding", { value: "utf-8" });
Object.defineProperty(fn2.prototype, "fatal", { value: false });
Object.defineProperty(fn2.prototype, "ignoreBOM", { value: false });
let t = fn;
if (typeof Buffer !== "function") {
  const _Blob = Blob;
  let tmp5 = typeof Blob === "function";
  if (typeof Blob === "function") {
    let _URL2 = URL;
    tmp5 = typeof URL === "function";
  }
  if (tmp5) {
    let _URL = URL;
    tmp5 = typeof URL.createObjectURL === "function";
  }
  if (tmp5) {
    t = function u(arg0) {
      const items = [arg0];
      const blob = new Blob(items, { type: "text/plain;charset=UTF-8" });
      const objectURL = URL.createObjectURL(blob);
      try {
        const _XMLHttpRequest = XMLHttpRequest;
        const xMLHttpRequest = new XMLHttpRequest();
        xMLHttpRequest.open("GET", objectURL, false);
        xMLHttpRequest.send();
        const _URL = URL;
        URL.revokeObjectURL(objectURL);
        return xMLHttpRequest.responseText;
      } catch (tmp11) {
        const _URL2 = tmp.URL;
        _URL2.revokeObjectURL(tmp2);
        throw tmp11;
      }
    };
  }
  class fn2 {
    decode(arg0, arg1) {
      obj = arg1;
      if (undefined === arg1) {
        obj = { stream: false };
      }
      if (obj.stream) {
        _Error = Error;
        str = "Failed to decode: the 'stream' option is unsupported.";
        throw Error("Failed to decode: the 'stream' option is unsupported.");
      } else {
        _Uint8Array2 = arg0;
        _Uint8Array = Uint8Array;
        tmp2 = arg0;
        if (arg0 instanceof Uint8Array) {
          tmp10 = t;
          return t(_Uint8Array2);
        } else {
          _ArrayBuffer = ArrayBuffer;
          _Uint8Array2 = Uint8Array;
          if (_Uint8Array2.buffer instanceof ArrayBuffer) {
            tmp7 = new.target;
            tmp8 = new.target;
            _Uint8Array2 = new _Uint8Array2(_Uint8Array2.buffer);
            _Uint8Array21 = _Uint8Array2;
          } else {
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = _Uint8Array2;
            _Uint8Array21 = new _Uint8Array2(_Uint8Array2);
          }
          tmp9 = _Uint8Array21;
        }
      }
      return;
    }
  }
  self.TextEncoder = m;
  class m {
    constructor() {
      return;
    }
    encode(arg0, arg1) {
      obj = arg1;
      if (undefined === arg1) {
        obj = { stream: false };
      }
      if (obj.stream) {
        _Error = Error;
        str = "Failed to encode: the 'stream' option is unsupported.";
        throw Error("Failed to encode: the 'stream' option is unsupported.");
      } else {
        tmp = arg0;
        length = arg0.length;
        _Math = Math;
        num = 1;
        num2 = 32;
        num3 = 7;
        bound = require("metro/00032__slicedToArray.js");
        _Uint8Array = Uint8Array;
        num4 = 3;
        tmp3 = new.target;
        tmp4 = new.target;
        uint8Array = new Uint8Array((bound >>> 3) << 3);
        arr = uint8Array;
        num5 = 0;
        num6 = 63;
        num7 = 128;
        num8 = 18;
        num9 = 240;
        num10 = 12;
        num11 = 6;
        num12 = 4292870144;
        num13 = 224;
        num14 = 15;
        num15 = 4294901760;
        num16 = 192;
        num17 = 31;
        num18 = 4294965248;
        num19 = 4294967168;
        num20 = 8;
        num21 = 2;
        num22 = 4;
        num23 = 56319;
        num24 = 55296;
        num25 = 1023;
        num26 = 65536;
        num27 = 10;
        num28 = 64512;
        num29 = 56320;
        num30 = 0;
        num31 = 0;
        arr2 = uint8Array;
        num32 = 0;
        if (0 < length) {
          while (true) {
            sum = num31 + 1;
            charCodeAtResult = arg0.charCodeAt(num31);
            tmp8 = arr;
            tmp9 = bound;
            sum4 = num30;
            tmp11 = sum;
            tmp12 = charCodeAtResult;
            if (55296 <= charCodeAtResult) {
              tmp12 = charCodeAtResult;
              tmp11 = sum;
              if (56319 >= charCodeAtResult) {
                sum2 = charCodeAtResult;
                sum1 = sum;
                if (sum < length) {
                  charCodeAtResult1 = arg0.charCodeAt(sum);
                  sum2 = charCodeAtResult;
                  sum1 = sum;
                  if (56320 === (64512 & charCodeAtResult1)) {
                    sum1 = sum + 1;
                    sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                  }
                }
                tmp12 = sum2;
                tmp11 = sum1;
                if (55296 <= sum2) {
                  tmp11 = sum1;
                  tmp16 = arr;
                  tmp17 = bound;
                  sum8 = sum4;
                  tmp19 = sum1;
                  tmp12 = sum2;
                }
                arr = tmp16;
                bound = tmp17;
                num30 = sum8;
                num31 = tmp19;
                arr2 = tmp16;
                num32 = sum8;
                if (tmp19 >= length) {
                  break;
                }
              }
            }
            tmp20 = arr;
            tmp21 = bound;
            if (sum4 + 4 > arr.length) {
              tmp22 = (((bound + 8) * (1 + (tmp11 / arg0.length) * 2)) >>> 3) << 3;
              _Uint8Array2 = Uint8Array;
              tmp23 = new.target;
              tmp24 = new.target;
              tmp25 = tmp22;
              uint8Array1 = new Uint8Array(tmp22);
              tmp26 = uint8Array1;
              result = uint8Array1.set(arr);
              tmp20 = uint8Array1;
              tmp21 = tmp22;
            }
            if (4294967168 & tmp12) {
              if (4294965248 & tmp12) {
                if (4294901760 & tmp12) {
                  tmp16 = tmp20;
                  tmp17 = tmp21;
                  sum8 = sum4;
                  tmp19 = tmp11;
                  if (!(4292870144 & tmp12)) {
                    sum3 = sum4 + 1;
                    tmp20[sum4] = ((tmp12 >>> 18) & 7) | 240;
                    sum4 = sum3 + 1;
                    tmp20[sum3] = ((tmp12 >>> 12) & 63) | 128;
                    sum5 = sum4 + 1;
                    tmp20[sum4] = ((tmp12 >>> 6) & 63) | 128;
                  }
                } else {
                  sum6 = sum4 + 1;
                  tmp20[sum4] = ((tmp12 >>> 12) & 15) | 224;
                  sum5 = sum6 + 1;
                  tmp20[sum6] = ((tmp12 >>> 6) & 63) | 128;
                }
              } else {
                sum5 = sum4 + 1;
                tmp20[sum4] = ((tmp12 >>> 6) & 31) | 192;
              }
              sum7 = sum5 + 1;
              tmp20[sum5] = (63 & tmp12) | 128;
              tmp32 = tmp20;
              tmp33 = tmp21;
              tmp34 = tmp11;
            } else {
              sum8 = sum4 + 1;
              tmp20[sum4] = tmp12;
              tmp16 = tmp20;
              tmp17 = tmp21;
              tmp19 = tmp11;
            }
          }
        }
        if (arr2.slice) {
          substr = require("../discord_app/index.native.tsx");
        } else {
          substr = require("../discord_app/index.native.tsx");
        }
        return substr;
      }
    }
  }
} else {
  const _Buffer = Buffer;
}
t = function t(buffer) {
  return Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength).toString("utf-8");
};
