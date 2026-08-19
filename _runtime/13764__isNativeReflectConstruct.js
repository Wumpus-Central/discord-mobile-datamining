// === Module 13764: _isNativeReflectConstruct ===

// Module 13764 (_isNativeReflectConstruct)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import base64Decode from "base64Decode" /* 13765 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import c4 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;

let QuotaExceededError = global;
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
  } catch (err) {
  }
}
const NativeModules = get_ActivityIndicator.NativeModules;
class TypeMismatchError {
  constructor() {
    self = this;
    tmp = closure_3(this, QuotaExceededError);
    tmp2 = closure_5;
    obj = closure_5(QuotaExceededError);
    tmp3 = closure_4;
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
QuotaExceededError = TypeMismatchError;
_inherits(TypeMismatchError, _wrapNativeSuper(Error));
let closure_8 = _createClass(TypeMismatchError);
class QuotaExceededError {
  constructor() {
    self = this;
    tmp = closure_3(this, QuotaExceededError);
    tmp2 = closure_5;
    obj = closure_5(QuotaExceededError);
    tmp3 = closure_4;
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
_inherits(QuotaExceededError, _wrapNativeSuper(Error));
let closure_9 = _createClass(QuotaExceededError);
if (typeof global.crypto !== "object") {
  global.crypto = {};
}
if (typeof global.crypto.getRandomValues !== "function") {
  global.crypto.getRandomValues = function getRandomValues(uint8Array) {
    if (!(uint8Array instanceof Int8Array)) {
      const _Uint8Array = Uint8Array;
      if (!(uint8Array instanceof Uint8Array)) {
        const _Int16Array = Int16Array;
        if (!(uint8Array instanceof Int16Array)) {
          const _Uint16Array = Uint16Array;
          if (!(uint8Array instanceof Uint16Array)) {
            const _Int32Array = Int32Array;
            if (!(uint8Array instanceof Int32Array)) {
              const _Uint32Array = Uint32Array;
              if (!(uint8Array instanceof Uint32Array)) {
                const _Uint8ClampedArray = Uint8ClampedArray;
                if (!(uint8Array instanceof Uint8ClampedArray)) {
                  const tmp4 = new closure_8("Expected an integer array");
                  throw tmp4;
                }
              }
            }
          }
        }
      }
    }
    if (uint8Array.byteLength > 65536) {
      const tmp19 = new closure_9("Can only request a maximum of 65536 bytes");
      throw tmp19;
    } else {
      const byteLength = uint8Array.byteLength;
      if (NativeModules.RNGetRandomValues) {
        const RNGetRandomValues = NativeModules.RNGetRandomValues;
        let randomBase64 = RNGetRandomValues.getRandomBase64(byteLength);
      } else if (NativeModules.ExpoRandom) {
        const ExpoRandom2 = NativeModules.ExpoRandom;
        randomBase64 = ExpoRandom2.getRandomBase64String(byteLength);
      } else if (QuotaExceededError.ExpoModules) {
        const ExpoRandom = QuotaExceededError.ExpoModules.ExpoRandom;
        randomBase64 = ExpoRandom.getRandomBase64String(byteLength);
      } else {
        const _Error = Error;
        error = new Error("Native module not found");
        throw error;
      }
      const _Uint8Array2 = Uint8Array;
      uint8Array = new Uint8Array(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
      base64Decode(randomBase64, uint8Array);
      return uint8Array;
    }
  };
}