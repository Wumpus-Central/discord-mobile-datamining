// === Module 18169: TTITestAction ===

// Module 18169 (TTITestAction)
import LoggerDefault from "Logger" /* 3 */;
import AnalyticsUtils from "AnalyticsUtils" /* 1252 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1363 */;
import react_native from "react-native" /* 1368 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import react_nativeDefault from "react-native" /* 4749 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 5955 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6089 */;
import ComponentProfiler from "ComponentProfiler" /* 12549 */;
import react_nativeDefault2 from "react-native" /* 15977 */;
import NativeAppStartup from "NativeAppStartup" /* 17444 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4709 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import Dispatcher from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_6, closure_8, guildId, set;

let closure_12;
let unpackModuleId;
function releaseDelayedMessageLoad(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = c14;
  }
  if (null != tmp) {
    if (c14 === tmp) {
      if (null != tmp.timer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.timer);
      }
      c14 = null;
      const actions = tmp.actions;
      for (const item10013 of actions) {
        obj = Dispatcher;
        let dispatchResult = obj.dispatch(item10013);
        continue;
      }
    }
  }
}
function sendReply(status, message, arg2) {
  obj = { type: "response", status, message };
  const merged = Object.assign(arg2);
  const json = stringify(obj);
  const obj2 = react_nativeDefault;
  obj2.logToDevice(json);
}
function sendStatus(message) {
  logger.log(message);
  obj = { type: "status", message };
  const json = JSON.stringify(obj);
  const obj2 = react_nativeDefault;
  obj2.logToDevice(json);
}
let obj = function _captureNavigationTTI() {
  obj = _asyncToGenerator(async function(arg0) {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let delayMs;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp4;
            let closure_3 = tmp;
            guildId = undefined;
            delayMs = undefined;
            releaseDelayedMessageLoad();
            sendStatus("Waiting for socket connection");
            const self5 = this;
            const self6 = this;
            const promise = new Promise((arg0) => closure_1_6(arg0));
            c5 = 1;
            c6 = 1;
            const obj6 = { value: promise, done: false };
            return obj6;
          }
        } else {
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              guildId = channel.getChannel(closure_0.toChannelId);
              if (null != guildId) {
                closure_132_19("Resetting navigation to DMs");
                if (closure_132_21()) {
                  const self3 = this;
                  const self4 = this;
                  const promise3 = new Promise((arg0) => setTimeout(arg0, 1000));
                  c5 = 2;
                  c6 = 1;
                  const obj8 = { value: promise3, done: false };
                  return obj8;
                } else {
                  closure_132_18("error", "Unable to reset navigation to DMs");
                }
              } else {
                const _HermesInternal4 = HermesInternal;
                closure_132_18("error", "Unable to switch to channel " + closure_0.toChannelId + " because it does not exist on the client");
              }
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              const _HermesInternal5 = HermesInternal;
              closure_132_19("Opening the channel list for " + closure_0.toChannelId);
              const navigateToRootTab = closure_132_0(closure_132_2[17]).navigateToRootTab;
              const tmp106 = closure_132_0(closure_132_2[17]);
              guildId = guildId.getGuildId() ?? closure_132_11;
              const obj10 = { screen: "guilds", guildId, resetRoot: true, forceNavigate: true, drawerOpen: true };
              if (navigateToRootTab(obj10)) {
                const self = this;
                const self2 = this;
                const promise4 = new Promise((arg0) => setTimeout(arg0, 1000));
                c5 = 3;
                c6 = 1;
                const obj11 = { value: promise4, done: false };
                return obj11;
              } else {
                const _HermesInternal3 = HermesInternal;
                closure_132_18("error", "Unable to open the channel list for " + closure_0.toChannelId);
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            if (true === closure_0.coldMessageCache) {
              const _HermesInternal = HermesInternal;
              closure_132_19("Clearing the in-memory message cache for " + closure_0.toChannelId);
              obj = closure_132_1(closure_132_2[18]);
              obj.clearChannel(closure_0.toChannelId);
            }
            const artificialContentDelayMs = closure_0.artificialContentDelayMs;
            let c2 = artificialContentDelayMs;
            if (artificialContentDelayMs == null) {
              c2 = 0;
            }
            delayMs = c2;
            if (delayMs > 0) {
              if (true !== closure_0.coldMessageCache) {
                closure_132_18("error", "Artificial content delay requires a cold message cache");
                c6 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const obj13 = { channelId: closure_0.toChannelId, delayMs, actions: [], timer: null };
              }
            }
            const obj14 = { destinationKey: closure_0.toChannelId };
            const obj2 = closure_132_0(closure_132_2[19]);
            const result = obj2.armNavigationTTIDebugFreeze(closure_0.freeze, obj14);
            if (true === closure_0.coldMessageCache) {
              const obj15 = { guildId: guildId.getGuildId(), channelId: guildId.id, forceFetch: true, skipLocalFetch: true };
              const fetchMessages = closure_132_1(closure_132_2[20]).fetchMessages;
              const tmp35 = closure_132_1(closure_132_2[20]);
              const messages = fetchMessages(obj15);
            }
            closure_132_18("success", "Navigation TTI freeze armed");
            const _HermesInternal2 = HermesInternal;
            closure_132_19("Selecting capture channel " + closure_0.toChannelId + " from the channel list");
            const obj5 = closure_132_0(closure_132_2[21]);
            obj5.transitionToChannel(closure_0.toChannelId, { navigationReplace: false });
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp88) {
        c6 = 3;
        throw tmp88;
      }
    }
  });
  return obj(...arguments);
};
function resetNavigationToDMs() {
  obj = NavigationRouteUtils;
  const obj2 = { screen: "guilds", guildId: unpackModuleId, resetRoot: true, forceNavigate: true, drawerOpen: false };
  return obj.navigateToRootTab(obj2);
}
obj = function _navigateToDMs() {
  obj = _asyncToGenerator(async function() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp3;
            const self3 = this;
            const self4 = this;
            const promise = new Promise((arg0) => closure_1_6(arg0));
            c2 = 1;
            c3 = 1;
            const obj4 = { value: promise, done: false };
            return obj4;
          }
        } else {
          if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (closure_129_21()) {
              const self = this;
              const self2 = this;
              const promise2 = new Promise((arg0) => setTimeout(arg0, 1000));
              c2 = 2;
              c3 = 1;
              const obj6 = { value: promise2, done: false };
              return obj6;
            } else {
              closure_129_18("error", "Unable to reset navigation to DMs");
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_18("success", "Navigation reset to DMs");
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        c3 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
function getErrorDetails(headers) {
  if (null != headers) {
    if (typeof headers === "object") {
      const _Set = Set;
      const self = this;
      const self2 = this;
      let prototypeOf = headers;
      set = new Set();
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
      for (const item10021 of tmp13) {
        obj[item10021] = headers[item10021];
        continue;
      }
      return obj;
    }
  }
  return headers;
}
function setupTTITest() {
  return obj(...arguments);
}
obj = function _setupTTITest() {
  obj = _asyncToGenerator(async function(arg0) {
    let closure_4;
    let guild;
    let obj10;
    let obj15;
    let obj28;
    let obj31;
    let tmp;
    function waitForStartupRoute(arg0, arg1) {
      let resolved;
      closure_0 = arg0;
      let c1 = 20000;
      if (closure_9.lastNonVoiceRoute === arg0) {
        resolved = Promise.resolve(true);
      } else {
        const self = this;
        const self2 = this;
        resolved = new Promise((arg0) => {
          closure_0 = arg0;
          function onChange() {
            if (closure_3_9.lastNonVoiceRoute === closure_0) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_2);
              closure_3_9.removeChangeListener(onChange);
              closure_0(true);
            }
          }
          const timeout = setTimeout(() => {
            closure_3_9.removeChangeListener(onChange);
            closure_0(false);
          }, onChange);
          closure_1_9.addChangeListener(onChange);
        });
      }
      return resolved;
    }
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let flag;
        let email;
        let password;
        let expectedId;
        let promise;
        let id2;
        let id;
        let error1;
        let closure_9;
        let closure_10;
        let closure_11;
        let error3;
        let error2;
        c7 = 2;
        switch (c6) {
          case 0:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp4;
              flag = closure_1;
              if (closure_1 === undefined) {
                flag = false;
              }
              email = undefined;
              password = undefined;
              expectedId = undefined;
              promise = undefined;
              id2 = undefined;
              id = undefined;
              error1 = undefined;
              closure_9 = undefined;
              closure_10 = undefined;
              closure_11 = undefined;
              error3 = undefined;
              error2 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Reflect", done: true };
            }
            break;
          }
          case 1:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              if (null != invite.user) {
                email = invite.user.email;
                password = invite.user.password;
                expectedId = invite.user.expectedId;
                c5 = 1;
                const tmp136 = null != closure_131_7.getId() && closure_131_7.getId() !== expectedId;
                if (tmp136) {
                  closure_131_19("Logging out old user");
                  c6 = 5;
                  c7 = 1;
                  const obj6 = { value: obj31.logout("TTI_test"), done: false };
                  obj31 = closure_131_1(closure_131_2[22]);
                  return obj6;
                } else if (closure_131_7.getId() !== expectedId) {
                  closure_131_19("Logging in new user");
                  const self17 = this;
                  const self18 = this;
                  promise = new Promise((arg0, arg1) => {
                    closure_0 = arg0;
                    closure_1 = arg1;
                    subscribeOnce = function subscribeOnce(LOGIN_SUCCESS, arg1) {
                      let handler;
                      closure_0 = LOGIN_SUCCESS;
                      closure_1 = arg1;
                      obj = closure_1(handler[10]);
                      handler = function handler() {
                        closure_1(LOGIN_SUCCESS);
                        obj = closure_1(closure_2_2[10]);
                        obj.unsubscribe(LOGIN_SUCCESS, handler);
                      };
                      const subscription = obj.subscribe(LOGIN_SUCCESS, handler);
                    };
                    const items = ["LOGIN_MFA_STEP", "LOGIN_SUSPENDED_USER", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED", "LOGIN_FAILURE"];
                    const tmp = items[Symbol.iterator]();
                    while (tmp !== undefined) {
                      let subscribeOnceResult = subscribeOnce(tmp2, (arg0) => {
                        const error = new Error("Unable to login " + closure_2_2 + ". Login failed with event '" + arg0 + "'");
                        closure_1(error);
                      });
                      continue;
                    }
                    subscribeOnce("LOGIN_SUCCESS", () => closure_0());
                  });
                  const obj7 = { login: email, password };
                  c6 = 4;
                  c7 = 1;
                  const obj8 = { value: obj28.login(obj7), done: false };
                  obj28 = closure_131_1(closure_131_2[22]);
                  return obj8;
                } else {
                  c5 = 0;
                }
              }
              closure_131_19("Waiting for socket connection");
              const self15 = this;
              const self16 = this;
              const promise6 = new Promise((arg0) => closure_1_6(arg0));
              c6 = 3;
              c7 = 1;
              const obj9 = { value: promise6, done: false };
              return obj9;
            }
            break;
          }
          case 2:
          {
            c5 = 0;
            let closure_14 = message;
            const tmp128 = flag;
            if (tmp128) {
              throw message;
            } else {
              closure_131_18("error", message.message);
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
            break;
          }
          case 3:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              const self13 = this;
              const self14 = this;
              const promise7 = new Promise((arg0) => setTimeout(arg0, 1000));
              c6 = 8;
              c7 = 1;
              const obj14 = { value: promise7, done: false };
              return obj14;
            }
            break;
          }
          case 4:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              c6 = 6;
              c7 = 1;
              const obj17 = { value: promise, done: false };
              return obj17;
            }
            break;
          }
          case 5:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj18 = { value, done: true };
              return obj18;
            }
            break;
          }
          case 6:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              closure_131_19("Waiting for socket connection");
              const self11 = this;
              const self12 = this;
              const promise8 = new Promise((arg0) => closure_1_6(arg0));
              c6 = 7;
              c7 = 1;
              const obj20 = { value: promise8, done: false };
              return obj20;
            }
            break;
          }
          case 7:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else {
              id2 = closure_131_7.getId();
              if (id2 !== expectedId) {
                const _Error4 = Error;
                const _HermesInternal3 = HermesInternal;
                const self19 = this;
                const self20 = this;
                let error = new Error("Unable to login " + email + ", expected id " + expectedId + " after login but was " + id2);
                throw error;
              }
            }
            break;
          }
          case 8:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj22 = { value, done: true };
              return obj22;
            } else {
              const tmp47 = null != invite.invite && null == closure_131_10.getGuild(invite.invite.expectedGuildId);
              if (tmp47) {
                const tmp102 = flag;
                if (!tmp102) {
                  closure_131_19("Inviting to target guild");
                }
                const obj23 = { inviteKey: invite.invite.code, context: { location: "tti_tests" }, skipOnboarding: true };
                c6 = 9;
                c7 = 1;
                const obj24 = { value: obj15.acceptInvite(obj23), done: false };
                obj15 = closure_131_1(closure_131_2[23]);
                return obj24;
              } else if (null != invite.channelId) {
                id = closure_131_8.getChannel(invite.channelId);
                if (null == id) {
                  const _Error3 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const self9 = this;
                  const self10 = this;
                  error1 = new Error("Unable to switch to channel " + invite.channelId + " because it does not exist on the client");
                  if (flag) {
                    throw error1;
                  } else {
                    closure_131_18("error", error1.message);
                    c7 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  const tmp183 = flag;
                  if (!tmp183) {
                    closure_131_19("Switching to desired channel");
                  }
                  const obj12 = closure_131_0(closure_131_2[21]);
                  obj12.transitionToChannel(invite.channelId);
                  const CHANNEL = closure_131_12.CHANNEL;
                  const obj13 = closure_131_0(closure_131_2[24]);
                  closure_9 = CHANNEL(obj13.getGuildIdForGenericRedirect(id), id.id);
                  c6 = 11;
                  c7 = 1;
                  const obj25 = { value: waitForStartupRoute(closure_9, 20000), done: false };
                  return obj25;
                }
              } else if (null == closure_131_7.getToken()) {
                const _Error2 = Error;
                const self7 = this;
                const self8 = this;
                error2 = new Error("Setup finished with no stored auth token, so measured launches would cold start on the login screen regardless of the startup route.");
                if (flag) {
                  throw error2;
                } else {
                  closure_131_18("error", error2.message);
                  c7 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else {
                const tmp53 = flag;
                if (!tmp53) {
                  closure_131_19("Writing caches");
                }
                c6 = 13;
                c7 = 1;
                const obj26 = { value: obj10.writeCaches(), done: false };
                obj10 = closure_131_0(closure_131_2[26]);
                return obj26;
              }
            }
            break;
          }
          case 9:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj27 = { value, done: true };
              return obj27;
            } else {
              const tmp36 = flag;
              if (!tmp36) {
                closure_131_19("Invite API call finished");
              }
              const _Promise2 = Promise;
              const self5 = this;
              const self6 = this;
              const promise9 = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                const timeout = setTimeout(arg1, 15000);
                const result = guild.addConditionalChangeListener(() => {
                  if (null != guild.getGuild(invite.invite.expectedGuildId)) {
                    if (!closure_2_1) {
                      logger.log("Invited guild available in the store");
                      const _JSON = JSON;
                      const json = JSON.stringify({ type: "status", message: "Invited guild available in the store" });
                      obj = closure_1(closure_2[11]);
                      obj.logToDevice(json);
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
              const obj29 = { value: promise9, done: false };
              return obj29;
            }
            break;
          }
          case 10:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj30 = { value, done: true };
              return obj30;
            }
            break;
          }
          case 11:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj32 = { value, done: true };
              return obj32;
            } else {
              closure_10 = value;
              const tmp27 = closure_10;
              if (!tmp27) {
                const obj4 = closure_131_0(closure_131_2[25]);
                let result = obj4.saveLastNonVoiceRoute(closure_9);
              }
              c6 = 12;
              c7 = 1;
              const obj33 = { value: closure_131_9.asyncPersist(), done: false };
              return obj33;
            }
            break;
          }
          case 12:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj34 = { value, done: true };
              return obj34;
            } else {
              closure_11 = value;
              const _Error = Error;
              const channelId = invite.channelId;
              const _String = String;
              const _HermesInternal = HermesInternal;
              const str = "Setup could not establish the startup route for channel ";
              const self3 = this;
              const self4 = this;
              error3 = new Error("Setup could not establish the startup route for channel " + channelId + ": expected " + closure_9 + " but DefaultRouteStore holds " + closure_131_9.lastNonVoiceRoute + " (persisted=" + String(false !== closure_11) + "). Measured launches would cold start somewhere other than the scenario channel.");
              if (flag) {
                throw error3;
              } else {
                closure_131_18("error", error3.message);
                c7 = 3;
                return { value: "IconComponent", done: null };
              }
            }
            break;
          }
          case 13:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj35 = { value, done: true };
              return obj35;
            } else {
              const _Promise = Promise;
              let self = this;
              let self2 = this;
              const promise10 = new Promise((arg0) => setTimeout(arg0, 1000));
              c6 = 14;
              c7 = 1;
              obj = { value: promise10, done: false };
              return obj;
            }
            break;
          }
          default:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj36 = { value, done: true };
              return obj36;
            } else {
              const tmp164 = flag;
              if (!tmp164) {
                closure_131_19("Sending reply");
                closure_131_18("success", "Setup Complete");
              }
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
            break;
          }
        }
      } catch (tmp170) {
        message = tmp170;
        if (0 === c5) {
          c7 = 3;
          throw tmp170;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function apiLogin() {
  return obj(...arguments);
}
obj = function _apiLogin() {
  obj = _asyncToGenerator(async function(arg0, arg1, arg2, arg3) {
    let closure_2;
    let login;
    let obj17;
    let obj8;
    let obj9;
    let closure_3 = arg3;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let id;
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
            let closure_5 = tmp;
            let c4 = 0;
            id = undefined;
            if (authStore.getId() === closure_3) {
              if (null != value) {
                c7 = 3;
                const obj4 = { value, done: true };
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
              const obj6 = { value: obj17.logout("TTI_test"), done: false };
              obj17 = AuthenticationActionCreatorsDefault;
              return obj6;
            } else if (null != value) {
              const _fetch = fetch;
              const obj7 = { method: "HEAD", headers: obj9 };
              obj9 = { Authorization: value };
              c6 = 2;
              c7 = 1;
              const obj10 = { value: fetch("https://discord.com/api/users/@me/settings-proto/2", obj7), done: false };
              return obj10;
            }
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            const self5 = this;
            const self6 = this;
            const promise = new Promise((arg0) => closure_1_6(arg0));
            c6 = 6;
            c7 = 1;
            const obj12 = { value: promise, done: false };
            return obj12;
          }
        } else if (2 === c6) {
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
            const obj14 = { value: obj8.loginToken(value, false), done: false };
            obj8 = closure_133_1(closure_133_2[22]);
            return obj14;
          }
        } else if (3 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj15 = { value, done: true };
            return obj15;
          }
        } else if (4 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            const self3 = this;
            const self4 = this;
            const promise3 = new Promise((arg0) => closure_1_6(arg0));
            c6 = 5;
            c7 = 1;
            const obj18 = { value: promise3, done: false };
            return obj18;
          }
        } else if (5 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else if (closure_133_7.getId() === closure_3) {
            c7 = 3;
            const obj20 = { value, done: true };
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
          id = closure_133_7.getId();
          if (id !== closure_3) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            let error = new Error("Unable to login " + login + ", expected id " + closure_3 + " after login but was " + id);
            throw error;
          } else {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        const self7 = this;
        const self8 = this;
        const promise4 = new Promise((arg0, arg1) => {
          login = arg0;
          password = arg1;
          const items = ["LOGIN_FAILURE", "PASSWORDLESS_FAILURE", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"];
          function _loop(iter) {
            closure_0 = iter;
            obj = password(closure_2_2[10]);
            closure_1 = iter;
            const f155829 = () => {
              const error = new Error("Unable to login " + closure_0 + ". Login failed with action '" + obj + "'");
              closure_2_1(error);
            };
            function handler(arg0) {
              obj.unsubscribe(closure_1, handler);
              return f155829(arg0);
            }
            const subscription = obj.subscribe(iter, handler);
          }
          const iter = items[Symbol.iterator]();
          while (iter !== undefined) {
            let _loopResult = _loop(iter.next());
            continue;
          }
          closure_1_28(password(closure_1_2[10]), "LOGIN_SUCCESS", (token) => closure_0(token.token));
          obj = password(closure_1_2[22]);
          const obj2 = { login, password };
          obj.login(obj2);
        });
        c6 = 1;
        c7 = 1;
        const obj22 = { value: promise4, done: false };
        return obj22;
      } catch (tmp46) {
        c7 = 3;
        throw tmp46;
      }
    }
  });
  return obj(...arguments);
};
function subscribeOnce(subscribe, arg1, arg2) {
  let closure_0 = subscribe;
  const LOGIN_SUCCESS = "LOGIN_SUCCESS";
  let closure_2 = arg2;
  function handler(arg0) {
    obj.unsubscribe(closure_1, handler);
    return f155829(arg0);
  }
  return subscribe.subscribe("LOGIN_SUCCESS", handler);
}
const applicationReady = NativeAppStartup.applicationReady;
PostConnectionCallbackStore.addPostConnectionCallback;
({ ME: unpackModuleId, Routes: closure_12 } = Constants);
let tmp3 = new LoggerDefault("TTITestAction");
const logger = tmp3;
let c14 = null;
Dispatcher.addInterceptor((type) => {
  let c14;
  let closure_0 = _null;
  let flag = null != _null && "LOAD_MESSAGES_SUCCESS" === type.type && type.channelId === _null.channelId;
  if (flag) {
    const actions = _null.actions;
    actions.push(type);
    flag = true;
    if (1 === _null.actions.length) {
      const _HermesInternal = HermesInternal;
      const combined = "Holding message content for " + _null.delayMs + "ms";
      logger.log(combined);
      const _JSON = JSON;
      obj = { type: "status", message: combined };
      const json = JSON.stringify(obj);
      const obj2 = react_nativeDefault;
      obj2.logToDevice(json);
      const _setTimeout = setTimeout;
      _null.timer = setTimeout(() => {
        releaseDelayedMessageLoad(closure_0);
      }, _null.delayMs);
      flag = true;
    }
  }
  return flag;
});
obj = {
  "setup-test": setupTTITest,
  "capture-navigation-tti": function captureNavigationTTI() {
    return obj(...arguments);
  },
  "navigate-to-dms": function navigateToDMs() {
    return obj(...arguments);
  },
  ping() {
    const json = JSON.stringify({ type: "pong" });
    obj = react_nativeDefault;
    obj.logToDevice(json);
  },
  "reset-component-profiler": () => {
    obj = ComponentProfiler;
    const result = obj.resetComponentProfiler();
    const obj2 = { type: "response", status: "success", message: "reset-component-profiler" };
    const merged = Object.assign(undefined);
    const json = stringify(obj2);
    const obj3 = react_nativeDefault;
    obj3.logToDevice(json);
  },
  "pause-component-profiler": () => {
    obj = ComponentProfiler;
    const result = obj.pauseComponentProfiler();
    const obj2 = { type: "response", status: "success", message: "pause-component-profiler" };
    const merged = Object.assign(undefined);
    const json = stringify(obj2);
    const obj3 = react_nativeDefault;
    obj3.logToDevice(json);
  },
  "resume-component-profiler": () => {
    obj = ComponentProfiler;
    const result = obj.resumeComponentProfiler();
    const obj2 = { type: "response", status: "success", message: "resume-component-profiler" };
    const merged = Object.assign(undefined);
    const json = stringify(obj2);
    const obj3 = react_nativeDefault;
    obj3.logToDevice(json);
  },
  "dump-component-profiler-stats": () => {
    let obj2;
    obj = { stats: obj2.dumpStats() };
    obj2 = ComponentProfiler;
    const obj3 = { type: "response", status: "success", message: "dump-component-profiler-stats" };
    const merged = Object.assign(obj);
    const json = stringify(obj3);
    const obj4 = react_nativeDefault;
    obj4.logToDevice(json);
  },
  "dump-jank-stats": () => {
    obj = react_nativeDefault2;
    let report;
    if (obj != null) {
      report = obj.requestReport();
    }
    const obj2 = { report };
    const obj3 = { type: "response", status: "success", message: "dump-jank-stats" };
    const merged = Object.assign(obj2);
    const json = stringify(obj3);
    const tmpResult = react_nativeDefault;
    tmpResult.logToDevice(json);
  },
  "set-jank-multiplier": (multiplier) => {
    obj = react_nativeDefault2;
    if (obj != null) {
      const result = obj.setJankHeuristicMultiplier(multiplier.multiplier);
    }
    const obj2 = { type: "response", status: "success", message: "set-jank-multiplier" };
    const merged = Object.assign(undefined);
    const json = stringify(obj2);
    const tmpResult = react_nativeDefault;
    tmpResult.logToDevice(json);
  },
  "start-jank-stats": () => {
    obj = react_nativeDefault2;
    if (obj != null) {
      obj.startTracking();
    }
    const obj2 = { type: "response", status: "success", message: "start-jank-stats" };
    const merged = Object.assign(undefined);
    const json = stringify(obj2);
    const tmpResult = react_nativeDefault;
    tmpResult.logToDevice(json);
  },
  "flux-dispatch": (action) => {
    obj = Dispatcher;
    obj.dispatch(action.action);
    const obj2 = { type: "response", status: "success", message: "flux-dispatch" };
    const merged = Object.assign(undefined);
    const json = stringify(obj2);
    const obj3 = react_nativeDefault;
    obj3.logToDevice(json);
  },
  "get-token": () => {
    obj = { token: AuthenticationStore.getToken() };
    const obj2 = { type: "response", status: "success", message: "get-token" };
    const merged = Object.assign(obj);
    const json = stringify(obj2);
    const obj3 = react_nativeDefault;
    obj3.logToDevice(json);
  },
  "get-resource-usage": () => {
    let obj2;
    let obj3;
    obj = { cumulativeCPU: obj2.getCumulativeCPUUsage(), currentMemoryUsage: obj3.getCurrentMemoryUsageKB() };
    obj2 = ProcessUtilsDefault;
    obj3 = ProcessUtilsDefault;
    const obj4 = { type: "response", status: "success", message: "get-resource-usage" };
    const merged = Object.assign(obj);
    const json = stringify(obj4);
    const obj5 = react_nativeDefault;
    obj5.logToDevice(json);
  },
  backchannel: function() {
    return closure_16(...arguments);
  }
};
let closure_16 = _asyncToGenerator(async (arg0) => {
  let value;
  let source = arg0;
  let c11 = 0;
  let c12 = 0;
  let c9 = 0;
  return (async (arg0) => {
    let args;
    let c0;
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            return { value, done: true };
          } else {
            closure_8 = tmp;
            c0 = undefined;
            closure_2 = undefined;
            ({ reply: c0, args } = source);
            const obj4 = { ClientInfoUtils: obj5, ComponentProfiler: obj6, Dispatcher, ExperimentStore, NativeJankStats: react_nativeDefault2, ProcessUtils: ProcessUtilsDefault, AnalyticsUtils: obj7, TTITestAction: obj8 };
            source = source.source;
            obj5 = { getConstants: react_native.getConstants };
            obj6 = { resetComponentProfiler: ComponentProfiler.resetComponentProfiler, resumeComponentProfiler: ComponentProfiler.resumeComponentProfiler, pauseComponentProfiler: ComponentProfiler.pauseComponentProfiler, dumpStats: ComponentProfiler.dumpStats };
            obj7 = { startRecordingAnalyticsEvents: AnalyticsUtils.startRecordingAnalyticsEvents, stopRecordingAnalyticsEvents: AnalyticsUtils.stopRecordingAnalyticsEvents, getAnalyticsEventsRecording: AnalyticsUtils.getAnalyticsEventsRecording, clearAnalyticsEventsRecording: AnalyticsUtils.clearAnalyticsEventsRecording };
            obj8 = { apiLogin, setupTTITest };
            const constructor = _asyncToGenerator(async () => {
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
                    obj = { value, done: true };
                    return obj;
                  } else {
                    c0 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp3) {
                  c0 = 3;
                  throw tmp3;
                }
              }
            }).constructor;
            obj9 = {};
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
            const items = [, ];
            const arraySpreadResult = HermesBuiltin.arraySpread(items, keys, 0);
            closure_2 = arraySpreadResult;
            items[arraySpreadResult] = "imports";
            const sum = closure_2 + 1;
            closure_2 = HermesBuiltin.arraySpread(items, keys1, sum);
            const _String2 = String;
            items[closure_2] = String(source);
            closure_2 = closure_2 + 1;
            const items1 = [];
            const applyResult = HermesBuiltin.apply(constructor, items, undefined);
            const arraySpreadResult2 = HermesBuiltin.arraySpread(items1, values, 0);
            _fetch = arraySpreadResult2;
            items1[arraySpreadResult2] = keys;
            const sum1 = _fetch + 1;
            _fetch = HermesBuiltin.arraySpread(items1, values2, sum1);
            c11 = 3;
            c12 = 1;
            const obj10 = { value: HermesBuiltin.apply(applyResult, items1, undefined), done: false };
            return obj10;
          }
        } else {
          if (1 === c11) {
            closure_6 = closure_10;
            c9 = 0;
            if (typeof c0 === "string") {
              _fetch = fetch;
              const request = { method: "PUT", body: JSON.stringify(obj9), headers: { "Content-Type": "application/json" } };
              const _JSON3 = JSON;
              c11 = 6;
              c12 = 1;
              const obj11 = { value: fetch(c0, request), done: false };
              return obj11;
            }
          } else {
            if (2 === c11) {
              c9 = 1;
              let closure_3 = closure_10;
              const _String = String;
              const obj12 = { details: closure_136_23(closure_10), string: _fetch };
              _fetch = String(closure_3);
              obj9.error = obj12;
            } else {
              if (3 === c11) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 0;
                  if (typeof c0 === "string") {
                    _fetch = fetch;
                    const request1 = { method: "PUT", body: JSON.stringify(obj9), headers: { "Content-Type": "application/json" } };
                    const _JSON = JSON;
                    c11 = 4;
                    c12 = 1;
                    const obj13 = { value: fetch(c0, request1), done: false };
                    return obj13;
                  }
                } else {
                  obj9.result = value;
                  c9 = 1;
                }
              } else if (4 === c11) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c12 = 3;
                  return { value, done: true };
                } else {
                  closure_2 = value;
                  if (closure_2.ok) {
                    closure_136_18("success", "Backchannel reply sent");
                  } else {
                    const obj15 = { status: closure_2.status };
                    closure_136_18("error", "Failed to send backchannel reply", obj15);
                  }
                }
              } else if (5 === c11) {
                if (arg0 === 1) {
                  c12 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c12 = 3;
                  return { value, done: true };
                } else {
                  closure_2 = value;
                  if (closure_2.ok) {
                    closure_136_18("success", "Backchannel reply sent");
                  } else {
                    const obj17 = { status: closure_2.status };
                    closure_136_18("error", "Failed to send backchannel reply", obj17);
                  }
                  c12 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                return { value, done: true };
              } else {
                closure_2 = value;
                if (closure_2.ok) {
                  closure_136_18("success", "Backchannel reply sent");
                } else {
                  obj = { status: closure_2.status };
                  closure_136_18("error", "Failed to send backchannel reply", obj);
                }
              }
              c12 = 3;
              return { value, done: true };
            }
            c9 = 0;
            if (typeof c0 === "string") {
              _fetch = fetch;
              const request2 = { method: "PUT", body: JSON.stringify(obj9), headers: { "Content-Type": "application/json" } };
              const _JSON2 = JSON;
              c11 = 5;
              c12 = 1;
              const obj20 = { value: fetch(c0, request2), done: false };
              return obj20;
            }
          }
          throw closure_6;
        }
      } catch (tmp88) {
        closure_10 = tmp88;
        if (0 === c9) {
          c12 = 3;
          throw tmp88;
        } else if (1 === tmp90) {
          c11 = 1;
        } else {
          c11 = 2;
        }
      }
    }
  })();
});
let closure_0 = _asyncToGenerator(async function(arg0) {
  let c3;
  let closure_1;
  let log;
  closure_0 = arg0;
  let closure_2 = tmp4;
  const _TextDecoder = TextDecoder;
  const self = this;
  const self2 = this;
  const textDecoder = new TextDecoder("utf-8");
  const decode = textDecoder.decode;
  const _JSON = JSON;
  const obj6 = closure_0(closure_2[27]);
  const parsed = JSON.parse(decode(obj6.base64decode(closure_0.actionData)));
  const obj4 = { user: "redacted" };
  log = log.log;
  const merged = Object.assign(parsed);
  log("Received TTI Test Action", obj4);
  await promise.promise;
  obj[parsed.type](parsed);
  return Promise.resolve();
});
let result = size.fileFinishedImporting("modules/headless_tasks/android/TTITestAction.tsx");

export default function(arg0) {
  return closure_0(...arguments);
};