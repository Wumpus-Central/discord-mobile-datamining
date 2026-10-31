// === Module 12985: StrmOpt ===

// Module 12985 (StrmOpt)
const require = globalThis.__r;

let num3;
let num4;
let num5;
function StrmOpt(fn, arg1) {
  let tmp = arg1;
  let obj = fn;
  if (typeof fn === "function") {
    obj = {};
    tmp = fn;
  }
  this.ondata = tmp;
  return obj;
}
function deflate(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp6);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [bDflt];
    if (typeof cbify === "function") {
      closure_0 = tmp;
      const items1 = [buffer, obj];
      if (obj.consume) {
        const items2 = [buffer.buffer];
        let items3 = items2;
      } else {
        items3 = [];
      }
      wrkr(items, (arg0) => {
        const tmp = deflateSync(arg0.data[0], arg0.data[1]);
        if (typeof pbf === "function") {
          items = [tmp.buffer];
          return globalThis.postMessage(tmp, items);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 0, (arg0, arg1) => {
        obj2.terminate();
        closure_0(arg0, arg1);
      }).postMessage(items1, items3);
      return () => {
        obj2.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function deflateSync(arr7, arg1) {
  let obj = arg1;
  if (!arg1) {
    obj = {};
  }
  if (typeof dopt === "function") {
    const obj2 = { l: 1 };
    let arr = arr7;
    if (obj.dictionary) {
      const dictionary = obj.dictionary;
      const subarrayResult = dictionary.subarray(-32768);
      const obj3 = new Uint8Array(subarrayResult.length + arr7.length);
      const result = obj3.set(subarrayResult);
      const result1 = obj3.set(arr7, subarrayResult.length);
      obj2.w = subarrayResult.length;
      arr = obj3;
    }
    let num2 = 6;
    if (null != obj.level) {
      num2 = obj.level;
    }
    if (null == obj.mem) {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const _Math4 = Math;
      let rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
    } else {
      rounded = 12 + obj.mem;
    }
    return dflt(arr, num2, rounded, 0, 0, obj2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function inflate(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp6);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [bInflt];
    if (typeof cbify === "function") {
      closure_0 = tmp;
      const items1 = [buffer, obj];
      if (obj.consume) {
        const items2 = [buffer.buffer];
        let items3 = items2;
      } else {
        items3 = [];
      }
      wrkr(items, (arg0) => {
        const first = arg0.data[0];
        if (typeof gopt === "function") {
          let tmp4 = tmp3;
          if (tmp3) {
            let size = tmp3.size;
            if (size) {
              size = new obj2(tmp3.size);
            }
            const obj = { out: size, dictionary: tmp3.dictionary };
            tmp4 = obj;
          }
          let out = tmp4;
          if (tmp4) {
            out = tmp4.out;
          }
          let dictionary = tmp4;
          if (tmp4) {
            dictionary = tmp4.dictionary;
          }
          const tmp8Result = inflt(first, { i: 2 }, out, dictionary);
          if (typeof tmp === "function") {
            items = [tmp8Result.buffer];
            return globalThis.postMessage(tmp8Result, items);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 1, (arg0, arg1) => {
        obj2.terminate();
        closure_0(arg0, arg1);
      }).postMessage(items1, items3);
      return () => {
        obj2.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function inflateSync(subarrayResult, out) {
  if (out) {
    out = out.out;
  }
  let dictionary = out;
  if (out) {
    dictionary = out.dictionary;
  }
  return inflt(subarrayResult, { i: 2 }, out, dictionary);
}
function gzipSync(arr, filename) {
  let obj = filename;
  if (!filename) {
    obj = {};
  }
  if (typeof crc === "function") {
    c0 = -1;
    const obj2 = {
      p(arg0) {
          let length;
          let tmp = closure_0;
          let num = 0;
          let tmp2 = closure_0;
          if (0 < arg0.length) {
            do {
              tmp = closure_2_38[255 & tmp ^ arg0[num]] ^ tmp >>> 8;
              num = num + 1;
              tmp2 = tmp;
              length = arg0.length;
            } while (num < length);
          }
          closure_0 = tmp2;
        },
      d() {
          return ~closure_0;
        }
    };
    let length = arr.length;
    obj2.p(arr);
    if (typeof gzhl === "function") {
      let num2 = 0;
      if (obj.filename) {
        num2 = obj.filename.length + 1;
      }
      if (typeof tmp3 === "function") {
        const obj3 = { l: 1 };
        if (obj.dictionary) {
          const dictionary = obj.dictionary;
          const subarrayResult = dictionary.subarray(-32768);
          const obj4 = new Uint8Array(subarrayResult.length + arr.length);
          const result = obj4.set(subarrayResult);
          const result1 = obj4.set(arr, subarrayResult.length);
          obj3.w = subarrayResult.length;
          arr = obj4;
        }
        let num5 = 6;
        if (null != obj.level) {
          num5 = obj.level;
        }
        if (null == obj.mem) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const _Math4 = Math;
          let rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
        } else {
          rounded = 12 + obj.mem;
        }
        const tmp11Result = dflt(arr, num5, rounded, 10 + num2, 8, obj3);
        gzh(tmp11Result, obj);
        let diff = length2 - 8;
        let dResult = obj2.d();
        if (typeof wbytes === "function") {
          while (dResult) {
            tmp11Result[diff] = dResult;
            dResult = dResult >>> 8;
            diff = diff + 1;
          }
          let diff1 = length2 - 4;
          if (typeof wbytes === "function") {
            while (length) {
              tmp11Result[diff1] = length;
              length = length >>> 8;
              diff1 = diff1 + 1;
            }
            return tmp11Result;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function gunzip(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp6);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [
      bInflt,
      guze,
      () => {
          items = [gunzipSync];
          return items;
        }
    ];
    if (typeof cbify === "function") {
      closure_0 = tmp;
      const items1 = [buffer, obj];
      if (obj.consume) {
        const items2 = [buffer.buffer];
        let items3 = items2;
      } else {
        items3 = [];
      }
      wrkr(items, (arg0) => {
        const tmp = gunzipSync(arg0.data[0], arg0.data[1]);
        if (typeof pbf === "function") {
          items = [tmp.buffer];
          return globalThis.postMessage(tmp, items);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 3, (arg0, arg1) => {
        obj2.terminate();
        closure_0(arg0, arg1);
      }).postMessage(items1, items3);
      return () => {
        obj2.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function gunzipSync(subarray, out) {
  const tmp = gzs(subarray);
  if (tmp + 8 > subarray.length) {
    if (typeof err === "function") {
      const _Error = Error;
      const error = new Error("invalid gzip data");
      error.code = 6;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp9);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const subarrayResult = subarray.subarray(tmp, -8);
    if (out) {
      out = out.out;
    }
    if (!out) {
      if (typeof gzl === "function") {
        out = new tmp2((subarray[length - 4] | subarray[length - 3] << 8 | subarray[length - 2] << 16 | subarray[length - 1] << 24) >>> 0);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let dictionary = out;
    if (out) {
      dictionary = out.dictionary;
    }
    return inflt(subarrayResult, { i: 2 }, out, dictionary);
  }
}
function zlibSync(arr, level) {
  let obj = level;
  if (!level) {
    obj = {};
  }
  if (typeof adler === "function") {
    c0 = 1;
    c1 = 0;
    const obj2 = {
      p(arg0) {
          let tmp12;
          let sum4 = result1;
          let tmp4 = result1;
          let tmp5 = sum3;
          let num = 0;
          if (0 !== (arg0.length | 0)) {
            do {
              let _Math = Math;
              let bound = Math.min(num + 2655, tmp3);
              let sum2 = num;
              let sum1 = sum4;
              let tmp9 = sum3;
              let tmp10 = sum4;
              let tmp11 = sum3;
              tmp12 = num;
              if (num < bound) {
                do {
                  let sum = tmp9 + arg0[sum2];
                  sum1 = sum1 + sum;
                  sum2 = sum2 + 1;
                  tmp9 = sum;
                  tmp10 = sum1;
                  tmp11 = sum;
                  tmp12 = sum2;
                } while (sum2 < bound);
              }
              sum3 = (65535 & tmp11) + 15 * (tmp11 >> 16);
              sum4 = (65535 & tmp10) + 15 * (tmp10 >> 16);
              num = tmp12;
              tmp4 = sum4;
              tmp5 = sum3;
            } while (tmp12 !== tmp3);
          }
          sum3 = tmp5;
          result1 = tmp4;
        },
      d() {
          const result = sum3 % 65521;
          sum3 = result;
          result1 = result1 % 65521;
          return (255 & result) << 24 | (65280 & result) << 8 | (255 & result1) << 8 | result1 >> 8;
        }
    };
    obj2.p(arr);
    let num3 = 2;
    if (obj.dictionary) {
      num3 = 6;
    }
    if (typeof dopt === "function") {
      const obj3 = { l: 1 };
      if (obj.dictionary) {
        const dictionary = obj.dictionary;
        const subarrayResult = dictionary.subarray(-32768);
        const obj4 = new Uint8Array(subarrayResult.length + arr.length);
        const result = obj4.set(subarrayResult);
        const result1 = obj4.set(arr, subarrayResult.length);
        obj3.w = subarrayResult.length;
        arr = obj4;
      }
      let num5 = 6;
      if (null != obj.level) {
        num5 = obj.level;
      }
      if (null == obj.mem) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const _Math4 = Math;
        let rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
      } else {
        rounded = 12 + obj.mem;
      }
      const tmp10Result = dflt(arr, num5, rounded, num3, 4, obj3);
      zlh(tmp10Result, obj);
      let diff = tmp10Result.length - 4;
      let dResult = obj2.d();
      if (typeof wbytes === "function") {
        while (dResult) {
          tmp10Result[diff] = dResult;
          dResult = dResult >>> 8;
          diff = diff + 1;
        }
        return tmp10Result;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function unzlib(buffer, arg1, arg2) {
  let tmp = arg2;
  let obj = arg1;
  if (!arg2) {
    obj = {};
    tmp = arg1;
  }
  if (typeof tmp !== "function") {
    if (typeof err === "function") {
      const _Error = Error;
      const error = new Error(items[7]);
      error.code = 7;
      const _Error2 = Error;
      if (Error.captureStackTrace) {
        const _Error3 = Error;
        Error.captureStackTrace(error, tmp6);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    items = [
      bInflt,
      zule,
      () => {
          items = [unzlibSync];
          return items;
        }
    ];
    if (typeof cbify === "function") {
      closure_0 = tmp;
      const items1 = [buffer, obj];
      if (obj.consume) {
        const items2 = [buffer.buffer];
        let items3 = items2;
      } else {
        items3 = [];
      }
      wrkr(items, (arg0) => {
        const first = arg0.data[0];
        if (typeof gopt === "function") {
          let tmp3 = tmp2;
          if (tmp2) {
            let size = tmp2.size;
            if (size) {
              size = new obj2(tmp2.size);
            }
            const obj = { out: size, dictionary: tmp2.dictionary };
            tmp3 = obj;
          }
          let dictionary = tmp3;
          if (tmp3) {
            dictionary = tmp3.dictionary;
          }
          const subarrayResult = first.subarray(zls(first, dictionary), -4);
          let out = tmp3;
          if (tmp3) {
            out = tmp3.out;
          }
          let dictionary2 = tmp3;
          if (tmp3) {
            dictionary2 = tmp3.dictionary;
          }
          const tmp7Result = inflt(subarrayResult, { i: 2 }, out, dictionary2);
          if (typeof tmp === "function") {
            items = [tmp7Result.buffer];
            return globalThis.postMessage(tmp7Result, items);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 5, (arg0, arg1) => {
        obj2.terminate();
        closure_0(arg0, arg1);
      }).postMessage(items1, items3);
      return () => {
        obj2.terminate();
      };
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function unzlibSync(subarray, dictionary) {
  if (dictionary) {
    dictionary = dictionary.dictionary;
  }
  let out = dictionary;
  if (dictionary) {
    out = dictionary.out;
  }
  let dictionary2 = dictionary;
  if (dictionary) {
    dictionary2 = dictionary.dictionary;
  }
  return inflt(subarray.subarray(zls(subarray, dictionary), -4), { i: 2 }, out, dictionary2);
}
function strToU8(arr2, arg1) {
  let length2;
  if (arg1) {
    const tmp37 = new Uint8Array(arr2.length);
    let num22 = 0;
    if (0 < arr2.length) {
      do {
        tmp37[num22] = arr2.charCodeAt(num22);
        num22 = num22 + 1;
        length2 = arr2.length;
      } while (num22 < length2);
    }
    return tmp37;
  } else {
    const encoder = textEncoder;
    if (textEncoder) {
      return encoder.encode(arr2);
    } else {
      const tmp4 = new Uint8Array(arr2.length + (arr2.length >> 1));
      let tmp5 = tmp4;
      let num19 = 0;
      let arr = tmp4;
      let num20 = 0;
      let num21 = 0;
      arr2 = tmp4;
      if (0 < arr2.length) {
        while (true) {
          let tmp7 = tmp5;
          let tmp10 = arr;
          if (num19 + 5 > arr.length) {
            let tmp12 = new.target;
            let tmp13 = new.target;
            let obj = new Uint8Array(num19 + 8 + (length - num20 << 1));
            let result = obj.set(arr);
            tmp7 = obj;
            tmp10 = obj;
          }
          let charCodeAtResult = arr2.charCodeAt(num20);
          if (charCodeAtResult >= 128) {
            if (!arg1) {
              if (charCodeAtResult < 2048) {
                let sum = num19 + 1;
                tmp7[num19] = 192 | charCodeAtResult >> 6;
                let sum1 = sum + 1;
                tmp7[sum] = 128 | 63 & charCodeAtResult;
                let tmp20 = num20;
              } else {
                if (charCodeAtResult > 55295) {
                  if (charCodeAtResult < 57344) {
                    let sum2 = num20 + 1;
                    let tmp21 = 1047552 & charCodeAtResult;
                    let tmp23 = 65536 + tmp21 | 1023 & arr2.charCodeAt(sum2);
                    let sum3 = num19 + 1;
                    tmp7[num19] = 240 | tmp23 >> 18;
                    let sum4 = sum3 + 1;
                    tmp7[sum3] = 128 | tmp23 >> 12 & 63;
                    let sum5 = sum4 + 1;
                    tmp7[sum4] = 128 | tmp23 >> 6 & 63;
                    sum1 = sum5 + 1;
                    tmp7[sum5] = 128 | 63 & tmp23;
                    tmp20 = sum2;
                  }
                }
                let sum6 = num19 + 1;
                tmp7[num19] = 224 | charCodeAtResult >> 12;
                let sum7 = sum6 + 1;
                tmp7[sum6] = 128 | charCodeAtResult >> 6 & 63;
                sum1 = sum7 + 1;
                tmp7[sum7] = 128 | 63 & charCodeAtResult;
                tmp20 = num20;
              }
            }
            num20 = tmp20 + 1;
            num19 = sum1;
            tmp5 = tmp7;
            arr = tmp10;
            num21 = sum1;
            arr2 = tmp10;
            if (num20 >= length) {
              break;
            }
          }
          sum1 = num19 + 1;
          tmp7[num19] = charCodeAtResult;
          tmp20 = num20;
        }
      }
      if (typeof slc === "function") {
        if (num21 > arr2.length) {
          num21 = arr2.length;
        }
        const obj2 = new Uint8Array(num21);
        const result1 = obj2.set(arr2.subarray(0, num21));
        return obj2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
}
function strFromU8(subarray, arg1) {
  let length;
  let sum;
  if (arg1) {
    let num3 = 0;
    let str = "";
    let str2 = "";
    if (0 < subarray.length) {
      do {
        let _String = String;
        sum = num3 + 16384;
        str = `${tmp14(null, subarray.subarray(num3, tmp15))}`;
        str2 = str;
        num3 = sum;
        length = subarray.length;
      } while (sum < length);
    }
    return str2;
  } else if (decoder) {
    return decoder.decode(subarray);
  } else {
    if (tmp2.r.length) {
      if (typeof err === "function") {
        const _Error = Error;
        const error = new Error(items[8]);
        error.code = 8;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error, tmp4);
        }
        throw error;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      return tmp3;
    }
    tmp2 = dutf8(subarray);
  }
}
let closure_0 = {};
let _Uint8Array = Uint8Array;
const uint8Array = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
let uint8Array1 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
let uint8Array2 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
function freb(uint8Array, arg1) {
  let sum1;
  let tmp = arg1;
  const b = new Uint16Array(31);
  let num = 0;
  do {
    let sum = tmp + (1 << uint8Array[num - 1]);
    b[num] = sum;
    num = num + 1;
    tmp = sum;
  } while (num < 31);
  const r = new Int32Array(b[30]);
  let num2 = 1;
  do {
    let sum2 = b[num2];
    sum1 = num2 + 1;
    if (sum2 < b[sum1]) {
      do {
        r[sum2] = sum2 - b[num2] << 5 | num2;
        sum2 = sum2 + 1;
        tmp8 = b[sum1];
      } while (sum2 < tmp8);
    }
    num2 = sum1;
  } while (sum1 < 30);
  return { b, r };
}
const frebResult = freb(uint8Array, 2);
let b = frebResult.b;
let closure_7 = b;
let r = frebResult.r;
let dependencyMap = r;
b[28] = 258;
r[258] = 28;
({ b: closure_9, r: c10 } = freb(uint8Array1, 0));
const uint16Array = new Uint16Array(32768);
let num = 0;
do {
  let tmp8 = (43690 & num) >> 1 | (21845 & num) << 1;
  let tmp9 = (52428 & tmp8) >> 2 | (13107 & tmp8) << 2;
  let tmp10 = (61680 & tmp9) >> 4 | (3855 & tmp9) << 4;
  uint16Array[num] = ((65280 & tmp10) >> 8 | (255 & tmp10) << 8) >> 1;
  num = num + 1;
} while (num < 32768);
function hMap(_Uint8Array1, l, arg2) {
  const tmp = new Uint16Array(l);
  for (let num = 0; num < length; num = num + 1) {
    if (_Uint8Array1[num]) {
      let diff = _Uint8Array1[num] - 1;
      tmp[diff] = tmp[diff] + 1;
    }
  }
  const tmp4 = new Uint16Array(l);
  for (let num2 = 1; num2 < l; num2 = num2 + 1) {
    let diff1 = num2 - 1;
    tmp4[num2] = tmp4[diff1] + tmp[diff1] << 1;
  }
  if (arg2) {
    const tmp63 = new Uint16Array(1 << l);
    let num7 = 0;
    let tmp12 = tmp63;
    if (0 < length) {
      do {
        if (_Uint8Array1[num7]) {
          let diff2 = l - _Uint8Array1[num7];
          let diff3 = _Uint8Array1[num7] - 1;
          let tmp26 = +tmp4[diff3];
          tmp4[diff3] = tmp26 + 1;
          let sum = tmp26 << diff2;
          let tmp28 = sum | (1 << diff2) - 1;
          if (sum <= tmp28) {
            do {
              tmp63[uint16Array[sum] >> tmp21] = tmp23;
              sum = sum + 1;
            } while (sum <= tmp28);
          }
        }
        num7 = num7 + 1;
        tmp12 = tmp63;
      } while (num7 < length);
    }
  } else {
    const tmp64 = new Uint16Array(length);
    let num4 = 0;
    tmp12 = tmp64;
    if (0 < length) {
      do {
        if (_Uint8Array1[num4]) {
          let diff4 = _Uint8Array1[num4] - 1;
          let tmp16 = +tmp4[diff4];
          tmp4[diff4] = tmp16 + 1;
          tmp64[num4] = uint16Array[tmp16] >> 15 - _Uint8Array1[num4];
        }
        num4 = num4 + 1;
        tmp12 = tmp64;
      } while (num4 < length);
    }
  }
  return tmp12;
}
const _Uint8Array1 = new _Uint8Array(288);
let num2 = 0;
do {
  _Uint8Array1[num2] = 8;
  num2 = num2 + 1;
  num3 = 144;
} while (num2 < 144);
do {
  _Uint8Array1[num3] = 9;
  num3 = num3 + 1;
  num4 = 256;
} while (num3 < 256);
do {
  _Uint8Array1[num4] = 7;
  num4 = num4 + 1;
  num5 = 280;
} while (num4 < 280);
do {
  _Uint8Array1[num5] = 8;
  num5 = num5 + 1;
} while (num5 < 288);
const _Uint8Array2 = new _Uint8Array(32);
let num6 = 0;
do {
  _Uint8Array2[num6] = 5;
  num6 = num6 + 1;
} while (num6 < 32);
let closure_15 = hMap(_Uint8Array1, 9, 0);
let closure_16 = hMap(_Uint8Array1, 9, 1);
let closure_17 = hMap(_Uint8Array2, 5, 0);
let closure_18 = hMap(_Uint8Array2, 5, 1);
function max(arg0) {
  let first = arg0[0];
  let num = 1;
  let tmp2 = first;
  if (1 < arg0.length) {
    do {
      let tmp4 = first;
      if (arg0[num] > first) {
        tmp4 = arg0[num];
      }
      num = num + 1;
      first = tmp4;
      tmp2 = tmp4;
    } while (num < arg0.length);
  }
  return tmp2;
}
function bits(arg0, arg1, arg2) {
  return (arg0[arg1 / 8 | 0] | arg0[(arg1 / 8 | 0) + 1] << 8) >> (7 & arg1) & arg2;
}
function bits16(arg0, arg1) {
  return (arg0[arg1 / 8 | 0] | arg0[(arg1 / 8 | 0) + 1] << 8 | arg0[(arg1 / 8 | 0) + 2] << 16) >> (7 & arg1);
}
function shft(arg0) {
  return (arg0 + 7) / 8 | 0;
}
function slc(subarray, arg1, arg2) {
  let num = arg1;
  let tmp = null == arg1;
  if (!tmp) {
    tmp = num < 0;
  }
  if (tmp) {
    num = 0;
  }
  let length = arg2;
  if (tmp2) {
    length = subarray.length;
  }
  const obj = new Uint8Array(length - num);
  const result = obj.set(subarray.subarray(num, length));
  return obj;
}
let items = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
function err(code, arg1, arg2) {
  let tmp = arg1;
  if (!arg1) {
    tmp = items[code];
  }
  const error = new Error(tmp);
  error.code = code;
  if (Error.captureStackTrace) {
    const _Error = Error;
    Error.captureStackTrace(error, err);
  }
  if (arg2) {
    return error;
  } else {
    throw error;
  }
}
function inflt(subarrayResult, f, out, dictionary) {
  let num = 0;
  if (dictionary) {
    num = dictionary.length;
  }
  let arr = out;
  if (subarrayResult.length) {
    let tmp6 = !arr;
    if (arr) {
      tmp6 = 2 != f.i;
    }
    const i = f.i;
    if (!arr) {
      arr = new Uint8Array(3 * length);
    }
    let tmp10 = f.f || 0;
    let tmp11 = f.p || 0;
    let tmp12 = f.b || 0;
    ({ l, d, m, n } = f);
    const result = 8 * length;
    while (true) {
      let tmp17 = n;
      let tmp18 = m;
      let tmp19 = d;
      let tmp20 = l;
      let tmp23 = tmp10;
      let tmp24 = n;
      let tmp25 = m;
      let tmp26 = d;
      let tmp27 = l;
      let tmp28 = tmp11;
      if (!l) {
        if (typeof bits !== "function") {
          break;
        } else {
          let tmp30 = tmp11 / 8 | 0;
          let sum = tmp11 + 1;
          if (typeof bits === "function") {
            let tmp32 = (subarrayResult[tmp30] | subarrayResult[tmp30 + 1] << 8) >> (7 & tmp11) & 1;
            let tmp33 = sum / 8 | 0;
            let tmp34 = (subarrayResult[tmp33] | subarrayResult[tmp33 + 1] << 8) >> (7 & sum) & 3;
            let sum1 = tmp11 + 3;
            if (tmp34) {
              if (1 === tmp34) {
                let tmp126 = closure_16;
                let tmp127 = closure_18;
                let num38 = 5;
                let num36 = 9;
                let tmp100 = sum1;
              } else if (2 === tmp34) {
                if (typeof bits === "function") {
                  let tmp65 = sum1 / 8 | 0;
                  if (typeof bits === "function") {
                    let sum2 = sum1 + 10;
                    let tmp68 = sum2 / 8 | 0;
                    if (typeof bits === "function") {
                      let sum3 = (tmp66 >> (7 & sum1) & 31) + 257;
                      let sum4 = (tmp69 >> (7 & sum2) & 15) + 4;
                      let sum5 = sum1 + 5;
                      let tmp73 = sum5 / 8 | 0;
                      let sum6 = sum3 + ((subarrayResult[tmp73] | subarrayResult[tmp73 + 1] << 8) >> (7 & sum5) & 31) + 1;
                      let sum7 = sum1 + 14;
                      let tmp77 = new.target;
                      let tmp78 = new.target;
                      let obj3 = new Uint8Array(sum6);
                      let tmp80 = new.target;
                      let tmp81 = new.target;
                      let arr3 = new Uint8Array(19);
                      let num30 = 0;
                      if (0 < sum4) {
                        while (typeof bits === "function") {
                          let sum8 = sum7 + 3 * num30;
                          let tmp88 = sum8 / 8 | 0;
                          arr3[tmp84] = (subarrayResult[tmp88] | subarrayResult[tmp88 + 1] << 8) >> (7 & sum8) & 7;
                          num30 = num30 + 1;
                          continue;
                        }
                        let str9 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                      if (typeof max === "function") {
                        let first = arr3[0];
                        let num31 = 1;
                        let tmp91 = first;
                        if (1 < arr3.length) {
                          do {
                            let tmp93 = first;
                            if (arr3[num31] > first) {
                              tmp93 = arr3[num31];
                            }
                            num31 = num31 + 1;
                            first = tmp93;
                            tmp91 = tmp93;
                          } while (num31 < arr3.length);
                        }
                        let sum9 = sum7 + 3 * sum4;
                        let diff = (1 << tmp91) - 1;
                        let num32 = 0;
                        let tmp99 = sum9;
                        tmp100 = sum9;
                        if (0 < sum6) {
                          while (typeof bits === "function") {
                            let tmp104 = tmp99 / 8 | 0;
                            let tmp105 = tmp98[(subarrayResult[tmp104] | subarrayResult[tmp104 + 1] << 8) >> (7 & tmp99) & diff];
                            let sum10 = tmp99 + (15 & tmp105);
                            let tmp107 = tmp105 >> 4;
                            if (tmp107 < 16) {
                              let sum11 = num32 + 1;
                              obj3[num32] = tmp107;
                              let tmp115 = sum10;
                            } else {
                              if (16 === tmp107) {
                                if (typeof bits === "function") {
                                  let tmp111 = sum10 / 8 | 0;
                                  let num33 = 3 + ((subarrayResult[tmp111] | subarrayResult[tmp111 + 1] << 8) >> (7 & sum10) & 3);
                                  let sum12 = sum10 + 2;
                                  let num34 = obj3[num32 - 1];
                                } else {
                                  let str14 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else if (17 === tmp107) {
                                if (typeof bits === "function") {
                                  let tmp110 = sum10 / 8 | 0;
                                  num33 = 3 + ((subarrayResult[tmp110] | subarrayResult[tmp110 + 1] << 8) >> (7 & sum10) & 7);
                                  sum12 = sum10 + 3;
                                  num34 = 0;
                                } else {
                                  let str13 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                num33 = 0;
                                num34 = 0;
                                sum12 = sum10;
                                if (18 === tmp107) {
                                  if (typeof bits === "function") {
                                    let tmp109 = sum10 / 8 | 0;
                                    num33 = 11 + ((subarrayResult[tmp109] | subarrayResult[tmp109 + 1] << 8) >> (7 & sum10) & 127);
                                    sum12 = sum10 + 7;
                                    num34 = 0;
                                  } else {
                                    let str12 = "Trying to call a non-function";
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                              }
                              let diff1 = num33 - 1;
                              let tmp113 = num32;
                              sum11 = num32;
                              tmp115 = sum12;
                              if (num33) {
                                do {
                                  let sum13 = tmp113 + 1;
                                  obj3[tmp113] = num34;
                                  tmp117 = diff1;
                                  diff1 = diff1 - 1;
                                  tmp113 = sum13;
                                  sum11 = sum13;
                                  tmp115 = sum12;
                                } while (tmp117);
                              }
                            }
                            num32 = sum11;
                            tmp99 = tmp115;
                            tmp100 = tmp115;
                            continue;
                          }
                          let str11 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                        subarrayResult = obj3.subarray(0, sum3);
                        let subarrayResult1 = obj3.subarray(sum3);
                        if (typeof max === "function") {
                          let first1 = subarrayResult[0];
                          let num35 = 1;
                          num36 = first1;
                          if (1 < subarrayResult.length) {
                            do {
                              let tmp121 = first1;
                              if (subarrayResult[num35] > first1) {
                                tmp121 = subarrayResult[num35];
                              }
                              num35 = num35 + 1;
                              first1 = tmp121;
                              num36 = tmp121;
                            } while (num35 < subarrayResult.length);
                          }
                          if (typeof tmp118 === "function") {
                            let first2 = subarrayResult1[0];
                            let num37 = 1;
                            num38 = first2;
                            if (1 < subarrayResult1.length) {
                              do {
                                let tmp124 = first2;
                                if (subarrayResult1[num37] > first2) {
                                  tmp124 = subarrayResult1[num37];
                                }
                                num37 = num37 + 1;
                                first2 = tmp124;
                                num38 = tmp124;
                              } while (num37 < subarrayResult1.length);
                            }
                            tmp126 = hMap(subarrayResult, num36, 1);
                            tmp127 = hMap(subarrayResult1, num38, 1);
                          } else {
                            let str16 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          let str15 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str10 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      let str8 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    let str7 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  let str6 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else if (typeof err === "function") {
                let _Error4 = Error;
                let tmp60 = new.target;
                let tmp61 = new.target;
                let error = new Error(items[1]);
                error.code = 1;
                let _Error5 = Error;
                if (Error.captureStackTrace) {
                  let _Error6 = Error;
                  let captureStackTraceResult = Error.captureStackTrace(error, tmp58);
                }
                throw error;
              } else {
                let str5 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
              tmp24 = num38;
              tmp25 = num36;
              tmp26 = tmp127;
              tmp27 = tmp126;
              tmp28 = tmp100;
              tmp23 = tmp32;
              if (tmp100 > result) {
                let arr2 = arr;
                let length3 = tmp12;
                if (i) {
                  if (typeof err === "function") {
                    let _Error7 = Error;
                    let tmp130 = new.target;
                    let tmp131 = new.target;
                    let error1 = new Error(items[0]);
                    error1.code = 0;
                    let _Error8 = Error;
                    if (Error.captureStackTrace) {
                      let _Error9 = Error;
                      let captureStackTraceResult1 = Error.captureStackTrace(error1, tmp128);
                    }
                    throw error1;
                  } else {
                    let str17 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
            } else if (typeof shft === "function") {
              let sum14 = ((sum1 + 7) / 8 | 0) + 4;
              let tmp38 = subarrayResult[sum14 - 4] | subarrayResult[sum14 - 3] << 8;
              let sum15 = sum14 + tmp38;
              if (sum15 > length) {
                arr2 = arr;
                length3 = tmp12;
                if (i) {
                  if (typeof err === "function") {
                    let _Error = Error;
                    let tmp53 = new.target;
                    let tmp54 = new.target;
                    let error2 = new Error(items[0]);
                    error2.code = 0;
                    let _Error2 = Error;
                    if (Error.captureStackTrace) {
                      let _Error3 = Error;
                      let captureStackTraceResult2 = Error.captureStackTrace(error2, tmp51);
                    }
                    throw error2;
                  } else {
                    let str4 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              } else {
                let obj2 = arr;
                if (tmp6) {
                  let sum16 = tmp12 + tmp38;
                  let length2 = arr.length;
                  let tmp41 = arr;
                  if (sum16 > length2) {
                    let _Math = Math;
                    let tmp43 = new.target;
                    let tmp44 = new.target;
                    let obj = new Uint8Array(Math.max(2 * length2, sum16));
                    let result1 = obj.set(arr);
                    tmp41 = obj;
                  }
                  obj2 = tmp41;
                }
                let result2 = obj2.set(subarrayResult.subarray(sum14, sum15), tmp12);
                let sum17 = tmp12 + tmp38;
                f.b = sum17;
                let result3 = 8 * sum15;
                f.p = result3;
                f.f = tmp32;
                let tmp50 = obj2;
                let num28 = tmp32;
                arr = tmp50;
                n = tmp17;
                m = tmp18;
                d = tmp19;
                l = tmp20;
                tmp12 = sum17;
                tmp11 = result3;
                tmp10 = num28;
                arr2 = tmp50;
                length3 = sum17;
              }
            } else {
              let str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
            let tmp223 = arr2;
            if (length3 != arr2.length) {
              if (typeof slc === "function") {
                let tmp225 = null == length3 || length3 > arr2.length;
                if (tmp225) {
                  length3 = arr2.length;
                }
                let tmp227 = new.target;
                let tmp228 = new.target;
                let obj6 = new Uint8Array(length3);
                let result4 = obj6.set(arr2.subarray(0, length3));
                tmp223 = obj6;
              } else {
                let str26 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
            return tmp223;
          } else {
            let str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      let arr6 = arr;
      if (tmp6) {
        let sum18 = tmp12 + 131072;
        let length4 = arr.length;
        let tmp136 = arr;
        if (sum18 > length4) {
          let _Math2 = Math;
          let tmp138 = new.target;
          let tmp139 = new.target;
          let obj4 = new Uint8Array(Math.max(2 * length4, sum18));
          let result5 = obj4.set(arr);
          tmp136 = obj4;
        }
        arr6 = tmp136;
      }
      let tmp144 = tmp28;
      let tmp145 = tmp12;
      let tmp146 = tmp28;
      while (typeof bits16 === "function") {
        let tmp152 = tmp146 / 8 | 0;
        let tmp153 = tmp27[(subarrayResult[tmp152] | subarrayResult[tmp152 + 1] << 8 | subarrayResult[tmp152 + 2] << 16) >> (7 & tmp146) & tmp142];
        let tmp154 = tmp153 >> 4;
        let sum19 = tmp146 + (15 & tmp153);
        if (sum19 > result) {
          let tmp212 = tmp144;
          let tmp213 = tmp27;
          let tmp214 = sum19;
          if (i) {
            if (typeof err === "function") {
              let _Error22 = Error;
              let tmp233 = new.target;
              let tmp234 = new.target;
              let error3 = new Error(items[0]);
              error3.code = 0;
              let _Error23 = Error;
              if (Error.captureStackTrace) {
                let _Error24 = Error;
                let captureStackTraceResult3 = Error.captureStackTrace(error3, tmp231);
              }
              throw error3;
            } else {
              let str27 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else if (tmp153) {
          if (tmp154 < 256) {
            let tmp222 = +tmp145;
            let sum20 = tmp222 + 1;
            arr6[tmp222] = tmp154;
            let tmp202 = arr6;
            let tmp204 = sum19;
            arr6 = tmp202;
            tmp145 = sum20;
            tmp144 = tmp204;
            tmp146 = tmp204;
            continue;
          } else {
            tmp212 = sum19;
            tmp213 = null;
            tmp214 = sum19;
            if (256 !== tmp154) {
              let diff2 = tmp154 - 254;
              let sum21 = sum19;
              if (264 < tmp154) {
                let diff3 = tmp154 - 257;
                let tmp165 = uint8Array[diff3];
                if (typeof bits === "function") {
                  let tmp167 = sum19 / 8 | 0;
                  diff2 = ((subarrayResult[tmp167] | subarrayResult[tmp167 + 1] << 8) >> (7 & sum19) & (1 << tmp165) - 1) + closure_7[diff3];
                  sum21 = sum19 + tmp165;
                } else {
                  let str20 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              if (typeof bits16 === "function") {
                let tmp171 = sum21 / 8 | 0;
                let tmp172 = tmp26[(subarrayResult[tmp171] | subarrayResult[tmp171 + 1] << 8 | subarrayResult[tmp171 + 2] << 16) >> (7 & sum21) & tmp143];
                let tmp173 = tmp172 >> 4;
                if (tmp172) {
                  let sum22 = sum21 + (15 & tmp172);
                  let tmp183 = React7[tmp173];
                  let sum23 = tmp183;
                  let sum24 = sum22;
                  if (3 < tmp173) {
                    let tmp187 = uint8Array1[tmp173];
                    if (typeof bits16 === "function") {
                      let tmp188 = sum22 / 8 | 0;
                      sum23 = tmp183 + ((subarrayResult[tmp188] | subarrayResult[tmp188 + 1] << 8 | subarrayResult[tmp188 + 2] << 16) >> (7 & sum22) & (1 << tmp187) - 1);
                      sum24 = sum22 + tmp187;
                    } else {
                      let str23 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  if (sum24 > result) {
                    tmp212 = tmp144;
                    tmp213 = tmp27;
                    tmp214 = sum24;
                    if (i) {
                      if (typeof err === "function") {
                        let _Error19 = Error;
                        let tmp217 = new.target;
                        let tmp218 = new.target;
                        let error4 = new Error(items[0]);
                        error4.code = 0;
                        let _Error20 = Error;
                        if (Error.captureStackTrace) {
                          let _Error21 = Error;
                          let captureStackTraceResult4 = Error.captureStackTrace(error4, tmp215);
                        }
                        throw error4;
                      } else {
                        let str25 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  } else {
                    let tmp196 = arr6;
                    if (tmp6) {
                      let sum25 = tmp145 + 131072;
                      let length5 = arr6.length;
                      let tmp190 = arr6;
                      if (sum25 > length5) {
                        let _Math3 = Math;
                        let tmp192 = new.target;
                        let tmp193 = new.target;
                        let obj5 = new Uint8Array(Math.max(2 * length5, sum25));
                        let result6 = obj5.set(arr6);
                        tmp190 = obj5;
                      }
                      tmp196 = tmp190;
                    }
                    let sum26 = tmp145 + diff2;
                    let sum28 = tmp145;
                    if (tmp145 < sum23) {
                      let diff4 = num - sum23;
                      let _Math4 = Math;
                      let bound = Math.min(sum23, sum26);
                      if (diff4 + tmp145 < 0) {
                        if (typeof err === "function") {
                          let _Error16 = Error;
                          let tmp207 = new.target;
                          let tmp208 = new.target;
                          let error5 = new Error(items[3]);
                          error5.code = 3;
                          let _Error17 = Error;
                          if (Error.captureStackTrace) {
                            let _Error18 = Error;
                            let captureStackTraceResult5 = Error.captureStackTrace(error5, tmp205);
                          }
                          throw error5;
                        } else {
                          let str24 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let sum27 = tmp145;
                        sum28 = tmp145;
                        if (tmp145 < bound) {
                          do {
                            tmp196[sum27] = dictionary[diff4 + sum27];
                            sum27 = sum27 + 1;
                            sum28 = sum27;
                          } while (sum27 < bound);
                        }
                      }
                    }
                    tmp202 = tmp196;
                    sum20 = sum26;
                    tmp204 = sum24;
                    if (sum28 < sum26) {
                      do {
                        tmp196[sum28] = tmp196[sum28 - sum23];
                        tmp196[sum28 + 1] = tmp196[sum28 + 1 - sum23];
                        tmp196[sum28 + 2] = tmp196[sum28 + 2 - sum23];
                        tmp196[sum28 + 3] = tmp196[sum28 + 3 - sum23];
                        sum28 = sum28 + 4;
                        tmp202 = tmp196;
                        tmp204 = sum24;
                        sum20 = sum26;
                      } while (sum28 < sum26);
                    }
                  }
                } else if (typeof err === "function") {
                  let _Error13 = Error;
                  let tmp176 = new.target;
                  let tmp177 = new.target;
                  let error6 = new Error(items[3]);
                  error6.code = 3;
                  let _Error14 = Error;
                  if (Error.captureStackTrace) {
                    let _Error15 = Error;
                    let captureStackTraceResult6 = Error.captureStackTrace(error6, tmp174);
                  }
                  throw error6;
                } else {
                  let str22 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str21 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        } else if (typeof err === "function") {
          let _Error10 = Error;
          let tmp158 = new.target;
          let tmp159 = new.target;
          let error7 = new Error(items[2]);
          error7.code = 2;
          let _Error11 = Error;
          if (Error.captureStackTrace) {
            let _Error12 = Error;
            let captureStackTraceResult7 = Error.captureStackTrace(error7, tmp156);
          }
          throw error7;
        } else {
          let str19 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
        f.l = tmp213;
        f.p = tmp212;
        f.b = tmp145;
        f.f = tmp23;
        tmp50 = arr6;
        tmp17 = tmp24;
        tmp18 = tmp25;
        tmp19 = tmp26;
        tmp20 = tmp213;
        sum17 = tmp145;
        result3 = tmp214;
        num28 = tmp23;
        if (tmp213) {
          f.m = tmp25;
          f.d = tmp26;
          f.n = tmp24;
          tmp50 = arr6;
          tmp17 = tmp24;
          tmp18 = tmp25;
          tmp19 = tmp26;
          tmp20 = tmp213;
          sum17 = tmp145;
          result3 = tmp214;
          num28 = 1;
        }
      }
      let str18 = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
    throw new TypeError("Trying to call a non-function");
  }
  let tmp2 = arr;
  if (!arr) {
    tmp2 = new Uint8Array(0);
  }
  return tmp2;
}
function wbits(arg0, arg1, arg2) {
  arg0[arg1 / 8 | 0] = arg0[arg1 / 8 | 0] | arg2 << (7 & arg1);
  const sum = tmp2 + 1;
  arg0[sum] = arg0[sum] | arg2 << (7 & arg1) >> 8;
}
function wbits16(arg0, arg1, arg2) {
  arg0[arg1 / 8 | 0] = arg0[arg1 / 8 | 0] | arg2 << (7 & arg1);
  const sum = tmp2 + 1;
  arg0[sum] = arg0[sum] | arg2 << (7 & arg1) >> 8;
  const sum1 = tmp2 + 2;
  arg0[sum1] = arg0[sum1] | arg2 << (7 & arg1) >> 16;
}
function hTree(arg0, arg1) {
  let diff1;
  items = [];
  for (let num = 0; num < arg0.length; num = num + 1) {
    if (arg0[num]) {
      let obj = { s: num, f: arg0[num] };
      let arr = items.push(obj);
    }
  }
  const substr = items.slice();
  if (items.length) {
    if (1 == length) {
      const tmp54 = new Uint8Array(items[0].s + 1);
      tmp54[items[0].s] = 1;
      const obj2 = { t: tmp54, l: 1 };
      return obj2;
    } else {
      const sorted = items.sort((f, f2) => f.f - f2.f);
      items.push({ s: -1, f: 25001 });
      [tmp58, tmp59] = items;
      const obj3 = { s: -1, f: tmp58.f + tmp59.f, l: tmp58, r: tmp59 };
      items[0] = obj3;
      let num3 = 2;
      let num2 = 1;
      let num4 = 0;
      if (1 !== length - 1) {
        while (true) {
          let tmp5 = num2;
          if (items[num4].f < items[num3].f) {
            let sum = num4 + 1;
            let sum1 = num3;
            let tmp9 = num4;
          } else {
            sum1 = num3 + 1;
            sum = num4;
            tmp9 = num3;
          }
          let tmp10 = items[tmp9];
          if (sum !== num2) {
            if (items[sum].f < items[sum1].f) {
              let sum2 = sum + 1;
              let sum3 = sum1;
              let tmp13 = sum;
              let tmp14 = items[tmp13];
              num2 = num2 + 1;
              let obj4 = { s: -1, f: tmp10.f + tmp14.f, l: tmp10, r: tmp14 };
              items[tmp5] = obj4;
              num3 = sum3;
              num4 = sum2;
              if (num2 === length - 1) {
                break;
              }
            }
          }
          sum3 = sum1 + 1;
          sum2 = sum;
          tmp13 = sum1;
        }
      }
      let s = substr[0].s;
      let num6 = 1;
      let tmp15 = s;
      if (1 < length) {
        do {
          let s2 = s;
          if (substr[num6].s > s) {
            s2 = substr[num6].s;
          }
          num6 = num6 + 1;
          s = s2;
          tmp15 = s2;
        } while (num6 < length);
      }
      const tmp20 = new Uint16Array(tmp15 + 1);
      dependencyMap = tmp20;
      if (typeof ln === "function") {
        if (-1 == tmp23.s) {
          let tmp22Result3 = globalThis;
          const l = tmp23.l;
          if (typeof ln === "function") {
            if (-1 == l.s) {
              const _Math = Math;
              let num9 = Math.max(ln(l.l, tmp20, 2), ln(l.r, tmp20, 2));
              const tmp22Result = ln(l.l, tmp20, 2);
            } else {
              tmp20[l.s] = 1;
              num9 = 1;
            }
            let r = tmp23.r;
            if (typeof ln === "function") {
              if (-1 == r.s) {
                const _Math2 = tmp22Result3.Math;
                tmp22Result3 = ln(r.l, tmp20, 2);
                r = ln(r.r, tmp20, 2);
                let num10 = _Math2.max(tmp22Result3, r);
              } else {
                tmp20[r.s] = 1;
                num10 = 1;
              }
              tmp26(num9, num10);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp20[tmp23.s] = 0;
          let num11 = 0;
          if (0 > arg1) {
            const diff = 0 - arg1;
            const sorted1 = substr.sort((f, f2) => dependencyMap[f2.s] - dependencyMap[f.s] || f.f - f2.f);
            let num14 = 0;
            let num15 = 0;
            let num12 = 0;
            let num13 = 0;
            if (0 < length) {
              const s3 = substr[num15].s;
              num12 = num14;
              num13 = num15;
              while (tmp20[s3] > arg1) {
                num14 = num14 + (tmp61 - (1 << 0 - tmp20[s3]));
                tmp20[s3] = arg1;
                num15 = num15 + 1;
                num12 = num14;
                num13 = num15;
                if (num15 >= length) {
                  break;
                }
              }
            }
            let tmp32 = num12 >> diff;
            let tmp33 = num13;
            let tmp34 = num13;
            let tmp35 = tmp32;
            if (0 < tmp32) {
              do {
                let s4 = substr[tmp33].s;
                if (tmp20[s4] < arg1) {
                  let tmp40 = +tmp20[s4];
                  tmp20[s4] = tmp40 + 1;
                  diff1 = tmp32 - (1 << arg1 - tmp40 - 1);
                  let sum4 = tmp33;
                } else {
                  sum4 = tmp33 + 1;
                  diff1 = tmp32;
                }
                tmp32 = diff1;
                tmp33 = sum4;
                tmp34 = sum4;
                tmp35 = diff1;
              } while (0 < diff1);
            }
            num11 = arg1;
            if (0 <= tmp34) {
              num11 = arg1;
              if (tmp35) {
                while (true) {
                  let s5 = substr[tmp34].s;
                  let sum5 = tmp35;
                  if (tmp20[s5] == arg1) {
                    tmp20[s5] = tmp20[s5] - 1;
                    sum5 = tmp35 + 1;
                  }
                  let diff2 = tmp34 - 1;
                  num11 = arg1;
                  if (0 > diff2) {
                    break;
                  } else {
                    tmp34 = diff2;
                    num11 = arg1;
                    tmp35 = sum5;
                    if (!sum5) {
                      break;
                    }
                  }
                }
              }
            }
            tmp61 = 1 << diff;
          }
          const obj5 = { t: null, l: null };
          const tmp49 = new Uint8Array(tmp21);
          obj5.t = tmp49;
          obj5.l = num11;
          return obj5;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  } else {
    const obj6 = { t: _Uint8Array3, l: 0 };
    return obj6;
  }
}
function ln(s, arg1, arg2) {
  if (-1 == s.s) {
    const _Math = Math;
    let bound = Math.max(ln(s.l, arg1, arg2 + 1), ln(s.r, arg1, arg2 + 1));
    const tmp4 = ln(s.l, arg1, arg2 + 1);
  } else {
    arg1[s.s] = arg2;
    bound = arg2;
  }
  return bound;
}
function lc(arg0) {
  let tmp = length;
  if (arg0.length) {
    const diff = length - 1;
    let tmp3 = diff;
    tmp = diff;
    if (!arg0[diff]) {
      tmp = tmp3;
      while (tmp3) {
        let diff1 = tmp3 - 1;
        tmp3 = diff1;
        tmp = diff1;
        if (arg0[diff1]) {
          break;
        }
      }
    }
  }
  const sum = tmp + 1;
  const obj = new Uint16Array(sum);
  let first = arg0[0];
  let num = 0;
  let num2 = 1;
  let num3 = 1;
  let num4 = 0;
  if (1 <= sum) {
    while (true) {
      if (arg0[num2] == first) {
        if (num2 != sum) {
          let num6 = num3 + 1;
          let tmp26 = num;
          let tmp29 = first;
          num2 = num2 + 1;
          num = tmp26;
          num3 = num6;
          first = tmp29;
          num4 = tmp26;
          if (num2 > sum) {
            break;
          }
        }
      }
      if (!first) {
        if (2 < num3) {
          let tmp12 = num;
          let diff2 = num3;
          let tmp14 = num;
          let tmp15 = num3;
          if (138 < num3) {
            do {
              let sum1 = tmp12 + 1;
              obj[tmp12] = 32754;
              diff2 = diff2 - 138;
              tmp12 = sum1;
              tmp14 = sum1;
              tmp15 = diff2;
            } while (138 < diff2);
          }
          let sum2 = tmp14;
          let num5 = tmp15;
          if (2 < tmp15) {
            if (10 < tmp15) {
              let tmp18 = tmp15 - 11 << 5 | 28690;
            } else {
              tmp18 = tmp15 - 3 << 5 | 12305;
            }
            sum2 = tmp14 + 1;
            obj[tmp14] = tmp18;
            num5 = 0;
          }
        }
        let diff3 = num5 - 1;
        let tmp25 = sum2;
        tmp26 = sum2;
        if (num5) {
          do {
            let sum3 = tmp25 + 1;
            obj[tmp25] = first;
            tmp25 = sum3;
            tmp28 = diff3;
            diff3 = diff3 - 1;
            tmp26 = sum3;
          } while (tmp28);
        }
        tmp29 = arg0[num2];
        num6 = 1;
      }
      sum2 = num;
      num5 = num3;
      if (3 < num3) {
        let sum4 = num + 1;
        obj[num] = first;
        let diff4 = num3 - 1;
        let tmp21 = sum4;
        let tmp22 = diff4;
        if (6 < diff4) {
          do {
            let sum5 = sum4 + 1;
            obj[sum4] = 8304;
            diff4 = diff4 - 6;
            sum4 = sum5;
            tmp21 = sum5;
            tmp22 = diff4;
          } while (6 < diff4);
        }
        sum2 = tmp21;
        num5 = tmp22;
        if (2 < tmp22) {
          sum2 = tmp21 + 1;
          obj[tmp21] = tmp22 - 3 << 5 | 8208;
          num5 = 0;
        }
      }
    }
  }
  return { c: obj.subarray(0, num4), n: sum };
}
function clen(arg0, arg1) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < arg1.length) {
    do {
      num3 = num3 + arg0[num2] * arg1[num2];
      num2 = num2 + 1;
      num = num3;
      length = arg1.length;
    } while (num2 < length);
  }
  return num;
}
function wfblk(arg0, arg1, arg2) {
  if (typeof shft === "function") {
    arg0[(tmp + 7) / 8 | 0] = 255 & length;
    const sum = tmp3 + 1;
    arg0[sum] = length >> 8;
    arg0[((tmp + 7) / 8 | 0) + 2] = 255 ^ arg0[(tmp + 7) / 8 | 0];
    arg0[((tmp + 7) / 8 | 0) + 3] = 255 ^ arg0[sum];
    for (let num6 = 0; num6 < length; num6 = num6 + 1) {
      arg0[tmp3 + num6 + 4] = arg2[num6];
    }
    return 8 * (((tmp + 7) / 8 | 0) + 4 + length);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function wblk(subarray, subarrayResult, l, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
  let length;
  let length2;
  let length3;
  let length4;
  let length5;
  let length6;
  let length7;
  if (typeof wbits === "function") {
    subarrayResult[tmp / 8 | 0] = subarrayResult[tmp / 8 | 0] | l << (7 & tmp);
    const sum = tmp7 + 1;
    subarrayResult[sum] = subarrayResult[sum] | l << (7 & tmp) >> 8;
    arg4[256] = arg4[256] + 1;
    ({ t, l } = hTree(arg4, 15));
    const tmp11 = hTree(arg5, 15);
    const t1 = tmp11.t;
    const tmp10 = hTree(arg4, 15);
    ({ c, n } = lc(t));
    const tmp14 = lc(t1);
    _Uint8Array = tmp14.c;
    const n2 = tmp14.n;
    const tmp18 = new Uint16Array(19);
    let num10 = 0;
    if (0 < c.length) {
      do {
        let tmp20 = 31 & c[num10];
        tmp18[tmp20] = tmp18[tmp20] + 1;
        num10 = num10 + 1;
        length = c.length;
      } while (num10 < length);
    }
    let num11 = 0;
    if (0 < _Uint8Array.length) {
      do {
        let tmp21 = 31 & _Uint8Array[num11];
        tmp18[tmp21] = tmp18[tmp21] + 1;
        num11 = num11 + 1;
        length2 = _Uint8Array.length;
      } while (num11 < length2);
    }
    const tmp23 = hTree(tmp18, 7);
    const t2 = tmp23.t;
    let num13 = 19;
    let num14 = 19;
    const l2 = tmp23.l;
    if (!t2[uint8Array2[18]]) {
      const diff = num13 - 1;
      num14 = diff;
      while (4 < diff) {
        num13 = diff;
        num14 = diff;
        if (t2[uint8Array2[diff - 1]]) {
          break;
        }
      }
    }
    let arr4 = _Uint8Array1;
    if (typeof clen === "function") {
      let num16 = 0;
      let num17 = 0;
      let num18 = 0;
      if (0 < arr4.length) {
        do {
          num17 = num17 + arg4[num16] * arr4[num16];
          num16 = num16 + 1;
          num18 = num17;
          length3 = arr4.length;
        } while (num16 < length3);
      }
      let arr5 = _Uint8Array2;
      if (typeof clen === "function") {
        let num19 = 0;
        let num20 = 0;
        let num21 = 0;
        if (0 < arr5.length) {
          do {
            num20 = num20 + arg5[num19] * arr5[num19];
            num19 = num19 + 1;
            num21 = num20;
            length4 = arr5.length;
          } while (num19 < length4);
        }
        const sum1 = num18 + num21 + arg6;
        if (typeof clen === "function") {
          let num22 = 0;
          let num23 = 0;
          if (0 < t.length) {
            do {
              num23 = num23 + arg4[num22] * t[num22];
              num22 = num22 + 1;
              length5 = t.length;
            } while (num22 < length5);
          }
          if (typeof clen === "function") {
            let num25 = 0;
            let num26 = 0;
            if (0 < t1.length) {
              do {
                num26 = num26 + arg5[num25] * t1[num25];
                num25 = num25 + 1;
                length6 = t1.length;
              } while (num25 < length6);
            }
            if (typeof clen === "function") {
              let num28 = 0;
              let num29 = 0;
              let num30 = 0;
              if (0 < t2.length) {
                do {
                  num29 = num29 + tmp18[num28] * t2[num28];
                  num28 = num28 + 1;
                  num30 = num29;
                  length7 = t2.length;
                } while (num28 < length7);
              }
              const sum2 = tmp + 1;
              const result = 3 * num14;
              const sum3 = tmp32 + 14 + result + num30 + 2 * tmp18[16] + 3 * tmp18[17] + 7 * tmp18[18];
              if (arg8 >= 0) {
                if (tmp28 << 3 <= sum1) {
                  if (tmp37 <= sum3) {
                    subarrayResult = subarray.subarray(arg8, arg8 + arg9);
                    if (typeof wfblk === "function") {
                      if (typeof shft === "function") {
                        subarrayResult[(sum2 + 2 + 7) / 8 | 0] = 255 & length8;
                        const sum4 = tmp138 + 1;
                        subarrayResult[sum4] = length8 >> 8;
                        subarrayResult[((sum2 + 2 + 7) / 8 | 0) + 2] = 255 ^ subarrayResult[(sum2 + 2 + 7) / 8 | 0];
                        subarrayResult[((sum2 + 2 + 7) / 8 | 0) + 3] = 255 ^ subarrayResult[sum4];
                        for (let num49 = 0; num49 < length8; num49 = num49 + 1) {
                          subarrayResult[tmp138 + num49 + 4] = subarrayResult[num49];
                        }
                        return 8 * (((sum2 + 2 + 7) / 8 | 0) + 4 + length8);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                }
              }
              if (typeof wbits === "function") {
                subarrayResult[sum2 / 8 | 0] = subarrayResult[sum2 / 8 | 0] | 1 + (sum3 < sum1) << (7 & sum2);
                const sum5 = tmp41 + 1;
                subarrayResult[sum5] = subarrayResult[sum5] | 1 + (sum3 < sum1) << (7 & sum2) >> 8;
                const sum6 = sum2 + 2;
                if (sum3 < sum1) {
                  const tmp48 = hMap(t, l, 0);
                  if (typeof wbits === "function") {
                    subarrayResult[sum6 / 8 | 0] = subarrayResult[sum6 / 8 | 0] | tmp50 << (7 & sum6);
                    const sum7 = tmp52 + 1;
                    subarrayResult[sum7] = subarrayResult[sum7] | tmp50 << (7 & sum6) >> 8;
                    if (typeof wbits === "function") {
                      const sum8 = sum6 + 5;
                      subarrayResult[sum8 / 8 | 0] = subarrayResult[sum8 / 8 | 0] | tmp54 << (7 & sum8);
                      const sum9 = tmp57 + 1;
                      subarrayResult[sum9] = subarrayResult[sum9] | tmp54 << (7 & sum8) >> 8;
                      if (typeof wbits === "function") {
                        const sum10 = sum6 + 10;
                        subarrayResult[sum10 / 8 | 0] = subarrayResult[sum10 / 8 | 0] | num14 - 4 << (7 & sum10);
                        const sum11 = tmp61 + 1;
                        subarrayResult[sum11] = subarrayResult[sum11] | num14 - 4 << (7 & sum10) >> 8;
                        const sum12 = sum6 + 14;
                        let num36 = 0;
                        if (0 < num14) {
                          while (typeof wbits === "function") {
                            let sum13 = sum12 + 3 * num36;
                            let tmp69 = tmp66 << (7 & sum13);
                            let tmp70 = sum13 / 8 | 0;
                            subarrayResult[tmp70] = subarrayResult[tmp70] | tmp69;
                            let sum14 = tmp70 + 1;
                            subarrayResult[sum14] = subarrayResult[sum14] | tmp69 >> 8;
                            num36 = num36 + 1;
                          }
                          throw new TypeError("Trying to call a non-function");
                        }
                        let sum15 = sum12 + result;
                        items = [c, _Uint8Array];
                        let num39 = 0;
                        while (true) {
                          let arr7 = items[num39];
                          let tmp74 = sum15;
                          let num40 = 0;
                          let tmp75 = sum15;
                          if (0 < arr7.length) {
                            let tmp76 = 31 & arr7[num40];
                            while (typeof wbits === "function") {
                              let tmp81 = tmp78 << (7 & tmp74);
                              let tmp82 = tmp74 / 8 | 0;
                              subarrayResult[tmp82] = subarrayResult[tmp82] | tmp81;
                              let sum16 = tmp82 + 1;
                              subarrayResult[sum16] = subarrayResult[sum16] | tmp81 >> 8;
                              let sum17 = tmp74 + t2[tmp76];
                              let sum19 = sum17;
                              if (15 < tmp76) {
                                if (typeof tmp77 === "function") {
                                  let tmp86 = (arr7[num40] >> 5 & 127) << (7 & sum17);
                                  let tmp87 = sum17 / 8 | 0;
                                  subarrayResult[tmp87] = subarrayResult[tmp87] | tmp86;
                                  let sum18 = tmp87 + 1;
                                  subarrayResult[sum18] = subarrayResult[sum18] | tmp86 >> 8;
                                  sum19 = sum17 + (arr7[num40] >> 12);
                                } else {
                                  let str13 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                              num40 = num40 + 1;
                              tmp74 = sum19;
                              tmp75 = sum19;
                              continue;
                            }
                            let str12 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                          num39 = num39 + 1;
                          sum15 = tmp75;
                          arr5 = t1;
                          arr4 = t;
                          let tmp46 = tmp75;
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                  const tmp49 = hMap(t1, tmp11.l, 0);
                } else {
                  tmp46 = sum6;
                }
                let tmp90 = tmp46;
                let num47 = 0;
                let tmp91 = tmp46;
                if (0 < arg7) {
                  while (true) {
                    let tmp92 = arg3[num47];
                    if (tmp92 > 255) {
                      let tmp103 = tmp92 >> 18 & 31;
                      let sum20 = tmp103 + 257;
                      if (typeof wbits16 === "function") {
                        let tmp106 = tmp105 << (7 & tmp90);
                        let tmp107 = tmp90 / 8 | 0;
                        subarrayResult[tmp107] = subarrayResult[tmp107] | tmp106;
                        let sum21 = tmp107 + 1;
                        subarrayResult[sum21] = subarrayResult[sum21] | tmp106 >> 8;
                        let sum22 = tmp107 + 2;
                        subarrayResult[sum22] = subarrayResult[sum22] | tmp106 >> 16;
                        let sum23 = tmp90 + arr4[sum20];
                        let sum25 = sum23;
                        if (7 < tmp103) {
                          if (typeof wbits === "function") {
                            let tmp113 = (tmp92 >> 23 & 31) << (7 & sum23);
                            let tmp114 = sum23 / 8 | 0;
                            subarrayResult[tmp114] = subarrayResult[tmp114] | tmp113;
                            let sum24 = tmp114 + 1;
                            subarrayResult[sum24] = subarrayResult[sum24] | tmp113 >> 8;
                            sum25 = sum23 + uint8Array[tmp103];
                          } else {
                            let str16 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                        let tmp117 = 31 & tmp92;
                        if (typeof wbits16 === "function") {
                          let tmp119 = tmp118 << (7 & sum25);
                          let tmp120 = sum25 / 8 | 0;
                          subarrayResult[tmp120] = subarrayResult[tmp120] | tmp119;
                          let sum26 = tmp120 + 1;
                          subarrayResult[sum26] = subarrayResult[sum26] | tmp119 >> 8;
                          let sum27 = tmp120 + 2;
                          subarrayResult[sum27] = subarrayResult[sum27] | tmp119 >> 16;
                          let sum28 = sum25 + arr5[tmp117];
                          let sum31 = sum28;
                          if (3 < tmp117) {
                            if (typeof wbits16 === "function") {
                              let tmp124 = (tmp92 >> 5 & 8191) << (7 & sum28);
                              let tmp125 = sum28 / 8 | 0;
                              subarrayResult[tmp125] = subarrayResult[tmp125] | tmp124;
                              let sum29 = tmp125 + 1;
                              subarrayResult[sum29] = subarrayResult[sum29] | tmp124 >> 8;
                              let sum30 = tmp125 + 2;
                              subarrayResult[sum30] = subarrayResult[sum30] | tmp124 >> 16;
                              sum31 = sum28 + uint8Array1[tmp117];
                            } else {
                              let str18 = "Trying to call a non-function";
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                        } else {
                          let str17 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str15 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else if (typeof wbits16 !== "function") {
                      break;
                    } else {
                      let tmp97 = tmp96 << (7 & tmp90);
                      let tmp98 = tmp90 / 8 | 0;
                      subarrayResult[tmp98] = subarrayResult[tmp98] | tmp97;
                      let sum32 = tmp98 + 1;
                      subarrayResult[sum32] = subarrayResult[sum32] | tmp97 >> 8;
                      let sum33 = tmp98 + 2;
                      subarrayResult[sum33] = subarrayResult[sum33] | tmp97 >> 16;
                      sum31 = tmp90 + arr4[tmp92];
                    }
                    num47 = num47 + 1;
                    tmp90 = sum31;
                    tmp91 = sum31;
                  }
                  throw new TypeError("Trying to call a non-function");
                }
                if (typeof wbits16 === "function") {
                  subarrayResult[tmp91 / 8 | 0] = subarrayResult[tmp91 / 8 | 0] | tmp130 << (7 & tmp91);
                  const sum34 = tmp132 + 1;
                  subarrayResult[sum34] = subarrayResult[sum34] | tmp130 << (7 & tmp91) >> 8;
                  const sum35 = tmp132 + 2;
                  subarrayResult[sum35] = subarrayResult[sum35] | tmp130 << (7 & tmp91) >> 16;
                  return tmp91 + arr4[256];
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const tmp13 = lc(t);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let int32Array = new Int32Array([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
const _Uint8Array3 = new _Uint8Array(0);
function dflt(subarray, level, rounded, v, arg4, l) {
  let sum8;
  const sum = v + tmp;
  const arr = new Uint8Array(sum + 5 * (1 + Math.ceil((l.z || subarray.length) / 7000)) + arg4);
  const subarrayResult = arr.subarray(v, arr.length - arg4);
  l = l.l;
  if (level) {
    if (tmp5) {
      subarrayResult[0] = l.r >> 3;
    }
    let p = l.p;
    if (!p) {
      p = new Uint16Array(32768);
    }
    const diff = (1 << rounded) - 1;
    let h = l.h;
    if (!h) {
      h = new Uint16Array(diff + 1);
    }
    const _Math = Math;
    rounded = Math.ceil(rounded / 3);
    const result = 2 * rounded;
    const tmp34 = new Int32Array(25000);
    const tmp38 = new Uint16Array(288);
    const tmp41 = new Uint16Array(32);
    const diff1 = (8191 & int32Array[level - 1]) - 1;
    let tmp48 = tmp43;
    let num30 = 0;
    let num31 = 0;
    let tmp49 = tmp42;
    let num32 = 0;
    let num33 = 0;
    let tmp50 = tmp5;
    let num34 = 0;
    let tmp51 = tmp43;
    let num35 = 0;
    let tmp52 = tmp42;
    let num36 = 0;
    let tmp53 = tmp5;
    if ((l.i || 0) + 2 < tmp) {
      do {
        let tmp54 = (subarray[tmp49] ^ subarray[tmp49 + 1] << rounded ^ subarray[tmp49 + 2] << result) & diff;
        let tmp55 = 32767 & tmp49;
        let tmp56 = h[tmp54];
        p[tmp55] = tmp56;
        h[tmp54] = tmp55;
        let tmp64 = num30;
        let tmp65 = num31;
        let sum4 = num32;
        let sum7 = num33;
        let tmp68 = tmp50;
        let sum6 = tmp48;
        if (tmp48 <= tmp49) {
          let diff2 = tmp - tmp49;
          if (7000 < num33) {
            if (diff2 > 423) {
              let num41 = 0;
              let tmp82 = wblk(subarray, subarrayResult, 0, tmp44, tmp45, tmp46, tmp61, tmp59, tmp57, tmp49 - num30, tmp63);
              do {
                tmp38[num41] = 0;
                num41 = num41 + 1;
                let num42 = 0;
              } while (num41 < 286);
              do {
                tmp41[num42] = 0;
                num42 = num42 + 1;
                let tmp70 = tmp49;
                let num37 = 0;
                let num38 = 0;
                let num39 = 0;
                let tmp71 = tmp82;
              } while (num42 < 30);
            } else {
              tmp70 = num30;
              num37 = num31;
              num38 = num32;
              num39 = num33;
              tmp71 = tmp50;
            }
          } else {
            tmp70 = num30;
            num37 = num31;
            num38 = num32;
            num39 = num33;
            tmp71 = tmp50;
          }
          let num43 = 0;
          let num44 = 2;
          if (diff2 > 2) {
            let tmp102 = tmp55 - tmp56 & 32767;
            let diff3 = tmp49 - tmp102;
            num43 = 0;
            num44 = 2;
            if (tmp54 === ((subarray[diff3] ^ subarray[diff3 + 1] << rounded ^ subarray[diff3 + 2] << result) & diff)) {
              let _Math3 = Math;
              let _Math4 = Math;
              let diff4 = Math.min(tmp19, diff2) - 1;
              let bound = Math.min(32767, tmp49);
              let _Math5 = Math;
              let bound1 = Math.min(258, diff2);
              num43 = 0;
              num44 = 2;
              if (tmp102 <= bound) {
                num43 = 0;
                num44 = 2;
                if (diff1) {
                  let tmp83 = diff1;
                  let num45 = 0;
                  let num46 = 2;
                  num43 = 0;
                  num44 = 2;
                  if (tmp55 != tmp56) {
                    while (true) {
                      let tmp89 = num45;
                      let tmp90 = num46;
                      let tmp91 = tmp56;
                      if (subarray[tmp49 + num46] == subarray[tmp49 + num46 - tmp102]) {
                        let num48 = 0;
                        if (0 < bound1) {
                          let num47 = 0;
                          num48 = 0;
                          if (subarray[tmp49] == subarray[tmp49 - tmp102]) {
                            let sum1 = num47 + 1;
                            num48 = sum1;
                            while (sum1 < bound1) {
                              num47 = sum1;
                              num48 = sum1;
                              if (subarray[tmp49 + sum1] != subarray[tmp49 + sum1 - tmp102]) {
                                break;
                              }
                            }
                          }
                        }
                        tmp89 = num45;
                        tmp91 = tmp56;
                        tmp90 = num46;
                        if (num46 < num48) {
                          num43 = tmp102;
                          num44 = num48;
                          if (diff4 < num48) {
                            break;
                          } else {
                            let _Math6 = Math;
                            let bound2 = Math.min(tmp102, num48 - 2);
                            let num50 = 0;
                            let num49 = 0;
                            let tmp98 = tmp56;
                            tmp89 = tmp102;
                            tmp90 = num48;
                            tmp91 = tmp56;
                            if (0 < bound2) {
                              do {
                                let tmp93 = tmp49 - tmp102 + num49 & 32767;
                                let tmp94 = tmp93 - p[tmp93] & 32767;
                                let tmp95 = num50;
                                let tmp97 = tmp98;
                                if (num50 < tmp94) {
                                  tmp95 = tmp94;
                                  tmp97 = tmp93;
                                }
                                num49 = num49 + 1;
                                num50 = tmp95;
                                tmp98 = tmp97;
                                tmp89 = tmp102;
                                tmp90 = num48;
                                tmp91 = tmp97;
                              } while (num49 < bound2);
                            }
                          }
                        }
                        break;
                      }
                      let tmp99 = p[tmp91];
                      let sum2 = tmp102 + (tmp91 - tmp99 & 32767);
                      num43 = tmp89;
                      num44 = tmp90;
                      if (sum2 > bound) {
                        break;
                      } else {
                        let diff5 = tmp83 - 1;
                        num43 = tmp89;
                        num44 = tmp90;
                        if (!diff5) {
                          break;
                        } else {
                          tmp102 = sum2;
                          tmp83 = diff5;
                          num45 = tmp89;
                          num46 = tmp90;
                          num43 = tmp89;
                          num44 = tmp90;
                          tmp56 = tmp99;
                          if (tmp91 == tmp99) {
                            break;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          let sum3 = num37 + 1;
          if (num43) {
            tmp34[num37] = 268435456 | dependencyMap[num44] << 18 | dependencyMap2[num43];
            let tmp107 = 31 & dependencyMap[num44];
            let tmp108 = 31 & dependencyMap2[num43];
            sum4 = num38 + (uint8Array[tmp107] + uint8Array1[tmp108]);
            let sum5 = 257 + tmp107;
            tmp38[sum5] = tmp38[sum5] + 1;
            tmp41[tmp108] = tmp41[tmp108] + 1;
            sum6 = tmp49 + num44;
            sum7 = num39 + 1;
            tmp64 = tmp70;
            tmp65 = sum3;
            tmp68 = tmp71;
          } else {
            tmp34[num37] = subarray[tmp49];
            let tmp104 = subarray[tmp49];
            tmp38[tmp104] = tmp38[tmp104] + 1;
            tmp64 = tmp70;
            sum6 = tmp48;
            tmp65 = sum3;
            sum4 = num38;
            sum7 = num39;
            tmp68 = tmp71;
          }
        }
        sum8 = tmp49 + 1;
        num30 = tmp64;
        tmp48 = sum6;
        num31 = tmp65;
        num32 = sum4;
        num33 = sum7;
        tmp50 = tmp68;
        tmp49 = sum8;
        num34 = tmp64;
        tmp51 = sum6;
        num35 = tmp65;
        tmp52 = sum8;
        num36 = sum4;
        tmp53 = tmp68;
      } while (sum8 + 2 < tmp);
    }
    const _Math2 = Math;
    let bound3 = Math.max(tmp52, tmp51);
    let tmp114 = num35;
    let tmp115 = num35;
    let tmp116 = bound3;
    if (bound3 < tmp) {
      do {
        let sum9 = tmp114 + 1;
        tmp34[tmp114] = subarray[bound3];
        let tmp118 = subarray[bound3];
        tmp38[tmp118] = tmp38[tmp118] + 1;
        bound3 = bound3 + 1;
        tmp114 = sum9;
        tmp115 = sum9;
        tmp116 = bound3;
      } while (bound3 < tmp);
    }
    const tmp130 = wblk(subarray, subarrayResult, l, tmp34, tmp38, tmp41, num36, tmp115, num34, tmp116 - num34, tmp53);
    let diff6 = tmp130;
    if (!l) {
      l.r = 7 & tmp130 | subarrayResult[tmp130 / 8 | 0] << 3;
      diff6 = tmp130 - 7;
      l.h = h;
      l.p = p;
      l.i = tmp116;
      l.w = tmp51;
    }
    tmp19 = int32Array[level - 1] >> 13;
    const tmp20 = 8191 & int32Array[level - 1];
    const tmp21 = 1 << rounded;
  } else {
    let sum12 = l.w || 0;
    let result1 = tmp5;
    diff6 = tmp5;
    if (sum12 < tmp + l) {
      while (true) {
        let sum10 = sum12 + 65535;
        if (sum10 >= tmp) {
          subarrayResult[result1 / 8 | 0] = l;
          sum10 = tmp;
        }
        let subarrayResult1 = subarray.subarray(sum12, sum10);
        if (typeof wfblk !== "function") {
          break;
        } else {
          let length = subarrayResult1.length;
          if (typeof shft === "function") {
            let tmp14 = (result1 + 1 + 2 + 7) / 8 | 0;
            subarrayResult[tmp14] = 255 & length;
            let sum11 = tmp14 + 1;
            subarrayResult[sum11] = length >> 8;
            subarrayResult[tmp14 + 2] = 255 ^ subarrayResult[tmp14];
            subarrayResult[tmp14 + 3] = 255 ^ subarrayResult[sum11];
            for (let num8 = 0; num8 < length; num8 = num8 + 1) {
              subarrayResult[tmp14 + num8 + 4] = subarrayResult1[num8];
            }
            result1 = 8 * (tmp14 + 4 + length);
            sum12 = sum12 + 65535;
            diff6 = result1;
          } else {
            let str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
    l.i = tmp;
  }
  if (typeof shft === "function") {
    let length2 = v + ((diff6 + 7) / 8 | 0) + arg4;
    if (typeof tmp131 === "function") {
      if (length2 > arr.length) {
        length2 = arr.length;
      }
      const obj = new Uint8Array(length2);
      const result2 = obj.set(arr.subarray(0, length2));
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmp4 = l.r || 0;
}
let closure_38 = (() => {
  int32Array = new Int32Array(256);
  let num = 0;
  let num2 = 8;
  let tmp2 = num;
  do {
    do {
      let num3 = 1 & tmp2;
      if (num3) {
        num3 = -306674912;
      }
      let tmp5 = num3 ^ tmp2 >>> 1;
      num2 = num2 - 1;
      tmp2 = tmp5;
    } while (num2);
    int32Array[num] = tmp5;
    num = num + 1;
  } while (num < 256);
})();
function crc() {
  c0 = -1;
  return {
    p(arg0) {
      let length;
      let tmp = closure_0;
      let num = 0;
      let tmp2 = closure_0;
      if (0 < arg0.length) {
        do {
          tmp = closure_2_38[255 & tmp ^ arg0[num]] ^ tmp >>> 8;
          num = num + 1;
          tmp2 = tmp;
          length = arg0.length;
        } while (num < length);
      }
      closure_0 = tmp2;
    },
    d() {
      return ~closure_0;
    }
  };
}
function adler() {
  c0 = 1;
  c1 = 0;
  return {
    p(arg0) {
      let tmp12;
      let sum4 = result1;
      let tmp4 = result1;
      let tmp5 = sum3;
      let num = 0;
      if (0 !== (arg0.length | 0)) {
        do {
          let _Math = Math;
          let bound = Math.min(num + 2655, tmp3);
          let sum2 = num;
          let sum1 = sum4;
          let tmp9 = sum3;
          let tmp10 = sum4;
          let tmp11 = sum3;
          tmp12 = num;
          if (num < bound) {
            do {
              let sum = tmp9 + arg0[sum2];
              sum1 = sum1 + sum;
              sum2 = sum2 + 1;
              tmp9 = sum;
              tmp10 = sum1;
              tmp11 = sum;
              tmp12 = sum2;
            } while (sum2 < bound);
          }
          sum3 = (65535 & tmp11) + 15 * (tmp11 >> 16);
          sum4 = (65535 & tmp10) + 15 * (tmp10 >> 16);
          num = tmp12;
          tmp4 = sum4;
          tmp5 = sum3;
        } while (tmp12 !== tmp3);
      }
      sum3 = tmp5;
      result1 = tmp4;
    },
    d() {
      const result = sum3 % 65521;
      sum3 = result;
      result1 = result1 % 65521;
      return (255 & result) << 24 | (65280 & result) << 8 | (255 & result1) << 8 | result1 >> 8;
    }
  };
}
function dopt(arr, dictionary, v, arg3, s) {
  let tmp = s;
  if (!s) {
    const obj = { l: 1 };
    tmp = obj;
    if (dictionary.dictionary) {
      dictionary = dictionary.dictionary;
      const subarrayResult = dictionary.subarray(-32768);
      const obj2 = new Uint8Array(subarrayResult.length + arr.length);
      const result = obj2.set(subarrayResult);
      const result1 = obj2.set(arr, subarrayResult.length);
      obj.w = subarrayResult.length;
      tmp = obj;
      arr = obj2;
    }
  }
  let num2 = 6;
  if (null != dictionary.level) {
    num2 = dictionary.level;
  }
  if (null == dictionary.mem) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const _Math4 = Math;
    let rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
  } else {
    rounded = 12 + dictionary.mem;
  }
  return dflt(arr, num2, rounded, v, arg3, tmp);
}
function mrg(arg0, arg1) {

}
function wcln(fn, arg1, arg2) {
  const arr = fn();
  const str1 = fn.toString();
  const sum = str1.indexOf("[") + 1;
  const replaced = str1.slice(sum, str1.lastIndexOf("]")).replace(/\s+/g, "");
  let num = 0;
  let tmp5 = arg1;
  let tmp6 = arg1;
  if (0 < arr.length) {
    do {
      let str2 = arr[num];
      let tmp7 = tmp4[num];
      if (typeof str2 === "function") {
        let _HermesInternal = HermesInternal;
        let combined = tmp5 + `;${tmp7}` + "=";
        let str4 = str2.toString();
        if (str2.prototype) {
          if (-1 != str4.indexOf("[native code]")) {
            let sum1 = str4.indexOf(" ", 8) + 1;
            let sum2 = combined + str4.slice(sum1, str4.indexOf("(", sum1));
          } else {
            let sum3 = combined + str4;
            let text1 = sum3;
            sum2 = sum3;
            let keys = Object.keys();
            if (keys !== undefined) {
              sum2 = text1;
              let tmp16 = keys[tmp];
              while (tmp16 !== undefined) {
                let str3 = str2.prototype[tmp16];
                let text = `;${tmp7}.prototype.${tmp16}`;
                text1 = `${tmp13}${tmp19}=${str3.toString()}`;
                continue;
              }
            }
          }
        } else {
          sum2 = combined + str4;
        }
      } else {
        arg2[tmp7] = str2;
        sum2 = tmp5;
      }
      num = num + 1;
      tmp5 = sum2;
      tmp6 = sum2;
    } while (num < arr.length);
  }
  return tmp6;
}
let closure_44 = [];
function wrkr(items, arg1, arg2, arg3) {
  let tmp = closure_44;
  if (!closure_44[arg2]) {
    const obj = {};
    const diff = items.length - 1;
    let str = "";
    let str2 = "";
    let num3 = 0;
    if (0 < diff) {
      do {
        str = wcln(items[num3], ``, obj);
        num3 = num3 + 1;
        str2 = str;
      } while (num3 < diff);
    }
    const obj2 = { c: wcln(items[diff], str2, obj), e: obj };
    closure_44[arg2] = obj2;
    tmp = closure_44;
  }
  const e = tmp[arg2].e;
  if (typeof mrg === "function") {
    const obj3 = {};
    const obj4 = {};
    for (const key10026 in obj3) {
      obj4[key10026] = obj3[key10026];
      continue;
    }
    for (const key10029 in e) {
      obj4[key10029] = e[key10029];
      continue;
    }
    const text = `${tmp[arg2].c};onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=`;
    items = [];
    const text1 = `${tmp[arg2].c};onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=${arg1.toString()}`;
    for (const key10041 in obj4) {
      if (!obj4[key10041].buffer) {
        continue;
      } else {
        let tmp13 = new.target;
        let tmp14 = new.target;
        let constructor = new obj4[key10041].constructor(obj4[key10041]);
        obj4[key10041] = constructor;
        let arr = items.push(constructor.buffer);
        continue;
      }
      continue;
    }
    closure_0 = arg3;
    let tmp21 = closure_0[arg2];
    if (!tmp21) {
      const _URL = URL;
      const _Blob = Blob;
      const items1 = [`${tmp11}};addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})`];
      const blob = new Blob(items1, { type: "text/javascript" });
      const objectURL = URL.createObjectURL(blob);
      tmp20[arg2] = objectURL;
      tmp21 = objectURL;
    }
    const worker = new globalThis.Worker(tmp21);
    worker.onmessage = (data) => {
      data = data.data;
      const $e$ = data.$e$;
      if ($e$) {
        const _Error = Error;
        const error = new Error($e$[0]);
        error.code = $e$[1];
        error.stack = $e$[2];
        closure_0(error, null);
      } else {
        closure_0(null, data);
      }
    };
    worker.postMessage(obj4, items);
    return worker;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function bInflt() {
  items = [Uint8Array, Uint16Array, Int32Array, uint8Array, uint8Array1, uint8Array2, closure_7, React7, closure_16, closure_18, uint16Array, , , , , , , , , , , , ];
  items[11] = items;
  items[12] = hMap;
  items[13] = max;
  items[14] = bits;
  items[15] = bits16;
  items[16] = shft;
  items[17] = slc;
  items[18] = err;
  items[19] = inflt;
  items[20] = inflateSync;
  items[21] = pbf;
  items[22] = gopt;
  return items;
}
function bDflt() {
  items = [Uint8Array, Uint16Array, Int32Array, uint8Array, uint8Array1, uint8Array2, closure_8, dependencyMap2, closure_15, _Uint8Array1, closure_17, _Uint8Array2, uint16Array, int32Array, _Uint8Array3, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
  return items;
}
function gze() {
  items = [gzh, gzhl, wbytes, crc, closure_38];
  return items;
}
function guze() {
  items = [gzs, gzl];
  return items;
}
function zle() {
  items = [zlh, wbytes, adler];
  return items;
}
function zule() {
  items = [zls];
  return items;
}
function pbf(buffer) {
  items = [buffer.buffer];
  return globalThis.postMessage(buffer, items);
}
function gopt(size) {
  let tmp = size;
  if (size) {
    size = size.size;
    if (size) {
      size = new Uint8Array(size.size);
    }
    const obj = { out: size, dictionary: size.dictionary };
    tmp = obj;
  }
  return tmp;
}
function cbify(arg0, arg1, arg2, arg3, arg4, arg5) {

}
function astrm(arg0) {
  closure_0 = arg0;
  arg0.ondata = (buffer, arg1) => {
    items = [buffer, arg1];
    const items1 = [buffer.buffer];
    return globalThis.postMessage(items, items1);
  };
  return (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
}
function astrmify(arg0, arg1, arg2, arg3, arg4, arg5) {

}
function b2(arg0, arg1) {

}
function b4(arg0, arg1) {
  return (arg0[arg1] | arg0[arg1 + 1] << 8 | arg0[arg1 + 2] << 16 | arg0[arg1 + 3] << 24) >>> 0;
}
function b8(arg0, arg1) {

}
function wbytes(arg0, arg1, arg2) {
  let sum = arg1;
  let tmp2 = arg2;
  if (arg2) {
    do {
      arg0[sum] = tmp2;
      tmp2 = tmp2 >>> 8;
      sum = sum + 1;
    } while (tmp2);
  }
}
function gzh(tmp11Result, filename) {
  let length;
  filename = filename.filename;
  tmp11Result[0] = 31;
  tmp11Result[1] = 139;
  tmp11Result[2] = 8;
  let num = 4;
  let num2 = 4;
  if (filename.level >= 2) {
    let num4 = 0;
    if (9 == filename.level) {
      num4 = 2;
    }
    num2 = num4;
  }
  tmp11Result[8] = num2;
  tmp11Result[9] = 3;
  if (0 != filename.mtime) {
    let mtime = filename.mtime;
    if (!mtime) {
      const _Date = Date;
      mtime = Date.now();
    }
    const date = new Date(mtime);
    let rounded = Math.floor(date / 1000);
    if (typeof wbytes === "function") {
      while (rounded) {
        tmp11Result[num] = rounded;
        rounded = rounded >>> 8;
        num = num + 1;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  if (filename) {
    tmp11Result[3] = 8;
    let num7 = 0;
    if (0 <= filename.length) {
      do {
        tmp11Result[num7 + 10] = filename.charCodeAt(num7);
        num7 = num7 + 1;
        length = filename.length;
      } while (num7 <= length);
    }
  }
}
function gzs(subarray) {
  let tmp = 31 == subarray[0];
  if (tmp) {
    tmp = 139 == subarray[1];
  }
  if (tmp) {
    tmp = 8 == subarray[2];
  }
  if (tmp) {
    let num6 = 10;
    if (4 & subarray[3]) {
      num6 = 10 + (2 + (subarray[10] | subarray[11] << 8));
    }
    let sum = (tmp9 >> 3 & 1) + (tmp9 >> 4 & 1);
    let tmp11 = num6;
    let tmp12 = num6;
    if (0 < sum) {
      do {
        let sum1 = tmp11 + 1;
        sum = sum - !subarray[tmp11];
        tmp11 = sum1;
        tmp12 = sum1;
      } while (0 < sum);
    }
    return tmp12 + (2 & subarray[3]);
  } else if (typeof err === "function") {
    const _Error = Error;
    const error = new Error("invalid gzip data");
    error.code = 6;
    const _Error2 = Error;
    if (Error.captureStackTrace) {
      const _Error3 = Error;
      Error.captureStackTrace(error, tmp2);
    }
    throw error;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function gzl(arg0) {
  return (arg0[arg0.length - 4] | arg0[arg0.length - 3] << 8 | arg0[arg0.length - 2] << 16 | arg0[arg0.length - 1] << 24) >>> 0;
}
function gzhl(filename) {
  let num = 0;
  if (filename.filename) {
    num = filename.filename.length + 1;
  }
  return 10 + num;
}
function zlh(tmp10Result, level) {
  level = level.level;
  let num = 0;
  if (0 != level) {
    let num3 = 1;
    if (level >= 6) {
      let num5 = 2;
      if (9 == level) {
        num5 = 3;
      }
      num3 = num5;
    }
    num = num3;
  }
  tmp10Result[0] = 120;
  tmp10Result[1] = num << 6 | (level.dictionary && 32);
  tmp10Result[1] = tmp10Result[1] | 31 - (tmp10Result[0] << 8 | tmp10Result[1]) % 31;
  if (level.dictionary) {
    if (typeof adler === "function") {
      c0 = 1;
      c1 = 0;
      const obj = {
        p(arg0) {
              let tmp12;
              let sum4 = result1;
              let tmp4 = result1;
              let tmp5 = sum3;
              let num = 0;
              if (0 !== (arg0.length | 0)) {
                do {
                  let _Math = Math;
                  let bound = Math.min(num + 2655, tmp3);
                  let sum2 = num;
                  let sum1 = sum4;
                  let tmp9 = sum3;
                  let tmp10 = sum4;
                  let tmp11 = sum3;
                  tmp12 = num;
                  if (num < bound) {
                    do {
                      let sum = tmp9 + arg0[sum2];
                      sum1 = sum1 + sum;
                      sum2 = sum2 + 1;
                      tmp9 = sum;
                      tmp10 = sum1;
                      tmp11 = sum;
                      tmp12 = sum2;
                    } while (sum2 < bound);
                  }
                  sum3 = (65535 & tmp11) + 15 * (tmp11 >> 16);
                  sum4 = (65535 & tmp10) + 15 * (tmp10 >> 16);
                  num = tmp12;
                  tmp4 = sum4;
                  tmp5 = sum3;
                } while (tmp12 !== tmp3);
              }
              sum3 = tmp5;
              result1 = tmp4;
            },
        d() {
              const result = sum3 % 65521;
              sum3 = result;
              result1 = result1 % 65521;
              return (255 & result) << 24 | (65280 & result) << 8 | (255 & result1) << 8 | result1 >> 8;
            }
      };
      obj.p(level.dictionary);
      let dResult = obj.d();
      if (typeof wbytes === "function") {
        let num6 = 2;
        while (dResult) {
          tmp10Result[num6] = dResult;
          dResult = dResult >>> 8;
          num6 = num6 + 1;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const tmp = level.dictionary && 32;
}
function zls(p, dictionary) {
  let result = 8 !== tmp;
  if (8 === (15 & p[0])) {
    result = p[0] >> 4 > 7;
  }
  if (!result) {
    result = (p[0] << 8 | p[1]) % 31;
  }
  if (result) {
    if (typeof err === "function") {
      const _Error3 = Error;
      const error = new Error("invalid zlib data");
      error.code = 6;
      const _Error4 = Error;
      if (Error.captureStackTrace) {
        const _Error5 = Error;
        Error.captureStackTrace(error, tmp14);
      }
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if ((p[1] >> 5 & 1) === +!dictionary) {
    let str = "unexpected";
    if (32 & p[1]) {
      str = "need";
    }
    const _HermesInternal = HermesInternal;
    let combined = "invalid zlib data: " + str + " dictionary";
    if (typeof err === "function") {
      if (!combined) {
        combined = items[6];
      }
      const error1 = new Error(combined);
      error1.code = 6;
      const _Error = Error;
      if (Error.captureStackTrace) {
        const _Error2 = Error;
        Error.captureStackTrace(error1, err);
      }
      throw error1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    return 2 + (p[1] >> 3 & 4);
  }
}
let tmp15 = (() => {
  class Deflate {
    constructor(arg0, arg1) {
      obj = {};
      tmp = arg1;
      obj1 = arg0;
      if (typeof arg0 === "function") {
        obj1 = {};
        tmp = arg0;
      }
      obj.ondata = tmp;
      if (!obj1) {
        obj1 = {};
      }
      obj.o = obj1;
      obj.s = { l: 0, i: 32768, w: 32768, z: 32768 };
      tmp2 = new closure_1_1(98304);
      obj.b = tmp2;
      if (obj.o.dictionary) {
        dictionary = obj.o.dictionary;
        num = -32768;
        subarrayResult = dictionary.subarray(-32768);
        b = obj.b;
        num2 = 32768;
        result = b.set(subarrayResult, 32768 - subarrayResult.length);
        obj.s.i = 32768 - subarrayResult.length;
      }
      return;
    }
    p(arg0, arg1) {
      ({ o, s } = this);
      if (typeof closure_1_41 === "function") {
        tmp3 = arg0;
        arr = arg0;
        if (!s) {
          obj = { l: 1 };
          s = obj;
          arr = arg0;
          if (o.dictionary) {
            dictionary = o.dictionary;
            num = -32768;
            subarrayResult = dictionary.subarray(-32768);
            tmp4 = closure_1_1;
            tmp5 = new.target;
            tmp6 = new.target;
            obj2 = new closure_1_1(subarrayResult.length + arg0.length);
            tmp7 = obj2;
            result = obj2.set(subarrayResult);
            result1 = obj2.set(arg0, subarrayResult.length);
            obj.w = subarrayResult.length;
            s = obj;
            arr = obj2;
          }
        }
        tmp11 = null;
        num2 = 6;
        tmp10 = closure_1_37;
        if (null != o.level) {
          num2 = o.level;
        }
        if (null == o.mem) {
          tmp13 = globalThis;
          _Math = Math;
          _Math2 = Math;
          _Math3 = Math;
          _Math4 = Math;
          num4 = 13;
          num5 = 8;
          num6 = 1.5;
          rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
        } else {
          num3 = 12;
          rounded = 12 + o.mem;
        }
        tmp14 = arg1;
        tmp15 = arr;
        tmp16 = num2;
        tmp17 = rounded;
        num7 = 0;
        num8 = 0;
        tmp18 = s;
        tmp2Result = tmp2(tmp10(arr, num2, rounded, 0, 0, s), arg1);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    push(arg0, arg1) {
      self = this;
      if (this.ondata) {
        if (self.s.l) {
          if (typeof closure_1_25 === "function") {
            tmp25 = globalThis;
            _Error4 = Error;
            tmp26 = closure_1_24;
            tmp27 = new.target;
            tmp28 = new.target;
            error = new Error(closure_1_24[4]);
            tmp30 = error;
            num12 = 4;
            error.code = 4;
            _Error5 = Error;
            if (Error.captureStackTrace) {
              _Error6 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp24);
            }
            throw error;
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp9 = arg0;
          sum = arg0.length + self.s.z;
          if (sum > self.b.length) {
            num2 = 2;
            num3 = 32768;
            if (sum > 2 * self.b.length - 32768) {
              tmp12 = closure_1_1;
              num4 = -32768;
              tmp13 = new.target;
              tmp14 = new.target;
              obj = new closure_1_1(-32768 & sum);
              tmp15 = obj;
              b2 = self.b;
              num5 = 0;
              result = obj.set(b2.subarray(0, self.s.z));
              self.b = obj;
            }
            diff = self.b.length - self.s.z;
            if (diff) {
              b3 = self.b;
              num6 = 0;
              result1 = b3.set(arg0.subarray(0, diff), self.s.z);
              self.s.z = self.b.length;
              flag = false;
              pResult = self.p(self.b, false);
            }
            ({ b: b4, b: b5 } = self);
            num7 = -32768;
            result2 = b4.set(b5.subarray(-32768));
            b6 = self.b;
            result3 = b6.set(arg0.subarray(diff), 32768);
            self.s.z = arg0.length - diff + 32768;
            num8 = 32766;
            self.s.i = 32766;
            self.s.w = 32768;
          } else {
            b = self.b;
            result4 = b.set(arg0, self.s.z);
            s = self.s;
            s.z = s.z + arg0.length;
          }
          flag2 = arg1;
          num9 = 1;
          self.s.l = 1 & arg1;
          num10 = 8191;
          tmp22 = self.s.z > self.s.w + 8191 || flag2;
          if (tmp22) {
            ({ p, b: b7 } = self);
            if (!flag2) {
              flag2 = false;
            }
            pResult1 = p(b7, flag2);
            self.s.w = self.s.i;
            s2 = self.s;
            num11 = 2;
            s2.i = s2.i - 2;
          }
          return;
        }
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        tmp4 = new.target;
        tmp5 = new.target;
        error1 = new Error(closure_1_24[5]);
        tmp7 = error1;
        num = 5;
        error1.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult1 = Error.captureStackTrace(error1, tmp);
        }
        throw error1;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return Deflate;
})();
let closure_68 = tmp15;
let tmp16 = (() => function AsyncDeflate(fn, arg1) {
  const self = this;
  items = [
    closure_47,
    () => {
      items = [closure_1_55, closure_1_68];
      return items;
    }
  ];
  const call = closure_67.call;
  if (typeof call === "unknown") {
    let tmp3 = arg1;
    let obj = fn;
    if (typeof fn === "function") {
      obj = {};
      tmp3 = fn;
    }
    self.ondata = tmp3;
    let callResult = obj;
  } else {
    callResult = call(self, fn, arg1);
  }
  if (typeof closure_56 === "function") {
    closure_45(items, (data) => {
      const tmp = new closure_1_68(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 6, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    }).postMessage(callResult);
    self.push = (buffer, arg1) => {
      if (self.ondata) {
        if (closure_2) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const error = new Error(dependencyMap[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp13(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj2.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        const error1 = new Error(dependencyMap[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj2.terminate();
    };
    const obj2 = closure_45(items, (data) => {
      const tmp = new closure_1_68(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 6, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
})();
let closure_69 = tmp16;
let tmp17 = (() => {
  class Inflate {
    constructor(arg0, arg1) {
      obj = {};
      tmp = arg1;
      obj1 = arg0;
      if (typeof arg0 === "function") {
        obj1 = {};
        tmp = arg0;
      }
      obj.ondata = tmp;
      dictionary1 = obj1;
      if (obj1) {
        dictionary1 = obj1.dictionary;
      }
      if (dictionary1) {
        dictionary = obj1.dictionary;
        num = -32768;
        dictionary1 = dictionary.subarray(-32768);
      }
      num2 = 0;
      if (dictionary1) {
        num2 = dictionary1.length;
      }
      obj.s = { i: 0, b: num2 };
      tmp2 = new closure_1_1(32768);
      obj.o = tmp2;
      tmp3 = new closure_1_1(0);
      obj.p = tmp3;
      if (dictionary1) {
        o = obj.o;
        result = o.set(dictionary1);
      }
      return;
    }
    e(arg0) {
      self = this;
      if (this.ondata) {
        if (self.d) {
          if (typeof closure_1_25 === "function") {
            tmp17 = globalThis;
            _Error4 = Error;
            tmp18 = closure_1_24;
            tmp19 = new.target;
            tmp20 = new.target;
            error = new Error(closure_1_24[4]);
            tmp22 = error;
            num2 = 4;
            error.code = 4;
            _Error5 = Error;
            if (Error.captureStackTrace) {
              _Error6 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp16);
            }
            throw error;
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          tmp9 = arg0;
          if (self.p.length) {
            if (arg0.length) {
              tmp10 = closure_1_1;
              tmp11 = new.target;
              tmp12 = new.target;
              obj = new closure_1_1(self.p.length + arg0.length);
              tmp13 = obj;
              result = obj.set(self.p);
              result1 = obj.set(arg0, self.p.length);
              self.p = obj;
            }
          } else {
            self.p = arg0;
          }
          return;
        }
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        tmp4 = new.target;
        tmp5 = new.target;
        error1 = new Error(closure_1_24[5]);
        tmp7 = error1;
        num = 5;
        error1.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult1 = Error.captureStackTrace(error1, tmp);
        }
        throw error1;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    c(arg0) {
      self = this;
      flag = arg0;
      if (!arg0) {
        flag = false;
      }
      self.d = flag;
      this.s.i = +flag;
      num = self.s.b;
      arr = closure_1_26(self.p, self.s, self.o);
      tmp2 = closure_1_23;
      length = self.s.b;
      if (typeof closure_1_23 === "function") {
        tmp3 = null;
        tmp4 = null == num;
        if (!tmp4) {
          num2 = 0;
          tmp4 = num < 0;
        }
        if (tmp4) {
          num = 0;
        }
        tmp5 = null == length || length > arr.length;
        if (tmp5) {
          length = arr.length;
        }
        tmp6 = closure_1_1;
        tmp7 = new.target;
        tmp8 = new.target;
        obj = new closure_1_1(length - num);
        tmp9 = obj;
        result = obj.set(arr.subarray(num, length));
        tmpResult = tmp(obj, self.d);
        num3 = 32768;
        num4 = self.s.b - 32768;
        if (typeof tmp2 === "function") {
          num5 = 0;
          if (num4 < 0) {
            num4 = 0;
          }
          length2 = arr.length;
          tmp12 = new.target;
          tmp13 = new.target;
          tmp61 = new tmp6(length2 - num4);
          tmp14 = tmp61;
          result1 = tmp61.set(arr.subarray(num4, length2));
          self.o = tmp61;
          self.s.b = self.o.length;
          p = self.p;
          num6 = 8;
          num7 = self.s.p / 8 | 0;
          if (typeof tmp2 === "function") {
            if (num7 < 0) {
              num7 = 0;
            }
            length3 = p.length;
            tmp16 = new.target;
            tmp17 = new.target;
            tmp62 = new tmp6(length3 - num7);
            tmp18 = tmp62;
            result2 = tmp62.set(p.subarray(num7, length3));
            self.p = tmp62;
            s = self.s;
            num8 = 7;
            s.p = s.p & 7;
            return;
          } else {
            str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    push(arg0, arg1) {
      eResult = this.e(arg0);
      cResult = this.c(arg1);
      return;
    }
  }
  return Inflate;
})();
const I = tmp17;
let tmp18 = (() => function AsyncInflate(fn, arg1) {
  const self = this;
  items = [
    closure_46,
    () => {
      items = [closure_1_55, closure_1_72];
      return items;
    }
  ];
  const call = closure_67.call;
  if (typeof call === "unknown") {
    let tmp3 = arg1;
    let obj = fn;
    if (typeof fn === "function") {
      obj = {};
      tmp3 = fn;
    }
    self.ondata = tmp3;
    let callResult = obj;
  } else {
    callResult = call(self, fn, arg1);
  }
  if (typeof closure_56 === "function") {
    closure_45(items, (data) => {
      const tmp = new closure_1_72(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 7, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    }).postMessage(callResult);
    self.push = (buffer, arg1) => {
      if (self.ondata) {
        if (closure_2) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const error = new Error(dependencyMap[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp13(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj2.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        const error1 = new Error(dependencyMap[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj2.terminate();
    };
    const obj2 = closure_45(items, (data) => {
      const tmp = new closure_1_72(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 7, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
})();
const I2 = tmp18;
let tmp19 = (() => {
  class Gzip {
    constructor(arg0, arg1) {
      obj = {};
      if (typeof closure_39 === "function") {
        tmp = arg0;
        tmp2 = arg1;
        num = -1;
        c0 = -1;
        obj1 = { p: null, d: null };
        obj1.p = function p() { ... };
        obj1.d = function d() { ... };
        obj.c = obj1;
        num2 = 0;
        obj.l = 0;
        num3 = 1;
        obj.v = 1;
        tmp3 = closure_68;
        call = closure_68.call;
        if (typeof call === "unknown") {
          tmp3Result = tmp3(arg0, arg1);
        } else {
          callResult = call(obj, arg0, arg1);
        }
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    push(arg0, arg1) {
      self = this;
      c = this.c;
      pResult = c.p(arg0);
      this.l = this.l + arg0.length;
      push = closure_1_68.prototype.push;
      call = push.call;
      if (typeof call === "unknown") {
        arr = push(arg0, arg1);
      } else {
        callResult = call(self, arg0, arg1);
      }
      return;
    }
    p(arg0, arg1) {
      self = this;
      ({ o, v } = this);
      tmp = closure_1_41;
      if (v) {
        tmp2 = closure_1_64;
        o2 = self.o;
        if (typeof closure_1_64 === "function") {
          num = 0;
          if (o2.filename) {
            num2 = 1;
            num = o2.filename.length + 1;
          }
          num3 = 10;
          v = 10 + num;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      num4 = arg1;
      if (arg1) {
        num4 = 8;
      }
      s = self.s;
      if (typeof tmp === "function") {
        tmp3 = arg0;
        arr = arg0;
        if (!s) {
          obj = { l: 1 };
          s = obj;
          arr = arg0;
          if (o.dictionary) {
            dictionary = o.dictionary;
            num5 = -32768;
            subarrayResult = dictionary.subarray(-32768);
            tmp4 = closure_1_1;
            tmp5 = new.target;
            tmp6 = new.target;
            obj2 = new closure_1_1(subarrayResult.length + arg0.length);
            tmp7 = obj2;
            result = obj2.set(subarrayResult);
            result1 = obj2.set(arg0, subarrayResult.length);
            obj.w = subarrayResult.length;
            s = obj;
            arr = obj2;
          }
        }
        tmp11 = null;
        num6 = 6;
        tmp10 = closure_1_37;
        if (null != o.level) {
          num6 = o.level;
        }
        if (null == o.mem) {
          tmp13 = globalThis;
          _Math = Math;
          _Math2 = Math;
          _Math3 = Math;
          _Math4 = Math;
          num8 = 13;
          num9 = 8;
          num10 = 1.5;
          rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
        } else {
          num7 = 12;
          rounded = 12 + o.mem;
        }
        tmp14 = arr;
        tmp15 = num6;
        tmp16 = rounded;
        tmp17 = v;
        tmp18 = num4;
        tmp19 = s;
        tmp10Result = tmp10(arr, num6, rounded, v, num4, s);
        if (self.v) {
          tmp20 = closure_1_61;
          tmp21 = closure_1_61(tmp10Result, self.o);
          num11 = 0;
          self.v = 0;
        }
        if (arg1) {
          tmp22 = closure_1_60;
          num12 = 8;
          diff = tmp10Result.length - 8;
          c = self.c;
          dResult = c.d();
          if (typeof closure_1_60 === "function") {
            num13 = 1;
            while (dResult) {
              tmp10Result[diff] = dResult;
              dResult = dResult >>> 8;
              diff = diff + 1;
            }
            tmp25 = closure_1_60;
            num14 = 4;
            diff1 = tmp10Result.length - 4;
            l = self.l;
            if (typeof closure_1_60 === "function") {
              while (l) {
                tmp10Result[diff1] = l;
                l = l >>> 8;
                diff1 = diff1 + 1;
              }
            } else {
              str4 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        ondataResult = self.ondata(tmp10Result, arg1);
        return;
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return Gzip;
})();
let closure_76 = tmp19;
let tmp20 = (() => function AsyncGzip(fn, arg1) {
  const self = this;
  items = [
    closure_47,
    closure_48,
    () => {
      items = [closure_1_55, closure_1_68, closure_1_76];
      return items;
    }
  ];
  const call = closure_67.call;
  if (typeof call === "unknown") {
    let tmp3 = arg1;
    let obj = fn;
    if (typeof fn === "function") {
      obj = {};
      tmp3 = fn;
    }
    self.ondata = tmp3;
    let callResult = obj;
  } else {
    callResult = call(self, fn, arg1);
  }
  if (typeof closure_56 === "function") {
    closure_45(items, (data) => {
      const tmp = new closure_1_76(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 8, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    }).postMessage(callResult);
    self.push = (buffer, arg1) => {
      if (self.ondata) {
        if (closure_2) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const error = new Error(dependencyMap[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp13(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj2.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        const error1 = new Error(dependencyMap[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj2.terminate();
    };
    const obj2 = closure_45(items, (data) => {
      const tmp = new closure_1_76(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 8, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
})();
let tmp21 = (() => {
  class Gunzip {
    constructor(arg0, arg1) {
      obj = { v: 1, r: 0 };
      tmp = closure_1_72;
      call = closure_1_72.call;
      if (typeof call === "unknown") {
        tmpResult = tmp(arg0, arg1);
      } else {
        callResult = call(obj, arg0, arg1);
      }
      return;
    }
    push(arg0, arg1) {
      self = this;
      e = closure_1_72.prototype.e;
      call = e.call;
      tmp = closure_1_72;
      if (typeof call === "unknown") {
        eResult = e(arg0);
      } else {
        callResult = call(self, arg0);
      }
      self.r = self.r + arg0.length;
      if (!self.v) {
        c = tmp.prototype.c;
        call2 = c.call;
        if (typeof call2 === "unknown") {
          cResult = c(arg1);
        } else {
          call2Result = call2(self, arg1);
        }
        tmp7 = self.s.f && !self.s.l;
        if (tmp7) {
          tmp8 = closure_1_22;
          if (typeof closure_1_22 === "function") {
            num4 = 7;
            num5 = 8;
            num6 = 9;
            self.v = ((tmp9 + 7) / 8 | 0) + 9;
            self.s = { i: 0 };
            tmp11 = new.target;
            tmp12 = new.target;
            num7 = 0;
            tmp10 = closure_1_1;
            tmp13 = new closure_1_1(0);
            tmp14 = tmp13;
            self.o = tmp13;
            if (self.p.length) {
              tmp15 = new.target;
              tmp16 = new.target;
              num8 = 0;
              tmp101 = new tmp10(0);
              tmp18 = tmp101;
              arr1 = self.push(tmp101, arg1);
            }
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        return;
      } else {
        p = self.p;
        num = 1;
        subarrayResult = p.subarray(self.v - 1);
        num2 = 3;
        num3 = 4;
        if (subarrayResult.length > 3) {
          tmp3 = closure_1_62;
          num3 = closure_1_62(subarrayResult);
        }
        if (num3 > subarrayResult.length) {
          if (!arg1) {
            return;
          }
        } else {
          tmp4 = self.v > 1 && self.onmember;
          if (tmp4) {
            onmemberResult = self.onmember(self.r - subarrayResult.length);
          }
        }
        self.p = subarrayResult.subarray(num3);
        num3 = 0;
        self.v = 0;
      }
      return;
    }
  }
  return Gunzip;
})();
const G = tmp21;
let tmp22 = (() => function AsyncGunzip(fn, arg1) {
  const self = this;
  items = [
    closure_46,
    closure_49,
    () => {
      items = [closure_1_55, closure_1_72, closure_1_78];
      return items;
    }
  ];
  const call = closure_67.call;
  if (typeof call === "unknown") {
    let tmp3 = arg1;
    let obj = fn;
    if (typeof fn === "function") {
      obj = {};
      tmp3 = fn;
    }
    self.ondata = tmp3;
    let callResult = obj;
  } else {
    callResult = call(self, fn, arg1);
  }
  if (typeof closure_56 === "function") {
    closure_129_0 = self;
    closure_129_1 = (arg0) => {
      let onmember = self.onmember;
      if (onmember) {
        onmember = self.onmember(arg0);
      }
      return onmember;
    };
    const obj2 = closure_45(items, (data) => {
      const tmp = new closure_1_78(data.data);
      tmp.onmember = (arg0) => globalThis.postMessage(arg0);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 9, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    });
    closure_129_3 = obj2;
    obj2.postMessage(callResult);
    self.push = (buffer, arg1) => {
      if (self.ondata) {
        if (closure_2) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const error = new Error(dependencyMap[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp13(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj2.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        const error1 = new Error(dependencyMap[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj2.terminate();
    };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
})();
const G2 = tmp22;
let tmp23 = (() => {
  class Zlib {
    constructor(arg0, arg1) {
      obj = {};
      if (typeof closure_1_40 === "function") {
        tmp = arg0;
        tmp2 = arg1;
        num = 1;
        c0 = 1;
        num2 = 0;
        c1 = 0;
        obj1 = { p: null, d: null };
        obj1.p = function p() { ... };
        obj1.d = function d() { ... };
        obj.c = obj1;
        obj.v = 1;
        tmp3 = closure_1_68;
        call = closure_1_68.call;
        if (typeof call === "unknown") {
          tmp3Result = tmp3(arg0, arg1);
        } else {
          callResult = call(obj, arg0, arg1);
        }
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    push(arg0, arg1) {
      self = this;
      c = this.c;
      pResult = c.p(arg0);
      push = closure_1_68.prototype.push;
      call = push.call;
      if (typeof call === "unknown") {
        arr = push(arg0, arg1);
      } else {
        callResult = call(self, arg0, arg1);
      }
      return;
    }
    p(arg0, arg1) {
      self = this;
      ({ o, v } = this);
      tmp = closure_1_41;
      if (v) {
        num = 2;
        if (self.o.dictionary) {
          num = 6;
        }
        v = num;
      }
      num2 = arg1;
      if (arg1) {
        num2 = 4;
      }
      s = self.s;
      if (typeof tmp === "function") {
        tmp2 = arg0;
        arr = arg0;
        if (!s) {
          obj = { l: 1 };
          s = obj;
          arr = arg0;
          if (o.dictionary) {
            dictionary = o.dictionary;
            num3 = -32768;
            subarrayResult = dictionary.subarray(-32768);
            tmp3 = closure_1_1;
            tmp4 = new.target;
            tmp5 = new.target;
            obj2 = new closure_1_1(subarrayResult.length + arg0.length);
            tmp6 = obj2;
            result = obj2.set(subarrayResult);
            result1 = obj2.set(arg0, subarrayResult.length);
            obj.w = subarrayResult.length;
            s = obj;
            arr = obj2;
          }
        }
        tmp10 = null;
        num4 = 6;
        tmp9 = closure_1_37;
        if (null != o.level) {
          num4 = o.level;
        }
        if (null == o.mem) {
          tmp12 = globalThis;
          _Math = Math;
          _Math2 = Math;
          _Math3 = Math;
          _Math4 = Math;
          num6 = 13;
          num7 = 8;
          num8 = 1.5;
          rounded = Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(arr.length))));
        } else {
          num5 = 12;
          rounded = 12 + o.mem;
        }
        tmp13 = arr;
        tmp14 = num4;
        tmp15 = rounded;
        tmp16 = v;
        tmp17 = num2;
        tmp18 = s;
        tmp9Result = tmp9(arr, num4, rounded, v, num2, s);
        if (self.v) {
          tmp19 = closure_1_65;
          tmp20 = closure_1_65(tmp9Result, self.o);
          num9 = 0;
          self.v = 0;
        }
        if (arg1) {
          tmp21 = closure_1_60;
          num10 = 4;
          diff = tmp9Result.length - 4;
          c = self.c;
          dResult = c.d();
          if (typeof closure_1_60 === "function") {
            num11 = 8;
            num12 = 1;
            while (dResult) {
              tmp9Result[diff] = dResult;
              dResult = dResult >>> 8;
              diff = diff + 1;
            }
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        ondataResult = self.ondata(tmp9Result, arg1);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return Zlib;
})();
let closure_82 = tmp23;
const frebResult1 = freb(uint8Array1, 0);
let tmp25 = (() => {
  class Unzlib {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_1_72;
      call = closure_1_72.call;
      if (typeof call === "unknown") {
        tmpResult = tmp(arg0, arg1);
      } else {
        callResult = call(self, arg0, arg1);
      }
      num = 1;
      if (arg0) {
        num = 1;
        if (arg0.dictionary) {
          num = 2;
        }
      }
      self.v = num;
      return;
    }
    push(arg0, arg1) {
      self = this;
      e = closure_1_72.prototype.e;
      call = e.call;
      tmp = closure_1_72;
      if (typeof call === "unknown") {
        eResult = e(arg0);
      } else {
        callResult = call(self, arg0);
      }
      if (self.v) {
        num = 6;
        if (self.p.length < 6) {
          if (!arg1) {
            return;
          }
        }
        p = self.p;
        tmp3 = closure_1_66;
        num2 = 1;
        self.p = p.subarray(closure_1_66(self.p, self.v - 1));
        num3 = 0;
        self.v = 0;
      }
      if (arg1) {
        num4 = 4;
        if (self.p.length < 4) {
          if (typeof closure_1_25 === "function") {
            tmp6 = globalThis;
            _Error = Error;
            tmp7 = new.target;
            str = "invalid zlib data";
            tmp8 = new.target;
            error = new Error("invalid zlib data");
            tmp10 = error;
            num7 = 6;
            error.code = 6;
            _Error2 = Error;
            if (Error.captureStackTrace) {
              _Error3 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp5);
            }
            throw error;
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          p2 = self.p;
          num5 = -4;
          num6 = 0;
          self.p = require("Discord");
        }
      }
      c = tmp.prototype.c;
      call2 = c.call;
      if (typeof call2 === "unknown") {
        cResult = c(arg1);
      } else {
        call2Result = call2(self, arg1);
      }
      return;
    }
  }
  return Unzlib;
})();
const Z = tmp25;
let tmp26 = (() => function AsyncUnzlib(fn, arg1) {
  const self = this;
  items = [
    closure_46,
    closure_51,
    () => {
      items = [closure_1_55, closure_1_72, closure_1_84];
      return items;
    }
  ];
  let call = closure_67.call;
  if (typeof call === "unknown") {
    let tmp3 = arg1;
    let obj = fn;
    if (typeof fn === "function") {
      obj = {};
      tmp3 = fn;
    }
    self.ondata = tmp3;
    let callResult = obj;
  } else {
    callResult = call(self, fn, arg1);
  }
  if (typeof closure_56 === "function") {
    closure_45(items, (data) => {
      const tmp = new closure_1_84(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 11, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    }).postMessage(callResult);
    self.push = (buffer, arg1) => {
      if (self.ondata) {
        if (closure_2) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const error = new Error(dependencyMap[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp13(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj2.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        const error1 = new Error(dependencyMap[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj2.terminate();
    };
    const obj2 = closure_45(items, (data) => {
      const tmp = new closure_1_84(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 11, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
})();
const Z2 = tmp26;
let tmp27 = (() => {
  class Decompress {
    constructor(arg0, arg1) {
      obj = { G: closure_1_78, I: closure_1_72, Z: closure_1_84 };
      call = closure_1_67.call;
      if (typeof call === "unknown") {
        tmp2 = arg1;
        obj1 = arg0;
        if (typeof arg0 === "function") {
          obj1 = {};
          tmp2 = arg0;
        }
        obj.ondata = tmp2;
        callResult = obj1;
      } else {
        callResult = call(obj, arg0, arg1);
      }
      if (!callResult) {
        callResult = {};
      }
      obj.o = callResult;
      return;
    }
    push(arg0, arg1) {
      self = this;
      if (this.ondata) {
        tmp9 = arg0;
        tmp10 = arg1;
        if (self.s) {
          s = self.s;
          arr1 = s.push(arg0, arg1);
        } else {
          if (self.p) {
            if (self.p.length) {
              tmp11 = closure_1_1;
              tmp12 = new.target;
              tmp13 = new.target;
              obj = new closure_1_1(self.p.length + arg0.length);
              tmp14 = obj;
              result = obj.set(self.p);
              result1 = obj.set(arg0, self.p.length);
            }
            num2 = 2;
            if (self.p.length > 2) {
              closure_0 = self;
              cb = function cb() { ... };
              num9 = 31;
              if (31 == self.p[0]) {
                num3 = 139;
                if (139 == self.p[1]) {
                  num4 = 8;
                  if (8 == self.p[2]) {
                    tmp24 = new.target;
                    tmp25 = new.target;
                    tmp26 = cb;
                    g = new self.G(self.o, cb);
                  }
                  self.s = g;
                  s1 = self.s;
                  arr3 = s1.push(self.p, arg1);
                  tmp28 = null;
                  self.p = null;
                }
              }
              num5 = 15;
              num6 = 8;
              if (8 === (15 & self.p[0])) {
                num7 = 4;
                num8 = 7;
                if (7 >= self.p[0] >> 4) {
                  if (!((self.p[0] << 8 | self.p[1]) % 31)) {
                    tmp17 = new.target;
                    tmp18 = new.target;
                    tmp19 = cb;
                    g = new self.Z(self.o, cb);
                  }
                }
              }
              tmp21 = new.target;
              tmp22 = new.target;
              tmp23 = cb;
              g = new self.I(self.o, cb);
            }
          }
          self.p = arg0;
        }
        return;
      } else if (typeof closure_1_25 === "function") {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = closure_1_24;
        tmp4 = new.target;
        tmp5 = new.target;
        error = new Error(closure_1_24[5]);
        tmp7 = error;
        num = 5;
        error.code = 5;
        _Error2 = Error;
        if (Error.captureStackTrace) {
          _Error3 = Error;
          captureStackTraceResult = Error.captureStackTrace(error, tmp);
        }
        throw error;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return Decompress;
})();
let closure_88 = tmp27;
function fltn(obj, arg1, arg2, obj2) {
  for (const key10008 in arg0) {
    let tmp20 = arg0[key10008];
    let sum = arg1 + key10008;
    let _Array = Array;
    let tmp6 = arg3;
    let first = tmp20;
    if (Array.isArray(tmp20)) {
      let tmp2 = tmp20[1];
      if (typeof mrg === "function") {
        obj = {};
        for (const key10014 in arg3) {
          obj[key10014] = arg3[key10014];
          continue;
        }
        for (const key10017 in tmp2) {
          obj[key10017] = tmp2[key10017];
          continue;
        }
        first = tmp20[0];
        tmp6 = obj;
      } else {
        let str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    if (first instanceof Uint8Array) {
      items = [first, tmp6];
      arg2[sum] = items;
      continue;
    } else {
      let text = `${tmp21}/`;
      let tmp9 = new.target;
      let tmp10 = new.target;
      let tmp72 = new tmp7(0);
      let items1 = [, ];
      items1[0] = tmp72;
      items1[1] = tmp6;
      arg2[`${tmp21}/`] = items1;
      let tmp18 = fltn(first, `${tmp21}/`, arg2, arg3);
      continue;
    }
    continue;
  }
}
let textEncoder = typeof TextEncoder !== "undefined";
let tmp24 = (() => function AsyncZlib(fn, arg1) {
  const self = this;
  items = [
    closure_47,
    closure_50,
    () => {
      items = [closure_1_55, closure_1_68, closure_1_82];
      return items;
    }
  ];
  const call = closure_67.call;
  if (typeof call === "unknown") {
    let tmp3 = arg1;
    let obj = fn;
    if (typeof fn === "function") {
      obj = {};
      tmp3 = fn;
    }
    self.ondata = tmp3;
    let callResult = obj;
  } else {
    callResult = call(self, fn, arg1);
  }
  if (typeof closure_56 === "function") {
    closure_45(items, (data) => {
      const tmp = new closure_1_82(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 10, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    }).postMessage(callResult);
    self.push = (buffer, arg1) => {
      if (self.ondata) {
        if (closure_2) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const error = new Error(dependencyMap[4]);
            error.code = 4;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error, err);
            }
            tmp13(error, null, arg1);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        items = [buffer, ];
        closure_2 = arg1;
        items[1] = arg1;
        const items1 = [buffer.buffer];
        obj2.postMessage(items, items1);
      } else if (typeof err === "function") {
        const _Error = Error;
        const error1 = new Error(dependencyMap[5]);
        error1.code = 5;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error1, err);
        }
        throw error1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    self.terminate = () => {
      obj2.terminate();
    };
    const obj2 = closure_45(items, (data) => {
      const tmp = new closure_1_82(data.data);
      if (typeof closure_1_55 === "function") {
        closure_0 = tmp;
        tmp.ondata = (buffer, arg1) => {
          items = [buffer, arg1];
          const items1 = [buffer.buffer];
          return globalThis.postMessage(items, items1);
        };
        globalThis.onmessage = (arg0) => closure_0.push(arg0.data[0], arg0.data[1]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, 10, (arg0, arg1) => {
      if (arg0) {
        obj2.terminate();
        const ondata2 = self.ondata;
        const call2 = ondata2.call;
        if (typeof call2 === "unknown") {
          ondata2(arg0);
        } else {
          call2(self, arg0);
        }
      } else {
        const _Array = Array;
        if (Array.isArray(arg1)) {
          if (arg1[1]) {
            obj2.terminate();
          }
          const ondata = self.ondata;
          const call = ondata.call;
          [tmp8, tmp9] = arg1;
          if (typeof call === "unknown") {
            ondata(arg0, tmp8, tmp9);
          } else {
            call(self, arg0, tmp8, tmp9);
          }
        } else {
          closure_1_1(arg1);
        }
      }
    });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
})();
if (typeof TextEncoder !== "undefined") {
  const _TextEncoder = TextEncoder;
  textEncoder = new TextEncoder();
}
let decoder = typeof TextDecoder !== "undefined";
if (typeof TextDecoder !== "undefined") {
  let _TextDecoder = TextDecoder;
  decoder = new TextDecoder();
}
let c92 = 0;
try {
  decoder.decode(_Uint8Array3, { stream: true });
  c92 = 1;
  function dutf8(subarray) {
    let str = "";
    let num = 0;
    const sum = num + 1;
    const sum1 = (tmp2 > 127) + (tmp2 > 223) + (tmp2 > 239);
    while (sum + sum1 <= subarray.length) {
      if (sum1) {
        if (3 === sum1) {
          let sum2 = sum + 1;
          let sum3 = sum2 + 1;
          num = sum3 + 1;
          let diff = ((15 & tmp2) << 18 | (63 & subarray[sum]) << 12 | (63 & subarray[sum2]) << 6 | 63 & subarray[sum3]) - 65536;
          let _String3 = String;
          str = `${String.fromCharCode(55296 | tmp9 >> 10, 56320 | 1023 & tmp9)}`;
          continue;
        } else {
          let _String2 = String;
          if (1 & sum1) {
            let sum4 = sum + 1;
            let fromCharCodeResult = fromCharCode((31 & tmp2) << 6 | 63 & subarray[sum]);
          } else {
            let sum5 = sum + 1;
            sum4 = sum5 + 1;
            fromCharCodeResult = fromCharCode((15 & tmp2) << 12 | (63 & subarray[sum]) << 6 | 63 & subarray[sum5]);
          }
          str = str + fromCharCodeResult;
          num = sum4;
          continue;
        }
        continue;
      } else {
        let _String = String;
        str = str + String.fromCharCode(tmp2);
        num = sum;
        continue;
      }
      continue;
    }
    const obj = { s: str, r: null };
    if (typeof slc === "function") {
      let num2 = sum - 1;
      if (num2 < 0) {
        num2 = 0;
      }
      const obj2 = new Uint8Array(subarray.length - num2);
      const result = obj2.set(subarray.subarray(num2, length));
      obj.r = obj2;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function dbf(arg0) {

  }
  function slzh(arg0, arg1) {
    const sum = arg1 + 26;
    if (typeof b2 === "function") {
      const sum1 = arg1 + 28;
      if (typeof tmp2 === "function") {
        return tmp + (arg0[sum] | arg0[sum + 1] << 8) + (arg0[sum1] | arg0[sum1 + 1] << 8);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function zh(subarray, tmp2Result6, arg2) {
    const sum = tmp2Result6 + 28;
    if (typeof b2 === "function") {
      const sum1 = tmp2Result6 + 8;
      if (typeof b2 === "function") {
        const sum2 = tmp2Result6 + 20;
        if (typeof b4 === "function") {
          const sum3 = tmp8 + tmp4;
          const tmp13 = (subarray[sum2] | subarray[sum2 + 1] << 8 | subarray[sum2 + 2] << 16 | subarray[sum2 + 3] << 24) >>> 0;
          if (arg2) {
            if (4294967295 === tmp13) {
              let items1 = z64e(subarray, sum3);
            }
            const sum4 = tmp2Result6 + 10;
            if (typeof b2 === "function") {
              items = [subarray[sum4] | subarray[sum4 + 1] << 8, tmp17, tmp18, tmp7, , ];
              const sum5 = tmp2Result6 + 30;
              if (typeof b2 === "function") {
                const sum6 = tmp2Result6 + 32;
                if (typeof b2 === "function") {
                  items[4] = sum3 + (subarray[sum5] | subarray[sum5 + 1] << 8) + (subarray[sum6] | subarray[sum6 + 1] << 8);
                  items[5] = tmp19;
                  return items;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          items1 = [tmp13, , ];
          const sum7 = tmp2Result6 + 24;
          if (typeof b4 === "function") {
            items1[1] = (subarray[sum7] | subarray[sum7 + 1] << 8 | subarray[sum7 + 2] << 16 | subarray[sum7 + 3] << 24) >>> 0;
            const sum8 = tmp2Result6 + 42;
            if (typeof b4 === "function") {
              items1[2] = (subarray[sum8] | subarray[sum8 + 1] << 8 | subarray[sum8 + 2] << 16 | subarray[sum8 + 3] << 24) >>> 0;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp4 = subarray[sum] | subarray[sum + 1] << 8;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function z64e(subarray, sum3) {
    if (typeof b2 === "function") {
      let tmp3 = sum3;
      let tmp4 = sum3;
      if (1 !== (subarray[sum3] | subarray[sum3 + 1] << 8)) {
        while (typeof b2 === "function") {
          let sum = tmp3 + 2;
          if (typeof tmp5 === "function") {
            let sum1 = tmp3 + (4 + (subarray[sum] | subarray[sum + 1] << 8));
            tmp3 = sum1;
            tmp4 = sum1;
          } else {
            let str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        throw new TypeError("Trying to call a non-function");
      }
      if (typeof b8 === "function") {
        if (typeof b4 === "function") {
          const sum2 = tmp4 + 12;
          if (typeof b4 === "function") {
            sum3 = sum2 + 4;
            items = [((subarray[sum2] | subarray[sum2 + 1] << 8 | subarray[sum2 + 2] << 16 | tmp12) >>> 0) + 4294967296 * ((subarray[sum3] | subarray[sum3 + 1] << 8 | subarray[sum3 + 2] << 16 | subarray[sum3 + 3] << 24) >>> 0), , ];
            if (typeof b8 === "function") {
              if (typeof b4 === "function") {
                const sum4 = tmp4 + 4;
                if (typeof b4 === "function") {
                  const sum5 = sum4 + 4;
                  items[1] = ((subarray[sum4] | subarray[sum4 + 1] << 8 | subarray[sum4 + 2] << 16 | tmp15) >>> 0) + 4294967296 * ((subarray[sum5] | subarray[sum5 + 1] << 8 | subarray[sum5 + 2] << 16 | subarray[sum5 + 3] << 24) >>> 0);
                  if (typeof b8 === "function") {
                    if (typeof b4 === "function") {
                      const sum6 = tmp4 + 20;
                      if (typeof b4 === "function") {
                        const sum7 = sum6 + 4;
                        items[2] = ((subarray[sum6] | subarray[sum6 + 1] << 8 | subarray[sum6 + 2] << 16 | tmp18) >>> 0) + 4294967296 * ((subarray[sum7] | subarray[sum7 + 1] << 8 | subarray[sum7 + 2] << 16 | subarray[sum7 + 3] << 24) >>> 0);
                        return items;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function exfl(extra) {
    let num = 0;
    if (extra) {
      let num4 = 0;
      num = 0;
      const keys = Object.keys();
      if (keys !== undefined) {
        num = num4;
        while (keys[tmp] !== undefined) {
          let length = extra[tmp5].length;
          if (length > 65535) {
            if (typeof err === "function") {
              let tmp7 = globalThis;
              let _Error = Error;
              let tmp9 = new.target;
              let tmp10 = new.target;
              let error = new Error(items[9]);
              error.code = 9;
              let _Error2 = Error;
              if (Error.captureStackTrace) {
                let _Error3 = Error;
                let captureStackTraceResult = Error.captureStackTrace(error, tmp6);
              }
              throw error;
            } else {
              let str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            num4 = num4 + (length + 4);
            continue;
          }
        }
      }
    }
    return num;
  }
  function wzh(set, o, array, f, u, length, o2, m) {
    const extra = array.extra;
    let length2 = m;
    if (m) {
      length2 = m.length;
    }
    if (typeof exfl === "function") {
      let num2 = 0;
      if (extra) {
        let num5 = 0;
        num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num5;
          while (keys[tmp] !== undefined) {
            let length3 = extra[tmp5].length;
            if (length3 > 65535) {
              if (typeof err === "function") {
                let tmp7 = globalThis;
                let _Error = Error;
                let tmp9 = new.target;
                let tmp10 = new.target;
                let error = new Error(items[9]);
                error.code = 9;
                let _Error2 = Error;
                if (Error.captureStackTrace) {
                  let _Error3 = Error;
                  let captureStackTraceResult = Error.captureStackTrace(error, tmp6);
                }
                throw error;
              } else {
                let str2 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              num5 = num5 + (length3 + 4);
              continue;
            }
          }
        }
      }
      let tmp14 = o2;
      let num7 = 67324752;
      if (null != o2) {
        num7 = 33639248;
      }
      if (typeof wbytes === "function") {
        let sum = o;
        while (num7) {
          set[sum] = num7;
          num7 = num7 >>> 8;
          sum = sum + 1;
        }
        const sum1 = o + 4;
        let sum2 = sum1;
        if (null != tmp14) {
          set[+sum1] = 20;
          sum2 = tmp23 + 1;
          set[++sum1 + 1] = array.os;
        }
        set[sum2] = 20;
        let num14 = length < 0;
        if (num14) {
          num14 = 8;
        }
        let num15 = u;
        set[+sum2 + 2] = array.flag << 1 | num14;
        if (u) {
          num15 = 8;
        }
        set[++sum2 + 2 + 1] = num15;
        const tmp28 = +++sum2 + 2 + 1 + 1;
        set[tmp28] = 255 & array.compression;
        set[+tmp28 + 1] = array.compression >> 8;
        if (null == array.mtime) {
          const _Date = Date;
          let mtime = Date.now();
        } else {
          mtime = array.mtime;
        }
        const date = new Date(mtime);
        const diff = date.getFullYear() - 1980;
        let tmp36 = diff < 0;
        if (diff >= 0) {
          tmp36 = diff > 119;
        }
        if (tmp36) {
          if (typeof err === "function") {
            const _Error4 = Error;
            const error1 = new Error(items[10]);
            error1.code = 10;
            const _Error5 = Error;
            if (Error.captureStackTrace) {
              const _Error6 = Error;
              Error.captureStackTrace(error1, tmp75);
            }
            throw error1;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          const sum3 = date.getMonth() + 1;
          const tmp38 = date.getDate() << 16;
          const tmp39 = date.getHours() << 11;
          if (typeof wbytes === "function") {
            const sum4 = tmp29 + 1;
            let tmp43 = diff << 25 | sum3 << 21 | tmp38 | tmp39 | tmp40 | tmp41;
            let sum5 = sum4;
            while (tmp43) {
              set[sum5] = tmp43;
              tmp43 = tmp43 >>> 8;
              sum5 = sum5 + 1;
            }
            const sum6 = sum4 + 4;
            if (-1 != length) {
              crc = array.crc;
              if (typeof wbytes === "function") {
                let sum7 = sum6;
                while (crc) {
                  set[sum7] = crc;
                  crc = crc >>> 8;
                  sum7 = sum7 + 1;
                }
                let diff1 = length;
                if (length < 0) {
                  diff1 = -length - 2;
                }
                if (typeof wbytes === "function") {
                  let sum8 = sum6 + 4;
                  while (diff1) {
                    set[sum8] = diff1;
                    diff1 = diff1 >>> 8;
                    sum8 = sum8 + 1;
                  }
                  let size = array.size;
                  if (typeof wbytes === "function") {
                    let sum9 = sum6 + 8;
                    while (size) {
                      set[sum9] = size;
                      size = size >>> 8;
                      sum9 = sum9 + 1;
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (typeof wbytes === "function") {
              let sum10 = sum6 + 12;
              let tmp51 = length;
              if (length) {
                do {
                  set[sum10] = tmp51;
                  tmp51 = tmp51 >>> 8;
                  sum10 = sum10 + 1;
                } while (tmp51);
              }
              if (typeof wbytes === "function") {
                let sum11 = sum6 + 14;
                let tmp53 = num2;
                if (num2) {
                  do {
                    set[sum11] = tmp53;
                    tmp53 = tmp53 >>> 8;
                    sum11 = sum11 + 1;
                  } while (tmp53);
                }
                const sum12 = sum6 + 16;
                let sum16 = sum12;
                if (null != tmp14) {
                  if (typeof wbytes === "function") {
                    let sum13 = sum12;
                    let tmp57 = length2;
                    if (length2) {
                      do {
                        set[sum13] = tmp57;
                        tmp57 = tmp57 >>> 8;
                        sum13 = sum13 + 1;
                      } while (tmp57);
                    }
                    let attrs = array.attrs;
                    if (typeof wbytes === "function") {
                      let sum14 = sum12 + 6;
                      while (attrs) {
                        set[sum14] = attrs;
                        attrs = attrs >>> 8;
                        sum14 = sum14 + 1;
                      }
                      if (typeof wbytes === "function") {
                        let sum15 = sum12 + 10;
                        while (tmp14) {
                          set[sum15] = tmp14;
                          tmp14 = tmp14 >>> 8;
                          sum15 = sum15 + 1;
                        }
                        sum16 = sum12 + 14;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                const result = set.set(f, sum16);
                const sum17 = sum16 + length;
                let tmp62 = sum17;
                if (num2) {
                  let sum20 = sum17;
                  tmp62 = sum17;
                  const keys1 = Object.keys();
                  if (keys1 !== undefined) {
                    tmp62 = sum20;
                    while (keys1[sum12] !== undefined) {
                      let arr = extra[tmp67];
                      let length4 = arr.length;
                      let tmp69 = +tmp67;
                      if (typeof wbytes === "function") {
                        let sum18 = sum20;
                        while (tmp69) {
                          set[sum18] = tmp69;
                          tmp69 = tmp69 >>> 8;
                          sum18 = sum18 + 1;
                        }
                        if (typeof tmp84 === "function") {
                          let sum19 = sum20 + 2;
                          let tmp71 = length4;
                          if (length4) {
                            do {
                              set[sum19] = tmp71;
                              tmp71 = tmp71 >>> 8;
                              sum19 = sum19 + 1;
                            } while (tmp71);
                          }
                          let result1 = set.set(arr, sum20 + 4);
                          sum20 = sum20 + (4 + length4);
                          continue;
                        } else {
                          let str14 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        let str13 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                }
                let sum21 = tmp62;
                if (length2) {
                  const result2 = set.set(m, tmp62);
                  sum21 = tmp62 + length2;
                }
                return sum21;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp40 = date.getMinutes() << 5;
        }
        const tmp26 = array.flag << 1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  function wzf(arg0, arg1, length, arg3, arg4) {
    let num = 101010256;
    let sum = arg1;
    if (typeof wbytes === "function") {
      do {
        arg0[sum] = num;
        num = num >>> 8;
        sum = sum + 1;
      } while (num);
      if (typeof wbytes === "function") {
        let tmp3 = length;
        let sum1 = arg1 + 8;
        let tmp5 = length;
        if (length) {
          do {
            arg0[sum1] = tmp5;
            tmp5 = tmp5 >>> 8;
            sum1 = sum1 + 1;
          } while (tmp5);
        }
        if (typeof wbytes === "function") {
          let sum2 = arg1 + 10;
          while (tmp3) {
            arg0[sum2] = tmp3;
            tmp3 = tmp3 >>> 8;
            sum2 = sum2 + 1;
          }
          if (typeof wbytes === "function") {
            let tmp7 = arg3;
            let sum3 = arg1 + 12;
            if (arg3) {
              do {
                arg0[sum3] = tmp7;
                tmp7 = tmp7 >>> 8;
                sum3 = sum3 + 1;
              } while (tmp7);
            }
            if (typeof wbytes === "function") {
              let tmp9 = arg4;
              let sum4 = arg1 + 16;
              if (arg4) {
                do {
                  arg0[sum4] = tmp9;
                  tmp9 = tmp9 >>> 8;
                  sum4 = sum4 + 1;
                } while (tmp9);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  let tmp31 = (() => {
    class DecodeUTF8 {
      constructor(arg0) {
        self = this;
        this.ondata = arg0;
        if (closure_1_92) {
          tmp2 = globalThis;
          _TextDecoder = TextDecoder;
          tmp3 = new.target;
          tmp4 = new.target;
          textDecoder = new TextDecoder();
          tmp6 = textDecoder;
          self.t = textDecoder;
        } else {
          tmp = closure_1_36;
          self.p = closure_1_36;
        }
        return;
      }
      push(arg0, arg1) {
        self = this;
        if (this.ondata) {
          tmp9 = arg0;
          tmp10 = arg1;
          tmp11 = arg1;
          if (self.t) {
            ({ t, ondata } = self);
            ondataResult = ondata(t.decode(arg0, { stream: true }), tmp11);
            if (tmp11) {
              t2 = self.t;
              if (t2.decode().length) {
                if (typeof closure_1_25 === "function") {
                  tmp42 = globalThis;
                  _Error10 = Error;
                  tmp43 = closure_1_24;
                  tmp44 = new.target;
                  tmp45 = new.target;
                  error = new Error(closure_1_24[8]);
                  tmp47 = error;
                  num5 = 8;
                  error.code = 8;
                  _Error11 = Error;
                  if (Error.captureStackTrace) {
                    _Error12 = Error;
                    captureStackTraceResult = Error.captureStackTrace(error, tmp41);
                  }
                  throw error;
                } else {
                  str4 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                tmp39 = null;
                self.t = null;
                tmp40 = null;
              }
            }
            return;
          } else if (self.p) {
            tmp20 = closure_1_1;
            tmp21 = new.target;
            tmp22 = new.target;
            obj = new closure_1_1(self.p.length + arg0.length);
            tmp23 = obj;
            result = obj.set(self.p);
            result1 = obj.set(arg0, self.p.length);
            tmp26 = closure_1_93;
            num3 = 0;
            tmp27 = closure_1_93(obj);
            ({ r, s } = tmp27);
            if (tmp11) {
              if (r.length) {
                if (typeof closure_1_25 === "function") {
                  tmp31 = globalThis;
                  _Error7 = Error;
                  tmp32 = closure_1_24;
                  tmp33 = new.target;
                  tmp34 = new.target;
                  error1 = new Error(closure_1_24[8]);
                  tmp36 = error1;
                  num4 = 8;
                  error1.code = 8;
                  _Error8 = Error;
                  if (Error.captureStackTrace) {
                    _Error9 = Error;
                    captureStackTraceResult1 = Error.captureStackTrace(error1, tmp30);
                  }
                  throw error1;
                } else {
                  str3 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                tmp28 = null;
                self.p = null;
              }
            } else {
              self.p = r;
            }
            ondataResult1 = self.ondata(s, tmp11);
            return;
          } else if (typeof closure_1_25 === "function") {
            tmp13 = globalThis;
            _Error4 = Error;
            tmp14 = closure_1_24;
            tmp15 = new.target;
            tmp16 = new.target;
            error2 = new Error(closure_1_24[4]);
            tmp18 = error2;
            num2 = 4;
            error2.code = 4;
            _Error5 = Error;
            if (Error.captureStackTrace) {
              _Error6 = Error;
              captureStackTraceResult2 = Error.captureStackTrace(error2, tmp12);
            }
            throw error2;
          } else {
            str2 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof closure_1_25 === "function") {
          tmp2 = globalThis;
          _Error = Error;
          tmp3 = closure_1_24;
          tmp4 = new.target;
          tmp5 = new.target;
          error3 = new Error(closure_1_24[5]);
          tmp7 = error3;
          num = 5;
          error3.code = 5;
          _Error2 = Error;
          if (Error.captureStackTrace) {
            _Error3 = Error;
            captureStackTraceResult3 = Error.captureStackTrace(error3, tmp);
          }
          throw error3;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    return DecodeUTF8;
  })();
  let tmp33 = (() => {
    class ZipPassThrough {
      constructor(arg0) {
        obj = { filename: arg0 };
        if (typeof closure_39 === "function") {
          num = -1;
          c0 = -1;
          obj1 = { p: null, d: null };
          obj1.p = function p() { ... };
          obj1.d = function d() { ... };
          obj.c = obj1;
          num2 = 0;
          obj.size = 0;
          obj.compression = 0;
          return;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      process(arg0, arg1) {
        ondataResult = this.ondata(null, arg0, arg1);
        return;
      }
      push(arg0, arg1) {
        self = this;
        if (this.ondata) {
          tmp9 = arg0;
          flag = arg1;
          c = self.c;
          pResult = c.p(arg0);
          self.size = self.size + arg0.length;
          if (arg1) {
            c2 = self.c;
            self.crc = c2.d();
          }
          if (!flag) {
            flag = false;
          }
          processResult = self.process(arg0, flag);
          return;
        } else if (typeof closure_1_25 === "function") {
          tmp2 = globalThis;
          _Error = Error;
          tmp3 = closure_1_24;
          tmp4 = new.target;
          tmp5 = new.target;
          error = new Error(closure_1_24[5]);
          tmp7 = error;
          num = 5;
          error.code = 5;
          _Error2 = Error;
          if (Error.captureStackTrace) {
            _Error3 = Error;
            captureStackTraceResult = Error.captureStackTrace(error, tmp);
          }
          throw error;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    return ZipPassThrough;
  })();
  let closure_103 = tmp33;
  let tmp32 = (() => {
    class EncodeUTF8 {
      constructor(arg0) {
        this.ondata = arg0;
        return;
      }
      push(arg0, arg1) {
        self = this;
        if (this.ondata) {
          if (self.d) {
            if (typeof closure_1_25 === "function") {
              tmp14 = globalThis;
              _Error4 = Error;
              tmp15 = closure_1_24;
              tmp16 = new.target;
              tmp17 = new.target;
              error = new Error(closure_1_24[4]);
              tmp19 = error;
              num2 = 4;
              error.code = 4;
              _Error5 = Error;
              if (Error.captureStackTrace) {
                _Error6 = Error;
                captureStackTraceResult = Error.captureStackTrace(error, tmp13);
              }
              throw error;
            } else {
              str2 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            tmp9 = arg0;
            flag = arg1;
            tmp10 = closure_1_94;
            tmp11 = closure_1_94(arg0);
            if (!arg1) {
              flag = false;
            }
            self.d = flag;
            ondataResult = self.ondata(tmp11, flag);
            return;
          }
        } else if (typeof closure_1_25 === "function") {
          tmp2 = globalThis;
          _Error = Error;
          tmp3 = closure_1_24;
          tmp4 = new.target;
          tmp5 = new.target;
          error1 = new Error(closure_1_24[5]);
          tmp7 = error1;
          num = 5;
          error1.code = 5;
          _Error2 = Error;
          if (Error.captureStackTrace) {
            _Error3 = Error;
            captureStackTraceResult1 = Error.captureStackTrace(error1, tmp);
          }
          throw error1;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    return EncodeUTF8;
  })();
  let tmp34 = (() => {
    class ZipDeflate {
      constructor(arg0, arg1) {
        self = this;
        obj = arg1;
        self = this;
        if (!arg1) {
          obj = {};
        }
        tmp = closure_1_103;
        call = closure_1_103.call;
        if (typeof call === "unknown") {
          tmpResult = tmp(arg0);
        } else {
          callResult = call(self, arg0);
        }
        tmp3 = new closure_1_68(obj, /* F127728 */ function() { ... });
        self.d = tmp3;
        self.compression = 8;
        level = obj.level;
        if (typeof closure_1_96 === "function") {
          num = 1;
          num2 = 3;
          if (1 != level) {
            num3 = 6;
            num4 = 2;
            if (level >= 6) {
              num5 = 9;
              num6 = 0;
              if (9 == level) {
                num6 = 1;
              }
              num4 = num6;
            }
            num2 = num4;
          }
          self.flag = num2;
          return;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      process(arg0, arg1) {
        try {
          tmp3 = arg0;
          d = tmp2.d;
          arr1 = d.push(arg0, arg1);
          return;
        } catch (tmp5) {
          tmp6 = null;
          ondataResult = obj.ondata(tmp5, null, tmp);
        }
        return;
      }
      push(arg0, arg1) {
        self = this;
        push = closure_1_103.prototype.push;
        call = push.call;
        if (typeof call === "unknown") {
          arr = push(arg0, arg1);
        } else {
          callResult = call(self, arg0, arg1);
        }
        return;
      }
    }
    return ZipDeflate;
  })();
  let tmp35 = (() => {
    class AsyncZipDeflate {
      constructor(arg0, arg1) {
        self = this;
        obj = arg1;
        self = this;
        if (!arg1) {
          obj = {};
        }
        tmp = closure_1_103;
        call = closure_1_103.call;
        if (typeof call === "unknown") {
          tmpResult = tmp(arg0);
        } else {
          callResult = call(self, arg0);
        }
        tmp3 = new closure_1_69(obj, /* F127729 */ function() { ... });
        self.d = tmp3;
        self.compression = 8;
        level = obj.level;
        if (typeof closure_1_96 === "function") {
          num = 1;
          num2 = 3;
          if (1 != level) {
            num3 = 6;
            num4 = 2;
            if (level >= 6) {
              num5 = 9;
              num6 = 0;
              if (9 == level) {
                num6 = 1;
              }
              num4 = num6;
            }
            num2 = num4;
          }
          self.flag = num2;
          self.terminate = self.d.terminate;
          return;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      process(arg0, arg1) {
        d = this.d;
        arr1 = d.push(arg0, arg1);
        return;
      }
      push(arg0, arg1) {
        self = this;
        push = closure_1_103.prototype.push;
        call = push.call;
        if (typeof call === "unknown") {
          arr = push(arg0, arg1);
        } else {
          callResult = call(self, arg0, arg1);
        }
        return;
      }
    }
    return AsyncZipDeflate;
  })();
  let tmp37 = (() => {
    class UnzipPassThrough {
      constructor() {
        return;
      }
      push(arg0, arg1) {
        ondataResult = this.ondata(null, arg0, arg1);
        return;
      }
    }
    UnzipPassThrough.compression = 0;
    return UnzipPassThrough;
  })();
  let closure_104 = tmp37;
  let tmp36 = (() => {
    class Zip {
      constructor(arg0) {
        return;
      }
      add(arg0) {
        self = this;
        closure_0 = arg0;
        self = this;
        if (this.ondata) {
          num2 = 2;
          if (2 & self.d) {
            num15 = 1;
            if (typeof closure_25 === "function") {
              num16 = 8;
              num17 = 4;
              sum = 4 + 8 * tmp60;
              tmp62 = globalThis;
              _Error10 = Error;
              tmp63 = closure_24;
              tmp64 = new.target;
              tmp65 = new.target;
              error = new Error(closure_24[sum]);
              tmp67 = error;
              error.code = sum;
              _Error11 = Error;
              if (Error.captureStackTrace) {
                _Error12 = Error;
                captureStackTraceResult = Error.captureStackTrace(error, tmp59);
              }
              flag2 = false;
              tmp69 = null;
              tmp58Result = tmp58(error, null, false);
            } else {
              str6 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            tmp10 = closure_94;
            arr = closure_94(arg0.filename);
            length = arr.length;
            comment = arg0.comment;
            tmp10Result = comment;
            if (comment) {
              tmp10Result = tmp10(comment);
            }
            tmp11 = length != arg0.filename.length;
            if (!tmp11) {
              tmp12 = tmp10Result;
              if (tmp10Result) {
                tmp12 = comment.length != tmp10Result.length;
              }
              tmp11 = tmp12;
            }
            tmp13 = closure_100;
            extra = arg0.extra;
            if (typeof closure_100 === "function") {
              num3 = 0;
              num4 = 0;
              if (extra) {
                tmp14 = extra;
                num5 = 4;
                num6 = 65535;
                num7 = 0;
                num4 = 0;
                keys = Object.keys();
                if (keys !== undefined) {
                  tmp16 = num7;
                  num4 = num7;
                  tmp17 = keys[tmp];
                  while (tmp17 !== undefined) {
                    tmp71 = tmp17;
                    length2 = extra[tmp17].length;
                    if (length2 > 65535) {
                      if (typeof closure_25 === "function") {
                        tmp19 = globalThis;
                        _Error4 = Error;
                        tmp20 = closure_24;
                        tmp21 = new.target;
                        tmp22 = new.target;
                        error1 = new Error(closure_24[9]);
                        tmp24 = error1;
                        num8 = 9;
                        error1.code = 9;
                        _Error5 = Error;
                        if (Error.captureStackTrace) {
                          _Error6 = Error;
                          captureStackTraceResult1 = Error.captureStackTrace(error1, tmp18);
                        }
                        throw error1;
                      } else {
                        str3 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      num7 = num7 + (length2 + 4);
                      continue;
                    }
                  }
                }
              }
              num9 = 30;
              sum1 = length + num4 + 30;
              closure_2 = sum1;
              num10 = 65535;
              if (length > 65535) {
                if (typeof closure_25 === "function") {
                  tmp29 = globalThis;
                  _Error7 = Error;
                  tmp30 = closure_24;
                  tmp31 = new.target;
                  tmp32 = new.target;
                  error2 = new Error(closure_24[11]);
                  tmp34 = error2;
                  num11 = 11;
                  error2.code = 11;
                  _Error8 = Error;
                  if (Error.captureStackTrace) {
                    _Error9 = Error;
                    captureStackTraceResult2 = Error.captureStackTrace(error2, tmp28);
                  }
                  flag = false;
                  tmp36 = null;
                  tmp27Result = tmp27(error2, null, false);
                } else {
                  str4 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              }
              tmp38 = self;
              tmp39 = new.target;
              tmp40 = new.target;
              tmp41 = sum1;
              tmp42 = new self(sum1);
              tmp43 = tmp42;
              tmp44 = closure_101;
              num12 = -1;
              num13 = 0;
              tmp45 = tmp42;
              num14 = 0;
              tmp46 = arg0;
              tmp47 = arr;
              tmp48 = tmp11;
              tmp49 = closure_101(tmp42, 0, arg0, arr, tmp11, -1);
              items = [];
              items[0] = tmp42;
              closure_3 = items;
              pAll_1 = function pAll_1() { ... };
              c5 = self.d;
              self.d = 0;
              length = self.u.length;
              tmp50 = closure_42;
              obj = { f: null, u: null, o: null, t: null, r: null };
              obj.f = arr;
              obj.u = tmp11;
              obj.o = tmp10Result;
              obj.t = function t() { ... };
              obj.r = function r() { ... };
              if (typeof closure_42 === "function") {
                obj1 = {};
                tmp51 = arg0;
                keys1 = Object.keys();
                if (keys1 !== undefined) {
                  tmp53 = keys1[4];
                  while (tmp53 !== undefined) {
                    tmp72 = tmp53;
                    obj1[tmp53] = arg0[tmp53];
                    continue;
                  }
                }
                tmp54 = obj;
                keys2 = Object.keys();
                if (keys2 !== undefined) {
                  tmp56 = keys2[4];
                  while (tmp56 !== undefined) {
                    tmp73 = tmp56;
                    obj1[tmp56] = obj[tmp56];
                    continue;
                  }
                }
                closure_7 = obj1;
                closure_8 = 0;
                arg0.ondata = function ondata() { ... };
                u = self.u;
                arr1 = u.push(obj1);
              } else {
                str5 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              str2 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          return;
        } else if (typeof closure_25 === "function") {
          tmp3 = globalThis;
          _Error = Error;
          tmp4 = closure_24;
          tmp5 = new.target;
          tmp6 = new.target;
          error3 = new Error(closure_24[5]);
          tmp8 = error3;
          num = 5;
          error3.code = 5;
          _Error2 = Error;
          if (Error.captureStackTrace) {
            _Error3 = Error;
            captureStackTraceResult3 = Error.captureStackTrace(error3, tmp2);
          }
          throw error3;
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      end() {
        self = this;
        self = this;
        if (2 & this.d) {
          num2 = 1;
          if (typeof closure_1_25 === "function") {
            num3 = 8;
            num4 = 4;
            sum = 4 + 8 * tmp5;
            tmp7 = globalThis;
            _Error = Error;
            tmp8 = closure_1_24;
            tmp9 = new.target;
            tmp10 = new.target;
            error = new Error(closure_1_24[sum]);
            tmp12 = error;
            error.code = sum;
            _Error2 = Error;
            if (Error.captureStackTrace) {
              _Error3 = Error;
              captureStackTraceResult = Error.captureStackTrace(error, tmp4);
            }
            flag = true;
            tmp14 = null;
            tmp3Result = tmp3(error, null, true);
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          if (self.d) {
            eResult = self.e();
          } else {
            u = self.u;
            obj = { r: null, t: null };
            obj.r = function r() { ... };
            obj.t = function t() { ... };
            arr1 = u.push(obj);
          }
          num = 3;
          self.d = 3;
        }
        return;
      }
      e() {
        self = this;
        u = this.u;
        num = 0;
        num2 = 0;
        num3 = 0;
        if (0 < u.length) {
          tmp3 = u[num];
          tmp5 = closure_1_100;
          extra = tmp3.extra;
          tmp6 = num;
          tmp7 = num2;
          while (typeof closure_1_100 === "function") {
            num4 = 0;
            if (extra) {
              tmp8 = extra;
              num5 = 0;
              num4 = 0;
              keys = Object.keys();
              if (keys !== undefined) {
                tmp10 = num5;
                num4 = num5;
                tmp11 = keys[tmp];
                while (tmp11 !== undefined) {
                  tmp48 = tmp11;
                  length = extra[tmp11].length;
                  if (length > 65535) {
                    if (typeof closure_1_25 === "function") {
                      tmp13 = globalThis;
                      _Error = Error;
                      tmp14 = closure_1_24;
                      tmp15 = new.target;
                      tmp16 = new.target;
                      error = new Error(closure_1_24[9]);
                      tmp18 = error;
                      num6 = 9;
                      error.code = 9;
                      _Error2 = Error;
                      if (Error.captureStackTrace) {
                        _Error3 = Error;
                        captureStackTraceResult = Error.captureStackTrace(error, tmp12);
                      }
                      throw error;
                    } else {
                      str2 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    num5 = num5 + (length + 4);
                    continue;
                  }
                }
              }
            }
            num7 = 0;
            if (tmp3.o) {
              num7 = tmp3.o.length;
            }
            num2 = num2 + (tmp4 + num4 + num7);
            num = num + 1;
            num3 = num2;
          }
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
        tmp20 = new closure_1_1(num3 + 22);
        tmp21 = tmp20;
        u1 = self.u;
        num8 = 0;
        num9 = 0;
        num10 = 0;
        num11 = 0;
        num12 = 0;
        if (0 < u1.length) {
          tmp22 = u1[num8];
          tmp23 = closure_1_101;
          num13 = 0;
          tmp24 = tmp20;
          tmp25 = num10;
          tmp26 = tmp22;
          tmp27 = num9;
          tmp28 = closure_1_101(tmp21, num10, tmp22, tmp22.f, tmp22.u, -tmp22.c - 2, num9, tmp22.o);
          tmp30 = closure_1_100;
          extra2 = tmp22.extra;
          tmp31 = num8;
          tmp32 = num9;
          tmp33 = num10;
          while (typeof closure_1_100 === "function") {
            num14 = 0;
            if (extra2) {
              tmp34 = extra2;
              num15 = 0;
              num14 = 0;
              keys1 = Object.keys();
              if (keys1 !== undefined) {
                tmp36 = num15;
                num14 = num15;
                tmp37 = keys1[tmp2];
                while (tmp37 !== undefined) {
                  tmp49 = tmp37;
                  length2 = extra2[tmp37].length;
                  if (length2 > 65535) {
                    if (typeof closure_1_25 === "function") {
                      tmp39 = globalThis;
                      _Error4 = Error;
                      tmp40 = closure_1_24;
                      tmp41 = new.target;
                      tmp42 = new.target;
                      error1 = new Error(closure_1_24[9]);
                      tmp44 = error1;
                      num16 = 9;
                      error1.code = 9;
                      _Error5 = Error;
                      if (Error.captureStackTrace) {
                        _Error6 = Error;
                        captureStackTraceResult1 = Error.captureStackTrace(error1, tmp38);
                      }
                      throw error1;
                    } else {
                      str4 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    num15 = num15 + (length2 + 4);
                    continue;
                  }
                }
              }
            }
            num17 = 0;
            if (tmp22.o) {
              num17 = tmp22.o.length;
            }
            num10 = num10 + (tmp29 + num14 + num17);
            num9 = num9 + tmp22.b;
            num8 = num8 + 1;
            num11 = num9;
            num12 = num10;
          }
          str3 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
        tmp46 = closure_1_102(tmp21, num12, self.u.length, num3, num11);
        ondataResult = self.ondata(null, tmp20, true);
        self.d = 2;
        return;
      }
      terminate() {
        u = this.u;
        num = 0;
        if (0 < u.length) {
          do {
            obj = u[num];
            tResult = obj.t();
            num = num + 1;
            length = u.length;
          } while (num < length);
        }
        this.d = 2;
        return;
      }
    }
    return Zip;
  })();
  let tmp38 = (() => {
    class UnzipInflate {
      constructor() {
        self = this;
        tmp = new closure_1_72(/* F127736 */ function() { ... });
        this.i = tmp;
        return;
      }
      push(arg0, arg1) {
        try {
          tmp3 = arg0;
          i = tmp2.i;
          arr1 = i.push(arg0, arg1);
          return;
        } catch (tmp5) {
          tmp6 = null;
          ondataResult = obj.ondata(tmp5, null, tmp);
        }
        return;
      }
    }
    UnzipInflate.compression = 8;
    return UnzipInflate;
  })();
  const _queueMicrotask = queueMicrotask;
  let tmp39 = (() => {
    class AsyncUnzipInflate {
      constructor(arg0, arg1) {
        self = this;
        self = this;
        if (arg1 < 320000) {
          tmp6 = closure_1_72;
          tmp7 = new.target;
          tmp8 = new.target;
          tmp9 = new closure_1_72(/* F127737 */ function() { ... });
          tmp10 = tmp9;
          self.i = tmp9;
        } else {
          tmp = closure_1_73;
          tmp2 = new.target;
          tmp3 = new.target;
          tmp4 = new closure_1_73(/* F127738 */ function() { ... });
          tmp5 = tmp4;
          self.i = tmp4;
          self.terminate = self.i.terminate;
        }
        return;
      }
      push(arg0, arg1) {
        tmp = arg0;
        if (this.i.terminate) {
          tmp2 = closure_1_23;
          if (typeof closure_1_23 === "function") {
            length = arg0.length;
            tmp3 = closure_1_1;
            num = 0;
            tmp4 = new.target;
            tmp5 = new.target;
            obj = new closure_1_1(length);
            tmp6 = obj;
            result = obj.set(arg0.subarray(0, length));
            tmp = obj;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        i = this.i;
        arr1 = i.push(tmp, arg1);
        return;
      }
    }
    AsyncUnzipInflate.compression = 8;
    return AsyncUnzipInflate;
  })();
  if (typeof queueMicrotask === "function") {
    let fn = queueMicrotask;
  } else {
    const _setTimeout = setTimeout;
    if (typeof setTimeout === "function") {
      fn = setTimeout;
    } else {
      fn = (fn) => {
        fn();
      };
    }
  }
  function gzip(buffer, arg1, arg2) {
    let tmp = arg2;
    let obj = arg1;
    if (!arg2) {
      obj = {};
      tmp = arg1;
    }
    if (typeof tmp !== "function") {
      if (typeof err === "function") {
        const _Error = Error;
        const error = new Error(items[7]);
        error.code = 7;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error, tmp6);
        }
        throw error;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      items = [
        bDflt,
        gze,
        () => {
            items = [gzipSync];
            return items;
          }
      ];
      if (typeof cbify === "function") {
        closure_0 = tmp;
        const items1 = [buffer, obj];
        if (obj.consume) {
          const items2 = [buffer.buffer];
          let items3 = items2;
        } else {
          items3 = [];
        }
        wrkr(items, (arg0) => {
          const tmp = gzipSync(arg0.data[0], arg0.data[1]);
          if (typeof pbf === "function") {
            items = [tmp.buffer];
            return globalThis.postMessage(tmp, items);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }, 2, (arg0, arg1) => {
          obj2.terminate();
          closure_0(arg0, arg1);
        }).postMessage(items1, items3);
        return () => {
          obj2.terminate();
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  arg5.FlateErrorCode = { UnexpectedEOF: 0, InvalidBlockType: 1, InvalidLengthLiteral: 2, InvalidDistance: 3, StreamFinished: 4, NoStreamHandler: 5, InvalidHeader: 6, NoCallback: 7, InvalidUTF8: 8, ExtraFieldTooLong: 9, InvalidDate: 10, FilenameTooLong: 11, StreamFinishing: 12, InvalidZipData: 13, UnknownCompressionMethod: 14 };
  arg5.Deflate = tmp15;
  arg5.AsyncDeflate = tmp16;
  arg5.deflate = deflate;
  arg5.deflateSync = deflateSync;
  arg5.Inflate = tmp17;
  arg5.AsyncInflate = tmp18;
  arg5.inflate = inflate;
  arg5.inflateSync = inflateSync;
  arg5.Gzip = tmp19;
  arg5.AsyncGzip = tmp20;
  arg5.gzip = gzip;
  arg5.gzipSync = gzipSync;
  arg5.Gunzip = tmp21;
  arg5.AsyncGunzip = tmp22;
  arg5.gunzip = gunzip;
  arg5.gunzipSync = gunzipSync;
  arg5.Zlib = tmp23;
  arg5.AsyncZlib = tmp24;
  arg5.zlib = function zlib(buffer, arg1, arg2) {
    let tmp = arg2;
    let obj = arg1;
    if (!arg2) {
      obj = {};
      tmp = arg1;
    }
    if (typeof tmp !== "function") {
      if (typeof err === "function") {
        const _Error = Error;
        const error = new Error(items[7]);
        error.code = 7;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error, tmp6);
        }
        throw error;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      items = [
        bDflt,
        zle,
        () => {
            items = [zlibSync];
            return items;
          }
      ];
      if (typeof cbify === "function") {
        closure_0 = tmp;
        const items1 = [buffer, obj];
        if (obj.consume) {
          const items2 = [buffer.buffer];
          let items3 = items2;
        } else {
          items3 = [];
        }
        wrkr(items, (arg0) => {
          const tmp = zlibSync(arg0.data[0], arg0.data[1]);
          if (typeof pbf === "function") {
            items = [tmp.buffer];
            return globalThis.postMessage(tmp, items);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }, 4, (arg0, arg1) => {
          obj2.terminate();
          closure_0(arg0, arg1);
        }).postMessage(items1, items3);
        return () => {
          obj2.terminate();
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  };
  arg5.zlibSync = zlibSync;
  arg5.Unzlib = tmp25;
  arg5.AsyncUnzlib = tmp26;
  arg5.unzlib = unzlib;
  arg5.unzlibSync = unzlibSync;
  arg5.compress = gzip;
  arg5.AsyncCompress = tmp20;
  arg5.compressSync = gzipSync;
  arg5.Compress = tmp19;
  arg5.Decompress = tmp27;
  arg5.AsyncDecompress = tmp28;
  arg5.decompress = function decompress(buffer, arg1, arg2) {
    let tmp = arg2;
    let obj = arg1;
    if (!arg2) {
      obj = {};
      tmp = arg1;
    }
    if (typeof tmp !== "function") {
      if (typeof err === "function") {
        const _Error = Error;
        const error = new Error(items[7]);
        error.code = 7;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error, tmp6);
        }
        throw error;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      if (31 == buffer[0]) {
        if (139 == buffer[1]) {
          if (8 == buffer[2]) {
            let tmp3 = gunzip(buffer, obj, tmp);
          }
          return tmp3;
        }
      }
      if (8 === (15 & buffer[0])) {
        if (7 >= buffer[0] >> 4) {
          if (!((buffer[0] << 8 | buffer[1]) % 31)) {
            tmp3 = unzlib(buffer, obj, tmp);
          }
        }
      }
      tmp3 = inflate(buffer, obj, tmp);
    }
  };
  arg5.decompressSync = function decompressSync(subarray, dictionary) {
    if (31 == subarray[0]) {
      if (139 == subarray[1]) {
        if (8 == subarray[2]) {
          let tmp8Result = gunzipSync(subarray, dictionary);
        }
        return tmp8Result;
      }
    }
    if (8 === (15 & subarray[0])) {
      if (7 >= subarray[0] >> 4) {
        if (!((subarray[0] << 8 | subarray[1]) % 31)) {
          if (dictionary) {
            dictionary = dictionary.dictionary;
          }
          const subarrayResult = subarray.subarray(zls(subarray, dictionary), -4);
          let out = dictionary;
          if (dictionary) {
            out = dictionary.out;
          }
          let dictionary2 = dictionary;
          if (dictionary) {
            dictionary2 = dictionary.dictionary;
          }
          tmp8Result = inflt(subarrayResult, { i: 2 }, out, dictionary2);
        }
      }
    }
    let out2 = dictionary;
    if (dictionary) {
      out2 = dictionary.out;
    }
    let dictionary3 = dictionary;
    if (dictionary) {
      dictionary3 = dictionary.dictionary;
    }
    tmp8Result = inflt(subarray, { i: 2 }, out2, dictionary3);
  };
  arg5.DecodeUTF8 = tmp31;
  arg5.EncodeUTF8 = tmp32;
  arg5.strToU8 = strToU8;
  arg5.strFromU8 = strFromU8;
  arg5.ZipPassThrough = tmp33;
  arg5.ZipDeflate = tmp34;
  arg5.AsyncZipDeflate = tmp35;
  arg5.Zip = tmp36;
  arg5.zip = function zip(arg0, arg1, arg2) {
    let tmp = arg2;
    closure_0 = arg2;
    let obj = arg1;
    if (!arg2) {
      closure_0 = arg1;
      obj = {};
      tmp = arg1;
    }
    if (typeof tmp !== "function") {
      if (typeof err === "function") {
        const _Error = Error;
        const error = new Error(items[7]);
        error.code = 7;
        const _Error2 = Error;
        if (Error.captureStackTrace) {
          const _Error3 = Error;
          Error.captureStackTrace(error, tmp4);
        }
        throw error;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      let obj2 = {};
      fltn(arg0, "", obj2, obj);
      const _Object = Object;
      let keys = Object.keys(obj2);
      closure_4 = 0;
      closure_5 = 0;
      const _Array = Array;
      const array = new Array(length);
      closure_8 = [];
      function tAll() {
        let num = 0;
        if (0 < closure_8.length) {
          do {
            let tmp2 = closure_8[num]();
            num = num + 1;
            length = closure_8.length;
          } while (num < length);
        }
      }
      closure_10 = function cbd(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        fn(() => {
          closure_0(closure_0, closure_1);
        });
      };
      fn(() => {
        closure_10 = closure_0;
      });
      function cbf() {
        const obj = new Uint8Array(closure_5 + 22);
        closure_5 = 0;
        let num = 0;
        if (0 < length) {
          while (true) {
            try {
              length = tmp6.c.length;
              let tmp8 = length;
              let tmp14 = wzh(tmp2, closure_5, tmp6, tmp6.f, tmp6.u, length);
              let sum = 30 + tmp6.f.length;
              let sum1 = sum + exfl(tmp6.extra);
              let sum2 = closure_5 + sum1;
              let tmp20 = sum2;
              let result = obj.set(tmp6.c, sum2);
              let tmp27 = wzh(tmp2, closure_4, tmp6, tmp6.f, tmp6.u, length, closure_5, tmp6.m);
              let num4 = 0;
              let tmp28 = closure_4;
              if (tmp6.m) {
                num4 = tmp6.m.length;
              }
              closure_4 = tmp28 + (16 + sum1 + num4);
              closure_5 = tmp20 + tmp8;
              num = num + 1;
              if (num >= length) {
                break;
              }
            } catch (tmp34) {
              return closure_10(tmp34, null);
            }
          }
        }
        wzf(obj, closure_4, array.length, closure_5 - closure_4, closure_4);
        closure_10(null, obj);
      }
      if (!keys.length) {
        cbf();
      }
      for (let num2 = 0; num2 < length; num2 = num2 + 1) {
        let tmp3 = (function _loop_1(arg0) {
          closure_0 = arg0;
          [arr, tmp4] = keys[arg0][keys[arg0]];
          keys = tmp4;
          crc().p(arr);
          length = arr.length;
          let obj = crc();
          const arr2 = strToU8(keys[arg0]);
          const comment = tmp4.comment;
          let tmp6Result = comment;
          if (comment) {
            tmp6Result = strToU8(comment);
          }
          const m = tmp6Result;
          closure_10 = exfl(tmp4.extra);
          let num = 8;
          if (0 == tmp4.level) {
            num = 0;
          }
          function cbl(arg0, arr) {
            if (arg0) {
              if (typeof tAll === "function") {
                let num6 = 0;
                if (0 < m.length) {
                  do {
                    let tmp29 = m[num6]();
                    num6 = num6 + 1;
                    length2 = m.length;
                  } while (num6 < length2);
                }
                closure_10(arg0, null);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              length = arr.length;
              obj = { size: length, crc: null, c: null, f: null, m: null, u: null, compression: null };
              obj.crc = obj.d();
              obj.c = arr;
              obj.f = arr2;
              let tmp9 = m;
              obj.m = m;
              let tmp12 = length2 != length.length;
              if (!tmp12) {
                if (tmp9) {
                  tmp9 = comment.length != length3;
                }
                tmp12 = tmp9;
              }
              obj.u = tmp12;
              obj.compression = num;
              if (typeof mrg === "function") {
                obj2 = {};
                for (const key10025 in tmp5) {
                  obj2[key10025] = tmp4[key10025];
                  continue;
                }
                for (const key10028 in obj) {
                  obj2[key10028] = obj[key10028];
                  continue;
                }
                array[closure_0] = obj2;
                closure_4 = closure_4 + (30 + tmp10 + closure_10 + length);
                let num2 = length3;
                const sum = tmp10 + closure_10;
                if (!length3) {
                  num2 = 0;
                }
                closure_5 = closure_5 + (76 + 2 * sum + num2 + length);
                const diff = length - 1;
                length = diff;
                if (!diff) {
                  cbf();
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          if (length2 > 65535) {
            cbl(err(11, 0, 1), null);
          }
          if (num) {
            if (length < 160000) {
              try {
                cbl(null, deflateSync(arr, tmp4));
              } catch (tmp18) {
                tmp2(tmp18, null);
              }
            } else {
              m.push(deflate(arr, tmp4, cbl));
            }
          } else {
            cbl(null, arr);
          }
          length2 = strToU8(keys[arg0]).length;
        })(num2);
      }
      return tAll;
    }
  };
  arg5.zipSync = function zipSync(arg0, arg1) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    const obj2 = {};
    items = [];
    fltn(arg0, "", obj2, obj);
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num3 = num;
      num4 = num2;
      while (keys[tmp] !== undefined) {
        [arr7, tmp71] = obj2[arr2];
        let num5 = 8;
        if (0 == tmp71.level) {
          num5 = 0;
        }
        let arr3 = strToU8(arr2);
        let length = arr3.length;
        let comment = tmp71.comment;
        let tmp7Result = comment;
        if (comment) {
          tmp7Result = strToU8(comment);
        }
        let num6 = tmp7Result;
        if (tmp7Result) {
          num6 = tmp7Result.length;
        }
        let extra = tmp71.extra;
        if (typeof exfl === "function") {
          let num7 = 0;
          if (extra) {
            let num8 = 0;
            num7 = 0;
            let keys1 = Object.keys();
            if (keys1 !== undefined) {
              num7 = num8;
              let tmp12 = keys1[tmp2];
              while (tmp12 !== undefined) {
                let length3 = extra[tmp12].length;
                if (length3 > 65535) {
                  if (typeof err === "function") {
                    let tmp14 = globalThis;
                    let _Error = Error;
                    let tmp16 = new.target;
                    let tmp17 = new.target;
                    let error = new Error(items[9]);
                    error.code = 9;
                    let _Error2 = Error;
                    if (Error.captureStackTrace) {
                      let _Error3 = Error;
                      let captureStackTraceResult = Error.captureStackTrace(error, tmp13);
                    }
                    throw error;
                  } else {
                    let str2 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  num8 = num8 + (length3 + 4);
                  continue;
                }
              }
            }
          }
          if (length > 65535) {
            if (typeof err === "function") {
              let tmp32 = globalThis;
              let _Error4 = Error;
              let tmp34 = new.target;
              let tmp35 = new.target;
              let error1 = new Error(items[11]);
              error1.code = 11;
              let _Error5 = Error;
              if (Error.captureStackTrace) {
                let _Error6 = Error;
                let captureStackTraceResult1 = Error.captureStackTrace(error1, tmp31);
              }
              throw error1;
            } else {
              let str5 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            let arr6 = arr7;
            if (num5) {
              arr6 = deflateSync(arr7, tmp71);
            }
            let length2 = arr6.length;
            if (typeof crc === "function") {
              c0 = -1;
              let obj3 = {
                p(arg0) {
                            let length;
                            let tmp = closure_0;
                            let num = 0;
                            let tmp2 = closure_0;
                            if (0 < arg0.length) {
                              do {
                                tmp = closure_2_38[255 & tmp ^ arg0[num]] ^ tmp >>> 8;
                                num = num + 1;
                                tmp2 = tmp;
                                length = arg0.length;
                              } while (num < length);
                            }
                            closure_0 = tmp2;
                          },
                d() {
                            return ~closure_0;
                          }
              };
              let pResult = obj3.p(arr7);
              let obj4 = { size: arr7.length, crc: obj3.d(), c: arr6, f: arr3, m: tmp7Result, u: null, o: null, compression: null };
              let tmp25 = length != arr2.length;
              if (!tmp25) {
                if (tmp7Result) {
                  tmp7Result = comment.length != num6;
                }
                tmp25 = tmp7Result;
              }
              obj4.u = tmp25;
              obj4.o = num2;
              obj4.compression = num5;
              if (typeof mrg === "function") {
                let obj5 = {};
                for (const key10080 in tmp71) {
                  obj5[key10080] = tmp71[key10080];
                  continue;
                }
                for (const key10083 in obj4) {
                  obj5[key10083] = obj4[key10083];
                  continue;
                }
                let arr = items.push(obj5);
                let sum = 30 + length + num7 + length2;
                let sum1 = length + num7;
                if (!num6) {
                  num6 = 0;
                }
                num2 = num2 + sum;
                num = num + (76 + 2 * sum1 + num6 + length2);
                continue;
              } else {
                let str4 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              let str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          let str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    const obj6 = new Uint8Array(num3 + 22);
    let num11 = 0;
    let sum3 = num4;
    let tmp41 = num4;
    if (0 < items.length) {
      wzh(tmp39, items[num11].o, items[num11], items[num11].f, items[num11].u, items[num11].c.length);
      const extra2 = tmp42.extra;
      while (typeof exfl === "function") {
        let num13 = 0;
        if (extra2) {
          let num14 = 0;
          num13 = 0;
          let keys2 = Object.keys();
          if (keys2 !== undefined) {
            num13 = num14;
            let tmp54 = keys2[tmp];
            while (tmp54 !== undefined) {
              let length4 = extra2[tmp54].length;
              if (length4 > 65535) {
                if (typeof err === "function") {
                  let tmp56 = globalThis;
                  let _Error7 = Error;
                  let tmp58 = new.target;
                  let tmp59 = new.target;
                  let error2 = new Error(items[9]);
                  error2.code = 9;
                  let _Error8 = Error;
                  if (Error.captureStackTrace) {
                    let _Error9 = Error;
                    let captureStackTraceResult2 = Error.captureStackTrace(error2, tmp55);
                  }
                  throw error2;
                } else {
                  let str7 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                num14 = num14 + (length4 + 4);
                continue;
              }
            }
          }
        }
        let sum2 = tmp47 + num13;
        let result = obj6.set(tmp42.c, tmp42.o + sum2);
        let tmp43Result = wzh(tmp39, tmp50, tmp42, tmp42.f, tmp42.u, tmp42.c.length, tmp42.o, tmp42.m);
        let num17 = 0;
        if (tmp42.m) {
          num17 = tmp42.m.length;
        }
        sum3 = sum3 + (16 + sum2 + num17);
        num11 = num11 + 1;
        tmp41 = sum3;
      }
      throw new TypeError("Trying to call a non-function");
    }
    wzf(obj6, tmp41, items.length, num3 - num4, num4);
    return obj6;
  };
  arg5.UnzipPassThrough = tmp37;
  arg5.UnzipInflate = tmp38;
  arg5.AsyncUnzipInflate = tmp39;
  arg5.Unzip = (() => {
    class Unzip {
      constructor(arg0) {
        obj = { 0: closure_1_104 };
        return;
      }
      push(arg0, arg1) {
        self = this;
        closure_0 = this;
        if (this.onfile) {
          if (self.p) {
            tmp17 = arg0;
            tmp18 = arg1;
            num3 = 0;
            if (self.c > 0) {
              tmp71 = globalThis;
              _Math = Math;
              bound = Math.min(self.c, arg0.length);
              subarrayResult = arg0.subarray(0, bound);
              self.c = self.c - bound;
              if (self.d) {
                d = self.d;
                arr1 = d.push(subarrayResult, !self.c);
              } else {
                first = self.k[0];
                arr10 = first.push(subarrayResult);
              }
              subarrayResult1 = arg0.subarray(bound);
              if (subarrayResult1.length) {
                return self.push(subarrayResult1, arg1);
              }
            } else {
              obj = arg0;
              p = arg0;
              if (self.p.length) {
                if (arg0.length) {
                  tmp19 = closure_1;
                  tmp20 = new.target;
                  tmp21 = new.target;
                  obj2 = new closure_1(self.p.length + arg0.length);
                  tmp22 = obj2;
                  result = obj2.set(self.p);
                  result1 = obj2.set(arg0, self.p.length);
                  obj = obj2;
                  p = obj2;
                } else {
                  p = self.p;
                }
              }
              length = p.length;
              c = self.c;
              d1 = c;
              if (c) {
                d1 = self.d;
              }
              num4 = 4;
              num5 = 1;
              str = "break";
              num6 = 2;
              num7 = -1;
              num8 = 2048;
              num9 = 8;
              num10 = 22;
              num11 = 16;
              num12 = 3;
              num13 = 24;
              num14 = 30;
              num15 = 4294967295;
              num16 = 18;
              num17 = 28;
              num18 = 26;
              num19 = 6;
              tmp25 = null;
              num20 = 12;
              num21 = -2;
              num22 = 33639248;
              num23 = 134695760;
              num24 = 67324752;
              num25 = 0;
              num26 = 0;
              num27 = 0;
              num28 = 0;
              if (0 < length - 4) {
                tmp28 = closure_58;
                tmp29 = tmp26;
                tmp30 = num25;
                tmp31 = num26;
                while (typeof closure_58 === "function") {
                  tmp32 = (obj[num25] | obj[num25 + 1] << 8 | obj[num25 + 2] << 16 | obj[num25 + 3] << 24) >>> 0;
                  if (67324752 === tmp32) {
                    self.d = null;
                    self.c = 0;
                    tmp36 = closure_57;
                    if (typeof closure_57 === "function") {
                      sum = num25 + 6;
                      tmp38 = obj[sum] | obj[sum + 1] << 8;
                      if (typeof tmp36 === "function") {
                        sum1 = num25 + 8;
                        tmp40 = obj[sum1] | obj[sum1 + 1] << 8;
                        closure_0 = tmp40;
                        if (typeof tmp36 === "function") {
                          sum2 = num25 + 26;
                          tmp42 = obj[sum2] | obj[sum2 + 1] << 8;
                          if (typeof tmp36 === "function") {
                            sum3 = num25 + 28;
                            tmp44 = obj[sum3] | obj[sum3 + 1] << 8;
                            sum4 = num25 + 30;
                            sum8 = num25;
                            num30 = 1;
                            if (length > sum4 + tmp42 + tmp44) {
                              items = [];
                              closure_1 = items;
                              k = self.k;
                              arr11 = k.unshift(items);
                              if (typeof tmp28 === "function") {
                                sum5 = num25 + 18;
                                num31 = (obj[sum5] | obj[sum5 + 1] << 8 | obj[sum5 + 2] << 16 | obj[sum5 + 3] << 24) >>> 0;
                                c3 = num31;
                                if (typeof tmp28 === "function") {
                                  tmp50 = 8 & tmp38;
                                  sum6 = num25 + 22;
                                  tmp52 = (obj[sum6] | obj[sum6 + 1] << 8 | obj[sum6 + 2] << 16 | obj[sum6 + 3] << 24) >>> 0;
                                  closure_4 = tmp52;
                                  tmp53 = closure_95;
                                  sum7 = num25 + (30 + tmp42);
                                  tmp49 = 2048 & tmp38;
                                  tmp55 = closure_95(obj.subarray(sum4, sum7), !tmp49);
                                  closure_5 = tmp55;
                                  if (4294967295 === num31) {
                                    if (tmp50) {
                                      items1 = [-2];
                                    } else {
                                      tmp57 = closure_99;
                                      items1 = closure_99(obj, sum7);
                                    }
                                    first1 = items1[0];
                                    c3 = first1;
                                    tmp59 = items1[1];
                                    closure_4 = tmp59;
                                    tmp60 = tmp59;
                                    tmp61 = first1;
                                  } else {
                                    tmp56 = tmp52;
                                    if (tmp50) {
                                      c3 = -1;
                                      tmp56 = tmp52;
                                      num31 = -1;
                                    }
                                    self.c = num31;
                                    obj1 = { name: null, compression: null, start: null, terminate: null };
                                    obj1.name = tmp55;
                                    obj1.compression = tmp40;
                                    obj1.start = function start() { ... };
                                    obj1.terminate = function terminate() { ... };
                                    closure_6 = obj1;
                                    if (num31 >= 0) {
                                      obj1.size = num31;
                                      obj1.originalSize = tmp56;
                                    }
                                    sum8 = sum7 + tmp44;
                                    onfileResult = self.onfile(obj1);
                                    num30 = 2;
                                  }
                                } else {
                                  str11 = "Trying to call a non-function";
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                str10 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                            tmp34 = sum8;
                            num29 = num30;
                            sum9 = num25;
                            str2 = "break";
                          } else {
                            str9 = "Trying to call a non-function";
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          str8 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        str7 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      str6 = "Trying to call a non-function";
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    sum9 = tmp26;
                    tmp34 = num25;
                    num29 = num26;
                    if (c) {
                      if (134695760 === tmp32) {
                        tmp35 = -2 == c && 8;
                        sum9 = num25 + (12 + tmp35);
                        self.c = 0;
                        tmp34 = sum9;
                        num29 = 3;
                        str2 = "break";
                      } else {
                        sum9 = tmp26;
                        tmp34 = num25;
                        num29 = num26;
                        if (33639248 === tmp32) {
                          sum9 = num25 - 4;
                          self.c = 0;
                          tmp34 = sum9;
                          num29 = 3;
                          str2 = "break";
                        }
                      }
                    }
                  }
                  tmp27 = sum9;
                  num27 = tmp34;
                  num28 = num29;
                  if ("break" !== str2) {
                    num25 = tmp34 + 1;
                    tmp26 = sum9;
                    num26 = num29;
                    tmp27 = sum9;
                    num28 = num29;
                    num27 = num25;
                  }
                }
                str5 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
              tmp63 = closure_36;
              self.p = closure_36;
              if (c < 0) {
                subarray = p.subarray;
                if (num28) {
                  tmp65 = -2 == c && 8;
                  tmp66 = closure_58;
                  if (typeof closure_58 === "function") {
                    diff = tmp27 - 16;
                    tmp68 = (p[diff] | p[diff + 1] << 8 | p[diff + 2] << 16 | p[diff + 3] << 24) >>> 0;
                    num32 = 134695760 === tmp68;
                    if (134695760 === tmp68) {
                      num32 = 4;
                    }
                    subarrayResult2 = subarray(0, tmp27 - 12 - tmp65 - num32);
                  } else {
                    str12 = "Trying to call a non-function";
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  subarrayResult2 = subarray(0, num27);
                }
                if (d1) {
                  arr12 = d1.push(subarrayResult2, num28);
                } else {
                  arr6 = self.k[+2 === num28];
                  arr13 = arr6.push(subarrayResult2);
                }
              }
              if (2 & num28) {
                return self.push(p.subarray(num27), arg1);
              } else {
                self.p = p.subarray(num27);
              }
            }
            if (arg1) {
              if (self.c) {
                if (typeof closure_25 === "function") {
                  tmp78 = globalThis;
                  _Error7 = Error;
                  tmp79 = closure_24;
                  tmp80 = new.target;
                  tmp81 = new.target;
                  error = new Error(closure_24[13]);
                  tmp83 = error;
                  num33 = 13;
                  error.code = 13;
                  _Error8 = Error;
                  if (Error.captureStackTrace) {
                    _Error9 = Error;
                    captureStackTraceResult = Error.captureStackTrace(error, tmp77);
                  }
                  throw error;
                } else {
                  str13 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                tmp76 = null;
                self.p = null;
              }
            }
            return;
          } else if (typeof closure_25 === "function") {
            tmp10 = globalThis;
            _Error4 = Error;
            tmp11 = closure_24;
            tmp12 = new.target;
            tmp13 = new.target;
            error1 = new Error(closure_24[4]);
            tmp15 = error1;
            num2 = 4;
            error1.code = 4;
            _Error5 = Error;
            if (Error.captureStackTrace) {
              _Error6 = Error;
              captureStackTraceResult1 = Error.captureStackTrace(error1, tmp9);
            }
            throw error1;
          } else {
            str4 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof closure_25 === "function") {
          tmp2 = globalThis;
          _Error = Error;
          tmp3 = closure_24;
          tmp4 = new.target;
          tmp5 = new.target;
          error2 = new Error(closure_24[5]);
          tmp7 = error2;
          num = 5;
          error2.code = 5;
          _Error2 = Error;
          if (Error.captureStackTrace) {
            _Error3 = Error;
            captureStackTraceResult2 = Error.captureStackTrace(error2, tmp);
          }
          throw error2;
        } else {
          str3 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      register(arg0) {
        this.o[arg0.compression] = arg0;
        return;
      }
    }
    return Unzip;
  })();
  arg5.unzip = function unzip(arg0, arg1, arg2) {
    closure_0 = arg0;
    let tmp = arg2;
    closure_1 = arg2;
    let obj = arg1;
    if (!arg2) {
      closure_1 = arg1;
      obj = {};
      tmp = arg1;
    }
    if (typeof tmp !== "function") {
      if (typeof err === "function") {
        const _Error4 = Error;
        const error = new Error(items[7]);
        error.code = 7;
        const _Error5 = Error;
        if (Error.captureStackTrace) {
          const _Error6 = Error;
          Error.captureStackTrace(error, tmp31);
        }
        throw error;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      closure_2 = [];
      function tAll() {
        let length;
        let num = 0;
        if (0 < closure_2.length) {
          do {
            let tmp2 = closure_2[num]();
            num = num + 1;
            length = closure_2.length;
          } while (num < length);
        }
      }
      closure_4 = {};
      uint8Array1 = function cbd(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        fn(() => {
          closure_1(closure_0, closure_1);
        });
      };
      fn(() => {
        closure_5 = closure_1;
      });
      let diff = arg0.length - 22;
      let tmp6 = b4;
      if (typeof b4 === "function") {
        let tmp2 = diff;
        let tmp3 = diff;
        if (101010256 !== (arg0[diff] | arg0[diff + 1] << 8 | arg0[diff + 2] << 16 | arg0[diff + 3] << 24) >>> 0) {
          while (tmp2) {
            if (65558 < arg0.length - tmp2) {
              break;
            } else if (typeof b4 === "function") {
              let diff1 = tmp2 - 1;
              tmp2 = diff1;
              tmp3 = diff1;
              tmp6 = tmp42;
            } else {
              let str2 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (typeof err === "function") {
            const _Error = Error;
            const error1 = new Error(items[13]);
            error1.code = 13;
            const _Error2 = Error;
            if (Error.captureStackTrace) {
              const _Error3 = Error;
              Error.captureStackTrace(error1, tmp21);
            }
            tmp20(error1, null);
            return tAll;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (typeof b2 === "function") {
          const sum = tmp3 + 8;
          uint8Array2 = tmp9;
          if (arg0[sum] | arg0[sum + 1] << 8) {
            const tmp6Result = tmp6(arg0, tmp3 + 16);
            closure_7 = tmp6Result;
            let tmp14 = 4294967295 == tmp6Result;
            if (!tmp14) {
              tmp14 = 65535 === tmp9;
            }
            closure_8 = tmp14;
            let tmp15 = tmp9;
            if (tmp14) {
              const tmp6Result3 = tmp6(arg0, tmp3 - 12);
              const tmp17 = 101075792 == tmp6(arg0, tmp6Result3);
              closure_8 = tmp17;
              tmp15 = tmp9;
              if (tmp17) {
                const tmp6Result4 = tmp6(arg0, tmp6Result3 + 32);
                uint8Array2 = tmp6Result4;
                closure_7 = tmp6(arg0, tmp6Result3 + 48);
                tmp15 = tmp6Result4;
              }
            }
            let filter = obj;
            if (obj) {
              filter = obj.filter;
            }
            for (let num16 = 0; num16 < tmp15; num16 = num16 + 1) {
              let tmp19 = (function _loop_3(arg0) {
                const tmp2 = zh(closure_0, closure_7, closure_8);
                [tmp3, tmp4, tmp5, tmp6] = tmp2;
                closure_0 = tmp6;
                const tmp7 = slzh(closure_0, tmp2[5]);
                closure_7 = tmp2[4];
                function cbl(arg0, arg1) {
                  let length;
                  if (arg0) {
                    if (typeof tAll === "function") {
                      let num = 0;
                      if (0 < closure_2.length) {
                        do {
                          let tmp13 = closure_2[num]();
                          num = num + 1;
                          length = closure_2.length;
                        } while (num < length);
                      }
                      closure_5(arg0, null);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    if (arg1) {
                      closure_4[closure_0] = arg1;
                    }
                    diff = diff - 1;
                    if (!diff) {
                      closure_5(null, closure_4);
                    }
                  }
                }
                if (filter) {
                  const obj2 = { name: tmp6, size: tmp4, originalSize: tmp5, compression: tmp3 };
                  if (!tmp8(obj2)) {
                    cbl(null, null);
                  }
                }
                if (tmp3) {
                  if (8 == tmp3) {
                    const subarrayResult = obj.subarray(tmp7, tmp7 + tmp4);
                    if (tmp4 < 320000) {
                      try {
                        const obj3 = { out: null };
                        const tmp26 = new closure_1(tmp5);
                        obj3.out = tmp26;
                        cbl(null, inflateSync(subarrayResult, obj3));
                      } catch (tmp30) {
                        tmp(tmp30, null);
                      }
                    } else {
                      const obj4 = { size: tmp5 };
                      closure_2.push(inflate(subarrayResult, obj4, cbl));
                    }
                  } else {
                    cbl(err(14, `unknown compression type ${tmp3}`, 1), null);
                  }
                } else {
                  cbl(null, slc(obj, tmp7, tmp7 + tmp4));
                }
              })();
            }
          } else {
            uint8Array1(null, {});
          }
          return tAll;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  };
  arg5.unzipSync = function unzipSync(subarray, arg1) {
    const diff = subarray.length - 22;
    let tmp2 = b4;
    if (typeof b4 === "function") {
      let tmp3 = diff;
      let tmp4 = diff;
      if (101010256 !== (subarray[diff] | subarray[diff + 1] << 8 | subarray[diff + 2] << 16 | subarray[diff + 3] << 24) >>> 0) {
        while (true) {
          let tmp5 = !tmp3;
          if (tmp3) {
            tmp5 = subarray.length - tmp3 > 65558;
          }
          if (tmp5) {
            break;
          } else if (typeof b4 === "function") {
            let diff1 = tmp3 - 1;
            tmp3 = diff1;
            tmp4 = diff1;
            tmp2 = tmp7;
          } else {
            let str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (typeof err === "function") {
          const _Error3 = Error;
          const error = new Error(items[13]);
          error.code = 13;
          const _Error4 = Error;
          if (Error.captureStackTrace) {
            const _Error5 = Error;
            Error.captureStackTrace(error, tmp62);
          }
          throw error;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (typeof b2 === "function") {
        const sum = tmp4 + 8;
        if (subarray[sum] | subarray[sum + 1] << 8) {
          const tmp2Result = tmp2(subarray, tmp4 + 16);
          let tmp13 = 4294967295 == tmp2Result;
          if (!tmp13) {
            tmp13 = 65535 === tmp11;
          }
          let tmp2Result6 = tmp2Result;
          let tmp2Result5 = tmp11;
          if (tmp13) {
            const tmp2Result4 = tmp2(subarray, tmp4 - 12);
            const tmp17 = 101075792 == tmp2(subarray, tmp2Result4);
            tmp2Result6 = tmp2Result;
            tmp2Result5 = tmp11;
            tmp13 = tmp17;
            if (tmp17) {
              tmp2Result5 = tmp2(subarray, tmp2Result4 + 32);
              tmp2Result6 = tmp2(subarray, tmp2Result4 + 48);
              tmp13 = tmp17;
            }
          }
          let filter = arg1;
          if (arg1) {
            filter = arg1.filter;
          }
          const obj = {};
          let num19 = 0;
          if (0 < tmp2Result5) {
            const tmp20 = zh(subarray, tmp2Result6, tmp13);
            const first = tmp20[0];
            while (typeof slzh === "function") {
              let sum1 = tmp26 + 26;
              if (typeof b2 === "function") {
                let sum2 = tmp26 + 28;
                if (typeof tmp30 === "function") {
                  let tmp35 = filter;
                  let tmp34 = subarray[sum2] | subarray[sum2 + 1] << 8;
                  if (filter) {
                    let obj2 = { name: tmp24, size: tmp22, originalSize: tmp23, compression: first };
                    tmp35 = !filter(obj2);
                  }
                  if (!tmp35) {
                    let sum3 = tmp29 + tmp32 + tmp34;
                    if (first) {
                      if (8 == first) {
                        let subarrayResult = subarray.subarray(sum3, sum3 + tmp22);
                        let obj4 = { out: null };
                        let tmp55 = new.target;
                        let tmp56 = new.target;
                        let tmp58 = new Uint8Array(tmp23);
                        obj4.out = tmp58;
                        obj[tmp24] = inflt(subarrayResult, { i: 2 }, obj4.out, obj4.dictionary);
                      } else {
                        let str = "unknown compression type ";
                        let text = `unknown compression type ${tmp21}`;
                        if (typeof err === "function") {
                          let tmp45 = globalThis;
                          if (!`unknown compression type ${tmp21}`) {
                            text = items[14];
                          }
                          let tmp47 = new.target;
                          let tmp48 = new.target;
                          let error1 = new Error(text);
                          error1.code = 14;
                          let _Error = Error;
                          if (Error.captureStackTrace) {
                            let _Error2 = Error;
                            let captureStackTraceResult1 = Error.captureStackTrace(error1, tmp43);
                          }
                          throw error1;
                        } else {
                          let str9 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                    } else {
                      let length = sum3 + tmp22;
                      if (typeof slc === "function") {
                        let num20 = sum3;
                        if (sum3 < 0) {
                          num20 = 0;
                        }
                        if (length > subarray.length) {
                          length = subarray.length;
                        }
                        let tmp39 = new.target;
                        let tmp40 = new.target;
                        let obj3 = new Uint8Array(length - num20);
                        let result = obj3.set(subarray.subarray(num20, length));
                        obj[tmp24] = obj3;
                      } else {
                        let str8 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                  }
                  num19 = num19 + 1;
                  tmp2Result6 = tmp25;
                } else {
                  let str7 = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let str6 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
            throw new TypeError("Trying to call a non-function");
          }
          return obj;
        } else {
          return {};
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
} catch (err) {
}