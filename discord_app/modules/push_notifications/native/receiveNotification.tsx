// === Module 18014: receiveNotification ===

// Module 18014 (receiveNotification)
import LoggerDefault from "Logger" /* 3 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import parseURLDefault from "parseURL" /* 4616 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8469 */;
import MessageManagerDefault from "MessageManager" /* 10071 */;
import _modDef11387 from "module_11387" /* 11387 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7629 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function onStageConnectionError() {
  const obj2 = { key: "STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t.ah3RLk);
  obj2.icon = _modDef11387;
  ToastActionCreatorsDefault.open(obj2);
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
let closure_22 = async function _waitForDataOrConnection(arg0) {
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
            const obj4 = { value: Promise.race(items), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_130_2 = true;
      }
      c4 = 3;
      const obj = { value, done: true };
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
let closure_24 = async function _waitForNavigationReady() {
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
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
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
            const obj4 = { value: promise, done: false };
            return obj4;
          }
          const obj5 = require("RootNavigationRef");
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
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
let closure_26 = async function _connectToStage2(arg0) {
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
    throw value;
  } else if (arg0 !== 2) {
    closure_130_2 = value;
    closure_131_0(closure_131_3[17]).navigateToStage(closure_130_2, null);
    c5 = 0;
    closure_131_0(closure_131_3[17]);
  }
  return value;
};
let closure_27 = async function _handleStageNotification(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
          const obj4 = { value: _connectToStage(_require.guild_id, _require.channel_id), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
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
let closure_28 = async function _handleGuildEventNotification(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
          closure_2 = tmp2;
          closure_1 = tmp3;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          let guildScheduledEvent;
          const _Number = Number;
          const NumberResult = Number(_require.guild_scheduled_event_entity_type);
          if (constants.STAGE_INSTANCE === NumberResult) {
            const channel_id2 = _require.channel_id;
            if (null == channel_id2) {
              onStageConnectionError();
              c4 = 3;
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c3 = 2;
              c4 = 1;
              const obj6 = { value: _connectToStage(_require.guild_id, channel_id2), done: false };
              return obj6;
            }
          } else if (constants.VOICE === NumberResult) {
            const channel_id = _require.channel_id;
            closure_129_0 = channel_id;
            if (null == channel_id) {
              (function onVoiceConnectionError() {
                const obj2 = { key: "VOICE_CONNECTION_ERROR_GENERIC", content: null, icon: null };
                const intl = closure_1_0(1114).intl;
                obj2.content = intl.string(closure_1_0(1114).t.S69lJR);
                obj2.icon = closure_1_1(11387);
                closure_1_1(4335).open(obj2);
              })();
              c4 = 3;
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              c3 = 3;
              c4 = 1;
              const obj9 = { value: waitForConnection(), done: false };
              return obj9;
            }
          } else if (constants.EXTERNAL === NumberResult) {
            closure_129_1 = _require.guild_scheduled_event_id;
            require("transitionToGuild").transitionToGuild(_require.guild_id);
            c3 = 1;
            c4 = 1;
            const obj10 = { value: waitForConnection(), done: false };
            return obj10;
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
          const obj11 = { value, done: true };
          return obj11;
        } else {
          guildScheduledEvent = closure_130_6.getGuildScheduledEvent(closure_129_1);
          if (null != guildScheduledEvent) {
            const obj12 = { eventId: guildScheduledEvent.id, event: guildScheduledEvent };
            const result = closure_130_0(closure_130_3[20]).openGuildEventDetails(obj12);
            const obj4 = closure_130_0(closure_130_3[20]);
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
        closure_130_0(closure_130_3[18]).transitionToChannel(closure_129_0);
        const obj = closure_130_0(closure_130_3[18]);
      }
      c4 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp31) {
      c4 = tmp;
      throw tmp31;
    }
  }
};
let closure_29 = async function _handleRelationshipAddNotification(arg0) {
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
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          let user_id;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: waitForNavigationReady(), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
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
            const obj10 = { value: closure_130_21(closure_130_9, () => null != user.getUser(closure_1_2)), done: false };
            return obj10;
          } else {
            if (closure_129_1 !== closure_130_13.FRIEND) {
              if (closure_129_0.notification_type === closure_130_10.REMINDER) {
                const rootNavigationRef = closure_130_0(closure_130_3[15]).getRootNavigationRef();
                if (rootNavigationRef != null) {
                  rootNavigationRef.navigate("friends", { screen: "requests" });
                }
                const obj6 = closure_130_0(closure_130_3[15]);
              }
            } else {
              const obj11 = { recipientIds: closure_129_0.user_id };
              closure_130_1(closure_130_3[26]).openPrivateChannel(obj11);
              const obj4 = closure_130_1(closure_130_3[26]);
            }
            c4 = 3;
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
        const obj = { userId: user_id, sourceAnalyticsLocations: null };
        const items = [closure_130_1(closure_130_3[25]).PUSH_NOTIFICATION];
        obj.sourceAnalyticsLocations = items;
        closure_130_1(closure_130_3[24])(obj);
        c4 = 3;
        const obj13 = { value: undefined, done: true };
        return obj13;
      }
    } catch (tmp45) {
      c4 = tmp;
      throw tmp45;
    }
  }
};
let closure_30 = async function _handleCallRingNotification(arg0) {
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
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = channel_id;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: waitForDataOrConnection(ChannelStore, () => null != channel.getChannel(channel_id.channel_id)), done: false };
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
        closure_130_0(closure_130_3[18]).transitionToChannel(closure_129_0.channel_id);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp15) {
      c4 = tmp;
      throw tmp15;
    }
  }
};
let closure_31 = async function _handleCallConnectNotification(arg0) {
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c2 = 0;
          closure_1 = tmp4;
          closure_129_0 = channel_id;
          c3 = 1;
          c4 = 1;
          const obj8 = { value: waitForDataOrConnection(ChannelStore, () => null != channel.getChannel(channel_id.channel_id)), done: false };
          return obj8;
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_0(closure_130_3[18]).transitionToChannel(closure_129_0.channel_id);
          c3 = 2;
          c4 = 1;
          const obj11 = { value: closure_130_20(), done: false };
          return obj11;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        const tmp59 = closure_130_1(closure_130_3[27]);
        const call = tmp59.call;
        channel_id = closure_129_0.channel_id;
        if (typeof call === "unknown") {
          tmp59(false, false);
        } else {
          call(channel_id, false, false);
        }
        const obj13 = { location: closure_130_1(closure_130_3[25]).PUSH_NOTIFICATION, guild_id: closure_129_0.guild_id, ringer_user_id: closure_129_0.user_id };
        const obj = closure_130_1(closure_130_3[28]);
        const merged = Object.assign(closure_130_0(closure_130_3[29]).collectChannelAnalyticsMetadataFromId(closure_129_0.channel_id));
        obj.track(closure_130_11.RING_CALL_ACCEPTED, obj13);
        const obj3 = closure_130_0(closure_130_3[29]);
        if (obj4.isAndroid()) {
          if (closure_129_0.is_fullscreen_call_ui) {
            const obj14 = { action_type: "join" };
            const obj5 = closure_130_1(closure_130_3[28]);
            const merged1 = Object.assign(closure_130_0(closure_130_3[29]).collectChannelAnalyticsMetadataFromId(closure_129_0.channel_id));
            obj5.track(closure_130_11.CALLKIT_CLICKED, obj14);
            const obj7 = closure_130_0(closure_130_3[29]);
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
let closure_32 = async function _handleFriendSuggestionCreateNotification(arg0) {
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
          closure_129_0 = closure_0;
          let rootNavigationRef;
          let user_id;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: waitForNavigationReady(), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          rootNavigationRef = closure_130_0(closure_130_3[15]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            const obj6 = { screen: "add-friends", params: { sourcePage: "Notifications" } };
            rootNavigationRef.navigate("friends", obj6);
          }
          user_id = closure_129_0.user_id;
          c3 = 2;
          c4 = 1;
          const obj7 = { value: closure_130_21(closure_130_9, () => null != user.getUser(closure_1_2)), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        const obj = { userId: user_id, sourceAnalyticsLocations: null };
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
let closure_33 = async function _maybeAckNotificationCenter(arg0) {
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
          closure_129_0 = _require;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          let prop = null;
          if ("notification_center_id" in _require) {
            prop = _require.notification_center_id;
          }
          closure_129_1 = prop;
          let since = null;
          if ("since" in _require) {
            since = _require.since;
          }
          if ("RELATIONSHIP_ADD" === _require.type) {
            const _Number = Number;
            if (Number(_require.rel_type) === constants.PENDING_INCOMING) {
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
          const obj6 = { value, done: true };
          return obj6;
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
        const result1 = closure_130_0(closure_130_3[33]).markNotificationCenterRemoteItemAcked(closure_129_1);
        const obj = closure_130_0(closure_130_3[33]);
      }
      c4 = 3;
      const obj7 = { value, done: true };
      return obj7;
    } catch (tmp18) {
      c4 = tmp;
      throw tmp18;
    }
  }
};
function receiveNotification_(data) {
  _require = data;
  const result = require("RouteManagerUtils").initializeRouteManagerIfNeeded();
  if ("MESSAGE_CREATE" === data.type) {
    const _HermesInternal2 = HermesInternal;
    logger.log("Notification clicked of type " + data.type + " with guild:" + data.guild_id + " channel:" + data.channel_id + " message:" + data.message_id);
    ({ guild_id: obj10.guildId, channel_id: obj10.channelId, message_id: obj10.messageId } = data);
    const messages = MessageManagerDefault.fetchMessages({ guildId: null, channelId: null, messageId: null, isPreload: true });
    let flag = true;
    let flag2 = true;
    const obj2 = { guildId: null, channelId: null, messageId: null, isPreload: true };
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
              tmp(11757).receivedNotification(payload.messageId, payload.channelId, tracking_type);
              const tmpResult = tmp(11757);
            }
            ({ guildId: obj8.guildId, channelId: obj8.channelId, messageId: obj8.messageId } = payload);
            const messages1 = MessageManagerDefault.fetchMessages({ guildId: null, channelId: null, messageId: null, isPreload: true });
            flag = true;
            flag2 = true;
            const obj4 = { guildId: null, channelId: null, messageId: null, isPreload: true };
            tmp8 = null != tracking_type && null != payload.messageId && null != payload.channelId;
            const tmp80Result = MessageManagerDefault;
          } else {
            if (payload.type === tmp(1093).LinkingTypes.ICYMI) {
              if (null != data.channel_id) {
                if (null != data.message_id) {
                  const forNotification = ICYMIActionCreatorsDefault.fetchForNotification(data.channel_id, data.message_id);
                  flag = false;
                  flag2 = false;
                  const tmp80Result3 = ICYMIActionCreatorsDefault;
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
                  const obj5 = { id: data.notification_center_id, type: tmp(8466).ICYMIItemTypes.CUSTOM_STATUS, score: 1000, data: null };
                  const obj6 = { user_id: null, text: null, emoji_id: null, emoji_name: null, emoji_animated: null };
                  ({ user_id: obj3.user_id, status_text: obj3.text } = data);
                  obj6.emoji_id = status_emoji_id;
                  obj6.emoji_name = data.status_emoji_name;
                  obj6.emoji_animated = data.status_emoji_animated;
                  obj5.data = obj6;
                  const forStatusNotification = ICYMIActionCreatorsDefault.fetchForStatusNotification(obj5);
                  flag = false;
                  flag2 = false;
                  const tmp80Result4 = ICYMIActionCreatorsDefault;
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
      let obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      let obj13 = AnalyticsUtilsDefault;
      let tmp22 = "tracking_type" in data;
      if (tmp22) {
        let type = data.tracking_type;
      } else {
        type = data.type;
      }
      let obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      let tmp23 = "user_id" in data;
      let user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      let tmp26 = "message_id" in data;
      let message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      let tmp28 = "message_type_" in data;
      let message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      let tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      let tmp31 = "guild_id" in data;
      let guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      let tmp33 = "channel_id" in data;
      let channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      let tmp35 = "channel_type" in data;
      let channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      let tmp37 = "rel_type" in data;
      let NumberResult = null;
      if (tmp37) {
        let _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      let tmp40 = "notification_id" in data;
      let notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      let tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      let tmp43 = "join_id" in data;
      let join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      let tmp45 = "notif_instance_id" in data;
      let notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      let tmp47 = "notif_type_id" in data;
      let notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      let tmp49 = "mention_type" in data;
      let mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            let obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          let tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          let tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          let CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          let obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          let fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          let promise = new Promise(fn);
          let fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          let tmp19Result6 = tmp19(4838);
          let obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              let tmp19Result7 = tmp19(4616);
              let tmp19Result3Result = tmp19Result7(data.deeplink);
              let tmp19Result8 = tmp19(13939);
              let obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "FORUM_THREAD_CREATED":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "RELATIONSHIP_ADD":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "CALL_RING":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "CALL_CONNECT":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "FRIEND_SUGGESTION_CREATE":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "STAGE_INSTANCE_CREATE":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "GUILD_SCHEDULED_EVENT_UPDATE":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "GUILD_STREAM_START":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    case "GENERIC_PUSH_NOTIFICATION_SENT":
      tmp19 = importDefault;
      obj11 = DispatcherDefault;
      obj7 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj11.dispatch(obj7);
      obj13 = AnalyticsUtilsDefault;
      tmp22 = "tracking_type" in data;
      if (tmp22) {
        type = data.tracking_type;
      } else {
        type = data.type;
      }
      obj12 = { notif_type: type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      tmp23 = "user_id" in data;
      user_id = null;
      if (tmp23) {
        user_id = data.user_id;
      }
      obj12.notif_user_id = user_id;
      tmp26 = "message_id" in data;
      message_id1 = null;
      if (tmp26) {
        message_id1 = data.message_id;
      }
      obj12.message_id = message_id1;
      tmp28 = "message_type_" in data;
      message_type_ = null;
      if (tmp28) {
        message_type_ = data.message_type_;
      }
      obj12.message_type = message_type_;
      tmp30 = "message" in data;
      if (tmp30) {
        tmp30 = null != data.message;
      }
      obj12.has_message = tmp30;
      tmp31 = "guild_id" in data;
      guild_id1 = null;
      if (tmp31) {
        guild_id1 = data.guild_id;
      }
      obj12.guild_id = guild_id1;
      tmp33 = "channel_id" in data;
      channel_id1 = null;
      if (tmp33) {
        channel_id1 = data.channel_id;
      }
      obj12.channel_id = channel_id1;
      tmp35 = "channel_type" in data;
      channel_type = null;
      if (tmp35) {
        channel_type = data.channel_type;
      }
      obj12.channel_type = channel_type;
      tmp37 = "rel_type" in data;
      NumberResult = null;
      if (tmp37) {
        _Number = Number;
        NumberResult = Number(data.rel_type);
      }
      obj12.rel_type = NumberResult;
      tmp40 = "notification_id" in data;
      notification_id = null;
      if (tmp40) {
        notification_id = data.notification_id;
      }
      obj12.notification_id = notification_id;
      tmp42 = "image_url" in data;
      if (tmp42) {
        tmp42 = null != data.image_url;
      }
      obj12.has_image_thumbnail = tmp42;
      tmp43 = "join_id" in data;
      join_id = null;
      if (tmp43) {
        join_id = data.join_id;
      }
      obj12.join_id = join_id;
      tmp45 = "notif_instance_id" in data;
      notif_instance_id = null;
      if (tmp45) {
        notif_instance_id = data.notif_instance_id;
      }
      obj12.notif_instance_id = notif_instance_id;
      tmp47 = "notif_type_id" in data;
      notif_type_id = null;
      if (tmp47) {
        notif_type_id = data.notif_type_id;
      }
      obj12.notif_type_id = notif_type_id;
      tmp49 = "mention_type" in data;
      mention_type = null;
      if (tmp49) {
        mention_type = data.mention_type;
      }
      obj12.mention_type = mention_type;
      obj13.track(constants.NOTIFICATION_CLICKED, obj12);
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
            obj14 = { type: "MESSAGE_CREATE", channelId: data.message.channel_id, message: data.message, optimistic: true, isPushNotification: true };
            tmp19Result.dispatch(obj14);
          }
          tmp19Result5 = tmp19(4839);
          tmp19Result5.popAll();
          tmpResult2 = tmp(1100);
          ({ guild_id, channel_id, message_id } = data);
          CHANNELResult = closure_14.CHANNEL(guild_id, channel_id, message_id);
          obj15 = { navigationReplace: true, openChannel: true, skipMessageFetch: flag };
          tmpResult2.transitionTo(CHANNELResult, obj15);
          return flag2;
        case "FORUM_THREAD_CREATED":
          fn = (arg0) => {
            addPostConnectionCallback(arg0);
          };
          promise = new Promise(fn);
          fn2 = () => {
            router_utils.transitionTo(closure_2_14.CHANNEL(data.guild_id, data.channel_id), { navigationReplace: true, openChannel: true });
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
          tmp19Result6 = tmp19(4838);
          obj16 = { streamType: StreamTypes.GUILD, ownerId: data.user_id, guildId: data.guild_id, channelId: data.channel_id };
          tmp19Result6(obj16);
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
              tmp19Result7 = tmp19(4616);
              tmp19Result3Result = tmp19Result7(data.deeplink);
              tmp19Result8 = tmp19(13939);
              obj17 = { payload: tmp19Result3Result.payload, waitForConnection: false, skipMessageFetch: flag };
              tmp19Result8(obj17);
            }
          }
        break;
      }
    break;
    default:
      return flag2;
  }
  const obj = require("RouteManagerUtils");
}
fn(5639).addPostConnectionCallback;
const NotificationTypes = fn(6697).NotificationTypes;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, ComponentActions: closure_12, RelationshipTypes: map1, Routes: closure_14 } = Constants);
const StreamTypes = fn(4678).StreamTypes;
let closure_16 = fn(1963).GuildScheduledEventEntityTypes;
const constants = fn(12544).MultiAccountSwitchLocation;
const logger = new LoggerDefault("receiveNotification");
const size = fn(2);
let result = size.fileFinishedImporting("modules/push_notifications/native/receiveNotification.tsx");

export default function receiveNotification(getData, arg1) {
  if (null == getData.getData) {
    return false;
  } else {
    data(7578).trackAppOpened("notification");
    data = getData.getData();
    const obj3 = data(7578);
    const _HermesInternal = HermesInternal;
    AppStartPerformanceDefault.mark("\u2757", "Receive notification " + data.type);
    if (null != data.receiving_user_id) {
      if (null != AuthenticationStore.getId()) {
        if (data.receiving_user_id !== AuthenticationStore.getId()) {
          tmp7(7579);
          tmp7(5358);
          tmp7(13719);
          let receiving_user_id = data.receiving_user_id;
          receiving_user_id = tmp7(12547).switchAccount(receiving_user_id, false, arg1 ? constants.PUSH_NOTIFICATION_INITIAL : constants.PUSH_NOTIFICATION);
          receiving_user_id.then(() => {
            const Emitter = initializeDefault.Emitter;
            Emitter.batched(() => receiveNotification_(data));
          });
          const tmp7Result6 = tmp7(12547);
        }
      }
    }
    let Emitter = initializeDefault.Emitter;
    return Emitter.batched(() => receiveNotification_(data));
  }
};