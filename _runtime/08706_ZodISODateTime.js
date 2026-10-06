// _runtime/08706_ZodISODateTime.js
import util2 from "08638_util.js";
import ZodType2 from "08704_ZodType.js";

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
        function get() {
          return __esModule[closure_1];
        }
        let closure_0 = __esModule;
        closure_1 = arg2;
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
        let tmp3 = ownPropertyDescriptor;
        if (tmp3) {
          let tmp4;
          if ("get" in ownPropertyDescriptor) {
            tmp4 = !__esModule.__esModule;
          } else {
            tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
          }
          tmp3 = !tmp4;
        }
        if (!tmp3) {
          ownPropertyDescriptor = { enumerable: true, get };
          const obj = { enumerable: true, get };
        }
        Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let closure_1 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_2 = tmp3;
const tmp5 =
  (self && self.__importStar) ||
  ((__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      for (const key10009 in __esModule) {
        let callResult = "default" !== key10009;
        if (callResult) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          callResult = hasOwnProperty.call(__esModule, key10009);
        }
        if (!callResult) {
          continue;
        } else {
          let tmp6 = closure_1(obj, __esModule, key10009);
          continue;
        }
        continue;
      }
    }
    closure_2(obj, __esModule);
    return obj;
  });
const util = tmp5(util2);
const ZodType = tmp5(ZodType2);

export const datetime = function datetime(message) {
  return util._isoDateTime(exports.ZodISODateTime, message);
};
export const date = function date(message) {
  return util._isoDate(exports.ZodISODate, message);
};
export const time = function time(message) {
  return util._isoTime(exports.ZodISOTime, message);
};
export const duration = function duration(message) {
  return util._isoDuration(exports.ZodISODuration, message);
};
export const ZodISODateTime = util.$constructor("ZodISODateTime", (arg0, arg1) => {
  const $ZodISODateTime = util.$ZodISODateTime;
  $ZodISODateTime.init(arg0, arg1);
  const ZodStringFormat = ZodType.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodISODate = util.$constructor("ZodISODate", (arg0, arg1) => {
  const $ZodISODate = util.$ZodISODate;
  $ZodISODate.init(arg0, arg1);
  const ZodStringFormat = ZodType.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodISOTime = util.$constructor("ZodISOTime", (arg0, arg1) => {
  const $ZodISOTime = util.$ZodISOTime;
  $ZodISOTime.init(arg0, arg1);
  const ZodStringFormat = ZodType.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
export const ZodISODuration = util.$constructor("ZodISODuration", (arg0, arg1) => {
  const $ZodISODuration = util.$ZodISODuration;
  $ZodISODuration.init(arg0, arg1);
  const ZodStringFormat = ZodType.ZodStringFormat;
  ZodStringFormat.init(arg0, arg1);
});
