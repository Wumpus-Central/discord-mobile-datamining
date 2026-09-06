// === Module 5520: GuildActionCreators ===

// Module 5520 (GuildActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import AgeGateUtils from "AgeGateUtils" /* 4771 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import LurkerActionCreators from "LurkerActionCreators" /* 7321 */;
import GuildTemplateTooltipActionCreatorsDefault from "GuildTemplateTooltipActionCreators" /* 7323 */;
import getPreviousSafeRouteForNsfwReturnDefault from "getPreviousSafeRouteForNsfwReturn" /* 7327 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7329 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import BulkBanStore from "BulkBanStore" /* 5521 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore" /* 5439 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function showTooManyUserGuildsAlert(quantity) {
  let obj = { title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.cTaRxF);
  const intl2 = util.intl;
  obj = { quantity };
  obj.body = intl2.formatToPlainString(util.t["VSd+Aj"], obj);
  obj.show(obj);
}
function deleteGuild(id) {
  let obj = { type: "GUILD_DELETE", guild: null };
  obj = { id };
  obj.guild = obj;
  obj.dispatch(obj);
}
let closure_26 = async function _joinGuild(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          const loadId = tmp7;
          closure_131_1 = undefined;
          closure_131_0 = guildId;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          closure_131_1 = obj1;
          let source;
          let loadId2;
          let lurkLocation;
          let autoNavigate;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          let currentUser;
          let guildId2;
          closure_131_10 = undefined;
          closure_131_11 = undefined;
          closure_131_12 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          source = closure_131_1.source;
          loadId2 = closure_131_1.loadId;
          lurkLocation = closure_131_1.lurkLocation;
          autoNavigate = closure_131_1.autoNavigate;
          let tmp107 = undefined === autoNavigate;
          if (!tmp107) {
            tmp107 = autoNavigate;
          }
          closure_131_6 = tmp107;
          const lurker = closure_131_1.lurker;
          c2 = lurker;
          if (lurker == null) {
            c2 = false;
          }
          closure_131_7 = c2;
          currentUser = closure_132_14.getCurrentUser();
          let hasFlagResult;
          if (currentUser != null) {
            hasFlagResult = obj18.hasFlag(closure_132_18.QUARANTINED);
          }
          if (hasFlagResult) {
            closure_132_1(closure_132_3[15])();
            const promise = new Promise((arg0, fn) => {
              const error = new Error();
              return fn(error);
            });
            c8 = 3;
            const obj3 = { value: promise, done: true };
            return obj3;
          } else {
            closure_132_1(closure_132_3[14]).wait(() => {
              closure_1(loadId[14]);
              const obj = { type: "GUILD_JOIN", guildId, lurker, source, loadId };
              return obj.dispatch(obj);
            });
            c6 = 1;
            guildId2 = closure_132_13.getGuildId();
            let channelId = null;
            if (closure_131_0 === guildId2) {
              channelId = null;
              if (null != closure_132_11.getGuild(closure_131_0)) {
                channelId = closure_132_12.getChannelId(closure_131_0);
              }
            }
            closure_131_10 = channelId;
            const HTTP = closure_132_0(closure_132_3[16]).HTTP;
            const request = { url: closure_132_16.GUILD_JOIN(closure_131_0), query: null, context: null, oldFormErrors: true, body: null, rejectWithError: null };
            let obj4 = { lurker: closure_131_7, session_id: null, recommendation_load_id: null, location: null, from_directory: null };
            let sessionId = null;
            if (closure_131_7) {
              sessionId = closure_132_8.getSessionId();
            }
            obj4.session_id = sessionId;
            obj4.recommendation_load_id = loadId2;
            let tmp150 = null;
            if (closure_131_7) {
              tmp150 = null;
              if (null != lurkLocation) {
                tmp150 = lurkLocation;
              }
            }
            obj4.location = tmp150;
            let tmp157 = source === closure_132_17.DIRECTORY_ENTRY;
            if (!tmp157) {
              tmp157 = null;
            }
            obj4.from_directory = tmp157;
            request.query = obj4;
            const obj5 = { source };
            request.context = obj5;
            request.body = {};
            const obj19 = closure_132_1(closure_132_3[14]);
            request.rejectWithError = closure_132_0(closure_132_3[16]).rejectWithMigratedError();
            c7 = 3;
            c8 = 1;
            let obj6 = { value: HTTP.put(request), done: false };
            return obj6;
          }
          obj18 = currentUser;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_13 = closure_5;
        const body = closure_131_13.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (code === closure_132_15.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED) {
          let obj15 = closure_132_0(closure_132_3[20]);
          obj15.openAgeGateModal(closure_132_23.JOIN_LARGE_GUILD_UNDERAGE);
        }
        const body2 = closure_131_13.body;
        let code1;
        if (body2 != null) {
          code1 = body2.code;
        }
        if (code1 === closure_132_15.TOO_MANY_USER_GUILDS) {
          let obj16 = closure_132_0(closure_132_3[21]);
          if (obj16.hasIncreasedGuildCap(closure_132_14.getCurrentUser())) {
            closure_132_24(closure_132_20);
          } else {
            closure_132_24(closure_132_19);
          }
        }
        const body3 = closure_131_13.body;
        let code2;
        if (body3 != null) {
          code2 = body3.code;
        }
        if (code2 === closure_132_15.GUILD_AT_CAPACITY) {
          (function showGuildAtCapacityAlert() {
            closure_1_1(loadId[12]);
            const obj = { title: null, body: null };
            const intl = guildId(loadId[13]).intl;
            obj.title = intl.string(guildId(loadId[13]).t.ZZlox4);
            const intl2 = guildId(loadId[13]).intl;
            obj.body = intl2.string(guildId(loadId[13]).t.ZUEGFn);
            obj.show(obj);
          })();
        }
        let tmp94 = closure_131_7;
        if (closure_131_7) {
          const body4 = closure_131_13.body;
          let code3;
          if (body4 != null) {
            code3 = body4.code;
          }
          tmp94 = code3 === closure_132_15.UNKNOWN_GUILD;
        }
        if (tmp94) {
          closure_132_25(closure_131_0);
        }
        throw closure_131_13;
      } else {
        if (3 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_131_11 = value;
            if (null != closure_131_11.body.join_request) {
              obj4 = closure_132_1(closure_132_3[14]);
              let obj8 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_131_0, request: closure_131_11.body.join_request };
              obj4.dispatch(obj8);
            }
            if (null == closure_132_11.getGuild(closure_131_0)) {
              if (closure_131_11.body.show_verification_form) {
                if (closure_131_6) {
                  let obj12 = closure_132_0(closure_132_3[17]);
                  const result = obj12.transitionToMemberVerification(closure_131_0);
                  c6 = 0;
                  c8 = 3;
                  const obj9 = { value: closure_131_11, done: true };
                  return obj9;
                }
              }
            }
            if (null != closure_131_11.body.welcome_screen) {
              obj6 = closure_132_1(closure_132_3[14]);
              const obj10 = { type: "WELCOME_SCREEN_UPDATE", guildId: closure_131_11.body.id, welcomeScreen: closure_131_11.body.welcome_screen };
              obj6.dispatch(obj10);
            }
            if (null != closure_131_11.body.approximate_presence_count) {
              obj8 = closure_132_1(closure_132_3[14]);
              const obj11 = { type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE", guildId: closure_131_11.body.id, count: closure_131_11.body.approximate_presence_count };
              obj8.dispatch(obj11);
            }
            if (!closure_131_7) {
              if (closure_131_6) {
                c7 = 4;
                c8 = 1;
                obj12 = { value: closure_132_0(closure_132_3[19])(closure_132_3[18], closure_132_3.paths), done: false };
                return obj12;
              }
            }
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_131_12 = value.default;
            const obj14 = { guildId: closure_131_0, returnChannelId: closure_131_10 };
            c7 = 5;
            c8 = 1;
            obj15 = { value: closure_131_12(obj14), done: false };
            return obj15;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
        c6 = 0;
        c8 = 3;
        obj16 = { value: closure_131_11, done: true };
        return obj16;
      }
    } catch (tmp172) {
      closure_5 = tmp172;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp172;
      } else {
        c7 = tmp;
      }
    }
  }
};
function waitForGuild(id) {
  closure_0 = id;
  return new Promise((arg0) => {
    closure_0 = arg0;
    return GuildStore.addConditionalChangeListener(() => {
      const guild = GuildStore.getGuild(closure_0);
      let flag = null == guild;
      if (!flag) {
        closure_0(guild);
        flag = false;
      }
      return flag;
    });
  });
}
let closure_4 = ["icon", "unicodeEmoji"];
const Constants = fn(1074);
({ AbortCodes: closure_15, Endpoints: closure_16, JoinGuildSources: closure_17, UserFlags: closure_18, MAX_USER_GUILDS: closure_19, MAX_USER_GUILDS_PREMIUM: closure_20, Routes: closure_21, AnalyticEvents: closure_22 } = Constants);
const AgeGateSource = fn(1098).AgeGateSource;
const size = fn(2);
let result = size.fileFinishedImporting("actions/GuildActionCreators.tsx");

export default {
  joinGuild() {
    const self = this;
    const apply = closure_26.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  waitForGuild,
  transitionToGuildSync(id, arg1, ROLE_SUBSCRIPTIONS, messageId) {
    closure_0 = id;
    closure_1 = arg1;
    closure_2 = ROLE_SUBSCRIPTIONS;
    closure_3 = messageId;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_130_0 = undefined;
              closure_130_1 = undefined;
              function getChannelId(guildId, arg1) {
                let channelIdForGuildTransition = arg1;
                if (null == arg1) {
                  channelIdForGuildTransition = welcomeModalChannelId(dependencyMap[22]).getChannelIdForGuildTransition(guildId);
                  const obj = welcomeModalChannelId(dependencyMap[22]);
                }
                return channelIdForGuildTransition;
              }
              c4 = 1;
              c5 = 1;
              const obj1 = { value: waitForGuild(closure_0), done: false };
              return obj1;
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_130_0 = getChannelId(value.id, closure_131_2);
              closure_130_1 = closure_131_1;
              let hasOwnPropertyResult;
              if (closure_131_1 != null) {
                hasOwnPropertyResult = closure_131_1.hasOwnProperty("welcomeModalChannelId");
              }
              if (hasOwnPropertyResult) {
                hasOwnPropertyResult = null == closure_131_1.welcomeModalChannelId;
              }
              if (hasOwnPropertyResult) {
                const obj3 = {};
                const merged = Object.assign(closure_131_1);
                let welcomeModalChannelId = closure_130_0;
                if (closure_130_0 == null) {
                  welcomeModalChannelId = undefined;
                }
                obj3.welcomeModalChannelId = welcomeModalChannelId;
                closure_130_1 = obj3;
              }
              getChannelId(tmp2[23])(closure_1_21.CHANNEL(closure_131_0, closure_130_0, closure_131_3), closure_130_1);
              const _setImmediate = setImmediate;
              const promise = new Promise(setImmediate);
              c4 = 2;
              c5 = 1;
              const obj4 = { value: promise, done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
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
    LurkerActionCreators.stopLurking(guildId);
  },
  createGuild(guild) {
    const obj = { type: "GUILD_CREATE", guild };
    obj.dispatch(obj);
  },
  setServerMute(id, id2, mute) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: value2.GUILD_MEMBER(id, id2), body: { mute }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  setServerDeaf(id, id2, deaf) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: value2.GUILD_MEMBER(id, id2), body: { deaf }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  setChannel(guildId, userId, channel_id) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: value2.GUILD_MEMBER(guildId, userId), body: { channel_id }, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request);
  },
  setMemberFlags(id, id2, flags) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: value2.GUILD_MEMBER(id, id2), body: { flags }, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request);
  },
  kickUser(id, id1, c0, moderator_report_id) {
    const _require = id;
    const userId = id1;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_16.GUILD_MEMBER(id, id1), query: { reason, moderator_report_id }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    let obj = { reason, moderator_report_id };
    const obj3 = require("HTTPUtils");
    return HTTP.del(request).then(() => {
      const obj = { type: "GUILD_MEMBER_REMOVE_LOCAL", guildId, userId };
      obj.dispatch(obj);
    });
  },
  setCommunicationDisabledUntil(moderator_report_id) {
    ({ guildId, userId, communicationDisabledUntilTimestamp, duration, reason, location: _location } = moderator_report_id);
    const request = { url: value2.GUILD_MEMBER(guildId, userId), reason, body: { communication_disabled_until: communicationDisabledUntilTimestamp, moderator_report_id: moderator_report_id.moderatorReportId }, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    let obj = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE, properties: null };
    obj = { guild_id: guildId, target_user_id: userId, duration: null, reason: null, communication_disabled_until: null, location: null };
    let tmp3 = null;
    if (null != duration) {
      tmp3 = duration;
    }
    obj.duration = tmp3;
    let tmp4 = null;
    if (null != reason) {
      tmp4 = reason;
    }
    obj.reason = tmp4;
    obj.communication_disabled_until = communicationDisabledUntilTimestamp;
    let tmp5 = null;
    if (null != _location) {
      tmp5 = _location;
    }
    obj.location = tmp5;
    obj.properties = obj;
    request.trackedActionData = obj;
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.patch(request);
  },
  banUser(id, id2, value, c1, moderator_report_id) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: value2.GUILD_BAN(id, id2), reason: importDefault, body: { delete_message_seconds: value, moderator_report_id }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.put(request);
  },
  unbanUser(id, id2) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: value2.GUILD_BAN(id, id2), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  banMultipleUsers(arg0, user_ids, delete_message_seconds, reason) {
    let flag = usePubSub;
    if (usePubSub === undefined) {
      flag = false;
    }
    const HTTP = HTTPUtils.HTTP;
    if (flag) {
      let BULK_GUILD_BAN_V2Result = value2.BULK_GUILD_BAN_V2(arg0);
    } else {
      BULK_GUILD_BAN_V2Result = value2.BULK_GUILD_BAN(arg0);
    }
    const request = { url: BULK_GUILD_BAN_V2Result, body: { user_ids, delete_message_seconds }, reason, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  startBulkBan(arg0, arg1, arg2, arg3) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    const self = this;
    return (async () => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              let banned_users;
              closure_129_4 = undefined;
              let failed_users;
              closure_129_6 = undefined;
              const usePubSub = closure_1(tmp45[27]).getConfig({ location: "startBulkBan" }).usePubSub;
              closure_129_0 = usePubSub;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj1 = { value: self.banMultipleUsers(closure_0, closure_1, closure_2, tmp45, usePubSub), done: false };
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              let obj6 = closure_1(tmp45[14]);
              let obj2 = { type: "GUILD_BULK_BAN_FAILED", guildId: closure_130_0 };
              obj6.dispatch(obj2);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_129_1 = value;
              if (!closure_129_0) {
                obj = closure_1(tmp45[14]);
                const obj4 = { type: "GUILD_BULK_BAN_STARTED", guildId: closure_130_0 };
                obj.dispatch(obj4);
                if (closure_129_0) {
                  c4 = 0;
                } else {
                  const body = closure_129_1.body;
                  closure_0 = body;
                  if (body == null) {
                    closure_0 = {};
                  }
                  closure_129_2 = closure_0;
                  banned_users = closure_129_2.banned_users;
                  if (undefined === banned_users) {
                    let items = [];
                  } else {
                    items = banned_users;
                  }
                  closure_129_4 = items;
                  failed_users = closure_129_2.failed_users;
                  if (undefined === failed_users) {
                    let items1 = [];
                  } else {
                    items1 = failed_users;
                  }
                  closure_129_6 = items1;
                  obj2 = closure_1(tmp45[14]);
                  const obj5 = { type: "GUILD_BULK_BAN_UPDATE", guildId: closure_130_0, bulkBan: null };
                  obj6 = { bannedUsers: closure_129_4, failedUsers: closure_129_6, targetUserIds: closure_130_1 };
                  obj5.bulkBan = obj6;
                  obj2.dispatch(obj5);
                }
              }
            }
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp45) {
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp45;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  },
  createRole(id, arg1, arg2, arg3) {
    closure_0 = id;
    closure_1 = arg1;
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
    return (async () => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_4 = tmp3;
              dependencyMap = tmp7;
              closure_131_0 = undefined;
              let body;
              let stringResult = closure_1;
              if (null == closure_1) {
                const intl = color(1114).intl;
                stringResult = intl.string(color(1114).t.QBMHvB);
              }
              const obj1 = { name: stringResult, color: null, colors: null, permissions: null };
              color = closure_2;
              if (closure_2 == null) {
                color = 0;
              }
              obj1.color = color;
              let obj2 = dependencyMap;
              if (dependencyMap == null) {
                let primary_color = closure_2;
                if (closure_2 == null) {
                  primary_color = 0;
                }
                obj2 = { primary_color, secondary_color: null, tertiary_color: null };
              }
              obj1.colors = obj2;
              obj1.permissions = primary_color(4204).NONE;
              c6 = 1;
              const HTTP = color(1272).HTTP;
              const request = { url: closure_1_16.GUILD_ROLES(closure_0), oldFormErrors: true, body: obj1, rejectWithError: color(1272).rejectWithMigratedError() };
              c7 = 2;
              c8 = 1;
              const obj3 = { value: HTTP.post(request), done: false };
              return obj3;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            closure_131_2 = closure_5;
            const tmp30 = new obj2(4241)(closure_131_2);
            throw tmp30;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_131_0 = value;
            body = closure_131_0.body;
            const deserializer = primary_color(1086);
            body.permissions = deserializer.deserialize(body.permissions);
            if (!closure_132_4) {
              obj = obj2(573);
              const obj5 = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId: closure_131_0.body.id, role: body };
              obj.dispatch(obj5);
            }
            obj2 = obj2(7323);
            const result = obj2.checkGuildTemplateDirty(closure_132_0);
            c6 = 0;
            c8 = 3;
            const obj6 = { value: body, done: true };
            return obj6;
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
    return (async () => {
      const icon = closure_2.icon;
      if (null === icon) {
        const tmp13 = icon;
      } else if (icon != null) {
        icon.startsWith("data:");
      }
      const HTTP = tmp5(1272).HTTP;
      const request = { url: closure_1_16.GUILD_ROLE(tmp5, tmp2), body: null, oldFormErrors: true, rejectWithError: null };
      const obj1 = {};
      const merged = Object.assign(_objectWithoutProperties(closure_2, closure_1_4));
      obj1.icon = tmp13;
      obj1.unicode_emoji = closure_2.unicodeEmoji;
      request.body = obj1;
      request.rejectWithError = tmp5(1272).rejectWithMigratedError();
      await HTTP.patch(request);
      closure_128_0 = value;
      _objectWithoutProperties(closure_2, closure_1_4);
      const result = tmp2(7323).checkGuildTemplateDirty(closure_129_0);
      return closure_128_0;
    })();
  },
  updateRolePermissions(id, id2, permissions) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: value2.GUILD_ROLE(id, id2), body: { permissions }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  deleteRole(id, id2) {
    const _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    const obj = { url: closure_16.GUILD_ROLE(id, id2), oldFormErrors: true, rejectWithError: true };
    HTTP.del({ url: closure_16.GUILD_ROLE(id, id2), oldFormErrors: true, rejectWithError: true }).then(() => {
      const result = GuildTemplateTooltipActionCreatorsDefault.checkGuildTemplateDirty(closure_0);
    });
  },
  batchChannelUpdate(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      const body = tmp2;
      const HTTP = tmp5(1272).HTTP;
      const request = { url: closure_1_16.GUILD_CHANNELS(tmp5), body, oldFormErrors: true, rejectWithError: tmp5(1272).rejectWithMigratedError() };
      await HTTP.patch(request);
      closure_128_0 = value;
      const result = body(7323).checkGuildTemplateDirty(closure_129_0);
      return closure_128_0;
    })();
  },
  batchRoleUpdate(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      const body = tmp2;
      const HTTP = tmp5(1272).HTTP;
      const request = { url: closure_1_16.GUILD_ROLES(tmp5), body, oldFormErrors: true, rejectWithError: tmp5(1272).rejectWithMigratedError() };
      await HTTP.patch(request);
      closure_128_0 = value;
      const result = body(7323).checkGuildTemplateDirty(closure_129_0);
      return closure_128_0;
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
    return DispatcherDefault.dispatch({ type: "GUILD_MEMBERS_REQUEST", guildIds, query, limit, presences });
  },
  searchRecentMembers(guildId, arg1) {
    let obj = arg1;
    if (arg1 == null) {
      obj = {};
    }
    ({ query, continuationToken } = obj);
    obj = { type: "GUILD_SEARCH_RECENT_MEMBERS", guildId, query, continuationToken };
    return DispatcherDefault.dispatch(obj);
  },
  requestMembersById(id1, items, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let obj = DispatcherDefault;
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
    obj.userIds = tmp2;
    obj.presences = flag;
    return obj.dispatch(obj);
  },
  move(fromIndex, toIndex, fromFolderIndex, toFolderIndex) {
    const obj = { type: "GUILD_MOVE", fromIndex, toIndex, fromFolderIndex, toFolderIndex };
    obj.dispatch(obj);
  },
  moveById(id, id2) {
    let flag = c4;
    if (c4 === undefined) {
      flag = false;
    }
    let flag2 = arg3;
    if (arg3 === undefined) {
      flag2 = false;
    }
    if (id === id2) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: " + id);
      throw error;
    } else {
      const obj = { type: "GUILD_MOVE_BY_ID", sourceId: id, targetId: id2, moveToBelow: flag, combine: flag2 };
      obj.dispatch(obj);
    }
  },
  createGuildFolderLocal(items, name) {
    let obj = AnalyticsUtilsDefault;
    obj.track(constants.GUILD_FOLDER_CREATED);
    obj = { type: "GUILD_FOLDER_CREATE_LOCAL", sourceIds: items, name };
    DispatcherDefault.dispatch(obj);
  },
  editGuildFolderLocal(targetId, sourceIds, name) {
    const obj = { type: "GUILD_FOLDER_EDIT_LOCAL", targetId, sourceIds, name };
    obj.dispatch(obj);
  },
  deleteGuildFolderLocal(targetId) {
    const obj = { type: "GUILD_FOLDER_DELETE_LOCAL", targetId };
    obj.dispatch(obj);
  },
  toggleGuildFolderExpand(id) {
    let obj = AnalyticsUtilsDefault;
    let str = "expanded";
    if (isFolderExpandedResult) {
      str = "collapsed";
    }
    obj.track(constants.GUILD_FOLDER_CLICKED, { source: "sidebar", action: str });
    isFolderExpandedResult = ExpandedGuildFolderStore.isFolderExpanded(id);
    obj = { type: "TOGGLE_GUILD_FOLDER_EXPAND", folderId: id };
    DispatcherDefault.dispatch(obj);
    const tmp2Result = DispatcherDefault;
  },
  setGuildFolderExpanded(folderId, expanded) {
    const obj = { type: "SET_GUILD_FOLDER_EXPANDED", folderId, expanded };
    obj.dispatch(obj);
  },
  collapseAllFolders() {
    DispatcherDefault.dispatch({ type: "GUILD_FOLDER_COLLAPSE" });
  },
  nsfwAgree(guildId) {
    const obj = { type: "GUILD_NSFW_AGREE", guildId };
    obj.dispatch(obj);
  },
  nsfwReturnToSafety(guildId) {
    const tmp2 = getPreviousSafeRouteForNsfwReturnDefault(guildId);
    if (null == tmp2) {
      if (null != guildId) {
        const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
        if (null != defaultChannel) {
          if (!obj3.isChannelContentGated(defaultChannel)) {
            let tmp11Result = SpoilerChannelUtils;
            if (!tmp11Result.isChannelSpoilerGated(defaultChannel)) {
              tmp11Result = router_utils;
              tmp11Result.transitionTo(__initData.CHANNEL(guildId, defaultChannel.id));
            }
          }
          obj3 = AgeGateUtils;
        }
        router_utils.transitionTo(__initData.FRIENDS, { navigationReplace: false, openChannel: true });
      } else {
        router_utils.transitionTo(__initData.FRIENDS, { navigationReplace: false, openChannel: true });
      }
    } else {
      router_utils.transitionTo(__initData.CHANNEL(tmp2.guildId, tmp2.channelId));
    }
  },
  spoilerAgree(channelId) {
    const obj = { type: "CHANNEL_SPOILER_AGREE", channelId };
    obj.dispatch(obj);
  },
  clearSpoilerAgree(id) {
    const obj = { type: "CHANNEL_SPOILER_AGREE_CLEAR", channelId: id };
    obj.dispatch(obj);
  },
  escapeToDefaultChannel(guildId) {
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    if (null != defaultChannel) {
      router_utils.transitionTo(__initData.CHANNEL(guildId, defaultChannel.id));
    } else {
      router_utils.transitionTo(__initData.FRIENDS);
    }
  },
  fetchApplications(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
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
          dependencyMap = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let body;
              const obj1 = { url: closure_1_16.GUILD_APPLICATIONS(tmp5), oldFormErrors: true, rejectWithError: tmp5(1272).rejectWithMigratedError() };
              if (null != tmp2) {
                const obj2 = { channel_id: tmp23 };
                obj1.query = obj2;
              }
              const HTTP = tmp5(1272).HTTP;
              c2 = 1;
              dependencyMap = 1;
              const obj3 = { value: HTTP.get(obj1), done: false };
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            body = value.body;
            obj = tmp2(573);
            const obj5 = { type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: closure_129_0, applications: body };
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
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = null;
    }
    c2 = tmp;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const obj1 = { limit: num };
              if (null != after) {
                obj1.after = after;
              }
              const HTTP = v3(1272).HTTP;
              const request = { url: closure_1_16.GUILD_BANS(guildId), oldFormErrors: true, query: obj1, rejectWithError: null };
              let obj2 = v3(1272);
              request.rejectWithError = obj2.rejectWithMigratedError();
              value = HTTP.get(request);
              c1 = 1;
              v3 = 1;
              obj2 = {
                value: value.then((bans) => {
                          c1(573);
                          const obj = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, guildId };
                          obj.dispatch(obj);
                        }),
                done: false
              };
              return obj2;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          v3 = tmp;
          throw tmp9;
        }
      }
    })();
  },
  searchGuildBans(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const obj1 = { limit: num };
              let tmp5 = null != userIds;
              if (tmp5) {
                tmp5 = userIds.length > 0;
              }
              if (tmp5) {
                obj1.user_ids = userIds;
              }
              let tmp6 = null != query;
              if (tmp6) {
                tmp6 = query.trim().length > 0;
              }
              if (tmp6) {
                obj1.query = query;
              }
              const HTTP = v3(1272).HTTP;
              const request = { url: closure_1_16.GUILD_BANS_SEARCH(guildId), oldFormErrors: true, query: obj1, rejectWithError: null };
              let obj2 = v3(1272);
              request.rejectWithError = obj2.rejectWithMigratedError();
              value = HTTP.get(request);
              c1 = 1;
              v3 = 1;
              obj2 = {
                value: value.then((bans) => {
                          c1(573);
                          const obj = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, userIds, guildId };
                          obj.dispatch(obj);
                        }),
                done: false
              };
              return obj2;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          v3 = tmp;
          throw tmp11;
        }
      }
    })();
  },
  fetchGuildBans(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const HTTP = v3(1272).HTTP;
              const obj1 = { url: closure_1_16.GUILD_BANS(closure_0), oldFormErrors: true, rejectWithError: v3(1272).rejectWithMigratedError() };
              value = HTTP.get(obj1);
              c1 = 1;
              v3 = 1;
              const obj2 = {
                value: value.then((bans) => {
                          closure_1_1(dependencyMap[14]);
                          const obj = { type: "GUILD_SETTINGS_LOADED_BANS", bans: bans.body };
                          obj.dispatch(obj);
                        }),
                done: false
              };
              return obj2;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v3 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  fetchGuildRoleConnectionsEligibility(guildId, id) {
    const _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_16.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(guildId, id), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    value = HTTP.get(obj);
    return value.then((body) => {
      body = body.body;
      const obj = { type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS", roleId, roleConnectionEligibility: body };
      obj.dispatch(obj);
      return body;
    });
  },
  assignGuildRoleConnection(guildId, id) {
    closure_0 = guildId;
    closure_1 = id;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const HTTP = v3(1272).HTTP;
              const obj1 = { url: closure_1_16.GUILD_ROLE_CONNECTIONS_ASSIGN(closure_0, closure_1), oldFormErrors: true, rejectWithError: v3(1272).rejectWithMigratedError() };
              c1 = 1;
              v3 = 1;
              const obj2 = { value: HTTP.post(obj1), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v3 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  unassignGuildRoleConnection(arg0, id) {
    closure_0 = arg0;
    closure_1 = id;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const HTTP = v3(1272).HTTP;
              const obj1 = { url: closure_1_16.GUILD_ROLE_CONNECTIONS_UNASSIGN(closure_0, closure_1), oldFormErrors: true, rejectWithError: v3(1272).rejectWithMigratedError() };
              c1 = 1;
              v3 = 1;
              const obj2 = { value: HTTP.post(obj1), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          v3 = tmp;
          throw tmp5;
        }
      }
    })();
  },
  getGuildRoleConnectionsConfigurations(guildId) {
    closure_0 = guildId;
    return (async () => {
      const HTTP = v3(1272).HTTP;
      await HTTP.get({ url: closure_1_16.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(closure_0), oldFormErrors: true, rejectWithError: v3(1272).rejectWithMigratedError() });
      return value.body;
    })();
  }
};
export { waitForGuild };