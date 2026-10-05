// _runtime/01263_Buffer.js
import read from "01264_read.js";

let set;

let tmp8;
function typedArraySupport() {
  try {
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    const uint8Array = new Uint8Array(1);
    const obj = {
      foo() {
        return 42;
      },
    };
    const _Object = Object;
    const _Uint8Array2 = Uint8Array;
    Object.setPrototypeOf(obj, Uint8Array.prototype);
    const _Object2 = Object;
    Object.setPrototypeOf(uint8Array, obj);
    return 42 === uint8Array.foo();
  } catch (err) {
    return false;
  }
}
class Buffer {
  constructor(num, str, arg2) {
    if (typeof num === "number") {
      if (typeof str === "string") {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError('The "string" argument must be of type string. Received type number');
        throw typeError;
      } else {
        return allocUnsafe(num);
      }
    } else {
      return from(0, str, arg2);
    }
  }
  static from(arg0, arg1, arg2) {
    return from(arg0, arg1, arg2);
  }
  static alloc(num, arg1, str) {
    if (typeof num !== "number") {
      const _TypeError = TypeError;
      const self19 = this;
      const self20 = this;
      const typeError = new TypeError('"size" argument must be of type number');
      throw typeError;
    } else if (0 < 0) {
      const _RangeError5 = RangeError;
      const self17 = this;
      const self18 = this;
      const rangeError = new RangeError('The value "' + num + '" is invalid for option "size"');
      throw rangeError;
    } else {
      let tmp5;
      if (0 <= 0) {
        if (0 > c3) {
          const _RangeError4 = RangeError;
          const self15 = this;
          const self16 = this;
          const rangeError1 = new RangeError('The value "' + num + '" is invalid for option "size"');
          throw rangeError1;
        } else {
          const _Uint8Array4 = Uint8Array;
          const self13 = this;
          const self14 = this;
          const uint8Array = new Uint8Array(num);
          const _Object4 = Object;
          Object.setPrototypeOf(uint8Array, Buffer.prototype);
          tmp5 = uint8Array;
        }
      } else if (undefined !== arg1) {
        let fillResult;
        if (typeof str === "string") {
          if (0 > c3) {
            const _RangeError3 = RangeError;
            const self11 = this;
            const self12 = this;
            const rangeError2 = new RangeError('The value "' + num + '" is invalid for option "size"');
            throw rangeError2;
          } else {
            const _Uint8Array3 = Uint8Array;
            const self9 = this;
            const self10 = this;
            const uint8Array1 = new Uint8Array(num);
            const _Object3 = Object;
            Object.setPrototypeOf(uint8Array1, Buffer.prototype);
            fillResult = uint8Array1.fill(arg1, str);
          }
        } else if (0 > c3) {
          const _RangeError2 = RangeError;
          const self7 = this;
          const self8 = this;
          const rangeError3 = new RangeError('The value "' + num + '" is invalid for option "size"');
          throw rangeError3;
        } else {
          const _Uint8Array2 = Uint8Array;
          const self5 = this;
          const self6 = this;
          const uint8Array2 = new Uint8Array(num);
          const _Object2 = Object;
          Object.setPrototypeOf(uint8Array2, Buffer.prototype);
          fillResult = uint8Array2.fill(arg1);
        }
        tmp5 = fillResult;
      } else if (0 > c3) {
        const _RangeError = RangeError;
        const self3 = this;
        const self4 = this;
        const rangeError4 = new RangeError('The value "' + num + '" is invalid for option "size"');
        throw rangeError4;
      } else {
        const _Uint8Array = Uint8Array;
        const self = this;
        const self2 = this;
        const uint8Array3 = new Uint8Array(num);
        tmp5 = uint8Array3;
        const _Object = Object;
        Object.setPrototypeOf(uint8Array3, Buffer.prototype);
      }
      return tmp5;
    }
  }
  static allocUnsafe(arg0) {
    return allocUnsafe(arg0);
  }
  static allocUnsafeSlow(arg0) {
    return allocUnsafe(arg0);
  }
  static isBuffer(_isBuffer) {
    return null != _isBuffer && true === _isBuffer._isBuffer && _isBuffer !== Buffer.prototype;
  }
  static compare(offset, offset2) {
    let tmp2 = offset instanceof Uint8Array;
    if (!tmp2) {
      tmp2 =
        null != offset &&
        null != offset.constructor &&
        null != offset.constructor.name &&
        offset.constructor.name === tmp.name;
    }
    let fromResult = offset;
    if (tmp2) {
      fromResult = Buffer.from(offset, offset.offset, offset.byteLength);
    }
    let tmp7 = offset2 instanceof Uint8Array;
    if (!tmp7) {
      tmp7 =
        null != offset2 &&
        null != offset2.constructor &&
        null != offset2.constructor.name &&
        offset2.constructor.name === tmp6.name;
    }
    let fromResult1 = offset2;
    if (tmp7) {
      fromResult1 = Buffer.from(offset2, offset2.offset, offset2.byteLength);
    }
    if (Buffer.isBuffer(fromResult)) {
      if (Buffer.isBuffer(fromResult1)) {
        if (fromResult === fromResult1) {
          return 0;
        } else {
          const _Math = Math;
          const bound = Math.min(length, length2);
          let num3 = 0;
          let tmp13 = length2;
          let tmp14 = length;
          if (0 < bound) {
            while (fromResult[num3] === fromResult1[num3]) {
              num3 = num3 + 1;
              tmp13 = length2;
              tmp14 = length;
            }
            tmp14 = fromResult[num3];
            tmp13 = fromResult1[num3];
          }
          let num4 = -1;
          if (tmp14 >= tmp13) {
            let num5 = 0;
            if (tmp13 < tmp14) {
              num5 = 1;
            }
            num4 = num5;
          }
          return num4;
        }
      }
    }
    const typeError = new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    throw typeError;
  }
  static isEncoding(arg0) {
    const str = String(arg0);
    switch (str.toLowerCase()) {
      case "hex": {
        return true;
      }
      case "utf8": {
        return true;
      }
      case "utf-8": {
        return true;
      }
      case "ascii": {
        return true;
      }
      case "latin1": {
        return true;
      }
      case "binary": {
        return true;
      }
      case "base64": {
        return true;
      }
      case "ucs2": {
        return true;
      }
      case "ucs-2": {
        return true;
      }
      case "utf16le": {
        return true;
      }
      case "utf-16le": {
        return true;
      }
      default: {
        return false;
      }
    }
  }
  static concat(arg0, arg1) {
    let length;
    if (Array.isArray(arg0)) {
      if (0 === arg0.length) {
        return Buffer.alloc(0);
      } else {
        let num5 = arg1;
        if (undefined === arg1) {
          let num3 = 0;
          let num4 = 0;
          num5 = 0;
          if (0 < arg0.length) {
            do {
              num4 = num4 + arg0[num3].length;
              num3 = num3 + 1;
              num5 = num4;
              length = arg0.length;
            } while (num3 < length);
          }
        }
        const allocUnsafeResult = Buffer.allocUnsafe(num5);
        let num7 = 0;
        let num8 = 0;
        if (0 < arg0.length) {
          while (true) {
            let tmp6 = arg0[num8];
            let tmp8 = tmp6 instanceof Uint8Array;
            if (!tmp8) {
              let tmp11 =
                null != tmp6 &&
                null != tmp6.constructor &&
                null != tmp6.constructor.name &&
                tmp6.constructor.name === tmp7.name;
              tmp8 = tmp11;
            }
            let fromResult = tmp6;
            if (tmp8) {
              fromResult = Buffer.from(tmp6);
            }
            if (!Buffer.isBuffer(fromResult)) {
              break;
            } else {
              let copyResult = fromResult.copy(allocUnsafeResult, num7);
              num7 = num7 + fromResult.length;
              num8 = num8 + 1;
            }
          }
          const _TypeError2 = TypeError;
          const self3 = this;
          const self4 = this;
          const typeError = new TypeError('"list" argument must be an Array of Buffers');
          throw typeError;
        }
        return allocUnsafeResult;
      }
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError1 = new TypeError('"list" argument must be an Array of Buffers');
      throw typeError1;
    }
  }
  swap16() {
    const self = this;
    if (this.length % 2 !== 0) {
      const _RangeError = RangeError;
      const self2 = this;
      const self3 = this;
      const rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
      throw rangeError;
    } else {
      let num2;
      for (let num2 = 0; num2 < length; num2 = num2 + 2) {
        let sum = num2 + 1;
        self[num2] = self[sum];
        self[sum] = self[num2];
      }
      return self;
    }
  }
  swap32() {
    const self = this;
    if (this.length % 4 !== 0) {
      const _RangeError = RangeError;
      const self2 = this;
      const self3 = this;
      const rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
      throw rangeError;
    } else {
      let num4;
      for (let num4 = 0; num4 < length; num4 = num4 + 4) {
        let sum = num4 + 3;
        self[num4] = self[sum];
        self[sum] = self[num4];
        let sum1 = num4 + 1;
        let sum2 = num4 + 2;
        self[sum1] = self[sum2];
        self[sum2] = self[sum1];
      }
      return self;
    }
  }
  swap64() {
    const self = this;
    if (this.length % 8 !== 0) {
      const _RangeError = RangeError;
      const self2 = this;
      const self3 = this;
      const rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
      throw rangeError;
    } else {
      let num;
      for (let num = 0; num < length; num = num + 8) {
        let sum = num + 7;
        self[num] = self[sum];
        self[sum] = self[num];
        let sum1 = num + 1;
        let sum2 = num + 6;
        self[sum1] = self[sum2];
        self[sum2] = self[sum1];
        let sum3 = num + 2;
        let sum4 = num + 5;
        self[sum3] = self[sum4];
        self[sum4] = self[sum3];
        let sum5 = num + 3;
        let sum6 = num + 4;
        self[sum5] = self[sum6];
        self[sum6] = self[sum5];
      }
      return self;
    }
  }
  toString() {
    const self = this;
    let str = "";
    if (0 !== this.length) {
      let applyResult;
      if (0 === arguments.length) {
        applyResult = utf8Slice(self, 0, length);
      } else {
        applyResult = slowToString(...arguments);
      }
      str = applyResult;
    }
    return str;
  }
  equals(arg0) {
    if (Buffer.isBuffer(arg0)) {
      const tmp5 = this === arg0 || 0 === Buffer.compare(tmp4, arg0);
      return tmp5;
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Argument must be a Buffer");
      throw typeError;
    }
  }
  inspect() {
    const INSPECT_MAX_BYTES = exports.INSPECT_MAX_BYTES;
    const str = this.toString("hex", 0, INSPECT_MAX_BYTES);
    const str2 = str.replace(/(.{2})/g, "$1 ");
    const trimmed = str2.trim();
    let text = trimmed;
    if (this.length > INSPECT_MAX_BYTES) {
      text = `${tmp} ... `;
    }
    return "<Buffer " + text + ">";
  }
  compare(offset, arg1, arg2, arg3, arg4) {
    let tmp2 = offset instanceof Uint8Array;
    if (!tmp2) {
      tmp2 =
        null != offset &&
        null != offset.constructor &&
        null != offset.constructor.name &&
        offset.constructor.name === tmp.name;
    }
    let fromResult = offset;
    if (tmp2) {
      fromResult = Buffer.from(offset, offset.offset, offset.byteLength);
    }
    if (Buffer.isBuffer(fromResult)) {
      let num = arg1;
      if (undefined === arg1) {
        num = 0;
      }
      let tmp8 = arg2;
      if (undefined === arg2) {
        let num2 = 0;
        if (fromResult) {
          num2 = fromResult.length;
        }
        tmp8 = num2;
      }
      let num3 = arg3;
      if (undefined === arg3) {
        num3 = 0;
      }
      const self3 = this;
      let length = arg4;
      if (undefined === arg4) {
        length = self3.length;
      }
      if (num >= 0) {
        if (tmp8 <= fromResult.length) {
          if (num3 >= 0) {
            if (length <= self3.length) {
              if (num3 >= length) {
                if (num >= tmp8) {
                  return 0;
                }
              }
              if (num3 >= length) {
                return -1;
              } else if (num >= tmp8) {
                return 1;
              } else if (self3 === fromResult) {
                return 0;
              } else {
                const diff = tmp14 - tmp15;
                const diff1 = tmp17 - tmp18;
                const _Math = Math;
                const bound = Math.min(diff, diff1);
                const substr = self3.slice(tmp15, tmp14);
                const substr1 = fromResult.slice(tmp18, tmp17);
                let num5 = 0;
                let tmp10 = diff1;
                let tmp11 = diff;
                if (0 < bound) {
                  while (substr[num5] === substr1[num5]) {
                    num5 = num5 + 1;
                    tmp10 = diff1;
                    tmp11 = diff;
                  }
                  tmp11 = substr[num5];
                  tmp10 = substr1[num5];
                }
                let num6 = -1;
                if (tmp11 >= tmp10) {
                  let num7 = 0;
                  if (tmp10 < tmp11) {
                    num7 = 1;
                  }
                  num6 = num7;
                }
                return num6;
              }
            }
          }
        }
      }
      const _RangeError = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError = new RangeError("out of range index");
      throw rangeError;
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof fromResult,
      );
      throw typeError;
    }
  }
  includes(arg0, arg1, arg2) {
    return -1 !== this.indexOf(arg0, arg1, arg2);
  }
  indexOf(arg0, arg1, arg2) {
    return bidirectionalIndexOf(this, arg0, arg1, arg2, true);
  }
  lastIndexOf(arg0, arg1, arg2) {
    return bidirectionalIndexOf(this, arg0, arg1, arg2, false);
  }
  write(arg0, str, arg2, arg3) {
    let length;
    let num2;
    let str2;
    const self = this;
    if (undefined === str) {
      length = self.length;
      str2 = "utf8";
      num2 = 0;
    } else {
      if (undefined === arg2) {
        if (typeof str === "string") {
          length = self.length;
          num2 = 0;
          str2 = str;
        }
      }
      const _isFinite = isFinite;
      if (isFinite(str)) {
        const _isFinite2 = isFinite;
        str2 = arg2;
        num2 = tmp4;
        if (isFinite(arg2)) {
          str2 = arg3;
          length = tmp5;
          num2 = tmp4;
          if (undefined === arg3) {
            str2 = "utf8";
            length = tmp5;
            num2 = tmp4;
          }
        }
      } else {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        throw error;
      }
    }
    const diff = self.length - num2;
    const tmp7 = undefined === length || length > diff;
    if (tmp7) {
      length = diff;
    }
    if (arg0.length <= 0) {
      if (num2 <= self.length) {
        if (!str2) {
          str2 = "utf8";
        }
      }
    }
    const rangeError = new RangeError("Attempt to write outside buffer bounds");
    throw rangeError;
  }
  toJSON() {
    let self = this._arr;
    const call = slice.call;
    if (!self) {
      self = this;
    }
    const obj = { type: "Buffer", data: call(self, 0) };
    return obj;
  }
  slice(arg0, arg1) {
    let num;
    let num2;
    const self = this;
    if (~~arg0 < 0) {
      num = tmp + length;
      if (num < 0) {
        num = 0;
      }
    } else {
      num = tmp;
      if (~~arg0 > this.length) {
        num = length;
      }
    }
    let tmp2 = length;
    if (undefined !== arg1) {
      tmp2 = ~~arg1;
    }
    if (tmp2 < 0) {
      num2 = tmp2 + length;
      if (num2 < 0) {
        num2 = 0;
      }
    } else {
      num2 = tmp2;
      if (tmp2 > this.length) {
        num2 = length;
      }
    }
    if (num2 < num) {
      num2 = num;
    }
    const subarrayResult = self.subarray(num, num2);
    Object.setPrototypeOf(subarrayResult, Buffer.prototype);
    return subarrayResult;
  }
  readUIntLE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + (arg1 >>> 0) > tmp4) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    let tmp11 = self[tmp];
    let num2 = 256;
    let tmp12 = tmp11;
    let num3 = 1;
    if (1 < arg1 >>> 0) {
      const sum = tmp11 + self[tmp + num3] * num2;
      const sum1 = num3 + 1;
      tmp12 = sum;
      while (sum1 < arg1 >>> 0) {
        num2 = num2 * 256;
        num3 = sum1;
        tmp11 = sum;
        tmp12 = sum;
        if (!num2) {
          break;
        }
      }
    }
    return tmp12;
  }
  readUIntBE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + (arg1 >>> 0) > tmp4) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    let diff = tmp2 - 1;
    let tmp12 = self[tmp + diff];
    let num2 = 256;
    let tmp13 = tmp12;
    if (0 < diff) {
      const diff1 = diff - 1;
      const sum = tmp12 + self[tmp + diff1] * num2;
      tmp13 = sum;
      while (0 < diff1) {
        num2 = num2 * 256;
        tmp12 = sum;
        diff = diff1;
        tmp13 = sum;
        if (!num2) {
          break;
        }
      }
    }
    return tmp13;
  }
  readUInt8(arg0, arg1) {
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 1 > tmp3) {
            const _RangeError = RangeError;
            const self = this;
            const self2 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self3 = this;
      const self4 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    return this[arg0 >>> 0];
  }
  readUInt16LE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 2 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    return self[arg0 >>> 0] | (self[(arg0 >>> 0) + 1] << 8);
  }
  readUInt16BE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 2 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    return (self[arg0 >>> 0] << 8) | self[(arg0 >>> 0) + 1];
  }
  readUInt32LE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 4 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    return (
      (self[arg0 >>> 0] | (self[(arg0 >>> 0) + 1] << 8) | (self[(arg0 >>> 0) + 2] << 16)) +
      16777216 * self[(arg0 >>> 0) + 3]
    );
  }
  readUInt32BE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 4 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    return (
      16777216 * self[arg0 >>> 0] +
      ((self[(arg0 >>> 0) + 1] << 16) | (self[(arg0 >>> 0) + 2] << 8) | self[(arg0 >>> 0) + 3])
    );
  }
  readIntLE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + (arg1 >>> 0) > tmp4) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    let tmp11 = self[tmp];
    let num2 = 1;
    let num3 = 256;
    let tmp12 = tmp11;
    let num4 = 1;
    if (1 < arg1 >>> 0) {
      const sum = tmp11 + self[tmp + num2] * num3;
      const sum1 = num2 + 1;
      num4 = num3;
      tmp12 = sum;
      while (sum1 < arg1 >>> 0) {
        num3 = num3 * 256;
        num2 = sum1;
        tmp11 = sum;
        tmp12 = sum;
        num4 = num3;
        if (!num4) {
          break;
        }
      }
    }
    let diff = tmp12;
    if (tmp12 >= num4 * 128) {
      const _Math = Math;
      diff = tmp12 - Math.pow(2, 8 * tmp2);
    }
    return diff;
  }
  readIntBE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + (arg1 >>> 0) > tmp4) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    let diff = tmp2 - 1;
    let tmp12 = self[tmp + diff];
    let num2 = 256;
    let tmp13 = tmp12;
    let num3 = 1;
    if (0 < diff) {
      const diff1 = diff - 1;
      const sum = tmp12 + self[tmp + diff1] * num2;
      tmp13 = sum;
      num3 = num2;
      while (0 < diff1) {
        num2 = num2 * 256;
        tmp12 = sum;
        diff = diff1;
        tmp13 = sum;
        num3 = num2;
        if (!num3) {
          break;
        }
      }
    }
    let diff2 = tmp13;
    if (tmp13 >= num3 * 128) {
      const _Math = Math;
      diff2 = tmp13 - Math.pow(2, 8 * tmp2);
    }
    return diff2;
  }
  readInt8(arg0, arg1) {
    let result;
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 1 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    if (128 & self[arg0 >>> 0]) {
      result = -1 * (255 - tmp10 + 1);
    } else {
      result = tmp10;
    }
    return result;
  }
  readInt16LE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 2 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    const tmp10 = self[arg0 >>> 0] | (self[(arg0 >>> 0) + 1] << 8);
    let tmp11 = tmp10;
    if (32768 & tmp10) {
      tmp11 = 4294901760 | tmp10;
    }
    return tmp11;
  }
  readInt16BE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 2 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    let tmp11 = tmp10;
    if (32768 & (self[(arg0 >>> 0) + 1] | (self[arg0 >>> 0] << 8))) {
      tmp11 = 4294901760 | tmp10;
    }
    return tmp11;
  }
  readInt32LE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 4 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    return (
      self[arg0 >>> 0] | (self[(arg0 >>> 0) + 1] << 8) | (self[(arg0 >>> 0) + 2] << 16) | (self[(arg0 >>> 0) + 3] << 24)
    );
  }
  readInt32BE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 4 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    return (
      (self[arg0 >>> 0] << 24) | (self[(arg0 >>> 0) + 1] << 16) | (self[(arg0 >>> 0) + 2] << 8) | self[(arg0 >>> 0) + 3]
    );
  }
  readFloatLE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 4 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    const obj = read;
    return obj.read(self, arg0 >>> 0, true, 23, 4);
  }
  readFloatBE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 4 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    const obj = read;
    return obj.read(self, arg0 >>> 0, false, 23, 4);
  }
  readDoubleLE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 8 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    const obj = read;
    return obj.read(self, arg0 >>> 0, true, 52, 8);
  }
  readDoubleBE(arg0, arg1) {
    const self = this;
    const tmp2 = arg1;
    if (!tmp2) {
      if ((arg0 >>> 0) % 1 === 0) {
        if (arg0 >>> 0 >= 0) {
          if ((arg0 >>> 0) + 8 > tmp3) {
            const _RangeError = RangeError;
            const self2 = this;
            const self3 = this;
            const rangeError = new RangeError("Trying to access beyond buffer length");
            throw rangeError;
          }
        }
      }
      const _RangeError2 = RangeError;
      const self4 = this;
      const self5 = this;
      const rangeError1 = new RangeError("offset is not uint");
      throw rangeError1;
    }
    const obj = read;
    return obj.read(self, arg0 >>> 0, false, 52, 8);
  }
  writeUIntLE(arg0, arg1, arg2, arg3) {
    const self = this;
    const tmp4 = arg3;
    if (!tmp4) {
      const _Math = Math;
      const diff = Math.pow(2, 8 * tmp3) - 1;
      if (Buffer.isBuffer(self)) {
        if (diff >= +arg0) {
          if (+arg0 >= 0) {
            if ((arg1 >>> 0) + (arg2 >>> 0) > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = 255 & +arg0;
    let num4 = 256;
    let num5 = 1;
    if (1 < arg2 >>> 0) {
      self[(arg1 >>> 0) + num5] = (+arg0 / num4) & 255;
      const sum = num5 + 1;
      while (sum < arg2 >>> 0) {
        num4 = num4 * 256;
        num5 = sum;
        if (!num4) {
          break;
        }
      }
    }
    return (arg1 >>> 0) + (arg2 >>> 0);
  }
  writeUIntBE(arg0, arg1, arg2, arg3) {
    const self = this;
    const tmp4 = arg3;
    if (!tmp4) {
      const _Math = Math;
      const diff = Math.pow(2, 8 * tmp3) - 1;
      if (Buffer.isBuffer(self)) {
        if (diff >= +arg0) {
          if (+arg0 >= 0) {
            if ((arg1 >>> 0) + (arg2 >>> 0) > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    const diff1 = tmp3 - 1;
    self[(arg1 >>> 0) + diff1] = 255 & +arg0;
    let diff2 = diff1 - 1;
    let num4 = 256;
    if (0 <= diff2) {
      self[(arg1 >>> 0) + diff2] = (+arg0 / num4) & 255;
      const diff3 = diff2 - 1;
      while (0 <= diff3) {
        num4 = num4 * 256;
        diff2 = diff3;
        if (!num4) {
          break;
        }
      }
    }
    return (arg1 >>> 0) + (arg2 >>> 0);
  }
  writeUInt8(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (255 >= +arg0) {
          if (+arg0 >= 0) {
            if ((arg1 >>> 0) + 1 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = 255 & +arg0;
    return (arg1 >>> 0) + 1;
  }
  writeUInt16LE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (65535 >= +arg0) {
          if (+arg0 >= 0) {
            if ((arg1 >>> 0) + 2 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = 255 & +arg0;
    self[(arg1 >>> 0) + 1] = +arg0 >>> 8;
    return (arg1 >>> 0) + 2;
  }
  writeUInt16BE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (65535 >= +arg0) {
          if (+arg0 >= 0) {
            if ((arg1 >>> 0) + 2 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = +arg0 >>> 8;
    self[(arg1 >>> 0) + 1] = 255 & +arg0;
    return (arg1 >>> 0) + 2;
  }
  writeUInt32LE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (4294967295 >= +arg0) {
          if (+arg0 >= 0) {
            if ((arg1 >>> 0) + 4 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[(arg1 >>> 0) + 3] = +arg0 >>> 24;
    self[(arg1 >>> 0) + 2] = +arg0 >>> 16;
    self[(arg1 >>> 0) + 1] = +arg0 >>> 8;
    self[arg1 >>> 0] = 255 & +arg0;
    return (arg1 >>> 0) + 4;
  }
  writeUInt32BE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (4294967295 >= +arg0) {
          if (+arg0 >= 0) {
            if ((arg1 >>> 0) + 4 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = +arg0 >>> 24;
    self[(arg1 >>> 0) + 1] = +arg0 >>> 16;
    self[(arg1 >>> 0) + 2] = +arg0 >>> 8;
    self[(arg1 >>> 0) + 3] = 255 & +arg0;
    return (arg1 >>> 0) + 4;
  }
  writeIntLE(arg0, arg1, arg2, arg3) {
    const self = this;
    const tmp3 = arg3;
    if (!tmp3) {
      const _Math = Math;
      const powResult = Math.pow(2, 8 * arg2 - 1);
      const diff = powResult - 1;
      const tmp7 = -powResult;
      if (Buffer.isBuffer(self)) {
        if (diff >= +arg0) {
          if (+arg0 >= tmp7) {
            if ((arg1 >>> 0) + arg2 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = 255 & +arg0;
    let num4 = 0;
    let num5 = 256;
    let num6 = 1;
    if (1 < arg2) {
      while (true) {
        let num7 = num4;
        let tmp18 = tmp15;
        if (tmp < 0) {
          tmp18 = 0 === num7;
        }
        if (tmp18) {
          tmp18 = 0 !== self[tmp2 + num6 - 1];
        }
        if (tmp18) {
          num7 = 1;
        }
        self[tmp2 + num6] = (((tmp / num5) | 0) - num7) & 255;
        let sum = num6 + 1;
        if (sum >= arg2) {
          break;
        } else {
          num5 = num5 * 256;
          num4 = num7;
          num6 = sum;
          if (!num5) {
            break;
          }
        }
      }
    }
    return (arg1 >>> 0) + arg2;
  }
  writeIntBE(arg0, arg1, arg2, arg3) {
    const self = this;
    const tmp3 = arg3;
    if (!tmp3) {
      const _Math = Math;
      const powResult = Math.pow(2, 8 * arg2 - 1);
      const diff = powResult - 1;
      const tmp7 = -powResult;
      if (Buffer.isBuffer(self)) {
        if (diff >= +arg0) {
          if (+arg0 >= tmp7) {
            if ((arg1 >>> 0) + arg2 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    const diff1 = arg2 - 1;
    self[(arg1 >>> 0) + diff1] = 255 & +arg0;
    let diff2 = diff1 - 1;
    let num4 = 256;
    let num5 = 0;
    if (0 <= diff2) {
      while (true) {
        let num6 = num5;
        let tmp20 = tmp17;
        if (tmp < 0) {
          tmp20 = 0 === num6;
        }
        if (tmp20) {
          tmp20 = 0 !== self[tmp2 + diff2 + 1];
        }
        if (tmp20) {
          num6 = 1;
        }
        self[tmp2 + diff2] = (((tmp / num4) | 0) - num6) & 255;
        let diff3 = diff2 - 1;
        if (0 > diff3) {
          break;
        } else {
          num4 = num4 * 256;
          num5 = num6;
          diff2 = diff3;
          if (!num4) {
            break;
          }
        }
      }
    }
    return (arg1 >>> 0) + arg2;
  }
  writeInt8(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (127 >= +arg0) {
          if (+arg0 >= -128) {
            if ((arg1 >>> 0) + 1 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    let sum = tmp;
    if (+arg0 < 0) {
      sum = 255 + tmp + 1;
    }
    self[arg1 >>> 0] = 255 & sum;
    return (arg1 >>> 0) + 1;
  }
  writeInt16LE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (32767 >= +arg0) {
          if (+arg0 >= -32768) {
            if ((arg1 >>> 0) + 2 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = 255 & +arg0;
    self[(arg1 >>> 0) + 1] = +arg0 >>> 8;
    return (arg1 >>> 0) + 2;
  }
  writeInt16BE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (32767 >= +arg0) {
          if (+arg0 >= -32768) {
            if ((arg1 >>> 0) + 2 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = +arg0 >>> 8;
    self[(arg1 >>> 0) + 1] = 255 & +arg0;
    return (arg1 >>> 0) + 2;
  }
  writeInt32LE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (2147483647 >= +arg0) {
          if (+arg0 >= -2147483648) {
            if ((arg1 >>> 0) + 4 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    self[arg1 >>> 0] = 255 & +arg0;
    self[(arg1 >>> 0) + 1] = +arg0 >>> 8;
    self[(arg1 >>> 0) + 2] = +arg0 >>> 16;
    self[(arg1 >>> 0) + 3] = +arg0 >>> 24;
    return (arg1 >>> 0) + 4;
  }
  writeInt32BE(arg0, arg1, arg2) {
    const self = this;
    const tmp3 = arg2;
    if (!tmp3) {
      if (Buffer.isBuffer(self)) {
        if (2147483647 >= +arg0) {
          if (+arg0 >= -2147483648) {
            if ((arg1 >>> 0) + 4 > self.length) {
              const _RangeError = RangeError;
              const self4 = this;
              const self5 = this;
              const rangeError = new RangeError("Index out of range");
              throw rangeError;
            }
          }
        }
        const _RangeError2 = RangeError;
        const self6 = this;
        const self7 = this;
        const rangeError1 = new RangeError('"value" argument is out of bounds');
        throw rangeError1;
      } else {
        const _TypeError = TypeError;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError('"buffer" argument must be a Buffer instance');
        throw typeError;
      }
    }
    let sum = tmp;
    if (+arg0 < 0) {
      sum = 4294967295 + tmp + 1;
    }
    self[arg1 >>> 0] = sum >>> 24;
    self[(arg1 >>> 0) + 1] = sum >>> 16;
    self[(arg1 >>> 0) + 2] = sum >>> 8;
    self[(arg1 >>> 0) + 3] = 255 & sum;
    return (arg1 >>> 0) + 4;
  }
  writeFloatLE(arg0, arg1, arg2) {
    const self = this;
    const tmp = +arg0;
    const tmp3 = arg2;
    if (!tmp3) {
      if ((arg1 >>> 0) + 4 > self.length) {
        const _RangeError2 = RangeError;
        const self4 = this;
        const self5 = this;
        const rangeError = new RangeError("Index out of range");
        throw rangeError;
      } else if (arg1 >>> 0 < 0) {
        const _RangeError = RangeError;
        const self2 = this;
        const self3 = this;
        const rangeError1 = new RangeError("Index out of range");
        throw rangeError1;
      }
    }
    const obj = read;
    obj.write(self, tmp, arg1 >>> 0, true, 23, 4);
    return (arg1 >>> 0) + 4;
  }
  writeFloatBE(arg0, arg1, arg2) {
    const self = this;
    const tmp = +arg0;
    const tmp3 = arg2;
    if (!tmp3) {
      if ((arg1 >>> 0) + 4 > self.length) {
        const _RangeError2 = RangeError;
        const self4 = this;
        const self5 = this;
        const rangeError = new RangeError("Index out of range");
        throw rangeError;
      } else if (arg1 >>> 0 < 0) {
        const _RangeError = RangeError;
        const self2 = this;
        const self3 = this;
        const rangeError1 = new RangeError("Index out of range");
        throw rangeError1;
      }
    }
    const obj = read;
    obj.write(self, tmp, arg1 >>> 0, false, 23, 4);
    return (arg1 >>> 0) + 4;
  }
  writeDoubleLE(arg0, arg1, arg2) {
    const self = this;
    const tmp = +arg0;
    const tmp3 = arg2;
    if (!tmp3) {
      if ((arg1 >>> 0) + 8 > self.length) {
        const _RangeError2 = RangeError;
        const self4 = this;
        const self5 = this;
        const rangeError = new RangeError("Index out of range");
        throw rangeError;
      } else if (arg1 >>> 0 < 0) {
        const _RangeError = RangeError;
        const self2 = this;
        const self3 = this;
        const rangeError1 = new RangeError("Index out of range");
        throw rangeError1;
      }
    }
    const obj = read;
    obj.write(self, tmp, arg1 >>> 0, true, 52, 8);
    return (arg1 >>> 0) + 8;
  }
  writeDoubleBE(arg0, arg1, arg2) {
    const self = this;
    const tmp = +arg0;
    const tmp3 = arg2;
    if (!tmp3) {
      if ((arg1 >>> 0) + 8 > self.length) {
        const _RangeError2 = RangeError;
        const self4 = this;
        const self5 = this;
        const rangeError = new RangeError("Index out of range");
        throw rangeError;
      } else if (arg1 >>> 0 < 0) {
        const _RangeError = RangeError;
        const self2 = this;
        const self3 = this;
        const rangeError1 = new RangeError("Index out of range");
        throw rangeError1;
      }
    }
    const obj = read;
    obj.write(self, tmp, arg1 >>> 0, false, 52, 8);
    return (arg1 >>> 0) + 8;
  }
  copy(arg0, arg1, arg2, arg3) {
    if (Buffer.isBuffer(arg0)) {
      let length = arg3;
      const self3 = this;
      const tmp5 = arg3 || 0 === length;
      if (!tmp5) {
        length = self3.length;
      }
      let num2 = arg1;
      if (arg1 >= arg0.length) {
        num2 = arg0.length;
      }
      if (!num2) {
        num2 = 0;
      }
      const tmp6 = length > 0 && length < (arg2 || 0);
      if (tmp6) {
        length = tmp4;
      }
      if (length === (arg2 || 0)) {
        return 0;
      } else {
        if (0 !== arg0.length) {
          if (0 !== self3.length) {
            if (num2 < 0) {
              const _RangeError3 = RangeError;
              const self8 = this;
              const self9 = this;
              const rangeError = new RangeError("targetStart out of bounds");
              throw rangeError;
            } else {
              if ((arg2 || 0) >= 0) {
                if ((arg2 || 0) < self3.length) {
                  if (length < 0) {
                    const _RangeError = RangeError;
                    const self4 = this;
                    const self5 = this;
                    const rangeError1 = new RangeError("sourceEnd out of bounds");
                    throw rangeError1;
                  } else {
                    if (length > self3.length) {
                      length = self3.length;
                    }
                    if (arg0.length - num2 < length - (arg2 || 0)) {
                      length = arg0.length - num2 + tmp4;
                    }
                    const diff = length - tmp4;
                    if (self3 === arg0) {
                      const _Uint8Array = Uint8Array;
                      if (typeof Uint8Array.prototype.copyWithin === "function") {
                        self3.copyWithin(num2, arg2 || 0, length);
                      }
                      return diff;
                    }
                    if (self3 === arg0) {
                      if ((arg2 || 0) < num2) {
                        if (num2 < length) {
                          let diff1 = diff - 1;
                          if (0 <= diff1) {
                            do {
                              arg0[diff1 + num2] = self3[diff1 + tmp4];
                              diff1 = diff1 - 1;
                            } while (0 <= diff1);
                          }
                        }
                      }
                    }
                    const _Uint8Array2 = Uint8Array;
                    set = Uint8Array.prototype.set;
                    set.call(arg0, self3.subarray(arg2 || 0, length), num2);
                  }
                }
              }
              const _RangeError2 = RangeError;
              const self6 = this;
              const self7 = this;
              const rangeError2 = new RangeError("Index out of range");
              throw rangeError2;
            }
          }
        }
        return 0;
      }
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("argument should be a Buffer");
      throw typeError;
    }
  }
  fill(str, str2, str3, arg3) {
    let diff;
    let num2;
    let tmp2;
    let tmp3;
    let tmp4;
    const self = this;
    let tmp = arg3;
    if (typeof str === "string") {
      let length;
      let num3;
      if (typeof str2 === "string") {
        length = self.length;
        num3 = 0;
        tmp = str2;
      } else {
        length = str3;
        num3 = str2;
        if (typeof str3 === "string") {
          length = self.length;
          tmp = str3;
          num3 = str2;
        }
      }
      if (undefined !== tmp) {
        if (typeof tmp !== "string") {
          const _TypeError3 = TypeError;
          const self6 = this;
          const self7 = this;
          const typeError = new TypeError("encoding must be a string");
          throw typeError;
        }
      }
      if (typeof tmp === "string") {
        if (!Buffer.isEncoding(tmp)) {
          const _TypeError = TypeError;
          const self2 = this;
          const self3 = this;
          const typeError1 = new TypeError("Unknown encoding: " + tmp);
          throw typeError1;
        }
      }
      tmp2 = tmp;
      tmp3 = length;
      tmp4 = num3;
      num2 = str;
      if (1 === str.length) {
        const charCodeAtResult = str.charCodeAt(0);
        tmp2 = tmp;
        tmp3 = length;
        tmp4 = num3;
        num2 = str;
        const tmp9 = ("utf8" === tmp && charCodeAtResult < 128) || "latin1" === tmp;
        if (tmp9) {
          tmp2 = tmp;
          tmp3 = length;
          tmp4 = num3;
          num2 = charCodeAtResult;
        }
      }
    } else if (typeof str === "number") {
      num2 = str & 255;
      tmp2 = tmp;
      tmp3 = str3;
      tmp4 = str2;
    } else {
      tmp2 = tmp;
      tmp3 = str3;
      tmp4 = str2;
      num2 = str;
      if (typeof str === "boolean") {
        const _Number = Number;
        num2 = Number(str);
        tmp2 = tmp;
        tmp3 = str3;
        tmp4 = str2;
      }
    }
    if (tmp4 >= 0) {
      if (self.length >= tmp4) {
        if (self.length >= tmp3) {
          if (tmp3 <= tmp4) {
            return self;
          } else {
            let sum = tmp4 >>> 0;
            const tmp10 = undefined === tmp3 ? self.length : tmp3 >>> 0;
            if (!num2) {
              num2 = 0;
            }
            if (typeof num2 === "number") {
              if (sum < tmp10) {
                do {
                  self[sum] = num2;
                  sum = sum + 1;
                } while (sum < tmp10);
              }
            } else {
              let fromResult = num2;
              if (!Buffer.isBuffer(num2)) {
                fromResult = Buffer.from(num2, tmp2);
              }
              if (0 === fromResult.length) {
                const _TypeError2 = TypeError;
                const self4 = this;
                const self5 = this;
                const typeError2 = new TypeError('The value "' + num2 + '" is invalid for argument "value"');
                throw typeError2;
              } else {
                let num8 = 0;
                if (0 < tmp10 - sum) {
                  do {
                    self[num8 + sum] = fromResult[num8 % length2];
                    num8 = num8 + 1;
                    diff = tmp10 - sum;
                  } while (num8 < diff);
                }
              }
            }
            return self;
          }
        }
      }
    }
    const rangeError = new RangeError("Out of range index");
    throw rangeError;
  }
}
function from(buffer, str, arg2) {
  if (typeof buffer === "string") {
    let tmp66 = typeof str === "string";
    if (typeof str === "string") {
      tmp66 = "" !== str;
    }
    let str17 = str;
    if (!tmp66) {
      str17 = "utf8";
    }
    if (Buffer.isEncoding(str17)) {
      const tmp72 = byteLength(buffer, str17) | 0;
      if (tmp72 > v2147483647) {
        const _RangeError8 = RangeError;
        const self39 = this;
        const self40 = this;
        const rangeError = new RangeError('The value "' + tmp72 + '" is invalid for option "size"');
        throw rangeError;
      } else {
        const _Uint8Array8 = Uint8Array;
        const self37 = this;
        const self38 = this;
        const uint8Array = new Uint8Array(tmp72);
        const _Object4 = Object;
        Object.setPrototypeOf(uint8Array, Buffer.prototype);
        const writeResult = uint8Array.write(buffer, str17);
        let substr = uint8Array;
        if (writeResult !== tmp72) {
          substr = uint8Array.slice(0, writeResult);
        }
        return substr;
      }
    } else {
      const _TypeError4 = TypeError;
      const self35 = this;
      const self36 = this;
      const typeError = new TypeError("Unknown encoding: " + str17);
      throw typeError;
    }
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (ArrayBuffer.isView(buffer)) {
      return fromArrayLike(buffer);
    } else if (null == buffer) {
      const _TypeError3 = TypeError;
      const self33 = this;
      const self34 = this;
      const typeError1 = new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof buffer,
      );
      throw typeError1;
    } else {
      let tmp3 = buffer instanceof ArrayBuffer;
      if (!tmp3) {
        tmp3 =
          null != buffer &&
          null != buffer.constructor &&
          null != buffer.constructor.name &&
          buffer.constructor.name === tmp84.name;
      }
      if (!tmp3) {
        if (buffer) {
          buffer = buffer.buffer;
          let tmp6 = buffer instanceof ArrayBuffer;
          if (!tmp6) {
            tmp6 =
              null != buffer &&
              null != buffer.constructor &&
              null != buffer.constructor.name &&
              buffer.constructor.name === tmp5.name;
          }
        }
        const _SharedArrayBuffer = SharedArrayBuffer;
        if (typeof SharedArrayBuffer !== "undefined") {
          let tmp9 = buffer instanceof SharedArrayBuffer;
          if (!tmp9) {
            tmp9 =
              null != buffer &&
              null != buffer.constructor &&
              null != buffer.constructor.name &&
              buffer.constructor.name === tmp85.name;
          }
          if (!tmp9) {
            if (buffer) {
              const buffer2 = buffer.buffer;
              let tmp11 = buffer2 instanceof SharedArrayBuffer;
              if (!tmp11) {
                tmp11 =
                  null != buffer2 &&
                  null != buffer2.constructor &&
                  null != buffer2.constructor.name &&
                  buffer2.constructor.name === tmp10.name;
              }
            }
          }
          if (str >= 0) {
            if (buffer.byteLength >= str) {
              let num9 = arg2;
              byteLength = buffer.byteLength;
              if (!arg2) {
                num9 = 0;
              }
              if (byteLength < str + num9) {
                const _RangeError4 = RangeError;
                const self19 = this;
                const self20 = this;
                const rangeError1 = new RangeError('"length" is outside of buffer bounds');
                throw rangeError1;
              } else {
                let uint8Array1;
                if (undefined === str) {
                  if (undefined === arg2) {
                    const _Uint8Array4 = Uint8Array;
                    const self17 = this;
                    const self18 = this;
                    uint8Array1 = new Uint8Array(buffer);
                  }
                  const _Object2 = Object;
                  Object.setPrototypeOf(uint8Array1, Buffer.prototype);
                  return uint8Array1;
                }
                if (undefined === arg2) {
                  const _Uint8Array3 = Uint8Array;
                  const self15 = this;
                  const self16 = this;
                  uint8Array1 = new Uint8Array(buffer, str);
                } else {
                  const _Uint8Array2 = Uint8Array;
                  const self13 = this;
                  const self14 = this;
                  uint8Array1 = new Uint8Array(buffer, str, arg2);
                }
              }
            }
          }
          const _RangeError5 = RangeError;
          const self21 = this;
          const self22 = this;
          const rangeError2 = new RangeError('"offset" is outside of buffer bounds');
          throw rangeError2;
        }
        if (typeof buffer === "number") {
          const _TypeError2 = TypeError;
          const self11 = this;
          const self12 = this;
          const typeError2 = new TypeError('The "value" argument must not be of type number. Received type number');
          throw typeError2;
        } else {
          let tmp14;
          const tmp13 = buffer.valueOf && buffer.valueOf();
          if (null != tmp13) {
            if (tmp13 !== buffer) {
              return Buffer.from(tmp13, str, arg2);
            }
          }
          if (Buffer.isBuffer(buffer)) {
            if (buffer.length >= v2147483647) {
              const _RangeError3 = RangeError;
              const self9 = this;
              const self10 = this;
              const rangeError3 = new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" + v2147483647.toString(16) + " bytes",
              );
              throw rangeError3;
            } else if ((buffer.length | 0 | 0) > v2147483647) {
              const _RangeError2 = RangeError;
              const self7 = this;
              const self8 = this;
              const rangeError4 = new RangeError('The value "' + tmp86 + '" is invalid for option "size"');
              throw rangeError4;
            } else {
              const _Uint8Array9 = Uint8Array;
              const self41 = this;
              const self42 = this;
              const uint8Array2 = new Uint8Array(tmp86);
              const _Object5 = Object;
              Object.setPrototypeOf(uint8Array2, Buffer.prototype);
              tmp14 = uint8Array2;
              const tmp88 = uint8Array2;
              if (0 !== uint8Array2.length) {
                buffer.copy(tmp88, 0, 0, buffer.length | 0 | 0);
                tmp14 = uint8Array2;
              }
            }
          } else if (undefined !== buffer.length) {
            let tmp17;
            if (typeof buffer.length === "number") {
              if (buffer.length == buffer.length) {
                tmp17 = fromArrayLike(buffer);
              }
              tmp14 = tmp17;
            }
            if (0 > v2147483647) {
              const _RangeError = RangeError;
              const self3 = this;
              const self4 = this;
              const rangeError5 = new RangeError('The value "' + '" is invalid for option "size"');
              throw rangeError5;
            } else {
              const _Uint8Array = Uint8Array;
              const self = this;
              const self2 = this;
              const uint8Array3 = new Uint8Array(0);
              const _Object = Object;
              Object.setPrototypeOf(uint8Array3, Buffer.prototype);
              tmp17 = uint8Array3;
            }
          } else if ("Buffer" === buffer.type) {
            const _Array = Array;
            if (Array.isArray(buffer.data)) {
              tmp14 = fromArrayLike(buffer.data);
            }
          }
          if (tmp14) {
            return tmp14;
          } else {
            const _Symbol = Symbol;
            if (typeof Symbol !== "undefined") {
              const _Symbol4 = Symbol;
              if (null != Symbol.toPrimitive) {
                const _Symbol2 = Symbol;
                if (typeof buffer[Symbol.toPrimitive] === "function") {
                  const _Symbol3 = Symbol;
                  return Buffer.from(buffer[Symbol.toPrimitive]("string"), str, arg2);
                }
              }
            }
            const _TypeError = TypeError;
            const self5 = this;
            const self6 = this;
            const typeError3 = new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof buffer,
            );
            throw typeError3;
          }
        }
      }
      if (str >= 0) {
        if (buffer.byteLength >= str) {
          let num11 = arg2;
          const byteLength2 = buffer.byteLength;
          if (!arg2) {
            num11 = 0;
          }
          if (byteLength2 < str + num11) {
            const _RangeError6 = RangeError;
            const self29 = this;
            const self30 = this;
            const rangeError6 = new RangeError('"length" is outside of buffer bounds');
            throw rangeError6;
          } else {
            let uint8Array4;
            if (undefined === str) {
              if (undefined === arg2) {
                const _Uint8Array7 = Uint8Array;
                const self27 = this;
                const self28 = this;
                uint8Array4 = new Uint8Array(buffer);
              }
              const _Object3 = Object;
              Object.setPrototypeOf(uint8Array4, Buffer.prototype);
              return uint8Array4;
            }
            if (undefined === arg2) {
              const _Uint8Array6 = Uint8Array;
              const self25 = this;
              const self26 = this;
              uint8Array4 = new Uint8Array(buffer, str);
            } else {
              const _Uint8Array5 = Uint8Array;
              const self23 = this;
              const self24 = this;
              uint8Array4 = new Uint8Array(buffer, str, arg2);
            }
          }
        }
      }
      const _RangeError7 = RangeError;
      const self31 = this;
      const self32 = this;
      const rangeError7 = new RangeError('"offset" is outside of buffer bounds');
      throw rangeError7;
    }
  }
}
function allocUnsafe(num) {
  if (typeof num !== "number") {
    const _TypeError = TypeError;
    const self9 = this;
    const self10 = this;
    const typeError = new TypeError('"size" argument must be of type number');
    throw typeError;
  } else if (num < 0) {
    const _RangeError3 = RangeError;
    const self7 = this;
    const self8 = this;
    const rangeError = new RangeError('The value "' + num + '" is invalid for option "size"');
    throw rangeError;
  } else {
    num = 0;
    if (num >= 0) {
      if (num >= v2147483647) {
        const _RangeError = RangeError;
        const self = this;
        const self2 = this;
        const rangeError1 = new RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x" + v2147483647.toString(16) + " bytes",
        );
        throw rangeError1;
      } else {
        num = num | 0 | 0;
      }
    }
    if (num > v2147483647) {
      const _RangeError2 = RangeError;
      const self5 = this;
      const self6 = this;
      const rangeError2 = new RangeError('The value "' + num + '" is invalid for option "size"');
      throw rangeError2;
    } else {
      const _Uint8Array = Uint8Array;
      const self3 = this;
      const self4 = this;
      const uint8Array = new Uint8Array(num);
      const _Object = Object;
      Object.setPrototypeOf(uint8Array, Buffer.prototype);
      return uint8Array;
    }
  }
}
function fromArrayLike(data) {
  let num = 0;
  if (data.length >= 0) {
    if (data.length >= v2147483647) {
      const _RangeError = RangeError;
      const self = this;
      const self2 = this;
      const rangeError = new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" + v2147483647.toString(16) + " bytes",
      );
      throw rangeError;
    } else {
      num = length | 0 | 0;
    }
  }
  if (num > v2147483647) {
    const _RangeError2 = RangeError;
    const self5 = this;
    const self6 = this;
    const rangeError1 = new RangeError('The value "' + num + '" is invalid for option "size"');
    throw rangeError1;
  } else {
    const _Uint8Array = Uint8Array;
    const self3 = this;
    const self4 = this;
    const uint8Array = new Uint8Array(num);
    const _Object = Object;
    Object.setPrototypeOf(uint8Array, Buffer.prototype);
    let num5 = 0;
    if (0 < num) {
      do {
        uint8Array[num5] = 255 & data[num5];
        num5 = num5 + 1;
      } while (num5 < num);
    }
    return uint8Array;
  }
}
function byteLength(byteLength, arg1) {
  if (Buffer.isBuffer(byteLength)) {
    return byteLength.length;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (!ArrayBuffer.isView(byteLength)) {
      let tmp3 = byteLength instanceof ArrayBuffer;
      if (!tmp3) {
        tmp3 =
          null != byteLength &&
          null != byteLength.constructor &&
          null != byteLength.constructor.name &&
          byteLength.constructor.name === tmp2.name;
      }
      if (!tmp3) {
        if (typeof byteLength !== "string") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof byteLength,
          );
          throw typeError;
        } else {
          let tmp6 = arguments.length > 2;
          const length = byteLength.length;
          if (tmp6) {
            tmp6 = true === arguments[2];
          }
          if (!tmp6) {
            if (0 === length) {
              return 0;
            }
          }
        }
      }
    }
    return byteLength.byteLength;
  }
}
function slowToString(arg0, arg1, arg2) {
  let num = arg1;
  const tmp = undefined === arg1 || num < 0;
  if (tmp) {
    num = 0;
  }
  const self = this;
  if (num > this.length) {
    return "";
  } else {
    let length = arg2;
    const tmp2 = undefined === arg2 || length > self.length;
    if (tmp2) {
      length = self.length;
    }
    if (length <= 0) {
      return "";
    } else if (length >>> 0 <= num >>> 0) {
      return "";
    }
  }
}
function bidirectionalIndexOf(arg0, str, str2, arg3, arg4) {
  if (0 === arg0.length) {
    return -1;
  } else {
    let tmp = str2;
    let num2 = 0;
    if (typeof str2 !== "string") {
      tmp = arg3;
      num2 = 2147483647;
      if (str2 <= 2147483647) {
        tmp = arg3;
        num2 = str2;
        if (str2 < -2147483648) {
          tmp = arg3;
          num2 = -2147483648;
        }
      }
    }
    // // eliminated: always false
    let num3 = tmp3;
    if (+num2 < 0) {
      num3 = arg0.length + tmp3;
    }
    if (num3 >= arg0.length) {
      if (arg4) {
        return -1;
      } else {
        num3 = arg0.length - 1;
      }
    } else if (num3 < 0) {
      num3 = 0;
      if (!arg4) {
        return -1;
      }
    }
    let fromResult = str;
    if (typeof str === "string") {
      fromResult = Buffer.from(str, tmp);
    }
    if (Buffer.isBuffer(fromResult)) {
      let num7 = -1;
      if (0 !== fromResult.length) {
        num7 = arrayIndexOf(arg0, fromResult, num3, tmp, arg4);
      }
      return num7;
    } else if (typeof fromResult === "number") {
      let tmp9;
      const _Uint8Array = Uint8Array;
      if (typeof Uint8Array.prototype.indexOf === "function") {
        let callResult;
        const _Uint8Array2 = Uint8Array;
        if (arg4) {
          const indexOf = prototype.indexOf;
          callResult = indexOf.call(arg0, tmp6, num3);
        } else {
          const lastIndexOf = prototype.lastIndexOf;
          callResult = lastIndexOf.call(arg0, tmp6, num3);
        }
        tmp9 = callResult;
      } else {
        const items = [fromResult & 255];
        tmp9 = arrayIndexOf(arg0, items, num3, tmp, arg4);
      }
      return tmp9;
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("val must be string, number or Buffer");
      throw typeError;
    }
  }
}
function arrayIndexOf(readUInt16BE, readUInt16BE2, arg2, arg3, arg4) {
  let tmp12;
  let num = 1;
  let result1 = length2;
  let result = length;
  let num2 = 1;
  let result2 = arg2;
  if (undefined !== arg3) {
    const _String = String;
    const str4 = String(arg3);
    const formatted = str4.toLowerCase();
    if ("ucs2" !== formatted) {
      if ("ucs-2" !== formatted) {
        if ("utf16le" !== formatted) {
          num = 1;
          result1 = length2;
          result = length;
          num2 = 1;
          result2 = arg2;
        }
      }
    }
    if (readUInt16BE.length >= 2) {
      if (readUInt16BE2.length >= 2) {
        result = length / 2;
        result1 = length2 / 2;
        result2 = arg2 / 2;
        num = 2;
        num2 = 2;
      }
    }
    return -1;
  }
  const tmp4 = arg4;
  if (tmp4) {
    let num7 = -1;
    if (result2 < result) {
      while (true) {
        let uInt16BE;
        let uInt16BE1;
        let num9;
        let diff;
        tmp12 = num7;
        if (1 === num) {
          uInt16BE = readUInt16BE[result2];
        } else {
          uInt16BE = readUInt16BE.readUInt16BE(result2 * num);
        }
        let tmp15 = -1 === tmp12;
        let num8 = 0;
        if (!tmp15) {
          num8 = result2 - tmp12;
        }
        if (1 === num) {
          uInt16BE1 = readUInt16BE2[num8];
        } else {
          uInt16BE1 = readUInt16BE2.readUInt16BE(num8 * num);
        }
        if (uInt16BE === uInt16BE1) {
          if (tmp15) {
            tmp12 = result2;
          }
          num9 = tmp12;
          diff = result2;
          if (result2 - tmp12 + 1 === result1) {
            break;
          }
        } else {
          diff = result2;
          if (-1 !== tmp12) {
            diff = result2 - (result2 - tmp12);
          }
          num9 = -1;
        }
        result2 = diff + 1;
        num7 = num9;
      }
      return tmp12 * num2;
    }
  } else {
    let diff1 = result2;
    if (result2 + result1 > result) {
      diff1 = result - result1;
    }
    if (diff1 >= 0) {
      while (true) {
        let num5 = 0;
        let flag = true;
        if (0 < result1) {
          while (true) {
            let uInt16BE2;
            let uInt16BE3;
            let sum = diff1 + num5;
            if (1 === num) {
              uInt16BE2 = readUInt16BE[sum];
            } else {
              uInt16BE2 = readUInt16BE.readUInt16BE(sum * num);
            }
            if (1 === num) {
              uInt16BE3 = readUInt16BE2[num5];
            } else {
              uInt16BE3 = readUInt16BE2.readUInt16BE(num5 * num);
            }
            flag = false;
            if (uInt16BE2 !== uInt16BE3) {
              break;
            } else {
              let sum1 = num5 + 1;
              num5 = sum1;
              flag = true;
              if (sum1 >= result1) {
                break;
              }
            }
          }
        }
        if (flag) {
          break;
        } else {
          diff1 = diff1 - 1;
        }
      }
      return diff1;
    }
  }
  return -1;
}
function utf8Slice(arg0, arg1, arg2) {
  let str2;
  let sum1;
  let tmp3;
  let sum = arg1;
  const bound = Math.min(arg0.length, arg2);
  const items = [];
  if (arg1 < bound) {
    do {
      let tmp4 = arg0[sum];
      let num = 4;
      if (tmp4 <= 239) {
        let num2 = 3;
        if (tmp4 <= 223) {
          let num3 = 1;
          if (tmp4 > 191) {
            num3 = 2;
          }
          num2 = num3;
        }
        num = num2;
      }
      let tmp7 = null;
      let tmp8 = tmp3;
      if (sum + num <= bound) {
        if (1 === num) {
          tmp7 = null;
          tmp8 = tmp3;
          if (tmp4 < 128) {
            tmp7 = tmp4;
            tmp8 = tmp3;
          }
        } else if (2 === num) {
          let tmp19 = arg0[sum + 1];
          let tmp20 = 192 & tmp19;
          let tmp21 = 128 === tmp20;
          let tmp22 = tmp3;
          if (128 === tmp20) {
            let tmp23 = ((31 & tmp4) << 6) | (63 & tmp19);
            tmp21 = tmp23 > 127;
            tmp22 = tmp23;
          }
          tmp7 = null;
          tmp8 = tmp22;
          if (tmp21) {
            tmp7 = tmp22;
            tmp8 = tmp22;
          }
        } else if (3 === num) {
          let tmp12 = arg0[sum + 1];
          let tmp13 = arg0[sum + 2];
          let tmp14 = 192 & tmp12;
          let tmp15 = 128 === tmp14;
          if (128 === tmp14) {
            tmp15 = 128 === (192 & tmp13);
          }
          let tmp16 = tmp3;
          if (tmp15) {
            let tmp17 = ((15 & tmp4) << 12) | ((63 & tmp12) << 6) | (63 & tmp13);
            tmp15 = tmp17 > 2047;
            tmp16 = tmp17;
          }
          if (tmp15) {
            let tmp18 = tmp16 < 55296 || tmp16 > 57343;
            tmp15 = tmp18;
          }
          tmp7 = null;
          tmp8 = tmp16;
          if (tmp15) {
            tmp7 = tmp16;
            tmp8 = tmp16;
          }
        } else {
          tmp7 = null;
          tmp8 = tmp3;
          if (4 === num) {
            let tmp29 = arg0[sum + 1];
            let tmp30 = arg0[sum + 2];
            let tmp31 = arg0[sum + 3];
            let tmp32 = 192 & tmp29;
            let tmp9 = 128 === tmp32;
            if (128 === tmp32) {
              tmp9 = 128 === (192 & tmp30);
            }
            if (tmp9) {
              tmp9 = 128 === (192 & tmp31);
            }
            let tmp10 = tmp3;
            if (tmp9) {
              let tmp11 = ((15 & tmp4) << 18) | ((63 & tmp29) << 12) | ((63 & tmp30) << 6) | (63 & tmp31);
              tmp9 = tmp11 > 65535;
              tmp10 = tmp11;
            }
            if (tmp9) {
              tmp9 = tmp10 < 1114112;
            }
            tmp7 = null;
            tmp8 = tmp10;
            if (tmp9) {
              tmp7 = tmp10;
              tmp8 = tmp10;
            }
          }
        }
      }
      let num4 = 1;
      let num5 = 65533;
      if (null !== tmp7) {
        num4 = num;
        num5 = tmp7;
        if (tmp7 > 65535) {
          let diff = tmp7 - 65536;
          let arr3 = items.push(((diff >>> 10) & 1023) | 55296);
          num5 = 56320 | (1023 & diff);
          num4 = num;
        }
      }
      let arr4 = items.push(num5);
      sum = sum + num4;
      tmp3 = tmp8;
    } while (sum < bound);
  }
  if (items.length <= c13) {
    const _String3 = String;
    const fromCharCode2 = String.fromCharCode;
    const _String4 = String;
    str2 = fromCharCode2.apply(String, items);
  } else {
    let num6 = 0;
    let str = "";
    str2 = "";
    if (0 < items.length) {
      do {
        let _String = String;
        let _String2 = String;
        sum1 = num6 + c13;
        let apply = fromCharCode.apply;
        str = `${apply(String, arr.slice(num6, tmp28))}`;
        str2 = str;
        num6 = sum1;
      } while (sum1 < items.length);
    }
  }
  return str2;
}
function utf8ToBytes(str, arg1) {
  let tmp = arg1 || Infinity;
  const items = [];
  let num = 0;
  let tmp2 = null;
  if (0 < str.length) {
    while (true) {
      let sum;
      let tmp11;
      let charCodeAtResult = str.charCodeAt(num);
      if (charCodeAtResult > 55295) {
        if (charCodeAtResult < 57344) {
          let tmp13;
          let tmp14;
          if (tmp2) {
            if (charCodeAtResult < 56320) {
              let diff = tmp - 3;
              tmp13 = charCodeAtResult;
              tmp14 = diff;
              if (-1 < diff) {
                let arr = items.push(239, 191, 189);
                tmp13 = charCodeAtResult;
                tmp14 = diff;
              }
            } else {
              sum = 65536 + (((tmp2 - 55296) << 10) | (charCodeAtResult - 56320));
              tmp11 = tmp;
            }
            if (sum < 128) {
              let diff1 = tmp11 - 1;
              if (diff1 >= 0) {
                let arr9 = items.push(sum);
                tmp13 = null;
                tmp14 = diff1;
              }
            } else if (sum < 2048) {
              let diff2 = tmp11 - 2;
              if (diff2 >= 0) {
                let arr10 = items.push((sum >> 6) | 192, (63 & sum) | 128);
                tmp13 = null;
                tmp14 = diff2;
              }
            } else if (sum < 65536) {
              let diff3 = tmp11 - 3;
              if (diff3 >= 0) {
                let arr11 = items.push((sum >> 12) | 224, ((sum >> 6) & 63) | 128, (63 & sum) | 128);
                tmp13 = null;
                tmp14 = diff3;
              }
            } else if (sum >= 1114112) {
              break;
            } else {
              let diff4 = tmp11 - 4;
              if (diff4 >= 0) {
                let arr12 = items.push(
                  (sum >> 18) | 240,
                  ((sum >> 12) & 63) | 128,
                  ((sum >> 6) & 63) | 128,
                  (63 & sum) | 128,
                );
                tmp13 = null;
                tmp14 = diff4;
              }
            }
          } else if (charCodeAtResult > 56319) {
            let diff5 = tmp - 3;
            tmp13 = tmp2;
            tmp14 = diff5;
            if (-1 < diff5) {
              let arr13 = items.push(239, 191, 189);
              tmp13 = tmp2;
              tmp14 = diff5;
            }
          } else {
            tmp13 = charCodeAtResult;
            tmp14 = tmp;
            if (num + 1 === length) {
              let diff6 = tmp - 3;
              tmp13 = tmp2;
              tmp14 = diff6;
              if (-1 < diff6) {
                let arr14 = items.push(239, 191, 189);
                tmp13 = tmp2;
                tmp14 = diff6;
              }
            }
          }
          num = num + 1;
          tmp2 = tmp13;
          tmp = tmp14;
        }
      }
      let tmp7 = tmp2;
      let tmp8 = tmp;
      if (tmp2) {
        let diff7 = tmp - 3;
        tmp7 = diff7 > -1;
        tmp8 = diff7;
      }
      sum = charCodeAtResult;
      tmp11 = tmp8;
      if (tmp7) {
        let arr15 = items.push(239, 191, 189);
        sum = charCodeAtResult;
        tmp11 = tmp8;
      }
    }
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid code point");
    throw error;
  }
  return items;
}
let forResult = null;
if (typeof Symbol === "function") {
  let _Symbol = Symbol;
  forResult = null;
  if (typeof Symbol.for === "function") {
    let _Symbol2 = Symbol;
    let str2 = "nodejs.util.inspect.custom";
    forResult = Symbol.for("nodejs.util.inspect.custom");
  }
}
let c3 = 2147483647;
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
let TYPED_ARRAY_SUPPORT = Buffer.TYPED_ARRAY_SUPPORT;
if (!TYPED_ARRAY_SUPPORT) {
  const _console = console;
  TYPED_ARRAY_SUPPORT = typeof console === "undefined";
}
if (!TYPED_ARRAY_SUPPORT) {
  const _console2 = console;
  TYPED_ARRAY_SUPPORT = typeof console.error !== "function";
}
if (!TYPED_ARRAY_SUPPORT) {
  const _console3 = console;
  let str =
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.";
  console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
  );
}
let obj = {
  enumerable: true,
  get() {
    if (Buffer.isBuffer(this)) {
      return this.buffer;
    }
  },
};
Object.defineProperty(Buffer.prototype, "parent", obj);
const obj2 = {
  enumerable: true,
  get() {
    if (Buffer.isBuffer(this)) {
      return this.byteOffset;
    }
  },
};
Object.defineProperty(Buffer.prototype, "offset", obj2);
Buffer.poolSize = 8192;
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
if (forResult) {
  Buffer.prototype[forResult] = Buffer.prototype.inspect;
}
let c13 = 4096;
const re14 = /[^+/0-9A-Za-z-_]/g;
const array = new Array(256);
let num = 0;
let num2 = 0;
do {
  do {
    array[tmp8 + num2] = "0123456789abcdef"[num] + "0123456789abcdef"[num2];
    num2 = num2 + 1;
  } while (num2 < 16);
  num = num + 1;
} while (num < 16);
const INSPECT_MAX_BYTES_export = 50;

export { Buffer };
export const SlowBuffer = function SlowBuffer(arg0) {
  let num = arg0;
  if (+arg0 != arg0) {
    num = 0;
  }
  return Buffer.alloc(+num);
};
export { INSPECT_MAX_BYTES_export as INSPECT_MAX_BYTES };
export const kMaxLength = 2147483647;
