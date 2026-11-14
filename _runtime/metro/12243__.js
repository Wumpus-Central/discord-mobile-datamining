// _runtime/metro/12243__.js
import _mod12158 from "12158__.js";
import _mod12160 from "12160__.js";

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
    let _Object3 = Object;
    exports.ZodError = undefined;
    exports.ZodRealError = undefined;
    const fnResult = fn(_mod12158);
    let hasOwnProperty = fnResult;
    let closure_6 = fn(_mod12160);
    const _WeakSet = WeakSet;
    let _Object4 = Object;
    let items = [Object.prototype];
    const _Error = Error;
    items[1] = Error.prototype;
    const weakSet = new WeakSet(items);
    function initializer(arg0, arg1) {
      const $ZodError = _mod12158.$ZodError;
      $ZodError.init(arg0, arg1);
      arg0.name = "ZodError";
      const prototypeOf = Object.getPrototypeOf(arg0);
      if (!weakSet.has(prototypeOf)) {
        weakSet.add(prototypeOf);
        let addIssues = "format";
        let f104618 = (arg0) => {
          closure_0 = arg0;
          return (arg0) => closure_2_5.formatError(closure_0, arg0);
        };
        const _Object = Object;
        const obj2 = {
          configurable: true,
          enumerable: false,
          get() {
            const tmp = f104618(this);
            Object.defineProperty(this, addIssues, { value: tmp, configurable: true, writable: true });
            return tmp;
          },
          set(value) {
            Object.defineProperty(this, addIssues, { value, configurable: true, writable: true });
          },
        };
        Object.defineProperty(prototypeOf, "format", obj2);
        addIssues = "flatten";
        f104618 = (arg0) => {
          closure_0 = arg0;
          return (arg0) => closure_2_5.flattenError(closure_0, arg0);
        };
        const _Object2 = Object;
        const obj3 = {
          configurable: true,
          enumerable: false,
          get() {
            const tmp = f104618(this);
            Object.defineProperty(this, addIssues, { value: tmp, configurable: true, writable: true });
            return tmp;
          },
          set(value) {
            Object.defineProperty(this, addIssues, { value, configurable: true, writable: true });
          },
        };
        Object.defineProperty(prototypeOf, "flatten", obj3);
        addIssues = "addIssue";
        f104618 = (arg0) => {
          closure_0 = arg0;
          return (arg0) => {
            const issues = closure_0.issues;
            issues.push(arg0);
            closure_0.message = JSON.stringify(closure_0.issues, closure_2_6.jsonStringifyReplacer, 2);
          };
        };
        const _Object3 = Object;
        const obj4 = {
          configurable: true,
          enumerable: false,
          get() {
            const tmp = f104618(this);
            Object.defineProperty(this, addIssues, { value: tmp, configurable: true, writable: true });
            return tmp;
          },
          set(value) {
            Object.defineProperty(this, addIssues, { value, configurable: true, writable: true });
          },
        };
        Object.defineProperty(prototypeOf, "addIssue", obj4);
        addIssues = "addIssues";
        f104618 = (arg0) => {
          closure_0 = arg0;
          return (arg0) => {
            const issues = closure_0.issues;
            items = [...arg0];
            issues.push.apply(items);
            closure_0.message = JSON.stringify(closure_0.issues, closure_2_6.jsonStringifyReplacer, 2);
          };
        };
        const _Object4 = Object;
        const obj5 = {
          configurable: true,
          enumerable: false,
          get() {
            const tmp = f104618(this);
            Object.defineProperty(this, addIssues, { value: tmp, configurable: true, writable: true });
            return tmp;
          },
          set(value) {
            Object.defineProperty(this, addIssues, { value, configurable: true, writable: true });
          },
        };
        Object.defineProperty(prototypeOf, "addIssues", obj5);
        const _Object5 = Object;
        const obj6 = {
          configurable: true,
          enumerable: false,
          get() {
            return 0 === this.issues.length;
          },
        };
        Object.defineProperty(prototypeOf, "isEmpty", obj6);
      }
    }
    exports.ZodError = fnResult.$constructor("ZodError", initializer);
    let obj = { Parent: null };
    const _Error2 = Error;
    obj.Parent = Error;
    exports.ZodRealError = fnResult.$constructor("ZodError", initializer, undefined, obj);
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
                  const obj = {
                    value,
                    writable: false,
                    enumerable: ownPropertyDescriptor.enumerable,
                    configurable: false,
                  };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {}
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
