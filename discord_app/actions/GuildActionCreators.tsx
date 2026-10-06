// discord_app/actions/GuildActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import AgeGateConstants from "../modules/age_gate/AgeGateConstants.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import intl3 from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import AgeGateUtils from "../modules/age_gate/AgeGateUtils.tsx";
import AlertActionCreatorsDefault from "AlertActionCreators.tsx";
import LurkerActionCreators from "../modules/lurker_mode/LurkerActionCreators.tsx";
import GuildTemplateTooltipActionCreatorsDefault from "../modules/guild_templates/GuildTemplateTooltipActionCreators.tsx";
import getPreviousSafeRouteForNsfwReturnDefault from "../modules/age_gate/getPreviousSafeRouteForNsfwReturn.native.tsx";
import SpoilerChannelUtils from "../modules/spoiler_channels/SpoilerChannelUtils.tsx";
import _objectWithoutProperties from "../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import BulkBanStore from "../modules/guild_mod_dash_member_safety/BulkBanStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ExpandedGuildFolderStore from "../stores/ExpandedGuildFolderStore.tsx";
import GuildChannelStore from "../stores/GuildChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../stores/SelectedGuildStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c4, c5, c7, c8, closure_12, closure_5;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
function showTooManyUserGuildsAlert(quantity) {
  let intl;
  let intl2;
  let obj2;
  obj = { title: intl.string(intl3.t.cTaRxF), body: intl2.formatToPlainString(intl3.t["VSd+Aj"], obj2) };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  obj2 = { quantity };
  show(obj);
}
function deleteGuild(id) {
  let obj3;
  const obj2 = { type: "GUILD_DELETE", guild: obj3 };
  obj3 = { id };
  obj = DispatcherDefault;
  obj.dispatch(obj2);
}
let obj = function _joinGuild() {
  obj = _asyncToGenerator(async function (guildId) {
    let closure_3;
    let obj10;
    let obj11;
    let obj24;
    let sessionId;
    let tmp168;
    let tmp175;
    let value;
    function showGuildAtCapacityAlert() {
      let intl;
      let intl2;
      obj = { title: intl.string(guildId(loadId[13]).t.ZZlox4), body: intl2.string(guildId(loadId[13]).t.ZUEGFn) };
      const show = closure_1_1(loadId[12]).show;
      closure_1_1(loadId[12]);
      intl = guildId(loadId[13]).intl;
      intl2 = guildId(loadId[13]).intl;
      show(obj);
    }
    let closure_1 = arg1;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let loadId;
        let obj4;
        let source;
        let lurkLocation;
        let autoNavigate;
        let closure_6;
        let lurker;
        let currentUser;
        let guildId2;
        let channelId;
        c8 = 2;
        if (0 === c7) {
          if (guildId === 1) {
            c8 = 3;
            throw value;
          } else if (guildId === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp;
            loadId = tmp4;
            obj4 = closure_1;
            if (closure_1 === undefined) {
              obj4 = {};
            }
            source = undefined;
            loadId = undefined;
            lurkLocation = undefined;
            autoNavigate = undefined;
            closure_6 = undefined;
            lurker = undefined;
            currentUser = undefined;
            guildId2 = undefined;
            channelId = undefined;
            value = undefined;
            closure_12 = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c7) {
          if (guildId === 1) {
            c8 = 3;
            throw value;
          } else if (guildId === 2) {
            c8 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            source = obj4.source;
            loadId = obj4.loadId;
            lurkLocation = obj4.lurkLocation;
            autoNavigate = obj4.autoNavigate;
            const tmp125 = undefined === autoNavigate || autoNavigate;
            closure_6 = tmp125;
            lurker = obj4.lurker;
            let c2 = lurker;
            if (lurker == null) {
              c2 = false;
            }
            lurker = c2;
            currentUser = closure_132_14.getCurrentUser();
            let hasFlagResult;
            const obj19 = currentUser;
            if (currentUser != null) {
              hasFlagResult = obj19.hasFlag(closure_132_18.QUARANTINED);
            }
            if (hasFlagResult) {
              closure_132_1(closure_132_3[15])();
              const self3 = this;
              const self4 = this;
              const promise = new Promise((arg0, fn) => {
                const error = new Error();
                return fn(error);
              });
              c8 = 3;
              const obj8 = { value: promise, done: true };
              return obj8;
            } else {
              const obj20 = closure_132_1(closure_132_3[14]);
              obj20.wait(() => {
                obj = closure_1(loadId[14]);
                const obj2 = { type: "GUILD_JOIN", guildId, lurker, source, loadId };
                return obj.dispatch(obj2);
              });
              c6 = 1;
              guildId2 = closure_132_13.getGuildId();
              channelId = null;
              if (guildId === guildId2) {
                channelId = null;
                if (null != closure_132_11.getGuild(guildId)) {
                  channelId = closure_132_12.getChannelId(guildId);
                }
              }
              const HTTP = closure_132_0(closure_132_3[16]).HTTP;
              const request = {
                url: closure_132_16.GUILD_JOIN(guildId),
                query: obj10,
                context: obj11,
                oldFormErrors: true,
                body: {},
                rejectWithError: obj24.rejectWithMigratedError(),
              };
              const put = HTTP.put;
              obj10 = {
                lurker,
                session_id: sessionId,
                recommendation_load_id: loadId,
                location: tmp168,
                from_directory: tmp175,
              };
              sessionId = null;
              if (lurker) {
                sessionId = closure_132_8.getSessionId();
              }
              tmp168 = null;
              if (lurker) {
                tmp168 = null;
                if (null != lurkLocation) {
                  tmp168 = lurkLocation;
                }
              }
              tmp175 = source === closure_132_17.DIRECTORY_ENTRY || null;
              obj11 = { source };
              obj24 = closure_132_0(closure_132_3[16]);
              c7 = 3;
              c8 = 1;
              const obj12 = { value: put(request), done: false };
              return obj12;
            }
          }
        } else if (2 === c7) {
          c6 = 0;
          let closure_13 = closure_5;
          const body = closure_13.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          if (code === closure_132_15.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED) {
            const obj16 = closure_132_0(closure_132_3[20]);
            obj16.openAgeGateModal(closure_132_23.JOIN_LARGE_GUILD_UNDERAGE);
          }
          const body2 = closure_13.body;
          let code1;
          if (body2 != null) {
            code1 = body2.code;
          }
          if (code1 === closure_132_15.TOO_MANY_USER_GUILDS) {
            const obj17 = closure_132_0(closure_132_3[21]);
            if (obj17.hasIncreasedGuildCap(closure_132_14.getCurrentUser())) {
              closure_132_24(closure_132_20);
            } else {
              closure_132_24(closure_132_19);
            }
          }
          const body3 = closure_13.body;
          let code2;
          if (body3 != null) {
            code2 = body3.code;
          }
          if (code2 === closure_132_15.GUILD_AT_CAPACITY) {
            showGuildAtCapacityAlert();
          }
          let tmp91 = lurker;
          if (tmp91) {
            const body4 = closure_13.body;
            let code3;
            if (body4 != null) {
              code3 = body4.code;
            }
            tmp91 = code3 === closure_132_15.UNKNOWN_GUILD;
          }
          if (tmp91) {
            closure_132_25(guildId);
          }
          const body5 = closure_13.body;
          let code4;
          if (body5 != null) {
            code4 = body5.code;
          }
          if (code4 === closure_132_15.USER_GUILD_JOIN_AGE_RESTRICTED_IOS_DISALLOWED) {
            const tmp109 = lurker;
            if (tmp109) {
              closure_132_25(guildId);
            }
            const obj18 = closure_132_0(closure_132_3[22]);
            const result = obj18.showNSFWGuildJoinGate(guildId);
            const self = this;
            const self2 = this;
            const joinGuildRefusedError = new closure_132_0(closure_132_3[23]).JoinGuildRefusedError();
            throw joinGuildRefusedError;
          } else {
            throw closure_13;
          }
        } else {
          if (3 === c7) {
            if (guildId === 1) {
              c8 = 3;
              throw value;
            } else if (guildId === 2) {
              c6 = 0;
              c8 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              if (null != value.body.join_request) {
                const obj15 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: value.body.join_request };
                const obj5 = closure_132_1(closure_132_3[14]);
                obj5.dispatch(obj15);
              }
              if (null == closure_132_11.getGuild(guildId)) {
                if (value.body.show_verification_form) {
                  const tmp23 = closure_6;
                  if (tmp23) {
                    const obj13 = closure_132_0(closure_132_3[17]);
                    const result1 = obj13.transitionToMemberVerification(guildId);
                    c6 = 0;
                    c8 = 3;
                    const obj21 = { value, done: true };
                    return obj21;
                  }
                }
              }
              if (null != value.body.welcome_screen) {
                const obj22 = {
                  type: "WELCOME_SCREEN_UPDATE",
                  guildId: value.body.id,
                  welcomeScreen: value.body.welcome_screen,
                };
                const obj7 = closure_132_1(closure_132_3[14]);
                obj7.dispatch(obj22);
              }
              if (null != value.body.approximate_presence_count) {
                const obj23 = {
                  type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                  guildId: value.body.id,
                  count: value.body.approximate_presence_count,
                };
                const obj9 = closure_132_1(closure_132_3[14]);
                obj9.dispatch(obj23);
              }
              const tmp43 = lurker;
              if (!tmp43) {
                const tmp44 = closure_6;
                if (tmp44) {
                  c7 = 4;
                  c8 = 1;
                  const obj25 = {
                    value: closure_132_0(closure_132_3[19])(closure_132_3[18], closure_132_3.paths),
                    done: false,
                  };
                  return obj25;
                }
              }
            }
          } else if (4 === c7) {
            if (guildId === 1) {
              c8 = 3;
              throw value;
            } else if (guildId === 2) {
              c6 = 0;
              c8 = 3;
              const obj26 = { value, done: true };
              return obj26;
            } else {
              closure_12 = value.default;
              const obj27 = { guildId, returnChannelId: channelId };
              c7 = 5;
              c8 = 1;
              const obj28 = { value: closure_12(obj27), done: false };
              return obj28;
            }
          } else if (guildId === 1) {
            c8 = 3;
            throw value;
          } else if (guildId === 2) {
            c6 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          }
          c6 = 0;
          c8 = 3;
          const obj29 = { value, done: true };
          return obj29;
        }
      } catch (tmp188) {
        closure_5 = tmp188;
        if (0 === c6) {
          c8 = 3;
          throw tmp188;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function waitForGuild(id) {
  let closure_0 = id;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    return GuildStore.addConditionalChangeListener(() => {
      const guild = GuildStore.getGuild(id);
      let flag = null == guild;
      if (!flag) {
        id(guild);
        flag = false;
      }
      return flag;
    });
  });
  return promise;
}
let closure_4 = ["icon", "unicodeEmoji"];
({
  AbortCodes: closure_15,
  Endpoints: closure_16,
  JoinGuildSources: closure_17,
  UserFlags: closure_18,
  MAX_USER_GUILDS: closure_19,
  MAX_USER_GUILDS_PREMIUM: closure_20,
  Routes: closure_21,
  AnalyticEvents: closure_22,
} = Constants);
const AgeGateSource = AgeGateConstants.AgeGateSource;
obj = {
  joinGuild() {
    return obj(...arguments);
  },
  waitForGuild,
  transitionToGuildSync(guildId, arg1, ROLE_SUBSCRIPTIONS, messageId) {
    let closure_0 = guildId;
    let closure_1 = arg1;
    let closure_2 = ROLE_SUBSCRIPTIONS;
    return (async function () {
      let closure_3;
      let welcomeModalChannelId;
      if (c5 === 2) {
        c5 = 3;
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
          let closure_0;
          let obj6;
          let getChannelId;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              messageId = tmp;
              let closure_2 = tmp2;
              closure_0 = undefined;
              obj6 = undefined;
              getChannelId = function getChannelId(id, arg1) {
                let first = arg1;
                if (null == arg1) {
                  obj = welcomeModalChannelId(closure_1_3[24]);
                  first = obj.getGuildTransitionRoute(id)[0];
                }
                return first;
              };
              c4 = 1;
              c5 = 1;
              const obj4 = { value: waitForGuild(closure_0), done: false };
              return obj4;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = getChannelId(value.id, closure_131_2);
              obj6 = closure_131_1;
              let hasOwnPropertyResult;
              if (closure_131_1 != null) {
                hasOwnPropertyResult = closure_131_1.hasOwnProperty("welcomeModalChannelId");
              }
              if (hasOwnPropertyResult) {
                hasOwnPropertyResult = null == closure_131_1.welcomeModalChannelId;
              }
              if (hasOwnPropertyResult) {
                obj6 = { welcomeModalChannelId };
                const merged = Object.assign(closure_131_1);
                welcomeModalChannelId = closure_0;
                if (closure_0 == null) {
                  welcomeModalChannelId = undefined;
                }
              }
              const tmp21 = getChannelId(messageId[25]);
              tmp21(closure_1_21.CHANNEL(closure_131_0, closure_0, closure_131_3), obj6);
              const _setImmediate = setImmediate;
              const self = this;
              const self2 = this;
              const promise = new Promise(setImmediate);
              c4 = 2;
              c5 = 1;
              const obj7 = { value: promise, done: false };
              return obj7;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp33) {
          c5 = 3;
          throw tmp33;
        }
      }
    })();
  },
  deleteGuild,
  selectGuild(guildId) {
    obj = LurkerActionCreators;
    obj.stopLurking(guildId);
  },
  createGuild(guild) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_CREATE", guild };
    obj.dispatch(obj2);
  },
  setServerMute(id, id2, mute) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: authStore3.GUILD_MEMBER(id, id2),
      body,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const patch = HTTP.patch;
    body = { mute };
    obj3 = HTTPUtils;
    return patch(request);
  },
  setServerDeaf(id, id2, deaf) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: authStore3.GUILD_MEMBER(id, id2),
      body,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const patch = HTTP.patch;
    body = { deaf };
    obj3 = HTTPUtils;
    return patch(request);
  },
  setChannel(guildId, userId, channel_id) {
    let body;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore3.GUILD_MEMBER(guildId, userId), body, oldFormErrors: true, rejectWithError: true };
    body = { channel_id };
    HTTP.patch(request);
  },
  setMemberFlags(id, id2, flags) {
    let body;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore3.GUILD_MEMBER(id, id2), body, oldFormErrors: true, rejectWithError: true };
    body = { flags };
    HTTP.patch(request);
  },
  kickUser(id, id1, current, moderator_report_id) {
    let guildId;
    let obj3;
    let query;
    _require = id;
    const userId = id1;
    const HTTP = require("HTTPUtils").HTTP;
    const request = {
      url: closure_16.GUILD_MEMBER(id, id1),
      query,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const del = HTTP.del;
    query = { reason: current, moderator_report_id };
    obj3 = require("HTTPUtils");
    const delResult = del(request);
    return delResult.then(() => {
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_MEMBER_REMOVE_LOCAL", guildId, userId };
      obj.dispatch(obj2);
    });
  },
  setCommunicationDisabledUntil(moderatorReportId) {
    let _location;
    let communicationDisabledUntilTimestamp;
    let duration;
    let guildId;
    let obj2;
    let reason;
    let tmp3Result;
    let tmp4;
    let tmp5;
    let tmp6;
    let trackedActionData;
    let userId;
    ({
      guildId,
      userId,
      communicationDisabledUntilTimestamp,
      duration,
      reason,
      location: _location,
    } = moderatorReportId);
    moderatorReportId = moderatorReportId.moderatorReportId;
    const tmp2 = TrackedHTTPUtilsDefault;
    const request = {
      url: authStore3.GUILD_MEMBER(guildId, userId),
      reason,
      body: {
        communication_disabled_until: communicationDisabledUntilTimestamp,
        moderator_report_id: moderatorReportId,
      },
      oldFormErrors: true,
      trackedActionData,
      rejectWithError: tmp3Result.rejectWithMigratedError(),
    };
    const patch = tmp2.patch;
    trackedActionData = {
      event: discord_common_AnalyticsUtils.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
      properties: obj2,
    };
    obj2 = {
      guild_id: guildId,
      target_user_id: userId,
      duration: tmp4,
      reason: tmp5,
      communication_disabled_until: communicationDisabledUntilTimestamp,
      location: tmp6,
    };
    tmp4 = null;
    if (null != duration) {
      tmp4 = duration;
    }
    tmp5 = null;
    if (null != reason) {
      tmp5 = reason;
    }
    tmp6 = null;
    if (null != _location) {
      tmp6 = _location;
    }
    tmp3Result = HTTPUtils;
    return patch(request);
  },
  banUser(id, id2, value, current, moderator_report_id) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: authStore3.GUILD_BAN(id, id2),
      reason: current,
      body,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const put = HTTP.put;
    body = { delete_message_seconds: value, moderator_report_id };
    obj3 = HTTPUtils;
    return put(request);
  },
  unbanUser(id, id2) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const del = HTTP.del;
    obj = { url: authStore3.GUILD_BAN(id, id2), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    return del(obj);
  },
  banMultipleUsers(arg0, user_ids, delete_message_seconds, reason) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: authStore3.BULK_GUILD_BAN_V2(arg0),
      body,
      reason,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const post = HTTP.post;
    body = { user_ids, delete_message_seconds };
    obj3 = HTTPUtils;
    return post(request);
  },
  startBulkBan(arg0, arg1, arg2, arg3) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    const self = this;
    return (async () => {
      let v1;
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
        let c3;
        try {
          c4 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp;
              c3 = 1;
              v1 = 2;
              c4 = 1;
              const obj5 = { value: self.banMultipleUsers(closure_0, closure_1, closure_2, closure_3), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              const obj6 = { type: "GUILD_BULK_BAN_FAILED", guildId: closure_128_0 };
              const obj4 = v1(c3[14]);
              obj4.dispatch(obj6);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (BulkBanStore.consumeCompletedBeforeStarted(closure_128_0, id.getId())) {
              c3 = 0;
              c4 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj8 = { type: "GUILD_BULK_BAN_STARTED", guildId: closure_128_0 };
              obj = v1(c3[14]);
              obj.dispatch(obj8);
              c3 = 0;
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          closure_2 = tmp22;
          if (0 === c3) {
            c4 = 3;
            throw tmp22;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  },
  createRole(id, arg1, arg2, arg3) {
    let closure_0 = id;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    obj = arg4;
    if (arg4 === undefined) {
      obj = {};
    }
    let flag = obj.skipSelect;
    if (flag === undefined) {
      flag = false;
    }
    return (async function () {
      let obj6;
      let obj9;
      let primary_color;
      if (c8 === 2) {
        c8 = 3;
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
        let c6;
        try {
          let color;
          let body;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              color = undefined;
              body = undefined;
              let stringResult = closure_1;
              if (null == closure_1) {
                const intl = color(closure_3[13]).intl;
                stringResult = intl.string(color(closure_3[13]).t.QBMHvB);
              }
              const obj5 = { name: stringResult, color, colors: obj6, permissions: primary_color(closure_3[29]).NONE };
              color = closure_2;
              if (closure_2 == null) {
                color = 0;
              }
              obj6 = closure_3;
              if (closure_3 == null) {
                primary_color = tmp32;
                if (closure_2 == null) {
                  primary_color = 0;
                }
                obj6 = { primary_color, secondary_color: null, tertiary_color: null };
              }
              c6 = 1;
              const HTTP = color(closure_3[16]).HTTP;
              const request = {
                url: closure_1_16.GUILD_ROLES(color),
                oldFormErrors: true,
                body: obj5,
                rejectWithError: obj9.rejectWithMigratedError(),
              };
              const post = HTTP.post;
              obj9 = color(closure_3[16]);
              c7 = 2;
              c8 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_2 = closure_5;
            const self = this;
            const self2 = this;
            const tmp25 = new obj6(closure_3[32])(closure_2);
            throw tmp25;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            color = value;
            body = color.body;
            const deserializer = primary_color(closure_3[30]);
            body.permissions = deserializer.deserialize(body.permissions);
            if (!closure_132_4) {
              const obj10 = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId: color.body.id, role: body };
              obj = obj6(closure_3[14]);
              obj.dispatch(obj10);
            }
            const obj3 = obj6(closure_3[31]);
            const result = obj3.checkGuildTemplateDirty(closure_132_0);
            c6 = 0;
            c8 = 3;
            const obj11 = { value: body, done: true };
            return obj11;
          }
        } catch (tmp45) {
          closure_5 = tmp45;
          if (0 === c6) {
            c8 = 3;
            throw tmp45;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  },
  updateRole(id, id2, arg2) {
    let closure_0 = id;
    let closure_1 = id2;
    let closure_2 = arg2;
    return (async () => {
      let c2;
      let closure_1;
      let obj4;
      let obj6;
      let tmp12;
      const value = tmp4;
      const icon = closure_2.icon;
      const unicodeEmoji = closure_2.unicodeEmoji;
      const tmp29 = _objectWithoutProperties(closure_2, closure_1_4);
      if (null === icon) {
        tmp12 = icon;
      } else if (icon != null) {
        icon.startsWith("data:");
      }
      const HTTP = value(c3[16]).HTTP;
      const request = {
        url: closure_1_16.GUILD_ROLE(value, tmp),
        body: obj4,
        oldFormErrors: true,
        rejectWithError: obj6.rejectWithMigratedError(),
      };
      const patch = HTTP.patch;
      obj4 = { icon: tmp12, unicode_emoji: unicodeEmoji };
      const merged = Object.assign(tmp29);
      obj6 = value(c3[16]);
      await patch(request);
      obj = tmp(c3[31]);
      const result = obj.checkGuildTemplateDirty(closure_129_0);
      return value;
    })();
  },
  updateRolePermissions(c0, c1, permissions) {
    let body;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: authStore3.GUILD_ROLE(c0, c1),
      body,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const patch = HTTP.patch;
    body = { permissions };
    obj3 = HTTPUtils;
    return patch(request);
  },
  deleteRole(id, id2) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_16.GUILD_ROLE(id, id2), oldFormErrors: true, rejectWithError: true };
    const delResult = HTTP.del(obj);
    delResult.then(() => {
      obj = GuildTemplateTooltipActionCreatorsDefault;
      const result = obj.checkGuildTemplateDirty(id);
    });
  },
  batchChannelUpdate(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let c2;
      let obj8;
      const body = tmp;
      const value = tmp4;
      const HTTP = value(c3[16]).HTTP;
      const request = {
        url: closure_1_16.GUILD_CHANNELS(value),
        body,
        oldFormErrors: true,
        rejectWithError: obj8.rejectWithMigratedError(),
      };
      const patch = HTTP.patch;
      obj8 = value(c3[16]);
      await patch(request);
      obj = body(c3[31]);
      const result = obj.checkGuildTemplateDirty(closure_129_0);
      return value;
    })();
  },
  batchRoleUpdate(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let c2;
      let obj8;
      const body = tmp;
      const value = tmp4;
      const HTTP = value(c3[16]).HTTP;
      const request = {
        url: closure_1_16.GUILD_ROLES(value),
        body,
        oldFormErrors: true,
        rejectWithError: obj8.rejectWithMigratedError(),
      };
      const patch = HTTP.patch;
      obj8 = value(c3[16]);
      await patch(request);
      obj = body(c3[31]);
      const result = obj.checkGuildTemplateDirty(closure_129_0);
      return value;
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
    const dispatch = DispatcherDefault.dispatch;
    let guildIds = arg0;
    DispatcherDefault;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      guildIds = items;
    }
    return dispatch({ type: "GUILD_MEMBERS_REQUEST", guildIds, query, limit, presences });
  },
  searchRecentMembers(guildId, arg1) {
    let continuationToken;
    let query;
    obj = arg1;
    if (arg1 == null) {
      obj = {};
    }
    ({ query, continuationToken } = obj);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "GUILD_SEARCH_RECENT_MEMBERS", guildId, query, continuationToken };
    return obj2.dispatch(obj3);
  },
  requestMembersById(id1, items, arg2) {
    let tmp3;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    const dispatch = DispatcherDefault.dispatch;
    let tmp2 = id1;
    DispatcherDefault;
    if (!Array.isArray(id1)) {
      items = [id1];
      tmp2 = items;
    }
    obj = { type: "GUILD_MEMBERS_REQUEST", guildIds: tmp2, userIds: tmp3, presences: flag };
    tmp3 = items;
    if (!Array.isArray(items)) {
      const items1 = [items];
      tmp3 = items1;
    }
    return dispatch(obj);
  },
  move(fromIndex, toIndex, fromFolderIndex, toFolderIndex) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_MOVE", fromIndex, toIndex, fromFolderIndex, toFolderIndex };
    obj.dispatch(obj2);
  },
  moveById(id, id1) {
    let flag = c4;
    if (c4 === undefined) {
      flag = false;
    }
    if (id === id1) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: " + id,
      );
      throw error;
    } else {
      const obj2 = { type: "GUILD_MOVE_BY_ID", sourceId: id, targetId: id1, moveToBelow: flag, combine: flag2 };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  createGuildFolderLocal(items, name) {
    obj = AnalyticsUtilsDefault;
    obj.track(constants.GUILD_FOLDER_CREATED);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "GUILD_FOLDER_CREATE_LOCAL", sourceIds: items, name };
    obj2.dispatch(obj3);
  },
  editGuildFolderLocal(targetId, sourceIds, name) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_FOLDER_EDIT_LOCAL", targetId, sourceIds, name };
    obj.dispatch(obj2);
  },
  deleteGuildFolderLocal(targetId) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_FOLDER_DELETE_LOCAL", targetId };
    obj.dispatch(obj2);
  },
  toggleGuildFolderExpand(id) {
    let str = "expanded";
    const isFolderExpandedResult = ExpandedGuildFolderStore.isFolderExpanded(id);
    const track = AnalyticsUtilsDefault.track;
    const GUILD_FOLDER_CLICKED = constants.GUILD_FOLDER_CLICKED;
    AnalyticsUtilsDefault;
    if (isFolderExpandedResult) {
      str = "collapsed";
    }
    track(GUILD_FOLDER_CLICKED, { source: "sidebar", action: str });
    obj = { type: "TOGGLE_GUILD_FOLDER_EXPAND", folderId: id };
    const tmp2Result = DispatcherDefault;
    tmp2Result.dispatch(obj);
  },
  setGuildFolderExpanded(folderId, expanded) {
    obj = DispatcherDefault;
    const obj2 = { type: "SET_GUILD_FOLDER_EXPANDED", folderId, expanded };
    obj.dispatch(obj2);
  },
  collapseAllFolders() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_FOLDER_COLLAPSE" });
  },
  nsfwAgree(guildId) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_NSFW_AGREE", guildId };
    obj.dispatch(obj2);
  },
  nsfwReturnToSafety(guildId) {
    const tmp2 = getPreviousSafeRouteForNsfwReturnDefault(guildId);
    if (null == tmp2) {
      if (null != guildId) {
        const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
        if (null != defaultChannel) {
          const obj3 = AgeGateUtils;
          if (!obj3.isChannelContentGated(defaultChannel)) {
            const tmp11Result = SpoilerChannelUtils;
            if (!tmp11Result.isChannelSpoilerGated(defaultChannel)) {
              const tmp11Result2 = router_utils;
              tmp11Result2.transitionTo(closure_21.CHANNEL(guildId, defaultChannel.id));
            }
          }
        }
        const obj6 = router_utils;
        obj6.transitionTo(closure_21.FRIENDS, { navigationReplace: false, openChannel: true });
      } else {
        const obj2 = router_utils;
        obj2.transitionTo(closure_21.FRIENDS, { navigationReplace: false, openChannel: true });
      }
    } else {
      obj = router_utils;
      obj.transitionTo(closure_21.CHANNEL(tmp2.guildId, tmp2.channelId));
    }
  },
  spoilerAgree(channelId) {
    obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_SPOILER_AGREE", channelId };
    obj.dispatch(obj2);
  },
  clearSpoilerAgree(id) {
    obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_SPOILER_AGREE_CLEAR", channelId: id };
    obj.dispatch(obj2);
  },
  escapeToDefaultChannel(guildId) {
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    if (null != defaultChannel) {
      const obj2 = router_utils;
      obj2.transitionTo(closure_21.CHANNEL(guildId, defaultChannel.id));
    } else {
      obj = router_utils;
      obj.transitionTo(closure_21.FRIENDS);
    }
  },
  fetchApplications(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let obj9;
      if (c3 === 2) {
        c3 = 3;
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
          let body;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              body = undefined;
              const obj4 = {
                url: closure_1_16.GUILD_APPLICATIONS(tmp4),
                oldFormErrors: true,
                rejectWithError: obj9.rejectWithMigratedError(),
              };
              obj9 = tmp4(c3[16]);
              if (null != tmp) {
                const obj5 = { channel_id: tmp21 };
                obj4.query = obj5;
              }
              const HTTP = tmp4(c3[16]).HTTP;
              c2 = 1;
              c3 = 1;
              const obj6 = { value: HTTP.get(obj4), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value.body;
            const obj8 = { type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: closure_129_0, applications: body };
            obj = tmp(c3[14]);
            obj.dispatch(obj8);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  },
  fetchGuildBansBatch(guildId, arg1, arg2) {
    let num;
    let closure_0 = guildId;
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = null;
    }
    let c2 = tmp;
    return (async () => {
      let obj3;
      let v3;
      let value;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj5 = { limit: 2 };
              if (null != after) {
                obj5.after = after;
              }
              const HTTP = v3(dependencyMap[16]).HTTP;
              const request = {
                url: closure_1_16.GUILD_BANS(guildId),
                oldFormErrors: true,
                query: obj5,
                rejectWithError: obj3.rejectWithMigratedError(),
              };
              const get = HTTP.get;
              obj3 = v3(dependencyMap[16]);
              value = get(request);
              c1 = 1;
              v3 = 1;
              const obj6 = {
                value: value.then((bans) => {
                  obj = c1(closure_2_3[14]);
                  const obj2 = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, guildId };
                  obj.dispatch(obj2);
                }),
                done: false,
              };
              return obj6;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          v3 = 3;
          throw tmp8;
        }
      }
    })();
  },
  searchGuildBans(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let num = arg3;
    if (arg3 === undefined) {
      num = 10;
    }
    return (async () => {
      let obj3;
      let v3;
      let value;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          num = 2;
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj5 = { limit: num };
              const tmp4 = null != userIds && userIds.length > 0;
              if (tmp4) {
                obj5.user_ids = userIds;
              }
              const tmp5 = null != query && query.trim().length > 0;
              if (tmp5) {
                obj5.query = query;
              }
              const HTTP = v3(closure_1_3[16]).HTTP;
              const request = {
                url: closure_1_16.GUILD_BANS_SEARCH(guildId),
                oldFormErrors: true,
                query: obj5,
                rejectWithError: obj3.rejectWithMigratedError(),
              };
              const get = HTTP.get;
              obj3 = v3(closure_1_3[16]);
              value = get(request);
              c1 = 1;
              v3 = 1;
              const obj6 = {
                value: value.then((bans) => {
                  obj = c1(num[14]);
                  const obj2 = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, userIds, guildId };
                  obj.dispatch(obj2);
                }),
                done: false,
              };
              return obj6;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          v3 = 3;
          throw tmp10;
        }
      }
    })();
  },
  fetchGuildBans(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let obj6;
      let v3;
      let value;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = v3(dependencyMap[16]).HTTP;
              const obj4 = {
                url: closure_1_16.GUILD_BANS(closure_0),
                oldFormErrors: true,
                rejectWithError: obj6.rejectWithMigratedError(),
              };
              const get = HTTP.get;
              obj6 = v3(dependencyMap[16]);
              value = get(obj4);
              c1 = 1;
              v3 = 1;
              const obj5 = {
                value: value.then((bans) => {
                  obj = closure_1_1(closure_1_3[14]);
                  const obj2 = { type: "GUILD_SETTINGS_LOADED_BANS", bans: bans.body };
                  obj.dispatch(obj2);
                }),
                done: false,
              };
              return obj5;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          v3 = 3;
          throw tmp4;
        }
      }
    })();
  },
  fetchGuildRoleConnectionsEligibility(guildId, roleId) {
    let obj2;
    _require = roleId;
    const HTTP = require("HTTPUtils").HTTP;
    obj = {
      url: closure_16.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(guildId, roleId),
      oldFormErrors: true,
      rejectWithError: obj2.rejectWithMigratedError(),
    };
    const get = HTTP.get;
    obj2 = require("HTTPUtils");
    const value = get(obj);
    return value.then((body) => {
      body = body.body;
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS", roleId, roleConnectionEligibility: body };
      obj.dispatch(obj2);
      return body;
    });
  },
  assignGuildRoleConnection(guildId, id) {
    let closure_0 = guildId;
    let closure_1 = id;
    return (async () => {
      let obj6;
      let v3;
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = v3(dependencyMap[16]).HTTP;
              const obj4 = {
                url: closure_1_16.GUILD_ROLE_CONNECTIONS_ASSIGN(guildId, id),
                oldFormErrors: true,
                rejectWithError: obj6.rejectWithMigratedError(),
              };
              const post = HTTP.post;
              obj6 = v3(dependencyMap[16]);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: post(obj4), done: false };
              return obj5;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          v3 = 3;
          throw tmp4;
        }
      }
    })();
  },
  unassignGuildRoleConnection(arg0, id) {
    let closure_0 = arg0;
    let closure_1 = id;
    return (async () => {
      let obj6;
      let v3;
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = v3(dependencyMap[16]).HTTP;
              const obj4 = {
                url: closure_1_16.GUILD_ROLE_CONNECTIONS_UNASSIGN(closure_0, id),
                oldFormErrors: true,
                rejectWithError: obj6.rejectWithMigratedError(),
              };
              const post = HTTP.post;
              obj6 = v3(dependencyMap[16]);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: post(obj4), done: false };
              return obj5;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          v3 = 3;
          throw tmp4;
        }
      }
    })();
  },
  getGuildRoleConnectionsConfigurations(guildId) {
    let closure_0 = guildId;
    return (async () => {
      let c1;
      let obj7;
      const HTTP = v3(dependencyMap[16]).HTTP;
      const obj4 = {
        url: closure_1_16.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(guildId),
        oldFormErrors: true,
        rejectWithError: obj7.rejectWithMigratedError(),
      };
      const get = HTTP.get;
      obj7 = v3(dependencyMap[16]);
      await get(obj4);
      return value.body;
    })();
  },
};
let result = size.fileFinishedImporting("actions/GuildActionCreators.tsx");

export default obj;
export { waitForGuild };
