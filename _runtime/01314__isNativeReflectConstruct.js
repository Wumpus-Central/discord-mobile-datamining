// _runtime/01314__isNativeReflectConstruct.js
import _slicedToArray from "_slicedToArray";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

let PbLong = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const arrayBuffer = new ArrayBuffer(8);
const dataView = new DataView(arrayBuffer);
let tmp6;
if (undefined !== BigInt) {
  if (typeof dataView.getBigInt64 !== "disabledUntil") {
    if (typeof dataView.getBigUint64 !== "disabledUntil") {
      if (typeof dataView.setBigInt64 !== "disabledUntil") {
        if (typeof dataView.setBigUint64 !== "disabledUntil") {
          let obj = { MIN: null, MAX: null, UMIN: null, UMAX: null, C: null, V: null };
          const _BigInt = BigInt;
          obj[0] = BigInt("-9223372036854775808");
          const _BigInt2 = BigInt;
          obj[1] = BigInt("9223372036854775807");
          const _BigInt3 = BigInt;
          obj[2] = BigInt("0");
          const _BigInt4 = BigInt;
          obj[3] = BigInt("18446744073709551615");
          const _BigInt5 = BigInt;
          obj[4] = BigInt;
          obj[5] = dataView;
          tmp6 = obj;
        }
      }
    }
  }
}
let error = tmp6;
const re8 = /^-?[0-9]+$/;
let c9 = 4294967296;
class SharedPbLong {
  constructor(arg0, arg1) {
    tmp = _isNativeReflectConstruct(this, PbLong);
    this.lo = global | 0;
    this.hi = require | 0;
    return;
  }
}
PbLong = SharedPbLong;
obj = {
  key: "isZero",
  value: function isZero() {
    return 0 == this.lo && 0 == this.hi;
  }
};
const items = [
  obj,
  {
    key: "toNumber",
    value: function toNumber() {
      const sum = this.hi * c9 + (this.lo >>> 0);
      if (Number.isSafeInteger(sum)) {
        return sum;
      } else {
        const _Error = Error;
        const error = new Error("cannot convert to safe number");
        throw error;
      }
    }
  }
];
const _module1Result = _createClass(SharedPbLong, items);
class PbULong {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, PbLong);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(PbLong);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
PbLong = PbULong;
_inherits(PbULong, _module1Result);
obj = {
  key: "toString",
  value: function toString() {
    const self = this;
    if (closure_7) {
      let str = self.toBigInt();
      str = str.toString();
    } else {
      str = PbLong(1313).int64toString(self.lo, self.hi);
      const obj = PbLong(1313);
    }
    return str;
  }
};
const items1 = [
  obj,
  {
    key: "toBigInt",
    value: function toBigInt() {
      if (closure_7) {
        const self = this;
        const V = tmp.V;
        V.setInt32(0, this.lo, true);
        const V2 = tmp.V;
        V2.setInt32(4, this.hi, true);
        const V3 = tmp.V;
        return V3.getBigUint64(0, true);
      } else {
        const _Error = Error;
        const error = new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
        throw error;
      }
    }
  }
];
const items2 = [
  {
    key: "from",
    value: function from(trimmed) {
      let V2;
      let V3;
      const self = this;
      if (closure_7) {
        if ("string" === tmp) {
          if ("0" == trimmed) {
            return self.ZERO;
          } else if ("" == trimmed) {
            const _Error7 = Error;
            const error = new Error("string is no integer");
            throw error;
          } else {
            let CResult = obj.C(trimmed);
          }
        } else {
          CResult = trimmed;
          if ("number" !== tmp) {
            let CResult1 = trimmed;
          }
          if (CResult1) {
            if (CResult1 < obj.UMIN) {
              const _Error6 = Error;
              const error1 = new Error("signed value for ulong");
              throw error1;
            } else if (CResult1 > obj.UMAX) {
              const _Error5 = Error;
              const error2 = new Error("ulong too large");
              throw error2;
            } else {
              const V = obj.V;
              V.setBigUint64(0, CResult1, true);
              ({ V: V2, V: V3 } = obj);
              const int32 = V2.getInt32(0, true);
              const int321 = V3.getInt32(4, true);
              const tmp42 = PbLong(int32, int321);
              return tmp42;
            }
          } else {
            return self.ZERO;
          }
        }
        if (0 === CResult) {
          return self.ZERO;
        } else {
          CResult1 = obj.C(CResult);
        }
      } else if ("string" === tmp) {
        if ("0" == trimmed) {
          return self.ZERO;
        } else {
          trimmed = trimmed.trim();
          if (re8.test(trimmed)) {
            const obj2 = PbLong(1313);
            if (tmp24[0]) {
              const _Error4 = Error;
              const error3 = new Error("signed value");
              throw error3;
            } else {
              const tmp28 = PbLong(tmp25, tmp26);
              return tmp28;
            }
            tmp24 = _slicedToArray(PbLong(1313).int64fromString(trimmed), 3);
          } else {
            const _Error3 = Error;
            const error4 = new Error("string is no integer");
            throw error4;
          }
        }
      } else if ("number" === tmp) {
        if (0 == trimmed) {
          return self.ZERO;
        } else {
          const _Number = Number;
          if (Number.isSafeInteger(trimmed)) {
            if (trimmed < 0) {
              const _Error2 = Error;
              const error5 = new Error("signed value for ulong");
              throw error5;
            } else {
              const result = trimmed / c9;
              const tmp10 = PbLong(trimmed, result);
              return tmp10;
            }
          } else {
            const _Error = Error;
            const error6 = new Error("number is no integer");
            throw error6;
          }
        }
      }
      const error7 = new Error("unknown value " + tmp);
      throw error7;
    }
  }
];
const _module1Result1 = _createClass(PbULong, items1, items2);
_module1Result1.ZERO = new _module1Result1(0, 0);
class PbLong {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, PbLong);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(PbLong);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(PbLong, _module1Result);
const items3 = [
  {
    key: "isNegative",
    value: function isNegative() {
      return 2147483648 & this.hi;
    }
  },
  {
    key: "negate",
    value: function negate() {
      const lo = this.lo;
      if (lo) {
        let sum = 1 + ~lo;
        let sum1 = tmp;
      } else {
        sum1 = tmp + 1;
        sum = lo;
      }
      return PbLong(sum, sum1);
    }
  },
  {
    key: "toString",
    value: function toString() {
      const self = this;
      if (closure_7) {
        return self.toBigInt().toString();
      } else if (self.isNegative()) {
        const negateResult = self.negate();
        return "-" + PbLong(1313).int64toString(negateResult.lo, negateResult.hi);
      } else {
        return PbLong(1313).int64toString(self.lo, self.hi);
      }
    }
  },
  {
    key: "toBigInt",
    value: function toBigInt() {
      if (closure_7) {
        const self = this;
        const V = tmp.V;
        V.setInt32(0, this.lo, true);
        const V2 = tmp.V;
        V2.setInt32(4, this.hi, true);
        const V3 = tmp.V;
        return V3.getBigInt64(0, true);
      } else {
        const _Error = Error;
        const error = new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
        throw error;
      }
    }
  }
];
const items4 = [
  {
    key: "from",
    value: function from(trimmed) {
      let V2;
      let V3;
      let tmp24;
      let tmp26;
      let tmp27;
      const self = this;
      if (closure_7) {
        if ("string" === tmp) {
          if ("0" == trimmed) {
            return self.ZERO;
          } else if ("" == trimmed) {
            const _Error5 = Error;
            const error = new Error("string is no integer");
            throw error;
          } else {
            let CResult = obj.C(trimmed);
          }
        } else {
          CResult = trimmed;
          if ("number" !== tmp) {
            let CResult1 = trimmed;
          }
          if (CResult1) {
            if (CResult1 < obj.MIN) {
              const _Error4 = Error;
              const error1 = new Error("ulong too small");
              throw error1;
            } else if (CResult1 > obj.MAX) {
              const _Error3 = Error;
              const error2 = new Error("ulong too large");
              throw error2;
            } else {
              const V = obj.V;
              V.setBigInt64(0, CResult1, true);
              ({ V: V2, V: V3 } = obj);
              const int32 = V2.getInt32(0, true);
              const int321 = V3.getInt32(4, true);
              const tmp37 = PbLong(int32, int321);
              return tmp37;
            }
          } else {
            return self.ZERO;
          }
        }
        if (0 === CResult) {
          return self.ZERO;
        } else {
          CResult1 = obj.C(CResult);
        }
      } else if ("string" === tmp) {
        if ("0" == trimmed) {
          return self.ZERO;
        } else {
          trimmed = trimmed.trim();
          if (re8.test(trimmed)) {
            const obj3 = PbLong(1313);
            [tmp24, tmp26, tmp27] = _slicedToArray(PbLong(1313).int64fromString(trimmed), 3);
            const obj4 = PbLong(tmp26, tmp27);
            let negateResult = obj4;
            if (tmp24) {
              negateResult = obj4.negate();
            }
            return negateResult;
          } else {
            const _Error2 = Error;
            const error3 = new Error("string is no integer");
            throw error3;
          }
        }
      } else if ("number" === tmp) {
        if (0 == trimmed) {
          return self.ZERO;
        } else {
          const _Number = Number;
          if (Number.isSafeInteger(trimmed)) {
            if (trimmed > 0) {
              const result = trimmed / c9;
              let negateResult1 = PbLong(trimmed, result);
            } else {
              const result1 = -trimmed / c9;
              const obj2 = PbLong(-trimmed, result1);
              negateResult1 = obj2.negate();
              const tmp7 = -trimmed;
            }
            return negateResult1;
          } else {
            const _Error = Error;
            const error4 = new Error("number is no integer");
            throw error4;
          }
        }
      }
      const error5 = new Error("unknown value " + tmp);
      throw error5;
    }
  }
];
const _module1Result2 = _createClass(PbLong, items3, items4);
const obj1 = {
  key: "from",
  value: function from(trimmed) {
    let V2;
    let V3;
    const self = this;
    if (closure_7) {
      if ("string" === tmp) {
        if ("0" == trimmed) {
          return self.ZERO;
        } else if ("" == trimmed) {
          const _Error7 = Error;
          const error = new Error("string is no integer");
          throw error;
        } else {
          let CResult = obj.C(trimmed);
        }
      } else {
        CResult = trimmed;
        if ("number" !== tmp) {
          let CResult1 = trimmed;
        }
        if (CResult1) {
          if (CResult1 < obj.UMIN) {
            const _Error6 = Error;
            const error1 = new Error("signed value for ulong");
            throw error1;
          } else if (CResult1 > obj.UMAX) {
            const _Error5 = Error;
            const error2 = new Error("ulong too large");
            throw error2;
          } else {
            const V = obj.V;
            V.setBigUint64(0, CResult1, true);
            ({ V: V2, V: V3 } = obj);
            const int32 = V2.getInt32(0, true);
            const int321 = V3.getInt32(4, true);
            const tmp42 = PbLong(int32, int321);
            return tmp42;
          }
        } else {
          return self.ZERO;
        }
      }
      if (0 === CResult) {
        return self.ZERO;
      } else {
        CResult1 = obj.C(CResult);
      }
    } else if ("string" === tmp) {
      if ("0" == trimmed) {
        return self.ZERO;
      } else {
        trimmed = trimmed.trim();
        if (re8.test(trimmed)) {
          const obj2 = PbLong(1313);
          if (tmp24[0]) {
            const _Error4 = Error;
            const error3 = new Error("signed value");
            throw error3;
          } else {
            const tmp28 = PbLong(tmp25, tmp26);
            return tmp28;
          }
          tmp24 = _slicedToArray(PbLong(1313).int64fromString(trimmed), 3);
        } else {
          const _Error3 = Error;
          const error4 = new Error("string is no integer");
          throw error4;
        }
      }
    } else if ("number" === tmp) {
      if (0 == trimmed) {
        return self.ZERO;
      } else {
        const _Number = Number;
        if (Number.isSafeInteger(trimmed)) {
          if (trimmed < 0) {
            const _Error2 = Error;
            const error5 = new Error("signed value for ulong");
            throw error5;
          } else {
            const result = trimmed / c9;
            const tmp10 = PbLong(trimmed, result);
            return tmp10;
          }
        } else {
          const _Error = Error;
          const error6 = new Error("number is no integer");
          throw error6;
        }
      }
    }
    const error7 = new Error("unknown value " + tmp);
    throw error7;
  }
};
let obj2 = {
  key: "isNegative",
  value: function isNegative() {
    return 2147483648 & this.hi;
  }
};
let obj3 = {
  key: "from",
  value: function from(trimmed) {
    let V2;
    let V3;
    let tmp24;
    let tmp26;
    let tmp27;
    const self = this;
    if (closure_7) {
      if ("string" === tmp) {
        if ("0" == trimmed) {
          return self.ZERO;
        } else if ("" == trimmed) {
          const _Error5 = Error;
          const error = new Error("string is no integer");
          throw error;
        } else {
          let CResult = obj.C(trimmed);
        }
      } else {
        CResult = trimmed;
        if ("number" !== tmp) {
          let CResult1 = trimmed;
        }
        if (CResult1) {
          if (CResult1 < obj.MIN) {
            const _Error4 = Error;
            const error1 = new Error("ulong too small");
            throw error1;
          } else if (CResult1 > obj.MAX) {
            const _Error3 = Error;
            const error2 = new Error("ulong too large");
            throw error2;
          } else {
            const V = obj.V;
            V.setBigInt64(0, CResult1, true);
            ({ V: V2, V: V3 } = obj);
            const int32 = V2.getInt32(0, true);
            const int321 = V3.getInt32(4, true);
            const tmp37 = PbLong(int32, int321);
            return tmp37;
          }
        } else {
          return self.ZERO;
        }
      }
      if (0 === CResult) {
        return self.ZERO;
      } else {
        CResult1 = obj.C(CResult);
      }
    } else if ("string" === tmp) {
      if ("0" == trimmed) {
        return self.ZERO;
      } else {
        trimmed = trimmed.trim();
        if (re8.test(trimmed)) {
          const obj3 = PbLong(1313);
          [tmp24, tmp26, tmp27] = _slicedToArray(PbLong(1313).int64fromString(trimmed), 3);
          const obj4 = PbLong(tmp26, tmp27);
          let negateResult = obj4;
          if (tmp24) {
            negateResult = obj4.negate();
          }
          return negateResult;
        } else {
          const _Error2 = Error;
          const error3 = new Error("string is no integer");
          throw error3;
        }
      }
    } else if ("number" === tmp) {
      if (0 == trimmed) {
        return self.ZERO;
      } else {
        const _Number = Number;
        if (Number.isSafeInteger(trimmed)) {
          if (trimmed > 0) {
            const result = trimmed / c9;
            let negateResult1 = PbLong(trimmed, result);
          } else {
            const result1 = -trimmed / c9;
            const obj2 = PbLong(-trimmed, result1);
            negateResult1 = obj2.negate();
            const tmp7 = -trimmed;
          }
          return negateResult1;
        } else {
          const _Error = Error;
          const error4 = new Error("number is no integer");
          throw error4;
        }
      }
    }
    const error5 = new Error("unknown value " + tmp);
    throw error5;
  }
};
const tmp2Result1 = new _module1Result1(0, 0);
_module1Result2.ZERO = new _module1Result2(0, 0);

export const PbULong = _module1Result1;
export const PbLong = _module1Result2;