// discord_app/modules/push_notifications/native/receiveNotification.tsx
import timestampDefault from "../../debug/Logger.tsx";
import isTracingDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import parseQueryDefault from "../../../utils/native/parseURL.tsx";
import fetchMessagesDefault from "../../messages/MessageManager.tsx";
import registerAssetDefault from "../../../../_runtime/10811_registerAsset.js";
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
  let obj = dispatcherDefault;
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
      const obj2 = callback(8595);
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
        const obj = callback(8595);
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
                    let obj = guild_scheduled_event_id(4162);
                    obj = { key: "VOICE_CONNECTION_ERROR_GENERIC", content: null, icon: null };
                    const intl = channel_id(1236).intl;
                    obj[1] = intl.string(channel_id(1236).t.S69lJR);
                    obj[2] = guild_scheduled_event_id(10811);
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
                let obj6 = callback(6138);
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
                obj3 = channel_id(9680);
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
            obj = channel_id(4456);
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
                lib(4299).navigateToRootTab({ screen: "notifications" });
                const obj8 = lib(4299);
                user_id(15917).setTab(lib(7318).NotificationCenterTabs.ForYou);
                dependencyMap = 2;
                c4 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = callback2(closure_9, () => null != closure_1_9.getUser(user_id));
                return obj3;
              } else {
                if (callback !== constants2.FRIEND) {
                  if (lib.notification_type === constants.REMINDER) {
                    let obj5 = lib(4300);
                    const rootNavigationRef = obj5.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.navigate("friends", { screen: "requests" });
                    }
                  }
                } else {
                  obj3 = callback(4458);
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
            const items = [callback(5925).PUSH_NOTIFICATION];
            obj[1] = items;
            callback(8819)(obj);
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
              lib(4456).transitionToChannel(lib.channel_id);
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
            const tmp60 = callback(9791);
            const call = tmp60.call;
            const channel_id = lib.channel_id;
            if (typeof call === "unknown") {
              tmp60(false, false);
            } else {
              call(channel_id, false, false);
            }
            obj = callback(698);
            const obj5 = { location: null, guild_id: null, ringer_user_id: null };
            obj5[0] = callback(5925).PUSH_NOTIFICATION;
            obj5[1] = lib.guild_id;
            obj5[2] = lib.user_id;
            obj2 = lib(4653);
            const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(lib.channel_id));
            obj.track(constants.RING_CALL_ACCEPTED, obj5);
            obj3 = lib(500);
            if (obj3.isAndroid()) {
              if (lib.is_fullscreen_call_ui) {
                obj4 = callback(698);
                let obj6 = { action_type: "join" };
                obj6 = lib(4653);
                const merged1 = Object.assign(obj6.collectChannelAnalyticsMetadataFromId(lib.channel_id));
                obj4.track(constants.CALLKIT_CLICKED, obj6);
              }
              callback(12379)(lib.channel_id);
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
              navigation = lib(4300).getRootNavigationRef();
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
            const items = [navigation(5925).PUSH_NOTIFICATION];
            obj[1] = items;
            navigation(8819)(obj);
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
              const result = lib(15915).markNotificationCenterLocalItemsAcked(items);
              const obj10 = lib(15915);
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = lib(15915);
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
function receiveNotification_(type) {
  const _require = type;
  let obj = voiceRouteRewriter;
  const result = obj.initializeRouteManagerIfNeeded();
  if ("MESSAGE_CREATE" === type.type) {
    const _HermesInternal2 = HermesInternal;
    logger.log("Notification clicked of type " + type.type + " with guild:" + type.guild_id + " channel:" + type.channel_id + " message:" + type.message_id);
    obj = { guildId: null, channelId: null, messageId: null, isPreload: true };
    ({ guild_id: obj10[0], channel_id: obj10[1], message_id: obj10[2] } = type);
    const messages = fetchMessagesDefault.fetchMessages(obj);
    const obj9 = fetchMessagesDefault;
  } else {
    if ("GENERIC_PUSH_NOTIFICATION_SENT" === type.type) {
      if (null != type.deeplink) {
        if ("" !== type.deeplink) {
          const payload = parseQueryDefault(type.deeplink).payload;
          if (payload.type === tmp(691).LinkingTypes.MESSAGE) {
            let tracking_type;
            if (type != null) {
              tracking_type = type.tracking_type;
            }
            if (tracking_type == null) {
              tracking_type = type.type;
            }
            if (tmp8) {
              tmp(11128).receivedNotification(payload.messageId, payload.channelId, tracking_type);
              const tmpResult = tmp(11128);
            }
            let tmp20Result = tmp20(9952);
            obj = { guildId: null, channelId: null, messageId: null, isPreload: true };
            ({ guildId: obj8[0], channelId: obj8[1], messageId: obj8[2] } = payload);
            const messages1 = tmp20Result.fetchMessages(obj);
            tmp8 = null != tracking_type && null != payload.messageId && null != payload.channelId;
          } else {
            if (payload.type === tmp(691).LinkingTypes.ICYMI) {
              if (null != type.channel_id) {
                if (null != type.message_id) {
                  tmp20Result = tmp20(8553);
                  const forNotification = tmp20Result.fetchForNotification(type.channel_id, type.message_id);
                }
              }
            }
            if (payload.type === tmp(691).LinkingTypes.ICYMI) {
              if (null != type.user_id) {
                if (null != type.notification_center_id) {
                  let status_emoji_id = null;
                  if (null != type.status_emoji_id) {
                    status_emoji_id = null;
                    if ("0" !== type.status_emoji_id) {
                      status_emoji_id = type.status_emoji_id;
                    }
                  }
                  obj1 = { id: null, type: null, score: 1000, data: null };
                  obj1[0] = type.notification_center_id;
                  obj1[1] = tmp(8550).ICYMIItemTypes.CUSTOM_STATUS;
                  const obj2 = { user_id: null, text: null, emoji_id: null, emoji_name: null, emoji_animated: null };
                  ({ user_id: obj3[0], status_text: obj3[1] } = type);
                  obj2[2] = status_emoji_id;
                  obj2[3] = type.status_emoji_name;
                  obj2[4] = type.status_emoji_animated;
                  obj1[3] = obj2;
                  const forStatusNotification = tmp20(8553).fetchForStatusNotification(obj1);
                  const tmp20Result1 = tmp20(8553);
                }
              }
            }
          }
        }
      }
    }
    const _HermesInternal = HermesInternal;
    logger.log("Notification clicked of type " + type.type);
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
    data(7153).trackAppOpened("notification");
    data = getData.getData();
    const obj3 = data(7153);
    const tmp11 = importDefault;
    const _HermesInternal = HermesInternal;
    isTracingDefault.mark("\u2757", "Receive notification " + data.type);
    if (null != data.receiving_user_id) {
      if (null != id.getId()) {
        if (data.receiving_user_id !== obj.getId()) {
          tmp7(7154);
          tmp7(5173);
          tmp7(13287);
          let receiving_user_id = data.receiving_user_id;
          receiving_user_id = tmp7(11900).switchAccount(receiving_user_id, false, arg1 ? tmp5.PUSH_NOTIFICATION_INITIAL : tmp5.PUSH_NOTIFICATION);
          receiving_user_id.then(() => {
            const Emitter = closure_1_1(closure_1_3[40]).Emitter;
            Emitter.batched(() => closure_1_34(closure_0));
          });
          const tmp7Result2 = tmp7(11900);
        }
      }
      obj = id;
    }
    let Emitter = tmp11(589).Emitter;
    return Emitter.batched(() => closure_1_34(data));
  }
};