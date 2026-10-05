// _runtime/metro/00877__.js
import _mod693 from "00693__.js";
import ReactNativeLibraries from "../00873_ReactNativeLibraries.js";
import convertToNormalizedObject from "../00890_convertToNormalizedObject.js";
import _slicedToArray from "00032__slicedToArray.js";
import react_native from "../00017_react-native.js";
import 00878__ from "00878__.js";
import encodeUTF8 from "../00880_encodeUTF8.js";

let _self, c0, captureEnvelope, enableLogs, hasOwnProperty, obj;

let sentryError;
let sentryError1;
let self = this;
const NativeModules = react_native.NativeModules;
let closure_4 = this && self.__awaiter || ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _Promise = arg2;
  const Promise = arg2;
  let closure_3 = arg3;
  if (!arg2) {
    let tmp = globalThis;
    _Promise = Promise;
  }
  const _Promise1 = new _Promise(function(fn, arg1) {
    closure_0 = fn;
    closure_1 = arg1;
    function fulfilled(result) {
      try {
        step(iter.next(result));
      } catch (tmp5) {
        closure_1(tmp5);
      }
    }
    function rejected(arg0) {
      try {
        step(iter.throw(arg0));
      } catch (tmp5) {
        closure_1(tmp5);
      }
    }
    let iter = rejected;
    function step(done) {
      if (done.done) {
        fn(done.value);
      } else {
        let tmp1 = done.value;
        const value = tmp1;
        if (!(tmp1 instanceof Promise)) {
          const self = this;
          const self2 = this;
          tmp1 = new tmp((fn) => {
            fn(value);
          });
        }
        tmp1.then(fulfilled, iter);
      }
    }
    let items = closure_1;
    const tmp = iter;
    const apply = iter.apply;
    const tmp2 = closure_0;
    if (!closure_1) {
      items = [];
    }
    iter = apply(tmp2, items);
    const iter2 = iter.next();
    let value = iter2.value;
    if (iter2.done) {
      const tmp5 = fn(value);
    } else {
      let tmp32 = value;
      if (!(value instanceof fulfilled)) {
        let self = this;
        let self2 = this;
        tmp32 = new tmp3((fn) => {
          fn(value);
        });
      }
      tmp32.then(fulfilled, rejected);
    }
  });
  return _Promise1;
});
let closure_5 = self && self.__rest || ((obj, arr) => {
  obj = {};
  for (const key10007 in obj) {
    let _Object2 = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let callResult = hasOwnProperty.call(obj, key10007) && arr.indexOf(key10007) < 0;
    if (!callResult) {
      continue;
    } else {
      obj[key10007] = obj[key10007];
      continue;
    }
    continue;
  }
  if (null != obj) {
    const _Object3 = Object;
    if (typeof Object.getOwnPropertySymbols === "function") {
      let num;
      const _Object4 = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
      for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
        let callResult1 = arr.indexOf(ownPropertySymbols[num]) < 0;
        if (callResult1) {
          let _Object = Object;
          callResult1 = propertyIsEnumerable.call(obj, ownPropertySymbols[num]);
        }
        if (callResult1) {
          obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
        }
      }
    }
  }
  return obj;
});
if (module_878.isTurboModuleEnabled()) {
  let TurboModuleRegistry = ReactNativeLibraries.ReactNativeLibraries.TurboModuleRegistry;
  let tmp3 = null;
  let value;
  if (null !== TurboModuleRegistry) {
    if (undefined !== TurboModuleRegistry) {
      let str = "RNSentry";
      value = TurboModuleRegistry.get("RNSentry");
    }
  }
  let RNSentry = value;
} else {
  RNSentry = NativeModules.RNSentry;
}
function getRNSentryModule() {
  obj = module_878;
  if (obj.isTurboModuleEnabled()) {
    const TurboModuleRegistry = ReactNativeLibraries.ReactNativeLibraries.TurboModuleRegistry;
    let value;
    if (null !== TurboModuleRegistry) {
      if (undefined !== TurboModuleRegistry) {
        value = TurboModuleRegistry.get("RNSentry");
      }
    }
    RNSentry = value;
  } else {
    RNSentry = NativeModules.RNSentry;
  }
  return RNSentry;
}
let closure_7 = encodeUTF8.encodeUTF8("\n");
const NATIVE = {
  fetchModules() {
    return closure_4(this, undefined, undefined, function() {
      let closure_1;
      const self = this;
      let c2 = 0;
      let c3 = 0;
      return (function*() {
        if (!self.enableNative) {
          throw self._DisabledNativeError;
        }
        if (!self._isModuleLoaded(RNSentry)) {
          throw self._NativeClientError;
        }
        yield RNSentry.fetchModules();
        let closure_0 = value;
        let parsed = null;
        if (closure_0) {
          const _JSON = JSON;
          parsed = JSON.parse(closure_0);
        }
        return parsed;
      })();
    });
  },
  sendEnvelope(arg0) {
    let closure_0 = arg0;
    return closure_4(this, undefined, undefined, function() {
      let self = this;
      let c4 = 0;
      let c3 = 0;
      let c6 = 0;
      return (function*(arg0) {
        let tmp53;
        let tmp54;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          while (true) {
            c3 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                let obj8 = { value, done: true };
                return obj8;
              } else {
                let obj14 = self;
                if (self.enableNative) {
                  if (obj14._isModuleLoaded(captureEnvelope)) {
                    let tmp13 = closure_2(closure_0, 2);
                    let tmp14 = tmp13[1];
                    let _JSON = JSON;
                    let json = JSON.stringify(tmp13[0]);
                    let obj2 = self(closure_1[4]);
                    let encodeUTF8Result = obj2.encodeUTF8(json);
                    let _Uint8Array = Uint8Array;
                    self = this;
                    let self2 = this;
                    let uint8Array = new Uint8Array(encodeUTF8Result.length + closure_1_7.length);
                    let arr2 = uint8Array;
                    let result = uint8Array.set(encodeUTF8Result);
                    let result1 = uint8Array.set(closure_1_7, encodeUTF8Result.length);
                    closure_2 = tmp14;
                    closure_1 = tmp14[Symbol.iterator]();
                    let flag = false;
                    while (closure_1 !== undefined) {
                      let encodeUTF8Result1;
                      let str;
                      let isHardCrashResult;
                      captureEnvelope = 1;
                      let tmp52 = closure_2(obj14._processItem(tmp24), 2);
                      [tmp53, tmp54] = tmp52;
                      if (typeof tmp54 === "string") {
                        let obj6 = self(closure_1[4]);
                        encodeUTF8Result1 = obj6.encodeUTF8(tmp54);
                        str = "text/plain";
                        isHardCrashResult = flag;
                      } else {
                        let _Uint8Array3 = Uint8Array;
                        let content_type = tmp53.content_type;
                        if (tmp54 instanceof Uint8Array) {
                          let str2 = "application/octet-stream";
                          if (typeof content_type === "string") {
                            str2 = tmp53.content_type;
                          }
                          str = str2;
                          encodeUTF8Result1 = tmp54;
                          isHardCrashResult = flag;
                        } else {
                          str = "application/json";
                          if (typeof content_type === "string") {
                            str = tmp53.content_type;
                          }
                          let obj4 = self(closure_1[4]);
                          let _JSON2 = JSON;
                          encodeUTF8Result1 = obj4.encodeUTF8(JSON.stringify(tmp54));
                          isHardCrashResult = flag;
                          if (!isHardCrashResult) {
                            let obj5 = self(closure_1[6]);
                            isHardCrashResult = obj5.isHardCrash(tmp54);
                          }
                        }
                      }
                      tmp53.content_type = str;
                      tmp53.length = encodeUTF8Result1.length;
                      let _JSON3 = JSON;
                      let json1 = JSON.stringify(tmp53);
                      let obj7 = self(closure_1[4]);
                      let encodeUTF8Result2 = obj7.encodeUTF8(json1);
                      let _Uint8Array2 = Uint8Array;
                      let self3 = this;
                      let self4 = this;
                      let uint8Array1 = new Uint8Array(arr2.length + encodeUTF8Result2.length + closure_1_7.length + encodeUTF8Result1.length + closure_1_7.length);
                      let result2 = uint8Array1.set(arr2);
                      let result3 = uint8Array1.set(encodeUTF8Result2, arr2.length);
                      let result4 = uint8Array1.set(closure_1_7, arr2.length + encodeUTF8Result2.length);
                      let result5 = uint8Array1.set(encodeUTF8Result1, arr2.length + encodeUTF8Result2.length + closure_1_7.length);
                      let result6 = uint8Array1.set(closure_1_7, arr2.length + encodeUTF8Result2.length + closure_1_7.length + encodeUTF8Result1.length);
                      captureEnvelope = 0;
                      flag = isHardCrashResult;
                      arr2 = uint8Array1;
                      continue;
                    }
                    captureEnvelope = captureEnvelope.captureEnvelope;
                    let obj9 = self(closure_1[7]);
                    let obj10 = { hardCrashed: flag };
                    c4 = 2;
                    c3 = 1;
                    let obj11 = { value: captureEnvelope(obj9.base64StringFromByteArray(arr2), obj10), done: false };
                    return obj11;
                  } else {
                    throw obj14._NativeClientError;
                  }
                } else {
                  let debug = self(closure_1[5]).debug;
                  let warnResult = debug.warn("Event was skipped as native SDK is not enabled.");
                }
              }
            } else if (1 === tmp3) {
              captureEnvelope = 0;
              closure_1.return();
              throw closure_1_5;
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      })();
    });
  },
  initNativeSdk(arg0) {
    let closure_0 = arg0;
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c3 = 0;
      let c4 = 0;
      return (function*() {
        let androidProfilingOptions;
        let beforeBreadcrumb;
        let beforeSend;
        let beforeSendMetric;
        let beforeSendTransaction;
        let found;
        let ignoreErrors;
        let logsOrigin;
        let mapped;
        let obj6;
        closure_2 = self;
        closure_1 = tmp;
        const _Object4 = Object;
        const _Object3 = Object;
        const merged = Object.assign({ enableNative: true, autoInitializeNativeSdk: true }, enableLogs);
        if (undefined !== enableLogs.enableLogs) {
          enableLogs = tmp30.enableLogs && "js" !== tmp30.logsOrigin;
          obj6 = { enableLogs };
        } else {
          obj6 = {};
        }
        const obj7 = assign(merged, obj6);
        if (!obj7.enableNative) {
          if (obj7.enableNativeNagger) {
            const debug = self(closure_1[5]).debug;
            debug.warn("Note: Native Sentry SDK is disabled.");
          }
          self.enableNative = false;
          return false;
        }
        if (!obj7.autoInitializeNativeSdk) {
          if (obj7.enableNativeNagger) {
            const debug2 = self(closure_1[5]).debug;
            debug2.warn("Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false");
          }
          self.enableNative = true;
          return false;
        }
        if (!obj7.dsn) {
          const debug3 = self(closure_1[5]).debug;
          debug3.warn("Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.");
          self.enableNative = false;
          return false;
        }
        if (!self._isModuleLoaded(closure_1_6)) {
          throw self._NativeClientError;
        }
        const ignoreErrors1 = obj7.ignoreErrors;
        if (null !== ignoreErrors1) {
          if (undefined !== ignoreErrors1) {
            found = ignoreErrors1.filter((item) => typeof item === "string");
          }
        }
        const ignoreErrors2 = obj7.ignoreErrors;
        if (null !== ignoreErrors2) {
          if (undefined !== ignoreErrors2) {
            const found1 = ignoreErrors2.filter((item) => item instanceof RegExp);
            mapped = found1.map((source) => source.source);
          }
        }
        const tmp21 = found && found.length > 0;
        if (tmp21) {
          obj7.ignoreErrorsStr = found;
        }
        const tmp22 = mapped && mapped.length > 0;
        if (tmp22) {
          obj7.ignoreErrorsRegex = mapped;
        }
        ({ beforeSend, beforeBreadcrumb, beforeSendTransaction, beforeSendMetric, integrations, ignoreErrors, logsOrigin, androidProfilingOptions } = obj7);
        const tmp24 = closure_1_5(obj7, ["beforeSend", "beforeBreadcrumb", "beforeSendTransaction", "beforeSendMetric", "integrations", "ignoreErrors", "logsOrigin", "androidProfilingOptions"]);
        if (androidProfilingOptions) {
          const _Object = Object;
          const _Object2 = Object;
          const obj8 = { androidProfilingOptions };
          tmp24._experiments = Object.assign(Object.assign({}, tmp24._experiments), obj8);
        }
        yield closure_1_6.initNativeSdk(tmp24);
        enableLogs = value;
        closure_2.nativeIsReady = enableLogs;
        closure_2.enableNative = true;
        return enableLogs;
      })();
    });
  },
  fetchNativeLogAttributes() {
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else if (self.enableNative) {
              if (self._isModuleLoaded(RNSentry)) {
                c1 = 3;
                const obj5 = { value: RNSentry.fetchNativeLogAttributes(), done: true };
                return obj5;
              } else {
                throw self._NativeClientError;
              }
            } else {
              throw self._DisabledNativeError;
            }
          } catch (tmp3) {
            c1 = 3;
            throw tmp3;
          }
        }
      })();
    });
  },
  fetchNativeRelease() {
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else if (self.enableNative) {
              if (self._isModuleLoaded(RNSentry)) {
                c1 = 3;
                const obj5 = { value: RNSentry.fetchNativeRelease(), done: true };
                return obj5;
              } else {
                throw self._NativeClientError;
              }
            } else {
              throw self._DisabledNativeError;
            }
          } catch (tmp3) {
            c1 = 3;
            throw tmp3;
          }
        }
      })();
    });
  },
  fetchNativeSdkInfo() {
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else if (self.enableNative) {
              if (self._isModuleLoaded(RNSentry)) {
                c1 = 3;
                const obj5 = { value: RNSentry.fetchNativeSdkInfo(), done: true };
                return obj5;
              } else {
                throw self._NativeClientError;
              }
            } else {
              throw self._DisabledNativeError;
            }
          } catch (tmp3) {
            c1 = 3;
            throw tmp3;
          }
        }
      })();
    });
  },
  fetchNativeDeviceContexts() {
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else if (self.enableNative) {
              if (self._isModuleLoaded(RNSentry)) {
                c1 = 3;
                const obj5 = { value: RNSentry.fetchNativeDeviceContexts(), done: true };
                return obj5;
              } else {
                throw self._NativeClientError;
              }
            } else {
              throw self._DisabledNativeError;
            }
          } catch (tmp3) {
            c1 = 3;
            throw tmp3;
          }
        }
      })();
    });
  },
  fetchNativeAppStart() {
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              let tmp6;
              if (self.enableNative) {
                let nativeAppStart;
                if (self._isModuleLoaded(RNSentry)) {
                  nativeAppStart = RNSentry.fetchNativeAppStart();
                } else {
                  const debug2 = _mod693.debug;
                  debug2.error(self._NativeClientError);
                  nativeAppStart = null;
                }
                tmp6 = nativeAppStart;
              } else {
                const debug = _mod693.debug;
                debug.warn(self._DisabledNativeError);
                tmp6 = null;
              }
              c1 = 3;
              return { value: tmp6, done: true };
            }
          } catch (tmp11) {
            c1 = 3;
            throw tmp11;
          }
        }
      })();
    });
  },
  fetchNativeFrames() {
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else if (self.enableNative) {
              if (self._isModuleLoaded(RNSentry)) {
                c1 = 3;
                const obj5 = { value: RNSentry.fetchNativeFrames(), done: true };
                return obj5;
              } else {
                throw self._NativeClientError;
              }
            } else {
              throw self._DisabledNativeError;
            }
          } catch (tmp3) {
            c1 = 3;
            throw tmp3;
          }
        }
      })();
    });
  },
  nativeCrash() {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        RNSentry.crash();
      } else {
        throw self._NativeClientError;
      }
    }
  },
  setUser(arg0) {
    let email;
    let geo;
    let id;
    let ip_address;
    let username;
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        let _serializeObjectResult1 = null;
        let _serializeObjectResult = null;
        if (arg0) {
          ({ id, ip_address, email, username, geo } = arg0);
          const user = { id, ip_address, email, username, geo };
          const tmp5 = closure_5(arg0, ["id", "ip_address", "email", "username", "geo"]);
          _serializeObjectResult = self._serializeObject(user);
          _serializeObjectResult1 = self._serializeObject(tmp5);
        }
        RNSentry.setUser(_serializeObjectResult, _serializeObjectResult1);
      } else {
        throw self._NativeClientError;
      }
    }
  },
  setTag(arg0, str) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        let json = str;
        if (typeof str !== "string") {
          const _JSON = JSON;
          json = JSON.stringify(str);
        }
        RNSentry.setTag(arg0, json);
      } else {
        throw self._NativeClientError;
      }
    }
  },
  setExtra(arg0, str) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        if (typeof str === "string") {
          return RNSentry.setExtra(arg0, str);
        } else if (undefined === str) {
          return RNSentry.setExtra(arg0, "undefined");
        } else {
          let json;
          let setExtraResult;
          try {
            const normalizer = _mod693;
            const _JSON = JSON;
            json = JSON.stringify(normalizer.normalize(str));
          } catch (tmp7) {
            const debug = _mod693.debug;
            debug.error("Extra for key ${key} not passed to native SDK, because it contains non-stringifiable values", tmp7);
          }
          if (typeof json === "string") {
            setExtraResult = RNSentry.setExtra(arg0, json);
          } else {
            setExtraResult = RNSentry.setExtra(arg0, "**non-stringifiable**");
          }
          return setExtraResult;
        }
      } else {
        throw self._NativeClientError;
      }
    }
  },
  addBreadcrumb(level) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        const _Object2 = Object;
        const addBreadcrumb = RNSentry.addBreadcrumb;
        const _Object = Object;
        let _processLevelResult;
        const merged = Object.assign({}, level);
        if (level.level) {
          _processLevelResult = self._processLevel(level.level);
        }
        obj = { level: _processLevelResult };
        addBreadcrumb(assign(merged, obj));
      } else {
        throw self._NativeClientError;
      }
    }
  },
  clearBreadcrumbs() {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        RNSentry.clearBreadcrumbs();
      } else {
        throw self._NativeClientError;
      }
    }
  },
  setContext(arg0, data) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        if (null === data) {
          return RNSentry.setContext(arg0, null);
        } else {
          let result;
          try {
            const obj2 = convertToNormalizedObject;
            result = obj2.convertToNormalizedObject(data);
          } catch (tmp7) {
            const debug = _mod693.debug;
            debug.error("Context for key ${key} not passed to native SDK, because it contains non-serializable values", tmp7);
          }
          const setContext = RNSentry.setContext;
          if (result) {
            setContext(arg0, result);
          } else {
            setContext(arg0, { error: "**non-serializable**" });
          }
        }
      } else {
        throw self._NativeClientError;
      }
    }
  },
  closeNativeSdk() {
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*(arg0) {
        let closeNativeSdkResult;
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              let closure_0 = self;
              if (self.enableNative) {
                if (self._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  const obj5 = {
                    value: closeNativeSdkResult.then(() => {
                                closure_0.enableNative = false;
                              }),
                    done: true
                  };
                  closeNativeSdkResult = RNSentry.closeNativeSdk();
                  return obj5;
                }
              }
              c1 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp3) {
            c1 = 3;
            throw tmp3;
          }
        }
      })();
    });
  },
  disableNativeFramesTracking() {
    const self = this;
    const enableNative = this.enableNative && self._isModuleLoaded(RNSentry);
    if (enableNative) {
      const result = RNSentry.disableNativeFramesTracking();
    }
  },
  enableNativeFramesTracking() {
    const self = this;
    const enableNative = this.enableNative && self._isModuleLoaded(RNSentry);
    if (enableNative) {
      const result = RNSentry.enableNativeFramesTracking();
    }
  },
  isNativeAvailable() {
    return this._isModuleLoaded(RNSentry);
  },
  captureScreenshot() {
    return closure_4(this, undefined, undefined, function() {
      let closure_2;
      let closure_3;
      const self = this;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*(arg0) {
        enableNative = self.enableNative;
        if (!enableNative) {
          const debug2 = _mod693.debug;
          enableNative = debug2.warn(self._DisabledNativeError);
          return null;
        }
        enableNative = RNSentry;
        if (!self._isModuleLoaded(RNSentry)) {
          const debug3 = _mod693.debug;
          debug3.error(self._NativeClientError);
          return null;
        }
        enableNative = enableNative.captureScreenshot();
        yield enableNative;
        if (1 === tmp4) {
          c4 = 0;
          let closure_1 = closure_3;
          const debug = closure_130_0(closure_130_1[5]).debug;
          debug.warn("Failed to capture screenshot", closure_1);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          _self = value;
          c4 = 0;
        }
        enableNative = null;
        if (_self) {
          enableNative = _self.map((data) => {
            let uint8Array;
            obj = { data: uint8Array };
            const merged = Object.assign({}, data);
            uint8Array = new Uint8Array(data.data);
            return assign(merged, obj);
          });
        }
        return enableNative;
      })();
    });
  },
  fetchViewHierarchy() {
    return closure_4(this, undefined, undefined, function() {
      let closure_1;
      let self = this;
      let c2 = 0;
      let c3 = 0;
      return (function*() {
        if (!self.enableNative) {
          throw self._DisabledNativeError;
        }
        if (!self._isModuleLoaded(RNSentry)) {
          throw self._NativeClientError;
        }
        yield RNSentry.fetchViewHierarchy();
        let closure_0 = value;
        let uint8Array = null;
        if (closure_0) {
          const _Uint8Array = Uint8Array;
          self = this;
          const self2 = this;
          uint8Array = new Uint8Array(closure_0);
        }
        return uint8Array;
      })();
    });
  },
  startProfiling(arg0) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        const startProfilingResult = RNSentry.startProfiling(arg0);
        const started = startProfilingResult.started;
        const error = startProfilingResult.error;
        const debug = _mod693.debug;
        if (started) {
          debug.log("[NATIVE] Start Profiling");
        } else {
          debug.error("[NATIVE] Start Profiling Failed", error);
        }
        return started;
      } else {
        throw self._NativeClientError;
      }
    } else {
      throw self._DisabledNativeError;
    }
  },
  stopProfiling() {
    let androidProfile;
    let error;
    let profile;
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        ({ profile, androidProfile, error } = RNSentry.stopProfiling());
        RNSentry.stopProfiling();
        if (profile) {
          if (!error) {
            if (!androidProfile) {
              const debug = _mod693.debug;
              debug.warn("[NATIVE] Stop Profiling Failed: No Android Profile");
            }
            try {
              const _JSON = JSON;
              const obj2 = { hermesProfile: JSON.parse(profile), nativeProfile: tmp2, androidProfile };
              return obj2;
            } catch (tmp7) {
              const debug2 = _mod693.debug;
              debug2.error("[NATIVE] Failed to parse Hermes Profile JSON", tmp7);
              return null;
            }
          }
        }
        const debug3 = _mod693.debug;
        debug3.error("[NATIVE] Stop Profiling Failed", error);
        return null;
      } else {
        throw self._NativeClientError;
      }
    } else {
      throw self._DisabledNativeError;
    }
  },
  fetchNativePackageName() {
    const self = this;
    const enableNative = this.enableNative && self._isModuleLoaded(RNSentry) && RNSentry.fetchNativePackageName() || null;
    return enableNative;
  },
  fetchNativeStackFramesBy(stackReturnAddresses) {
    const self = this;
    const enableNative = this.enableNative && self._isModuleLoaded(RNSentry) && RNSentry.fetchNativeStackFramesBy(stackReturnAddresses) || null;
    return enableNative;
  },
  initNativeReactNavigationNewFrameTracking() {
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              if (self.enableNative) {
                if (self._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  const obj5 = { value: RNSentry.initNativeReactNavigationNewFrameTracking(), done: true };
                  return obj5;
                }
              }
              c1 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp3) {
            c1 = 3;
            throw tmp3;
          }
        }
      })();
    });
  },
  captureReplay(arg0) {
    let closure_0 = arg0;
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c2 = 0;
      let c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let resolved;
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                return { value, done: true };
              } else {
                let resolved1;
                if (self.enableNative) {
                  if (self._isModuleLoaded(closure_1_6)) {
                    c2 = 1;
                    c1 = 1;
                    const obj5 = { value: closure_1_6.captureReplay(closure_0), done: false };
                    return obj5;
                  } else {
                    const debug2 = self(c1[5]).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.warn("[NATIVE] `" + self.captureReplay.name + "` is not available when native is not available.");
                    resolved = Promise.resolve(null);
                  }
                } else {
                  const debug = self(c1[5]).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("[NATIVE] `" + self.captureReplay.name + "` is not available when native is disabled.");
                  resolved1 = Promise.resolve(null);
                }
                c1 = 3;
                return { value: resolved1, done: true };
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              resolved = value || null;
            }
            resolved1 = resolved;
          } catch (tmp17) {
            c1 = 3;
            throw tmp17;
          }
        }
      })();
    });
  },
  getCurrentReplayId() {
    let tmp5;
    const self = this;
    if (this.enableNative) {
      let tmp10;
      if (self._isModuleLoaded(RNSentry)) {
        tmp10 = RNSentry.getCurrentReplayId() || null;
        RNSentry.getCurrentReplayId() || null;
      } else {
        const debug2 = _mod693.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.warn("[NATIVE] `" + self.getCurrentReplayId.name + "` is not available when native is not available.");
        tmp10 = null;
      }
      tmp5 = tmp10;
    } else {
      const debug = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug.warn("[NATIVE] `" + self.getCurrentReplayId.name + "` is not available when native is disabled.");
      tmp5 = null;
    }
    return tmp5;
  },
  crashedLastRun() {
    return closure_4(this, undefined, undefined, function() {
      let closure_1;
      const self = this;
      let c2 = 0;
      let c3 = 0;
      return (function*() {
        if (!self.enableNative) {
          return null;
        }
        if (!self._isModuleLoaded(RNSentry)) {
          return null;
        }
        yield RNSentry.crashedLastRun();
        let closure_0 = value;
        let tmp7 = null;
        if (typeof closure_0 === "boolean") {
          tmp7 = closure_0;
        }
        return tmp7;
      })();
    });
  },
  getNewScreenTimeToDisplay() {
    const self = this;
    if (this.enableNative) {
      let newScreenTimeToDisplay;
      if (self._isModuleLoaded(RNSentry)) {
        newScreenTimeToDisplay = RNSentry.getNewScreenTimeToDisplay();
      }
      return newScreenTimeToDisplay;
    }
    newScreenTimeToDisplay = Promise.resolve(null);
  },
  getDataFromUri(arg0) {
    let closure_0 = arg0;
    return closure_4(this, undefined, undefined, function() {
      let self = this;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                closure_0 = undefined;
                const obj3 = self;
                if (self.enableNative) {
                  const obj4 = c6;
                  if (obj3._isModuleLoaded(c6)) {
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    const obj6 = { value: obj4.getDataFromUri(closure_0), done: false };
                    return obj6;
                  }
                }
                c6 = 3;
                return { value: null, done: true };
              }
            } else if (1 === c5) {
              c4 = 0;
              closure_1 = closure_3;
              const debug = self(closure_1[5]).debug;
              debug.error("Error:", closure_1);
              c6 = 3;
              return { value: null, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              closure_0 = value;
              const _Uint8Array = Uint8Array;
              self = this;
              const self2 = this;
              const uint8Array = new Uint8Array(closure_0);
              c4 = 0;
              c6 = 3;
              return { value: uint8Array, done: true };
            }
          } catch (tmp18) {
            closure_3 = tmp18;
            if (0 === c4) {
              c6 = 3;
              throw tmp18;
            } else {
              c5 = 1;
            }
          }
        }
      })();
    });
  },
  popTimeToDisplayFor(arg0) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        try {
          return RNSentry.popTimeToDisplayFor(arg0);
        } catch (tmp2) {
          const debug = _mod693.debug;
          debug.error("Error:", tmp2);
          return Promise.resolve(null);
        }
      }
    }
    return Promise.resolve(null);
  },
  setActiveSpanId(spanId) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        try {
          RNSentry.setActiveSpanId(spanId);
        } catch (tmp3) {
          const debug = _mod693.debug;
          debug.error("Error:", tmp3);
        }
      }
    }
  },
  encodeToBase64(data) {
    let closure_0 = data;
    return closure_4(this, undefined, undefined, function() {
      const self = this;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                if (self.enableNative) {
                  const obj4 = c6;
                  if (self._isModuleLoaded(c6)) {
                    c4 = 1;
                    const _Array = Array;
                    c5 = 2;
                    c6 = 1;
                    const obj5 = { value: obj4.encodeToBase64(Array.from(closure_0)), done: false };
                    return obj5;
                  }
                }
                c6 = 3;
                const obj6 = { value: Promise.resolve(null), done: true };
                return obj6;
              }
            } else if (1 === c5) {
              c4 = 0;
              closure_0 = closure_3;
              const debug = self(closure_1[5]).debug;
              debug.error("Error:", closure_0);
              c6 = 3;
              const obj7 = { value: Promise.resolve(null), done: true };
              return obj7;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              c4 = 0;
              c6 = 3;
              return { value: value || null, done: true };
            }
          } catch (tmp15) {
            closure_3 = tmp15;
            if (0 === c4) {
              c6 = 3;
              throw tmp15;
            } else {
              c5 = 1;
            }
          }
        }
      })();
    });
  },
  primitiveProcessor(arg0) {
    return arg0;
  },
  _processItem(arg0) {
    let first;
    let message;
    let tmp3;
    [first, tmp3] = arg0;
    if ("event" != first.type) {
      if ("transaction" != first.type) {
        return arg0;
      }
    }
    const _processLevelsResult = this._processLevels(tmp3);
    const tmp5 = "android" === message.platform && "message" in _processLevelsResult;
    if (tmp5) {
      message = { message: _processLevelsResult.message };
      _processLevelsResult.message = message;
    }
    const items = [first, _processLevelsResult];
    return items;
  },
  _serializeObject(user) {
    obj = {};
    const keys = Object.keys(user);
    const item = keys.forEach((item) => {
      let json = tmp;
      if (typeof user[item] !== "string") {
        const _JSON = JSON;
        json = JSON.stringify(tmp);
      }
      obj[item] = json;
    });
    return obj;
  },
  _processLevels(level) {
    let mapped;
    const self = this;
    let _Object = Object;
    let _processLevelResult;
    let merged = Object.assign({}, level);
    if (level.level) {
      _processLevelResult = self._processLevel(level.level);
    }
    const breadcrumbs = level.breadcrumbs;
    obj = { level: _processLevelResult, breadcrumbs: mapped };
    mapped = undefined;
    if (null !== breadcrumbs) {
      if (undefined !== breadcrumbs) {
        mapped = breadcrumbs.map((level) => {
          const _Object = Object;
          level = undefined;
          const merged = Object.assign({}, level);
          if (level.level) {
            level = self._processLevel(level.level);
          }
          return assign(merged, { level });
        });
      }
    }
    return assign(merged, obj);
  },
  _processLevel(level) {
    let str = "debug";
    if ("log" != level) {
      str = level;
    }
    return str;
  },
  _isModuleLoaded(RNSentry) {
    return RNSentry;
  },
  _setPrimitiveProcessor(primitiveProcessor) {
    this.primitiveProcessor = primitiveProcessor;
  },
  _DisabledNativeError: sentryError,
  _NativeClientError: sentryError1,
  enableNative: true,
  nativeIsReady: false,
  platform: "android"
};
sentryError = new _mod693.SentryError("Native is disabled");
sentryError1 = new _mod693.SentryError("Native Client is not available, can't start on native.");

export { getRNSentryModule };
export { NATIVE };
export const getDataFromUri = function getDataFromUri(arg0) {
  let closure_0 = arg0;
  return closure_4(this, undefined, undefined, function*() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c0 = 3;
          obj = { value: dataFromUri.getDataFromUri(closure_0), done: true };
          return obj;
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
};