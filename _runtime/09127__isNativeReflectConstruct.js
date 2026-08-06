// _runtime/09127__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const HMAC = require;
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
class HMAC {
  constructor(arg0, arg1) {
    self = this;
    tmp = _isNativeReflectConstruct(this, HMAC);
    tmp2 = outer1_4;
    obj = outer1_4(HMAC);
    tmp3 = outer1_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.finished = false;
    tmp3Result.destroyed = false;
    hashResult = require("number").hash(global);
    toBytesResult = require("_asyncLoop").toBytes(require);
    tmp3Result.iHash = global.create();
    if (typeof tmp3Result.iHash.update !== "function") {
      tmp13 = globalThis;
      _Error = Error;
      tmp14 = new.target;
      str = "Expected instance of class which extends utils.Hash";
      tmp15 = new.target;
      error = new Error("Expected instance of class which extends utils.Hash");
      tmp17 = error;
      throw error;
    } else {
      tmp3Result.blockLen = tmp3Result.iHash.blockLen;
      tmp3Result.outputLen = tmp3Result.iHash.outputLen;
      blockLen = tmp3Result.blockLen;
      tmp18 = globalThis;
      _Uint8Array = Uint8Array;
      tmp19 = new.target;
      tmp20 = new.target;
      tmp21 = blockLen;
      uint8Array = new Uint8Array(blockLen);
      tmp22 = uint8Array;
      digestResult = toBytesResult;
      if (toBytesResult.length > blockLen) {
        obj = global.create();
        updateResult = obj.update(toBytesResult);
        digestResult = updateResult.digest();
      }
      result = uint8Array.set(digestResult);
      num = 0;
      num2 = 54;
      num3 = 1;
      num4 = 0;
      if (0 < uint8Array.length) {
        do {
          uint8Array[num4] = uint8Array[num4] ^ 54;
          num4 = num4 + 1;
          length = uint8Array.length;
        } while (num4 < length);
      }
      iHash = tmp3Result.iHash;
      updateResult1 = iHash.update(uint8Array);
      tmp3Result.oHash = global.create();
      num5 = 106;
      num6 = 0;
      if (0 < uint8Array.length) {
        do {
          uint8Array[num6] = uint8Array[num6] ^ 106;
          num6 = num6 + 1;
          length2 = uint8Array.length;
        } while (num6 < length2);
      }
      oHash = tmp3Result.oHash;
      updateResult2 = oHash.update(uint8Array);
      fillResult = require("_classCallCheck");
      return tmp3Result;
    }
  }
}
_inherits(HMAC, require("_asyncLoop").Hash);
const items = [
  {
    key: "update",
    value: function update(arg0) {
      HMAC(9124).exists(this);
      const iHash = this.iHash;
      iHash.update(arg0);
      return this;
    }
  },
  {
    key: "digestInto",
    value: function digestInto(arg0) {
      HMAC(9124).exists(this);
      HMAC(9124).bytes(arg0, this.outputLen);
      this.finished = true;
      const iHash = this.iHash;
      iHash.digestInto(arg0);
      const oHash = this.oHash;
      oHash.update(arg0);
      const oHash2 = this.oHash;
      oHash2.digestInto(arg0);
      this.destroy();
    }
  },
  {
    key: "digest",
    value: function digest() {
      const uint8Array = new Uint8Array(this.oHash.outputLen);
      this.digestInto(uint8Array);
      return uint8Array;
    }
  },
  {
    key: "_cloneInto",
    value: function _cloneInto(arg0) {
      let iHash;
      let oHash;
      const self = this;
      let obj = arg0;
      if (!arg0) {
        const _Object = Object;
        const _Object2 = Object;
        obj = Object.create(Object.getPrototypeOf(self), {});
      }
      ({ oHash, iHash, finished: tmp.finished, destroyed: tmp.destroyed, blockLen: tmp.blockLen, outputLen: tmp.outputLen } = self);
      obj.oHash = oHash._cloneInto(obj.oHash);
      obj.iHash = iHash._cloneInto(obj.iHash);
      return obj;
    }
  },
  {
    key: "destroy",
    value: function destroy() {
      this.destroyed = true;
      const oHash = this.oHash;
      oHash.destroy();
      const iHash = this.iHash;
      iHash.destroy();
    }
  }
];
const _moduleResult = _createClass(HMAC, items);
exports.hmac.create = (arg0, arg1) => new closure_6(arg0, arg1);

export const HMAC = _moduleResult;
export const hmac = (arg0, arg1, arg2) => {
  const obj = new closure_6(arg0, arg1);
  return new closure_6(arg0, arg1).update(arg2).digest();
};