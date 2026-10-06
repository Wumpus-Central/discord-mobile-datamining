// discord_app/modules/push_notifications/native/receiveNotification.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import router_utils from "../../routing/router_utils.tsx";
import intl2 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GuildScheduledEventsConstants from "../../guild_scheduled_events/GuildScheduledEventsConstants.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/04817_AssetRegistry.js";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import Constants2 from "../../go_live/Constants.tsx";
import PostConnectionCallbackStore from "../../gateway/PostConnectionCallbackStore.tsx";
import PushNotificationConstants from "../PushNotificationConstants.tsx";
import MessageManagerDefault from "../../messages/MessageManager.tsx";
import ICYMIActionCreatorsDefault from "../../icymi/ICYMIActionCreators.tsx";
import Constants3 from "../../multi_account/Constants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import GuildScheduledEventStore from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c0, c1, c6, c7, importDefault, navigation;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const f133368 = (arg0) => {
  addPostConnectionCallback(arg0);
};
function onStageConnectionError() {
  let intl;
  obj = {
    key: "STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC",
    content: intl.string(intl2.t.ah3RLk),
    icon: AssetRegistryDefault,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open(obj);
}
function waitForConnection() {
  const promise = new Promise(f133368);
  return promise;
}
function waitForDataOrConnection() {
  return obj(...arguments);
}
let obj = function _waitForDataOrConnection() {
  obj = _asyncToGenerator(async function (arg0, arg1) {
    let tmp;
    let tmp3;
    let closure_1 = arg1;
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
            let closure_2 = tmp;
            let c2;
            if (!closure_1()) {
              c2 = false;
              const self = this;
              const self2 = this;
              const promise = new Promise((arg0) => {
                closure_0 = arg0;
                const result = closure_0.addConditionalChangeListener(() => {
                  let tmp = !closure_2_2;
                  if (tmp) {
                    const tmp3 = closure_2_1();
                    let flag = !tmp3;
                    if (tmp3) {
                      closure_0();
                      flag = false;
                    }
                    tmp = flag;
                  }
                  return tmp;
                });
              });
              const items = [promise, waitForConnection()];
              c3 = 1;
              c4 = 1;
              const obj4 = { value: Promise.race(items), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let flag = true;
          c2 = true;
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp10) {
        c4 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
function waitForNavigationReady() {
  return obj(...arguments);
}
obj = function _waitForNavigationReady() {
  obj = _asyncToGenerator(async function () {
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
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj5 = require("RootNavigationRef");
            const rootNavigationRef = obj5.getRootNavigationRef();
            const isReadyResult = null != rootNavigationRef && rootNavigationRef.isReady();
            if (!isReadyResult) {
              const self = this;
              const self2 = this;
              const promise = new Promise((arg0) => {
                let closure_0 = arg0;
                const ComponentDispatch = closure_1_0(closure_1_3[16]).ComponentDispatch;
                ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
                  closure_0();
                });
              });
              c1 = 1;
              c0 = 1;
              const obj4 = { value: promise, done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp8) {
        c0 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
function _connectToStage() {
  return obj(...arguments);
}
obj = function _connectToStage2() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj3;
    let closure_0 = arg0;
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
        let closure_2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_2 = undefined;
            c6 = 1;
            c7 = 1;
            const obj5 = { value: waitForConnection(), done: false };
            return obj5;
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c5 = 1;
            c6 = 3;
            c7 = 1;
            const obj7 = { value: obj3.connectOrLurkStage(closure_0, closure_1, true), done: false };
            obj3 = closure_131_0(closure_131_3[17]);
            return obj7;
          }
        } else {
          if (2 === c6) {
            c5 = 0;
            closure_131_19();
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_2 = value;
            obj = closure_131_0(closure_131_3[17]);
            obj.navigateToStage(closure_2, null);
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp24) {
        let closure_4 = tmp24;
        if (0 === c5) {
          c7 = 3;
          throw tmp24;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleStageNotification() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c2 = 1;
            c1 = 1;
            const obj4 = { value: _connectToStage(closure_0.guild_id, closure_0.channel_id), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleGuildEventNotification() {
  obj = _asyncToGenerator(async (arg0) => {
    function onVoiceConnectionError() {
      let intl;
      obj = {
        key: "VOICE_CONNECTION_ERROR_GENERIC",
        content: intl.string(closure_1_0(closure_1_3[13]).t.S69lJR),
        icon: closure_1_1(closure_1_3[14]),
      };
      const open = closure_1_1(closure_1_3[12]).open;
      closure_1_1(closure_1_3[12]);
      intl = closure_1_0(closure_1_3[13]).intl;
      open(obj);
    }
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
        let channel_id;
        let guild_scheduled_event_id;
        let event;
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
            let closure_1 = tmp2;
            channel_id = undefined;
            guild_scheduled_event_id = undefined;
            event = undefined;
            const _Number = Number;
            const NumberResult = Number(closure_0.guild_scheduled_event_entity_type);
            if (constants.STAGE_INSTANCE === NumberResult) {
              const channel_id2 = closure_0.channel_id;
              if (null == channel_id2) {
                onStageConnectionError();
                c4 = 3;
                const obj5 = { value: undefined, done: true };
                return obj5;
              } else {
                c3 = 2;
                c4 = 1;
                const obj6 = { value: _connectToStage(closure_0.guild_id, channel_id2), done: false };
                return obj6;
              }
            } else if (constants.VOICE === NumberResult) {
              channel_id = closure_0.channel_id;
              if (null == channel_id) {
                onVoiceConnectionError();
                c4 = 3;
                const obj8 = { value: undefined, done: true };
                return obj8;
              } else {
                c3 = 3;
                c4 = 1;
                const obj9 = { value: waitForConnection(), done: false };
                return obj9;
              }
            } else if (constants.EXTERNAL === NumberResult) {
              guild_scheduled_event_id = closure_0.guild_scheduled_event_id;
              const guild_id = closure_0.guild_id;
              const obj7 = require("transitionToGuild");
              obj7.transitionToGuild(guild_id);
              c3 = 1;
              c4 = 1;
              const obj10 = { value: waitForConnection(), done: false };
              return obj10;
            }
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            event = closure_130_6.getGuildScheduledEvent(guild_scheduled_event_id);
            if (null == event) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj12 = { eventId: event.id, event };
              const obj4 = closure_130_0(closure_130_3[20]);
              const result = obj4.openGuildEventDetails(obj12);
            }
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj13 = { value, done: true };
            return obj13;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          obj = closure_130_0(closure_130_3[18]);
          obj.transitionToChannel(channel_id);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp32) {
        c4 = 3;
        throw tmp32;
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleRelationshipAddNotification() {
  obj = _asyncToGenerator(async (arg0) => {
    let items;
    let user;
    let closure_0 = arg0;
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
        let closure_1;
        let user_id;
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
            let closure_2 = tmp4;
            closure_1 = undefined;
            user_id = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: waitForNavigationReady(), done: false };
            return obj5;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const _Number = Number;
            closure_1 = Number(closure_0.rel_type);
            if (closure_1 === closure_130_13.PENDING_INCOMING) {
              user_id = closure_0.user_id;
              const obj8 = closure_130_0(closure_130_3[21]);
              obj8.navigateToRootTab({ screen: "notifications" });
              const obj9 = closure_130_2(closure_130_3[22]);
              obj9.setTab(closure_130_0(closure_130_3[23]).NotificationCenterTabs.ForYou);
              c3 = 2;
              c4 = 1;
              const obj10 = {
                value: closure_130_21(closure_130_9, () => null != user.getUser(closure_1_2)),
                done: false,
              };
              return obj10;
            } else {
              if (closure_1 !== closure_130_13.FRIEND) {
                if (closure_0.notification_type === closure_130_10.REMINDER) {
                  const obj6 = closure_130_0(closure_130_3[15]);
                  const rootNavigationRef = obj6.getRootNavigationRef();
                  if (rootNavigationRef != null) {
                    rootNavigationRef.navigate("friends", { screen: "requests" });
                  }
                }
              } else {
                const obj11 = { recipientIds: closure_0.user_id };
                const obj4 = closure_130_1(closure_130_3[26]);
                obj4.openPrivateChannel(obj11);
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          obj = { userId: user_id, sourceAnalyticsLocations: items };
          items = [];
          const tmp9 = closure_130_1(closure_130_3[24]);
          items[0] = closure_130_1(closure_130_3[25]).PUSH_NOTIFICATION;
          tmp9(obj);
          c4 = 3;
          const obj13 = { value: undefined, done: true };
          return obj13;
        }
      } catch (tmp44) {
        c4 = 3;
        throw tmp44;
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleCallRingNotification() {
  obj = _asyncToGenerator(async (arg0) => {
    const channel_id = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let channel;
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
              closure_2 = tmp;
              closure_1 = tmp4;
              c3 = 1;
              c4 = 1;
              const obj4 = {
                value: waitForDataOrConnection(ChannelStore, () => null != channel.getChannel(channel_id.channel_id)),
                done: false,
              };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            obj = closure_130_0(closure_130_3[18]);
            obj.transitionToChannel(channel_id.channel_id);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleCallConnectNotification() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let c2 = 0;
            let closure_1 = tmp3;
            c3 = 1;
            c4 = 1;
            const obj8 = {
              value: waitForDataOrConnection(ChannelStore, () => null != channel.getChannel(channel_id.channel_id)),
              done: false,
            };
            return obj8;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            const obj7 = closure_130_0(closure_130_3[18]);
            obj7.transitionToChannel(closure_0.channel_id);
            c3 = 2;
            c4 = 1;
            const obj10 = { value: closure_130_20(), done: false };
            return obj10;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          const obj13 = closure_130_1(closure_130_3[27]);
          obj13.call(closure_0.channel_id, false, false);
          obj = {
            location: closure_130_1(closure_130_3[25]).PUSH_NOTIFICATION,
            guild_id: closure_0.guild_id,
            ringer_user_id: closure_0.user_id,
          };
          const track = closure_130_1(closure_130_3[28]).track;
          const RING_CALL_ACCEPTED = closure_130_11.RING_CALL_ACCEPTED;
          const tmp6 = closure_130_1(closure_130_3[28]);
          const obj2 = closure_130_0(closure_130_3[29]);
          const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(closure_0.channel_id));
          track(RING_CALL_ACCEPTED, obj);
          const obj3 = closure_130_0(closure_130_3[30]);
          if (obj3.isAndroid()) {
            if (closure_0.is_fullscreen_call_ui) {
              const obj12 = { action_type: "join" };
              const track2 = closure_130_1(closure_130_3[28]).track;
              const CALLKIT_CLICKED = closure_130_11.CALLKIT_CLICKED;
              const tmp26 = closure_130_1(closure_130_3[28]);
              const obj5 = closure_130_0(closure_130_3[29]);
              const merged1 = Object.assign(obj5.collectChannelAnalyticsMetadataFromId(closure_0.channel_id));
              track2(CALLKIT_CLICKED, obj12);
            }
            closure_130_1(closure_130_3[31])(closure_0.channel_id);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp50) {
        c4 = 3;
        throw tmp50;
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleFriendSuggestionCreateNotification() {
  obj = _asyncToGenerator(async (arg0) => {
    let user;
    let user_id = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let items;
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
              navigation = undefined;
              user_id = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: waitForNavigationReady(), done: false };
              return obj4;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              const obj9 = closure_130_0(closure_130_3[15]);
              navigation = obj9.getRootNavigationRef();
              if (null != navigation) {
                const obj6 = { screen: "add-friends", params: { sourcePage: "Notifications" } };
                navigation.navigate("friends", obj6);
              }
              user_id = user_id.user_id;
              c3 = 2;
              c4 = 1;
              const obj7 = {
                value: closure_130_21(closure_130_9, () => null != user.getUser(closure_1_2)),
                done: false,
              };
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            obj = { userId: user_id, sourceAnalyticsLocations: items };
            items = [];
            const tmp9 = closure_130_1(closure_130_3[24]);
            items[0] = closure_130_1(closure_130_3[25]).PUSH_NOTIFICATION;
            tmp9(obj);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp23) {
          c4 = 3;
          throw tmp23;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _maybeAckNotificationCenter() {
  obj = _asyncToGenerator(async function (arg0) {
    let closure_0 = arg0;
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
        let closure_2;
        let prop;
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
            let closure_1 = tmp;
            closure_2 = undefined;
            prop = null;
            if ("notification_center_id" in closure_0) {
              prop = closure_0.notification_center_id;
            }
            let since = null;
            if ("since" in closure_0) {
              since = closure_0.since;
            }
            if ("RELATIONSHIP_ADD" === closure_0.type) {
              const _Number = Number;
              if (Number(closure_0.rel_type) === constants.PENDING_INCOMING) {
                if (null != since) {
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: waitForConnection(), done: false };
                  return obj4;
                }
              }
            }
            if (null != prop) {
              c3 = 2;
              c4 = 1;
              const obj5 = { value: waitForConnection(), done: false };
              return obj5;
            }
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const _Date = Date;
            const _String = String;
            const fromTimestamp = closure_130_1(closure_130_3[32]).fromTimestamp;
            const self = this;
            const self2 = this;
            const tmp25 = closure_130_1(closure_130_3[32]);
            const date = new Date(String(closure_0.since));
            closure_2 = fromTimestamp(date.getTime());
            const _HermesInternal = HermesInternal;
            const markNotificationCenterLocalItemsAcked = closure_130_0(
              closure_130_3[33],
            ).markNotificationCenterLocalItemsAcked;
            const items = [];
            const tmp31 = closure_130_0(closure_130_3[33]);
            items[0] = "incoming_friend_requests_" + closure_0.user_id + "_" + closure_2;
            const result = markNotificationCenterLocalItemsAcked(items);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          obj = closure_130_0(closure_130_3[33]);
          const result1 = obj.markNotificationCenterRemoteItemAcked(prop);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
function receiveNotification_(data, isAppStartupNavigation) {
  let CHANNELResult;
  let NOTIFICATION_CLICKED;
  let NumberResult;
  let channel_id1;
  let channel_type;
  let flag;
  let flag2;
  let fn;
  let fn2;
  let guild_id1;
  let handleCallConnectNotification;
  let handleCallRingNotification;
  let handleFriendSuggestionCreateNotification;
  let handleGuildEventNotification;
  let handleRelationshipAddNotification;
  let handleStageNotification;
  let join_id;
  let maybeAckNotificationCenter;
  let mention_type;
  let message_id1;
  let message_type_;
  let notif_instance_id;
  let notif_type_id;
  let notification_id;
  let obj11;
  let obj12;
  let obj13;
  let obj14;
  let obj15;
  let obj16;
  let obj6;
  let obj7;
  let payload2;
  let promise;
  let tmp19;
  let tmp19Result;
  let tmp19Result3Result;
  let tmp19Result5;
  let tmp19Result6;
  let tmp19Result7;
  let tmp19Result8;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp27;
  let tmp29;
  let tmp31;
  let tmp32;
  let tmp34;
  let tmp36;
  let tmp38;
  let tmp41;
  let tmp43;
  let tmp44;
  let tmp46;
  let tmp48;
  let tmp50;
  let tmpResult2;
  let track;
  let transitionTo;
  let type;
  let type2;
  let user_id;
  const maybeAckNotificationCenter2 = function maybeAckNotificationCenter() {
    return obj(...arguments);
  };
  const f149739 = () => {
    obj = router_utils;
    const obj2 = { navigationReplace: true, openChannel: true, isAppStartupNavigation };
    obj.transitionTo(authStore2.CHANNEL(data.guild_id, data.channel_id), obj2);
  };
  const handleRelationshipAddNotification2 = function handleRelationshipAddNotification() {
    return obj(...arguments);
  };
  const handleCallRingNotification2 = function handleCallRingNotification() {
    return obj(...arguments);
  };
  const handleCallConnectNotification2 = function handleCallConnectNotification() {
    return obj(...arguments);
  };
  const handleFriendSuggestionCreateNotification2 = function handleFriendSuggestionCreateNotification() {
    return obj(...arguments);
  };
  const handleGuildEventNotification2 = function handleGuildEventNotification() {
    return obj(...arguments);
  };
  const handleStageNotification2 = function handleStageNotification() {
    return obj(...arguments);
  };
  _require = data;
  importDefault = isAppStartupNavigation;
  obj = require("RouteManagerUtils");
  const result = obj.initializeRouteManagerIfNeeded();
  if ("MESSAGE_CREATE" === data.type) {
    const _HermesInternal2 = HermesInternal;
    logger.log(
      "Notification clicked of type " +
        data.type +
        " with guild:" +
        data.guild_id +
        " channel:" +
        data.channel_id +
        " message:" +
        data.message_id,
    );
    let obj2 = { guildId: null, channelId: null, messageId: null, isPreload: true };
    ({ guild_id: obj10.guildId, channel_id: obj10.channelId, message_id: obj10.messageId } = data);
    const obj9 = MessageManagerDefault;
    const messages = obj9.fetchMessages(obj2);
    flag = true;
    flag2 = true;
  } else {
    flag = false;
    flag2 = false;
    if ("GENERIC_PUSH_NOTIFICATION_SENT" === data.type) {
      flag = false;
      flag2 = false;
      if (null != data.deeplink) {
        flag = false;
        flag2 = false;
        if ("" !== data.deeplink) {
          const payload = parseURLDefault(data.deeplink).payload;
          if (payload.type === require("ConstantsIOS").LinkingTypes.MESSAGE) {
            let tracking_type;
            if (data != null) {
              tracking_type = data.tracking_type;
            }
            if (tracking_type == null) {
              tracking_type = data.type;
            }
            const tmp8 = null != tracking_type && null != payload.messageId && null != payload.channelId;
            if (tmp8) {
              const tmpResult = require("PushFeedbackActions");
              tmpResult.receivedNotification(payload.messageId, payload.channelId, tracking_type);
            }
            const obj4 = { guildId: null, channelId: null, messageId: null, isPreload: true };
            ({ guildId: obj8.guildId, channelId: obj8.channelId, messageId: obj8.messageId } = payload);
            const tmp79Result = MessageManagerDefault;
            const messages1 = tmp79Result.fetchMessages(obj4);
            flag = true;
            flag2 = true;
          } else {
            if (payload.type === require("ConstantsIOS").LinkingTypes.ICYMI) {
              if (null != data.channel_id) {
                if (null != data.message_id) {
                  const tmp79Result3 = ICYMIActionCreatorsDefault;
                  const forNotification = tmp79Result3.fetchForNotification(data.channel_id, data.message_id);
                  flag = false;
                  flag2 = false;
                }
              }
            }
            flag = false;
            flag2 = false;
            if (payload.type === require("ConstantsIOS").LinkingTypes.ICYMI) {
              flag = false;
              flag2 = false;
              if (null != data.user_id) {
                flag = false;
                flag2 = false;
                if (null != data.notification_center_id) {
                  let status_emoji_id = null;
                  if (null != data.status_emoji_id) {
                    status_emoji_id = null;
                    if ("0" !== data.status_emoji_id) {
                      status_emoji_id = data.status_emoji_id;
                    }
                  }
                  const obj5 = {
                    id: data.notification_center_id,
                    type: require("ICYMITypes").ICYMIItemTypes.CUSTOM_STATUS,
                    score: 1000,
                    data: obj6,
                  };
                  obj6 = {
                    user_id: null,
                    text: null,
                    emoji_id: status_emoji_id,
                    emoji_name: data.status_emoji_name,
                    emoji_animated: data.status_emoji_animated,
                  };
                  ({ user_id: obj3.user_id, status_text: obj3.text } = data);
                  const tmp79Result4 = ICYMIActionCreatorsDefault;
                  const forStatusNotification = tmp79Result4.fetchForStatusNotification(obj5);
                  flag = false;
                  flag2 = false;
                }
              }
            }
          }
        }
      }
    }
    const _HermesInternal = HermesInternal;
    logger.log("Notification clicked of type " + data.type);
  }
  switch (data.type) {
    case "MESSAGE_CREATE": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "FORUM_THREAD_CREATED": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "RELATIONSHIP_ADD": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "CALL_RING": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "CALL_CONNECT": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "FRIEND_SUGGESTION_CREATE": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "STAGE_INSTANCE_CREATE": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "GUILD_SCHEDULED_EVENT_UPDATE": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "GUILD_STREAM_START": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    case "GENERIC_PUSH_NOTIFICATION_SENT": {
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      tmp21 = AnalyticsUtilsDefault;
      track = tmp21.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp23 = "tracking_type" in data;
      if (tmp23) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = {
        notif_type: type,
        notif_user_id: user_id,
        message_id: message_id1,
        message_type: message_type_,
        has_message: tmp31,
        guild_id: guild_id1,
        channel_id: channel_id1,
        channel_type,
        rel_type: NumberResult,
        notification_id,
        has_image_thumbnail: tmp43,
        join_id,
        notif_instance_id,
        notif_type_id,
        mention_type,
      };
      tmp24 = "user_id" in data;
      user_id = null;
      if (tmp24) {
        user_id = data.user_id;
      }
      tmp27 = "message_id" in data;
      message_id1 = null;
      if (tmp27) {
        message_id1 = data.message_id;
      }
      tmp29 = "message_type_" in data;
      message_type_ = null;
      if (tmp29) {
        message_type_ = data.message_type_;
      }
      tmp31 = "message" in data && null != data.message;
      tmp32 = "guild_id" in data;
      guild_id1 = null;
      if (tmp32) {
        guild_id1 = data.guild_id;
      }
      tmp34 = "channel_id" in data;
      channel_id1 = null;
      if (tmp34) {
        channel_id1 = data.channel_id;
      }
      tmp36 = "channel_type" in data;
      channel_type = null;
      if (tmp36) {
        channel_type = data.channel_type;
      }
      tmp38 = "rel_type" in data;
      NumberResult = null;
      if (tmp38) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      tmp41 = "notification_id" in data;
      notification_id = null;
      if (tmp41) {
        notification_id = data.notification_id;
      }
      tmp43 = "image_url" in data && null != data.image_url;
      tmp44 = "join_id" in data;
      join_id = null;
      if (tmp44) {
        join_id = data.join_id;
      }
      tmp46 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp46) {
        notif_instance_id = data.notif_instance_id;
      }
      tmp48 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp48) {
        notif_type_id = data.notif_type_id;
      }
      tmp50 = "mention_type" in data;
      mention_type = null;
      if (tmp50) {
        mention_type = data.mention_type;
      }
      track(NOTIFICATION_CLICKED, obj12);
      maybeAckNotificationCenter = maybeAckNotificationCenter2;
      let result1 = maybeAckNotificationCenter(data);
      type2 = data.type;
      switch (type2) {
        case "MESSAGE_CREATE": {
          let channel_id;
          let guild_id;
          let message_id;
          if (null != data.message) {
            tmp19Result = tmp19(584);
            obj13 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj13);
          }
          tmp19Result5 = tmp19(5099);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1112);
          transitionTo = tmpResult2.transitionTo;
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj14 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag, isAppStartupNavigation };
          transitionTo(CHANNELResult, obj14);
          return flag2;
        }
        case "FORUM_THREAD_CREATED": {
          let self = this;
          fn = f133368;
          let self2 = this;
          promise = new Promise(fn);
          fn2 = f149739;
          promise.then(fn2);
          break;
        }
        case "RELATIONSHIP_ADD": {
          handleRelationshipAddNotification = handleRelationshipAddNotification2;
          let result2 = handleRelationshipAddNotification(data);
          break;
        }
        case "CALL_RING": {
          handleCallRingNotification = handleCallRingNotification2;
          let result3 = handleCallRingNotification(data);
          break;
        }
        case "CALL_CONNECT": {
          handleCallConnectNotification = handleCallConnectNotification2;
          let result4 = handleCallConnectNotification(data);
          break;
        }
        case "FRIEND_SUGGESTION_CREATE": {
          handleFriendSuggestionCreateNotification = handleFriendSuggestionCreateNotification2;
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        }
        case "GUILD_STREAM_START": {
          tmp19Result6 = tmp19(5098);
          obj15 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result6(obj15);
          break;
        }
        case "GUILD_SCHEDULED_EVENT_UPDATE": {
          handleGuildEventNotification = handleGuildEventNotification2;
          let result6 = handleGuildEventNotification(data);
          break;
        }
        case "STAGE_INSTANCE_CREATE": {
          handleStageNotification = handleStageNotification2;
          let result7 = handleStageNotification(data);
          break;
        }
        case "GENERIC_PUSH_NOTIFICATION_SENT": {
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result7 = tmp19(4873);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              payload2 = tmp19Result3Result.payload;
              tmp19Result8 = tmp19(13679);
              obj16 = { payload: payload2, waitForConnection: false, skipMessageFetch: flag, isAppStartupNavigation };
              tmp19Result8(obj16);
            }
          }
          break;
        }
      }
      break;
    }
    default: {
      return flag2;
    }
  }
}
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
const NotificationTypes = PushNotificationConstants.NotificationTypes;
({
  AnalyticEvents: unpackModuleId,
  ComponentActions: closure_12,
  RelationshipTypes: map1,
  Routes: closure_14,
} = Constants);
const StreamTypes = Constants2.StreamTypes;
let closure_16 = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const constants = Constants3.MultiAccountSwitchLocation;
let tmp3 = new LoggerDefault("receiveNotification");
const logger = tmp3;
let result = size.fileFinishedImporting("modules/push_notifications/native/receiveNotification.tsx");

export default function receiveNotification(getData, arg1) {
  let closure_0;
  _require = arg1;
  if (null == getData.getData) {
    return false;
  } else {
    const obj3 = require("TTIAnalyticsUtils");
    obj3.trackAppOpened("notification");
    const data = getData.getData();
    const _HermesInternal = HermesInternal;
    const obj4 = data(10);
    obj4.mark("\u2757", "Receive notification " + data.type);
    const tmp10 = data;
    if (null != data.receiving_user_id) {
      if (null != AuthenticationStore.getId()) {
        let flag;
        if (data.receiving_user_id !== AuthenticationStore.getId()) {
          require("CacheStore");
          require("GatewayConnectionStore");
          require("MultiAccountSwitchStore");
          const tmp6Result4 = require("MultiAccountActionCreators");
          const switchAccountResult = tmp6Result4.switchAccount(
            data.receiving_user_id,
            false,
            arg1 ? constants.PUSH_NOTIFICATION_INITIAL : constants.PUSH_NOTIFICATION,
          );
          switchAccountResult.then(() => {
            const Emitter = get_initializedDefault.Emitter;
            Emitter.batched(() => receiveNotification_(data, closure_1_0));
          });
          flag = true;
        }
        return flag;
      }
    }
    let Emitter = tmp10(504).Emitter;
    flag = Emitter.batched(() => receiveNotification_(data, closure_0));
  }
}
