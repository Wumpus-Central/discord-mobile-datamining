// === Module 5422: showTooManyUserGuildsAlert ===

// Module 5422 (showTooManyUserGuildsAlert)
import encodeProperties from "encodeProperties" /* 503 */;
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionTo from "transitionTo" /* 1222 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4679 from "module_4679" /* 4679 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 4697 */;
import setDefault from "set" /* 4822 */;
import stopLurkingAll from "stopLurkingAll" /* 6131 */;
import getPreviousSafeRouteForNsfwReturnDefault from "getPreviousSafeRouteForNsfwReturn" /* 6137 */;
import closure_5 from "_objectWithoutProperties" /* 109 */;
import closure_6 from "asyncGeneratorStep" /* 5 */;
import closure_7 from "set" /* 5423 */;
import closure_8 from "fetchFingerprint" /* 1218 */;
import closure_9 from "set" /* 5347 */;
import closure_10 from "comparator" /* 1983 */;
import closure_11 from "createGuildRecordFromRust" /* 1910 */;
import closure_12 from "handleConnectionOpen" /* 1982 */;
import closure_13 from "handleConnectionOpen" /* 4268 */;
import closure_14 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;
import { AgeGateSource } from "result" /* 1221 */;

require = arg1;
function showTooManyUserGuildsAlert(quantity) {
  let obj = setDefault;
  obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.cTaRxF);
  const intl2 = getSystemLocale.intl;
  obj = { quantity };
  obj[1] = intl2.formatToPlainString(getSystemLocale.t["VSd+Aj"], obj);
  obj.show(obj);
}
function deleteGuild(id) {
  let obj = dispatcherDefault;
  obj = { id };
  obj.dispatch({ type: "GUILD_DELETE", guild: obj });
}
function _joinGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_7 = 0;
    closure_8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (sessionId === 2) {
        sessionId = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp6 === 3) {
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
            sessionId = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                sessionId = 3;
                throw arg1;
              } else if (arg0 === 2) {
                sessionId = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c4 = tmp3;
                loadId = tmp7;
                obj1 = undefined;
                throwTypeErrorResult = callback;
                if (obj1 === undefined) {
                  obj1 = {};
                }
                c2 = undefined;
                loadId = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                c7 = undefined;
                sessionId = undefined;
                c9 = undefined;
                c10 = undefined;
                let store;
                let channelId;
                c7 = 1;
                sessionId = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                sessionId = 3;
                throw arg1;
              } else if (arg0 === 2) {
                sessionId = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                throwTypeErrorResult = loadId;
                throwTypeErrorResult = lib;
                source = lib.source;
                throwTypeErrorResult = lib;
                loadId = lib.loadId;
                throwTypeErrorResult = lib;
                lurkLocation = lib.lurkLocation;
                throwTypeErrorResult = lib;
                autoNavigate = lib.autoNavigate;
                throwTypeErrorResult = autoNavigate;
                throwTypeErrorResult = undefined === autoNavigate;
                if (!throwTypeErrorResult) {
                  throwTypeErrorResult = loadId;
                  throwTypeErrorResult = autoNavigate;
                }
                throwTypeErrorResult = loadId;
                c6 = throwTypeErrorResult;
                throwTypeErrorResult = lib;
                const lurker = lib.lurker;
                c2 = lurker;
                if (lurker == null) {
                  c2 = false;
                }
                throwTypeErrorResult = loadId;
                throwTypeErrorResult = c4;
                throwTypeErrorResult = c2;
                closure_7 = c2;
                throwTypeErrorResult = authStore;
                const currentUser = authStore.getCurrentUser();
                let obj17 = currentUser;
                throwTypeErrorResult = undefined;
                if (currentUser != null) {
                  throwTypeErrorResult = c4;
                  throwTypeErrorResult = constants3;
                  throwTypeErrorResult = obj17.hasFlag(constants3.QUARANTINED);
                }
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = c4;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = loadId;
                  throwTypeErrorResult = lib(loadId[15])();
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new Promise((arg0, arg1) => {
                    error = new Error();
                    return arg1(error);
                  });
                  sessionId = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = throwTypeErrorResult;
                  return obj3;
                } else {
                  throwTypeErrorResult = loadId;
                  throwTypeErrorResult = c4;
                  throwTypeErrorResult = obj1;
                  throwTypeErrorResult = loadId;
                  throwTypeErrorResult = obj1(loadId[14]).wait(() => {
                    let obj = obj1(_undefined[14]);
                    obj = { type: "GUILD_JOIN", guildId: closure_0, lurker: c7, source: c2, loadId: _undefined };
                    return obj.dispatch(obj);
                  });
                  throwTypeErrorResult = loadId;
                  throwTypeErrorResult = c4;
                  c6 = 1;
                  throwTypeErrorResult = guildId;
                  const guildId2 = guildId.getGuildId();
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = guildId2;
                  throwTypeErrorResult = null;
                  if (callback === guildId2) {
                    throwTypeErrorResult = loadId;
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = null;
                    if (null != store.getGuild(callback)) {
                      throwTypeErrorResult = loadId;
                      throwTypeErrorResult = c4;
                      throwTypeErrorResult = channelId;
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = channelId.getChannelId(callback);
                    }
                  }
                  throwTypeErrorResult = loadId;
                  throwTypeErrorResult = c4;
                  c10 = throwTypeErrorResult;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = loadId;
                  const HTTP = callback(loadId[16]).HTTP;
                  let obj4 = { url: null, query: null, context: null, oldFormErrors: true, body: null, rejectWithError: null };
                  throwTypeErrorResult = closure_16;
                  throwTypeErrorResult = callback;
                  obj4[0] = closure_16.GUILD_JOIN(callback);
                  const obj5 = { lurker: null, session_id: null, recommendation_load_id: null, location: null, from_directory: null };
                  throwTypeErrorResult = c7;
                  obj5[0] = c7;
                  throwTypeErrorResult = c7;
                  throwTypeErrorResult = null;
                  if (c7) {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = sessionId;
                    throwTypeErrorResult = sessionId.getSessionId();
                  }
                  throwTypeErrorResult = loadId;
                  obj5[1] = throwTypeErrorResult;
                  throwTypeErrorResult = loadId;
                  obj5[2] = loadId;
                  throwTypeErrorResult = c7;
                  throwTypeErrorResult = null;
                  if (c7) {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = null;
                    if (null != c4) {
                      throwTypeErrorResult = loadId;
                      throwTypeErrorResult = c4;
                    }
                  }
                  throwTypeErrorResult = loadId;
                  throwTypeErrorResult = c4;
                  obj5[3] = throwTypeErrorResult;
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = constants2;
                  throwTypeErrorResult = c2 === constants2.DIRECTORY_ENTRY;
                  if (!throwTypeErrorResult) {
                    throwTypeErrorResult = null;
                  }
                  throwTypeErrorResult = loadId;
                  throwTypeErrorResult = c4;
                  obj5[4] = throwTypeErrorResult;
                  obj4[1] = obj5;
                  let obj6 = { source: null };
                  throwTypeErrorResult = c2;
                  obj6[0] = c2;
                  obj4[2] = obj6;
                  obj4[4] = {};
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = loadId;
                  const obj19 = obj1(loadId[14]);
                  obj4[5] = callback(loadId[16]).rejectWithMigratedError();
                  c7 = 3;
                  sessionId = 1;
                  const obj7 = { value: null, done: false };
                  obj7[0] = HTTP.put(obj4);
                  return obj7;
                }
              }
            } else if (2 === tmp7) {
              c6 = 0;
              guildId = c5;
              const body = guildId.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED) {
                let obj15 = callback(loadId[20]);
                obj15.openAgeGateModal(constants4.JOIN_LARGE_GUILD_UNDERAGE);
              }
              const body2 = guildId.body;
              let code1;
              if (body2 != null) {
                code1 = body2.code;
              }
              if (code1 === constants.TOO_MANY_USER_GUILDS) {
                let obj16 = callback(loadId[21]);
                if (obj16.hasIncreasedGuildCap(authStore.getCurrentUser())) {
                  tmp82(closure_20);
                } else {
                  tmp82(closure_19);
                }
              }
              const body3 = guildId.body;
              let code2;
              if (body3 != null) {
                code2 = body3.code;
              }
              if (code2 === constants.GUILD_AT_CAPACITY) {
                (function showGuildAtCapacityAlert() {
                  let obj = obj1(_undefined[12]);
                  obj = { title: null, body: null };
                  const intl = callback(_undefined[13]).intl;
                  obj[0] = intl.string(callback(_undefined[13]).t.ZZlox4);
                  const intl2 = callback(_undefined[13]).intl;
                  obj[1] = intl2.string(callback(_undefined[13]).t.ZUEGFn);
                  obj.show(obj);
                })();
              }
              let tmp95 = c7;
              if (c7) {
                const body4 = guildId.body;
                let code3;
                if (body4 != null) {
                  code3 = body4.code;
                }
                tmp95 = code3 === constants.UNKNOWN_GUILD;
              }
              if (tmp95) {
                throwTypeErrorResult = loadId;
                throwTypeErrorResult = c4;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = callback2(callback);
              }
              throwTypeErrorResult = loadId;
              throwTypeErrorResult = closure_1_13;
              throw closure_1_13;
            } else {
              if (3 === tmp7) {
                if (arg0 === 1) {
                  sessionId = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 0;
                  sessionId = 3;
                  let obj8 = { value: null, done: true };
                  obj8[0] = arg1;
                  return obj8;
                } else {
                  throwTypeErrorResult = loadId;
                  store = arg1;
                  throwTypeErrorResult = store;
                  if (null != store.body.join_request) {
                    obj4 = obj1(loadId[14]);
                    const obj9 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: null, request: null };
                    obj9[1] = callback;
                    obj9[2] = store.body.join_request;
                    obj4.dispatch(obj9);
                  }
                  if (null == store.getGuild(callback)) {
                    if (store.body.show_verification_form) {
                      if (c6) {
                        let obj12 = callback(loadId[17]);
                        obj12.transitionTo(closure_21.GUILD_MEMBER_VERIFICATION(callback));
                        c6 = 0;
                        sessionId = 3;
                        const obj10 = { value: null, done: true };
                        obj10[0] = store;
                        return obj10;
                      }
                    }
                  }
                  if (null != store.body.welcome_screen) {
                    obj6 = obj1(loadId[14]);
                    const obj11 = { type: "WELCOME_SCREEN_UPDATE", guildId: null, welcomeScreen: null };
                    obj11[1] = store.body.id;
                    obj11[2] = store.body.welcome_screen;
                    obj6.dispatch(obj11);
                  }
                  if (null != store.body.approximate_presence_count) {
                    obj8 = obj1(loadId[14]);
                    obj12 = { type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE", guildId: null, count: null };
                    obj12[1] = store.body.id;
                    obj12[2] = store.body.approximate_presence_count;
                    obj8.dispatch(obj12);
                  }
                  if (!c7) {
                    if (c6) {
                      c7 = 4;
                      sessionId = 1;
                      const obj13 = { value: null, done: false };
                      obj13[0] = callback(loadId[19])(loadId[18], loadId.paths);
                      return obj13;
                    }
                  }
                }
              } else if (4 === tmp7) {
                if (arg0 === 1) {
                  sessionId = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 0;
                  sessionId = 3;
                  const obj14 = { value: null, done: true };
                  obj14[0] = arg1;
                  return obj14;
                } else {
                  channelId = arg1.default;
                  obj15 = { guildId: null, returnChannelId: null };
                  obj15[0] = callback;
                  obj15[1] = c10;
                  c7 = 5;
                  sessionId = 1;
                  obj16 = { value: null, done: false };
                  obj16[0] = channelId(obj15);
                  return obj16;
                }
              } else if (arg0 === 1) {
                sessionId = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 0;
                sessionId = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c6 = 0;
              sessionId = 3;
              obj17 = { value: null, done: true };
              obj17[0] = store;
              return obj17;
            }
          } catch (throwTypeErrorResult) {
            c5 = throwTypeErrorResult;
            throwTypeErrorResult = c6;
            if (tmp4 === c6) {
              throwTypeErrorResult = tmp2;
              sessionId = tmp2;
              throw throwTypeErrorResult;
            } else {
              c7 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function waitForGuild(closure_0) {
  return new Promise((arg0) => {
    closure_0 = arg0;
    return closure_1_11.addConditionalChangeListener(() => {
      const guild = closure_2_11.getGuild(callback);
      let flag = null == guild;
      if (!flag) {
        callback(guild);
        flag = false;
      }
      return flag;
    });
  });
}
let closure_4 = ["icon", "unicodeEmoji"];
({ AbortCodes: closure_15, Endpoints: closure_16, JoinGuildSources: closure_17, UserFlags: closure_18, MAX_USER_GUILDS: closure_19, MAX_USER_GUILDS_PREMIUM: closure_20, Routes: closure_21, AnalyticEvents: closure_22 } = ME);
let result = require("set").fileFinishedImporting("actions/GuildActionCreators.tsx");

export default {
  joinGuild(closure_0, arg1) {
    const self = this;
    const apply = _joinGuild.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  waitForGuild,
  transitionToGuildSync(closure_0, arg1, page, messageId) {
    closure_1 = arg1;
    closure_2 = page;
    closure_3 = messageId;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
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
              closure_3 = tmp2;
              closure_2 = tmp3;
              c0 = undefined;
              let obj3;
              obj3 = function getChannelId(guildId) {
                let channelIdForGuildTransition = arg1;
                if (null == arg1) {
                  channelIdForGuildTransition = _undefined(guildId[22]).getChannelIdForGuildTransition(guildId);
                  const obj = _undefined(guildId[22]);
                }
                return channelIdForGuildTransition;
              };
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_27(closure_1_0);
              return obj1;
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              c0 = obj3(arg1.id, closure_2);
              let hasOwnPropertyResult;
              if (obj3 != null) {
                hasOwnPropertyResult = obj3.hasOwnProperty("welcomeModalChannelId");
              }
              if (hasOwnPropertyResult) {
                hasOwnPropertyResult = null == obj3.welcomeModalChannelId;
              }
              if (hasOwnPropertyResult) {
                obj3 = {};
                const merged = Object.assign(obj3);
                if (c0 == null) {
                  c0 = undefined;
                }
                obj3.welcomeModalChannelId = c0;
              }
              closure_1_1(closure_1_3[23])(closure_1_21.CHANNEL(c0, c0, closure_3), obj3);
              const _setImmediate = setImmediate;
              const promise = new Promise(setImmediate);
              c4 = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = promise;
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp36) {
          c5 = tmp;
          throw tmp36;
        }
      }
    })();
  },
  deleteGuild,
  selectGuild(guildId) {
    stopLurkingAll.stopLurking(guildId);
  },
  createGuild(guild) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_CREATE", guild };
    obj.dispatch(obj);
  },
  setServerMute(id, id2, mute) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { mute };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  setServerDeaf(id, id2, deaf) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { deaf };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  setChannel(guildId, closure_1_1, channel_id) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_16.GUILD_MEMBER(guildId, closure_1_1), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { channel_id };
    HTTP.patch(obj);
  },
  setMemberFlags(id, id2, flags) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { flags };
    HTTP.patch(obj);
  },
  kickUser(id, id1, c0) {
    const _require = id;
    closure_1 = id1;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_16.GUILD_MEMBER(id, id1), query: obj, oldFormErrors: true, rejectWithError: null };
    obj = { reason: c0, moderator_report_id: arg3 };
    obj[3] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    return HTTP.del(obj).then(() => {
      let obj = id1(closure_1_3[14]);
      obj = { type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: closure_0, userId: id1 };
      obj.dispatch(obj);
    });
  },
  setCommunicationDisabledUntil(moderator_report_id) {
    ({ guildId, userId, communicationDisabledUntilTimestamp, duration, reason, location: _location } = moderator_report_id);
    let obj = _modDef4679;
    obj = { url: closure_16.GUILD_MEMBER(guildId, userId), reason, body: { communication_disabled_until: communicationDisabledUntilTimestamp, moderator_report_id: moderator_report_id.moderatorReportId }, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { event: encodeProperties.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE, properties: null };
    obj1 = { guild_id: guildId, target_user_id: userId, duration: null, reason: null, communication_disabled_until: null, location: null };
    let tmp3 = null;
    if (null != duration) {
      tmp3 = duration;
    }
    obj1[2] = tmp3;
    let tmp4 = null;
    if (null != reason) {
      tmp4 = reason;
    }
    obj1[3] = tmp4;
    obj1[4] = communicationDisabledUntilTimestamp;
    let tmp5 = null;
    if (null != _location) {
      tmp5 = _location;
    }
    obj1[5] = tmp5;
    obj[1] = obj1;
    obj[4] = obj;
    obj[5] = sendRequest.rejectWithMigratedError();
    return obj.patch(obj);
  },
  banUser(id, closure_1_3, value, c1) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_16.GUILD_BAN(id, closure_1_3), reason: c1, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { delete_message_seconds: value, moderator_report_id: arg4 };
    obj[4] = sendRequest.rejectWithMigratedError();
    return HTTP.put(obj);
  },
  unbanUser(id, id2) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: closure_16.GUILD_BAN(id, id2), oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  banMultipleUsers(closure_1_0, closure_1_1, closure_2, banned_users, usePubSub) {
    let flag = usePubSub;
    if (usePubSub === undefined) {
      flag = false;
    }
    const HTTP = sendRequest.HTTP;
    let obj = closure_16;
    if (flag) {
      let BULK_GUILD_BAN_V2Result = obj.BULK_GUILD_BAN_V2(closure_1_0);
    } else {
      BULK_GUILD_BAN_V2Result = obj.BULK_GUILD_BAN(closure_1_0);
    }
    obj = { url: BULK_GUILD_BAN_V2Result, body: obj, reason: banned_users, oldFormErrors: true, rejectWithError: null };
    obj = { user_ids: closure_1_1, delete_message_seconds: closure_2 };
    obj[4] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  startBulkBan(arg0, arg1, arg2, arg3) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    const self = this;
    return callback(() => {
      let failed_users = 0;
      c6 = 0;
      let items = 0;
      return (function*() {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
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
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = tmp3;
                closure_1 = tmp7;
                closure_0 = undefined;
                closure_1 = undefined;
                c2 = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                const usePubSub = closure_1_1(banned_users[27]).getConfig({ location: "startBulkBan" }).usePubSub;
                closure_0 = usePubSub;
                c4 = 1;
                c5 = 2;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = items.banMultipleUsers(closure_1_0, closure_1_1, closure_2, banned_users, usePubSub);
                return obj1;
              }
            } else {
              if (1 === tmp7) {
                c4 = 0;
                let obj6 = closure_1_1(banned_users[14]);
                let obj2 = { type: "GUILD_BULK_BAN_FAILED", guildId: null };
                obj2[1] = closure_0;
                obj6.dispatch(obj2);
                c6 = 3;
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                closure_1 = arg1;
                if (!closure_0) {
                  obj = closure_1_1(banned_users[14]);
                  const obj4 = { type: "GUILD_BULK_BAN_STARTED", guildId: null };
                  obj4[1] = closure_0;
                  obj.dispatch(obj4);
                  if (closure_1_0) {
                    c4 = 0;
                  } else {
                    const body = closure_1_1.body;
                    closure_0 = body;
                    if (body == null) {
                      closure_0 = {};
                    }
                    closure_2 = closure_0;
                    banned_users = closure_2.banned_users;
                    if (undefined === banned_users) {
                      items = [];
                    } else {
                      items = banned_users;
                    }
                    failed_users = closure_2.failed_users;
                    if (undefined === failed_users) {
                      let items1 = [];
                    } else {
                      items1 = failed_users;
                    }
                    c6 = items1;
                    obj2 = closure_1_1(banned_users[14]);
                    const obj5 = { type: "GUILD_BULK_BAN_UPDATE", guildId: null, bulkBan: null };
                    obj5[1] = closure_0;
                    obj6 = { bannedUsers: null, failedUsers: null, targetUserIds: null };
                    obj6[0] = c4;
                    obj6[1] = c6;
                    obj6[2] = closure_1;
                    obj5[2] = obj6;
                    obj2.dispatch(obj5);
                  }
                }
              }
              c4 = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp45) {
            c3 = tmp45;
            if (tmp4 === c4) {
              c6 = tmp2;
              throw tmp45;
            } else {
              c5 = tmp;
            }
          }
        }
      })();
    })();
  },
  createRole(id, c2, arg2) {
    closure_0 = id;
    closure_1 = c2;
    closure_2 = arg2;
    closure_3 = arg3;
    let obj = arg4;
    if (arg4 === undefined) {
      obj = {};
    }
    let flag = obj.skipSelect;
    if (flag === undefined) {
      flag = false;
    }
    return callback(function*() {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              let body;
              body = undefined;
              let stringResult = closure_1_1;
              if (null == closure_1_1) {
                const intl = closure_1_0(closure_1_3[13]).intl;
                stringResult = intl.string(closure_1_0(closure_1_3[13]).t.QBMHvB);
              }
              obj1 = { name: null, color: null, colors: null, permissions: null };
              obj1[0] = stringResult;
              body = callback;
              if (callback == null) {
                body = 0;
              }
              obj1[1] = body;
              body = closure_1_3;
              if (closure_1_3 == null) {
                c2 = tmp37;
                if (tmp37 == null) {
                  c2 = 0;
                }
                let obj2 = { primary_color: null, secondary_color: null, tertiary_color: null };
                obj2[0] = c2;
                body = obj2;
              }
              obj1[2] = body;
              obj1[3] = callback(closure_1_3[28]).NONE;
              c6 = 1;
              const HTTP = closure_1_0(closure_1_3[16]).HTTP;
              const obj3 = { url: null, oldFormErrors: true, body: null, rejectWithError: null };
              obj3[0] = closure_1_16.GUILD_ROLES(closure_1_0);
              obj3[2] = obj1;
              obj3[3] = closure_1_0(closure_1_3[16]).rejectWithMigratedError();
              c7 = 2;
              c8 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj3);
              return obj4;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            callback = closure_5;
            const tmp30 = new closure_1_1(closure_1_3[31])(callback);
            throw tmp30;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            body = arg1;
            body = body.body;
            body.permissions = callback(closure_1_3[29]).deserialize(body.permissions);
            if (!closure_4) {
              obj = closure_1_1(closure_1_3[14]);
              const obj6 = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId: null, role: null };
              obj6[1] = closure_1_0.body.id;
              obj6[2] = closure_1_1;
              obj.dispatch(obj6);
            }
            obj2 = closure_1_1(closure_1_3[30]);
            const result = obj2.checkGuildTemplateDirty(body);
            c6 = 0;
            c8 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = closure_1_1;
            return obj7;
          }
        } catch (tmp50) {
          closure_5 = tmp50;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp50;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  },
  updateRole(id, id2, arg2) {
    closure_0 = id;
    closure_1 = id2;
    closure_2 = arg2;
    return callback(function*() {
      closure_1 = tmp2;
      closure_0 = tmp5;
      const icon = c2.icon;
      const tmp32 = closure_1_5(c2, closure_1_4);
      if (null === icon) {
        const tmp13 = icon;
      } else {
        let startsWithResult;
        if (icon != null) {
          startsWithResult = icon.startsWith("data:");
        }
      }
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_16.GUILD_ROLE(closure_1_0, closure_1_1);
      const obj2 = {};
      const merged = Object.assign(tmp32);
      obj2.icon = tmp13;
      obj2.unicode_emoji = c2.unicodeEmoji;
      obj1[1] = obj2;
      const obj5 = closure_1_0(530);
      obj1[3] = obj5.rejectWithMigratedError();
      closure_0 = yield HTTP.patch(obj1);
      const obj = closure_1_1(6133);
      const result = obj.checkGuildTemplateDirty(closure_0);
      return closure_0;
    })();
  },
  updateRolePermissions(c0, c1, permissions) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_16.GUILD_ROLE(c0, c1), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { permissions };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  deleteRole(closure_1_4, id) {
    const _require = closure_1_4;
    const HTTP = _require(530).HTTP;
    const obj = { url: closure_16.GUILD_ROLE(closure_1_4, id), oldFormErrors: true, rejectWithError: true };
    HTTP.del({ url: closure_16.GUILD_ROLE(closure_1_4, id), oldFormErrors: true, rejectWithError: true }).then(() => {
      const result = closure_1_1(closure_1_3[30]).checkGuildTemplateDirty(closure_0);
    });
  },
  batchChannelUpdate(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return callback(function*() {
      closure_1 = tmp2;
      closure_0 = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_16.GUILD_CHANNELS(closure_1_0);
      obj1[1] = closure_1_1;
      obj1[3] = closure_1_0(530).rejectWithMigratedError();
      closure_0 = yield HTTP.patch(obj1);
      const obj = closure_1_1(6133);
      const result = obj.checkGuildTemplateDirty(closure_0);
      return closure_0;
    })();
  },
  batchRoleUpdate(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return callback(function*() {
      closure_1 = tmp2;
      closure_0 = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_16.GUILD_ROLES(closure_1_0);
      obj1[1] = closure_1_1;
      obj1[3] = closure_1_0(530).rejectWithMigratedError();
      closure_0 = yield HTTP.patch(obj1);
      const obj = closure_1_1(6133);
      const result = obj.checkGuildTemplateDirty(closure_0);
      return closure_0;
    })();
  },
  requestMembers(arg0) {
    let query = arg1;
    if (arg1 === undefined) {
      query = "";
    }
    let limit = arg2;
    if (arg2 === undefined) {
      limit = 10;
    }
    let presences = arg3;
    if (arg3 === undefined) {
      presences = true;
    }
    let guildIds = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      guildIds = items;
    }
    return dispatcherDefault.dispatch({ type: "GUILD_MEMBERS_REQUEST", guildIds, query, limit, presences });
  },
  searchRecentMembers(guildId) {
    let obj = arg1;
    if (arg1 == null) {
      obj = {};
    }
    ({ query, continuationToken } = obj);
    obj = { type: "GUILD_SEARCH_RECENT_MEMBERS", guildId, query, continuationToken };
    return dispatcherDefault.dispatch(obj);
  },
  requestMembersById(id1, items, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let obj = dispatcherDefault;
    let tmp = id1;
    if (!Array.isArray(id1)) {
      items = [id1];
      tmp = items;
    }
    obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: tmp, userIds: null, presences: null };
    let tmp2 = items;
    if (!Array.isArray(items)) {
      const items1 = [items];
      tmp2 = items1;
    }
    obj[2] = tmp2;
    obj[3] = flag;
    return obj.dispatch(obj);
  },
  move(fromIndex, toIndex, fromFolderIndex, toFolderIndex) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_MOVE", fromIndex, toIndex, fromFolderIndex, toFolderIndex };
    obj.dispatch(obj);
  },
  moveById(id, id2, arg2, arg3) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let flag2 = arg3;
    if (arg3 === undefined) {
      flag2 = false;
    }
    if (id === id2) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: " + id);
      throw error;
    } else {
      let obj = dispatcherDefault;
      obj = { type: "GUILD_MOVE_BY_ID", sourceId: null, targetId: null, moveToBelow: null, combine: null };
      obj[1] = id;
      obj[2] = id2;
      obj[3] = flag;
      obj[4] = flag2;
      obj.dispatch(obj);
    }
  },
  createGuildFolderLocal(items, name) {
    let obj = expandEventPropertiesDefault;
    obj.track(constants.GUILD_FOLDER_CREATED);
    obj = { type: "GUILD_FOLDER_CREATE_LOCAL", sourceIds: items, name };
    dispatcherDefault.dispatch(obj);
  },
  editGuildFolderLocal(targetId, sourceIds, name) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_FOLDER_EDIT_LOCAL", targetId, sourceIds, name };
    obj.dispatch(obj);
  },
  deleteGuildFolderLocal(targetId) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_FOLDER_DELETE_LOCAL", targetId };
    obj.dispatch(obj);
  },
  toggleGuildFolderExpand(closure_0) {
    let obj = expandEventPropertiesDefault;
    let str = "expanded";
    if (isFolderExpandedResult) {
      str = "collapsed";
    }
    obj.track(constants.GUILD_FOLDER_CLICKED, { source: "sidebar", action: str });
    isFolderExpandedResult = folderExpanded.isFolderExpanded(closure_0);
    const tmp2 = importDefault;
    obj = { type: "TOGGLE_GUILD_FOLDER_EXPAND", folderId: closure_0 };
    dispatcherDefault.dispatch(obj);
  },
  setGuildFolderExpanded(folderId, expanded) {
    let obj = dispatcherDefault;
    obj = { type: "SET_GUILD_FOLDER_EXPANDED", folderId, expanded };
    obj.dispatch(obj);
  },
  collapseAllFolders() {
    dispatcherDefault.dispatch({ type: "GUILD_FOLDER_COLLAPSE" });
  },
  nsfwAgree(guildId) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_NSFW_AGREE", guildId };
    obj.dispatch(obj);
  },
  nsfwReturnToSafety(guildId) {
    const tmp2 = getPreviousSafeRouteForNsfwReturnDefault(guildId);
    if (null == tmp2) {
      if (null != guildId) {
        const defaultChannel = store.getDefaultChannel(guildId);
        if (null != defaultChannel) {
          if (!obj3.isChannelContentGated(defaultChannel)) {
            let tmp11Result = tmp11(6139);
            if (!tmp11Result.isChannelSpoilerGated(defaultChannel)) {
              tmp11Result = tmp11(1222);
              tmp11Result.transitionTo(closure_21.CHANNEL(guildId, defaultChannel.id));
            }
          }
          obj3 = shouldShowAgeGateForVoiceChannel;
        }
        transitionTo.transitionTo(closure_21.FRIENDS, { navigationReplace: false, openChannel: true });
        const obj6 = transitionTo;
      } else {
        transitionTo.transitionTo(closure_21.FRIENDS, { navigationReplace: false, openChannel: true });
        const obj2 = transitionTo;
      }
    } else {
      transitionTo.transitionTo(closure_21.CHANNEL(tmp2.guildId, tmp2.channelId));
      const obj = transitionTo;
    }
  },
  spoilerAgree(channelId) {
    let obj = dispatcherDefault;
    obj = { type: "CHANNEL_SPOILER_AGREE", channelId };
    obj.dispatch(obj);
  },
  clearSpoilerAgree(id) {
    let obj = dispatcherDefault;
    obj = { type: "CHANNEL_SPOILER_AGREE_CLEAR", channelId: id };
    obj.dispatch(obj);
  },
  escapeToDefaultChannel(guildId) {
    const defaultChannel = store.getDefaultChannel(guildId);
    if (null != defaultChannel) {
      transitionTo.transitionTo(closure_21.CHANNEL(guildId, defaultChannel.id));
      const obj2 = transitionTo;
    } else {
      transitionTo.transitionTo(closure_21.FRIENDS);
      const obj = transitionTo;
    }
  },
  fetchApplications(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
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
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              let body = tmp5;
              body = undefined;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_16.GUILD_APPLICATIONS(closure_1_0);
              obj1[2] = closure_1_0(530).rejectWithMigratedError();
              if (null != closure_1_1) {
                const obj2 = { channel_id: null };
                obj2[0] = tmp24;
                obj1.query = obj2;
              }
              const HTTP = closure_1_0(530).HTTP;
              c2 = 1;
              dependencyMap = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            body = arg1.body;
            obj = closure_1_1(709);
            const obj5 = { type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: null, applications: null };
            obj5[1] = body;
            obj5[2] = body;
            obj.dispatch(obj5);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          dependencyMap = tmp;
          throw tmp14;
        }
      }
    })();
  },
  fetchGuildBansBatch(guildId, arg1, arg2) {
    closure_0 = guildId;
    let num = arg1;
    if (arg1 === undefined) {
      num = 1000;
    }
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = null;
    }
    c2 = tmp;
    return callback(function*() {
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
              obj1 = { limit: null };
              obj1[0] = c1;
              if (null != closure_1_2) {
                obj1.after = closure_1_2;
              }
              const HTTP = v0(closure_1_3[16]).HTTP;
              let obj2 = { url: null, oldFormErrors: true, query: null, rejectWithError: null };
              obj2[0] = closure_1_16.GUILD_BANS(v0);
              obj2[2] = obj1;
              obj2 = v0(closure_1_3[16]);
              obj2[3] = obj2.rejectWithMigratedError();
              const value = HTTP.get(obj2);
              c1 = 1;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = value.then((bans) => {
                let obj = v1(closure_1_3[14]);
                obj = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, guildId: c0 };
                obj.dispatch(obj);
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          v0 = tmp;
          throw tmp9;
        }
      }
    })();
  },
  searchGuildBans(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    let num = arg3;
    if (arg3 === undefined) {
      num = 10;
    }
    return callback(function*() {
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
              obj1 = { limit: null };
              obj1[0] = closure_1_3;
              let tmp5 = null != closure_1_2;
              if (tmp5) {
                tmp5 = arr.length > 0;
              }
              if (tmp5) {
                obj1.user_ids = arr;
              }
              let tmp6 = null != c1;
              if (tmp6) {
                tmp6 = str.trim().length > 0;
              }
              if (tmp6) {
                obj1.query = str;
              }
              const HTTP = v0(closure_1_3[16]).HTTP;
              let obj2 = { url: null, oldFormErrors: true, query: null, rejectWithError: null };
              obj2[0] = closure_1_16.GUILD_BANS_SEARCH(v0);
              obj2[2] = obj1;
              obj2 = v0(closure_1_3[16]);
              obj2[3] = obj2.rejectWithMigratedError();
              const value = HTTP.get(obj2);
              c1 = 1;
              v0 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = value.then((bans) => {
                let obj = v1(closure_1_3[14]);
                obj = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, userIds: closure_2, guildId: c0 };
                obj.dispatch(obj);
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          v0 = tmp;
          throw tmp11;
        }
      }
    })();
  },
  fetchGuildBans(arg0) {
    closure_0 = arg0;
    return callback(function*() {
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
              const HTTP = v0(closure_1_3[16]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_16.GUILD_BANS(v0);
              obj1[2] = v0(closure_1_3[16]).rejectWithMigratedError();
              const value = HTTP.get(obj1);
              c1 = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = value.then((bans) => {
                let obj = v1(table[14]);
                obj = { type: "GUILD_SETTINGS_LOADED_BANS", bans: bans.body };
                obj.dispatch(obj);
              });
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  fetchGuildRoleConnectionsEligibility(guildId, id) {
    const _require = id;
    const HTTP = _require(530).HTTP;
    let obj = { url: closure_16.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(guildId, id), oldFormErrors: true, rejectWithError: _require(530).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      body = body.body;
      let obj = closure_1_1(closure_1_3[14]);
      obj = { type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS", roleId: closure_0, roleConnectionEligibility: body };
      obj.dispatch(obj);
      return body;
    });
  },
  assignGuildRoleConnection(c0, id) {
    closure_0 = c0;
    closure_1 = id;
    return callback(function*() {
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
              const HTTP = v0(closure_1_3[16]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_16.GUILD_ROLE_CONNECTIONS_ASSIGN(v0, c1);
              obj1[2] = v0(closure_1_3[16]).rejectWithMigratedError();
              c1 = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  unassignGuildRoleConnection(closure_1, id) {
    closure_0 = closure_1;
    closure_1 = id;
    return callback(function*() {
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
              const HTTP = v0(closure_1_3[16]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_16.GUILD_ROLE_CONNECTIONS_UNASSIGN(v0, c1);
              obj1[2] = v0(closure_1_3[16]).rejectWithMigratedError();
              c1 = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  getGuildRoleConnectionsConfigurations(guildId) {
    closure_0 = guildId;
    return callback(function*() {
      const HTTP = v0(closure_1_3[16]).HTTP;
      obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_16.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(v0);
      obj1[2] = v0(closure_1_3[16]).rejectWithMigratedError();
      yield HTTP.get(obj1);
      return arg1.body;
    })();
  }
};
export { waitForGuild };