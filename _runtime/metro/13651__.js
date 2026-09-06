// _runtime/metro/13651__.js
const exports = setTyped;
let tmp = typeof Uint8Array !== "undefined";
if (typeof Uint8Array !== "undefined") {
  let _Uint16Array = Uint16Array;
  tmp = typeof Uint16Array !== "undefined";
}
if (tmp) {
  let _Int32Array = Int32Array;
  tmp = typeof Int32Array !== "undefined";
}
setTyped.assign = (assign) => {
  let arr;
  const call = slice.call;
  if (typeof call === "unknown") {
    let substr = slice(1);
  } else {
    substr = call(arguments, 1);
  }
  if (substr.length) {
    while (true) {
      arr = substr.shift();
      if (arr) {
        if (typeof arr !== "object") {
          break;
        } else {
          for (const key10013 in arr) {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call2 = hasOwnProperty.call;
            if (typeof call2 === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10013);
            } else {
              hasOwnPropertyResult = call2(arr, key10013);
            }
            if (!hasOwnPropertyResult) {
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
    const typeError = new TypeError(arr + "must be non-object");
    throw typeError;
  }
  return assign;
};
setTyped.shrinkBuf = (array, length) => {
  if (array.length === length) {
    return array;
  } else if (array.subarray) {
    let subarrayResult = array.subarray(0, length);
  } else {
    array.length = length;
    subarrayResult = array;
  }
};
let closure_1 = {
  arraySet(subarray, subarray2, arg2, arg3, arg4) {
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
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < arg0.length) {
      do {
        num = num + arg0[num2].length;
        num2 = num2 + 1;
        num3 = num;
      } while (num2 < length);
    }
    const uint8Array = new Uint8Array(num3);
    let num4 = 0;
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
    for (let num = 0; num < arg3; num = num + 1) {
      arg0[arg4 + num] = arg1[arg2 + num];
    }
  },
  flattenChunks(arg0) {
    const concat = [].concat;
    return concat.apply([], arg0);
  },
};
setTyped.setTyped = (arg0) => {
  let obj = exports;
  if (arg0) {
    const _Uint8Array = Uint8Array;
    obj.Buf8 = Uint8Array;
    const _Uint16Array = Uint16Array;
    obj.Buf16 = Uint16Array;
    const _Int32Array = Int32Array;
    obj.Buf32 = Int32Array;
    obj = obj.assign(obj, closure_1);
  } else {
    const _Array = Array;
    obj.Buf8 = Array;
    const _Array2 = Array;
    obj.Buf16 = Array;
    const _Array3 = Array;
    obj.Buf32 = Array;
    obj = obj.assign(obj, closure_2);
  }
};
setTyped.setTyped(tmp);
