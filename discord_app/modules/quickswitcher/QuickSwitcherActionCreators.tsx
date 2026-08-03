import setLibraryApplications from "setLibraryApplications";
import _slicedToArray from "_slicedToArray";
import { InAppNavigationType } from "fromType";
import { ChannelRecordBase } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_8 from "setLibraryApplications";
import handleConnectionOpen from "handleConnectionOpen";
import closure_10 from "handleConnectionOpen";
import closure_11 from "handleConnectionOpen";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import { CollectibleShopTab } from "items";

let Layers;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
const require = arg1;
function trackClose(QUICKSWITCHER_CLOSED, type) {
  let query;
  let queryMode;
  let record;
  let results;
  let type3;
  let obj = closure_11;
  const props = closure_11.getProps();
  ({ results, queryMode, query } = props);
  const guildId = store2.getGuildId();
  const channelId = store.getChannelId(guildId);
  const obj2 = require(7218) /* sortByMatchScore */;
  const tmp6 = results[obj2.findNextSelectedResult(obj2, require(undefined, 7218) /* sortByMatchScore */.FindResultDirections.DOWN, -1, results)];
  const isEmailResult = importDefault(8517).isEmail(query);
  const obj3 = importDefault(8517);
  const tmp7 = importDefault;
  const isPhoneNumberResult = importDefault(8517).isPhoneNumber(query);
  const obj4 = importDefault(8517);
  const isUserTagLikeResult = importDefault(8517).isUserTagLike(query);
  let tmp11 = null != channelId;
  if (tmp11) {
    tmp11 = isStaticChannelRoute(channelId);
  }
  let tmp13;
  if (!tmp11) {
    tmp13 = channelId;
  }
  obj = { current_channel_id: tmp13, current_channel_static_route: null, current_guild_id: null, query_mode: null, query_length: null, max_query_length: null, is_email_like: null, is_phone_like: null, is_username_like: null, query: null, top_result_type: null, top_result_score: null, num_results_total: null, num_results_users: null, num_results_text_channels: null, num_results_voice_channels: null, num_results_guilds: null, num_results_group_dms: null };
  let tmp14;
  if (tmp11) {
    tmp14 = channelId;
  }
  obj[1] = tmp14;
  obj[2] = guildId;
  if (queryMode == null) {
    queryMode = "GENERAL";
  }
  obj[3] = queryMode;
  obj[4] = query.length;
  obj[5] = props.maxQueryLength;
  obj[6] = isEmailResult;
  obj[7] = isPhoneNumberResult;
  obj[8] = isUserTagLikeResult;
  let tmp15 = null;
  if (!isEmailResult) {
    tmp15 = null;
    if (!isPhoneNumberResult) {
      tmp15 = null;
      if (!isUserTagLikeResult) {
        tmp15 = query;
      }
    }
  }
  obj[9] = tmp15;
  if (null == tmp6) {
    obj[10] = null;
    let score = null;
    if (null != tmp6) {
      score = tmp6.score;
    }
    obj[11] = score;
    obj[12] = obj.getResultTotals();
    obj[13] = obj.getResultTotals(tmp4(7218).AutocompleterResultTypes.USER);
    obj[14] = obj.getResultTotals(tmp4(7218).AutocompleterResultTypes.TEXT_CHANNEL);
    obj[15] = obj.getResultTotals(tmp4(7218).AutocompleterResultTypes.VOICE_CHANNEL);
    obj[16] = obj.getResultTotals(tmp4(7218).AutocompleterResultTypes.GUILD);
    obj[17] = obj.getResultTotals(tmp4(7218).AutocompleterResultTypes.GROUP_DM);
    if (null != channelId) {
      const channel = authStore.getChannel(channelId);
      type = null;
      if (null != channel) {
        type = channel.type;
      }
      obj.current_channel_type = type;
    }
    if (null != type) {
      ({ type: type3, record } = type);
      if (null == type) {
        obj.selected_type = null;
        obj.selected_score = tmp27;
        obj.selected_index = results.indexOf(type);
        if (tmp4(7218).AutocompleterResultTypes.GUILD === type3) {
          obj.selected_guild_id = record.id;
        } else {
          if (tmp4(7218).AutocompleterResultTypes.TEXT_CHANNEL !== type3) {
            if (tmp4(7218).AutocompleterResultTypes.VOICE_CHANNEL !== type3) {
              if (tmp4(7218).AutocompleterResultTypes.GROUP_DM === type3) {
                obj.selected_channel_id = record.id;
              } else if (tmp4(7218).AutocompleterResultTypes.USER === type3) {
                obj.selected_user_id = record.id;
              }
            }
          }
          if (record instanceof ChannelRecordBase) {
            let guild_id = null;
            if (null != record.guild_id) {
              guild_id = record.guild_id;
            }
            obj.selected_guild_id = guild_id;
          }
          obj.selected_channel_id = record.id;
        }
      } else if (type.type === tmp4(7218).AutocompleterResultTypes.IN_APP_NAVIGATION) {
        let type2 = `${type.type}_${type.record.type}`;
      } else {
        type2 = type.type;
      }
    }
    tmp7(698).track(QUICKSWITCHER_CLOSED, obj);
  } else if (tmp6.type === tmp4(7218).AutocompleterResultTypes.IN_APP_NAVIGATION) {
    type = `${tmp6.type}_${tmp6.record.type}`;
  } else {
    type = tmp6.type;
  }
}
function show() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  let str2 = arg1;
  if (arg1 === undefined) {
    str2 = "";
  }
  if (!closure_11.isOpen()) {
    const guildId = store2.getGuildId();
    const channelId = store.getChannelId(guildId);
    let tmp6;
    if (null != channelId) {
      const channel = authStore.getChannel(channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      tmp6 = type;
    }
    let obj = importDefault(698);
    obj = { source: null, current_guild_id: null, current_channel_id: null, current_channel_type: null };
    obj[0] = str;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = tmp6;
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
  let tmp14 = dependencyMap[str2.charAt(str2, 0)];
  if (tmp14 == null) {
    tmp14 = null;
  }
  obj = { type: "QUICKSWITCHER_SHOW" };
  const items = [str2.replace(regExp, ""), tmp14];
  const tmp15 = callback2(items, 2);
  const merged = Object.assign({ query: tmp15[0], queryMode: tmp15[1] });
  importDefault(709).dispatch(obj);
}
function _openInviteFromQuickSwitcher() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, invite) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw invite;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = invite;
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
              throw invite;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = invite;
              return obj;
            } else {
              const table = tmp5;
              invite = tmp2;
              invite = undefined;
              let obj3 = outer1_1(outer1_2[28]);
              c3 = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj3.resolveInvite(closure_0, "Quick Switcher");
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw invite;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = invite;
            return obj2;
          } else {
            invite = invite.invite;
            if (null != invite) {
              obj = invite(table[15]);
              obj3 = { type: "INVITE_MODAL_OPEN", invite: null, code: null, context: null };
              obj3[1] = invite;
              obj3[2] = closure_0;
              obj3[3] = constants.APP;
              obj.dispatch(obj3);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  const _openInviteFromQuickSwitcher = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Layers, ME: closure_12, AppContext: map1, AnalyticEvents: closure_14, AnalyticsLocations: closure_15, AnalyticsPages: closure_16 } = ME);
let obj = {};
obj[require("sortByMatchScore").AutocompleterQuerySymbols.USER] = require("sortByMatchScore").AutocompleterResultTypes.USER;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.TEXT_CHANNEL] = require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.VOICE_CHANNEL] = require("sortByMatchScore").AutocompleterResultTypes.VOICE_CHANNEL;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.GUILD] = require("sortByMatchScore").AutocompleterResultTypes.GUILD;
obj = {};
let merged = Object.assign(Object.freeze(obj));
obj[require("sortByMatchScore").AutocompleterQuerySymbols.GAME_PROFILE] = require("sortByMatchScore").AutocompleterResultTypes.GAME_PROFILE;
let closure_19 = Object.freeze(obj);
const regExp = new RegExp("^" + require("sortByMatchScore").AutocompleterQuerySymbols.USER + "|" + require("sortByMatchScore").AutocompleterQuerySymbols.TEXT_CHANNEL + "|" + require("sortByMatchScore").AutocompleterQuerySymbols.VOICE_CHANNEL + "|\\" + require("sortByMatchScore").AutocompleterQuerySymbols.GUILD + "|\\" + require("sortByMatchScore").AutocompleterQuerySymbols.GAME_PROFILE);
const result = require("fromType").fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export const getQuickSwitcherOptions = function getQuickSwitcherOptions(str) {
  let tmp = dependencyMap[str.charAt(str, 0)];
  if (tmp == null) {
    tmp = null;
  }
  const items = [str.replace(regExp, ""), tmp];
  const tmp2 = callback2(items, 2);
  return { query: tmp2[0], queryMode: tmp2[1] };
};
export const trackOpen = function trackOpen(arg0) {
  if (!closure_11.isOpen()) {
    const guildId = store2.getGuildId();
    const channelId = store.getChannelId(guildId);
    let tmp6;
    if (null != channelId) {
      const channel = authStore.getChannel(channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      tmp6 = type;
    }
    let obj = importDefault(698);
    obj = { source: null, current_guild_id: null, current_channel_id: null, current_channel_type: null };
    obj[0] = arg0;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = tmp6;
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
};
export { trackClose };
export { show };
export const hide = function hide() {
  trackClose(constants.QUICKSWITCHER_CLOSED);
  importDefault(709).dispatch({ type: "QUICKSWITCHER_HIDE" });
};
export const toggle = function toggle() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (closure_11.isOpen()) {
    trackClose(constants.QUICKSWITCHER_CLOSED);
    importDefault(709).dispatch({ type: "QUICKSWITCHER_HIDE" });
    const obj = importDefault(709);
  } else {
    show(str);
  }
};
export const search = function search(str) {
  let obj = importDefault(709);
  let tmp = dependencyMap[str.charAt(str, 0)];
  if (tmp == null) {
    tmp = null;
  }
  obj = { type: "QUICKSWITCHER_SEARCH" };
  const items = [str.replace(regExp, ""), tmp];
  const tmp2 = callback2(items, 2);
  obj = { query: tmp2[0], queryMode: tmp2[1] };
  const merged = Object.assign(obj);
  obj.dispatch(obj);
};
export const selectResult = function selectResult(selectedIndex) {
  let obj = importDefault(709);
  obj = { type: "QUICKSWITCHER_SELECT", selectedIndex };
  obj.dispatch(obj);
};
export const switchToResult = function switchToResult(record) {
  let QUICK_SWITCHER;
  let QUICK_SWITCHER2;
  let type;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(709);
  obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  obj = { page: constants2.QUICK_SWITCHER };
  if (require(7218) /* sortByMatchScore */.AutocompleterResultTypes.GUILD === type) {
    let tmp5Result = tmp5(5856);
    tmp5Result.transitionToGuild(record.id, { navigationReplace: true });
  } else if (tmp5(7218).AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = authStore.getChannel(record.id);
    if (null != channel) {
      tmp5Result = tmp5(4263);
      obj = { state: null, navigationReplace: true };
      const obj1 = { analyticsSource: null };
      obj1[0] = obj;
      obj[0] = obj1;
      tmp5Result.transitionToChannel(channel.id, obj);
    }
  } else if (tmp5(7218).AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = authStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        let tmpResult = tmp(4449);
        tmpResult.updateChatOpen(record.id, true);
      } else {
        tmpResult = tmp(5067);
        const voiceChannel = tmpResult.selectVoiceChannel(record.id);
      }
      const obj2 = { state: null, navigationReplace: true };
      const obj3 = { analyticsSource: null };
      obj3[0] = obj;
      obj2[0] = obj3;
      tmp5(4263).transitionToChannel(channel1.id, obj2);
      const tmp5Result1 = tmp5(4263);
    }
  } else if (tmp5(7218).AutocompleterResultTypes.USER === type) {
    const obj4 = { recipientIds: null, location: "Quickswitcher" };
    const items = [record.id];
    obj4[0] = items;
    tmp(4265).openPrivateChannel(obj4);
    const tmpResult1 = tmp(4265);
    tmp(10065).channelListScrollTo(closure_12, authStore.getDMFromUserId(record.id));
    const tmpResult2 = tmp(10065);
  } else if (tmp5(7218).AutocompleterResultTypes.GROUP_DM === type) {
    tmp5(4263).transitionToChannel(record.id, { navigationReplace: true });
    const tmp5Result2 = tmp5(4263);
    tmp(10065).channelListScrollTo(closure_12, record.id);
    const tmpResult3 = tmp(10065);
  } else if (tmp5(7218).AutocompleterResultTypes.APPLICATION === type) {
    activeLibraryApplication = activeLibraryApplication.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = closure_15);
    const resolved = Promise.resolve();
  } else if (tmp5(7218).AutocompleterResultTypes.GAME_PROFILE === type) {
    const obj5 = { gameId: null, gameProfileModalChecks: null, source: null };
    obj5[0] = record.id;
    const obj6 = { shouldOpenGameProfile: true, gameId: null };
    obj6[1] = record.id;
    obj5[1] = obj6;
    obj5[2] = tmp5(8785).GameProfileSources.QuickSwitcher;
    tmp(8779).openGameProfileModal(obj5);
    const tmpResult4 = tmp(8779);
  } else if (tmp5(7218).AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      (function openInviteFromQuickSwitcher(inviteCode) {
        const self = this;
        const apply = closure_23.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(record.inviteCode);
    } else {
      tmp(5745)(record.path, { navigationReplace: true });
    }
  } else if (tmp5(7218).AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === tmp37.PLAYGROUND) {
        const tmp5Result3 = tmp5(10066);
      } else if (record.record.type === tmp37.SHOP_ORBS_TAB) {
        const obj7 = { tab: null, analyticsLocations: null, analyticsSource: null };
        obj7[0] = CollectibleShopTab.ORBS;
        const items1 = [tmp(5601).QUICK_SWITCHER];
        obj7[1] = items1;
        obj7[2] = tmp(5601).QUICK_SWITCHER;
        tmp5(6897).openCollectiblesShop(obj7);
        const tmp5Result4 = tmp5(6897);
      } else {
        tmp(5745)(record.path, { navigationReplace: true });
      }
    }
  }
  importDefault(709).dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: record });
};