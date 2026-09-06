// _runtime/metro/01195__.js
import _slicedToArray from "00032__.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const arrayBuffer = new ArrayBuffer(8);
const dataView = new DataView(arrayBuffer);
let tmp6;
if (undefined !== BigInt) {
  if (typeof dataView.getBigInt64 === "function") {
    if (typeof dataView.getBigUint64 === "function") {
      if (typeof dataView.setBigInt64 === "function") {
        if (typeof dataView.setBigUint64 === "function") {
          let obj = { MIN: null, MAX: null, UMIN: null, UMAX: null, C: null, V: null };
          const _BigInt = BigInt;
          obj.MIN = BigInt("-9223372036854775808");
          const _BigInt2 = BigInt;
          obj.MAX = BigInt("9223372036854775807");
          const _BigInt3 = BigInt;
          obj.UMIN = BigInt("0");
          const _BigInt4 = BigInt;
          obj.UMAX = BigInt("18446744073709551615");
          const _BigInt5 = BigInt;
          obj.C = BigInt;
          obj.V = dataView;
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
    tmp = hasOwnProperty(this, PbLong);
    this.lo = global | 0;
    this.hi = require | 0;
    return;
  }
}
PbLong = SharedPbLong;
const entry = {
  key: "isZero",
  value: function isZero() {
    return 0 == this.lo && 0 == this.hi;
  },
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
        const error = new Error("cannot convert to safe number");
        throw error;
      }
    },
  },
];
const _module1Result = _createClass(SharedPbLong, items);
class PbULong {
  constructor() {
    self = this;
    tmp = hasOwnProperty(this, PbLong);
    tmp2 = closure_4;
    obj = closure_4(PbLong);
    tmp3 = closure_3;
    if (metroRequire()) {
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
const entry1 = {
  key: "toString",
  value: function toString() {
    const self = this;
    if (obj) {
      let str = self.toBigInt();
      str = str.toString();
    } else {
      obj = PbLong(1194);
      str = obj.int64toString(self.lo, self.hi);
    }
    return str;
  },
};
const items1 = [
  entry1,
  {
    key: "toBigInt",
    value: function toBigInt() {
      if (obj) {
        const self = this;
        const V = tmp.V;
        V.setInt32(0, this.lo, true);
        const V2 = tmp.V;
        V2.setInt32(4, this.hi, true);
        const V3 = tmp.V;
        return V3.getBigUint64(0, true);
      } else {
        const _Error = Error;
        const error = new Error(
          "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support",
        );
        throw error;
      }
    },
  },
];
const entry2 = {
  key: "from",
  value: function from(trimmed) {
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
        if (regex.test(trimmed)) {
          const obj2 = PbLong(1194);
          if (tmp24[0]) {
            const _Error4 = Error;
            const error3 = new Error("signed value");
            throw error3;
          } else {
            const tmp28 = PbLong(tmp25, tmp26);
            return tmp28;
          }
          tmp24 = _slicedToArray(PbLong(1194).int64fromString(trimmed), 3);
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
            const result = trimmed / closure_9;
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
  },
};
const items2 = [entry2];
const _module1Result1 = _createClass(PbULong, items1, items2);
_module1Result1.ZERO = new _module1Result1(0, 0);
class PbLong {
  constructor() {
    self = this;
    tmp = hasOwnProperty(this, PbLong);
    tmp2 = closure_4;
    obj = closure_4(PbLong);
    tmp3 = closure_3;
    if (metroRequire()) {
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
const entry3 = {
  key: "isNegative",
  value: function isNegative() {
    return 2147483648 & this.hi;
  },
};
const items3 = [
  entry3,
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
    },
  },
  {
    key: "toString",
    value: function toString() {
      const self = this;
      if (obj) {
        return self.toBigInt().toString();
      } else if (self.isNegative()) {
        const negateResult = self.negate();
        return "-" + PbLong(1194).int64toString(negateResult.lo, negateResult.hi);
      } else {
        obj = PbLong(1194);
        return obj.int64toString(self.lo, self.hi);
      }
    },
  },
  {
    key: "toBigInt",
    value: function toBigInt() {
      if (obj) {
        const self = this;
        const V = tmp.V;
        V.setInt32(0, this.lo, true);
        const V2 = tmp.V;
        V2.setInt32(4, this.hi, true);
        const V3 = tmp.V;
        return V3.getBigInt64(0, true);
      } else {
        const _Error = Error;
        const error = new Error(
          "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support",
        );
        throw error;
      }
    },
  },
];
const entry4 = {
  key: "from",
  value: function from(trimmed) {
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
        if (regex.test(trimmed)) {
          const obj3 = PbLong(1194);
          [tmp24, tmp26, tmp27] = _slicedToArray(PbLong(1194).int64fromString(trimmed), 3);
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
            const result = trimmed / closure_9;
            let negateResult1 = PbLong(trimmed, result);
          } else {
            const result1 = -trimmed / closure_9;
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
  },
};
const items4 = [entry4];
const _module1Result2 = _createClass(PbLong, items3, items4);
const tmp2Result1 = new _module1Result1(0, 0);
_module1Result2.ZERO = new _module1Result2(0, 0);

export const PbULong = _module1Result1;
export const PbLong = _module1Result2;
