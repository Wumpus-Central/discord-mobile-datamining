// _runtime/01001_NativeModules.js
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import isHermesEnabled from "isHermesEnabled";
import encodeUTF8 from "encodeUTF8";
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
import { TurboModuleRegistry } from "00997_TurboModuleRegistry.js";
import { convertToNormalizedObject } from "01014_convertToNormalizedObject.js";

let self = this;
const require = arg1;
const NativeModules = get_ActivityIndicator.NativeModules;
let fn = this;
if (this) {
  fn = self.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
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
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
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
      let tmp6 = key10007;
      let _Object2 = Object;
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
if (isHermesEnabled.isTurboModuleEnabled()) {
  let TurboModuleRegistry = require("TurboModuleRegistry").ReactNativeLibraries.TurboModuleRegistry;
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
    const TurboModuleRegistry = TurboModuleRegistry /* TurboModuleRegistry */.ReactNativeLibraries.TurboModuleRegistry;
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
  return RNSentry;
}
let closure_7 = encodeUTF8.encodeUTF8("\n");
isHermesEnabled = {
  fetchModules() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c2 = 0;
      let c3 = 0;
      return (function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let obj2 = _self;
                let closure_1 = tmp2;
                _self = undefined;
                if (_self.enableNative) {
                  if (obj2._isModuleLoaded(outer1_6)) {
                    c2 = 1;
                    c3 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = obj4.fetchModules();
                    return obj1;
                  } else {
                    throw obj2._NativeClientError;
                  }
                  obj4 = outer1_6;
                } else {
                  throw obj2._DisabledNativeError;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              _self = arg1;
              let parsed = null;
              if (_self) {
                const _JSON = JSON;
                parsed = JSON.parse(_self);
              }
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = parsed;
              return obj;
            }
          } catch (tmp11) {
            c3 = tmp;
            throw tmp11;
          }
        }
      })();
    });
  },
  sendEnvelope(arg0) {
    let closure_0 = arg0;
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c4 = 0;
      let c3 = 0;
      let c6 = 0;
      return (function*() {
        let tmp58;
        let tmp59;
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let num = 2;
            c3 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                let num7 = 3;
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num6 = 3;
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let obj14 = self;
                if (self.enableNative) {
                  let tmp10 = c6;
                  if (obj14._isModuleLoaded(c6)) {
                    let tmp11 = outer1_2;
                    let tmp12 = self;
                    let tmp13 = outer1_2(self, 2);
                    let tmp14 = tmp13[1];
                    let _JSON = JSON;
                    let tmp16 = self;
                    let tmp17 = outer1_1;
                    let json = JSON.stringify(tmp13[0]);
                    let obj1 = self(outer1_1[4]);
                    let encodeUTF8Result = obj1.encodeUTF8(json);
                    let _Uint8Array = Uint8Array;
                    let tmp18 = outer1_7;
                    let tmp19 = new.target;
                    let tmp20 = new.target;
                    let uint8Array = new Uint8Array(encodeUTF8Result.length + outer1_7.length);
                    let arr2 = uint8Array;
                    let result = uint8Array.set(encodeUTF8Result);
                    let result1 = uint8Array.set(outer1_7, encodeUTF8Result.length);
                    let _slicedToArray = tmp14;
                    let tmp23 = tmp14;
                    _slicedToArray = tmp14;
                    let closure_1 = tmp14[Symbol.iterator]();
                    let flag = false;
                    let tmp24 = _slicedToArray;
                    let tmp25 = closure_1;
                    let tmp27 = flag;
                    let tmp28 = arr2;
                    while (closure_1 !== undefined) {
                      c6 = 1;
                      let tmp56 = outer1_2;
                      let tmp57 = outer1_2(obj14._processItem(tmp26), 2);
                      [tmp58, tmp59] = tmp57;
                      if (typeof tmp59 === "string") {
                        let tmp34 = self;
                        let tmp35 = outer1_1;
                        let obj6 = self(outer1_1[4]);
                        let encodeUTF8Result1 = obj6.encodeUTF8(tmp59);
                        let str = "text/plain";
                        let isHardCrashResult = flag;
                      } else {
                        let _Uint8Array3 = Uint8Array;
                        let content_type = tmp58.content_type;
                        if (tmp59 instanceof Uint8Array) {
                          let str2 = "application/octet-stream";
                          if (typeof content_type === "string") {
                            str2 = tmp58.content_type;
                          }
                          str = str2;
                          encodeUTF8Result1 = tmp59;
                          isHardCrashResult = flag;
                        } else {
                          str = "application/json";
                          if (typeof content_type === "string") {
                            str = tmp58.content_type;
                          }
                          let tmp29 = self;
                          let tmp30 = outer1_1;
                          let obj4 = self(outer1_1[4]);
                          let _JSON2 = JSON;
                          encodeUTF8Result1 = obj4.encodeUTF8(JSON.stringify(tmp59));
                          isHardCrashResult = flag;
                          if (!flag) {
                            let tmp32 = self;
                            let tmp33 = outer1_1;
                            let obj5 = self(outer1_1[6]);
                            isHardCrashResult = obj5.isHardCrash(tmp59);
                          }
                        }
                      }
                      tmp58.content_type = str;
                      tmp58.length = encodeUTF8Result1.length;
                      let _JSON3 = JSON;
                      let tmp37 = self;
                      let tmp38 = outer1_1;
                      let json1 = JSON.stringify(tmp58);
                      let obj7 = self(outer1_1[4]);
                      let encodeUTF8Result2 = obj7.encodeUTF8(json1);
                      let _Uint8Array2 = Uint8Array;
                      let tmp39 = outer1_7;
                      let tmp40 = new.target;
                      let tmp41 = new.target;
                      let uint8Array1 = new Uint8Array(arr2.length + encodeUTF8Result2.length + outer1_7.length + encodeUTF8Result1.length + outer1_7.length);
                      let tmp42 = uint8Array1;
                      let result2 = uint8Array1.set(arr2);
                      let result3 = uint8Array1.set(encodeUTF8Result2, arr2.length);
                      let result4 = uint8Array1.set(outer1_7, arr2.length + encodeUTF8Result2.length);
                      let result5 = uint8Array1.set(encodeUTF8Result1, arr2.length + encodeUTF8Result2.length + outer1_7.length);
                      let result6 = uint8Array1.set(outer1_7, arr2.length + encodeUTF8Result2.length + outer1_7.length + encodeUTF8Result1.length);
                      c6 = 0;
                      flag = isHardCrashResult;
                      arr2 = uint8Array1;
                      continue;
                    }
                    let tmp48 = c6;
                    let tmp49 = self;
                    let tmp50 = outer1_1;
                    let obj9 = self(outer1_1[7]);
                    obj1 = { hardCrashed: null };
                    obj1[0] = flag;
                    c4 = 2;
                    let num5 = 1;
                    c3 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = c6.captureEnvelope(obj9.base64StringFromByteArray(arr2), obj1);
                    return obj2;
                  } else {
                    throw obj14._NativeClientError;
                  }
                } else {
                  let tmp7 = self;
                  let tmp8 = outer1_1;
                  let debug = self(outer1_1[5]).debug;
                  let warnResult = debug.warn("Event was skipped as native SDK is not enabled.");
                }
              }
            } else if (1 === tmp3) {
              let tmp4 = closure_5;
              let tmp5 = closure_5;
              c6 = 0;
              let tmp6 = closure_1;
              closure_1.return();
              throw closure_5;
            } else if (arg0 === 1) {
              let num3 = 3;
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num2 = 3;
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            let num4 = 3;
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      })();
    });
  },
  initNativeSdk(arg0) {
    let closure_0 = arg0;
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c3 = 0;
      let c4 = 0;
      return (function*() {
        let androidProfilingOptions;
        let beforeBreadcrumb;
        let beforeSend;
        let beforeSendMetric;
        let beforeSendTransaction;
        let ignoreErrors;
        let integrations;
        let logsOrigin;
        let _slicedToArray = closure_0;
        let closure_1 = tmp2;
        const _Object3 = Object;
        const merged = Object.assign({ enableNative: true, autoInitializeNativeSdk: true }, self);
        if (undefined !== self.enableLogs) {
          let enableLogs = tmp33.enableLogs;
          if (enableLogs) {
            enableLogs = "js" !== tmp33.logsOrigin;
          }
          const obj1 = { enableLogs: null };
          obj1[0] = enableLogs;
          let obj2 = obj1;
        } else {
          obj2 = {};
        }
        const merged1 = Object.assign(merged, obj2);
        if (!merged1.enableNative) {
          if (merged1.enableNativeNagger) {
            const debug = self(outer1_1[5]).debug;
            debug.warn("Note: Native Sentry SDK is disabled.");
          }
          obj10.enableNative = false;
          return false;
        }
        if (!merged1.autoInitializeNativeSdk) {
          if (merged1.enableNativeNagger) {
            const debug2 = self(outer1_1[5]).debug;
            debug2.warn("Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false");
          }
          obj10.enableNative = true;
          return false;
        }
        if (!merged1.dsn) {
          const debug3 = self(outer1_1[5]).debug;
          debug3.warn("Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.");
          obj10.enableNative = false;
          return false;
        }
        const obj4 = outer1_6;
        if (!obj10._isModuleLoaded(outer1_6)) {
          throw obj10._NativeClientError;
        }
        ignoreErrors = merged1.ignoreErrors;
        if (null !== ignoreErrors) {
          if (undefined !== ignoreErrors) {
            const found = ignoreErrors.filter((str) => typeof str === "string");
          }
        }
        const ignoreErrors1 = merged1.ignoreErrors;
        if (null !== ignoreErrors1) {
          if (undefined !== ignoreErrors1) {
            const found1 = ignoreErrors1.filter((arg0) => arg0 instanceof RegExp);
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
        const tmp25 = outer1_5(merged1, ["beforeSend", "beforeBreadcrumb", "beforeSendTransaction", "beforeSendMetric", "integrations", "ignoreErrors", "logsOrigin", "androidProfilingOptions"]);
        if (androidProfilingOptions) {
          const _Object = Object;
          const _Object2 = Object;
          const obj3 = { androidProfilingOptions: null };
          obj3[0] = androidProfilingOptions;
          tmp25._experiments = Object.assign(Object.assign({}, tmp25._experiments), obj3);
        }
        closure_0 = yield obj4.initNativeSdk(tmp25);
        _slicedToArray.nativeIsReady = closure_0;
        _slicedToArray.enableNative = true;
        return closure_0;
      })();
    });
  },
  fetchNativeLogAttributes() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*() {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = outer1_6;
                if (obj._isModuleLoaded(outer1_6)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = obj1.fetchNativeLogAttributes();
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
      let c1 = 0;
      return (function*() {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = outer1_6;
                if (obj._isModuleLoaded(outer1_6)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = obj1.fetchNativeRelease();
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
      let c1 = 0;
      return (function*() {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = outer1_6;
                if (obj._isModuleLoaded(outer1_6)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = obj1.fetchNativeSdkInfo();
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
      let c1 = 0;
      return (function*() {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = outer1_6;
                if (obj._isModuleLoaded(outer1_6)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = obj1.fetchNativeDeviceContexts();
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
      let c1 = 0;
      return (function*() {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            dependencyMap = 2;
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (!self.enableNative) {
                const debug = self(817).debug;
                debug.warn(obj4._DisabledNativeError);
                dependencyMap = 3;
              }
              obj = outer1_6;
              if (self._isModuleLoaded(outer1_6)) {
                let nativeAppStart = obj.fetchNativeAppStart();
              } else {
                const debug2 = self(817).debug;
                debug2.error(obj4._NativeClientError);
                nativeAppStart = null;
              }
            }
          } catch (tmp13) {
            dependencyMap = tmp;
            throw tmp13;
          }
        }
      })();
    });
  },
  fetchNativeFrames() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c1 = 0;
      return (function*() {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = outer1_6;
                if (obj._isModuleLoaded(outer1_6)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = obj1.fetchNativeFrames();
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
        obj.crash();
      } else {
        throw self._NativeClientError;
      }
      obj = RNSentry;
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
      let obj = RNSentry;
      if (self._isModuleLoaded(RNSentry)) {
        let _serializeObjectResult1 = null;
        let _serializeObjectResult = null;
        if (arg0) {
          ({ id, ip_address, email, username, geo } = arg0);
          obj = { id: null, ip_address: null, email: null, username: null, geo: null };
          obj[0] = id;
          obj[1] = ip_address;
          obj[2] = email;
          obj[3] = username;
          obj[4] = geo;
          _serializeObjectResult = self._serializeObject(obj);
          _serializeObjectResult1 = self._serializeObject(fn2(arg0, ["id", "ip_address", "email", "username", "geo"]));
          const tmp5 = fn2(arg0, ["id", "ip_address", "email", "username", "geo"]);
        }
        obj.setUser(_serializeObjectResult, _serializeObjectResult1);
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
        obj.setTag(arg0, json);
      } else {
        throw self._NativeClientError;
      }
      obj = RNSentry;
    }
  },
  setExtra(arg0, str) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        if (typeof str === "string") {
          return obj.setExtra(arg0, str);
        } else if (undefined === str) {
          return obj.setExtra(arg0, "undefined");
        } else {
          try {
            const _JSON = JSON;
            const json = JSON.stringify(registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.normalize(str));
            if (typeof json === "string") {
              let setExtraResult = obj.setExtra(arg0, json);
            } else {
              setExtraResult = obj.setExtra(arg0, "**non-stringifiable**");
            }
            return setExtraResult;
          } catch (tmp8) {
            const debug = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
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
        obj = { level: null };
        obj[0] = _processLevelResult;
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
        obj.clearBreadcrumbs();
      } else {
        throw self._NativeClientError;
      }
      obj = RNSentry;
    }
  },
  setContext(arg0, data) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        if (null === data) {
          return obj.setContext(arg0, null);
        } else {
          try {
            const result = convertToNormalizedObject /* convertToNormalizedObject */.convertToNormalizedObject(data);
            const setContext = obj.setContext;
            if (result) {
              setContext(arg0, result);
            } else {
              setContext(arg0, { error: "**non-serializable**" });
            }
            const obj2 = convertToNormalizedObject /* convertToNormalizedObject */;
          } catch (tmp8) {
            const debug = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
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
      let c1 = 0;
      return (function*() {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = _self;
              if (_self.enableNative) {
                let obj1 = outer1_6;
                if (obj._isModuleLoaded(outer1_6)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = obj1.closeNativeSdk().then(() => {
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
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*() {
        let _slicedToArray = tmp3;
        let table = tmp5;
        if (!_self.enableNative) {
          const debug2 = self(outer1_1[5]).debug;
          debug2.warn(obj7._DisabledNativeError);
          return null;
        }
        if (!obj7._isModuleLoaded(c6)) {
          const debug3 = self(outer1_1[5]).debug;
          debug3.error(obj7._NativeClientError);
          return null;
        }
        let c4 = 1;
        yield obj2.captureScreenshot();
        if (1 === tmp8) {
          c4 = 0;
          table = closure_3;
          const debug = _self(table[5]).debug;
          debug.warn("Failed to capture screenshot", table);
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          _self = arg1;
          c4 = 0;
        }
        let mapped = null;
        if (_self) {
          mapped = _self.map((data) => {
            const obj = { data: null };
            const merged = Object.assign({}, data);
            const uint8Array = new Uint8Array(data.data);
            obj[0] = uint8Array;
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
      let c2 = 0;
      let c3 = 0;
      return (function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let obj2 = _self;
                let closure_1 = tmp2;
                _self = undefined;
                if (_self.enableNative) {
                  if (obj2._isModuleLoaded(outer1_6)) {
                    c2 = 1;
                    c3 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = obj4.fetchViewHierarchy();
                    return obj1;
                  } else {
                    throw obj2._NativeClientError;
                  }
                  obj4 = outer1_6;
                } else {
                  throw obj2._DisabledNativeError;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              _self = arg1;
              let uint8Array = null;
              if (_self) {
                const _Uint8Array = Uint8Array;
                uint8Array = new Uint8Array(_self);
              }
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = uint8Array;
              return obj;
            }
          } catch (tmp13) {
            c3 = tmp;
            throw tmp13;
          }
        }
      })();
    });
  },
  startProfiling(arg0) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        const startProfilingResult = obj.startProfiling(arg0);
        const started = startProfilingResult.started;
        const debug = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
        if (started) {
          debug.log("[NATIVE] Start Profiling");
        } else {
          debug.error("[NATIVE] Start Profiling Failed", startProfilingResult.error);
        }
        return started;
      } else {
        throw self._NativeClientError;
      }
      obj = RNSentry;
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
      let obj = RNSentry;
      if (self._isModuleLoaded(RNSentry)) {
        ({ profile, androidProfile, error } = obj.stopProfiling());
        if (profile) {
          if (!error) {
            if (!androidProfile) {
              const debug = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
              debug.warn("[NATIVE] Stop Profiling Failed: No Android Profile");
            }
            try {
              obj = { hermesProfile: null, nativeProfile: null, androidProfile: null };
              const _JSON = JSON;
              obj[0] = JSON.parse(profile);
              obj[1] = tmp2;
              obj[2] = androidProfile;
              return obj;
            } catch (tmp7) {
              const debug2 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
              debug2.error("[NATIVE] Failed to parse Hermes Profile JSON", tmp7);
              return null;
            }
          }
        }
        const debug3 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
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
      let c1 = 0;
      return (function*() {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = self;
              if (self.enableNative) {
                let obj1 = outer1_6;
                if (obj._isModuleLoaded(outer1_6)) {
                  c1 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = obj1.initNativeReactNavigationNewFrameTracking();
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
    let closure_0 = isHardCrashResult;
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c2 = 0;
      let c1 = 0;
      return (function*() {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                if (!self.enableNative) {
                  const debug = self(817).debug;
                  const _HermesInternal = HermesInternal;
                  debug.warn("[NATIVE] `" + obj6.captureReplay.name + "` is not available when native is disabled.");
                  const resolved = Promise.resolve(null);
                  dependencyMap = 3;
                }
                let obj1 = outer1_6;
                if (self._isModuleLoaded(outer1_6)) {
                  c2 = 1;
                  dependencyMap = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.captureReplay(self);
                  return obj1;
                } else {
                  const debug2 = self(817).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.warn("[NATIVE] `" + obj6.captureReplay.name + "` is not available when native is not available.");
                  let resolved1 = Promise.resolve(null);
                }
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              resolved1 = arg1;
              if (!arg1) {
                resolved1 = null;
              }
            }
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
        let tmp10 = obj.getCurrentReplayId() || null;
        const tmp11 = obj.getCurrentReplayId() || null;
      } else {
        const debug2 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.warn("[NATIVE] `" + self.getCurrentReplayId.name + "` is not available when native is not available.");
        tmp10 = null;
      }
      obj = RNSentry;
    } else {
      const debug = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
      const _HermesInternal = HermesInternal;
      debug.warn("[NATIVE] `" + self.getCurrentReplayId.name + "` is not available when native is disabled.");
      return null;
    }
  },
  crashedLastRun() {
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c2 = 0;
      let c3 = 0;
      return (function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp2;
                let _self;
                if (_self.enableNative) {
                  let obj2 = outer1_6;
                  if (obj7._isModuleLoaded(outer1_6)) {
                    c2 = 1;
                    c3 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = obj2.crashedLastRun();
                    return obj1;
                  } else {
                    c3 = 3;
                    return { value: null, done: true };
                  }
                } else {
                  c3 = 3;
                  return { value: null, done: true };
                }
                obj7 = _self;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              _self = arg1;
              let tmp8 = null;
              if (typeof _self === "boolean") {
                tmp8 = _self;
              }
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = tmp8;
              return obj;
            }
          } catch (tmp9) {
            c3 = tmp;
            throw tmp9;
          }
        }
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
    let closure_0 = arg0;
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*() {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let obj2 = _self;
                let _slicedToArray = tmp3;
                let closure_1 = tmp7;
                _self = undefined;
                if (_self.enableNative) {
                  if (obj2._isModuleLoaded(c6)) {
                    let c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = obj4.getDataFromUri(self);
                    return obj1;
                  }
                  obj4 = c6;
                }
                c6 = 3;
                return { value: null, done: true };
              }
            } else if (1 === tmp7) {
              c4 = 0;
              closure_1 = closure_3;
              const debug = self(outer1_1[5]).debug;
              debug.error("Error:", closure_1);
              c6 = 3;
              return { value: null, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              _self = arg1;
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(_self);
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = uint8Array;
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
          return obj.popTimeToDisplayFor(arg0);
        } catch (tmp2) {
          const debug = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
          debug.error("Error:", tmp2);
          return Promise.resolve(null);
        }
      }
      obj = RNSentry;
    }
    return Promise.resolve(null);
  },
  setActiveSpanId(spanId) {
    const self = this;
    if (this.enableNative) {
      if (self._isModuleLoaded(RNSentry)) {
        try {
          obj.setActiveSpanId(spanId);
        } catch (tmp3) {
          const debug = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.debug;
          debug.error("Error:", tmp3);
        }
      }
      obj = RNSentry;
    }
  },
  encodeToBase64(data) {
    let closure_0 = data;
    return fn(this, undefined, undefined, function() {
      const self = this;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*() {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let _slicedToArray = tmp3;
                let closure_1 = tmp7;
                if (_self.enableNative) {
                  let obj3 = c6;
                  if (_self._isModuleLoaded(c6)) {
                    let c4 = 1;
                    const _Array = Array;
                    c5 = 2;
                    c6 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = obj3.encodeToBase64(Array.from(self));
                    return obj1;
                  }
                }
                c6 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = Promise.resolve(null);
                return obj2;
              }
            } else if (1 === tmp7) {
              c4 = 0;
              _self = closure_3;
              const debug = self(outer1_1[5]).debug;
              debug.error("Error:", _self);
              c6 = 3;
              obj3 = { value: null, done: true };
              obj3[0] = Promise.resolve(null);
              return obj3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              let tmp8 = arg1;
              if (!arg1) {
                tmp8 = null;
              }
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = tmp8;
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
  primitiveProcessor(arg0) {
    return arg0;
  },
  _processItem(arg0) {
    const tmp = callback(arg0, 2);
    const first = tmp[0];
    if ("event" != first.type) {
      if ("transaction" != first.type) {
        return arg0;
      }
    }
    const _processLevelsResult = this._processLevels(tmp[1]);
    let tmp4 = "android" === isHermesEnabled.platform;
    if (tmp4) {
      tmp4 = "message" in _processLevelsResult;
    }
    if (tmp4) {
      const obj = { message: null };
      obj[0] = _processLevelsResult.message;
      _processLevelsResult.message = obj;
    }
    const items = [first, _processLevelsResult];
    return items;
  },
  _serializeObject(arg0) {
    let closure_0 = arg0;
    const obj = {};
    const keys = Object.keys(arg0);
    const item = keys.forEach((arg0) => {
      let json = tmp;
      if (typeof table[arg0] !== "string") {
        const _JSON = JSON;
        json = JSON.stringify(tmp);
      }
      obj[arg0] = json;
    });
    return obj;
  },
  _processLevels(level) {
    let self = this;
    self = this;
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
    obj[1] = mapped;
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
const sentryError = new require("registerSpanErrorInstrumentation").SentryError("Native is disabled");
isHermesEnabled[42] = sentryError;
const sentryError1 = new require("registerSpanErrorInstrumentation").SentryError("Native Client is not available, can't start on native.");
isHermesEnabled[43] = sentryError1;

export { getRNSentryModule };
export const NATIVE = isHermesEnabled;
export const getDataFromUri = function getDataFromUri(arg0) {
  let closure_0 = arg0;
  return fn(this, undefined, undefined, function*() {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = outer1_8.getDataFromUri(c0);
          return obj;
        }
      } catch (tmp6) {
        c0 = tmp;
        throw tmp6;
      }
    }
  });
};