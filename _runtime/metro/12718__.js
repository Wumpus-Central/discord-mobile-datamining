// === Module 12718: ? ===

// Module 12718
import _mod12645 from "module_12645" /* 12645 */;
import _mod12711 from "module_12711" /* 12711 */;

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
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
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
              let tmp4 = hasOwnPropertyResult;
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.string = function string(enc) {
      return closure_2._coercedString(closure_3.ZodString, enc);
    };
    exports.number = function number(enc) {
      return closure_2._coercedNumber(closure_3.ZodNumber, enc);
    };
    exports.boolean = function boolean(enc) {
      return closure_2._coercedBoolean(closure_3.ZodBoolean, enc);
    };
    exports.bigint = function bigint(enc) {
      return closure_2._coercedBigint(closure_3.ZodBigInt, enc);
    };
    exports.date = function date(enc) {
      return closure_2._coercedDate(closure_3.ZodDate, enc);
    };
    let closure_2 = fn(_mod12645);
    let closure_3 = fn(_mod12711);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}