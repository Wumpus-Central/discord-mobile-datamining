// === Module 17717: onStageConnectionError ===

// Module 17717 (onStageConnectionError)
import timestampDefault from "timestamp" /* 3 */;
import isTracingDefault from "isTracing" /* 10 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import dispatcherDefault2 from "dispatcher" /* 4194 */;
import parseQueryDefault from "parseQuery" /* 4458 */;
import fetchMessagesDefault from "fetchMessages" /* 10054 */;
import registerAssetDefault from "registerAsset" /* 11111 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "scheduledEventSort" /* 7280 */;
import closure_7 from "fetchFingerprint" /* 1215 */;
import closure_8 from "ensureGuildLoaded" /* 1386 */;
import closure_9 from "mergeGuildAvatar" /* 1921 */;
import { NotificationTypes } from "str2" /* 6063 */;
import ME from "ME" /* 673 */;
import { StreamTypes } from "StreamIssueReportReasons" /* 4545 */;
import { GuildScheduledEventEntityTypes as closure_16 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1392 */;
import { MultiAccountSwitchLocation as closure_17 } from "MAX_ACCOUNTS" /* 12207 */;

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
      const obj2 = callback(8679);
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
        const obj = callback(8679);
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
                    let obj = guild_scheduled_event_id(4194);
                    obj = { key: "VOICE_CONNECTION_ERROR_GENERIC", content: null, icon: null };
                    const intl = channel_id(1233).intl;
                    obj[1] = intl.string(channel_id(1233).t.S69lJR);
                    obj[2] = guild_scheduled_event_id(11111);
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
                let obj6 = callback(6195);
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
                obj3 = channel_id(9781);
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
            obj = channel_id(4489);
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
                lib(4332).navigateToRootTab({ screen: "notifications" });
                const obj8 = lib(4332);
                user_id(16235).setTab(lib(7394).NotificationCenterTabs.ForYou);
                dependencyMap = 2;
                c4 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = callback2(closure_9, () => null != closure_1_9.getUser(user_id));
                return obj3;
              } else {
                if (callback !== constants2.FRIEND) {
                  if (lib.notification_type === constants.REMINDER) {
                    let obj5 = lib(4333);
                    const rootNavigationRef = obj5.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.navigate("friends", { screen: "requests" });
                    }
                  }
                } else {
                  obj3 = callback(4491);
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
            const items = [callback(5981).PUSH_NOTIFICATION];
            obj[1] = items;
            callback(8911)(obj);
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
              lib(4489).transitionToChannel(lib.channel_id);
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
            const tmp60 = callback(9893);
            const call = tmp60.call;
            const channel_id = lib.channel_id;
            if (typeof call === "unknown") {
              tmp60(false, false);
            } else {
              call(channel_id, false, false);
            }
            obj = callback(695);
            const obj5 = { location: null, guild_id: null, ringer_user_id: null };
            obj5[0] = callback(5981).PUSH_NOTIFICATION;
            obj5[1] = lib.guild_id;
            obj5[2] = lib.user_id;
            obj2 = lib(4700);
            const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(lib.channel_id));
            obj.track(constants.RING_CALL_ACCEPTED, obj5);
            obj3 = lib(1234);
            if (obj3.isAndroid()) {
              if (lib.is_fullscreen_call_ui) {
                obj4 = callback(695);
                let obj6 = { action_type: "join" };
                obj6 = lib(4700);
                const merged1 = Object.assign(obj6.collectChannelAnalyticsMetadataFromId(lib.channel_id));
                obj4.track(constants.CALLKIT_CLICKED, obj6);
              }
              callback(12689)(lib.channel_id);
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
              navigation = lib(4333).getRootNavigationRef();
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
            const items = [navigation(5981).PUSH_NOTIFICATION];
            obj[1] = items;
            navigation(8911)(obj);
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
              const result = lib(16233).markNotificationCenterLocalItemsAcked(items);
              const obj10 = lib(16233);
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = lib(16233);
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
  let obj = _require(12544);
  const result = obj.initializeRouteManagerIfNeeded();
  if ("MESSAGE_CREATE" === type.type) {
    const _HermesInternal2 = HermesInternal;
    logger.log("Notification clicked of type " + type.type + " with guild:" + type.guild_id + " channel:" + type.channel_id + " message:" + type.message_id);
    obj = { guildId: null, channelId: null, messageId: null, isPreload: true };
    ({ guild_id: obj9[0], channel_id: obj9[1], message_id: obj9[2] } = type);
    const messages = fetchMessagesDefault.fetchMessages(obj);
    let flag = true;
    let flag2 = true;
    const obj8 = fetchMessagesDefault;
  } else {
    flag = false;
    flag2 = false;
    if ("GENERIC_PUSH_NOTIFICATION_SENT" === type.type) {
      let tmp25 = null;
      flag = false;
      flag2 = false;
      if (null != type.deeplink) {
        flag = false;
        flag2 = false;
        if ("" !== type.deeplink) {
          const payload = parseQueryDefault(type.deeplink).payload;
          if (payload.type === tmp(688).LinkingTypes.MESSAGE) {
            let tracking_type;
            if (type != tmp25) {
              tracking_type = type.tracking_type;
            }
            if (tracking_type == tmp25) {
              tracking_type = type.type;
            }
            let tmp8 = tmp25 != tracking_type && tmp25 != payload.messageId && tmp25 != payload.channelId;
            if (tmp8) {
              status_text = tmp(11435);
              status_text.receivedNotification(payload.messageId, payload.channelId, tracking_type);
            }
            let tmp40Result = tmp40(10054);
            obj = { guildId: null, channelId: null, messageId: null, isPreload: true };
            ({ guildId: obj6[0], channelId: obj6[1], messageId: obj6[2] } = payload);
            const messages1 = tmp40Result.fetchMessages(obj);
            flag = true;
            flag2 = true;
          } else {
            if (payload.type === tmp(688).LinkingTypes.ICYMI) {
              if (tmp25 != type.channel_id) {
                if (tmp25 != type.message_id) {
                  status_text = tmp40(8637);
                  const forNotification = status_text.fetchForNotification(type.channel_id, type.message_id);
                  flag = false;
                  flag2 = false;
                }
              }
            }
            flag = false;
            flag2 = false;
            if (payload.type === tmp(688).LinkingTypes.ICYMI) {
              flag = false;
              flag2 = false;
              if (tmp25 != type.user_id) {
                flag = false;
                flag2 = false;
                if (tmp25 != type.notification_center_id) {
                  let status_emoji_id = null;
                  if (tmp25 != type.status_emoji_id) {
                    status_emoji_id = null;
                    if ("0" !== type.status_emoji_id) {
                      status_emoji_id = type.status_emoji_id;
                    }
                  }
                  obj1 = { id: null, type: null, score: 1000, data: null };
                  obj1[0] = type.notification_center_id;
                  obj1[1] = tmp(8634).ICYMIItemTypes.CUSTOM_STATUS;
                  const obj2 = { user_id: null, text: null, emoji_id: null, emoji_name: null, emoji_animated: null };
                  ({ user_id: obj3[0], status_text } = type);
                  obj2[1] = status_text;
                  obj2[2] = status_emoji_id;
                  obj2[3] = type.status_emoji_name;
                  obj2[4] = type.status_emoji_animated;
                  obj1[3] = obj2;
                  tmp40Result = tmp40(8637);
                  const forStatusNotification = tmp40Result.fetchForStatusNotification(obj1);
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
    logger.log("Notification clicked of type " + type.type);
  }
  type = type.type;
  switch (type) {
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
    case "assign":
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
    case "construct":
    break;
    case "constructor":
    break;
    case "container":
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
    break;
    case "gap":
    break;
    case "get":
    break;
    case "getChannel":
    break;
    case "getCurrentUser":
    break;
    case "guild":
    break;
    case "guildId":
    break;
    case "guild_id":
    break;
    case "has":
    break;
    case "hasDiversityParent":
    break;
    case "hash":
    break;
    case "hd":
    break;
    case "header":
    break;
    case "height":
    break;
    case "httpServerLocation":
    break;
    case "icon":
    break;
    case "includes":
    break;
    case "index":
    break;
    case "indexOf":
    break;
    case "intl":
    break;
    case "items":
    break;
    case "join":
    break;
    case "jsx":
    break;
    case "jsxs":
    break;
    case "justifyContent":
    break;
    case "key":
    break;
    case "keys":
    break;
    case "kind":
    break;
    case "ks":
    break;
    case "space":
    break;
    case "label":
    break;
    case "lc":
    break;
    case "left":
    break;
    case "length":
    break;
    case "lj":
    break;
    case "loadJsonAsset":
    break;
    case "location":
    break;
    case "map":
    break;
    case "marginTop":
    break;
    case "marginBottom":
    break;
    case "match":
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
      obj5[5] = type.guild_id;
      tmp25 = "channel_id" in type;
      let channel_id = null;
      if (tmp25) {
        channel_id = type.channel_id;
      }
      obj5[6] = channel_id;
      let channel_type = null;
      if ("channel_type" in type) {
        channel_type = type.channel_type;
      }
      obj5[7] = channel_type;
      let NumberResult = null;
      if ("rel_type" in type) {
        NumberResult = Number(type.rel_type);
      }
      obj5[8] = NumberResult;
      let notification_id = null;
      if ("notification_id" in type) {
        notification_id = type.notification_id;
      }
      obj5[9] = notification_id;
      let tmp35 = "image_url" in type;
      if (tmp35) {
        tmp35 = tmp8 != type.image_url;
      }
      obj5[10] = tmp35;
      let join_id = null;
      if ("join_id" in type) {
        join_id = type.join_id;
      }
      obj5[11] = join_id;
      let notif_instance_id = null;
      if ("notif_instance_id" in type) {
        notif_instance_id = type.notif_instance_id;
      }
      obj5[12] = notif_instance_id;
      let notif_type_id = null;
      if ("notif_type_id" in type) {
        notif_type_id = type.notif_type_id;
      }
      obj5[13] = notif_type_id;
      if ("mention_type" in type) {
        const mention_type = type.mention_type;
      }
      if (tmp8 != type.deeplink) {
        if ("" !== type.deeplink) {
          const obj3 = { payload: null, waitForConnection: false, skipMessageFetch: null };
          obj3[0] = type(4458)(type.deeplink).payload;
          obj3[2] = flag;
          type(13812)(obj3);
        }
      }
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
    case "toLowerCase":
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
      type = importDefault;
      let obj10 = dispatcherDefault;
      let obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      let tmp20 = expandEventPropertiesDefault;
      let track = tmp20.track;
      let NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      let tmp22 = "tracking_type" in type;
      if (tmp22) {
        let type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      let tmp23 = "user_id" in type;
      tmp8 = null;
      let user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      let message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      let tmp27 = "message_type_" in type;
      let message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      let tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "width":
    break;
    case "window":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "withSpring":
    break;
    case "":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "isArrayBuffer":
    break;
    case "A":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "ay":
    break;
    case "guildRoomLocalDisconnect":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "extraBottomHeight":
    break;
    case "$ZodBoolean":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "ZodBoolean":
    break;
    case "B":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "le":
    break;
    case "an":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "n":
    break;
    case "useActionBarPrimaryButton":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "ActionBarPrimaryButton":
    break;
    case "u":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
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
    case "DateToSystemTimezoneSetter":
    break;
    case "at":
    break;
    case "te":
    break;
    case "mez":
    break;
    case "Setter":
    break;
    case "useDefaultSendStartStageNotificationToggle":
    break;
    case "NotificationToggle":
    break;
    case "onToggleReplyMention":
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
    case "BOT_HTTP_INTERACTIONS":
    break;
    case "H":
      type = importDefault;
      obj10 = dispatcherDefault;
      obj4 = { type: "PUSH_NOTIFICATION_CLICK" };
      obj10.dispatch(obj4);
      tmp20 = expandEventPropertiesDefault;
      track = tmp20.track;
      NOTIFICATION_CLICKED = constants.NOTIFICATION_CLICKED;
      tmp22 = "tracking_type" in type;
      if (tmp22) {
        type2 = type.tracking_type;
      } else {
        type2 = type.type;
      }
      obj5 = { notif_type: null, notif_user_id: null, message_id: null, message_type: null, has_message: null, guild_id: null, channel_id: null, channel_type: null, rel_type: null, notification_id: null, has_image_thumbnail: null, join_id: null, notif_instance_id: null, notif_type_id: null, mention_type: null };
      obj5[0] = type2;
      tmp23 = "user_id" in type;
      tmp8 = null;
      user_id = null;
      if (tmp23) {
        user_id = type.user_id;
      }
      obj5[1] = user_id;
      tmp25 = "message_id" in type;
      message_id = null;
      if (tmp25) {
        message_id = type.message_id;
      }
      obj5[2] = message_id;
      tmp27 = "message_type_" in type;
      message_type_ = null;
      if (tmp27) {
        message_type_ = type.message_type_;
      }
      obj5[3] = message_type_;
      tmp29 = "message" in type;
      if (tmp29) {
        tmp29 = tmp8 != type.message;
      }
      obj5[4] = tmp29;
      tmp25 = "guild_id" in type;
      status_text = null;
    break;
    case "HT":
    break;
    case "TP":
    break;
    case "P":
    break;
    case "INTERACTIONS":
    break;
    case "NSFW_SERVER":
    break;
    case "NSFW_SERVER_AGE_RESTRICTION":
    break;
    case "AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING":
    break;
    case "RING_CALL_ACCEPTED":
    break;
    case "CALL_ACCEPT":
    break;
    case "ForumSpoilerIcon":
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
    case "parseUrl":
    break;
    case "parseUrlencoded":
    break;
    case "encodedBodySize":
    break;
    case "platformProfilers":
    break;
    case "isFetchingSounds":
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
    case "$ZodCheckMaxLength":
    break;
    case "kMaxLength":
    break;
    case "L":
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
    case "withTouchEventBoundary":
    break;
    case "TouchEventBoundary":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
    break;
    case "AbortCodes":
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
    case "toolCallSpanMap":
    break;
    case "getPendingChanges":
    break;
    case "MEDIA_PICKER_SEND_BUTTON_SPRING":
    break;
    case "marginHorizontal":
    break;
    case "Direction":
    break;
    case "rect":
    break;
    case "QUEST_HOME_SEARCH_CLOSED":
    break;
    case "SEARCH_CLOSED":
    break;
    case "CHANNEL_NOTICE_SHOW_DELAY":
    break;
    case "DELAYED":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "createForumPostActions":
    break;
    case "suppressRowAnimationSequenceId":
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
    case "woman_and_man_holding_hands_tone1_tone4":
    break;
    case "CHANNEL_CALL":
    break;
    case "CHANNEL_CALL_ACTION_BAR":
    break;
    case "CALL_ACTION_BAR_HEIGHT":
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
    case "VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE":
    break;
    case "MESSAGE_LONG_PRESS_MENU":
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
    case "QUEST_BAR_RENDERED":
    break;
    case "RED_NEW_45":
    break;
    case "hasConnection":
    break;
    case "hasConnectionEntrypointUrl":
    break;
    case "gameClaimMarkAsDismissed":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isProfileFrameRecord":
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
    case "GuidelinesIllocon":
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
    case "getExperimentBucketName":
    break;
    case "di":
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
    case "NoResults":
    break;
    case "NoResultsAlt":
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
    case "PREMIUM_TIER_2_PINK":
    break;
    case "PREMIUM_TIER_2_PINK_FOR_GRADIENTS":
    break;
    case "PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2":
    break;
    case "Role":
    break;
    case "RoleFlags":
    break;
    case "scrollToItem":
    break;
    case "embedUrl":
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
    case "zo":
    break;
    case "zon":
    break;
    case "tal":
    break;
    case "collapseText":
    break;
    case "paddingVertical":
    break;
    case "initializeRouterUtils":
    break;
    case "GUILD_MEMBER_REQUEST_TO_JOIN":
    break;
    case "REQUEST_TO_JOIN_USER_INELIGIBLE":
    break;
    case "INELIGIBLE":
    break;
    case "INELIGIBLE_FOR_FAMILY_CENTER":
    break;
    case "FAMILY_CENTER":
    break;
    case "FAMILY_CENTER_ACTION":
    break;
    case "CENTER":
    break;
    case "ENTER":
    break;
    case "TWITTER_LEGACY":
    break;
    case "LEGACY_AUDIO_SUBSYSTEM":
    break;
    case "SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES":
    break;
    case "PAYPAL_FLOW_OPTION_REQUIRED":
    break;
    case "RED_NEW_34":
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
    case "flag_sk":
    break;
    case "spade_suit":
    break;
    case "DARK_BRAND_260_LIGHT_BRAND_200":
    break;
    case "BRAND_260":
    break;
    case "BRAND_200":
    break;
    case "GuildEntityDao":
    break;
    case "EntityDao":
    break;
    case "Dao":
    break;
    case "kiss_woman_woman_dark_skin_tone_medium_skin_tone":
    break;
    case "isTrustedProtocol":
    break;
    case "collapsable":
    break;
    case "collapsableChildren":
    break;
    case "renderCodedLinks":
    break;
    case "app":
    break;
    case "application":
    break;
    case "applicationIdToGuildIds":
    break;
    case "pl":
    break;
    case "ca":
    break;
    case "cat":
    break;
    case "tio":
    break;
    case "io":
    break;
    case "showHidden":
    break;
    case "_applyCombination":
    break;
    case "ly":
    break;
    case "backoffTimeSec":
    break;
    case "../../../../lib/assign":
    break;
    case "../../../lib/assign":
    break;
    case "../../lib/assign":
    break;
    case "../lib/assign":
    break;
    case ".":
    break;
    case "./":
    break;
    case "lib":
    break;
    case "assignSimilarDate":
    break;
    case "sign":
    break;
    case "gn":
    break;
    case "mapViewabilityValues":
    break;
    case "stickySectionHeadersEnabled":
    break;
    case "huit":
    break;
    case "foi":
    break;
    case "ios_backgroundColor":
    break;
    case "ba":
    break;
    case "back":
    break;
    case "background":
    break;
    case "backgroundColorGradient":
    break;
    case "kg":
    break;
    case "gr":
    break;
    case "un":
    break;
    case "und":
    break;
    case "Color":
    break;
    case "ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT":
    break;
    case "EXPERIMENT":
    break;
    case "EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS":
    break;
    case "SPECTATOR_MODE":
    break;
    case "FormSubmitErrorType":
    break;
    case "person_walking_facing_right_tone3":
    break;
    case "numHours":
    break;
    case "giftReminderCoachmark":
    break;
    case "view_seek_duration":
    break;
    case "durationV":
    break;
    case "onVerified":
    break;
    case "_bodyArrayBuffer":
    break;
    case "dy":
    break;
    case "safeAreaRight":
    break;
    case "bor":
    break;
    case "border":
    break;
    case "order":
    break;
    case "der":
    break;
    case "Radius":
    break;
    case "iu":
    break;
    case "overflow_bottom":
    break;
    case "_bottom":
    break;
    case "bot":
    break;
    case "bottom-right":
    break;
    case "ott":
    break;
    case "otto":
    break;
    case "tom":
    break;
    case "right shift":
    break;
    case "shiftLeft":
    break;
    case "DynamicallyInjectedByGestureHandler":
    break;
    case "cal":
    break;
    case "all":
    break;
    case "ll":
    break;
    case "_channelId":
    break;
    case "ch":
    break;
    case "cha":
    break;
    case "ha":
    break;
    case "ann":
    break;
    case "nn":
    break;
    case "isSelf":
    break;
    case "isSelfDeaf":
    break;
    case "afk_channel_id":
    break;
    case "_id":
    break;
    case "family_adult_adult_child":
    break;
    case "family_adult_adult_child_child":
    break;
    case "_children":
    break;
    case "_childrenToCellKey":
    break;
    case "child":
    break;
    case "hi":
    break;
    case "dr":
    break;
    case "ren":
    break;
    case "reversed_hand_with_middle_finger_extended_tone4":
    break;
    case "_longestInteractionMap":
    break;
    case "applicationTopWrapperScrollView":
    break;
    case "onTop":
    break;
    case "wMWyci":
    break;
    case "ix8XIj":
    break;
    case "ClientOutdatedAcceptGiftError":
    break;
    case "td":
    break;
    case "Accept":
    break;
    case "uni":
    break;
    case "Version":
    break;
    case "burst_colors":
    break;
    case "col":
    break;
    case "ors":
    break;
    case "rs":
    break;
    case "addUserId":
    break;
    case "disableGuildSelect":
    break;
    case "GuildSelectDefaultIcon":
    break;
    case "concatSettings":
    break;
    case "subtitleTrailing":
    break;
    case "getLicense":
    break;
    case "$constructor":
    break;
    case "const":
    break;
    case "constr":
    break;
    case "ons":
    break;
    case "str":
    break;
    case "ru":
    break;
    case "tor":
    break;
    case "windowLength":
    break;
    case "_container":
    break;
    case "contain":
    break;
    case "containerBorderColor":
    break;
    case "ai":
    break;
    case "ner":
    break;
    case "creative_content":
    break;
    case "_contentAvailable":
    break;
    case "ten":
    break;
    case "tent":
    break;
    case "__wrapped__":
    break;
    case "__context":
    break;
    case "_context":
    break;
    case "contextBarRow":
    break;
    case "withAlphabeticalSections":
    break;
    case "d+0vwo":
    break;
    case "wol":
    break;
    case "wolf":
    break;
    case "AccountAgeTier10LargeBadge":
    break;
    case "cou":
    break;
    case "Badge":
    break;
    case "disableBackgroundOverlay":
    break;
    case "refreshImpressions":
    break;
    case "topic":
    break;
    case "topicContainer":
    break;
    case "getAdDecisionByPlacementAndAdCreativeId":
    break;
    case "cr":
    break;
    case "les":
    break;
    case "message_type":
    break;
    case "_$esjava$current":
    break;
    case "cu":
    break;
    case "currentApp":
    break;
    case "currentAppIcon":
    break;
    case "containerId":
    break;
    case "dispatchLazyCache":
    break;
    case "useGuildMemberOrUserPendingDisplayNameStyles":
    break;
    case "parallel":
    break;
    case "preparedTextCacheSize":
    break;
    case "setGlobalHandler":
    break;
    case "_$esjava$cursor":
    break;
    case "cursorColor":
    break;
    case "so":
    break;
    case "MOBILE_UNREADBAR_TEXT_DEFAULT":
    break;
    case "DEFAULT_MEDIA_MAX_WIDTH":
    break;
    case "NitroPlatinumBadgeSmallBadge":
    break;
    case "_clientSdkMetadata":
    break;
    case "MetadataFields":
    break;
    case "tada":
    break;
    case "da":
    break;
    case "dddd":
    break;
    case "__defaultLocale":
    break;
    case "def":
    break;
    case "defaultLocale":
    break;
    case "fa":
    break;
    case "au":
    break;
    case "lt":
    break;
    case "localeIdentifier":
    break;
    case "define":
    break;
    case "efi":
    break;
    case "fi":
    break;
    case "fin":
    break;
    case "heroArtVideoLinkLightTheme":
    break;
    case "undelete":
    break;
    case "del":
    break;
    case "deleteAllExcept":
    break;
    case "ele":
    break;
    case "ptt_start":
    break;
    case "_startMs":
    break;
    case "startMs":
    break;
    case "shouldUseCache":
    break;
    case "checkViewableIndicesChanges":
    break;
    case "neutral_face":
    break;
    case "inputValue":
    break;
    case "inputValues":
    break;
    case "openid_params":
    break;
    case "leftSlot":
    break;
    case "two_hearts":
    break;
    case "renderChannelTitle":
    break;
    case "avatar_description":
    break;
    case "_description":
    break;
    case "desc":
    break;
    case "descriptionContainer":
    break;
    case "descriptionContainerStyle":
    break;
    case "esc":
    break;
    case "sc":
    break;
    case "scr":
    break;
    case "script":
    break;
    case "cri":
    break;
    case "pt":
    break;
    case "INCIDENT_TIMESTAMP":
    break;
    case "TIMESTAMPS":
    break;
    case "maxBitrate":
    break;
    case "isOnReverseTrial":
    break;
    case "aria-disabled":
    break;
    case "disable":
    break;
    case "disabledAccessibilityHint":
    break;
    case "isa":
    break;
    case "sab":
    break;
    case "led":
    break;
    case "internalBinaryRead":
    break;
    case "proxy_icon_url":
    break;
    case "icon_url":
    break;
    case "party_id":
    break;
    case "_dispatch":
    break;
    case "_dispatchFrame":
    break;
    case "dispatchFrameUrl":
    break;
    case "spa":
    break;
    case "pat":
    break;
    case "patch":
    break;
    case "tc":
    break;
    case "renderActivityInviteEmbed":
    break;
    case "time_to_full_display":
    break;
    case "_displayName":
    break;
    case "display":
    break;
    case "displayNameAccessibilityHint":
    break;
    case "spl":
    break;
    case "play":
    break;
    case "la":
    break;
    case "am":
    break;
    case "internalBinaryWrite":
    break;
    case "div":
    break;
    case "diversityChildren":
    break;
    case "ve":
    break;
    case "ver":
    break;
    case "renderCommunicationDisabled":
    break;
    case "SpendingLimitSettings":
    break;
    case "LhlgY9":
    break;
    case "toExpPos":
    break;
    case "do":
    break;
    case "don":
    break;
    case "doneButton":
    break;
    case "doneButtonContainer":
    break;
    case "__duration":
    break;
    case "_duration":
    break;
    case "dur":
    break;
    case "durationContainer":
    break;
    case "ura":
    break;
    case "rat":
    break;
    case "ratio":
    break;
    case "assetFormat":
    break;
    case "app_hardware_acceleration_enabled":
    break;
    case "_enabled":
    break;
    case "_enabledPaymentMethods":
    break;
    case "enable":
    break;
    case "shouldShowBlurredThumbnailImage":
    break;
    case "getAwaitingRemoteSessionInfo":
    break;
    case "forFractionalPremium":
    break;
    case "FractionalPremiumSKUs":
    break;
    case "FractionalPremiumSKUsSets":
    break;
    case "@braintree/extended-promise":
    break;
    case "extend":
    break;
    case "extended":
    break;
    case "ended":
    break;
    case "nd":
    break;
    case "promise":
    break;
    case "promiseProcessor":
    break;
    case "checkoutFailed":
    break;
    case "enum":
    break;
    case "nu":
    break;
    case "num":
    break;
    case "mer":
    break;
    case "era":
    break;
    case "referrerPolicy":
    break;
    case "getGuildDefaults":
    break;
    case "../../../lib/braintree-error":
    break;
    case "../../lib/braintree-error":
    break;
    case "../lib/braintree-error":
    break;
    case "brain":
    break;
    case "braintree":
    break;
    case "tre":
    break;
    case "tree":
    break;
    case "ee":
    break;
    case "err":
    break;
    case "errorApplyingMediaFilterSettings":
    break;
    case "FilterSettingsGraph":
    break;
    case "phoenix":
    break;
    case "googleAuthorizationFingerprint":
    break;
    case "printer":
    break;
    case "exp":
    break;
    case "expo":
    break;
    case "port":
    break;
    case "rtsState":
    break;
    case "ts":
    break;
    case "_clearOutcomes":
    break;
    case "fil":
    break;
    case "file":
    break;
    case "F":
    break;
    case "Finish":
    break;
    case "he":
    break;
    case "ServerIconShieldzordExample":
    break;
    case "dz":
    break;
    case "storeToken":
    break;
    case "enableIntegrityCheck":
    break;
    case "SceneView":
    break;
    case "EntitlementTenantFulfillmentStatus":
    break;
    case "ill":
    break;
    case "__findAnimatedPropsNodes":
    break;
    case "USE_NOW":
    break;
    case "NOW_PLAYING_CONSENT_CARD":
    break;
    case "CARD_MUTED_PRESSED_BG":
    break;
    case "BGR":
    break;
    case "GRABPAY_MY":
    break;
    case "MYR":
    break;
    case "ROLE_SUBSCRIPTION_SETTING":
    break;
    case "SETTINGS_WINDOWS":
    break;
    case "WINDOWS":
    break;
    case "WINDOWS_GRAPHICS_CAPTURE_BUILD":
    break;
    case "BUILD_OVERRIDE_COOKIE_NAME":
    break;
    case "MEDIA_NUM_COLUMNS":
    break;
    case "system_channel_flags":
    break;
    case "channel_flags":
    break;
    case "_flags":
    break;
    case "flag":
    break;
    case "flags_":
    break;
    case "lag":
    break;
    case "gs":
    break;
    case "_oldestUnreadMessageId":
    break;
    case "oldestUnreadMessageId":
    break;
    case "oldestUnreadMessageIdStale":
    break;
    case "addPendingAuthorizedState":
    break;
    case "logotype_dark":
    break;
    case "darkAppearance":
    break;
    case "woman_juggling_medium_skin_tone":
    break;
    case "man_juggling_medium_skin_tone":
    break;
    case "fo":
    break;
    case "for":
    break;
    case "forEachChannel":
    break;
    case "TranscriptOutlineIcon":
    break;
    case "DiscountsMegaphoneSpotIllustration":
    break;
    case "counts":
    break;
    case "ga":
    break;
    case "pho":
    break;
    case "phone":
    break;
    case "QUICKSWITCHER_RESULT_SELECTED":
    break;
    case "createScheduledMessage":
    break;
    case "getChannelA11yHint":
    break;
    case "Channel":
    break;
    case "interrobang":
    break;
    case "bangbang":
    break;
    case "getCurrent":
    break;
    case "getCurrentUserActiveStream":
    break;
    case "U":
    break;
    case "Use":
    break;
    case "User":
    break;
    case "ser":
    break;
    case "StreamVolumeItem":
    break;
    case "_guildId":
    break;
    case "gu":
    break;
    case "current_guild_id":
    break;
    case "getContent":
    break;
    case "getContentAvailable":
    break;
    case "getPrice":
    break;
    case "getPriceForCollectiblesProduct":
    break;
    case "hasDiversity":
    break;
    case "Parent":
    break;
    case "ParentalControlledDefaultGuildsRestrictedV2":
    break;
    case "ar":
    break;
    case "DefaultGuildsRestricted":
    break;
    case "DefaultGuildsRestrictedV2":
    break;
    case "currentSubscription":
    break;
    case "avatar_hash":
    break;
    case "_hash":
    break;
    case "hashKey":
    break;
    case "gek":
    break;
    case "bhd":
    break;
    case "INVITE_RESOLVE_SUCCESS":
    break;
    case "guild_monetization":
    break;
    case "monetizationDisclosureContainerStyle":
    break;
    case "_header":
    break;
    case "_headerLayoutYs":
    break;
    case "head":
    break;
    case "ade":
    break;
    case "YsCuyF":
    break;
    case "FAMILY_CENTER_ERROR_CODE_TO_FAILURE":
    break;
    case "REACTIVATION_OFFER_REDEEM":
    break;
    case "REDEEM_REWARD":
    break;
    case "IMAGE_VIDEO_DATA_SETTINGS_UPDATED":
    break;
    case "onOptionValueChange":
    break;
    case "onValueChange":
    break;
    case "onValueChanged":
    break;
    case "player_height":
    break;
    case "hei":
    break;
    case "heightAverageWindow":
    break;
    default:
      return flag2;
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
    data(7229).trackAppOpened("notification");
    data = getData.getData();
    const obj3 = data(7229);
    const tmp11 = importDefault;
    const _HermesInternal = HermesInternal;
    isTracingDefault.mark("\u2757", "Receive notification " + data.type);
    if (null != data.receiving_user_id) {
      if (null != id.getId()) {
        if (data.receiving_user_id !== obj.getId()) {
          tmp7(7230);
          tmp7(5229);
          tmp7(13597);
          let receiving_user_id = data.receiving_user_id;
          receiving_user_id = tmp7(12210).switchAccount(receiving_user_id, false, arg1 ? tmp5.PUSH_NOTIFICATION_INITIAL : tmp5.PUSH_NOTIFICATION);
          receiving_user_id.then(() => {
            const Emitter = closure_1_1(closure_1_3[40]).Emitter;
            Emitter.batched(() => closure_1_34(closure_0));
          });
          const tmp7Result2 = tmp7(12210);
        }
      }
      obj = id;
    }
    let Emitter = tmp11(586).Emitter;
    return Emitter.batched(() => closure_1_34(data));
  }
};