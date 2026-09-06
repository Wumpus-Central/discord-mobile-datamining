// === Module 0: Discord ===

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14390 */;
import installSystrace from "installSystrace" /* 14391 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14196 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1232 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f17986 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17986[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17986[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17986[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17986[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17986 = () => GenerateInvite(f17986[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f17986 = () => GenerateInvite(f17986[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f17986[12]).default;
    return (arg0) => closure_0(GenerateInvite, f17986, arg0);
  });
}
GenerateInvite = "Disconnect";
f17986 = () => GenerateInvite(f17986[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
GenerateInvite = "MarkAsRead";
f17986 = () => GenerateInvite(f17986[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
GenerateInvite = "MuteAction";
f17986 = () => GenerateInvite(f17986[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
GenerateInvite = "ToggleDeafen";
f17986 = () => GenerateInvite(f17986[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17986 = () => GenerateInvite(f17986[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
GenerateInvite = "DismissCallAction";
f17986 = () => GenerateInvite(f17986[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
GenerateInvite = "DirectReply";
f17986 = () => GenerateInvite(f17986[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17986 = () => GenerateInvite(f17986[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
GenerateInvite = "GenerateInvite";
f17986 = () => GenerateInvite(f17986[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17986[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17986, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");

// === Orphan Functions ===

function global() {
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
  let React = _window;
  function metroRequire(prototype, _prepareEvent) {
    if (null === prototype) {
      const _Error = Error;
      const error = new Error("Cannot find module");
      throw error;
    } else {
      value = closure_1.get(prototype);
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
              value = closure_1.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        if (!value) {
          if (nativeRequire) {
            const tmp17 = closure_11(id);
            nativeRequire(tmp17.localId, tmp17.segmentId);
            value = closure_1.get(id);
          }
        }
        if (value) {
          if (value.hasError) {
            throw value.error;
          } else {
            value.isInitialized = true;
            dependencyMap = value.dependencyMap;
            __timingFunction = tmp14.__timingFunction;
            const __timingFunctionResult = __timingFunction();
            closure_1 = __timingFunctionResult;
            if (false === c3) {
              c3 = true;
              tmp14.__getTotalRequireTime = () => React2 + (__timingFunction() - __timingFunctionResult);
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
      })(prototype, value);
    }
  }
  function metroImportDefault(id) {
    value = closure_1.get(id);
    if (value) {
      if (value.importedDefault !== closure_4) {
        return value.importedDefault;
      }
    }
    if (null === id) {
      const _Error = Error;
      const error = new Error("Cannot find module");
      throw error;
    } else {
      value = closure_1.get(id);
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
        closure_1.get(id).importedDefault = _default;
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
              value = closure_1.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        if (!value) {
          if (nativeRequire) {
            const tmp17 = closure_11(id);
            nativeRequire(tmp17.localId, tmp17.segmentId);
            value = closure_1.get(id);
          }
        }
        if (value) {
          if (value.hasError) {
            throw value.error;
          } else {
            value.isInitialized = true;
            dependencyMap = value.dependencyMap;
            __timingFunction = tmp14.__timingFunction;
            const __timingFunctionResult = __timingFunction();
            closure_1 = __timingFunctionResult;
            if (false === c3) {
              c3 = true;
              tmp14.__getTotalRequireTime = () => React2 + (__timingFunction() - __timingFunctionResult);
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
  let React5 = metroImportDefault;
  function metroImportAll(id) {
    value = closure_1.get(id);
    if (value) {
      if (value.importedAll !== closure_4) {
        return value.importedAll;
      }
    }
    if (null === id) {
      const _Error = Error;
      const error = new Error("Cannot find module");
      throw error;
    } else {
      value = closure_1.get(id);
      if (value) {
        if (value.isInitialized) {
          let _exports = value.publicModule.exports;
        }
        if (!_exports) {
          const obj = {};
          if (_exports) {
            for (const key10017 in _exports) {
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let callResult = hasOwnProperty(key10017);
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
        closure_1.get(id).importedAll = tmp3;
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
              value = closure_1.get(id);
              map.delete(id);
            }
          }
        }
        const nativeRequire = __timingFunction.nativeRequire;
        if (!value) {
          if (nativeRequire) {
            const tmp17 = closure_11(id);
            nativeRequire(tmp17.localId, tmp17.segmentId);
            value = closure_1.get(id);
          }
        }
        if (value) {
          if (value.hasError) {
            throw value.error;
          } else {
            value.isInitialized = true;
            dependencyMap = value.dependencyMap;
            __timingFunction = tmp14.__timingFunction;
            const __timingFunctionResult = __timingFunction();
            closure_1 = __timingFunctionResult;
            if (false === c3) {
              c3 = true;
              tmp14.__getTotalRequireTime = () => React2 + (__timingFunction() - __timingFunctionResult);
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
  let React6 = metroImportAll;
  function unpackModuleId(arg0) {
    return { segmentId: arg0 >>> closure_9, localId: arg0 & c10 };
  }
  closure_11 = unpackModuleId;
  _window.__r = metroRequire;
  _window["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__d"] = function define(factory, arg1, dependencyMap) {
    if (!closure_1.has(arg1)) {
      let obj = { dependencyMap, factory, hasError: false, importedAll: React4, importedDefault: React4, isInitialized: false, publicModule: null };
      obj = { exports: {} };
      obj.publicModule = obj;
      const result = closure_1.set(arg1, obj);
    }
  };
  _window.__c = function clear() {
    const map = new Map();
    closure_1 = map;
    return map;
  };
  _window.__registerSegment = function registerSegment(arg0, arg1, arr) {
    closure_0 = arg0;
    closure_12[arg0] = arg1;
    if (arr) {
      const item = arr.forEach((item) => {
        let hasItem = set.has(item);
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
  c2 = 0;
  c3 = false;
  _window.__timingFunction = () => Date.now();
  _window.__getTotalRequireTime = () => c2;
  let React4 = {};
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
  let React7 = 16;
  c10 = 65535;
  metroRequire.unpackModuleId = unpackModuleId;
  metroRequire.packModuleId = function packModuleId(segmentId) {
    return (segmentId.segmentId << closure_9) + segmentId.localId;
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
  closure_129_0 = _window2;
  function stub() {
  
  }
  function consoleCreateTaskStub() {
    return {
      run(fn) {
        return fn();
      }
    };
  }
  closure_130_0 = function stylizeNoColor(arg0, arg1) {
    return arg0;
  };
  closure_130_1 = function formatValue(formatValueCalls, name, arg2) {
    let obj = formatValueCalls;
    closure_1 = name;
    const React2 = arg2;
    formatValueCalls.formatValueCalls = formatValueCalls.formatValueCalls + 1;
    if (formatValueCalls.formatValueCalls > 200) {
      const _HermesInternal4 = HermesInternal;
      return "[TOO BIG formatValueCalls " + formatValueCalls.formatValueCalls + " exceeded limit of 200]";
    } else {
      if (undefined === name) {
        let stylizeResult = formatValueCalls.stylize("undefined", "undefined");
      } else if (typeof name === "string") {
        const _JSON = JSON;
        const str3 = JSON.stringify(name);
        const str5 = JSON.stringify(name).replace(/^"|"$/g, "");
        stylizeResult = formatValueCalls.stylize(`'${JSON.stringify(name).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"")}'`, "string");
        const str7 = JSON.stringify(name).replace(/^"|"$/g, "").replace(/'/g, "\\'");
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
        const _Object = Object;
        const keys = Object.keys(name);
        obj = {};
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
          const call = toString.call;
          let tmp7 = "[object Error]" === (typeof call === "unknown" ? toString() : call(name));
          if (!tmp7) {
            const _Error = Error;
            tmp7 = name instanceof Error;
          }
          tmp6 = tmp7;
        }
        if (tmp6) {
          const _Error6 = Error;
          const call17 = toString7.call;
          return "[" + (typeof call17 === "unknown" ? toString7() : call17(name)) + "]";
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
            let tmp54 = tmp5;
            if (typeof name === "object") {
              tmp54 = null !== name;
            }
            if (!tmp54) {
              if (tmp54) {
                const _RegExp3 = RegExp;
                const call16 = toString6.call;
                return formatValueCalls.stylize(typeof call16 === "unknown" ? toString6() : call16(name), "regexp");
              } else {
                let tmp10 = tmp5;
                if (typeof name === "object") {
                  tmp10 = null !== name;
                }
                if (!tmp10) {
                  if (tmp10) {
                    const _Date2 = Date;
                    const call15 = toString5.call;
                    return formatValueCalls.stylize(typeof call15 === "unknown" ? toString5() : call15(name), "date");
                  } else {
                    let tmp13 = tmp5;
                    if (typeof name === "object") {
                      tmp13 = null !== name;
                    }
                    if (tmp13) {
                      const _Object5 = Object;
                      const call4 = toString2.call;
                      let tmp14 = "[object Error]" === (typeof call4 === "unknown" ? toString2() : call4(name));
                      if (!tmp14) {
                        const _Error2 = Error;
                        tmp14 = name instanceof Error;
                      }
                      tmp13 = tmp14;
                    }
                    if (tmp13) {
                      const _Error5 = Error;
                      const call14 = toString4.call;
                      return "[" + (typeof call14 === "unknown" ? toString4() : call14(name)) + "]";
                    }
                  }
                } else {
                  const _Object4 = Object;
                  let str15 = Object.prototype.toString;
                  const call3 = str15.call;
                  str15 = "[object Date]";
                  const tmp11 = typeof call3 === "unknown" ? str15() : call3(name);
                }
              }
            } else {
              const _Object3 = Object;
              let str14 = Object.prototype.toString;
              const call2 = str14.call;
              str14 = "[object RegExp]";
              const tmp8 = typeof call2 === "unknown" ? str14() : call2(name);
            }
          }
        }
        let flag = false;
        c4 = false;
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
        let tmp16 = tmp5;
        if (typeof name === "object") {
          tmp16 = null !== name;
        }
        if (!tmp16) {
          if (!tmp16) {
            let tmp21 = tmp5;
            if (typeof name === "object") {
              tmp21 = null !== name;
            }
            if (!tmp21) {
              if (!tmp21) {
                let tmp26 = tmp5;
                if (typeof name === "object") {
                  tmp26 = null !== name;
                }
                if (tmp26) {
                  const _Object8 = Object;
                  const call9 = toString3.call;
                  let tmp27 = "[object Error]" === (typeof call9 === "unknown" ? toString3() : call9(name));
                  if (!tmp27) {
                    const _Error3 = Error;
                    tmp27 = name instanceof Error;
                  }
                  tmp26 = tmp27;
                }
                if (!tmp26) {
                  if (0 === keys.length) {
                    return items[0] + str18 + items[1];
                  }
                  if (arg2 >= 0) {
                    const seen = formatValueCalls.seen;
                    seen.push(name);
                    if (flag) {
                      closure_129_0 = formatValueCalls;
                      closure_129_1 = name;
                      closure_129_2 = arg2;
                      closure_129_3 = obj;
                      const items1 = [];
                      closure_129_4 = items1;
                      for (let num4 = 0; num4 < length; num4 = num4 + 1) {
                        let _String = String;
                        let StringResult = String(num4);
                        let _Object9 = Object;
                        hasOwnProperty = Object.prototype.hasOwnProperty;
                        let call11 = hasOwnProperty.call;
                        let push = items1.push;
                        if (typeof call11 === "unknown" ? hasOwnProperty(StringResult) : call11(name, StringResult)) {
                          let _String2 = String;
                          let flag3 = true;
                          let arr = push(React2(formatValueCalls, name, arg2, obj, String(num4), true));
                        } else {
                          let arr1 = push(str17);
                        }
                      }
                      const item1 = keys.forEach((item) => {
                        if (!item.match(/^\d+$/)) {
                          _true.push(c2(obj, closure_1, closure_2, obj, item, true));
                        }
                      });
                      let mapped = items1;
                      length = name.length;
                    } else {
                      mapped = keys.map((item) => c2(obj, closure_1, closure_2, obj, item, c4));
                    }
                    const seen1 = formatValueCalls.seen;
                    const arr2 = seen1.pop();
                    if (mapped.reduce((acc, arr) => {
                      arr.indexOf("\n") >= 0;
                      return acc + arr.replace(/\u001b\[\d\d?m/g, "").length + 1;
                    }, 0) > 60) {
                      if (str17 !== str18) {
                        str17 = `${str18}
     `;
                      }
                      const sum = items[0] + str17;
                      let text1 = `${tmp44} ${arr3.join(",\n  ")} ${arr2[1]}`;
                    } else {
                      const sum1 = items[0] + str18;
                      text1 = `${tmp42} ${arr3.join(", ")} ${arr2[1]}`;
                    }
                  }
                  if (typeof name === "object") {
                    tmp5 = null !== name;
                  }
                  if (!tmp5) {
                    const stylize = formatValueCalls.stylize;
                    if (!tmp5) {
                      stylize("[Object]", "special");
                    }
                    const _RegExp2 = RegExp;
                    let str38 = RegExp.prototype.toString;
                    const call13 = str38.call;
                    str38 = "regexp";
                    stylize(typeof call13 === "unknown" ? str38() : call13(name), "regexp");
                    const tmp47 = typeof call13 === "unknown" ? str38() : call13(name);
                  } else {
                    const _Object10 = Object;
                    let str35 = Object.prototype.toString;
                    const call12 = str35.call;
                    str35 = "[object RegExp]";
                    const tmp45 = typeof call12 === "unknown" ? str35() : call12(name);
                  }
                } else {
                  const _Error4 = Error;
                  let str27 = Error.prototype.toString;
                  const call10 = str27.call;
                  const _HermesInternal2 = HermesInternal;
                  const text2 = `[${typeof call10 === "unknown" ? str27() : call10(name)}`;
                  str27 = " ";
                  const combined = " " + `[${typeof call10 === "unknown" ? str27() : call10(name)}` + "]";
                }
              } else {
                const _Date = Date;
                let str25 = Date.prototype.toUTCString;
                const call8 = str25.call;
                str25 = " ";
                const text3 = ` ${typeof call8 === "unknown" ? str25() : call8(name)}`;
                const tmp24 = typeof call8 === "unknown" ? str25() : call8(name);
              }
            } else {
              const _Object7 = Object;
              let str24 = Object.prototype.toString;
              const call7 = str24.call;
              str24 = "[object Date]";
              const tmp22 = typeof call7 === "unknown" ? str24() : call7(name);
            }
          } else {
            const _RegExp = RegExp;
            let str23 = RegExp.prototype.toString;
            const call6 = str23.call;
            str23 = " ";
            const text4 = ` ${typeof call6 === "unknown" ? str23() : call6(name)}`;
            const tmp19 = typeof call6 === "unknown" ? str23() : call6(name);
          }
        } else {
          const _Object6 = Object;
          let str22 = Object.prototype.toString;
          const call5 = str22.call;
          str22 = "[object RegExp]";
          const tmp17 = typeof call5 === "unknown" ? str22() : call5(name);
        }
      }
    }
  };
  closure_130_2 = function formatProperty(stylize, arg1, arg2, arg3, key10009, arg5) {
    let iter = Object.getOwnPropertyDescriptor(arg1, key10009);
    if (!iter) {
      const obj = { value: arg1[key10009] };
      iter = obj;
    }
    if (iter.get) {
      stylize = stylize.stylize;
      if (set) {
        let stylizeResult = stylize("[Getter/Setter]", "special");
      } else {
        stylizeResult = stylize("[Getter]", "special");
      }
    } else {
      let stylizeResult1;
      if (set) {
        stylizeResult1 = stylize.stylize("[Setter]", "special");
      }
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg3, key10009))) {
        let text = `${"[" + key10009}]`;
      }
      if (stylizeResult1) {
        if (undefined === text) {
          if (arg5) {
            if (key10009.match(/^\d+$/)) {
              return stylizeResult1;
            }
          }
          const _JSON = JSON;
          const str12 = JSON.stringify("" + key10009);
          if (str12.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            text = stylize.stylize(str12.slice(1, str12.length - 1), "name");
          } else {
            const str14 = str12.replace(/'/g, "\\'");
            text = stylize.stylize(str12.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'"), "string");
            const str16 = str12.replace(/'/g, "\\'").replace(/\\"/g, "\"");
          }
        }
        return text + ": " + stylizeResult1;
      } else {
        const seen = stylize.seen;
        if (seen.indexOf(iter.value) < 0) {
          if (null === arg2) {
            let arr2 = closure_1(stylize, iter.value, null);
          } else {
            arr2 = closure_1(stylize, iter.value, arg2 - 1);
          }
          iter = arr2.indexOf("\n");
          if (iter <= -1) {
            let stylizeResult2 = arr2;
          } else {
            const parts = arr2.split("\n");
            let map = parts.map;
            if (arg5) {
              const mapped = map((arg0) => "  " + arg0);
              map = mapped.join("\n");
              let substr = map.slice(2);
            } else {
              const mapped1 = map((arg0) => "   " + arg0);
              substr = `
    ${obj2.join("\n")}`;
            }
          }
        } else {
          stylizeResult2 = stylize.stylize("[Circular]", "special");
        }
      }
    }
  };
  closure_129_1 = function inspect(arg0, arg1) {
  
  };
  closure_129_2 = "(index)";
  closure_129_3 = 1;
  closure_129_4 = 2;
  closure_129_5 = 3;
  closure_129_6 = [];
  let _console = _window2.console;
  if (_window2.nativeLoggingHook) {
    let obj = { time: stub, timeEnd: stub, timeStamp: stub, count: stub, countReset: stub, createTask: consoleCreateTaskStub };
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
        let tmp4 = stylize;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= closure_2_5;
        }
        if (tmp5) {
          tmp4 = closure_2_4;
        }
        let text1 = first;
        if (closure_2_6.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        closure_2_0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof framebus === "function") {
          const obj = { seen: [], formatValueCalls: 0, stylize };
          return closure_1(obj, arg0, 10);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
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
        let tmp4 = stylize;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= closure_2_5;
        }
        if (tmp5) {
          tmp4 = closure_2_4;
        }
        let text1 = first;
        if (closure_2_6.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        closure_2_0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof framebus === "function") {
          const obj = { seen: [], formatValueCalls: 0, stylize };
          return closure_1(obj, arg0, 10);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
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
        let tmp4 = stylize;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= closure_2_5;
        }
        if (tmp5) {
          tmp4 = closure_2_4;
        }
        let text1 = first;
        if (closure_2_6.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        closure_2_0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof framebus === "function") {
          const obj = { seen: [], formatValueCalls: 0, stylize };
          return closure_1(obj, arg0, 10);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
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
        let tmp4 = stylize;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= closure_2_5;
        }
        if (tmp5) {
          tmp4 = closure_2_4;
        }
        let text1 = first;
        if (closure_2_6.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        closure_2_0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof framebus === "function") {
          const obj = { seen: [], formatValueCalls: 0, stylize };
          return closure_1(obj, arg0, 10);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
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
        let tmp4 = stylize;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= closure_2_5;
        }
        if (tmp5) {
          tmp4 = closure_2_4;
        }
        let text1 = first;
        if (closure_2_6.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        closure_2_0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof framebus === "function") {
          const obj = { seen: [], formatValueCalls: 0, stylize };
          return closure_1(obj, arg0, 10);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      if (typeof call === "unknown") {
        let mapped = map(fn);
      } else {
        mapped = call(arguments, fn);
      }
      first = mapped.join(", ");
    };
    React = 0;
    obj.debug = () => {
      if (1 === arguments.length) {
        if (typeof arguments[0] === "string") {
          let first = arguments[0];
        }
        const first1 = arguments[0];
        let tmp4 = stylize;
        let tmp5 = typeof first1 === "string";
        if (typeof first1 === "string") {
          tmp5 = "Warning: " === first1.slice(0, 9);
        }
        if (tmp5) {
          tmp5 = tmp4 >= closure_2_5;
        }
        if (tmp5) {
          tmp4 = closure_2_4;
        }
        let text1 = first;
        if (closure_2_6.length) {
          let str2 = first;
          const text = `${obj2.join("")}`;
          if (!first) {
            str2 = "";
          }
          text1 = `${tmp8} ${str2}`;
        }
        closure_2_0.nativeLoggingHook(text1, tmp4);
      }
      const call = map.call;
      const fn = (arg0) => {
        if (typeof framebus === "function") {
          const obj = { seen: [], formatValueCalls: 0, stylize };
          return closure_1(obj, arg0, 10);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      if (typeof call === "unknown") {
        let mapped = map(fn);
      } else {
        mapped = call(arguments, fn);
      }
      first = mapped.join(", ");
    };
    obj.table = function consoleTablePolyfill(arr, arg1) {
      let length;
      if (Array.isArray(arr)) {
        let mapped = arr.map((item, index) => {
          const obj = { [closure_1_2]: String(index) };
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
          combined = Array.from(arr2.reduce((acc, item) => {
            const keys = Object.keys(item);
            item = keys.forEach((item) => acc.add(item));
            return acc;
          }, set));
        }
        const items2 = [];
        items3 = [];
        let item = combined.forEach((item, index) => {
          items3[index] = item.length;
          for (let num = 0; num < items.length; num = num + 1) {
            let obj = items[num];
            if (item === c2) {
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
        const mapped1 = items3.map((item) => {
          c0 = "-";
          const mapped = Array.apply(null, Array(item)).map(() => c0);
          return mapped.join("");
        });
        const mapped2 = mapped1.map((item, index) => {
          c0 = " ";
          const mapped = Array.apply(null, Array(items3[index] - item.length)).map(() => c0);
          return item + mapped.join("");
        });
        const text = `| ${obj2.join(" | ")}`;
        const mapped3 = combined.map((item, index) => {
          c0 = " ";
          const mapped = Array.apply(null, Array(items3[index] - item.length)).map(() => c0);
          return item + mapped.join("");
        });
        const items4 = [`| ${obj3.join(" | ")} |`, `${`| ${obj2.join(" | ")}`} |`];
        let num2 = 0;
        if (0 < arr2.length) {
          do {
            let arr9 = items2[num2];
            let mapped4 = arr9.map((item, index) => {
              c0 = " ";
              const mapped = Array.apply(null, Array(items3[index] - item.length)).map(() => c0);
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
      let arr = metroRequire;
      const text = `${metroRequire.join("")}┐`;
      if (!arg0) {
        str = "";
      }
      React.nativeLoggingHook(`${tmp2} ${str}`, c3);
      arr = arr.push("\u2502");
    };
    obj.groupEnd = function consoleGroupEndPolyfill() {
      metroRequire.pop();
      React.nativeLoggingHook(`${metroRequire.join("")}┘ `, c3);
    };
    obj.groupCollapsed = function consoleGroupCollapsedPolyfill(arg0) {
      let str = arg0;
      let arr = metroRequire;
      const text = `${metroRequire.join("")}┘`;
      if (!arg0) {
        str = "";
      }
      React.nativeLoggingHook(`${tmp2} ${str}`, c3);
      arr = arr.push("\u2502");
    };
    obj.assert = function consoleAssertPolyfill(arg0, arg1) {
      if (!arg0) {
        React.nativeLoggingHook(`Assertion failed: ${arg1}`, hasOwnProperty);
      }
    };
    _window2.console = obj;
    if (true === _window2.RN$useAlwaysAvailableJSErrorHandling) {
      let _console2 = console;
      let _console3 = console;
      console.error = function() {
        const items = [...arguments];
        React5.apply(this, items);
        if (false !== console.reportErrorsAsExceptions) {
          let result;
          if (React.RN$inExceptionHandler != null) {
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
                const mapped = items.map((item) => {
                  let replaced = item;
                  if (typeof item !== "string") {
                    if (typeof framebus === "function") {
                      const obj = { seen: [], formatValueCalls: 0, stylize };
                      replaced = closure_1(obj, item, 10).replace(/\n\s*/g, " ");
                      const str = closure_1(obj, item, 10);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  return replaced;
                });
                const _Error = Error;
                const error = new Error(mapped.join(" "));
                error.name = "console.error";
                tmp4 = error;
              }
            }
            const result1 = React.RN$handleException(tmp4, false, false);
          }
        }
      };
    }
    let _Object2 = Object;
    let _console4 = console;
    Object.defineProperty(console, "_isPolyfilled", { value: true, enumerable: false });
  } else if (!_console) {
    closure_129_8 = tmp4;
    obj = {
      debug: _window2.print || stub,
      error: _window2.print || stub,
      info: _window2.print || stub,
      log: _window2.print || stub,
      trace: _window2.print || stub,
      warn: _window2.print || stub,
      assert(arg0, arg1) {
          if (!arg0) {
            React6(`Assertion failed: ${arg1}`);
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
  closure_131_0 = 0;
  closure_131_1 = true === self.RN$useAlwaysAvailableJSErrorHandling ? self.RN$handleException : ((arg0, arg1) => {
    throw arg0;
  });
  let obj1 = {
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
      if (React2.inGuard()) {
        let applyResult = apply.apply(self, items);
      } else {
        React2.applyWithGuard(apply, self, items);
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
          if (closure_1 == null) {
            self = this;
          }
          return str.applyWithGuard(closure_0, self, items, null, str);
        };
      }
    }
  };
  closure_131_2 = obj1;
  self.ErrorUtils = obj1;
  // Metro registry: 17941 module registrations omitted (each __d(factory, id, deps) wires a module rendered above)
  __r(119);
  return __r(0);
}

function f21176() {
  class CanvasManagerNoop {
    constructor() {
      tmp = closure_2_7(this, CanvasManagerNoop);
      return;
    }
  }
  const entry = {
    key: "reset",
    value: function reset() {
  
    }
  };
  const items = [
    entry,
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

function f21177() {
  class StylesheetManager {
    constructor(arg0) {
      tmp = closure_2_7(this, StylesheetManager);
      weakSet = new WeakSet();
      this.trackedLinkElements = weakSet;
      tmp3 = new closure_2_68();
      this.styleMirror = tmp3;
      ({ mutationCb: this.mutationCb, adoptedStyleSheetCb: this.adoptedStyleSheetCb } = arg0);
      return;
    }
  }
  const entry = {
    key: "attachLinkElement",
    value: function attachLinkElement(nodeName, attributes) {
      const self = this;
      if ("_cssText" in attributes.attributes) {
        let obj = { adds: [], removes: [], texts: [], attributes: null };
        obj = { id: null, attributes: null };
        ({ id: obj2.id, attributes: obj2.attributes } = attributes);
        const items = [obj];
        obj.attributes = items;
        self.mutationCb(obj);
      }
      self.trackLinkElement(nodeName);
    }
  };
  let items = [
    entry,
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
          let obj = { id, styleIds: [] };
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
              obj = { styleId: addResult, rules: null };
              let CSSRule = tmp4.rules;
              if (!CSSRule) {
                CSSRule = globalThis.CSSRule;
              }
              obj.rules = Array.from(CSSRule, (arg0, index) => ({ rule: closure_1_22(arg0), index }));
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

function f21178() {
  class ProcessedNodeManager {
    constructor() {
      tmp = closure_2_7(this, ProcessedNodeManager);
      weakMap = new WeakMap();
      this.nodeMap = weakMap;
      this.active = false;
      return;
    }
  }
  const entry = {
    key: "inOtherBuffer",
    value: function inOtherBuffer(childNodes, childNodes) {
      closure_0 = childNodes;
      const nodeMap = this.nodeMap;
      const value = nodeMap.get(childNodes);
      let someResult = value;
      if (value) {
        const _Array = Array;
        someResult = Array.from(value).some((item) => item !== closure_0);
        const arr = Array.from(value);
      }
      return someResult;
    }
  };
  let items = [
    entry,
    {
      key: "add",
      value: function add(arg0, arg1) {
        const self = this;
        if (!this.active) {
          self.active = true;
          (function onRequestAnimationFrame() {
            const items = [...arguments];
            return closure_1_71("requestAnimationFrame")(...items);
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

function f21179(arg0) {
  return 2 * arg0;
}

function createMirror$2() {
  return new closure_1_23();
}

function takeFullSnapshot(arg0) {
  if (closure_1_104) {
    tmp(arg0);
  } else {
    const _Error = Error;
    const error = new Error("please take full snapshot after start recording");
    throw error;
  }
}

function f21182() {
  class ClickDetector {
    constructor(arg0, arg1) {
      tmp = arg2;
      if (arg2 === undefined) {
        tmp = closure_2_110;
      }
      tmp2 = closure_2_7(this, ClickDetector);
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
  const entry = {
    key: "addListeners",
    value: function addListeners() {
      const self = this;
      const fn = () => {
        self._lastMutation = Date.now() / 1000;
      };
      let f71464 = fn;
      if (!closure_111) {
        closure_111 = [];
        f71464(self[8]).fill(f71464(self[8]).GLOBAL_OBJ, "open", (arg0) => {
          closure_0 = arg0;
          return () => {
            const items = [...arguments];
            if (closure_111) {
              try {
                const item = closure_111.forEach((fn) => fn());
              } catch (err) {
              }
            }
            return closure_0.apply(f71464(self[8]).GLOBAL_OBJ, items);
          };
        });
        const obj = f71464(self[8]);
      }
      closure_111.push(fn);
      f71464 = () => {
  
      };
      this._teardown = () => {
        if (typeof f71464 === "function") {
          let num2 = -1;
          if (closure_111) {
            num2 = closure_111.indexOf(f71464);
          }
          if (num2 > -1) {
            closure_111.splice(num2, 1);
          }
          self._clicks = [];
          self._lastMutation = 0;
          self._lastScroll = 0;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
    }
  };
  let items = [entry, , , , , , , , , , ];
  const entry1 = {
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
  items[1] = entry1;
  items[2] = {
    key: "handleClick",
    value: function handleClick(data, tagName) {
      const self = this;
      const _ignoreSelector = this._ignoreSelector;
      let flag = true;
      if (closure_1_116.includes(tagName.tagName)) {
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
          const obj = { timestamp: result, clickBreadcrumb: data, clickCount: 0, node: tagName };
          let _clicks = self._clicks;
          if (!_clicks.some((node) => {
            let tmp2 = node.node === obj.node;
            if (tmp2) {
              const _Math = Math;
              tmp2 = Math.abs(node.timestamp - tmp.timestamp) < 1;
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
    value: function registerMutation() {
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
    value: function registerScroll() {
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
      const item = this._getClicks(arg0).forEach((clickCount) => {
        clickCount.clickCount = clickCount.clickCount + 1;
      });
    }
  };
  items[7] = {
    key: "_getClicks",
    value: function _getClicks(arg0) {
      closure_0 = arg0;
      const _clicks = this._clicks;
      return _clicks.filter((node) => node.node === closure_0);
    }
  };
  items[8] = {
    key: "_checkClicks",
    value: function _checkClicks() {
      const self = this;
      const items = [];
      closure_0 = closure_1_117();
      const _clicks = this._clicks;
      const item = _clicks.forEach((mutationAfter) => {
        mutationAfter = mutationAfter.mutationAfter;
        let _lastMutation = !mutationAfter;
        if (!mutationAfter) {
          _lastMutation = self._lastMutation;
        }
        if (_lastMutation) {
          let diff;
          if (mutationAfter.timestamp <= self._lastMutation) {
            diff = self._lastMutation - mutationAfter.timestamp;
          }
          mutationAfter.mutationAfter = diff;
        }
        const scrollAfter = mutationAfter.scrollAfter;
        let _lastScroll = !scrollAfter;
        if (!scrollAfter) {
          _lastScroll = self._lastScroll;
        }
        if (_lastScroll) {
          let diff1;
          if (mutationAfter.timestamp <= self._lastScroll) {
            diff1 = self._lastScroll - mutationAfter.timestamp;
          }
          mutationAfter.scrollAfter = diff1;
        }
        if (mutationAfter.timestamp + self._timeout <= closure_0) {
          items.push(mutationAfter);
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
        ({ message: obj.message, timestamp: obj.timestamp } = clickBreadcrumb);
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
        obj.data = obj;
        self._addBreadcrumbEvent(_replay, obj);
      } else if (clickCount > 1) {
        obj = { type: "default", message: null, timestamp: null, category: "ui.multiClick", data: null };
        ({ message: obj3.message, timestamp: obj3.timestamp } = clickBreadcrumb);
        const obj1 = {};
        const merged1 = Object.assign(clickBreadcrumb.data);
        obj1.url = ClickDetector(dependencyMap[8]).GLOBAL_OBJ.location.href;
        obj1.route = _replay.getCurrentRoute();
        obj1.clickCount = clickCount;
        obj1.metric = true;
        obj.data = obj1;
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
      self._checkClickTimeout = ClickDetector(dependencyMap[9]).setTimeout(() => self._checkClicks(), 1000);
    }
  };
  return closure_8(ClickDetector, items);
}

function f21183(arg0) {
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
    obj.type = "" + entryType + "." + initiatorType;
    const obj2 = closure_1_0(closure_1_1[8]);
    obj.start = ((closure_1_0(closure_1_1[8]).browserPerformanceTimeOrigin() || closure_1_0(closure_1_1[8]).GLOBAL_OBJ.performance.timeOrigin) + startTime) / 1000;
    const tmp4 = closure_1_0(closure_1_1[8]).browserPerformanceTimeOrigin() || closure_1_0(closure_1_1[8]).GLOBAL_OBJ.performance.timeOrigin;
    const tmp2Result = closure_1_0(closure_1_1[8]);
    obj.end = ((closure_1_0(closure_1_1[8]).browserPerformanceTimeOrigin() || closure_1_0(closure_1_1[8]).GLOBAL_OBJ.performance.timeOrigin) + responseEnd) / 1000;
    obj.name = name;
    obj = { size: transferSize, statusCode: responseStatus, decodedBodySize, encodedBodySize };
    obj.data = obj;
    return obj;
  }
}

function createPaintEntry(arg0) {
  ({ duration, entryType, name, startTime } = arg0);
  let obj = closure_1_0(closure_1_1[8]);
  const result = ((obj.browserPerformanceTimeOrigin() || closure_1_0(closure_1_1[8]).GLOBAL_OBJ.performance.timeOrigin) + startTime) / 1000;
  obj = { type: entryType, name, start: result, end: result + duration, data: "fill" };
  return obj;
}

function createNavigationEntry(arg0) {
  ({ duration, domComplete } = arg0);
  if (0 === duration) {
    return null;
  } else {
    let obj = { type: null, start: null, end: null, name: null, data: null };
    const _HermesInternal = HermesInternal;
    obj.type = "" + tmp + "." + tmp13;
    const obj4 = closure_1_0(closure_1_1[8]);
    obj.start = ((closure_1_0(closure_1_1[8]).browserPerformanceTimeOrigin() || closure_1_0(closure_1_1[8]).GLOBAL_OBJ.performance.timeOrigin) + tmp11) / 1000;
    const tmp14 = closure_1_0(closure_1_1[8]).browserPerformanceTimeOrigin() || closure_1_0(closure_1_1[8]).GLOBAL_OBJ.performance.timeOrigin;
    const tmp18Result = closure_1_0(closure_1_1[8]);
    obj.end = ((closure_1_0(closure_1_1[8]).browserPerformanceTimeOrigin() || closure_1_0(closure_1_1[8]).GLOBAL_OBJ.performance.timeOrigin) + domComplete) / 1000;
    obj.name = tmp2;
    obj = { size: tmp12, decodedBodySize: tmp3, encodedBodySize: tmp4, duration, domInteractive: tmp7, domContentLoadedEventStart: tmp5, domContentLoadedEventEnd: tmp6, loadEventStart: tmp8, loadEventEnd: tmp9, domComplete, redirectCount: tmp10 };
    obj.data = obj;
    return obj;
  }
}

function makeReplayDebugLogger() {
  let captureExceptions = false;
  let traceInternals = false;
  let obj = {
    exception() {
  
    },
    infoTick() {
  
    },
    setConfig(captureExceptions) {
      captureExceptions = captureExceptions.captureExceptions;
      traceInternals = captureExceptions.traceInternals;
    }
  };
  const forEach = closure_131.forEach;
  if (closure_130) {
    const item = forEach((arg0) => {
      closure_0 = arg0;
      obj[arg0] = () => {
        const items = [...arguments];
        const debug = closure_3_0(closure_3_1[8]).debug;
        const items1 = [closure_3_132, ...items];
        debug[closure_0].apply(items1);
        if (traceInternals) {
          const joined = items.join("");
          let tmpResult = closure_3_0(closure_3_1[8]);
          let str2 = tmpResult.severityLevelFromString(closure_0);
          if (str2 === undefined) {
            str2 = "info";
          }
          tmpResult = closure_3_0(closure_3_1[8]);
          obj = { category: "console", data: { logger: "replay" }, level: str2, message: null };
          const _HermesInternal = HermesInternal;
          obj.message = "" + closure_3_132 + joined;
          obj = { level: str2 };
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
      const debug = closure_2_0(closure_2_1[8]).debug;
      debug.error(closure_2_132, arg0);
      if (captureExceptions) {
        let tmp10Result = closure_2_0(closure_2_1[8]);
        obj = { mechanism: { handled: true, type: "auto.function.replay.debug" } };
        tmp10Result.captureException(arg0, obj);
      } else if (traceInternals) {
        tmp10Result = closure_2_0(closure_2_1[8]);
        obj = { category: "console", data: { logger: "replay" }, level: "error", message: null };
        const _HermesInternal = HermesInternal;
        obj.message = "" + closure_2_132 + arg0;
        const obj1 = { level: "error" };
        tmp10Result.addBreadcrumb(obj, obj1);
      }
    };
    obj.infoTick = () => {
      const items = [...arguments];
      const debug = closure_2_0(closure_2_1[8]).debug;
      const items1 = [closure_2_132, ...items];
      debug.log.apply(items1);
      if (traceInternals) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          captureExceptions(traceInternals[8]);
          obj = { category: "console", data: { logger: "replay" }, level: "info", message: "" + closure_2_132 + items[0] };
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

function f21189(arg0) {
  class EventBufferSizeExceededError {
    constructor() {
      self = this;
      tmp = closure_2_7(this, EventBufferSizeExceededError);
      items = ["Event buffer exceeded maximum size of 20000000."];
      tmp2 = closure_2_4;
      obj = closure_2_4(EventBufferSizeExceededError);
      tmp3 = closure_2_3;
      if (closure_2_9()) {
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

function f21190() {
  class EventBufferArray {
    constructor() {
      tmp = closure_2_7(this, EventBufferArray);
      this.events = [];
      this._totalSize = 0;
      this.hasCheckout = false;
      this.waitForCheckout = false;
      return;
    }
  }
  const items = [
    {
      key: "hasEvents",
      get() {
        return this.events.length > 0;
      }
    },
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
  const entry = { key: "addEvent", value: null };
  closure_0 = closure_2(function(arg0) {
    const self = this;
    closure_1 = arg0;
    c2 = 0;
    return (function*(arg0) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
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
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  entry.value = function addEvent(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[3] = entry;
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
      const mapped = events.map((timestamp) => timestamp.timestamp);
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

function f21191() {
  class WorkerHandler {
    constructor(arg0) {
      tmp = closure_2_7(this, WorkerHandler);
      this._worker = arg0;
      this._id = 0;
      return;
    }
  }
  const entry = {
    key: "ensureReady",
    value: function ensureReady() {
      const self = this;
      if (!this._ensureReadyPromise) {
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const _worker = self._worker;
          const listener = _worker.addEventListener("message", (event) => {
            if (event.data.success) {
              closure_0();
            } else {
              closure_1();
            }
          }, { once: true });
          const _worker2 = self._worker;
          const listener1 = _worker2.addEventListener("error", (event) => {
            closure_1(event);
          }, { once: true });
        });
        self._ensureReadyPromise = promise;
      }
      return self._ensureReadyPromise;
    }
  };
  const items = [
    entry,
    {
      key: "destroy",
      value: function destroy() {
        if (closure_1_130) {
          logger.log("Destroying compression worker");
        }
        const _worker = this._worker;
        _worker.terminate();
      }
    },
    {
      key: "postMessage",
      value: function postMessage(method, arg1) {
        const self = this;
        closure_2 = arg1;
        let id = this._getAndIncrementId();
        return new Promise((arg0, arg1) => {
          id = arg0;
          method = arg1;
          function listener(event) {
            const data = event.data;
            if (data.method === closure_1) {
              if (data.id === closure_0) {
                const _worker = self._worker;
                const removed = _worker.removeEventListener("message", listener);
                if (data.success) {
                  closure_0(data.response);
                } else {
                  if (closure_3_130) {
                    logger.error("Error in compression worker: ", data.response);
                  }
                  const _Error = Error;
                  const error = new Error("Error in compression worker");
                  closure_1(error);
                }
              }
            }
          }
          let _worker = self._worker;
          listener = _worker.addEventListener("message", listener);
          const _worker2 = self._worker;
          _worker2.postMessage({ id, method, arg: listener });
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

function f21192() {
  class EventBufferCompressionWorker {
    constructor(arg0) {
      tmp = closure_2_7(this, EventBufferCompressionWorker);
      tmp2 = new closure_2_136(arg0);
      this._worker = tmp2;
      this._earliestTimestamp = null;
      this._totalSize = 0;
      this.hasCheckout = false;
      this.waitForCheckout = false;
      return;
    }
  }
  const items = [
    {
      key: "hasEvents",
      get() {
        return this._earliestTimestamp;
      }
    },
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
        if (self._totalSize > closure_1_14) {
          const tmp7 = new closure_1_134();
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
        _worker.postMessage("clear").then(null, (error) => {
          if (closure_1_130) {
            closure_1_133.exception(error, "Sending \"clear\" message to worker failed", error);
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
  const entry = { key: "_finishRequest", value: null };
  closure_0 = closure_2(function() {
    const self = this;
    c3 = 0;
    c4 = 0;
    return (function*() {
      closure_2 = self;
      closure_1 = tmp2;
      const _worker = self._worker;
      yield _worker.postMessage("finish");
      closure_129_0 = value;
      closure_2._earliestTimestamp = null;
      closure_2._totalSize = 0;
      return closure_129_0;
    })();
  });
  entry.value = function _finishRequest() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[9] = entry;
  return closure_8(EventBufferCompressionWorker, items);
}

function f21193() {
  class EventBufferProxy {
    constructor(arg0) {
      tmp = closure_2_7(this, EventBufferProxy);
      tmp2 = new closure_2_135();
      this._fallback = tmp2;
      tmp3 = new closure_2_137(arg0);
      this._compression = tmp3;
      this._used = this._fallback;
      this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
      return;
    }
  }
  let items = [
    {
      key: "waitForCheckout",
      get() {
        return this._used.waitForCheckout;
      },
      set(waitForCheckout) {
        this._used.waitForCheckout = waitForCheckout;
      }
    },
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
  const entry = { key: "finish", value: null };
  closure_2 = closure_2(function() {
    const self = this;
    c2 = 0;
    c3 = 0;
    return (function*() {
      _used = self;
      yield self.ensureWorkerIsLoaded();
      _used = _used._used;
      return _used.finish();
    })();
  });
  entry.value = function finish() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[8] = entry;
  items[9] = {
    key: "ensureWorkerIsLoaded",
    value: function ensureWorkerIsLoaded() {
      return this._ensureWorkerIsLoadedPromise;
    }
  };
  const entry1 = { key: "_ensureWorkerIsLoaded", value: null };
  closure_1 = closure_2(function() {
    const self = this;
    c6 = 0;
    c7 = 0;
    c4 = 0;
    return (function*() {
      closure_3 = self;
      closure_2 = tmp3;
      closure_1 = tmp5;
      const _compression = self._compression;
      yield _compression.ensureReady();
      yield "HermesInternal";
      yield closure_3._switchToCompressionWorker();
      closure_129_0 = closure_5;
      if (closure_1_130) {
        closure_1_133.exception(closure_129_0, "Failed to load the compression worker, falling back to simple buffer");
      }
    })();
  });
  entry1.value = function _ensureWorkerIsLoaded() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[10] = entry1;
  const entry2 = { key: "_switchToCompressionWorker", value: null };
  closure_0 = closure_2(function() {
    const self = this;
    c8 = 0;
    c9 = 0;
    c6 = 0;
    return (function*(arg0) {
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              _fallback = self;
              closure_4 = tmp;
              closure_3 = tmp4;
              let _fallback2 = self._fallback;
              events = _fallback2.events;
              let items = [];
              ({ hasCheckout, waitForCheckout } = _fallback2);
              closure_1 = events[Symbol.iterator]();
              while (closure_1 !== undefined) {
                let _compression = self._compression;
                let arr = items.push(_compression.addEvent(tmp20));
                c6 = 0;
                continue;
              }
              self._compression.hasCheckout = hasCheckout;
              self._compression.waitForCheckout = waitForCheckout;
              self._used = self._compression;
              c6 = 2;
              let _Promise = Promise;
              c8 = 3;
              c9 = 1;
              let obj1 = { value: Promise.all(items), done: false };
              return obj1;
            }
          } else if (1 === tmp4) {
            c6 = 0;
            closure_1.return();
            throw closure_1_7;
          } else {
            if (2 === tmp4) {
              c6 = 0;
              closure_131_0 = closure_1_7;
              if (closure_1_130) {
                let exceptionResult = closure_1_133.exception(closure_131_0, "Failed to add events when switching buffers.");
              }
              c9 = 3;
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 !== 2) {
              _fallback = _fallback._fallback;
              let clearResult = _fallback.clear();
              c6 = 0;
            }
            c6 = 0;
            c9 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
      }
    })();
  });
  entry2.value = function _switchToCompressionWorker() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[11] = entry2;
  return closure_8(EventBufferProxy, items);
}

function f21194(arg0) {
  class TransportStatusCodeError {
    constructor(arg0) {
      self = this;
      tmp = closure_2_7(this, TransportStatusCodeError);
      items = [];
      items[0] = "Transport returned status code " + arg0;
      tmp2 = closure_2_4;
      obj = closure_2_4(TransportStatusCodeError);
      tmp3 = closure_2_3;
      if (closure_2_9()) {
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

function f21195(arg0) {
  class RateLimitError {
    constructor(arg0) {
      self = this;
      tmp = closure_2_7(this, RateLimitError);
      items = ["Rate limit hit"];
      tmp2 = closure_2_4;
      obj = closure_2_4(RateLimitError);
      tmp3 = closure_2_3;
      if (closure_2_9()) {
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

function f21196() {
  class ReplayContainer {
    constructor(arg0) {
      self = this;
      f108031 = this;
      options = arg0.options;
      tmp = closure_2_7(this, ReplayContainer);
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
      obj.errorIds = set;
      set1 = new Set();
      obj.traceIds = set1;
      obj.urls = [];
      obj.initialTimestamp = Date.now();
      this._context = obj;
      this._recordingOptions = arg0.recordingOptions;
      this._options = options;
      obj = { maxWait: this._options.flushMaxDelay };
      obj3 = closure_2_0(closure_2_1[8]);
      obj1 = {};
      merged = Object.assign(obj);
      obj1.setTimeoutImpl = closure_2_0(closure_2_1[9]).setTimeout;
      this._debouncedFlush = obj3.debounce(() => f108031._flush(), this._options.flushMinDelay, obj1);
      f108031 = (timestamp, arg1) => {
        let flag = false;
        if (f108031.eventBuffer) {
          flag = false;
          if (!f108031.isPaused()) {
            flag = false;
            if (f108031.isEnabled()) {
              timestamp = timestamp.timestamp;
              let result = timestamp;
              if (timestamp <= 9999999999) {
                result = 1000 * timestamp;
              }
              const _Date = Date;
              const sum = result + f108031.timeouts.sessionIdlePause;
              let tmp4 = sum >= Date.now();
              if (tmp4) {
                let flag2 = result <= f108031.getContext().initialTimestamp + f108031.getOptions().maxReplayDuration;
                if (!flag2) {
                  flag2 = false;
                  if (closure_2_130) {
                    const _HermesInternal = HermesInternal;
                    closure_2_133.infoTick("Skipping event with timestamp " + result + " because it is after maxReplayDuration");
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
          let resolved = closure_2_147(f108031, timestamp, arg1);
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
        if (items1.reduce((acc, item) => acc + item, 0) >= 300) {
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
        obj2.threshold = Math.min(3000, slowClickTimeout);
        obj2.timeout = slowClickTimeout;
        str = "";
        if (slowClickIgnoreSelectors) {
          str2 = ",";
          str = slowClickIgnoreSelectors.join(",");
        }
        obj2.ignoreSelector = str;
        tmp7 = obj2;
      }
      if (tmp7) {
        tmp8 = closure_2_115;
        tmp9 = new.target;
        tmp10 = new.target;
        tmp11 = self;
        tmp12 = tmp7;
        tmp13 = new closure_2_115(self, tmp7);
        tmp14 = tmp13;
        self.clickDetector = tmp13;
      }
      if (closure_2_130) {
        _experiments = options._experiments;
        tmp15 = closure_2_133;
        obj3 = { captureExceptions: null, traceInternals: null };
        obj3.captureExceptions = _experiments.captureExceptions;
        obj3.traceInternals = _experiments.traceInternals;
        setConfigResult = closure_2_133.setConfig(obj3);
      }
      self._handleVisibilityChange = () => {
        if ("visible" === closure_0(map[8]).GLOBAL_OBJ.document.visibilityState) {
          const result = f108031._doChangeToForegroundTasks();
        } else {
          const result1 = f108031._doChangeToBackgroundTasks();
        }
      };
      self._handleWindowBlur = () => {
        const merged = Object.assign({ category: "ui.blur" });
        const result = f108031._doChangeToBackgroundTasks({ timestamp: Date.now() / 1000, type: "default" });
      };
      self._handleWindowFocus = () => {
        const merged = Object.assign({ category: "ui.focus" });
        const result = f108031._doChangeToForegroundTasks({ timestamp: Date.now() / 1000, type: "default" });
      };
      self._handleKeyboardEvent = (arg0) => {
        let data = f108031;
        if (f108031.isEnabled()) {
          data.updateUserActivity();
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
                  let obj1 = data(map[8]);
                  const tmp9 = obj1.htmlTreeAsString(target, { maxStringLength: 200 }) || "<unknown>";
                  data = { category: "ui.keyDown", message: tmp9, data: null };
                  data = {};
                  const merged = Object.assign(closure_2_122(target, tmp9).data);
                  data.metaKey = metaKey;
                  data.shiftKey = tmp3;
                  data.ctrlKey = ctrlKey;
                  data.altKey = altKey;
                  data.key = key;
                  data.data = data;
                  obj1 = { timestamp: null, type: "default" };
                  const _Date = Date;
                  obj1.timestamp = Date.now() / 1000;
                  const merged1 = Object.assign(data);
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
                data.triggerUserActivity();
              } else {
                const result = data.checkAndHandleExpiredSession();
              }
              data.addUpdate(() => {
                data = { type: Custom.Custom, timestamp: null, data: null };
                let num = _null.timestamp;
                if (!num) {
                  num = 0;
                }
                data.timestamp = 1000 * num;
                data = { tag: "breadcrumb", payload: null };
                const normalizer = f108031(map[8]);
                data.payload = normalizer.normalize(_null, 10, 1000);
                data.data = data;
                data.throttledAddEvent(data);
                return "console" === _null.category;
              });
            }
          }
        }
      };
      return;
    }
  }
  const entry = {
    key: "getContext",
    value: function getContext() {
      return this._context;
    }
  };
  let items = [
    entry,
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
      value: function handleException(error) {
        if (closure_1_130) {
          closure_1_133.exception(error);
        }
        if (this._options.onError) {
          const _options = this._options;
          _options.onError(error);
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
              if (closure_1_130) {
                const _HermesInternal = HermesInternal;
                closure_1_133.infoTick("Starting replay in " + self.recordingMode + " mode");
              }
              self._initializeRecording();
            }
          } else if (closure_1_130) {
            const _Error = Error;
            const error = new Error("Unable to initialize and create session");
            closure_1_133.exception(error);
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
            if (closure_1_130) {
              closure_1_133.log("Recording is already in progress");
            }
          }
        }
        if (self._isEnabled) {
          if ("buffer" === self.recordingMode) {
            if (closure_1_130) {
              closure_1_133.log("Buffering is in progress, call `flush()` to save the replay");
            }
          }
        }
        if (closure_1_130) {
          closure_1_133.infoTick("Starting replay in session mode");
        }
        self._updateUserActivity();
        let obj = { maxReplayDuration: self._options.maxReplayDuration, sessionIdleExpire: self.timeouts.sessionIdleExpire };
        obj = { stickySession: self._options.stickySession, sessionSampleRate: 1, allowBuffering: false };
        self.session = closure_1_145(obj, obj);
        self.recordingMode = "session";
        self._initializeRecording();
      }
    },
    {
      key: "startBuffering",
      value: function startBuffering() {
        const self = this;
        if (this._isEnabled) {
          if (closure_1_130) {
            closure_1_133.log("Buffering is in progress, call `flush()` to save the replay");
          }
        } else {
          if (closure_1_130) {
            closure_1_133.infoTick("Starting replay in buffer mode");
          }
          let obj = { sessionIdleExpire: self.timeouts.sessionIdleExpire, maxReplayDuration: self._options.maxReplayDuration };
          obj = { stickySession: self._options.stickySession, sessionSampleRate: 0, allowBuffering: true };
          self.session = closure_1_145(obj, obj);
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
              obj1.checkoutEveryNms = Math.max(360000, self._options._experiments.continuousCheckout);
              obj = obj1;
            }
          }
          const merged1 = Object.assign(obj);
          obj.emit = closure_1_169(self);
          let obj4 = /iPhone|iPad|iPod/i;
          let str2;
          if (closure_1_168 != null) {
            str2 = closure_1_168.userAgent;
          }
          if (str2 == null) {
            str2 = "";
          }
          if (obj4.test(str2)) {
            const obj2 = { sampling: { mousemove: false } };
            let obj3 = obj2;
          } else {
            let obj5 = /Macintosh/i;
            let str3;
            if (closure_1_168 != null) {
              str3 = closure_1_168.userAgent;
            }
            if (str3 == null) {
              str3 = "";
            }
            if (obj5.test(str3)) {
              let maxTouchPoints;
              if (closure_1_168 != null) {
                maxTouchPoints = closure_1_168.maxTouchPoints;
              }
              if (maxTouchPoints) {
                let maxTouchPoints1;
                if (closure_1_168 != null) {
                  maxTouchPoints1 = closure_1_168.maxTouchPoints;
                }
              }
            }
            obj3 = {};
          }
          const merged2 = Object.assign(obj3);
          obj.onMutation = self._onMutationHandler.bind(self);
          if (_canvas) {
            obj4 = { recordCanvas: null, getCanvasManager: null, sampling: null, dataURLOptions: null };
            ({ recordCanvas: obj10.recordCanvas, getCanvasManager: obj10.getCanvasManager, sampling: obj10.sampling, dataURLOptions: obj10.dataURLOptions } = _canvas);
            obj5 = obj4;
          } else {
            obj5 = {};
          }
          const merged3 = Object.assign(obj5);
          self._stopRecording = closure_1_109(obj);
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
  const entry1 = { key: "stop", value: null };
  closure_4 = closure_2(function() {
    const self = this;
    closure_1 = arg0;
    c7 = 0;
    c8 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_4 = self;
              closure_3 = tmp3;
              closure_2 = tmp5;
              closure_130_0 = undefined;
              let reason;
              let obj1 = closure_1;
              if (closure_1 === undefined) {
                obj1 = {};
              }
              let flag = obj1.forceFlush;
              if (flag === undefined) {
                flag = false;
              }
              closure_130_0 = flag;
              reason = obj1.reason;
              c7 = 1;
              c8 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj2 = { value, done: true };
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
                  logger.log("Stopping Replay" + str);
                }
                closure_1_149();
                closure_4._removeListeners();
                closure_4.stopRecording();
                const _debouncedFlush = closure_4._debouncedFlush;
                _debouncedFlush.cancel();
                if (closure_130_0) {
                  c7 = 3;
                  c8 = 1;
                  const obj3 = { value: closure_4._flush({ force: true }), done: false };
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
              closure_130_2 = closure_6;
              closure_4.handleException(closure_130_2);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c8 = 3;
              obj = { value, done: true };
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
  entry1.value = function stop() {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[11] = entry1;
  items[12] = {
    key: "pause",
    value: function pause() {
      const self = this;
      if (!this._isPaused) {
        self._isPaused = true;
        self.stopRecording();
        if (closure_1_130) {
          closure_1_133.log("Pausing replay");
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
        if (closure_1_130) {
          closure_1_133.log("Resuming replay");
        }
      }
      tmp = this._isPaused && self._checkSession();
    }
  };
  const entry2 = { key: "sendBufferedReplayOrFlush", value: null };
  closure_3 = closure_2(function() {
    const self = this;
    closure_1 = arg0;
    c5 = 0;
    c6 = 0;
    const iter = (function*() {
      if ("session" === closure_4.recordingMode) {
        return closure_4.flushImmediate();
      }
      const _Date = Date;
      closure_130_1 = Date.now();
      if (closure_1_130) {
        logger.log("Converting buffer to session");
      }
      yield closure_4.flushImmediate();
      closure_130_2 = closure_4.stopRecording();
      let tmp7 = closure_130_0;
      if (closure_130_0) {
        tmp7 = closure_130_2;
      }
      if (tmp7) {
        tmp7 = "session" !== closure_4.recordingMode;
      }
      if (tmp7) {
        closure_4.recordingMode = "session";
        if (closure_4.session) {
          closure_4.session.dirty = false;
          closure_4._updateUserActivity(closure_130_1);
          const result = closure_4._updateSessionActivity(closure_130_1);
          closure_4._maybeSaveSession();
        }
        closure_4.startRecording();
      }
      yield "HermesInternal";
      closure_4 = self;
      closure_3 = self;
      closure_2 = tmp2;
      let obj1 = closure_1;
      if (closure_1 === undefined) {
        obj1 = {};
      }
      let flag2 = obj1.continueRecording;
      if (flag2 === undefined) {
        flag2 = true;
      }
      closure_130_0 = flag2;
      return "PX_16";
    })();
    iter.next();
    return iter;
  });
  entry2.value = function sendBufferedReplayOrFlush() {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[14] = entry2;
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
          const tmp9 = 0 !== sessionIdlePause && _lastActivity + sessionIdlePause <= tmp6;
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
      const combined = "" + closure_0(dependencyMap[8]).GLOBAL_OBJ.location.pathname + closure_0(dependencyMap[8]).GLOBAL_OBJ.location.hash + closure_0(dependencyMap[8]).GLOBAL_OBJ.location.search;
      const combined1 = "" + closure_0(dependencyMap[8]).GLOBAL_OBJ.location.origin + combined;
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
    value: function throttledAddEvent(data, arg1) {
      const self = this;
      const _throttledAddEventResult = this._throttledAddEvent(data, arg1);
      if (_throttledAddEventResult === closure_176) {
        let payload = { timestamp: null, type: "default" };
        const _Date = Date;
        payload.timestamp = Date.now() / 1000;
        const merged = Object.assign({ category: "replay.throttled" });
        self.addUpdate(() => {
          let num = payload.timestamp;
          if (!num) {
            num = 0;
          }
          payload = { type: 5, timestamp: num, data: { tag: "breadcrumb", payload, metric: true } };
          return !closure_2_146(self, payload);
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
        lastActiveSpan = closure_0(dependencyMap[8]).getActiveSpan();
        const obj = closure_0(dependencyMap[8]);
      }
      let rootSpan = lastActiveSpan;
      if (lastActiveSpan) {
        rootSpan = closure_0(dependencyMap[8]).getRootSpan(lastActiveSpan);
        const obj2 = closure_0(dependencyMap[8]);
      }
      let data = rootSpan;
      if (rootSpan) {
        data = closure_0(dependencyMap[8]).spanToJSON(rootSpan).data;
        const obj4 = closure_0(dependencyMap[8]);
      }
      if (!data) {
        data = {};
      }
      const tmp10 = data[closure_0(undefined, dependencyMap[8]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
      if (rootSpan) {
        if (tmp10) {
          const items = ["route", "custom"];
          if (items.includes(tmp10)) {
            return closure_0(dependencyMap[8]).spanToJSON(rootSpan).description;
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
                if (closure_1_130) {
                  let str = "";
                  if (arg0) {
                    const _HermesInternal = HermesInternal;
                    str = " from " + arg0;
                  }
                  closure_1_133.log("Using compression worker" + str);
                }
                const worker = new globalThis.Worker(tmp4);
                const tmp18 = new closure_1_138(worker);
                return tmp18;
              }
            } catch (tmp20) {
              if (closure_1_130) {
                closure_1_133.exception(tmp20, "Failed to create compression worker");
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
      if (closure_1_130) {
        closure_1_133.log("Using simple buffer");
      }
      tmp5 = new closure_1_135();
    }
  };
  items[28] = {
    key: "_initializeSessionForSampling",
    value: function _initializeSessionForSampling(previousSessionId) {
      let obj = { sessionIdleExpire: this.timeouts.sessionIdleExpire, maxReplayDuration: this._options.maxReplayDuration, previousSessionId };
      obj = { stickySession: this._options.stickySession, sessionSampleRate: this._options.sessionSampleRate, allowBuffering: this._options.errorSampleRate > 0 };
      this.session = closure_1_145(obj, obj);
    }
  };
  items[29] = {
    key: "_checkSession",
    value: function _checkSession() {
      const self = this;
      if (this.session) {
        const session = self.session;
        const obj = { sessionIdleExpire: self.timeouts.sessionIdleExpire, maxReplayDuration: self._options.maxReplayDuration };
        let tmp2 = closure_1_144(session, obj);
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
  const entry3 = { key: "_refreshSession", value: null };
  closure_2 = closure_2(function(arg0) {
    const self = this;
    closure_1 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let obj1 = self;
              closure_3 = self;
              closure_2 = tmp2;
              closure_130_0 = closure_1;
              if (self._isEnabled) {
                c4 = 1;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.stop({ reason: "refresh session" });
                return obj1;
              } else {
                c5 = 3;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_3.initializeSampling(closure_130_0.id);
          }
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp11) {
          c5 = tmp;
          throw tmp11;
        }
      }
    })();
  });
  entry3.value = function _refreshSession(session) {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[30] = entry3;
  items[31] = {
    key: "_addListeners",
    value: function _addListeners() {
      let self = this;
      try {
        const _document = closure_0(dependencyMap[8]).GLOBAL_OBJ.document;
        const listener = _document.addEventListener("visibilitychange", self._handleVisibilityChange);
        const GLOBAL_OBJ = closure_0(dependencyMap[8]).GLOBAL_OBJ;
        const listener1 = GLOBAL_OBJ.addEventListener("blur", self._handleWindowBlur);
        const GLOBAL_OBJ2 = closure_0(dependencyMap[8]).GLOBAL_OBJ;
        const listener2 = GLOBAL_OBJ2.addEventListener("focus", self._handleWindowFocus);
        const GLOBAL_OBJ3 = closure_0(dependencyMap[8]).GLOBAL_OBJ;
        const listener3 = GLOBAL_OBJ3.addEventListener("keydown", self._handleKeyboardEvent);
        if (self.clickDetector) {
          let clickDetector = self.clickDetector;
          clickDetector.addListeners();
        }
        if (!self._hasInitializedCoreListeners) {
          (function addGlobalListeners(self) {
            closure_0 = self;
            const client = closure_0(dependencyMap[8]).getClient();
            closure_0(dependencyMap[9]);
            if (typeof closure_121 === "function") {
              closure_0 = self;
              tmp4((name) => {
                let obj = closure_0;
                if (closure_0.isEnabled()) {
                  obj = { category: null };
                  const _HermesInternal = HermesInternal;
                  ({ target, message } = (function getDomTarget(event) {
                    try {
                      if ("click" === tmp) {
                        let tmp3 = closure_1_112(event.event);
                      } else {
                        tmp3 = closure_1_113(event.event);
                      }
                      obj = obj(obj[8]);
                      let str2 = obj.htmlTreeAsString(tmp3, { maxStringLength: 200 });
                      if (!str2) {
                        str2 = "<unknown>";
                      }
                      let str3 = str2;
                      obj = { target: tmp3, message: str3 };
                      return obj;
                    } catch (err) {
                      str3 = "<unknown>";
                    }
                  })(name));
                  obj.category = "ui." + name.name;
                  const merged = Object.assign(closure_2_122(target, message));
                  obj = { timestamp: null, type: "default" };
                  const _Date = Date;
                  obj.timestamp = Date.now() / 1000;
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
                      data = { type: Custom.Custom, timestamp: null, data: null };
                      let num = _null.timestamp;
                      if (!num) {
                        num = 0;
                      }
                      data.timestamp = 1000 * num;
                      data = { tag: "breadcrumb", payload: null };
                      const normalizer = f108031(map[8]);
                      data.payload = normalizer.normalize(_null, 10, 1000);
                      data.data = data;
                      data.throttledAddEvent(data);
                      return "console" === _null.category;
                    });
                  }
                  const tmp2 = (function getDomTarget(event) {
                    try {
                      if ("click" === tmp) {
                        let tmp3 = closure_1_112(event.event);
                      } else {
                        tmp3 = closure_1_113(event.event);
                      }
                      obj = obj(obj[8]);
                      let str2 = obj.htmlTreeAsString(tmp3, { maxStringLength: 200 });
                      if (!str2) {
                        str2 = "<unknown>";
                      }
                      let str3 = str2;
                      obj = { target: tmp3, message: str3 };
                      return obj;
                    } catch (err) {
                      str3 = "<unknown>";
                    }
                  })(name);
                }
              });
              let tmpResult = tmp(dependencyMap[9]);
              closure_129_0 = self;
              let result = tmpResult.addHistoryInstrumentationHandler((arg0) => {
                if (data.isEnabled()) {
                  const _Date = Date;
                  ({ from, to } = arg0);
                  const result = Date.now() / 1000;
                  data = { type: "navigation.push", start: result, end: result, name: to, data: null };
                  data = { previous: from };
                  data.data = data;
                  const urls = data.getContext().urls;
                  urls.push(data.name);
                  data.triggerUserActivity();
                  data.addUpdate(() => {
                    const items = [obj];
                    const mapped = items.map((op) => {
                      const start = op.start;
                      data = { type: Custom.Custom, timestamp: start, data: null };
                      data = { tag: "performanceSpan", payload: { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data } };
                      data.data = data;
                      let throttledAddEventResult = closure_0.throttledAddEvent(data);
                      if (typeof throttledAddEventResult === "string") {
                        throttledAddEventResult = Promise.resolve(null);
                      }
                      return throttledAddEventResult;
                    });
                    return false;
                  });
                }
              });
              closure_130_0 = self;
              tmpResult = tmp(dependencyMap[8]);
              const client1 = tmpResult.getClient();
              if (client1) {
                client1.on("beforeAddBreadcrumb", (category) => {
                  let obj = _true;
                  if (_true.isEnabled()) {
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
                                  c0 = false;
                                  obj = {};
                                  const mapped = _arguments.map((item) => {
                                    if (item) {
                                      if (typeof item === "string") {
                                        let combined = item;
                                        if (item.length > closure_2_13) {
                                          c0 = true;
                                          const _HermesInternal2 = HermesInternal;
                                          combined = "" + item.slice(0, closure_2_13) + "\u2026";
                                        }
                                        return combined;
                                      } else if (typeof item !== "object") {
                                        return item;
                                      } else {
                                        try {
                                          const normalizer = _true(dependencyMap[8]);
                                          const normalizeResult = normalizer.normalize(item, 7);
                                          const _JSON = JSON;
                                          if (JSON.stringify(normalizeResult).length > closure_2_13) {
                                            c0 = true;
                                            const _JSON2 = JSON;
                                            const json = JSON.stringify(normalizeResult, null, 2);
                                            const _HermesInternal = HermesInternal;
                                            let combined1 = "" + json.slice(0, closure_2_13) + "\u2026";
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
                                  if (c0) {
                                    const obj1 = { _meta: null };
                                    const obj2 = { warnings: ["CONSOLE_ARG_TRUNCATED"] };
                                    obj1._meta = obj2;
                                    let obj3 = obj1;
                                  } else {
                                    obj3 = {};
                                  }
                                  const merged2 = Object.assign(obj3);
                                  obj.data = obj;
                                  let obj4 = { timestamp: null, type: "default" };
                                  const _Date2 = Date;
                                  obj4.timestamp = Date.now() / 1000;
                                  const merged3 = Object.assign(obj);
                                }
                              }
                              const obj5 = { timestamp: null, type: "default" };
                              const _Date3 = nowResult.Date;
                              nowResult = _Date3.now();
                              obj5.timestamp = nowResult / 1000;
                              merged4 = Object.assign(merged4);
                              obj4 = obj5;
                            } else {
                              let obj6 = { timestamp: null, type: "default" };
                              const _Date = Date;
                              obj6.timestamp = Date.now() / 1000;
                              const merged5 = Object.assign(merged4);
                              tmp3 = obj6;
                            }
                          }
                        }
                      }
                      if (tmp3) {
                        c0 = obj;
                        obj6 = tmp3;
                        if ("sentry.transaction" !== tmp3.category) {
                          const items1 = ["ui.click", "ui.input"];
                          if (items1.includes(tmp3.category)) {
                            obj.triggerUserActivity();
                          } else {
                            const result = obj.checkAndHandleExpiredSession();
                          }
                          obj.addUpdate(() => {
                            data = { type: Custom.Custom, timestamp: null, data: null };
                            let num = _null.timestamp;
                            if (!num) {
                              num = 0;
                            }
                            data.timestamp = 1000 * num;
                            data = { tag: "breadcrumb", payload: null };
                            const normalizer = f108031(map[8]);
                            data.payload = normalizer.normalize(_null, 10, 1000);
                            data.data = data;
                            data.throttledAddEvent(data);
                            return "console" === _null.category;
                          });
                        }
                      }
                    }
                  }
                });
              }
              closure_166(self);
              closure_131_0 = self;
              const _Object = Object;
              let merged = Object.assign((type, originalException) => {
                let tags = closure_0;
                if (closure_0.isEnabled()) {
                  if (!tags.isPaused()) {
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
                      if (tags.checkAndHandleExpiredSession()) {
                        if ("feedback" === type.type) {
                          tags.flush();
                          type.contexts.feedback.replay_id = tags.getSessionId();
                          tags.triggerUserActivity();
                          tags.addUpdate(() => {
                            const timestamp = type.timestamp;
                            let flag = !timestamp;
                            if (timestamp) {
                              let data = { type: Custom.Custom, timestamp: 1000 * type.timestamp, data: null };
                              data = { tag: "breadcrumb", payload: null };
                              data = { timestamp: type.timestamp, type: "default", category: "sentry.feedback", data: null };
                              const obj1 = { feedbackId: type.event_id };
                              data.data = obj1;
                              data.payload = data;
                              data.data = data;
                              data.throttledAddEvent(data);
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
                            if (!tags.getOptions()._experiments.captureExceptions) {
                              if (closure_2_130) {
                                logger.log("Ignoring error from rrweb internals", type);
                              }
                              return null;
                            }
                          }
                          let tmp20 = "buffer" === tags.recordingMode;
                          if (tmp20) {
                            tmp20 = type.message !== closure_2_11;
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
                            const errorSampleRate = tags.getOptions().errorSampleRate;
                            let tmp22 = undefined !== errorSampleRate;
                            if (tmp22) {
                              const _Math = Math;
                              tmp22 = Math.random() < errorSampleRate;
                            }
                            tmp20 = tmp22;
                          }
                          let tmp24 = tmp20;
                          if (!tmp20) {
                            tmp24 = "session" === tags.recordingMode;
                          }
                          if (tmp24) {
                            tags = {};
                            const merged = Object.assign(type.tags);
                            tags.replayId = tags.getSessionId();
                            type.tags = tags;
                          }
                          if (tmp20) {
                            if ("buffer" === tags.recordingMode) {
                              const session = tags.session;
                              let sampled;
                              if (session != null) {
                                sampled = session.sampled;
                              }
                              if ("buffer" === sampled) {
                                const session2 = tags.session;
                                session2.dirty = true;
                                if (tags.getOptions().stickySession) {
                                  closure_2_141(session2);
                                }
                              }
                            }
                          }
                          return type;
                        }
                      } else {
                        const currentScope = closure_2_0(dependencyMap[8]).getCurrentScope();
                        if (currentScope.getPropagationContext().dsc) {
                          delete tmp5[tmp4];
                        }
                        let tmp6Result = closure_2_0(dependencyMap[8]);
                        const activeSpan = tmp6Result.getActiveSpan();
                        if (activeSpan) {
                          tmp6Result = closure_2_0(dependencyMap[8]);
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
              tmp(dependencyMap[8]).addEventProcessor(merged);
              if (client) {
                closure_132_0 = self;
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
                        let data = { category: "replay.hydrate-error", data: null };
                        data = { url: closure_2_0(dependencyMap[8]).getLocationHref() };
                        data.data = data;
                        const obj1 = { timestamp: null, type: "default" };
                        const _Date = Date;
                        obj1.timestamp = Date.now() / 1000;
                        const merged = Object.assign(data);
                        if ("sentry.transaction" !== obj1.category) {
                          const items = ["ui.click", "ui.input"];
                          if (items.includes(obj1.category)) {
                            data.triggerUserActivity();
                          } else {
                            const result = data.checkAndHandleExpiredSession();
                          }
                          data.addUpdate(() => {
                            data = { type: Custom.Custom, timestamp: null, data: null };
                            let num = _null.timestamp;
                            if (!num) {
                              num = 0;
                            }
                            data.timestamp = 1000 * num;
                            data = { tag: "breadcrumb", payload: null };
                            const normalizer = f108031(map[8]);
                            data.payload = normalizer.normalize(_null, 10, 1000);
                            data.data = data;
                            data.throttledAddEvent(data);
                            return "console" === _null.category;
                          });
                        }
                        const obj4 = closure_2_0(dependencyMap[8]);
                      }
                    }
                  }
                  tmp = data.isEnabled() && !type.type;
                });
                closure_133_0 = self;
                client.on("afterSendEvent", (type, statusCode) => {
                  if (closure_0.isEnabled()) {
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
                          const context = closure_0.getContext();
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
                          const context1 = closure_0.getContext();
                          let event_id = type.event_id;
                          if (event_id) {
                            event_id = context1.errorIds.size < 100;
                          }
                          if (event_id) {
                            const errorIds = context1.errorIds;
                            errorIds.add(type.event_id);
                          }
                          if ("buffer" === closure_0.recordingMode) {
                            if (type.tags) {
                              if (type.tags.replayId) {
                                const beforeErrorSampling = closure_0.getOptions().beforeErrorSampling;
                                if (typeof beforeErrorSampling !== "function") {
                                  const timerId = closure_2_0(dependencyMap[9]).setTimeout(closure_2_2(function*() {
                                    closure_1 = tmp3;
                                    yield obj.sendBufferedReplayOrFlush();
                                    if (1 === tmp7) {
                                      c3 = 0;
                                      closure_128_0 = closure_2;
                                      closure_129_0.handleException(closure_128_0);
                                      c5 = 3;
                                    } else if (arg0 === 1) {
                                      c5 = 3;
                                      throw value;
                                    } else if (arg0 !== 2) {
                                      c3 = 0;
                                    }
                                    return value;
                                  }));
                                  const obj2 = closure_2_0(dependencyMap[9]);
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
                  const sessionId = closure_0.getSessionId();
                  let isEnabledResult = sessionId;
                  if (sessionId) {
                    isEnabledResult = closure_0.isEnabled();
                  }
                  if (isEnabledResult) {
                    isEnabledResult = "session" === closure_0.recordingMode;
                  }
                  if (isEnabledResult) {
                    isEnabledResult = closure_0.checkAndHandleExpiredSession();
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
                closure_0 = closure_2((arg0, arg1) => {
                  let sessionId = arg0;
                  let includeReplay = arg1;
                  c3 = 0;
                  c4 = 0;
                  return (function*(arg0, value) {
                    if (c4 === 2) {
                      c4 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp4 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        let obj = { value, done: true };
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c4 = 2;
                        if (0 === c3) {
                          if (arg0 === 1) {
                            c4 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c4 = 3;
                            obj = { value, done: true };
                            return obj;
                          } else {
                            closure_2 = tmp2;
                            closure_130_0 = sessionId;
                            closure_130_1 = undefined;
                            sessionId = sessionId.getSessionId();
                            closure_130_1 = sessionId;
                            includeReplay = undefined;
                            if (includeReplay != null) {
                              includeReplay = includeReplay.includeReplay;
                            }
                            if (includeReplay) {
                              includeReplay = obj5.isEnabled();
                            }
                            if (includeReplay) {
                              includeReplay = sessionId;
                            }
                            if (includeReplay) {
                              const contexts = tmp16.contexts;
                              let feedback;
                              if (contexts != null) {
                                feedback = contexts.feedback;
                              }
                              includeReplay = feedback;
                            }
                            if (includeReplay) {
                              if ("api" === tmp16.contexts.feedback.source) {
                                c3 = 1;
                                c4 = 1;
                                const obj1 = { value: obj5.sendBufferedReplayOrFlush(), done: false };
                                return obj1;
                              }
                            }
                            c4 = 3;
                            return { value: "HermesInternal", done: null };
                          }
                        } else if (arg0 === 1) {
                          c4 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c4 = 3;
                          obj = { value, done: true };
                          return obj;
                        }
                        closure_130_0.contexts.feedback.replay_id = closure_130_1;
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
                client.on("openFeedbackWidget", closure_2(function*() {
                  if (c0 === 2) {
                    c0 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      let obj = { value, done: true };
                      return obj;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      c0 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          c1 = 1;
                          c0 = 1;
                          const obj1 = { value: closure_0.sendBufferedReplayOrFlush(), done: false };
                          return obj1;
                        }
                      } else if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        c0 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp6) {
                      c0 = tmp;
                      throw tmp6;
                    }
                  }
                }));
              }
              const tmpResult1 = tmp(dependencyMap[8]);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            let obj = closure_0(dependencyMap[8]);
          })(self);
          self._hasInitializedCoreListeners = true;
        }
        self._performanceCleanupCallback = (function setupPerformanceObserver(self) {
          dependencyMap = function addPerformanceEntry(arg0) {
            let performanceEntries = closure_0.performanceEntries;
            if (!performanceEntries.includes(arg0)) {
              performanceEntries = closure_0.performanceEntries;
              performanceEntries.push(arg0);
            }
          };
          function onEntries(arg0) {
            const entries = arg0.entries;
            const item = entries.forEach(closure_1);
          }
          const items = [];
          const items1 = ["navigation", "paint", "resource"];
          let item = items1.forEach((item) => {
            items.push(closure_2_0(dependencyMap[9]).addPerformanceInstrumentationHandler(item, onEntries));
          });
          closure_0 = closure_125;
          dependencyMap = self;
          const result = closure_0(dependencyMap[9]).addLcpInstrumentationHandler((metric) => {
            const prop = _self.replayPerformanceEntries;
            prop.push(closure_0(metric.metric));
          });
          const obj = closure_0(dependencyMap[9]);
          closure_0 = closure_127;
          dependencyMap = self;
          const result1 = closure_0(dependencyMap[9]).addClsInstrumentationHandler((metric) => {
            const prop = _self.replayPerformanceEntries;
            prop.push(closure_0(metric.metric));
          });
          const obj2 = closure_0(dependencyMap[9]);
          closure_0 = closure_128;
          dependencyMap = self;
          items.push(result, result1, closure_0(dependencyMap[9]).addInpInstrumentationHandler((metric) => {
            const prop = _self.replayPerformanceEntries;
            prop.push(closure_0(metric.metric));
          }));
          return () => {
            const item = items.forEach((fn) => fn());
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
        const _document = closure_0(dependencyMap[8]).GLOBAL_OBJ.document;
        const removed = _document.removeEventListener("visibilitychange", self._handleVisibilityChange);
        const GLOBAL_OBJ = closure_0(dependencyMap[8]).GLOBAL_OBJ;
        const removed1 = GLOBAL_OBJ.removeEventListener("blur", self._handleWindowBlur);
        const GLOBAL_OBJ2 = closure_0(dependencyMap[8]).GLOBAL_OBJ;
        const removed2 = GLOBAL_OBJ2.removeEventListener("focus", self._handleWindowFocus);
        const GLOBAL_OBJ3 = closure_0(dependencyMap[8]).GLOBAL_OBJ;
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
        const obj = { maxReplayDuration: self._options.maxReplayDuration, sessionIdleExpire: self.timeouts.sessionIdleExpire };
        if (!closure_1_144(self.session, obj)) {
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
        } else if (closure_1_130) {
          closure_1_133.log("Document has become active, but session has expired");
        }
      }
    }
  };
  items[35] = {
    key: "_updateUserActivity",
    value: function _updateUserActivity(arg0) {
      let timestamp = arg0;
      if (arg0 === undefined) {
        const _Date = Date;
        timestamp = Date.now();
      }
      this._lastActivity = timestamp;
    }
  };
  items[36] = {
    key: "_updateSessionActivity",
    value: function _updateSessionActivity(arg0) {
      let timestamp = arg0;
      if (arg0 === undefined) {
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
      const timestamp = arg0;
      this.addUpdate(() => {
        const obj = { type: Custom.Custom, timestamp: null, data: null };
        let num = timestamp.timestamp;
        if (!num) {
          num = 0;
        }
        obj.timestamp = num;
        obj.data = { tag: "breadcrumb", payload: timestamp };
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
        found1 = combined.filter((start) => start.start >= self);
      }
      return Promise.all(found1.map((op) => {
        const start = op.start;
        data = { type: Custom.Custom, timestamp: start, data: null };
        data = { tag: "performanceSpan", payload: { op: op.type, description: op.name, startTimestamp: start, endTimestamp: op.end, data: op.data } };
        data.data = data;
        let throttledAddEventResult = closure_0.throttledAddEvent(data);
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
  const entry4 = { key: "_runFlush", value: null };
  let dependencyMap = closure_2(function() {
    let self = this;
    c6 = 0;
    c7 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = self;
              closure_2 = tmp3;
              closure_129_8 = self;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              closure_129_4 = undefined;
              closure_129_5 = undefined;
              let client;
              closure_129_7 = undefined;
              const sessionId = self.getSessionId();
              closure_129_1 = sessionId;
              if (self.session) {
                if (self.eventBuffer) {
                  if (sessionId) {
                    c6 = 1;
                    c7 = 1;
                    const obj1 = { value: self._addPerformanceEntries(), done: false };
                    return obj1;
                  }
                }
              }
              if (closure_1_130) {
                logger.error("No session or eventBuffer found to flush.");
              }
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj2 = { value, done: true };
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
                const obj3 = {
                  value: (function addMemoryEntry(arg0) {
                              self = this;
                              const apply = closure_1_167.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(closure_3),
                  done: false
                };
                return obj3;
              }
            }
          } else if (2 === tmp8) {
            c4 = 0;
            closure_129_0 = closure_5;
            closure_3.handleException(closure_129_0);
            closure_3.stop({ reason: "sendReplay" });
            let obj5 = self(tmp5[8]);
            client = obj5.getClient();
            if (client) {
              let str2 = "send_error";
              if (closure_129_0 instanceof closure_1_173) {
                str2 = "ratelimit_backoff";
              }
              closure_129_7 = str2;
              client.recordDroppedEvent(closure_129_7, "replay");
            }
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else if (closure_3.eventBuffer) {
                if (closure_129_1 === closure_3.getSessionId()) {
                  c4 = 1;
                  const result = closure_3._updateInitialTimestampFromEventBuffer();
                  const _Date = Date;
                  closure_129_2 = Date.now();
                  if (closure_129_2 - closure_3._context.initialTimestamp > closure_3._options.maxReplayDuration + 30000) {
                    const _Error = Error;
                    const error = new Error("Session is too long, not sending replay");
                    throw error;
                  } else {
                    closure_129_3 = closure_3._popEventContext();
                    const session = closure_3.session;
                    session.segmentId = +session.segmentId + 1;
                    closure_129_4 = tmp14;
                    closure_3._maybeSaveSession();
                    const eventBuffer = closure_3.eventBuffer;
                    c6 = 4;
                    c7 = 1;
                    obj5 = { value: eventBuffer.finish(), done: false };
                    return obj5;
                  }
                }
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c7 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_129_5 = value;
                const obj7 = {
                  replayId: closure_129_1,
                  recordingData: closure_129_5,
                  segmentId: closure_129_4,
                  eventContext: closure_129_3,
                  session: closure_3.session,
                  timestamp: closure_129_2,
                  onError(arg0) {
                              return closure_1_8.handleException(arg0);
                            }
                };
                c6 = 5;
                c7 = 1;
                const obj8 = { value: closure_1_174(obj7), done: false };
                return obj8;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c7 = 3;
            obj = { value, done: true };
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
  entry4.value = function _runFlush() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[42] = entry4;
  const entry5 = { key: "_flush", value: null };
  closure_0 = closure_2(function() {
    const self = this;
    closure_1 = arg0;
    c7 = 0;
    c8 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_4 = self;
              closure_3 = tmp4;
              closure_2 = self;
              closure_130_0 = undefined;
              let obj1 = closure_1;
              if (closure_1 === undefined) {
                obj1 = {};
              }
              let flag = obj1.force;
              if (flag === undefined) {
                flag = false;
              }
              closure_130_0 = flag;
              let started;
              closure_130_2 = undefined;
              closure_130_3 = undefined;
              closure_130_4 = undefined;
              let eventBuffer;
              let _flushLock;
              c7 = 1;
              c8 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                if (closure_4._isEnabled) {
                  if (closure_4.checkAndHandleExpiredSession()) {
                    if (closure_4.session) {
                      started = closure_4.session.started;
                      const _Date = Date;
                      closure_130_2 = Date.now() - started;
                      const _debouncedFlush = closure_4._debouncedFlush;
                      _debouncedFlush.cancel();
                      closure_130_3 = closure_130_2 < closure_4._options.minReplayDuration;
                      closure_130_4 = closure_130_2 > closure_4._options.maxReplayDuration + 5000;
                      if (!closure_130_3) {
                        if (!closure_130_4) {
                          eventBuffer = closure_4.eventBuffer;
                          let tmp50 = eventBuffer;
                          if (eventBuffer) {
                            tmp50 = 0 === closure_4.session.segmentId;
                          }
                          if (tmp50) {
                            tmp50 = !eventBuffer.hasCheckout;
                          }
                          if (tmp50) {
                            tmp50 = closure_1_130;
                          }
                          if (tmp50) {
                            logger.log("Flushing initial segment without checkout.");
                          }
                          _flushLock = closure_4._flushLock;
                          if (!closure_4._flushLock) {
                            closure_4._flushLock = closure_4._runFlush();
                          }
                          c5 = 2;
                          c7 = 4;
                          c8 = 1;
                          const obj3 = { value: closure_4._flushLock, done: false };
                          return obj3;
                        }
                      }
                      if (closure_1_130) {
                        const _Math = Math;
                        const rounded = Math.floor(closure_130_2 / 1000);
                        let str = "long";
                        if (closure_130_3) {
                          str = "short";
                        }
                        const _HermesInternal = HermesInternal;
                        logger.log("Session duration (" + rounded + "s) is too " + str + ", not sending replay.");
                      }
                      if (closure_130_3) {
                        closure_4._debouncedFlush();
                      }
                      c8 = 3;
                      const obj4 = { value: undefined, done: true };
                      return obj4;
                    }
                  } else if (closure_1_130) {
                    logger.error("Attempting to finish replay event after session expired.");
                  }
                }
                c8 = 3;
              }
            } else if (2 !== tmp8) {
              if (3 === tmp8) {
                c5 = 1;
                closure_130_7 = closure_6;
                closure_4.handleException(closure_130_7);
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_4._flushLock = undefined;
                if (_flushLock) {
                  closure_4._debouncedFlush();
                }
                c8 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c5 = 1;
              }
              c5 = 0;
              closure_4._flushLock = undefined;
              if (_flushLock) {
                closure_4._debouncedFlush();
              }
            }
            c5 = 0;
            closure_4._flushLock = undefined;
            if (_flushLock) {
              closure_4._debouncedFlush();
            }
            throw closure_6;
          }
        } catch (tmp77) {
          closure_6 = tmp77;
          if (tmp5 === c5) {
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
  entry5.value = function _flush() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[43] = entry5;
  items[44] = {
    key: "_maybeSaveSession",
    value: function _maybeSaveSession() {
      const self = this;
      if (tmp) {
        closure_1_141(self.session);
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
        if (arr.some((target) => {
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
          })(target.target);
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
        let obj = { category: "replay.mutations", data: null };
        obj = { count: length, limit: tmp2 };
        obj.data = obj;
        obj = { timestamp: null, type: "default" };
        const _Date = Date;
        obj.timestamp = Date.now() / 1000;
        const merged = Object.assign(obj);
        const result = self._createCustomBreadcrumb(obj);
      }
      let flag = !tmp2;
      if (tmp2) {
        const obj1 = { reason: "mutationLimit", forceFlush: "session" === self.recordingMode };
        self.stop(obj1);
        flag = false;
      }
      return flag;
    }
  };
  return closure_8(ReplayContainer, items);
}

function f21197() {
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
      tmp = closure_2_7(this, Replay);
      this.name = "Replay";
      obj = { maskTextSelector: null, unmaskTextSelector: null, blockSelector: null, unblockSelector: null, ignoreSelector: null };
      items = [...[".sentry-mask", "[data-sentry-mask]"]];
      obj.maskTextSelector = items.join(",");
      items1 = [...[]];
      obj.unmaskTextSelector = items1.join(",");
      items2 = [...[".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]];
      obj.blockSelector = items2.join(",");
      items3 = [...[]];
      obj.unblockSelector = items3.join(",");
      items4 = [...[".sentry-ignore", "[data-sentry-ignore]", "input[type=\"file\"]"]];
      obj.ignoreSelector = items4.join(",");
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
      obj2 = { flushMinDelay: num, flushMaxDelay: num2, minReplayDuration: Math.min(num3, 50000), maxReplayDuration: Math.min(num4, closure_2_15), stickySession: flag, useCompression: flag2, workerUrl, blockAllMedia: flag5, maskAllInputs: flag4, maskAllText: flag3, mutationBreadcrumbLimit: num5, mutationLimit: num6, slowClickTimeout: num7, slowClickIgnoreSelectors: prop, networkDetailAllowUrls: prop1, networkDetailDenyUrls: prop2, networkCaptureBodies: flag6, networkRequestHeaders: null, networkResponseHeaders: null, beforeAddRecordingEvent, beforeErrorSampling, onError, attachRawBodyFromRequest, _experiments };
      items5 = [...closure_2_179, ...prop3.map((item) => item.toLowerCase())];
      obj2.networkRequestHeaders = items5;
      items6 = [...closure_2_179, ...prop4.map((item) => item.toLowerCase())];
      obj2.networkResponseHeaders = items6;
      this._initialOptions = obj2;
      if (!this._initialOptions.blockAllMedia) {
        if (self._isInitialized) {
          tmp9 = closure_2_0;
          tmp10 = closure_2_1;
          obj5 = closure_2_0(closure_2_1[8]);
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
          tmp4 = closure_2_178;
          _HermesInternal = HermesInternal;
          str = "";
          combined = "" + self._recordingOptions.blockSelector + "," + closure_2_178;
        } else {
          combined = closure_2_178;
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
  let items = [
    {
      key: "_isInitialized",
      get() {
        return closure_181;
      },
      set(arg0) {
        closure_181 = arg0;
      }
    },
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
                          tmp3 = closure_2_180;
                          tmp[closure_2_180] = arg1.body;
                        }
                        return tmp;
                      }
                    }
                    SentryRequest.prototype = tmp.prototype;
                    Request(closure_1[8]).GLOBAL_OBJ.Request = SentryRequest;
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
  const entry = {
    key: "start",
    value: function start() {
      if (this._replay) {
        const _replay = this._replay;
        _replay.start();
      }
    }
  };
  items[2] = entry;
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
        const obj = { forceFlush: "session" === self._replay.recordingMode };
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
      self._replay = new closure_1_177(obj);
      const tmp9 = new closure_1_177(obj);
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
  const client = closure_1_0(closure_1_1[8]).getClient();
  let integrationByName;
  if (client != null) {
    integrationByName = client.getIntegrationByName("Replay");
  }
  return integrationByName;
}

function f21199(arg0) {
  return new closure_1_183(arg0);
}

function saveWebGLVar(obj, arg1, arg2) {
  if (obj) {
    if (typeof closure_1_26 === "function") {
      closure_0 = obj;
      const dependencyMap = arg1;
      const items = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"];
      const found = items.filter((item) => typeof dependencyMap[item] === "function");
      const _Boolean = Boolean;
      const name = obj.constructor.name;
      let value = closure_1_22.get(arg2);
      if (!value) {
        const _Map = Map;
        const map = new Map();
        const result = closure_1_22.set(arg2, map);
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
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}

function serializeArgs(arg0, arg1, arg2) {
}

function isInstanceOfWebGLObject(arg0, arg1) {
}

function f21223() {
  class CanvasManager {
    constructor(arg0) {
      self = this;
      self = this;
      tmp = closure_2_3(this, CanvasManager);
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
      f108059 = recordCanvas;
      errorHandler = arg0.errorHandler;
      arg0.sampling = str;
      ({ mutationCb: self.mutationCb, mirror: self.mirror } = arg0);
      self.options = arg0;
      if (errorHandler) {
        closure_2_18 = errorHandler;
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
        tmp7 = closure_2_20;
        if (typeof closure_2_20 === "function") {
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
          f108059 = fn;
          tmp8 = closure_2_18;
          if (closure_2_18) {
            fn = () => {
              const items = [...arguments];
              try {
                const items1 = [];
                HermesBuiltin.arraySpread(items, 0);
                return HermesBuiltin.apply(items1, undefined);
              } catch (tmp7) {
                if (closure_2_18) {
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
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      return;
    }
  }
  const entry = {
    key: "reset",
    value: function reset() {
      const self = this;
      const pendingCanvasMutations = this.pendingCanvasMutations;
      pendingCanvasMutations.clear();
      const item = this.restoreHandlers.forEach((fn) => {
        try {
          fn();
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
  };
  let items = [
    entry,
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
        ({ blockClass: closure_3, blockSelector: closure_4, unblockSelector: closure_5, recordCanvas: CanvasManager } = options);
        const windowsSet = self.windowsSet;
        if (!windowsSet.has(arg0)) {
          if (options.enableManualSnapshot) {
            const windowsSet3 = self.windowsSet;
            windowsSet3.add(arg0);
            const windows = self.windows;
            const _WeakRef2 = WeakRef;
            const weakRef = new WeakRef(arg0);
            windows.push(weakRef);
          } else if (typeof closure_20 === "function") {
            let fn = () => {
              let tmp2 = CanvasManager;
              if (CanvasManager) {
                tmp2 = "all" === str;
              }
              if (tmp2) {
                const canvasMutationObserver = self.initCanvasMutationObserver(closure_1, closure_1_3, closure_1_4, closure_1_5);
              }
              if (CanvasManager) {
                if (typeof str === "number") {
                  closure_0 = closure_2_27(closure_1, closure_1_3, closure_1_4, closure_1_5, true);
                  self.restoreHandlers.push(() => {
                    closure_0();
                  });
                  const restoreHandlers = self.restoreHandlers;
                }
              }
            };
            closure_129_0 = fn;
            if (closure_18) {
              fn = () => {
                const items = [...arguments];
                try {
                  const items1 = [];
                  HermesBuiltin.arraySpread(items, 0);
                  return HermesBuiltin.apply(items1, undefined);
                } catch (tmp7) {
                  if (closure_2_18) {
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
          } else {
            throw new TypeError("Trying to call a non-function");
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
          closure_1_16((arg0) => self.takeSnapshot(arg0, true, closure_0));
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
            obj = { id, type: closure_2_19["2D"], commands: null };
            obj = { property: "clearRect", args: null };
            const items = [0, 0, width, height];
            obj.args = items;
            const items1 = [obj, ];
            const obj1 = { property: "drawImage", args: null };
            const obj2 = { rr_type: "ImageBitmap", args: null };
            const obj3 = { rr_type: "Blob", data: null, type: null };
            const obj4 = { rr_type: "ArrayBuffer", base64: data.base64 };
            const items2 = [obj4];
            obj3.data = items2;
            obj3.type = data.type;
            const items3 = [obj3];
            obj2.args = items3;
            const items4 = [obj2, 0, 0, width, height];
            obj1.args = items4;
            items1[1] = obj1;
            obj.commands = items1;
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
            closure_1 = closure_2_16(rafCallback);
          }
          closure_1 = closure_16(rafCallback);
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
      value: function initCanvasMutationObserver(WebGLRenderingContext, arg1, arg2, arg3) {
        closure_27(WebGLRenderingContext, arg1, arg2, arg3, false);
        const processMutation = this.processMutation;
        closure_1 = (function initCanvas2DMutationObserver(arg0, CanvasRenderingContext2D, arg2, arg3, arg4) {
          closure_0 = arg0;
          closure_2 = arg2;
          closure_3 = arg3;
          closure_4 = arg4;
          closure_5 = [];
          const ownPropertyNames = Object.getOwnPropertyNames(CanvasRenderingContext2D.CanvasRenderingContext2D.prototype);
          function _loop(iter) {
            let property = iter;
            try {
              if (typeof CanvasRenderingContext2D.CanvasRenderingContext2D.prototype[iter] !== "function") {
                return 1;
              } else {
                closure_5.push(closure_1_12(tmp3.CanvasRenderingContext2D.prototype, iter, (arg0) => {
                  closure_0 = arg0;
                  return function() {
                    const self = this;
                    items = [...arguments];
                    if (!closure_4_13(this.canvas, closure_2, closure_3, closure_4, true)) {
                      closure_4_17(() => { ... }, 0);
                    }
                    return property.apply(this, items);
                  };
                }));
              }
            } catch (err) {
              let obj = {
                set(arg0) {
                    const obj = { type: v2D["2D"], property, args: null, setter: true };
                    items = [arg0];
                    obj.args = items;
                    property(this.canvas, obj);
                  }
              };
              closure_5.push(closure_1_11(CanvasRenderingContext2D.CanvasRenderingContext2D.prototype, tmp, obj));
            }
          }
          const iter = ownPropertyNames[Symbol.iterator]();
          while (iter !== undefined) {
            let _loopResult = _loop(iter.next());
            continue;
          }
          return () => {
            const item = closure_5.forEach((fn) => fn());
          };
        })(processMutation.bind(this), WebGLRenderingContext, arg1, arg2, arg3);
        const processMutation2 = this.processMutation;
        const bindResult = processMutation2.bind(this);
        let items = [];
        const items1 = [...closure_28(WebGLRenderingContext.WebGLRenderingContext.prototype, closure_19.WebGL, bindResult, arg1, arg2, arg3, 0, WebGLRenderingContext)];
        items.push.apply(items1);
        if (undefined !== WebGLRenderingContext.WebGL2RenderingContext) {
          const push = items.push;
          const items2 = [];
          HermesBuiltin.arraySpread(closure_28(WebGLRenderingContext.WebGL2RenderingContext.prototype, v2D.WebGL2, bindResult, arg1, arg2, arg3, 0, WebGLRenderingContext), 0);
          HermesBuiltin.apply(items2, items);
        }
        const f120387 = () => {
  
        };
        this.restoreHandlers.push(() => {
          items();
          closure_1();
          if (typeof f120387 === "function") {
            const item = closure_130_0.forEach((fn) => fn());
          } else {
            throw new TypeError("Trying to call a non-function");
          }
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
          const item = elements.forEach((item) => {
            if (!closure_2_13(item, blockClass, blockSelector, unblockSelector, true)) {
              items.push(item);
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
      value: function takeSnapshot(lastSnapshotTime, arg1, arg2) {
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
          const item = canvasElements.forEach((width) => {
            closure_0 = width;
            const mirror = self.mirror;
            const id = mirror.getId(width);
            const mirror2 = self.mirror;
            if (mirror2.hasNode(width)) {
              if (width.width) {
                if (width.height) {
                  let snapshotInProgressMap = self.snapshotInProgressMap;
                  if (!snapshotInProgressMap.get(id)) {
                    const snapshotInProgressMap2 = self.snapshotInProgressMap;
                    const result = snapshotInProgressMap2.set(id, true);
                    if (!id) {
                      let items = ["webgl", "webgl2"];
                      if (items.includes(width.__context)) {
                        const context = width.getContext(width.__context);
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
                    const imageBitmap = globalThis.createImageBitmap(width);
                    imageBitmap.then((bitmap) => {
                      const worker = self.worker;
                      if (worker != null) {
                        const size = { id, bitmap, width: null, height: null, dataURLOptions: null, maxCanvasSize: null };
                        ({ width: obj.width, height: obj.height } = closure_0);
                        size.dataURLOptions = dataURLOptions;
                        size.maxCanvasSize = maxCanvasSize;
                        const items = [bitmap];
                        worker.postMessage(size, items);
                      }
                    }).catch((error) => {
                      let fn = error;
                      if (typeof closure_2_20 === "function") {
                        fn = () => {
                          const snapshotInProgressMap = self.snapshotInProgressMap;
                          snapshotInProgressMap.delete(id);
                          throw fn;
                        };
                        if (closure_2_18) {
                          fn = () => {
                            const items = [...arguments];
                            try {
                              const items1 = [];
                              HermesBuiltin.arraySpread(items, 0);
                              return HermesBuiltin.apply(items1, undefined);
                            } catch (tmp7) {
                              if (closure_2_18) {
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
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                    const nextPromise = imageBitmap.then((bitmap) => {
                      const worker = self.worker;
                      if (worker != null) {
                        const size = { id, bitmap, width: null, height: null, dataURLOptions: null, maxCanvasSize: null };
                        ({ width: obj.width, height: obj.height } = closure_0);
                        size.dataURLOptions = dataURLOptions;
                        size.maxCanvasSize = maxCanvasSize;
                        const items = [bitmap];
                        worker.postMessage(size, items);
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
        closure_1_16(() => self.flushPendingCanvasMutations());
      }
    },
    {
      key: "startRAFTimestamping",
      value: function startRAFTimestamping() {
        const self = this;
        function setLatestRAFTimestamp(latestId) {
          self.rafStamps.latestId = latestId;
          closure_2_16(setLatestRAFTimestamp);
        }
        closure_16(setLatestRAFTimestamp);
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
        closure_1_16(() => self.flushPendingCanvasMutations());
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
                const obj = { id, type: value[0].type, commands: value.map((item) => closure_1_2(item, closure_1_5)) };
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

function f21224(arg0) {
  return 2 * arg0;
}

function createMirror$2() {
  return new closure_1_8();
}

function f21226() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = undefined;
  closure_1 = undefined;
  obj = undefined;
  [tmp3, tmp4] = closure_1(obj.maxCanvasSize || [], 2);
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
  obj.maxCanvasSize = items;
  new Promise((arg0) => {
    closure_1 = arg0;
    return arg0;
  });
  obj = {
    name: "ReplayCanvas",
    getOptions() {
      const enableManualSnapshot = obj.enableManualSnapshot;
      const maxCanvasSize = obj.maxCanvasSize;
      obj = {
        enableManualSnapshot,
        recordCanvas: true,
        getCanvasManager(arg0) {
          obj = {};
          const merged = Object.assign(arg0);
          obj.enableManualSnapshot = enableManualSnapshot;
          obj.maxCanvasSize = maxCanvasSize;
          obj.errorHandler = function errorHandler(obj) {
            try {
              if (typeof obj === "object") {
                obj.__rrweb__ = true;
              }
            } catch (err) {
            }
          };
          const tmp2 = new closure_3_29(obj);
          closure_0 = tmp2;
          maxCanvasSize(tmp2);
          return tmp2;
        }
      };
      let merged = Object.assign(medium[obj.quality] || medium.medium);
      return obj;
    },
    snapshot(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      return closure_0(function*() {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = tmp4;
                obj = closure_0;
                if (!closure_0) {
                  c1 = 1;
                  c2 = 1;
                  const obj1 = { value, done: false };
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else {
              obj = value;
              if (arg0 === 2) {
                c2 = 3;
                const obj2 = { value, done: true };
                return obj2;
              }
            }
            obj.snapshot(closure_128_0, closure_128_1);
            c2 = 3;
            return { value: "HermesInternal", done: null };
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

function f58073(str) {
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
  const buf8 = new closure_1_0(closure_1_1[0]).Buf8(num3);
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

function f58074(subarray) {
  if (subarray.length < 65534) {
    if (!subarray.subarray) {
      if (!subarray.subarray) {
        return str2;
      }
    }
    const _String2 = String;
    str2 = fromCharCode.apply(null, closure_1_0(closure_1_1[0]).shrinkBuf(subarray, length));
    const obj = closure_1_0(closure_1_1[0]);
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

function f58075(str) {
  const buf8 = new closure_1_0(closure_1_1[0]).Buf8(str.length);
  for (let num = 0; num < length; num = num + 1) {
    buf8[num] = str.charCodeAt(num);
  }
  return buf8;
}

function f58076(arg0, arg1) {
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
        let tmp25 = closure_1_4[tmp3];
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
    str2 = fromCharCode.apply(null, closure_1_0(closure_1_1[0]).shrinkBuf(array, num3));
    const obj = closure_1_0(closure_1_1[0]);
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

function f58077(arg0, arg1) {
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
      if (tmp2 + closure_1_4[arg0[tmp2]] > length) {
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
  let DOMException = arg0;
  let _Headers = arg1;
  return new Promise((arg0, fn) => {
    DOMException = arg0;
    _Headers = fn;
    function abortXhr() {
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
      let obj = { statusText: xMLHttpRequest.statusText, headers: null };
      Object.create(closure_2_9.prototype);
      obj = undefined;
      obj.map = {};
      if (undefined instanceof closure_2_9) {
        const item = undefined.forEach(function(item, index) {
          this.append(index, item);
        }, obj);
      } else {
        const _Array = Array;
        if (Array.isArray(undefined)) {
          const item1 = undefined.forEach(function(item) {
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
      const mapped = parts.map((arr) => {
        let substr = arr;
        if (0 === arr.indexOf("\n")) {
          substr = arr.substr(1, arr.length);
        }
        return substr;
      });
      const item2 = mapped.forEach((item) => {
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
      obj.headers = obj;
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
        obj = Object.create(closure_4_14.prototype);
        closure_4_14(closure_2, obj);
        closure_0(obj);
      }, 0);
      const str2 = xMLHttpRequest.getAllResponseHeaders() || "".replace(/\r?\n[\t ]+/g, " ");
    };
    xMLHttpRequest.onerror = () => {
      const timerId = setTimeout(() => {
        const typeError = new TypeError("Network request failed");
        config(typeError);
      }, 0);
    };
    xMLHttpRequest.ontimeout = () => {
      const timerId = setTimeout(() => {
        const typeError = new TypeError("Network request timed out");
        config(typeError);
      }, 0);
    };
    xMLHttpRequest.onabort = () => {
      const timerId = setTimeout(() => {
        const dOMException = new DOMException.DOMException("Aborted", "AbortError");
        config(dOMException);
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
          let item = ownPropertyNames.forEach((item) => {
            let str = item;
            if (typeof item !== "string") {
              const _String = String;
              str = String(item);
            }
            if (!obj.test(str)) {
              if ("" !== str) {
                closure_5.push(str.toLowerCase());
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
            if (-1 === closure_5.indexOf(index)) {
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

function f69588(message, name) {
  const error = { message, name, stack: Error(message).stack };
}

function get() {
  return closure_1_0.name;
}

function isElement$1(nodeType) {
  return nodeType.nodeType === nodeType.ELEMENT_NODE;
}

function observe(doc) {
  let fn = closure_2_97;
  if (typeof closure_2_86 === "function") {
    if (closure_2_79) {
      fn = () => {
        items = [...arguments];
        try {
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          return HermesBuiltin.apply(items1, undefined);
        } catch (tmp7) {
          if (closure_2_79) {
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
      onMutation: closure_1_29,
      mutationCb: closure_1_37,
      mousemoveCb(positions, source) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source, positions };
          obj.data = obj;
          closure_1_103(obj);
        },
      mouseInteractionCb(arg0) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.MouseInteraction };
          const merged = Object.assign(arg0);
          obj.data = obj;
          closure_1_103(obj);
        },
      scrollCb: closure_1_38,
      viewportResizeCb(arg0) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.ViewportResize };
          const merged = Object.assign(arg0);
          obj.data = obj;
          closure_1_103(obj);
        },
      inputCb(arg0) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.Input };
          const merged = Object.assign(arg0);
          obj.data = obj;
          closure_1_103(obj);
        },
      mediaInteractionCb(arg0) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.MediaInteraction };
          const merged = Object.assign(arg0);
          obj.data = obj;
          closure_1_103(obj);
        },
      styleSheetRuleCb(arg0) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.StyleSheetRule };
          const merged = Object.assign(arg0);
          obj.data = obj;
          closure_1_103(obj);
        },
      styleDeclarationCb(arg0) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.StyleDeclaration };
          const merged = Object.assign(arg0);
          obj.data = obj;
          closure_1_103(obj);
        },
      canvasMutationCb: closure_1_39,
      fontCb(arg0) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.Font };
          const merged = Object.assign(arg0);
          obj.data = obj;
          closure_1_103(obj);
        },
      selectionCb(arg0) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.Selection };
          const merged = Object.assign(arg0);
          obj.data = obj;
          closure_1_103(obj);
        },
      customElementCb(define) {
          let obj = { type: closure_1_73.IncrementalSnapshot, data: null };
          obj = { source: closure_1_74.CustomElement };
          const merged = Object.assign(define);
          obj.data = obj;
          closure_1_103(obj);
        },
      blockClass: closure_1_3,
      ignoreClass: closure_1_6,
      ignoreSelector: closure_1_7,
      maskAllText: closure_1_8,
      maskTextClass: closure_1_9,
      unmaskTextClass: closure_1_10,
      maskTextSelector: closure_1_11,
      unmaskTextSelector: closure_1_12,
      maskInputOptions: closure_1_33,
      inlineStylesheet: closure_1_13,
      sampling: closure_1_18,
      recordDOM: closure_1_20,
      recordCanvas: closure_1_21,
      inlineImages: closure_1_25,
      userTriggeredOnInput: closure_1_23,
      collectFonts: closure_1_24,
      doc,
      maskAttributeFn: closure_1_14,
      maskInputFn: closure_1_15,
      maskTextFn: closure_1_16,
      keepIframeSrcFn: closure_1_27,
      blockSelector: closure_1_4,
      unblockSelector: closure_1_5,
      slimDOMOptions: closure_1_34,
      dataURLOptions: closure_1_19,
      mirror: closure_2_108,
      iframeManager: closure_1_41,
      stylesheetManager: closure_1_40,
      shadowDomManager: closure_1_44,
      processedNodeManager: closure_1_42,
      canvasManager: closure_1_43,
      ignoreCSSAttributes: closure_1_28,
      plugins: null
    };
    let mapped;
    if (closure_1_26 != null) {
      const found = closure_1_26.filter((observer) => observer.observer);
      if (found != null) {
        mapped = found.map((observer) => ({
          observer: observer.observer,
          options: observer.options,
          callback(payload) {
            let obj = { type: closure_2_73.Plugin, data: null };
            obj = { plugin: observer.name, payload };
            obj.data = obj;
            closure_2_103(obj);
          }
        }));
      }
    }
    if (!mapped) {
      mapped = [];
    }
    obj.plugins = mapped;
    return fn(obj, {});
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f71458(contentDocument) {
  try {
    closure_1_46.push(closure_1_47(contentDocument.contentDocument));
  } catch (tmp5) {
    const _console = console;
    console.warn(tmp5);
  }
}

function init() {
  closure_1_45();
  closure_1_46.push(closure_1_47(document));
}

function f71460() {
  closure_2_103({ type: closure_2_73.DomContentLoaded, data: {} });
  if ("DOMContentLoaded" === closure_1_22) {
    if (typeof closure_1_48 === "function") {
      closure_1_45();
      const _document = document;
      closure_1_46.push(closure_1_47(document));
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const obj = { type: closure_2_73.DomContentLoaded, data: {} };
}

function f71461() {
  closure_2_103({ type: closure_2_73.Load, data: {} });
  if ("load" === closure_1_22) {
    if (typeof closure_1_48 === "function") {
      closure_1_45();
      const _document = document;
      closure_1_46.push(closure_1_47(document));
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const obj = { type: closure_2_73.Load, data: {} };
}

function f71462() {
  const item = closure_1_46.forEach((fn) => fn());
  closure_1_42.destroy();
  closure_2_104 = undefined;
  closure_2_79 = undefined;
}

function f72323(arg0, arg1, str) {
  if (typeof str !== "string") {
    ({ length: closure_1_0.minimumSignificantDigits, length: closure_1_0.maximumSignificantDigits } = arg1);
  } else if ("+" === str) {
    closure_1_0.minimumSignificantDigits = arg1.length;
  } else if ("#" === arg1[0]) {
    closure_1_0.maximumSignificantDigits = arg1.length;
  } else {
    closure_1_0.minimumSignificantDigits = arg1.length;
    let num = 0;
    if (typeof str === "string") {
      num = str.length;
    }
    closure_1_0.maximumSignificantDigits = arg1.length + num;
  }
  return "";
}

function f72325(arg0, arg1) {
  closure_1_0(closure_1_1[1]);
  closure_1_0(closure_1_1[1]);
  switch (arg1) {
    case "sign-auto":
      let obj = { signDisplay: "auto" };
      if (!obj) {
        obj = {};
      }
      return tmp2(tmp4, obj);
    case "sign-accounting":
      obj = { currencySign: "accounting" };
    break;
    case "()":
      obj = { currencySign: "accounting" };
    break;
    case "sign-always":
      obj = { signDisplay: "always" };
    break;
    case "+!":
      obj = { signDisplay: "always" };
    break;
    case "sign-accounting-always":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "()!":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "sign-except-zero":
      obj = { signDisplay: "exceptZero" };
    break;
    case "+?":
      obj = { signDisplay: "exceptZero" };
    break;
    case "sign-accounting-except-zero":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "()?":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "sign-never":
      obj = { signDisplay: "never" };
    break;
    case "+_":
      obj = { signDisplay: "never" };
    break;
  }
}

function f72326(arg0, arg1) {
  closure_1_0(closure_1_1[1]);
  closure_1_0(closure_1_1[1]);
  switch (arg1) {
    case "sign-auto":
      let obj = { signDisplay: "auto" };
      if (!obj) {
        obj = {};
      }
      return tmp2(tmp4, obj);
    case "sign-accounting":
      obj = { currencySign: "accounting" };
    break;
    case "()":
      obj = { currencySign: "accounting" };
    break;
    case "sign-always":
      obj = { signDisplay: "always" };
    break;
    case "+!":
      obj = { signDisplay: "always" };
    break;
    case "sign-accounting-always":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "()!":
      obj = { signDisplay: "always", currencySign: "accounting" };
    break;
    case "sign-except-zero":
      obj = { signDisplay: "exceptZero" };
    break;
    case "+?":
      obj = { signDisplay: "exceptZero" };
    break;
    case "sign-accounting-except-zero":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "()?":
      obj = { signDisplay: "exceptZero", currencySign: "accounting" };
    break;
    case "sign-never":
      obj = { signDisplay: "never" };
    break;
    case "+_":
      obj = { signDisplay: "never" };
    break;
  }
}

function f72327(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg1) {
    closure_1_0.minimumIntegerDigits = arg2.length;
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

function f72328(arg0, arg1, arg2, arg3, arg4, arg5) {
  if ("*" === arg2) {
    closure_1_0.minimumFractionDigits = arg1.length;
  } else {
    if (arg3) {
      if ("#" === arg3[0]) {
        closure_1_0.maximumFractionDigits = arg3.length;
      }
    }
    if (arg4) {
      if (arg5) {
        closure_1_0.minimumFractionDigits = arg4.length;
        closure_1_0.maximumFractionDigits = arg4.length + arg5.length;
      }
    }
    ({ length: closure_1_0.minimumFractionDigits, length: closure_1_0.maximumFractionDigits } = arg1);
  }
  return "";
}

function f73332(key10009) {
  const call = hasOwnProperty.call;
  let tmp2 = typeof call === "unknown" ? hasOwnProperty(key10009) : call(closure_1_0, key10009);
  if (tmp2) {
    tmp2 = typeof closure_1_1[key10009] === "string";
  }
  if (tmp2) {
    closure_1_1[key10009] = closure_1_0[key10009](closure_1_1[key10009]);
  }
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
      let size = { x: 0, y: 0, width, height };
      obj.rect = size;
      let _Uint8Array = Uint8Array;
      let tmp4 = new.target;
      let tmp5 = new.target;
      let uint8Array = new Uint8Array(arg0[num3]);
      obj.img = uint8Array;
      let _Math = Math;
      obj.bpp = Math.ceil(result / 8);
      let _Math2 = Math;
      obj.bpl = Math.ceil(tmp3 / 8);
      let arr = frames.push(obj);
      num3 = num3 + 1;
      length = arg0.length;
    } while (num3 < length);
  }
  closure_1_6(obj, 0, true);
  return closure_1_5(obj, width, height, arg6, arg7);
}

function f78904(arg0, arg1) {
  return arg1[1].lastUsedMs - arg0[1].lastUsedMs;
}

function createListState(channelId, sortOrder, tagFilter, tagSetting) {
  return { loading: false, isInitialLoad: true, hasMore: false, failed: false, threads: [], nextOffset: 0, channelId, sortOrder, tagFilter, tagSetting };
}

function touchList(arg0, arg1) {
  closure_1_8.delete(arg0);
  const result = closure_1_8.set(arg0, arg1);
  if (closure_1_8.size > 50) {
    const obj = closure_1_8[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp11 = closure_1_3(tmp8, 2);
      [tmp12, tmp13] = tmp11;
      if (closure_1_8.size <= 50) {
        obj.return();
        break;
      } else {
        if (!tmp13.loading) {
          let deleteResult1 = closure_1_8.delete(tmp12);
        }
        continue;
      }
      break;
    }
  }
}

function _loop4() {
  let obj = closure_1[1];
  if (" " === obj[0]) {
    return 1;
  } else {
    let str = "";
    const parts = obj.trimEnd().split(/\s/);
    const mapped = parts.map((item) => {
      str = `${str}${item} `;
      return str.trim();
    });
    const reversed = mapped.reverse();
    str = reversed.find((item) => null != closure_1_2[item]);
    if (str == null) {
      str = "";
    }
    let obj1 = reversed[reversed.length - 1];
    if (null != closure_2[str]) {
      obj = { location: closure_1.index, length: str.length + 1, data: null };
      obj = { type: closure_1_0(closure_1_2[9]).ChatInputParseResultDataType.ROLE_HIGHLIGHT, color: null };
      let colorString = null;
      if ("username" === closure_1_5.roleStyle) {
        colorString = tmp3.colorString;
      }
      obj.color = colorString;
      obj.data = obj;
      str.push(obj);
    } else if (obj1.startsWith(closure_1_22)) {
      obj1 = { location: closure_1.index, length: 9, data: null };
      const obj2 = { type: closure_1_0(closure_1_2[9]).ChatInputParseResultDataType.ROLE_HIGHLIGHT, color: closure_1_1(closure_1_2[19]).unsafe_rawColors.BRAND_500 };
      obj1.data = obj2;
      str.push(obj1);
    } else if (obj1.startsWith(closure_1_23)) {
      const obj3 = { location: closure_1.index, length: 5, data: null };
      const obj4 = { type: closure_1_0(closure_1_2[9]).ChatInputParseResultDataType.ROLE_HIGHLIGHT, color: closure_1_1(closure_1_2[19]).unsafe_rawColors.BRAND_500 };
      obj3.data = obj4;
      str.push(obj3);
    }
    const str3 = obj.trimEnd();
  }
}

function InsertUnicodeExtensionAndCanonicalize(arr, arg1, arg2) {
  closure_1_4(-1 === arr.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
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
    return closure_1_13(arr);
  } else {
    const index = arr.indexOf("-x-");
    if (-1 === index) {
      let sum = arr + str;
    } else {
      const sum1 = arr.slice(0, index) + str;
      sum = sum1 + arr.slice(index);
    }
    return closure_1_13(sum);
  }
  tmp2 = arg1[Symbol.iterator]();
}

function f108640() {
  return {
    navigate(arg0, arg1) {
      const navigation = closure_1_0.navigation;
      const obj = {};
      const CommonActions = closure_2_0(closure_2_1[3]).CommonActions;
      const merged = Object.assign(CommonActions.navigate(arg0, arg1));
      obj.target = closure_1_0.state.key;
      navigation.dispatch(obj);
    },
    back() {
      const navigation = closure_1_0.navigation;
      navigation.goBack();
    }
  };
}

function f108641() {
  return { emit: closure_1_0.navigation.emit };
}

function ot(str) {
  const parts = str.split("\n");
  const mapped = parts.map(closure_1_53);
  const found = mapped.filter((item) => null !== item);
  return closure_1_38(closure_1_38({}, found[0]), found[1]);
}

function f116448(soft_deleted) {
  return !soft_deleted.soft_deleted;
}

function f116449(soft_deleted) {
  return soft_deleted.soft_deleted;
}

function f120836(baggage) {
  closure_1_8.setRequestHeader(baggage, closure_1_6[baggage]);
}

function f122239(arr) {
  return arr.every((item) => {
    const ipV6 = regex.regex.ipV6;
    return ipV6.test(item);
  });
}

function f122240(arg0, tldBlacklist) {
  const _Array = Array;
  if (tldBlacklist.tldBlacklist) {
    if (!isArray(tldBlacklist.tldBlacklist)) {
      const hasOwn2 = closure_1_2.hasOwn;
      const call3 = hasOwn2.call;
      tldBlacklist = tldBlacklist.tldBlacklist;
      !(typeof call3 === "unknown" ? hasOwn2(arg0) : call3(tldBlacklist, arg0));
    }
    const indexOf2 = closure_1_2.indexOf;
    const call4 = indexOf2.call;
    const tldBlacklist2 = tldBlacklist.tldBlacklist;
    -1 === (typeof call4 === "unknown" ? indexOf2(arg0) : call4(tldBlacklist2, arg0));
  } else if (isArray(tldBlacklist.tldWhitelist)) {
    const indexOf = closure_1_2.indexOf;
    const call2 = indexOf.call;
    const tldWhitelist2 = tldBlacklist.tldWhitelist;
    -1 !== (typeof call2 === "unknown" ? indexOf(arg0) : call2(tldWhitelist2, arg0));
  } else {
    const hasOwn = closure_1_2.hasOwn;
    const call = hasOwn.call;
    const tldWhitelist = tldBlacklist.tldWhitelist;
    return typeof call === "unknown" ? hasOwn(arg0) : call(tldWhitelist, arg0);
  }
}

function f122241(arg0, arg1, arg2) {
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
  let dnsWarnNoRecord = valid.diagnoses.valid;
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
            if (deprecatedComment2 > dnsWarnNoRecord) {
              dnsWarnNoRecord = deprecatedComment2;
              flag10 = flag2;
            }
          } else {
            let cfwsComment2 = obj7.diagnoses.cfwsComment;
            flag10 = true;
            if (cfwsComment2 > dnsWarnNoRecord) {
              dnsWarnNoRecord = cfwsComment2;
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
            if (errConsecutiveDots2 > dnsWarnNoRecord) {
              dnsWarnNoRecord = errConsecutiveDots2;
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
              if (deprecatedLocalPart2 > dnsWarnNoRecord) {
                dnsWarnNoRecord = deprecatedLocalPart2;
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
            if (deprecatedLocalPart > dnsWarnNoRecord) {
              dnsWarnNoRecord = deprecatedLocalPart;
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
            if (errExpectingATEXT4 > dnsWarnNoRecord) {
              dnsWarnNoRecord = errExpectingATEXT4;
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
            if (errCRNoLF6 > dnsWarnNoRecord) {
              dnsWarnNoRecord = errCRNoLF6;
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
                    let tmp139 = globalThis;
                    let _Error5 = Error;
                    let tmp140 = new.target;
                    let str8 = "unexpected item on context stack";
                    let tmp141 = new.target;
                    let error = new Error("unexpected item on context stack");
                    throw error;
                  } else {
                    if (0 === obj.local.length) {
                      let errNoLocalPart = obj7.diagnoses.errNoLocalPart;
                      if (errNoLocalPart > dnsWarnNoRecord) {
                        dnsWarnNoRecord = errNoLocalPart;
                      }
                    } else if (0 === num4) {
                      let errDotEnd = obj7.diagnoses.errDotEnd;
                      if (errDotEnd > dnsWarnNoRecord) {
                        dnsWarnNoRecord = errDotEnd;
                      }
                    } else if (obj.local.length > 64) {
                      let rfc5322LocalTooLong = obj7.diagnoses.rfc5322LocalTooLong;
                      if (rfc5322LocalTooLong > dnsWarnNoRecord) {
                        dnsWarnNoRecord = rfc5322LocalTooLong;
                      }
                    } else {
                      let tmp134 = localpart2 !== obj7.components.contextComment && localpart2 !== obj7.components.contextFWS;
                      if (!tmp134) {
                        let deprecatedCFWSNearAt = obj7.diagnoses.deprecatedCFWSNearAt;
                        if (deprecatedCFWSNearAt > dnsWarnNoRecord) {
                          dnsWarnNoRecord = deprecatedCFWSNearAt;
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
                        if (errATEXTAfterQS > dnsWarnNoRecord) {
                          dnsWarnNoRecord = errATEXTAfterQS;
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
                        let tmp127 = globalThis;
                        let _Error4 = Error;
                        let str7 = "more atext found where none is allowed, but unrecognized prev context: ";
                        let tmp128 = new.target;
                        let tmp129 = new.target;
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
                  if (errATEXTAfterCFWS2 > dnsWarnNoRecord) {
                    dnsWarnNoRecord = errATEXTAfterCFWS2;
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
                    if (errExpectingATEXT3 > dnsWarnNoRecord) {
                      dnsWarnNoRecord = errExpectingATEXT3;
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
            if (deprecatedFWS3 > dnsWarnNoRecord) {
              dnsWarnNoRecord = deprecatedFWS3;
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
            if (deprecatedComment > dnsWarnNoRecord) {
              dnsWarnNoRecord = deprecatedComment;
              flag8 = flag2;
            }
          } else {
            let cfwsComment = obj7.diagnoses.cfwsComment;
            flag8 = true;
            if (cfwsComment > dnsWarnNoRecord) {
              dnsWarnNoRecord = cfwsComment;
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
            if (errConsecutiveDots > dnsWarnNoRecord) {
              dnsWarnNoRecord = errConsecutiveDots;
            }
          } else if (flag3) {
            let errDomainHyphenEnd = obj7.diagnoses.errDomainHyphenEnd;
            if (errDomainHyphenEnd > dnsWarnNoRecord) {
              dnsWarnNoRecord = errDomainHyphenEnd;
            }
          } else if (63 < num4) {
            let rfc5322LabelTooLong = obj7.diagnoses.rfc5322LabelTooLong;
            if (rfc5322LabelTooLong > dnsWarnNoRecord) {
              dnsWarnNoRecord = rfc5322LabelTooLong;
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
            if (errExpectingATEXT2 > dnsWarnNoRecord) {
              dnsWarnNoRecord = errExpectingATEXT2;
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
            if (errCRNoLF5 > dnsWarnNoRecord) {
              dnsWarnNoRecord = errCRNoLF5;
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
                        if (errATEXTAfterDomainLiteral > dnsWarnNoRecord) {
                          dnsWarnNoRecord = errATEXTAfterDomainLiteral;
                        }
                      }
                    }
                  }
                  let errATEXTAfterCFWS = obj7.diagnoses.errATEXTAfterCFWS;
                  if (errATEXTAfterCFWS > dnsWarnNoRecord) {
                    dnsWarnNoRecord = errATEXTAfterCFWS;
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
                          if (errDomainHyphenStart > dnsWarnNoRecord) {
                            dnsWarnNoRecord = errDomainHyphenStart;
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
                          if (rfc5322Domain > dnsWarnNoRecord) {
                            dnsWarnNoRecord = rfc5322Domain;
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
                if (errExpectingATEXT > dnsWarnNoRecord) {
                  dnsWarnNoRecord = errExpectingATEXT;
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
            if (deprecatedFWS2 > dnsWarnNoRecord) {
              dnsWarnNoRecord = deprecatedFWS2;
              flag7 = flag2;
            }
          } else {
            let cfwsFWS4 = obj7.diagnoses.cfwsFWS;
            flag7 = true;
            if (cfwsFWS4 > dnsWarnNoRecord) {
              dnsWarnNoRecord = cfwsFWS4;
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
          if (dnsWarnNoRecord < obj7.categories.deprecated) {
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
              if (rfc5321AddressLiteral2 > dnsWarnNoRecord) {
                dnsWarnNoRecord = rfc5321AddressLiteral2;
              }
            } else {
              let str13 = text.slice(0, 5);
              if ("ipv6:" !== str13.toLowerCase()) {
                let rfc5322DomainLiteral2 = obj7.diagnoses.rfc5322DomainLiteral;
                if (rfc5322DomainLiteral2 > dnsWarnNoRecord) {
                  dnsWarnNoRecord = rfc5322DomainLiteral2;
                }
              } else {
                let str14 = text.slice(5);
                let maxIPv6Groups = obj7.maxIPv6Groups;
                let parts = str14.split(":");
                index = str14.indexOf("::");
                if (~index) {
                  if (index !== str14.lastIndexOf("::")) {
                    let rfc5322IPv62x2xColon = obj7.diagnoses.rfc5322IPv62x2xColon;
                    if (rfc5322IPv62x2xColon > dnsWarnNoRecord) {
                      dnsWarnNoRecord = rfc5322IPv62x2xColon;
                    }
                  } else {
                    let tmp85 = 0 !== index && index !== str14.length - 2;
                    let sum4 = maxIPv6Groups;
                    if (!tmp85) {
                      sum4 = maxIPv6Groups + 1;
                    }
                    if (parts.length > sum4) {
                      let rfc5322IPv6MaxGroups = obj7.diagnoses.rfc5322IPv6MaxGroups;
                      if (rfc5322IPv6MaxGroups > dnsWarnNoRecord) {
                        dnsWarnNoRecord = rfc5322IPv6MaxGroups;
                      }
                    } else if (parts.length === sum4) {
                      let deprecatedIPv6 = obj7.diagnoses.deprecatedIPv6;
                      if (deprecatedIPv6 > dnsWarnNoRecord) {
                        dnsWarnNoRecord = deprecatedIPv6;
                      }
                    }
                  }
                } else if (parts.length !== maxIPv6Groups) {
                  let rfc5322IPv6GroupCount = obj7.diagnoses.rfc5322IPv6GroupCount;
                  if (rfc5322IPv6GroupCount > dnsWarnNoRecord) {
                    dnsWarnNoRecord = rfc5322IPv6GroupCount;
                  }
                }
                if (":" === str14[0]) {
                  if (":" !== str14[1]) {
                    let rfc5322IPv6ColonStart = obj7.diagnoses.rfc5322IPv6ColonStart;
                    if (rfc5322IPv6ColonStart > dnsWarnNoRecord) {
                      dnsWarnNoRecord = rfc5322IPv6ColonStart;
                    }
                  }
                }
                if (":" === str14[str14.length - 1]) {
                  if (":" !== str14[str14.length - 2]) {
                    let rfc5322IPv6ColonEnd = obj7.diagnoses.rfc5322IPv6ColonEnd;
                    if (rfc5322IPv6ColonEnd > dnsWarnNoRecord) {
                      dnsWarnNoRecord = rfc5322IPv6ColonEnd;
                    }
                  }
                }
                let diagnoses = obj7.diagnoses;
                if (obj7.checkIpV6(parts)) {
                  let rfc5321AddressLiteral = diagnoses.rfc5321AddressLiteral;
                  if (rfc5321AddressLiteral > dnsWarnNoRecord) {
                    dnsWarnNoRecord = rfc5321AddressLiteral;
                  }
                } else {
                  let rfc5322IPv6BadCharacter = diagnoses.rfc5322IPv6BadCharacter;
                  if (rfc5322IPv6BadCharacter > dnsWarnNoRecord) {
                    dnsWarnNoRecord = rfc5322IPv6BadCharacter;
                  }
                }
              }
            }
          } else {
            let rfc5322DomainLiteral = obj7.diagnoses.rfc5322DomainLiteral;
            if (rfc5322DomainLiteral > dnsWarnNoRecord) {
              dnsWarnNoRecord = rfc5322DomainLiteral;
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
          if (rfc5322DomainLiteralOBSDText2 > dnsWarnNoRecord) {
            dnsWarnNoRecord = rfc5322DomainLiteralOBSDText2;
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
            if (errCRNoLF4 > dnsWarnNoRecord) {
              dnsWarnNoRecord = errCRNoLF4;
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
                        if (rfc5322DomainLiteralOBSDText > dnsWarnNoRecord) {
                          dnsWarnNoRecord = rfc5322DomainLiteralOBSDText;
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
                if (errExpectingDTEXT > dnsWarnNoRecord) {
                  dnsWarnNoRecord = errExpectingDTEXT;
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
          if (cfwsFWS3 > dnsWarnNoRecord) {
            dnsWarnNoRecord = cfwsFWS3;
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
            if (errCRNoLF3 > dnsWarnNoRecord) {
              dnsWarnNoRecord = errCRNoLF3;
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
                        if (deprecatedQTEXT > dnsWarnNoRecord) {
                          dnsWarnNoRecord = deprecatedQTEXT;
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
                if (errExpectingQTEXT > dnsWarnNoRecord) {
                  dnsWarnNoRecord = errExpectingQTEXT;
                }
              }
            }
          }
          obj.local = `${obj4.local} `;
          let locals4 = obj1.locals;
          locals4[num5] = `${locals4[num5]} `;
          let cfwsFWS2 = obj7.diagnoses.cfwsFWS;
          if (cfwsFWS2 > dnsWarnNoRecord) {
            dnsWarnNoRecord = cfwsFWS2;
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
          if (errExpectingQPair > dnsWarnNoRecord) {
            dnsWarnNoRecord = errExpectingQPair;
          }
        } else {
          let tmp53 = charCodeAtResult4 < 31 && 9 !== charCodeAtResult4 || 127 === charCodeAtResult4;
          if (tmp53) {
            let deprecatedQP = obj7.diagnoses.deprecatedQP;
            if (deprecatedQP > dnsWarnNoRecord) {
              dnsWarnNoRecord = deprecatedQP;
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
            let tmp58 = globalThis;
            let _Error2 = Error;
            let str5 = "quoted pair logic invoked in an invalid context: ";
            let tmp59 = new.target;
            let tmp60 = new.target;
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
            if (errCRNoLF2 > dnsWarnNoRecord) {
              dnsWarnNoRecord = errCRNoLF2;
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
                        if (deprecatedCTEXT > dnsWarnNoRecord) {
                          dnsWarnNoRecord = deprecatedCTEXT;
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
                if (errExpectingCTEXT > dnsWarnNoRecord) {
                  dnsWarnNoRecord = errExpectingCTEXT;
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
          if (cfwsFWS > dnsWarnNoRecord) {
            dnsWarnNoRecord = cfwsFWS;
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
              if (errCRNoLF > dnsWarnNoRecord) {
                dnsWarnNoRecord = errCRNoLF;
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
                  if (errFWSCRLFEnd > dnsWarnNoRecord) {
                    dnsWarnNoRecord = errFWSCRLFEnd;
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
          if (errFWSCRLFx2 > dnsWarnNoRecord) {
            dnsWarnNoRecord = errFWSCRLFx2;
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
            if (deprecatedFWS > dnsWarnNoRecord) {
              dnsWarnNoRecord = deprecatedFWS;
              num9 = sum9;
            }
          }
        }
      } else {
        let tmp25 = globalThis;
        let _Error = Error;
        let str4 = "unknown context: ";
        let tmp26 = new.target;
        let tmp27 = new.target;
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
      if (dnsWarnNoRecord <= obj7.categories.rfc5322) {
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
  if (dnsWarnNoRecord < obj3.categories.rfc5322) {
    if (tmp13 === obj3.components.contextQuotedString) {
      const errUnclosedQuotedString = obj3.diagnoses.errUnclosedQuotedString;
      if (errUnclosedQuotedString > dnsWarnNoRecord) {
        dnsWarnNoRecord = errUnclosedQuotedString;
      }
    } else if (tmp13 === obj3.components.contextQuotedPair) {
      const errBackslashEnd = obj3.diagnoses.errBackslashEnd;
      if (errBackslashEnd > dnsWarnNoRecord) {
        dnsWarnNoRecord = errBackslashEnd;
      }
    } else if (tmp13 === obj3.components.contextComment) {
      const errUnclosedComment = obj3.diagnoses.errUnclosedComment;
      if (errUnclosedComment > dnsWarnNoRecord) {
        dnsWarnNoRecord = errUnclosedComment;
      }
    } else if (tmp13 === obj3.components.literal) {
      const errUnclosedDomainLiteral = obj3.diagnoses.errUnclosedDomainLiteral;
      if (errUnclosedDomainLiteral > dnsWarnNoRecord) {
        dnsWarnNoRecord = errUnclosedDomainLiteral;
      }
    } else if ("\r" === tmp14) {
      const errFWSCRLFEnd2 = obj3.diagnoses.errFWSCRLFEnd;
      if (errFWSCRLFEnd2 > dnsWarnNoRecord) {
        dnsWarnNoRecord = errFWSCRLFEnd2;
      }
    } else if (0 === obj.domain.length) {
      const errNoDomain = obj3.diagnoses.errNoDomain;
      if (errNoDomain > dnsWarnNoRecord) {
        dnsWarnNoRecord = errNoDomain;
      }
    } else if (0 === num7) {
      const errDotEnd2 = obj3.diagnoses.errDotEnd;
      if (errDotEnd2 > dnsWarnNoRecord) {
        dnsWarnNoRecord = errDotEnd2;
      }
    } else if (flag4) {
      const errDomainHyphenEnd2 = obj3.diagnoses.errDomainHyphenEnd;
      if (errDomainHyphenEnd2 > dnsWarnNoRecord) {
        dnsWarnNoRecord = errDomainHyphenEnd2;
      }
    } else if (obj.domain.length > 255) {
      const rfc5322DomainTooLong = obj3.diagnoses.rfc5322DomainTooLong;
      if (rfc5322DomainTooLong > dnsWarnNoRecord) {
        dnsWarnNoRecord = rfc5322DomainTooLong;
      }
    } else if (obj.local.length + obj.domain.length + 1 > 254) {
      const rfc5322TooLong = obj3.diagnoses.rfc5322TooLong;
      if (rfc5322TooLong > dnsWarnNoRecord) {
        dnsWarnNoRecord = rfc5322TooLong;
      }
    } else if (63 < num7) {
      const rfc5322LabelTooLong2 = obj3.diagnoses.rfc5322LabelTooLong;
      if (rfc5322LabelTooLong2 > dnsWarnNoRecord) {
        dnsWarnNoRecord = rfc5322LabelTooLong2;
      }
    } else {
      if (obj.minDomainAtoms) {
        if (obj1.domains.length < obj.minDomainAtoms) {
          const errDomainTooShort = obj3.diagnoses.errDomainTooShort;
          if (errDomainTooShort > dnsWarnNoRecord) {
            dnsWarnNoRecord = errDomainTooShort;
          }
        }
      }
      if (obj.tldWhitelist) {
        if (!obj3.validDomain(obj1.domains[num8], obj)) {
          const errUnknownTLD = obj3.diagnoses.errUnknownTLD;
          if (errUnknownTLD > dnsWarnNoRecord) {
            dnsWarnNoRecord = errUnknownTLD;
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
      tmp = dnsWarnNoRecord < closure_2_2.categories.dnsWarn;
    }
    if (tmp) {
      if (obj.charCodeAt(0) <= 57) {
        const rfc5321TLDNumeric = closure_2_2.diagnoses.rfc5321TLDNumeric;
        if (typeof updateResult === "function") {
          if (rfc5321TLDNumeric > dnsWarnNoRecord) {
            dnsWarnNoRecord = rfc5321TLDNumeric;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (0 === sum2) {
        const rfc5321TLD = closure_2_2.diagnoses.rfc5321TLD;
        if (typeof updateResult === "function") {
          if (rfc5321TLD > dnsWarnNoRecord) {
            dnsWarnNoRecord = rfc5321TLD;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj = obj1.domains[sum2];
    }
    if (dnsWarnNoRecord < valid) {
      dnsWarnNoRecord = closure_2_2.diagnoses.valid;
    }
    if (errorLevel) {
      let tmp15 = tmp13;
    } else {
      tmp15 = tmp13 < closure_2_2.defaultThreshold;
    }
    if (domain) {
      if (c8) {
        domain(tmp15);
      } else {
        closure_2_2.defer(domain.bind(null, tmp15));
      }
    }
    return tmp15;
  }
  if (obj.checkDNS) {
    if (dnsWarnNoRecord < obj3.categories.dnsWarn) {
      if (0 === num6) {
        obj.domain = `${obj4.domain}.`;
      }
      domain = obj.domain;
      const mx = errorLevel.resolveMx(domain, (code, arg1) => {
        if (code) {
          if (code.code !== closure_3_1.NODATA) {
            dnsWarnNoRecord = closure_3_2.diagnoses.dnsWarnNoRecord;
            if (typeof closure_2_4 === "function") {
              if (dnsWarnNoRecord > closure_2_3) {
                closure_2_3 = dnsWarnNoRecord;
              }
              return closure_2_9();
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        if (arg1) {
          if (arg1.length) {
            closure_2_7 = true;
            return closure_2_9();
          }
        }
        closure_0 = 3;
        c1 = false;
        const dnsWarnNoMXRecord = closure_3_2.diagnoses.dnsWarnNoMXRecord;
        if (typeof closure_2_4 === "function") {
          if (dnsWarnNoMXRecord > closure_2_3) {
            closure_2_3 = dnsWarnNoMXRecord;
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
                dnsWarnNoRecord = closure_3_2.diagnoses.dnsWarnNoRecord;
                if (typeof updateResult === "function") {
                  c1 = true;
                  finish();
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            }
          }
          const cname = closure_3_1.resolveCname(domain, handleRecords);
          closure_3_1.resolve4(domain, handleRecords);
          closure_3_1.resolve6(domain, handleRecords);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
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

function f122408(lastyear, lastmonth) {
  let length;
  const self = this;
  const options = this.options;
  if (lastyear !== this.lastyear) {
    if (typeof closure_1_15 === "function") {
      const _Date = Date;
      const _Date2 = Date;
      const _Date3 = Date;
      const date = new Date(Date.UTC(lastyear, 0, 1, 0, 0, 0));
      if (typeof closure_1_20 === "function") {
        const result = lastyear % 4;
        let tmp7 = result === 0;
        if (result === 0) {
          tmp7 = lastyear % 100 !== 0;
        }
        if (!tmp7) {
          tmp7 = lastyear % 400 === 0;
        }
        let num11 = 365;
        let num12 = 365;
        if (tmp7) {
          num12 = 366;
        }
        const sum = lastyear + 1;
        if (typeof closure_1_20 === "function") {
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
          if (typeof closure_1_24 === "function") {
            if (typeof closure_1_23 === "function") {
              const diff = tmp14 - 60 * date.getTimezoneOffset() * 1000;
              if (typeof tmp15 === "function") {
                const _Math = Math;
                if (typeof closure_1_27 === "function") {
                  const tmp21 = closure_1_19[date.getUTCDay(date)];
                  let obj = { yearlen: num12, nextyearlen: num15, yearordinal: tmp18, yearweekday: tmp21 };
                  if (typeof closure_1_20 === "function") {
                    const result2 = lastyear % 4;
                    let tmp24 = result2 === 0;
                    if (result2 === 0) {
                      tmp24 = lastyear % 100 !== 0;
                    }
                    if (!tmp24) {
                      tmp24 = lastyear % 400 === 0;
                    }
                    let num20 = num11;
                    if (tmp24) {
                      num20 = 366;
                    }
                    if (typeof tmp160 === "function") {
                      const _Date4 = Date;
                      const _Date5 = Date;
                      const _Date6 = Date;
                      const date1 = new Date(Date.UTC(lastyear, 0, 1, 0, 0, 0));
                      if (typeof tmp19 === "function") {
                        const tmp29 = closure_1_19[date1.getUTCDay(date1)];
                        if (num11 === num20) {
                          obj = { mmask: closure_1_58, mdaymask: closure_1_61, nmdaymask: closure_1_63, wdaymask: closure_1_66.slice(tmp29), mrange: closure_1_65 };
                          let obj1 = obj;
                        } else {
                          obj1 = { mmask: closure_1_59, mdaymask: closure_1_60, nmdaymask: closure_1_62, wdaymask: closure_1_66.slice(tmp29), mrange: closure_1_64 };
                        }
                        const tmp22Result = closure_1_38(closure_1_38(obj, obj1), { wnomask: null });
                        const byweekno = options.byweekno;
                        if (typeof closure_1_12 === "function") {
                          if (typeof closure_1_3 === "function") {
                            let tmp45 = !tmp44;
                            if (null != byweekno) {
                              tmp45 = 0 === byweekno.length;
                            }
                            if (!tmp45) {
                              if (typeof closure_1_8 === "function") {
                                const sum1 = num12 + 7;
                                const items = [];
                                if (closure_1_6(0)) {
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
                                if (typeof closure_1_10 === "function") {
                                  const result3 = (7 - tmp21 + options.wkst) % 7;
                                  let sum2 = result3;
                                  if (result3 * 7 < 0) {
                                    sum2 = result3 + 7;
                                  }
                                  if (4 <= sum2) {
                                    if (typeof closure_1_10 === "function") {
                                      const result4 = (tmp21 - options.wkst) % 7;
                                      let sum3 = result4;
                                      if (result4 * 7 < 0) {
                                        sum3 = result4 + 7;
                                      }
                                      let sum4 = tmp53 + sum3;
                                      let num29 = 0;
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    sum4 = num12 - sum2;
                                    num29 = sum2;
                                  }
                                  const _Math2 = Math;
                                  if (typeof closure_1_10 === "function") {
                                    const result5 = sum4 % 7;
                                    let sum5 = result5;
                                    if (result5 * 7 < 0) {
                                      sum5 = result5 + 7;
                                    }
                                    const _Math3 = Math;
                                    const rounded = Math.floor(tmp56 + sum5 / 4);
                                    const diff1 = 7 - sum2;
                                    for (let num30 = 0; num30 < options.byweekno.length; num30 = num30 + 1) {
                                      let tmp61 = options.byweekno[num30];
                                      let sum6 = tmp61;
                                      if (tmp61 < 0) {
                                        sum6 = tmp61 + (rounded + 1);
                                      }
                                      if (sum6 > 0) {
                                        if (sum6 <= rounded) {
                                          let diff2 = num29;
                                          if (sum6 > 1) {
                                            let sum7 = num29 + 7 * (sum6 - 1);
                                            diff2 = sum7;
                                            if (num29 !== sum2) {
                                              diff2 = sum7 - diff1;
                                            }
                                          }
                                          tmp22Result.wnomask[diff2] = 1;
                                          let sum8 = diff2 + 1;
                                          let num31 = 0;
                                          if (tmp22Result.wdaymask[sum8] !== options.wkst) {
                                            let sum9 = num31 + 1;
                                            while (sum9 < 7) {
                                              tmp22Result.wnomask[sum8] = 1;
                                              let sum10 = sum8 + 1;
                                              num31 = sum9;
                                              sum8 = sum10;
                                              if (tmp22Result.wdaymask[sum10] === options.wkst) {
                                                break;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const byweekno1 = options.byweekno;
                                    if (typeof closure_1_14 === "function") {
                                      if (typeof closure_1_13 === "function") {
                                        if (typeof closure_1_12 === "function") {
                                          if (typeof closure_1_3 === "function") {
                                            let tmp75 = !tmp74;
                                            if (null != byweekno1) {
                                              tmp75 = 0 === byweekno1.length;
                                            }
                                            let tmp76 = !tmp75;
                                            if (tmp76) {
                                              tmp76 = -1 !== byweekno1.indexOf(1);
                                            }
                                            if (tmp76) {
                                              const sum11 = num29 + 7 * rounded;
                                              let diff3 = sum11;
                                              if (num29 !== sum2) {
                                                diff3 = sum11 - diff1;
                                              }
                                              if (diff3 < num12) {
                                                tmp22Result.wnomask[diff3] = 1;
                                                let sum12 = diff3 + 1;
                                                let num33 = 0;
                                                if (tmp22Result.wdaymask[sum12] !== options.wkst) {
                                                  const sum13 = num33 + 1;
                                                  while (sum13 < 7) {
                                                    tmp22Result.wnomask[sum12] = 1;
                                                    let sum14 = sum12 + 1;
                                                    sum12 = sum14;
                                                    num33 = sum13;
                                                    if (tmp22Result.wdaymask[sum14] === options.wkst) {
                                                      break;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            if (num29) {
                                              const byweekno2 = options.byweekno;
                                              if (typeof closure_1_14 === "function") {
                                                if (typeof closure_1_13 === "function") {
                                                  if (typeof closure_1_12 === "function") {
                                                    if (typeof closure_1_3 === "function") {
                                                      let tmp88 = !tmp87;
                                                      if (null != byweekno2) {
                                                        tmp88 = 0 === byweekno2.length;
                                                      }
                                                      let tmp89 = !tmp88;
                                                      if (tmp89) {
                                                        tmp89 = -1 !== byweekno2.indexOf(-1);
                                                      }
                                                      let num36 = -1;
                                                      if (!tmp89) {
                                                        const diff4 = lastyear - 1;
                                                        if (typeof closure_1_15 === "function") {
                                                          const _Date7 = Date;
                                                          const _Date8 = Date;
                                                          const _Date9 = Date;
                                                          const date2 = new Date(Date.UTC(diff4, 0, 1, 0, 0, 0));
                                                          if (typeof tmp90 === "function") {
                                                            const obj7 = closure_1_19[date2.getUTCDay(date2)];
                                                            if (typeof closure_1_10 === "function") {
                                                              const result6 = (7 - obj7.valueOf() + options.wkst) % 7;
                                                              let sum15 = result6;
                                                              if (result6 * 7 < 0) {
                                                                sum15 = result6 + 7;
                                                              }
                                                              const diff5 = lastyear - 1;
                                                              if (typeof closure_1_20 === "function") {
                                                                const result7 = diff5 % 4;
                                                                let tmp104 = result7 === 0;
                                                                if (result7 === 0) {
                                                                  tmp104 = diff5 % 100 !== 0;
                                                                }
                                                                if (!tmp104) {
                                                                  tmp104 = diff5 % 400 === 0;
                                                                }
                                                                if (tmp104) {
                                                                  num11 = 366;
                                                                }
                                                                if (4 <= sum15) {
                                                                  if (typeof closure_1_10 === "function") {
                                                                    const result8 = (obj7 - options.wkst) % 7;
                                                                    let sum16 = result8;
                                                                    if (result8 * 7 < 0) {
                                                                      sum16 = result8 + 7;
                                                                    }
                                                                    let sum17 = num11 + sum16;
                                                                  } else {
                                                                    throw new TypeError("Trying to call a non-function");
                                                                  }
                                                                } else {
                                                                  sum17 = num12 - num29;
                                                                }
                                                                if (typeof closure_1_10 === "function") {
                                                                  const result9 = sum17 % 7;
                                                                  let sum18 = result9;
                                                                  if (result9 * 7 < 0) {
                                                                    sum18 = result9 + 7;
                                                                  }
                                                                  num36 = tmp109(52 + sum18 / 4);
                                                                } else {
                                                                  throw new TypeError("Trying to call a non-function");
                                                                }
                                                              } else {
                                                                throw new TypeError("Trying to call a non-function");
                                                              }
                                                            } else {
                                                              throw new TypeError("Trying to call a non-function");
                                                            }
                                                          } else {
                                                            throw new TypeError("Trying to call a non-function");
                                                          }
                                                        } else {
                                                          throw new TypeError("Trying to call a non-function");
                                                        }
                                                      }
                                                      const byweekno3 = options.byweekno;
                                                      if (typeof tmp83 === "function") {
                                                        if (typeof tmp84 === "function") {
                                                          if (typeof tmp85 === "function") {
                                                            if (typeof tmp86 === "function") {
                                                              let tmp113 = !tmp112;
                                                              if (null != byweekno3) {
                                                                tmp113 = 0 === byweekno3.length;
                                                              }
                                                              if (tmp114) {
                                                                let num45 = 0;
                                                                if (0 < num29) {
                                                                  do {
                                                                    tmp22Result.wnomask[num45] = 1;
                                                                    num45 = num45 + 1;
                                                                  } while (num45 < num29);
                                                                }
                                                              }
                                                              tmp114 = !tmp113 && -1 !== byweekno3.indexOf(num36);
                                                            } else {
                                                              throw new TypeError("Trying to call a non-function");
                                                            }
                                                          } else {
                                                            throw new TypeError("Trying to call a non-function");
                                                          }
                                                        } else {
                                                          throw new TypeError("Trying to call a non-function");
                                                        }
                                                      } else {
                                                        throw new TypeError("Trying to call a non-function");
                                                      }
                                                    } else {
                                                      throw new TypeError("Trying to call a non-function");
                                                    }
                                                  } else {
                                                    throw new TypeError("Trying to call a non-function");
                                                  }
                                                } else {
                                                  throw new TypeError("Trying to call a non-function");
                                                }
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            }
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                            self.yearinfo = tmp22Result;
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  const bynweekday = options.bynweekday;
  if (typeof closure_1_13 === "function") {
    if (typeof closure_1_12 === "function") {
      if (typeof closure_1_3 === "function") {
        let tmp119 = !tmp118;
        if (null != bynweekday) {
          tmp119 = 0 === bynweekday.length;
        }
        if (!tmp119) {
          if (lastmonth !== self.lastmonth) {
            ({ yearlen, mrange, wdaymask } = self.yearinfo);
            const obj2 = { lastyear, lastmonth, nwdaymask: [] };
            const items2 = [];
            if (options.freq === closure_1_72.YEARLY) {
              const bymonth = options.bymonth;
              if (typeof tmp115 === "function") {
                if (typeof tmp116 === "function") {
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
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              arr9 = items2;
              if (options.freq === tmp121.MONTHLY) {
                const items5 = [mrange.slice(lastmonth - 1, lastmonth + 1)];
                arr9 = items5;
              }
            }
            if (typeof closure_1_12 === "function") {
              if (typeof closure_1_3 === "function") {
                if (0 !== arr9.length) {
                  if (typeof closure_1_8 === "function") {
                    const items6 = [];
                    if (closure_1_6(0)) {
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
                    let num57 = 0;
                    if (0 < arr9.length) {
                      while (true) {
                        let tmp130 = arr9[num57];
                        let first = tmp130[0];
                        let diff6 = tmp130[1] - 1;
                        let num58 = 0;
                        if (0 < options.bynweekday.length) {
                          while (true) {
                            [tmp134, tmp135] = options.bynweekday[num58];
                            if (tmp135 < 0) {
                              let sum19 = diff6 + 7 * (tmp135 + 1);
                              if (typeof closure_1_10 === "function") {
                                let result10 = (wdaymask[sum19] - tmp134) % 7;
                                let sum20 = result10;
                                if (result10 * 7 < 0) {
                                  sum20 = result10 + 7;
                                }
                                let diff7 = sum19 - sum20;
                              } else {
                                let str44 = "Trying to call a non-function";
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              let sum21 = first + 7 * (tmp135 - 1);
                              if (typeof closure_1_10 !== "function") {
                                break;
                              } else {
                                let result11 = tmp139 % 7;
                                let sum22 = result11;
                                if (result11 * 7 < 0) {
                                  sum22 = result11 + 7;
                                }
                                diff7 = sum21 + sum22;
                              }
                            }
                            let tmp147 = first <= diff7 && diff7 <= diff6;
                            if (tmp147) {
                              obj2.nwdaymask[diff7] = 1;
                            }
                            num58 = num58 + 1;
                            continue;
                          }
                          let str43 = "Trying to call a non-function";
                          throw new TypeError("Trying to call a non-function");
                        }
                        num57 = num57 + 1;
                      }
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                self.monthinfo = obj2;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        if (typeof closure_1_3 === "function") {
          if (null != options.byeaster) {
            let num59 = options.byeaster;
            if (undefined === num59) {
              num59 = 0;
            }
            const result12 = lastyear % 19;
            const _Math4 = Math;
            const rounded1 = Math.floor(lastyear / 100);
            const result13 = lastyear % 100;
            const _Math5 = Math;
            const _Math6 = Math;
            const rounded2 = Math.floor(rounded1 / 4);
            const result14 = rounded1 % 4;
            const _Math7 = Math;
            const _Math8 = Math;
            const result15 = Math.floor(19 * result12 + rounded1 - rounded2 - Math.floor((rounded1 - Math.floor((rounded1 + 8) / 25) + 1) / 3) + 15) % 30;
            const _Math9 = Math;
            const _Math10 = Math;
            const result16 = Math.floor(32 + 2 * result14 + 2 * Math.floor(result13 / 4) - result15 - result13 % 4) % 7;
            const _Math11 = Math;
            const rounded3 = Math.floor((result12 + 11 * result15 + 22 * result16) / 451);
            const _Math12 = Math;
            const sum23 = result15 + result16;
            const _Date10 = Date;
            const _Date11 = Date;
            const _Math13 = Math;
            const items8 = [Math.ceil((Date.UTC(lastyear, Math.floor((sum23 - 7 * rounded3 + 114) / 31) - 1, (sum23 - 7 * rounded3 + 114) % 31 + 1 + num59) - Date.UTC(lastyear, 0, 1)) / 86400000)];
            self.eastermask = items8;
            const UTCResult = Date.UTC(lastyear, Math.floor((sum23 - 7 * rounded3 + 114) / 31) - 1, (sum23 - 7 * rounded3 + 114) % 31 + 1 + num59);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
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

function f122421() {
  const items = [closure_1_7(this.yearlen), 0, this.yearlen];
  return items;
}

function f122422(arg0, arg1) {
  const yearlen = this.yearlen;
  if (typeof closure_1_8 === "function") {
    const items = [];
    if (closure_1_6(null)) {
      let num3 = 0;
      if (tmp5) {
        do {
          let items1 = [];
          items[num3] = items1.concat(null);
          num3 = num3 + 1;
        } while (num3 < yearlen);
      }
    } else {
      let num2 = 0;
      if (tmp5) {
        do {
          items[num2] = null;
          num2 = num2 + 1;
        } while (num2 < yearlen);
      }
    }
    let sum = tmp;
    if (tmp < tmp2) {
      do {
        items[sum] = sum;
        sum = sum + 1;
      } while (sum < tmp2);
    }
    const items2 = [items, tmp, tmp2];
    return items2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f122423(arg0, arg1, arg2) {
  const self = this;
  const sum = this.yearlen + 7;
  if (typeof closure_1_8 === "function") {
    const items = [];
    if (closure_1_6(null)) {
      let num5 = 0;
      if (0 < sum) {
        do {
          let items1 = [];
          items[num5] = items1.concat(null);
          num5 = num5 + 1;
        } while (num5 < sum);
      }
    } else {
      let num3 = 0;
      if (0 < sum) {
        do {
          items[num3] = null;
          num3 = num3 + 1;
        } while (num3 < sum);
      }
    }
    if (typeof closure_1_15 === "function") {
      const _Date = Date;
      const _Date2 = Date;
      const _Date3 = Date;
      const date = new Date(Date.UTC(arg0, arg1 - 1, arg2, 0, 0, 0));
      if (typeof tmp4 === "function") {
        if (typeof closure_1_23 === "function") {
          const diff = tmp13 - 60 * date.getTimezoneOffset() * 1000;
          if (typeof tmp14 === "function") {
            const _Math = Math;
            const diff1 = Math.round((diff - (tmp16 - 60 * closure_1_18.getTimezoneOffset() * 1000)) / closure_1_17) - self.yearordinal;
            items[diff1] = diff1;
            const sum1 = diff1 + 1;
            let num12 = 0;
            let tmp20 = sum1;
            let tmp21 = sum1;
            if (self.wdaymask[sum1] !== self.options.wkst) {
              const sum2 = num12 + 1;
              tmp21 = tmp20;
              while (sum2 < 7) {
                items[tmp20] = tmp20;
                let sum3 = tmp20 + 1;
                num12 = sum2;
                tmp20 = sum3;
                tmp21 = sum3;
                if (self.wdaymask[sum3] === self.options.wkst) {
                  break;
                }
              }
            }
            const items2 = [items, diff1, tmp21];
            return items2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f122424(arg0, arg1, arg2) {
  const yearlen = this.yearlen;
  if (typeof closure_1_8 === "function") {
    const items = [];
    if (closure_1_6(null)) {
      let num5 = 0;
      if (tmp4) {
        do {
          let items1 = [];
          items[num5] = items1.concat(null);
          num5 = num5 + 1;
        } while (num5 < yearlen);
      }
    } else {
      let num3 = 0;
      if (tmp4) {
        do {
          items[num3] = null;
          num3 = num3 + 1;
        } while (num3 < yearlen);
      }
    }
    if (typeof closure_1_15 === "function") {
      const _Date = Date;
      const _Date2 = Date;
      const _Date3 = Date;
      const date = new Date(Date.UTC(arg0, arg1 - 1, arg2, 0, 0, 0));
      if (typeof tmp5 === "function") {
        if (typeof closure_1_23 === "function") {
          const diff = tmp14 - 60 * date.getTimezoneOffset() * 1000;
          if (typeof tmp15 === "function") {
            const _Math = Math;
            const diff1 = Math.round((diff - (tmp17 - 60 * closure_1_18.getTimezoneOffset() * 1000)) / closure_1_17) - tmp.yearordinal;
            items[diff1] = diff1;
            const items2 = [items, diff1, diff1 + 1];
            return items2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f122425(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg2;
  closure_2 = arg3;
  const self = this;
  closure_4 = [];
  const byminute = this.options.byminute;
  const item = byminute.forEach((item) => {
    closure_4 = closure_4.concat(self.mtimeset(closure_0, item, closure_1, closure_2));
  });
  if (typeof closure_1_32 === "function") {
    const sorted = obj.sort((getTime, getTime2) => {
      const time = getTime.getTime();
      return time - getTime2.getTime();
    });
    return closure_4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  obj = closure_4;
}

function f122426(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg3;
  const bysecond = this.options.bysecond;
  const mapped = bysecond.map((item) => {
    let num = closure_2;
    if (typeof closure_2_49 === "function") {
      const obj = { hour: tmp, minute: tmp2, second: item };
      if (!num) {
        num = 0;
      }
      obj.millisecond = num;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  if (typeof closure_32 === "function") {
    const sorted = mapped.sort((getTime, getTime2) => {
      const time = getTime.getTime();
      return time - getTime2.getTime();
    });
    return mapped;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f122427(hour, minute, arg2, arg3) {
  if (typeof closure_1_49 === "function") {
    let num = arg3;
    const obj = { hour, minute, second: arg2 };
    if (!arg3) {
      num = 0;
    }
    obj.millisecond = num;
    const items = [obj];
    return items;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f122428(arg0) {
  const self = this;
  if (closure_1_39.YEARLY === arg0) {
    const ydayset = self.ydayset;
    return ydayset.bind(self);
  } else if (closure_1_39.MONTHLY === arg0) {
    const mdayset = self.mdayset;
    return mdayset.bind(self);
  } else if (closure_1_39.WEEKLY === arg0) {
    const wdayset = self.wdayset;
    return wdayset.bind(self);
  } else {
    const DAILY = closure_1_39.DAILY;
    const ddayset = self.ddayset;
    return ddayset.bind(self);
  }
}

function f122429(arg0) {
  const self = this;
  if (closure_1_39.HOURLY === arg0) {
    const htimeset = self.htimeset;
    return htimeset.bind(self);
  } else if (closure_1_39.MINUTELY === arg0) {
    const mtimeset = self.mtimeset;
    return mtimeset.bind(self);
  } else if (closure_1_39.SECONDLY === arg0) {
    const stimeset = self.stimeset;
    return stimeset.bind(self);
  }
}

function t(arg0, arg1) {
  let obj = {};
  obj = arg0;
  if (undefined === arg0) {
    obj = {};
  }
  let flag = arg1;
  if (undefined === arg1) {
    flag = false;
  }
  let tmp = null;
  if (!flag) {
    if (typeof closure_1_57 === "function") {
      obj = { all: false, before: [], after: [], between: [] };
      tmp = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  obj._cache = tmp;
  obj.origOptions = closure_1_51(obj);
  const tmp5 = closure_1_38(closure_1_38({}, closure_1_70), closure_1_51(obj));
  if (typeof closure_1_3 === "function") {
    if (null != tmp5.byeaster) {
      tmp5.freq = closure_1_72.YEARLY;
    }
    if (typeof closure_1_3 === "function") {
      if (null != tmp5.freq) {
        if (closure_1_72.FREQUENCIES[tmp5.freq]) {
          if (!tmp5.dtstart) {
            const _Date = Date;
            const _Date2 = Date;
            const date = new Date();
            const date1 = new Date(date.setMilliseconds(0));
            tmp5.dtstart = date1;
          }
          if (typeof closure_1_3 === "function") {
            if (null != tmp5.wkst) {
              if (typeof closure_1_4 === "function") {
                if (typeof tmp5.wkst !== "number") {
                  tmp5.wkst = tmp5.wkst.weekday;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              tmp5.wkst = tmp8.MO.weekday;
            }
            if (typeof closure_1_3 === "function") {
              if (null != tmp5.bysetpos) {
                if (typeof closure_1_4 === "function") {
                  if (typeof tmp5.bysetpos === "number") {
                    const items = [tmp5.bysetpos];
                    tmp5.bysetpos = items;
                  }
                  let num4 = 0;
                  if (0 < tmp5.bysetpos.length) {
                    while (0 !== tmp5.bysetpos[num4]) {
                      if (tmp23 < -366) {
                        break;
                      } else if (tmp23 > 366) {
                        break;
                      } else {
                        num4 = num4 + 1;
                      }
                    }
                    const _Error2 = Error;
                    const error = new Error("bysetpos must be between 1 and 366, or between -366 and -1");
                    throw error;
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              const _Boolean = Boolean;
              if (!Boolean(tmp5.byweekno)) {
                const byweekno = tmp5.byweekno;
                if (typeof closure_1_13 === "function") {
                  if (typeof closure_1_12 === "function") {
                    if (typeof closure_1_3 === "function") {
                      let tmp30 = !tmp29;
                      if (null != byweekno) {
                        tmp30 = 0 === byweekno.length;
                      }
                      if (tmp30) {
                        const byyearday = tmp5.byyearday;
                        if (typeof closure_1_13 === "function") {
                          if (typeof closure_1_12 === "function") {
                            if (typeof closure_1_3 === "function") {
                              let tmp32 = !tmp31;
                              if (null != byyearday) {
                                tmp32 = 0 === byyearday.length;
                              }
                              if (tmp32) {
                                const _Boolean2 = Boolean;
                                if (!Boolean(tmp5.bymonthday)) {
                                  const bymonthday = tmp5.bymonthday;
                                  if (typeof closure_1_13 === "function") {
                                    if (typeof closure_1_12 === "function") {
                                      if (typeof closure_1_3 === "function") {
                                        let tmp34 = !tmp33;
                                        if (null != bymonthday) {
                                          tmp34 = 0 === bymonthday.length;
                                        }
                                        if (tmp34) {
                                          if (typeof closure_1_3 === "function") {
                                            if (null == tmp5.byweekday) {
                                              if (typeof closure_1_3 === "function") {
                                                if (null == tmp5.byeaster) {
                                                  const freq = tmp5.freq;
                                                  if (closure_1_72.YEARLY === freq) {
                                                    if (!tmp5.bymonth) {
                                                      const dtstart2 = tmp5.dtstart;
                                                      tmp5.bymonth = dtstart2.getUTCMonth() + 1;
                                                    }
                                                    const dtstart3 = tmp5.dtstart;
                                                    tmp5.bymonthday = dtstart3.getUTCDate();
                                                  } else if (closure_1_72.MONTHLY === freq) {
                                                    const dtstart = tmp5.dtstart;
                                                    tmp5.bymonthday = dtstart.getUTCDate();
                                                  } else if (closure_1_72.WEEKLY === freq) {
                                                    const dtstart7 = tmp5.dtstart;
                                                    if (typeof closure_1_27 === "function") {
                                                      const items1 = [closure_1_19[dtstart7.getUTCDay(dtstart7)]];
                                                      tmp5.byweekday = items1;
                                                    } else {
                                                      throw new TypeError("Trying to call a non-function");
                                                    }
                                                  }
                                                }
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            }
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        }
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              if (typeof closure_1_3 === "function") {
                let tmp37 = null != tmp5.bymonth;
                if (tmp37) {
                  tmp37 = !closure_1_6(tmp5.bymonth);
                }
                if (tmp37) {
                  const items2 = [tmp5.bymonth];
                  tmp5.bymonth = items2;
                }
                if (typeof closure_1_3 === "function") {
                  let tmp39 = null != tmp5.byyearday;
                  if (tmp39) {
                    tmp39 = !closure_1_6(tmp5.byyearday);
                  }
                  if (tmp39) {
                    if (typeof closure_1_4 === "function") {
                      tmp39 = typeof tmp5.byyearday === "number";
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }
                  if (tmp39) {
                    const items3 = [tmp5.byyearday];
                    tmp5.byyearday = items3;
                  }
                  if (typeof closure_1_3 === "function") {
                    if (null != tmp5.bymonthday) {
                      const bymonthday1 = tmp5.bymonthday;
                      if (closure_1_6(tmp5.bymonthday)) {
                        const items4 = [];
                        const items5 = [];
                        let num7 = 0;
                        if (0 < bymonthday1.length) {
                          do {
                            let tmp43 = tmp5.bymonthday[num7];
                            if (tmp43 > 0) {
                              let arr = items4.push(tmp43);
                            } else if (tmp43 < 0) {
                              arr = items5.push(tmp43);
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
                    if (typeof closure_1_3 === "function") {
                      let tmp48 = null != tmp5.byweekno;
                      if (tmp48) {
                        tmp48 = !closure_1_6(tmp5.byweekno);
                      }
                      if (tmp48) {
                        const items8 = [tmp5.byweekno];
                        tmp5.byweekno = items8;
                      }
                      if (typeof closure_1_3 === "function") {
                        if (null != tmp5.byweekday) {
                          if (typeof closure_1_4 === "function") {
                            if (typeof tmp5.byweekday === "number") {
                              const items9 = [tmp5.byweekday];
                              tmp5.byweekday = items9;
                              tmp5.bynweekday = null;
                              let tmp50 = closure_1_3;
                            } else {
                              let byweekday = tmp5.byweekday;
                              if (typeof closure_1_5 === "function") {
                                let hasItem = typeof byweekday === "string";
                                if (typeof byweekday === "string") {
                                  hasItem = closure_1_1.includes(byweekday);
                                }
                                if (hasItem) {
                                  const items10 = [closure_1_2.fromStr(tmp5.byweekday).weekday];
                                  tmp5.byweekday = items10;
                                  tmp5.bynweekday = null;
                                  tmp50 = closure_1_3;
                                } else {
                                  byweekday = tmp5.byweekday;
                                  if (tmp5.byweekday instanceof closure_1_2) {
                                    if (byweekday.n) {
                                      if (tmp5.freq <= closure_1_72.MONTHLY) {
                                        const items11 = [tmp5.byweekday.weekday, tmp5.byweekday.n];
                                        const items12 = [items11];
                                        tmp5.bynweekday = items12;
                                        tmp5.byweekday = null;
                                        tmp50 = closure_1_3;
                                      }
                                    }
                                    const items13 = [tmp5.byweekday.weekday];
                                    tmp5.byweekday = items13;
                                    tmp5.bynweekday = null;
                                    tmp50 = closure_1_3;
                                  } else {
                                    const items14 = [];
                                    const items15 = [];
                                    let num9 = 0;
                                    if (0 < byweekday.length) {
                                      while (typeof closure_1_4 === "function") {
                                        if (typeof tmp54 === "number") {
                                          let arr1 = items14.push(tmp54);
                                        } else if (typeof closure_1_5 === "function") {
                                          let hasItem1 = typeof tmp54 === "string";
                                          if (typeof tmp54 === "string") {
                                            hasItem1 = closure_1_1.includes(tmp54);
                                          }
                                          if (hasItem1) {
                                            let arr2 = items14.push(closure_1_2.fromStr(tmp54).weekday);
                                          } else {
                                            if (tmp54.n) {
                                              if (tmp5.freq <= closure_1_72.MONTHLY) {
                                                let items16 = [, ];
                                                ({ weekday: arr16[0], n: arr16[1] } = tmp54);
                                                let arr3 = items15.push(items16);
                                              }
                                            }
                                            let arr4 = items14.push(tmp54.weekday);
                                          }
                                        } else {
                                          let str32 = "Trying to call a non-function";
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                        num9 = num9 + 1;
                                      }
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                    if (typeof closure_1_13 === "function") {
                                      if (typeof closure_1_12 === "function") {
                                        if (typeof closure_1_3 === "function") {
                                          let tmp67 = null;
                                          if (0 !== items14.length) {
                                            tmp67 = items14;
                                          }
                                          tmp5.byweekday = tmp67;
                                          if (typeof tmp64 === "function") {
                                            if (typeof tmp65 === "function") {
                                              if (typeof closure_1_3 === "function") {
                                                let tmp68 = null;
                                                if (0 !== items15.length) {
                                                  tmp68 = items15;
                                                }
                                                tmp5.bynweekday = tmp68;
                                                tmp50 = closure_1_3;
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            } else {
                                              throw new TypeError("Trying to call a non-function");
                                            }
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          tmp5.bynweekday = null;
                          tmp50 = closure_1_3;
                        }
                        if (typeof tmp50 === "function") {
                          if (null != tmp5.byhour) {
                            if (typeof closure_1_4 === "function") {
                              if (typeof tmp5.byhour === "number") {
                                const items17 = [tmp5.byhour];
                                tmp5.byhour = items17;
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            let tmp72 = null;
                            if (tmp5.freq < closure_1_72.HOURLY) {
                              const dtstart4 = tmp5.dtstart;
                              const items18 = [dtstart4.getUTCHours()];
                              tmp72 = items18;
                            }
                            tmp5.byhour = tmp72;
                          }
                          if (typeof tmp50 === "function") {
                            if (null != tmp5.byminute) {
                              if (typeof closure_1_4 === "function") {
                                if (typeof tmp5.byminute === "number") {
                                  const items19 = [tmp5.byminute];
                                  tmp5.byminute = items19;
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              let tmp75 = null;
                              if (tmp5.freq < closure_1_72.MINUTELY) {
                                const dtstart5 = tmp5.dtstart;
                                const items20 = [dtstart5.getUTCMinutes()];
                                tmp75 = items20;
                              }
                              tmp5.byminute = tmp75;
                            }
                            if (typeof tmp50 === "function") {
                              if (null != tmp5.bysecond) {
                                if (typeof closure_1_4 === "function") {
                                  if (typeof tmp5.bysecond === "number") {
                                    const items21 = [tmp5.bysecond];
                                    tmp5.bysecond = items21;
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                let tmp78 = null;
                                if (tmp5.freq < closure_1_72.SECONDLY) {
                                  const dtstart6 = tmp5.dtstart;
                                  const items22 = [dtstart6.getUTCSeconds()];
                                  tmp78 = items22;
                                }
                                tmp5.bysecond = tmp78;
                              }
                              obj.options = tmp5;
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      const _Error = Error;
      const concat = "Invalid frequency: ".concat;
      const combined = "Invalid frequency: ".concat(tmp5.freq, " ");
      const error1 = new Error(combined.concat(obj.freq));
      throw error1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmp4 = closure_1_38({}, closure_1_70);
}

function f122431(arg0, arg1) {
  return closure_1_47(arg0, arg1);
}

function f122432(arg0, arg1) {
  let tmp = arg1;
  if (undefined === arg1) {
    tmp = closure_1_41;
  }
  let tmp2 = closure_1_72;
  tmp2 = new tmp2(closure_1_47(arg0, tmp) || undefined);
  return new.target;
}

function f122433(arg0) {
  let tmp = closure_1_0;
  const tmp2 = closure_1_0.parseString(arg0) || undefined;
  tmp = new tmp(tmp2);
  return Object.create(tmp.prototype);
}

function f122434(arg0) {
  return closure_1_68(arg0, this.options);
}

function f122435(arg0, arg1) {
  let _cacheGetResult = this._cache;
  if (_cacheGetResult) {
    const _cache = tmp._cache;
    _cacheGetResult = _cache._cacheGet(arg0, arg1);
  }
  return _cacheGetResult;
}

function f122436(arg0, arg1, arg2) {
  if (this._cache) {
    const _cache = tmp._cache;
    return _cache._cacheAdd(arg0, arg1, arg2);
  }
}

function f122437(iterator) {
  const self = this;
  if (iterator) {
    if (typeof closure_1_40 === "function") {
      const obj = {};
      const call = closure_168_0.call;
      if (typeof call === "unknown") {
        closure_168_0("all", obj);
      } else {
        let callResult = call(tmp10, "all", obj);
      }
      if (!callResult) {
        callResult = tmp10;
      }
      callResult.iterator = iterator;
      return tmp8(callResult);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    let _cacheGetResult = self._cacheGet("all");
    if (false === _cacheGetResult) {
      new closure_1_36("all", {});
      const _iterResult = self._iter(new.target);
      self._cacheAdd("all", _iterResult);
      _cacheGetResult = _iterResult;
    }
    return _cacheGetResult;
  }
}

function f122438(getTime, getTime2, arg2, iterator) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = false;
  }
  if (typeof closure_1_22 === "function") {
    if (typeof closure_1_21 === "function") {
      const _Date = Date;
      let tmp5 = getTime instanceof Date;
      if (tmp5) {
        const _isNaN = isNaN;
        tmp5 = !isNaN(getTime.getTime());
      }
      if (tmp5) {
        if (typeof tmp === "function") {
          if (typeof tmp2 === "function") {
            const _Date2 = Date;
            let tmp7 = getTime2 instanceof Date;
            if (tmp7) {
              const _isNaN2 = isNaN;
              tmp7 = !isNaN(getTime2.getTime());
            }
            if (tmp7) {
              const self = this;
              const obj = { before: getTime2, after: getTime, inc: flag };
              if (iterator) {
                if (typeof closure_1_40 === "function") {
                  const call = closure_168_0.call;
                  if (typeof call === "unknown") {
                    closure_168_0("between", obj);
                  } else {
                    let callResult = call(tmp23, "between", obj);
                  }
                  if (!callResult) {
                    callResult = tmp23;
                  }
                  callResult.iterator = iterator;
                  return tmp21(callResult);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                let _cacheGetResult = self._cacheGet("between", obj);
                if (false === _cacheGetResult) {
                  new closure_1_36("between", obj);
                  const _iterResult = self._iter(new.target);
                  self._cacheAdd("between", _iterResult, obj);
                  _cacheGetResult = _iterResult;
                }
                return _cacheGetResult;
              }
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const _Error = Error;
      const error = new Error("Invalid date passed in to RRule.between");
      throw error;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f122439(getTime, arg1) {
  let flag = arg1;
  if (undefined === arg1) {
    flag = false;
  }
  if (typeof closure_1_22 === "function") {
    if (typeof closure_1_21 === "function") {
      const _Date = Date;
      let tmp4 = getTime instanceof Date;
      if (tmp4) {
        const _isNaN = isNaN;
        tmp4 = !isNaN(getTime.getTime());
      }
      if (tmp4) {
        const self = this;
        const obj = { dt: getTime, inc: flag };
        let _cacheGetResult = this._cacheGet("before", obj);
        if (false === _cacheGetResult) {
          new closure_1_36("before", obj);
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
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f122440(getTime, arg1) {
  let flag = arg1;
  if (undefined === arg1) {
    flag = false;
  }
  if (typeof closure_1_22 === "function") {
    if (typeof closure_1_21 === "function") {
      const _Date = Date;
      let tmp4 = getTime instanceof Date;
      if (tmp4) {
        const _isNaN = isNaN;
        tmp4 = !isNaN(getTime.getTime());
      }
      if (tmp4) {
        const self = this;
        const obj = { dt: getTime, inc: flag };
        let _cacheGetResult = this._cacheGet("after", obj);
        if (false === _cacheGetResult) {
          new closure_1_36("after", obj);
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
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}

function f122441() {
  return this.all().length;
}

function f122442() {
  return closure_1_56(this.origOptions);
}

function f122443(arg0, arg1, arg2) {
  new closure_1_45(this, arg0, arg1, arg2);
  return new.target.toString();
}

function f122444() {
  return closure_1_48(this);
}

function f122445() {
  new closure_1_0(this.origOptions);
  return Object.create(closure_1_0.prototype);
}

function e(arg0) {
  let flag = arg0;
  if (undefined === arg0) {
    flag = false;
  }
  const self = this;
  const call = closure_1_0.call;
  const obj = {};
  if (typeof call === "unknown") {
    closure_1_0(obj, flag);
  } else {
    let callResult = call(self, obj, flag);
  }
  if (!callResult) {
    callResult = self;
  }
  callResult.dtstart = closure_2_75.apply(callResult, ["dtstart"]);
  callResult.tzid = closure_2_75.apply(callResult, ["tzid"]);
  callResult._rrule = [];
  callResult._rdate = [];
  callResult._exrule = [];
  callResult._exdate = [];
  return callResult;
}

function f122447(accept) {
  ({ _rrule, _exrule, _rdate, _exdate } = this);
  let after = accept;
  let before = _exrule;
  accept = undefined;
  const dependencyMap = {};
  accept = accept.accept;
  let item = _exdate.forEach((getTime) => {
    if (typeof closure_2_55 === "function") {
      const obj = {};
      const _isNaN = isNaN;
      if (isNaN(getTime.getTime())) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("Invalid date passed to DateWithZone");
        throw rangeError;
      } else {
        obj.date = getTime;
        obj.tzid = tmp;
        const _Number = Number;
        closure_3[Number(obj.rezonedDate())] = true;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
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
        let item = date1.forEach((between) => {
          const item = between.between(date, date1, true).forEach((item) => {
            closure_1_3[Number(item)] = true;
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
    const item1 = _exrule.forEach((between) => {
      const item = between.between(date, date1, true).forEach((item) => {
        closure_1_3[Number(item)] = true;
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
    let obj = _rdate[num];
    while (typeof closure_55 === "function") {
      obj = {};
      let _isNaN = isNaN;
      if (isNaN(obj.getTime())) {
        let _RangeError = RangeError;
        let tmp16 = new.target;
        let str3 = "Invalid date passed to DateWithZone";
        let tmp17 = new.target;
        let rangeError = new RangeError("Invalid date passed to DateWithZone");
        throw rangeError;
      } else {
        obj.date = obj;
        obj.tzid = tzidResult;
        let rezonedDateResult = obj.rezonedDate();
        let _Date = Date;
        let tmp7 = new.target;
        let tmp8 = new.target;
        let date = new Date(rezonedDateResult.getTime());
        if (accept.accept(date)) {
          num = num + 1;
        }
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
  const item2 = _rrule.forEach((options) => {
    closure_2_68(after, options.options);
  });
  const _result = accept._result;
  if (typeof closure_32 === "function") {
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
          const tmp15 = _result.length && _result[_result.length - 1] || null;
        } else {
          tmp13 = _result.length && _result[0] || null;
          const tmp14 = _result.length && _result[0] || null;
        }
      }
    }
    return tmp13;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tzidResult = this.tzid();
}

function f122448(arg0) {
  closure_1_77(arg0, this._rrule);
}

function f122449(arg0) {
  closure_1_77(arg0, this._exrule);
}

function f122450(arg0) {
  closure_1_78(arg0, this._rdate);
}

function f122451(arg0) {
  closure_1_78(arg0, this._exdate);
}

function f122452() {
  const _rrule = this._rrule;
  return _rrule.map((item) => closure_1_74(item.toString()));
}

function f122453() {
  const _exrule = this._exrule;
  return _exrule.map((item) => closure_1_74(item.toString()));
}

function f122454() {
  const _rdate = this._rdate;
  return _rdate.map((getTime) => new Date(getTime.getTime()));
}

function f122455() {
  const _exdate = this._exdate;
  return _exdate.map((getTime) => new Date(getTime.getTime()));
}

function f122456() {
  const self = this;
  closure_0 = [];
  let _dtstart = !length;
  if (!this._rrule.length) {
    _dtstart = self._dtstart;
  }
  if (_dtstart) {
    const obj = { dtstart: self._dtstart };
    closure_0 = closure_0.concat(closure_56(obj));
  }
  const _rrule = self._rrule;
  const item = _rrule.forEach((item) => {
    closure_0 = closure_0.concat(item.toString().split("\n"));
  });
  const _exrule = self._exrule;
  const item1 = _exrule.forEach((item) => {
    const parts = item.toString().split("\n");
    const mapped = parts.map((item) => item.replace(/^RRULE:/, "EXRULE:"));
    closure_0 = closure_0.concat(mapped.filter((item) => !/^DTSTART/.test(item)));
  });
  if (!self._rdate.length) {
    if (!self._exdate.length) {
      return closure_0;
    } else {
      let _exdate = self._exdate;
      const str8 = self.tzid();
      closure_129_0 = undefined;
      let tmp10 = !str8;
      if (str8) {
        tmp10 = "UTC" === str8.toUpperCase();
      }
      closure_129_0 = tmp10;
      const concat3 = "".concat;
      let str12 = ":";
      if (tmp10) {
        let concat3Result = concat3("EXDATE", `:`);
      } else {
        concat3Result = concat3("EXDATE", ";TZID=").concat(str8, `:`);
        const concat3Result1 = concat3("EXDATE", ";TZID=");
      }
      _exdate = _exdate.map((item) => {
        const valueOfResult = item.valueOf();
        let flag = closure_0;
        if (typeof closure_2_33 === "function") {
          if (undefined === flag) {
            flag = true;
          }
          const _Date = Date;
          const date = new Date(valueOfResult);
          const items = [closure_2_9(date.getUTCFullYear().toString(), 4, "0"), closure_2_9(date.getUTCMonth() + 1, 2, "0"), closure_2_9(date.getUTCDate(), 2, "0"), "T", closure_2_9(date.getUTCHours(), 2, "0"), closure_2_9(date.getUTCMinutes(), 2, "0"), closure_2_9(date.getUTCSeconds(), 2, "0"), ];
          let str5 = "";
          if (flag) {
            str5 = "Z";
          }
          items[7] = str5;
          return items.join("");
        } else {
          throw new TypeError("Trying to call a non-function");
        }
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
    _rdate = _rdate.map((item) => {
      const valueOfResult = item.valueOf();
      let flag = closure_0;
      if (typeof closure_2_33 === "function") {
        if (undefined === flag) {
          flag = true;
        }
        const _Date = Date;
        const date = new Date(valueOfResult);
        const items = [closure_2_9(date.getUTCFullYear().toString(), 4, "0"), closure_2_9(date.getUTCMonth() + 1, 2, "0"), closure_2_9(date.getUTCDate(), 2, "0"), "T", closure_2_9(date.getUTCHours(), 2, "0"), closure_2_9(date.getUTCMinutes(), 2, "0"), closure_2_9(date.getUTCSeconds(), 2, "0"), ];
        let str5 = "";
        if (flag) {
          str5 = "Z";
        }
        items[7] = str5;
        return items.join("");
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    });
    str5 = _rdate.join(",");
    const concat2 = "".concat;
    const combined3 = "".concat(combined1);
    closure_0.push(combined3.concat(str5));
  }
}

function f122457() {
  return this.valueOf().join("\n");
}

function f122458() {
  const self = this;
  const _cache = this._cache;
  Object.create(closure_1_1.prototype);
  const call = closure_1_0.call;
  const obj = {};
  if (typeof call === "unknown") {
    closure_1_0(obj, _cache);
  } else {
    let callResult = call(obj, obj, _cache);
  }
  if (!callResult) {
    callResult = obj;
  }
  callResult.dtstart = closure_2_75.apply(callResult, ["dtstart"]);
  callResult.tzid = closure_2_75.apply(callResult, ["tzid"]);
  callResult._rrule = [];
  callResult._rdate = [];
  callResult._exrule = [];
  callResult._exdate = [];
  const _rrule = self._rrule;
  const item = _rrule.forEach((clone) => callResult.rrule(clone.clone()));
  const _exrule = self._exrule;
  const item1 = _exrule.forEach((clone) => callResult.exrule(clone.clone()));
  const _rdate = self._rdate;
  const item2 = _rdate.forEach((getTime) => callResult.rdate(new Date(getTime.getTime())));
  const _exdate = self._exdate;
  const item3 = _exdate.forEach((getTime) => callResult.exdate(new Date(getTime.getTime())));
  return callResult;
}

function f123642(channelId) {
  let obj = { channelId: channelId.channel_id };
  let result = closure_3_22.canWithPartialContext(closure_3_31.CONNECT, obj);
  if (result) {
    const channel_id = channelId.channel_id;
    let flag = false;
    if (null != channel_id) {
      const voiceStatesForChannel = closure_3_27.getVoiceStatesForChannel(channel_id);
      let someResult = null != voiceStatesForChannel;
      if (someResult) {
        const mapped = closure_3_1(closure_3_2[31])(voiceStatesForChannel).map((userId) => {
          user = user.getUser(userId.userId);
          let id;
          if (user != null) {
            id = user.id;
          }
          return id;
        });
        const found = mapped.filter(closure_3_0(closure_3_2[39]).isNotNullish);
        someResult = found.some((item) => blockedOrIgnored.isBlockedOrIgnored(item));
        const arr = closure_3_1(closure_3_2[31])(voiceStatesForChannel);
      }
      flag = someResult;
    }
    result = !flag;
  }
  if (result) {
    obj = { kind: "live-guild-stage", stage: channelId };
    closure_1_2[channelId.channel_id] = obj;
  }
}

function f123643(id) {
  const user = closure_3_26.getUser(id);
  if (null != user) {
    if (user.bot) {
      closure_1_12.add(id);
    } else {
      const primaryActivity = closure_3_23.getPrimaryActivity(id, closure_2_1);
      if (null != closure_2_1) {
        let voiceStateForUser = closure_1_11[id];
      } else {
        voiceStateForUser = closure_3_27.getVoiceStateForUser(id);
      }
      let tmp8 = closure_2_10;
      if (!closure_2_10) {
        tmp8 = null != primaryActivity;
      }
      if (!tmp8) {
        tmp8 = null != voiceStateForUser;
      }
      if (tmp8) {
        closure_1_10(id, primaryActivity, voiceStateForUser);
      }
    }
  }
}

function f123644(userId) {
  userId = userId.userId;
  closure_1_10(userId, closure_3_23.getPrimaryActivity(userId, closure_2_1), userId);
}

function f123645(event) {
  return closure_1_13.push({ kind: "guild-event", event, isLive: true });
}

function f123646(event) {
  return closure_1_13.push({ kind: "guild-event", event, isLive: false });
}

function f124027(arg0) {
  return closure_2_0.deleteMessage(closure_1_1, closure_1_0, arg0);
}

function f124974(arg0) {
  return closure_1_0[arg0];
}