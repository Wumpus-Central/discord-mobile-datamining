// _runtime/metro/14170__.js
import react_native from "../00017_react-native.js";
import base64Decode from "../14171_base64Decode.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _wrapNativeSuper from "00158__wrapNativeSuper.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const NativeModules = react_native.NativeModules;
class TypeMismatchError {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, TypeMismatchError);
    const obj = _getPrototypeOf(TypeMismatchError);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
  }
}
_inherits(TypeMismatchError, _wrapNativeSuper(Error));
let closure_8 = _createClass(TypeMismatchError);
class QuotaExceededError {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, QuotaExceededError);
    const obj = _getPrototypeOf(QuotaExceededError);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return _possibleConstructorReturn(self, constructResult);
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
                  const self = this;
                  const self2 = this;
                  const tmp2 = new closure_8("Expected an integer array");
                  throw tmp2;
                }
              }
            }
          }
        }
      }
    }
    if (uint8Array.byteLength > 65536) {
      const self7 = this;
      const self8 = this;
      const tmp11 = new closure_9("Can only request a maximum of 65536 bytes");
      throw tmp11;
    } else {
      let randomBase64;
      const byteLength = uint8Array.byteLength;
      const tmp15 = base64Decode;
      if (NativeModules.RNGetRandomValues) {
        const RNGetRandomValues = NativeModules.RNGetRandomValues;
        randomBase64 = RNGetRandomValues.getRandomBase64(byteLength);
      } else if (NativeModules.ExpoRandom) {
        const ExpoRandom2 = NativeModules.ExpoRandom;
        randomBase64 = ExpoRandom2.getRandomBase64String(byteLength);
      } else if (global.ExpoModules) {
        const ExpoRandom = global.ExpoModules.ExpoRandom;
        randomBase64 = ExpoRandom.getRandomBase64String(byteLength);
      } else {
        const _Error = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("Native module not found");
        throw error;
      }
      const _Uint8Array2 = Uint8Array;
      const self5 = this;
      const self6 = this;
      uint8Array = new Uint8Array(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
      tmp15(randomBase64, uint8Array);
      return uint8Array;
    }
  };
}
