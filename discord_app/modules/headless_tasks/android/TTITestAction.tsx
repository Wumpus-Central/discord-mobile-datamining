// discord_app/modules/headless_tasks/android/TTITestAction.tsx
import timestampDefault from "../../debug/Logger.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx";
import getHermesInstrumentedStatsSummaryDefault from "../../../utils/ProcessUtils.native.tsx";
import enforcingDefault2 from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx";
import importDefaultResult from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { applicationReady } from "../../app_startup/native/NativeAppStartup.tsx";
import getHash from "../../experiments/ExperimentStore.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";

function sendReply(status, message) {
  const merged = Object.assign(arg2);
  const json = JSON.stringify({ type: "response", status, message });
  enforcingDefault.logToDevice(json);
}
function sendStatus(message) {
  logger.log(message);
  const json = JSON.stringify({ type: "status", message });
  enforcingDefault.logToDevice(json);
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
          while (tmp3 !== undefined) {
            let addResult = set.add(tmp6);
            continue;
          }
          let _Object2 = Object;
          prototypeOf = Object.getPrototypeOf(prototypeOf);
        } while (null != prototypeOf);
      }
      obj = {};
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
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (message === 2) {
        message = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          message = 2;
          switch (id) {
            case 0:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let password = tmp3;
                let email = tmp7;
                let flag;
                if (flag === undefined) {
                  flag = false;
                }
                email = undefined;
                password = undefined;
                let expectedId;
                c5 = undefined;
                id = undefined;
                message = undefined;
                id = 1;
                message = 1;
                return { value: "ct", done: true };
              }
            break;
            case 1:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                if (null != lib.user) {
                  email = lib.user.email;
                  password = lib.user.password;
                  expectedId = lib.user.expectedId;
                  c5 = 1;
                  let tmp106 = null != closure_1_8.getId();
                  if (tmp106) {
                    tmp106 = store.getId() !== expectedId;
                  }
                  if (tmp106) {
                    closure_1_14("Logging out old user");
                    id = 5;
                    message = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = callback(closure_1_2[15]).logout("TTI_test");
                    return obj2;
                  } else if (store.getId() !== closure_1_4) {
                    closure_1_14("Logging in new user");
                    let promise = new Promise((arg0, arg1) => {
                      closure_0 = arg0;
                      closure_1 = arg1;
                      subscribeOnce = function subscribeOnce(LOGIN_SUCCESS, arg1) {
                        closure_0 = LOGIN_SUCCESS;
                        const callback2 = arg1;
                        function handler() { ... }
                        const subscription = callback2(handler[11]).subscribe(LOGIN_SUCCESS, handler);
                      };
                      const items = ["LOGIN_MFA_STEP", "LOGIN_SUSPENDED_USER", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED", "LOGIN_FAILURE"];
                      while (tmp !== undefined) {
                        let subscribeOnceResult = subscribeOnce(tmp2, (arg0) => {
                          error = new Error("Unable to login " + email + ". Login failed with event '" + arg0 + "'");
                          callback2(error);
                        });
                        continue;
                      }
                      subscribeOnce("LOGIN_SUCCESS", () => callback());
                    });
                    c5 = promise;
                    let obj23 = callback(closure_1_2[15]);
                    const obj3 = { login: null, password: null };
                    obj3[0] = email;
                    obj3[1] = password;
                    id = 4;
                    message = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = obj23.login(obj3);
                    return obj4;
                  } else {
                    c5 = 0;
                  }
                }
                callback3("Waiting for socket connection");
                promise = new Promise((arg0) => v3(arg0));
                id = 3;
                message = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = promise;
                return obj5;
              }
            break;
            case 2:
              c5 = 0;
              store = expectedId;
              if (flag) {
                throw tmp96;
              } else {
                callback2("error", tmp96.message);
                message = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            break;
            case 3:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                let obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                const promise1 = new Promise((arg0) => setTimeout(arg0, 1000));
                id = 8;
                message = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = promise1;
                return obj7;
              }
            break;
            case 4:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                message = 3;
                let obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
              } else {
                id = 6;
                message = 1;
                const obj9 = { value: null, done: false };
                obj9[0] = c5;
                return obj9;
              }
            break;
            case 5:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                message = 3;
                let obj10 = { value: null, done: true };
                obj10[0] = arg1;
                return obj10;
              }
            break;
            case 6:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                message = 3;
                const obj11 = { value: null, done: true };
                obj11[0] = arg1;
                return obj11;
              } else {
                callback3("Waiting for socket connection");
                const promise2 = new Promise((arg0) => v3(arg0));
                id = 7;
                message = 1;
                const obj12 = { value: null, done: false };
                obj12[0] = promise2;
                return obj12;
              }
            break;
            case 7:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                message = 3;
                const obj13 = { value: null, done: true };
                obj13[0] = arg1;
                return obj13;
              } else {
                id = store.getId();
                if (id !== expectedId) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  error = new Error("Unable to login " + email + ", expected id " + expectedId + " after login but was " + id);
                  throw error;
                }
              }
            break;
            case 8:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                const obj14 = { value: null, done: true };
                obj14[0] = arg1;
                return obj14;
              } else {
                let tmp26 = null != lib.invite;
                if (tmp26) {
                  tmp26 = null == guild.getGuild(lib.invite.expectedGuildId);
                }
                if (tmp26) {
                  if (!flag) {
                    callback3("Inviting to target guild");
                  }
                  obj10 = flag(email[16]);
                  const obj15 = { inviteKey: null, context: null, skipOnboarding: true };
                  obj15[0] = lib.invite.code;
                  obj15[1] = { location: "tti_tests" };
                  id = 9;
                  message = 1;
                  const obj16 = { value: null, done: false };
                  obj16[0] = obj10.acceptInvite(obj15);
                  return obj16;
                } else if (null != lib.channelId) {
                  if (null == channel.getChannel(lib.channelId)) {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const error1 = new Error("Unable to switch to channel " + lib.channelId + " because it does not exist on the client");
                    message = error1;
                    if (flag) {
                      throw message;
                    } else {
                      callback2("error", message.message);
                      message = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } else {
                    if (!flag) {
                      callback3("Switching to desired channel");
                    }
                    obj8 = lib(email[17]);
                    obj8.transitionToChannel(lib.channelId);
                    const promise3 = new Promise((arg0) => setTimeout(arg0, 1000));
                    id = 11;
                    message = 1;
                    const obj17 = { value: null, done: false };
                    obj17[0] = promise3;
                    return obj17;
                  }
                } else {
                  if (!flag) {
                    callback3("Writing caches");
                  }
                  obj6 = lib(email[18]);
                  id = 12;
                  message = 1;
                  const obj18 = { value: null, done: false };
                  obj18[0] = obj6.writeCaches();
                  return obj18;
                }
              }
            break;
            case 9:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                const obj19 = { value: null, done: true };
                obj19[0] = arg1;
                return obj19;
              } else {
                if (!flag) {
                  callback3("Invite API call finished");
                }
                const promise4 = new Promise((arg0, arg1) => {
                  closure_0 = arg0;
                  const timeout = setTimeout(arg1, 15000);
                  const result = closure_1_10.addConditionalChangeListener(() => {
                    if (null != closure_2_10.getGuild(lib.invite.expectedGuildId)) {
                      if (!closure_1) {
                        closure_2_11.log("Invited guild available in the store");
                        const _JSON = JSON;
                        const json = JSON.stringify({ type: "status", message: "Invited guild available in the store" });
                        flag(email[8]).logToDevice(json);
                        obj = flag(email[8]);
                      }
                      const _clearTimeout = clearTimeout;
                      clearTimeout(closure_1);
                      lib();
                      return false;
                    }
                  });
                });
                id = 10;
                message = 1;
                const obj20 = { value: null, done: false };
                obj20[0] = promise4;
                return obj20;
              }
            break;
            case 10:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                const obj21 = { value: null, done: true };
                obj21[0] = arg1;
                return obj21;
              }
            break;
            case 11:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                const obj22 = { value: null, done: true };
                obj22[0] = arg1;
                return obj22;
              }
            break;
            case 12:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                obj23 = { value: null, done: true };
                obj23[0] = arg1;
                return obj23;
              } else {
                const promise5 = new Promise((arg0) => setTimeout(arg0, 1000));
                id = 13;
                message = 1;
                obj = { value: null, done: false };
                obj[0] = promise5;
                return obj;
              }
            break;
            default:
              if (arg0 === 1) {
                message = 3;
                throw arg1;
              } else if (arg0 === 2) {
                message = 3;
                const obj24 = { value: null, done: true };
                obj24[0] = arg1;
                return obj24;
              } else {
                if (!flag) {
                  callback3("Sending reply");
                  callback2("success", "Setup Complete");
                }
                message = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
          }
        } catch (tmp144) {
          expectedId = tmp144;
          if (tmp4 === c5) {
            message = tmp2;
            throw tmp144;
          } else {
            id = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_17 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, ok) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw ok;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = ok;
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
              throw ok;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = ok;
              return obj;
            } else {
              closure_5 = tmp2;
              let id = 0;
              id = undefined;
              if (closure_1_8.getId() === closure_3) {
                if (null != dependencyMap) {
                  c7 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = dependencyMap;
                  return obj1;
                } else {
                  const token = closure_1_8.getToken();
                  if (null != token) {
                    c7 = 3;
                    const obj2 = { value: null, done: true };
                    obj2[0] = token;
                    return obj2;
                  }
                }
              }
              if (null != closure_1_8.getId()) {
                let obj16 = callback(5256);
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
              let promise = new Promise((closure_1_2) => v1(closure_1_2));
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
              obj7 = callback(5256);
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
              promise = new Promise((closure_1_2) => v1(closure_1_2));
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
              error = new Error("Unable to login " + closure_0 + ", expected id " + closure_3 + " after login but was " + id);
              throw error;
            } else {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = dependencyMap;
              return obj;
            }
          }
          const promise1 = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            const callback = arg1;
            const items = ["LOGIN_FAILURE", "PASSWORDLESS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"];
            function _loop(iter) {
              obj = callback2(table[11]);
              callback2 = iter;
              const f120855 = () => { ... };
              function handler() { ... }
              const subscription = obj.subscribe(iter, handler);
            }
            const iter = items[Symbol.iterator]();
            while (iter !== undefined) {
              let _loopResult = _loop(iter.next());
              continue;
            }
            closure_1_20(callback(709), "LOGIN_SUCCESS", (token) => callback(token.token));
            callback(5256);
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
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function subscribeOnce(subscribe) {
  closure_0 = subscribe;
  const LOGIN_SUCCESS = "LOGIN_SUCCESS";
  closure_2 = arg2;
  function handler(arg0) {
    obj.unsubscribe(closure_1, handler);
    return f120855(arg0);
  }
  return subscribe.subscribe("LOGIN_SUCCESS", handler);
}
let c4 = importDefaultResult;
require("processCallbacks").addPostConnectionCallback;
let closure_11 = new timestampDefault("TTITestAction");
let obj = {
  "setup-test": setupTTITest,
  ping() {
    const json = JSON.stringify({ type: "pong" });
    enforcingDefault.logToDevice(json);
  },
  () => {
    obj = callback(10137);
    const result = obj.resetComponentProfiler();
    obj = { type: "response", status: "success", message: "reset-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
  },
  () => {
    obj = callback(10137);
    const result = obj.pauseComponentProfiler();
    obj = { type: "response", status: "success", message: "pause-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
  },
  () => {
    obj = callback(10137);
    const result = obj.resumeComponentProfiler();
    obj = { type: "response", status: "success", message: "resume-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
  },
  () => {
    { stats: callback(10137).dumpStats() };
    obj = { type: "response", status: "success", message: "dump-component-profiler-stats" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    const obj2 = callback(10137);
    enforcingDefault.logToDevice(json);
  },
  () => {
    obj = enforcingDefault2;
    let report;
    if (obj != null) {
      report = obj.requestReport();
    }
    obj = { type: "response", status: "success", message: "dump-jank-stats" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
    const tmpResult = enforcingDefault;
  },
  (multiplier) => {
    obj = enforcingDefault2;
    if (obj != null) {
      const result = obj.setJankHeuristicMultiplier(multiplier.multiplier);
    }
    obj = { type: "response", status: "success", message: "set-jank-multiplier" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
    const tmpResult = enforcingDefault;
  },
  () => {
    obj = enforcingDefault2;
    if (obj != null) {
      obj.startTracking();
    }
    obj = { type: "response", status: "success", message: "start-jank-stats" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
    const tmpResult = enforcingDefault;
  },
  (action) => {
    obj = dispatcherDefault;
    obj.dispatch(action.action);
    obj = { type: "response", status: "success", message: "flux-dispatch" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
  },
  () => {
    { token: token.getToken() };
    obj = { type: "response", status: "success", message: "get-token" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
  },
  () => {
    obj = { cumulativeCPU: getHermesInstrumentedStatsSummaryDefault.getCumulativeCPUUsage(), currentMemoryUsage: null };
    obj[1] = getHermesInstrumentedStatsSummaryDefault.getCurrentMemoryUsageKB();
    obj = { type: "response", status: "success", message: "get-resource-usage" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    enforcingDefault.logToDevice(json);
  },
  backchannel: null
};
let closure_3 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c11 = 0;
  c12 = 0;
  c9 = 0;
  return (function*(arg0, result) {
    if (c12 === 2) {
      c12 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw result;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = result;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_8 = tmp4;
            closure_7 = tmp6;
            let lib;
            closure_1 = undefined;
            closure_2 = undefined;
            ({ reply: c0, args } = lib);
            obj1 = { ClientInfoUtils: null, ComponentProfiler: null, Dispatcher: null, ExperimentStore: null, NativeJankStats: null, ProcessUtils: null, AnalyticsUtils: null, TTITestAction: null };
            const obj2 = { getConstants: null };
            obj2[0] = lib(dependencyMap[13]).getConstants;
            obj1[0] = obj2;
            const obj3 = { resetComponentProfiler: null, resumeComponentProfiler: null, pauseComponentProfiler: null, dumpStats: null };
            obj3[0] = lib(dependencyMap[9]).resetComponentProfiler;
            obj3[1] = lib(dependencyMap[9]).resumeComponentProfiler;
            obj3[2] = lib(dependencyMap[9]).pauseComponentProfiler;
            obj3[3] = lib(dependencyMap[9]).dumpStats;
            obj1[1] = obj3;
            obj1[2] = dispatcherDefault;
            obj1[3] = closure_1_6;
            obj1[4] = enforcingDefault2;
            obj1[5] = getHermesInstrumentedStatsSummaryDefault;
            const obj4 = { startRecordingAnalyticsEvents: null, stopRecordingAnalyticsEvents: null, getAnalyticsEventsRecording: null, clearAnalyticsEventsRecording: null };
            obj4[0] = lib(dependencyMap[14]).startRecordingAnalyticsEvents;
            obj4[1] = lib(dependencyMap[14]).stopRecordingAnalyticsEvents;
            obj4[2] = lib(dependencyMap[14]).getAnalyticsEventsRecording;
            obj4[3] = lib(dependencyMap[14]).clearAnalyticsEventsRecording;
            obj1[6] = obj4;
            const obj5 = { apiLogin: null, setupTTITest: null };
            obj5[0] = apiLogin;
            obj5[1] = setupTTITest;
            obj1[7] = obj5;
            const constructor = closure_1_4(function*() {
              if (c0 === 2) {
                c0 = 3;
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
                    return { value: "HermesInternal", done: "HermesInternal" };
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
            c9 = 2;
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
            closure_3 = 0;
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
            closure_6 = closure_10;
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
              closure_3 = closure_10;
              const obj10 = { details: null, string: null };
              obj10[0] = callback2(closure_10);
              const _String = String;
              obj10[1] = String(closure_3);
              closure_1.error = obj10;
            } else {
              if (3 === tmp9) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw result;
                } else {
                  closure_4 = result;
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
          throw closure_6;
        }
      } catch (tmp91) {
        closure_10 = tmp91;
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
let closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  return (function*(arg0) {
    closure_2 = tmp5;
    closure_1 = tmp2;
    const _TextDecoder = TextDecoder;
    const decoder = new TextDecoder("utf-8");
    const _JSON = JSON;
    parsed = JSON.parse(decoder.decode(callback(dependencyMap[19]).base64decode(parsed.actionData)));
    obj1 = {};
    const merged = Object.assign(parsed);
    obj1.user = "redacted";
    closure_1_11.log("Received TTI Test Action", obj1);
    yield applicationReady.promise;
    closure_1_12[parsed.type](parsed);
    return Promise.resolve();
  })();
});
const tmp2 = new timestampDefault("TTITestAction");
let result = require("obj132").fileFinishedImporting("modules/headless_tasks/android/TTITestAction.tsx");

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