// === Module 9005: ? ===

// Module 9005
import _mod8935 from "module_8935" /* 8935 */;
import _mod8939 from "module_8939" /* 8939 */;

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
    exports.ZodError = undefined;
    exports.ZodRealError = undefined;
    const fnResult = fn(_mod8935);
    let closure_5 = fn(_mod8939);
    function initializer(prototype, arg1) {
      _require = prototype;
      const $ZodError = require("module_8935").$ZodError;
      $ZodError.init(prototype, arg1);
      prototype.name = "ZodError";
      Object.defineProperties(prototype, {
        format: {
          value(arg0) {
            return fnResult.formatError(closure_0, arg0);
          }
        },
        flatten: {
          value(arg0) {
            return fnResult.flattenError(closure_0, arg0);
          }
        },
        addIssue: {
          value(arg0) {
            const issues = prototype.issues;
            issues.push(arg0);
            prototype.message = JSON.stringify(prototype.issues, closure_5.jsonStringifyReplacer, 2);
          }
        },
        addIssues: {
          value(arg0) {
            const issues = prototype.issues;
            const items = [...arg0];
            issues.push.apply(items);
            prototype.message = JSON.stringify(prototype.issues, closure_5.jsonStringifyReplacer, 2);
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
    obj.Parent = Error;
    exports.ZodRealError = fnResult.$constructor("ZodError", initializer, obj);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}