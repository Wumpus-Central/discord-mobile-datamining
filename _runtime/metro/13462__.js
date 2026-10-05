// _runtime/metro/13462__.js
let hasOwnProperty;

let tmp = typeof Uint8Array !== "undefined";
if (typeof Uint8Array !== "undefined") {
  let _Uint16Array = Uint16Array;
  tmp = typeof Uint16Array !== "undefined";
}
if (tmp) {
  let _Int32Array = Int32Array;
  tmp = typeof Int32Array !== "undefined";
}
let closure_1 = {
  arraySet(subarray, subarray2, arg2, arg3, arg4) {
    let num;
    if (subarray2.subarray) {
      if (subarray.subarray) {
        const result = subarray.set(subarray2.subarray(arg2, arg2 + arg3), arg4);
      }
    }
    for (let num = 0; num < arg3; num = num + 1) {
      subarray[arg4 + num] = subarray2[arg2 + num];
    }
  },
  flattenChunks(arg0) {
    let num5;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < arg0.length) {
      do {
        num = num + arg0[num2].length;
        num2 = num2 + 1;
        num3 = num;
      } while (num2 < arg0.length);
    }
    const uint8Array = new Uint8Array(num3);
    let num4 = 0;
    const length2 = arg0.length;
    for (let num5 = 0; num5 < length2; num5 = num5 + 1) {
      let arr = arg0[num5];
      let result = uint8Array.set(arr, num4);
      num4 = num4 + arr.length;
    }
    return uint8Array;
  },
};
let closure_2 = {
  arraySet(arg0, arg1, arg2, arg3, arg4) {
    let num;
    for (let num = 0; num < arg3; num = num + 1) {
      arg0[arg4 + num] = arg1[arg2 + num];
    }
  },
  flattenChunks(arg0) {
    const concat = [].concat;
    return concat.apply([], arg0);
  },
};
exports.setTyped(tmp);

export const assign = function (arg0) {
  let arr;
  const callResult = slice.call(arguments, 1);
  if (callResult.length) {
    while (true) {
      arr = callResult.shift();
      if (arr) {
        if (typeof arr !== "object") {
          break;
        } else {
          for (const key10013 in arr) {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            if (!hasOwnProperty.call(arr, key10013)) {
              continue;
            } else {
              arg0[key10013] = arr[key10013];
              continue;
            }
            continue;
          }
        }
      }
    }
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError(arr + "must be non-object");
    throw typeError;
  }
  return arg0;
};
export const shrinkBuf = (output, next_out) => {
  let tmp = output;
  if (output.length !== next_out) {
    let subarrayResult;
    if (output.subarray) {
      subarrayResult = output.subarray(0, next_out);
    } else {
      output.length = next_out;
      subarrayResult = output;
    }
    tmp = subarrayResult;
  }
  return tmp;
};
export const setTyped = (arg0) => {
  const tmp = arg0;
  if (tmp) {
    const _Uint8Array = Uint8Array;
    exports.Buf8 = Uint8Array;
    const _Uint16Array = Uint16Array;
    exports.Buf16 = Uint16Array;
    const _Int32Array = Int32Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, closure_1);
  } else {
    const _Array = Array;
    exports.Buf8 = Array;
    const _Array2 = Array;
    exports.Buf16 = Array;
    const _Array3 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, closure_2);
  }
};
