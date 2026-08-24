// _runtime/metro/12319__.js
import _mod12251 from "12251__.js";
import _mod12317 from "12317__.js";

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
    exports.ZodISODateTime = undefined;
    exports.ZodISODate = undefined;
    exports.ZodISOTime = undefined;
    exports.ZodISODuration = undefined;
    exports.datetime = function datetime(enc) {
      return closure_3._isoDateTime(exports.ZodISODateTime, enc);
    };
    exports.date = function date(enc) {
      return closure_3._isoDate(exports.ZodISODate, enc);
    };
    exports.time = function time(enc) {
      return closure_3._isoTime(exports.ZodISOTime, enc);
    };
    exports.duration = function duration(enc) {
      return closure_3._isoDuration(exports.ZodISODuration, enc);
    };
    const fnResult = fn(_mod12251);
    let c3 = fnResult;
    let closure_4 = fn(_mod12317);
    exports.ZodISODateTime = fnResult.$constructor("ZodISODateTime", (arg0, arg1) => {
      const $ZodISODateTime = closure_3.$ZodISODateTime;
      $ZodISODateTime.init(arg0, arg1);
      const ZodStringFormat = closure_4.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISODate = fnResult.$constructor("ZodISODate", (arg0, arg1) => {
      const $ZodISODate = closure_3.$ZodISODate;
      $ZodISODate.init(arg0, arg1);
      const ZodStringFormat = closure_4.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISOTime = fnResult.$constructor("ZodISOTime", (arg0, arg1) => {
      const $ZodISOTime = closure_3.$ZodISOTime;
      $ZodISOTime.init(arg0, arg1);
      const ZodStringFormat = closure_4.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
    exports.ZodISODuration = fnResult.$constructor("ZodISODuration", (arg0, arg1) => {
      const $ZodISODuration = closure_3.$ZodISODuration;
      $ZodISODuration.init(arg0, arg1);
      const ZodStringFormat = closure_4.ZodStringFormat;
      ZodStringFormat.init(arg0, arg1);
    });
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}