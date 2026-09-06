// === Module 17930: TTITestAction ===

// Module 17930 (TTITestAction)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1359 */;
import NativeTTIManagerModuleDefault from "NativeTTIManagerModule" /* 4424 */;
import NativeJankStatsModuleDefault from "NativeJankStatsModule" /* 17411 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

function sendReply(status, message, arg2) {
  const merged = Object.assign(arg2);
  const json = JSON.stringify({ type: "response", status, message });
  NativeTTIManagerModuleDefault.logToDevice(json);
}
function sendStatus(message) {
  logger.log(message);
  const json = JSON.stringify({ type: "status", message });
  NativeTTIManagerModuleDefault.logToDevice(json);
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
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _setupTTITest(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      switch (c6) {
        case 0:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_1 = undefined;
            closure_130_0 = invite;
            let flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            closure_130_1 = flag;
            let email;
            let password;
            let expectedId;
            closure_130_5 = undefined;
            let id;
            closure_130_7 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "PX_16", done: true };
          }
        break;
        case 1:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            if (null != closure_130_0.user) {
              email = closure_130_0.user.email;
              password = closure_130_0.user.password;
              expectedId = closure_130_0.user.expectedId;
              c5 = 1;
              let tmp106 = null != closure_131_8.getId();
              if (tmp106) {
                tmp106 = closure_131_8.getId() !== expectedId;
              }
              if (tmp106) {
                closure_131_14("Logging out old user");
                c6 = 5;
                c7 = 1;
                const obj2 = { value: closure_131_1(closure_131_2[15]).logout("TTI_test"), done: false };
                return obj2;
              } else if (closure_131_8.getId() !== expectedId) {
                closure_131_14("Logging in new user");
                let promise = new Promise((arg0, arg1) => {
                  closure_0 = arg0;
                  closure_1 = arg1;
                  subscribeOnce = function subscribeOnce(LOGIN_SUCCESS, arg1) {
                    closure_0 = LOGIN_SUCCESS;
                    closure_1 = arg1;
                    function handler() {
                      closure_1(closure_0);
                      closure_1(closure_2_2[11]).unsubscribe(closure_0, handler);
                    }
                    const subscription = closure_1(handler[11]).subscribe(LOGIN_SUCCESS, handler);
                  };
                  const items = ["LOGIN_MFA_STEP", "LOGIN_SUSPENDED_USER", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED", "LOGIN_FAILURE"];
                  while (tmp !== undefined) {
                    let subscribeOnceResult = subscribeOnce(tmp2, (arg0) => {
                      const error = new Error("Unable to login " + closure_2_2 + ". Login failed with event '" + arg0 + "'");
                      closure_1(error);
                    });
                    continue;
                  }
                  subscribeOnce("LOGIN_SUCCESS", () => closure_0());
                });
                closure_130_5 = promise;
                let obj23 = closure_131_1(closure_131_2[15]);
                const obj3 = { login: email, password };
                c6 = 4;
                c7 = 1;
                const obj4 = { value: obj23.login(obj3), done: false };
                return obj4;
              } else {
                c5 = 0;
              }
            }
            closure_131_14("Waiting for socket connection");
            promise = new Promise((arg0) => closure_1_7(arg0));
            c6 = 3;
            c7 = 1;
            const obj5 = { value: promise, done: false };
            return obj5;
          }
        break;
        case 2:
          c5 = 0;
          closure_130_8 = closure_4;
          if (closure_130_1) {
            throw tmp96;
          } else {
            closure_131_13("error", tmp96.message);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        break;
        case 3:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            const promise1 = new Promise((arg0) => setTimeout(arg0, 1000));
            c6 = 8;
            c7 = 1;
            const obj7 = { value: promise1, done: false };
            return obj7;
          }
        break;
        case 4:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            let obj8 = { value, done: true };
            return obj8;
          } else {
            c6 = 6;
            c7 = 1;
            const obj9 = { value: closure_130_5, done: false };
            return obj9;
          }
        break;
        case 5:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            let obj10 = { value, done: true };
            return obj10;
          }
        break;
        case 6:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_131_14("Waiting for socket connection");
            const promise2 = new Promise((arg0) => closure_1_7(arg0));
            c6 = 7;
            c7 = 1;
            const obj12 = { value: promise2, done: false };
            return obj12;
          }
        break;
        case 7:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            id = closure_131_8.getId();
            if (id !== expectedId) {
              const _Error2 = Error;
              const _HermesInternal2 = HermesInternal;
              let error = new Error("Unable to login " + email + ", expected id " + expectedId + " after login but was " + id);
              throw error;
            }
          }
        break;
        case 8:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            let tmp26 = null != closure_130_0.invite;
            if (tmp26) {
              tmp26 = null == closure_131_10.getGuild(closure_130_0.invite.expectedGuildId);
            }
            if (tmp26) {
              if (!closure_130_1) {
                closure_131_14("Inviting to target guild");
              }
              obj10 = closure_131_1(closure_131_2[16]);
              const obj15 = { inviteKey: closure_130_0.invite.code, context: { location: "tti_tests" }, skipOnboarding: true };
              c6 = 9;
              c7 = 1;
              const obj16 = { value: obj10.acceptInvite(obj15), done: false };
              return obj16;
            } else if (null != closure_130_0.channelId) {
              if (null == closure_131_9.getChannel(closure_130_0.channelId)) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error1 = new Error("Unable to switch to channel " + closure_130_0.channelId + " because it does not exist on the client");
                closure_130_7 = error1;
                if (closure_130_1) {
                  throw closure_130_7;
                } else {
                  closure_131_13("error", closure_130_7.message);
                  c7 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } else {
                if (!closure_130_1) {
                  closure_131_14("Switching to desired channel");
                }
                obj8 = closure_131_0(closure_131_2[17]);
                obj8.transitionToChannel(closure_130_0.channelId);
                const promise3 = new Promise((arg0) => setTimeout(arg0, 1000));
                c6 = 11;
                c7 = 1;
                const obj17 = { value: promise3, done: false };
                return obj17;
              }
            } else {
              if (!closure_130_1) {
                closure_131_14("Writing caches");
              }
              obj6 = closure_131_0(closure_131_2[18]);
              c6 = 12;
              c7 = 1;
              const obj18 = { value: obj6.writeCaches(), done: false };
              return obj18;
            }
          }
        break;
        case 9:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else {
            if (!closure_130_1) {
              closure_131_14("Invite API call finished");
            }
            const promise4 = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              const timeout = setTimeout(arg1, 15000);
              const result = guild.addConditionalChangeListener(() => {
                if (null != guild.getGuild(invite.invite.expectedGuildId)) {
                  if (!closure_2_1) {
                    logger.log("Invited guild available in the store");
                    const _JSON = JSON;
                    const json = JSON.stringify({ type: "status", message: "Invited guild available in the store" });
                    closure_1(dependencyMap[8]).logToDevice(json);
                    obj = closure_1(dependencyMap[8]);
                  }
                  const _clearTimeout = clearTimeout;
                  clearTimeout(closure_1);
                  closure_0();
                  return false;
                }
              });
            });
            c6 = 10;
            c7 = 1;
            const obj20 = { value: promise4, done: false };
            return obj20;
          }
        break;
        case 10:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj21 = { value, done: true };
            return obj21;
          }
        break;
        case 11:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj22 = { value, done: true };
            return obj22;
          }
        break;
        case 12:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj23 = { value, done: true };
            return obj23;
          } else {
            const promise5 = new Promise((arg0) => setTimeout(arg0, 1000));
            c6 = 13;
            c7 = 1;
            obj = { value: promise5, done: false };
            return obj;
          }
        break;
        default:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj24 = { value, done: true };
            return obj24;
          } else {
            if (!closure_130_1) {
              closure_131_14("Sending reply");
              closure_131_13("success", "Setup Complete");
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
      }
    } catch (tmp144) {
      closure_4 = tmp144;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp144;
      } else {
        c6 = tmp;
      }
    }
  }
};
function apiLogin() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_19 = async function _apiLogin(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
          closure_5 = tmp2;
          c4 = 0;
          closure_132_0 = login;
          closure_132_1 = password;
          closure_132_2 = dependencyMap;
          closure_132_3 = closure_3;
          let id;
          if (authStore.getId() === closure_3) {
            if (null != closure_132_2) {
              c7 = 3;
              const obj1 = { value: closure_132_2, done: true };
              return obj1;
            } else {
              const token = authStore.getToken();
              if (null != token) {
                c7 = 3;
                const obj2 = { value: token, done: true };
                return obj2;
              }
            }
          }
          if (null != authStore.getId()) {
            let obj16 = require("AuthenticationActionCreators");
            c6 = 3;
            c7 = 1;
            const obj3 = { value: obj16.logout("TTI_test"), done: false };
            return obj3;
          } else if (null != closure_132_2) {
            const _fetch = fetch;
            const obj4 = { method: "HEAD", headers: null };
            const obj5 = { Authorization: closure_132_2 };
            obj4.headers = obj5;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: fetch("https://discord.com/api/users/@me/settings-proto/2", obj4), done: false };
            return obj6;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj7 = { value, done: true };
          return obj7;
        } else {
          closure_132_2 = value;
          let promise = new Promise((arg0) => closure_1_7(arg0));
          c6 = 6;
          c7 = 1;
          const obj8 = { value: promise, done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else if (value.ok) {
          obj7 = closure_133_1(closure_133_2[15]);
          c6 = 4;
          c7 = 1;
          const obj10 = { value: obj7.loginToken(closure_132_2, false), done: false };
          return obj10;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj11 = { value, done: true };
          return obj11;
        }
      } else if (4 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          promise = new Promise((arg0) => closure_1_7(arg0));
          c6 = 5;
          c7 = 1;
          const obj13 = { value: promise, done: false };
          return obj13;
        }
      } else if (5 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else if (closure_133_8.getId() === closure_132_3) {
          c7 = 3;
          const obj15 = { value: closure_132_2, done: true };
          return obj15;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        obj16 = { value, done: true };
        return obj16;
      } else {
        id = closure_133_8.getId();
        if (id !== closure_132_3) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          let error = new Error("Unable to login " + closure_132_0 + ", expected id " + closure_132_3 + " after login but was " + id);
          throw error;
        } else {
          c7 = 3;
          obj = { value: closure_132_2, done: true };
          return obj;
        }
      }
      const promise1 = new Promise((arg0, arg1) => {
        login = arg0;
        password = arg1;
        const items = ["LOGIN_FAILURE", "PASSWORDLESS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"];
        function _loop(iter) {
          obj = password(573);
          const f125841 = () => {
            const error = new Error("Unable to login " + login + ". Login failed with action '" + obj + "'");
            iter(error);
          };
          function handler(arg0) {
            obj.unsubscribe(closure_1, handler);
            return f125841(arg0);
          }
          const subscription = obj.subscribe(iter, handler);
        }
        const iter = items[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
        closure_1_20(password(573), "LOGIN_SUCCESS", (token) => closure_0(token.token));
        password(6593);
        obj = { login, password };
        obj.login(obj);
      });
      c6 = 1;
      c7 = 1;
      const obj17 = { value: promise1, done: false };
      return obj17;
    } catch (tmp55) {
      c7 = tmp;
      throw tmp55;
    }
  }
};
function subscribeOnce(subscribe, arg1, arg2) {
  closure_0 = subscribe;
  const LOGIN_SUCCESS = "LOGIN_SUCCESS";
  closure_2 = arg2;
  function handler(arg0) {
    obj.unsubscribe(closure_1, handler);
    return f125841(arg0);
  }
  return subscribe.subscribe("LOGIN_SUCCESS", handler);
}
const applicationReady = fn(17228).applicationReady;
fn(5558).addPostConnectionCallback;
const logger = new LoggerDefault("TTITestAction");
let obj = {
  "setup-test": setupTTITest,
  ping() {
    const json = JSON.stringify({ type: "pong" });
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = closure_0(10194);
    const result = obj.resetComponentProfiler();
    obj = { type: "response", status: "success", message: "reset-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = closure_0(10194);
    const result = obj.pauseComponentProfiler();
    obj = { type: "response", status: "success", message: "pause-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = closure_0(10194);
    const result = obj.resumeComponentProfiler();
    obj = { type: "response", status: "success", message: "resume-component-profiler" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = { stats: closure_0(10194).dumpStats() };
    obj = { type: "response", status: "success", message: "dump-component-profiler-stats" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    const obj2 = closure_0(10194);
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = NativeJankStatsModuleDefault;
    let report;
    if (obj != null) {
      report = obj.requestReport();
    }
    obj = { report };
    obj = { type: "response", status: "success", message: "dump-jank-stats" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
    const tmpResult = NativeTTIManagerModuleDefault;
  },
  (multiplier) => {
    obj = NativeJankStatsModuleDefault;
    if (obj != null) {
      const result = obj.setJankHeuristicMultiplier(multiplier.multiplier);
    }
    obj = { type: "response", status: "success", message: "set-jank-multiplier" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
    const tmpResult = NativeTTIManagerModuleDefault;
  },
  () => {
    obj = NativeJankStatsModuleDefault;
    if (obj != null) {
      obj.startTracking();
    }
    obj = { type: "response", status: "success", message: "start-jank-stats" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
    const tmpResult = NativeTTIManagerModuleDefault;
  },
  (action) => {
    obj = DispatcherDefault;
    obj.dispatch(action.action);
    obj = { type: "response", status: "success", message: "flux-dispatch" };
    const merged = Object.assign(undefined);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = { token: AuthenticationStore.getToken() };
    obj = { type: "response", status: "success", message: "get-token" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = { cumulativeCPU: ProcessUtilsDefault.getCumulativeCPUUsage(), currentMemoryUsage: null };
    obj.currentMemoryUsage = ProcessUtilsDefault.getCurrentMemoryUsageKB();
    obj = { type: "response", status: "success", message: "get-resource-usage" };
    const merged = Object.assign(obj);
    const json = JSON.stringify(obj);
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  backchannel: null
};
let closure_3 = asyncGeneratorStep(async (arg0) => {
  if (c12 === 2) {
    c12 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
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
      c12 = 2;
      if (0 === c11) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_8 = tmp4;
          closure_7 = tmp6;
          closure_135_0 = undefined;
          closure_135_1 = undefined;
          closure_135_2 = undefined;
          ({ reply: closure_135_0, args } = closure_0);
          const obj1 = { ClientInfoUtils: null, ComponentProfiler: null, Dispatcher: null, ExperimentStore: null, NativeJankStats: null, ProcessUtils: null, AnalyticsUtils: null, TTITestAction: null };
          const obj2 = { getConstants: closure_0(1364).getConstants };
          obj1.ClientInfoUtils = obj2;
          const obj3 = { resetComponentProfiler: closure_0(10194).resetComponentProfiler, resumeComponentProfiler: closure_0(10194).resumeComponentProfiler, pauseComponentProfiler: closure_0(10194).pauseComponentProfiler, dumpStats: closure_0(10194).dumpStats };
          obj1.ComponentProfiler = obj3;
          obj1.Dispatcher = DispatcherDefault;
          obj1.ExperimentStore = ExperimentStore;
          obj1.NativeJankStats = NativeJankStatsModuleDefault;
          obj1.ProcessUtils = ProcessUtilsDefault;
          const obj4 = { startRecordingAnalyticsEvents: closure_0(1242).startRecordingAnalyticsEvents, stopRecordingAnalyticsEvents: closure_0(1242).stopRecordingAnalyticsEvents, getAnalyticsEventsRecording: closure_0(1242).getAnalyticsEventsRecording, clearAnalyticsEventsRecording: closure_0(1242).clearAnalyticsEventsRecording };
          obj1.AnalyticsUtils = obj4;
          const obj5 = { apiLogin, setupTTITest };
          obj1.TTITestAction = obj5;
          const constructor = asyncGeneratorStep(async () => {
            if (c0 === 2) {
              c0 = 3;
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
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp4) {
                c0 = tmp;
                throw tmp4;
              }
            }
          }).constructor;
          const obj6 = {};
          closure_135_1 = obj6;
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
          items[closure_2] = String(closure_0.source);
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
          const obj7 = { value: HermesBuiltin.apply(items1, undefined), done: false };
          return obj7;
        }
      } else {
        if (1 === tmp9) {
          closure_6 = closure_10;
          c9 = 0;
          if (typeof closure_135_0 === "string") {
            const _fetch3 = fetch;
            const request = { method: "PUT", body: null, headers: null };
            const _JSON3 = JSON;
            request.body = JSON.stringify(closure_135_1);
            request.headers = { "Content-Type": "application/json" };
            c11 = 6;
            c12 = 1;
            const obj8 = { value: fetch(closure_135_0, request), done: false };
            return obj8;
          }
        } else {
          if (2 === tmp9) {
            c9 = 1;
            closure_135_3 = closure_10;
            const obj9 = { details: closure_136_15(closure_10), string: null };
            const _String = String;
            obj9.string = String(closure_135_3);
            closure_135_1.error = obj9;
          } else {
            if (3 === tmp9) {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else {
                closure_4 = value;
                if (arg0 === 2) {
                  c9 = 0;
                  if (typeof closure_135_0 === "string") {
                    const _fetch = fetch;
                    const request1 = { method: "PUT", body: null, headers: null };
                    const _JSON = JSON;
                    request1.body = JSON.stringify(closure_135_1);
                    request1.headers = { "Content-Type": "application/json" };
                    c11 = 4;
                    c12 = 1;
                    const obj10 = { value: fetch(closure_135_0, request1), done: false };
                    return obj10;
                  } else {
                    c12 = 3;
                  }
                } else {
                  obj6.result = value;
                  c9 = 1;
                }
              }
            } else if (4 === tmp9) {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                closure_135_2 = value;
                if (!closure_135_2.ok) {
                  const obj12 = { status: closure_135_2.status };
                  closure_136_13("error", "Failed to send backchannel reply", obj12);
                }
              }
            } else if (5 === tmp9) {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                closure_135_2 = value;
                if (closure_135_2.ok) {
                  closure_136_13("success", "Backchannel reply sent");
                } else {
                  const obj14 = { status: closure_135_2.status };
                  closure_136_13("error", "Failed to send backchannel reply", obj14);
                }
                c12 = 3;
              }
            } else if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_135_2 = value;
              if (closure_135_2.ok) {
                closure_136_13("success", "Backchannel reply sent");
              } else {
                obj = { status: closure_135_2.status };
                closure_136_13("error", "Failed to send backchannel reply", obj);
              }
            }
            closure_136_13("success", "Backchannel reply sent");
          }
          c9 = 0;
          if (typeof closure_135_0 === "string") {
            const _fetch2 = fetch;
            const request2 = { method: "PUT", body: null, headers: null };
            const _JSON2 = JSON;
            request2.body = JSON.stringify(closure_135_1);
            request2.headers = { "Content-Type": "application/json" };
            c11 = 5;
            c12 = 1;
            const obj16 = { value: fetch(closure_135_0, request2), done: false };
            return obj16;
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
});
obj.backchannel = function() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_0 = asyncGeneratorStep(async (arg0) => {
  closure_1 = tmp2;
  const _TextDecoder = TextDecoder;
  const decoder = new TextDecoder("utf-8");
  const _JSON = JSON;
  const parsed = JSON.parse(decoder.decode(closure_0(tmp5[19]).base64decode(closure_0.actionData)));
  closure_129_0 = parsed;
  const obj1 = {};
  const merged = Object.assign(parsed);
  obj1.user = "redacted";
  logger.log("Received TTI Test Action", obj1);
  await promise.promise;
  dependencyMap[closure_129_0.type](closure_129_0);
  return Promise.resolve();
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/headless_tasks/android/TTITestAction.tsx");

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