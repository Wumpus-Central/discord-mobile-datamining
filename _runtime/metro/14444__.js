// _runtime/metro/14444__.js
import _mod950 from "00950__.js";
import _mod14445 from "14445__.js";
import finalizeParams from "../14447_finalizeParams.js";
import node from "../14448_node.js";
import _validateAsync from "../14449__validateAsync.js";
import _mod14450 from "14450__.js";
import _mod14451 from "14451__.js";
import _mod14452 from "14452__.js";
import Doc from "../14453_Doc.js";
import _mod14454 from "14454__.js";
import $output from "../14455__output.js";
import _mod14456 from "14456__.js";
import _mod14457 from "14457__.js";
import assignProps from "../14458_assignProps.js";
import _mod14461 from "14461__.js";

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
    fn(_mod14445, exports);
    fn(finalizeParams, exports);
    fn(node, exports);
    fn(_validateAsync, exports);
    fn(_mod14454, exports);
    fn(_mod14450, exports);
    fn(_mod14452, exports);
    exports.util = fn2(require("sourceShape"));
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
        return require("sourceShape").toZod;
      },
    };
    Object.defineProperty(exports, "toZod", obj);
    exports.regexes = fn2(_mod14451);
    exports.locales = fn2(_mod950);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod14456, exports);
    fn(_mod14457, exports);
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
    exports.JSONSchema = fn2(_mod14461);
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
