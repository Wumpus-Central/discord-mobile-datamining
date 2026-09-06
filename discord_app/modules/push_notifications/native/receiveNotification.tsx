// discord_app/modules/push_notifications/native/receiveNotification.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import AppStartPerformanceDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import parseURLDefault from "../../../utils/native/parseURL.tsx";
import MessageManagerDefault from "../../messages/MessageManager.tsx";
import _modDef11253 from "../../../../_runtime/metro/11253__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildScheduledEventStore from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function onStageConnectionError() {
  const obj = { key: "STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC", content: null, icon: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.ah3RLk);
  obj.icon = _modDef11253;
  obj.open(obj);
}
function waitForConnection() {
  return new Promise((arg0) => {
    addPostConnectionCallback(arg0);
  });
}
function waitForDataOrConnection() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _waitForDataOrConnection(arg0, value) {
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
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = importDefault;
          closure_130_2 = undefined;
          if (importDefault()) {
            c4 = 3;
          } else {
            closure_130_2 = false;
            const promise = new Promise((arg0) => {
              closure_0 = arg0;
              const result = closure_0.addConditionalChangeListener(() => {
                let tmp = !closure_2_2;
                if (!closure_2_2) {
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
            const obj1 = { value: Promise.race(items), done: false };
            return obj1;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_130_2 = true;
      }
      c4 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp13) {
      c4 = tmp;
      throw tmp13;
    }
  }
};
function waitForNavigationReady() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _waitForNavigationReady(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
          let isReadyResult = null != rootNavigationRef;
          if (isReadyResult) {
            isReadyResult = rootNavigationRef.isReady();
          }
          if (!isReadyResult) {
            const promise = new Promise((arg0) => {
              closure_0 = arg0;
              const ComponentDispatch = closure_1_0(closure_1_3[16]).ComponentDispatch;
              ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
                closure_0();
              });
            });
            c1 = 1;
            c0 = 1;
            const obj1 = { value: promise, done: false };
            return obj1;
          }
          const obj5 = require("RootNavigationRef");
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
      return { value: "HermesInternal", done: null };
    } catch (tmp11) {
      c0 = tmp;
      throw tmp11;
    }
  }
};
function _connectToStage() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _connectToStage2(arg0, arg1) {
  closure_3 = tmp3;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  await waitForConnection();
  await closure_131_0(closure_131_3[17]).connectOrLurkStage(closure_130_0, closure_130_1, true);
  if (2 === tmp7) {
    c5 = 0;
    closure_131_19();
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    closure_130_2 = arg1;
    closure_131_0(closure_131_3[17]).navigateToStage(closure_130_2, null);
    c5 = 0;
    closure_131_0(closure_131_3[17]);
  }
  return arg1;
};
let closure_27 = async function _handleStageNotification(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 1;
          c1 = 1;
          const obj1 = { value: _connectToStage(_require.guild_id, _require.channel_id), done: false };
          return obj1;
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
let closure_28 = async function _handleGuildEventNotification(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
          closure_2 = tmp2;
          closure_1 = tmp3;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          let guildScheduledEvent;
          const _Number = Number;
          const NumberResult = Number(_require.guild_scheduled_event_entity_type);
          if (constants.STAGE_INSTANCE === NumberResult) {
            const channel_id2 = tmp42.channel_id;
            if (null == channel_id2) {
              onStageConnectionError();
              c4 = 3;
              c4 = 3;
              const obj1 = { value, done: true };
              return obj1;
            } else {
              c3 = 2;
              c4 = 1;
              const obj2 = { value: _connectToStage(tmp42.guild_id, channel_id2), done: false };
              return obj2;
            }
          } else if (tmp45.VOICE === NumberResult) {
            const channel_id = tmp42.channel_id;
            closure_129_0 = channel_id;
            if (null == channel_id) {
              (function onVoiceConnectionError() {
                closure_1_1(4259);
                const obj = { key: "VOICE_CONNECTION_ERROR_GENERIC", content: null, icon: null };
                const intl = closure_1_0(1114).intl;
                obj.content = intl.string(closure_1_0(1114).t.S69lJR);
                obj.icon = closure_1_1(11253);
                obj.open(obj);
              })();
              c4 = 3;
              c4 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              c3 = 3;
              c4 = 1;
              const obj4 = { value: waitForConnection(), done: false };
              return obj4;
            }
          } else if (tmp45.EXTERNAL === NumberResult) {
            closure_129_1 = tmp42.guild_scheduled_event_id;
            let obj6 = require("transitionToGuild");
            obj6.transitionToGuild(tmp42.guild_id);
            c3 = 1;
            c4 = 1;
            const obj5 = { value: waitForConnection(), done: false };
            return obj5;
          } else {
            c4 = 3;
          }
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj6 = { value, done: true };
          return obj6;
        } else {
          guildScheduledEvent = closure_130_6.getGuildScheduledEvent(closure_129_1);
          if (null != guildScheduledEvent) {
            obj3 = closure_130_0(closure_130_3[20]);
            const obj7 = { eventId: guildScheduledEvent.id, event: guildScheduledEvent };
            const result = obj3.openGuildEventDetails(obj7);
          }
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        obj = closure_130_0(closure_130_3[18]);
        obj.transitionToChannel(closure_129_0);
      }
      c4 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp31) {
      c4 = tmp;
      throw tmp31;
    }
  }
};
let closure_29 = async function _handleRelationshipAddNotification(arg0, value) {
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
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          let user_id;
          c3 = 1;
          c4 = 1;
          const obj1 = { value: waitForNavigationReady(), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          const _Number = Number;
          closure_129_1 = Number(closure_129_0.rel_type);
          if (closure_129_1 === closure_130_13.PENDING_INCOMING) {
            user_id = closure_129_0.user_id;
            closure_130_0(closure_130_3[21]).navigateToRootTab({ screen: "notifications" });
            const obj8 = closure_130_0(closure_130_3[21]);
            closure_130_2(closure_130_3[22]).setTab(closure_130_0(closure_130_3[23]).NotificationCenterTabs.ForYou);
            c3 = 2;
            c4 = 1;
            let obj3 = { value: closure_130_21(closure_130_9, () => null != user.getUser(closure_1_2)), done: false };
            return obj3;
          } else {
            if (closure_129_1 !== closure_130_13.FRIEND) {
              if (closure_129_0.notification_type === closure_130_10.REMINDER) {
                let obj5 = closure_130_0(closure_130_3[15]);
                const rootNavigationRef = obj5.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  rootNavigationRef.navigate("friends", { screen: "requests" });
                }
              }
            } else {
              obj3 = closure_130_1(closure_130_3[26]);
              const obj4 = { recipientIds: closure_129_0.user_id };
              obj3.openPrivateChannel(obj4);
            }
            c4 = 3;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj5 = { value, done: true };
        return obj5;
      } else {
        obj = { userId: user_id, sourceAnalyticsLocations: null };
        const items = [closure_130_1(closure_130_3[25]).PUSH_NOTIFICATION];
        obj.sourceAnalyticsLocations = items;
        closure_130_1(closure_130_3[24])(obj);
        c4 = 3;
        const obj6 = { value: undefined, done: true };
        return obj6;
      }
    } catch (tmp45) {
      c4 = tmp;
      throw tmp45;
    }
  }
};
let closure_30 = async function _handleCallRingNotification(arg0, value) {
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
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = channel_id;
          c3 = 1;
          c4 = 1;
          const obj1 = {
            value: waitForDataOrConnection(ChannelStore, () => null != channel.getChannel(channel_id.channel_id)),
            done: false,
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        obj = closure_130_0(closure_130_3[18]);
        obj.transitionToChannel(closure_129_0.channel_id);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp15) {
      c4 = tmp;
      throw tmp15;
    }
  }
};
let closure_31 = async function _handleCallConnectNotification(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
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
          c2 = 0;
          closure_1 = tmp4;
          closure_129_0 = channel_id;
          c3 = 1;
          c4 = 1;
          const obj1 = {
            value: waitForDataOrConnection(ChannelStore, () => null != channel.getChannel(channel_id.channel_id)),
            done: false,
          };
          return obj1;
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_0(closure_130_3[18]).transitionToChannel(closure_129_0.channel_id);
          c3 = 2;
          c4 = 1;
          let obj3 = { value: closure_130_20(), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj4 = { value, done: true };
        return obj4;
      } else {
        const tmp59 = closure_130_1(closure_130_3[27]);
        const call = tmp59.call;
        channel_id = closure_129_0.channel_id;
        if (typeof call === "unknown") {
          tmp59(false, false);
        } else {
          call(channel_id, false, false);
        }
        obj = closure_130_1(closure_130_3[28]);
        const obj5 = {
          location: closure_130_1(closure_130_3[25]).PUSH_NOTIFICATION,
          guild_id: closure_129_0.guild_id,
          ringer_user_id: closure_129_0.user_id,
        };
        obj2 = closure_130_0(closure_130_3[29]);
        const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(closure_129_0.channel_id));
        obj.track(closure_130_11.RING_CALL_ACCEPTED, obj5);
        obj3 = closure_130_0(closure_130_3[30]);
        if (obj3.isAndroid()) {
          if (closure_129_0.is_fullscreen_call_ui) {
            obj4 = closure_130_1(closure_130_3[28]);
            let obj6 = { action_type: "join" };
            obj6 = closure_130_0(closure_130_3[29]);
            const merged1 = Object.assign(obj6.collectChannelAnalyticsMetadataFromId(closure_129_0.channel_id));
            obj4.track(closure_130_11.CALLKIT_CLICKED, obj6);
          }
          closure_130_1(closure_130_3[31])(closure_129_0.channel_id);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp50) {
      c4 = tmp;
      throw tmp50;
    }
  }
};
let closure_32 = async function _handleFriendSuggestionCreateNotification(arg0, value) {
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
          closure_129_0 = closure_0;
          let rootNavigationRef;
          let user_id;
          c3 = 1;
          c4 = 1;
          const obj1 = { value: waitForNavigationReady(), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          rootNavigationRef = closure_130_0(closure_130_3[15]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            const obj3 = { screen: "add-friends", params: { sourcePage: "Notifications" } };
            rootNavigationRef.navigate("friends", obj3);
          }
          user_id = closure_129_0.user_id;
          c3 = 2;
          c4 = 1;
          const obj4 = { value: closure_130_21(closure_130_9, () => null != user.getUser(closure_1_2)), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        obj = { userId: user_id, sourceAnalyticsLocations: null };
        const items = [closure_130_1(closure_130_3[25]).PUSH_NOTIFICATION];
        obj.sourceAnalyticsLocations = items;
        closure_130_1(closure_130_3[24])(obj);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp24) {
      c4 = tmp;
      throw tmp24;
    }
  }
};
let closure_33 = async function _maybeAckNotificationCenter(arg0, value) {
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
          closure_129_0 = _require;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          let prop = null;
          if ("notification_center_id" in _require) {
            prop = tmp37.notification_center_id;
          }
          closure_129_1 = prop;
          let since = null;
          if ("since" in _require) {
            since = tmp37.since;
          }
          if ("RELATIONSHIP_ADD" === _require.type) {
            const _Number = Number;
            if (Number(tmp37.rel_type) === constants.PENDING_INCOMING) {
              if (null != since) {
                c3 = 1;
                c4 = 1;
                const obj1 = { value: waitForConnection(), done: false };
                return obj1;
              }
            }
          }
          if (null != prop) {
            c3 = 2;
            c4 = 1;
            const obj2 = { value: waitForConnection(), done: false };
            return obj2;
          } else {
            c4 = 3;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const _Date = Date;
          const _String = String;
          const date = new Date(String(closure_129_0.since));
          closure_129_2 = closure_130_1(closure_130_3[32]).fromTimestamp(date.getTime());
          const obj8 = closure_130_1(closure_130_3[32]);
          const _HermesInternal = HermesInternal;
          const items = ["incoming_friend_requests_" + closure_129_0.user_id + "_" + closure_129_2];
          const result = closure_130_0(closure_130_3[33]).markNotificationCenterLocalItemsAcked(items);
          const obj10 = closure_130_0(closure_130_3[33]);
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        obj = closure_130_0(closure_130_3[33]);
        const result1 = obj.markNotificationCenterRemoteItemAcked(closure_129_1);
      }
      c4 = 3;
      const obj4 = { value, done: true };
      return obj4;
    } catch (tmp18) {
      c4 = tmp;
      throw tmp18;
    }
  }
};
function receiveNotification_(data) {
  _require = data;
  let obj = require("RouteManagerUtils");
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
    let obj8 = MessageManagerDefault;
    obj = { guildId: null, channelId: null, messageId: null, isPreload: true };
    ({ guild_id: obj10.guildId, channel_id: obj10.channelId, message_id: obj10.messageId } = data);
    const messages = obj8.fetchMessages(obj);
    let flag = true;
    let flag2 = true;
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
          if (payload.type === tmp(1093).LinkingTypes.MESSAGE) {
            let tracking_type;
            if (data != null) {
              tracking_type = data.tracking_type;
            }
            if (tracking_type == null) {
              tracking_type = data.type;
            }
            if (tmp8) {
              let tmpResult = tmp(11627);
              tmpResult.receivedNotification(payload.messageId, payload.channelId, tracking_type);
            }
            let tmp80Result = tmp80(9941);
            obj = { guildId: null, channelId: null, messageId: null, isPreload: true };
            ({ guildId: obj8.guildId, channelId: obj8.channelId, messageId: obj8.messageId } = payload);
            const messages1 = tmp80Result.fetchMessages(obj);
            flag = true;
            flag2 = true;
            tmp8 = null != tracking_type && null != payload.messageId && null != payload.channelId;
          } else {
            if (payload.type === tmp(1093).LinkingTypes.ICYMI) {
              if (null != data.channel_id) {
                if (null != data.message_id) {
                  tmp80Result = tmp80(8351);
                  const forNotification = tmp80Result.fetchForNotification(data.channel_id, data.message_id);
                  flag = false;
                  flag2 = false;
                }
              }
            }
            flag = false;
            flag2 = false;
            if (payload.type === tmp(1093).LinkingTypes.ICYMI) {
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
                  const obj1 = {
                    id: data.notification_center_id,
                    type: tmp(8348).ICYMIItemTypes.CUSTOM_STATUS,
                    score: 1000,
                    data: null,
                  };
                  const obj2 = { user_id: null, text: null, emoji_id: null, emoji_name: null, emoji_animated: null };
                  ({ user_id: obj3.user_id, status_text: obj3.text } = data);
                  obj2.emoji_id = status_emoji_id;
                  obj2.emoji_name = data.status_emoji_name;
                  obj2.emoji_animated = data.status_emoji_animated;
                  obj1.data = obj2;
                  const forStatusNotification = tmp80(8351).fetchForStatusNotification(obj1);
                  flag = false;
                  flag2 = false;
                  const tmp80Result1 = tmp80(8351);
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
    case "MESSAGE_CREATE":
      let tmp19 = importDefault;
      let obj11 = DispatcherDefault;
      let obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      let obj13 = AnalyticsUtilsDefault;
      let tmp22 = "tracking_type" in data;
      if (tmp22) {
        let type = data.tracking_type;
      } else {
        type = data.type;
      }
      let obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      let tmp23 = "user_id" in data;
      let user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      let tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      let tmp28 = "message_type_" in data;
      let message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      let tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      let tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      let tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      let tmp35 = "channel_type" in data;
      let channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      let tmp37 = "rel_type" in data;
      let NumberResult = null;
      if (tmp37) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      let tmp40 = "notification_id" in data;
      let notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      let tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      let tmp43 = "join_id" in data;
      let join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      let tmp45 = "notif_instance_id" in data;
      let notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      let tmp47 = "notif_type_id" in data;
      let notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      let tmp49 = "mention_type" in data;
      let mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      let result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            let tmp19Result = tmp19(573);
            let obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          let CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          let obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          let fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          let promise = new Promise(fn);
          let fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          let result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          let result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          let result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          let result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          let tmp19Result1 = tmp19(4762);
          let obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          let result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          let result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              let tmp19Result2 = tmp19(4540);
              let tmp19Result3Result = tmp19Result2(data.deeplink);
              let tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "FORUM_THREAD_CREATED":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "RELATIONSHIP_ADD":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "CALL_RING":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "CALL_CONNECT":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "FRIEND_SUGGESTION_CREATE":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "STAGE_INSTANCE_CREATE":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "GUILD_SCHEDULED_EVENT_UPDATE":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "GUILD_STREAM_START":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    case "GENERIC_PUSH_NOTIFICATION_SENT":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj3 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj3);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj4 = {
        notif_type: type,
        notif_user_id: null,
        message_id: null,
        message_type: null,
        has_message: null,
        guild_id: null,
        channel_id: null,
        channel_type: null,
        rel_type: null,
        notification_id: null,
        has_image_thumbnail: null,
        join_id: null,
        notif_instance_id: null,
        notif_type_id: null,
        mention_type: null,
      };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj4.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id = null;
      if (tmp26) {
        message_id = data.message_id;
      }
      obj4.message_id = message_id;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj4.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj4.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id = null;
      if (tmp31) {
        guild_id = data.guild_id;
      }
      obj4.guild_id = guild_id;
      tmp33 = "channel_id" in data;
      channel_id = null;
      if (tmp33) {
        channel_id = data.channel_id;
      }
      obj4.channel_id = channel_id;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj4.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj4.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj4.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj4.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj4.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj4.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj4.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj4.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj4);
      maybeAckNotificationCenter = function maybeAckNotificationCenter() {
        const self = this;
        const apply = closure_1_33.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      result1 = maybeAckNotificationCenter(data);
      switch (tmp53) {
        case "MESSAGE_CREATE":
          if (null != data.message) {
            tmp19Result = tmp19(573);
            obj5 = {
              type: "MESSAGE_CREATE",
              channelId: data.message.channel_id,
              message: data.message,
              optimistic: true,
              isPushNotification: true,
            };
            tmp19Result.dispatch(obj5);
          }
          tmp19Result = tmp19(4763);
          tmp19Result.popAll();
          tmpResult = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult.transitionTo(CHANNELResult, obj6);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), {
              navigationReplace: true,
              openChannel: true,
            });
          };
          promise.then(fn2);
          break;
        case "RELATIONSHIP_ADD":
          handleRelationshipAddNotification = function handleRelationshipAddNotification() {
            const self = this;
            const apply = closure_1_29.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result2 = handleRelationshipAddNotification(data);
          break;
        case "CALL_RING":
          handleCallRingNotification = function handleCallRingNotification() {
            const self = this;
            const apply = closure_1_30.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result3 = handleCallRingNotification(data);
          break;
        case "CALL_CONNECT":
          handleCallConnectNotification = function handleCallConnectNotification() {
            const self = this;
            const apply = closure_1_31.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result4 = handleCallConnectNotification(data);
          break;
        case "FRIEND_SUGGESTION_CREATE":
          handleFriendSuggestionCreateNotification = function handleFriendSuggestionCreateNotification() {
            const self = this;
            const apply = closure_1_32.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result5 = handleFriendSuggestionCreateNotification(data);
          break;
        case "GUILD_STREAM_START":
          tmp19Result1 = tmp19(4762);
          obj7 = {
            streamType: StreamTypes.GUILD,
            ownerId: data.user_id,
            guildId: data.guild_id,
            channelId: data.channel_id,
          };
          tmp19Result1(obj7);
          break;
        case "GUILD_SCHEDULED_EVENT_UPDATE":
          handleGuildEventNotification = function handleGuildEventNotification() {
            const self = this;
            const apply = closure_1_28.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result6 = handleGuildEventNotification(data);
          break;
        case "STAGE_INSTANCE_CREATE":
          handleStageNotification = function handleStageNotification() {
            const self = this;
            const apply = closure_1_27.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          result7 = handleStageNotification(data);
          break;
        case "GENERIC_PUSH_NOTIFICATION_SENT":
          if (null != data.deeplink) {
            if ("" !== data.deeplink) {
              tmp19Result2 = tmp19(4540);
              tmp19Result3Result = tmp19Result2(data.deeplink);
              tmp19Result3 = tmp19(13850);
              obj8 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result3(obj8);
            }
          }
          break;
      }
      break;
    default:
      return flag2;
  }
}
fn(5558).addPostConnectionCallback;
const NotificationTypes = fn(6596).NotificationTypes;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, ComponentActions: closure_12, RelationshipTypes: map1, Routes: closure_14 } = Constants);
const StreamTypes = fn(4602).StreamTypes;
let closure_16 = fn(1963).GuildScheduledEventEntityTypes;
let closure_17 = fn(12414).MultiAccountSwitchLocation;
const logger = new LoggerDefault("receiveNotification");
const size = fn(2);
let result = size.fileFinishedImporting("modules/push_notifications/native/receiveNotification.tsx");

export default function receiveNotification(getData, arg1) {
  if (null == getData.getData) {
    return false;
  } else {
    data(7475).trackAppOpened("notification");
    data = getData.getData();
    const obj3 = data(7475);
    const tmp11 = importDefault;
    const _HermesInternal = HermesInternal;
    AppStartPerformanceDefault.mark("\u2757", "Receive notification " + data.type);
    if (null != data.receiving_user_id) {
      if (null != AuthenticationStore.getId()) {
        if (data.receiving_user_id !== obj.getId()) {
          tmp7(7476);
          tmp7(5277);
          tmp7(13629);
          let receiving_user_id = data.receiving_user_id;
          receiving_user_id = tmp7(12417).switchAccount(
            receiving_user_id,
            false,
            arg1 ? tmp5.PUSH_NOTIFICATION_INITIAL : tmp5.PUSH_NOTIFICATION,
          );
          receiving_user_id.then(() => {
            const Emitter = initializeDefault.Emitter;
            Emitter.batched(() => receiveNotification_(data));
          });
          const tmp7Result2 = tmp7(12417);
        }
      }
      obj = AuthenticationStore;
    }
    let Emitter = tmp11(504).Emitter;
    return Emitter.batched(() => receiveNotification_(data));
  }
}
