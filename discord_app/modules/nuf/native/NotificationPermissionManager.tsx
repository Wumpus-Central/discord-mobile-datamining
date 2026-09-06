// === Module 17456: NotificationPermissionManager ===

// Module 17456 (NotificationPermissionManager)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4153 from "module_4153" /* 4153 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12412 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12409 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function haveNotSeenPromptSince(arg0, arg1) {
  const tmp = PushNotificationPermissionStore.getState().promptLastSeen[arg0];
  let tmp2 = null == tmp;
  if (!tmp2) {
    let tmp4;
    if (items.includes(arg0)) {
      tmp4 = _modDef4153().diff(tmp, "days") >= 1;
      const obj = _modDef4153();
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function shouldShowPrompt() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _shouldShowPrompt() {
  closure_2 = tmp2;
  closure_1 = tmp3;
  closure_129_0 = closure_0;
  const NativePermissionManager = NativeModules.NativePermissionManager;
  closure_129_1 = await NativePermissionManager.getNotificationAuthorizationStatus();
  let tmp11 = closure_129_1 === closure_130_16.UNDETERMINED;
  if (!tmp11) {
    tmp11 = closure_129_1 === closure_130_16.PROVISIONAL;
  }
  if (tmp11) {
    tmp11 = closure_130_18(closure_129_0, 1);
  }
  return tmp11;
};
function shouldShowReactivationPrompt() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _shouldShowReactivationPrompt() {
  closure_2 = tmp2;
  closure_1 = tmp3;
  closure_129_0 = closure_0;
  const NativePermissionManager = NativeModules.NativePermissionManager;
  await NativePermissionManager.getNotificationAuthorizationStatus();
  let tmp9 = arg1 === closure_130_16.DENIED;
  if (tmp9) {
    tmp9 = closure_130_18(closure_129_0, 1);
  }
  return tmp9;
};
function showPrompt(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    let obj = PushNotificationActionCreators;
    const result = obj.setPushPermissionReactivationSeen(closure_0);
    obj = { impressionName: null, impressionProperties: null, location: null };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
    obj.impressionProperties = { action_location: location };
    obj.location = location;
    obj2.openLazy(asyncRequireImpl(17457, dependencyMap.paths), closure_2_11, obj);
  }, arg2);
}
function _logNotificationPermissionStatus() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _logNotificationPermissionStatus2(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          const NativePermissionManager = NativeModules.NativePermissionManager;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        closure_128_1 = closure_129_0(closure_129_2[16]).allowInAppNotifications();
        const obj5 = closure_129_0(closure_129_2[16]);
        const obj2 = { os_enabled: closure_128_0 === closure_129_16.AUTHORIZED, foreground_app_enabled: closure_128_1, background_app_enabled: closure_128_1, notification_authorization_status: null };
        const obj6 = closure_129_1(closure_129_2[17]);
        let tmp7 = null;
        if (obj8.isIOS()) {
          tmp7 = closure_128_0;
        }
        obj2.notification_authorization_status = tmp7;
        obj6.track(closure_129_15.NOTIFICATION_PERMISSION_STATUS, obj2);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp10) {
      c3 = tmp;
      throw tmp10;
    }
  }
};
const NativeModules = fn(17).NativeModules;
const PermissionPromptType = fn(12409).PermissionPromptType;
const NotificationPermissionConstants = fn(12410);
({ NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY: closure_11, EventActionLocation: closure_12 } = NotificationPermissionConstants);
const Constants = fn(1074);
({ RelationshipTypes: map1, GuildFeatures: closure_14, AnalyticEvents: closure_15 } = Constants);
let closure_16 = fn(4770).NotificationAuthorizationStatus;
const items = [, ];
({ FRIEND_REQUEST_SENT: arr[0], INVITE_ACCEPTED: arr[1] } = PermissionPromptType);
let c23 = null;
class NotificationPermissionManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.previousAppState = null;
    applyArgumentsResult.actions = {
      MESSAGE_CREATE(message) {
            applyArgumentsResult.handleMessageCreate(message);
            const result = applyArgumentsResult.handleMessageCreateForNudge(message);
          },
      MESSAGE_REACTION_ADD(optimistic) {
            const result = applyArgumentsResult.handleReactionAddForNudge(optimistic);
          },
      INVITE_ACCEPT_SUCCESS(arg0) {
            applyArgumentsResult.handleInviteAccept(arg0);
          },
      RELATIONSHIP_ADD(arg0) {
            const result = applyArgumentsResult.handleSendFriendRequest(arg0);
          },
      POST_CONNECTION_OPEN() {
            applyArgumentsResult.handleConnectionOpen();
          },
      APP_STATE_UPDATE(arg0) {
            applyArgumentsResult.handleAppStateUpdate(arg0);
          }
    };
    closure_129_0 = applyArgumentsResult;
    applyArgumentsResult.handleConnectionOpen = closure_3(async (arg0, value) => {
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
              c1 = 1;
              c2 = 1;
              const obj1 = { value: _logNotificationPermissionStatus(), done: false };
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              c1 = 2;
              c2 = 1;
              const obj3 = { value: closure_128_0._handleNotificationAuthorizationStatusUpdate(), done: false };
              return obj3;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c2 = tmp;
          throw tmp8;
        }
      }
    });
    closure_130_0 = closure_3(async (arg0, value) => {
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
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              ({ message: closure_129_0, optimistic: closure_129_1, isPushNotification: closure_129_2, sendMessageOptions: closure_129_3 } = closure_0);
              c3 = 1;
              c4 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj1 = { value, done: true };
                return obj1;
              } else {
                let tmp7 = closure_129_1;
                if (!closure_129_1) {
                  tmp7 = closure_129_2;
                }
                if (!tmp7) {
                  tmp7 = null != closure_129_3;
                }
                if (tmp7) {
                  c4 = 3;
                } else {
                  let id;
                  if (closure_129_0 != null) {
                    const author = closure_129_0.author;
                    if (author != null) {
                      id = author.id;
                    }
                  }
                  let tmp6 = id === id.getId();
                }
                c3 = 2;
                c4 = 1;
                const obj2 = { value: shouldShowPrompt(constants.MESSAGE_SENT), done: false };
                return obj2;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else {
              tmp6 = value;
              if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              }
            }
            if (tmp6) {
              showPrompt(constants.MESSAGE_SENT, constants2.MESSAGE_SENT, 1000);
            }
          }
        } catch (tmp24) {
          c4 = tmp;
          throw tmp24;
        }
      }
    });
    applyArgumentsResult.handleMessageCreate = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_131_0 = closure_3(async (arg0) => {
      const invite = arg0;
      c4 = 0;
      c5 = 0;
      const iter = (async (arg0, value) => {
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
                closure_3 = tmp5;
                let invite2;
                invite2 = invite.invite;
                c4 = 1;
                c5 = 1;
                return { value: "PX_16", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj1 = { value, done: true };
                  return obj1;
                } else {
                  const guild = invite2.guild;
                  let features;
                  if (guild != null) {
                    features = guild.features;
                  }
                  closure_1 = features;
                  if (features == null) {
                    closure_1 = [];
                  }
                  if (closure_1.includes(constants3.COMMUNITY)) {
                    c5 = 3;
                  } else {
                    let obj3 = closure_1(tmp2[20]);
                  }
                  c4 = 2;
                  c5 = 1;
                  const obj2 = { value: closure_1_19(constants.INVITE_ACCEPTED), done: false };
                  return obj2;
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj3 = { value, done: true };
                  return obj3;
                } else {
                  let tmp6 = value;
                  if (!value) {
                    c4 = 3;
                    c5 = 1;
                    const obj4 = { value: closure_1_21(constants.INVITE_ACCEPTED), done: false };
                    return obj4;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else {
                tmp6 = value;
                if (arg0 === 2) {
                  c5 = 3;
                  obj = { value, done: true };
                  return obj;
                }
              }
              if (tmp6) {
                closure_1_24(constants.INVITE_ACCEPTED, constants2.INVITE_ACCEPTED, 1000);
              }
            }
          } catch (tmp26) {
            c5 = tmp;
            throw tmp26;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleInviteAccept = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_132_0 = closure_3(async (arg0) => {
      const relationship = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (async (arg0, value) => {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            let tmp6 = relationship2.type === constants3.PENDING_OUTGOING;
            if (tmp6) {
              c3 = 2;
              c4 = 1;
              return { value: closure_1_19(constants.FRIEND_REQUEST_SENT), done: false };
            }
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            tmp6 = value;
            if (!value) {
              c3 = 3;
              c4 = 1;
              return { value: closure_1_21(constants.FRIEND_REQUEST_SENT), done: false };
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else {
          tmp6 = value;
          if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          }
        }
        if (tmp6) {
          closure_1_24(constants.FRIEND_REQUEST_SENT, constants2.FRIEND_REQUEST_SENT, 100);
        }
        await "HermesInternal";
        closure_1 = tmp2;
        relationship2 = relationship.relationship;
        return "PX_16";
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleSendFriendRequest = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_133_0 = undefined;
    closure_133_1 = applyArgumentsResult;
    closure_133_0 = closure_3(async (arg0, value) => {
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
              dependencyMap = tmp5;
              closure_1 = tmp2;
              let state;
              state = applyArgumentsResult.state;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj1 = { value, done: true };
                return obj1;
              } else {
                closure_129_1 = closure_130_1.previousAppState === applyArgumentsResult(1093).AppStates.BACKGROUND;
                closure_129_2 = state === applyArgumentsResult(1093).AppStates.ACTIVE;
                let tmp7 = closure_129_1;
                if (closure_129_1) {
                  tmp7 = closure_129_2;
                }
                if (tmp7) {
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: closure_130_1._handleNotificationAuthorizationStatusUpdate(), done: false };
                  return obj2;
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              }
              closure_130_1.previousAppState = state;
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
            if (state === applyArgumentsResult(1093).AppStates.ACTIVE) {
              c3 = 3;
              c4 = 1;
              const obj4 = { value: _logNotificationPermissionStatus(), done: false };
              return obj4;
            }
          }
        } catch (tmp22) {
          c4 = tmp;
          throw tmp22;
        }
      }
    });
    applyArgumentsResult.handleAppStateUpdate = function() {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult._handleNotificationAuthorizationStatusUpdate = closure_3(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              const NativePermissionManager = NativeModules.NativePermissionManager;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value;
            obj = tmp2(c2[15]);
            const result = obj.updateNotificationAuthorizationStatus(closure_128_0);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    });
    return applyArgumentsResult;
  }
}
const prototype = NotificationPermissionManager.prototype;
prototype["handleMessageCreateForNudge"] = function handleMessageCreateForNudge(message) {
  message = message.message;
  if (!message.optimistic) {
    if (!message.isPushNotification) {
      if (null == tmp2) {
        let id;
        if (message != null) {
          const author = message.author;
          if (author != null) {
            id = author.id;
          }
        }
        if (id === AuthenticationStore.getId()) {
          const channel = ChannelStore.getChannel(tmp);
          if (null != channel) {
            const guildId = channel.getGuildId();
            if (channel.isThread()) {
              let isMutedResult = JoinedThreadsStore.isMuted(channel.id);
            } else {
              isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
            }
            if (!isMutedResult) {
              const result = PushNotificationActionCreators.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.CHANNEL_BANNER);
            }
          }
        }
      }
    }
  }
};
prototype["handleReactionAddForNudge"] = function handleReactionAddForNudge(optimistic) {
  if (!optimistic.optimistic) {
    if (tmp2 === AuthenticationStore.getId()) {
      const channel = ChannelStore.getChannel(tmp);
      if (null != channel) {
        const guildId = channel.getGuildId();
        if (channel.isThread()) {
          let isMutedResult = JoinedThreadsStore.isMuted(channel.id);
        } else {
          isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
        }
        if (!isMutedResult) {
          const result = PushNotificationActionCreators.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.POST_REACTION_BANNER);
        }
      }
    }
  }
};
const notificationPermissionManager = new NotificationPermissionManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NotificationPermissionManager.tsx");

export default notificationPermissionManager;