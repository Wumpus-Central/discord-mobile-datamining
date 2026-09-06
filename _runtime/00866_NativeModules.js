// === Module 866: NativeModules ===

// Module 866 (NativeModules)
import _mod682 from "module_682" /* 682 */;
import TurboModuleRegistry2 from "TurboModuleRegistry" /* 862 */;
import convertToNormalizedObject from "convertToNormalizedObject" /* 879 */;
import _slicedToArray from "module_32" /* 32 */;

let self = this;
require = fn;
get_ActivityIndicator = fn(17);
const NativeModules = get_ActivityIndicator.NativeModules;
fn = this;
if (this) {
  fn = self.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn, arg1) => {
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
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
let fn2 = self;
if (self) {
  fn2 = self.__rest;
}
if (!fn2) {
  fn2 = (obj, arr) => {
    obj = {};
    for (const key10007 in arg0) {
      let _Object2 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call2 = hasOwnProperty.call;
      if (typeof call2 === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10007);
      } else {
        hasOwnPropertyResult = call2(arg0, key10007);
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = arg1.indexOf(key10007) < 0;
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        obj[key10007] = arg0[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object3 = Object;
      if (typeof Object.getOwnPropertySymbols === "function") {
        const _Object4 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        let num = 0;
        if (0 < ownPropertySymbols.length) {
          const tmp2 = arr.indexOf(ownPropertySymbols[num]) < 0;
          while (!tmp2) {
            if (tmp2) {
              obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
            }
            num = num + 1;
          }
          const _Object = Object;
          const call = propertyIsEnumerable.call;
          typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols[num]) : call(obj, ownPropertySymbols[num]);
        }
      }
    }
    return obj;
  };
}
let module_867 = fn(867);
if (module_867.isTurboModuleEnabled()) {
  let TurboModuleRegistry = fn(862).ReactNativeLibraries.TurboModuleRegistry;
  let value;
  if (null !== TurboModuleRegistry) {
    if (undefined !== TurboModuleRegistry) {
      value = TurboModuleRegistry.get("RNSentry");
    }
  }
  let RNSentry = value;
} else {
  RNSentry = NativeModules.RNSentry;
}
function getRNSentryModule() {
  if (obj.isTurboModuleEnabled()) {
    const TurboModuleRegistry = TurboModuleRegistry2.ReactNativeLibraries.TurboModuleRegistry;
    value = undefined;
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
const encodeUTF8 = fn(869);
let closure_7 = encodeUTF8.encodeUTF8("\n");
module_867 = {
  fetchModules() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c2 = 0;
      c3 = 0;
      return (function*() {
        closure_1 = tmp2;
        if (!self.enableNative) {
          throw obj2._DisabledNativeError;
        }
        if (!self._isModuleLoaded(RNSentry)) {
          throw obj2._NativeClientError;
        }
        yield RNSentry.fetchModules();
        closure_129_0 = value;
        let parsed = null;
        if (closure_129_0) {
          const _JSON = JSON;
          parsed = JSON.parse(closure_129_0);
        }
        return parsed;
      })();
    });
  },
  sendEnvelope(arg0) {
    closure_0 = arg0;
    return fn(this, undefined, undefined, function() {
      const self = this;
      c4 = 0;
      c3 = 0;
      c6 = 0;
      return (function*(arg0) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
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
            c3 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else if (self.enableNative) {
                if (self._isModuleLoaded(c6)) {
                  let tmp13 = closure_2(closure_0, 2);
                  let tmp14 = tmp13[1];
                  let _JSON = JSON;
                  let json = JSON.stringify(tmp13[0]);
                  let obj1 = self(closure_1[4]);
                  let encodeUTF8Result = obj1.encodeUTF8(json);
                  let _Uint8Array = Uint8Array;
                  let tmp19 = new.target;
                  let tmp20 = new.target;
                  let uint8Array = new Uint8Array(encodeUTF8Result.length + closure_1_7.length);
                  let arr2 = uint8Array;
                  let result = uint8Array.set(encodeUTF8Result);
                  let result1 = uint8Array.set(closure_1_7, encodeUTF8Result.length);
                  closure_2 = tmp14;
                  closure_1 = tmp14[Symbol.iterator]();
                  let flag = false;
                  while (closure_1 !== undefined) {
                    c6 = 1;
                    let tmp56 = closure_2(self._processItem(tmp26), 2);
                    [tmp57, tmp58] = tmp56;
                    if (typeof tmp58 === "string") {
                      let obj6 = self(closure_1[4]);
                      let encodeUTF8Result1 = obj6.encodeUTF8(tmp58);
                      let str = "text/plain";
                      let isHardCrashResult = flag;
                    } else {
                      let _Uint8Array3 = Uint8Array;
                      let content_type = tmp57.content_type;
                      if (tmp58 instanceof Uint8Array) {
                        let str2 = "application/octet-stream";
                        if (typeof content_type === "string") {
                          str2 = tmp57.content_type;
                        }
                        str = str2;
                        encodeUTF8Result1 = tmp58;
                        isHardCrashResult = flag;
                      } else {
                        str = "application/json";
                        if (typeof content_type === "string") {
                          str = tmp57.content_type;
                        }
                        let obj4 = self(closure_1[4]);
                        let _JSON2 = JSON;
                        encodeUTF8Result1 = obj4.encodeUTF8(JSON.stringify(tmp58));
                        isHardCrashResult = flag;
                        if (!flag) {
                          let obj5 = self(closure_1[6]);
                          isHardCrashResult = obj5.isHardCrash(tmp58);
                        }
                      }
                    }
                    tmp57.content_type = str;
                    tmp57.length = encodeUTF8Result1.length;
                    let _JSON3 = JSON;
                    let json1 = JSON.stringify(tmp57);
                    let obj7 = self(closure_1[4]);
                    let encodeUTF8Result2 = obj7.encodeUTF8(json1);
                    let _Uint8Array2 = Uint8Array;
                    let tmp40 = new.target;
                    let tmp41 = new.target;
                    let uint8Array1 = new Uint8Array(arr2.length + encodeUTF8Result2.length + closure_1_7.length + encodeUTF8Result1.length + closure_1_7.length);
                    let result2 = uint8Array1.set(arr2);
                    let result3 = uint8Array1.set(encodeUTF8Result2, arr2.length);
                    let result4 = uint8Array1.set(closure_1_7, arr2.length + encodeUTF8Result2.length);
                    let result5 = uint8Array1.set(encodeUTF8Result1, arr2.length + encodeUTF8Result2.length + closure_1_7.length);
                    let result6 = uint8Array1.set(closure_1_7, arr2.length + encodeUTF8Result2.length + closure_1_7.length + encodeUTF8Result1.length);
                    c6 = 0;
                    flag = isHardCrashResult;
                    arr2 = uint8Array1;
                    continue;
                  }
                  let obj9 = self(closure_1[7]);
                  obj1 = { hardCrashed: flag };
                  c4 = 2;
                  c3 = 1;
                  let obj2 = { value: c6.captureEnvelope(obj9.base64StringFromByteArray(arr2), obj1), done: false };
                  return obj2;
                } else {
                  throw self._NativeClientError;
                }
              } else {
                let debug = self(closure_1[5]).debug;
                let warnResult = debug.warn("Event was skipped as native SDK is not enabled.");
              }
            } else if (1 === tmp3) {
              c6 = 0;
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
            return { value: "HermesInternal", done: null };
          }
        }
      })();
    });
  },
  initNativeSdk(arg0) {
    closure_0 = arg0;
    return fn(this, undefined, undefined, function() {
      const self = this;
      c3 = 0;
      c4 = 0;
      return (function*() {
        closure_2 = self;
        const _Object3 = Object;
        const merged = Object.assign({ enableNative: true, autoInitializeNativeSdk: true }, _self);
        if (undefined !== _self.enableLogs) {
          let enableLogs = _self.enableLogs;
          if (enableLogs) {
            enableLogs = "js" !== _self.logsOrigin;
          }
          let obj2 = { enableLogs };
        } else {
          obj2 = {};
        }
        const merged1 = Object.assign(merged, obj2);
        if (!merged1.enableNative) {
          if (merged1.enableNativeNagger) {
            const debug = self(tmp2[5]).debug;
            debug.warn("Note: Native Sentry SDK is disabled.");
          }
          self.enableNative = false;
          return false;
        }
        if (!merged1.autoInitializeNativeSdk) {
          if (merged1.enableNativeNagger) {
            const debug2 = self(tmp2[5]).debug;
            debug2.warn("Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false");
          }
          self.enableNative = true;
          return false;
        }
        if (!merged1.dsn) {
          const debug3 = self(tmp2[5]).debug;
          debug3.warn("Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.");
          self.enableNative = false;
          return false;
        }
        if (!self._isModuleLoaded(closure_1_6)) {
          throw self._NativeClientError;
        }
        ignoreErrors = merged1.ignoreErrors;
        if (null !== ignoreErrors) {
          if (undefined !== ignoreErrors) {
            const found = ignoreErrors.filter((item) => typeof item === "string");
          }
        }
        const ignoreErrors1 = merged1.ignoreErrors;
        if (null !== ignoreErrors1) {
          if (undefined !== ignoreErrors1) {
            const found1 = ignoreErrors1.filter((item) => item instanceof RegExp);
            const mapped = found1.map((source) => source.source);
          }
        }
        let tmp22 = found;
        if (found) {
          tmp22 = found.length > 0;
        }
        if (tmp22) {
          merged1.ignoreErrorsStr = found;
        }
        let tmp23 = mapped;
        if (mapped) {
          tmp23 = mapped.length > 0;
        }
        if (tmp23) {
          merged1.ignoreErrorsRegex = mapped;
        }
        ({ beforeSend, beforeBreadcrumb, beforeSendTransaction, beforeSendMetric, integrations, ignoreErrors, logsOrigin, androidProfilingOptions } = merged1);
        const tmp25 = closure_1_5(merged1, ["beforeSend", "beforeBreadcrumb", "beforeSendTransaction", "beforeSendMetric", "integrations", "ignoreErrors", "logsOrigin", "androidProfilingOptions"]);
        if (androidProfilingOptions) {
          const _Object = Object;
          const _Object2 = Object;
          tmp25._experiments = Object.assign(Object.assign({}, tmp25._experiments), { androidProfilingOptions });
        }
        yield closure_1_6.initNativeSdk(tmp25);
        closure_129_0 = value;
        closure_2.nativeIsReady = closure_129_0;
        closure_2.enableNative = true;
        return closure_129_0;
      })();
    });
  },
  fetchNativeLogAttributes() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = RNSentry;
                if (obj._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1.value = obj1.fetchNativeLogAttributes();
                  return obj1;
                } else {
                  throw obj._NativeClientError;
                }
              } else {
                throw obj._DisabledNativeError;
              }
            }
          } catch (tmp4) {
            c1 = tmp;
            throw tmp4;
          }
        }
      })();
    });
  },
  fetchNativeRelease() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = RNSentry;
                if (obj._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1.value = obj1.fetchNativeRelease();
                  return obj1;
                } else {
                  throw obj._NativeClientError;
                }
              } else {
                throw obj._DisabledNativeError;
              }
            }
          } catch (tmp4) {
            c1 = tmp;
            throw tmp4;
          }
        }
      })();
    });
  },
  fetchNativeSdkInfo() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = RNSentry;
                if (obj._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1.value = obj1.fetchNativeSdkInfo();
                  return obj1;
                } else {
                  throw obj._NativeClientError;
                }
              } else {
                throw obj._DisabledNativeError;
              }
            }
          } catch (tmp4) {
            c1 = tmp;
            throw tmp4;
          }
        }
      })();
    });
  },
  fetchNativeDeviceContexts() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = RNSentry;
                if (obj._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1.value = obj1.fetchNativeDeviceContexts();
                  return obj1;
                } else {
                  throw obj._NativeClientError;
                }
              } else {
                throw obj._DisabledNativeError;
              }
            }
          } catch (tmp4) {
            c1 = tmp;
            throw tmp4;
          }
        }
      })();
    });
  },
  fetchNativeAppStart() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (!self.enableNative) {
                const debug = _mod682.debug;
                debug.warn(self._DisabledNativeError);
                c1 = 3;
              }
              obj = RNSentry;
              if (self._isModuleLoaded(RNSentry)) {
                let nativeAppStart = obj.fetchNativeAppStart();
              } else {
                const debug2 = _mod682.debug;
                debug2.error(self._NativeClientError);
                nativeAppStart = null;
              }
            }
          } catch (tmp13) {
            c1 = tmp;
            throw tmp13;
          }
        }
      })();
    });
  },
  fetchNativeFrames() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = RNSentry;
                if (obj._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1.value = obj1.fetchNativeFrames();
                  return obj1;
                } else {
                  throw obj._NativeClientError;
                }
              } else {
                throw obj._DisabledNativeError;
              }
            }
          } catch (tmp4) {
            c1 = tmp;
            throw tmp4;
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
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        let _serializeObjectResult1 = null;
        let _serializeObjectResult = null;
        if (arg0) {
          ({ id, ip_address, email, username, geo } = arg0);
          const user = { id, ip_address, email, username, geo };
          _serializeObjectResult = self._serializeObject(user);
          _serializeObjectResult1 = self._serializeObject(fn2(arg0, ["id", "ip_address", "email", "username", "geo"]));
          const tmp5 = fn2(arg0, ["id", "ip_address", "email", "username", "geo"]);
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
          try {
            const normalizer = _mod682;
            const _JSON = JSON;
            const json = JSON.stringify(normalizer.normalize(str));
            if (typeof json === "string") {
              let setExtraResult = RNSentry.setExtra(arg0, json);
            } else {
              setExtraResult = RNSentry.setExtra(arg0, "**non-stringifiable**");
            }
            return setExtraResult;
          } catch (tmp8) {
            const debug = _mod682.debug;
            debug.error("Extra for key ${key} not passed to native SDK, because it contains non-stringifiable values", tmp8);
          }
        }
      } else {
        throw self._NativeClientError;
      }
    }
  },
  addBreadcrumb(level) {
    const self = this;
    if (this.enableNative) {
      let obj = RNSentry;
      if (self._isModuleLoaded(RNSentry)) {
        const _Object = Object;
        let _processLevelResult;
        const merged = Object.assign({}, level);
        if (level.level) {
          _processLevelResult = self._processLevel(level.level);
        }
        obj = { level: _processLevelResult };
        obj.addBreadcrumb(Object.assign(merged, obj));
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
          try {
            const result = convertToNormalizedObject.convertToNormalizedObject(data);
            const setContext = RNSentry.setContext;
            if (result) {
              setContext(arg0, result);
            } else {
              setContext(arg0, { error: "**non-serializable**" });
            }
          } catch (tmp8) {
            const debug = _mod682.debug;
            debug.error("Context for key ${key} not passed to native SDK, because it contains non-serializable values", tmp8);
          }
        }
      } else {
        throw self._NativeClientError;
      }
    }
  },
  closeNativeSdk() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              obj = self;
              closure_0 = self;
              if (self.enableNative) {
                let obj1 = RNSentry;
                if (obj._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1.value = obj1.closeNativeSdk().then(() => {
                    closure_0.enableNative = false;
                  });
                  return obj1;
                }
              }
              c1 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp4) {
            c1 = tmp;
            throw tmp4;
          }
        }
      })();
    });
  },
  disableNativeFramesTracking() {
    const self = this;
    let enableNative = this.enableNative;
    if (enableNative) {
      enableNative = self._isModuleLoaded(RNSentry);
    }
    if (enableNative) {
      const result = RNSentry.disableNativeFramesTracking();
    }
  },
  enableNativeFramesTracking() {
    const self = this;
    let enableNative = this.enableNative;
    if (enableNative) {
      enableNative = self._isModuleLoaded(RNSentry);
    }
    if (enableNative) {
      const result = RNSentry.enableNativeFramesTracking();
    }
  },
  isNativeAvailable() {
    return this._isModuleLoaded(RNSentry);
  },
  captureScreenshot() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function*(arg0) {
        closure_2 = tmp3;
        closure_1 = tmp5;
        if (!self.enableNative) {
          const debug2 = _mod682.debug;
          debug2.warn(self._DisabledNativeError);
          return null;
        }
        if (!self._isModuleLoaded(RNSentry)) {
          const debug3 = _mod682.debug;
          debug3.error(self._NativeClientError);
          return null;
        }
        yield RNSentry.captureScreenshot();
        if (1 === tmp8) {
          c4 = 0;
          closure_129_1 = closure_3;
          const debug = closure_130_0(closure_130_1[5]).debug;
          debug.warn("Failed to capture screenshot", closure_129_1);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          return { value, done: true };
        } else {
          closure_129_0 = value;
          c4 = 0;
        }
        let mapped = null;
        if (closure_129_0) {
          mapped = closure_129_0.map((data) => {
            const obj = { data: null };
            const merged = Object.assign({}, data);
            const uint8Array = new Uint8Array(data.data);
            obj.data = uint8Array;
            return Object.assign(merged, obj);
          });
        }
        return mapped;
      })();
    });
  },
  fetchViewHierarchy() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c2 = 0;
      c3 = 0;
      return (function*() {
        closure_1 = tmp2;
        if (!self.enableNative) {
          throw obj2._DisabledNativeError;
        }
        if (!self._isModuleLoaded(RNSentry)) {
          throw obj2._NativeClientError;
        }
        yield RNSentry.fetchViewHierarchy();
        closure_129_0 = value;
        let uint8Array = null;
        if (closure_129_0) {
          const _Uint8Array = Uint8Array;
          uint8Array = new Uint8Array(closure_129_0);
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
        const debug = _mod682.debug;
        if (started) {
          debug.log("[NATIVE] Start Profiling");
        } else {
          debug.error("[NATIVE] Start Profiling Failed", startProfilingResult.error);
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
    const self = this;
    if (this.enableNative) {
      let obj = RNSentry;
      if (self._isModuleLoaded(RNSentry)) {
        ({ profile, androidProfile, error } = obj.stopProfiling());
        if (profile) {
          if (!error) {
            if (!androidProfile) {
              const debug = _mod682.debug;
              debug.warn("[NATIVE] Stop Profiling Failed: No Android Profile");
            }
            try {
              obj = { hermesProfile: null, nativeProfile: null, androidProfile: null };
              const _JSON = JSON;
              obj.hermesProfile = JSON.parse(profile);
              obj.nativeProfile = tmp2;
              obj.androidProfile = androidProfile;
              return obj;
            } catch (tmp7) {
              const debug2 = _mod682.debug;
              debug2.error("[NATIVE] Failed to parse Hermes Profile JSON", tmp7);
              return null;
            }
          }
        }
        const debug3 = _mod682.debug;
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
    let enableNative = this.enableNative;
    if (enableNative) {
      enableNative = self._isModuleLoaded(RNSentry);
    }
    if (enableNative) {
      enableNative = RNSentry.fetchNativePackageName();
    }
    if (!enableNative) {
      enableNative = null;
    }
    return enableNative;
  },
  fetchNativeStackFramesBy(stackReturnAddresses) {
    const self = this;
    let enableNative = this.enableNative;
    if (enableNative) {
      enableNative = self._isModuleLoaded(RNSentry);
    }
    if (enableNative) {
      enableNative = RNSentry.fetchNativeStackFramesBy(stackReturnAddresses);
    }
    if (!enableNative) {
      enableNative = null;
    }
    return enableNative;
  },
  initNativeReactNavigationNewFrameTracking() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
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
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = RNSentry;
                if (obj._isModuleLoaded(RNSentry)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1.value = obj1.initNativeReactNavigationNewFrameTracking();
                  return obj1;
                }
              }
              c1 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp4) {
            c1 = tmp;
            throw tmp4;
          }
        }
      })();
    });
  },
  captureReplay(isHardCrashResult) {
    closure_0 = isHardCrashResult;
    return fn(this, undefined, undefined, function() {
      const self = this;
      c2 = 0;
      c1 = 0;
      return (function*(arg0) {
        if (dependencyMap === 2) {
          dependencyMap = 3;
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
            dependencyMap = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                obj = { value, done: true };
                return obj;
              } else {
                if (!self.enableNative) {
                  const debug = self(682).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("[NATIVE] `" + self.captureReplay.name + "` is not available when native is disabled.");
                  const resolved = Promise.resolve(null);
                  dependencyMap = 3;
                }
                let obj1 = closure_1_6;
                if (self._isModuleLoaded(closure_1_6)) {
                  c2 = 1;
                  dependencyMap = 1;
                  obj1 = { value: null, done: false };
                  obj1.value = obj1.captureReplay(closure_0);
                  return obj1;
                } else {
                  const debug2 = self(682).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.warn("[NATIVE] `" + self.captureReplay.name + "` is not available when native is not available.");
                  let resolved1 = Promise.resolve(null);
                }
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 !== 2) {
              resolved1 = value;
              if (!value) {
                resolved1 = null;
              }
            }
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } catch (tmp19) {
            dependencyMap = tmp;
            throw tmp19;
          }
        }
      })();
    });
  },
  getCurrentReplayId() {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        const tmp10 = RNSentry.getCurrentReplayId() || null;
        const tmp11 = RNSentry.getCurrentReplayId() || null;
      } else {
        const debug2 = _mod682.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.warn("[NATIVE] `" + self.getCurrentReplayId.name + "` is not available when native is not available.");
      }
    } else {
      const debug = _mod682.debug;
      const _HermesInternal = HermesInternal;
      debug.warn("[NATIVE] `" + self.getCurrentReplayId.name + "` is not available when native is disabled.");
      return null;
    }
  },
  crashedLastRun() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      c2 = 0;
      c3 = 0;
      return (function*() {
        closure_1 = tmp2;
        if (!self.enableNative) {
          return null;
        }
        if (!self._isModuleLoaded(RNSentry)) {
          return null;
        }
        yield RNSentry.crashedLastRun();
        closure_129_0 = value;
        let tmp8 = null;
        if (typeof closure_129_0 === "boolean") {
          tmp8 = closure_129_0;
        }
        return tmp8;
      })();
    });
  },
  getNewScreenTimeToDisplay() {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        let newScreenTimeToDisplay = RNSentry.getNewScreenTimeToDisplay();
      }
      return newScreenTimeToDisplay;
    }
    newScreenTimeToDisplay = Promise.resolve(null);
  },
  getDataFromUri(arg0) {
    closure_0 = arg0;
    return fn(this, undefined, undefined, function() {
      const self = this;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
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
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let obj2 = self;
                closure_2 = tmp3;
                closure_1 = tmp7;
                closure_129_0 = undefined;
                if (self.enableNative) {
                  if (obj2._isModuleLoaded(c6)) {
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    const obj1 = { value: obj4.getDataFromUri(closure_0), done: false };
                    return obj1;
                  }
                  obj4 = c6;
                }
                c6 = 3;
                return { value: null, done: true };
              }
            } else if (1 === tmp7) {
              c4 = 0;
              closure_129_1 = closure_3;
              const debug = self(closure_1[5]).debug;
              debug.error("Error:", closure_129_1);
              c6 = 3;
              return { value: null, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj2 = { value, done: true };
              return obj2;
            } else {
              closure_129_0 = value;
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(closure_129_0);
              c4 = 0;
              c6 = 3;
              obj = { value: uint8Array, done: true };
              return obj;
            }
          } catch (tmp23) {
            closure_3 = tmp23;
            if (tmp4 === c4) {
              c6 = tmp2;
              throw tmp23;
            } else {
              c5 = tmp;
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
          const debug = _mod682.debug;
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
          const debug = _mod682.debug;
          debug.error("Error:", tmp3);
        }
      }
    }
  },
  encodeToBase64(data) {
    closure_0 = data;
    return fn(this, undefined, undefined, function() {
      const self = this;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
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
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp3;
                closure_1 = tmp7;
                if (self.enableNative) {
                  let obj3 = c6;
                  if (self._isModuleLoaded(c6)) {
                    c4 = 1;
                    const _Array = Array;
                    c5 = 2;
                    c6 = 1;
                    const obj1 = { value: obj3.encodeToBase64(Array.from(closure_0)), done: false };
                    return obj1;
                  }
                }
                c6 = 3;
                const obj2 = { value: Promise.resolve(null), done: true };
                return obj2;
              }
            } else if (1 === tmp7) {
              c4 = 0;
              closure_129_0 = closure_3;
              const debug = self(closure_1[5]).debug;
              debug.error("Error:", closure_129_0);
              c6 = 3;
              obj3 = { value: Promise.resolve(null), done: true };
              return obj3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp8 = value;
              if (!value) {
                tmp8 = null;
              }
              c4 = 0;
              c6 = 3;
              obj = { value: tmp8, done: true };
              return obj;
            }
          } catch (tmp18) {
            closure_3 = tmp18;
            if (tmp4 === c4) {
              c6 = tmp2;
              throw tmp18;
            } else {
              c5 = tmp;
            }
          }
        }
      })();
    });
  },
  primitiveProcessor(dependencyMap) {
    return dependencyMap;
  },
  _processItem(arg0) {
    const tmp = _slicedToArray(arg0, 2);
    const first = tmp[0];
    if ("event" != first.type) {
      if ("transaction" != first.type) {
        return arg0;
      }
    }
    const _processLevelsResult = this._processLevels(tmp[1]);
    let tmp4 = "android" === module_867.platform;
    if (tmp4) {
      tmp4 = "message" in _processLevelsResult;
    }
    if (tmp4) {
      const obj = { message: _processLevelsResult.message };
      _processLevelsResult.message = obj;
    }
    const items = [first, _processLevelsResult];
    return items;
  },
  _serializeObject(user) {
    const obj = {};
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
    const self = this;
    let _processLevelResult;
    let merged = Object.assign({}, level);
    if (level.level) {
      _processLevelResult = self._processLevel(level.level);
    }
    const obj = { level: _processLevelResult, breadcrumbs: null };
    const breadcrumbs = level.breadcrumbs;
    let mapped;
    if (null !== breadcrumbs) {
      if (undefined !== breadcrumbs) {
        mapped = breadcrumbs.map((level) => {
          level = undefined;
          const merged = Object.assign({}, level);
          if (level.level) {
            level = self._processLevel(level.level);
          }
          return Object.assign(merged, { level });
        });
      }
    }
    obj.breadcrumbs = mapped;
    return Object.assign(merged, obj);
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
  _DisabledNativeError: null,
  _NativeClientError: null,
  enableNative: true,
  nativeIsReady: false,
  platform: "android"
};
const sentryError = new fn(682).SentryError("Native is disabled");
module_867._DisabledNativeError = sentryError;
const sentryError1 = new fn(682).SentryError("Native Client is not available, can't start on native.");
module_867._NativeClientError = sentryError1;

export { getRNSentryModule };
export const NATIVE = module_867;
export const getDataFromUri = function getDataFromUri(arg0) {
  closure_0 = arg0;
  return fn(this, undefined, undefined, function*() {
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
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          obj = { value: dataFromUri.getDataFromUri(closure_0), done: true };
          return obj;
        }
      } catch (tmp6) {
        c0 = tmp;
        throw tmp6;
      }
    }
  });
};