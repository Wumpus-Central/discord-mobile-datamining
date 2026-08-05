// discord_app/modules/headless_tasks/android/TTITestAction.tsx
import importDefaultResult from "ensureGuildLoaded";
import { applicationReady } from "linkFromAppsFlyer";
import getHash from "getHash";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";

let closure_0 = arg1;
function sendReply(status, message) {
  const merged = Object.assign(arg2);
  const json = JSON.stringify({ type: "response", status, message });
  importDefault(4143).logToDevice(json);
}
function sendStatus(message) {
  tmp2.log(message);
  const json = JSON.stringify({ type: "status", message });
  importDefault(4143).logToDevice(json);
}
function getErrorDetails(headers) {
  if (null != headers) {
    if (typeof headers === "object") {
      const _Set = Set;
      const set = new Set();
      let prototypeOf = headers;
      if (null != headers) {
        const _Object = Object;
        const ownPropertyNames = Object.getOwnPropertyNames(prototypeOf);
        const tmp3 = ownPropertyNames[Symbol.iterator]();
        do {
          let tmp5 = ownPropertyNames;
          let tmp7 = tmp3;
          while (tmp3 !== undefined) {
            let addResult = set.add(tmp6);
            continue;
          }
          let _Object2 = Object;
          prototypeOf = Object.getPrototypeOf(prototypeOf);
        } while (null != prototypeOf);
      }
      const obj = {};
      for (const item10021 of tmp15) {
        obj[item10021] = arg0[item10021];
        continue;
      }
      return obj;
    }
  }
  return headers;
}
function setupTTITest() {
  const self = this;
  const apply = _setupTTITest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setupTTITest() {
  const self = this;
  const tmp = importDefaultResult((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const promise = new Promise((arg0) => setTimeout(arg0, 1000));
            let c6 = 13;
            c7 = 1;
            obj = { value: null, done: false };
            obj[0] = promise;
            return obj;
          }
        } catch (tmp10) {
          let closure_4 = tmp10;
          if (tmp3 === c5) {
            c7 = tmp2;
            throw tmp10;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _setupTTITest = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function apiLogin() {
  const self = this;
  const apply = _apiLogin.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _apiLogin() {
  const self = this;
  const tmp = importDefaultResult((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, ok) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw ok;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = ok;
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
              throw ok;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = ok;
              return obj;
            } else {
              let closure_5 = tmp2;
              let id = 0;
              id = undefined;
              if (outer1_8.getId() === closure_3) {
                if (null != dependencyMap) {
                  c7 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = dependencyMap;
                  return obj1;
                } else {
                  const token = outer1_8.getToken();
                  if (null != token) {
                    c7 = 3;
                    const obj2 = { value: null, done: true };
                    obj2[0] = token;
                    return obj2;
                  }
                }
              }
              if (null != outer1_8.getId()) {
                let obj16 = callback(5736);
                c6 = 3;
                c7 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj16.logout("TTI_test");
                return obj3;
              } else if (null != dependencyMap) {
                const _fetch = fetch;
                const obj4 = { method: "HEAD", headers: null };
                const obj5 = { Authorization: null };
                obj5[0] = dependencyMap;
                obj4[1] = obj5;
                c6 = 2;
                c7 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = fetch("https://discord.com/api/users/@me/settings-proto/2", obj4);
                return obj6;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw ok;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj7 = { value: null, done: true };
              obj7[0] = ok;
              return obj7;
            } else {
              dependencyMap = ok;
              let promise = new Promise((arg0) => v1(arg0));
              c6 = 6;
              c7 = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = promise;
              return obj8;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw ok;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = ok;
              return obj9;
            } else if (ok.ok) {
              obj7 = callback(5736);
              c6 = 4;
              c7 = 1;
              const obj10 = { value: null, done: false };
              obj10[0] = obj7.loginToken(dependencyMap, false);
              return obj10;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw ok;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj11 = { value: null, done: true };
              obj11[0] = ok;
              return obj11;
            }
          } else if (4 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw ok;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj12 = { value: null, done: true };
              obj12[0] = ok;
              return obj12;
            } else {
              promise = new Promise((arg0) => v1(arg0));
              c6 = 5;
              c7 = 1;
              const obj13 = { value: null, done: false };
              obj13[0] = promise;
              return obj13;
            }
          } else if (5 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw ok;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj14 = { value: null, done: true };
              obj14[0] = ok;
              return obj14;
            } else if (store.getId() === closure_3) {
              c7 = 3;
              const obj15 = { value: null, done: true };
              obj15[0] = dependencyMap;
              return obj15;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw ok;
          } else if (arg0 === 2) {
            c7 = 3;
            obj16 = { value: null, done: true };
            obj16[0] = ok;
            return obj16;
          } else {
            id = store.getId();
            if (id !== closure_3) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              let error = new Error("Unable to login " + closure_0 + ", expected id " + closure_3 + " after login but was " + id);
              throw error;
            } else {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = dependencyMap;
              return obj;
            }
          }
          const promise1 = new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            const callback = arg1;
            const items = ["LOGIN_FAILURE", "PASSWORDLESS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"];
            function _loop(iter) {
              let obj = iter;
              obj = callback2(table[11]);
              callback2 = iter;
              const f119479 = () => { ... };
              function handler() { ... }
              const subscription = obj.subscribe(iter, handler);
            }
            const iter = items[Symbol.iterator]();
            while (iter !== undefined) {
              let _loopResult = _loop(iter.next());
              continue;
            }
            outer1_20(callback(709), "LOGIN_SUCCESS", (token) => callback(token.token));
            let obj = callback(5736);
            obj = { login: closure_0, password: callback };
            obj.login(obj);
          });
          c6 = 1;
          c7 = 1;
          const obj17 = { value: null, done: false };
          obj17[0] = promise1;
          return obj17;
        } catch (tmp55) {
          c7 = tmp;
          throw tmp55;
        }
      }
    })();
  });
  const _apiLogin = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function subscribeOnce(subscribe) {
  let closure_0 = subscribe;
  const LOGIN_SUCCESS = "LOGIN_SUCCESS";
  let closure_2 = arg2;
  function handler(arg0) {
    obj.unsubscribe(closure_1, handler);
    return f119479(arg0);
  }
  return subscribe.subscribe("LOGIN_SUCCESS", handler);
}
let c4 = importDefaultResult;
require("processCallbacks").addPostConnectionCallback;
const unpackModuleId = new require("processCallbacks")("TTITestAction");
let obj = {
  "setup-test": setupTTITest,
  ping() {
    const json = JSON.stringify({ type: "pong" });
    importDefault(4143).logToDevice(json);
  },
  () => {
    let obj = callback(9791);
    const result = obj.resetComponentProfiler();
    obj = { type: "response", status: "success", message: "reset-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    importDefault(4143).logToDevice(json);
  },
  () => {
    let obj = callback(9791);
    const result = obj.pauseComponentProfiler();
    obj = { type: "response", status: "success", message: "pause-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    importDefault(4143).logToDevice(json);
  },
  () => {
    let obj = callback(9791);
    const result = obj.resumeComponentProfiler();
    obj = { type: "response", status: "success", message: "resume-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    importDefault(4143).logToDevice(json);
  },
  () => {
    let obj = { stats: null };
    obj[0] = callback(9791).dumpStats();
    obj = { type: "response", status: "success", message: "dump-component-profiler-stats" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    const obj2 = callback(9791);
    importDefault(4143).logToDevice(json);
  },
  () => {
    let obj = importDefault(16355);
    let report;
    if (obj != null) {
      report = obj.requestReport();
    }
    obj = { report };
    obj = { type: "response", status: "success", message: "dump-jank-stats" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    importDefault(4143).logToDevice(json);
  },
  (multiplier) => {
    let obj = importDefault(16355);
    if (obj != null) {
      const result = obj.setJankHeuristicMultiplier(multiplier.multiplier);
    }
    obj = { type: "response", status: "success", message: "set-jank-multiplier" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    importDefault(4143).logToDevice(json);
  },
  () => {
    let obj = importDefault(16355);
    if (obj != null) {
      obj.startTracking();
    }
    obj = { type: "response", status: "success", message: "start-jank-stats" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    importDefault(4143).logToDevice(json);
  },
  (action) => {
    let obj = importDefault(709);
    obj.dispatch(action.action);
    obj = { type: "response", status: "success", message: "flux-dispatch" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    importDefault(4143).logToDevice(json);
  },
  () => {
    let obj = { token: token.getToken() };
    obj = { type: "response", status: "success", message: "get-token" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    importDefault(4143).logToDevice(json);
  },
  () => {
    let obj = { cumulativeCPU: null, currentMemoryUsage: null };
    obj[0] = importDefault(7055).getCumulativeCPUUsage();
    const obj2 = importDefault(7055);
    obj[1] = importDefault(7055).getCurrentMemoryUsageKB();
    obj = { type: "response", status: "success", message: "get-resource-usage" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    const obj3 = importDefault(7055);
    importDefault(4143).logToDevice(json);
  },
  backchannel: null
};
let closure_3 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c11 = 0;
  let c12 = 0;
  let c9 = 0;
  return (function*(arg0, result) {
    let args;
    let c0;
    if (c12 === 2) {
      c12 = 3;
      HermesBuiltin.throwTypeError();
    } else {
      let tmp = null;
      if (tmp8 === 3) {
        if (arg0 === 1) {
          throw result;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = result;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw result;
            } else if (arg0 === 2) {
              c12 = 3;
              obj = { value: null, done: true };
              obj[0] = result;
              return obj;
            } else {
              let fetchFingerprint = tmp4;
              let closure_7 = tmp6;
              tmp = lib;
              lib = undefined;
              let closure_1;
              let closure_2;
              ({ reply: c0, args } = lib);
              const obj1 = { ClientInfoUtils: null, ComponentProfiler: null, Dispatcher: null, ExperimentStore: null, NativeJankStats: null, ProcessUtils: null, AnalyticsUtils: null, TTITestAction: null };
              const obj2 = { getConstants: null };
              tmp = lib;
              tmp = outer1_2;
              obj2[0] = lib(outer1_2[13]).getConstants;
              obj1[0] = obj2;
              const obj3 = { resetComponentProfiler: null, resumeComponentProfiler: null, pauseComponentProfiler: null, dumpStats: null };
              obj3[0] = lib(outer1_2[9]).resetComponentProfiler;
              obj3[1] = lib(outer1_2[9]).resumeComponentProfiler;
              obj3[2] = lib(outer1_2[9]).pauseComponentProfiler;
              obj3[3] = lib(outer1_2[9]).dumpStats;
              obj1[1] = obj3;
              tmp = outer1_1;
              obj1[2] = outer1_1(outer1_2[11]);
              tmp = outer1_6;
              obj1[3] = outer1_6;
              obj1[4] = outer1_1(outer1_2[10]);
              obj1[5] = outer1_1(outer1_2[12]);
              const obj4 = { startRecordingAnalyticsEvents: null, stopRecordingAnalyticsEvents: null, getAnalyticsEventsRecording: null, clearAnalyticsEventsRecording: null };
              obj4[0] = lib(outer1_2[14]).startRecordingAnalyticsEvents;
              obj4[1] = lib(outer1_2[14]).stopRecordingAnalyticsEvents;
              obj4[2] = lib(outer1_2[14]).getAnalyticsEventsRecording;
              obj4[3] = lib(outer1_2[14]).clearAnalyticsEventsRecording;
              obj1[6] = obj4;
              const obj5 = { apiLogin: null, setupTTITest: null };
              tmp = outer1_18;
              obj5[0] = outer1_18;
              tmp = outer1_16;
              obj5[1] = outer1_16;
              obj1[7] = obj5;
              tmp = outer1_4;
              const constructor = outer1_4(function*() {
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
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp4) {
                    c0 = tmp;
                    throw tmp4;
                  }
                }
              }).constructor;
              const obj6 = {};
              closure_1 = obj6;
              closure_1 = args;
              if (args == null) {
                closure_1 = {};
              }
              const _Object = Object;
              const keys = Object.keys(obj1);
              const _Object2 = Object;
              let values = Object.values(obj1);
              const _Object3 = Object;
              const keys1 = Object.keys(closure_1);
              const _Object4 = Object;
              values = Object.values(closure_1);
              let c9 = 2;
              closure_2 = 0;
              const items = [, ];
              let arraySpreadResult = HermesBuiltin.arraySpread(keys, 0);
              closure_2 = arraySpreadResult;
              items[arraySpreadResult] = "imports";
              const sum = closure_2 + 1;
              closure_2 = sum;
              closure_2 = HermesBuiltin.arraySpread(keys1, sum);
              const _String2 = String;
              items[closure_2] = String(lib.source);
              closure_2 = closure_2 + 1;
              let closure_3 = 0;
              const items1 = [];
              arraySpreadResult = HermesBuiltin.arraySpread(values, 0);
              closure_3 = arraySpreadResult;
              items1[arraySpreadResult] = keys;
              const sum1 = closure_3 + 1;
              closure_3 = sum1;
              closure_3 = HermesBuiltin.arraySpread(values, sum1);
              c11 = 3;
              c12 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = HermesBuiltin.apply(items1, undefined);
              return obj7;
            }
          } else {
            if (1 === tmp9) {
              let getHash = createGuildRecordFromRust;
              c9 = 0;
              if (typeof lib === "string") {
                const _fetch3 = fetch;
                const obj8 = { method: "PUT", body: null, headers: null };
                const _JSON3 = JSON;
                obj8[1] = JSON.stringify(closure_1);
                obj8[2] = { "Content-Type": "application/json" };
                c11 = 6;
                c12 = 1;
                const obj9 = { value: null, done: false };
                obj9[0] = fetch(lib, obj8);
                return obj9;
              }
            } else {
              if (2 === tmp9) {
                c9 = 1;
                closure_3 = createGuildRecordFromRust;
                const obj10 = { details: null, string: null };
                obj10[0] = callback2(createGuildRecordFromRust);
                const _String = String;
                obj10[1] = String(closure_3);
                closure_1.error = obj10;
              } else {
                if (3 === tmp9) {
                  if (arg0 === 1) {
                    c12 = 3;
                    throw result;
                  } else {
                    let closure_4 = result;
                    if (arg0 === 2) {
                      c9 = 0;
                      if (typeof lib === "string") {
                        const _fetch = fetch;
                        const obj11 = { method: "PUT", body: null, headers: null };
                        const _JSON = JSON;
                        obj11[1] = JSON.stringify(closure_1);
                        obj11[2] = { "Content-Type": "application/json" };
                        c11 = 4;
                        c12 = 1;
                        const obj12 = { value: null, done: false };
                        obj12[0] = fetch(lib, obj11);
                        return obj12;
                      } else {
                        c12 = 3;
                      }
                    } else {
                      obj6.result = result;
                      c9 = 1;
                    }
                  }
                } else if (4 === tmp9) {
                  if (arg0 === 1) {
                    c12 = 3;
                    throw result;
                  } else if (arg0 === 2) {
                    c12 = 3;
                    const obj13 = { value: null, done: true };
                    obj13[0] = result;
                    return obj13;
                  } else {
                    closure_2 = result;
                    if (!closure_2.ok) {
                      const obj14 = { status: null };
                      obj14[0] = closure_2.status;
                      callback("error", "Failed to send backchannel reply", obj14);
                    }
                  }
                } else if (5 === tmp9) {
                  if (arg0 === 1) {
                    c12 = 3;
                    throw result;
                  } else if (arg0 === 2) {
                    c12 = 3;
                    const obj15 = { value: null, done: true };
                    obj15[0] = result;
                    return obj15;
                  } else {
                    closure_2 = result;
                    if (closure_2.ok) {
                      callback("success", "Backchannel reply sent");
                    } else {
                      const obj16 = { status: null };
                      obj16[0] = closure_2.status;
                      callback("error", "Failed to send backchannel reply", obj16);
                    }
                    c12 = 3;
                  }
                } else if (arg0 === 1) {
                  c12 = 3;
                  throw result;
                } else if (arg0 === 2) {
                  c12 = 3;
                  const obj17 = { value: null, done: true };
                  obj17[0] = result;
                  return obj17;
                } else {
                  closure_2 = result;
                  if (closure_2.ok) {
                    callback("success", "Backchannel reply sent");
                  } else {
                    obj = { status: null };
                    obj[0] = closure_2.status;
                    callback("error", "Failed to send backchannel reply", obj);
                  }
                }
                callback("success", "Backchannel reply sent");
              }
              c9 = 0;
              if (typeof lib === "string") {
                const _fetch2 = fetch;
                const obj18 = { method: "PUT", body: null, headers: null };
                const _JSON2 = JSON;
                obj18[1] = JSON.stringify(closure_1);
                obj18[2] = { "Content-Type": "application/json" };
                c11 = 5;
                c12 = 1;
                const obj19 = { value: null, done: false };
                obj19[0] = fetch(lib, obj18);
                return obj19;
              }
            }
            throw getHash;
          }
        } catch (tmp91) {
          createGuildRecordFromRust = tmp91;
          if (tmp5 === c9) {
            c12 = tmp3;
            throw tmp91;
          } else if (tmp2 === tmp93) {
            c11 = tmp2;
          } else {
            c11 = tmp;
          }
        }
      }
    }
  })();
});
obj[12] = function() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  return (function*(arg0) {
    let closure_2 = tmp5;
    let closure_1 = tmp2;
    const _TextDecoder = TextDecoder;
    const textDecoder = new TextDecoder("utf-8");
    const _JSON = JSON;
    parsed = JSON.parse(textDecoder.decode(callback(outer1_2[19]).base64decode(parsed.actionData)));
    const obj1 = {};
    const merged = Object.assign(parsed);
    obj1.user = "redacted";
    outer1_11.log("Received TTI Test Action", obj1);
    yield outer1_5.promise;
    outer1_12[parsed.type](parsed);
    return Promise.resolve();
  })();
});
const tmp2 = new require("processCallbacks")("TTITestAction");
let result = require("getHash").fileFinishedImporting("modules/headless_tasks/android/TTITestAction.tsx");

export default function(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};