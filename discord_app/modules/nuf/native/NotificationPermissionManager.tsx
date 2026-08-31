// === Module 16998: haveNotSeenPromptSince ===

// Module 16998 (haveNotSeenPromptSince)
import hooksDefault from "hooks" /* 4045 */;
import initializeDefault from "initialize" /* 5454 */;
import getOrRefreshPushSyncToken from "getOrRefreshPushSyncToken" /* 11948 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "storeThread" /* 4093 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import closure_7 from "ensureGuildLoaded" /* 1387 */;
import closure_8 from "updateUserGuildSettingsInternal" /* 4669 */;
import closure_9 from "set" /* 11945 */;
import { PermissionPromptType } from "set" /* 11945 */;
import EventActionType from "EventActionType" /* 11946 */;
import ME from "ME" /* 676 */;
import { NotificationAuthorizationStatus as closure_16 } from "NativePermissionStatus" /* 4698 */;

require = arg1;
function haveNotSeenPromptSince(arg0, arg1) {
  const tmp = state.getState().promptLastSeen[arg0];
  let tmp2 = null == tmp;
  if (!tmp2) {
    let tmp4;
    if (items.includes(arg0)) {
      tmp4 = hooksDefault().diff(tmp, "days") >= 1;
      const obj = hooksDefault();
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function shouldShowPrompt() {
  const self = this;
  const apply = _shouldShowPrompt.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _shouldShowPrompt() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      closure_2 = tmp2;
      closure_1 = tmp3;
      const NativePermissionManager = obj.NativePermissionManager;
      closure_1 = yield NativePermissionManager.getNotificationAuthorizationStatus();
      let tmp11 = closure_1 === constants.UNDETERMINED;
      if (!tmp11) {
        tmp11 = closure_1 === constants.PROVISIONAL;
      }
      if (tmp11) {
        tmp11 = callback(closure_0, 1);
      }
      return tmp11;
    })();
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function shouldShowReactivationPrompt() {
  const self = this;
  const apply = _shouldShowReactivationPrompt.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _shouldShowReactivationPrompt() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      closure_2 = tmp2;
      closure_1 = tmp3;
      const NativePermissionManager = obj.NativePermissionManager;
      yield NativePermissionManager.getNotificationAuthorizationStatus();
      let tmp9 = arg1 === constants.DENIED;
      if (tmp9) {
        tmp9 = callback(closure_0, 1);
      }
      return tmp9;
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
function showPrompt(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    let obj = callback(closure_1_2[15]);
    const result = obj.setPushPermissionReactivationSeen(callback);
    obj = { impressionName: null, impressionProperties: null, location: null };
    const obj2 = callback2(closure_1_2[10]);
    obj[0] = callback(closure_1_2[13]).ImpressionNames.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
    obj[1] = { action_location: callback2 };
    obj[2] = callback2;
    obj2.openLazy(callback(closure_1_2[12])(closure_1_2[11], closure_1_2.paths), closure_1_11, obj);
  }, arg2);
}
function _logNotificationPermissionStatus() {
  const self = this;
  const apply = _logNotificationPermissionStatus2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _logNotificationPermissionStatus2() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback2 = tmp5;
            let callback = tmp2;
            callback = undefined;
            callback2 = undefined;
            const NativePermissionManager = closure_1_4.NativePermissionManager;
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback = arg1;
          callback2 = callback(10129).allowInAppNotifications();
          const obj5 = callback(10129);
          const obj2 = { os_enabled: null, foreground_app_enabled: null, background_app_enabled: null, notification_authorization_status: null };
          obj2[0] = callback === constants2.AUTHORIZED;
          obj2[1] = callback2;
          obj2[2] = callback2;
          const obj6 = callback2(698);
          let tmp7 = null;
          if (obj8.isIOS()) {
            tmp7 = callback;
          }
          obj2[3] = tmp7;
          obj6.track(constants.NOTIFICATION_PERMISSION_STATUS, obj2);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
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
({ NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY: unpackModuleId, EventActionLocation: closure_12 } = EventActionType);
({ RelationshipTypes: map1, GuildFeatures: closure_14, AnalyticEvents: closure_15 } = ME);
const items = [, ];
({ FRIEND_REQUEST_SENT: arr[0], INVITE_ACCEPTED: arr[1] } = PermissionPromptType);
let c23 = null;
initializeDefault;
class NotificationPermissionManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.previousAppState = null;
    applyArgumentsResult.actions = {
      MESSAGE_CREATE(message) {
            closure_0.handleMessageCreate(message);
            const result = closure_0.handleMessageCreateForNudge(message);
          },
      MESSAGE_REACTION_ADD(optimistic) {
            const result = closure_0.handleReactionAddForNudge(optimistic);
          },
      INVITE_ACCEPT_SUCCESS(arg0) {
            closure_0.handleInviteAccept(arg0);
          },
      RELATIONSHIP_ADD(arg0) {
            const result = closure_0.handleSendFriendRequest(arg0);
          },
      POST_CONNECTION_OPEN() {
            closure_0.handleConnectionOpen();
          },
      APP_STATE_UPDATE(arg0) {
            closure_0.handleAppStateUpdate(arg0);
          }
    };
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleConnectionOpen = closure_3(function*() {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              c1 = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_25();
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              c1 = 2;
              c2 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = closure_0._handleNotificationAuthorizationStatusUpdate();
              return obj3;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp8) {
          c2 = tmp;
          throw tmp8;
        }
      }
    });
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function*(arg0) {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                c2 = tmp5;
                c1 = tmp2;
                let author;
                c1 = undefined;
                c2 = undefined;
                c3 = undefined;
                ({ message: c0, optimistic: c1, isPushNotification: c2, sendMessageOptions: c3 } = author);
                c3 = 1;
                c4 = 1;
                return { value: "Object", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  let tmp7 = c1;
                  if (!c1) {
                    tmp7 = c2;
                  }
                  if (!tmp7) {
                    tmp7 = null != c3;
                  }
                  if (tmp7) {
                    c4 = 3;
                  } else {
                    let id;
                    if (author != null) {
                      author = author.author;
                      if (author != null) {
                        id = author.id;
                      }
                    }
                    let tmp6 = id === closure_1_6.getId();
                  }
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = closure_1_19(closure_1_10.MESSAGE_SENT);
                  return obj2;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else {
                tmp6 = arg1;
                if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
              }
              if (tmp6) {
                closure_1_24(closure_1_10.MESSAGE_SENT, closure_1_12.MESSAGE_SENT, 1000);
              }
            }
          } catch (tmp24) {
            c4 = tmp;
            throw tmp24;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleMessageCreate = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c4 = 0;
      c5 = 0;
      const iter = (function*(arg0) {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_3 = tmp5;
                closure_2 = tmp2;
                let invite;
                invite = invite.invite;
                c4 = 1;
                c5 = 1;
                return { value: "Object", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  guild = guild.guild;
                  let features;
                  if (guild != null) {
                    features = guild.features;
                  }
                  closure_1 = features;
                  if (features == null) {
                    closure_1 = [];
                  }
                  if (closure_1.includes(closure_1_14.COMMUNITY)) {
                    c5 = 3;
                  } else {
                    let obj3 = closure_1_1(closure_1_2[20]);
                  }
                  c4 = 2;
                  c5 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = closure_1_19(closure_1_10.INVITE_ACCEPTED);
                  return obj2;
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  let tmp6 = arg1;
                  if (!arg1) {
                    c4 = 3;
                    c5 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = closure_1_21(closure_1_10.INVITE_ACCEPTED);
                    return obj4;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else {
                tmp6 = arg1;
                if (arg0 === 2) {
                  c5 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
              }
              if (tmp6) {
                closure_1_24(closure_1_10.INVITE_ACCEPTED, closure_1_12.INVITE_ACCEPTED, 1000);
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
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function*(arg0) {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                closure_2 = tmp5;
                closure_1 = tmp2;
                let relationship;
                relationship = relationship.relationship;
                c3 = 1;
                c4 = 1;
                return { value: "Object", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  let tmp6 = relationship.type === closure_1_13.PENDING_OUTGOING;
                  if (tmp6) {
                    c3 = 2;
                    c4 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = closure_1_19(closure_1_10.FRIEND_REQUEST_SENT);
                    return obj2;
                  }
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  tmp6 = arg1;
                  if (!arg1) {
                    c3 = 3;
                    c4 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = closure_1_21(closure_1_10.FRIEND_REQUEST_SENT);
                    return obj4;
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else {
                tmp6 = arg1;
                if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
              }
              if (tmp6) {
                closure_1_24(closure_1_10.FRIEND_REQUEST_SENT, closure_1_12.FRIEND_REQUEST_SENT, 100);
              }
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp19) {
            c4 = tmp;
            throw tmp19;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleSendFriendRequest = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_0 = undefined;
    closure_1 = applyArgumentsResult;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function*(arg0) {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                closure_2 = tmp5;
                let previousAppState = tmp2;
                let state;
                state = state.state;
                previousAppState = undefined;
                closure_2 = undefined;
                c3 = 1;
                c4 = 1;
                return { value: "Object", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  previousAppState = previousAppState.previousAppState === callback(closure_1_2[21]).AppStates.BACKGROUND;
                  closure_2 = state === callback(closure_1_2[21]).AppStates.ACTIVE;
                  let tmp7 = previousAppState;
                  if (previousAppState) {
                    tmp7 = closure_1_2;
                  }
                  if (tmp7) {
                    c3 = 2;
                    c4 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = closure_1_1._handleNotificationAuthorizationStatusUpdate();
                    return obj2;
                  }
                }
              } else {
                if (2 === tmp5) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj3 = { value: null, done: true };
                    obj3[0] = arg1;
                    return obj3;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
                previousAppState.previousAppState = callback;
                c4 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
              if (callback === callback(closure_1_2[21]).AppStates.ACTIVE) {
                c3 = 3;
                c4 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = closure_1_25();
                return obj4;
              }
            }
          } catch (tmp22) {
            c4 = tmp;
            throw tmp22;
          }
        }
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleAppStateUpdate = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult._handleNotificationAuthorizationStatusUpdate = closure_3(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_0 = undefined;
              const NativePermissionManager = closure_1_4.NativePermissionManager;
              table = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            obj = closure_1_0(table[15]);
            const result = obj.updateNotificationAuthorizationStatus(closure_0);
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
        if (id === store.getId()) {
          const channel = store2.getChannel(tmp);
          if (null != channel) {
            const guildId = channel.getGuildId();
            if (channel.isThread()) {
              let isMutedResult = closure_5.isMuted(channel.id);
            } else {
              isMutedResult = closure_8.isChannelMuted(guildId, channel.id);
            }
            if (!isMutedResult) {
              const result = getOrRefreshPushSyncToken.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.CHANNEL_BANNER);
              const obj = getOrRefreshPushSyncToken;
            }
          }
        }
      }
    }
  }
};
prototype["handleReactionAddForNudge"] = function handleReactionAddForNudge(optimistic) {
  if (!optimistic.optimistic) {
    if (tmp2 === store.getId()) {
      const channel = store2.getChannel(tmp);
      if (null != channel) {
        const guildId = channel.getGuildId();
        if (channel.isThread()) {
          let isMutedResult = closure_5.isMuted(channel.id);
        } else {
          isMutedResult = closure_8.isChannelMuted(guildId, channel.id);
        }
        if (!isMutedResult) {
          const result = getOrRefreshPushSyncToken.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.POST_REACTION_BANNER);
          const obj = getOrRefreshPushSyncToken;
        }
      }
    }
  }
};
const notificationPermissionManager = new NotificationPermissionManager();
let result = require("set").fileFinishedImporting("modules/nuf/native/NotificationPermissionManager.tsx");

export default notificationPermissionManager;