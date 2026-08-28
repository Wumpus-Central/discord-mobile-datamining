// discord_app/modules/push_notifications/native/receiveNotification.tsx
import timestampDefault from "../../debug/Logger.tsx";
import isTracingDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import dispatcherDefault2 from "../../toast/native/ToastActionCreators.tsx";
import parseQueryDefault from "../../../utils/native/parseURL.tsx";
import fetchMessagesDefault from "../../messages/MessageManager.tsx";
import registerAssetDefault from "../../../../_runtime/10829_registerAsset.js";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_6 from "../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import closure_7 from "../../../stores/AuthenticationStore.tsx";
import closure_8 from "../../../stores/ChannelStore.tsx";
import closure_9 from "../../../stores/UserStore.tsx";
import { NotificationTypes } from "../PushNotificationConstants.tsx";
import ME from "../../../Constants.tsx";
import { StreamTypes } from "../../go_live/Constants.tsx";
import { GuildScheduledEventEntityTypes as closure_16 } from "../../guild_scheduled_events/GuildScheduledEventsConstants.tsx";
import { MultiAccountSwitchLocation as closure_17 } from "../../multi_account/Constants.tsx";
import { voiceRouteRewriter } from "../../routing/native/RouteManagerUtils.tsx";

require = arg1;
function onStageConnectionError() {
  let obj = dispatcherDefault2;
  obj = { key: "STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.ah3RLk);
  obj[2] = registerAssetDefault;
  obj.open(obj);
}
function waitForConnection() {
  return new Promise((arg0) => {
    callback(arg0);
  });
}
function waitForDataOrConnection() {
  const self = this;
  const apply = _waitForDataOrConnection.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _waitForDataOrConnection() {
  const self = this;
  let tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp2;
              c2 = undefined;
              if (callback()) {
                c4 = 3;
              } else {
                c2 = false;
                const promise = new Promise((arg0) => {
                  closure_0 = arg0;
                  const result = closure_0.addConditionalChangeListener(() => {
                    let tmp = !closure_1_2;
                    if (!closure_1_2) {
                      const tmp3 = closure_1_1();
                      let flag = !tmp3;
                      if (tmp3) {
                        callback();
                        flag = false;
                      }
                      tmp = flag;
                    }
                    return tmp;
                  });
                });
                const items = [promise, closure_1_20()];
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = Promise.race(items);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c2 = true;
          }
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function waitForNavigationReady() {
  const self = this;
  const apply = _waitForNavigationReady.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _waitForNavigationReady() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const rootNavigationRef = v0(closure_1_3[15]).getRootNavigationRef();
            let isReadyResult = null != rootNavigationRef;
            if (isReadyResult) {
              isReadyResult = rootNavigationRef.isReady();
            }
            if (!isReadyResult) {
              const promise = new Promise((arg0) => {
                const v3 = arg0;
                const ComponentDispatch = v3(table[16]).ComponentDispatch;
                ComponentDispatch.subscribeOnce(constants.NAVIGATOR_READY, () => {
                  callback();
                });
              });
              c1 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = promise;
              return obj1;
            }
            const obj5 = v0(closure_1_3[15]);
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        v0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp11) {
        v0 = tmp;
        throw tmp11;
      }
    }
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _connectToStage() {
  const self = this;
  const apply = _connectToStage2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _connectToStage2() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      dependencyMap = tmp3;
      yield closure_1_20();
      c5 = 1;
      const obj2 = callback(8610);
      yield obj2.connectOrLurkStage(callback, closure_1, true);
      if (2 === tmp7) {
        c5 = 0;
        callback2();
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_2 = arg1;
        const obj = callback(8610);
        obj.navigateToStage(closure_2, null);
        c5 = 0;
      }
      c5 = 0;
      return arg1;
    })();
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleStageNotification() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_25(closure_0.guild_id, closure_0.channel_id);
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  closure_27 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleGuildEventNotification() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp2;
              let guild_scheduled_event_id = tmp3;
              let channel_id;
              guild_scheduled_event_id = undefined;
              id = undefined;
              const _Number = Number;
              const NumberResult = Number(channel_id.guild_scheduled_event_entity_type);
              if (closure_1_16.STAGE_INSTANCE === NumberResult) {
                const channel_id2 = tmp43.channel_id;
                if (null == channel_id2) {
                  closure_1_19();
                  c4 = 3;
                  c4 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  dependencyMap = 2;
                  c4 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = closure_1_25(tmp43.guild_id, channel_id2);
                  return obj2;
                }
              } else if (tmp46.VOICE === NumberResult) {
                channel_id = tmp43.channel_id;
                if (null == channel_id) {
                  (function onVoiceConnectionError() {
                    let obj = guild_scheduled_event_id(4163);
                    obj = { key: "VOICE_CONNECTION_ERROR_GENERIC", content: null, icon: null };
                    const intl = channel_id(1236).intl;
                    obj[1] = intl.string(channel_id(1236).t.S69lJR);
                    obj[2] = guild_scheduled_event_id(10829);
                    obj.open(obj);
                  })();
                  c4 = 3;
                  c4 = 3;
                  let obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  dependencyMap = 3;
                  c4 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = closure_1_20();
                  return obj4;
                }
              } else if (tmp46.EXTERNAL === NumberResult) {
                guild_scheduled_event_id = tmp43.guild_scheduled_event_id;
                let obj6 = callback(6151);
                obj6.transitionToGuild(tmp43.guild_id);
                dependencyMap = 1;
                c4 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = closure_1_20();
                return obj5;
              } else {
                c4 = 3;
              }
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              id = guildScheduledEvent.getGuildScheduledEvent(guild_scheduled_event_id);
              if (null != id) {
                obj3 = channel_id(9698);
                const obj7 = { eventId: null, event: null };
                obj7[0] = id.id;
                obj7[1] = id;
                const result = obj3.openGuildEventDetails(obj7);
              }
            }
          } else if (2 === tmp6) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = channel_id(4457);
            obj.transitionToChannel(channel_id);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp31) {
          c4 = tmp;
          throw tmp31;
        }
      }
    })();
  });
  closure_28 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleRelationshipAddNotification() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let user_id = tmp5;
              let callback = tmp2;
              callback = undefined;
              user_id = undefined;
              dependencyMap = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_23();
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              const _Number = Number;
              callback = Number(lib.rel_type);
              if (callback === constants2.PENDING_INCOMING) {
                user_id = lib.user_id;
                lib(4300).navigateToRootTab({ screen: "notifications" });
                const obj8 = lib(4300);
                user_id(15935).setTab(lib(7332).NotificationCenterTabs.ForYou);
                dependencyMap = 2;
                c4 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = callback2(closure_9, () => null != closure_1_9.getUser(user_id));
                return obj3;
              } else {
                if (callback !== constants2.FRIEND) {
                  if (lib.notification_type === constants.REMINDER) {
                    let obj5 = lib(4301);
                    const rootNavigationRef = obj5.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.navigate("friends", { screen: "requests" });
                    }
                  }
                } else {
                  obj3 = callback(4459);
                  const obj4 = { recipientIds: null };
                  obj4[0] = lib.user_id;
                  obj3.openPrivateChannel(obj4);
                }
                c4 = 3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            obj = { userId: null, sourceAnalyticsLocations: null };
            obj[0] = user_id;
            const items = [callback(5938).PUSH_NOTIFICATION];
            obj[1] = items;
            callback(8836)(obj);
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = undefined;
            return obj6;
          }
        } catch (tmp45) {
          c4 = tmp;
          throw tmp45;
        }
      }
    })();
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleCallRingNotification() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp2;
              closure_1 = tmp5;
              table = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_21(closure_1_8, () => null != closure_1_8.getChannel(channel_id.channel_id));
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = lib(table[18]);
            obj.transitionToChannel(lib.channel_id);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c4 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  closure_30 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleCallConnectNotification() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = 0;
              const callback = tmp4;
              dependencyMap = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_21(closure_1_8, () => null != closure_1_8.getChannel(channel_id.channel_id));
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              lib(4457).transitionToChannel(lib.channel_id);
              dependencyMap = 2;
              c4 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = callback2();
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            const tmp60 = callback(9809);
            const call = tmp60.call;
            const channel_id = lib.channel_id;
            if (typeof call === "unknown") {
              tmp60(false, false);
            } else {
              call(channel_id, false, false);
            }
            obj = callback(698);
            const obj5 = { location: null, guild_id: null, ringer_user_id: null };
            obj5[0] = callback(5938).PUSH_NOTIFICATION;
            obj5[1] = lib.guild_id;
            obj5[2] = lib.user_id;
            obj2 = lib(4666);
            const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(lib.channel_id));
            obj.track(constants.RING_CALL_ACCEPTED, obj5);
            obj3 = lib(500);
            if (obj3.isAndroid()) {
              if (lib.is_fullscreen_call_ui) {
                obj4 = callback(698);
                let obj6 = { action_type: "join" };
                obj6 = lib(4666);
                const merged1 = Object.assign(obj6.collectChannelAnalyticsMetadataFromId(lib.channel_id));
                obj4.track(constants.CALLKIT_CLICKED, obj6);
              }
              callback(12398)(lib.channel_id);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp50) {
          c4 = tmp;
          throw tmp50;
        }
      }
    })();
  });
  closure_31 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleFriendSuggestionCreateNotification() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let user_id = tmp5;
              let navigation = tmp2;
              navigation = undefined;
              user_id = undefined;
              dependencyMap = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_23();
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              navigation = lib(4301).getRootNavigationRef();
              if (null != navigation) {
                const obj3 = { screen: "add-friends", params: null };
                obj3[1] = { sourcePage: "Notifications" };
                navigation.navigate("friends", obj3);
              }
              user_id = lib.user_id;
              dependencyMap = 2;
              c4 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = callback(closure_9, () => null != closure_1_9.getUser(user_id));
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            obj = { userId: null, sourceAnalyticsLocations: null };
            obj[0] = user_id;
            const items = [navigation(5938).PUSH_NOTIFICATION];
            obj[1] = items;
            navigation(8836)(obj);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp24) {
          c4 = tmp;
          throw tmp24;
        }
      }
    })();
  });
  closure_32 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeAckNotificationCenter() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              let prop = tmp2;
              prop = undefined;
              closure_2 = undefined;
              prop = null;
              if ("notification_center_id" in lib) {
                prop = tmp38.notification_center_id;
              }
              let since = null;
              if ("since" in lib) {
                since = tmp38.since;
              }
              if ("RELATIONSHIP_ADD" === lib.type) {
                const _Number = Number;
                if (Number(tmp38.rel_type) === closure_1_13.PENDING_INCOMING) {
                  if (null != since) {
                    dependencyMap = 1;
                    c4 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_20();
                    return obj1;
                  }
                }
              }
              if (null != prop) {
                dependencyMap = 2;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_20();
                return obj2;
              } else {
                c4 = 3;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              const _Date = Date;
              const _String = String;
              const date = new Date(String(lib.since));
              closure_2 = prop(11).fromTimestamp(date.getTime());
              const obj8 = prop(11);
              const _HermesInternal = HermesInternal;
              const items = ["incoming_friend_requests_" + lib.user_id + "_" + closure_2];
              const result = lib(15933).markNotificationCenterLocalItemsAcked(items);
              const obj10 = lib(15933);
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = lib(15933);
            const result1 = obj.markNotificationCenterRemoteItemAcked(prop);
          }
          c4 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } catch (tmp18) {
          c4 = tmp;
          throw tmp18;
        }
      }
    })();
  });
  closure_33 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function receiveNotification_(notif_type) {
  const _require = notif_type;
  let obj = voiceRouteRewriter;
  const result = obj.initializeRouteManagerIfNeeded();
  if ("MESSAGE_CREATE" === notif_type.type) {
    const _HermesInternal2 = HermesInternal;
    logger.log("Notification clicked of type " + notif_type.type + " with guild:" + notif_type.guild_id + " channel:" + notif_type.channel_id + " message:" + notif_type.message_id);
    obj = { guildId: null, channelId: null, messageId: null, isPreload: true };
    ({ guild_id: obj10[0], channel_id: obj10[1], message_id: obj10[2] } = notif_type);
    const messages = fetchMessagesDefault.fetchMessages(obj);
    let flag = true;
    let flag2 = true;
    const obj9 = fetchMessagesDefault;
  } else {
    flag = false;
    flag2 = false;
    if ("GENERIC_PUSH_NOTIFICATION_SENT" === notif_type.type) {
      flag = false;
      flag2 = false;
      if (null != notif_type.deeplink) {
        flag = false;
        flag2 = false;
        if ("" !== notif_type.deeplink) {
          const payload = parseQueryDefault(notif_type.deeplink).payload;
          if (payload.type === tmp(691).LinkingTypes.MESSAGE) {
            let tracking_type;
            if (notif_type != null) {
              tracking_type = notif_type.tracking_type;
            }
            if (tracking_type == null) {
              tracking_type = notif_type.type;
            }
            if (tmp8) {
              let tmpResult = tmp(11146);
              tmpResult.receivedNotification(payload.messageId, payload.channelId, tracking_type);
            }
            let tmp54Result = tmp54(9970);
            obj = { guildId: null, channelId: null, messageId: null, isPreload: true };
            ({ guildId: obj8[0], channelId: obj8[1], messageId: obj8[2] } = payload);
            const messages1 = tmp54Result.fetchMessages(obj);
            flag = true;
            flag2 = true;
            tmp8 = null != tracking_type && null != payload.messageId && null != payload.channelId;
          } else {
            if (payload.type === tmp(691).LinkingTypes.ICYMI) {
              if (null != notif_type.channel_id) {
                if (null != notif_type.message_id) {
                  tmp54Result = tmp54(8568);
                  const forNotification = tmp54Result.fetchForNotification(notif_type.channel_id, notif_type.message_id);
                  flag = false;
                  flag2 = false;
                }
              }
            }
            flag = false;
            flag2 = false;
            if (payload.type === tmp(691).LinkingTypes.ICYMI) {
              flag = false;
              flag2 = false;
              if (null != notif_type.user_id) {
                flag = false;
                flag2 = false;
                if (null != notif_type.notification_center_id) {
                  let status_emoji_id = null;
                  if (null != notif_type.status_emoji_id) {
                    status_emoji_id = null;
                    if ("0" !== notif_type.status_emoji_id) {
                      status_emoji_id = notif_type.status_emoji_id;
                    }
                  }
                  obj1 = { id: null, type: null, score: 1000, data: null };
                  obj1[0] = notif_type.notification_center_id;
                  obj1[1] = tmp(8565).ICYMIItemTypes.CUSTOM_STATUS;
                  const obj2 = { user_id: null, text: null, emoji_id: null, emoji_name: null, emoji_animated: null };
                  ({ user_id: obj3[0], status_text: obj3[1] } = notif_type);
                  obj2[2] = status_emoji_id;
                  obj2[3] = notif_type.status_emoji_name;
                  obj2[4] = notif_type.status_emoji_animated;
                  obj1[3] = obj2;
                  const forStatusNotification = tmp54(8568).fetchForStatusNotification(obj1);
                  flag = false;
                  flag2 = false;
                  const tmp54Result1 = tmp54(8568);
                }
              }
            }
          }
        }
      }
    }
    const _HermesInternal = HermesInternal;
    logger.log("Notification clicked of type " + notif_type.type);
  }
  dispatcherDefault.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
  const obj11 = dispatcherDefault;
  const obj3 = { notif_type: "tracking_type" in notif_type ? notif_type.tracking_type : notif_type.type, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
  let user_id = null;
  if ("user_id" in notif_type) {
    user_id = notif_type.user_id;
  }
  obj3[1] = user_id;
  let message_id = null;
  if ("message_id" in notif_type) {
    message_id = notif_type.message_id;
  }
  obj3[2] = message_id;
  let message_type_ = null;
  if ("message_type_" in notif_type) {
    message_type_ = notif_type.message_type_;
  }
  obj3[3] = message_type_;
  obj3[4] = "message" in notif_type && null != notif_type.message;
  let guild_id = null;
  if ("guild_id" in notif_type) {
    guild_id = notif_type.guild_id;
  }
  obj3[5] = guild_id;
  let channel_id = null;
  if ("channel_id" in notif_type) {
    channel_id = notif_type.channel_id;
  }
  obj3[6] = channel_id;
  let channel_type = null;
  if ("channel_type" in notif_type) {
    channel_type = notif_type.channel_type;
  }
  obj3[7] = channel_type;
  let NumberResult = null;
  if ("rel_type" in notif_type) {
    const _Number = Number;
    NumberResult = Number(notif_type.rel_type);
  }
  obj3[8] = NumberResult;
  let notification_id = null;
  if ("notification_id" in notif_type) {
    notification_id = notif_type.notification_id;
  }
  obj3[9] = notification_id;
  obj3[10] = "image_url" in notif_type && null != notif_type.image_url;
  let join_id = null;
  if ("join_id" in notif_type) {
    join_id = notif_type.join_id;
  }
  obj3[11] = join_id;
  let notif_instance_id = null;
  if ("notif_instance_id" in notif_type) {
    notif_instance_id = notif_type.notif_instance_id;
  }
  obj3[12] = notif_instance_id;
  let notif_type_id = null;
  if ("notif_type_id" in notif_type) {
    notif_type_id = notif_type.notif_type_id;
  }
  obj3[13] = notif_type_id;
  let mention_type = null;
  if ("mention_type" in notif_type) {
    mention_type = notif_type.mention_type;
  }
  obj3[14] = mention_type;
  expandEventPropertiesDefault.track(constants.NOTIFICATION_CLICKED, obj3);
  (function maybeAckNotificationCenter(notif_type) {
    const self = this;
    const apply = closure_33.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(notif_type);
  switch (notif_type.type) {
    case "t":
    break;
    case "to":
    break;
    case "Date":
    break;
    case "TypeError":
    break;
    case "Error":
    break;
    case "HTTP":
    break;
    case "T":
    break;
    case "HermesInternal":
    break;
    case "Icon":
    break;
    case "IconComponent":
    break;
    case "c":
    break;
    case "p":
    break;
    case "LIGHT":
    break;
    case "LengthDelimited":
    break;
    case "limit":
    break;
    case "i":
    break;
    case "it":
    break;
    case "d":
    break;
    case "Map":
    break;
    case "Math":
    break;
    case "h":
    break;
    case "Number":
    break;
    case "Object":
    break;
    case "ct":
    break;
    case "PX_16":
    break;
    case "flex":
    break;
    case "flexDirection":
    break;
    case "PX_8":
    break;
    case "Path":
    break;
    case "Promise":
    break;
    case "s":
    break;
    case "Reflect":
    break;
    case "Set":
    break;
    case "format":
    break;
    case "formatToPlainString":
    break;
    case "String":
    break;
    case "Symbol":
    break;
    case "Text":
    break;
    case "x":
    break;
    case "View":
    break;
    case "w":
    break;
    case "WireType":
    break;
    case "__closure":
    break;
    case "__d":
    break;
    case "__esModule":
    break;
    case "__initData":
    break;
    case "filter":
    break;
    case "__packager_asset":
    break;
    case "k":
    break;
    case "set":
    break;
    case "__workletHash":
    break;
    case "_desired":
    break;
    case "_distance":
    break;
    case "st":
    break;
    case "accessibilityLabel":
    break;
    case "accessibilityRole":
    break;
    case "accessible":
    break;
    case "padding":
    break;
    case "paddingHorizontal":
    break;
    case "add":
    break;
    case "alignItems":
    break;
    case "ao":
    break;
    case "applicationId":
    break;
    case "ti":
    break;
    case "apply":
    break;
    case "backgroundColor":
    break;
    case "round":
    break;
    case "bm":
    break;
    case "body":
    break;
    case "borderRadius":
    break;
    case "bottom":
    break;
    case "container":
    break;
    case "call":
    break;
    case "channel":
    break;
    case "channelId":
    break;
    case "channel_id":
    break;
    case "id":
    break;
    case "children":
    break;
    case "cix":
    break;
    case "ix":
    break;
    case "unicodeVersion":
    break;
    case "code":
    break;
    case "color":
    break;
    case "colors":
    break;
    case "concat":
    break;
    case "constructor":
    break;
    case "content":
    break;
    case "context":
    break;
    case "text":
    break;
    case "count":
    break;
    case "create":
    break;
    case "createStyles":
    break;
    case "ty":
    break;
    case "current":
    break;
    case "cursor":
    break;
    case "data":
    break;
    case "ddd":
    break;
    case "default":
    break;
    case "defineProperty":
    break;
    case "op":
    break;
    case "delete":
    break;
    case "description":
    break;
    case "ip":
    break;
    case "disabled":
    break;
    case "sa":
    break;
    case "dispatch":
    break;
    case "displayName":
    break;
    case "diversity":
    break;
    case "v":
    break;
    case "done":
    break;
    case "duration":
    break;
    case "enabled":
    break;
    case "end":
    break;
    case "enumerable":
    break;
    case "error":
    break;
    case "exports":
    break;
    case "fileFinishedImporting":
    break;
    case "fill":
    break;
    case "find":
    break;
    case "ind":
    break;
    case "flags":
    break;
    case "forEach":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          let tmp19Result = tmp19(4426);
          let tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          let obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "gap":
    break;
    case "get":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "getChannel":
    break;
    case "getCurrentUser":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "getGuild":
    break;
    case "guild":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "guildId":
    break;
    case "guild_id":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "has":
    break;
    case "hasDiversityParent":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "hash":
    break;
    case "hd":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "header":
    break;
    case "height":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "httpServerLocation":
    break;
    case "icon":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "includes":
    break;
    case "index":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "indexOf":
    break;
    case "intl":
      if (null != notif_type.message) {
        const obj5 = { type: "MESSAGE_CREATE", channelId: null, message: null, optimistic: true, isPushNotification: true };
        obj5[1] = notif_type.message.channel_id;
        obj5[2] = notif_type.message;
        tmp19(709).dispatch(obj5);
        const tmp19Result1 = tmp19(709);
      }
      tmp19(4689).popAll();
      tmpResult = tmp(1222);
      const obj6 = { navigationReplace: true, openChannel: true, skipMessageFetch: null };
      obj6[2] = flag;
      tmpResult.transitionTo(closure_14.CHANNEL(notif_type.guild_id, notif_type.channel_id, notif_type.message_id), obj6);
      const tmp19Result2 = tmp19(4689);
    break;
    case "items":
    break;
    case "join":
      const promise = new Promise((arg0) => {
        callback(arg0);
      });
      promise.then(() => {
        notif_type(closure_1_3[50]).transitionTo(closure_1_14.CHANNEL(notif_type.guild_id, notif_type.channel_id), { navigationReplace: true, openChannel: true });
      });
    break;
    case "jsx":
    break;
    case "jsxs":
      !(function handleRelationshipAddNotification(notif_type) {
        const self = this;
        const apply = closure_29.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(notif_type);
    break;
    case "justifyContent":
    break;
    case "key":
      !(function handleCallRingNotification(notif_type) {
        const self = this;
        const apply = closure_30.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(notif_type);
    break;
    case "keys":
    break;
    case "kind":
      !(function handleCallConnectNotification(notif_type) {
        const self = this;
        const apply = closure_31.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(notif_type);
    break;
    case "ks":
    break;
    case "space":
      !(function handleFriendSuggestionCreateNotification(notif_type) {
        const self = this;
        const apply = closure_32.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(notif_type);
    break;
    case "label":
    break;
    case "lc":
      const obj7 = { streamType: null, ownerId: null, guildId: null, channelId: null };
      obj7[0] = StreamTypes.GUILD;
      ({ user_id: obj14[1], guild_id: obj14[2], channel_id: obj14[3] } = notif_type);
      tmp19(4688)(obj7);
    break;
    case "left":
    break;
    case "length":
      !(function handleGuildEventNotification(notif_type) {
        const self = this;
        const apply = closure_28.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(notif_type);
    break;
    case "lj":
    break;
    case "loadJsonAsset":
      !(function handleStageNotification(notif_type) {
        const self = this;
        const apply = closure_27.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(notif_type);
    break;
    case "location":
    break;
    case "map":
      if (null != notif_type.deeplink) {
        if ("" !== notif_type.deeplink) {
          tmp19Result = tmp19(4426);
          tmp19ResultResult = tmp19Result(notif_type.deeplink);
          tmp19Result = tmp19(13522);
          obj4 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj4[0] = tmp19ResultResult.payload;
          obj4[2] = flag;
          tmp19Result(obj4);
        }
      }
      return flag2;
    case "marginTop":
    break;
    case "marginBottom":
    break;
    case "max":
    break;
    case "memo":
    break;
    case "message":
    break;
    case "messageId":
    break;
    case "method":
    break;
    case "methodobject":
    break;
    case "withTiming":
    break;
    case "min":
    break;
    case "ml":
    break;
    case "mn":
    break;
    case "mode":
    break;
    case "name":
    break;
    case "names":
    break;
    case "next":
    break;
    case "nm":
    break;
    case "no":
    break;
    case "now":
    break;
    case "np":
    break;
    case "onPress":
    break;
    case "opacity":
    break;
    case "options":
    break;
    case "parent":
    break;
    case "paths":
    break;
    case "pos":
    break;
    case "position":
    break;
    case "props":
    break;
    case "prototype":
    break;
    case "type":
    break;
    case "push":
    break;
    case "radii":
    break;
    case "raw":
    break;
    case "ref":
    break;
    case "registerAsset":
    break;
    case "rejectWithError":
    break;
    case "replace":
    break;
    case "resizeMode":
    break;
    case "size":
    break;
    case "resolve":
    break;
    case "result":
    break;
    case "right":
    break;
    case "runOnJS":
    break;
    case "scales":
    break;
    case "shapes":
    break;
    case "sk":
    break;
    case "skuId":
    break;
    case "slice":
    break;
    case "source":
    break;
    case "split":
    break;
    case "spriteIndex":
    break;
    case "sr":
    break;
    case "start":
    break;
    case "state":
    break;
    case "status":
    break;
    case "substring_i":
    break;
    case "string":
    break;
    case "style":
    break;
    case "surrogates":
    break;
    case "tag":
    break;
    case "test":
    break;
    case "then":
    break;
    case "title":
    break;
    case "toCharArray$esjava$1":
    break;
    case "toString":
    break;
    case "top":
    break;
    case "track":
    break;
    case "transform":
    break;
    case "uri":
    break;
    case "url":
    break;
    case "useCallback":
    break;
    case "useEffect":
    break;
    case "useMemo":
    break;
    case "useRef":
    break;
    case "useState":
    break;
    case "useStateFromStores":
    break;
    case "user":
    break;
    case "userId":
    break;
    case "value":
    break;
    case "values":
    break;
    case "variant":
    break;
    case "warn":
    break;
    case "width":
    break;
    case "window":
    break;
    case "withSpring":
    break;
    case "":
    break;
    case "isArrayBuffer":
    break;
    case "A":
    break;
    case "ay":
    break;
    case "guildIconText":
    break;
    case "IconTextBadge":
    break;
    case "TextBadge":
    break;
    case "useTraitHiddenOnAndroid":
    break;
    case "dragOffsetFromRight":
    break;
    case "$ZodBoolean":
    break;
    case "ZodBoolean":
    break;
    case "B":
    break;
    case "le":
    break;
    case "an":
    break;
    case "n":
    break;
    case "useActionBarPrimaryButton":
    break;
    case "ActionBarPrimaryButton":
    break;
    case "ary":
    break;
    case "u":
    break;
    case "tt":
    break;
    case "on":
    break;
    case "$ZodDate":
    break;
    case "ZodDate":
    break;
    case "D":
    break;
    case "DateParser":
    break;
    case "at":
    break;
    case "te":
    break;
    case "serializeEnd":
    break;
    case "discovery_splash":
    break;
    case "splash":
    break;
    case "hash_mask":
    break;
    case "maskContentUnits":
    break;
    case "captureBillingException":
    break;
    case "stateDataTranslator":
    break;
    case "LanternSpotIllustration":
    break;
    case "MarkupParserNodeTypeError":
    break;
    case "E":
    break;
    case "Err":
    break;
    case "ro":
    break;
    case "or":
    break;
    case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
    break;
    case "BOT_HTTP_INTERACTIONS":
    break;
    case "H":
    break;
    case "HT":
    break;
    case "TP":
    break;
    case "P":
    break;
    case "INTERACTIONS":
    break;
    case "NSFW_SERVER_INVITE":
    break;
    case "NSFW_SERVER_INVITE_EMBED":
    break;
    case "SERVER_INVITE":
    break;
    case "INVITE_EMBED":
    break;
    case "INVITE_EMBED_ACTIONED":
    break;
    case "MarketingPageBanner":
    break;
    case "rm":
    break;
    case "m":
    break;
    case "me":
    break;
    case "mes":
    break;
    case "I":
    break;
    case "InternalCard":
    break;
    case "ter":
    break;
    case "na":
    break;
    case "al":
    break;
    case "CardA11yWrapper":
    break;
    case "perGuildMaxCount":
    break;
    case "getChannelIcon":
    break;
    case "getChannelIconComponent":
    break;
    case "getChannelIconComponentWithGuild":
    break;
    case "co":
    break;
    case "C":
    break;
    case "Component":
    break;
    case "om":
    break;
    case "mp":
    break;
    case "po":
    break;
    case "pon":
    break;
    case "one":
    break;
    case "ne":
    break;
    case "en":
    break;
    case "LITTLE_ENDIAN":
    break;
    case "ANDROID_NOTIFICATION_LIGHTS":
    break;
    case "L":
    break;
    case "LI":
    break;
    case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
    break;
    case "earlyCacheInfo":
    break;
    case "footerSuggestionsContainer":
    break;
    case "$ZodCheckMaxLength":
    break;
    case "kMaxLength":
    break;
    case "eng":
    break;
    case "ng":
    break;
    case "el":
    break;
    case "li":
    break;
    case "lim":
    break;
    case "limited":
    break;
    case "limitedBadgeRow":
    break;
    case "mi":
    break;
    case "mit":
    break;
    case "with_bundled_skus":
    break;
    case "purchaseUpdatedListener":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
    break;
    case "$ZodCheckGreaterThan":
    break;
    case "renderExecutedCommands":
    break;
    case "totalTokens":
    break;
    case "ToIntlMathematicalValue":
    break;
    case "th":
    break;
    case "ValueSetter":
    break;
    case "$ZodCheckNumberFormat":
    break;
    case "N":
    break;
    case "NumberFormat":
    break;
    case "um":
    break;
    case "b":
    break;
    case "be":
    break;
    case "benefitType":
    break;
    case "$ZodObject":
    break;
    case "$ZodObjectJIT":
    break;
    case "ZodObject":
    break;
    case "O":
    break;
    case "j":
    break;
    case "je":
    break;
    case "IT":
    break;
    case "MEDIA_PICKER_SEND_BUTTON_SPRING":
    break;
    case "marginHorizontal":
    break;
    case "Direction":
    break;
    case "rect":
    break;
    case "SETTINGS_DESKTOP_APP":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "XFU":
    break;
    case "computeEntries":
    break;
    case "subscription_trial":
    break;
    case "subscription_trial_id":
    break;
    case "trial_id":
    break;
    case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
    break;
    case "RNSVGClipPath":
    break;
    case "ClipPath":
    break;
    case "$ZodPromise":
    break;
    case "ZodPromise":
    break;
    case "PromiseDeduper":
    break;
    case "is":
    break;
    case "se":
    break;
    case "dup":
    break;
    case "perUserFpsWindow":
    break;
    case "woman_and_man_holding_hands_tone2":
    break;
    case "woman_and_man_holding_hands_tone2_tone1":
    break;
    case "_parsedMessages":
    break;
    case "parsed":
    break;
    case "parsedMessage":
    break;
    case "view_watch_time":
    break;
    case "timeToInteractiveMs":
    break;
    case "QUEST_DECISION_RECEIVED":
    break;
    case "PREMIUM_PLANS":
    break;
    case "ANSWER_HAS":
    break;
    case "HAS_APPLICATION":
    break;
    case "APPLICATION_COMMAND_INDEX_CHANNEL":
    break;
    case "CHANNEL_ACTION_BANNER_HEIGHT":
    break;
    case "BANNER_HEIGHT":
    break;
    case "fgClip":
    break;
    case "ClipViewAnimated":
    break;
    case "AnimatedFlashList":
    break;
    case "FlashList":
    break;
    case "FlashListRef":
    break;
    case "las":
    break;
    case "R":
    break;
    case "ReflectionBinaryReader":
    break;
    case "ef":
    break;
    case "f":
    break;
    case "BinaryReader":
    break;
    case "$ZodSet":
    break;
    case "ZodSet":
    break;
    case "S":
    break;
    case "et":
    break;
    case "postformat":
    break;
    case "form":
    break;
    case "orm":
    break;
    case "ma":
    break;
    case "mat":
    break;
    case "lai":
    break;
    case "StringBuilder":
    break;
    case "tr":
    break;
    case "tri":
    break;
    case "ring":
    break;
    case "in":
    break;
    case "ing":
    break;
    case "g":
    break;
    case "RTC_REGION_RANKING":
    break;
    case "$ZodSymbol":
    break;
    case "ZodSymbol":
    break;
    case "SymbolLock":
    break;
    case "bo":
    break;
    case "bol":
    break;
    case "QUEST_BAR_RENDER_DELAY":
    break;
    case "LAYER_POP_START":
    break;
    case "RTC_CONNECTION_FLAGS":
    break;
    case "cacheDisabled":
    break;
    case "ideograph_advantage":
    break;
    case "getAppHardwareAccelerationEnabled":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isReduceMotionEnabled":
    break;
    case "AccessibilityFocusView":
    break;
    case "V":
    break;
    case "W":
    break;
    case "ir":
    break;
    case "re":
    break;
    case "reType":
    break;
    case "pe":
    break;
    case "maxDynamicContentSize":
    break;
    case "ACTION_SHEET_START_HEIGHT_RATIO":
    break;
    case "STAR":
    break;
    case "START":
    break;
    case "IO":
    break;
    case "__":
    break;
    case "__c":
    break;
    case "cl":
    break;
    case "clo":
    break;
    case "lo":
    break;
    case "los":
    break;
    case "os":
    break;
    case "su":
    break;
    case "sur":
    break;
    case "ur":
    break;
    case "isExpanded":
    break;
    case "__data__":
    break;
    case "_d":
    break;
    case "_data":
    break;
    case "__REMOTEDEV__":
    break;
    case "__DISCORD_WINDOW_ID":
    break;
    case "__iteratees__":
    break;
    case "_iter":
    break;
    case "_iterate":
    break;
    case "iteratee":
    break;
    case "tee":
    break;
    case "__SENTRY_RELEASE__":
    break;
    case "SENTRY_RELEASE":
    break;
    case "__INTERNAL_SLOT_MAP__":
    break;
    case "__BUNDLE_START_TIME__":
    break;
    case "__e":
    break;
    case "Mo":
    break;
    case "ModuleNotFoundError":
    break;
    case "du":
    break;
    case "__i":
    break;
    case "__init":
    break;
    case "_i":
    break;
    case "_init":
    break;
    case "init":
    break;
    case "ni":
    break;
    case "nit":
    break;
    case "ta":
    break;
    case "__filtered__":
    break;
    case "lte":
    break;
    case "__SENTRY_DEBUG__":
    break;
    case "__FORMATJS_LISTFORMAT_DATA__":
    break;
    case "TJS":
    break;
    case "pa":
    break;
    case "pack":
    break;
    case "package":
    break;
    case "ack":
    break;
    case "ka":
    break;
    case "age":
    break;
    case "ge":
    break;
    case "ger":
    break;
    case "_a":
    break;
    case "as":
    break;
    case "ass":
    break;
    case "asset":
    break;
    case "assetDark":
    break;
    case "ss":
    break;
    case "_w":
    break;
    case "wo":
    break;
    case "work":
    break;
    case "worklet":
    break;
    case "kl":
    break;
    case "let":
    break;
    case "Hash":
    break;
    case "sh":
    break;
    case "flag_de":
    break;
    case "de":
    break;
    case "desired":
    break;
    case "es":
    break;
    case "si":
    break;
    case "sir":
    break;
    case "red":
    break;
    case "redBoxV2Android":
    break;
    case "createPublicInstance":
    break;
    case "dist":
    break;
    case "distance":
    break;
    case "distanceAttenuationEnabled":
    break;
    case "sta":
    break;
    case "tan":
    break;
    case "ce":
    break;
    case "SETTINGS_SENSITIVE_MEDIA_FILTERS":
    break;
    case "SENSITIVE_MEDIA_FILTERS":
    break;
    case "access":
    break;
    case "accessibilityLabelCalendarFormat":
    break;
    case "cc":
    break;
    case "bi":
    break;
    case "bil":
    break;
    case "lit":
    break;
    case "Label":
    break;
    case "ab":
    break;
    case "abe":
    break;
    case "bel":
    break;
    case "NOTIF_CENTER_ITEMS":
    break;
    case "NOTIF_CENTER_ITEMS_ACK":
    break;
    case "ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON":
    break;
    case "NER":
    break;
    case "FEED":
    break;
    case "BUTTON_CORNER_RADIUS":
    break;
    case "USER_CONTACTS_SYNC":
    break;
    case "PROFILE_THEMES_SETTINGS_VIEWED_V2":
    break;
    case "Role":
    break;
    case "RoleFlags":
    break;
    case "scrollToQuestId":
    break;
    case "accessibleDismiss":
    break;
    case "accessibleDismissStyle":
    break;
    case "ble":
    break;
    case "leg_tone3":
    break;
    case "FAB_BUTTON_SIZE":
    break;
    case "minWidth":
    break;
    case "pad":
    break;
    case "ad":
    break;
    case "adding":
    break;
    case "dd":
    break;
    case "din":
    break;
    case "z":
    break;
    case "tal":
    break;
    case "collapseText":
    break;
    case "paddingVertical":
    break;
    case "PLUM_4":
    break;
    case "ali":
    break;
    case "align":
    break;
    case "alignItemsAtEnd":
    break;
    case "alignItemsAtEndPaddingEnabled":
    break;
    case "ig":
    break;
    case "em":
    break;
    case "ms":
    break;
    case "useThenable":
    break;
    case "enableAccessibilityFocusLock":
    break;
  }
}
require("processCallbacks").addPostConnectionCallback;
({ AnalyticEvents: unpackModuleId, ComponentActions: closure_12, RelationshipTypes: map1, Routes: closure_14 } = ME);
let closure_18 = new timestampDefault("receiveNotification");
let tmp3 = new timestampDefault("receiveNotification");
let result = require("set").fileFinishedImporting("modules/push_notifications/native/receiveNotification.tsx");

export default function receiveNotification(getData) {
  if (null == getData.getData) {
    return false;
  } else {
    data(7167).trackAppOpened("notification");
    data = getData.getData();
    const obj3 = data(7167);
    const tmp11 = importDefault;
    const _HermesInternal = HermesInternal;
    isTracingDefault.mark("\u2757", "Receive notification " + data.type);
    if (null != data.receiving_user_id) {
      if (null != id.getId()) {
        if (data.receiving_user_id !== obj.getId()) {
          tmp7(7168);
          tmp7(5186);
          tmp7(13306);
          let receiving_user_id = data.receiving_user_id;
          receiving_user_id = tmp7(11919).switchAccount(receiving_user_id, false, arg1 ? tmp5.PUSH_NOTIFICATION_INITIAL : tmp5.PUSH_NOTIFICATION);
          receiving_user_id.then(() => {
            const Emitter = closure_1_1(closure_1_3[40]).Emitter;
            Emitter.batched(() => closure_1_34(closure_0));
          });
          const tmp7Result2 = tmp7(11919);
        }
      }
      obj = id;
    }
    let Emitter = tmp11(589).Emitter;
    return Emitter.batched(() => closure_1_34(data));
  }
};