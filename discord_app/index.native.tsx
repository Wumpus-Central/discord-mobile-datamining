// === Module 0: Discord ===

// Module 0 (Discord)
import obj132 from "obj132" /* 2 */;
import serialize from "serialize" /* 9 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import isTTITest from "isTTITest" /* 13766 */;
import installSystrace from "installSystrace" /* 13767 */;
import module_1 from "module_1" /* 1 */;
import createFastConnectSocket from "createFastConnectSocket" /* 15 */;
import toLocaleLowerCase from "toLocaleLowerCase" /* 13572 */;
import module_16 from "module_16" /* 16 */;
import module_1208 from "module_1208" /* 1208 */;

let GenerateInvite = require;
let f17202 = dependencyMap;
const polyfillsEnd = serialize.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = serialize.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = get_ActivityIndicator.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17202[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17202[10]).default("Main", () => {
    closure_1_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17202[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17202[10]).default("Share", () => closure_1_3(...closure_0));
});
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("TTITestAction", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
GenerateInvite = "GenerateInvite";
f17202 = () => GenerateInvite(f17202[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17202[12]).default;
  return (arg0) => callback(callback, closure_1_1, arg0);
});
const result = obj132.fileFinishedImporting("index.native.tsx");

// === Orphan Functions ===

function global(framebus) {
  let __BUNDLE_START_TIME__;
  let __DEV__;
  let process;
  let __METRO_GLOBAL_PREFIX__;
  if (globalThis.nativePerformanceNow) {
    let nativePerformanceNowResult = globalThis.nativePerformanceNow();
  } else {
    let _Date = Date;
    nativePerformanceNowResult = Date.now();
  }
  globalThis.__BUNDLE_START_TIME__ = nativePerformanceNowResult;
  globalThis.__DEV__ = false;
  globalThis.process = process || {};
  globalThis.__METRO_GLOBAL_PREFIX__ = "";
  if (!env) {
    env = {};
  }
  process.env = env;
  let str = process.env.NODE_ENV;
  if (!str) {
    str = "production";
  }
  let self = this;
  process.env.NODE_ENV = str;
  if (typeof globalThis !== "undefined") {
    let _window = globalThis;
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
  c0 = _window;
  function metroRequire(id) {
    if (null === id) {
      const _Error = Error;
      error = new Error("Cannot find module");
      throw error;
    } else {
      const value = store.get(id);
      if (value) {
        if (value.isInitialized) {
          let _exports = value.publicModule.exports;
        }
        return _exports;
      }
      _exports = (function loadModuleImplementation(id, value) {
        if (!value) {
          if (length.length > 0) {
            let num2 = map.get(id);
            if (num2 == null) {
              num2 = 0;
            }
            if (null != tmp8[num2]) {
              tmp10(id);
              value = __timingFunctionResult.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        if (!value) {
          if (nativeRequire) {
            const tmp17 = callback(id);
            nativeRequire(tmp17.localId, tmp17.segmentId);
            value = __timingFunctionResult.get(id);
          }
        }
        if (value) {
          if (value.hasError) {
            throw value.error;
          } else {
            value.isInitialized = true;
            const dependencyMap = value.dependencyMap;
            __timingFunction = tmp14.__timingFunction;
            __timingFunctionResult = __timingFunction();
            if (false === c3) {
              c3 = true;
              tmp14.__getTotalRequireTime = () => closure_2 + (__timingFunction() - closure_1);
            }
            try {
              const publicModule = value.publicModule;
              publicModule.id = id;
              tmp20(tmp14, closure_6, closure_7, closure_8, publicModule, publicModule.exports, dependencyMap);
              value.factory = undefined;
              value.dependencyMap = undefined;
              if (tmp22) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                tmp14.__getTotalRequireTime = () => closure_2;
              }
              return publicModule.exports;
            } catch (tmp32) {
              if (tmp6) {
                c3 = tmp3;
                closure_2 = closure_2 + (tmp5() - tmp4);
                tmp.__getTotalRequireTime = () => closure_2;
              }
              throw tmp32;
            }
          }
        } else {
          throw (function unknownModuleError(id) {
            return Error("Requiring unknown module \"" + id + "\".");
          })(id);
        }
      })(id, value);
    }
  }
  closure_6 = metroRequire;
  function metroImportDefault(id) {
    let value = store.get(id);
    if (value) {
      if (value.importedDefault !== c4) {
        return value.importedDefault;
      }
    }
    if (null === id) {
      const _Error = Error;
      error = new Error("Cannot find module");
      throw error;
    } else {
      value = store.get(id);
      if (value) {
        if (value.isInitialized) {
          let _exports = value.publicModule.exports;
        }
        let _default = _exports;
        if (_exports) {
          _default = _exports;
          if (_exports.__esModule) {
            _default = _exports.default;
          }
        }
        store.get(id).importedDefault = _default;
        return _default;
      }
      _exports = (function loadModuleImplementation(id, value) {
        if (!value) {
          if (length.length > 0) {
            let num2 = map.get(id);
            if (num2 == null) {
              num2 = 0;
            }
            if (null != tmp8[num2]) {
              tmp10(id);
              value = __timingFunctionResult.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        if (!value) {
          if (nativeRequire) {
            const tmp17 = callback(id);
            nativeRequire(tmp17.localId, tmp17.segmentId);
            value = __timingFunctionResult.get(id);
          }
        }
        if (value) {
          if (value.hasError) {
            throw value.error;
          } else {
            value.isInitialized = true;
            const dependencyMap = value.dependencyMap;
            __timingFunction = tmp14.__timingFunction;
            __timingFunctionResult = __timingFunction();
            if (false === c3) {
              c3 = true;
              tmp14.__getTotalRequireTime = () => closure_2 + (__timingFunction() - closure_1);
            }
            try {
              const publicModule = value.publicModule;
              publicModule.id = id;
              tmp20(tmp14, closure_6, closure_7, closure_8, publicModule, publicModule.exports, dependencyMap);
              value.factory = undefined;
              value.dependencyMap = undefined;
              if (tmp22) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                tmp14.__getTotalRequireTime = () => closure_2;
              }
              return publicModule.exports;
            } catch (tmp32) {
              if (tmp6) {
                c3 = tmp3;
                closure_2 = closure_2 + (tmp5() - tmp4);
                tmp.__getTotalRequireTime = () => closure_2;
              }
              throw tmp32;
            }
          }
        } else {
          throw (function unknownModuleError(id) {
            return Error("Requiring unknown module \"" + id + "\".");
          })(id);
        }
      })(id, value);
    }
  }
  let error = metroImportDefault;
  function metroImportAll(id) {
    let value = store.get(id);
    if (value) {
      if (value.importedAll !== c4) {
        return value.importedAll;
      }
    }
    if (null === id) {
      const _Error = Error;
      error = new Error("Cannot find module");
      throw error;
    } else {
      value = store.get(id);
      if (value) {
        if (value.isInitialized) {
          let _exports = value.publicModule.exports;
        }
        if (!_exports) {
          const obj = {};
          if (_exports) {
            for (const key10017 in _exports) {
              let call = v3.call;
              if (typeof call === "unknown") {
                let callResult = v3(key10017);
              } else {
                callResult = call(_exports, key10017);
              }
              if (!callResult) {
                continue;
              } else {
                obj[key10017] = _exports[key10017];
                continue;
              }
              continue;
            }
          }
          obj.default = _exports;
          let tmp3 = obj;
        } else {
          tmp3 = _exports;
        }
        store.get(id).importedAll = tmp3;
        return tmp3;
      }
      _exports = (function loadModuleImplementation(id, value) {
        if (!value) {
          if (length.length > 0) {
            let num2 = map.get(id);
            if (num2 == null) {
              num2 = 0;
            }
            if (null != tmp8[num2]) {
              tmp10(id);
              value = __timingFunctionResult.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        if (!value) {
          if (nativeRequire) {
            const tmp17 = callback(id);
            nativeRequire(tmp17.localId, tmp17.segmentId);
            value = __timingFunctionResult.get(id);
          }
        }
        if (value) {
          if (value.hasError) {
            throw value.error;
          } else {
            value.isInitialized = true;
            const dependencyMap = value.dependencyMap;
            __timingFunction = tmp14.__timingFunction;
            __timingFunctionResult = __timingFunction();
            if (false === c3) {
              c3 = true;
              tmp14.__getTotalRequireTime = () => closure_2 + (__timingFunction() - closure_1);
            }
            try {
              const publicModule = value.publicModule;
              publicModule.id = id;
              tmp20(tmp14, closure_6, closure_7, closure_8, publicModule, publicModule.exports, dependencyMap);
              value.factory = undefined;
              value.dependencyMap = undefined;
              if (tmp22) {
                c3 = false;
                closure_2 = closure_2 + (__timingFunction() - __timingFunctionResult);
                tmp14.__getTotalRequireTime = () => closure_2;
              }
              return publicModule.exports;
            } catch (tmp32) {
              if (tmp6) {
                c3 = tmp3;
                closure_2 = closure_2 + (tmp5() - tmp4);
                tmp.__getTotalRequireTime = () => closure_2;
              }
              throw tmp32;
            }
          }
        } else {
          throw (function unknownModuleError(id) {
            return Error("Requiring unknown module \"" + id + "\".");
          })(id);
        }
      })(id, value);
    }
  }
  closure_8 = metroImportAll;
  function unpackModuleId(arg0) {
    return { segmentId: arg0 >>> c9, localId: arg0 & c10 };
  }
  _window.__r = metroRequire;
  _window["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__d"] = function define(arg0, arg1, arg2) {
    if (!store.has(arg1)) {
      let obj = { dependencyMap: null, factory: null, hasError: false, importedAll: null, importedDefault: null, isInitialized: false, publicModule: null };
      obj[0] = arg2;
      obj[1] = arg0;
      obj[3] = c4;
      obj[4] = c4;
      obj = { exports: null };
      obj[0] = {};
      obj[6] = obj;
      const result = store.set(arg1, obj);
    }
  };
  _window.__c = function clear() {
    const map = new Map();
    return map;
  };
  _window.__registerSegment = function registerSegment(arg0, arg1, arr) {
    closure_0 = arg0;
    closure_12[arg0] = arg1;
    if (arr) {
      const item = arr.forEach((item, index) => {
        let hasItem = closure_1_1.has(item);
        if (!hasItem) {
          hasItem = map1.has(item);
        }
        if (!hasItem) {
          const result = map1.set(item, closure_0);
        }
      });
    }
  };
  closure_1 = new Map();
  let obj1 = 0;
  c3 = false;
  _window.__timingFunction = () => Date.now();
  _window.__getTotalRequireTime = () => obj1;
  c4 = {};
  let hasOwnProperty = {}.hasOwnProperty;
  metroRequire.importDefault = metroImportDefault;
  metroRequire.importAll = metroImportAll;
  metroRequire.context = function fallbackRequireContext() {
    error = new Error("The experimental Metro feature `require.context` is not enabled in your project.");
    throw error;
  };
  metroRequire.resolveWeak = function fallbackRequireResolveWeak() {
    error = new Error("require.resolveWeak cannot be called dynamically.");
    throw error;
  };
  c9 = 16;
  c10 = 65535;
  metroRequire.unpackModuleId = unpackModuleId;
  metroRequire.packModuleId = function packModuleId(segmentId) {
    return (segmentId.segmentId << c9) + segmentId.localId;
  };
  closure_12 = [];
  let map1 = new Map();
  if (typeof globalThis !== "undefined") {
    let _window2 = globalThis;
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
  c0 = function stylizeNoColor(arg0, arg1) {
    return arg0;
  };
  closure_1 = function inspect(arg0, arg1) {
  
  };
  obj1 = "(index)";
  c3 = 1;
  c4 = 2;
  hasOwnProperty = 3;
  closure_6 = [];
  let _console = _window2.console;
  if (_window2.nativeLoggingHook) {
    let obj = { time: null, timeEnd: null, timeStamp: null, count: null, countReset: null, createTask: null };
    obj[0] = stub;
    obj[1] = stub;
    obj[2] = stub;
    obj[3] = stub;
    obj[4] = stub;
    obj[5] = consoleCreateTaskStub;
    if (_console == null) {
      _console = {};
    }
    let merged = Object.assign(_console);
    obj.error = () => {
      if (1 === arguments.length) {
        if (typeof arguments[0] === "string") {
          let first = arguments[0];
        }
        const first1 = arguments[0];
        let tmp4 = v0;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= c5;
        }
        if (tmp5) {
          tmp4 = c4;
        }
        let text1 = first;
        if (arr.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        v0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof callback !== "function") {
          HermesBuiltin.throwTypeError();
        }
        return callback({ seen: [], formatValueCalls: 0, stylize: closure_0 }, arg0, 10);
      };
      if (typeof call === "unknown") {
        let mapped = map(fn);
      } else {
        mapped = call(arguments, fn);
      }
      first = mapped.join(", ");
    };
    obj.info = () => {
      if (1 === arguments.length) {
        if (typeof arguments[0] === "string") {
          let first = arguments[0];
        }
        const first1 = arguments[0];
        let tmp4 = v0;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= c5;
        }
        if (tmp5) {
          tmp4 = c4;
        }
        let text1 = first;
        if (arr.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        v0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof callback !== "function") {
          HermesBuiltin.throwTypeError();
        }
        return callback({ seen: [], formatValueCalls: 0, stylize: closure_0 }, arg0, 10);
      };
      if (typeof call === "unknown") {
        let mapped = map(fn);
      } else {
        mapped = call(arguments, fn);
      }
      first = mapped.join(", ");
    };
    obj.log = () => {
      if (1 === arguments.length) {
        if (typeof arguments[0] === "string") {
          let first = arguments[0];
        }
        const first1 = arguments[0];
        let tmp4 = v0;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= c5;
        }
        if (tmp5) {
          tmp4 = c4;
        }
        let text1 = first;
        if (arr.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        v0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof callback !== "function") {
          HermesBuiltin.throwTypeError();
        }
        return callback({ seen: [], formatValueCalls: 0, stylize: closure_0 }, arg0, 10);
      };
      if (typeof call === "unknown") {
        let mapped = map(fn);
      } else {
        mapped = call(arguments, fn);
      }
      first = mapped.join(", ");
    };
    obj.warn = () => {
      if (1 === arguments.length) {
        if (typeof arguments[0] === "string") {
          let first = arguments[0];
        }
        const first1 = arguments[0];
        let tmp4 = v0;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= c5;
        }
        if (tmp5) {
          tmp4 = c4;
        }
        let text1 = first;
        if (arr.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        v0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof callback !== "function") {
          HermesBuiltin.throwTypeError();
        }
        return callback({ seen: [], formatValueCalls: 0, stylize: closure_0 }, arg0, 10);
      };
      if (typeof call === "unknown") {
        let mapped = map(fn);
      } else {
        mapped = call(arguments, fn);
      }
      first = mapped.join(", ");
    };
    obj.trace = () => {
      if (1 === arguments.length) {
        if (typeof arguments[0] === "string") {
          let first = arguments[0];
        }
        const first1 = arguments[0];
        let tmp4 = v0;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= c5;
        }
        if (tmp5) {
          tmp4 = c4;
        }
        let text1 = first;
        if (arr.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        v0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof callback !== "function") {
          HermesBuiltin.throwTypeError();
        }
        return callback({ seen: [], formatValueCalls: 0, stylize: closure_0 }, arg0, 10);
      };
      if (typeof call === "unknown") {
        let mapped = map(fn);
      } else {
        mapped = call(arguments, fn);
      }
      first = mapped.join(", ");
    };
    c0 = 0;
    obj.debug = () => {
      if (1 === arguments.length) {
        if (typeof arguments[0] === "string") {
          let first = arguments[0];
        }
        const first1 = arguments[0];
        let tmp4 = v0;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= c5;
        }
        if (tmp5) {
          tmp4 = c4;
        }
        let text1 = first;
        if (arr.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        v0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof callback !== "function") {
          HermesBuiltin.throwTypeError();
        }
        return callback({ seen: [], formatValueCalls: 0, stylize: closure_0 }, arg0, 10);
      };
      if (typeof call === "unknown") {
        let mapped = map(fn);
      } else {
        mapped = call(arguments, fn);
      }
      first = mapped.join(", ");
    };
    obj.table = function consoleTablePolyfill(arr) {
      let length;
      if (Array.isArray(arr)) {
        let mapped = arr.map((item, index) => {
          const obj = { [closure_2]: String(index) };
          const merged = Object.assign(obj, item);
          return obj;
        });
        let items = mapped;
        let arr2 = mapped;
      } else {
        items = [];
        arr2 = items;
        let keys = Object.keys();
        if (keys !== undefined) {
          arr2 = items;
          while (keys[tmp] !== undefined) {
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
        const _Array = Array;
        if (Array.isArray(arg1)) {
          const items1 = [items3];
          let combined = items1.concat(arg1);
        } else {
          const _Array2 = Array;
          const _Set = Set;
          const set = new Set();
          combined = Array.from(arr2.reduce((acc, item, index) => {
            closure_0 = acc;
            const keys = Object.keys(item);
            item = keys.forEach((item, index) => acc.add(item));
            return acc;
          }, set));
        }
        const items2 = [];
        items3 = [];
        let item = combined.forEach((item, index) => {
          items3[index] = item.length;
          for (let num = 0; num < items.length; num = num + 1) {
            let obj = items[num];
            if (item === items3) {
              let str = obj[item];
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
        const mapped1 = items3.map((item, index) => {
          c0 = "-";
          const mapped = Array.apply(null, Array(item)).map((item, index) => c0);
          return mapped.join("");
        });
        const mapped2 = mapped1.map((item, index) => {
          c0 = " ";
          const mapped = Array.apply(null, Array(items3[index] - item.length)).map((item, index) => c0);
          return item + mapped.join("");
        });
        const text = `| ${obj2.join(" | ")}`;
        const mapped3 = combined.map((item, index) => {
          c0 = " ";
          const mapped = Array.apply(null, Array(items3[index] - item.length)).map((item, index) => c0);
          return item + mapped.join("");
        });
        const items4 = [`| ${obj3.join(" | ")} |`, `${`| ${obj2.join(" | ")}`} |`];
        let num2 = 0;
        if (0 < arr2.length) {
          do {
            let arr9 = items2[num2];
            let mapped4 = arr9.map((item, index) => {
              c0 = " ";
              const mapped = Array.apply(null, Array(items3[index] - item.length)).map((item, index) => c0);
              return item + mapped.join("");
            });
            arr = items4.push("| " + mapped4.join(" | ") + " |");
            num2 = num2 + 1;
            length = arr2.length;
          } while (num2 < length);
        }
        items.nativeLoggingHook(`
      ${arr8.join("\n")}`, c3);
      } else {
        items.nativeLoggingHook("", c3);
      }
    };
    obj.group = function consoleGroupPolyfill(arg0) {
      let str = arg0;
      const text = `${closure_6.join("")}┐`;
      if (!arg0) {
        str = "";
      }
      v0.nativeLoggingHook(`${tmp2} ${str}`, c3);
      arr = arr.push("\u2502");
    };
    obj.groupEnd = function consoleGroupEndPolyfill() {
      v0.nativeLoggingHook(`${closure_6.join("")}┘ `, c3);
    };
    obj.groupCollapsed = function consoleGroupCollapsedPolyfill(arg0) {
      let str = arg0;
      const text = `${closure_6.join("")}┘`;
      if (!arg0) {
        str = "";
      }
      v0.nativeLoggingHook(`${tmp2} ${str}`, c3);
      arr = arr.push("\u2502");
    };
    obj.assert = function consoleAssertPolyfill(arg0, arg1) {
      if (!arg0) {
        v0.nativeLoggingHook(`Assertion failed: ${arg1}`, c5);
      }
    };
    _window2.console = obj;
    if (true === _window2.RN$useAlwaysAvailableJSErrorHandling) {
      let _console2 = console;
      error = console.error;
      let _console3 = console;
      console.error = function() {
        const items = [...arguments];
        error.apply(this, items);
        if (false !== console.reportErrorsAsExceptions) {
          let result;
          if (v0.RN$inExceptionHandler != null) {
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
              if (typeof first !== "string") {
                const mapped = items.map((item, index) => {
                  let replaced = item;
                  if (typeof item !== "string") {
                    if (typeof callback !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const obj = { seen: null, formatValueCalls: 0, stylize: null };
                    obj[0] = [];
                    obj[2] = closure_0;
                    replaced = callback(obj, item, 10).replace(/\n\s*/g, " ");
                    const str = callback(obj, item, 10);
                  }
                  return replaced;
                });
                const _Error = Error;
                error = new Error(mapped.join(" "));
                error.name = "console.error";
                tmp4 = error;
              }
            }
            const result1 = v0.RN$handleException(tmp4, false, false);
          }
        }
      };
    }
    let _Object2 = Object;
    let _console4 = console;
    Object.defineProperty(console, "_isPolyfilled", { value: true, enumerable: false });
  } else if (!_console) {
    closure_8 = tmp4;
    obj = { debug: null, error: null, info: null, log: null, trace: null, warn: null, assert: null, clear: null, count: null, countReset: null, dir: null, dirxml: null, group: null, groupCollapsed: null, groupEnd: null, profile: null, profileEnd: null, table: null, time: null, timeEnd: null, timeStamp: null, createTask: null };
    obj[0] = _window2.print || stub;
    obj[1] = _window2.print || stub;
    obj[2] = _window2.print || stub;
    obj[3] = _window2.print || stub;
    obj[4] = _window2.print || stub;
    obj[5] = _window2.print || stub;
    obj[6] = function assert(arg0, arg1) {
      if (!arg0) {
        callback(`Assertion failed: ${arg1}`);
      }
    };
    obj[7] = stub;
    obj[8] = stub;
    obj[9] = stub;
    obj[10] = stub;
    obj[11] = stub;
    obj[12] = stub;
    obj[13] = stub;
    obj[14] = stub;
    obj[15] = stub;
    obj[16] = stub;
    obj[17] = stub;
    obj[18] = stub;
    obj[19] = stub;
    obj[20] = stub;
    obj[21] = consoleCreateTaskStub;
    _window2.console = obj;
    let _Object = Object;
    _console = console;
    Object.defineProperty(console, "_isPolyfilled", { value: true, enumerable: false });
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
  c0 = 0;
  closure_1 = true === self.RN$useAlwaysAvailableJSErrorHandling ? self.RN$handleException : ((arg0, arg1) => {
    throw arg0;
  });
  obj1 = {
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
    applyWithGuard(closure_0, self, items, arg3, arg4) {
      try {
        v0 = v0 + 1;
        v0 = v0 - 1;
        return v0.apply(self, items);
      } catch (tmp6) {
        v0 = v0 - 1;
        throw tmp6;
      }
    },
    applyWithGuardIfNeeded(apply, self, items) {
      if (obj1.inGuard()) {
        let applyResult = apply.apply(self, items);
      } else {
        obj1.applyWithGuard(apply, self, items);
        applyResult = null;
      }
      return applyResult;
    },
    inGuard() {
      return c0;
    },
    guard(name) {
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
          if (closure_1 == null) {
            self = this;
          }
          return str.applyWithGuard(closure_0, self, items, null, str);
        };
      }
    }
  };
  self.ErrorUtils = obj1;
  // Metro registry: 17157 module registrations omitted (each __d(factory, id, deps) wires a module rendered above)
  __r(119);
  return __r(0);
}

function f21472() {
  class CanvasManagerNoop {
    constructor() {
      tmp = closure_1_7(this, CanvasManagerNoop);
      return;
    }
  }
  const items = [
    {
      key: "reset",
      value: function reset() {
  
      }
    },
    {
      key: "freeze",
      value: function freeze() {
  
      }
    },
    {
      key: "unfreeze",
      value: function unfreeze() {
  
      }
    },
    {
      key: "lock",
      value: function lock() {
  
      }
    },
    {
      key: "unlock",
      value: function unlock() {
  
      }
    },
    {
      key: "snapshot",
      value: function snapshot() {
  
      }
    },
    {
      key: "addWindow",
      value: function addWindow() {
  
      }
    },
    {
      key: "addShadowRoot",
      value: function addShadowRoot() {
  
      }
    },
    {
      key: "resetShadowRoots",
      value: function resetShadowRoots() {
  
      }
    }
  ];
  return closure_8(CanvasManagerNoop, items);
}

function f21473() {
  class StylesheetManager {
    constructor(arg0) {
      tmp = closure_1_7(this, StylesheetManager);
      weakSet = new WeakSet();
      this.trackedLinkElements = weakSet;
      tmp3 = new closure_1_68();
      this.styleMirror = tmp3;
      ({ mutationCb: this.mutationCb, adoptedStyleSheetCb: this.adoptedStyleSheetCb } = arg0);
      return;
    }
  }
  let items = [
    {
      key: "attachLinkElement",
      value: function attachLinkElement(nodeName, attributes) {
        const self = this;
        if ("_cssText" in attributes.attributes) {
          let obj = { adds: null, removes: null, texts: null, attributes: null };
          obj[0] = [];
          obj[1] = [];
          obj[2] = [];
          obj = { id: null, attributes: null };
          ({ id: obj2[0], attributes: obj2[1] } = attributes);
          const items = [obj];
          obj[3] = items;
          self.mutationCb(obj);
        }
        self.trackLinkElement(nodeName);
      }
    },
    {
      key: "trackLinkElement",
      value: function trackLinkElement(nodeName) {
        const self = this;
        const trackedLinkElements = this.trackedLinkElements;
        if (!trackedLinkElements.has(nodeName)) {
          const trackedLinkElements2 = self.trackedLinkElements;
          trackedLinkElements2.add(nodeName);
          const result = self.trackStylesheetInLinkElement(nodeName);
        }
      }
    },
    {
      key: "adoptStyleSheets",
      value: function adoptStyleSheets(adoptedStyleSheets, id) {
        const self = this;
        if (0 !== adoptedStyleSheets.length) {
          let obj = { id: null, styleIds: null };
          obj[0] = id;
          obj[1] = [];
          const items = [];
          const iter = adoptedStyleSheets[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp4 = nextResult;
            ({ styleMirror, styleMirror: styleMirror2 } = self);
            if (styleMirror.has(nextResult)) {
              id = styleMirror2.getId(tmp4);
            } else {
              let addResult = styleMirror2.add(tmp4);
              id = addResult;
              obj = { styleId: null, rules: null };
              obj[0] = addResult;
              let CSSRule = tmp4.rules;
              if (!CSSRule) {
                CSSRule = globalThis.CSSRule;
              }
              obj[1] = Array.from(CSSRule, (arg0, index) => ({ rule: callback(arg0), index }));
              let arr = items.push(obj);
            }
            let styleIds = obj.styleIds;
            arr = styleIds.push(id);
            continue;
          }
          if (items.length > 0) {
            obj.styles = items;
          }
          self.adoptedStyleSheetCb(obj);
        }
      }
    },
    {
      key: "reset",
      value: function reset() {
        const styleMirror = this.styleMirror;
        styleMirror.reset();
        const weakSet = new WeakSet();
        this.trackedLinkElements = weakSet;
      }
    },
    {
      key: "trackStylesheetInLinkElement",
      value: function trackStylesheetInLinkElement(nodeName) {
  
      }
    }
  ];
  return closure_8(StylesheetManager, items);
}

function f21474() {
  class ProcessedNodeManager {
    constructor() {
      tmp = closure_1_7(this, ProcessedNodeManager);
      weakMap = new WeakMap();
      this.nodeMap = weakMap;
      this.active = false;
      return;
    }
  }
  let items = [
    {
      key: "inOtherBuffer",
      value: function inOtherBuffer(childNodes, closure_0) {
        const nodeMap = this.nodeMap;
        const value = nodeMap.get(childNodes);
        let someResult = value;
        if (value) {
          const _Array = Array;
          someResult = Array.from(value).some((item, index) => item !== closure_0);
          const arr = Array.from(value);
        }
        return someResult;
      }
    },
    {
      key: "add",
      value: function add(arg0, arg1) {
        const self = this;
        if (!this.active) {
          self.active = true;
          (function onRequestAnimationFrame(arg0) {
            const items = [...arguments];
            return callback("requestAnimationFrame")(...items);
          })(() => {
            const weakMap = new WeakMap();
            self.nodeMap = weakMap;
            self.active = false;
          });
        }
        ({ nodeMap, nodeMap: nodeMap2 } = self);
        let set = nodeMap2.get(arg0);
        if (!set) {
          const _Set = Set;
          set = new Set();
        }
        const result = nodeMap.set(arg0, set.add(arg1));
      }
    },
    {
      key: "destroy",
      value: function destroy() {
  
      }
    }
  ];
  return closure_8(ProcessedNodeManager, items);
}

function f21475(arg0) {
  return 2 * arg0;
}

function createMirror$2() {
  return new closure_23();
}

function takeFullSnapshot(arg0) {
  if (closure_104) {
    tmp(arg0);
  } else {
    const _Error = Error;
    const error = new Error("please take full snapshot after start recording");
    throw error;
  }
}

function f21478() {
  class ClickDetector {
    constructor(arg0, arg1) {
      tmp = arg2;
      if (arg2 === undefined) {
        tmp = closure_1_110;
      }
      tmp2 = closure_1_7(this, ClickDetector);
      this._lastMutation = 0;
      this._lastScroll = 0;
      this._clicks = [];
      this._timeout = arg1.timeout / 1000;
      this._threshold = arg1.threshold / 1000;
      this._scrollTimeout = arg1.scrollTimeout / 1000;
      this._replay = arg0;
      this._ignoreSelector = arg1.ignoreSelector;
      this._addBreadcrumbEvent = tmp;
      return;
    }
  }
  let obj = {
    key: "addListeners",
    value: function addListeners() {
      const self = this;
      const fn = () => {
        self._lastMutation = Date.now() / 1000;
      };
      let f68834 = fn;
      if (!arr) {
        arr = [];
        f68834(self[8]).fill(f68834(self[8]).GLOBAL_OBJ, "open", (arg0) => {
          closure_0 = arg0;
          return () => {
            const items = [...arguments];
            if (closure_1_111) {
              try {
                const item = closure_1_111.forEach((item, index) => item());
              } catch (err) {
              }
            }
            return callback.apply(callback(self[8]).GLOBAL_OBJ, items);
          };
        });
        const obj = f68834(self[8]);
      }
      arr = arr.push(fn);
      f68834 = (self) => {
  
      };
      this._teardown = () => {
        if (typeof f68834 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let num = -1;
        if (arr) {
          num = arr.indexOf(f68834);
        }
        if (num > -1) {
          arr.splice(num, 1);
        }
        self._clicks = [];
        self._lastMutation = 0;
        self._lastScroll = 0;
      };
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "removeListeners",
    value: function removeListeners() {
      const self = this;
      if (this._teardown) {
        self._teardown();
      }
      if (self._checkClickTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._checkClickTimeout);
      }
    }
  };
  items[1] = obj;
  items[2] = {
    key: "handleClick",
    value: function handleClick(data, tagName) {
      const self = this;
      const _ignoreSelector = this._ignoreSelector;
      let flag = true;
      if (closure_116.includes(tagName.tagName)) {
        if ("INPUT" !== tagName.tagName) {
          if ("A" !== tagName.tagName) {
            flag = false;
            if (_ignoreSelector) {
              flag = false;
              if (tagName.matches(_ignoreSelector)) {
                flag = true;
              }
            }
          } else {
            flag = true;
            if (!tagName.hasAttribute("download")) {
              if (tagName.hasAttribute("target")) {
                flag = true;
              }
            }
          }
        } else {
          const items = ["submit", "button"];
          flag = true;
          const tmp = tagName.getAttribute("type") || "";
        }
      }
      if (!flag) {
        data = data.data;
        let tmp3 = !data;
        if (data) {
          tmp3 = typeof data.data.nodeId !== "number";
        }
        if (!tmp3) {
          tmp3 = !data.timestamp;
        }
        if (!tmp3) {
          const timestamp = data.timestamp;
          let result = timestamp;
          if (timestamp > 9999999999) {
            result = timestamp / 1000;
          }
          const obj = { timestamp: null, clickBreadcrumb: null, clickCount: 0, node: null };
          obj[0] = result;
          obj[1] = data;
          obj[3] = tagName;
          let _clicks = self._clicks;
          if (!_clicks.some((item, index) => {
            let tmp2 = item.node === obj.node;
            if (tmp2) {
              const _Math = Math;
              tmp2 = Math.abs(item.timestamp - tmp.timestamp) < 1;
            }
            return tmp2;
          })) {
            _clicks = self._clicks;
            _clicks.push(obj);
            if (1 === self._clicks.length) {
              self._scheduleCheckClicks();
            }
          }
        }
      }
    }
  };
  items[3] = {
    key: "registerMutation",
    value: function registerMutation(timestamp) {
      if (timestamp === undefined) {
        const _Date = Date;
        timestamp = Date.now();
      }
      let result = timestamp;
      if (timestamp > 9999999999) {
        result = timestamp / 1000;
      }
      this._lastMutation = result;
    }
  };
  items[4] = {
    key: "registerScroll",
    value: function registerScroll(timestamp) {
      if (timestamp === undefined) {
        const _Date = Date;
        timestamp = Date.now();
      }
      let result = timestamp;
      if (timestamp > 9999999999) {
        result = timestamp / 1000;
      }
      this._lastScroll = result;
    }
  };
  items[5] = {
    key: "registerClick",
    value: function registerClick(node) {
      this._handleMultiClick(node.closest("button,a") || node);
    }
  };
  items[6] = {
    key: "_handleMultiClick",
    value: function _handleMultiClick(arg0) {
      const item = this._getClicks(arg0).forEach((item, index) => {
        item.clickCount = item.clickCount + 1;
      });
    }
  };
  items[7] = {
    key: "_getClicks",
    value: function _getClicks(arg0) {
      closure_0 = arg0;
      const _clicks = this._clicks;
      return _clicks.filter((item, index) => item.node === closure_0);
    }
  };
  items[8] = {
    key: "_checkClicks",
    value: function _checkClicks() {
      const self = this;
      const items = [];
      closure_0 = callback();
      const _clicks = this._clicks;
      const item = _clicks.forEach((item, index) => {
        const mutationAfter = item.mutationAfter;
        let _lastMutation = !mutationAfter;
        if (!mutationAfter) {
          _lastMutation = self._lastMutation;
        }
        if (_lastMutation) {
          let diff;
          if (item.timestamp <= self._lastMutation) {
            diff = self._lastMutation - item.timestamp;
          }
          item.mutationAfter = diff;
        }
        const scrollAfter = item.scrollAfter;
        let _lastScroll = !scrollAfter;
        if (!scrollAfter) {
          _lastScroll = self._lastScroll;
        }
        if (_lastScroll) {
          let diff1;
          if (item.timestamp <= self._lastScroll) {
            diff1 = self._lastScroll - item.timestamp;
          }
          item.scrollAfter = diff1;
        }
        if (item.timestamp + self._timeout <= closure_0) {
          items.push(item);
        }
      });
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _clicks1 = self._clicks;
        let tmp3 = nextResult;
        let index = _clicks1.indexOf(nextResult);
        if (index > -1) {
          let _generateBreadcrumbsResult = self._generateBreadcrumbs(tmp3);
          let _clicks2 = self._clicks;
          let spliceResult = _clicks2.splice(tmp5, 1);
        }
        continue;
      }
      if (self._clicks.length) {
        self._scheduleCheckClicks();
      }
    }
  };
  items[9] = {
    key: "_generateBreadcrumbs",
    value: function _generateBreadcrumbs(scrollAfter) {
      const self = this;
      const _replay = this._replay;
      let tmp3 = !tmp;
      if (!(scrollAfter.scrollAfter && scrollAfter.scrollAfter <= self._scrollTimeout)) {
        tmp3 = !tmp2;
      }
      ({ clickCount, clickBreadcrumb } = scrollAfter);
      if (tmp3) {
        let _timeout = scrollAfter.mutationAfter;
        if (!_timeout) {
          _timeout = self._timeout;
        }
        const result = 1000 * Math.min(_timeout, self._timeout);
        let str = "timeout";
        if (result < 1000 * self._timeout) {
          str = "mutation";
        }
        let obj = { type: "default", message: null, timestamp: null, category: "ui.slowClickDetected", data: null };
        ({ message: obj[1], timestamp: obj[2] } = clickBreadcrumb);
        obj = {};
        const merged = Object.assign(clickBreadcrumb.data);
        obj.url = ClickDetector(dependencyMap[8]).GLOBAL_OBJ.location.href;
        obj.route = _replay.getCurrentRoute();
        obj.timeAfterClickMs = result;
        obj.endReason = str;
        if (!clickCount) {
          clickCount = 1;
        }
        obj.clickCount = clickCount;
        obj[4] = obj;
        self._addBreadcrumbEvent(_replay, obj);
      } else if (clickCount > 1) {
        obj = { type: "default", message: null, timestamp: null, category: "ui.multiClick", data: null };
        ({ message: obj3[1], timestamp: obj3[2] } = clickBreadcrumb);
        const obj1 = {};
        const merged1 = Object.assign(clickBreadcrumb.data);
        obj1.url = ClickDetector(dependencyMap[8]).GLOBAL_OBJ.location.href;
        obj1.route = _replay.getCurrentRoute();
        obj1.clickCount = clickCount;
        obj1.metric = true;
        obj[4] = obj1;
        self._addBreadcrumbEvent(_replay, obj);
      }
      tmp2 = scrollAfter.mutationAfter && scrollAfter.mutationAfter <= self._threshold;
    }
  };
  items[10] = {
    key: "_scheduleCheckClicks",
    value: function _scheduleCheckClicks() {
      const self = this;
      if (this._checkClickTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._checkClickTimeout);
      }
      self._checkClickTimeout = self(dependencyMap[9]).setTimeout(() => self._checkClicks(), 1000);
    }
  };
  return closure_8(ClickDetector, items);
}

function f21479(arg0) {
  arg0.Document = 0;
  arg0[0] = "Document";
  arg0.DocumentType = 1;
  arg0[1] = "DocumentType";
  arg0.Element = 2;
  arg0[2] = "Element";
  arg0.Text = 3;
  arg0[3] = "Text";
  arg0.CDATA = 4;
  arg0[4] = "CDATA";
  arg0.Comment = 5;
  arg0[5] = "Comment";
  return arg0;
}

function handleDomListener(arg0) {
}

function createResourceEntry(initiatorType) {
  initiatorType = initiatorType.initiatorType;
  const items = ["fetch", "xmlhttprequest"];
  ({ entryType, name, responseEnd, startTime, decodedBodySize, encodedBodySize, responseStatus, transferSize } = initiatorType);
  if (items.includes(initiatorType)) {
    return null;
  } else {
    let obj = { type: null, start: null, end: null, name: null, data: null };
    const _HermesInternal = HermesInternal;
    obj[0] = "" + entryType + "." + initiatorType;
    const obj2 = closure_0(closure_1[8]);
    obj[1] = ((closure_0(closure_1[8]).browserPerformanceTimeOrigin() || closure_0(closure_1[8]).GLOBAL_OBJ.performance.timeOrigin) + startTime) / 1000;
    const tmp4 = closure_0(closure_1[8]).browserPerformanceTimeOrigin() || closure_0(closure_1[8]).GLOBAL_OBJ.performance.timeOrigin;
    const tmp2Result = closure_0(closure_1[8]);
    obj[2] = ((closure_0(closure_1[8]).browserPerformanceTimeOrigin() || closure_0(closure_1[8]).GLOBAL_OBJ.performance.timeOrigin) + responseEnd) / 1000;
    obj[3] = name;
    obj = { size: null, statusCode: null, decodedBodySize: null, encodedBodySize: null };
    obj[0] = transferSize;
    obj[1] = responseStatus;
    obj[2] = decodedBodySize;
    obj[3] = encodedBodySize;
    obj[4] = obj;
    return obj;
  }
}

function createPaintEntry(arg0) {
  ({ duration, entryType, name, startTime } = arg0);
  let obj = closure_0(closure_1[8]);
  const result = ((obj.browserPerformanceTimeOrigin() || closure_0(closure_1[8]).GLOBAL_OBJ.performance.timeOrigin) + startTime) / 1000;
  obj = { type: entryType, name, start: result, end: result + duration, data: "find" };
  return obj;
}

function createNavigationEntry(arg0) {
  ({ duration, domComplete } = arg0);
  if (0 === duration) {
    return null;
  } else {
    let obj = { type: null, start: null, end: null, name: null, data: null };
    const _HermesInternal = HermesInternal;
    obj[0] = "" + tmp + "." + tmp13;
    const obj4 = closure_0(closure_1[8]);
    obj[1] = ((closure_0(closure_1[8]).browserPerformanceTimeOrigin() || closure_0(closure_1[8]).GLOBAL_OBJ.performance.timeOrigin) + tmp11) / 1000;
    const tmp14 = closure_0(closure_1[8]).browserPerformanceTimeOrigin() || closure_0(closure_1[8]).GLOBAL_OBJ.performance.timeOrigin;
    const tmp18Result = closure_0(closure_1[8]);
    obj[2] = ((closure_0(closure_1[8]).browserPerformanceTimeOrigin() || closure_0(closure_1[8]).GLOBAL_OBJ.performance.timeOrigin) + domComplete) / 1000;
    obj[3] = tmp2;
    obj = { size: null, decodedBodySize: null, encodedBodySize: null, duration: null, domInteractive: null, domContentLoadedEventStart: null, domContentLoadedEventEnd: null, loadEventStart: null, loadEventEnd: null, domComplete: null, redirectCount: null };
    obj[0] = tmp12;
    obj[1] = tmp3;
    obj[2] = tmp4;
    obj[3] = duration;
    obj[4] = tmp7;
    obj[5] = tmp5;
    obj[6] = tmp6;
    obj[7] = tmp8;
    obj[8] = tmp9;
    obj[9] = domComplete;
    obj[10] = tmp10;
    obj[4] = obj;
    return obj;
  }
}

function makeReplayDebugLogger() {
  c0 = false;
  c1 = false;
  let obj = {
    exception(closure_0, arg1, closure_0) {
  
    },
    infoTick(arg0) {
  
    },
    setConfig(captureExceptions) {
      captureExceptions = captureExceptions.captureExceptions;
      const traceInternals = captureExceptions.traceInternals;
    }
  };
  const forEach = closure_131.forEach;
  if (closure_130) {
    const item = forEach((arg0) => {
      closure_0 = arg0;
      obj[arg0] = () => {
        const items = [...arguments];
        const debug = callback(table[8]).debug;
        const items1 = [closure_2_132, ...items];
        debug[closure_0].apply(items1);
        if (closure_1_1) {
          const joined = items.join("");
          let tmpResult = callback(table[8]);
          let str2 = tmpResult.severityLevelFromString(closure_0);
          if (str2 === undefined) {
            str2 = "info";
          }
          tmpResult = callback(table[8]);
          obj = { category: "console", data: null, level: null, message: null };
          obj[1] = { logger: "replay" };
          obj[2] = str2;
          const _HermesInternal = HermesInternal;
          obj[3] = "" + closure_2_132 + joined;
          obj = { level: null };
          obj[0] = str2;
          tmpResult.addBreadcrumb(obj, obj);
        }
      };
    });
    obj.exception = (arg0) => {
      const substr = [...arguments].slice();
      let error = substr.length;
      if (error) {
        error = obj.error;
      }
      if (error) {
        const error2 = obj.error;
        const items = [];
        HermesBuiltin.arraySpread(substr, 0);
        HermesBuiltin.apply(items, obj);
      }
      const debug = callback(dependencyMap[8]).debug;
      debug.error(closure_1_132, arg0);
      if (callback) {
        let tmp10Result = callback(dependencyMap[8]);
        obj = { mechanism: null };
        obj[0] = { handled: true, type: "auto.function.replay.debug" };
        tmp10Result.captureException(arg0, obj);
      } else if (dependencyMap) {
        tmp10Result = callback(dependencyMap[8]);
        obj = { category: "console", data: null, level: null, message: null };
        obj[1] = { logger: "replay" };
        obj[2] = "error";
        const _HermesInternal = HermesInternal;
        obj[3] = "" + closure_1_132 + arg0;
        const obj1 = { level: null };
        obj1[0] = "error";
        tmp10Result.addBreadcrumb(obj, obj1);
      }
    };
    obj.infoTick = () => {
      const items = [...arguments];
      const debug = callback(dependencyMap[8]).debug;
      const items1 = [closure_1_132, ...items];
      debug.log.apply(items1);
      if (dependencyMap) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          items(closure_1_1[8]);
          obj = { category: "console", data: { logger: "replay" }, level: "info", message: "" + closure_1_132 + items[0] };
          obj.addBreadcrumb(obj, { level: "info" });
        }, 0);
      }
    };
  } else {
    const item1 = forEach((arg0) => {
      obj[arg0] = () => {
  
      };
    });
  }
  return obj;
}

function f21485(arg0) {
  class EventBufferSizeExceededError {
    constructor() {
      self = this;
      tmp = closure_1_7(this, EventBufferSizeExceededError);
      items = ["Event buffer exceeded maximum size of 20000000."];
      tmp2 = closure_1_4;
      obj = closure_1_4(EventBufferSizeExceededError);
      tmp3 = closure_1_3;
      if (closure_1_9()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp3(self, constructResult);
    }
  }
  closure_5(EventBufferSizeExceededError, arg0);
  return closure_8(EventBufferSizeExceededError);
}

function f21486() {
  class EventBufferArray {
    constructor() {
      tmp = closure_1_7(this, EventBufferArray);
      this.events = [];
      this._totalSize = 0;
      this.hasCheckout = false;
      this.waitForCheckout = false;
      return;
    }
  }
  let obj = {
    key: "hasEvents",
    get() {
      return this.events.length > 0;
    }
  };
  const items = [
    obj,
    {
      key: "type",
      get() {
        return "sync";
      }
    },
    {
      key: "destroy",
      value: function destroy() {
        this.events = [];
      }
    },
  ,
  ,
  ,
  
  ];
  obj = { key: "addEvent", value: null };
  closure_0 = closure_2(function(arg0) {
    const self = this;
    closure_1 = arg0;
    c2 = 0;
    return (function*(arg0) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const _JSON = JSON;
            self._totalSize = self._totalSize + JSON.stringify(closure_1).length;
            if (self._totalSize > closure_1_14) {
              const tmp8 = new closure_1_134();
              throw tmp8;
            } else {
              const events = self.events;
              events.push(closure_1);
              c2 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  obj[1] = function addEvent(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[3] = obj;
  items[4] = {
    key: "finish",
    value: function finish() {
      const self = this;
      return new Promise((fn) => {
        self.clear();
        fn(JSON.stringify(self.events));
      });
    }
  };
  items[5] = {
    key: "clear",
    value: function clear() {
  
    }
  };
  items[6] = {
    key: "getEarliestTimestamp",
    value: function getEarliestTimestamp() {
      const events = this.events;
      const mapped = events.map((item, index) => item.timestamp);
      const first = mapped.sort()[0];
      let tmp2 = null;
      if (first) {
        let result = first;
        if (first <= 9999999999) {
          result = 1000 * first;
        }
        tmp2 = result;
      }
      return tmp2;
    }
  };
  return closure_8(EventBufferArray, items);
}

function f21487() {
  class WorkerHandler {
    constructor(arg0) {
      tmp = closure_1_7(this, WorkerHandler);
      this._worker = arg0;
      this._id = 0;
      return;
    }
  }
  const items = [
    {
      key: "ensureReady",
      value: function ensureReady() {
        const self = this;
        if (!this._ensureReadyPromise) {
          const promise = new Promise((arg0, arg1) => {
            const _self = arg0;
            closure_1 = arg1;
            const _worker = _self._worker;
            const listener = _worker.addEventListener("message", (event) => {
              if (event.data.success) {
                callback();
              } else {
                callback2();
              }
            }, { once: true });
            const _worker2 = _self._worker;
            const listener1 = _worker2.addEventListener("error", (event) => {
              callback2(event);
            }, { once: true });
          });
          self._ensureReadyPromise = promise;
        }
        return self._ensureReadyPromise;
      }
    },
    {
      key: "destroy",
      value: function destroy() {
        if (closure_130) {
          logger.log("Destroying compression worker");
        }
        const _worker = this._worker;
        _worker.terminate();
      }
    },
    {
      key: "postMessage",
      value: function postMessage(arg0, arg1) {
        const self = this;
        closure_1 = arg0;
        closure_2 = arg1;
        closure_0 = this._getAndIncrementId();
        return new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          function listener(event) {
            const data = event.data;
            if (data.method === callback2) {
              if (data.id === callback) {
                const _worker = self._worker;
                const removed = _worker.removeEventListener("message", listener);
                if (data.success) {
                  callback(data.response);
                } else {
                  if (closure_2_130) {
                    closure_2_133.error("Error in compression worker: ", data.response);
                  }
                  const _Error = Error;
                  const error = new Error("Error in compression worker");
                  callback2(error);
                }
              }
            }
          }
          let _worker = self._worker;
          listener = _worker.addEventListener("message", listener);
          const _worker2 = self._worker;
          _worker2.postMessage({ id: closure_0, method: closure_1, arg: listener });
        });
      }
    },
    {
      key: "_getAndIncrementId",
      value: function _getAndIncrementId() {
        this._id = +this._id + 1;
        return +this._id;
      }
    }
  ];
  return closure_8(WorkerHandler, items);
}

function f21488() {
  class EventBufferCompressionWorker {
    constructor(arg0) {
      tmp = closure_1_7(this, EventBufferCompressionWorker);
      tmp2 = new closure_1_136(arg0);
      this._worker = tmp2;
      this._earliestTimestamp = null;
      this._totalSize = 0;
      this.hasCheckout = false;
      this.waitForCheckout = false;
      return;
    }
  }
  let obj = {
    key: "hasEvents",
    get() {
      return this._earliestTimestamp;
    }
  };
  const items = [
    obj,
    {
      key: "type",
      get() {
        return "worker";
      }
    },
    {
      key: "ensureReady",
      value: function ensureReady() {
        const _worker = this._worker;
        return _worker.ensureReady();
      }
    },
    {
      key: "destroy",
      value: function destroy() {
        const _worker = this._worker;
        _worker.destroy();
      }
    },
    {
      key: "addEvent",
      value: function addEvent(timestamp) {
        timestamp = timestamp.timestamp;
        let result = timestamp;
        if (timestamp <= 9999999999) {
          result = 1000 * timestamp;
        }
        const self = this;
        const _earliestTimestamp = this._earliestTimestamp;
        let tmp2 = !_earliestTimestamp;
        if (_earliestTimestamp) {
          tmp2 = result < self._earliestTimestamp;
        }
        if (tmp2) {
          self._earliestTimestamp = result;
        }
        const json = JSON.stringify(timestamp);
        self._totalSize = self._totalSize + json.length;
        if (self._totalSize > closure_14) {
          const tmp7 = new closure_134();
          let rejectResult = Promise.reject(tmp7);
        } else {
          rejectResult = self._sendEventToWorker(json);
        }
        return rejectResult;
      }
    },
    {
      key: "finish",
      value: function finish() {
        return this._finishRequest();
      }
    },
    {
      key: "clear",
      value: function clear() {
        this._earliestTimestamp = null;
        this._totalSize = 0;
        this.hasCheckout = false;
        const _worker = this._worker;
        _worker.postMessage("clear").then(null, (closure_0) => {
          if (closure_130) {
            closure_133.exception(closure_0, "Sending \"clear\" message to worker failed", closure_0);
          }
        });
      }
    },
    {
      key: "getEarliestTimestamp",
      value: function getEarliestTimestamp() {
        return this._earliestTimestamp;
      }
    },
    {
      key: "_sendEventToWorker",
      value: function _sendEventToWorker(json) {
        const _worker = this._worker;
        return _worker.postMessage("addEvent", json);
      }
    },
  
  ];
  obj = { key: "_finishRequest", value: null };
  closure_0 = closure_2(function() {
    const self = this;
    c3 = 0;
    c4 = 0;
    return (function*() {
      closure_2 = _self;
      closure_1 = tmp2;
      const _worker = _self._worker;
      _self = yield _worker.postMessage("finish");
      closure_2._earliestTimestamp = null;
      closure_2._totalSize = 0;
      return _self;
    })();
  });
  obj[1] = function _finishRequest() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[9] = obj;
  return closure_8(EventBufferCompressionWorker, items);
}

function f21489() {
  class EventBufferProxy {
    constructor(arg0) {
      tmp = closure_1_7(this, EventBufferProxy);
      tmp2 = new closure_1_135();
      this._fallback = tmp2;
      tmp3 = new closure_1_137(arg0);
      this._compression = tmp3;
      this._used = this._fallback;
      this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
      return;
    }
  }
  let obj = {
    key: "waitForCheckout",
    get() {
      return this._used.waitForCheckout;
    },
    set(waitForCheckout) {
      this._used.waitForCheckout = waitForCheckout;
    }
  };
  let items = [
    obj,
    {
      key: "type",
      get() {
        return this._used.type;
      }
    },
    {
      key: "hasEvents",
      get() {
        return this._used.hasEvents;
      }
    },
    {
      key: "hasCheckout",
      get() {
        return this._used.hasCheckout;
      },
      set(hasCheckout) {
        this._used.hasCheckout = hasCheckout;
      }
    },
    {
      key: "destroy",
      value: function destroy() {
        const _fallback = this._fallback;
        _fallback.destroy();
        const _compression = this._compression;
        _compression.destroy();
      }
    },
    {
      key: "clear",
      value: function clear() {
        const _used = this._used;
        return _used.clear();
      }
    },
    {
      key: "getEarliestTimestamp",
      value: function getEarliestTimestamp() {
        const _used = this._used;
        return _used.getEarliestTimestamp();
      }
    },
    {
      key: "addEvent",
      value: function addEvent(arg0) {
        const _used = this._used;
        return _used.addEvent(arg0);
      }
    },
  ,
  ,
  ,
  
  ];
  obj = { key: "finish", value: null };
  closure_2 = closure_2(function() {
    const self = this;
    c2 = 0;
    c3 = 0;
    return (function*() {
      let _used = self;
      yield self.ensureWorkerIsLoaded();
      _used = _used._used;
      return _used.finish();
    })();
  });
  obj[1] = function finish() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[8] = obj;
  items[9] = {
    key: "ensureWorkerIsLoaded",
    value: function ensureWorkerIsLoaded() {
      return this._ensureWorkerIsLoadedPromise;
    }
  };
  obj = { key: "_ensureWorkerIsLoaded", value: null };
  closure_1 = closure_2(function() {
    const self = this;
    c6 = 0;
    c7 = 0;
    c4 = 0;
    return (function*() {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = _self;
              closure_2 = tmp3;
              closure_1 = tmp5;
              c4 = 1;
              const _compression = _self._compression;
              c6 = 3;
              c7 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = _compression.ensureReady();
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            _self = closure_5;
            if (closure_1_130) {
              closure_1_133.exception(_self, "Failed to load the compression worker, falling back to simple buffer");
            }
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = undefined;
            return obj2;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              c7 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c7 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c4 = 0;
            c6 = 2;
            c7 = 1;
            obj = { value: null, done: false };
            obj[0] = closure_3._switchToCompressionWorker();
            return obj;
          }
        } catch (tmp19) {
          closure_5 = tmp19;
          if (tmp4 === c4) {
            c7 = tmp2;
            throw tmp19;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  obj[1] = function _ensureWorkerIsLoaded() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[10] = obj;
  let obj1 = { key: "_switchToCompressionWorker", value: null };
  closure_0 = closure_2(function() {
    const self = this;
    c8 = 0;
    c9 = 0;
    c6 = 0;
    return (function*() {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let tmp27 = _self;
              let _fallback = _self;
              closure_4 = tmp;
              closure_3 = tmp4;
              let _fallback2 = _self._fallback;
              let events = _fallback2.events;
              let items = [];
              ({ hasCheckout, waitForCheckout } = _fallback2);
              closure_1 = events[Symbol.iterator]();
              while (closure_1 !== undefined) {
                let _compression = tmp27._compression;
                let arr = items.push(_compression.addEvent(tmp20));
                c6 = 0;
                continue;
              }
              tmp27._compression.hasCheckout = hasCheckout;
              tmp27._compression.waitForCheckout = waitForCheckout;
              tmp27._used = tmp27._compression;
              c6 = 2;
              let _Promise = Promise;
              c8 = 3;
              c9 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = Promise.all(items);
              return obj1;
            }
          } else if (1 === tmp4) {
            c6 = 0;
            closure_1.return();
            throw closure_7;
          } else {
            if (2 === tmp4) {
              c6 = 0;
              _self = closure_7;
              if (closure_1_130) {
                let exceptionResult = closure_1_133.exception(_self, "Failed to add events when switching buffers.");
              }
              c9 = 3;
            } else if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              _fallback = _fallback._fallback;
              let clearResult = _fallback.clear();
              c6 = 0;
            }
            c6 = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        }
      }
    })();
  });
  obj1[1] = function _switchToCompressionWorker() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[11] = obj1;
  return closure_8(EventBufferProxy, items);
}

function f21490(arg0) {
  class TransportStatusCodeError {
    constructor(arg0) {
      self = this;
      tmp = closure_1_7(this, TransportStatusCodeError);
      items = [];
      items[0] = "Transport returned status code " + arg0;
      tmp2 = closure_1_4;
      obj = closure_1_4(TransportStatusCodeError);
      tmp3 = closure_1_3;
      if (closure_1_9()) {
        _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp3(self, constructResult);
    }
  }
  closure_5(TransportStatusCodeError, arg0);
  return closure_8(TransportStatusCodeError);
}

function f21491(arg0) {
  class RateLimitError {
    constructor(arg0) {
      self = this;
      tmp = closure_1_7(this, RateLimitError);
      items = ["Rate limit hit"];
      tmp2 = closure_1_4;
      obj = closure_1_4(RateLimitError);
      tmp3 = closure_1_3;
      if (closure_1_9()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result.rateLimits = arg0;
      return tmp3Result;
    }
  }
  closure_5(RateLimitError, arg0);
  return closure_8(RateLimitError);
}

function f21492() {
  class ReplayContainer {
    constructor(arg0) {
      self = this;
      f103469 = this;
      options = arg0.options;
      tmp = closure_1_7(this, ReplayContainer);
      this.eventBuffer = null;
      this.performanceEntries = [];
      this.replayPerformanceEntries = [];
      this.recordingMode = "session";
      this.timeouts = { sessionIdlePause: 300000, sessionIdleExpire: 900000 };
      this._lastActivity = Date.now();
      this._isEnabled = false;
      this._isPaused = false;
      this._requiresManualStart = false;
      this._hasInitializedCoreListeners = false;
      obj = { errorIds: null, traceIds: null, urls: null, initialTimestamp: null, initialUrl: "" };
      set = new Set();
      obj[0] = set;
      set1 = new Set();
      obj[1] = set1;
      obj[2] = [];
      obj[3] = Date.now();
      this._context = obj;
      this._recordingOptions = arg0.recordingOptions;
      this._options = options;
      obj = { maxWait: this._options.flushMaxDelay };
      obj3 = closure_0(closure_1[8]);
      obj1 = {};
      merged = Object.assign(obj);
      obj1.setTimeoutImpl = closure_0(closure_1[9]).setTimeout;
      this._debouncedFlush = obj3.debounce(() => f103469._flush(), this._options.flushMinDelay, obj1);
      f103469 = (timestamp) => {
        let flag = false;
        if (f103469.eventBuffer) {
          flag = false;
          if (!f103469.isPaused()) {
            flag = false;
            if (f103469.isEnabled()) {
              timestamp = timestamp.timestamp;
              let result = timestamp;
              if (timestamp <= 9999999999) {
                result = 1000 * timestamp;
              }
              const _Date = Date;
              const sum = result + f103469.timeouts.sessionIdlePause;
              let tmp4 = sum >= Date.now();
              if (tmp4) {
                let flag2 = result <= f103469.getContext().initialTimestamp + f103469.getOptions().maxReplayDuration;
                if (!flag2) {
                  flag2 = false;
                  if (closure_1_130) {
                    const _HermesInternal = HermesInternal;
                    closure_1_133.infoTick("Skipping event with timestamp " + result + " because it is after maxReplayDuration");
                    flag2 = false;
                  }
                }
                tmp4 = flag2;
              }
              flag = tmp4;
            }
          }
        }
        if (flag) {
          let resolved = closure_1_147(f103469, timestamp, arg1);
        } else {
          resolved = Promise.resolve(null);
        }
        return resolved;
      };
      closure_1 = undefined;
      c2 = undefined;
      map = new Map();
      closure_1 = map;
      c2 = false;
      this._throttledAddEvent = () => {
        const items = [...arguments];
        const rounded = Math.floor(Date.now() / 1000);
        closure_0 = rounded - 5;
        const item = map.forEach((item, index) => {
          if (index < closure_0) {
            map.delete(index);
          }
        });
        const items1 = [...map.values()];
        if (items1.reduce((acc, item, index) => acc + item, 0) >= 300) {
          c2 = true;
          let str = "__SKIPPED";
          if (!c2) {
            str = closure_1_176;
          }
          return str;
        } else {
          c2 = false;
          const result = map.set(rounded, (map.get(rounded) || 0) + 1);
          const items2 = [];
          HermesBuiltin.arraySpread(items, 0);
          return HermesBuiltin.apply(items2, undefined);
        }
      };
      options = this.getOptions();
      ({ slowClickTimeout, slowClickIgnoreSelectors } = options);
      tmp7 = undefined;
      if (slowClickTimeout) {
        obj2 = { threshold: null, timeout: null, scrollTimeout: 300, ignoreSelector: null };
        _Math = Math;
        num = 3000;
        obj2[0] = Math.min(3000, slowClickTimeout);
        obj2[1] = slowClickTimeout;
        str = "";
        if (slowClickIgnoreSelectors) {
          str2 = ",";
          str = slowClickIgnoreSelectors.join(",");
        }
        obj2[3] = str;
        tmp7 = obj2;
      }
      if (tmp7) {
        tmp8 = closure_1_115;
        tmp9 = new.target;
        tmp10 = new.target;
        tmp11 = self;
        tmp12 = tmp7;
        tmp13 = new closure_1_115(self, tmp7);
        tmp14 = tmp13;
        self.clickDetector = tmp13;
      }
      if (closure_1_130) {
        _experiments = options._experiments;
        tmp15 = closure_1_133;
        obj3 = { captureExceptions: null, traceInternals: null };
        obj3[0] = _experiments.captureExceptions;
        obj3[1] = _experiments.traceInternals;
        setConfigResult = closure_1_133.setConfig(obj3);
      }
      self._handleVisibilityChange = () => {
        if ("visible" === f103469(map[8]).GLOBAL_OBJ.document.visibilityState) {
          const result = f103469._doChangeToForegroundTasks();
        } else {
          const result1 = f103469._doChangeToBackgroundTasks();
        }
      };
      self._handleWindowBlur = () => {
        const merged = Object.assign({ category: "ui.blur" });
        const result = f103469._doChangeToBackgroundTasks({ timestamp: Date.now() / 1000, type: "default" });
      };
      self._handleWindowFocus = () => {
        const merged = Object.assign({ category: "ui.focus" });
        const result = f103469._doChangeToForegroundTasks({ timestamp: Date.now() / 1000, type: "default" });
      };
      self._handleKeyboardEvent = (arg0) => {
        if (obj.isEnabled()) {
          obj.updateUserActivity();
          ({ metaKey, ctrlKey, altKey, key, target } = arg0);
          let tmp4 = null;
          if (target) {
            let isContentEditable = "INPUT" === target.tagName;
            if (!isContentEditable) {
              isContentEditable = "TEXTAREA" === target.tagName;
            }
            if (!isContentEditable) {
              isContentEditable = target.isContentEditable;
            }
            tmp4 = null;
            if (!isContentEditable) {
              tmp4 = null;
              if (key) {
                let tmp5 = metaKey;
                if (!metaKey) {
                  tmp5 = ctrlKey;
                }
                if (!tmp5) {
                  tmp5 = altKey;
                }
                if (tmp5) {
                  let obj1 = f103469(map[8]);
                  const tmp9 = obj1.htmlTreeAsString(target, { maxStringLength: 200 }) || "<unknown>";
                  obj = { category: "ui.keyDown", message: null, data: null };
                  obj[1] = tmp9;
                  obj = {};
                  const merged = Object.assign(closure_1_122(target, tmp9).data);
                  obj.metaKey = metaKey;
                  obj.shiftKey = tmp3;
                  obj.ctrlKey = ctrlKey;
                  obj.altKey = altKey;
                  obj.key = key;
                  obj[2] = obj;
                  obj1 = { timestamp: null, type: "default" };
                  const _Date = Date;
                  obj1[0] = Date.now() / 1000;
                  const merged1 = Object.assign(obj);
                  tmp4 = obj1;
                } else {
                  tmp4 = null;
                }
              }
            }
          }
          if (tmp4) {
            c1 = tmp4;
            if ("sentry.transaction" !== tmp4.category) {
              const items = ["ui.click", "ui.input"];
              if (items.includes(tmp4.category)) {
                obj.triggerUserActivity();
              } else {
                const result = obj.checkAndHandleExpiredSession();
              }
              obj.addUpdate(() => {
                obj = { type: closure_1_73.Custom, timestamp: null, data: null };
                let num = _null.timestamp;
                if (!num) {
                  num = 0;
                }
                obj[1] = 1000 * num;
                obj = { tag: "breadcrumb", payload: null };
                const normalizer = obj(_null[8]);
                obj[1] = normalizer.normalize(_null, 10, 1000);
                obj[2] = obj;
                obj.throttledAddEvent(obj);
                return "console" === _null.category;
              });
            }
          }
        }
      };
      return;
    }
  }
  let obj = {
    key: "getContext",
    value: function getContext() {
      return this._context;
    }
  };
  let items = [
    obj,
    {
      key: "isEnabled",
      value: function isEnabled() {
        return this._isEnabled;
      }
    },
    {
      key: "isPaused",
      value: function isPaused() {
        return this._isPaused;
      }
    },
    {
      key: "isRecordingCanvas",
      value: function isRecordingCanvas() {
        return Boolean(this._canvas);
      }
    },
    {
      key: "getOptions",
      value: function getOptions() {
        return this._options;
      }
    },
    {
      key: "handleException",
      value: function handleException(closure_0) {
        if (closure_130) {
          closure_133.exception(closure_0);
        }
        if (this._options.onError) {
          const _options = this._options;
          _options.onError(closure_0);
        }
      }
    },
    {
      key: "initializeSampling",
      value: function initializeSampling(id) {
        const self = this;
        const _options = this._options;
        self._requiresManualStart = _options.errorSampleRate <= 0 && _options.sessionSampleRate <= 0;
        if (!(_options.errorSampleRate <= 0 && _options.sessionSampleRate <= 0)) {
          const result = self._initializeSessionForSampling(id);
          if (self.session) {
            if (false !== self.session.sampled) {
              let str2 = "session";
              if ("buffer" === self.session.sampled) {
                str2 = "session";
                if (0 === self.session.segmentId) {
                  str2 = "buffer";
                }
              }
              self.recordingMode = str2;
              if (closure_130) {
                const _HermesInternal = HermesInternal;
                closure_133.infoTick("Starting replay in " + self.recordingMode + " mode");
              }
              self._initializeRecording();
            }
          } else if (closure_130) {
            const _Error = Error;
            const error = new Error("Unable to initialize and create session");
            closure_133.exception(error);
          }
        }
      }
    },
    {
      key: "start",
      value: function start() {
        const self = this;
        if (this._isEnabled) {
          if ("session" === self.recordingMode) {
            if (closure_130) {
              closure_133.log("Recording is already in progress");
            }
          }
        }
        if (self._isEnabled) {
          if ("buffer" === self.recordingMode) {
            if (closure_130) {
              closure_133.log("Buffering is in progress, call `flush()` to save the replay");
            }
          }
        }
        if (closure_130) {
          closure_133.infoTick("Starting replay in session mode");
        }
        self._updateUserActivity();
        const obj = { stickySession: self._options.stickySession, sessionSampleRate: 1, allowBuffering: false };
        self.session = callback4(obj, obj);
        self.recordingMode = "session";
        self._initializeRecording();
      }
    },
    {
      key: "startBuffering",
      value: function startBuffering() {
        const self = this;
        if (this._isEnabled) {
          if (closure_130) {
            closure_133.log("Buffering is in progress, call `flush()` to save the replay");
          }
        } else {
          if (closure_130) {
            closure_133.infoTick("Starting replay in buffer mode");
          }
          let obj = { sessionIdleExpire: null, maxReplayDuration: null };
          obj[0] = self.timeouts.sessionIdleExpire;
          obj[1] = self._options.maxReplayDuration;
          obj = { stickySession: null, sessionSampleRate: 0, allowBuffering: true };
          obj[0] = self._options.stickySession;
          self.session = callback4(obj, obj);
          self.recordingMode = "buffer";
          self._initializeRecording();
        }
      }
    },
    {
      key: "startRecording",
      value: function startRecording() {
        const self = this;
        try {
          const _canvas = self._canvas;
          let obj = {};
          const merged = Object.assign(self._recordingOptions);
          if ("buffer" === self.recordingMode) {
            obj = { checkoutEveryNms: 60000 };
          } else {
            obj = self._options._experiments.continuousCheckout;
            if (obj) {
              const obj1 = { checkoutEveryNms: null };
              const _Math = Math;
              obj1[0] = Math.max(360000, self._options._experiments.continuousCheckout);
              obj = obj1;
            }
          }
          const merged1 = Object.assign(obj);
          obj.emit = callback5(self);
          let obj4 = /iPhone|iPad|iPod/i;
          let str2;
          if (closure_168 != null) {
            str2 = closure_168.userAgent;
          }
          if (str2 == null) {
            str2 = "";
          }
          if (obj4.test(str2)) {
            const obj2 = { sampling: null };
            obj2[0] = { mousemove: false };
            let obj3 = obj2;
          } else {
            let obj5 = /Macintosh/i;
            let str3;
            if (closure_168 != null) {
              str3 = closure_168.userAgent;
            }
            if (str3 == null) {
              str3 = "";
            }
            if (obj5.test(str3)) {
              let maxTouchPoints;
              if (closure_168 != null) {
                maxTouchPoints = closure_168.maxTouchPoints;
              }
              if (maxTouchPoints) {
                let maxTouchPoints1;
                if (closure_168 != null) {
                  maxTouchPoints1 = closure_168.maxTouchPoints;
                }
              }
            }
            obj3 = {};
          }
          const merged2 = Object.assign(obj3);
          obj.onMutation = self._onMutationHandler.bind(self);
          if (_canvas) {
            obj4 = { recordCanvas: null, getCanvasManager: null, sampling: null, dataURLOptions: null };
            ({ recordCanvas: obj10[0], getCanvasManager: obj10[1], sampling: obj10[2], dataURLOptions: obj10[3] } = _canvas);
            obj5 = obj4;
          } else {
            obj5 = {};
          }
          const merged3 = Object.assign(obj5);
          self._stopRecording = callback(obj);
          const _onMutationHandler = self._onMutationHandler;
        } catch (tmp20) {
          obj.handleException(tmp20);
        }
      }
    },
    {
      key: "stopRecording",
      value: function stopRecording() {
        const self = this;
        try {
          if (self._stopRecording) {
            self._stopRecording();
            self._stopRecording = undefined;
          }
          return true;
        } catch (tmp2) {
          obj.handleException(tmp2);
          return false;
        }
      }
    },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  
  ];
  obj = { key: "stop", value: null };
  closure_4 = closure_2(function() {
    const self = this;
    closure_1 = arg0;
    c7 = 0;
    c8 = 0;
    c5 = 0;
    const iter = (function*() {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = flag;
              closure_3 = tmp3;
              closure_2 = tmp5;
              flag = undefined;
              let reason;
              let obj1 = reason;
              if (reason === undefined) {
                obj1 = {};
              }
              flag = obj1.forceFlush;
              if (flag === undefined) {
                flag = false;
              }
              reason = obj1.reason;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else if (closure_4._isEnabled) {
                closure_4._isEnabled = false;
                closure_4.recordingMode = "buffer";
                c5 = 1;
                if (closure_1_130) {
                  let str = "";
                  if (reason) {
                    const _HermesInternal = HermesInternal;
                    str = " triggered by " + reason;
                  }
                  closure_1_133.log("Stopping Replay" + str);
                }
                closure_1_149();
                closure_4._removeListeners();
                closure_4.stopRecording();
                const _debouncedFlush = closure_4._debouncedFlush;
                _debouncedFlush.cancel();
                if (flag) {
                  c7 = 3;
                  c8 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = closure_4._flush({ force: true });
                  return obj3;
                } else {
                  const eventBuffer = closure_4.eventBuffer;
                  if (eventBuffer != null) {
                    eventBuffer.destroy();
                  }
                  closure_4.eventBuffer = null;
                  closure_1_140(closure_4);
                  c5 = 0;
                }
              }
            } else if (2 === tmp8) {
              c5 = 0;
              closure_2 = closure_6;
              closure_4.handleException(closure_2);
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c8 = 3;
          }
        } catch (tmp41) {
          closure_6 = tmp41;
          if (tmp4 === c5) {
            c8 = tmp2;
            throw tmp41;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  obj[1] = function stop() {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[11] = obj;
  items[12] = {
    key: "pause",
    value: function pause() {
      const self = this;
      if (!this._isPaused) {
        self._isPaused = true;
        self.stopRecording();
        if (closure_130) {
          closure_133.log("Pausing replay");
        }
      }
    }
  };
  items[13] = {
    key: "resume",
    value: function resume() {
      const self = this;
      if (tmp) {
        self._isPaused = false;
        self.startRecording();
        if (closure_130) {
          closure_133.log("Resuming replay");
        }
      }
      tmp = this._isPaused && self._checkSession();
    }
  };
  obj = { key: "sendBufferedReplayOrFlush", value: null };
  closure_3 = closure_2(function() {
    const self = this;
    closure_1 = arg0;
    c5 = 0;
    c6 = 0;
    const iter = (function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = flag2;
              closure_3 = flag2;
              closure_2 = tmp2;
              flag2 = undefined;
              let obj1 = closure_1;
              if (closure_1 === undefined) {
                obj1 = {};
              }
              flag2 = obj1.continueRecording;
              if (flag2 === undefined) {
                flag2 = true;
              }
              closure_1 = undefined;
              closure_2 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if ("session" === closure_4.recordingMode) {
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = closure_4.flushImmediate();
              return obj3;
            } else {
              const _Date = Date;
              closure_1 = Date.now();
              if (closure_1_130) {
                closure_1_133.log("Converting buffer to session");
              }
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = closure_4.flushImmediate();
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = closure_4.stopRecording();
            let tmp7 = flag2;
            if (flag2) {
              tmp7 = closure_2;
            }
            if (tmp7) {
              tmp7 = "session" !== closure_4.recordingMode;
            }
            if (tmp7) {
              closure_4.recordingMode = "session";
              if (closure_4.session) {
                closure_4.session.dirty = false;
                closure_4._updateUserActivity(closure_1);
                const result = closure_4._updateSessionActivity(closure_1);
                closure_4._maybeSaveSession();
              }
              closure_4.startRecording();
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp29) {
          c6 = tmp;
          throw tmp29;
        }
      }
    })();
    iter.next();
    return iter;
  });
  obj[1] = function sendBufferedReplayOrFlush(arg0) {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[14] = obj;
  items[15] = {
    key: "addUpdate",
    value: function addUpdate(fn) {
      const self = this;
      let _isEnabled = "buffer" !== this.recordingMode;
      if (_isEnabled) {
        _isEnabled = self._isEnabled;
      }
      if (_isEnabled) {
        _isEnabled = true !== tmp;
      }
      if (_isEnabled) {
        self._debouncedFlush();
      }
    }
  };
  items[16] = {
    key: "triggerUserActivity",
    value: function triggerUserActivity() {
      const self = this;
      this._updateUserActivity();
      if (this._stopRecording) {
        const result = self.checkAndHandleExpiredSession();
        const result1 = self._updateSessionActivity();
      } else if (self._checkSession()) {
        self.resume();
      }
    }
  };
  items[17] = {
    key: "updateUserActivity",
    value: function updateUserActivity() {
      this._updateUserActivity();
      const result = this._updateSessionActivity();
    }
  };
  items[18] = {
    key: "conditionalFlush",
    value: function conditionalFlush() {
      const self = this;
      if ("buffer" === this.recordingMode) {
        let resolved = Promise.resolve();
      } else {
        resolved = self.flushImmediate();
      }
      return resolved;
    }
  };
  items[19] = {
    key: "flush",
    value: function flush() {
      return this._debouncedFlush();
    }
  };
  items[20] = {
    key: "flushImmediate",
    value: function flushImmediate() {
      this._debouncedFlush();
      const _debouncedFlush = this._debouncedFlush;
      return _debouncedFlush.flush();
    }
  };
  items[21] = {
    key: "cancelFlush",
    value: function cancelFlush() {
      const _debouncedFlush = this._debouncedFlush;
      _debouncedFlush.cancel();
    }
  };
  items[22] = {
    key: "getSessionId",
    value: function getSessionId(arg0) {
      const self = this;
      if (arg0) {
        const session = self.session;
        let sampled;
        if (session != null) {
          sampled = session.sampled;
        }
      }
      const session2 = self.session;
      let id;
      if (session2 != null) {
        id = session2.id;
      }
      return id;
    }
  };
  items[23] = {
    key: "checkAndHandleExpiredSession",
    value: function checkAndHandleExpiredSession() {
      const self = this;
      if (this._lastActivity) {
        const _lastActivity = self._lastActivity;
        const sessionIdlePause = self.timeouts.sessionIdlePause;
        const _Date = Date;
        const date = new Date();
        let tmp8 = null === _lastActivity;
        if (!tmp8) {
          tmp8 = undefined === sessionIdlePause;
        }
        if (!tmp8) {
          tmp8 = sessionIdlePause < 0;
        }
        if (!tmp8) {
          tmp8 = 0 !== sessionIdlePause && _lastActivity + sessionIdlePause <= tmp6;
        }
        if (tmp8) {
          if (self.session) {
            if ("session" === self.session.sampled) {
              self.pause();
            }
          }
        }
        tmp6 = +date;
      }
      return self._checkSession();
    }
  };
  items[24] = {
    key: "setInitialState",
    value: function setInitialState() {
      const obj = {};
      const combined = "" + callback(dependencyMap[8]).GLOBAL_OBJ.location.pathname + callback(dependencyMap[8]).GLOBAL_OBJ.location.hash + callback(dependencyMap[8]).GLOBAL_OBJ.location.search;
      const combined1 = "" + callback(dependencyMap[8]).GLOBAL_OBJ.location.origin + combined;
      obj.performanceEntries = [];
      obj.replayPerformanceEntries = [];
      obj._clearContext();
      obj._context.initialUrl = combined1;
      obj._context.initialTimestamp = Date.now();
      const urls = obj._context.urls;
      urls.push(combined1);
    }
  };
  items[25] = {
    key: "throttledAddEvent",
    value: function throttledAddEvent(arg0) {
      const self = this;
      const _throttledAddEventResult = this._throttledAddEvent(arg0, arg1);
      if (_throttledAddEventResult === closure_176) {
        const obj = { timestamp: null, type: "default" };
        const _Date = Date;
        obj[0] = Date.now() / 1000;
        const merged = Object.assign({ category: "replay.throttled" });
        self.addUpdate(() => {
          let timestamp = obj.timestamp;
          const payload = obj;
          if (!timestamp) {
            timestamp = 0;
          }
          return !closure_1_146(self, { type: 5, timestamp, data: { tag: "breadcrumb", payload, metric: true } });
        });
      }
      return _throttledAddEventResult;
    }
  };
  items[26] = {
    key: "getCurrentRoute",
    value: function getCurrentRoute() {
      let lastActiveSpan = this.lastActiveSpan;
      if (!lastActiveSpan) {
        lastActiveSpan = callback(dependencyMap[8]).getActiveSpan();
        const obj = callback(dependencyMap[8]);
      }
      let rootSpan = lastActiveSpan;
      if (lastActiveSpan) {
        rootSpan = callback(dependencyMap[8]).getRootSpan(lastActiveSpan);
        const obj2 = callback(dependencyMap[8]);
      }
      let data = rootSpan;
      if (rootSpan) {
        data = callback(dependencyMap[8]).spanToJSON(rootSpan).data;
        const obj4 = callback(dependencyMap[8]);
      }
      if (!data) {
        data = {};
      }
      const tmp10 = data[callback(undefined, dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
      if (rootSpan) {
        if (tmp10) {
          const items = ["route", "custom"];
          if (items.includes(tmp10)) {
            return callback(dependencyMap[8]).spanToJSON(rootSpan).description;
          }
        }
      }
    }
  };
  items[27] = {
    key: "_initializeRecording",
    value: function _initializeRecording() {
      const self = this;
      this.setInitialState();
      const result = this._updateSessionActivity();
      if (this._options.useCompression) {
        const _window = window;
        if (window.Worker) {
          let tmp5 = (function _loadWorker(arg0) {
            try {
              let tmp3 = arg0;
              if (!arg0) {
                tmp3 = (function _getWorkerUrl() {
                  if (typeof globalThis.__SENTRY_EXCLUDE_REPLAY_WORKER__ !== "undefined") {
                    if (globalThis.__SENTRY_EXCLUDE_REPLAY_WORKER__) {
                      return "";
                    }
                  }
                  const blob = new Blob(["var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=[\"unexpected EOF\",\"invalid block type\",\"invalid length/literal\",\"invalid distance\",\"stream finished\",\"no stream handler\",,\"no callback\",\"invalid UTF-8 data\",\"extra field too long\",\"date not in range 1980-2099\",\"filename too long\",\"stream finishing\",\"invalid zip data\"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(t,n){return t.f-n.f}),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort(function(t,n){return p[n.s]-p[t.s]||t.f-n.f});s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if(\"function\"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,s=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),a=s.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(s,n),O(s,a-8,r.d()),O(s,a-4,e),s}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){j.prototype.flush.call(this)},t}(),G=\"undefined\"!=typeof TextEncoder&&new TextEncoder,H=\"undefined\"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(G)return G.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error(\"Adding invalid event\");const n=this._hasEvents?\",\":\"\";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push(\"]\",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J((t,n)=>{this.deflate.push(t,n)}),this.stream.push(\"[\")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener(\"message\",function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&\"function\"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}}),postMessage({id:void 0,method:\"init\",success:!0,response:void 0});"]);
                  return URL.createObjectURL(blob);
                })();
              }
              if (tmp3) {
                if (closure_130) {
                  let str = "";
                  if (arg0) {
                    const _HermesInternal = HermesInternal;
                    str = " from " + arg0;
                  }
                  closure_133.log("Using compression worker" + str);
                }
                const worker = new globalThis.Worker(tmp4);
                const tmp18 = new closure_138(worker);
                return tmp18;
              }
            } catch (tmp20) {
              if (closure_130) {
                closure_133.exception(tmp20, "Failed to create compression worker");
              }
              return tmp;
            }
          })(tmp3);
        }
        self.eventBuffer = tmp5;
        self._removeListeners();
        self._addListeners();
        self._isEnabled = true;
        self._isPaused = false;
        self.startRecording();
      }
      if (closure_130) {
        closure_133.log("Using simple buffer");
      }
      tmp5 = new closure_135();
    }
  };
  items[28] = {
    key: "_initializeSessionForSampling",
    value: function _initializeSessionForSampling(previousSessionId) {
      const obj = { stickySession: this._options.stickySession, sessionSampleRate: this._options.sessionSampleRate, allowBuffering: this._options.errorSampleRate > 0 };
      this.session = callback4(obj, obj);
    }
  };
  items[29] = {
    key: "_checkSession",
    value: function _checkSession() {
      const self = this;
      if (this.session) {
        const session = self.session;
        const obj = { sessionIdleExpire: null, maxReplayDuration: null };
        obj[0] = self.timeouts.sessionIdleExpire;
        obj[1] = self._options.maxReplayDuration;
        let tmp2 = callback3(session, obj);
        if (tmp2) {
          let tmp3 = "buffer" !== session.sampled;
          if (!tmp3) {
            tmp3 = 0 !== session.segmentId;
          }
          tmp2 = tmp3;
        }
        let flag2 = !tmp2;
        if (tmp2) {
          self._refreshSession(session);
          flag2 = false;
        }
        return flag2;
      } else {
        return false;
      }
    }
  };
  let obj1 = { key: "_refreshSession", value: null };
  closure_2 = closure_2(function(arg0) {
    const self = this;
    closure_1 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj1 = _self;
              closure_3 = _self;
              closure_2 = tmp2;
              _self = closure_1;
              if (_self._isEnabled) {
                c4 = 1;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.stop({ reason: "refresh session" });
                return obj1;
              } else {
                c5 = 3;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_3.initializeSampling(_self.id);
          }
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp11) {
          c5 = tmp;
          throw tmp11;
        }
      }
    })();
  });
  obj1[1] = function _refreshSession(session) {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[30] = obj1;
  items[31] = {
    key: "_addListeners",
    value: function _addListeners() {
      let self = this;
      try {
        const _document = callback(dependencyMap[8]).GLOBAL_OBJ.document;
        const listener = _document.addEventListener("visibilitychange", self._handleVisibilityChange);
        const GLOBAL_OBJ = callback(dependencyMap[8]).GLOBAL_OBJ;
        const listener1 = GLOBAL_OBJ.addEventListener("blur", self._handleWindowBlur);
        const GLOBAL_OBJ2 = callback(dependencyMap[8]).GLOBAL_OBJ;
        const listener2 = GLOBAL_OBJ2.addEventListener("focus", self._handleWindowFocus);
        const GLOBAL_OBJ3 = callback(dependencyMap[8]).GLOBAL_OBJ;
        const listener3 = GLOBAL_OBJ3.addEventListener("keydown", self._handleKeyboardEvent);
        if (self.clickDetector) {
          let clickDetector = self.clickDetector;
          clickDetector.addListeners();
        }
        if (!self._hasInitializedCoreListeners) {
          (function addGlobalListeners(self) {
            let callback = self;
            const client = callback(dependencyMap[8]).getClient();
            let obj = callback(dependencyMap[8]);
            if (typeof closure_121 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            callback = self;
            let result = callback(dependencyMap[9]).addClickKeypressInstrumentationHandler((name) => {
              if (obj.isEnabled()) {
                obj = { category: null };
                const _HermesInternal = HermesInternal;
                ({ target, message } = (function getDomTarget(event) {
                  try {
                    if ("click" === tmp) {
                      let tmp3 = callback(event.event);
                    } else {
                      tmp3 = callback2(event.event);
                    }
                    obj = obj(obj[8]);
                    let str2 = obj.htmlTreeAsString(tmp3, { maxStringLength: 200 });
                    if (!str2) {
                      str2 = "<unknown>";
                    }
                    let str3 = str2;
                    obj = { target: null, message: null };
                    obj[0] = tmp3;
                    obj[1] = str3;
                    return obj;
                  } catch (err) {
                    str3 = "<unknown>";
                  }
                })(name));
                obj[0] = "ui." + name.name;
                const merged = Object.assign(closure_1_122(target, message));
                obj = { timestamp: null, type: "default" };
                const _Date = Date;
                obj[0] = Date.now() / 1000;
                const merged1 = Object.assign(obj);
                let clickDetector = "click" === name.name;
                if (clickDetector) {
                  const event = name.event;
                }
                if (clickDetector) {
                  clickDetector = obj.clickDetector;
                }
                if (clickDetector) {
                  target = undefined;
                  if (event != null) {
                    target = event.target;
                  }
                  clickDetector = target;
                }
                let shiftKey = !clickDetector;
                if (clickDetector) {
                  shiftKey = event.altKey;
                }
                if (!shiftKey) {
                  shiftKey = event.metaKey;
                }
                if (!shiftKey) {
                  shiftKey = event.ctrlKey;
                }
                if (!shiftKey) {
                  shiftKey = event.shiftKey;
                }
                if (!shiftKey) {
                  const clickDetector2 = obj.clickDetector;
                  const event2 = name.event;
                  let tmp12 = typeof event2 === "object";
                  if (typeof event2 === "object") {
                    tmp12 = event2;
                  }
                  if (tmp12) {
                    tmp12 = "target" in event2;
                  }
                  let target2 = event2;
                  if (tmp12) {
                    target2 = event2.target;
                  }
                  let tmp13 = target2;
                  if (target2) {
                    tmp13 = target2;
                    if (target2 instanceof globalThis.Element) {
                      tmp13 = target2.closest("button,a") || target2;
                      const tmp14 = target2.closest("button,a") || target2;
                    }
                  }
                  clickDetector2.handleClick(obj, tmp13);
                }
                if ("sentry.transaction" !== obj.category) {
                  const items = ["ui.click", "ui.input"];
                  if (items.includes(obj.category)) {
                    obj.triggerUserActivity();
                  } else {
                    const result = obj.checkAndHandleExpiredSession();
                  }
                  obj.addUpdate(() => {
                    obj = { type: closure_1_73.Custom, timestamp: null, data: null };
                    let num = _null.timestamp;
                    if (!num) {
                      num = 0;
                    }
                    obj[1] = 1000 * num;
                    obj = { tag: "breadcrumb", payload: null };
                    const normalizer = obj(_null[8]);
                    obj[1] = normalizer.normalize(_null, 10, 1000);
                    obj[2] = obj;
                    obj.throttledAddEvent(obj);
                    return "console" === _null.category;
                  });
                }
                const tmp2 = (function getDomTarget(event) {
                  try {
                    if ("click" === tmp) {
                      let tmp3 = callback(event.event);
                    } else {
                      tmp3 = callback2(event.event);
                    }
                    obj = obj(obj[8]);
                    let str2 = obj.htmlTreeAsString(tmp3, { maxStringLength: 200 });
                    if (!str2) {
                      str2 = "<unknown>";
                    }
                    let str3 = str2;
                    obj = { target: null, message: null };
                    obj[0] = tmp3;
                    obj[1] = str3;
                    return obj;
                  } catch (err) {
                    str3 = "<unknown>";
                  }
                })(name);
              }
            });
            let tmpResult = tmp(dependencyMap[9]);
            const result1 = tmpResult.addHistoryInstrumentationHandler((arg0) => {
              if (obj.isEnabled()) {
                const _Date = Date;
                ({ from, to } = arg0);
                const result = Date.now() / 1000;
                obj = { type: "navigation.push", start: null, end: null, name: null, data: null };
                obj[1] = result;
                obj[2] = result;
                obj[3] = to;
                obj = { previous: null };
                obj[0] = from;
                obj[4] = obj;
                const urls = obj.getContext().urls;
                urls.push(obj.name);
                obj.triggerUserActivity();
                obj.addUpdate(() => {
                  const items = [closure_0];
                  closure_0 = obj;
                  const mapped = items.map((item, index) => {
                    const start = item.start;
                    obj = { op: item.type, description: item.name, startTimestamp: start, endTimestamp: item.end, data: item.data };
                    let throttledAddEventResult = closure_0.throttledAddEvent(obj);
                    if (typeof throttledAddEventResult === "string") {
                      throttledAddEventResult = Promise.resolve(null);
                    }
                    return throttledAddEventResult;
                  });
                  return false;
                });
              }
            });
            callback = self;
            tmpResult = tmp(dependencyMap[8]);
            const client1 = tmpResult.getClient();
            if (client1) {
              client1.on("beforeAddBreadcrumb", (category) => {
                if (obj.isEnabled()) {
                  let merged4 = category;
                  if (category.category) {
                    let tmp3 = null;
                    if (merged4.category) {
                      const items = ["fetch", "xhr", "sentry.event", "sentry.transaction"];
                      tmp3 = null;
                      if (!items.includes(merged4.category)) {
                        category = merged4.category;
                        tmp3 = null;
                        if (!category.startsWith("ui.")) {
                          if ("console" === merged4.category) {
                            const data = merged4.data;
                            let _arguments;
                            if (data != null) {
                              _arguments = data.arguments;
                            }
                            let nowResult = globalThis;
                            const _Array = Array;
                            if (Array.isArray(_arguments)) {
                              if (0 !== _arguments.length) {
                                const mapped = _arguments.map((item, index) => {
                                  if (item) {
                                    if (typeof item === "string") {
                                      let combined = item;
                                      if (item.length > closure_1_13) {
                                        c0 = true;
                                        const _HermesInternal2 = HermesInternal;
                                        combined = "" + item.slice(0, closure_1_13) + "\u2026";
                                      }
                                      return combined;
                                    } else if (typeof item !== "object") {
                                      return item;
                                    } else {
                                      try {
                                        const normalizer = obj(obj6[8]);
                                        const normalizeResult = normalizer.normalize(item, 7);
                                        const _JSON = JSON;
                                        if (JSON.stringify(normalizeResult).length > closure_1_13) {
                                          c0 = true;
                                          const _JSON2 = JSON;
                                          const json = JSON.stringify(normalizeResult, null, 2);
                                          const _HermesInternal = HermesInternal;
                                          let combined1 = "" + json.slice(0, closure_1_13) + "\u2026";
                                        } else {
                                          combined1 = normalizeResult;
                                        }
                                        return combined1;
                                      } catch (err) {
                                      }
                                    }
                                  } else {
                                    return item;
                                  }
                                });
                                const merged = Object.assign(merged4);
                                obj = {};
                                const merged1 = Object.assign(merged4.data);
                                obj.arguments = mapped;
                                if (obj) {
                                  const obj1 = { _meta: null };
                                  const obj2 = { warnings: null };
                                  obj2[0] = ["CONSOLE_ARG_TRUNCATED"];
                                  obj1[0] = obj2;
                                  let obj3 = obj1;
                                } else {
                                  obj3 = {};
                                }
                                const merged2 = Object.assign(obj3);
                                obj.data = obj;
                                let obj4 = { timestamp: null, type: "default" };
                                const _Date2 = Date;
                                obj4[0] = Date.now() / 1000;
                                const merged3 = Object.assign(obj);
                              }
                            }
                            const obj5 = { timestamp: null, type: "default" };
                            const _Date3 = nowResult.Date;
                            nowResult = _Date3.now();
                            obj5[0] = nowResult / 1000;
                            merged4 = Object.assign(merged4);
                            obj4 = obj5;
                          } else {
                            let obj6 = { timestamp: null, type: "default" };
                            const _Date = Date;
                            obj6[0] = Date.now() / 1000;
                            const merged5 = Object.assign(merged4);
                            tmp3 = obj6;
                          }
                        }
                      }
                    }
                    if (tmp3) {
                      obj6 = tmp3;
                      if ("sentry.transaction" !== tmp3.category) {
                        const items1 = ["ui.click", "ui.input"];
                        if (items1.includes(tmp3.category)) {
                          obj.triggerUserActivity();
                        } else {
                          const result = obj.checkAndHandleExpiredSession();
                        }
                        obj.addUpdate(() => {
                          obj = { type: closure_1_73.Custom, timestamp: null, data: null };
                          let num = _null.timestamp;
                          if (!num) {
                            num = 0;
                          }
                          obj[1] = 1000 * num;
                          obj = { tag: "breadcrumb", payload: null };
                          const normalizer = obj(_null[8]);
                          obj[1] = normalizer.normalize(_null, 10, 1000);
                          obj[2] = obj;
                          obj.throttledAddEvent(obj);
                          return "console" === _null.category;
                        });
                      }
                    }
                  }
                }
              });
            }
            callback3(self);
            callback = self;
            let merged = Object.assign((type, originalException) => {
              if (obj.isEnabled()) {
                if (!obj.isPaused()) {
                  if ("replay_event" === type.type) {
                    delete tmp[tmp2];
                    return type;
                  } else {
                    const type3 = type.type;
                    if (type3) {
                      if ("transaction" !== type.type) {
                        if ("feedback" !== type.type) {
                          return type;
                        }
                      }
                    }
                    if (obj.checkAndHandleExpiredSession()) {
                      if ("feedback" === type.type) {
                        obj.flush();
                        type.contexts.feedback.replay_id = obj.getSessionId();
                        closure_1 = type;
                        obj.triggerUserActivity();
                        obj.addUpdate(() => {
                          const timestamp = type.timestamp;
                          let flag = !timestamp;
                          if (timestamp) {
                            obj = { type: null, timestamp: null, data: null };
                            obj[0] = closure_1_73.Custom;
                            obj[1] = 1000 * type.timestamp;
                            obj = { timestamp: null, type: "default", category: "sentry.feedback", data: null };
                            obj[0] = type.timestamp;
                            const obj1 = { feedbackId: null };
                            obj1[0] = type.event_id;
                            obj[3] = obj1;
                            obj[1] = obj;
                            obj[2] = obj;
                            obj.throttledAddEvent(obj);
                            flag = false;
                          }
                          return flag;
                        });
                        return type;
                      } else {
                        type = type.type;
                        if (!type) {
                          const exception = type.exception;
                          let length;
                          if (exception != null) {
                            const values = exception.values;
                            if (values != null) {
                              length = values.length;
                            }
                          }
                          type = !length;
                        }
                        if (!type) {
                          originalException = originalException.originalException;
                          let __rrweb__;
                          if (originalException != null) {
                            __rrweb__ = originalException.__rrweb__;
                          }
                          type = !__rrweb__;
                        }
                        if (!type) {
                          if (!obj.getOptions()._experiments.captureExceptions) {
                            if (closure_1_130) {
                              closure_1_133.log("Ignoring error from rrweb internals", type);
                            }
                            return null;
                          }
                        }
                        let tmp20 = "buffer" === obj.recordingMode;
                        if (tmp20) {
                          tmp20 = type.message !== closure_1_11;
                        }
                        if (tmp20) {
                          const exception2 = type.exception;
                          let type2 = !exception2;
                          if (exception2) {
                            type2 = type.type;
                          }
                          tmp20 = !type2;
                        }
                        if (tmp20) {
                          const errorSampleRate = obj.getOptions().errorSampleRate;
                          let tmp22 = undefined !== errorSampleRate;
                          if (tmp22) {
                            const _Math = Math;
                            tmp22 = Math.random() < errorSampleRate;
                          }
                          tmp20 = tmp22;
                        }
                        let tmp24 = tmp20;
                        if (!tmp20) {
                          tmp24 = "session" === obj.recordingMode;
                        }
                        if (tmp24) {
                          obj = {};
                          const merged = Object.assign(type.tags);
                          obj.replayId = obj.getSessionId();
                          type.tags = obj;
                        }
                        if (tmp20) {
                          if ("buffer" === obj.recordingMode) {
                            const session = obj.session;
                            let sampled;
                            if (session != null) {
                              sampled = session.sampled;
                            }
                            if ("buffer" === sampled) {
                              const session2 = obj.session;
                              session2.dirty = true;
                              if (obj.getOptions().stickySession) {
                                closure_1_141(session2);
                              }
                            }
                          }
                        }
                        return type;
                      }
                    } else {
                      const currentScope = sessionId(closure_1_1[8]).getCurrentScope();
                      if (currentScope.getPropagationContext().dsc) {
                        delete tmp5[tmp4];
                      }
                      let tmp6Result = sessionId(closure_1_1[8]);
                      const activeSpan = tmp6Result.getActiveSpan();
                      if (activeSpan) {
                        tmp6Result = sessionId(closure_1_1[8]);
                        const dynamicSamplingContextFromSpan = tmp6Result.getDynamicSamplingContextFromSpan(activeSpan);
                        delete tmp3[tmp2];
                      }
                      return type;
                    }
                  }
                }
              }
              return type;
            }, { id: "Replay" });
            let obj3 = callback(dependencyMap[9]);
            callback(dependencyMap[8]).addEventProcessor(merged);
            if (client) {
              client.on("beforeSendEvent", (type) => {
                if (tmp) {
                  const exception = type.exception;
                  let value;
                  if (exception != null) {
                    const values = exception.values;
                    if (values != null) {
                      if (values[0] != null) {
                        value = iter.value;
                      }
                    }
                  }
                  if (typeof value === "string") {
                    if (value.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/)) {
                      const obj = { url: null };
                      obj[0] = sessionId(closure_1_1[8]).getLocationHref();
                      obj[1] = obj;
                      const obj1 = { timestamp: null, type: "default" };
                      const _Date = Date;
                      obj1[0] = Date.now() / 1000;
                      const merged = Object.assign(obj);
                      if ("sentry.transaction" !== obj1.category) {
                        const items = ["ui.click", "ui.input"];
                        if (items.includes(obj1.category)) {
                          obj.triggerUserActivity();
                        } else {
                          const result = obj.checkAndHandleExpiredSession();
                        }
                        obj.addUpdate(() => {
                          obj = { type: closure_1_73.Custom, timestamp: null, data: null };
                          let num = _null.timestamp;
                          if (!num) {
                            num = 0;
                          }
                          obj[1] = 1000 * num;
                          obj = { tag: "breadcrumb", payload: null };
                          const normalizer = obj(_null[8]);
                          obj[1] = normalizer.normalize(_null, 10, 1000);
                          obj[2] = obj;
                          obj.throttledAddEvent(obj);
                          return "console" === _null.category;
                        });
                      }
                      const obj4 = sessionId(closure_1_1[8]);
                    }
                  }
                }
                tmp = obj.isEnabled() && !type.type;
              });
              client.on("afterSendEvent", (type, statusCode) => {
                if (obj.isEnabled()) {
                  type = type.type;
                  if (!type) {
                    statusCode = statusCode.statusCode;
                    let tmp4 = !statusCode;
                    if (statusCode) {
                      tmp4 = statusCode < 200;
                    }
                    if (!tmp4) {
                      tmp4 = statusCode >= 300;
                    }
                    if (!tmp4) {
                      if ("transaction" === type.type) {
                        const context = obj.getContext();
                        const contexts = type.contexts;
                        let trace_id;
                        if (contexts != null) {
                          const trace = contexts.trace;
                          if (trace != null) {
                            trace_id = trace.trace_id;
                          }
                        }
                        if (trace_id) {
                          trace_id = context.traceIds.size < 100;
                        }
                        if (trace_id) {
                          const traceIds = context.traceIds;
                          traceIds.add(type.contexts.trace.trace_id);
                        }
                      } else {
                        const context1 = obj.getContext();
                        let event_id = type.event_id;
                        if (event_id) {
                          event_id = context1.errorIds.size < 100;
                        }
                        if (event_id) {
                          const errorIds = context1.errorIds;
                          errorIds.add(type.event_id);
                        }
                        if ("buffer" === obj.recordingMode) {
                          if (type.tags) {
                            if (type.tags.replayId) {
                              const beforeErrorSampling = obj.getOptions().beforeErrorSampling;
                              if (typeof beforeErrorSampling !== "function") {
                                const timerId = sessionId(closure_1_1[9]).setTimeout(closure_1_2(function*() {
                                  closure_1 = tmp3;
                                  c3 = 1;
                                  yield closure_1_0.sendBufferedReplayOrFlush();
                                  if (1 === tmp7) {
                                    c3 = 0;
                                    closure_0 = closure_2;
                                    closure_0.handleException(closure_0);
                                    c5 = 3;
                                  } else if (arg0 === 1) {
                                    c5 = 3;
                                    throw arg1;
                                  } else if (arg0 !== 2) {
                                    c3 = 0;
                                  }
                                  c3 = 0;
                                  return arg1;
                                }));
                                const obj2 = sessionId(closure_1_1[9]);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              });
              client.on("createDsc", (arg0) => {
                sessionId = sessionId.getSessionId();
                let isEnabledResult = sessionId;
                if (sessionId) {
                  isEnabledResult = obj.isEnabled();
                }
                if (isEnabledResult) {
                  isEnabledResult = "session" === obj.recordingMode;
                }
                if (isEnabledResult) {
                  isEnabledResult = obj.checkAndHandleExpiredSession();
                }
                if (isEnabledResult) {
                  arg0.replay_id = sessionId;
                }
              });
              client.on("spanStart", (lastActiveSpan) => {
                closure_0.lastActiveSpan = lastActiveSpan;
              });
              client.on("spanEnd", (lastActiveSpan) => {
                closure_0.lastActiveSpan = lastActiveSpan;
              });
              callback = callback2((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                c3 = 0;
                c4 = 0;
                return (function*(arg0, arg1) {
                  if (c4 === 2) {
                    c4 = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp4 === 3) {
                    if (arg0 === 1) {
                      throw arg1;
                    } else if (arg0 === 2) {
                      let obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } else {
                    try {
                      c4 = 2;
                      if (0 === c3) {
                        if (arg0 === 1) {
                          c4 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c4 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          closure_2 = tmp2;
                          let sessionId;
                          sessionId = sessionId.getSessionId();
                          let includeReplay;
                          if (sessionId != null) {
                            includeReplay = sessionId.includeReplay;
                          }
                          if (includeReplay) {
                            includeReplay = obj5.isEnabled();
                          }
                          if (includeReplay) {
                            includeReplay = sessionId;
                          }
                          if (includeReplay) {
                            const contexts = tmp17.contexts;
                            let feedback;
                            if (contexts != null) {
                              feedback = contexts.feedback;
                            }
                            includeReplay = feedback;
                          }
                          if (includeReplay) {
                            if ("api" === tmp17.contexts.feedback.source) {
                              c3 = 1;
                              c4 = 1;
                              const obj1 = { value: null, done: false };
                              obj1[0] = obj5.sendBufferedReplayOrFlush();
                              return obj1;
                            }
                          }
                          c4 = 3;
                          return { value: "HermesInternal", done: "HermesInternal" };
                        }
                      } else if (arg0 === 1) {
                        c4 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      }
                      sessionId.contexts.feedback.replay_id = sessionId;
                    } catch (tmp11) {
                      c4 = tmp;
                      throw tmp11;
                    }
                  }
                })();
              });
              client.on("beforeSendFeedback", function(arg0, arg1) {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              });
              client.on("openFeedbackWidget", callback2(function*() {
                if (c0 === 2) {
                  c0 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else {
                  try {
                    c0 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c0 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        c1 = 1;
                        c0 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = c0.sendBufferedReplayOrFlush();
                        return obj1;
                      }
                    } else if (arg0 === 1) {
                      c0 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      c0 = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } catch (tmp6) {
                    c0 = tmp;
                    throw tmp6;
                  }
                }
              }));
            }
            const tmpResult1 = callback(dependencyMap[8]);
          })(self);
          self._hasInitializedCoreListeners = true;
        }
        self._performanceCleanupCallback = (function setupPerformanceObserver(self) {
          function onEntries(arg0) {
            const entries = arg0.entries;
            const item = entries.forEach(closure_1);
          }
          const items = [];
          const items1 = ["navigation", "paint", "resource"];
          let item = items1.forEach((item, index) => {
            items.push(lib(_self[9]).addPerformanceInstrumentationHandler(item, onEntries));
          });
          let callback = closure_125;
          let dependencyMap = self;
          const result = callback(dependencyMap[9]).addLcpInstrumentationHandler((metric) => {
            const prop = _self.replayPerformanceEntries;
            prop.push(lib(metric.metric));
          });
          const obj = callback(dependencyMap[9]);
          callback = closure_127;
          dependencyMap = self;
          const result1 = callback(dependencyMap[9]).addClsInstrumentationHandler((metric) => {
            const prop = _self.replayPerformanceEntries;
            prop.push(lib(metric.metric));
          });
          const obj2 = callback(dependencyMap[9]);
          callback = closure_128;
          dependencyMap = self;
          items.push(result, result1, callback(dependencyMap[9]).addInpInstrumentationHandler((metric) => {
            const prop = _self.replayPerformanceEntries;
            prop.push(lib(metric.metric));
          }));
          return () => {
            const item = items.forEach((item, index) => item());
          };
        })(self);
      } catch (tmp9) {
        obj.handleException(tmp9);
      }
    }
  };
  items[32] = {
    key: "_removeListeners",
    value: function _removeListeners() {
      const self = this;
      try {
        const _document = callback(dependencyMap[8]).GLOBAL_OBJ.document;
        const removed = _document.removeEventListener("visibilitychange", self._handleVisibilityChange);
        const GLOBAL_OBJ = callback(dependencyMap[8]).GLOBAL_OBJ;
        const removed1 = GLOBAL_OBJ.removeEventListener("blur", self._handleWindowBlur);
        const GLOBAL_OBJ2 = callback(dependencyMap[8]).GLOBAL_OBJ;
        const removed2 = GLOBAL_OBJ2.removeEventListener("focus", self._handleWindowFocus);
        const GLOBAL_OBJ3 = callback(dependencyMap[8]).GLOBAL_OBJ;
        const removed3 = GLOBAL_OBJ3.removeEventListener("keydown", self._handleKeyboardEvent);
        if (self.clickDetector) {
          const clickDetector = self.clickDetector;
          clickDetector.removeListeners();
        }
        if (self._performanceCleanupCallback) {
          const result = self._performanceCleanupCallback();
        }
      } catch (tmp9) {
        obj.handleException(tmp9);
      }
    }
  };
  items[33] = {
    key: "_doChangeToBackgroundTasks",
    value: function _doChangeToBackgroundTasks(arg0) {
      const self = this;
      if (this.session) {
        const obj = { maxReplayDuration: null, sessionIdleExpire: null };
        obj[0] = self._options.maxReplayDuration;
        obj[1] = self.timeouts.sessionIdleExpire;
        if (!callback3(self.session, obj)) {
          if (arg0) {
            const result = self._createCustomBreadcrumb(arg0);
          }
          self.conditionalFlush();
        }
      }
    }
  };
  items[34] = {
    key: "_doChangeToForegroundTasks",
    value: function _doChangeToForegroundTasks(arg0) {
      const self = this;
      if (this.session) {
        if (self.checkAndHandleExpiredSession()) {
          if (arg0) {
            const result = self._createCustomBreadcrumb(arg0);
          }
        } else if (closure_130) {
          closure_133.log("Document has become active, but session has expired");
        }
      }
    }
  };
  items[35] = {
    key: "_updateUserActivity",
    value: function _updateUserActivity(closure_1) {
      let timestamp = closure_1;
      if (closure_1 === undefined) {
        const _Date = Date;
        timestamp = Date.now();
      }
      this._lastActivity = timestamp;
    }
  };
  items[36] = {
    key: "_updateSessionActivity",
    value: function _updateSessionActivity(closure_1) {
      let timestamp = closure_1;
      if (closure_1 === undefined) {
        const _Date = Date;
        timestamp = Date.now();
      }
      const self = this;
      if (this.session) {
        self.session.lastActivity = timestamp;
        self._maybeSaveSession();
      }
    }
  };
  items[37] = {
    key: "_createCustomBreadcrumb",
    value: function _createCustomBreadcrumb(arg0) {
      const self = this;
      closure_0 = arg0;
      this.addUpdate(() => {
        const obj = { type: closure_1_73.Custom, timestamp: null, data: null };
        let num = timestamp.timestamp;
        if (!num) {
          num = 0;
        }
        obj[1] = num;
        obj[2] = { tag: "breadcrumb", payload: timestamp };
        self.throttledAddEvent(obj);
      });
    }
  };
  items[38] = {
    key: "_addPerformanceEntries",
    value: function _addPerformanceEntries() {
      let self = this;
      const performanceEntries = this.performanceEntries;
      const mapped = performanceEntries.map(closure_124);
      const found = mapped.filter(Boolean);
      const combined = found.concat(this.replayPerformanceEntries);
      this.performanceEntries = [];
      this.replayPerformanceEntries = [];
      let found1 = combined;
      if (this._requiresManualStart) {
        self = self._context.initialTimestamp / 1000;
        found1 = combined.filter((item, index) => item.start >= self);
      }
      return Promise.all(found1.map((item, index) => {
        const start = item.start;
        obj = { op: item.type, description: item.name, startTimestamp: start, endTimestamp: item.end, data: item.data };
        let throttledAddEventResult = closure_0.throttledAddEvent(obj);
        if (typeof throttledAddEventResult === "string") {
          throttledAddEventResult = Promise.resolve(null);
        }
        return throttledAddEventResult;
      }));
    }
  };
  items[39] = {
    key: "_clearContext",
    value: function _clearContext() {
      const errorIds = this._context.errorIds;
      errorIds.clear();
      const traceIds = this._context.traceIds;
      traceIds.clear();
      this._context.urls = [];
    }
  };
  items[40] = {
    key: "_updateInitialTimestampFromEventBuffer",
    value: function _updateInitialTimestampFromEventBuffer() {
      const self = this;
      ({ session, eventBuffer } = this);
      if (session) {
        if (eventBuffer) {
          if (!self._requiresManualStart) {
            if (!session.segmentId) {
              const earliestTimestamp = eventBuffer.getEarliestTimestamp();
              let tmp2 = earliestTimestamp;
              if (earliestTimestamp) {
                tmp2 = earliestTimestamp < self._context.initialTimestamp;
              }
              if (tmp2) {
                self._context.initialTimestamp = earliestTimestamp;
              }
            }
          }
        }
      }
    }
  };
  items[41] = {
    key: "_popEventContext",
    value: function _popEventContext() {
      this._clearContext();
      return { initialTimestamp: this._context.initialTimestamp, initialUrl: this._context.initialUrl, errorIds: Array.from(this._context.errorIds), traceIds: Array.from(this._context.traceIds), urls: this._context.urls };
    }
  };
  let obj2 = { key: "_runFlush", value: null };
  closure_1 = closure_2(function() {
    closure_0 = this;
    closure_6 = 0;
    c4 = 0;
    return (function*() {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = sessionId;
              closure_2 = tmp3;
              sessionId = tmp5;
              closure_8 = sessionId;
              sessionId = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              c4 = undefined;
              closure_5 = undefined;
              c6 = undefined;
              c7 = undefined;
              sessionId = sessionId.getSessionId();
              if (sessionId.session) {
                if (obj13.eventBuffer) {
                  if (sessionId) {
                    c6 = 1;
                    c7 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = obj13._addPerformanceEntries();
                    return obj1;
                  }
                }
              }
              if (closure_1_130) {
                closure_1_133.error("No session or eventBuffer found to flush.");
              }
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              const eventBuffer2 = closure_3.eventBuffer;
              let hasEvents;
              if (eventBuffer2 != null) {
                hasEvents = eventBuffer2.hasEvents;
              }
              if (hasEvents) {
                c6 = 3;
                c7 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = (function addMemoryEntry(closure_3) {
                  const self = this;
                  const apply = closure_167.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_3);
                return obj3;
              }
            }
          } else if (2 === tmp8) {
            c4 = 0;
            sessionId = closure_5;
            closure_3.handleException(sessionId);
            closure_3.stop({ reason: "sendReplay" });
            let obj5 = sessionId(closure_1_1[8]);
            const client = obj5.getClient();
            if (client) {
              str2 = "send_error";
              if (sessionId instanceof closure_1_173) {
                str2 = "ratelimit_backoff";
              }
              client.recordDroppedEvent(str2, "replay");
            }
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else if (closure_3.eventBuffer) {
                if (closure_1_1 === closure_3.getSessionId()) {
                  c4 = 1;
                  const result = closure_3._updateInitialTimestampFromEventBuffer();
                  const _Date = Date;
                  closure_2 = Date.now();
                  if (closure_2 - closure_3._context.initialTimestamp > closure_3._options.maxReplayDuration + 30000) {
                    const _Error = Error;
                    const error = new Error("Session is too long, not sending replay");
                    throw error;
                  } else {
                    closure_3 = closure_3._popEventContext();
                    const session = closure_3.session;
                    session.segmentId = +session.segmentId + 1;
                    c4 = tmp14;
                    closure_3._maybeSaveSession();
                    const eventBuffer = closure_3.eventBuffer;
                    c6 = 4;
                    c7 = 1;
                    obj5 = { value: null, done: false };
                    obj5[0] = eventBuffer.finish();
                    return obj5;
                  }
                }
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                c7 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                closure_5 = arg1;
                const obj7 = { replayId: null, recordingData: null, segmentId: null, eventContext: null, session: null, timestamp: null, onError: null };
                obj7[0] = sessionId;
                obj7[1] = closure_5;
                obj7[2] = c4;
                obj7[3] = closure_3;
                obj7[4] = closure_3.session;
                obj7[5] = closure_2;
                obj7[6] = function onError(arg0) {
                  return closure_8.handleException(arg0);
                };
                c6 = 5;
                c7 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = closure_1_174(obj7);
                return obj8;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c7 = 3;
        } catch (tmp46) {
          closure_5 = tmp46;
          if (tmp4 === c4) {
            c7 = tmp2;
            throw tmp46;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  obj2[1] = function _runFlush() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[42] = obj2;
  let obj3 = { key: "_flush", value: null };
  closure_0 = closure_2(function() {
    const self = this;
    let started = arg0;
    c7 = 0;
    c8 = 0;
    let eventBuffer = 0;
    const iter = (function*() {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = flag;
              c3 = tmp4;
              c2 = flag;
              flag = undefined;
              let obj1 = c1;
              if (c1 === undefined) {
                obj1 = {};
              }
              flag = obj1.force;
              if (flag === undefined) {
                flag = false;
              }
              c1 = undefined;
              c2 = undefined;
              c3 = undefined;
              c4 = undefined;
              eventBuffer = undefined;
              let _flushLock;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                if (c4._isEnabled) {
                  if (c4.checkAndHandleExpiredSession()) {
                    if (c4.session) {
                      started = c4.session.started;
                      const _Date = Date;
                      closure_2 = Date.now() - started;
                      const _debouncedFlush = c4._debouncedFlush;
                      _debouncedFlush.cancel();
                      closure_3 = closure_2 < c4._options.minReplayDuration;
                      closure_4 = closure_2 > c4._options.maxReplayDuration + 5000;
                      if (!closure_3) {
                        if (!closure_4) {
                          eventBuffer = c4.eventBuffer;
                          let tmp50 = eventBuffer;
                          if (eventBuffer) {
                            tmp50 = 0 === c4.session.segmentId;
                          }
                          if (tmp50) {
                            tmp50 = !eventBuffer.hasCheckout;
                          }
                          if (tmp50) {
                            tmp50 = closure_1_130;
                          }
                          if (tmp50) {
                            closure_1_133.log("Flushing initial segment without checkout.");
                          }
                          _flushLock = c4._flushLock;
                          if (!c4._flushLock) {
                            c4._flushLock = c4._runFlush();
                          }
                          eventBuffer = 2;
                          c7 = 4;
                          c8 = 1;
                          const obj3 = { value: null, done: false };
                          obj3[0] = c4._flushLock;
                          return obj3;
                        }
                      }
                      if (closure_1_130) {
                        const _Math = Math;
                        const rounded = Math.floor(closure_2 / 1000);
                        let str = "long";
                        if (closure_3) {
                          str = "short";
                        }
                        const _HermesInternal = HermesInternal;
                        closure_1_133.log("Session duration (" + rounded + "s) is too " + str + ", not sending replay.");
                      }
                      if (closure_3) {
                        c4._debouncedFlush();
                      }
                      c8 = 3;
                      const obj4 = { value: null, done: true };
                      obj4[0] = undefined;
                      return obj4;
                    }
                  } else if (closure_1_130) {
                    closure_1_133.error("Attempting to finish replay event after session expired.");
                  }
                }
                c8 = 3;
              }
            } else if (2 !== tmp8) {
              if (3 === tmp8) {
                eventBuffer = 1;
                c7 = _flushLock;
                c4.handleException(c7);
              } else if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                eventBuffer = 0;
                c4._flushLock = undefined;
                if (_flushLock) {
                  c4._debouncedFlush();
                }
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                eventBuffer = 1;
              }
              eventBuffer = 0;
              c4._flushLock = undefined;
              if (_flushLock) {
                c4._debouncedFlush();
              }
            }
            eventBuffer = 0;
            c4._flushLock = undefined;
            if (_flushLock) {
              c4._debouncedFlush();
            }
            throw _flushLock;
          }
        } catch (tmp77) {
          _flushLock = tmp77;
          if (tmp5 === eventBuffer) {
            c8 = tmp3;
            throw tmp77;
          } else if (tmp2 === tmp79) {
            c7 = tmp;
          } else {
            c7 = tmp3;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  obj3[1] = function _flush() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[43] = obj3;
  items[44] = {
    key: "_maybeSaveSession",
    value: function _maybeSaveSession() {
      const self = this;
      if (tmp) {
        callback2(self.session);
      }
      tmp = this.session && self._options.stickySession;
    }
  };
  items[45] = {
    key: "_onMutationHandler",
    value: function _onMutationHandler(arr) {
      const self = this;
      const ignoreMutations = this._options._experiments.ignoreMutations;
      let length;
      if (ignoreMutations != null) {
        length = ignoreMutations.length;
      }
      if (length) {
        if (arr.some((item, index) => {
          let matchesResult;
          const obj = (function closestElementOfNode(target) {
            if (target) {
              try {
                let parentElement = target;
                if (target.nodeType !== target.ELEMENT_NODE) {
                  parentElement = target.parentElement;
                }
                return parentElement;
              } catch (err) {
                return null;
              }
            } else {
              return null;
            }
          })(item.target);
          if (obj != null) {
            matchesResult = obj.matches(tmp2);
          }
          return matchesResult;
        })) {
          return false;
        }
      }
      length = arr.length;
      const mutationLimit = self._options.mutationLimit;
      let tmp2 = mutationLimit;
      if (mutationLimit) {
        tmp2 = length > mutationLimit;
      }
      if (length > self._options.mutationBreadcrumbLimit) {
        let obj = { count: null, limit: null };
        obj[0] = length;
        obj[1] = tmp2;
        obj[1] = obj;
        obj = { timestamp: null, type: "default" };
        const _Date = Date;
        obj[0] = Date.now() / 1000;
        const merged = Object.assign(obj);
        const result = self._createCustomBreadcrumb(obj);
      }
      let flag = !tmp2;
      if (tmp2) {
        const obj1 = { reason: "mutationLimit", forceFlush: null };
        obj1[1] = "session" === self.recordingMode;
        self.stop(obj1);
        flag = false;
      }
      return flag;
    }
  };
  return closure_8(ReplayContainer, items);
}

function f21493() {
  class Replay {
    constructor() {
      obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      num = obj.flushMinDelay;
      if (num === undefined) {
        num = 5000;
      }
      num2 = obj.flushMaxDelay;
      if (num2 === undefined) {
        num2 = 5500;
      }
      num3 = obj.minReplayDuration;
      if (num3 === undefined) {
        num3 = 4999;
      }
      num4 = obj.maxReplayDuration;
      if (num4 === undefined) {
        num4 = 3600000;
      }
      flag = obj.stickySession;
      if (flag === undefined) {
        flag = true;
      }
      flag2 = obj.useCompression;
      if (flag2 === undefined) {
        flag2 = true;
      }
      ({ _experiments, workerUrl } = obj);
      if (_experiments === undefined) {
        _experiments = {};
      }
      flag3 = obj.maskAllText;
      if (flag3 === undefined) {
        flag3 = true;
      }
      c0 = flag3;
      flag4 = obj.maskAllInputs;
      if (flag4 === undefined) {
        flag4 = true;
      }
      flag5 = obj.blockAllMedia;
      if (flag5 === undefined) {
        flag5 = true;
      }
      num5 = obj.mutationBreadcrumbLimit;
      if (num5 === undefined) {
        num5 = 750;
      }
      num6 = obj.mutationLimit;
      if (num6 === undefined) {
        num6 = 10000;
      }
      num7 = obj.slowClickTimeout;
      if (num7 === undefined) {
        num7 = 7000;
      }
      prop = obj.slowClickIgnoreSelectors;
      if (prop === undefined) {
        prop = [];
      }
      prop1 = obj.networkDetailAllowUrls;
      if (prop1 === undefined) {
        prop1 = [];
      }
      prop2 = obj.networkDetailDenyUrls;
      if (prop2 === undefined) {
        prop2 = [];
      }
      flag6 = obj.networkCaptureBodies;
      if (flag6 === undefined) {
        flag6 = true;
      }
      prop3 = obj.networkRequestHeaders;
      if (prop3 === undefined) {
        prop3 = [];
      }
      prop4 = obj.networkResponseHeaders;
      if (prop4 === undefined) {
        prop4 = [];
      }
      mask = obj.mask;
      if (mask === undefined) {
        mask = [];
      }
      maskAttributes = obj.maskAttributes;
      if (maskAttributes === undefined) {
        maskAttributes = ["title", "placeholder", "aria-label"];
      }
      closure_1 = maskAttributes;
      unmask = obj.unmask;
      if (unmask === undefined) {
        unmask = [];
      }
      block = obj.block;
      if (block === undefined) {
        block = [];
      }
      unblock = obj.unblock;
      if (unblock === undefined) {
        unblock = [];
      }
      ignore = obj.ignore;
      if (ignore === undefined) {
        ignore = [];
      }
      ({ maskFn, attachRawBodyFromRequest, beforeAddRecordingEvent, beforeErrorSampling, onError } = obj);
      if (attachRawBodyFromRequest === undefined) {
        attachRawBodyFromRequest = false;
      }
      self = this;
      closure_2 = undefined;
      tmp = closure_1_7(this, c0);
      this.name = "Replay";
      obj = { maskTextSelector: items.join(","), unmaskTextSelector: items1.join(","), blockSelector: items2.join(","), unblockSelector: items3.join(","), ignoreSelector: items4.join(",") };
      items = [...[".sentry-mask", "[data-sentry-mask]"]];
      items1 = [...[]];
      items2 = [...[".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]];
      items3 = [...[]];
      items4 = [...[".sentry-ignore", "[data-sentry-ignore]", "input[type=\"file\"]"]];
      closure_2 = obj;
      obj1 = {
        maskAllInputs: flag4,
        maskAllText: flag3,
        maskInputOptions: { password: true },
        maskTextFn: maskFn,
        maskInputFn: maskFn,
        maskAttributeFn(arg0, str, tagName) {
              let tmp2 = str;
              if (flag3) {
                if (!maskAttributes.unmaskTextSelector) {
                  if (maskAttributes.includes(arg0)) {
                    let replaced = str.replace(/[\S]/g, "*");
                  } else {
                    replaced = str;
                    if ("value" === arg0) {
                      replaced = str;
                      if ("INPUT" === tagName.tagName) {
                        const items = ["submit", "button"];
                        tagName.getAttribute("type") || "";
                        replaced = str;
                      }
                    }
                  }
                  let tmp4 = replaced;
                } else {
                  tmp4 = str;
                }
                tmp2 = tmp4;
              }
              return tmp2;
            }
      };
      merged = Object.assign(obj);
      obj1.slimDOMOptions = "all";
      obj1.inlineStylesheet = true;
      obj1.inlineImages = false;
      obj1.collectFonts = true;
      obj1.errorHandler = function errorHandler(arg0) {
        try {
          arg0.__rrweb__ = true;
        } catch (err) {
        }
      };
      obj1.recordCrossOriginIframes = Boolean(_experiments.recordCrossOriginIframes);
      this._recordingOptions = obj1;
      obj2 = { flushMinDelay: num, flushMaxDelay: num2, minReplayDuration: Math.min(num3, 50000), maxReplayDuration: Math.min(num4, closure_1_15), stickySession: flag, useCompression: flag2, workerUrl, blockAllMedia: flag5, maskAllInputs: flag4, maskAllText: flag3, mutationBreadcrumbLimit: num5, mutationLimit: num6, slowClickTimeout: num7, slowClickIgnoreSelectors: prop, networkDetailAllowUrls: prop1, networkDetailDenyUrls: prop2, networkCaptureBodies: flag6, networkRequestHeaders: items5, networkResponseHeaders: items6, beforeAddRecordingEvent, beforeErrorSampling, onError, attachRawBodyFromRequest, _experiments };
      items5 = [...closure_1_179, ...prop3.map((item, index) => item.toLowerCase())];
      items6 = [...closure_1_179, ...prop4.map((item, index) => item.toLowerCase())];
      this._initialOptions = obj2;
      if (!this._initialOptions.blockAllMedia) {
        if (self._isInitialized) {
          tmp9 = Replay;
          tmp10 = closure_1_1;
          obj5 = Replay(closure_1_1[8]);
          if (obj5.isBrowser()) {
            _Error = Error;
            tmp11 = new.target;
            str2 = "Multiple Sentry Session Replay instances are not supported";
            tmp12 = new.target;
            error = new Error("Multiple Sentry Session Replay instances are not supported");
            tmp14 = error;
            throw error;
          }
        }
        self._isInitialized = true;
        return;
      } else {
        _recordingOptions = self._recordingOptions;
        if (self._recordingOptions.blockSelector) {
          tmp4 = closure_1_178;
          _HermesInternal = HermesInternal;
          str = "";
          combined = "" + self._recordingOptions.blockSelector + "," + closure_1_178;
        } else {
          combined = closure_1_178;
        }
        _recordingOptions.blockSelector = combined;
        _recordingOptions = self._recordingOptions;
        _Set = Set;
        tmp5 = new.target;
        tmp6 = new.target;
        set = new Set(["background-image"]);
        tmp8 = set;
        _recordingOptions.ignoreCSSAttributes = set;
      }
      return;
    }
  }
  let obj = {
    key: "_isInitialized",
    get() {
      return closure_181;
    },
    set(arg0) {
      closure_181 = arg0;
    }
  };
  let items = [
    obj,
    {
      key: "afterAllSetup",
      value: function afterAllSetup(getOptions) {
        const self = this;
        const obj = Replay(dependencyMap[8]);
        if (tmp) {
          if (self._initialOptions.attachRawBodyFromRequest) {
            (function _INTERNAL_instrumentRequestInterface() {
              if (typeof Request !== "undefined") {
                if (!c182) {
                  try {
                    class SentryRequest {
                      constructor(arg0, arg1) {
                        tmp = new Request(arg0, arg1);
                        body = undefined;
                        if (arg1 != null) {
                          body = arg1.body;
                        }
                        if (null != body) {
                          tmp3 = closure_1_180;
                          tmp[closure_1_180] = arg1.body;
                        }
                        return tmp;
                      }
                    }
                    SentryRequest.prototype = tmp.prototype;
                    Request(table[8]).GLOBAL_OBJ.Request = SentryRequest;
                    c182 = true;
                  } catch (err) {
                  }
                }
              }
            })();
          }
          self._setup(getOptions);
          self._initialize(getOptions);
        }
      }
    },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  
  ];
  obj = {
    key: "start",
    value: function start() {
      if (this._replay) {
        const _replay = this._replay;
        _replay.start();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "startBuffering",
    value: function startBuffering() {
      if (this._replay) {
        const _replay = this._replay;
        _replay.startBuffering();
      }
    }
  };
  items[4] = {
    key: "stop",
    value: function stop() {
      const self = this;
      if (this._replay) {
        const _replay = self._replay;
        const obj = { forceFlush: null };
        obj[0] = "session" === self._replay.recordingMode;
        let stopResult = _replay.stop(obj);
      } else {
        stopResult = Promise.resolve();
      }
      return stopResult;
    }
  };
  items[5] = {
    key: "flush",
    value: function flush(arg0) {
      if (this._replay) {
        ({ _replay, _replay: _replay2 } = this);
        if (_replay.isEnabled()) {
          let result = _replay2.sendBufferedReplayOrFlush(arg0);
        } else {
          _replay2.start();
          result = Promise.resolve();
        }
      } else {
        return Promise.resolve();
      }
    }
  };
  items[6] = {
    key: "getReplayId",
    value: function getReplayId(arg0) {
      const _replay = this._replay;
      let isEnabledResult;
      if (_replay != null) {
        isEnabledResult = _replay.isEnabled();
      }
      if (isEnabledResult) {
        const _replay2 = this._replay;
        return _replay2.getSessionId(arg0);
      }
    }
  };
  items[7] = {
    key: "getRecordingMode",
    value: function getRecordingMode() {
      const _replay = this._replay;
      let isEnabledResult;
      if (_replay != null) {
        isEnabledResult = _replay.isEnabled();
      }
      return isEnabledResult ? this._replay.recordingMode : undefined;
    }
  };
  items[8] = {
    key: "_initialize",
    value: function _initialize(getIntegrationByName) {
      const self = this;
      if (this._replay) {
        const result = self._maybeLoadFromReplayCanvasIntegration(getIntegrationByName);
        const _replay = self._replay;
        _replay.initializeSampling();
      }
    }
  };
  items[9] = {
    key: "_setup",
    value: function _setup(getOptions) {
      const self = this;
      const options = getOptions.getOptions();
      let obj = { sessionSampleRate: 0, errorSampleRate: 0 };
      const merged = Object.assign(this._initialOptions);
      const parseSampleRateResult = Replay(dependencyMap[8]).parseSampleRate(options.replaysSessionSampleRate);
      const obj2 = Replay(dependencyMap[8]);
      const parseSampleRateResult1 = Replay(dependencyMap[8]).parseSampleRate(options.replaysOnErrorSampleRate);
      if (tmp7) {
        Replay(dependencyMap[8]).consoleSandbox(() => {
          console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.");
        });
        const tmp3Result = Replay(dependencyMap[8]);
      }
      if (null != parseSampleRateResult) {
        obj.sessionSampleRate = parseSampleRateResult;
      }
      if (null != parseSampleRateResult1) {
        obj.errorSampleRate = parseSampleRateResult1;
      }
      obj = { options: obj, recordingOptions: self._recordingOptions };
      const obj3 = Replay(dependencyMap[8]);
      tmp7 = null == parseSampleRateResult && null == parseSampleRateResult1;
      self._replay = new closure_177(obj);
      const tmp9 = new closure_177(obj);
    }
  };
  items[10] = {
    key: "_maybeLoadFromReplayCanvasIntegration",
    value: function _maybeLoadFromReplayCanvasIntegration(getIntegrationByName) {
      try {
        const integrationByName = getIntegrationByName.getIntegrationByName("ReplayCanvas");
        if (integrationByName) {
          const self = this;
          this._replay._canvas = obj.getOptions();
        }
        obj = integrationByName;
      } catch (err) {
      }
    }
  };
  return closure_8(Replay, items);
}

function getReplay() {
  const client = closure_0(closure_1[8]).getClient();
  let integrationByName;
  if (client != null) {
    integrationByName = client.getIntegrationByName("Replay");
  }
  return integrationByName;
}

function f21495(arg0) {
  return new closure_183(arg0);
}

function saveWebGLVar(obj) {
  if (obj) {
    if (typeof closure_26 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    closure_0 = obj;
    closure_1 = arg1;
    const items = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"];
    const found = items.filter((item, index) => typeof dependencyMap[item] === "function");
    const _Boolean = Boolean;
    const name = obj.constructor.name;
    let value = closure_22.get(arg2);
    if (!value) {
      const _Map = Map;
      const map = new Map();
      const result = closure_22.set(arg2, map);
      value = map;
    }
    if (!value.has(name)) {
      const result1 = value.set(name, []);
    }
    value = value.get(name);
    let length = value.indexOf(obj);
    if (-1 === length) {
      length = value.length;
      value.push(obj);
    }
    return length;
  }
}

function serializeArgs(arg0, arg1, arg2) {
}

function isInstanceOfWebGLObject(arg0, arg1) {
}

function f21519() {
  class CanvasManager {
    constructor(arg0) {
      self = this;
      self = this;
      tmp = closure_1_3(this, f103497);
      map = new Map();
      this.pendingCanvasMutations = map;
      this.rafStamps = { latestId: 0, invokeId: null };
      set = new Set();
      this.shadowDoms = set;
      weakSet = new WeakSet();
      this.windowsSet = weakSet;
      this.windows = [];
      this.restoreHandlers = [];
      this.frozen = false;
      this.locked = false;
      map1 = new Map();
      this.snapshotInProgressMap = map1;
      this.worker = null;
      this.lastSnapshotTime = 0;
      this.processMutation = (arg0, arg1) => {
        let invokeId = !tmp2;
        if (!(self.rafStamps.invokeId && self.rafStamps.latestId !== self.rafStamps.invokeId)) {
          invokeId = self.rafStamps.invokeId;
        }
        if (!invokeId) {
          self.rafStamps.invokeId = self.rafStamps.latestId;
        }
        const pendingCanvasMutations = self.pendingCanvasMutations;
        if (!pendingCanvasMutations.has(arg0)) {
          const pendingCanvasMutations2 = self.pendingCanvasMutations;
          const result = pendingCanvasMutations2.set(arg0, []);
        }
        const pendingCanvasMutations3 = self.pendingCanvasMutations;
        const value = pendingCanvasMutations3.get(arg0);
        value.push(arg1);
      };
      ({ enableManualSnapshot, sampling } = arg0);
      str = "all";
      if (undefined !== sampling) {
        str = sampling;
      }
      sampling = str;
      recordCanvas = arg0.recordCanvas;
      f103497 = recordCanvas;
      errorHandler = arg0.errorHandler;
      arg0.sampling = str;
      ({ mutationCb: self.mutationCb, mirror: self.mirror } = arg0);
      self.options = arg0;
      if (errorHandler) {
      }
      if (recordCanvas) {
        recordCanvas = typeof str === "number";
      }
      if (!recordCanvas) {
        recordCanvas = enableManualSnapshot;
      }
      if (recordCanvas) {
        self.worker = self.initFPSWorker();
      }
      addWindowResult = self.addWindow(arg0.win);
      if (!enableManualSnapshot) {
        tmp7 = closure_1_20;
        if (typeof closure_1_20 !== "function") {
          str2 = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        fn = () => {
          let tmp = fn;
          let tmp2 = fn;
          if (fn) {
            tmp2 = "all" === str;
          }
          if (tmp2) {
            self.startRAFTimestamping();
            const result = self.startPendingCanvasMutationFlusher();
          }
          if (tmp) {
            tmp = typeof str === "number";
          }
          if (tmp) {
            const canvasFPSObserver = self.initCanvasFPSObserver();
          }
        };
        f103497 = fn;
        tmp8 = errorHandler;
        if (errorHandler) {
          fn = () => {
            const items = [...arguments];
            try {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              return HermesBuiltin.apply(items1, undefined);
            } catch (tmp7) {
              if (closure_1_18) {
                if (true === tmp8(tmp7)) {
                  return () => {
  
                  };
                }
              }
              throw tmp7;
            }
          };
        }
        fnResult = fn();
      }
      return;
    }
  }
  let items = [
    {
      key: "reset",
      value: function reset() {
        const self = this;
        const pendingCanvasMutations = this.pendingCanvasMutations;
        pendingCanvasMutations.clear();
        const item = this.restoreHandlers.forEach((item, index) => {
          try {
            item();
          } catch (err) {
          }
        });
        this.restoreHandlers = [];
        const weakSet = new WeakSet();
        this.windowsSet = weakSet;
        this.windows = [];
        this.shadowDoms = new Set();
        const worker = this.worker;
        if (worker != null) {
          worker.terminate();
        }
        self.worker = null;
        const restoreHandlers = this.restoreHandlers;
        const set = new Set();
        self.snapshotInProgressMap = new Map();
      }
    },
    {
      key: "freeze",
      value: function freeze() {
        this.frozen = true;
      }
    },
    {
      key: "unfreeze",
      value: function unfreeze() {
        this.frozen = false;
      }
    },
    {
      key: "lock",
      value: function lock() {
        this.locked = true;
      }
    },
    {
      key: "unlock",
      value: function unlock() {
        this.locked = false;
      }
    },
    {
      key: "addWindow",
      value: function addWindow(arg0) {
        const self = this;
        closure_1 = arg0;
        const options = this.options;
        const sampling = options.sampling;
        ({ blockClass: closure_3, blockSelector: closure_4, unblockSelector: closure_5, recordCanvas: fn } = options);
        const windowsSet = self.windowsSet;
        if (!windowsSet.has(arg0)) {
          if (options.enableManualSnapshot) {
            const windowsSet3 = self.windowsSet;
            windowsSet3.add(arg0);
            const windows = self.windows;
            const _WeakRef2 = WeakRef;
            const weakRef = new WeakRef(arg0);
            windows.push(weakRef);
          } else {
            if (typeof closure_20 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            fn = () => {
              let tmp2 = closure_0;
              if (closure_0) {
                tmp2 = "all" === str;
              }
              if (tmp2) {
                const canvasMutationObserver = self.initCanvasMutationObserver(closure_1, closure_3, closure_4, closure_5);
              }
              if (tmp) {
                if (typeof str === "number") {
                  closure_0 = closure_1_27(closure_1, closure_3, closure_4, closure_5, true);
                  self.restoreHandlers.push(() => {
                    callback();
                  });
                  const restoreHandlers = self.restoreHandlers;
                }
              }
              tmp = closure_0;
            };
            if (errorHandler) {
              fn = () => {
                const items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_1_18) {
                    if (true === tmp8(tmp7)) {
                      return () => {
  
                      };
                    }
                  }
                  throw tmp7;
                }
              };
            }
            fn();
            const windowsSet2 = self.windowsSet;
            windowsSet2.add(arg0);
            const windows1 = self.windows;
            const _WeakRef = WeakRef;
            const weakRef1 = new WeakRef(arg0);
            windows1.push(weakRef1);
          }
        }
      }
    },
    {
      key: "addShadowRoot",
      value: function addShadowRoot(arg0) {
        const shadowDoms = this.shadowDoms;
        const weakRef = new WeakRef(arg0);
        shadowDoms.add(weakRef);
      }
    },
    {
      key: "resetShadowRoots",
      value: function resetShadowRoots() {
        this.shadowDoms = new Set();
      }
    },
    {
      key: "snapshot",
      value: function snapshot(arg0, skipRequestAnimationFrame) {
        const self = this;
        closure_0 = arg0;
        let prop;
        if (skipRequestAnimationFrame != null) {
          prop = skipRequestAnimationFrame.skipRequestAnimationFrame;
        }
        if (prop) {
          const _performance = performance;
          self.takeSnapshot(performance.now(), true, arg0);
        } else {
          callback((arg0) => self.takeSnapshot(arg0, true, closure_0));
        }
      }
    },
    {
      key: "initFPSWorker",
      value: function initFPSWorker() {
        const self = this;
        const blob = new Blob(["for(var e=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\",t=\"undefined\"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s=\"\";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+\"=\":r%3==1&&(s=s.substring(0,s.length-2)+\"==\"),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!(\"OffscreenCanvas\"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+\"-\"+t;if(\"OffscreenCanvas\"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext(\"2d\");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return\"\"}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext(\"bitmaprenderer\"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:\"low\"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};"]);
        const worker = new globalThis.Worker(URL.createObjectURL(blob));
        worker.onmessage = (data) => {
          data = data.data;
          const id = data.id;
          let obj = self;
          const snapshotInProgressMap = self.snapshotInProgressMap;
          const result = snapshotInProgressMap.set(id, false);
          if ("base64" in data) {
            ({ width, height } = data);
            obj = { id: null, type: null, commands: null };
            obj[0] = id;
            obj[1] = closure_1_19["2D"];
            obj = { property: "clearRect", args: null };
            const items = [0, 0, width, height];
            obj[1] = items;
            const items1 = [obj, ];
            const obj1 = { property: "drawImage", args: null };
            const obj2 = { rr_type: "ImageBitmap", args: null };
            const obj3 = { rr_type: "Blob", data: null, type: null };
            const obj4 = { rr_type: "ArrayBuffer", base64: null };
            obj4[1] = data.base64;
            const items2 = [obj4];
            obj3[1] = items2;
            obj3[2] = data.type;
            const items3 = [obj3];
            obj2[1] = items3;
            const items4 = [obj2, 0, 0, width, height];
            obj1[1] = items4;
            items1[1] = obj1;
            obj[2] = items1;
            obj.mutationCb(obj);
          }
        };
        return worker;
      }
    },
    {
      key: "initCanvasFPSObserver",
      value: function initCanvasFPSObserver() {
        const self = this;
        if (this.windows.length) {
          function rafCallback(arg0) {
            self.takeSnapshot(arg0, false);
            closure_1 = closure_1_16(rafCallback);
          }
          closure_1 = callback(rafCallback);
          self.restoreHandlers.push(() => {
            if (closure_1) {
              const _cancelAnimationFrame = cancelAnimationFrame;
              cancelAnimationFrame(closure_1);
            }
          });
          const restoreHandlers = self.restoreHandlers;
        }
      }
    },
    {
      key: "initCanvasMutationObserver",
      value: function initCanvasMutationObserver(closure_1, closure_3, closure_4, closure_5) {
        callback2(closure_1, closure_3, closure_4, closure_5, false);
        const processMutation = this.processMutation;
        closure_1 = (function initCanvas2DMutationObserver(arg0, CanvasRenderingContext2D, closure_3, closure_4, closure_5) {
          closure_0 = arg0;
          closure_1 = CanvasRenderingContext2D;
          closure_2 = closure_3;
          closure_3 = closure_4;
          closure_4 = closure_5;
          closure_5 = [];
          const ownPropertyNames = Object.getOwnPropertyNames(CanvasRenderingContext2D.CanvasRenderingContext2D.prototype);
          function _loop(iter) {
            closure_0 = iter;
            try {
              if (typeof CanvasRenderingContext2D.CanvasRenderingContext2D.prototype[iter] !== "function") {
                return 1;
              } else {
                arr = arr.push(closure_1_12(tmp3.CanvasRenderingContext2D.prototype, iter, (arg0) => {
                  closure_0 = arg0;
                  return function() {
                    const self = this;
                    items = [...arguments];
                    if (!closure_3_13(this.canvas, closure_2_2, closure_2_3, closure_2_4, true)) {
                      closure_3_17(() => { ... }, 0);
                    }
                    return items.apply(this, items);
                  };
                }));
              }
            } catch (err) {
              let obj = { set: null };
              obj[0] = function set(arg0) {
                items = [arg0];
                iter(this.canvas, { type: closure_2_19["2D"], property: iter, args: items, setter: true });
              };
              arr = arr.push(closure_1_11(CanvasRenderingContext2D.CanvasRenderingContext2D.prototype, tmp, obj));
            }
          }
          const iter = ownPropertyNames[Symbol.iterator]();
          while (iter !== undefined) {
            let _loopResult = _loop(iter.next());
            continue;
          }
          return () => {
            const item = arr.forEach((item, index) => item());
          };
        })(processMutation.bind(this), closure_1, closure_3, closure_4, closure_5);
        const processMutation2 = this.processMutation;
        const bindResult = processMutation2.bind(this);
        let items = [];
        const items1 = [...closure_28(closure_1.WebGLRenderingContext.prototype, closure_19.WebGL, bindResult, closure_3, closure_4, closure_5, 0, closure_1)];
        items.push.apply(items1);
        if (undefined !== closure_1.WebGL2RenderingContext) {
          const push = items.push;
          const items2 = [];
          HermesBuiltin.arraySpread(callback3(closure_1.WebGL2RenderingContext.prototype, WebGL.WebGL2, bindResult, closure_3, closure_4, closure_5, 0, closure_1), 0);
          HermesBuiltin.apply(items2, items);
        }
        const f115509 = () => {
  
        };
        this.restoreHandlers.push(() => {
          items();
          callback();
          if (typeof f115509 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const item = items.forEach((item, index) => item());
        });
        const restoreHandlers = this.restoreHandlers;
      }
    },
    {
      key: "getCanvasElements",
      value: function getCanvasElements(blockClass, blockSelector, unblockSelector) {
        closure_0 = blockClass;
        closure_1 = blockSelector;
        closure_2 = unblockSelector;
        const items = [];
        function searchCanvas(querySelectorAll) {
          const elements = querySelectorAll.querySelectorAll("canvas");
          const item = elements.forEach((item, index) => {
            if (!closure_1_13(item, closure_0, closure_1, closure_2, true)) {
              arr = arr.push(item);
            }
          });
        }
        const iter = this.windows[Symbol.iterator]();
        if (iter === undefined) {
          const shadowDoms = this.shadowDoms;
          for (const item10032 of shadowDoms) {
            let derefResult = item10032.deref();
            if (derefResult) {
              let searchCanvasResult = searchCanvas(tmp10);
            }
            continue;
          }
          return items;
        } else {
          const derefResult1 = nextResult.deref();
          try {
            let _document = derefResult1;
            if (derefResult1) {
              _document = derefResult1.document;
            }
            if (_document) {
              searchCanvas(tmp3);
            }
          } catch (err) {
          }
        }
      }
    },
    {
      key: "takeSnapshot",
      value: function takeSnapshot(lastSnapshotTime) {
        const self = this;
        closure_1 = arg1;
        const options = this.options;
        ({ sampling, dataURLOptions: closure_2, maxCanvasSize: CanvasManager } = options);
        ({ blockClass, blockSelector, unblockSelector } = options);
        if ("all" !== sampling) {
          if (!sampling) {
            sampling = 2;
          }
        }
        if (self.lastSnapshotTime && lastSnapshotTime - self.lastSnapshotTime < tmp2) {
          return !tmp3;
        } else {
          self.lastSnapshotTime = lastSnapshotTime;
          if (arg2) {
            let items = [arg2];
            let canvasElements = items;
          } else {
            canvasElements = self.getCanvasElements(blockClass, blockSelector, unblockSelector);
          }
          const item = canvasElements.forEach((item, index) => {
            closure_0 = item;
            const mirror = self.mirror;
            const id = mirror.getId(item);
            const mirror2 = self.mirror;
            if (mirror2.hasNode(item)) {
              if (item.width) {
                if (item.height) {
                  let snapshotInProgressMap = self.snapshotInProgressMap;
                  if (!snapshotInProgressMap.get(id)) {
                    const snapshotInProgressMap2 = self.snapshotInProgressMap;
                    const result = snapshotInProgressMap2.set(id, true);
                    if (!id) {
                      let items = ["webgl", "webgl2"];
                      if (items.includes(item.__context)) {
                        const context = item.getContext(item.__context);
                        let prop;
                        if (context != null) {
                          const contextAttributes = context.getContextAttributes();
                          if (contextAttributes != null) {
                            prop = contextAttributes.preserveDrawingBuffer;
                          }
                        }
                        if (false === prop) {
                          context.clear(context.COLOR_BUFFER_BIT);
                        }
                      }
                    }
                    const imageBitmap = globalThis.createImageBitmap(item);
                    imageBitmap.then((result) => {
                      const worker = self.worker;
                      if (worker != null) {
                        const obj = { id: null, bitmap: null, width: null, height: null, dataURLOptions: null, maxCanvasSize: null };
                        obj[0] = id;
                        obj[1] = result;
                        ({ width: obj[2], height: obj[3] } = closure_0);
                        obj[4] = closure_1_2;
                        obj[5] = closure_0;
                        const items = [result];
                        worker.postMessage(obj, items);
                      }
                    }).catch((error) => {
                      let fn = error;
                      if (typeof closure_2_20 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      fn = () => {
                        const snapshotInProgressMap = self.snapshotInProgressMap;
                        snapshotInProgressMap.delete(id);
                        throw fn;
                      };
                      if (errorHandler) {
                        fn = () => {
                          const items = [...arguments];
                          try {
                            const items1 = [];
                            HermesBuiltin.arraySpread(items, 0);
                            return HermesBuiltin.apply(items1, undefined);
                          } catch (tmp7) {
                            if (closure_1_18) {
                              if (true === tmp8(tmp7)) {
                                return () => {
  
                                };
                              }
                            }
                            throw tmp7;
                          }
                        };
                      }
                      fn();
                    });
                    const nextPromise = imageBitmap.then((result) => {
                      const worker = self.worker;
                      if (worker != null) {
                        const obj = { id: null, bitmap: null, width: null, height: null, dataURLOptions: null, maxCanvasSize: null };
                        obj[0] = id;
                        obj[1] = result;
                        ({ width: obj[2], height: obj[3] } = closure_0);
                        obj[4] = closure_1_2;
                        obj[5] = closure_0;
                        const items = [result];
                        worker.postMessage(obj, items);
                      }
                    });
                  }
                }
              }
            }
          });
        }
      }
    },
    {
      key: "startPendingCanvasMutationFlusher",
      value: function startPendingCanvasMutationFlusher() {
        const self = this;
        callback(() => self.flushPendingCanvasMutations());
      }
    },
    {
      key: "startRAFTimestamping",
      value: function startRAFTimestamping() {
        const self = this;
        function setLatestRAFTimestamp(latestId) {
          self.rafStamps.latestId = latestId;
          closure_1_16(setLatestRAFTimestamp);
        }
        callback(setLatestRAFTimestamp);
      }
    },
    {
      key: "flushPendingCanvasMutations",
      value: function flushPendingCanvasMutations() {
        const self = this;
        const prop = this.pendingCanvasMutations;
        const item = prop.forEach((item, index) => {
          const mirror = self.mirror;
          const result = self.flushPendingCanvasMutationFor(index, mirror.getId(index));
        });
        callback(() => self.flushPendingCanvasMutations());
      }
    },
    {
      key: "flushPendingCanvasMutationFor",
      value: function flushPendingCanvasMutationFor(index, id) {
        const self = this;
        if (!this.frozen) {
          if (!self.locked) {
            const pendingCanvasMutations = self.pendingCanvasMutations;
            const value = pendingCanvasMutations.get(index);
            if (value) {
              if (-1 !== id) {
                const obj = { id: null, type: null, commands: null };
                obj[0] = id;
                obj[1] = value[0].type;
                obj[2] = value.map((item, index) => callback(item, closure_5));
                self.mutationCb(obj);
                const pendingCanvasMutations2 = self.pendingCanvasMutations;
                pendingCanvasMutations2.delete(index);
              }
            }
          }
        }
      }
    }
  ];
  return closure_4(CanvasManager, items);
}

function f21520(arg0) {
  return 2 * arg0;
}

function createMirror$2() {
  return new closure_8();
}

function f21522() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  c0 = undefined;
  c1 = undefined;
  obj = undefined;
  [tmp3, tmp4] = c1(obj.maxCanvasSize || [], 2);
  obj = { quality: obj.quality || "medium", enableManualSnapshot: obj.enableManualSnapshot, maxCanvasSize: null };
  if (tmp3) {
    const _Math = Math;
    let bound = Math.min(tmp3, closure_31);
    let tmp6 = closure_31;
  } else {
    tmp6 = closure_31;
    bound = closure_31;
  }
  const items = [bound, ];
  let bound1 = tmp6;
  if (tmp4) {
    const _Math2 = Math;
    bound1 = Math.min(tmp4, tmp6);
  }
  items[1] = bound1;
  obj[2] = items;
  new Promise((arg0) => {
    closure_1 = arg0;
    return arg0;
  });
  obj = {
    name: "ReplayCanvas",
    getOptions() {
      const enableManualSnapshot = obj.enableManualSnapshot;
      closure_0 = enableManualSnapshot;
      const maxCanvasSize = obj.maxCanvasSize;
      obj = {
        enableManualSnapshot,
        recordCanvas: true,
        getCanvasManager(arg0) {
          obj = {};
          const merged = Object.assign(arg0);
          obj.enableManualSnapshot = closure_0;
          obj.maxCanvasSize = maxCanvasSize;
          obj.errorHandler = function errorHandler(obj) {
            try {
              if (typeof obj === "object") {
                obj.__rrweb__ = true;
              }
            } catch (err) {
            }
          };
          const tmp2 = new closure_2_29(obj);
          closure_0 = tmp2;
          maxCanvasSize(tmp2);
          return tmp2;
        }
      };
      let merged = Object.assign(closure_1_30[obj.quality] || closure_1_30.medium);
      return obj;
    },
    snapshot(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      return _undefined(function*() {
        if (c2 === 2) {
          c2 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = tmp4;
                obj = closure_1_0;
                if (!closure_1_0) {
                  c1 = 1;
                  c2 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = closure_1_3;
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else {
              obj = arg1;
              if (arg0 === 2) {
                c2 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              }
            }
            obj.snapshot(closure_0, c1);
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } catch (tmp9) {
            c2 = tmp;
            throw tmp9;
          }
        }
      })();
    }
  };
  return obj;
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

function f56275(str) {
  let sum4;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < str.length) {
    do {
      let charCodeAtResult = str.charCodeAt(num2);
      let tmp4 = 64512 & charCodeAtResult;
      let tmp5 = 55296 === tmp4;
      let tmp8 = tmp;
      if (55296 === tmp4) {
        tmp5 = num2 + 1 < length;
      }
      if (tmp5) {
        let charCodeAtResult1 = str.charCodeAt(num2 + 1);
        tmp5 = 56320 === (64512 & charCodeAtResult1);
        tmp8 = charCodeAtResult1;
      }
      let sum1 = num2;
      let sum = charCodeAtResult;
      if (tmp5) {
        sum = 65536 + (charCodeAtResult - 55296 << 10) + (tmp8 - 56320);
        sum1 = num2 + 1;
      }
      let num4 = 1;
      if (sum >= 128) {
        let num5 = 2;
        if (sum >= 2048) {
          let num6 = 4;
          if (sum < 65536) {
            num6 = 3;
          }
          num5 = num6;
        }
        num4 = num5;
      }
      num = num + num4;
      num2 = sum1 + 1;
      tmp = tmp8;
      num3 = num;
      let tmp2 = tmp8;
    } while (num2 < length);
  }
  const buf8 = new closure_0(closure_1[0]).Buf8(num3);
  let num7 = 0;
  let num8 = 0;
  if (0 < num3) {
    do {
      let charCodeAtResult2 = str.charCodeAt(num8);
      let tmp14 = 64512 & charCodeAtResult2;
      let tmp15 = 55296 === tmp14;
      let tmp18 = tmp2;
      if (55296 === tmp14) {
        tmp15 = num8 + 1 < length;
      }
      if (tmp15) {
        let charCodeAtResult3 = str.charCodeAt(num8 + 1);
        tmp15 = 56320 === (64512 & charCodeAtResult3);
        tmp18 = charCodeAtResult3;
      }
      let sum3 = num8;
      let sum2 = charCodeAtResult2;
      if (tmp15) {
        sum2 = 65536 + (charCodeAtResult2 - 55296 << 10) + (tmp18 - 56320);
        sum3 = num8 + 1;
      }
      if (sum2 < 128) {
        sum4 = num7 + 1;
        buf8[num7] = sum2;
      } else if (sum2 < 2048) {
        let sum5 = num7 + 1;
        buf8[num7] = 192 | sum2 >>> 6;
        sum4 = sum5 + 1;
        buf8[sum5] = 128 | 63 & sum2;
      } else if (sum2 < 65536) {
        let sum6 = num7 + 1;
        buf8[num7] = 224 | sum2 >>> 12;
        let sum7 = sum6 + 1;
        buf8[sum6] = 128 | sum2 >>> 6 & 63;
        sum4 = sum7 + 1;
        buf8[sum7] = 128 | 63 & sum2;
      } else {
        let sum8 = num7 + 1;
        buf8[num7] = 240 | sum2 >>> 18;
        let sum9 = sum8 + 1;
        buf8[sum8] = 128 | sum2 >>> 12 & 63;
        let sum10 = sum9 + 1;
        buf8[sum9] = 128 | sum2 >>> 6 & 63;
        sum4 = sum10 + 1;
        buf8[sum10] = 128 | 63 & sum2;
      }
      num8 = sum3 + 1;
      num7 = sum4;
      tmp2 = tmp18;
    } while (sum4 < num3);
  }
  return buf8;
}

function f56276(subarray) {
  if (subarray.length < 65534) {
    if (!subarray.subarray) {
      if (!subarray.subarray) {
        return str2;
      }
    }
    const _String2 = String;
    str2 = fromCharCode.apply(null, closure_0(closure_1[0]).shrinkBuf(subarray, length));
    const obj = closure_0(closure_1[0]);
  }
  let num = 0;
  let str = "";
  str2 = "";
  if (0 < subarray.length) {
    do {
      let _String = String;
      str = `${String.fromCharCode(subarray[num])}`;
      num = num + 1;
      str2 = str;
    } while (num < length);
  }
}

function f56277(str) {
  const buf8 = new closure_0(closure_1[0]).Buf8(str.length);
  for (let num = 0; num < length; num = num + 1) {
    buf8[num] = str.charCodeAt(num);
  }
  return buf8;
}

function f56278(arg0, arg1) {
  let sum2;
  let length = arg1;
  if (!arg1) {
    length = arg0.length;
  }
  const array = new Array(2 * length);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < length) {
    do {
      let sum = num2 + 1;
      let tmp3 = arg0[num2];
      if (tmp3 < 128) {
        let sum1 = num + 1;
        array[num] = tmp3;
        sum2 = sum;
      } else {
        let tmp25 = closure_4[tmp3];
        if (tmp25 > 4) {
          sum1 = num + 1;
          array[num] = 65533;
          sum2 = sum + (tmp25 - 1);
        } else {
          let num5 = 31;
          if (2 !== tmp25) {
            let num4 = 7;
            if (3 === tmp25) {
              num4 = 15;
            }
            num5 = num4;
          }
          let tmp5 = tmp3 & num5;
          let tmp6 = tmp25;
          let tmp7 = tmp5;
          let tmp8 = sum;
          if (tmp25 > 1) {
            let tmp9 = tmp25;
            let tmp10 = tmp5;
            let tmp11 = sum;
            tmp6 = tmp25;
            tmp7 = tmp5;
            tmp8 = sum;
            if (sum < length) {
              let sum3 = tmp11 + 1;
              let tmp13 = tmp10 << 6 | 63 & arg0[tmp11];
              let diff = tmp9 - 1;
              tmp6 = diff;
              tmp7 = tmp13;
              tmp8 = sum3;
              while (diff > 1) {
                tmp9 = diff;
                tmp10 = tmp13;
                tmp11 = sum3;
                tmp6 = diff;
                tmp7 = tmp13;
                tmp8 = sum3;
                if (sum3 >= length) {
                  break;
                }
              }
            }
          }
          if (tmp6 > 1) {
            sum1 = num + 1;
            array[num] = 65533;
            sum2 = tmp8;
          } else if (tmp7 < 65536) {
            sum1 = num + 1;
            array[num] = tmp7;
            sum2 = tmp8;
          } else {
            let diff1 = tmp7 - 65536;
            let sum4 = num + 1;
            array[num] = 55296 | diff1 >> 10 & 1023;
            sum1 = sum4 + 1;
            array[sum4] = 56320 | 1023 & diff1;
            sum2 = tmp8;
          }
        }
      }
      num = sum1;
      num2 = sum2;
      num3 = sum1;
    } while (sum2 < length);
  }
  if (num3 < 65534) {
    if (!array.subarray) {
      if (!array.subarray) {
        return str2;
      }
    }
    const _String2 = String;
    str2 = fromCharCode.apply(null, closure_0(closure_1[0]).shrinkBuf(array, num3));
    const obj = closure_0(closure_1[0]);
  }
  let str = "";
  str2 = "";
  let num6 = 0;
  if (0 < num3) {
    do {
      let _String = String;
      str = `${String.fromCharCode(tmp[num6])}`;
      num6 = num6 + 1;
      str2 = str;
    } while (num6 < num3);
  }
}

function f56279(arg0, arg1) {
  let length = arg1;
  if (!arg1) {
    length = arg0.length;
  }
  if (length > arg0.length) {
    length = arg0.length;
  }
  const diff = length - 1;
  let tmp2 = diff;
  if (0 <= diff) {
    let tmp3 = diff;
    tmp2 = diff;
    if (128 === (192 & arg0[diff])) {
      const diff1 = tmp3 - 1;
      tmp2 = diff1;
      while (0 <= diff1) {
        tmp3 = diff1;
        tmp2 = diff1;
        if (128 !== (192 & arg0[diff1])) {
          break;
        }
      }
    }
  }
  let tmp5 = length;
  if (tmp2 >= 0) {
    tmp5 = length;
    if (0 !== tmp2) {
      let tmp7 = length;
      if (tmp2 + closure_4[arg0[tmp2]] > length) {
        tmp7 = tmp2;
      }
      tmp5 = tmp7;
    }
  }
  return tmp5;
}

function then() {
}

function fetch(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return new Promise((arg0, fn) => {
    const DOMException = arg0;
    const _Headers = fn;
    function abortXhr(event) {
      xMLHttpRequest.abort();
    }
    const request = Object.create(closure_1_12.prototype);
    closure_1_12(DOMException, _Headers);
    if (request.signal) {
      if (request.signal.aborted) {
        let dOMException = new DOMException.DOMException("Aborted", "AbortError");
        return fn(dOMException);
      }
    }
    const xMLHttpRequest = new XMLHttpRequest();
    xMLHttpRequest.onload = () => {
      Object.create(closure_2_9.prototype);
      let obj;
      obj.map = {};
      if (undefined instanceof closure_2_9) {
        const item = undefined.forEach(function(item, index) {
          this.append(index, item);
        }, obj);
      } else {
        const _Array = Array;
        if (Array.isArray(undefined)) {
          const item1 = undefined.forEach(function(item, index) {
            if (2 != item.length) {
              const _TypeError = TypeError;
              const typeError = new TypeError("Headers constructor: expected name/value pair to be length 2, found" + item.length);
              throw typeError;
            } else {
              const self = this;
              this.append(item[0], item[1]);
            }
          }, obj);
        }
      }
      let str = xMLHttpRequest.getAllResponseHeaders() || "";
      let parts = xMLHttpRequest.getAllResponseHeaders() || "".replace(/\r?\n[\t ]+/g, " ").split("\r");
      const mapped = parts.map((item, index) => {
        let substr = item;
        if (0 === item.indexOf("\n")) {
          substr = item.substr(1, item.length);
        }
        return substr;
      });
      const item2 = mapped.forEach((item, index) => {
        const parts = item.split(":");
        const trimmed = parts.shift().trim();
        if (trimmed) {
          const joined = parts.join(":");
          try {
            obj.append(trimmed, tmp3);
          } catch (tmp6) {
            const _console = console;
            console.warn("Response " + tmp6.message);
          }
        }
        const str = parts.shift();
      });
      obj[1] = obj;
      url = url.url;
      if (0 !== url.indexOf("file://")) {
        obj.status = xMLHttpRequest.status;
      } else {
        obj.status = 200;
      }
      if ("responseURL" in xMLHttpRequest) {
        let responseURL = xMLHttpRequest.responseURL;
      } else {
        const headers = obj.headers;
        responseURL = headers.get("X-Request-URL");
      }
      obj.url = responseURL;
      url = "response" in xMLHttpRequest ? xMLHttpRequest.response : xMLHttpRequest.responseText;
      const timerId = setTimeout(() => {
        obj = Object.create(closure_3_14.prototype);
        closure_3_14(closure_2, obj);
        obj(obj);
      }, 0);
      const str2 = xMLHttpRequest.getAllResponseHeaders() || "".replace(/\r?\n[\t ]+/g, " ");
    };
    xMLHttpRequest.onerror = () => {
      const timerId = setTimeout(() => {
        const typeError = new TypeError("Network request failed");
        callback(typeError);
      }, 0);
    };
    xMLHttpRequest.ontimeout = () => {
      const timerId = setTimeout(() => {
        const typeError = new TypeError("Network request timed out");
        callback(typeError);
      }, 0);
    };
    xMLHttpRequest.onabort = () => {
      const timerId = setTimeout(() => {
        const dOMException = new DOMException.DOMException("Aborted", "AbortError");
        callback(dOMException);
      }, 0);
    };
    xMLHttpRequest.open(request.method, (function fixUrl(url) {
      try {
        let href = url;
        if ("" === url) {
          href = url;
          if (config.location.href) {
            href = config.location.href;
          }
        }
        return href;
      } catch (err) {
        return tmp;
      }
    })(request.url), true);
    if ("include" === request.credentials) {
      xMLHttpRequest.withCredentials = true;
    } else if ("omit" === request.credentials) {
      xMLHttpRequest.withCredentials = false;
    }
    if ("responseType" in xMLHttpRequest) {
      if (closure_1_4) {
        xMLHttpRequest.responseType = "blob";
      } else if (closure_1_6) {
        xMLHttpRequest.responseType = "arraybuffer";
      }
    }
    if (_Headers) {
      if (typeof tmp.headers === "object") {
        if (!(tmp.headers instanceof closure_1_9)) {
          closure_5 = [];
          const _Object = Object;
          const ownPropertyNames = Object.getOwnPropertyNames(tmp.headers);
          let item = ownPropertyNames.forEach((item, index) => {
            let str = item;
            if (typeof item !== "string") {
              const _String = String;
              str = String(item);
            }
            if (!obj.test(str)) {
              if ("" !== str) {
                arr = arr.push(str.toLowerCase());
                let StringResult = tmp5;
                if (typeof config.headers[item] !== "string") {
                  const _String2 = String;
                  StringResult = String(tmp5);
                }
                xMLHttpRequest.setRequestHeader(item, StringResult);
              }
            }
            const typeError = new TypeError("Invalid character in header field name: \"" + str + "\"");
            throw typeError;
          });
          let headers = request.headers;
          let item1 = headers.forEach((item, index) => {
            if (-1 === arr.indexOf(index)) {
              xMLHttpRequest.setRequestHeader(index, item);
            }
          });
        }
        if (request.signal) {
          let signal = request.signal;
          const listener = signal.addEventListener("abort", abortXhr);
          xMLHttpRequest.onreadystatechange = () => {
            if (4 === xMLHttpRequest.readyState) {
              const signal = request.signal;
              const removed = signal.removeEventListener("abort", abortXhr);
            }
          };
        }
        let _bodyInit = null;
        if (undefined !== request._bodyInit) {
          _bodyInit = request._bodyInit;
        }
        xMLHttpRequest.send(_bodyInit);
      }
    }
    const headers1 = request.headers;
    let item2 = headers1.forEach((item, index) => {
      xMLHttpRequest.setRequestHeader(index, item);
    });
  });
}

function f66813(message, name) {
  { message, name, stack: Error(message).stack };
}

function get() {
  return closure_0.name;
}

function isElement$1(nodeType) {
  return nodeType.nodeType === nodeType.ELEMENT_NODE;
}

function observe(doc) {
  let fn = closure_1_97;
  if (typeof closure_1_86 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (closure_1_79) {
    fn = (event, arg1) => {
      items = [...arguments];
      try {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, undefined);
      } catch (tmp7) {
        if (closure_1_79) {
          if (true === tmp8(tmp7)) {
            return () => {
  
            };
          }
        }
        throw tmp7;
      }
    };
  }
  let obj = {
    onMutation: closure_29,
    mutationCb: closure_37,
    mousemoveCb(positions, source) {
      const obj = { source, positions };
      callback(obj);
    },
    mouseInteractionCb(arg0) {
      const obj = { source: closure_74.MouseInteraction };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    scrollCb: closure_38,
    viewportResizeCb(arg0) {
      const obj = { source: closure_74.ViewportResize };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    inputCb(arg0) {
      const obj = { source: closure_74.Input };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    mediaInteractionCb(arg0) {
      const obj = { source: closure_74.MediaInteraction };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    styleSheetRuleCb(arg0) {
      const obj = { source: closure_74.StyleSheetRule };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    styleDeclarationCb(arg0) {
      const obj = { source: closure_74.StyleDeclaration };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    canvasMutationCb: closure_39,
    fontCb(arg0) {
      const obj = { source: closure_74.Font };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    selectionCb(arg0) {
      const obj = { source: closure_74.Selection };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    customElementCb(arg0) {
      const obj = { source: closure_74.CustomElement };
      const merged = Object.assign(arg0);
      obj[1] = obj;
      callback(obj);
    },
    blockClass: closure_3,
    ignoreClass: closure_6,
    ignoreSelector: closure_7,
    maskAllText: closure_8,
    maskTextClass: closure_9,
    unmaskTextClass: closure_10,
    maskTextSelector: closure_11,
    unmaskTextSelector: closure_12,
    maskInputOptions: closure_33,
    inlineStylesheet: closure_13,
    sampling: closure_18,
    recordDOM: closure_20,
    recordCanvas: closure_21,
    inlineImages: closure_25,
    userTriggeredOnInput: closure_23,
    collectFonts: closure_24,
    doc,
    maskAttributeFn: closure_14,
    maskInputFn: closure_15,
    maskTextFn: closure_16,
    keepIframeSrcFn: closure_27,
    blockSelector: closure_4,
    unblockSelector: closure_5,
    slimDOMOptions: closure_34,
    dataURLOptions: closure_19,
    mirror: closure_1_108,
    iframeManager: closure_41,
    stylesheetManager: closure_40,
    shadowDomManager: closure_44,
    processedNodeManager: closure_42,
    canvasManager: closure_43,
    ignoreCSSAttributes: closure_28,
    plugins: null
  };
  let mapped;
  if (closure_26 != null) {
    const found = closure_26.filter((item, index) => item.observer);
    if (found != null) {
      mapped = found.map((item, index) => {
        closure_0 = item;
        return {
          observer: item.observer,
          options: item.options,
          callback(payload) {
            const obj = { plugin: item.name, payload };
            closure_1_103(obj);
          }
        };
      });
    }
  }
  if (!mapped) {
    mapped = [];
  }
  obj[46] = mapped;
  return fn(obj, {});
}

function f68828(contentDocument) {
  try {
    closure_46.push(closure_47(contentDocument.contentDocument));
  } catch (tmp5) {
    const _console = console;
    console.warn(tmp5);
  }
}

function init() {
  closure_45();
  closure_46.push(closure_47(document));
}

function f68830() {
  closure_1_103({ type: closure_1_73.DomContentLoaded, data: {} });
  if ("DOMContentLoaded" === closure_22) {
    if (typeof closure_48 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    closure_45();
    const _document = document;
    closure_46.push(closure_47(document));
  }
}

function f68831() {
  closure_1_103({ type: closure_1_73.Load, data: {} });
  if ("load" === closure_22) {
    if (typeof closure_48 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    closure_45();
    const _document = document;
    closure_46.push(closure_47(document));
  }
}

function f68832() {
  const item = closure_46.forEach((item, index) => item());
  closure_42.destroy();
  closure_1_104 = undefined;
  closure_1_79 = undefined;
}

function f69738(arg0, arg1, str) {
  if (typeof str !== "string") {
    ({ length: closure_0.minimumSignificantDigits, length: closure_0.maximumSignificantDigits } = arg1);
  } else if ("+" === str) {
    closure_0.minimumSignificantDigits = arg1.length;
  } else if ("#" === arg1[0]) {
    closure_0.maximumSignificantDigits = arg1.length;
  } else {
    closure_0.minimumSignificantDigits = arg1.length;
    let num = 0;
    if (typeof str === "string") {
      num = str.length;
    }
    closure_0.maximumSignificantDigits = arg1.length + num;
  }
  return "";
}

function f69740(arg0, arg1) {
  const __assign = closure_0(closure_1[1]).__assign;
  let obj = closure_0(closure_1[1]);
  const __assignResult = obj.__assign({}, arg0);
  switch (arg1) {
    case "TypeError":
    break;
    case "Error":
    break;
    case "HTTP":
    break;
    case "T":
    break;
    case "HermesInternal":
    break;
    case "Icon":
    break;
    case "IconComponent":
    break;
    case "c":
    break;
    case "p":
    break;
    case "LIGHT":
    break;
    case "LengthDelimited":
    break;
    case "limit":
    break;
    case "i":
    break;
    case "it":
    break;
    case "d":
    break;
    case "Map":
    break;
    case "Math":
    break;
    case "h":
    break;
    case "Number":
    break;
    case "Object":
    break;
    case "ct":
    break;
    case "PX_16":
      obj = { signDisplay: "auto" };
      if (!obj) {
        obj = {};
      }
      let __assignResult1 = __assign(__assignResult, obj);
      return __assignResult1;
    case "flex":
    break;
    case "flexDirection":
      obj = { currencySign: "accounting" };
    break;
    case "PX_8":
    break;
    case "Path":
      obj = { currencySign: "accounting" };
    break;
    case "Promise":
    break;
    case "s":
      obj = { signDisplay: "always" };
    break;
    case "Reflect":
    break;
    case "Set":
      obj = { signDisplay: "always" };
    break;
    case "format":
    break;
    case "formatToPlainString":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "String":
    break;
    case "Symbol":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "Text":
    break;
    case "x":
      obj = { signDisplay: "exceptZero" };
    break;
    case "View":
    break;
    case "w":
      obj = { signDisplay: "exceptZero" };
    break;
    case "WireType":
    break;
    case "__closure":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "__d":
    break;
    case "__esModule":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "__initData":
    break;
    case "filter":
      obj = { signDisplay: "never" };
    break;
    case "__packager_asset":
    break;
    case "k":
      obj = { signDisplay: "never" };
    break;
    case "set":
    break;
    case "__workletHash":
    break;
    case "_desired":
    break;
    case "_distance":
    break;
    case "st":
    break;
    case "accessibilityLabel":
    break;
    case "accessibilityRole":
    break;
    case "accessible":
    break;
    case "padding":
    break;
    case "paddingHorizontal":
    break;
    case "add":
    break;
    case "alignItems":
    break;
    case "ao":
    break;
    case "applicationId":
    break;
    case "ti":
    break;
    case "apply":
    break;
    case "backgroundColor":
    break;
    case "round":
    break;
    case "bm":
    break;
    case "body":
    break;
    case "borderRadius":
    break;
    case "bottom":
    break;
    case "call":
    break;
    case "channel":
    break;
    case "channelId":
    break;
    case "channel_id":
    break;
    case "id":
    break;
    case "children":
    break;
    case "cix":
    break;
    case "ix":
    break;
    case "unicodeVersion":
    break;
    case "code":
    break;
    case "color":
    break;
    case "colors":
    break;
    case "concat":
    break;
    case "constructor":
    break;
    case "container":
    break;
    case "content":
    break;
    case "context":
    break;
    case "text":
    break;
    case "count":
    break;
    case "create":
    break;
    case "createStyles":
    break;
    case "ty":
    break;
    case "current":
      obj = { signDisplay: "auto" };
      if (!obj) {
        obj = {};
      }
      __assignResult1 = __assign(__assignResult, obj);
      return __assignResult1;
    case "cursor":
    break;
    case "data":
      obj = { currencySign: "accounting" };
    break;
    case "ddd":
    break;
    case "default":
      obj = { currencySign: "accounting" };
    break;
    case "defineProperty":
    break;
    case "op":
      obj = { signDisplay: "always" };
    break;
    case "delete":
    break;
    case "description":
      obj = { signDisplay: "always" };
    break;
    case "ip":
    break;
    case "disabled":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "sa":
    break;
    case "dispatch":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "displayName":
    break;
    case "diversity":
      obj = { signDisplay: "exceptZero" };
    break;
    case "v":
    break;
    case "done":
      obj = { signDisplay: "exceptZero" };
    break;
    case "duration":
    break;
    case "enabled":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "end":
    break;
    case "enumerable":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "error":
    break;
    case "exports":
      obj = { signDisplay: "never" };
    break;
  }
}

function f69741(arg0, arg1) {
  closure_0(closure_1[1]);
  closure_0(closure_1[1]);
  switch (arg1) {
    case "TypeError":
    break;
    case "Error":
    break;
    case "HTTP":
    break;
    case "T":
    break;
    case "HermesInternal":
    break;
    case "Icon":
    break;
    case "IconComponent":
    break;
    case "c":
    break;
    case "p":
    break;
    case "LIGHT":
    break;
    case "LengthDelimited":
    break;
    case "limit":
    break;
    case "i":
    break;
    case "it":
    break;
    case "d":
    break;
    case "Map":
    break;
    case "Math":
    break;
    case "h":
    break;
    case "Number":
    break;
    case "Object":
    break;
    case "ct":
    break;
    case "PX_16":
      let obj = { signDisplay: "auto" };
      if (!obj) {
        obj = {};
      }
      return tmp2(tmp4, obj);
    case "flex":
    break;
    case "flexDirection":
      obj = { currencySign: "accounting" };
    break;
    case "PX_8":
    break;
    case "Path":
      obj = { currencySign: "accounting" };
    break;
    case "Promise":
    break;
    case "s":
      obj = { signDisplay: "always" };
    break;
    case "Reflect":
    break;
    case "Set":
      obj = { signDisplay: "always" };
    break;
    case "format":
    break;
    case "formatToPlainString":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "String":
    break;
    case "Symbol":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "Text":
    break;
    case "x":
      obj = { signDisplay: "exceptZero" };
    break;
    case "View":
    break;
    case "w":
      obj = { signDisplay: "exceptZero" };
    break;
    case "WireType":
    break;
    case "__closure":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "__d":
    break;
    case "__esModule":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "__initData":
    break;
    case "filter":
      obj = { signDisplay: "never" };
    break;
    case "__packager_asset":
    break;
    case "k":
      obj = { signDisplay: "never" };
    break;
    case "set":
    break;
    case "__workletHash":
    break;
    case "_desired":
    break;
    case "_distance":
    break;
    case "st":
    break;
    case "accessibilityLabel":
    break;
    case "accessibilityRole":
    break;
    case "accessible":
    break;
    case "padding":
    break;
    case "paddingHorizontal":
    break;
    case "add":
    break;
    case "alignItems":
    break;
    case "ao":
    break;
    case "applicationId":
    break;
    case "ti":
    break;
    case "apply":
    break;
    case "backgroundColor":
    break;
    case "round":
    break;
    case "bm":
    break;
    case "body":
    break;
    case "borderRadius":
    break;
    case "bottom":
    break;
    case "call":
    break;
    case "channel":
    break;
    case "channelId":
    break;
    case "channel_id":
    break;
    case "id":
    break;
    case "children":
    break;
    case "cix":
    break;
    case "ix":
    break;
    case "unicodeVersion":
    break;
    case "code":
    break;
    case "color":
    break;
    case "colors":
    break;
    case "concat":
    break;
    case "constructor":
    break;
    case "container":
    break;
    case "content":
    break;
    case "context":
    break;
    case "text":
    break;
    case "count":
    break;
    case "create":
    break;
    case "createStyles":
    break;
    case "ty":
    break;
    case "current":
    break;
    case "cursor":
    break;
    case "data":
    break;
    case "ddd":
    break;
    case "default":
    break;
    case "defineProperty":
    break;
    case "op":
    break;
    case "delete":
    break;
    case "description":
    break;
    case "ip":
    break;
    case "disabled":
    break;
    case "sa":
    break;
    case "dispatch":
    break;
    case "displayName":
    break;
    case "diversity":
    break;
    case "v":
    break;
    case "done":
    break;
    case "duration":
    break;
    case "enabled":
    break;
    case "end":
    break;
    case "enumerable":
    break;
    case "error":
    break;
    case "exports":
    break;
  }
}

function f69742(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg1) {
    closure_0.minimumIntegerDigits = arg2.length;
  } else {
    if (arg3) {
      if (arg4) {
        const _Error2 = Error;
        const error = new Error("We currently do not support maximum integer digits");
        throw error;
      }
    }
    if (arg5) {
      const _Error = Error;
      const error1 = new Error("We currently do not support exact integer digits");
      throw error1;
    }
  }
  return "";
}

function f69743(arg0, arg1, arg2, arg3, arg4, arg5) {
  if ("*" === arg2) {
    closure_0.minimumFractionDigits = arg1.length;
  } else {
    if (arg3) {
      if ("#" === arg3[0]) {
        closure_0.maximumFractionDigits = arg3.length;
      }
    }
    if (arg4) {
      if (arg5) {
        closure_0.minimumFractionDigits = arg4.length;
        closure_0.maximumFractionDigits = arg4.length + arg5.length;
      }
    }
    ({ length: closure_0.minimumFractionDigits, length: closure_0.maximumFractionDigits } = arg1);
  }
  return "";
}

function f70496(key10009) {
  const call = hasOwnProperty.call;
  let tmp2 = typeof call === "unknown" ? hasOwnProperty(key10009) : call(closure_0, key10009);
  if (tmp2) {
    tmp2 = typeof closure_1[key10009] === "string";
  }
  if (tmp2) {
    closure_1[key10009] = closure_0[key10009](closure_1[key10009]);
  }
}

function update(arg0, arg1, arg2, arg3) {
  let tmp = arg0;
  let num = 0;
  let tmp2 = arg0;
  if (0 < arg3) {
    do {
      tmp = closure_3.table[255 & (tmp ^ arg1[arg2 + num])] ^ tmp >>> 8;
      num = num + 1;
      tmp2 = tmp;
    } while (num < arg3);
  }
  return tmp2;
}

function crc(uint8Array, sum48, sum13) {
  return 4294967295 ^ closure_3.update(4294967295, uint8Array, sum48, sum13);
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
  const tmp = closure_7(arg0, arg1, arg2, num, items);
  closure_6(tmp, -1);
  return closure_5(tmp, arg1, arg2, arg4, arg5);
}

function encodeLL(arg0, arg1, arg2, arg3, arg4, depth) {
  let length;
  let num = 2;
  if (1 == arg3) {
    num = 0;
  }
  let num2 = 4;
  if (0 == arg4) {
    num2 = 0;
  }
  let obj = { ctype: num + num2, depth, frames: [] };
  const timestamp = Date.now();
  const result = (arg3 + arg4) * depth;
  let num3 = 0;
  if (0 < arg0.length) {
    do {
      let frames = obj.frames;
      obj = { rect: null, img: null, blend: 0, dispose: 1, bpp: null, bpl: null };
      obj = { x: 0, y: 0, width: null, height: null };
      obj[2] = arg1;
      obj[3] = arg2;
      obj[0] = obj;
      let _Uint8Array = Uint8Array;
      let uint8Array = new Uint8Array(arg0[num3]);
      obj[1] = uint8Array;
      let _Math = Math;
      obj[4] = Math.ceil(result / 8);
      let _Math2 = Math;
      obj[5] = Math.ceil(tmp3 / 8);
      let arr = frames.push(obj);
      num3 = num3 + 1;
      length = arg0.length;
    } while (num3 < length);
  }
  closure_6(obj, 0, true);
  return closure_5(obj, arg1, arg2, arg6, arg7);
}

function f75192(arg0, arg1) {
  return arg1[1].lastUsedMs - arg0[1].lastUsedMs;
}

function createListState(channelId, sortOrder, tagFilter, tagSetting) {
  return { loading: false, isInitialLoad: true, hasMore: false, failed: false, threads: [], nextOffset: 0, channelId, sortOrder, tagFilter, tagSetting };
}

function touchList(arg0, arg1) {
  closure_8.delete(arg0);
  const result = closure_8.set(arg0, arg1);
  if (closure_8.size > 50) {
    const obj = closure_8[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp11 = closure_3(tmp8, 2);
      [tmp12, tmp13] = tmp11;
      if (closure_8.size <= 50) {
        obj.return();
        break;
      } else {
        if (!tmp13.loading) {
          let deleteResult1 = closure_8.delete(tmp12);
        }
        continue;
      }
      break;
    }
  }
}

function _loop3() {
  let obj = closure_1[1];
  if (" " === obj[0]) {
    return 1;
  } else {
    c0 = "";
    const parts = obj.trimEnd().split(/\s/);
    const mapped = parts.map((item, index) => {
      str = `${str}${item} `;
      return str.trim();
    });
    const reversed = mapped.reverse();
    let str = reversed.find((item, index) => null != table[item]);
    if (str == null) {
      str = "";
    }
    let obj1 = reversed[reversed.length - 1];
    if (null != closure_2[str]) {
      obj = { location: null, length: null, data: null };
      obj[0] = closure_1.index;
      obj[1] = str.length + 1;
      obj = { type: null, color: null };
      obj[0] = closure_1_0(closure_1_2[8]).ChatInputParseResultDataType.ROLE_HIGHLIGHT;
      let colorString = null;
      if ("username" === closure_1_4.roleStyle) {
        colorString = tmp3.colorString;
      }
      obj[1] = colorString;
      obj[2] = obj;
      c0.push(obj);
    } else if (obj1.startsWith(closure_1_20)) {
      obj1 = { location: null, length: 9, data: null };
      obj1[0] = closure_1.index;
      const obj2 = { type: null, color: null };
      obj2[0] = closure_1_0(closure_1_2[8]).ChatInputParseResultDataType.ROLE_HIGHLIGHT;
      obj2[1] = closure_1_1(closure_1_2[17]).unsafe_rawColors.BRAND_500;
      obj1[2] = obj2;
      c0.push(obj1);
    } else if (obj1.startsWith(closure_1_21)) {
      const obj3 = { location: null, length: 5, data: null };
      obj3[0] = closure_1.index;
      const obj4 = { type: null, color: null };
      obj4[0] = closure_1_0(closure_1_2[8]).ChatInputParseResultDataType.ROLE_HIGHLIGHT;
      obj4[1] = closure_1_1(closure_1_2[17]).unsafe_rawColors.BRAND_500;
      obj3[2] = obj4;
      c0.push(obj3);
    }
    const str3 = obj.trimEnd();
  }
}

function InsertUnicodeExtensionAndCanonicalize(arr) {
  closure_4(-1 === arr.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
  let str = "-u";
  while (tmp2 !== undefined) {
    let _HermesInternal = HermesInternal;
    str = `-u${"-" + tmp3}`;
    continue;
  }
  const iter = arg2[Symbol.iterator]();
  const iter2 = iter.next();
  while (iter !== undefined) {
    let value = iter2.value;
    let _HermesInternal2 = HermesInternal;
    let tmp5 = value;
    str = str + "-" + iter2.key;
    if ("" !== value) {
      let _HermesInternal3 = HermesInternal;
      str = str + "-" + tmp5;
    }
    continue;
  }
  if ("-u" === str) {
    return closure_13(arr);
  } else {
    const index = arr.indexOf("-x-");
    if (-1 === index) {
      let sum = arr + str;
    } else {
      const sum1 = arr.slice(0, index) + str;
      sum = sum1 + arr.slice(index);
    }
    return closure_13(sum);
  }
  tmp2 = arg1[Symbol.iterator]();
}

function f104050() {
  return {
    navigate(arg0, arg1) {
      const navigation = closure_0.navigation;
      const obj = {};
      const CommonActions = closure_1_0(closure_1_1[3]).CommonActions;
      const merged = Object.assign(CommonActions.navigate(arg0, arg1));
      obj.target = closure_0.state.key;
      navigation.dispatch(obj);
    },
    back() {
      const navigation = closure_0.navigation;
      navigation.goBack();
    }
  };
}

function f104051() {
  return { emit: closure_0.navigation.emit };
}

function ot(str) {
  const parts = str.split("\n");
  const mapped = parts.map(closure_53);
  const found = mapped.filter((item, index) => null !== item);
  return closure_38(closure_38({}, found[0]), found[1]);
}

function f111703(soft_deleted) {
  return !soft_deleted.soft_deleted;
}

function f111704(soft_deleted) {
  return soft_deleted.soft_deleted;
}

function maybeAckNotificationCenter() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

function f115040() {
  closure_1_0(closure_1_3[50]).transitionTo(closure_1_14.CHANNEL(closure_0.guild_id, closure_0.channel_id), { navigationReplace: true, openChannel: true });
}

function handleRelationshipAddNotification() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

function handleCallRingNotification() {
  const self = this;
  const apply = closure_30.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

function handleCallConnectNotification() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

function handleFriendSuggestionCreateNotification() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

function handleGuildEventNotification() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

function handleStageNotification() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

function f115933(baggage) {
  closure_8.setRequestHeader(baggage, closure_6[baggage]);
}

function f117279(arr) {
  return arr.every((item, index) => {
    const ipV6 = regex.regex.ipV6;
    return ipV6.test(item);
  });
}

function f117280(arg0, tldBlacklist) {
  const _Array = Array;
  if (tldBlacklist.tldBlacklist) {
    if (!isArray(tldBlacklist.tldBlacklist)) {
      const hasOwn2 = closure_2.hasOwn;
      const call3 = hasOwn2.call;
      tldBlacklist = tldBlacklist.tldBlacklist;
      !(typeof call3 === "unknown" ? hasOwn2(arg0) : call3(tldBlacklist, arg0));
    }
    const indexOf2 = closure_2.indexOf;
    const call4 = indexOf2.call;
    const tldBlacklist2 = tldBlacklist.tldBlacklist;
    -1 === (typeof call4 === "unknown" ? indexOf2(arg0) : call4(tldBlacklist2, arg0));
  } else if (isArray(tldBlacklist.tldWhitelist)) {
    const indexOf = closure_2.indexOf;
    const call2 = indexOf.call;
    const tldWhitelist2 = tldBlacklist.tldWhitelist;
    -1 !== (typeof call2 === "unknown" ? indexOf(arg0) : call2(tldWhitelist2, arg0));
  } else {
    const hasOwn = closure_2.hasOwn;
    const call = hasOwn.call;
    const tldWhitelist = tldBlacklist.tldWhitelist;
    return typeof call === "unknown" ? hasOwn(arg0) : call(tldWhitelist, arg0);
  }
}

function f117281(arg0, arg1, arg2) {
  let tmp14;
  let obj = arg1;
  let tmp = arg2;
  let domain = arg2;
  if (!arg1) {
    obj = {};
  }
  if (typeof obj === "function") {
    domain = obj;
    obj = {};
    tmp = obj;
  }
  if (typeof tmp !== "function") {
    if (obj.checkDNS) {
      const _TypeError4 = TypeError;
      const typeError = new TypeError("expected callback function for checkDNS option");
      throw typeError;
    } else {
      domain = null;
    }
  }
  let errorLevel;
  let valid;
  if (typeof obj.errorLevel === "number") {
    errorLevel = true;
    valid = obj.errorLevel;
  } else {
    errorLevel = obj.errorLevel;
    valid = valid.diagnoses.valid;
  }
  if (obj.tldWhitelist) {
    if (typeof obj.tldWhitelist === "string") {
      const items = [obj.tldWhitelist];
      obj.tldWhitelist = items;
    } else if ("object" !== domain(obj.tldWhitelist)) {
      const _TypeError = TypeError;
      const typeError1 = new TypeError("expected array or object tldWhitelist");
      throw typeError1;
    }
  }
  if (obj.tldBlacklist) {
    if (typeof obj.tldBlacklist === "string") {
      const items1 = [obj.tldBlacklist];
      obj.tldBlacklist = items1;
    } else if ("object" !== domain(obj.tldBlacklist)) {
      const _TypeError2 = TypeError;
      const typeError2 = new TypeError("expected array or object tldBlacklist");
      throw typeError2;
    }
  }
  if (obj.minDomainAtoms) {
    const _TypeError3 = TypeError;
    const typeError3 = new TypeError("expected positive integer minDomainAtoms");
    throw typeError3;
  }
  let obj3 = valid;
  let dnsWarnNoMXRecord = valid.diagnoses.valid;
  function updateResult(arg0) {
  
  }
  let localpart = valid.components.localpart;
  let localpart2 = valid.components.localpart;
  const items2 = [valid.components.localpart];
  obj = { local: "", domain: "" };
  const obj1 = { locals: [""], domains: [""] };
  let sum2 = 0;
  let num = 0;
  let num2 = 0;
  let flag2 = false;
  let flag3 = false;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let str3 = "";
  let tmp13 = localpart;
  let num6 = 0;
  let flag4 = false;
  let num7 = 0;
  let num8 = 0;
  if (0 < arg0.length) {
    while (true) {
      let obj6 = arg0[num2];
      let obj7 = valid;
      if (valid.components.localpart === localpart) {
        if ("(" === obj6) {
          if (0 === num4) {
            if (0 === num5) {
              let deprecatedComment2 = obj7.diagnoses.cfwsComment;
            } else {
              deprecatedComment2 = obj7.diagnoses.deprecatedComment;
            }
            let flag10 = flag2;
            if (deprecatedComment2 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = deprecatedComment2;
              flag10 = flag2;
            }
          } else {
            let cfwsComment2 = obj7.diagnoses.cfwsComment;
            flag10 = true;
            if (cfwsComment2 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = cfwsComment2;
              flag10 = true;
            }
          }
          let arr = items2.push(localpart);
          let contextComment = obj7.components.contextComment;
        } else if ("." === obj6) {
          if (0 === num4) {
            if (0 === num5) {
              let errConsecutiveDots2 = obj7.diagnoses.errDotStart;
            } else {
              errConsecutiveDots2 = obj7.diagnoses.errConsecutiveDots;
            }
            let tmp32 = localpart2;
            let contextFWS = localpart;
            let num11 = num;
            let diff = num2;
            let tmp38 = obj6;
            let flag5 = flag2;
            let tmp39 = flag3;
            let num10 = num3;
            let num12 = num4;
            let num13 = num5;
            let tmp40 = str3;
            if (errConsecutiveDots2 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errConsecutiveDots2;
              tmp32 = localpart2;
              contextFWS = localpart;
              num11 = num;
              diff = num2;
              tmp38 = obj6;
              flag5 = flag2;
              tmp39 = flag3;
              num10 = num3;
              num12 = num4;
              num13 = num5;
              tmp40 = str3;
            }
          } else {
            if (flag2) {
              let deprecatedLocalPart2 = obj7.diagnoses.deprecatedLocalPart;
              if (deprecatedLocalPart2 > dnsWarnNoMXRecord) {
                dnsWarnNoMXRecord = deprecatedLocalPart2;
              }
            }
            let sum = num5 + 1;
            sum2 = sum;
            obj.local = obj.local + obj6;
            obj1.locals[sum] = "";
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = sum;
            diff = num2;
            tmp38 = obj6;
            flag5 = false;
            tmp39 = flag3;
            num10 = num3;
            num12 = 0;
            num13 = sum;
            tmp40 = str3;
          }
        } else if ("\"" === obj6) {
          if (0 === num4) {
            if (0 === num5) {
              let deprecatedLocalPart = obj7.diagnoses.rfc5321QuotedString;
            } else {
              deprecatedLocalPart = obj7.diagnoses.deprecatedLocalPart;
            }
            if (deprecatedLocalPart > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = deprecatedLocalPart;
            }
            obj.local = obj.local + obj6;
            let locals6 = obj1.locals;
            locals6[num5] = locals6[num5] + obj6;
            num12 = num4 + 1;
            arr = items2.push(localpart);
            contextFWS = obj7.components.contextQuotedString;
            tmp32 = localpart2;
            num11 = num;
            diff = num2;
            tmp38 = obj6;
            flag5 = true;
            tmp39 = flag3;
            num10 = num3;
            num13 = num5;
            tmp40 = str3;
          } else {
            let errExpectingATEXT4 = obj7.diagnoses.errExpectingATEXT;
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = num;
            diff = num2;
            tmp38 = obj6;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num12 = num4;
            num13 = num5;
            tmp40 = str3;
            if (errExpectingATEXT4 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errExpectingATEXT4;
              tmp32 = localpart2;
              contextFWS = localpart;
              num11 = num;
              diff = num2;
              tmp38 = obj6;
              flag5 = flag2;
              tmp39 = flag3;
              num10 = num3;
              num12 = num4;
              num13 = num5;
              tmp40 = str3;
            }
          }
        } else {
          if ("\r" === obj6) {
            let sum1 = num2 + 1;
            if (length !== sum1) {
              let tmp205 = sum1;
            }
            let errCRNoLF6 = obj7.diagnoses.errCRNoLF;
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = num;
            diff = sum1;
            tmp38 = obj6;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num12 = num4;
            num13 = num5;
            tmp40 = str3;
            if (errCRNoLF6 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errCRNoLF6;
              tmp32 = localpart2;
              contextFWS = localpart;
              num11 = num;
              diff = sum1;
              tmp38 = obj6;
              flag5 = flag2;
              tmp39 = flag3;
              num10 = num3;
              num12 = num4;
              num13 = num5;
              tmp40 = str3;
            }
          } else {
            tmp205 = num2;
            if (" " !== obj6) {
              tmp205 = num2;
              if ("\t" !== obj6) {
                if ("@" === obj6) {
                  if (1 !== items2.length) {
                    let _Error5 = Error;
                    let error = new Error("unexpected item on context stack");
                    throw error;
                  } else {
                    if (0 === obj.local.length) {
                      let errNoLocalPart = obj7.diagnoses.errNoLocalPart;
                      if (errNoLocalPart > dnsWarnNoMXRecord) {
                        dnsWarnNoMXRecord = errNoLocalPart;
                      }
                    } else if (0 === num4) {
                      let errDotEnd = obj7.diagnoses.errDotEnd;
                      if (errDotEnd > dnsWarnNoMXRecord) {
                        dnsWarnNoMXRecord = errDotEnd;
                      }
                    } else if (obj.local.length > 64) {
                      let rfc5322LocalTooLong = obj7.diagnoses.rfc5322LocalTooLong;
                      if (rfc5322LocalTooLong > dnsWarnNoMXRecord) {
                        dnsWarnNoMXRecord = rfc5322LocalTooLong;
                      }
                    } else {
                      let tmp134 = localpart2 !== obj7.components.contextComment && localpart2 !== obj7.components.contextFWS;
                      if (!tmp134) {
                        let deprecatedCFWSNearAt = obj7.diagnoses.deprecatedCFWSNearAt;
                        if (deprecatedCFWSNearAt > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = deprecatedCFWSNearAt;
                        }
                      }
                    }
                    contextFWS = obj7.components.domain;
                    items2[0] = obj7.components.domain;
                    sum2 = 0;
                    tmp32 = localpart2;
                    num11 = 0;
                    diff = num2;
                    tmp38 = obj6;
                    flag5 = false;
                    tmp39 = flag3;
                    num10 = num3;
                    num12 = 0;
                    num13 = 0;
                    tmp40 = str3;
                  }
                } else if (flag2) {
                  if (obj7.components.contextComment !== localpart2) {
                    if (obj7.components.contextFWS !== localpart2) {
                      if (obj7.components.contextQuotedString === localpart2) {
                        let errATEXTAfterQS = obj7.diagnoses.errATEXTAfterQS;
                        tmp32 = localpart2;
                        contextFWS = localpart;
                        num11 = num;
                        diff = num2;
                        tmp38 = obj6;
                        flag5 = flag2;
                        tmp39 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp40 = str3;
                        if (errATEXTAfterQS > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = errATEXTAfterQS;
                          tmp32 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = num2;
                          tmp38 = obj6;
                          flag5 = flag2;
                          tmp39 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp40 = str3;
                        }
                      } else {
                        let _Error4 = Error;
                        let error1 = new Error("more atext found where none is allowed, but unrecognized prev context: " + localpart2);
                        throw error1;
                      }
                    }
                  }
                  let errATEXTAfterCFWS2 = obj7.diagnoses.errATEXTAfterCFWS;
                  tmp32 = localpart2;
                  contextFWS = localpart;
                  num11 = num;
                  diff = num2;
                  tmp38 = obj6;
                  flag5 = flag2;
                  tmp39 = flag3;
                  num10 = num3;
                  num12 = num4;
                  num13 = num5;
                  tmp40 = str3;
                  if (errATEXTAfterCFWS2 > dnsWarnNoMXRecord) {
                    dnsWarnNoMXRecord = errATEXTAfterCFWS2;
                    tmp32 = localpart2;
                    contextFWS = localpart;
                    num11 = num;
                    diff = num2;
                    tmp38 = obj6;
                    flag5 = flag2;
                    tmp39 = flag3;
                    num10 = num3;
                    num12 = num4;
                    num13 = num5;
                    tmp40 = str3;
                  }
                } else {
                  let charCodeAtResult = obj6.charCodeAt(0);
                  let tmp125 = charCodeAtResult < 33 || charCodeAtResult > 126 || obj7.specials(charCodeAtResult);
                  if (tmp125) {
                    let errExpectingATEXT3 = obj7.diagnoses.errExpectingATEXT;
                    if (errExpectingATEXT3 > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = errExpectingATEXT3;
                    }
                  }
                  obj.local = obj.local + obj6;
                  let locals5 = obj1.locals;
                  locals5[num5] = locals5[num5] + obj6;
                  num12 = num4 + 1;
                  tmp32 = localpart;
                  contextFWS = localpart;
                  num11 = num;
                  diff = num2;
                  tmp38 = obj6;
                  flag5 = flag2;
                  tmp39 = flag3;
                  num10 = num3;
                  num13 = num5;
                  tmp40 = str3;
                }
              }
            }
          }
          let flag9 = true;
          if (0 === num4) {
            if (0 === num5) {
              let deprecatedFWS3 = obj7.diagnoses.cfwsFWS;
            } else {
              deprecatedFWS3 = obj7.diagnoses.deprecatedFWS;
            }
            flag9 = flag2;
            if (deprecatedFWS3 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = deprecatedFWS3;
              flag9 = flag2;
            }
          }
          let arr1 = items2.push(localpart);
          contextFWS = obj7.components.contextFWS;
          flag5 = flag9;
          tmp32 = localpart2;
          num11 = num;
          diff = tmp205;
          tmp38 = obj6;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = obj6;
        }
      } else if (obj7.components.domain === localpart) {
        if ("(" === obj6) {
          if (0 === num4) {
            if (0 === num5) {
              let deprecatedComment = obj7.diagnoses.deprecatedCFWSNearAt;
            } else {
              deprecatedComment = obj7.diagnoses.deprecatedComment;
            }
            let flag8 = flag2;
            if (deprecatedComment > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = deprecatedComment;
              flag8 = flag2;
            }
          } else {
            let cfwsComment = obj7.diagnoses.cfwsComment;
            flag8 = true;
            if (cfwsComment > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = cfwsComment;
              flag8 = true;
            }
          }
          let arr2 = items2.push(localpart);
          contextFWS = obj7.components.contextComment;
          flag5 = flag8;
          tmp32 = localpart2;
          num11 = num;
          diff = num2;
          tmp38 = obj6;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = str3;
        } else if ("." === obj6) {
          if (0 === num4) {
            if (0 === num5) {
              let errConsecutiveDots = obj7.diagnoses.errDotStart;
            } else {
              errConsecutiveDots = obj7.diagnoses.errConsecutiveDots;
            }
            if (errConsecutiveDots > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errConsecutiveDots;
            }
          } else if (flag3) {
            let errDomainHyphenEnd = obj7.diagnoses.errDomainHyphenEnd;
            if (errDomainHyphenEnd > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errDomainHyphenEnd;
            }
          } else if (63 < num4) {
            let rfc5322LabelTooLong = obj7.diagnoses.rfc5322LabelTooLong;
            if (rfc5322LabelTooLong > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = rfc5322LabelTooLong;
            }
          }
          sum2 = num5 + 1;
          obj1.domains[sum2] = "";
          obj.domain = obj.domain + obj6;
          tmp32 = localpart2;
          contextFWS = localpart;
          num11 = sum2;
          diff = num2;
          tmp38 = obj6;
          flag5 = false;
          tmp39 = flag3;
          num10 = num3;
          num12 = 0;
          num13 = sum2;
          tmp40 = str3;
        } else if ("[" === obj6) {
          if (0 === obj.domain.length) {
            num12 = num4 + 1;
            let arr3 = items2.push(localpart);
            contextFWS = obj7.components.literal;
            obj.domain = obj.domain + obj6;
            let domains5 = obj1.domains;
            domains5[num5] = domains5[num5] + obj6;
            obj.literal = "";
            tmp32 = localpart2;
            num11 = num;
            diff = num2;
            tmp38 = obj6;
            flag5 = true;
            tmp39 = flag3;
            num10 = num3;
            num13 = num5;
            tmp40 = str3;
          } else {
            let errExpectingATEXT2 = obj7.diagnoses.errExpectingATEXT;
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = num;
            diff = num2;
            tmp38 = obj6;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num12 = num4;
            num13 = num5;
            tmp40 = str3;
            if (errExpectingATEXT2 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errExpectingATEXT2;
              tmp32 = localpart2;
              contextFWS = localpart;
              num11 = num;
              diff = num2;
              tmp38 = obj6;
              flag5 = flag2;
              tmp39 = flag3;
              num10 = num3;
              num12 = num4;
              num13 = num5;
              tmp40 = str3;
            }
          }
        } else {
          if ("\r" === obj6) {
            let sum3 = num2 + 1;
            if (length !== sum3) {
              let tmp204 = sum3;
            }
            let errCRNoLF5 = obj7.diagnoses.errCRNoLF;
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = num;
            diff = sum3;
            tmp38 = obj6;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num12 = num4;
            num13 = num5;
            tmp40 = str3;
            if (errCRNoLF5 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errCRNoLF5;
              tmp32 = localpart2;
              contextFWS = localpart;
              num11 = num;
              diff = sum3;
              tmp38 = obj6;
              flag5 = flag2;
              tmp39 = flag3;
              num10 = num3;
              num12 = num4;
              num13 = num5;
              tmp40 = str3;
            }
          } else {
            tmp204 = num2;
            if (" " !== obj6) {
              tmp204 = num2;
              if ("\t" !== obj6) {
                if (flag2) {
                  if (obj7.components.contextComment !== localpart2) {
                    if (obj7.components.contextFWS !== localpart2) {
                      if (obj7.components.literal !== localpart2) {
                        break;
                      } else {
                        let errATEXTAfterDomainLiteral = obj7.diagnoses.errATEXTAfterDomainLiteral;
                        if (errATEXTAfterDomainLiteral > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = errATEXTAfterDomainLiteral;
                        }
                      }
                    }
                  }
                  let errATEXTAfterCFWS = obj7.diagnoses.errATEXTAfterCFWS;
                  if (errATEXTAfterCFWS > dnsWarnNoMXRecord) {
                    dnsWarnNoMXRecord = errATEXTAfterCFWS;
                  }
                }
                let charCodeAtResult1 = obj6.charCodeAt(0);
                if (charCodeAtResult1 >= 33) {
                  if (charCodeAtResult1 <= 126) {
                    if (!obj7.specials(charCodeAtResult1)) {
                      if ("-" === obj6) {
                        let flag6 = true;
                        if (0 === num4) {
                          let errDomainHyphenStart = obj7.diagnoses.errDomainHyphenStart;
                          flag6 = true;
                          if (errDomainHyphenStart > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = errDomainHyphenStart;
                            flag6 = true;
                          }
                        }
                      } else {
                        let tmp104 = charCodeAtResult1 < 48 || charCodeAtResult1 > 122;
                        if (!tmp104) {
                          let tmp105 = charCodeAtResult1 > 57 && charCodeAtResult1 < 65;
                          tmp104 = tmp105;
                        }
                        if (!tmp104) {
                          let tmp106 = charCodeAtResult1 > 90 && charCodeAtResult1 < 97;
                          tmp104 = tmp106;
                        }
                        flag6 = false;
                        if (tmp104) {
                          let rfc5322Domain = obj7.diagnoses.rfc5322Domain;
                          flag6 = false;
                          if (rfc5322Domain > dnsWarnNoMXRecord) {
                            dnsWarnNoMXRecord = rfc5322Domain;
                            flag6 = false;
                          }
                        }
                      }
                    }
                    obj.domain = obj.domain + obj6;
                    let domains4 = obj1.domains;
                    domains4[num5] = domains4[num5] + obj6;
                    num12 = num4 + 1;
                    tmp39 = flag6;
                    tmp32 = localpart2;
                    contextFWS = localpart;
                    num11 = num;
                    diff = num2;
                    tmp38 = obj6;
                    flag5 = flag2;
                    num10 = num3;
                    num13 = num5;
                    tmp40 = str3;
                  }
                }
                let errExpectingATEXT = obj7.diagnoses.errExpectingATEXT;
                flag6 = false;
                if (errExpectingATEXT > dnsWarnNoMXRecord) {
                  dnsWarnNoMXRecord = errExpectingATEXT;
                  flag6 = false;
                }
              }
            }
          }
          if (0 === num4) {
            if (0 === num5) {
              let deprecatedFWS2 = obj7.diagnoses.deprecatedCFWSNearAt;
            } else {
              deprecatedFWS2 = obj7.diagnoses.deprecatedFWS;
            }
            let flag7 = flag2;
            if (deprecatedFWS2 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = deprecatedFWS2;
              flag7 = flag2;
            }
          } else {
            let cfwsFWS4 = obj7.diagnoses.cfwsFWS;
            flag7 = true;
            if (cfwsFWS4 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = cfwsFWS4;
              flag7 = true;
            }
          }
          let arr4 = items2.push(localpart);
          contextFWS = obj7.components.contextFWS;
          flag5 = flag7;
          tmp32 = localpart2;
          num11 = num;
          diff = tmp204;
          tmp38 = obj6;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = obj6;
        }
      } else if (obj7.components.literal === localpart) {
        if ("]" === obj6) {
          if (dnsWarnNoMXRecord < obj7.categories.deprecated) {
            let literal = obj.literal;
            let ipV4 = obj7.regex.ipV4;
            let match = ipV4.exec(literal);
            let num14 = -1;
            let tmp84 = match;
            if (match) {
              let index = match.index;
              tmp84 = 0 !== index;
              num14 = index;
            }
            let text = literal;
            if (tmp84) {
              text = `${arr4.slice(0, num14)}0:0`;
            }
            if (0 === num14) {
              let rfc5321AddressLiteral2 = obj7.diagnoses.rfc5321AddressLiteral;
              if (rfc5321AddressLiteral2 > dnsWarnNoMXRecord) {
                dnsWarnNoMXRecord = rfc5321AddressLiteral2;
              }
            } else {
              let str13 = text.slice(0, 5);
              if ("ipv6:" !== str13.toLowerCase()) {
                let rfc5322DomainLiteral2 = obj7.diagnoses.rfc5322DomainLiteral;
                if (rfc5322DomainLiteral2 > dnsWarnNoMXRecord) {
                  dnsWarnNoMXRecord = rfc5322DomainLiteral2;
                }
              } else {
                let str14 = text.slice(5);
                let maxIPv6Groups = obj7.maxIPv6Groups;
                let parts = str14.split(":");
                index = str14.indexOf("::");
                if (~index) {
                  if (index !== str14.lastIndexOf("::")) {
                    let rfc5322IPv62x2xColon = obj7.diagnoses.rfc5322IPv62x2xColon;
                    if (rfc5322IPv62x2xColon > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = rfc5322IPv62x2xColon;
                    }
                  } else {
                    let tmp85 = 0 !== index && index !== str14.length - 2;
                    let sum4 = maxIPv6Groups;
                    if (!tmp85) {
                      sum4 = maxIPv6Groups + 1;
                    }
                    if (parts.length > sum4) {
                      let rfc5322IPv6MaxGroups = obj7.diagnoses.rfc5322IPv6MaxGroups;
                      if (rfc5322IPv6MaxGroups > dnsWarnNoMXRecord) {
                        dnsWarnNoMXRecord = rfc5322IPv6MaxGroups;
                      }
                    } else if (parts.length === sum4) {
                      let deprecatedIPv6 = obj7.diagnoses.deprecatedIPv6;
                      if (deprecatedIPv6 > dnsWarnNoMXRecord) {
                        dnsWarnNoMXRecord = deprecatedIPv6;
                      }
                    }
                  }
                } else if (parts.length !== maxIPv6Groups) {
                  let rfc5322IPv6GroupCount = obj7.diagnoses.rfc5322IPv6GroupCount;
                  if (rfc5322IPv6GroupCount > dnsWarnNoMXRecord) {
                    dnsWarnNoMXRecord = rfc5322IPv6GroupCount;
                  }
                }
                if (":" === str14[0]) {
                  if (":" !== str14[1]) {
                    let rfc5322IPv6ColonStart = obj7.diagnoses.rfc5322IPv6ColonStart;
                    if (rfc5322IPv6ColonStart > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = rfc5322IPv6ColonStart;
                    }
                  }
                }
                if (":" === str14[str14.length - 1]) {
                  if (":" !== str14[str14.length - 2]) {
                    let rfc5322IPv6ColonEnd = obj7.diagnoses.rfc5322IPv6ColonEnd;
                    if (rfc5322IPv6ColonEnd > dnsWarnNoMXRecord) {
                      dnsWarnNoMXRecord = rfc5322IPv6ColonEnd;
                    }
                  }
                }
                let diagnoses = obj7.diagnoses;
                if (obj7.checkIpV6(parts)) {
                  let rfc5321AddressLiteral = diagnoses.rfc5321AddressLiteral;
                  if (rfc5321AddressLiteral > dnsWarnNoMXRecord) {
                    dnsWarnNoMXRecord = rfc5321AddressLiteral;
                  }
                } else {
                  let rfc5322IPv6BadCharacter = diagnoses.rfc5322IPv6BadCharacter;
                  if (rfc5322IPv6BadCharacter > dnsWarnNoMXRecord) {
                    dnsWarnNoMXRecord = rfc5322IPv6BadCharacter;
                  }
                }
              }
            }
          } else {
            let rfc5322DomainLiteral = obj7.diagnoses.rfc5322DomainLiteral;
            if (rfc5322DomainLiteral > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = rfc5322DomainLiteral;
            }
          }
          obj.domain = obj.domain + obj6;
          let domains3 = obj1.domains;
          domains3[num5] = domains3[num5] + obj6;
          num12 = num4 + 1;
          contextFWS = items2.pop();
          tmp32 = localpart;
          num11 = num;
          diff = num2;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num13 = num5;
          tmp40 = str3;
        } else if ("\\" === obj6) {
          let rfc5322DomainLiteralOBSDText2 = obj7.diagnoses.rfc5322DomainLiteralOBSDText;
          if (rfc5322DomainLiteralOBSDText2 > dnsWarnNoMXRecord) {
            dnsWarnNoMXRecord = rfc5322DomainLiteralOBSDText2;
          }
          let arr5 = items2.push(localpart);
          contextFWS = obj7.components.contextQuotedPair;
          tmp32 = localpart2;
          num11 = num;
          diff = num2;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = str3;
        } else {
          if ("\r" === obj6) {
            let sum5 = num2 + 1;
            if (length !== sum5) {
              let tmp75 = sum5;
            }
            let errCRNoLF4 = obj7.diagnoses.errCRNoLF;
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = num;
            diff = sum5;
            tmp38 = obj6;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num12 = num4;
            num13 = num5;
            tmp40 = str3;
            if (errCRNoLF4 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errCRNoLF4;
              tmp32 = localpart2;
              contextFWS = localpart;
              num11 = num;
              diff = sum5;
              tmp38 = obj6;
              flag5 = flag2;
              tmp39 = flag3;
              num10 = num3;
              num12 = num4;
              num13 = num5;
              tmp40 = str3;
            }
          } else {
            tmp75 = num2;
            if (" " !== obj6) {
              tmp75 = num2;
              if ("\t" !== obj6) {
                let charCodeAtResult2 = obj6.charCodeAt(0);
                if (charCodeAtResult2 <= 127) {
                  if (0 !== charCodeAtResult2) {
                    if ("[" !== obj6) {
                      let tmp71 = charCodeAtResult2 < 33 || 127 === charCodeAtResult2;
                      if (tmp71) {
                        let rfc5322DomainLiteralOBSDText = obj7.diagnoses.rfc5322DomainLiteralOBSDText;
                        if (rfc5322DomainLiteralOBSDText > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = rfc5322DomainLiteralOBSDText;
                        }
                      }
                      obj.literal = obj.literal + obj6;
                      obj.domain = obj.domain + obj6;
                      let domains2 = obj1.domains;
                      domains2[num5] = domains2[num5] + obj6;
                      num12 = num4 + 1;
                      tmp32 = localpart2;
                      contextFWS = localpart;
                      num11 = num;
                      diff = num2;
                      tmp38 = obj6;
                      flag5 = flag2;
                      tmp39 = flag3;
                      num10 = num3;
                      num13 = num5;
                      tmp40 = str3;
                    }
                  }
                }
                let errExpectingDTEXT = obj7.diagnoses.errExpectingDTEXT;
                tmp32 = localpart2;
                contextFWS = localpart;
                num11 = num;
                diff = num2;
                tmp38 = obj6;
                flag5 = flag2;
                tmp39 = flag3;
                num10 = num3;
                num12 = num4;
                num13 = num5;
                tmp40 = str3;
                if (errExpectingDTEXT > dnsWarnNoMXRecord) {
                  dnsWarnNoMXRecord = errExpectingDTEXT;
                  tmp32 = localpart2;
                  contextFWS = localpart;
                  num11 = num;
                  diff = num2;
                  tmp38 = obj6;
                  flag5 = flag2;
                  tmp39 = flag3;
                  num10 = num3;
                  num12 = num4;
                  num13 = num5;
                  tmp40 = str3;
                }
              }
            }
          }
          let cfwsFWS3 = obj7.diagnoses.cfwsFWS;
          if (cfwsFWS3 > dnsWarnNoMXRecord) {
            dnsWarnNoMXRecord = cfwsFWS3;
          }
          let arr6 = items2.push(localpart);
          contextFWS = obj7.components.contextFWS;
          tmp32 = localpart2;
          num11 = num;
          diff = tmp75;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = obj6;
        }
      } else if (obj7.components.contextQuotedString === localpart) {
        if ("\\" === obj6) {
          let arr7 = items2.push(localpart);
          contextFWS = obj7.components.contextQuotedPair;
          tmp32 = localpart2;
          num11 = num;
          diff = num2;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = str3;
        } else {
          if ("\r" === obj6) {
            let sum6 = num2 + 1;
            if (length !== sum6) {
              let tmp199 = sum6;
            }
            let errCRNoLF3 = obj7.diagnoses.errCRNoLF;
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = num;
            diff = sum6;
            tmp38 = obj6;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num12 = num4;
            num13 = num5;
            tmp40 = str3;
            if (errCRNoLF3 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errCRNoLF3;
              tmp32 = localpart2;
              contextFWS = localpart;
              num11 = num;
              diff = sum6;
              tmp38 = obj6;
              flag5 = flag2;
              tmp39 = flag3;
              num10 = num3;
              num12 = num4;
              num13 = num5;
              tmp40 = str3;
            }
          } else {
            tmp199 = num2;
            if ("\t" !== obj6) {
              if ("\"" === obj6) {
                obj.local = obj.local + obj6;
                let locals3 = obj1.locals;
                locals3[num5] = locals3[num5] + obj6;
                num12 = num4 + 1;
                contextFWS = items2.pop();
                tmp32 = localpart;
                num11 = num;
                diff = num2;
                tmp38 = obj6;
                flag5 = flag2;
                tmp39 = flag3;
                num10 = num3;
                num13 = num5;
                tmp40 = str3;
              } else {
                let charCodeAtResult3 = obj6.charCodeAt(0);
                if (charCodeAtResult3 <= 127) {
                  if (0 !== charCodeAtResult3) {
                    if (10 !== charCodeAtResult3) {
                      let tmp63 = charCodeAtResult3 < 32 || 127 === charCodeAtResult3;
                      if (tmp63) {
                        let deprecatedQTEXT = obj7.diagnoses.deprecatedQTEXT;
                        if (deprecatedQTEXT > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = deprecatedQTEXT;
                        }
                      }
                    }
                    obj.local = obj.local + obj6;
                    let locals2 = obj1.locals;
                    locals2[num5] = locals2[num5] + obj6;
                    num12 = num4 + 1;
                    tmp32 = localpart2;
                    contextFWS = localpart;
                    num11 = num;
                    diff = num2;
                    tmp38 = obj6;
                    flag5 = flag2;
                    tmp39 = flag3;
                    num10 = num3;
                    num13 = num5;
                    tmp40 = str3;
                  }
                }
                let errExpectingQTEXT = obj7.diagnoses.errExpectingQTEXT;
                if (errExpectingQTEXT > dnsWarnNoMXRecord) {
                  dnsWarnNoMXRecord = errExpectingQTEXT;
                }
              }
            }
          }
          obj.local = `${obj4.local} `;
          let locals4 = obj1.locals;
          locals4[num5] = `${locals4[num5]} `;
          let cfwsFWS2 = obj7.diagnoses.cfwsFWS;
          if (cfwsFWS2 > dnsWarnNoMXRecord) {
            dnsWarnNoMXRecord = cfwsFWS2;
          }
          num12 = num4 + 1;
          let arr8 = items2.push(localpart);
          contextFWS = obj7.components.contextFWS;
          tmp32 = localpart2;
          num11 = num;
          diff = tmp199;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num13 = num5;
          tmp40 = obj6;
        }
      } else if (obj7.components.contextQuotedPair === localpart) {
        let charCodeAtResult4 = obj6.charCodeAt(0);
        if (charCodeAtResult4 > 127) {
          let errExpectingQPair = obj7.diagnoses.errExpectingQPair;
          if (errExpectingQPair > dnsWarnNoMXRecord) {
            dnsWarnNoMXRecord = errExpectingQPair;
          }
        } else {
          let tmp53 = charCodeAtResult4 < 31 && 9 !== charCodeAtResult4 || 127 === charCodeAtResult4;
          if (tmp53) {
            let deprecatedQP = obj7.diagnoses.deprecatedQP;
            if (deprecatedQP > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = deprecatedQP;
            }
          }
        }
        let arr9 = items2.pop();
        let text1 = `\\${obj6}`;
        tmp32 = localpart;
        contextFWS = arr9;
        num11 = num;
        diff = num2;
        tmp38 = text1;
        flag5 = flag2;
        tmp39 = flag3;
        num10 = num3;
        num12 = num4;
        num13 = num5;
        tmp40 = str3;
        if (obj7.components.contextComment !== arr9) {
          if (obj7.components.contextQuotedString === arr9) {
            obj.local = obj.local + `\\${obj6}`;
            let locals = obj1.locals;
            locals[num5] = locals[num5] + `\\${obj6}`;
            num12 = num4 + 2;
            tmp32 = localpart;
            contextFWS = arr9;
            num11 = num;
            diff = num2;
            tmp38 = text1;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num13 = num5;
            tmp40 = str3;
          } else if (obj7.components.literal === arr9) {
            obj.domain = obj.domain + `\\${obj6}`;
            let domains = obj1.domains;
            domains[num5] = domains[num5] + `\\${obj6}`;
            num12 = num4 + 2;
            tmp32 = localpart;
            contextFWS = arr9;
            num11 = num;
            diff = num2;
            tmp38 = text1;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num13 = num5;
            tmp40 = str3;
          } else {
            let _Error2 = Error;
            let error2 = new Error("quoted pair logic invoked in an invalid context: " + arr9);
            throw error2;
          }
        }
      } else if (obj7.components.contextComment === localpart) {
        if ("(" === obj6) {
          let arr10 = items2.push(localpart);
          contextFWS = obj7.components.contextComment;
          tmp32 = localpart2;
          num11 = num;
          diff = num2;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = str3;
        } else if (")" === obj6) {
          contextFWS = items2.pop();
          tmp32 = localpart;
          num11 = num;
          diff = num2;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = str3;
        } else if ("\\" === obj6) {
          let arr11 = items2.push(localpart);
          contextFWS = obj7.components.contextQuotedPair;
          tmp32 = localpart2;
          num11 = num;
          diff = num2;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = str3;
        } else {
          if ("\r" === obj6) {
            let sum7 = num2 + 1;
            if (length !== sum7) {
              let tmp46 = sum7;
            }
            let errCRNoLF2 = obj7.diagnoses.errCRNoLF;
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = num;
            diff = sum7;
            tmp38 = obj6;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num12 = num4;
            num13 = num5;
            tmp40 = str3;
            if (errCRNoLF2 > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = errCRNoLF2;
              tmp32 = localpart2;
              contextFWS = localpart;
              num11 = num;
              diff = sum7;
              tmp38 = obj6;
              flag5 = flag2;
              tmp39 = flag3;
              num10 = num3;
              num12 = num4;
              num13 = num5;
              tmp40 = str3;
            }
          } else {
            tmp46 = num2;
            if (" " !== obj6) {
              tmp46 = num2;
              if ("\t" !== obj6) {
                let charCodeAtResult5 = obj6.charCodeAt(0);
                if (charCodeAtResult5 <= 127) {
                  if (0 !== charCodeAtResult5) {
                    if (10 !== charCodeAtResult5) {
                      let tmp42 = charCodeAtResult5 < 32 || 127 === charCodeAtResult5;
                      tmp32 = localpart2;
                      contextFWS = localpart;
                      num11 = num;
                      diff = num2;
                      tmp38 = obj6;
                      flag5 = flag2;
                      tmp39 = flag3;
                      num10 = num3;
                      num12 = num4;
                      num13 = num5;
                      tmp40 = str3;
                      if (tmp42) {
                        let deprecatedCTEXT = obj7.diagnoses.deprecatedCTEXT;
                        tmp32 = localpart2;
                        contextFWS = localpart;
                        num11 = num;
                        diff = num2;
                        tmp38 = obj6;
                        flag5 = flag2;
                        tmp39 = flag3;
                        num10 = num3;
                        num12 = num4;
                        num13 = num5;
                        tmp40 = str3;
                        if (deprecatedCTEXT > dnsWarnNoMXRecord) {
                          dnsWarnNoMXRecord = deprecatedCTEXT;
                          tmp32 = localpart2;
                          contextFWS = localpart;
                          num11 = num;
                          diff = num2;
                          tmp38 = obj6;
                          flag5 = flag2;
                          tmp39 = flag3;
                          num10 = num3;
                          num12 = num4;
                          num13 = num5;
                          tmp40 = str3;
                        }
                      }
                    }
                  }
                }
                let errExpectingCTEXT = obj7.diagnoses.errExpectingCTEXT;
                tmp32 = localpart2;
                contextFWS = localpart;
                num11 = num;
                diff = num2;
                tmp38 = obj6;
                flag5 = flag2;
                tmp39 = flag3;
                num10 = num3;
                num12 = num4;
                num13 = num5;
                tmp40 = str3;
                if (errExpectingCTEXT > dnsWarnNoMXRecord) {
                  dnsWarnNoMXRecord = errExpectingCTEXT;
                  tmp32 = localpart2;
                  contextFWS = localpart;
                  num11 = num;
                  diff = num2;
                  tmp38 = obj6;
                  flag5 = flag2;
                  tmp39 = flag3;
                  num10 = num3;
                  num12 = num4;
                  num13 = num5;
                  tmp40 = str3;
                }
              }
            }
          }
          let cfwsFWS = obj7.diagnoses.cfwsFWS;
          if (cfwsFWS > dnsWarnNoMXRecord) {
            dnsWarnNoMXRecord = cfwsFWS;
          }
          let arr12 = items2.push(localpart);
          contextFWS = obj7.components.contextFWS;
          tmp32 = localpart2;
          num11 = num;
          diff = tmp46;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = obj6;
        }
      } else if (obj7.components.contextFWS === localpart) {
        let tmp30 = "\r" === str3;
        let num9 = num3;
        if (!tmp30) {
          if ("\r" === obj6) {
            let sum8 = num2 + 1;
            let tmp36 = length !== sum8 && "\n" === arg0[sum8];
            tmp32 = localpart2;
            contextFWS = localpart;
            diff = sum8;
            num10 = num9;
            if (!tmp36) {
              let errCRNoLF = obj7.diagnoses.errCRNoLF;
              tmp32 = localpart2;
              contextFWS = localpart;
              diff = sum8;
              num10 = num9;
              if (errCRNoLF > dnsWarnNoMXRecord) {
                dnsWarnNoMXRecord = errCRNoLF;
                tmp32 = localpart2;
                contextFWS = localpart;
                diff = sum8;
                num10 = num9;
              }
            }
          } else {
            tmp32 = localpart2;
            contextFWS = localpart;
            diff = num2;
            num10 = num9;
            if (" " !== obj6) {
              tmp32 = localpart2;
              contextFWS = localpart;
              diff = num2;
              num10 = num9;
              if ("\t" !== obj6) {
                if (tmp30) {
                  let errFWSCRLFEnd = obj7.diagnoses.errFWSCRLFEnd;
                  if (errFWSCRLFEnd > dnsWarnNoMXRecord) {
                    dnsWarnNoMXRecord = errFWSCRLFEnd;
                  }
                }
                contextFWS = items2.pop();
                diff = num2 - 1;
                tmp32 = localpart;
                num10 = 0;
              }
            }
          }
          num11 = num;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num12 = num4;
          num13 = num5;
          tmp40 = obj6;
        } else if ("\r" === obj6) {
          let errFWSCRLFx2 = obj7.diagnoses.errFWSCRLFx2;
          tmp32 = localpart2;
          contextFWS = localpart;
          num11 = num;
          diff = num2;
          tmp38 = obj6;
          flag5 = flag2;
          tmp39 = flag3;
          num10 = num3;
          num12 = num4;
          num13 = num5;
          tmp40 = str3;
          if (errFWSCRLFx2 > dnsWarnNoMXRecord) {
            dnsWarnNoMXRecord = errFWSCRLFx2;
            tmp32 = localpart2;
            contextFWS = localpart;
            num11 = num;
            diff = num2;
            tmp38 = obj6;
            flag5 = flag2;
            tmp39 = flag3;
            num10 = num3;
            num12 = num4;
            num13 = num5;
            tmp40 = str3;
          }
        } else {
          let sum9 = num3 + 1;
          num9 = 1;
          if (1 < sum9) {
            let deprecatedFWS = obj7.diagnoses.deprecatedFWS;
            num9 = sum9;
            if (deprecatedFWS > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = deprecatedFWS;
              num9 = sum9;
            }
          }
        }
      } else {
        let _Error = Error;
        let error3 = new Error("unknown context: " + localpart);
        throw error3;
      }
      tmp13 = contextFWS;
      num6 = num11;
      tmp14 = tmp38;
      flag4 = tmp39;
      num7 = num12;
      num8 = num13;
      obj3 = obj7;
      if (dnsWarnNoMXRecord <= obj7.categories.rfc5322) {
        num2 = diff + 1;
        localpart2 = tmp32;
        localpart = contextFWS;
        num = num11;
        flag2 = flag5;
        flag3 = tmp39;
        num3 = num10;
        num4 = num12;
        num5 = num13;
        str3 = tmp40;
        tmp13 = contextFWS;
        num6 = num11;
        tmp14 = tmp38;
        flag4 = tmp39;
        num7 = num12;
        num8 = num13;
        obj3 = obj7;
      }
    }
    const _Error3 = Error;
    const error4 = new Error("more atext found where none is allowed, but unrecognized prev context: " + localpart2);
    throw error4;
  }
  if (dnsWarnNoMXRecord < obj3.categories.rfc5322) {
    if (tmp13 === obj3.components.contextQuotedString) {
      const errUnclosedQuotedString = obj3.diagnoses.errUnclosedQuotedString;
      if (errUnclosedQuotedString > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = errUnclosedQuotedString;
      }
    } else if (tmp13 === obj3.components.contextQuotedPair) {
      const errBackslashEnd = obj3.diagnoses.errBackslashEnd;
      if (errBackslashEnd > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = errBackslashEnd;
      }
    } else if (tmp13 === obj3.components.contextComment) {
      const errUnclosedComment = obj3.diagnoses.errUnclosedComment;
      if (errUnclosedComment > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = errUnclosedComment;
      }
    } else if (tmp13 === obj3.components.literal) {
      const errUnclosedDomainLiteral = obj3.diagnoses.errUnclosedDomainLiteral;
      if (errUnclosedDomainLiteral > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = errUnclosedDomainLiteral;
      }
    } else if ("\r" === tmp14) {
      const errFWSCRLFEnd2 = obj3.diagnoses.errFWSCRLFEnd;
      if (errFWSCRLFEnd2 > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = errFWSCRLFEnd2;
      }
    } else if (0 === obj.domain.length) {
      const errNoDomain = obj3.diagnoses.errNoDomain;
      if (errNoDomain > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = errNoDomain;
      }
    } else if (0 === num7) {
      const errDotEnd2 = obj3.diagnoses.errDotEnd;
      if (errDotEnd2 > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = errDotEnd2;
      }
    } else if (flag4) {
      const errDomainHyphenEnd2 = obj3.diagnoses.errDomainHyphenEnd;
      if (errDomainHyphenEnd2 > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = errDomainHyphenEnd2;
      }
    } else if (obj.domain.length > 255) {
      const rfc5322DomainTooLong = obj3.diagnoses.rfc5322DomainTooLong;
      if (rfc5322DomainTooLong > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = rfc5322DomainTooLong;
      }
    } else if (obj.local.length + obj.domain.length + 1 > 254) {
      const rfc5322TooLong = obj3.diagnoses.rfc5322TooLong;
      if (rfc5322TooLong > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = rfc5322TooLong;
      }
    } else if (63 < num7) {
      const rfc5322LabelTooLong2 = obj3.diagnoses.rfc5322LabelTooLong;
      if (rfc5322LabelTooLong2 > dnsWarnNoMXRecord) {
        dnsWarnNoMXRecord = rfc5322LabelTooLong2;
      }
    } else {
      if (obj.minDomainAtoms) {
        if (obj1.domains.length < obj.minDomainAtoms) {
          const errDomainTooShort = obj3.diagnoses.errDomainTooShort;
          if (errDomainTooShort > dnsWarnNoMXRecord) {
            dnsWarnNoMXRecord = errDomainTooShort;
          }
        }
      }
      if (obj.tldWhitelist) {
        if (!obj3.validDomain(obj1.domains[num8], obj)) {
          const errUnknownTLD = obj3.diagnoses.errUnknownTLD;
          if (errUnknownTLD > dnsWarnNoMXRecord) {
            dnsWarnNoMXRecord = errUnknownTLD;
          }
        }
      }
    }
  }
  c7 = false;
  c8 = false;
  function finish() {
    let tmp = !c7;
    if (!c7) {
      tmp = valid < valid.categories.dnsWarn;
    }
    if (tmp) {
      if (obj.charCodeAt(0) <= 57) {
        const rfc5321TLDNumeric = valid.diagnoses.rfc5321TLDNumeric;
        if (typeof updateResult !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (rfc5321TLDNumeric > valid) {
          valid = rfc5321TLDNumeric;
        }
      } else if (0 === sum2) {
        const rfc5321TLD = valid.diagnoses.rfc5321TLD;
        if (typeof updateResult !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (rfc5321TLD > valid) {
          valid = rfc5321TLD;
        }
      }
      obj = obj1.domains[sum2];
    }
    if (valid < valid) {
      valid = valid.diagnoses.valid;
    }
    if (errorLevel) {
      let tmp15 = tmp13;
    } else {
      tmp15 = tmp13 < valid.defaultThreshold;
    }
    if (domain) {
      if (c8) {
        domain(tmp15);
      } else {
        valid.defer(domain.bind(null, tmp15));
      }
    }
    return tmp15;
  }
  if (obj.checkDNS) {
    if (dnsWarnNoMXRecord < obj3.categories.dnsWarn) {
      if (0 === num6) {
        obj.domain = `${obj4.domain}.`;
      }
      domain = obj.domain;
      const mx = errorLevel.resolveMx(domain, (code) => {
        if (code) {
          if (code.code !== closure_2_1.NODATA) {
            let dnsWarnNoRecord = closure_2_2.diagnoses.dnsWarnNoRecord;
            if (typeof updateResult !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (dnsWarnNoRecord > dnsWarnNoMXRecord) {
              dnsWarnNoMXRecord = dnsWarnNoRecord;
            }
            return finish();
          }
        }
        if (arg1) {
          if (arg1.length) {
            c7 = true;
            return finish();
          }
        }
        c0 = 3;
        c1 = false;
        dnsWarnNoMXRecord = closure_2_2.diagnoses.dnsWarnNoMXRecord;
        if (typeof updateResult !== "function") {
          HermesBuiltin.throwTypeError();
        }
        function handleRecords(arg0, arg1) {
          if (!c1) {
            closure_0 = closure_0 - 1;
            if (arg1) {
              if (arg1.length) {
                c1 = true;
                return finish();
              }
            }
            if (0 === closure_0) {
              dnsWarnNoRecord = valid.diagnoses.dnsWarnNoRecord;
              if (typeof updateResult !== "function") {
                HermesBuiltin.throwTypeError();
              }
              c1 = true;
              finish();
            }
          }
        }
        const cname = closure_2_1.resolveCname(c0, handleRecords);
        closure_2_1.resolve4(c0, handleRecords);
        closure_2_1.resolve6(c0, handleRecords);
      });
      c8 = true;
    }
  }
  c8 = true;
  return finish();
}

function t(options) {
  this.options = options;
}

function f117440(arg0, arg1) {
  let length;
  const self = this;
  const options = this.options;
  if (arg0 !== this.lastyear) {
    if (typeof closure_15 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Date = Date;
    const _Date2 = Date;
    const _Date3 = Date;
    const date = new Date(Date.UTC(arg0, 0, 1, 0, 0, 0));
    if (typeof closure_20 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result = arg0 % 4;
    let tmp7 = result === 0;
    if (result === 0) {
      tmp7 = arg0 % 100 !== 0;
    }
    if (!tmp7) {
      tmp7 = arg0 % 400 === 0;
    }
    let num11 = 365;
    let num12 = 365;
    if (tmp7) {
      num12 = 366;
    }
    const sum = arg0 + 1;
    if (typeof closure_20 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result1 = sum % 4;
    let tmp10 = result1 === 0;
    if (result1 === 0) {
      tmp10 = sum % 100 !== 0;
    }
    if (!tmp10) {
      tmp10 = sum % 400 === 0;
    }
    let num15 = num11;
    if (tmp10) {
      num15 = 366;
    }
    if (typeof closure_24 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj1 = closure_18;
    const time = date.getTime();
    if (typeof closure_23 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const diff = time - 60 * date.getTimezoneOffset() * 1000;
    const time1 = obj1.getTime();
    if (typeof closure_23 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Math = Math;
    const rounded = Math.round((diff - (time1 - 60 * obj1.getTimezoneOffset() * 1000)) / closure_17);
    if (typeof closure_27 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp21 = closure_19[date.getUTCDay(date)];
    let obj = { yearlen: null, nextyearlen: null, yearordinal: null, yearweekday: null };
    obj[0] = num12;
    obj[1] = num15;
    obj[2] = rounded;
    obj[3] = tmp21;
    if (typeof closure_20 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const result2 = arg0 % 4;
    let tmp24 = result2 === 0;
    if (result2 === 0) {
      tmp24 = arg0 % 100 !== 0;
    }
    if (!tmp24) {
      tmp24 = arg0 % 400 === 0;
    }
    let num20 = num11;
    if (tmp24) {
      num20 = 366;
    }
    if (typeof closure_15 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Date4 = Date;
    const _Date5 = Date;
    const _Date6 = Date;
    const date1 = new Date(Date.UTC(arg0, 0, 1, 0, 0, 0));
    if (typeof closure_27 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp29 = closure_19[date1.getUTCDay(date1)];
    if (num11 === num20) {
      obj = { mmask: null, mdaymask: null, nmdaymask: null, wdaymask: null, mrange: null };
      obj[0] = closure_58;
      obj[1] = closure_61;
      obj[2] = closure_63;
      obj[3] = closure_66.slice(tmp29);
      obj[4] = closure_65;
      obj1 = obj;
    } else {
      obj1 = { mmask: null, mdaymask: null, nmdaymask: null, wdaymask: null, mrange: null };
      obj1[0] = closure_59;
      obj1[1] = closure_60;
      obj1[2] = closure_62;
      obj1[3] = closure_66.slice(tmp29);
      obj1[4] = closure_64;
    }
    const tmp22Result = closure_38(closure_38(obj, obj1), { wnomask: null });
    const byweekno = options.byweekno;
    if (typeof closure_12 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let tmp45 = !tmp44;
    if (null != byweekno) {
      tmp45 = 0 === byweekno.length;
    }
    if (!tmp45) {
      if (typeof closure_8 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const sum1 = num12 + 7;
      const items = [];
      if (closure_6(0)) {
        let num28 = 0;
        if (0 < sum1) {
          do {
            let items1 = [];
            items[num28] = items1.concat(0);
            num28 = num28 + 1;
          } while (num28 < sum1);
        }
      } else {
        let num27 = 0;
        if (0 < sum1) {
          do {
            items[num27] = 0;
            num27 = num27 + 1;
          } while (num27 < sum1);
        }
      }
      tmp22Result.wnomask = items;
      const sum2 = 7 - tmp21 + options.wkst;
      if (typeof closure_10 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const result3 = sum2 % 7;
      let sum3 = result3;
      if (result3 * 7 < 0) {
        sum3 = result3 + 7;
      }
      if (4 <= sum3) {
        const diff1 = tmp21 - options.wkst;
        if (typeof closure_10 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const result4 = diff1 % 7;
        let sum4 = result4;
        if (result4 * 7 < 0) {
          sum4 = result4 + 7;
        }
        let sum5 = tmp22Result.yearlen + sum4;
        let num29 = 0;
      } else {
        sum5 = num12 - sum3;
        num29 = sum3;
      }
      const _Math2 = Math;
      const rounded1 = Math.floor(sum5 / 7);
      if (typeof closure_10 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const result5 = sum5 % 7;
      let sum6 = result5;
      if (result5 * 7 < 0) {
        sum6 = result5 + 7;
      }
      const _Math3 = Math;
      const rounded2 = Math.floor(rounded1 + sum6 / 4);
      const diff2 = 7 - sum3;
      for (let num30 = 0; num30 < options.byweekno.length; num30 = num30 + 1) {
        let tmp62 = options.byweekno[num30];
        let sum7 = tmp62;
        if (tmp62 < 0) {
          sum7 = tmp62 + (rounded2 + 1);
        }
        if (sum7 > 0) {
          if (sum7 <= rounded2) {
            let diff3 = num29;
            if (sum7 > 1) {
              let sum8 = num29 + 7 * (sum7 - 1);
              diff3 = sum8;
              if (num29 !== sum3) {
                diff3 = sum8 - diff2;
              }
            }
            tmp22Result.wnomask[diff3] = 1;
            let sum9 = diff3 + 1;
            let num31 = 0;
            if (tmp22Result.wdaymask[sum9] !== options.wkst) {
              let sum10 = num31 + 1;
              while (sum10 < 7) {
                tmp22Result.wnomask[sum9] = 1;
                let sum11 = sum9 + 1;
                num31 = sum10;
                sum9 = sum11;
                if (tmp22Result.wdaymask[sum11] === options.wkst) {
                  break;
                }
              }
            }
          }
        }
      }
      const byweekno1 = options.byweekno;
      if (typeof closure_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof closure_13 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof closure_12 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp76 = !tmp75;
      if (null != byweekno1) {
        tmp76 = 0 === byweekno1.length;
      }
      let tmp77 = !tmp76;
      if (tmp77) {
        tmp77 = -1 !== byweekno1.indexOf(1);
      }
      if (tmp77) {
        const sum12 = num29 + 7 * rounded2;
        let diff4 = sum12;
        if (num29 !== sum3) {
          diff4 = sum12 - diff2;
        }
        if (diff4 < num12) {
          tmp22Result.wnomask[diff4] = 1;
          let sum13 = diff4 + 1;
          let num33 = 0;
          if (tmp22Result.wdaymask[sum13] !== options.wkst) {
            const sum14 = num33 + 1;
            while (sum14 < 7) {
              tmp22Result.wnomask[sum13] = 1;
              let sum15 = sum13 + 1;
              sum13 = sum15;
              num33 = sum14;
              if (tmp22Result.wdaymask[sum15] === options.wkst) {
                break;
              }
            }
          }
        }
      }
      if (num29) {
        const byweekno2 = options.byweekno;
        if (typeof closure_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_13 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_12 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp89 = !tmp88;
        if (null != byweekno2) {
          tmp89 = 0 === byweekno2.length;
        }
        let tmp90 = !tmp89;
        if (tmp90) {
          tmp90 = -1 !== byweekno2.indexOf(-1);
        }
        let num36 = -1;
        if (!tmp90) {
          const diff5 = arg0 - 1;
          if (typeof closure_15 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const _Date7 = Date;
          const _Date8 = Date;
          const _Date9 = Date;
          const date2 = new Date(Date.UTC(diff5, 0, 1, 0, 0, 0));
          if (typeof closure_27 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const obj8 = closure_19[date2.getUTCDay(date2)];
          const sum16 = 7 - obj8.valueOf() + options.wkst;
          if (typeof closure_10 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const result6 = sum16 % 7;
          let sum17 = result6;
          if (result6 * 7 < 0) {
            sum17 = result6 + 7;
          }
          const diff6 = arg0 - 1;
          if (typeof closure_20 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const result7 = diff6 % 4;
          let tmp106 = result7 === 0;
          if (result7 === 0) {
            tmp106 = diff6 % 100 !== 0;
          }
          if (!tmp106) {
            tmp106 = diff6 % 400 === 0;
          }
          if (tmp106) {
            num11 = 366;
          }
          if (4 <= sum17) {
            const diff7 = obj8 - options.wkst;
            if (typeof closure_10 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const result8 = diff7 % 7;
            let sum18 = result8;
            if (result8 * 7 < 0) {
              sum18 = result8 + 7;
            }
            let sum19 = num11 + sum18;
          } else {
            sum19 = num12 - num29;
          }
          if (typeof closure_10 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const result9 = sum19 % 7;
          let sum20 = result9;
          if (result9 * 7 < 0) {
            sum20 = result9 + 7;
          }
          num36 = Math.floor(52 + sum20 / 4);
        }
        const byweekno3 = options.byweekno;
        if (typeof closure_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_13 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_12 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp114 = !tmp113;
        if (null != byweekno3) {
          tmp114 = 0 === byweekno3.length;
        }
        if (tmp115) {
          let num45 = 0;
          if (0 < num29) {
            do {
              tmp22Result.wnomask[num45] = 1;
              num45 = num45 + 1;
            } while (num45 < num29);
          }
        }
        tmp115 = !tmp114 && -1 !== byweekno3.indexOf(num36);
      }
    }
    self.yearinfo = tmp22Result;
  }
  const bynweekday = options.bynweekday;
  if (typeof closure_13 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof closure_12 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof closure_3 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp119 = !tmp118;
  if (null != bynweekday) {
    tmp119 = 0 === bynweekday.length;
  }
  if (!tmp119) {
    if (arg1 !== self.lastmonth) {
      ({ yearlen, mrange, wdaymask } = self.yearinfo);
      const obj2 = { lastyear: null, lastmonth: null, nwdaymask: null };
      obj2[0] = arg0;
      obj2[1] = arg1;
      obj2[2] = [];
      const items2 = [];
      if (options.freq === closure_72.YEARLY) {
        const bymonth = options.bymonth;
        if (typeof closure_12 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp123 = !tmp122;
        if (null != bymonth) {
          tmp123 = 0 === bymonth.length;
        }
        if (tmp123) {
          const items3 = [0, yearlen];
          const items4 = [items3];
          let arr9 = items4;
        } else {
          let num48 = 0;
          arr9 = items2;
          if (0 < options.bymonth.length) {
            do {
              let tmp124 = options.bymonth[num48];
              let arr = items2.push(mrange.slice(tmp124 - 1, tmp124 + 1));
              num48 = num48 + 1;
              arr9 = items2;
              length = options.bymonth.length;
            } while (num48 < length);
          }
        }
      } else {
        arr9 = items2;
        if (options.freq === tmp121.MONTHLY) {
          const items5 = [mrange.slice(arg1 - 1, arg1 + 1)];
          arr9 = items5;
        }
      }
      if (typeof closure_12 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (0 !== arr9.length) {
        if (typeof closure_8 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const items6 = [];
        if (closure_6(0)) {
          let num54 = 0;
          if (tmp129) {
            do {
              let items7 = [];
              items6[num54] = items7.concat(0);
              num54 = num54 + 1;
            } while (num54 < yearlen);
          }
        } else {
          let num52 = 0;
          if (tmp129) {
            do {
              items6[num52] = 0;
              num52 = num52 + 1;
            } while (num52 < yearlen);
          }
        }
        obj2.nwdaymask = items6;
        for (let num57 = 0; num57 < arr9.length; num57 = num57 + 1) {
          let tmp130 = arr9[num57];
          let first = tmp130[0];
          let diff8 = tmp130[1] - 1;
          for (let num58 = 0; num58 < options.bynweekday.length; num58 = num58 + 1) {
            [tmp134, tmp135] = options.bynweekday[num58];
            if (tmp135 < 0) {
              let sum21 = diff8 + 7 * (tmp135 + 1);
              let diff9 = wdaymask[sum21] - tmp134;
              if (typeof closure_10 !== "function") {
                let throwTypeErrorResult42 = HermesBuiltin.throwTypeError();
              }
              let result10 = diff9 % 7;
              let sum22 = result10;
              if (result10 * 7 < 0) {
                sum22 = result10 + 7;
              }
              let diff10 = sum21 - sum22;
            } else {
              let sum23 = first + 7 * (tmp135 - 1);
              let sum24 = 7 - wdaymask[sum23] + tmp134;
              if (typeof closure_10 !== "function") {
                let throwTypeErrorResult43 = HermesBuiltin.throwTypeError();
              }
              let result11 = sum24 % 7;
              let sum25 = result11;
              if (result11 * 7 < 0) {
                sum25 = result11 + 7;
              }
              diff10 = sum23 + sum25;
            }
            let tmp148 = first <= diff10 && diff10 <= diff8;
            if (tmp148) {
              obj2.nwdaymask[diff10] = 1;
            }
          }
        }
      }
      self.monthinfo = obj2;
    }
  }
  if (typeof closure_3 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (null != options.byeaster) {
    let num59 = options.byeaster;
    if (undefined === num59) {
      num59 = 0;
    }
    const result12 = arg0 % 19;
    const _Math4 = Math;
    const rounded3 = Math.floor(arg0 / 100);
    const result13 = arg0 % 100;
    const _Math5 = Math;
    const _Math6 = Math;
    const rounded4 = Math.floor(rounded3 / 4);
    const result14 = rounded3 % 4;
    const _Math7 = Math;
    const _Math8 = Math;
    const result15 = Math.floor(19 * result12 + rounded3 - rounded4 - Math.floor((rounded3 - Math.floor((rounded3 + 8) / 25) + 1) / 3) + 15) % 30;
    const _Math9 = Math;
    const _Math10 = Math;
    const result16 = Math.floor(32 + 2 * result14 + 2 * Math.floor(result13 / 4) - result15 - result13 % 4) % 7;
    const _Math11 = Math;
    const rounded5 = Math.floor((result12 + 11 * result15 + 22 * result16) / 451);
    const _Math12 = Math;
    const sum26 = result15 + result16;
    const _Date10 = Date;
    const _Date11 = Date;
    const _Math13 = Math;
    const items8 = [Math.ceil((Date.UTC(arg0, Math.floor((sum26 - 7 * rounded5 + 114) / 31) - 1, (sum26 - 7 * rounded5 + 114) % 31 + 1 + num59) - Date.UTC(arg0, 0, 1)) / 86400000)];
    self.eastermask = items8;
    const UTCResult = Date.UTC(arg0, Math.floor((sum26 - 7 * rounded5 + 114) / 31) - 1, (sum26 - 7 * rounded5 + 114) % 31 + 1 + num59);
  }
}

function get() {
  let lastyear = null;
  if (this.monthinfo) {
    lastyear = this.monthinfo.lastyear;
  }
  return lastyear;
}

function get() {
  let lastmonth = null;
  if (this.monthinfo) {
    lastmonth = this.monthinfo.lastmonth;
  }
  return lastmonth;
}

function get() {
  return this.yearinfo.yearlen;
}

function get() {
  return this.yearinfo.yearordinal;
}

function get() {
  return this.yearinfo.mrange;
}

function get() {
  return this.yearinfo.wdaymask;
}

function get() {
  return this.yearinfo.mmask;
}

function get() {
  return this.yearinfo.wnomask;
}

function get() {
  if (this.monthinfo) {
    let nwdaymask = this.monthinfo.nwdaymask;
  } else {
    nwdaymask = [];
  }
  return nwdaymask;
}

function get() {
  return this.yearinfo.nextyearlen;
}

function get() {
  return this.yearinfo.mdaymask;
}

function get() {
  return this.yearinfo.nmdaymask;
}

function f117453() {
  const items = [closure_7(this.yearlen), 0, this.yearlen];
  return items;
}

function f117454(arg0, arg1) {
  const yearlen = this.yearlen;
  if (typeof closure_8 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const items = [];
  if (closure_6(null)) {
    let num2 = 0;
    if (tmp3) {
      do {
        let items1 = [];
        items[num2] = items1.concat(null);
        num2 = num2 + 1;
      } while (num2 < yearlen);
    }
  } else {
    let num = 0;
    if (tmp3) {
      do {
        items[num] = null;
        num = num + 1;
      } while (num < yearlen);
    }
  }
  let sum = tmp;
  if (this.mrange[arg1 - 1] < this.mrange[arg1]) {
    do {
      items[sum] = sum;
      sum = sum + 1;
    } while (sum < tmp2);
  }
  const items2 = [items, this.mrange[arg1 - 1], this.mrange[arg1]];
  return items2;
}

function f117455(arg0, arg1, arg2) {
  const self = this;
  const sum = this.yearlen + 7;
  if (typeof closure_8 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const items = [];
  if (closure_6(null)) {
    let num4 = 0;
    if (0 < sum) {
      do {
        let items1 = [];
        items[num4] = items1.concat(null);
        num4 = num4 + 1;
      } while (num4 < sum);
    }
  } else {
    let num2 = 0;
    if (0 < sum) {
      do {
        items[num2] = null;
        num2 = num2 + 1;
      } while (num2 < sum);
    }
  }
  if (typeof closure_15 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const date = new Date(Date.UTC(arg0, arg1 - 1, arg2, 0, 0, 0));
  if (typeof closure_24 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const time = date.getTime();
  if (typeof closure_23 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const diff = time - 60 * date.getTimezoneOffset() * 1000;
  const time1 = closure_18.getTime();
  if (typeof closure_23 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const diff1 = Math.round((diff - (time1 - 60 * closure_18.getTimezoneOffset() * 1000)) / closure_17) - self.yearordinal;
  items[diff1] = diff1;
  const sum1 = diff1 + 1;
  let num5 = 0;
  let tmp9 = sum1;
  let tmp10 = sum1;
  if (self.wdaymask[sum1] !== self.options.wkst) {
    const sum2 = num5 + 1;
    tmp10 = tmp9;
    while (sum2 < 7) {
      items[tmp9] = tmp9;
      let sum3 = tmp9 + 1;
      num5 = sum2;
      tmp9 = sum3;
      tmp10 = sum3;
      if (self.wdaymask[sum3] === self.options.wkst) {
        break;
      }
    }
  }
  const items2 = [items, diff1, tmp10];
  return items2;
}

function f117456(arg0, arg1, arg2) {
  const yearlen = this.yearlen;
  if (typeof closure_8 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const items = [];
  if (closure_6(null)) {
    let num4 = 0;
    if (tmp) {
      do {
        let items1 = [];
        items[num4] = items1.concat(null);
        num4 = num4 + 1;
      } while (num4 < yearlen);
    }
  } else {
    let num2 = 0;
    if (tmp) {
      do {
        items[num2] = null;
        num2 = num2 + 1;
      } while (num2 < yearlen);
    }
  }
  if (typeof closure_15 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const date = new Date(Date.UTC(arg0, arg1 - 1, arg2, 0, 0, 0));
  if (typeof closure_24 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const time = date.getTime();
  if (typeof closure_23 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const diff = time - 60 * date.getTimezoneOffset() * 1000;
  const time1 = closure_18.getTime();
  if (typeof closure_23 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const diff1 = Math.round((diff - (time1 - 60 * closure_18.getTimezoneOffset() * 1000)) / closure_17) - this.yearordinal;
  items[diff1] = diff1;
  const items2 = [items, diff1, diff1 + 1];
  return items2;
}

function f117457(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg2;
  closure_2 = arg3;
  const self = this;
  closure_4 = [];
  const byminute = this.options.byminute;
  const item = byminute.forEach((item, index) => {
    closure_4 = closure_4.concat(self.mtimeset(closure_0, item, closure_1, closure_2));
  });
  if (typeof closure_32 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const sorted = closure_4.sort((getTime, getTime2) => {
    const time = getTime.getTime();
    return time - getTime2.getTime();
  });
  return closure_4;
}

function f117458(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg3;
  const bysecond = this.options.bysecond;
  const mapped = bysecond.map((item, index) => {
    let num = closure_2;
    if (typeof closure_1_49 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = { hour: closure_0, minute: closure_1, second: item };
    if (!num) {
      num = 0;
    }
    obj.millisecond = num;
    return obj;
  });
  if (typeof closure_32 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const sorted = mapped.sort((getTime, getTime2) => {
    const time = getTime.getTime();
    return time - getTime2.getTime();
  });
  return mapped;
}

function f117459(hour, minute, arg2) {
  if (typeof closure_49 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let num = arg3;
  const obj = { hour, minute, second: arg2 };
  if (!arg3) {
    num = 0;
  }
  obj.millisecond = num;
  const items = [obj];
  return items;
}

function f117460(arg0) {
  const self = this;
  if (closure_39.YEARLY === arg0) {
    const ydayset = self.ydayset;
    return ydayset.bind(self);
  } else if (closure_39.MONTHLY === arg0) {
    const mdayset = self.mdayset;
    return mdayset.bind(self);
  } else if (closure_39.WEEKLY === arg0) {
    const wdayset = self.wdayset;
    return wdayset.bind(self);
  } else {
    const DAILY = closure_39.DAILY;
    const ddayset = self.ddayset;
    return ddayset.bind(self);
  }
}

function f117461(arg0) {
  const self = this;
  if (closure_39.HOURLY === arg0) {
    const htimeset = self.htimeset;
    return htimeset.bind(self);
  } else if (closure_39.MINUTELY === arg0) {
    const mtimeset = self.mtimeset;
    return mtimeset.bind(self);
  } else if (closure_39.SECONDLY === arg0) {
    const stimeset = self.stimeset;
    return stimeset.bind(self);
  }
}

function t(arg0, arg1) {
  let obj = arg0;
  if (undefined === arg0) {
    obj = {};
  }
  let flag = arg1;
  if (undefined === arg1) {
    flag = false;
  }
  let tmp = null;
  if (!flag) {
    if (typeof closure_57 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = { all: false, before: [], after: [], between: [] };
    tmp = obj;
  }
  obj._cache = tmp;
  obj.origOptions = closure_51(obj);
  const tmp5 = closure_38(closure_38({}, closure_70), closure_51(obj));
  if (typeof closure_3 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (null != tmp5.byeaster) {
    tmp5.freq = closure_72.YEARLY;
  }
  if (typeof closure_3 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (null != tmp5.freq) {
    if (closure_72.FREQUENCIES[tmp5.freq]) {
      if (!tmp5.dtstart) {
        const _Date = Date;
        const _Date2 = Date;
        const date = new Date();
        const date1 = new Date(date.setMilliseconds(0));
        tmp5.dtstart = date1;
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != tmp5.wkst) {
        if (typeof closure_4 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof tmp5.wkst !== "number") {
          tmp5.wkst = tmp5.wkst.weekday;
        }
      } else {
        tmp5.wkst = tmp8.MO.weekday;
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != tmp5.bysetpos) {
        if (typeof closure_4 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof tmp5.bysetpos === "number") {
          const items = [tmp5.bysetpos];
          tmp5.bysetpos = items;
        }
        let num4 = 0;
        if (0 < tmp5.bysetpos.length) {
          while (0 !== tmp5.bysetpos[num4]) {
            if (tmp19 < -366) {
              break;
            } else if (tmp19 > 366) {
              break;
            } else {
              num4 = num4 + 1;
            }
          }
          const _Error = Error;
          const error = new Error("bysetpos must be between 1 and 366, or between -366 and -1");
          throw error;
        }
      }
      const _Boolean = Boolean;
      if (!Boolean(tmp5.byweekno)) {
        const byweekno = tmp5.byweekno;
        if (typeof closure_13 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_12 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof closure_3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp26 = !tmp25;
        if (null != byweekno) {
          tmp26 = 0 === byweekno.length;
        }
        if (tmp26) {
          const byyearday = tmp5.byyearday;
          if (typeof closure_13 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (typeof closure_12 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (typeof closure_3 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let tmp28 = !tmp27;
          if (null != byyearday) {
            tmp28 = 0 === byyearday.length;
          }
          if (tmp28) {
            const _Boolean2 = Boolean;
            if (!Boolean(tmp5.bymonthday)) {
              const bymonthday = tmp5.bymonthday;
              if (typeof closure_13 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof closure_12 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof closure_3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp30 = !tmp29;
              if (null != bymonthday) {
                tmp30 = 0 === bymonthday.length;
              }
              if (tmp30) {
                if (typeof closure_3 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (null == tmp5.byweekday) {
                  if (typeof closure_3 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (null == tmp5.byeaster) {
                    const freq = tmp5.freq;
                    if (closure_72.YEARLY === freq) {
                      if (!tmp5.bymonth) {
                        const dtstart2 = tmp5.dtstart;
                        tmp5.bymonth = dtstart2.getUTCMonth() + 1;
                      }
                      const dtstart3 = tmp5.dtstart;
                      tmp5.bymonthday = dtstart3.getUTCDate();
                    } else if (closure_72.MONTHLY === freq) {
                      const dtstart = tmp5.dtstart;
                      tmp5.bymonthday = dtstart.getUTCDate();
                    } else if (closure_72.WEEKLY === freq) {
                      const dtstart7 = tmp5.dtstart;
                      if (typeof closure_27 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      const items1 = [closure_19[dtstart7.getUTCDay(dtstart7)]];
                      tmp5.byweekday = items1;
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp33 = null != tmp5.bymonth;
      if (tmp33) {
        tmp33 = !closure_6(tmp5.bymonth);
      }
      if (tmp33) {
        const items2 = [tmp5.bymonth];
        tmp5.bymonth = items2;
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp35 = null != tmp5.byyearday;
      if (tmp35) {
        tmp35 = !closure_6(tmp5.byyearday);
      }
      if (tmp35) {
        if (typeof closure_4 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        tmp35 = typeof tmp5.byyearday === "number";
      }
      if (tmp35) {
        const items3 = [tmp5.byyearday];
        tmp5.byyearday = items3;
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != tmp5.bymonthday) {
        const bymonthday1 = tmp5.bymonthday;
        if (closure_6(tmp5.bymonthday)) {
          const items4 = [];
          const items5 = [];
          let num7 = 0;
          if (0 < bymonthday1.length) {
            do {
              let tmp39 = tmp5.bymonthday[num7];
              if (tmp39 > 0) {
                let arr = items4.push(tmp39);
              } else if (tmp39 < 0) {
                arr = items5.push(tmp39);
              }
              num7 = num7 + 1;
            } while (num7 < tmp5.bymonthday.length);
          }
          tmp5.bymonthday = items4;
          tmp5.bynmonthday = items5;
        } else if (bymonthday1 < 0) {
          const items6 = [tmp5.bymonthday];
          tmp5.bynmonthday = items6;
          tmp5.bymonthday = [];
        } else {
          tmp5.bynmonthday = [];
          const items7 = [tmp5.bymonthday];
          tmp5.bymonthday = items7;
        }
      } else {
        tmp5.bymonthday = [];
        tmp5.bynmonthday = [];
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp44 = null != tmp5.byweekno;
      if (tmp44) {
        tmp44 = !closure_6(tmp5.byweekno);
      }
      if (tmp44) {
        const items8 = [tmp5.byweekno];
        tmp5.byweekno = items8;
      }
      if (typeof closure_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != tmp5.byweekday) {
        if (typeof closure_4 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof tmp5.byweekday === "number") {
          const items9 = [tmp5.byweekday];
          tmp5.byweekday = items9;
          tmp5.bynweekday = null;
          let tmp46 = closure_3;
        } else {
          let byweekday = tmp5.byweekday;
          if (typeof closure_5 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let hasItem = typeof byweekday === "string";
          if (typeof byweekday === "string") {
            hasItem = closure_1.includes(byweekday);
          }
          if (hasItem) {
            const items10 = [closure_2.fromStr(tmp5.byweekday).weekday];
            tmp5.byweekday = items10;
            tmp5.bynweekday = null;
            tmp46 = closure_3;
          } else {
            byweekday = tmp5.byweekday;
            if (tmp5.byweekday instanceof closure_2) {
              if (byweekday.n) {
                if (tmp5.freq <= closure_72.MONTHLY) {
                  const items11 = [tmp5.byweekday.weekday, tmp5.byweekday.n];
                  const items12 = [items11];
                  tmp5.bynweekday = items12;
                  tmp5.byweekday = null;
                  tmp46 = closure_3;
                }
              }
              const items13 = [tmp5.byweekday.weekday];
              tmp5.byweekday = items13;
              tmp5.bynweekday = null;
              tmp46 = closure_3;
            } else {
              const items14 = [];
              const items15 = [];
              let num9 = 0;
              if (0 < byweekday.length) {
                do {
                  let tmp50 = tmp5.byweekday[num9];
                  if (typeof closure_4 !== "function") {
                    let throwTypeErrorResult27 = HermesBuiltin.throwTypeError();
                  }
                  if (typeof tmp50 === "number") {
                    let arr1 = items14.push(tmp50);
                  } else {
                    if (typeof closure_5 !== "function") {
                      let throwTypeErrorResult28 = HermesBuiltin.throwTypeError();
                    }
                    let hasItem1 = typeof tmp50 === "string";
                    if (typeof tmp50 === "string") {
                      hasItem1 = closure_1.includes(tmp50);
                    }
                    if (hasItem1) {
                      let arr2 = items14.push(closure_2.fromStr(tmp50).weekday);
                    } else {
                      if (tmp50.n) {
                        if (tmp5.freq <= closure_72.MONTHLY) {
                          let items16 = [, ];
                          ({ weekday: arr16[0], n: arr16[1] } = tmp50);
                          let arr3 = items15.push(items16);
                        }
                      }
                      let arr4 = items14.push(tmp50.weekday);
                    }
                  }
                  num9 = num9 + 1;
                } while (num9 < tmp5.byweekday.length);
              }
              if (typeof closure_13 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof closure_12 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof closure_3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp63 = null;
              if (0 !== items14.length) {
                tmp63 = items14;
              }
              tmp5.byweekday = tmp63;
              if (typeof closure_13 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof closure_12 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof closure_3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp64 = null;
              if (0 !== items15.length) {
                tmp64 = items15;
              }
              tmp5.bynweekday = tmp64;
              tmp46 = closure_3;
            }
          }
        }
      } else {
        tmp5.bynweekday = null;
        tmp46 = closure_3;
      }
      if (typeof tmp46 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != tmp5.byhour) {
        if (typeof closure_4 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof tmp5.byhour === "number") {
          const items17 = [tmp5.byhour];
          tmp5.byhour = items17;
        }
      } else {
        let tmp68 = null;
        if (tmp5.freq < closure_72.HOURLY) {
          const dtstart4 = tmp5.dtstart;
          const items18 = [dtstart4.getUTCHours()];
          tmp68 = items18;
        }
        tmp5.byhour = tmp68;
      }
      if (typeof tmp46 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != tmp5.byminute) {
        if (typeof closure_4 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof tmp5.byminute === "number") {
          const items19 = [tmp5.byminute];
          tmp5.byminute = items19;
        }
      } else {
        let tmp71 = null;
        if (tmp5.freq < closure_72.MINUTELY) {
          const dtstart5 = tmp5.dtstart;
          const items20 = [dtstart5.getUTCMinutes()];
          tmp71 = items20;
        }
        tmp5.byminute = tmp71;
      }
      if (typeof tmp46 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != tmp5.bysecond) {
        if (typeof closure_4 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof tmp5.bysecond === "number") {
          const items21 = [tmp5.bysecond];
          tmp5.bysecond = items21;
        }
      } else {
        let tmp74 = null;
        if (tmp5.freq < closure_72.SECONDLY) {
          const dtstart6 = tmp5.dtstart;
          const items22 = [dtstart6.getUTCSeconds()];
          tmp74 = items22;
        }
        tmp5.bysecond = tmp74;
      }
      obj.options = tmp5;
    }
  }
  const combined = "Invalid frequency: ".concat(tmp5.freq, " ");
  const error1 = new Error(combined.concat(obj.freq));
  throw error1;
}

function f117463(arg0, arg1) {
  return closure_47(arg0, arg1);
}

function f117464(arg0, arg1) {
  let tmp = arg1;
  if (undefined === arg1) {
    tmp = closure_41;
  }
  let tmp2 = closure_72;
  tmp2 = new tmp2(closure_47(arg0, tmp) || undefined);
  return new.target;
}

function f117465(arg0) {
  let tmp = closure_0;
  const tmp2 = closure_0.parseString(arg0) || undefined;
  tmp = new tmp(tmp2);
  return Object.create(tmp.prototype);
}

function f117466(arg0) {
  return closure_68(arg0, this.options);
}

function f117467(arg0, arg1) {
  let _cacheGetResult = this._cache;
  if (_cacheGetResult) {
    const _cache = tmp._cache;
    _cacheGetResult = _cache._cacheGet(arg0, arg1);
  }
  return _cacheGetResult;
}

function f117468(arg0, arg1, arg2) {
  if (this._cache) {
    const _cache = tmp._cache;
    return _cache._cacheAdd(arg0, arg1, arg2);
  }
}

function f117469(iterator) {
  const self = this;
  if (iterator) {
    if (typeof closure_40 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = {};
    const call = closure_0.call;
    if (typeof call === "unknown") {
      closure_0("all", obj);
    } else {
      let callResult = call(tmp9, "all", obj);
    }
    if (!callResult) {
      callResult = tmp9;
    }
    callResult.iterator = iterator;
    return self._iter(callResult);
  } else {
    let _cacheGetResult = self._cacheGet("all");
    if (false === _cacheGetResult) {
      new closure_36("all", {});
      const _iterResult = self._iter(new.target);
      self._cacheAdd("all", _iterResult);
      _cacheGetResult = _iterResult;
    }
    return _cacheGetResult;
  }
}

function f117470(getTime, getTime2, arg2, iterator) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = false;
  }
  if (typeof closure_22 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof closure_21 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp3 = getTime instanceof Date;
  if (tmp3) {
    const _isNaN = isNaN;
    tmp3 = !isNaN(getTime.getTime());
  }
  if (tmp3) {
    if (typeof closure_22 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof closure_21 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _Date = Date;
    let tmp5 = getTime2 instanceof Date;
    if (tmp5) {
      const _isNaN2 = isNaN;
      tmp5 = !isNaN(getTime2.getTime());
    }
    if (tmp5) {
      const self = this;
      const obj = { before: null, after: null, inc: null };
      obj[0] = getTime2;
      obj[1] = getTime;
      obj[2] = flag;
      if (iterator) {
        if (typeof closure_40 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const call = closure_0.call;
        if (typeof call === "unknown") {
          closure_0("between", obj);
        } else {
          let callResult = call(tmp17, "between", obj);
        }
        if (!callResult) {
          callResult = tmp17;
        }
        callResult.iterator = iterator;
        return self._iter(callResult);
      } else {
        let _cacheGetResult = self._cacheGet("between", obj);
        if (false === _cacheGetResult) {
          new closure_36("between", obj);
          const _iterResult = self._iter(new.target);
          self._cacheAdd("between", _iterResult, obj);
          _cacheGetResult = _iterResult;
        }
        return _cacheGetResult;
      }
    }
  }
  const error = new Error("Invalid date passed in to RRule.between");
  throw error;
}

function f117471(getTime) {
  let flag = arg1;
  if (undefined === arg1) {
    flag = false;
  }
  if (typeof closure_22 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof closure_21 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = getTime instanceof Date;
  if (tmp) {
    const _isNaN = isNaN;
    tmp = !isNaN(getTime.getTime());
  }
  if (tmp) {
    const self = this;
    const obj = { dt: null, inc: null };
    obj[0] = getTime;
    obj[1] = flag;
    let _cacheGetResult = this._cacheGet("before", obj);
    if (false === _cacheGetResult) {
      new closure_36("before", obj);
      const _iterResult = self._iter(new.target);
      self._cacheAdd("before", _iterResult, obj);
      _cacheGetResult = _iterResult;
    }
    return _cacheGetResult;
  } else {
    const _Error = Error;
    const error = new Error("Invalid date passed in to RRule.before");
    throw error;
  }
}

function f117472(getTime) {
  let flag = arg1;
  if (undefined === arg1) {
    flag = false;
  }
  if (typeof closure_22 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof closure_21 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = getTime instanceof Date;
  if (tmp) {
    const _isNaN = isNaN;
    tmp = !isNaN(getTime.getTime());
  }
  if (tmp) {
    const self = this;
    const obj = { dt: null, inc: null };
    obj[0] = getTime;
    obj[1] = flag;
    let _cacheGetResult = this._cacheGet("after", obj);
    if (false === _cacheGetResult) {
      new closure_36("after", obj);
      const _iterResult = self._iter(new.target);
      self._cacheAdd("after", _iterResult, obj);
      _cacheGetResult = _iterResult;
    }
    return _cacheGetResult;
  } else {
    const _Error = Error;
    const error = new Error("Invalid date passed in to RRule.after");
    throw error;
  }
}

function f117473() {
  return this.all().length;
}

function f117474() {
  return closure_56(this.origOptions);
}

function f117475(arg0, arg1, arg2) {
  new closure_45(this, arg0, arg1, arg2);
  return new.target.toString();
}

function f117476() {
  return closure_48(this);
}

function f117477() {
  new closure_0(this.origOptions);
  return Object.create(closure_0.prototype);
}

function e(arg0) {
  let flag = arg0;
  if (undefined === arg0) {
    flag = false;
  }
  const self = this;
  const call = closure_0.call;
  const obj = {};
  if (typeof call === "unknown") {
    closure_0(obj, flag);
  } else {
    let callResult = call(self, obj, flag);
  }
  if (!callResult) {
    callResult = self;
  }
  callResult.dtstart = closure_1_75.apply(callResult, ["dtstart"]);
  callResult.tzid = closure_1_75.apply(callResult, ["tzid"]);
  callResult._rrule = [];
  callResult._rdate = [];
  callResult._exrule = [];
  callResult._exdate = [];
  return callResult;
}

function f117479(accept) {
  ({ _rrule, _exrule, _rdate, _exdate } = this);
  let after = accept;
  let before = _exrule;
  accept = undefined;
  closure_3 = {};
  accept = accept.accept;
  let item = _exdate.forEach((item, index) => {
    if (typeof closure_1_55 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = {};
    if (isNaN(item.getTime())) {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid date passed to DateWithZone");
      throw rangeError;
    } else {
      obj.date = item;
      obj.tzid = closure_2;
      const _Number = Number;
      closure_3[Number(obj.rezonedDate())] = true;
    }
  });
  accept.accept = function(arg0) {
    const self = this;
    const NumberResult = Number(arg0);
    if (isNaN(NumberResult)) {
      const call2 = accept.call;
      typeof call2 === "unknown" ? accept(arg0) : call2(self, arg0);
    } else {
      let tmp4 = !tmp3;
      if (!dependencyMap[NumberResult]) {
        const _Date = Date;
        const _Date2 = Date;
        const date1 = new Date(NumberResult + 1);
        let item = date1.forEach((item, index) => {
          item = item.between(date, date1, true).forEach((item, index) => {
            closure_3[Number(item)] = true;
          });
        });
        tmp4 = !dependencyMap[NumberResult];
        const date = new Date(NumberResult - 1);
      }
      if (!tmp4) {
        return !tmp4;
      } else {
        dependencyMap[NumberResult] = true;
        const call = accept.call;
        typeof call === "unknown" ? accept(arg0) : call(self, arg0);
      }
    }
  };
  if ("between" === accept.method) {
    after = accept.args.after;
    before = accept.args.before;
    const item1 = _exrule.forEach((item, index) => {
      item = item.between(date, date1, true).forEach((item, index) => {
        closure_3[Number(item)] = true;
      });
    });
    accept.accept = function(arg0) {
      const NumberResult = Number(arg0);
      if (dependencyMap[NumberResult]) {
        return tmp3;
      } else {
        const self = this;
        tmp2[NumberResult] = true;
        const call = accept.call;
        typeof call === "unknown" ? accept(arg0) : call(self, arg0);
      }
    };
  }
  let num = 0;
  if (0 < _rdate.length) {
    while (true) {
      let obj = _rdate[num];
      if (typeof closure_55 !== "function") {
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      obj = {};
      let _isNaN = isNaN;
      if (isNaN(obj.getTime())) {
        break;
      } else {
        obj.date = obj;
        obj.tzid = tzidResult;
        let rezonedDateResult = obj.rezonedDate();
        let _Date = Date;
        let date = new Date(rezonedDateResult.getTime());
        if (accept.accept(date)) {
          num = num + 1;
        }
      }
    }
    let _RangeError = RangeError;
    let rangeError = new RangeError("Invalid date passed to DateWithZone");
    throw rangeError;
  }
  const item2 = _rrule.forEach((item, index) => {
    closure_1_68(after, item.options);
  });
  const _result = accept._result;
  if (typeof closure_32 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const sorted = _result.sort((getTime, getTime2) => {
    const time = getTime.getTime();
    return time - getTime2.getTime();
  });
  const method = accept.method;
  let tmp13 = _result;
  if ("all" !== method) {
    tmp13 = _result;
    if ("between" !== method) {
      if ("before" === method) {
        tmp13 = _result.length && _result[_result.length - 1] || null;
      } else {
        tmp13 = _result.length && _result[0] || null;
      }
    }
  }
  return tmp13;
}

function f117480(arg0) {
  closure_77(arg0, this._rrule);
}

function f117481(arg0) {
  closure_77(arg0, this._exrule);
}

function f117482(arg0) {
  closure_78(arg0, this._rdate);
}

function f117483(arg0) {
  closure_78(arg0, this._exdate);
}

function f117484() {
  const _rrule = this._rrule;
  return _rrule.map((item, index) => callback(item.toString()));
}

function f117485() {
  const _exrule = this._exrule;
  return _exrule.map((item, index) => callback(item.toString()));
}

function f117486() {
  const _rdate = this._rdate;
  return _rdate.map((item, index) => new Date(item.getTime()));
}

function f117487() {
  const _exdate = this._exdate;
  return _exdate.map((item, index) => new Date(item.getTime()));
}

function f117488() {
  const self = this;
  closure_0 = [];
  let _dtstart = !length;
  if (!this._rrule.length) {
    _dtstart = self._dtstart;
  }
  if (_dtstart) {
    const obj = { dtstart: null };
    obj[0] = self._dtstart;
    closure_0 = closure_0.concat(closure_56(obj));
  }
  const _rrule = self._rrule;
  const item = _rrule.forEach((item, index) => {
    closure_0 = closure_0.concat(item.toString().split("\n"));
  });
  const _exrule = self._exrule;
  const item1 = _exrule.forEach((item, index) => {
    const parts = item.toString().split("\n");
    const mapped = parts.map((item, index) => item.replace(/^RRULE:/, "EXRULE:"));
    closure_0 = closure_0.concat(mapped.filter((item, index) => !/^DTSTART/.test(item)));
  });
  if (!self._rdate.length) {
    if (!self._exdate.length) {
      return closure_0;
    } else {
      let _exdate = self._exdate;
      const str8 = self.tzid();
      closure_0 = undefined;
      let tmp10 = !str8;
      if (str8) {
        tmp10 = "UTC" === str8.toUpperCase();
      }
      closure_0 = tmp10;
      const concat3 = "".concat;
      let str12 = ":";
      if (tmp10) {
        let concat3Result = concat3("EXDATE", `:`);
      } else {
        concat3Result = concat3("EXDATE", ";TZID=").concat(str8, `:`);
        const concat3Result1 = concat3("EXDATE", ";TZID=");
      }
      _exdate = _exdate.map((item, index) => {
        let flag = closure_0;
        if (typeof closure_1_33 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (undefined === flag) {
          flag = true;
        }
        const date = new Date(item.valueOf());
        const valueOfResult = item.valueOf();
        const items = [closure_1_9(date.getUTCFullYear().toString(), 4, "0"), closure_1_9(date.getUTCMonth() + 1, 2, "0"), closure_1_9(date.getUTCDate(), 2, "0"), "T", closure_1_9(date.getUTCHours(), 2, "0"), closure_1_9(date.getUTCMinutes(), 2, "0"), closure_1_9(date.getUTCSeconds(), 2, "0"), ];
        let str2 = "";
        if (flag) {
          str2 = "Z";
        }
        items[7] = str2;
        return items.join("");
      });
      str12 = _exdate.join(",");
      const concat4 = "".concat;
      const combined = "".concat(concat3Result);
      closure_0.push(combined.concat(str12));
    }
  } else {
    let _rdate = self._rdate;
    const str = self.tzid();
    closure_0 = undefined;
    let tmp6 = !str;
    if (str) {
      tmp6 = "UTC" === str.toUpperCase();
    }
    closure_0 = tmp6;
    const concat = "".concat;
    let str5 = ":";
    if (tmp6) {
      let combined1 = concat("RDATE", `:`);
    } else {
      const combined2 = concat("RDATE", ";TZID=");
      combined1 = combined2.concat(str, `:`);
    }
    _rdate = _rdate.map((item, index) => {
      let flag = closure_0;
      if (typeof closure_1_33 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (undefined === flag) {
        flag = true;
      }
      const date = new Date(item.valueOf());
      const valueOfResult = item.valueOf();
      const items = [closure_1_9(date.getUTCFullYear().toString(), 4, "0"), closure_1_9(date.getUTCMonth() + 1, 2, "0"), closure_1_9(date.getUTCDate(), 2, "0"), "T", closure_1_9(date.getUTCHours(), 2, "0"), closure_1_9(date.getUTCMinutes(), 2, "0"), closure_1_9(date.getUTCSeconds(), 2, "0"), ];
      let str2 = "";
      if (flag) {
        str2 = "Z";
      }
      items[7] = str2;
      return items.join("");
    });
    str5 = _rdate.join(",");
    const concat2 = "".concat;
    const combined3 = "".concat(combined1);
    closure_0.push(combined3.concat(str5));
  }
}

function f117489() {
  return this.valueOf().join("\n");
}

function f117490() {
  const self = this;
  const _cache = this._cache;
  Object.create(closure_1.prototype);
  const call = callResult.call;
  const obj = {};
  if (typeof call === "unknown") {
    callResult(obj, _cache);
  } else {
    callResult = call(obj, obj, _cache);
  }
  if (!callResult) {
    callResult = obj;
  }
  callResult.dtstart = closure_1_75.apply(callResult, ["dtstart"]);
  callResult.tzid = closure_1_75.apply(callResult, ["tzid"]);
  callResult._rrule = [];
  callResult._rdate = [];
  callResult._exrule = [];
  callResult._exdate = [];
  const _rrule = self._rrule;
  const item = _rrule.forEach((item, index) => callResult.rrule(item.clone()));
  const _exrule = self._exrule;
  const item1 = _exrule.forEach((item, index) => callResult.exrule(item.clone()));
  const _rdate = self._rdate;
  const item2 = _rdate.forEach((item, index) => callResult.rdate(new Date(item.getTime())));
  const _exdate = self._exdate;
  const item3 = _exdate.forEach((item, index) => callResult.exdate(new Date(item.getTime())));
  return callResult;
}

function f118700(channelId) {
  let obj = { channelId: channelId.channel_id };
  let result = closure_2_22.canWithPartialContext(closure_2_31.CONNECT, obj);
  if (result) {
    const channel_id = channelId.channel_id;
    let flag = false;
    if (null != channel_id) {
      const voiceStatesForChannel = closure_2_27.getVoiceStatesForChannel(channel_id);
      let someResult = null != voiceStatesForChannel;
      if (someResult) {
        const mapped = closure_2_1(closure_2_2[31])(voiceStatesForChannel).map((item, index) => {
          user = user.getUser(item.userId);
          let id;
          if (user != null) {
            id = user.id;
          }
          return id;
        });
        const found = mapped.filter(closure_2_0(closure_2_2[39]).isNotNullish);
        someResult = found.some((item, index) => blockedOrIgnored.isBlockedOrIgnored(item));
        const arr = closure_2_1(closure_2_2[31])(voiceStatesForChannel);
      }
      flag = someResult;
    }
    result = !flag;
  }
  if (result) {
    obj = { kind: "live-guild-stage", stage: null };
    obj[1] = channelId;
    closure_2[channelId.channel_id] = obj;
  }
}

function f118701(id) {
  const user = closure_2_26.getUser(id);
  if (null != user) {
    if (user.bot) {
      closure_12.add(id);
    } else {
      const primaryActivity = closure_2_23.getPrimaryActivity(id, closure_1_1);
      if (null != closure_1_1) {
        let voiceStateForUser = closure_11[id];
      } else {
        voiceStateForUser = closure_2_27.getVoiceStateForUser(id);
      }
      let tmp8 = closure_1_10;
      if (!closure_1_10) {
        tmp8 = null != primaryActivity;
      }
      if (!tmp8) {
        tmp8 = null != voiceStateForUser;
      }
      if (tmp8) {
        closure_10(id, primaryActivity, voiceStateForUser);
      }
    }
  }
}

function f118702(userId) {
  userId = userId.userId;
  closure_10(userId, closure_2_23.getPrimaryActivity(userId, closure_1_1), userId);
}

function f118703(event) {
  return closure_13.push({ kind: "guild-event", event, isLive: true });
}

function f118704(event) {
  return closure_13.push({ kind: "guild-event", event, isLive: false });
}

function f119051(arg0) {
  return closure_1_0.deleteMessage(closure_1, closure_0, arg0);
}

function f119980(arg0) {
  return closure_0[arg0];
}