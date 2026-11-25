// _runtime/metro/14567__.js
import _mod950 from "00950__.js";
import _mod14568 from "14568__.js";
import finalizeParams from "../14570_finalizeParams.js";
import node from "../14571_node.js";
import _validateAsync from "../14572__validateAsync.js";
import _mod14573 from "14573__.js";
import _mod14574 from "14574__.js";
import _mod14575 from "14575__.js";
import Doc from "../14576_Doc.js";
import _mod14577 from "14577__.js";
import $output from "../14578__output.js";
import _mod14579 from "14579__.js";
import _mod14580 from "14580__.js";
import assignProps from "../14581_assignProps.js";
import _mod14584 from "14584__.js";

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
    fn(_mod14568, exports);
    fn(finalizeParams, exports);
    fn(node, exports);
    fn(_validateAsync, exports);
    fn(_mod14577, exports);
    fn(_mod14573, exports);
    fn(_mod14575, exports);
    exports.util = fn2(require("sourceShape"));
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
        return require("sourceShape").toZod;
      },
    };
    Object.defineProperty(exports, "toZod", obj);
    exports.regexes = fn2(_mod14574);
    exports.locales = fn2(_mod950);
    fn($output, exports);
    fn(Doc, exports);
    fn(_mod14579, exports);
    fn(_mod14580, exports);
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
    exports.JSONSchema = fn2(_mod14584);
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
