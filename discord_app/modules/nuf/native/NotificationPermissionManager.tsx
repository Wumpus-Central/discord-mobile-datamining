// discord_app/modules/nuf/native/NotificationPermissionManager.tsx
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import _modDef4467 from "../../../../_runtime/metro/04467__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import NativePermissionConstants from "../../native_permissions/NativePermissionConstants.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import PushNotificationPermissionStore2 from "../../../stores/native/PushNotificationPermissionStore.tsx";
import PushNotificationActionCreators from "../../../actions/native/PushNotificationActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import JoinedThreadsStore from "../../threads/JoinedThreadsStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import NotificationPermissionConstants from "components/notification/NotificationPermissionConstants.tsx";
import Constants from "../../../Constants.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PushNotificationPermissionStore = PushNotificationPermissionStore2;
let closure_3;

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
function haveNotSeenPromptSince(arg0, arg1) {
  const tmp = PushNotificationPermissionStore.getState().promptLastSeen[arg0];
  let tmp2 = null == tmp;
  if (!tmp2) {
    let tmp4;
    if (items.includes(arg0)) {
      obj = _modDef4467();
      tmp4 = obj.diff(tmp, "days") >= 1;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function shouldShowPrompt() {
  return obj(...arguments);
}
let obj = function _shouldShowPrompt() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj3.getNotificationAuthorizationStatus(), done: false };
            obj3 = react_nativeDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1 = value;
          const tmp10 =
            (closure_1 === closure_130_15.UNDETERMINED || closure_1 === closure_130_15.PROVISIONAL) &&
            closure_130_17(closure_0, 1);
          c4 = 3;
          obj = { value: tmp10, done: true };
          return obj;
        }
      } catch (tmp22) {
        c4 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
function shouldShowReactivationPrompt() {
  return obj(...arguments);
}
obj = function _shouldShowReactivationPrompt() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
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
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp2;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj3.getNotificationAuthorizationStatus(), done: false };
            obj3 = react_nativeDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const tmp8 = value === closure_130_15.DENIED && closure_130_17(closure_0, 1);
          c4 = 3;
          obj = { value: tmp8, done: true };
          return obj;
        }
      } catch (tmp16) {
        c4 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
function showPrompt(arg0, arg1, arg2) {
  let closure_22;
  let timeout;
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    obj = PushNotificationActionCreators;
    const result = obj.setPushPermissionReactivationSeen(closure_0);
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj2 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.PUSH_NOTIFICATION_REACTIVATION_PROMPT,
      impressionProperties: { action_location: location },
      location,
    };
    ActionSheetActionCreatorsDefault;
    const tmp3 = asyncRequire(17641, dependencyMap.paths);
    openLazy(tmp3, authStore, obj2);
  }, arg2);
}
function _logNotificationPermissionStatus() {
  return obj(...arguments);
}
obj = function _logNotificationPermissionStatus2() {
  obj = _asyncToGenerator(async () => {
    let closure_1;
    let obj2;
    let tmp6;
    if (c3 === 2) {
      c3 = 3;
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
        let closure_0;
        let tmp4;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            tmp4 = undefined;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.getNotificationAuthorizationStatus(), done: false };
            obj2 = react_nativeDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          const obj6 = closure_129_0(closure_129_2[16]);
          tmp4 = obj6.allowInAppNotifications();
          const obj7 = {
            os_enabled: closure_0 === closure_129_15.AUTHORIZED,
            foreground_app_enabled: tmp4,
            background_app_enabled: tmp4,
            notification_authorization_status: tmp6,
          };
          const track = closure_129_1(closure_129_2[17]).track;
          const NOTIFICATION_PERMISSION_STATUS = closure_129_14.NOTIFICATION_PERMISSION_STATUS;
          const tmp20 = closure_129_1(closure_129_2[17]);
          tmp6 = null;
          const obj8 = closure_129_0(closure_129_2[18]);
          if (obj8.isIOS()) {
            tmp6 = closure_0;
          }
          track(NOTIFICATION_PERMISSION_STATUS, obj7);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        c3 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
const PermissionPromptType = PushNotificationPermissionStore2.PermissionPromptType;
({ NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY: c10, EventActionLocation: unpackModuleId } =
  NotificationPermissionConstants);
({ RelationshipTypes: closure_12, GuildFeatures: map1, AnalyticEvents: closure_14 } = Constants);
let closure_15 = NativePermissionConstants.NotificationAuthorizationStatus;
const items = [,];
({ FRIEND_REQUEST_SENT: arr[0], INVITE_ACCEPTED: arr[1] } = PermissionPromptType);
let c22 = null;
class NotificationPermissionManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.previousAppState = null;
    applyArgumentsResult.actions = {
      MESSAGE_CREATE(message) {
        require.handleMessageCreate(message);
        const result = require.handleMessageCreateForNudge(message);
      },
      MESSAGE_REACTION_ADD(optimistic) {
        const result = require.handleReactionAddForNudge(optimistic);
      },
      INVITE_ACCEPT_SUCCESS(arg0) {
        require.handleInviteAccept(arg0);
      },
      RELATIONSHIP_ADD(arg0) {
        const result = require.handleSendFriendRequest(arg0);
      },
      POST_CONNECTION_OPEN() {
        require.handleConnectionOpen();
      },
      APP_STATE_UPDATE(arg0) {
        require.handleAppStateUpdate(arg0);
      },
    };
    applyArgumentsResult.handleConnectionOpen = _asyncToGenerator(async () => {
      if (c2 === 2) {
        c2 = 3;
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
              let closure_0 = tmp3;
              c1 = 1;
              c2 = 1;
              const obj4 = { value: closure_1_24(), done: false };
              return obj4;
            }
          } else if (1 === c1) {
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
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          c2 = 3;
          throw tmp7;
        }
      }
    });
    _asyncToGenerator(async (arg0) => {
      let constants2;
      let author = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (async (arg0) => {
        let c0;
        let c1;
        let c2;
        if (c4 === 2) {
          c4 = 3;
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
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp4;
                closure_1 = tmp;
                author = undefined;
                c1 = undefined;
                c2 = undefined;
                ({ message: c0, optimistic: c1, isPushNotification: c2, sendMessageOptions: c3 } = closure_0);
                c3 = 1;
                c4 = 1;
                return { value: "Reflect", done: true };
              }
            } else {
              let tmp5;
              if (1 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                } else {
                  const tmp6 = c1 || c2 || null != c3;
                  if (!tmp6) {
                    id = undefined;
                    if (author != null) {
                      author = author.author;
                      if (author != null) {
                        id = author.id;
                      }
                    }
                    tmp5 = id === id.getId();
                    if (tmp5) {
                      c3 = 2;
                      c4 = 1;
                      const obj5 = { value: closure_1_18(constants.MESSAGE_SENT), done: false };
                      return obj5;
                    }
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else {
                tmp5 = value;
                if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                }
              }
              if (tmp5) {
                closure_1_23(constants.MESSAGE_SENT, constants2.MESSAGE_SENT, 1000);
              }
            }
          } catch (tmp23) {
            c4 = 3;
            throw tmp23;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleMessageCreate = function () {
      return closure_0(...arguments);
    };
    _asyncToGenerator(async (arg0) => {
      let constants2;
      let constants3;
      let invite = arg0;
      let c4 = 0;
      let c5 = 0;
      const iter = (async (arg0) => {
        if (c5 === 2) {
          c5 = 3;
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                closure_3 = tmp4;
                closure_2 = tmp;
                invite = undefined;
                invite = invite.invite;
                c4 = 1;
                c5 = 1;
                return { value: "Reflect", done: true };
              }
            } else {
              let tmp5;
              if (1 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                } else {
                  const guild = invite.guild;
                  let features;
                  if (guild != null) {
                    features = guild.features;
                  }
                  closure_1 = features;
                  if (features == null) {
                    closure_1 = [];
                  }
                  if (!closure_1.includes(constants3.COMMUNITY)) {
                    const obj4 = closure_1(closure_2[20]);
                    if (obj4.getConfig({ location: "NotificationPermissionManager" }).inHoldout) {
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: closure_1_18(constants.INVITE_ACCEPTED), done: false };
                      return obj6;
                    }
                  }
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                } else {
                  tmp5 = value;
                  if (!tmp5) {
                    c4 = 3;
                    c5 = 1;
                    const obj8 = { value: closure_1_20(constants.INVITE_ACCEPTED), done: false };
                    return obj8;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else {
                tmp5 = value;
                if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                }
              }
              if (tmp5) {
                closure_1_23(constants.INVITE_ACCEPTED, constants2.INVITE_ACCEPTED, 1000);
              }
            }
          } catch (tmp25) {
            c5 = 3;
            throw tmp25;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleInviteAccept = function () {
      return closure_0(...arguments);
    };
    _asyncToGenerator(async (arg0) => {
      let closure_1;
      let closure_2;
      let constants2;
      let constants3;
      let relationship = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (async (arg0) => {
        let tmp5;
        if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            tmp5 = relationship.type === constants3.PENDING_OUTGOING;
            if (tmp5) {
              c3 = 2;
              c4 = 1;
              const obj5 = { value: closure_1_18(constants.FRIEND_REQUEST_SENT), done: false };
              return obj5;
            }
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            tmp5 = value;
            if (!tmp5) {
              c3 = 3;
              c4 = 1;
              const obj7 = { value: closure_1_20(constants.FRIEND_REQUEST_SENT), done: false };
              return obj7;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else {
          tmp5 = value;
          if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          }
        }
        if (tmp5) {
          closure_1_23(constants.FRIEND_REQUEST_SENT, constants2.FRIEND_REQUEST_SENT, 100);
        }
        await "IconComponent";
        relationship = relationship.relationship;
        return "Reflect";
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleSendFriendRequest = function () {
      return closure_0(...arguments);
    };
    let closure_0 = _asyncToGenerator(async (arg0) => {
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
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
        try {
          let state;
          let closure_1;
          let closure_2;
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
              state = closure_0.state;
              closure_1 = undefined;
              closure_2 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "Reflect", done: true };
            }
          } else {
            if (1 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = closure_130_1.previousAppState === closure_0(closure_2[21]).AppStates.BACKGROUND;
                closure_2 = state === closure_0(closure_2[21]).AppStates.ACTIVE;
                const tmp6 = closure_1 && closure_2;
                if (tmp6) {
                  c3 = 2;
                  c4 = 1;
                  const obj5 = { value: closure_130_1._handleNotificationAuthorizationStatusUpdate(), done: false };
                  return obj5;
                }
              }
            } else {
              if (2 === c3) {
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
                obj = { value, done: true };
                return obj;
              }
              closure_130_1.previousAppState = state;
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
            if (state === closure_0(closure_2[21]).AppStates.ACTIVE) {
              c3 = 3;
              c4 = 1;
              const obj7 = { value: closure_1_24(), done: false };
              return obj7;
            }
          }
        } catch (tmp21) {
          c4 = 3;
          throw tmp21;
        }
      }
    });
    applyArgumentsResult.handleAppStateUpdate = function () {
      return closure_0(...arguments);
    };
    applyArgumentsResult._handleNotificationAuthorizationStatusUpdate = _asyncToGenerator(async () => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              const obj3 = tmp4(c2[14]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj3.getNotificationAuthorizationStatus(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            obj = tmp(c2[15]);
            const result = obj.updateNotificationAuthorizationStatus(tmp);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    });
    return applyArgumentsResult;
  }
  handleMessageCreateForNudge(message) {
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
              let isMutedResult;
              const guildId = channel.getGuildId();
              if (channel.isThread()) {
                isMutedResult = JoinedThreadsStore.isMuted(channel.id);
              } else {
                isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
              }
              if (!isMutedResult) {
                obj = PushNotificationActionCreators;
                const result = obj.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.CHANNEL_BANNER);
              }
            }
          }
        }
      }
    }
  }
  handleReactionAddForNudge(optimistic) {
    if (!optimistic.optimistic) {
      if (tmp2 === AuthenticationStore.getId()) {
        const channel = ChannelStore.getChannel(tmp);
        if (null != channel) {
          let isMutedResult;
          const guildId = channel.getGuildId();
          if (channel.isThread()) {
            isMutedResult = JoinedThreadsStore.isMuted(channel.id);
          } else {
            isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, channel.id);
          }
          if (!isMutedResult) {
            obj = PushNotificationActionCreators;
            const result = obj.setPushNotificationPermissionEligibleForPrompt(
              PermissionPromptType.POST_REACTION_BANNER,
            );
          }
        }
      }
    }
  }
}
const prototype = NotificationPermissionManager.prototype;
const notificationPermissionManager = new NotificationPermissionManager();
let result = size.fileFinishedImporting("modules/nuf/native/NotificationPermissionManager.tsx");

export default notificationPermissionManager;
