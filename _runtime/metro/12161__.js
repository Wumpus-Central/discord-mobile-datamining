// === Module 12161: ? ===

// Module 12161
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
    exports.ZodError = undefined;
    exports.ZodRealError = undefined;
    const fnResult = fn(require("module_12091"));
    let c4 = fnResult;
    let closure_5 = fn(require("mergeDefs"));
    function initializer(prototype) {
      const _require = prototype;
      const $ZodError = _require(12091).$ZodError;
      $ZodError.init(prototype, arg1);
      prototype.name = "ZodError";
      let obj = {
        value(arg0) {
          return outer1_4.formatError(closure_0, arg0);
        }
      };
      obj = {
        value(arg0) {
          return outer1_4.flattenError(closure_0, arg0);
        }
      };
      obj = {
        value(arg0) {
          const issues = prototype.issues;
          issues.push(arg0);
          prototype.message = JSON.stringify(prototype.issues, outer1_5.jsonStringifyReplacer, 2);
        }
      };
      Object.defineProperties(prototype, {
        format: obj,
        flatten: obj,
        addIssue: obj,
        addIssues: {
          value(arg0) {
            const issues = prototype.issues;
            const items = [...arg0];
            issues.push.apply(items);
            prototype.message = JSON.stringify(prototype.issues, outer1_5.jsonStringifyReplacer, 2);
          }
        },
        isEmpty: {
          get() {
            return 0 === prototype.issues.length;
          }
        }
      });
    }
    exports.ZodError = fnResult.$constructor("ZodError", initializer);
    let obj = { Parent: null };
    const _Error = Error;
    obj[0] = Error;
    exports.ZodRealError = fnResult.$constructor("ZodError", initializer, obj);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}