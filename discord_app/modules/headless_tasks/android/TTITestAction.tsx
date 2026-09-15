// discord_app/modules/headless_tasks/android/TTITestAction.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ProcessUtilsDefault from "../../../utils/ProcessUtils.native.tsx";
import NativeTTIManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx";
import NativeJankStatsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

const require = globalThis.__r;

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
      const obj2 = { value, done: true };
      return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
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
                const obj5 = { value: closure_131_1(closure_131_2[15]).logout("TTI_test"), done: false };
                return obj5;
              } else if (closure_131_8.getId() !== expectedId) {
                closure_131_14("Logging in new user");
                const promise = new Promise((arg0, arg1) => {
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
                const obj6 = { login: email, password };
                c6 = 4;
                c7 = 1;
                const obj8 = { value: closure_131_1(closure_131_2[15]).login(obj6), done: false };
                return obj8;
              } else {
                c5 = 0;
              }
            }
            closure_131_14("Waiting for socket connection");
            const promise7 = new Promise((arg0) => closure_1_7(arg0));
            c6 = 3;
            c7 = 1;
            const obj10 = { value: promise7, done: false };
            return obj10;
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
            const obj12 = { value, done: true };
            return obj12;
          } else {
            const promise8 = new Promise((arg0) => setTimeout(arg0, 1000));
            c6 = 8;
            c7 = 1;
            const obj13 = { value: promise8, done: false };
            return obj13;
          }
        break;
        case 4:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            c6 = 6;
            c7 = 1;
            const obj15 = { value: closure_130_5, done: false };
            return obj15;
          }
        break;
        case 5:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj16 = { value, done: true };
            return obj16;
          }
        break;
        case 6:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            closure_131_14("Waiting for socket connection");
            const promise9 = new Promise((arg0) => closure_1_7(arg0));
            c6 = 7;
            c7 = 1;
            const obj18 = { value: promise9, done: false };
            return obj18;
          }
        break;
        case 7:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj19 = { value, done: true };
            return obj19;
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
            const obj20 = { value, done: true };
            return obj20;
          } else {
            let tmp26 = null != closure_130_0.invite;
            if (tmp26) {
              tmp26 = null == closure_131_10.getGuild(closure_130_0.invite.expectedGuildId);
            }
            if (tmp26) {
              if (!closure_130_1) {
                closure_131_14("Inviting to target guild");
              }
              const obj21 = { inviteKey: closure_130_0.invite.code, context: { location: "tti_tests" }, skipOnboarding: true };
              c6 = 9;
              c7 = 1;
              const obj22 = { value: closure_131_1(closure_131_2[16]).acceptInvite(obj21), done: false };
              return obj22;
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
                closure_131_0(closure_131_2[17]).transitionToChannel(closure_130_0.channelId);
                const promise10 = new Promise((arg0) => setTimeout(arg0, 1000));
                c6 = 11;
                c7 = 1;
                const obj23 = { value: promise10, done: false };
                return obj23;
              }
            } else {
              if (!closure_130_1) {
                closure_131_14("Writing caches");
              }
              c6 = 12;
              c7 = 1;
              const obj25 = { value: closure_131_0(closure_131_2[18]).writeCaches(), done: false };
              return obj25;
            }
          }
        break;
        case 9:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj26 = { value, done: true };
            return obj26;
          } else {
            if (!closure_130_1) {
              closure_131_14("Invite API call finished");
            }
            const promise11 = new Promise((arg0, arg1) => {
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
            const obj28 = { value: promise11, done: false };
            return obj28;
          }
        break;
        case 10:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj29 = { value, done: true };
            return obj29;
          }
        break;
        case 11:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj30 = { value, done: true };
            return obj30;
          }
        break;
        case 12:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj31 = { value, done: true };
            return obj31;
          } else {
            const promise12 = new Promise((arg0) => setTimeout(arg0, 1000));
            c6 = 13;
            c7 = 1;
            obj = { value: promise12, done: false };
            return obj;
          }
        break;
        default:
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj32 = { value, done: true };
            return obj32;
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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value: closure_132_2, done: true };
              return obj4;
            } else {
              const token = authStore.getToken();
              if (null != token) {
                c7 = 3;
                const obj5 = { value: token, done: true };
                return obj5;
              }
            }
          }
          if (null != authStore.getId()) {
            c6 = 3;
            c7 = 1;
            const obj6 = { value: require("AuthenticationActionCreators").logout("TTI_test"), done: false };
            return obj6;
          } else if (null != closure_132_2) {
            const _fetch = fetch;
            const obj7 = { method: "HEAD", headers: null };
            const obj9 = { Authorization: closure_132_2 };
            obj7.headers = obj9;
            c6 = 2;
            c7 = 1;
            const obj10 = { value: fetch("https://discord.com/api/users/@me/settings-proto/2", obj7), done: false };
            return obj10;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_132_2 = value;
          const promise = new Promise((arg0) => closure_1_7(arg0));
          c6 = 6;
          c7 = 1;
          const obj12 = { value: promise, done: false };
          return obj12;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else if (value.ok) {
          c6 = 4;
          c7 = 1;
          const obj14 = { value: closure_133_1(closure_133_2[15]).loginToken(closure_132_2, false), done: false };
          return obj14;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj15 = { value, done: true };
          return obj15;
        }
      } else if (4 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          const promise3 = new Promise((arg0) => closure_1_7(arg0));
          c6 = 5;
          c7 = 1;
          const obj18 = { value: promise3, done: false };
          return obj18;
        }
      } else if (5 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj19 = { value, done: true };
          return obj19;
        } else if (closure_133_8.getId() === closure_132_3) {
          c7 = 3;
          const obj20 = { value: closure_132_2, done: true };
          return obj20;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj21 = { value, done: true };
        return obj21;
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
      const promise4 = new Promise((arg0, arg1) => {
        login = arg0;
        password = arg1;
        const items = ["LOGIN_FAILURE", "PASSWORDLESS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"];
        function _loop(iter) {
          obj = password(573);
          const f126625 = () => {
            const error = new Error("Unable to login " + login + ". Login failed with action '" + obj + "'");
            iter(error);
          };
          function handler(arg0) {
            obj.unsubscribe(closure_1, handler);
            return f126625(arg0);
          }
          const subscription = obj.subscribe(iter, handler);
        }
        const iter = items[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
        closure_1_20(password(573), "LOGIN_SUCCESS", (token) => closure_0(token.token));
        password(6698).login({ login, password });
      });
      c6 = 1;
      c7 = 1;
      const obj22 = { value: promise4, done: false };
      return obj22;
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
    return f126625(arg0);
  }
  return subscribe.subscribe("LOGIN_SUCCESS", handler);
}
const applicationReady = fn(17380).applicationReady;
fn(5643).addPostConnectionCallback;
const logger = new LoggerDefault("TTITestAction");
let obj = {
  "setup-test": setupTTITest,
  ping() {
    const json = JSON.stringify({ type: "pong" });
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    const result = closure_0(10324).resetComponentProfiler();
    const merged = Object.assign(undefined);
    const json = JSON.stringify({ type: "response", status: "success", message: "reset-component-profiler" });
    obj = closure_0(10324);
    const obj2 = { type: "response", status: "success", message: "reset-component-profiler" };
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    const result = closure_0(10324).pauseComponentProfiler();
    const merged = Object.assign(undefined);
    const json = JSON.stringify({ type: "response", status: "success", message: "pause-component-profiler" });
    obj = closure_0(10324);
    const obj2 = { type: "response", status: "success", message: "pause-component-profiler" };
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    const result = closure_0(10324).resumeComponentProfiler();
    const merged = Object.assign(undefined);
    const json = JSON.stringify({ type: "response", status: "success", message: "resume-component-profiler" });
    obj = closure_0(10324);
    const obj2 = { type: "response", status: "success", message: "resume-component-profiler" };
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = { stats: closure_0(10324).dumpStats() };
    const merged = Object.assign(obj);
    const json = JSON.stringify({ type: "response", status: "success", message: "dump-component-profiler-stats" });
    const obj2 = closure_0(10324);
    const obj3 = { type: "response", status: "success", message: "dump-component-profiler-stats" };
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = NativeJankStatsModuleDefault;
    let report;
    if (obj != null) {
      report = obj.requestReport();
    }
    const merged = Object.assign({ report });
    const json = JSON.stringify({ type: "response", status: "success", message: "dump-jank-stats" });
    NativeTTIManagerModuleDefault.logToDevice(json);
    const obj2 = { report };
    const obj3 = { type: "response", status: "success", message: "dump-jank-stats" };
    const tmpResult = NativeTTIManagerModuleDefault;
  },
  (multiplier) => {
    obj = NativeJankStatsModuleDefault;
    if (obj != null) {
      const result = obj.setJankHeuristicMultiplier(multiplier.multiplier);
    }
    const merged = Object.assign(undefined);
    const json = JSON.stringify({ type: "response", status: "success", message: "set-jank-multiplier" });
    NativeTTIManagerModuleDefault.logToDevice(json);
    const obj2 = { type: "response", status: "success", message: "set-jank-multiplier" };
    const tmpResult = NativeTTIManagerModuleDefault;
  },
  () => {
    obj = NativeJankStatsModuleDefault;
    if (obj != null) {
      obj.startTracking();
    }
    const merged = Object.assign(undefined);
    const json = JSON.stringify({ type: "response", status: "success", message: "start-jank-stats" });
    NativeTTIManagerModuleDefault.logToDevice(json);
    const obj2 = { type: "response", status: "success", message: "start-jank-stats" };
    const tmpResult = NativeTTIManagerModuleDefault;
  },
  (action) => {
    DispatcherDefault.dispatch(action.action);
    const merged = Object.assign(undefined);
    const json = JSON.stringify({ type: "response", status: "success", message: "flux-dispatch" });
    const obj2 = { type: "response", status: "success", message: "flux-dispatch" };
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    const merged = Object.assign({ token: AuthenticationStore.getToken() });
    const json = JSON.stringify({ type: "response", status: "success", message: "get-token" });
    obj = { token: AuthenticationStore.getToken() };
    const obj2 = { type: "response", status: "success", message: "get-token" };
    NativeTTIManagerModuleDefault.logToDevice(json);
  },
  () => {
    obj = { cumulativeCPU: ProcessUtilsDefault.getCumulativeCPUUsage(), currentMemoryUsage: null };
    obj.currentMemoryUsage = ProcessUtilsDefault.getCurrentMemoryUsageKB();
    const merged = Object.assign(obj);
    const json = JSON.stringify({ type: "response", status: "success", message: "get-resource-usage" });
    const obj4 = { type: "response", status: "success", message: "get-resource-usage" };
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
      let obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_8 = tmp4;
          closure_7 = tmp6;
          closure_135_0 = undefined;
          closure_135_1 = undefined;
          closure_135_2 = undefined;
          ({ reply: closure_135_0, args } = closure_0);
          const obj4 = { ClientInfoUtils: null, ComponentProfiler: null, Dispatcher: null, ExperimentStore: null, NativeJankStats: null, ProcessUtils: null, AnalyticsUtils: null, TTITestAction: null };
          const obj5 = { getConstants: closure_0(1363).getConstants };
          obj4.ClientInfoUtils = obj5;
          const obj6 = { resetComponentProfiler: closure_0(10324).resetComponentProfiler, resumeComponentProfiler: closure_0(10324).resumeComponentProfiler, pauseComponentProfiler: closure_0(10324).pauseComponentProfiler, dumpStats: closure_0(10324).dumpStats };
          obj4.ComponentProfiler = obj6;
          obj4.Dispatcher = DispatcherDefault;
          obj4.ExperimentStore = ExperimentStore;
          obj4.NativeJankStats = NativeJankStatsModuleDefault;
          obj4.ProcessUtils = ProcessUtilsDefault;
          const obj7 = { startRecordingAnalyticsEvents: closure_0(1241).startRecordingAnalyticsEvents, stopRecordingAnalyticsEvents: closure_0(1241).stopRecordingAnalyticsEvents, getAnalyticsEventsRecording: closure_0(1241).getAnalyticsEventsRecording, clearAnalyticsEventsRecording: closure_0(1241).clearAnalyticsEventsRecording };
          obj4.AnalyticsUtils = obj7;
          const obj8 = { apiLogin, setupTTITest };
          obj4.TTITestAction = obj8;
          const constructor = asyncGeneratorStep(async () => {
            if (c0 === 2) {
              c0 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
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
          const obj9 = {};
          closure_135_1 = obj9;
          closure_1 = args;
          if (args == null) {
            closure_1 = {};
          }
          const _Object = Object;
          const keys = Object.keys(obj4);
          const _Object2 = Object;
          const values = Object.values(obj4);
          const _Object3 = Object;
          const keys1 = Object.keys(closure_1);
          const _Object4 = Object;
          const values2 = Object.values(closure_1);
          c9 = 2;
          closure_2 = 0;
          const items = [, ];
          const arraySpreadResult = HermesBuiltin.arraySpread(keys, 0);
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
          const arraySpreadResult2 = HermesBuiltin.arraySpread(values, 0);
          closure_3 = arraySpreadResult2;
          items1[arraySpreadResult2] = keys;
          const sum1 = closure_3 + 1;
          closure_3 = sum1;
          closure_3 = HermesBuiltin.arraySpread(values2, sum1);
          c11 = 3;
          c12 = 1;
          const obj10 = { value: HermesBuiltin.apply(items1, undefined), done: false };
          return obj10;
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
            const obj11 = { value: fetch(closure_135_0, request), done: false };
            return obj11;
          }
        } else {
          if (2 === tmp9) {
            c9 = 1;
            closure_135_3 = closure_10;
            const obj12 = { details: closure_136_15(closure_10), string: null };
            const _String = String;
            obj12.string = String(closure_135_3);
            closure_135_1.error = obj12;
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
                    const obj13 = { value: fetch(closure_135_0, request1), done: false };
                    return obj13;
                  } else {
                    c12 = 3;
                  }
                } else {
                  obj9.result = value;
                  c9 = 1;
                }
              }
            } else if (4 === tmp9) {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                closure_135_2 = value;
                if (!closure_135_2.ok) {
                  const obj15 = { status: closure_135_2.status };
                  closure_136_13("error", "Failed to send backchannel reply", obj15);
                }
              }
            } else if (5 === tmp9) {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                closure_135_2 = value;
                if (closure_135_2.ok) {
                  closure_136_13("success", "Backchannel reply sent");
                } else {
                  const obj17 = { status: closure_135_2.status };
                  closure_136_13("error", "Failed to send backchannel reply", obj17);
                }
                c12 = 3;
              }
            } else if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj18 = { value, done: true };
              return obj18;
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
            const obj19 = { value: fetch(closure_135_0, request2), done: false };
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
  const obj4 = {};
  const merged = Object.assign(parsed);
  obj4.user = "redacted";
  logger.log("Received TTI Test Action", obj4);
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