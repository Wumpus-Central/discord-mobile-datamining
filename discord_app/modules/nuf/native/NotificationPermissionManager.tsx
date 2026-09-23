// discord_app/modules/nuf/native/NotificationPermissionManager.tsx
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import _modDef4414 from "../../../../_runtime/metro/04414__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import PushNotificationActionCreators from "../../../actions/native/PushNotificationActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import JoinedThreadsStore from "../../threads/JoinedThreadsStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import PushNotificationPermissionStore from "../../../stores/native/PushNotificationPermissionStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function haveNotSeenPromptSince(arg0, arg1) {
  const tmp = PushNotificationPermissionStore.getState().promptLastSeen[arg0];
  let tmp2 = null == tmp;
  if (!tmp2) {
    let tmp4;
    if (items.includes(arg0)) {
      tmp4 = _modDef4414().diff(tmp, "days") >= 1;
      const obj = _modDef4414();
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
  await NativePermissionManager.getNotificationAuthorizationStatus();
  closure_129_1 = value;
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
  let tmp9 = value === closure_130_16.DENIED;
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
    const result = PushNotificationActionCreators.setPushPermissionReactivationSeen(closure_0);
    const obj3 = { impressionName: null, impressionProperties: null, location: null };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj3.impressionName = discord_common_AnalyticsUtils.ImpressionNames.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
    obj3.impressionProperties = { action_location: location };
    obj3.location = location;
    obj2.openLazy(asyncRequireImpl(17943, dependencyMap.paths), closure_2_11, obj3);
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
let closure_26 = async function _logNotificationPermissionStatus2() {
  if (c3 === 2) {
    c3 = 3;
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
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          const NativePermissionManager = NativeModules.NativePermissionManager;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        closure_128_1 = closure_129_0(closure_129_2[16]).allowInAppNotifications();
        const obj5 = closure_129_0(closure_129_2[16]);
        const obj7 = {
          os_enabled: closure_128_0 === closure_129_16.AUTHORIZED,
          foreground_app_enabled: closure_128_1,
          background_app_enabled: closure_128_1,
          notification_authorization_status: null,
        };
        const obj6 = closure_129_1(closure_129_2[17]);
        let tmp7 = null;
        if (obj8.isIOS()) {
          tmp7 = closure_128_0;
        }
        obj7.notification_authorization_status = tmp7;
        obj6.track(closure_129_15.NOTIFICATION_PERMISSION_STATUS, obj7);
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
const PermissionPromptType = fn(12749).PermissionPromptType;
const NotificationPermissionConstants = fn(12750);
({ NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY: closure_11, EventActionLocation: closure_12 } =
  NotificationPermissionConstants);
const Constants = fn(1074);
({ RelationshipTypes: map1, GuildFeatures: closure_14, AnalyticEvents: closure_15 } = Constants);
let closure_16 = fn(5036).NotificationAuthorizationStatus;
const items = [,];
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
      },
    };
    closure_129_0 = applyArgumentsResult;
    applyArgumentsResult.handleConnectionOpen = closure_3(async () => {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp4;
              c1 = 1;
              c2 = 1;
              const obj4 = { value: _logNotificationPermissionStatus(), done: false };
              return obj4;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c1 = 2;
              c2 = 1;
              const obj6 = { value: closure_128_0._handleNotificationAuthorizationStatusUpdate(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
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
    closure_130_0 = closure_3(async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              ({
                message: closure_129_0,
                optimistic: closure_129_1,
                isPushNotification: closure_129_2,
                sendMessageOptions: closure_129_3,
              } = closure_0);
              c3 = 1;
              c4 = 1;
              return { value: "flex", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
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
                const obj5 = { value: shouldShowPrompt(constants.MESSAGE_SENT), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else {
              tmp6 = value;
              if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
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
    applyArgumentsResult.handleMessageCreate = function () {
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
      const iter = (async (arg0) => {
        if (c5 === 2) {
          c5 = 3;
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_3 = tmp5;
                let invite2;
                invite2 = invite.invite;
                c4 = 1;
                c5 = 1;
                return { value: "flex", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
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
                    closure_1(tmp2[20]);
                  }
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: closure_1_19(constants.INVITE_ACCEPTED), done: false };
                  return obj6;
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  let tmp6 = value;
                  if (!value) {
                    c4 = 3;
                    c5 = 1;
                    const obj8 = { value: closure_1_21(constants.INVITE_ACCEPTED), done: false };
                    return obj8;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else {
                tmp6 = value;
                if (arg0 === 2) {
                  c5 = 3;
                  const obj = { value, done: true };
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
    applyArgumentsResult.handleInviteAccept = function () {
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
      const iter = (async (arg0) => {
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
        return "flex";
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleSendFriendRequest = function () {
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
    closure_133_0 = closure_3(async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              dependencyMap = tmp5;
              closure_1 = tmp2;
              let state;
              state = applyArgumentsResult.state;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "flex", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_129_1 = closure_130_1.previousAppState === applyArgumentsResult(1094).AppStates.BACKGROUND;
                closure_129_2 = state === applyArgumentsResult(1094).AppStates.ACTIVE;
                let tmp7 = closure_129_1;
                if (closure_129_1) {
                  tmp7 = closure_129_2;
                }
                if (tmp7) {
                  c3 = 2;
                  c4 = 1;
                  const obj5 = { value: closure_130_1._handleNotificationAuthorizationStatusUpdate(), done: false };
                  return obj5;
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              }
              closure_130_1.previousAppState = state;
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
            if (state === applyArgumentsResult(1094).AppStates.ACTIVE) {
              c3 = 3;
              c4 = 1;
              const obj7 = { value: _logNotificationPermissionStatus(), done: false };
              return obj7;
            }
          }
        } catch (tmp22) {
          c4 = tmp;
          throw tmp22;
        }
      }
    });
    applyArgumentsResult.handleAppStateUpdate = function () {
      const self = this;
      const apply = applyArgumentsResult.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult._handleNotificationAuthorizationStatusUpdate = closure_3(async () => {
      if (c3 === 2) {
        c3 = 3;
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
              closure_1 = tmp5;
              closure_128_0 = undefined;
              const NativePermissionManager = NativeModules.NativePermissionManager;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_0 = value;
            const result = tmp2(c2[15]).updateNotificationAuthorizationStatus(closure_128_0);
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
              const result = PushNotificationActionCreators.setPushNotificationPermissionEligibleForPrompt(
                PermissionPromptType.CHANNEL_BANNER,
              );
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
          const result = PushNotificationActionCreators.setPushNotificationPermissionEligibleForPrompt(
            PermissionPromptType.POST_REACTION_BANNER,
          );
        }
      }
    }
  }
};
const notificationPermissionManager = new NotificationPermissionManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/NotificationPermissionManager.tsx");

export default notificationPermissionManager;
