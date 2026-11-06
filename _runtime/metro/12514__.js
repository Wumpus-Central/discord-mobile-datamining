// === Module 12514: ? ===

// Module 12514
import _mod12444 from "module_12444" /* 12444 */;
import _mod12448 from "module_12448" /* 12448 */;

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
    exports.ZodError = undefined;
    exports.ZodRealError = undefined;
    const fnResult = fn(_mod12444);
    let closure_5 = fn(_mod12448);
    function initializer(arg0, arg1) {
      _require = arg0;
      const $ZodError = require("module_12444").$ZodError;
      $ZodError.init(arg0, arg1);
      arg0.name = "ZodError";
      Object.defineProperties(arg0, {
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
            const issues = closure_0.issues;
            issues.push(arg0);
            closure_0.message = JSON.stringify(closure_0.issues, closure_5.jsonStringifyReplacer, 2);
          }
        },
        addIssues: {
          value(arg0) {
            const issues = closure_0.issues;
            items = [...arg0];
            issues.push.apply(items);
            closure_0.message = JSON.stringify(closure_0.issues, closure_5.jsonStringifyReplacer, 2);
          }
        },
        isEmpty: {
          get() {
            return 0 === closure_0.issues.length;
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