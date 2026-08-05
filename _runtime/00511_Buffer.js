import { byteLength } from "00206_byteLength.js";
// _runtime/00511_Buffer.js
const require = arg1;
const exports = arg5;
const dependencyMap = arg6;
class Buffer {
  constructor(arg0, arg1, arg2) {
    if (typeof arg0 === "number") {
      if (typeof arg1 === "string") {
        tmp = globalThis;
        _TypeError = TypeError;
        tmp2 = new.target;
        str = "The \"string\" argument must be of type string. Received type number";
        tmp3 = new.target;
        typeError = new TypeError("The \"string\" argument must be of type string. Received type number");
        tmp5 = typeError;
        throw typeError;
      } else {
        tmp8 = allocUnsafe;
        num2 = 0;
        return allocUnsafe(arg0);
      }
    } else {
      tmp6 = arg2;
      tmp7 = from;
      num = 0;
      return from(arg0, arg1, arg2);
    }
  }
  static from(arg0, arg1, arg2) {
    return from(arg0, arg1, arg2);
  }
  static alloc(arg0, arg1, arg2) {
    if (typeof arg0 !== "number") {
      tmp62 = globalThis;
      _TypeError = TypeError;
      tmp63 = new.target;
      str11 = "\"size\" argument must be of type number";
      tmp64 = new.target;
      typeError = new TypeError("\"size\" argument must be of type number");
      tmp66 = typeError;
      throw typeError;
    } else {
      num = 0;
      if (arg0 < 0) {
        tmp57 = globalThis;
        _RangeError5 = RangeError;
        str9 = "The value \"";
        tmp58 = new.target;
        str10 = "\" is invalid for option \"size\"";
        tmp59 = new.target;
        rangeError = new RangeError("The value \"" + arg0 + "\" is invalid for option \"size\"");
        tmp61 = rangeError;
        throw rangeError;
      } else {
        if (arg0 <= 0) {
          tmp43 = c3;
          if (arg0 > c3) {
            tmp52 = globalThis;
            _RangeError4 = RangeError;
            str7 = "The value \"";
            tmp53 = new.target;
            str8 = "\" is invalid for option \"size\"";
            tmp54 = new.target;
            rangeError1 = new RangeError("The value \"" + arg0 + "\" is invalid for option \"size\"");
            tmp56 = rangeError1;
            throw rangeError1;
          } else {
            tmp44 = globalThis;
            _Uint8Array4 = Uint8Array;
            tmp45 = new.target;
            tmp46 = new.target;
            tmp47 = arg0;
            uint8Array = new Uint8Array(arg0);
            tmp49 = uint8Array;
            _Object4 = Object;
            tmp50 = Buffer;
            setPrototypeOfResult = Object.setPrototypeOf(uint8Array, Buffer.prototype);
            tmp7 = uint8Array;
          }
        } else {
          tmp67 = arg1;
          if (undefined !== arg1) {
            tmp15 = arg2;
            if (typeof arg2 === "string") {
              tmp29 = c3;
              if (arg0 > c3) {
                tmp38 = globalThis;
                _RangeError3 = RangeError;
                str5 = "The value \"";
                tmp39 = new.target;
                str6 = "\" is invalid for option \"size\"";
                tmp40 = new.target;
                rangeError2 = new RangeError("The value \"" + arg0 + "\" is invalid for option \"size\"");
                tmp42 = rangeError2;
                throw rangeError2;
              } else {
                tmp30 = globalThis;
                _Uint8Array3 = Uint8Array;
                tmp31 = new.target;
                tmp32 = new.target;
                tmp33 = arg0;
                uint8Array1 = new Uint8Array(arg0);
                tmp34 = uint8Array1;
                _Object3 = Object;
                tmp35 = Buffer;
                setPrototypeOfResult1 = Object.setPrototypeOf(uint8Array1, Buffer.prototype);
                fillResult = uint8Array1.fill(arg1, arg2);
                tmp37 = fillResult;
              }
            } else {
              tmp68 = c3;
              if (arg0 <= c3) {
                tmp16 = globalThis;
                _Uint8Array2 = Uint8Array;
                tmp17 = new.target;
                tmp18 = new.target;
                tmp19 = arg0;
                uint8Array2 = new Uint8Array(arg0);
                tmp20 = uint8Array2;
                _Object2 = Object;
                tmp21 = Buffer;
                setPrototypeOfResult2 = Object.setPrototypeOf(uint8Array2, Buffer.prototype);
                fillResult = uint8Array2.fill(arg1);
              }
            }
            tmp24 = globalThis;
            _RangeError2 = RangeError;
            str3 = "The value \"";
            tmp25 = new.target;
            str4 = "\" is invalid for option \"size\"";
            tmp26 = new.target;
            rangeError3 = new RangeError("The value \"" + arg0 + "\" is invalid for option \"size\"");
            tmp28 = rangeError3;
            throw rangeError3;
          } else {
            tmp = c3;
            if (arg0 > c3) {
              tmp10 = globalThis;
              _RangeError = RangeError;
              str = "The value \"";
              tmp11 = new.target;
              str2 = "\" is invalid for option \"size\"";
              tmp12 = new.target;
              rangeError4 = new RangeError("The value \"" + arg0 + "\" is invalid for option \"size\"");
              tmp14 = rangeError4;
              throw rangeError4;
            } else {
              tmp2 = globalThis;
              _Uint8Array = Uint8Array;
              tmp3 = new.target;
              tmp4 = new.target;
              tmp5 = arg0;
              uint8Array3 = new Uint8Array(arg0);
              tmp7 = uint8Array3;
              _Object = Object;
              tmp8 = Buffer;
              setPrototypeOfResult3 = Object.setPrototypeOf(uint8Array3, Buffer.prototype);
            }
          }
        }
        return tmp7;
      }
    }
  }
  static allocUnsafe(arg0) {
    return allocUnsafe(arg0);
  }
  static allocUnsafeSlow(arg0) {
    return allocUnsafe(arg0);
  }
  static isBuffer(arg0) {
    tmp = null != arg0;
    if (tmp) {
      flag = true;
      tmp = true === arg0._isBuffer;
    }
    if (tmp) {
      tmp2 = Buffer;
      tmp = arg0 !== Buffer.prototype;
    }
    return tmp;
  }
  static compare(arg0, arg1) {
    tmp2 = arg0 instanceof Uint8Array;
    if (!tmp2) {
      tmp3 = null;
      tmp4 = null != arg0 && null != arg0.constructor && null != arg0.constructor.name && arg0.constructor.name === tmp.name;
      tmp2 = tmp4;
    }
    fromResult = arg0;
    if (tmp2) {
      tmp5 = Buffer;
      fromResult = Buffer.from(arg0, arg0.offset, arg0.byteLength);
    }
    tmp7 = arg1 instanceof Uint8Array;
    if (!tmp7) {
      tmp8 = null;
      tmp9 = null != arg1 && null != arg1.constructor && null != arg1.constructor.name && arg1.constructor.name === tmp6.name;
      tmp7 = tmp9;
    }
    fromResult1 = arg1;
    if (tmp7) {
      tmp10 = Buffer;
      fromResult1 = Buffer.from(arg1, arg1.offset, arg1.byteLength);
    }
    obj = Buffer;
    if (Buffer.isBuffer(fromResult)) {
      if (obj.isBuffer(fromResult1)) {
        if (fromResult === fromResult1) {
          num6 = 0;
          return 0;
        } else {
          length = fromResult.length;
          length2 = fromResult1.length;
          _Math = Math;
          bound = Math.min(length, length2);
          num = 0;
          num2 = 1;
          num3 = 0;
          tmp13 = length2;
          tmp14 = length;
          if (0 < bound) {
            tmp15 = num3;
            while (fromResult[num3] === fromResult1[num3]) {
              num3 = num3 + 1;
              tmp13 = length2;
              tmp14 = length;
            }
            tmp14 = fromResult[num3];
            tmp13 = fromResult1[num3];
          }
          num4 = -1;
          if (tmp14 >= tmp13) {
            num5 = 0;
            if (tmp13 < tmp14) {
              num5 = 1;
            }
            num4 = num5;
          }
          return num4;
        }
      }
    }
    typeError = new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    throw typeError;
  }
  static isEncoding(arg0) {
    return true;
  }
  static concat(arg0, arg1) {
    if (Array.isArray(arg0)) {
      num = 0;
      if (0 === arg0.length) {
        tmp21 = Buffer;
        return require("byteLength");
      } else {
        num5 = arg1;
        if (undefined === arg1) {
          num2 = 1;
          num3 = 0;
          num4 = 0;
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
        tmp5 = Buffer;
        allocUnsafeResult = Buffer.allocUnsafe(num5);
        num6 = 1;
        tmp7 = null;
        num7 = 0;
        num8 = 0;
        if (0 < arg0.length) {
          while (true) {
            tmp8 = arg0[num8];
            tmp10 = tmp8 instanceof Uint8Array;
            tmp11 = num7;
            tmp12 = num8;
            if (!tmp10) {
              tmp13 = null != tmp8 && null != tmp8.constructor && null != tmp8.constructor.name && tmp8.constructor.name === tmp9.name;
              tmp10 = tmp13;
            }
            fromResult = tmp8;
            if (tmp10) {
              tmp14 = Buffer;
              fromResult = Buffer.from(tmp8);
            }
            tmp15 = Buffer;
            if (!Buffer.isBuffer(fromResult)) {
              break;
            } else {
              copyResult = fromResult.copy(allocUnsafeResult, num7);
              num7 = num7 + fromResult.length;
              num8 = num8 + 1;
            }
          }
          _TypeError2 = TypeError;
          tmp16 = new.target;
          str2 = "\"list\" argument must be an Array of Buffers";
          tmp17 = new.target;
          typeError = new TypeError("\"list\" argument must be an Array of Buffers");
          tmp19 = typeError;
          throw typeError;
        }
        return allocUnsafeResult;
      }
    } else {
      _TypeError = TypeError;
      tmp = new.target;
      str = "\"list\" argument must be an Array of Buffers";
      tmp2 = new.target;
      typeError1 = new TypeError("\"list\" argument must be an Array of Buffers");
      tmp4 = typeError1;
      throw typeError1;
    }
  }
  swap16() {
    self = this;
    length = this.length;
    if (length % 2 !== 0) {
      tmp2 = globalThis;
      _RangeError = RangeError;
      tmp3 = new.target;
      str = "Buffer size must be a multiple of 16-bits";
      tmp4 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 16-bits");
      tmp6 = rangeError;
      throw rangeError;
    } else {
      num = 1;
      for (let num2 = 0; num2 < length; num2 = num2 + 2) {
        sum = num2 + 1;
        self[num2] = self[sum];
        self[sum] = self[num2];
      }
      return self;
    }
  }
  swap32() {
    self = this;
    length = this.length;
    if (length % 4 !== 0) {
      tmp4 = globalThis;
      _RangeError = RangeError;
      tmp5 = new.target;
      str = "Buffer size must be a multiple of 32-bits";
      tmp6 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 32-bits");
      tmp8 = rangeError;
      throw rangeError;
    } else {
      num = 3;
      num2 = 1;
      num3 = 2;
      for (let num4 = 0; num4 < length; num4 = num4 + 4) {
        sum = num4 + 3;
        self[num4] = self[sum];
        self[sum] = self[num4];
        sum1 = num4 + 1;
        sum2 = num4 + 2;
        self[sum1] = self[sum2];
        self[sum2] = self[sum1];
      }
      return self;
    }
  }
  swap64() {
    self = this;
    length = this.length;
    if (length % 8 !== 0) {
      tmp8 = globalThis;
      _RangeError = RangeError;
      tmp9 = new.target;
      str = "Buffer size must be a multiple of 64-bits";
      tmp10 = new.target;
      rangeError = new RangeError("Buffer size must be a multiple of 64-bits");
      tmp12 = rangeError;
      throw rangeError;
    } else {
      num2 = 7;
      num3 = 1;
      num4 = 6;
      num5 = 2;
      num6 = 5;
      num7 = 3;
      num8 = 4;
      for (let num = 0; num < length; num = num + 8) {
        sum = num + 7;
        self[num] = self[sum];
        self[sum] = self[num];
        sum1 = num + 1;
        sum2 = num + 6;
        self[sum1] = self[sum2];
        self[sum2] = self[sum1];
        sum3 = num + 2;
        sum4 = num + 5;
        self[sum3] = self[sum4];
        self[sum4] = self[sum3];
        sum5 = num + 3;
        sum6 = num + 4;
        self[sum5] = self[sum6];
        self[sum6] = self[sum5];
      }
      return self;
    }
  }
  toString() {
    self = this;
    length = this.length;
    if (0 === length) {
      return "";
    } else {
      if (0 === arguments.length) {
        tmp4 = utf8Slice;
        applyResult = utf8Slice(self, 0, length);
      } else {
        tmp = slowToString;
        tmp2 = arguments;
        applyResult = slowToString(...arguments);
      }
      tmp5 = applyResult;
    }
    return;
  }
  equals(arg0) {
    obj = Buffer;
    if (Buffer.isBuffer(arg0)) {
      tmp7 = this === arg0;
      if (!tmp7) {
        num = 0;
        tmp7 = 0 === obj.compare(tmp6, arg0);
      }
      return tmp7;
    } else {
      tmp = globalThis;
      _TypeError = TypeError;
      tmp2 = new.target;
      str = "Argument must be a Buffer";
      tmp3 = new.target;
      typeError = new TypeError("Argument must be a Buffer");
      tmp5 = typeError;
      throw typeError;
    }
  }
  inspect() {
    INSPECT_MAX_BYTES = closure_1.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, INSPECT_MAX_BYTES);
    str2 = str.replace(/(.{2})/g, "$1 ");
    trimmed = str2.trim();
    text = trimmed;
    if (this.length > INSPECT_MAX_BYTES) {
      str3 = " ... ";
      text = `${tmp} ... `;
    }
    return "<Buffer " + text + ">";
  }
  compare(arg0, arg1, arg2, arg3, arg4) {
    tmp2 = arg0 instanceof Uint8Array;
    if (!tmp2) {
      tmp3 = null;
      tmp4 = null != arg0 && null != arg0.constructor && null != arg0.constructor.name && arg0.constructor.name === tmp.name;
      tmp2 = tmp4;
    }
    fromResult = arg0;
    if (tmp2) {
      tmp5 = Buffer;
      fromResult = Buffer.from(arg0, arg0.offset, arg0.byteLength);
    }
    if (Buffer.isBuffer(fromResult)) {
      num = arg1;
      if (undefined === arg1) {
        num = 0;
      }
      tmp10 = arg2;
      if (undefined === arg2) {
        num2 = 0;
        if (fromResult) {
          num2 = fromResult.length;
        }
        tmp10 = num2;
      }
      num3 = arg3;
      if (undefined === arg3) {
        num3 = 0;
      }
      self = this;
      length = arg4;
      if (undefined === arg4) {
        length = self.length;
      }
      num4 = 0;
      if (num >= 0) {
        if (tmp10 <= fromResult.length) {
          if (num3 >= 0) {
            if (length <= self.length) {
              if (num3 >= length) {
                if (num >= tmp10) {
                  return 0;
                }
              }
              if (num3 >= length) {
                num9 = -1;
                return -1;
              } else if (num >= tmp10) {
                num8 = 1;
                return 1;
              } else if (self === fromResult) {
                return 0;
              } else {
                tmp18 = length >>> 0;
                tmp19 = num3 >>> 0;
                diff = tmp18 - tmp19;
                tmp21 = tmp10 >>> 0;
                tmp22 = num >>> 0;
                diff1 = tmp21 - tmp22;
                _Math = Math;
                bound = Math.min(diff, diff1);
                substr = self.slice(tmp19, tmp18);
                substr1 = fromResult.slice(tmp22, tmp21);
                num10 = 1;
                num5 = 0;
                tmp12 = diff1;
                tmp13 = diff;
                if (0 < bound) {
                  tmp11 = num5;
                  while (substr[num5] === substr1[num5]) {
                    num5 = num5 + 1;
                    tmp12 = diff1;
                    tmp13 = diff;
                  }
                  tmp13 = substr[num5];
                  tmp12 = substr1[num5];
                }
                num6 = -1;
                if (tmp13 >= tmp12) {
                  num7 = 0;
                  if (tmp12 < tmp13) {
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
      _RangeError = RangeError;
      tmp14 = new.target;
      str2 = "out of range index";
      tmp15 = new.target;
      rangeError = new RangeError("out of range index");
      tmp17 = rangeError;
      throw rangeError;
    } else {
      _TypeError = TypeError;
      tmp6 = new.target;
      str = "The \"target\" argument must be one of type Buffer or Uint8Array. Received type ";
      tmp7 = new.target;
      typeError = new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof fromResult);
      tmp9 = typeError;
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
  write(arg0, arg1, arg2, arg3) {
    self = this;
    if (undefined === arg1) {
      length = self.length;
      str2 = "utf8";
      num2 = 0;
    } else {
      tmp20 = arg2;
      if (undefined === arg2) {
        if (typeof arg1 === "string") {
          length = self.length;
          num2 = 0;
          str2 = arg1;
        }
      }
      tmp = globalThis;
      _isFinite = isFinite;
      if (isFinite(arg1)) {
        num = 0;
        tmp6 = arg1 >>> 0;
        _isFinite2 = isFinite;
        str2 = arg2;
        num2 = tmp6;
        if (isFinite(arg2)) {
          str2 = arg3;
          tmp7 = arg2 >>> 0;
          length = tmp7;
          num2 = tmp6;
          if (undefined === arg3) {
            str2 = "utf8";
            length = tmp7;
            num2 = tmp6;
          }
        }
      } else {
        _Error = Error;
        tmp2 = new.target;
        str = "Buffer.write(string, encoding, offset[, length]) is no longer supported";
        tmp3 = new.target;
        error = new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        tmp5 = error;
        throw error;
      }
    }
    diff = self.length - num2;
    tmp9 = undefined === length || length > diff;
    if (tmp9) {
      length = diff;
    }
    if (arg0.length <= 0) {
      if (num2 <= self.length) {
        if (!str2) {
          str3 = "utf8";
        }
        flag = false;
        while (true) {
          items = [];
          if (0 >= arg0.length) {
            break;
          } else {
            num3 = 2;
            diff1 = tmp10 - 2;
            num4 = 8;
            num5 = 256;
            num6 = 1;
            num7 = 0;
            if (diff1 < 0) {
              break;
            } else {
              charCodeAtResult = arg0.charCodeAt(num7);
              tmp13 = charCodeAtResult >> 8;
              arr = items.push(charCodeAtResult % 256);
              arr1 = items.push(tmp13);
              sum = num7 + 1;
              tmp17 = diff1;
              while (sum < arg0.length) {
                diff1 = diff1 - 2;
                num7 = sum;
                if (diff1 < 0) {
                  break;
                }
              }
            }
          }
          num8 = 0;
          if (0 < length) {
            num8 = 0;
            if (num2 < self.length) {
              num9 = 1;
              num10 = 0;
              num8 = 0;
              if (0 < items.length) {
                self[num10 + num2] = items[num10];
                sum1 = num10 + 1;
                num8 = sum1;
                while (sum1 < length) {
                  num8 = sum1;
                  if (sum1 + num2 >= self.length) {
                    break;
                  } else {
                    num10 = sum1;
                    num8 = sum1;
                    if (sum1 >= items.length) {
                      break;
                    }
                  }
                }
              }
            }
          }
          return num8;
        }
      }
    } else if (length >= 0) {
    }
    rangeError = new RangeError("Attempt to write outside buffer bounds");
    throw rangeError;
  }
  toJSON() {
    slice = Array.prototype.slice;
    call = slice.call;
    tmp = this._arr || this;
    if (typeof call === "unknown") {
      num = 0;
      substr = require("byteLength");
    } else {
      num2 = 0;
      substr = call(tmp, 0);
    }
    return { type: "Buffer", data: substr };
  }
  slice(arg0, arg1) {
    self = this;
    length = this.length;
    tmp = ~~arg0;
    if (tmp < 0) {
      num = tmp + length;
      if (num < 0) {
        num = 0;
      }
    } else {
      num = tmp;
      if (tmp > length) {
        num = length;
      }
    }
    tmp2 = length;
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
      if (tmp2 > length) {
        num2 = length;
      }
    }
    if (num2 < num) {
      num2 = num;
    }
    subarrayResult = self.subarray(num, num2);
    setPrototypeOfResult = Object.setPrototypeOf(subarrayResult, Buffer.prototype);
    return subarrayResult;
  }
  readUIntLE(arg0, arg1, arg2) {
    self = this;
    tmp = arg0 >>> 0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          if (tmp + tmp2 > tmp3) {
            tmp4 = globalThis;
            _RangeError = RangeError;
            tmp5 = new.target;
            str = "Trying to access beyond buffer length";
            tmp6 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp8 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp9 = globalThis;
      _RangeError2 = RangeError;
      tmp10 = new.target;
      str2 = "offset is not uint";
      tmp11 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp13 = rangeError1;
      throw rangeError1;
    }
    tmp14 = self[tmp];
    num2 = 256;
    tmp15 = tmp14;
    num3 = 1;
    if (1 < tmp2) {
      sum = tmp14 + self[tmp + num3] * num2;
      sum1 = num3 + 1;
      tmp18 = num2;
      tmp15 = sum;
      while (sum1 < tmp2) {
        num2 = num2 * 256;
        num3 = sum1;
        tmp14 = sum;
        tmp15 = sum;
        if (!num2) {
          break;
        }
      }
    }
    return tmp15;
  }
  readUIntBE(arg0, arg1, arg2) {
    self = this;
    tmp = arg0 >>> 0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          if (tmp + tmp2 > tmp3) {
            tmp4 = globalThis;
            _RangeError = RangeError;
            tmp5 = new.target;
            str = "Trying to access beyond buffer length";
            tmp6 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp8 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp9 = globalThis;
      _RangeError2 = RangeError;
      tmp10 = new.target;
      str2 = "offset is not uint";
      tmp11 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp13 = rangeError1;
      throw rangeError1;
    }
    diff = tmp2 - 1;
    tmp15 = self[tmp + diff];
    num2 = 256;
    tmp16 = tmp15;
    if (0 < diff) {
      diff1 = diff - 1;
      sum = tmp15 + self[tmp + diff1] * num2;
      tmp19 = num2;
      tmp16 = sum;
      while (0 < diff1) {
        num2 = num2 * 256;
        tmp15 = sum;
        diff = diff1;
        tmp16 = sum;
        if (!num2) {
          break;
        }
      }
    }
    return tmp16;
  }
  readUInt8(arg0, arg1) {
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          if (tmp + 1 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    return this[tmp];
  }
  readUInt16LE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 2;
          if (tmp + 2 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    return self[tmp] | self[tmp + 1] << 8;
  }
  readUInt16BE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 2;
          if (tmp + 2 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    return self[tmp] << 8 | self[tmp + 1];
  }
  readUInt32LE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 4;
          if (tmp + 4 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    return (self[tmp] | self[tmp + 1] << 8 | self[tmp + 2] << 16) + 16777216 * self[tmp + 3];
  }
  readUInt32BE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 4;
          if (tmp + 4 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    return 16777216 * self[tmp] + (self[tmp + 1] << 16 | self[tmp + 2] << 8 | self[tmp + 3]);
  }
  readIntLE(arg0, arg1, arg2) {
    self = this;
    tmp = arg0 >>> 0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          if (tmp + tmp2 > tmp3) {
            tmp4 = globalThis;
            _RangeError = RangeError;
            tmp5 = new.target;
            str = "Trying to access beyond buffer length";
            tmp6 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp8 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp9 = globalThis;
      _RangeError2 = RangeError;
      tmp10 = new.target;
      str2 = "offset is not uint";
      tmp11 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp13 = rangeError1;
      throw rangeError1;
    }
    tmp14 = self[tmp];
    num2 = 1;
    num3 = 256;
    tmp15 = tmp14;
    num4 = 1;
    if (1 < tmp2) {
      sum = tmp14 + self[tmp + num2] * num3;
      sum1 = num2 + 1;
      tmp18 = num3;
      num4 = num3;
      tmp15 = sum;
      while (sum1 < tmp2) {
        num3 = num3 * 256;
        num2 = sum1;
        tmp14 = sum;
        tmp15 = sum;
        num4 = num3;
        if (!num3) {
          break;
        }
      }
    }
    diff = tmp15;
    if (tmp15 >= num4 * 128) {
      tmp20 = globalThis;
      _Math = Math;
      num5 = 2;
      num6 = 8;
      diff = tmp15 - require("module_2");
    }
    return diff;
  }
  readIntBE(arg0, arg1, arg2) {
    self = this;
    tmp = arg0 >>> 0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          if (tmp + tmp2 > tmp3) {
            tmp4 = globalThis;
            _RangeError = RangeError;
            tmp5 = new.target;
            str = "Trying to access beyond buffer length";
            tmp6 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp8 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp9 = globalThis;
      _RangeError2 = RangeError;
      tmp10 = new.target;
      str2 = "offset is not uint";
      tmp11 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp13 = rangeError1;
      throw rangeError1;
    }
    diff = tmp2 - 1;
    tmp15 = self[tmp + diff];
    num2 = 256;
    tmp16 = tmp15;
    num3 = 1;
    if (0 < diff) {
      diff1 = diff - 1;
      sum = tmp15 + self[tmp + diff1] * num2;
      tmp19 = num2;
      tmp16 = sum;
      num3 = num2;
      while (0 < diff1) {
        num2 = num2 * 256;
        tmp15 = sum;
        diff = diff1;
        tmp16 = sum;
        num3 = num2;
        if (!num2) {
          break;
        }
      }
    }
    diff2 = tmp16;
    if (tmp16 >= num3 * 128) {
      tmp21 = globalThis;
      _Math = Math;
      num4 = 2;
      num5 = 8;
      diff2 = tmp16 - require("module_2");
    }
    return diff2;
  }
  readInt8(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          if (tmp + 1 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    tmp13 = self[tmp];
    if (128 & self[tmp]) {
      num2 = 255;
      num3 = -1;
      num4 = 1;
      result = -1 * (255 - tmp13 + 1);
    } else {
      result = tmp13;
    }
    return result;
  }
  readInt16LE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 2;
          if (tmp + 2 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    tmp13 = self[tmp] | self[tmp + 1] << 8;
    tmp14 = tmp13;
    if (32768 & tmp13) {
      num3 = 4294901760;
      tmp14 = 4294901760 | tmp13;
    }
    return tmp14;
  }
  readInt16BE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 2;
          if (tmp + 2 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    tmp13 = self[tmp + 1] | self[tmp] << 8;
    tmp14 = tmp13;
    if (32768 & tmp13) {
      num3 = 4294901760;
      tmp14 = 4294901760 | tmp13;
    }
    return tmp14;
  }
  readInt32LE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 4;
          if (tmp + 4 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    return self[tmp] | self[tmp + 1] << 8 | self[tmp + 2] << 16 | self[tmp + 3] << 24;
  }
  readInt32BE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 4;
          if (tmp + 4 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    return self[tmp] << 24 | self[tmp + 1] << 16 | self[tmp + 2] << 8 | self[tmp + 3];
  }
  readFloatLE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 4;
          if (tmp + 4 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    obj = require("read");
    return obj.read(self, tmp, true, 23, 4);
  }
  readFloatBE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 4;
          if (tmp + 4 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    obj = require("read");
    return obj.read(self, tmp, false, 23, 4);
  }
  readDoubleLE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 8;
          if (tmp + 8 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    obj = require("read");
    return obj.read(self, tmp, true, 52, 8);
  }
  readDoubleBE(arg0, arg1) {
    self = this;
    tmp = arg0 >>> 0;
    if (!arg1) {
      num = 1;
      if (tmp % 1 === 0) {
        if (tmp >= 0) {
          num2 = 8;
          if (tmp + 8 > tmp2) {
            tmp3 = globalThis;
            _RangeError = RangeError;
            tmp4 = new.target;
            str = "Trying to access beyond buffer length";
            tmp5 = new.target;
            rangeError = new RangeError("Trying to access beyond buffer length");
            tmp7 = rangeError;
            throw rangeError;
          }
        }
      }
      tmp8 = globalThis;
      _RangeError2 = RangeError;
      tmp9 = new.target;
      str2 = "offset is not uint";
      tmp10 = new.target;
      rangeError1 = new RangeError("offset is not uint");
      tmp12 = rangeError1;
      throw rangeError1;
    }
    obj = require("read");
    return obj.read(self, tmp, false, 52, 8);
  }
  writeUIntLE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    tmp3 = arg2 >>> 0;
    if (!arg3) {
      tmp4 = globalThis;
      _Math = Math;
      num = 2;
      num2 = 8;
      num3 = 1;
      tmp6 = Buffer;
      diff = require("module_2") - 1;
      if (Buffer.isBuffer(self)) {
        if (diff >= tmp) {
          if (tmp >= 0) {
            if (tmp2 + tmp3 > self.length) {
              _RangeError = RangeError;
              tmp11 = new.target;
              str2 = "Index out of range";
              tmp12 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp14 = rangeError;
              throw rangeError;
            }
          }
        }
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        _TypeError = TypeError;
        tmp7 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp8 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp10 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = 255 & tmp;
    num4 = 256;
    num5 = 1;
    if (1 < tmp3) {
      self[tmp2 + num5] = tmp / num4 & 255;
      sum = num5 + 1;
      tmp20 = num4;
      while (sum < tmp3) {
        num4 = num4 * 256;
        num5 = sum;
        if (!num4) {
          break;
        }
      }
    }
    return tmp2 + tmp3;
  }
  writeUIntBE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    tmp3 = arg2 >>> 0;
    if (!arg3) {
      tmp4 = globalThis;
      _Math = Math;
      num = 2;
      num2 = 8;
      num3 = 1;
      tmp6 = Buffer;
      diff = require("module_2") - 1;
      if (Buffer.isBuffer(self)) {
        if (diff >= tmp) {
          if (tmp >= 0) {
            if (tmp2 + tmp3 > self.length) {
              _RangeError = RangeError;
              tmp11 = new.target;
              str2 = "Index out of range";
              tmp12 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp14 = rangeError;
              throw rangeError;
            }
          }
        }
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        _TypeError = TypeError;
        tmp7 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp8 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp10 = typeError;
        throw typeError;
      }
    }
    diff1 = tmp3 - 1;
    self[tmp2 + diff1] = 255 & tmp;
    diff2 = diff1 - 1;
    num4 = 256;
    if (0 <= diff2) {
      self[tmp2 + diff2] = tmp / num4 & 255;
      diff3 = diff2 - 1;
      tmp22 = num4;
      while (0 <= diff3) {
        num4 = num4 * 256;
        diff2 = diff3;
        if (!num4) {
          break;
        }
      }
    }
    return tmp2 + tmp3;
  }
  writeUInt8(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 255;
        if (255 >= tmp) {
          if (tmp >= 0) {
            num2 = 1;
            if (tmp2 + 1 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = 255 & tmp;
    return tmp2 + 1;
  }
  writeUInt16LE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 65535;
        if (65535 >= tmp) {
          if (tmp >= 0) {
            num2 = 2;
            if (tmp2 + 2 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = 255 & tmp;
    self[tmp2 + 1] = tmp >>> 8;
    return tmp2 + 2;
  }
  writeUInt16BE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 65535;
        if (65535 >= tmp) {
          if (tmp >= 0) {
            num2 = 2;
            if (tmp2 + 2 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = tmp >>> 8;
    self[tmp2 + 1] = 255 & tmp;
    return tmp2 + 2;
  }
  writeUInt32LE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 4294967295;
        if (4294967295 >= tmp) {
          if (tmp >= 0) {
            num2 = 4;
            if (tmp2 + 4 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    self[tmp2 + 3] = tmp >>> 24;
    self[tmp2 + 2] = tmp >>> 16;
    self[tmp2 + 1] = tmp >>> 8;
    self[tmp2] = 255 & tmp;
    return tmp2 + 4;
  }
  writeUInt32BE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 4294967295;
        if (4294967295 >= tmp) {
          if (tmp >= 0) {
            num2 = 4;
            if (tmp2 + 4 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = tmp >>> 24;
    self[tmp2 + 1] = tmp >>> 16;
    self[tmp2 + 2] = tmp >>> 8;
    self[tmp2 + 3] = 255 & tmp;
    return tmp2 + 4;
  }
  writeIntLE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg3) {
      tmp3 = globalThis;
      _Math = Math;
      num = 8;
      num2 = 2;
      num3 = 1;
      powResult = require("module_2");
      tmp7 = Buffer;
      diff = powResult - 1;
      tmp6 = -powResult;
      if (Buffer.isBuffer(self)) {
        if (diff >= tmp) {
          if (tmp >= tmp6) {
            if (tmp2 + arg2 > self.length) {
              _RangeError = RangeError;
              tmp12 = new.target;
              str2 = "Index out of range";
              tmp13 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp15 = rangeError;
              throw rangeError;
            }
          }
        }
        _RangeError2 = RangeError;
        tmp16 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp17 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp19 = rangeError1;
        throw rangeError1;
      } else {
        _TypeError = TypeError;
        tmp8 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp9 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp11 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = 255 & tmp;
    num4 = 0;
    num5 = 256;
    num6 = 1;
    if (1 < arg2) {
      while (true) {
        num7 = num4;
        tmp21 = num5;
        tmp22 = num6;
        tmp23 = tmp20;
        if (tmp < 0) {
          tmp23 = 0 === num7;
        }
        if (tmp23) {
          tmp23 = 0 !== self[tmp2 + num6 - 1];
        }
        if (tmp23) {
          num7 = 1;
        }
        self[tmp2 + num6] = (tmp / num5 | 0) - num7 & 255;
        sum = num6 + 1;
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
    return tmp2 + arg2;
  }
  writeIntBE(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg3) {
      tmp3 = globalThis;
      _Math = Math;
      num = 8;
      num2 = 2;
      num3 = 1;
      powResult = require("module_2");
      tmp7 = Buffer;
      diff = powResult - 1;
      tmp6 = -powResult;
      if (Buffer.isBuffer(self)) {
        if (diff >= tmp) {
          if (tmp >= tmp6) {
            if (tmp2 + arg2 > self.length) {
              _RangeError = RangeError;
              tmp12 = new.target;
              str2 = "Index out of range";
              tmp13 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp15 = rangeError;
              throw rangeError;
            }
          }
        }
        _RangeError2 = RangeError;
        tmp16 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp17 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp19 = rangeError1;
        throw rangeError1;
      } else {
        _TypeError = TypeError;
        tmp8 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp9 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp11 = typeError;
        throw typeError;
      }
    }
    diff1 = arg2 - 1;
    self[tmp2 + diff1] = 255 & tmp;
    diff2 = diff1 - 1;
    num4 = 256;
    num5 = 0;
    if (0 <= diff2) {
      while (true) {
        num6 = num5;
        tmp23 = num4;
        tmp24 = diff2;
        tmp25 = tmp22;
        if (tmp < 0) {
          tmp25 = 0 === num6;
        }
        if (tmp25) {
          tmp25 = 0 !== self[tmp2 + diff2 + 1];
        }
        if (tmp25) {
          num6 = 1;
        }
        self[tmp2 + diff2] = (tmp / num4 | 0) - num6 & 255;
        diff3 = diff2 - 1;
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
    return tmp2 + arg2;
  }
  writeInt8(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 127;
        if (127 >= tmp) {
          num2 = -128;
          if (tmp >= -128) {
            num3 = 1;
            if (tmp2 + 1 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    sum = tmp;
    if (tmp < 0) {
      num4 = 1;
      num5 = 255;
      sum = 255 + tmp + 1;
    }
    self[tmp2] = 255 & sum;
    return tmp2 + 1;
  }
  writeInt16LE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 32767;
        if (32767 >= tmp) {
          num2 = -32768;
          if (tmp >= -32768) {
            num3 = 2;
            if (tmp2 + 2 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = 255 & tmp;
    self[tmp2 + 1] = tmp >>> 8;
    return tmp2 + 2;
  }
  writeInt16BE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 32767;
        if (32767 >= tmp) {
          num2 = -32768;
          if (tmp >= -32768) {
            num3 = 2;
            if (tmp2 + 2 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = tmp >>> 8;
    self[tmp2 + 1] = 255 & tmp;
    return tmp2 + 2;
  }
  writeInt32LE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 2147483647;
        if (2147483647 >= tmp) {
          num2 = -2147483648;
          if (tmp >= -2147483648) {
            num3 = 4;
            if (tmp2 + 4 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    self[tmp2] = 255 & tmp;
    self[tmp2 + 1] = tmp >>> 8;
    self[tmp2 + 2] = tmp >>> 16;
    self[tmp2 + 3] = tmp >>> 24;
    return tmp2 + 4;
  }
  writeInt32BE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      tmp3 = Buffer;
      if (Buffer.isBuffer(self)) {
        num = 2147483647;
        if (2147483647 >= tmp) {
          num2 = -2147483648;
          if (tmp >= -2147483648) {
            num3 = 4;
            if (tmp2 + 4 > self.length) {
              tmp9 = globalThis;
              _RangeError = RangeError;
              tmp10 = new.target;
              str2 = "Index out of range";
              tmp11 = new.target;
              rangeError = new RangeError("Index out of range");
              tmp13 = rangeError;
              throw rangeError;
            }
          }
        }
        tmp14 = globalThis;
        _RangeError2 = RangeError;
        tmp15 = new.target;
        str3 = "\"value\" argument is out of bounds";
        tmp16 = new.target;
        rangeError1 = new RangeError("\"value\" argument is out of bounds");
        tmp18 = rangeError1;
        throw rangeError1;
      } else {
        tmp4 = globalThis;
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "\"buffer\" argument must be a Buffer instance";
        tmp6 = new.target;
        typeError = new TypeError("\"buffer\" argument must be a Buffer instance");
        tmp8 = typeError;
        throw typeError;
      }
    }
    sum = tmp;
    if (tmp < 0) {
      num4 = 1;
      num5 = 4294967295;
      sum = 4294967295 + tmp + 1;
    }
    self[tmp2] = sum >>> 24;
    self[tmp2 + 1] = sum >>> 16;
    self[tmp2 + 2] = sum >>> 8;
    self[tmp2 + 3] = 255 & sum;
    return tmp2 + 4;
  }
  writeFloatLE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      num = 4;
      if (tmp2 + 4 > self.length) {
        tmp8 = globalThis;
        _RangeError2 = RangeError;
        tmp9 = new.target;
        str2 = "Index out of range";
        tmp10 = new.target;
        rangeError = new RangeError("Index out of range");
        tmp12 = rangeError;
        throw rangeError;
      } else if (tmp2 < 0) {
        tmp3 = globalThis;
        _RangeError = RangeError;
        tmp4 = new.target;
        str = "Index out of range";
        tmp5 = new.target;
        rangeError1 = new RangeError("Index out of range");
        tmp7 = rangeError1;
        throw rangeError1;
      }
    }
    obj = require("read");
    writeResult = obj.write(self, tmp, tmp2, true, 23, 4);
    return tmp2 + 4;
  }
  writeFloatBE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      num = 4;
      if (tmp2 + 4 > self.length) {
        tmp8 = globalThis;
        _RangeError2 = RangeError;
        tmp9 = new.target;
        str2 = "Index out of range";
        tmp10 = new.target;
        rangeError = new RangeError("Index out of range");
        tmp12 = rangeError;
        throw rangeError;
      } else if (tmp2 < 0) {
        tmp3 = globalThis;
        _RangeError = RangeError;
        tmp4 = new.target;
        str = "Index out of range";
        tmp5 = new.target;
        rangeError1 = new RangeError("Index out of range");
        tmp7 = rangeError1;
        throw rangeError1;
      }
    }
    obj = require("read");
    writeResult = obj.write(self, tmp, tmp2, false, 23, 4);
    return tmp2 + 4;
  }
  writeDoubleLE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      num = 8;
      if (tmp2 + 8 > self.length) {
        tmp8 = globalThis;
        _RangeError2 = RangeError;
        tmp9 = new.target;
        str2 = "Index out of range";
        tmp10 = new.target;
        rangeError = new RangeError("Index out of range");
        tmp12 = rangeError;
        throw rangeError;
      } else if (tmp2 < 0) {
        tmp3 = globalThis;
        _RangeError = RangeError;
        tmp4 = new.target;
        str = "Index out of range";
        tmp5 = new.target;
        rangeError1 = new RangeError("Index out of range");
        tmp7 = rangeError1;
        throw rangeError1;
      }
    }
    obj = require("read");
    writeResult = obj.write(self, tmp, tmp2, true, 52, 8);
    return tmp2 + 8;
  }
  writeDoubleBE(arg0, arg1, arg2) {
    self = this;
    tmp = +arg0;
    tmp2 = arg1 >>> 0;
    if (!arg2) {
      num = 8;
      if (tmp2 + 8 > self.length) {
        tmp8 = globalThis;
        _RangeError2 = RangeError;
        tmp9 = new.target;
        str2 = "Index out of range";
        tmp10 = new.target;
        rangeError = new RangeError("Index out of range");
        tmp12 = rangeError;
        throw rangeError;
      } else if (tmp2 < 0) {
        tmp3 = globalThis;
        _RangeError = RangeError;
        tmp4 = new.target;
        str = "Index out of range";
        tmp5 = new.target;
        rangeError1 = new RangeError("Index out of range");
        tmp7 = rangeError1;
        throw rangeError1;
      }
    }
    obj = require("read");
    writeResult = obj.write(self, tmp, tmp2, false, 52, 8);
    return tmp2 + 8;
  }
  copy(arg0, arg1, arg2, arg3) {
    if (Buffer.isBuffer(arg0)) {
      num = arg2;
      if (!arg2) {
        num = 0;
      }
      length = arg3;
      tmp6 = arg3;
      if (!arg3) {
        num2 = 0;
        tmp6 = 0 === length;
      }
      self = this;
      if (!tmp6) {
        length = self.length;
      }
      num3 = arg1;
      if (arg1 >= arg0.length) {
        num3 = arg0.length;
      }
      if (!num3) {
        num3 = 0;
      }
      num4 = 0;
      tmp7 = length > 0 && length < num;
      if (tmp7) {
        length = num;
      }
      if (length === num) {
        return 0;
      } else {
        if (0 !== arg0.length) {
          if (0 !== self.length) {
            if (num3 < 0) {
              tmp26 = globalThis;
              _RangeError3 = RangeError;
              tmp27 = new.target;
              str4 = "targetStart out of bounds";
              tmp28 = new.target;
              rangeError = new RangeError("targetStart out of bounds");
              tmp30 = rangeError;
              throw rangeError;
            } else {
              if (num >= 0) {
                if (num < self.length) {
                  if (length < 0) {
                    tmp16 = globalThis;
                    _RangeError = RangeError;
                    tmp17 = new.target;
                    str2 = "sourceEnd out of bounds";
                    tmp18 = new.target;
                    rangeError1 = new RangeError("sourceEnd out of bounds");
                    tmp20 = rangeError1;
                    throw rangeError1;
                  } else {
                    if (length > self.length) {
                      length = self.length;
                    }
                    if (arg0.length - num3 < length - num) {
                      length = arg0.length - num3 + num;
                    }
                    diff = length - num;
                    tmp9 = self === arg0;
                    if (tmp9) {
                      tmp10 = globalThis;
                      _Uint8Array = Uint8Array;
                      if (typeof Uint8Array.prototype.copyWithin === "function") {
                        copyWithinResult = self.copyWithin(num3, num, length);
                      }
                      return diff;
                    }
                    if (tmp9) {
                      if (num < num3) {
                        if (num3 < length) {
                          num5 = 1;
                          diff1 = diff - 1;
                          if (0 <= diff1) {
                            do {
                              arg0[diff1 + num3] = self[diff1 + num];
                              diff1 = diff1 - 1;
                            } while (0 <= diff1);
                          }
                        }
                      }
                    }
                    tmp11 = globalThis;
                    _Uint8Array2 = Uint8Array;
                    set = Uint8Array.prototype.set;
                    call = set.call;
                    subarrayResult = self.subarray(num, length);
                    if (typeof call === "unknown") {
                      result = set(subarrayResult, num3);
                    } else {
                      callResult = call(arg0, subarrayResult, num3);
                    }
                  }
                }
              }
              tmp21 = globalThis;
              _RangeError2 = RangeError;
              tmp22 = new.target;
              str3 = "Index out of range";
              tmp23 = new.target;
              rangeError2 = new RangeError("Index out of range");
              tmp25 = rangeError2;
              throw rangeError2;
            }
          }
        }
        return 0;
      }
    } else {
      tmp = globalThis;
      _TypeError = TypeError;
      tmp2 = new.target;
      str = "argument should be a Buffer";
      tmp3 = new.target;
      typeError = new TypeError("argument should be a Buffer");
      tmp5 = typeError;
      throw typeError;
    }
  }
  fill(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = arg3;
    if (typeof arg0 === "string") {
      if (typeof arg1 === "string") {
        length = self.length;
        num3 = 0;
        tmp = arg1;
      } else {
        length = arg2;
        num3 = arg1;
        if (typeof arg2 === "string") {
          length = self.length;
          tmp = arg2;
          num3 = arg1;
        }
      }
      if (undefined !== tmp) {
        if (typeof tmp !== "string") {
          tmp21 = globalThis;
          _TypeError3 = TypeError;
          tmp22 = new.target;
          str6 = "encoding must be a string";
          tmp23 = new.target;
          typeError = new TypeError("encoding must be a string");
          tmp25 = typeError;
          throw typeError;
        }
      }
      if (typeof tmp === "string") {
        tmp27 = Buffer;
        if (!Buffer.isEncoding(tmp)) {
          tmp5 = globalThis;
          _TypeError = TypeError;
          str = "Unknown encoding: ";
          tmp6 = new.target;
          tmp7 = new.target;
          typeError1 = new TypeError("Unknown encoding: " + tmp);
          tmp9 = typeError1;
          throw typeError1;
        }
      }
      num4 = 1;
      tmp2 = tmp;
      tmp3 = length;
      tmp4 = num3;
      num2 = arg0;
      if (1 === arg0.length) {
        num5 = 0;
        charCodeAtResult = require("byteLength");
        str2 = "utf8";
        tmp11 = "utf8" === tmp;
        if (tmp11) {
          num6 = 128;
          tmp11 = charCodeAtResult < 128;
        }
        if (!tmp11) {
          str3 = "latin1";
          tmp11 = "latin1" === tmp;
        }
        tmp2 = tmp;
        tmp3 = length;
        tmp4 = num3;
        num2 = arg0;
        if (tmp11) {
          tmp2 = tmp;
          tmp3 = length;
          tmp4 = num3;
          num2 = charCodeAtResult;
        }
      }
    } else if (typeof arg0 === "number") {
      num = 255;
      num2 = arg0 & 255;
      tmp2 = tmp;
      tmp3 = arg2;
      tmp4 = arg1;
    } else {
      tmp2 = tmp;
      tmp3 = arg2;
      tmp4 = arg1;
      num2 = arg0;
      if (typeof arg0 === "boolean") {
        tmp26 = globalThis;
        _Number = Number;
        num2 = Number(arg0);
        tmp2 = tmp;
        tmp3 = arg2;
        tmp4 = arg1;
      }
    }
    if (tmp4 >= 0) {
      if (self.length >= tmp4) {
        if (self.length >= tmp3) {
          if (tmp3 <= tmp4) {
            return self;
          } else {
            sum = tmp4 >>> 0;
            tmp12 = undefined === tmp3 ? self.length : tmp3 >>> 0;
            if (!num2) {
              num2 = 0;
            }
            if (typeof num2 === "number") {
              num9 = 1;
              if (sum < tmp12) {
                do {
                  self[sum] = num2;
                  sum = sum + 1;
                } while (sum < tmp12);
              }
            } else {
              obj = Buffer;
              fromResult = num2;
              if (!Buffer.isBuffer(num2)) {
                fromResult = obj.from(num2, tmp2);
              }
              length2 = fromResult.length;
              if (0 === length2) {
                tmp14 = globalThis;
                _TypeError2 = TypeError;
                str4 = "The value \"";
                tmp15 = new.target;
                str5 = "\" is invalid for argument \"value\"";
                tmp16 = new.target;
                typeError2 = new TypeError("The value \"" + num2 + "\" is invalid for argument \"value\"");
                tmp18 = typeError2;
                throw typeError2;
              } else {
                num7 = 1;
                num8 = 0;
                if (0 < tmp12 - sum) {
                  do {
                    self[num8 + sum] = fromResult[num8 % length2];
                    num8 = num8 + 1;
                    diff = tmp12 - sum;
                  } while (num8 < diff);
                }
              }
            }
            return self;
          }
        }
      }
    }
    rangeError = new RangeError("Out of range index");
    throw rangeError;
  }
}
function from(data, str) {
  if (typeof data === "string") {
    let rangeError = typeof str === "string";
    if (typeof str === "string") {
      rangeError = "" !== str;
    }
    let str17 = str;
    if (!rangeError) {
      str17 = "utf8";
    }
    rangeError = Buffer;
    if (Buffer.isEncoding(str17)) {
      rangeError = byteLength;
      rangeError = byteLength(data, str17) | 0;
      rangeError = c3;
      if (rangeError > c3) {
        rangeError = globalThis;
        const _RangeError8 = RangeError;
        rangeError = new.target;
        rangeError = new.target;
        rangeError = new RangeError("The value \"" + rangeError + "\" is invalid for option \"size\"");
        throw rangeError;
      } else {
        rangeError = globalThis;
        const _Uint8Array8 = Uint8Array;
        rangeError = new.target;
        rangeError = new.target;
        const uint8Array = new Uint8Array(rangeError);
        rangeError = uint8Array;
        const _Object4 = Object;
        rangeError = Object.setPrototypeOf(uint8Array, rangeError.prototype);
        rangeError = uint8Array.write(data, str17);
        rangeError = uint8Array;
        if (rangeError !== rangeError) {
          rangeError = uint8Array.slice(0, rangeError);
        }
        return rangeError;
      }
    } else {
      rangeError = globalThis;
      const _TypeError4 = TypeError;
      rangeError = new.target;
      rangeError = new.target;
      rangeError = new TypeError("Unknown encoding: " + str17);
      throw rangeError;
    }
  } else {
    rangeError = globalThis;
    const _ArrayBuffer = ArrayBuffer;
    if (ArrayBuffer.isView(data)) {
      return fromArrayLike(data);
    } else {
      rangeError = null;
      if (null == data) {
        const _TypeError3 = TypeError;
        const typeError = new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof data);
        throw typeError;
      } else {
        let tmp3 = data instanceof ArrayBuffer;
        if (!tmp3) {
          tmp3 = null != data && null != data.constructor && null != data.constructor.name && data.constructor.name === rangeError.name;
          const tmp2 = null != data && null != data.constructor && null != data.constructor.name && data.constructor.name === rangeError.name;
        }
        if (!tmp3) {
          if (data) {
            const buffer = data.buffer;
            let tmp6 = buffer instanceof ArrayBuffer;
            if (!tmp6) {
              tmp6 = null != buffer && null != buffer.constructor && null != buffer.constructor.name && buffer.constructor.name === tmp5.name;
              const tmp7 = null != buffer && null != buffer.constructor && null != buffer.constructor.name && buffer.constructor.name === tmp5.name;
            }
          }
          const _SharedArrayBuffer = SharedArrayBuffer;
          if (typeof SharedArrayBuffer !== "undefined") {
            let tmp9 = data instanceof SharedArrayBuffer;
            if (!tmp9) {
              tmp9 = null != data && null != data.constructor && null != data.constructor.name && data.constructor.name === rangeError.name;
              const tmp8 = null != data && null != data.constructor && null != data.constructor.name && data.constructor.name === rangeError.name;
            }
            if (!tmp9) {
              if (data) {
                const buffer2 = data.buffer;
                let tmp11 = buffer2 instanceof SharedArrayBuffer;
                if (!tmp11) {
                  tmp11 = null != buffer2 && null != buffer2.constructor && null != buffer2.constructor.name && buffer2.constructor.name === tmp10.name;
                  const tmp12 = null != buffer2 && null != buffer2.constructor && null != buffer2.constructor.name && buffer2.constructor.name === tmp10.name;
                }
              }
            }
            if (str >= 0) {
              if (data.byteLength >= str) {
                let num9 = arg2;
                if (!arg2) {
                  num9 = 0;
                }
                if (data.byteLength < str + num9) {
                  const _RangeError4 = RangeError;
                  const rangeError1 = new RangeError("\"length\" is outside of buffer bounds");
                  throw rangeError1;
                } else {
                  if (undefined === str) {
                    if (undefined === arg2) {
                      const _Uint8Array4 = Uint8Array;
                      let uint8Array1 = new Uint8Array(data);
                    }
                    const _Object2 = Object;
                    Object.setPrototypeOf(uint8Array1, Buffer.prototype);
                    return uint8Array1;
                  }
                  if (undefined === arg2) {
                    const _Uint8Array3 = Uint8Array;
                    uint8Array1 = new Uint8Array(data, str);
                  } else {
                    const _Uint8Array2 = Uint8Array;
                    uint8Array1 = new Uint8Array(data, str, arg2);
                  }
                }
              }
            }
            const _RangeError5 = RangeError;
            const rangeError2 = new RangeError("\"offset\" is outside of buffer bounds");
            throw rangeError2;
          }
          if (typeof data === "number") {
            const _TypeError2 = TypeError;
            const typeError1 = new TypeError("The \"value\" argument must not be of type number. Received type number");
            throw typeError1;
          } else {
            const tmp13 = data.valueOf && data.valueOf();
            if (null != tmp13) {
              if (tmp13 !== data) {
                return Buffer.from(tmp13, str, arg2);
              }
            }
            if (Buffer.isBuffer(data)) {
              if (length >= c3) {
                const _RangeError3 = RangeError;
                const rangeError3 = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + str4.toString(16) + " bytes");
                throw rangeError3;
              } else {
                rangeError = length | 0 | 0;
                if (rangeError > str4) {
                  const _RangeError2 = RangeError;
                  const rangeError4 = new RangeError("The value \"" + rangeError + "\" is invalid for option \"size\"");
                  throw rangeError4;
                } else {
                  const _Uint8Array9 = Uint8Array;
                  rangeError = new.target;
                  rangeError = new.target;
                  const uint8Array2 = new Uint8Array(rangeError);
                  const _Object5 = Object;
                  rangeError = uint8Array2;
                  rangeError = Object.setPrototypeOf(uint8Array2, obj.prototype);
                  let tmp14 = uint8Array2;
                  if (0 !== uint8Array2.length) {
                    data.copy(rangeError, 0, 0, rangeError);
                    tmp14 = uint8Array2;
                  }
                }
              }
            } else if (undefined !== length) {
              if (typeof data.length === "number") {
                if (data.length == data.length) {
                  let tmp17 = fromArrayLike(data);
                }
                tmp14 = tmp17;
              }
              if (0 > c3) {
                const _RangeError = RangeError;
                const rangeError5 = new RangeError("The value \"" + "\" is invalid for option \"size\"");
                throw rangeError5;
              } else {
                const _Uint8Array = Uint8Array;
                const uint8Array3 = new Uint8Array(0);
                const _Object = Object;
                Object.setPrototypeOf(uint8Array3, obj.prototype);
                tmp17 = uint8Array3;
              }
            } else if ("Buffer" === data.type) {
              const _Array = Array;
              if (Array.isArray(data.data)) {
                tmp14 = fromArrayLike(data.data);
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
                  if (typeof data[Symbol.toPrimitive] === "function") {
                    const _Symbol3 = Symbol;
                    return obj.from(data[Symbol.toPrimitive]("string"), str, arg2);
                  }
                }
              }
              const _TypeError = TypeError;
              const typeError2 = new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof data);
              throw typeError2;
            }
          }
        }
        if (str >= 0) {
          if (data.byteLength >= str) {
            let num11 = arg2;
            if (!arg2) {
              num11 = 0;
            }
            if (data.byteLength < str + num11) {
              const _RangeError6 = RangeError;
              const rangeError6 = new RangeError("\"length\" is outside of buffer bounds");
              throw rangeError6;
            } else {
              if (undefined === str) {
                if (undefined === arg2) {
                  const _Uint8Array7 = Uint8Array;
                  let uint8Array4 = new Uint8Array(data);
                }
                const _Object3 = Object;
                Object.setPrototypeOf(uint8Array4, Buffer.prototype);
                return uint8Array4;
              }
              if (undefined === arg2) {
                const _Uint8Array6 = Uint8Array;
                uint8Array4 = new Uint8Array(data, str);
              } else {
                const _Uint8Array5 = Uint8Array;
                uint8Array4 = new Uint8Array(data, str, arg2);
              }
            }
          }
        }
        const _RangeError7 = RangeError;
        const rangeError7 = new RangeError("\"offset\" is outside of buffer bounds");
        throw rangeError7;
      }
    }
  }
}
function allocUnsafe(num) {
  if (typeof num !== "number") {
    const _TypeError = TypeError;
    const typeError = new TypeError("\"size\" argument must be of type number");
    throw typeError;
  } else if (num < 0) {
    const _RangeError3 = RangeError;
    const rangeError = new RangeError("The value \"" + num + "\" is invalid for option \"size\"");
    throw rangeError;
  } else {
    num = 0;
    if (num >= 0) {
      if (num >= c3) {
        const _RangeError = RangeError;
        const rangeError1 = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + str.toString(16) + " bytes");
        throw rangeError1;
      } else {
        num = num | 0 | 0;
      }
      str = c3;
    }
    if (num > c3) {
      const _RangeError2 = RangeError;
      const rangeError2 = new RangeError("The value \"" + num + "\" is invalid for option \"size\"");
      throw rangeError2;
    } else {
      const _Uint8Array = Uint8Array;
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
    if (data.length >= c3) {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + str.toString(16) + " bytes");
      throw rangeError;
    } else {
      num = length | 0 | 0;
    }
    str = c3;
  }
  if (num > c3) {
    const _RangeError2 = RangeError;
    const rangeError1 = new RangeError("The value \"" + num + "\" is invalid for option \"size\"");
    throw rangeError1;
  } else {
    const _Uint8Array = Uint8Array;
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
function byteLength(str) {
  if (Buffer.isBuffer(str)) {
    return str.length;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (!ArrayBuffer.isView(str)) {
      let tmp3 = str instanceof ArrayBuffer;
      if (!tmp3) {
        tmp3 = null != str && null != str.constructor && null != str.constructor.name && str.constructor.name === tmp2.name;
        const tmp5 = null != str && null != str.constructor && null != str.constructor.name && str.constructor.name === tmp2.name;
      }
      if (!tmp3) {
        if (typeof str !== "string") {
          const _TypeError = TypeError;
          const typeError = new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof str);
          throw typeError;
        } else {
          let tmp6 = arguments.length > 2;
          if (tmp6) {
            tmp6 = true === arguments[2];
          }
          if (!tmp6) {
            if (0 === str.length) {
              return 0;
            }
          }
          while (true) {
            let tmp10 = require;
            let tmp11 = dependencyMap;
            let obj = byteLength /* byteLength */;
            str = "=";
            let str2 = str.split("=")[0];
            let str3 = str2.trim();
            let tmp12 = closure_14;
            let str4 = "";
            let replaced = str3.replace(closure_14, "");
            if (replaced.length < 2) {
              break;
            } else {
              let num2 = 4;
              let num3 = 0;
              let tmp13 = replaced;
              let tmp14 = replaced;
              if (replaced.length % 4 !== 0) {
                do {
                  let text = `${tmp13}=`;
                  tmp13 = text;
                  tmp14 = text;
                  result = `${tmp13}=`.length % 4;
                } while (result !== 0);
              }
              str4 = tmp14;
              break;
            }
            return obj.toByteArray(str4).length;
          }
        }
      }
    }
    return str.byteLength;
  }
}
function slowToString(arg0, arg1, arg2) {
  let num = arg1;
  let tmp = undefined === arg1;
  if (!tmp) {
    tmp = num < 0;
  }
  if (tmp) {
    num = 0;
  }
  const self = this;
  if (num > this.length) {
    return "";
  } else {
    let length = arg2;
    if (tmp2) {
      length = self.length;
    }
    if (length <= 0) {
      return "";
    } else if (length >>> 0 <= num >>> 0) {
      return "";
    } else {
      while (true) {
        let substr = self.slice(tmp5, tmp4);
        let str2 = "";
        let tmp3 = globalThis;
        let num4 = 1;
        let num5 = 256;
        let num6 = 2;
        let num7 = 0;
        let str3 = "";
        if (0 >= substr.length) {
          break;
        } else {
          do {
            let _String = String;
            str2 = `${String.fromCharCode(arr[num7] + 256 * arr[num7 + 1])}`;
            num7 = num7 + 2;
            str3 = str2;
            length2 = substr.length;
          } while (num7 < length2);
        }
        return str3;
      }
    }
    tmp2 = undefined === arg2 || length > self.length;
  }
}
function bidirectionalIndexOf(arg0, str, str2) {
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
      const _Uint8Array = Uint8Array;
      if (typeof Uint8Array.prototype.indexOf === "function") {
        const _Uint8Array2 = Uint8Array;
        if (!arg4) {
          const lastIndexOf = prototype.lastIndexOf;
          const call = lastIndexOf.call;
          typeof call === "unknown" ? lastIndexOf(tmp6, num3) : call(arg0, tmp6, num3);
        }
        const indexOf = prototype.indexOf;
        const call2 = indexOf.call;
        typeof call2 === "unknown" ? indexOf(tmp6, num3) : call2(arg0, tmp6, num3);
      } else {
        const items = [tmp6];
        return arrayIndexOf(arg0, items, num3, tmp, arg4);
      }
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("val must be string, number or Buffer");
      throw typeError;
    }
  }
}
function arrayIndexOf(readUInt16BE, readUInt16BE2) {
  let tmp11;
  let num = 1;
  let result1 = length2;
  let result = length;
  let num2 = 1;
  let result2 = arg2;
  if (undefined !== arg3) {
    const _String = String;
    const formatted = String(arg3).toLowerCase();
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
  if (arg4) {
    let num7 = -1;
    if (result2 < result) {
      while (true) {
        tmp11 = num7;
        let tmp12 = result2;
        if (1 === num) {
          let uInt16BE = readUInt16BE[result2];
        } else {
          uInt16BE = readUInt16BE.readUInt16BE(result2 * num);
        }
        let tmp14 = -1 === tmp11;
        let num8 = 0;
        if (!tmp14) {
          num8 = result2 - tmp11;
        }
        if (1 === num) {
          let uInt16BE1 = readUInt16BE2[num8];
        } else {
          uInt16BE1 = readUInt16BE2.readUInt16BE(num8 * num);
        }
        if (uInt16BE === uInt16BE1) {
          if (tmp14) {
            tmp11 = result2;
          }
          let num9 = tmp11;
          let diff = result2;
          if (result2 - tmp11 + 1 === result1) {
            break;
          }
        } else {
          diff = result2;
          if (-1 !== tmp11) {
            diff = result2 - (result2 - tmp11);
          }
          num9 = -1;
        }
        result2 = diff + 1;
        num7 = num9;
      }
      return tmp11 * num2;
    }
  } else {
    let diff1 = result2;
    if (result2 + result1 > result) {
      diff1 = result - result1;
    }
    if (diff1 >= 0) {
      while (true) {
        let tmp5 = diff1;
        let num5 = 0;
        let flag = true;
        if (0 < result1) {
          while (true) {
            let sum = diff1 + num5;
            let tmp7 = num5;
            if (1 === num) {
              let uInt16BE2 = readUInt16BE[sum];
            } else {
              uInt16BE2 = readUInt16BE.readUInt16BE(sum * num);
            }
            if (1 === num) {
              let uInt16BE3 = readUInt16BE2[num5];
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
  let sum1;
  let sum = arg1;
  const bound = Math.min(arg0.length, arg2);
  const items = [];
  if (arg1 < bound) {
    do {
      let tmp4 = arg0[sum];
      let tmp5 = tmp3;
      let tmp6 = sum;
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
            let tmp23 = (31 & tmp4) << 6 | 63 & tmp19;
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
            let tmp17 = (15 & tmp4) << 12 | (63 & tmp12) << 6 | 63 & tmp13;
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
            let tmp30 = arg0[sum + 1];
            let tmp31 = arg0[sum + 2];
            let tmp32 = arg0[sum + 3];
            let tmp33 = 192 & tmp30;
            let tmp9 = 128 === tmp33;
            if (128 === tmp33) {
              tmp9 = 128 === (192 & tmp31);
            }
            if (tmp9) {
              tmp9 = 128 === (192 & tmp32);
            }
            let tmp10 = tmp3;
            if (tmp9) {
              let tmp11 = (15 & tmp4) << 18 | (63 & tmp30) << 12 | (63 & tmp31) << 6 | 63 & tmp32;
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
          let arr = items.push(diff >>> 10 & 1023 | 55296);
          num5 = 56320 | 1023 & diff;
          num4 = num;
        }
      }
      arr = items.push(num5);
      sum = sum + num4;
      tmp3 = tmp8;
    } while (sum < bound);
  }
  if (items.length <= c13) {
    const _String3 = String;
    const _String4 = String;
    let str2 = fromCharCode2.apply(String, items);
  } else {
    let num6 = 0;
    let str = "";
    str2 = "";
    if (0 < length) {
      do {
        let _String = String;
        let _String2 = String;
        let tmp28 = c13;
        sum1 = num6 + c13;
        str = `${tmp27(String, arr.slice(num6, tmp29))}`;
        str2 = str;
        num6 = sum1;
      } while (sum1 < length);
    }
  }
  return str2;
}
function utf8ToBytes(str) {
  let num = arg1;
  if (!arg1) {
    num = Infinity;
  }
  const items = [];
  let num2 = 0;
  let tmp = null;
  if (0 < str.length) {
    while (true) {
      let charCodeAtResult = str.charCodeAt(num2);
      let tmp3 = num2;
      let tmp4 = tmp;
      let tmp5 = num;
      if (charCodeAtResult > 55295) {
        if (charCodeAtResult < 57344) {
          if (tmp) {
            if (charCodeAtResult < 56320) {
              let diff = num - 3;
              let tmp12 = charCodeAtResult;
              let tmp13 = diff;
              if (-1 < diff) {
                let arr = items.push(239, 191, 189);
                tmp12 = charCodeAtResult;
                tmp13 = diff;
              }
            } else {
              let sum = 65536 + (tmp - 55296 << 10 | charCodeAtResult - 56320);
              let tmp10 = num;
            }
            if (sum < 128) {
              let diff1 = tmp10 - 1;
              if (diff1 >= 0) {
                arr = items.push(sum);
                tmp12 = null;
                tmp13 = diff1;
              }
            } else if (sum < 2048) {
              let diff2 = tmp10 - 2;
              if (diff2 >= 0) {
                let arr1 = items.push(sum >> 6 | 192, 63 & sum | 128);
                tmp12 = null;
                tmp13 = diff2;
              }
            } else if (sum < 65536) {
              let diff3 = tmp10 - 3;
              if (diff3 >= 0) {
                let arr2 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp12 = null;
                tmp13 = diff3;
              }
            } else if (sum >= 1114112) {
              break;
            } else {
              let diff4 = tmp10 - 4;
              if (diff4 >= 0) {
                let tmp31 = items;
                let arr3 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp12 = null;
                tmp13 = diff4;
              }
            }
          } else if (charCodeAtResult > 56319) {
            let diff5 = num - 3;
            tmp12 = tmp;
            tmp13 = diff5;
            if (-1 < diff5) {
              let arr4 = items.push(239, 191, 189);
              tmp12 = tmp;
              tmp13 = diff5;
            }
          } else {
            tmp12 = charCodeAtResult;
            tmp13 = num;
            if (num2 + 1 === length) {
              let diff6 = num - 3;
              tmp12 = tmp;
              tmp13 = diff6;
              if (-1 < diff6) {
                let arr5 = items.push(239, 191, 189);
                tmp12 = tmp;
                tmp13 = diff6;
              }
            }
          }
          num2 = num2 + 1;
          tmp = tmp12;
          num = tmp13;
        }
      }
      let tmp6 = tmp;
      let tmp7 = num;
      if (tmp) {
        let diff7 = num - 3;
        tmp6 = diff7 > -1;
        tmp7 = diff7;
      }
      sum = charCodeAtResult;
      tmp10 = tmp7;
      if (tmp6) {
        let arr6 = items.push(239, 191, 189);
        sum = charCodeAtResult;
        tmp10 = tmp7;
      }
    }
    const _Error = Error;
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
    forResult = Symbol.for("nodejs.util.inspect.custom");
  }
}
arg5.Buffer = Buffer;
arg5.SlowBuffer = function SlowBuffer(arg0) {
  let num = arg0;
  if (+arg0 != arg0) {
    num = 0;
  }
  return Buffer.alloc(+num);
};
arg5.INSPECT_MAX_BYTES = 50;
let c3 = 2147483647;
arg5.kMaxLength = 2147483647;
Buffer.TYPED_ARRAY_SUPPORT = (function typedArraySupport() {
  try {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(1);
    const obj = { foo: null };
    obj[0] = function foo() {
      return 42;
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
})();
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
  console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
}
let obj = {
  enumerable: true,
  get() {
    if (Buffer.isBuffer(this)) {
      return this.buffer;
    }
  }
};
Object.defineProperty(Buffer.prototype, "parent", obj);
obj = {
  enumerable: true,
  get() {
    if (Buffer.isBuffer(this)) {
      return this.byteOffset;
    }
  }
};
Object.defineProperty(Buffer.prototype, "offset", obj);
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