// === Module 9699: _asyncLoop ===

// Module 9699 (_asyncLoop)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

function _asyncLoop() {
  const self = this;
  const tmp = asyncGeneratorStep((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = 1;
              closure_3 = 1;
              closure_3 = undefined;
              closure_4 = undefined;
              c5 = undefined;
              const _Date2 = Date;
              closure_3 = Date.now();
              closure_4 = 0;
              if (closure_4 < closure_0) {
                callback(closure_4);
                const _Date = Date;
                c5 = Date.now() - closure_3;
                let tmp15 = c5 >= 0;
                if (tmp15) {
                  tmp15 = c5 < closure_1;
                }
                if (!tmp15) {
                  c5 = 1;
                  c6 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1.nextTick();
                  return obj1;
                }
              }
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_3 = closure_3 + c5;
          }
          closure_4 = closure_4 + 1;
        } catch (tmp25) {
          c6 = tmp;
          throw tmp25;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let uint32Array = new Uint32Array([287454020]);
let uint8Array = new Uint8Array(uint32Array.buffer);
let closure_5 = Array.from({ length: 256 }, (arg0, arg1) => arg1.toString(16).padStart(2, "0"));
let closure_6 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
const Hash = asyncGeneratorStep(function*() {
  if (c0 === 2) {
    c0 = 3;
    HermesBuiltin.throwTypeError();
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw arg1;
    } else if (arg0 === 2) {
      let obj = { value: null, done: true };
      obj[0] = arg1;
      return obj;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c0 = 2;
      if (arg0 === 1) {
        c0 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp4) {
      c0 = tmp;
      throw tmp4;
    }
  }
});
class Hash {
  constructor() {
    tmp = closure_3(this, Hash);
    return;
  }
}
let items = [
  {
    key: "clone",
    value: function clone() {
      return this._cloneInto();
    }
  }
];
const toString = {}.toString;

export const isBytes = function isBytes(obj) {
  let tmp = obj instanceof Uint8Array;
  if (!tmp) {
    let tmp3 = null != obj && typeof obj === "object";
    if (tmp3) {
      tmp3 = "Uint8Array" === obj.constructor.name;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const byteSwap32 = function byteSwap32(B32) {
  let length;
  let num = 0;
  if (0 < B32.length) {
    do {
      B32[num] = exports.byteSwap(B32[num]);
      num = num + 1;
      length = B32.length;
    } while (num < length);
  }
};
export const bytesToHex = function bytesToHex(arg0) {
  let length;
  Hash(9700).bytes(arg0);
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg0.length) {
    do {
      str = `${closure_5[arg0[num]]}`;
      num = num + 1;
      str2 = str;
      length = arg0.length;
    } while (num < length);
  }
  return str2;
};
export const hexToBytes = function hexToBytes(str) {
  let sum;
  if (typeof str !== "string") {
    const _Error3 = Error;
    error = new Error("hex string expected, got " + typeof str);
    throw error;
  } else {
    const result = length / 2;
    if (str.length % 2) {
      const _Error2 = Error;
      const error1 = new Error("padded hex string expected, got unpadded hex of length " + length);
      throw error1;
    } else {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(result);
      let num = 0;
      let num5 = 0;
      if (0 < result) {
        while (true) {
          let charCodeAtResult = str.charCodeAt(num);
          if (charCodeAtResult >= _0._0) {
            if (charCodeAtResult <= _0._9) {
              let diff = charCodeAtResult - _0._0;
              sum = num + 1;
              let charCodeAtResult1 = str.charCodeAt(sum);
              if (charCodeAtResult1 >= _0._0) {
                if (charCodeAtResult1 <= _0._9) {
                  let diff1 = charCodeAtResult1 - _0._0;
                  if (undefined === diff) {
                    break;
                  } else if (undefined === diff1) {
                    break;
                  } else {
                    uint8Array[num5] = 16 * diff + diff1;
                    num5 = num5 + 1;
                    num = num + 2;
                  }
                }
              }
              if (charCodeAtResult1 >= _0._A) {
                if (charCodeAtResult1 <= _0._F) {
                  diff1 = charCodeAtResult1 - (_0._A - 10);
                }
              }
              if (charCodeAtResult1 >= _0._a) {
                if (charCodeAtResult1 <= _0._f) {
                  diff1 = charCodeAtResult1 - (_0._a - 10);
                }
              }
            }
          }
          if (charCodeAtResult >= _0._A) {
            if (charCodeAtResult <= _0._F) {
              diff = charCodeAtResult - (_0._A - 10);
            }
          }
          if (charCodeAtResult >= _0._a) {
            if (charCodeAtResult <= _0._f) {
              diff = charCodeAtResult - (_0._a - 10);
            }
          }
        }
        const _Error = Error;
        const error2 = new Error("hex string expected, got non-hex character \"" + (str[num] + str[sum]) + "\" at index " + num);
        throw error2;
      }
      return uint8Array;
    }
  }
};
export const asyncLoop = function asyncLoop(c1, closure_11, arg2) {
  const self = this;
  const apply = _asyncLoop.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const utf8ToBytes = function utf8ToBytes(str) {
  if (typeof str !== "string") {
    const _Error = Error;
    error = new Error("utf8ToBytes expected string, got " + typeof str);
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const _TextEncoder = TextEncoder;
    const encoder = new TextEncoder();
    const uint8Array = new Uint8Array(encoder.encode(str));
    return uint8Array;
  }
};
export const toBytes = function toBytes(B) {
  let uint8Array = B;
  if (typeof B === "string") {
    if (typeof B !== "string") {
      const _Error = Error;
      error = new Error("utf8ToBytes expected string, got " + typeof B);
      throw error;
    } else {
      const _Uint8Array = Uint8Array;
      const _TextEncoder = TextEncoder;
      const encoder = new TextEncoder();
      uint8Array = new Uint8Array(encoder.encode(B));
    }
  }
  Hash(9700).bytes(uint8Array);
  return uint8Array;
};
export const concatBytes = function concatBytes() {
  let length;
  let length2;
  const items = [...arguments];
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < items.length) {
    do {
      let arr2 = items[num];
      let bytesResult = Hash(9700).bytes(arr2);
      num2 = num2 + arr2.length;
      num = num + 1;
      num3 = num2;
      length = items.length;
    } while (num < length);
  }
  const uint8Array = new Uint8Array(num3);
  let num4 = 0;
  let num5 = 0;
  if (0 < items.length) {
    do {
      let arr3 = items[num5];
      let result = uint8Array.set(arr3, num4);
      num4 = num4 + arr3.length;
      num5 = num5 + 1;
      length2 = items.length;
    } while (num5 < length2);
  }
  return uint8Array;
};
export const checkOpts = function checkOpts(arg0, arg1) {
  if (undefined !== arg1) {
    const call = toString.call;
    if ("[object Object]" !== (typeof call === "unknown" ? toString() : call(arg1))) {
      const _Error = Error;
      error = new Error("Options should be object or undefined");
      throw error;
    }
  }
  return Object.assign(arg0, arg1);
};
export const wrapConstructor = function wrapConstructor(fn) {
  closure_0 = fn;
  function hashC(str) {
    let uint8Array = str;
    if (typeof str === "string") {
      if (typeof str !== "string") {
        const _Error = Error;
        error = new Error("utf8ToBytes expected string, got " + typeof str);
        throw error;
      } else {
        const _Uint8Array = Uint8Array;
        const _TextEncoder = TextEncoder;
        const encoder = new TextEncoder();
        uint8Array = new Uint8Array(encoder.encode(str));
      }
    }
    callback(dependencyMap[3]).bytes(uint8Array);
    const obj = callback();
    return callback().update(uint8Array).digest();
  }
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = fn());
  hashC.create = () => callback();
  return hashC;
};
export const wrapConstructorWithOpts = function wrapConstructorWithOpts(fn) {
  closure_0 = fn;
  function hashC(str) {
    let uint8Array = str;
    if (typeof str === "string") {
      if (typeof str !== "string") {
        const _Error = Error;
        error = new Error("utf8ToBytes expected string, got " + typeof str);
        throw error;
      } else {
        const _Uint8Array = Uint8Array;
        const _TextEncoder = TextEncoder;
        const encoder = new TextEncoder();
        uint8Array = new Uint8Array(encoder.encode(str));
      }
    }
    callback(dependencyMap[3]).bytes(uint8Array);
    const obj = callback(arg1);
    return callback(arg1).update(uint8Array).digest();
  }
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = fn({}));
  hashC.create = (arg0) => callback(arg0);
  return hashC;
};
export const wrapXOFConstructorWithOpts = function wrapXOFConstructorWithOpts(fn) {
  closure_0 = fn;
  function hashC(str) {
    let uint8Array = str;
    if (typeof str === "string") {
      if (typeof str !== "string") {
        const _Error = Error;
        error = new Error("utf8ToBytes expected string, got " + typeof str);
        throw error;
      } else {
        const _Uint8Array = Uint8Array;
        const _TextEncoder = TextEncoder;
        const encoder = new TextEncoder();
        uint8Array = new Uint8Array(encoder.encode(str));
      }
    }
    callback(dependencyMap[3]).bytes(uint8Array);
    const obj = callback(arg1);
    return callback(arg1).update(uint8Array).digest();
  }
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = fn({}));
  hashC.create = (arg0) => callback(arg0);
  return hashC;
};
export const randomBytes = function randomBytes(result) {
  let num = result;
  if (result === undefined) {
    num = 32;
  }
  if (Hash(9701).crypto) {
    if (typeof Hash(9701).crypto.getRandomValues === "function") {
      const _crypto2 = Hash(9701).crypto;
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(num);
      return _crypto2.getRandomValues(uint8Array);
    }
  }
  if (Hash(9701).crypto) {
    if (typeof Hash(9701).crypto.randomBytes === "function") {
      const _crypto = Hash(9701).crypto;
      return _crypto.randomBytes(num);
    }
  }
  error = new Error("crypto.getRandomValues must be defined");
  throw error;
};
export const u8 = (buffer) => {
  const uint8Array = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  return uint8Array;
};
export const u32 = (pbkdf2Result) => {
  const uint32Array = new Uint32Array(pbkdf2Result.buffer, pbkdf2Result.byteOffset, Math.floor(pbkdf2Result.byteLength / 4));
  return uint32Array;
};
export const createView = (buffer) => {
  const dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  return dataView;
};
export const rotr = (A, arg1) => A << 32 - arg1 | A >>> arg1;
export const rotl = (arg0, arg1) => arg0 << arg1 | arg0 >>> 32 - arg1 >>> 0;
export const isLE = 68 === uint8Array[0];
export const byteSwap = (B32) => B32 << 24 & 4278190080 | B32 << 8 & 16711680 | B32 >>> 8 & 65280 | B32 >>> 24 & 255;
export const byteSwapIfBE = exports.isLE ? ((arg0) => arg0) : ((B32) => exports.byteSwap(B32));
export const nextTick = function nextTick(arg0) {
  const self = this;
  const apply = Hash.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const Hash = _createClass(Hash, items);