// _runtime/metro/10904__.js
import _mod10905 from "10905__.js";
import finalizeParams from "../10907_finalizeParams.js";
import node from "../10908_node.js";
import _validateAsync from "../10909__validateAsync.js";
import _mod10910 from "10910__.js";
import _mod10911 from "10911__.js";
import _mod10912 from "10912__.js";
import Doc from "../10913_Doc.js";
import _mod10914 from "10914__.js";
import ar from "../10915_ar.js";
import $output from "../10979__output.js";
import _mod10980 from "10980__.js";
import _mod10981 from "10981__.js";
import assignProps from "../10982_assignProps.js";
import _mod10985 from "10985__.js";

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
      fn = self.__exportStar;
    }
    if (!fn) {
      fn = (obj, exports) => {
        for (const key10007 in arg0) {
          let tmp6 = "default" === key10007;
          if (tmp6) {
            if (tmp6) {
              continue;
            } else {
              let tmp4 = self2(arg1, arg0, key10007);
              continue;
            }
            continue;
          } else {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let hasOwnPropertyResult = hasOwnProperty(key10007);
            } else {
              hasOwnPropertyResult = call(arg1, key10007);
            }
          }
        }
      };
    }
    let fn2 = self;
    if (self) {
      fn2 = self.__importStar;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
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
    exports.util = undefined;
    exports.toZod = undefined;
    exports.regexes = undefined;
    exports.locales = undefined;
    exports.toJSONSchema = undefined;
    exports.JSONSchemaGenerator = undefined;
    exports.JSONSchema = undefined;
    fn(_mod10905, exports);
    fn(finalizeParams, exports);
    fn(node, exports);
    fn(_validateAsync, exports);
    fn(_mod10914, exports);
    fn(_mod10910, exports);
    fn(_mod10912, exports);
    exports.util = fn2(require("10906__.js"));
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
        return require("10906__.js").toZod;
      },
    };
    Object.defineProperty(exports, "toZod", obj);
    exports.regexes = fn2(_mod10911);
    exports.locales = fn2(ar);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod10980, exports);
    fn(_mod10981, exports);
    fn(assignProps, exports);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
        return require("aggregateChecks").toJSONSchema;
      },
    };
    Object.defineProperty(exports, "toJSONSchema", obj2);
    const _Object6 = Object;
    const obj3 = {
      enumerable: true,
      get() {
        return require("JSONSchemaGenerator").JSONSchemaGenerator;
      },
    };
    Object.defineProperty(exports, "JSONSchemaGenerator", obj3);
    exports.JSONSchema = fn2(_mod10985);
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
