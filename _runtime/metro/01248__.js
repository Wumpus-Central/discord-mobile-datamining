// _runtime/metro/01248__.js
let self;
if (typeof window !== "undefined") {
  self = window;
} else {
  self = this;
  let tmp6 = global;
  if (undefined !== global) {
    self = global;
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
    let subarrayResult;
    let num4;
    let num3;
    let tmp2 = num2 < arr.length;
    if (!tmp2) {
      let _String = String;
      let arr2 = items.push(fromCharCode.apply(null, uint16Array.subarray(0, num)));
      if (!tmp2) {
        break;
      } else {
        subarrayResult = arr.subarray(num2);
        num4 = 0;
        num3 = 0;
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
if (!self.TextEncoder) {
  class m {
    constructor() {}
    encode(str, arg1) {
      let obj = arg1;
      if (undefined === arg1) {
        obj = { stream: false };
      }
      if (obj.stream) {
        const _Error = Error;
        throw Error("Failed to encode: the 'stream' option is unsupported.");
      } else {
        let substr;
        const _Math = Math;
        let bound = Math.max(32, length + (length >>> 1) + 7);
        const _Uint8Array = Uint8Array;
        const self = this;
        const self2 = this;
        const uint8Array = new Uint8Array((bound >>> 3) << 3);
        let arr = uint8Array;
        let num30 = 0;
        let num31 = 0;
        let arr2 = uint8Array;
        let num32 = 0;
        if (0 < str.length) {
          while (true) {
            let tmp14;
            let tmp15;
            let sum7;
            let tmp17;
            let sum = num31 + 1;
            let charCodeAtResult = str.charCodeAt(num31);
            let tmp9 = sum;
            let tmp10 = charCodeAtResult;
            if (55296 <= charCodeAtResult) {
              tmp10 = charCodeAtResult;
              tmp9 = sum;
              if (56319 >= charCodeAtResult) {
                let sum2 = charCodeAtResult;
                let sum1 = sum;
                if (sum < length) {
                  let charCodeAtResult1 = str.charCodeAt(sum);
                  sum2 = charCodeAtResult;
                  sum1 = sum;
                  if (56320 === (64512 & charCodeAtResult1)) {
                    sum1 = sum + 1;
                    sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                  }
                }
                tmp10 = sum2;
                tmp9 = sum1;
                if (55296 <= sum2) {
                  tmp9 = sum1;
                  tmp14 = arr;
                  tmp15 = bound;
                  sum7 = num30;
                  tmp17 = sum1;
                  tmp10 = sum2;
                }
                arr = tmp14;
                bound = tmp15;
                num30 = sum7;
                num31 = tmp17;
                arr2 = tmp14;
                num32 = sum7;
                if (tmp17 >= length) {
                  break;
                }
              }
            }
            let tmp18 = arr;
            let tmp19 = bound;
            if (num30 + 4 > arr.length) {
              let tmp20 = (((bound + 8) * (1 + (tmp9 / str.length) * 2)) >>> 3) << 3;
              let _Uint8Array2 = Uint8Array;
              let self3 = this;
              let self4 = this;
              let uint8Array1 = new Uint8Array(tmp20);
              let result = uint8Array1.set(arr);
              tmp18 = uint8Array1;
              tmp19 = tmp20;
            }
            if (4294967168 & tmp10) {
              let sum5;
              if (4294965248 & tmp10) {
                if (4294901760 & tmp10) {
                  tmp14 = tmp18;
                  tmp15 = tmp19;
                  sum7 = num30;
                  tmp17 = tmp9;
                  if (!(4292870144 & tmp10)) {
                    let sum3 = num30 + 1;
                    tmp18[num30] = ((tmp10 >>> 18) & 7) | 240;
                    let sum4 = sum3 + 1;
                    tmp18[sum3] = ((tmp10 >>> 12) & 63) | 128;
                    sum5 = sum4 + 1;
                    tmp18[sum4] = ((tmp10 >>> 6) & 63) | 128;
                  }
                } else {
                  let sum6 = num30 + 1;
                  tmp18[num30] = ((tmp10 >>> 12) & 15) | 224;
                  sum5 = sum6 + 1;
                  tmp18[sum6] = ((tmp10 >>> 6) & 63) | 128;
                }
              } else {
                sum5 = num30 + 1;
                tmp18[num30] = ((tmp10 >>> 6) & 31) | 192;
              }
              sum7 = sum5 + 1;
              tmp18[sum5] = (63 & tmp10) | 128;
              tmp14 = tmp18;
              tmp15 = tmp19;
              tmp17 = tmp9;
            } else {
              sum7 = num30 + 1;
              tmp18[num30] = tmp10;
              tmp14 = tmp18;
              tmp15 = tmp19;
              tmp17 = tmp9;
            }
          }
        }
        if (arr2.slice) {
          substr = arr2.slice(0, num32);
        } else {
          substr = arr2.subarray(0, num32);
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
      const self = this;
      const self2 = this;
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
  const _Object = Object;
  let str = "encoding";
  Object.defineProperty(m.prototype, "encoding", { value: "utf-8" });
  const _Object2 = Object;
  Object.defineProperty(fn2.prototype, "encoding", { value: "utf-8" });
  const _Object3 = Object;
  Object.defineProperty(fn2.prototype, "fatal", { value: false });
  const _Object4 = Object;
  Object.defineProperty(fn2.prototype, "ignoreBOM", { value: false });
  const _Buffer = Buffer;
  if (typeof Buffer === "function") {
    class m {
      constructor() {}
      encode(str, arg1) {
        let obj = arg1;
        if (undefined === arg1) {
          obj = { stream: false };
        }
        if (obj.stream) {
          const _Error = Error;
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        } else {
          let substr;
          const _Math = Math;
          let bound = Math.max(32, length + (length >>> 1) + 7);
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          const uint8Array = new Uint8Array((bound >>> 3) << 3);
          let arr = uint8Array;
          let num30 = 0;
          let num31 = 0;
          let arr2 = uint8Array;
          let num32 = 0;
          if (0 < str.length) {
            while (true) {
              let tmp14;
              let tmp15;
              let sum7;
              let tmp17;
              let sum = num31 + 1;
              let charCodeAtResult = str.charCodeAt(num31);
              let tmp9 = sum;
              let tmp10 = charCodeAtResult;
              if (55296 <= charCodeAtResult) {
                tmp10 = charCodeAtResult;
                tmp9 = sum;
                if (56319 >= charCodeAtResult) {
                  let sum2 = charCodeAtResult;
                  let sum1 = sum;
                  if (sum < length) {
                    let charCodeAtResult1 = str.charCodeAt(sum);
                    sum2 = charCodeAtResult;
                    sum1 = sum;
                    if (56320 === (64512 & charCodeAtResult1)) {
                      sum1 = sum + 1;
                      sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                    }
                  }
                  tmp10 = sum2;
                  tmp9 = sum1;
                  if (55296 <= sum2) {
                    tmp9 = sum1;
                    tmp14 = arr;
                    tmp15 = bound;
                    sum7 = num30;
                    tmp17 = sum1;
                    tmp10 = sum2;
                  }
                  arr = tmp14;
                  bound = tmp15;
                  num30 = sum7;
                  num31 = tmp17;
                  arr2 = tmp14;
                  num32 = sum7;
                  if (tmp17 >= length) {
                    break;
                  }
                }
              }
              let tmp18 = arr;
              let tmp19 = bound;
              if (num30 + 4 > arr.length) {
                let tmp20 = (((bound + 8) * (1 + (tmp9 / str.length) * 2)) >>> 3) << 3;
                let _Uint8Array2 = Uint8Array;
                let self3 = this;
                let self4 = this;
                let uint8Array1 = new Uint8Array(tmp20);
                let result = uint8Array1.set(arr);
                tmp18 = uint8Array1;
                tmp19 = tmp20;
              }
              if (4294967168 & tmp10) {
                let sum5;
                if (4294965248 & tmp10) {
                  if (4294901760 & tmp10) {
                    tmp14 = tmp18;
                    tmp15 = tmp19;
                    sum7 = num30;
                    tmp17 = tmp9;
                    if (!(4292870144 & tmp10)) {
                      let sum3 = num30 + 1;
                      tmp18[num30] = ((tmp10 >>> 18) & 7) | 240;
                      let sum4 = sum3 + 1;
                      tmp18[sum3] = ((tmp10 >>> 12) & 63) | 128;
                      sum5 = sum4 + 1;
                      tmp18[sum4] = ((tmp10 >>> 6) & 63) | 128;
                    }
                  } else {
                    let sum6 = num30 + 1;
                    tmp18[num30] = ((tmp10 >>> 12) & 15) | 224;
                    sum5 = sum6 + 1;
                    tmp18[sum6] = ((tmp10 >>> 6) & 63) | 128;
                  }
                } else {
                  sum5 = num30 + 1;
                  tmp18[num30] = ((tmp10 >>> 6) & 31) | 192;
                }
                sum7 = sum5 + 1;
                tmp18[sum5] = (63 & tmp10) | 128;
                tmp14 = tmp18;
                tmp15 = tmp19;
                tmp17 = tmp9;
              } else {
                sum7 = num30 + 1;
                tmp18[num30] = tmp10;
                tmp14 = tmp18;
                tmp15 = tmp19;
                tmp17 = tmp9;
              }
            }
          }
          if (arr2.slice) {
            substr = arr2.slice(0, num32);
          } else {
            substr = arr2.subarray(0, num32);
          }
          return substr;
        }
      }
    }
    if (Buffer.from) {
      class m {
        constructor() {}
        encode(str, arg1) {
          let obj = arg1;
          if (undefined === arg1) {
            obj = { stream: false };
          }
          if (obj.stream) {
            const _Error = Error;
            throw Error("Failed to encode: the 'stream' option is unsupported.");
          } else {
            let substr;
            const _Math = Math;
            let bound = Math.max(32, length + (length >>> 1) + 7);
            const _Uint8Array = Uint8Array;
            const self = this;
            const self2 = this;
            const uint8Array = new Uint8Array((bound >>> 3) << 3);
            let arr = uint8Array;
            let num30 = 0;
            let num31 = 0;
            let arr2 = uint8Array;
            let num32 = 0;
            if (0 < str.length) {
              while (true) {
                let tmp14;
                let tmp15;
                let sum7;
                let tmp17;
                let sum = num31 + 1;
                let charCodeAtResult = str.charCodeAt(num31);
                let tmp9 = sum;
                let tmp10 = charCodeAtResult;
                if (55296 <= charCodeAtResult) {
                  tmp10 = charCodeAtResult;
                  tmp9 = sum;
                  if (56319 >= charCodeAtResult) {
                    let sum2 = charCodeAtResult;
                    let sum1 = sum;
                    if (sum < length) {
                      let charCodeAtResult1 = str.charCodeAt(sum);
                      sum2 = charCodeAtResult;
                      sum1 = sum;
                      if (56320 === (64512 & charCodeAtResult1)) {
                        sum1 = sum + 1;
                        sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                      }
                    }
                    tmp10 = sum2;
                    tmp9 = sum1;
                    if (55296 <= sum2) {
                      tmp9 = sum1;
                      tmp14 = arr;
                      tmp15 = bound;
                      sum7 = num30;
                      tmp17 = sum1;
                      tmp10 = sum2;
                    }
                    arr = tmp14;
                    bound = tmp15;
                    num30 = sum7;
                    num31 = tmp17;
                    arr2 = tmp14;
                    num32 = sum7;
                    if (tmp17 >= length) {
                      break;
                    }
                  }
                }
                let tmp18 = arr;
                let tmp19 = bound;
                if (num30 + 4 > arr.length) {
                  let tmp20 = (((bound + 8) * (1 + (tmp9 / str.length) * 2)) >>> 3) << 3;
                  let _Uint8Array2 = Uint8Array;
                  let self3 = this;
                  let self4 = this;
                  let uint8Array1 = new Uint8Array(tmp20);
                  let result = uint8Array1.set(arr);
                  tmp18 = uint8Array1;
                  tmp19 = tmp20;
                }
                if (4294967168 & tmp10) {
                  let sum5;
                  if (4294965248 & tmp10) {
                    if (4294901760 & tmp10) {
                      tmp14 = tmp18;
                      tmp15 = tmp19;
                      sum7 = num30;
                      tmp17 = tmp9;
                      if (!(4292870144 & tmp10)) {
                        let sum3 = num30 + 1;
                        tmp18[num30] = ((tmp10 >>> 18) & 7) | 240;
                        let sum4 = sum3 + 1;
                        tmp18[sum3] = ((tmp10 >>> 12) & 63) | 128;
                        sum5 = sum4 + 1;
                        tmp18[sum4] = ((tmp10 >>> 6) & 63) | 128;
                      }
                    } else {
                      let sum6 = num30 + 1;
                      tmp18[num30] = ((tmp10 >>> 12) & 15) | 224;
                      sum5 = sum6 + 1;
                      tmp18[sum6] = ((tmp10 >>> 6) & 63) | 128;
                    }
                  } else {
                    sum5 = num30 + 1;
                    tmp18[num30] = ((tmp10 >>> 6) & 31) | 192;
                  }
                  sum7 = sum5 + 1;
                  tmp18[sum5] = (63 & tmp10) | 128;
                  tmp14 = tmp18;
                  tmp15 = tmp19;
                  tmp17 = tmp9;
                } else {
                  sum7 = num30 + 1;
                  tmp18[num30] = tmp10;
                  tmp14 = tmp18;
                  tmp15 = tmp19;
                  tmp17 = tmp9;
                }
              }
            }
            if (arr2.slice) {
              substr = arr2.slice(0, num32);
            } else {
              substr = arr2.subarray(0, num32);
            }
            return substr;
          }
        }
      }
    }
    class fn2 {
      decode(buffer, arg1) {
        let obj = arg1;
        if (undefined === arg1) {
          obj = { stream: false };
        }
        if (obj.stream) {
          const _Error = Error;
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        } else {
          const _Uint8Array = Uint8Array;
          let tmp2 = buffer;
          if (!(buffer instanceof Uint8Array)) {
            let _Uint8Array21;
            const _ArrayBuffer = ArrayBuffer;
            const _Uint8Array2 = Uint8Array;
            if (buffer.buffer instanceof ArrayBuffer) {
              const self3 = this;
              const self4 = this;
              _Uint8Array21 = new _Uint8Array2(buffer.buffer);
            } else {
              const self = this;
              const self2 = this;
              _Uint8Array21 = new _Uint8Array2(buffer);
            }
            tmp2 = _Uint8Array21;
          }
          return fn(tmp2);
        }
      }
    }
    self.TextEncoder = m;
    self.TextDecoder = fn2;
  }
  const _Blob = Blob;
  let tmp5 = typeof Blob === "function";
  if (typeof Blob === "function") {
    class m {
      constructor() {}
      encode(str, arg1) {
        let obj = arg1;
        if (undefined === arg1) {
          obj = { stream: false };
        }
        if (obj.stream) {
          const _Error = Error;
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        } else {
          let substr;
          const _Math = Math;
          let bound = Math.max(32, length + (length >>> 1) + 7);
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          const uint8Array = new Uint8Array((bound >>> 3) << 3);
          let arr = uint8Array;
          let num30 = 0;
          let num31 = 0;
          let arr2 = uint8Array;
          let num32 = 0;
          if (0 < str.length) {
            while (true) {
              let tmp14;
              let tmp15;
              let sum7;
              let tmp17;
              let sum = num31 + 1;
              let charCodeAtResult = str.charCodeAt(num31);
              let tmp9 = sum;
              let tmp10 = charCodeAtResult;
              if (55296 <= charCodeAtResult) {
                tmp10 = charCodeAtResult;
                tmp9 = sum;
                if (56319 >= charCodeAtResult) {
                  let sum2 = charCodeAtResult;
                  let sum1 = sum;
                  if (sum < length) {
                    let charCodeAtResult1 = str.charCodeAt(sum);
                    sum2 = charCodeAtResult;
                    sum1 = sum;
                    if (56320 === (64512 & charCodeAtResult1)) {
                      sum1 = sum + 1;
                      sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                    }
                  }
                  tmp10 = sum2;
                  tmp9 = sum1;
                  if (55296 <= sum2) {
                    tmp9 = sum1;
                    tmp14 = arr;
                    tmp15 = bound;
                    sum7 = num30;
                    tmp17 = sum1;
                    tmp10 = sum2;
                  }
                  arr = tmp14;
                  bound = tmp15;
                  num30 = sum7;
                  num31 = tmp17;
                  arr2 = tmp14;
                  num32 = sum7;
                  if (tmp17 >= length) {
                    break;
                  }
                }
              }
              let tmp18 = arr;
              let tmp19 = bound;
              if (num30 + 4 > arr.length) {
                let tmp20 = (((bound + 8) * (1 + (tmp9 / str.length) * 2)) >>> 3) << 3;
                let _Uint8Array2 = Uint8Array;
                let self3 = this;
                let self4 = this;
                let uint8Array1 = new Uint8Array(tmp20);
                let result = uint8Array1.set(arr);
                tmp18 = uint8Array1;
                tmp19 = tmp20;
              }
              if (4294967168 & tmp10) {
                let sum5;
                if (4294965248 & tmp10) {
                  if (4294901760 & tmp10) {
                    tmp14 = tmp18;
                    tmp15 = tmp19;
                    sum7 = num30;
                    tmp17 = tmp9;
                    if (!(4292870144 & tmp10)) {
                      let sum3 = num30 + 1;
                      tmp18[num30] = ((tmp10 >>> 18) & 7) | 240;
                      let sum4 = sum3 + 1;
                      tmp18[sum3] = ((tmp10 >>> 12) & 63) | 128;
                      sum5 = sum4 + 1;
                      tmp18[sum4] = ((tmp10 >>> 6) & 63) | 128;
                    }
                  } else {
                    let sum6 = num30 + 1;
                    tmp18[num30] = ((tmp10 >>> 12) & 15) | 224;
                    sum5 = sum6 + 1;
                    tmp18[sum6] = ((tmp10 >>> 6) & 63) | 128;
                  }
                } else {
                  sum5 = num30 + 1;
                  tmp18[num30] = ((tmp10 >>> 6) & 31) | 192;
                }
                sum7 = sum5 + 1;
                tmp18[sum5] = (63 & tmp10) | 128;
                tmp14 = tmp18;
                tmp15 = tmp19;
                tmp17 = tmp9;
              } else {
                sum7 = num30 + 1;
                tmp18[num30] = tmp10;
                tmp14 = tmp18;
                tmp15 = tmp19;
                tmp17 = tmp9;
              }
            }
          }
          if (arr2.slice) {
            substr = arr2.slice(0, num32);
          } else {
            substr = arr2.subarray(0, num32);
          }
          return substr;
        }
      }
    }
    tmp5 = typeof URL === "function";
  }
  if (tmp5) {
    class m {
      constructor() {}
      encode(str, arg1) {
        let obj = arg1;
        if (undefined === arg1) {
          obj = { stream: false };
        }
        if (obj.stream) {
          const _Error = Error;
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        } else {
          let substr;
          const _Math = Math;
          let bound = Math.max(32, length + (length >>> 1) + 7);
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          const uint8Array = new Uint8Array((bound >>> 3) << 3);
          let arr = uint8Array;
          let num30 = 0;
          let num31 = 0;
          let arr2 = uint8Array;
          let num32 = 0;
          if (0 < str.length) {
            while (true) {
              let tmp14;
              let tmp15;
              let sum7;
              let tmp17;
              let sum = num31 + 1;
              let charCodeAtResult = str.charCodeAt(num31);
              let tmp9 = sum;
              let tmp10 = charCodeAtResult;
              if (55296 <= charCodeAtResult) {
                tmp10 = charCodeAtResult;
                tmp9 = sum;
                if (56319 >= charCodeAtResult) {
                  let sum2 = charCodeAtResult;
                  let sum1 = sum;
                  if (sum < length) {
                    let charCodeAtResult1 = str.charCodeAt(sum);
                    sum2 = charCodeAtResult;
                    sum1 = sum;
                    if (56320 === (64512 & charCodeAtResult1)) {
                      sum1 = sum + 1;
                      sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                    }
                  }
                  tmp10 = sum2;
                  tmp9 = sum1;
                  if (55296 <= sum2) {
                    tmp9 = sum1;
                    tmp14 = arr;
                    tmp15 = bound;
                    sum7 = num30;
                    tmp17 = sum1;
                    tmp10 = sum2;
                  }
                  arr = tmp14;
                  bound = tmp15;
                  num30 = sum7;
                  num31 = tmp17;
                  arr2 = tmp14;
                  num32 = sum7;
                  if (tmp17 >= length) {
                    break;
                  }
                }
              }
              let tmp18 = arr;
              let tmp19 = bound;
              if (num30 + 4 > arr.length) {
                let tmp20 = (((bound + 8) * (1 + (tmp9 / str.length) * 2)) >>> 3) << 3;
                let _Uint8Array2 = Uint8Array;
                let self3 = this;
                let self4 = this;
                let uint8Array1 = new Uint8Array(tmp20);
                let result = uint8Array1.set(arr);
                tmp18 = uint8Array1;
                tmp19 = tmp20;
              }
              if (4294967168 & tmp10) {
                let sum5;
                if (4294965248 & tmp10) {
                  if (4294901760 & tmp10) {
                    tmp14 = tmp18;
                    tmp15 = tmp19;
                    sum7 = num30;
                    tmp17 = tmp9;
                    if (!(4292870144 & tmp10)) {
                      let sum3 = num30 + 1;
                      tmp18[num30] = ((tmp10 >>> 18) & 7) | 240;
                      let sum4 = sum3 + 1;
                      tmp18[sum3] = ((tmp10 >>> 12) & 63) | 128;
                      sum5 = sum4 + 1;
                      tmp18[sum4] = ((tmp10 >>> 6) & 63) | 128;
                    }
                  } else {
                    let sum6 = num30 + 1;
                    tmp18[num30] = ((tmp10 >>> 12) & 15) | 224;
                    sum5 = sum6 + 1;
                    tmp18[sum6] = ((tmp10 >>> 6) & 63) | 128;
                  }
                } else {
                  sum5 = num30 + 1;
                  tmp18[num30] = ((tmp10 >>> 6) & 31) | 192;
                }
                sum7 = sum5 + 1;
                tmp18[sum5] = (63 & tmp10) | 128;
                tmp14 = tmp18;
                tmp15 = tmp19;
                tmp17 = tmp9;
              } else {
                sum7 = num30 + 1;
                tmp18[num30] = tmp10;
                tmp14 = tmp18;
                tmp15 = tmp19;
                tmp17 = tmp9;
              }
            }
          }
          if (arr2.slice) {
            substr = arr2.slice(0, num32);
          } else {
            substr = arr2.subarray(0, num32);
          }
          return substr;
        }
      }
    }
    tmp5 = typeof URL.createObjectURL === "function";
  }
  if (tmp5) {
    class m {
      constructor() {}
      encode(str, arg1) {
        let obj = arg1;
        if (undefined === arg1) {
          obj = { stream: false };
        }
        if (obj.stream) {
          const _Error = Error;
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        } else {
          let substr;
          const _Math = Math;
          let bound = Math.max(32, length + (length >>> 1) + 7);
          const _Uint8Array = Uint8Array;
          const self = this;
          const self2 = this;
          const uint8Array = new Uint8Array((bound >>> 3) << 3);
          let arr = uint8Array;
          let num30 = 0;
          let num31 = 0;
          let arr2 = uint8Array;
          let num32 = 0;
          if (0 < str.length) {
            while (true) {
              let tmp14;
              let tmp15;
              let sum7;
              let tmp17;
              let sum = num31 + 1;
              let charCodeAtResult = str.charCodeAt(num31);
              let tmp9 = sum;
              let tmp10 = charCodeAtResult;
              if (55296 <= charCodeAtResult) {
                tmp10 = charCodeAtResult;
                tmp9 = sum;
                if (56319 >= charCodeAtResult) {
                  let sum2 = charCodeAtResult;
                  let sum1 = sum;
                  if (sum < length) {
                    let charCodeAtResult1 = str.charCodeAt(sum);
                    sum2 = charCodeAtResult;
                    sum1 = sum;
                    if (56320 === (64512 & charCodeAtResult1)) {
                      sum1 = sum + 1;
                      sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                    }
                  }
                  tmp10 = sum2;
                  tmp9 = sum1;
                  if (55296 <= sum2) {
                    tmp9 = sum1;
                    tmp14 = arr;
                    tmp15 = bound;
                    sum7 = num30;
                    tmp17 = sum1;
                    tmp10 = sum2;
                  }
                  arr = tmp14;
                  bound = tmp15;
                  num30 = sum7;
                  num31 = tmp17;
                  arr2 = tmp14;
                  num32 = sum7;
                  if (tmp17 >= length) {
                    break;
                  }
                }
              }
              let tmp18 = arr;
              let tmp19 = bound;
              if (num30 + 4 > arr.length) {
                let tmp20 = (((bound + 8) * (1 + (tmp9 / str.length) * 2)) >>> 3) << 3;
                let _Uint8Array2 = Uint8Array;
                let self3 = this;
                let self4 = this;
                let uint8Array1 = new Uint8Array(tmp20);
                let result = uint8Array1.set(arr);
                tmp18 = uint8Array1;
                tmp19 = tmp20;
              }
              if (4294967168 & tmp10) {
                let sum5;
                if (4294965248 & tmp10) {
                  if (4294901760 & tmp10) {
                    tmp14 = tmp18;
                    tmp15 = tmp19;
                    sum7 = num30;
                    tmp17 = tmp9;
                    if (!(4292870144 & tmp10)) {
                      let sum3 = num30 + 1;
                      tmp18[num30] = ((tmp10 >>> 18) & 7) | 240;
                      let sum4 = sum3 + 1;
                      tmp18[sum3] = ((tmp10 >>> 12) & 63) | 128;
                      sum5 = sum4 + 1;
                      tmp18[sum4] = ((tmp10 >>> 6) & 63) | 128;
                    }
                  } else {
                    let sum6 = num30 + 1;
                    tmp18[num30] = ((tmp10 >>> 12) & 15) | 224;
                    sum5 = sum6 + 1;
                    tmp18[sum6] = ((tmp10 >>> 6) & 63) | 128;
                  }
                } else {
                  sum5 = num30 + 1;
                  tmp18[num30] = ((tmp10 >>> 6) & 31) | 192;
                }
                sum7 = sum5 + 1;
                tmp18[sum5] = (63 & tmp10) | 128;
                tmp14 = tmp18;
                tmp15 = tmp19;
                tmp17 = tmp9;
              } else {
                sum7 = num30 + 1;
                tmp18[num30] = tmp10;
                tmp14 = tmp18;
                tmp15 = tmp19;
                tmp17 = tmp9;
              }
            }
          }
          if (arr2.slice) {
            substr = arr2.slice(0, num32);
          } else {
            substr = arr2.subarray(0, num32);
          }
          return substr;
        }
      }
    }
  }
} else {
  class m {
    constructor() {}
    encode(str, arg1) {
      let obj = arg1;
      if (undefined === arg1) {
        obj = { stream: false };
      }
      if (obj.stream) {
        const _Error = Error;
        throw Error("Failed to encode: the 'stream' option is unsupported.");
      } else {
        let substr;
        const _Math = Math;
        let bound = Math.max(32, length + (length >>> 1) + 7);
        const _Uint8Array = Uint8Array;
        const self = this;
        const self2 = this;
        const uint8Array = new Uint8Array((bound >>> 3) << 3);
        let arr = uint8Array;
        let num30 = 0;
        let num31 = 0;
        let arr2 = uint8Array;
        let num32 = 0;
        if (0 < str.length) {
          while (true) {
            let tmp14;
            let tmp15;
            let sum7;
            let tmp17;
            let sum = num31 + 1;
            let charCodeAtResult = str.charCodeAt(num31);
            let tmp9 = sum;
            let tmp10 = charCodeAtResult;
            if (55296 <= charCodeAtResult) {
              tmp10 = charCodeAtResult;
              tmp9 = sum;
              if (56319 >= charCodeAtResult) {
                let sum2 = charCodeAtResult;
                let sum1 = sum;
                if (sum < length) {
                  let charCodeAtResult1 = str.charCodeAt(sum);
                  sum2 = charCodeAtResult;
                  sum1 = sum;
                  if (56320 === (64512 & charCodeAtResult1)) {
                    sum1 = sum + 1;
                    sum2 = ((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536;
                  }
                }
                tmp10 = sum2;
                tmp9 = sum1;
                if (55296 <= sum2) {
                  tmp9 = sum1;
                  tmp14 = arr;
                  tmp15 = bound;
                  sum7 = num30;
                  tmp17 = sum1;
                  tmp10 = sum2;
                }
                arr = tmp14;
                bound = tmp15;
                num30 = sum7;
                num31 = tmp17;
                arr2 = tmp14;
                num32 = sum7;
                if (tmp17 >= length) {
                  break;
                }
              }
            }
            let tmp18 = arr;
            let tmp19 = bound;
            if (num30 + 4 > arr.length) {
              let tmp20 = (((bound + 8) * (1 + (tmp9 / str.length) * 2)) >>> 3) << 3;
              let _Uint8Array2 = Uint8Array;
              let self3 = this;
              let self4 = this;
              let uint8Array1 = new Uint8Array(tmp20);
              let result = uint8Array1.set(arr);
              tmp18 = uint8Array1;
              tmp19 = tmp20;
            }
            if (4294967168 & tmp10) {
              let sum5;
              if (4294965248 & tmp10) {
                if (4294901760 & tmp10) {
                  tmp14 = tmp18;
                  tmp15 = tmp19;
                  sum7 = num30;
                  tmp17 = tmp9;
                  if (!(4292870144 & tmp10)) {
                    let sum3 = num30 + 1;
                    tmp18[num30] = ((tmp10 >>> 18) & 7) | 240;
                    let sum4 = sum3 + 1;
                    tmp18[sum3] = ((tmp10 >>> 12) & 63) | 128;
                    sum5 = sum4 + 1;
                    tmp18[sum4] = ((tmp10 >>> 6) & 63) | 128;
                  }
                } else {
                  let sum6 = num30 + 1;
                  tmp18[num30] = ((tmp10 >>> 12) & 15) | 224;
                  sum5 = sum6 + 1;
                  tmp18[sum6] = ((tmp10 >>> 6) & 63) | 128;
                }
              } else {
                sum5 = num30 + 1;
                tmp18[num30] = ((tmp10 >>> 6) & 31) | 192;
              }
              sum7 = sum5 + 1;
              tmp18[sum5] = (63 & tmp10) | 128;
              tmp14 = tmp18;
              tmp15 = tmp19;
              tmp17 = tmp9;
            } else {
              sum7 = num30 + 1;
              tmp18[num30] = tmp10;
              tmp14 = tmp18;
              tmp15 = tmp19;
              tmp17 = tmp9;
            }
          }
        }
        if (arr2.slice) {
          substr = arr2.slice(0, num32);
        } else {
          substr = arr2.subarray(0, num32);
        }
        return substr;
      }
    }
  }
}
