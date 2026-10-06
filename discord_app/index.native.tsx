// === Module 0: Discord ===

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import react_native from "react-native" /* 17 */;
import isTTITest from "isTTITest" /* 14172 */;
import installSystrace from "installSystrace" /* 14173 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 13978 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f79872 = () => {
  let closure_0 = GenerateInvite(f18225[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18225, arg0);
};
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = react_native.AppRegistry;
AppRegistry.registerComponent("Discord", () => require("App").default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  let args;
  _require = [...arguments];
  return require("executeRunnable").default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => require("AppShare").default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  let args;
  _require = [...arguments];
  return require("executeRunnable").default("Share", () => closure_3(...closure_0));
});
const BackgroundSync = "BackgroundSync";
const f18215 = () => BackgroundSync(f18215[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", f79872);
if (isTTITest.isTTITest) {
  const TTITestAction = "TTITestAction";
  const f18216 = () => TTITestAction(f18216[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", f79872);
}
const Disconnect = "Disconnect";
const f18217 = () => Disconnect(f18217[15]);
AppRegistry.registerHeadlessTask("Disconnect", f79872);
const MarkAsRead = "MarkAsRead";
const f18218 = () => MarkAsRead(f18218[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", f79872);
const MuteAction = "MuteAction";
const f18219 = () => MuteAction(f18219[17]);
AppRegistry.registerHeadlessTask("MuteAction", f79872);
const ToggleDeafen = "ToggleDeafen";
const f18220 = () => ToggleDeafen(f18220[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", f79872);
const ToggleSelfMute = "ToggleSelfMute";
const f18221 = () => ToggleSelfMute(f18221[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", f79872);
const DismissCallAction = "DismissCallAction";
const f18222 = () => DismissCallAction(f18222[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", f79872);
const DirectReply = "DirectReply";
const f18223 = () => DirectReply(f18223[21]);
AppRegistry.registerHeadlessTask("DirectReply", f79872);
const SelectVoiceChannel = "SelectVoiceChannel";
const f18224 = () => SelectVoiceChannel(f18224[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", f79872);
const GenerateInvite = "GenerateInvite";
const f18225 = () => GenerateInvite(f18225[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", f79872);
const result = size.fileFinishedImporting("index.native.tsx");

// === Orphan Functions ===

function global() {
  let React32;
  let _window;
  let _window2;
  let nativePerformanceNowResult;
  const error2 = function() {
    let stylize;
    if (1 === arguments.length) {
      let first;
      if (typeof arguments[0] === "string") {
        first = arguments[0];
      }
      const first1 = arguments[0];
      let tmp2 = c0;
      let tmp3 = typeof first1 === "string";
      if (typeof first1 === "string") {
        tmp3 = "Warning: " === first1.slice(0, 9);
      }
      if (tmp3) {
        tmp3 = tmp2 >= hasOwnProperty;
      }
      if (tmp3) {
        tmp2 = React3;
      }
      let text1 = first;
      if (metroRequire.length) {
        let str2 = first;
        const text = `${obj2.join("")}`;
        if (!first) {
          str2 = "";
        }
        text1 = `${tmp6} ${str2}`;
      }
      _window.nativeLoggingHook(text1, tmp2);
    }
    map = Array.prototype.map;
    const callResult = map.call(arguments, (arg0) => {
      if (typeof closure_1_1 === "function") {
        const obj = { seen: [], formatValueCalls: 0, stylize };
        return closure_1(obj, arg0, 10);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
    first = callResult.join(", ");
  };
  let __BUNDLE_START_TIME__;
  let __DEV__;
  let process;
  let __METRO_GLOBAL_PREFIX__;
  if (globalThis.nativePerformanceNow) {
    nativePerformanceNowResult = globalThis.nativePerformanceNow();
  } else {
    let _Date = Date;
    nativePerformanceNowResult = Date.now();
  }
  globalThis.__BUNDLE_START_TIME__ = nativePerformanceNowResult;
  globalThis.__DEV__ = false;
  globalThis.process = process || {};
  globalThis.__METRO_GLOBAL_PREFIX__ = "";
  let env1 = process.env;
  let _process = process;
  if (!env1) {
    env1 = {};
  }
  _process.env = env1;
  let str = process.env.NODE_ENV;
  if (!str) {
    str = "production";
  }
  let self = this;
  env.NODE_ENV = str;
  if (typeof globalThis !== "undefined") {
    _window = globalThis;
  } else {
    let _global = global;
    if (typeof global !== "undefined") {
      _window = global;
    } else {
      let _window3 = window;
      _window = self;
      if (typeof window !== "undefined") {
        _window = window;
      }
    }
  }
  function metroRequire(id, constructResult) {
    if (null === id) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Cannot find module");
      throw error;
    } else {
      const value = map.get(id);
      if (value) {
        let _exports;
        if (value.isInitialized) {
          _exports = value.publicModule.exports;
        }
        return _exports;
      }
      _exports = (function loadModuleImplementation(id, value2) {
        let __timingFunction;
        function unknownModuleError(id) {
          return Error("Requiring unknown module \"" + id + "\".");
        }
        const __getTotalRequireTime = () => closure_2;
        let value = value2;
        if (!value) {
          value = value2;
          if (length.length > 0) {
            let num2 = map.get(id);
            if (num2 == null) {
              num2 = 0;
            }
            value = value2;
            if (null != tmp2[num2]) {
              tmp2[num2](id);
              value = closure_1.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        value2 = value;
        if (!value2) {
          value2 = value;
          if (nativeRequire) {
            const tmp11 = closure_11(id);
            nativeRequire(tmp11.localId, tmp11.segmentId);
            value2 = closure_1.get(id);
          }
        }
        if (value2) {
          if (value2.hasError) {
            throw value2.error;
          } else {
            value2.isInitialized = true;
            const dependencyMap = value2.dependencyMap;
            __timingFunction = tmp8.__timingFunction;
            const factory = value2.factory;
            const __timingFunctionResult = __timingFunction();
            closure_1 = __timingFunctionResult;
            if (false === c3) {
              c3 = true;
              __timingFunction.__getTotalRequireTime = () => React2 + (__timingFunction() - closure_1);
            }
            try {
              const publicModule = value2.publicModule;
              publicModule.id = id;
              factory(__timingFunction, closure_6, closure_7, closure_8, publicModule, publicModule.exports, dependencyMap);
              value2.factory = undefined;
              value2.dependencyMap = undefined;
              const _exports = publicModule.exports;
              if (false === c3) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                __timingFunction.__getTotalRequireTime = __getTotalRequireTime;
              }
              return _exports;
            } catch (tmp25) {
              if (false === c3) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                __timingFunction.__getTotalRequireTime = __getTotalRequireTime;
              }
              throw tmp25;
            }
          }
        } else {
          throw unknownModuleError(id);
        }
      })(id, value);
    }
  }
  function metroImportDefault(id) {
    const value = map.get(id);
    if (value) {
      if (value.importedDefault !== React3) {
        return value.importedDefault;
      }
    }
    if (null === id) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Cannot find module");
      throw error;
    } else {
      const value2 = map.get(id);
      if (value2) {
        let _exports;
        if (value2.isInitialized) {
          _exports = value2.publicModule.exports;
        }
        let _default = _exports;
        if (_default) {
          _default = _exports;
          if (_exports.__esModule) {
            _default = _exports.default;
          }
        }
        map.get(id).importedDefault = _default;
        return _default;
      }
      _exports = (function loadModuleImplementation(id, value2) {
        let __timingFunction;
        function unknownModuleError(id) {
          return Error("Requiring unknown module \"" + id + "\".");
        }
        const __getTotalRequireTime = () => closure_2;
        let value = value2;
        if (!value) {
          value = value2;
          if (length.length > 0) {
            let num2 = map.get(id);
            if (num2 == null) {
              num2 = 0;
            }
            value = value2;
            if (null != tmp2[num2]) {
              tmp2[num2](id);
              value = closure_1.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        value2 = value;
        if (!value2) {
          value2 = value;
          if (nativeRequire) {
            const tmp11 = closure_11(id);
            nativeRequire(tmp11.localId, tmp11.segmentId);
            value2 = closure_1.get(id);
          }
        }
        if (value2) {
          if (value2.hasError) {
            throw value2.error;
          } else {
            value2.isInitialized = true;
            const dependencyMap = value2.dependencyMap;
            __timingFunction = tmp8.__timingFunction;
            const factory = value2.factory;
            const __timingFunctionResult = __timingFunction();
            closure_1 = __timingFunctionResult;
            if (false === c3) {
              c3 = true;
              __timingFunction.__getTotalRequireTime = () => React2 + (__timingFunction() - closure_1);
            }
            try {
              const publicModule = value2.publicModule;
              publicModule.id = id;
              factory(__timingFunction, closure_6, closure_7, closure_8, publicModule, publicModule.exports, dependencyMap);
              value2.factory = undefined;
              value2.dependencyMap = undefined;
              const _exports = publicModule.exports;
              if (false === c3) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                __timingFunction.__getTotalRequireTime = __getTotalRequireTime;
              }
              return _exports;
            } catch (tmp25) {
              if (false === c3) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                __timingFunction.__getTotalRequireTime = __getTotalRequireTime;
              }
              throw tmp25;
            }
          }
        } else {
          throw unknownModuleError(id);
        }
      })(id, value2);
    }
  }
  function metroImportAll(id) {
    let length;
    let value = map.get(id);
    if (value) {
      if (value.importedAll !== React3) {
        return value.importedAll;
      }
    }
    if (null === id) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Cannot find module");
      const tmp8 = error;
      throw error;
    } else {
      let value2 = map.get(id);
      if (value2) {
        let _exports;
        let tmp3;
        if (value2.isInitialized) {
          _exports = value2.publicModule.exports;
        }
        if (!_exports) {
          const obj = { default: _exports };
          if (_exports) {
            for (const key10017 in _exports) {
              if (!hasOwnProperty.call(_exports, key10017)) {
                continue;
              } else {
                obj[key10017] = _exports[key10017];
                continue;
              }
              continue;
            }
          }
          tmp3 = obj;
        } else {
          tmp3 = _exports;
        }
        map.get(id).importedAll = tmp3;
        return tmp3;
      }
      _exports = (function loadModuleImplementation(id, value2) {
        let __timingFunction;
        function unknownModuleError(id) {
          return Error("Requiring unknown module \"" + id + "\".");
        }
        const __getTotalRequireTime = () => closure_2;
        let value = value2;
        if (!value) {
          value = value2;
          if (length.length > 0) {
            let num2 = map.get(id);
            if (num2 == null) {
              num2 = 0;
            }
            value = value2;
            if (null != tmp2[num2]) {
              tmp2[num2](id);
              value = closure_1.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        value2 = value;
        if (!value2) {
          value2 = value;
          if (nativeRequire) {
            const tmp11 = closure_11(id);
            nativeRequire(tmp11.localId, tmp11.segmentId);
            value2 = closure_1.get(id);
          }
        }
        if (value2) {
          if (value2.hasError) {
            throw value2.error;
          } else {
            value2.isInitialized = true;
            const dependencyMap = value2.dependencyMap;
            __timingFunction = tmp8.__timingFunction;
            const factory = value2.factory;
            const __timingFunctionResult = __timingFunction();
            closure_1 = __timingFunctionResult;
            if (false === c3) {
              c3 = true;
              __timingFunction.__getTotalRequireTime = () => React2 + (__timingFunction() - closure_1);
            }
            try {
              const publicModule = value2.publicModule;
              publicModule.id = id;
              factory(__timingFunction, closure_6, closure_7, closure_8, publicModule, publicModule.exports, dependencyMap);
              value2.factory = undefined;
              value2.dependencyMap = undefined;
              const _exports = publicModule.exports;
              if (false === c3) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                __timingFunction.__getTotalRequireTime = __getTotalRequireTime;
              }
              return _exports;
            } catch (tmp25) {
              if (false === c3) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                __timingFunction.__getTotalRequireTime = __getTotalRequireTime;
              }
              throw tmp25;
            }
          }
        } else {
          throw unknownModuleError(id);
        }
      })(id, value2);
    }
  }
  function unpackModuleId(View) {
    return { segmentId: View >>> c9, localId: View & c10 };
  }
  _window.__r = metroRequire;
  _window["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__d"] = function define(factory, arg1, dependencyMap) {
    let obj2;
    if (!map.has(arg1)) {
      const obj = { dependencyMap, factory, hasError: false, importedAll: React3, importedDefault: React3, isInitialized: false, publicModule: obj2 };
      obj2 = { exports: {} };
      const result = map.set(arg1, obj);
    }
  };
  _window.__c = function clear() {
    map = new Map();
    return map;
  };
  _window.__registerSegment = function registerSegment(arg0, arg1, arr) {
    let closure_0 = arg0;
    closure_12[arg0] = arg1;
    if (arr) {
      const item = arr.forEach((item) => {
        const hasItem = map.has(item) || map1.has(item);
        if (!hasItem) {
          const result = map1.set(item, closure_0);
        }
      });
    }
  };
  let map = new Map();
  let c2 = 0;
  let c3 = false;
  _window.__timingFunction = () => Date.now();
  _window.__getTotalRequireTime = () => c2;
  let React3 = {};
  let hasOwnProperty = {}.hasOwnProperty;
  metroRequire.importDefault = metroImportDefault;
  metroRequire.importAll = metroImportAll;
  metroRequire.context = function fallbackRequireContext() {
    const error = new Error("The experimental Metro feature `require.context` is not enabled in your project.");
    throw error;
  };
  metroRequire.resolveWeak = function fallbackRequireResolveWeak() {
    const error = new Error("require.resolveWeak cannot be called dynamically.");
    throw error;
  };
  let c9 = 16;
  let c10 = 65535;
  metroRequire.unpackModuleId = unpackModuleId;
  metroRequire.packModuleId = function packModuleId(segmentId) {
    return (segmentId.segmentId << c9) + segmentId.localId;
  };
  let closure_12 = [];
  let map1 = new Map();
  if (typeof globalThis !== "undefined") {
    _window2 = globalThis;
  } else {
    const _global2 = global;
    if (typeof global !== "undefined") {
      _window2 = global;
    } else {
      let _window4 = window;
      _window2 = self;
      if (typeof window !== "undefined") {
        _window2 = window;
      }
    }
  }
  function stub() {
  
  }
  function consoleCreateTaskStub() {
    return {
      run(fn) {
        return fn();
      }
    };
  }
  function stylizeNoColor(arg0, arg1) {
    return arg0;
  }
  function formatValue(formatValueCalls, name, arg2) {
    let closure_2;
    let closure_0 = formatValueCalls;
    let closure_1 = name;
    formatProperty = arg2;
    formatValueCalls.formatValueCalls = formatValueCalls.formatValueCalls + 1;
    if (formatValueCalls.formatValueCalls > 200) {
      const _HermesInternal4 = HermesInternal;
      return "[TOO BIG formatValueCalls " + formatValueCalls.formatValueCalls + " exceeded limit of 200]";
    } else {
      let stylizeResult;
      if (undefined === name) {
        stylizeResult = formatValueCalls.stylize("undefined", "undefined");
      } else if (typeof name === "string") {
        const _JSON = JSON;
        const str3 = JSON.stringify(name);
        const str5 = str3.replace(/^"|"$/g, "");
        const str7 = str5.replace(/'/g, "\\'");
        stylizeResult = formatValueCalls.stylize(`'${str7.replace(/\\"/g, "\"")}'`, "string");
      } else if (typeof name === "number") {
        stylizeResult = formatValueCalls.stylize("" + name, "number");
      } else if (typeof name === "boolean") {
        stylizeResult = formatValueCalls.stylize("" + name, "boolean");
      } else if (null === name) {
        stylizeResult = formatValueCalls.stylize("null", "null");
      }
      if (stylizeResult) {
        return stylizeResult;
      } else {
        let sum2;
        const _Object = Object;
        const keys = Object.keys(name);
        const obj = {};
        const item = keys.forEach((item, index) => {
          obj[item] = true;
        });
        let tmp5 = typeof name === "object";
        let tmp6 = tmp5;
        if (typeof name === "object") {
          tmp6 = null !== name;
        }
        if (tmp6) {
          const _Object2 = Object;
          let tmp7 = "[object Error]" === toString.call(name);
          if (!tmp7) {
            const _Error = Error;
            tmp7 = name instanceof Error;
          }
          tmp6 = tmp7;
        }
        if (tmp6) {
          const _Error6 = Error;
          const toString15 = Error.prototype.toString;
          return "[" + toString15.call(name) + "]";
        }
        if (0 === keys.length) {
          if (typeof name === "function") {
            let str43 = "";
            if (name.name) {
              str43 = `: ${name.name}`;
            }
            const _HermesInternal3 = HermesInternal;
            return formatValueCalls.stylize("[Function" + str43 + "]", "special");
          } else {
            let tmp8 = tmp5;
            if (typeof name === "object") {
              tmp8 = null !== name;
            }
            if (tmp8) {
              const _Object3 = Object;
              const toString2 = Object.prototype.toString;
              tmp8 = "[object RegExp]" === toString2.call(name);
            }
            if (tmp8) {
              const _RegExp3 = RegExp;
              const toString14 = RegExp.prototype.toString;
              return formatValueCalls.stylize(toString14.call(name), "regexp");
            } else {
              let tmp9 = tmp5;
              if (typeof name === "object") {
                tmp9 = null !== name;
              }
              if (tmp9) {
                const _Object4 = Object;
                const toString3 = Object.prototype.toString;
                tmp9 = "[object Date]" === toString3.call(name);
              }
              if (tmp9) {
                const _Date2 = Date;
                const toString13 = Date.prototype.toString;
                return formatValueCalls.stylize(toString13.call(name), "date");
              } else {
                let tmp10 = tmp5;
                if (typeof name === "object") {
                  tmp10 = null !== name;
                }
                if (tmp10) {
                  const _Object5 = Object;
                  const toString4 = Object.prototype.toString;
                  let tmp11 = "[object Error]" === toString4.call(name);
                  if (!tmp11) {
                    const _Error2 = Error;
                    tmp11 = name instanceof Error;
                  }
                  tmp10 = tmp11;
                }
                if (tmp10) {
                  const _Error5 = Error;
                  const toString12 = Error.prototype.toString;
                  return "[" + toString12.call(name) + "]";
                }
              }
            }
          }
        }
        let flag = false;
        let c4 = false;
        let items = ["{", "}"];
        const _Array = Array;
        if (Array.isArray(name)) {
          c4 = true;
          items = ["[", "]"];
          flag = true;
        }
        let str17 = "";
        let str18 = "";
        if (typeof name === "function") {
          let text = str17;
          if (name.name) {
            text = `: ${name.name}`;
          }
          const _HermesInternal = HermesInternal;
          str18 = " [Function" + text + "]";
        }
        let tmp13 = tmp5;
        if (typeof name === "object") {
          tmp13 = null !== name;
        }
        if (tmp13) {
          const _Object6 = Object;
          const toString5 = Object.prototype.toString;
          tmp13 = "[object RegExp]" === toString5.call(name);
        }
        if (tmp13) {
          const _RegExp = RegExp;
          const toString6 = RegExp.prototype.toString;
          str18 = ` ${toString6.call(name)}`;
        }
        let tmp14 = tmp5;
        if (typeof name === "object") {
          tmp14 = null !== name;
        }
        if (tmp14) {
          const _Object7 = Object;
          const toString7 = Object.prototype.toString;
          tmp14 = "[object Date]" === toString7.call(name);
        }
        if (tmp14) {
          const _Date = Date;
          str18 = ` ${toUTCString.call(name)}`;
        }
        let tmp15 = tmp5;
        if (typeof name === "object") {
          tmp15 = null !== name;
        }
        if (tmp15) {
          const _Object8 = Object;
          const toString8 = Object.prototype.toString;
          let tmp16 = "[object Error]" === toString8.call(name);
          if (!tmp16) {
            const _Error3 = Error;
            tmp16 = name instanceof Error;
          }
          tmp15 = tmp16;
        }
        if (tmp15) {
          const _Error4 = Error;
          const toString9 = Error.prototype.toString;
          const _HermesInternal2 = HermesInternal;
          str18 = " " + `[${toString9.call(name)}` + "]";
        }
        if (0 !== keys.length) {
          let text1;
          if (arg2 < 0) {
            let stylizeResult1;
            if (typeof name === "object") {
              tmp5 = null !== name;
            }
            if (tmp5) {
              const _Object10 = Object;
              const toString10 = Object.prototype.toString;
              tmp5 = "[object RegExp]" === toString10.call(name);
            }
            const stylize = formatValueCalls.stylize;
            if (tmp5) {
              const _RegExp2 = RegExp;
              const toString11 = RegExp.prototype.toString;
              stylizeResult1 = stylize(toString11.call(name), "regexp");
            } else {
              stylizeResult1 = stylize("[Object]", "special");
            }
            text1 = stylizeResult1;
          } else {
            let mapped;
            const seen = formatValueCalls.seen;
            const arr = seen.push(name);
            if (flag) {
              let num4;
              closure_0 = formatValueCalls;
              closure_1 = name;
              formatProperty = arg2;
              const items1 = [];
              const length = name.length;
              for (let num4 = 0; num4 < length; num4 = num4 + 1) {
                let _String = String;
                let _Object9 = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let push = items1.push;
                if (hasOwnProperty.call(name, String(num4))) {
                  let _String2 = String;
                  let flag3 = true;
                  let arr4 = push(formatProperty(formatValueCalls, name, arg2, obj, String(num4), true));
                } else {
                  let arr5 = push(str17);
                }
              }
              const item1 = keys.forEach((item) => {
                if (!item.match(/^\d+$/)) {
                  items1.push(closure_2(closure_0, closure_1, closure_2, obj, item, true));
                }
              });
              mapped = items1;
            } else {
              mapped = keys.map((item) => formatProperty(formatValueCalls, name, closure_2, obj, item, c4));
            }
            const seen1 = formatValueCalls.seen;
            seen1.pop();
            if (mapped.reduce((acc, arr) => {
              arr.indexOf("\n") >= 0;
              return acc + arr.replace(/\u001b\[\d\d?m/g, "").length + 1;
            }, 0) > 60) {
              const first = items[0];
              if (str17 !== str18) {
                str17 = `${str18}
     `;
              }
              const sum = first + str17;
              text1 = `${tmp32} ${arr3.join(",\n  ")} ${arr2[1]}`;
            } else {
              const sum1 = items[0] + str18;
              text1 = `${tmp29} ${arr3.join(", ")} ${arr2[1]}`;
            }
          }
          sum2 = text1;
        } else {
          sum2 = items[0] + str18 + items[1];
        }
        return sum2;
      }
    }
  }
  function formatProperty(stylize, arg1, arg2, arg3, str, arg5) {
    let stylizeResult1;
    let iter = Object.getOwnPropertyDescriptor(arg1, str);
    if (!iter) {
      iter = { value: arg1[str] };
      const obj = { value: arg1[str] };
    }
    if (iter.get) {
      let stylizeResult;
      stylize = stylize.stylize;
      if (iter.set) {
        stylizeResult = stylize("[Getter/Setter]", "special");
      } else {
        stylizeResult = stylize("[Getter]", "special");
      }
      stylizeResult1 = stylizeResult;
    } else if (iter.set) {
      stylizeResult1 = stylize.stylize("[Setter]", "special");
    }
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let text;
    if (!hasOwnProperty.call(arg3, str)) {
      text = `${"[" + str}]`;
    }
    if (!stylizeResult1) {
      let stylizeResult2;
      const seen = stylize.seen;
      if (seen.indexOf(iter.value) < 0) {
        let arr2;
        if (null === arg2) {
          arr2 = formatValue(stylize, iter.value, null);
        } else {
          arr2 = formatValue(stylize, iter.value, arg2 - 1);
        }
        let tmp10 = arr2;
        if (arr2.indexOf("\n") > -1) {
          let substr;
          const parts = arr2.split("\n");
          if (arg5) {
            const mapped = map((arg0) => "  " + arg0);
            const joined = mapped.join("\n");
            substr = joined.slice(2);
          } else {
            const mapped1 = map((arg0) => "   " + arg0);
            substr = `
    ${obj2.join("\n")}`;
          }
          tmp10 = substr;
        }
        stylizeResult2 = tmp10;
      } else {
        stylizeResult2 = stylize.stylize("[Circular]", "special");
      }
      stylizeResult1 = stylizeResult2;
    }
    if (undefined === text) {
      if (arg5) {
        if (str.match(/^\d+$/)) {
          return stylizeResult1;
        }
      }
      const _JSON = JSON;
      const str12 = JSON.stringify("" + str);
      if (str12.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        text = stylize.stylize(str12.slice(1, str12.length - 1), "name");
      } else {
        const str14 = str12.replace(/'/g, "\\'");
        const str16 = str14.replace(/\\"/g, "\"");
        text = stylize.stylize(str16.replace(/(^"|"$)/g, "'"), "string");
      }
    }
    return text + ": " + stylizeResult1;
  }
  function inspect(arg0, arg1) {
  
  }
  c2 = "(index)";
  c3 = 1;
  let c4 = 2;
  let c5 = 3;
  metroRequire = [];
  let _console1 = _window2.console;
  if (_window2.nativeLoggingHook) {
    let obj = {
      time: stub,
      timeEnd: stub,
      timeStamp: stub,
      count: stub,
      countReset: stub,
      createTask: consoleCreateTaskStub,
      error: error2,
      info: error2,
      log: error2,
      warn: error2,
      trace: error2,
      debug: error2,
      table: function consoleTablePolyfill(arr, arg1) {
          let arr2;
          let items;
          let items3;
          let length;
          const f133429 = (item, index) => {
            let c0 = " ";
            const applyResult = Array.apply(null, Array(items3[index] - item.length));
            const mapped = applyResult.map(() => c0);
            return item + mapped.join("");
          };
          if (Array.isArray(arr)) {
            let mapped = arr.map((item, index) => {
              const obj = { [closure_1_2]: String(index) };
              const merged = Object.assign(obj, item);
              return obj;
            });
            items = mapped;
            arr2 = mapped;
          } else {
            items = [];
            let tmp2 = arr;
            arr2 = items;
            let keys = Object.keys();
            if (keys !== undefined) {
              arr2 = items;
              let tmp4 = keys[tmp];
              while (tmp4 !== undefined) {
                if (!arr.hasOwnProperty(tmp4)) {
                  continue;
                } else {
                  let obj = {};
                  obj[items3] = tmp4;
                  let _Object = Object;
                  let merged = Object.assign(obj, arr[tmp4]);
                  arr = items.push(obj);
                  continue;
                }
                continue;
              }
            }
          }
          if (0 !== arr2.length) {
            let combined;
            const _Array = Array;
            if (Array.isArray(arg1)) {
              const items1 = [items3];
              combined = items1.concat(arg1);
            } else {
              const _Array2 = Array;
              const _Set = Set;
              const self = this;
              const self2 = this;
              const reduce = arr2.reduce;
              set = new Set();
              combined = from(reduce((arg0, arg1) => {
                set = arg0;
                const keys = Object.keys(arg1);
                const item = keys.forEach((item) => set.add(item));
                return arg0;
              }, set));
            }
            const items2 = [];
            items3 = [];
            let item = combined.forEach((item, index) => {
              let num;
              items3[index] = item.length;
              for (let num = 0; num < items.length; num = num + 1) {
                let str;
                let obj = items[num];
                if (item === c2) {
                  str = obj[item];
                } else {
                  str = "";
                  if (obj.hasOwnProperty(item)) {
                    let tmp3 = obj[item];
                    let tmp4 = typeof tmp3;
                    str = "\u0192";
                    if ("function" !== tmp4) {
                      if ("string" === tmp4) {
                        str = `${"'" + tmp3}'`;
                      } else if ("object" === tmp4) {
                        let str2 = "{\u2026}";
                        if (null == tmp3) {
                          str2 = "null";
                        }
                        str = str2;
                      } else {
                        let _String = String;
                        str = String(tmp3);
                      }
                    }
                  }
                }
                items2[num] = items2[num] || [];
                items2[num][index] = str;
                let _Math = Math;
                items3[index] = Math.max(items3[index], str.length);
              }
            });
            const mapped1 = items3.map((item) => {
              let c0 = "-";
              const applyResult = Array.apply(null, Array(item));
              const mapped = applyResult.map(() => c0);
              return mapped.join("");
            });
            const mapped2 = mapped1.map(f133429);
            let str2 = " | ";
            const text = `| ${obj2.join(" | ")}`;
            const mapped3 = combined.map(f133429);
            const items4 = [`| ${obj3.join(" | ")} |`, `${`| ${obj2.join(" | ")}`} |`];
            const num = 1;
            let num2 = 0;
            if (0 < arr2.length) {
              do {
                let arr9 = items2[num2];
                let push = items4.push;
                let mapped4 = arr9.map(f133429);
                let arr3 = push("| " + mapped4.join(" | ") + " |");
                num2 = num2 + 1;
                length = arr2.length;
              } while (num2 < length);
            }
            items.nativeLoggingHook(`
          ${arr8.join("\n")}`, c3);
          } else {
            let str = "";
            items.nativeLoggingHook("", c3);
          }
        },
      group: function consoleGroupPolyfill(arg0) {
          let str = arg0;
          const nativeLoggingHook = _window2.nativeLoggingHook;
          const text = `${closure_6.join("")}┐`;
          if (!arg0) {
            str = "";
          }
          nativeLoggingHook(`${tmp2} ${str}`, c3);
          closure_6.push("\u2502");
        },
      groupEnd: function consoleGroupEndPolyfill() {
          closure_6.pop();
          _window2.nativeLoggingHook(`${closure_6.join("")}┘ `, c3);
        },
      groupCollapsed: function consoleGroupCollapsedPolyfill(arg0) {
          let str = arg0;
          const nativeLoggingHook = _window2.nativeLoggingHook;
          const text = `${closure_6.join("")}┘`;
          if (!arg0) {
            str = "";
          }
          nativeLoggingHook(`${tmp2} ${str}`, c3);
          closure_6.push("\u2502");
        },
      assert: function consoleAssertPolyfill(arg0, arg1) {
          const tmp = arg0;
          if (!tmp) {
            _window2.nativeLoggingHook(`Assertion failed: ${arg1}`, c5);
          }
        }
    };
    let tmp6 = null;
    if (_console1 == null) {
      _console1 = {};
    }
    let tmp7 = obj;
    let tmp8 = _console1;
    let merged = Object.assign(_console1);
    let c0 = 0;
    _window2.console = obj;
    let flag = true;
    if (true === _window2.RN$useAlwaysAvailableJSErrorHandling) {
      let _console2 = console;
      let _console3 = console;
      console.error = function() {
        let stylize;
        const items = [...arguments];
        error.apply(this, items);
        if (false !== console.reportErrorsAsExceptions) {
          let result;
          if (_window2.RN$inExceptionHandler != null) {
            result = RN$inExceptionHandler();
          }
          if (!result) {
            const first = items[0];
            let stack;
            if (first != null) {
              stack = first.stack;
            }
            let tmp4 = first;
            if (!stack) {
              const mapped = items.map((item) => {
                let replaced = item;
                if (typeof item !== "string") {
                  if (typeof inspect === "function") {
                    const obj = { seen: [], formatValueCalls: 0, stylize };
                    const str = closure_1(obj, item, 10);
                    replaced = str.replace(/\n\s*/g, " ");
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                return replaced;
              });
              let str = " ";
              const _Error = Error;
              const self = this;
              const self2 = this;
              error = new Error(mapped.join(" "));
              error.name = "console.error";
              tmp4 = error;
            }
            const result1 = _window2.RN$handleException(tmp4, false, false);
          }
        }
      };
    }
    let _Object2 = Object;
    let _console4 = console;
    let str3 = "_isPolyfilled";
    let definePropertyResult = Object.defineProperty(console, "_isPolyfilled", { value: true, enumerable: false });
  } else if (!_console1) {
    let tmp4 = _window2.print || stub;
    metroImportAll = tmp4;
    let obj2 = {
      debug: tmp4,
      error: tmp4,
      info: tmp4,
      log: tmp4,
      trace: tmp4,
      warn: tmp4,
      assert(arg0, arg1) {
          const tmp = arg0;
          if (!tmp) {
            closure_8(`Assertion failed: ${arg1}`);
          }
        },
      clear: stub,
      count: stub,
      countReset: stub,
      dir: stub,
      dirxml: stub,
      group: stub,
      groupCollapsed: stub,
      groupEnd: stub,
      profile: stub,
      profileEnd: stub,
      table: stub,
      time: stub,
      timeEnd: stub,
      timeStamp: stub,
      createTask: consoleCreateTaskStub
    };
    _window2.console = obj2;
    let _Object = Object;
    let _console = console;
    let str2 = "_isPolyfilled";
    let definePropertyResult1 = Object.defineProperty(console, "_isPolyfilled", { value: true, enumerable: false });
  }
  if (typeof globalThis !== "undefined") {
    self = globalThis;
  } else {
    const _global3 = global;
    if (typeof global !== "undefined") {
      self = global;
    } else {
      let _window5 = window;
      if (typeof window !== "undefined") {
        self = window;
      }
    }
  }
  let React = 0;
  map = true === self.RN$useAlwaysAvailableJSErrorHandling ? self.RN$handleException : ((arg0, arg1) => {
    throw arg0;
  });
  let obj3 = {
    setGlobalHandler(arg0) {
      closure_1 = arg0;
    },
    getGlobalHandler() {
      return closure_1;
    },
    reportError(arg0) {
      if (closure_1) {
        tmp(arg0, false);
      }
    },
    reportFatalError(arg0) {
      if (closure_1) {
        tmp(arg0, true);
      }
    },
    applyWithGuard(apply, self, items, arg3, arg4) {
      try {
        closure_0 = closure_0 + 1;
        closure_0 = closure_0 - 1;
        return apply.apply(self, items);
      } catch (tmp6) {
        closure_0 = closure_0 - 1;
        throw tmp6;
      }
    },
    applyWithGuardIfNeeded(apply, self, items) {
      let applyResult;
      if (obj3.inGuard()) {
        applyResult = apply.apply(self, items);
      } else {
        obj3.applyWithGuard(apply, self, items);
        applyResult = null;
      }
      return applyResult;
    },
    inGuard() {
      return closure_0;
    },
    guard(name, arg1, arg2) {
      closure_0 = name;
      closure_1 = arg2;
      if (typeof name !== "function") {
        const _console = console;
        console.warn("A function must be passed to ErrorUtils.guard, got ", name);
        return null;
      } else {
        let str = arg1;
        if (arg1 == null) {
          str = name.name;
        }
        if (str == null) {
          str = "<generated guard>";
        }
        return function guarded() {
          const items = [...arguments];
          let self = closure_1;
          const applyWithGuard = obj3.applyWithGuard;
          if (closure_1 == null) {
            self = this;
          }
          return applyWithGuard(name, self, items, null, str);
        };
      }
    }
  };
  self.ErrorUtils = obj3;
  // Metro registry: 18180 module registrations omitted (each __d(factory, id, deps) wires a module rendered above)
  __r(119);
  return __r(0);
}

function crc32(arg0, arg1, arg2, arg3) {
  let sum1 = arg3;
  const sum = arg3 + arg2;
  let tmp4 = arg0 ^ -1;
  let tmp5 = tmp4;
  if (arg3 < sum) {
    do {
      tmp4 = tmp4 >>> 8 ^ tmp2[255 & (tmp4 ^ arg1[sum1])];
      sum1 = sum1 + 1;
      tmp5 = tmp4;
    } while (sum1 < sum);
  }
  return ~tmp5;
}

function isoStop(blobReachResult, bellReachResult) {
  let num = 1;
  if (bellReachResult > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(1, Math.max(0, blobReachResult / bellReachResult));
  }
  return num;
}

function then() {
}

function f83366(arg0, arg1, str) {
  if (typeof str !== "string") {
    ({ length: closure_1_0.minimumSignificantDigits, length: closure_1_0.maximumSignificantDigits } = arg1);
  } else if ("+" === str) {
    closure_1_0.minimumSignificantDigits = arg1.length;
  } else if ("#" === arg1[0]) {
    closure_1_0.maximumSignificantDigits = arg1.length;
  } else {
    closure_1_0.minimumSignificantDigits = arg1.length;
    let num = 0;
    const length = arg1.length;
    if (typeof "#" === "string") {
      num = str.length;
    }
    closure_1_0.maximumSignificantDigits = length + num;
  }
  return "";
}

function f83368(arg0, arg1) {
  let obj;
  const __assign = closure_1_0(closure_1_1[1]).__assign;
  closure_1_0(closure_1_1[1]);
  closure_1_0(closure_1_1[1]);
  switch (arg1) {
    case "sign-auto":
    {
      obj = { signDisplay: "auto" } || {};
      return __assign(tmp3, obj);
    }
    case "sign-accounting":
    {
      obj = { currencySign: "accounting" };
      break;
    }
    case "()":
    {
      obj = { currencySign: "accounting" };
      break;
    }
    case "sign-always":
    {
      obj = { signDisplay: "always" };
      break;
    }
    case "+!":
    {
      obj = { signDisplay: "always" };
      break;
    }
    case "sign-accounting-always":
    {
      obj = { signDisplay: "always", currencySign: "accounting" };
      break;
    }
    case "()!":
    {
      obj = { signDisplay: "always", currencySign: "accounting" };
      break;
    }
    case "sign-except-zero":
    {
      obj = { signDisplay: "exceptZero" };
      break;
    }
    case "+?":
    {
      obj = { signDisplay: "exceptZero" };
      break;
    }
    case "sign-accounting-except-zero":
    {
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
      break;
    }
    case "()?":
    {
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
      break;
    }
    case "sign-never":
    {
      obj = { signDisplay: "never" };
      break;
    }
    case "+_":
    {
      obj = { signDisplay: "never" };
      break;
    }
  }
}

function f83369(arg0, arg1) {
  let obj;
  const __assign = closure_1_0(closure_1_1[1]).__assign;
  closure_1_0(closure_1_1[1]);
  closure_1_0(closure_1_1[1]);
  switch (arg1) {
    case "sign-auto":
    {
      obj = { signDisplay: "auto" } || {};
      return __assign(tmp3, obj);
    }
    case "sign-accounting":
    {
      obj = { currencySign: "accounting" };
      break;
    }
    case "()":
    {
      obj = { currencySign: "accounting" };
      break;
    }
    case "sign-always":
    {
      obj = { signDisplay: "always" };
      break;
    }
    case "+!":
    {
      obj = { signDisplay: "always" };
      break;
    }
    case "sign-accounting-always":
    {
      obj = { signDisplay: "always", currencySign: "accounting" };
      break;
    }
    case "()!":
    {
      obj = { signDisplay: "always", currencySign: "accounting" };
      break;
    }
    case "sign-except-zero":
    {
      obj = { signDisplay: "exceptZero" };
      break;
    }
    case "+?":
    {
      obj = { signDisplay: "exceptZero" };
      break;
    }
    case "sign-accounting-except-zero":
    {
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
      break;
    }
    case "()?":
    {
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
      break;
    }
    case "sign-never":
    {
      obj = { signDisplay: "never" };
      break;
    }
    case "+_":
    {
      obj = { signDisplay: "never" };
      break;
    }
  }
}

function f83370(arg0, arg1, arg2, arg3, arg4, arg5) {
  const tmp = arg1;
  if (tmp) {
    closure_1_0.minimumIntegerDigits = arg2.length;
  } else {
    const tmp2 = arg3;
    if (tmp2) {
      const tmp3 = arg4;
      if (tmp3) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("We currently do not support maximum integer digits");
        throw error;
      }
    }
    const tmp4 = arg5;
    if (tmp4) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("We currently do not support exact integer digits");
      throw error1;
    }
  }
  return "";
}

function f83371(arg0, arg1, arg2, arg3, arg4, arg5) {
  if ("*" === arg2) {
    closure_1_0.minimumFractionDigits = arg1.length;
  } else {
    const tmp = arg3;
    if (tmp) {
      if ("#" === arg3[0]) {
        closure_1_0.maximumFractionDigits = arg3.length;
      }
    }
    const tmp2 = arg4;
    if (tmp2) {
      const tmp3 = arg5;
      if (tmp3) {
        closure_1_0.minimumFractionDigits = arg4.length;
        closure_1_0.maximumFractionDigits = arg4.length + arg5.length;
      }
    }
    ({ length: closure_1_0.minimumFractionDigits, length: closure_1_0.maximumFractionDigits } = arg1);
  }
  return "";
}

function update(arg0, arg1, arg2, arg3) {
  let tmp = arg0;
  let num = 0;
  let tmp2 = arg0;
  if (0 < arg3) {
    do {
      tmp = closure_1_3.table[255 & (tmp ^ arg1[arg2 + num])] ^ tmp >>> 8;
      num = num + 1;
      tmp2 = tmp;
    } while (num < arg3);
  }
  return tmp2;
}

function crc(uint8Array, sum48, sum13) {
  return 4294967295 ^ closure_1_3.update(4294967295, uint8Array, sum48, sum13);
}

function multVec(items, items1) {
  items = [, , , ];
  items[0] = items[0] * items1[0] + items[1] * items1[1] + items[2] * items1[2] + items[3] * items1[3];
  items[1] = items[4] * items1[0] + items[5] * items1[1] + items[6] * items1[2] + items[7] * items1[3];
  items[2] = items[8] * items1[0] + items[9] * items1[1] + items[10] * items1[2] + items[11] * items1[3];
  items[3] = items[12] * items1[0] + items[13] * items1[1] + items[14] * items1[2] + items[15] * items1[3];
  return items;
}

function dot(multVecResult, items2) {
  return multVecResult[0] * items2[0] + multVecResult[1] * items2[1] + multVecResult[2] * items2[2] + multVecResult[3] * items2[3];
}

function sml(arg0, items2) {
  const items = [arg0 * items2[0], arg0 * items2[1], arg0 * items2[2], arg0 * items2[3]];
  return items;
}

function encode(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  let num = arg3;
  if (null == arg3) {
    num = 0;
  }
  let flag = arg6;
  if (null == arg6) {
    flag = false;
  }
  const items = [false, false, false, 0, flag, false];
  const tmp = closure_1_7(arg0, arg1, arg2, num, items);
  closure_1_6(tmp, -1);
  return closure_1_5(tmp, arg1, arg2, arg4, arg5);
}

function encodeLL(arg0, width, height, arg3, arg4, depth, arg6, arg7) {
  let length;
  let size;
  let uint8Array;
  let num = 2;
  if (1 == arg3) {
    num = 0;
  }
  let num2 = 4;
  if (0 == arg4) {
    num2 = 0;
  }
  const obj = { ctype: num + num2, depth, frames: [] };
  const timestamp = Date.now();
  const result = (arg3 + arg4) * depth;
  let num3 = 0;
  if (0 < arg0.length) {
    do {
      let frames = obj.frames;
      let obj2 = { rect: size, img: uint8Array, blend: 0, dispose: 1, bpp: Math.ceil(result / 8), bpl: Math.ceil(tmp3 / 8) };
      size = { x: 0, y: 0, width, height };
      let _Uint8Array = Uint8Array;
      let self = this;
      let self2 = this;
      let push = frames.push;
      uint8Array = new Uint8Array(arg0[num3]);
      let _Math = Math;
      let _Math2 = Math;
      let arr = push(obj2);
      num3 = num3 + 1;
      length = arg0.length;
    } while (num3 < length);
  }
  closure_1_6(obj, 0, true);
  return closure_1_5(obj, width, height, arg6, arg7);
}

function bellReach(bound) {
  let num = 0;
  if (bound < closure_1_0) {
    const _Math = Math;
    num = 1 - Math.sqrt(bound / tmp);
  }
  return num;
}

function blobReach(peak, radius, bound) {
  let num = 0;
  if (bound < peak) {
    const _Math = Math;
    const _Math2 = Math;
    num = radius * Math.sqrt(Math.log(peak / bound));
  }
  return num;
}