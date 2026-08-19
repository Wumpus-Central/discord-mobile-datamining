// === Module 12272: ? ===

// Module 12272
import _mod12199 from "module_12199" /* 12199 */;
import _mod12265 from "module_12265" /* 12265 */;

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
    exports.string = function string(message) {
      return closure_2._coercedString(closure_3.ZodString, message);
    };
    exports.number = function number(message) {
      return closure_2._coercedNumber(closure_3.ZodNumber, message);
    };
    exports.boolean = function boolean(message) {
      return closure_2._coercedBoolean(closure_3.ZodBoolean, message);
    };
    exports.bigint = function bigint(message) {
      return closure_2._coercedBigint(closure_3.ZodBigInt, message);
    };
    exports.date = function date(message) {
      return closure_2._coercedDate(closure_3.ZodDate, message);
    };
    let closure_2 = fn(_mod12199);
    let closure_3 = fn(_mod12265);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}