// _runtime/metro/14627__.js
import _mod950 from "00950__.js";
import _mod14628 from "14628__.js";
import finalizeParams from "../14630_finalizeParams.js";
import node from "../14631_node.js";
import _validateAsync from "../14632__validateAsync.js";
import _mod14633 from "14633__.js";
import _mod14634 from "14634__.js";
import _mod14635 from "14635__.js";
import Doc from "../14636_Doc.js";
import _mod14637 from "14637__.js";
import $output from "../14638__output.js";
import _mod14639 from "14639__.js";
import _mod14640 from "14640__.js";
import assignProps from "../14641_assignProps.js";
import _mod14644 from "14644__.js";

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
    fn(_mod14628, exports);
    fn(finalizeParams, exports);
    fn(node, exports);
    fn(_validateAsync, exports);
    fn(_mod14637, exports);
    fn(_mod14633, exports);
    fn(_mod14635, exports);
    exports.util = fn2(require("sourceShape"));
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
        return require("sourceShape").toZod;
      },
    };
    Object.defineProperty(exports, "toZod", obj);
    exports.regexes = fn2(_mod14634);
    exports.locales = fn2(_mod950);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod14639, exports);
    fn(_mod14640, exports);
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
    exports.JSONSchema = fn2(_mod14644);
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
