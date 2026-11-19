// === Module 10248: ? ===

// Module 10248
import _mod10249 from "module_10249" /* 10249 */;

const require = globalThis.__r;

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.parse = undefined;
    exports.parseAsync = undefined;
    exports.safeParse = undefined;
    exports.safeParseAsync = undefined;
    exports.validate = undefined;
    exports.validateAsync = undefined;
    exports.encode = undefined;
    exports.decode = undefined;
    exports.encodeAsync = undefined;
    exports.decodeAsync = undefined;
    exports.safeEncode = undefined;
    exports.safeDecode = undefined;
    exports.safeEncodeAsync = undefined;
    exports.safeDecodeAsync = undefined;
    const fnResult = fn(require("module_10164"));
    exports.parse = fnResult._parse(_mod10249.ZodRealError);
    exports.parseAsync = fnResult._parseAsync(_mod10249.ZodRealError);
    exports.safeParse = fnResult._safeParse(_mod10249.ZodRealError);
    exports.safeParseAsync = fnResult._safeParseAsync(_mod10249.ZodRealError);
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return require("module_10164").validate;
          }
    };
    Object.defineProperty(exports, "validate", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return require("module_10164").validateAsync;
          }
    };
    Object.defineProperty(exports, "validateAsync", obj2);
    exports.encode = fnResult._encode(_mod10249.ZodRealError);
    exports.decode = fnResult._decode(_mod10249.ZodRealError);
    exports.encodeAsync = fnResult._encodeAsync(_mod10249.ZodRealError);
    exports.decodeAsync = fnResult._decodeAsync(_mod10249.ZodRealError);
    exports.safeEncode = fnResult._safeEncode(_mod10249.ZodRealError);
    exports.safeDecode = fnResult._safeDecode(_mod10249.ZodRealError);
    exports.safeEncodeAsync = fnResult._safeEncodeAsync(_mod10249.ZodRealError);
    exports.safeDecodeAsync = fnResult._safeDecodeAsync(_mod10249.ZodRealError);
    (() => {
      let tmp = exports;
      const ownPropertyNames = Object.getOwnPropertyNames(exports);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {
              }
            }
          }
        }
        num = num + 1;
        tmp = exports;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}