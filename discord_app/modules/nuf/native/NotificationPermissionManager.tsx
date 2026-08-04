// discord_app/modules/nuf/native/NotificationPermissionManager.tsx
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { NativeModules } from "expandEventProperties";
import storeThread from "storeThread";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_8 from "updateUserGuildSettingsInternal";
import set from "set";
import { PermissionPromptType } from "set";
import EventActionType from "EventActionType";
import ME from "ME";
import { NotificationAuthorizationStatus as closure_16 } from "NativePermissionStatus";
import "initialize";

let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
const require = arg1;
function haveNotSeenPromptSince(arg0, arg1) {
  const tmp = state.getState().promptLastSeen[arg0];
  let tmp2 = null == tmp;
  if (!tmp2) {
    let tmp4;
    if (items.includes(arg0)) {
      tmp4 = importDefault(3775)().diff(tmp, "days") >= 1;
      const obj = importDefault(3775)();
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (obj === 2) {
        obj = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          obj = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              obj = 3;
              throw arg1;
            } else if (arg0 === 2) {
              obj = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp2;
              let closure_1 = tmp3;
              closure_1 = undefined;
              const NativePermissionManager = obj.NativePermissionManager;
              c3 = 1;
              obj = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
              return obj1;
            }
          } else if (arg0 === 1) {
            obj = 3;
            throw arg1;
          } else if (arg0 === 2) {
            obj = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_1 = arg1;
            let tmp11 = closure_1 === constants.UNDETERMINED;
            if (!tmp11) {
              tmp11 = closure_1 === constants.PROVISIONAL;
            }
            if (tmp11) {
              tmp11 = callback(closure_0, 1);
            }
            obj = 3;
            obj = { value: null, done: true };
            obj[0] = tmp11;
            return obj;
          }
        } catch (tmp22) {
          obj = tmp;
          throw tmp22;
        }
      }
    })();
  });
  const _shouldShowPrompt = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (obj === 2) {
        obj = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          obj = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              obj = 3;
              throw arg1;
            } else if (arg0 === 2) {
              obj = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp2;
              let closure_1 = tmp3;
              const NativePermissionManager = obj.NativePermissionManager;
              c3 = 1;
              obj = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = NativePermissionManager.getNotificationAuthorizationStatus();
              return obj1;
            }
          } else if (arg0 === 1) {
            obj = 3;
            throw arg1;
          } else if (arg0 === 2) {
            obj = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let tmp9 = arg1 === constants.DENIED;
            if (tmp9) {
              tmp9 = callback(closure_0, 1);
            }
            obj = 3;
            obj = { value: null, done: true };
            obj[0] = tmp9;
            return obj;
          }
        } catch (tmp16) {
          obj = tmp;
          throw tmp16;
        }
      }
    })();
  });
  const _shouldShowReactivationPrompt = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function showPrompt(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    let obj = callback(outer1_2[15]);
    const result = obj.setPushPermissionReactivationSeen(callback);
    obj = { impressionName: null, impressionProperties: null, location: null };
    const obj2 = callback2(outer1_2[10]);
    obj[0] = callback(outer1_2[13]).ImpressionNames.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
    obj[1] = { action_location: callback2 };
    obj[2] = callback2;
    obj2.openLazy(callback(outer1_2[12])(outer1_2[11], outer1_2.paths), outer1_11, obj);
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
        return { value: "HermesInternal", done: null };
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
            const NativePermissionManager = outer1_4.NativePermissionManager;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
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
          callback2 = callback(10263).allowInAppNotifications();
          const obj5 = callback(10263);
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
  });
  const _logNotificationPermissionStatus2 = tmp;
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
class NotificationPermissionManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    f112962 = applyArgumentsResult;
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
    f112962 = applyArgumentsResult;
    applyArgumentsResult.handleConnectionOpen = _logNotificationPermissionStatus2(function*() {
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
          return { value: "HermesInternal", done: null };
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
              let closure_0 = tmp4;
              c1 = 1;
              c2 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_25();
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c2 = tmp;
          throw tmp8;
        }
      }
    });
    f112962 = _logNotificationPermissionStatus2((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (function*(arg0) {
        let c0;
        let c1;
        let c2;
        let c3;
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
                c2 = tmp5;
                c1 = tmp2;
                let author;
                c1 = undefined;
                c2 = undefined;
                c3 = undefined;
                ({ message: c0, optimistic: c1, isPushNotification: c2, sendMessageOptions: c3 } = author);
                c3 = 1;
                c4 = 1;
                return { value: "ct", done: "Array" };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj1 = { value: null, done: true };
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
                    let tmp6 = id === outer1_6.getId();
                  }
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = outer1_19(outer1_10.MESSAGE_SENT);
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
                outer1_24(outer1_10.MESSAGE_SENT, outer1_12.MESSAGE_SENT, 1000);
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
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    f112962 = _logNotificationPermissionStatus2((arg0) => {
      let closure_0 = arg0;
      let c4 = 0;
      let c5 = 0;
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
            return { value: "HermesInternal", done: null };
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
                let updateUserGuildSettingsInternal = tmp5;
                let closure_2 = tmp2;
                let invite;
                invite = invite.invite;
                c4 = 1;
                c5 = 1;
                return { value: "ct", done: "Array" };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  guild = guild.guild;
                  let features;
                  if (guild != null) {
                    features = guild.features;
                  }
                  let closure_1 = features;
                  if (features == null) {
                    closure_1 = [];
                  }
                  if (closure_1.includes(outer1_14.COMMUNITY)) {
                    c5 = 3;
                  } else {
                    let obj3 = outer1_1(outer1_2[20]);
                  }
                  c4 = 2;
                  c5 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = outer1_19(outer1_10.INVITE_ACCEPTED);
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
                    obj4[0] = outer1_21(outer1_10.INVITE_ACCEPTED);
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
                outer1_24(outer1_10.INVITE_ACCEPTED, outer1_12.INVITE_ACCEPTED, 1000);
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
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    f112962 = _logNotificationPermissionStatus2((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      const iter = (function*(arg0) {
        let relationship;
        relationship = relationship.relationship;
        let c3 = 1;
        let c4 = 1;
        yield "ct";
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let tmp6 = relationship.type === outer1_13.PENDING_OUTGOING;
            if (tmp6) {
              c3 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_19(outer1_10.FRIEND_REQUEST_SENT);
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
              obj4[0] = outer1_21(outer1_10.FRIEND_REQUEST_SENT);
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
            const obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        }
        if (tmp6) {
          outer1_24(outer1_10.FRIEND_REQUEST_SENT, outer1_12.FRIEND_REQUEST_SENT, 100);
        }
        c4 = 3;
        yield "HermesInternal";
      })();
      iter.next();
      return iter;
    });
    applyArgumentsResult.handleSendFriendRequest = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    f112962 = undefined;
    closure_1 = applyArgumentsResult;
    f112962 = _logNotificationPermissionStatus2((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
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
                let closure_2 = tmp5;
                let previousAppState = tmp2;
                let state;
                state = state.state;
                previousAppState = undefined;
                closure_2 = undefined;
                c3 = 1;
                c4 = 1;
                return { value: "ct", done: "Array" };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  previousAppState = previousAppState.previousAppState === callback(outer1_2[21]).AppStates.BACKGROUND;
                  closure_2 = state === callback(outer1_2[21]).AppStates.ACTIVE;
                  let tmp7 = previousAppState;
                  if (previousAppState) {
                    tmp7 = outer1_2;
                  }
                  if (tmp7) {
                    c3 = 2;
                    c4 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = outer1_1._handleNotificationAuthorizationStatusUpdate();
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
                return { value: "HermesInternal", done: null };
              }
              if (callback === callback(outer1_2[21]).AppStates.ACTIVE) {
                c3 = 3;
                c4 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = outer1_25();
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
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    applyArgumentsResult._handleNotificationAuthorizationStatusUpdate = _logNotificationPermissionStatus2(function*() {
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
          return { value: "HermesInternal", done: null };
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
              let closure_1 = tmp5;
              let closure_0 = tmp2;
              closure_0 = undefined;
              const NativePermissionManager = outer1_4.NativePermissionManager;
              table = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
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
            obj = outer1_0(table[15]);
            const result = obj.updateNotificationAuthorizationStatus(closure_0);
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
        if (id === store.getId()) {
          const channel = store2.getChannel(tmp);
          if (null != channel) {
            const guildId = channel.getGuildId();
            if (channel.isThread()) {
              let isMutedResult = storeThread.isMuted(channel.id);
            } else {
              isMutedResult = closure_8.isChannelMuted(guildId, channel.id);
            }
            if (!isMutedResult) {
              const result = require(11520) /* getOrRefreshPushSyncToken */.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.CHANNEL_BANNER);
              const obj = require(11520) /* getOrRefreshPushSyncToken */;
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
          let isMutedResult = storeThread.isMuted(channel.id);
        } else {
          isMutedResult = closure_8.isChannelMuted(guildId, channel.id);
        }
        if (!isMutedResult) {
          const result = require(11520) /* getOrRefreshPushSyncToken */.setPushNotificationPermissionEligibleForPrompt(PermissionPromptType.POST_REACTION_BANNER);
          const obj = require(11520) /* getOrRefreshPushSyncToken */;
        }
      }
    }
  }
};
const notificationPermissionManager = new NotificationPermissionManager();
let result = require("storeThread").fileFinishedImporting("modules/nuf/native/NotificationPermissionManager.tsx");

export default notificationPermissionManager;