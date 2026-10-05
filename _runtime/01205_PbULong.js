// === Module 1205: PbULong ===

// Module 1205 (PbULong)
import varint64read from "varint64read" /* 1204 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const arrayBuffer = new ArrayBuffer(8);
const dataView = new DataView(arrayBuffer);
let tmp6;
if (undefined !== BigInt) {
  if (typeof dataView.getBigInt64 === "function") {
    if (typeof dataView.getBigUint64 === "function") {
      if (typeof dataView.setBigInt64 === "function") {
        if (typeof dataView.setBigUint64 === "function") {
          let obj = { MIN: BigInt("-9223372036854775808"), MAX: BigInt("9223372036854775807"), UMIN: BigInt("0"), UMAX: BigInt("18446744073709551615"), C: BigInt, V: dataView };
          const _BigInt = BigInt;
          let str = "-9223372036854775808";
          const _BigInt2 = BigInt;
          let str2 = "9223372036854775807";
          const _BigInt3 = BigInt;
          const _BigInt4 = BigInt;
          const _BigInt5 = BigInt;
          tmp6 = obj;
        }
      }
    }
  }
}
obj = tmp6;
const re8 = /^-?[0-9]+$/;
let c9 = 4294967296;
class SharedPbLong {
  constructor(arg0, arg1) {
    _classCallCheck(this, SharedPbLong);
    this.lo = arg0 | 0;
    this.hi = arg1 | 0;
  }
}
const entry = {
  key: "isZero",
  value: function isZero() {
    return 0 == this.lo && 0 == this.hi;
  }
};
const items = [
  entry,
  {
    key: "toNumber",
    value: function toNumber() {
      const sum = this.hi * c9 + (this.lo >>> 0);
      if (Number.isSafeInteger(sum)) {
        return sum;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("cannot convert to safe number");
        throw error;
      }
    }
  }
];
const _module1Result = _createClass(SharedPbLong, items);
class PbULong {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PbULong);
    obj = _getPrototypeOf(PbULong);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(PbULong, _module1Result);
const entry1 = {
  key: "toString",
  value: function toString() {
    let str1;
    const self = this;
    const tmp = obj;
    if (tmp) {
      const str = self.toBigInt();
      str1 = str.toString();
    } else {
      obj = varint64read;
      str1 = obj.int64toString(self.lo, self.hi);
    }
    return str1;
  }
};
const items1 = [
  entry1,
  {
    key: "toBigInt",
    value: function toBigInt() {
      if (obj) {
        const self3 = this;
        const V = obj.V;
        V.setInt32(0, this.lo, true);
        const V2 = obj.V;
        V2.setInt32(4, this.hi, true);
        const V3 = obj.V;
        return V3.getBigUint64(0, true);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
        throw error;
      }
    }
  }
];
const entry2 = {
  key: "from",
  value: function from(trimmed) {
    let V2;
    let V3;
    const self = this;
    if (obj) {
      let CResult;
      let CResult1;
      if ("string" === typeof trimmed) {
        if ("0" == trimmed) {
          return self.ZERO;
        } else if ("" == trimmed) {
          const _Error7 = Error;
          const self14 = this;
          const self15 = this;
          const error = new Error("string is no integer");
          throw error;
        } else {
          CResult = obj.C(trimmed);
        }
      } else {
        CResult = trimmed;
        if ("number" !== typeof trimmed) {
          CResult1 = trimmed;
        }
        if (CResult1) {
          if (CResult1 < obj.UMIN) {
            const _Error6 = Error;
            const self12 = this;
            const self13 = this;
            const error1 = new Error("signed value for ulong");
            throw error1;
          } else if (CResult1 > obj.UMAX) {
            const _Error5 = Error;
            const self10 = this;
            const self11 = this;
            const error2 = new Error("ulong too large");
            throw error2;
          } else {
            const V = obj.V;
            V.setBigUint64(0, CResult1, true);
            ({ V: V2, V: V3 } = obj);
            const int32 = V2.getInt32(0, true);
            const int321 = V3.getInt32(4, true);
            const tmp34 = PbULong(int32, int321);
            return tmp34;
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
    } else if ("string" === typeof trimmed) {
      if ("0" == trimmed) {
        return self.ZERO;
      } else {
        trimmed = trimmed.trim();
        if (re8.test(trimmed)) {
          const obj2 = varint64read;
          const tmp18 = _slicedToArray(obj2.int64fromString(trimmed), 3);
          if (tmp18[0]) {
            const _Error4 = Error;
            const self8 = this;
            const self9 = this;
            const error3 = new Error("signed value");
            throw error3;
          } else {
            const tmp22 = PbULong(tmp19, tmp20);
            return tmp22;
          }
        } else {
          const _Error3 = Error;
          const self6 = this;
          const self7 = this;
          const error4 = new Error("string is no integer");
          throw error4;
        }
      }
    } else if ("number" === typeof trimmed) {
      if (0 == trimmed) {
        return self.ZERO;
      } else {
        const _Number = Number;
        if (Number.isSafeInteger(trimmed)) {
          if (trimmed < 0) {
            const _Error2 = Error;
            const self4 = this;
            const self5 = this;
            const error5 = new Error("signed value for ulong");
            throw error5;
          } else {
            const result = trimmed / c9;
            const tmp8 = PbULong(trimmed, result);
            return tmp8;
          }
        } else {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error6 = new Error("number is no integer");
          throw error6;
        }
      }
    }
    const error7 = new Error("unknown value " + tmp);
    throw error7;
  }
};
const items2 = [entry2];
const _module1Result1 = _createClass(PbULong, items1, items2);
_module1Result1.ZERO = new _module1Result1(0, 0);
new _module1Result1(0, 0);
class PbLong {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PbLong);
    obj = _getPrototypeOf(PbLong);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(PbLong, _module1Result);
const entry3 = {
  key: "isNegative",
  value: function isNegative() {
    return 2147483648 & this.hi;
  }
};
const items3 = [
  entry3,
  {
    key: "negate",
    value: function negate() {
      let sum;
      let sum1;
      const lo = this.lo;
      if (lo) {
        sum = 1 + ~lo;
        sum1 = tmp;
      } else {
        sum1 = tmp + 1;
        sum = lo;
      }
      const tmp4 = PbLong(sum, sum1);
      return tmp4;
    }
  },
  {
    key: "toString",
    value: function toString() {
      const self = this;
      const tmp = obj;
      if (tmp) {
        const str2 = self.toBigInt();
        return str2.toString();
      } else if (self.isNegative()) {
        const negateResult = self.negate();
        const obj2 = varint64read;
        return "-" + obj2.int64toString(negateResult.lo, negateResult.hi);
      } else {
        obj = varint64read;
        return obj.int64toString(self.lo, self.hi);
      }
    }
  },
  {
    key: "toBigInt",
    value: function toBigInt() {
      if (obj) {
        const self3 = this;
        const V = obj.V;
        V.setInt32(0, this.lo, true);
        const V2 = obj.V;
        V2.setInt32(4, this.hi, true);
        const V3 = obj.V;
        return V3.getBigInt64(0, true);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
        throw error;
      }
    }
  }
];
const entry4 = {
  key: "from",
  value: function from(trimmed) {
    let V2;
    let V3;
    let tmp20;
    let tmp22;
    let tmp23;
    const self = this;
    if (obj) {
      let CResult;
      let CResult1;
      if ("string" === typeof trimmed) {
        if ("0" == trimmed) {
          return self.ZERO;
        } else if ("" == trimmed) {
          const _Error5 = Error;
          const self10 = this;
          const self11 = this;
          const error = new Error("string is no integer");
          throw error;
        } else {
          CResult = obj.C(trimmed);
        }
      } else {
        CResult = trimmed;
        if ("number" !== typeof trimmed) {
          CResult1 = trimmed;
        }
        if (CResult1) {
          if (CResult1 < obj.MIN) {
            const _Error4 = Error;
            const self8 = this;
            const self9 = this;
            const error1 = new Error("ulong too small");
            throw error1;
          } else if (CResult1 > obj.MAX) {
            const _Error3 = Error;
            const self6 = this;
            const self7 = this;
            const error2 = new Error("ulong too large");
            throw error2;
          } else {
            const V = obj.V;
            V.setBigInt64(0, CResult1, true);
            ({ V: V2, V: V3 } = obj);
            const int32 = V2.getInt32(0, true);
            const int321 = V3.getInt32(4, true);
            const tmp33 = PbLong(int32, int321);
            return tmp33;
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
    } else if ("string" === typeof trimmed) {
      if ("0" == trimmed) {
        return self.ZERO;
      } else {
        trimmed = trimmed.trim();
        if (re8.test(trimmed)) {
          const obj3 = varint64read;
          [tmp20, tmp22, tmp23] = obj3.int64fromString(trimmed);
          _slicedToArray(obj3.int64fromString(trimmed), 3);
          const obj4 = PbLong(tmp22, tmp23);
          let negateResult = obj4;
          if (tmp20) {
            negateResult = obj4.negate();
          }
          return negateResult;
        } else {
          const _Error2 = Error;
          const self4 = this;
          const self5 = this;
          const error3 = new Error("string is no integer");
          throw error3;
        }
      }
    } else if ("number" === typeof trimmed) {
      if (0 == trimmed) {
        return self.ZERO;
      } else {
        const _Number = Number;
        if (Number.isSafeInteger(trimmed)) {
          let negateResult1;
          if (trimmed > 0) {
            const result = trimmed / c9;
            negateResult1 = PbLong(trimmed, result);
          } else {
            const result1 = -trimmed / c9;
            const tmp5 = -trimmed;
            const obj2 = PbLong(tmp5, result1);
            negateResult1 = obj2.negate();
          }
          return negateResult1;
        } else {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error4 = new Error("number is no integer");
          throw error4;
        }
      }
    }
    const error5 = new Error("unknown value " + tmp);
    throw error5;
  }
};
const items4 = [entry4];
const _module1Result2 = _createClass(PbLong, items3, items4);
_module1Result2.ZERO = new _module1Result2(0, 0);
new _module1Result2(0, 0);
const PbULong_export = _module1Result1;
const PbLong_export = _module1Result2;

export { PbULong_export as PbULong };
export { PbLong_export as PbLong };