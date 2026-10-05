// === Module 9355: u8 ===

// Module 9355 (u8)
import _mod9356 from "module_9356" /* 9356 */;
import crypto from "crypto" /* 9357 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

const require = globalThis.__r;
let c0, c5, c6;

let obj = function _asyncLoop() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_3;
        let closure_4;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let c4 = 1;
            let c3 = 1;
            closure_5 = undefined;
            const _Date2 = Date;
            closure_3 = Date.now();
            closure_4 = 0;
            if (closure_4 < closure_0) {
              closure_2(closure_4);
              const _Date = Date;
              closure_5 = Date.now() - closure_3;
              const tmp14 = closure_5 >= 0 && closure_5 < closure_1;
              if (!tmp14) {
                c5 = 1;
                c6 = 1;
                const obj4 = { value: closure_132_1.nextTick(), done: false };
                return obj4;
              }
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = closure_3 + closure_5;
        }
        closure_4 = closure_4 + 1;
      } catch (tmp24) {
        c6 = 3;
        throw tmp24;
      }
    }
  });
  return obj(...arguments);
};
let uint32Array = new Uint32Array([287454020]);
let uint8Array = new Uint8Array(uint32Array.buffer);
let closure_5 = Array.from({ length: 256 }, (arg0, arg1) => {
  const str = require("checkEnv");
  return str.padStart(2, "0");
});
const _0 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
let closure_0 = _asyncToGenerator(async () => {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp3) {
      c0 = 3;
      throw tmp3;
    }
  }
});
class Hash {
  constructor() {
    _classCallCheck(this, Hash);
  }
}
const entry = {
  key: "clone",
  value: function clone() {
    return this._cloneInto();
  }
};
let items = [entry];
const toString = {}.toString;
const Hash_export = _createClass(Hash, items);

export const isBytes = function isBytes(obj) {
  let tmp = obj instanceof Uint8Array;
  if (!tmp) {
    tmp = null != obj && typeof obj === "object" && "Uint8Array" === obj.constructor.name;
    const tmp3 = null != obj && typeof obj === "object" && "Uint8Array" === obj.constructor.name;
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
  _mod9356.bytes(arg0);
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
    const self7 = this;
    const self8 = this;
    const error = new Error("hex string expected, got " + typeof str);
    throw error;
  } else {
    const result = length / 2;
    if (str.length % 2) {
      const _Error2 = Error;
      const self5 = this;
      const self6 = this;
      const error1 = new Error("padded hex string expected, got unpadded hex of length " + length);
      throw error1;
    } else {
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const uint8Array = new Uint8Array(result);
      let num = 0;
      let num5 = 0;
      if (0 < result) {
        while (true) {
          let diff;
          let charCodeAtResult = str.charCodeAt(num);
          if (charCodeAtResult >= _0._0) {
            if (charCodeAtResult <= _0._9) {
              let diff1;
              diff = charCodeAtResult - _0._0;
              sum = num + 1;
              let charCodeAtResult1 = str.charCodeAt(sum);
              if (charCodeAtResult1 >= _0._0) {
                if (charCodeAtResult1 <= _0._9) {
                  diff1 = charCodeAtResult1 - _0._0;
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
        const self3 = this;
        const self4 = this;
        const error2 = new Error("hex string expected, got non-hex character \"" + (str[num] + str[sum]) + "\" at index " + num);
        throw error2;
      }
      return uint8Array;
    }
  }
};
export const asyncLoop = function asyncLoop(sum, c11, arg2) {
  return obj(...arguments);
};
export const utf8ToBytes = function utf8ToBytes(str) {
  if (typeof str !== "string") {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("utf8ToBytes expected string, got " + typeof str);
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const _TextEncoder = TextEncoder;
    const self3 = this;
    const self4 = this;
    const encoder = new TextEncoder();
    const self5 = this;
    const self6 = this;
    const uint8Array = new Uint8Array(encoder.encode(str));
    return uint8Array;
  }
};
export const toBytes = function toBytes(B) {
  let uint8Array = B;
  if (typeof B === "string") {
    if (typeof B !== "string") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("utf8ToBytes expected string, got " + typeof B);
      throw error;
    } else {
      const _Uint8Array = Uint8Array;
      const _TextEncoder = TextEncoder;
      const self3 = this;
      const self4 = this;
      const encoder = new TextEncoder();
      const self5 = this;
      const self6 = this;
      uint8Array = new Uint8Array(encoder.encode(B));
    }
  }
  _mod9356.bytes(uint8Array);
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
      let bytesResult = _mod9356.bytes(arr2);
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
    if ("[object Object]" !== toString.call(arg1)) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Options should be object or undefined");
      throw error;
    }
  }
  return Object.assign(arg0, arg1);
};
export const wrapConstructor = function wrapConstructor(fn) {
  let closure_0 = fn;
  function hashC(str) {
    let uint8Array = str;
    const update = fn().update;
    fn();
    if (typeof str === "string") {
      if (typeof str !== "string") {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("utf8ToBytes expected string, got " + typeof str);
        throw error;
      } else {
        const _Uint8Array = Uint8Array;
        const _TextEncoder = TextEncoder;
        const self3 = this;
        const self4 = this;
        const encoder = new TextEncoder();
        const self5 = this;
        const self6 = this;
        uint8Array = new Uint8Array(encoder.encode(str));
      }
    }
    _mod9356.bytes(uint8Array);
    const updateResult = update(uint8Array);
    return updateResult.digest();
  }
  const tmp = fn();
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = tmp);
  hashC.create = () => fn();
  return hashC;
};
export const wrapConstructorWithOpts = function wrapConstructorWithOpts(fn) {
  let closure_0 = fn;
  function hashC(str, arg1) {
    let uint8Array = str;
    const update = fn(arg1).update;
    fn(arg1);
    if (typeof str === "string") {
      if (typeof str !== "string") {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("utf8ToBytes expected string, got " + typeof str);
        throw error;
      } else {
        const _Uint8Array = Uint8Array;
        const _TextEncoder = TextEncoder;
        const self3 = this;
        const self4 = this;
        const encoder = new TextEncoder();
        const self5 = this;
        const self6 = this;
        uint8Array = new Uint8Array(encoder.encode(str));
      }
    }
    _mod9356.bytes(uint8Array);
    const updateResult = update(uint8Array);
    return updateResult.digest();
  }
  const tmp = fn({});
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = tmp);
  hashC.create = (arg0) => fn(arg0);
  return hashC;
};
export const wrapXOFConstructorWithOpts = function wrapXOFConstructorWithOpts(fn) {
  let closure_0 = fn;
  function hashC(str, arg1) {
    let uint8Array = str;
    const update = fn(arg1).update;
    fn(arg1);
    if (typeof str === "string") {
      if (typeof str !== "string") {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("utf8ToBytes expected string, got " + typeof str);
        throw error;
      } else {
        const _Uint8Array = Uint8Array;
        const _TextEncoder = TextEncoder;
        const self3 = this;
        const self4 = this;
        const encoder = new TextEncoder();
        const self5 = this;
        const self6 = this;
        uint8Array = new Uint8Array(encoder.encode(str));
      }
    }
    _mod9356.bytes(uint8Array);
    const updateResult = update(uint8Array);
    return updateResult.digest();
  }
  const tmp = fn({});
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = tmp);
  hashC.create = (arg0) => fn(arg0);
  return hashC;
};
export const randomBytes = function randomBytes() {
  let num = result;
  if (result === undefined) {
    num = 32;
  }
  if (crypto.crypto) {
    if (typeof crypto.crypto.getRandomValues === "function") {
      const _crypto2 = crypto.crypto;
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const getRandomValues = _crypto2.getRandomValues;
      const uint8Array = new Uint8Array(num);
      return getRandomValues(uint8Array);
    }
  }
  if (crypto.crypto) {
    if (typeof crypto.crypto.randomBytes === "function") {
      const _crypto = crypto.crypto;
      return _crypto.randomBytes(num);
    }
  }
  const error = new Error("crypto.getRandomValues must be defined");
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
export const nextTick = function nextTick() {
  return closure_0(...arguments);
};
export { Hash_export as Hash };