// === Module 9373: HMAC ===

// Module 9373 (HMAC)
import u8 from "u8" /* 9369 */;
import _mod9370 from "module_9370" /* 9370 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let set;

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
class HMAC {
  constructor(create, B) {
    let constructResult;
    let length;
    let length2;
    const self = this;
    _classCallCheck(this, HMAC);
    const obj = _getPrototypeOf(HMAC);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.finished = false;
    tmp3Result.destroyed = false;
    _mod9370.hash(create);
    const toBytesResult = u8.toBytes(B);
    tmp3Result.iHash = create.create();
    if (typeof tmp3Result.iHash.update !== "function") {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Expected instance of class which extends utils.Hash");
      throw error;
    } else {
      tmp3Result.blockLen = tmp3Result.iHash.blockLen;
      tmp3Result.outputLen = tmp3Result.iHash.outputLen;
      const blockLen = tmp3Result.blockLen;
      const _Uint8Array = Uint8Array;
      const self4 = this;
      const self5 = this;
      const uint8Array = new Uint8Array(blockLen);
      let digestResult = toBytesResult;
      set = uint8Array.set;
      if (toBytesResult.length > blockLen) {
        const obj2 = create.create();
        const updateResult = obj2.update(toBytesResult);
        digestResult = updateResult.digest();
      }
      const result = set(digestResult);
      let num4 = 0;
      if (0 < uint8Array.length) {
        do {
          uint8Array[num4] = uint8Array[num4] ^ 54;
          num4 = num4 + 1;
          length = uint8Array.length;
        } while (num4 < length);
      }
      const iHash = tmp3Result.iHash;
      iHash.update(uint8Array);
      tmp3Result.oHash = create.create();
      let num6 = 0;
      if (0 < uint8Array.length) {
        do {
          uint8Array[num6] = uint8Array[num6] ^ 106;
          num6 = num6 + 1;
          length2 = uint8Array.length;
        } while (num6 < length2);
      }
      const oHash = tmp3Result.oHash;
      oHash.update(uint8Array);
      uint8Array.fill(0);
      return tmp3Result;
    }
  }
}
_inherits(HMAC, u8.Hash);
const entry = {
  key: "update",
  value: function update(arg0) {
    _mod9370.exists(this);
    const iHash = this.iHash;
    iHash.update(arg0);
    return this;
  }
};
const items = [
  entry,
  {
    key: "digestInto",
    value: function digestInto(arg0) {
      _mod9370.exists(this);
      _mod9370.bytes(arg0, this.outputLen);
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
      if (!obj) {
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
const metroRequire = _moduleResult;
exports.hmac.create = (View, constructResult) => {
  const tmp = new metroRequire(View, constructResult);
  return tmp;
};
const HMAC_export = _moduleResult;

export { HMAC_export as HMAC };
export const hmac = (View, constructResult, arg2) => {
  const obj = new metroRequire(View, constructResult);
  const updateResult = obj.update(arg2);
  return updateResult.digest();
};