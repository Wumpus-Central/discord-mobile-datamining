// === Module 9094: trackClose ===

// Module 9094 (trackClose)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionToChannel from "transitionToChannel" /* 4768 */;
import _modDef4770 from "module_4770" /* 4770 */;
import _modDef4975 from "module_4975" /* 4975 */;
import openCollectiblesShop from "openCollectiblesShop" /* 5300 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import _safeTransitionToDefault from "_safeTransitionTo" /* 7211 */;
import transitionToGuild from "transitionToGuild" /* 7302 */;
import sortByMatchScore from "sortByMatchScore" /* 7593 */;
import _modDef8666 from "module_8666" /* 8666 */;
import obj132Default from "obj132" /* 8781 */;
import dispatcherDefault2 from "dispatcher" /* 9095 */;
import _modDef9096 from "module_9096" /* 9096 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 9101 */;
import apexExperiment from "apexExperiment" /* 12034 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { InAppNavigationType } from "fromType" /* 6715 */;
import { ChannelRecordBase } from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import setLibraryApplications from "setLibraryApplications" /* 4512 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import handleConnectionOpen2 from "handleConnectionOpen" /* 4197 */;
import handleConnectionOpen3 from "handleConnectionOpen" /* 7592 */;
import ME from "ME" /* 676 */;
import { isStaticChannelRoute } from "set" /* 1398 */;
import { CollectibleShopTab } from "items" /* 678 */;

require = fn;
function trackClose(QUICKSWITCHER_CLOSED, type) {
  let obj = closure_11;
  const props = closure_11.getProps();
  ({ results, queryMode, query } = props);
  const guildId = store2.getGuildId();
  const channelId = store.getChannelId(guildId);
  const obj2 = sortByMatchScore;
  const tmp6 = results[obj2.findNextSelectedResult(obj2, sortByMatchScore.FindResultDirections.DOWN, -1, results)];
  const isEmailResult = obj132Default.isEmail(query);
  const isPhoneNumberResult = obj132Default.isPhoneNumber(query);
  const isUserTagLikeResult = obj132Default.isUserTagLike(query);
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
    obj[13] = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.USER);
    obj[14] = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL);
    obj[15] = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL);
    obj[16] = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.GUILD);
    obj[17] = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.GROUP_DM);
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
        if (sortByMatchScore.AutocompleterResultTypes.GUILD === type3) {
          obj.selected_guild_id = record.id;
        } else {
          if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL !== type3) {
            if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL !== type3) {
              if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type3) {
                obj.selected_channel_id = record.id;
              } else if (sortByMatchScore.AutocompleterResultTypes.USER === type3) {
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
      } else if (type.type === sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION) {
        let type2 = `${type.type}_${type.record.type}`;
      } else {
        type2 = type.type;
      }
    }
    expandEventPropertiesDefault.track(QUICKSWITCHER_CLOSED, obj);
    const tmp7Result = expandEventPropertiesDefault;
  } else if (tmp6.type === sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION) {
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
    let obj = { source: null, current_guild_id: null, current_channel_id: null, current_channel_type: null };
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
  dispatcherDefault.dispatch(obj);
}
function _openInviteFromQuickSwitcher() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let obj3 = closure_1_1(closure_1_2[28]);
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  closure_23 = tmp;
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
const result = require("obj132").fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

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
    const obj = { source: null, current_guild_id: null, current_channel_id: null, current_channel_type: null };
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
  dispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
};
export const toggle = function toggle() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (closure_11.isOpen()) {
    trackClose(constants.QUICKSWITCHER_CLOSED);
    dispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
  } else {
    show(str);
  }
};
export const search = function search(str) {
  let obj = dispatcherDefault;
  let tmp = dependencyMap[str.charAt(str, 0)];
  if (tmp == null) {
    tmp = null;
  }
  const items = [str.replace(regExp, ""), tmp];
  const tmp2 = callback2(items, 2);
  obj = { query: tmp2[0], queryMode: tmp2[1] };
  const merged = Object.assign(obj);
  obj.dispatch(obj);
};
export const selectResult = function selectResult(selectedIndex) {
  const obj = { type: "QUICKSWITCHER_SELECT", selectedIndex };
  obj.dispatch(obj);
};
export const switchToResult = function switchToResult(record) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = dispatcherDefault;
  obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  obj = { page: constants2.QUICK_SWITCHER };
  if (sortByMatchScore.AutocompleterResultTypes.GUILD === type) {
    let tmp5Result = transitionToGuild;
    tmp5Result.transitionToGuild(record.id, { navigationReplace: true });
  } else if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = authStore.getChannel(record.id);
    if (null != channel) {
      tmp5Result = transitionToChannel;
      obj = { state: null, navigationReplace: true };
      obj1 = { analyticsSource: null };
      obj1[0] = obj;
      obj[0] = obj1;
      tmp5Result.transitionToChannel(channel.id, obj);
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = authStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        let tmpResult = _modDef8666;
        tmpResult.updateChatOpen(record.id, true);
      } else {
        tmpResult = _modDef4975;
        const voiceChannel = tmpResult.selectVoiceChannel(record.id);
      }
      const obj2 = { state: null, navigationReplace: true };
      const obj3 = { analyticsSource: null };
      obj3[0] = obj;
      obj2[0] = obj3;
      transitionToChannel.transitionToChannel(channel1.id, obj2);
      const tmp5Result1 = transitionToChannel;
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
    const obj4 = { recipientIds: null, location: "Quickswitcher" };
    const items = [record.id];
    obj4[0] = items;
    _modDef4770.openPrivateChannel(obj4);
    const tmpResult1 = _modDef4770;
    dispatcherDefault2.channelListScrollTo(closure_12, authStore.getDMFromUserId(record.id));
    const tmpResult2 = dispatcherDefault2;
  } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
    transitionToChannel.transitionToChannel(record.id, { navigationReplace: true });
    const tmp5Result2 = transitionToChannel;
    dispatcherDefault2.channelListScrollTo(closure_12, record.id);
    const tmpResult3 = dispatcherDefault2;
  } else if (sortByMatchScore.AutocompleterResultTypes.APPLICATION === type) {
    activeLibraryApplication = activeLibraryApplication.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = closure_15);
    const resolved = Promise.resolve();
  } else if (sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE === type) {
    const obj5 = { gameId: null, gameProfileModalChecks: null, source: null };
    obj5[0] = record.id;
    const obj6 = { shouldOpenGameProfile: true, gameId: null };
    obj6[1] = record.id;
    obj5[1] = obj6;
    obj5[2] = GameProfileEmbedAction.GameProfileSources.QuickSwitcher;
    _modDef9096.openGameProfileModal(obj5);
    const tmpResult4 = _modDef9096;
  } else if (sortByMatchScore.AutocompleterResultTypes.LINK === type) {
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
      _safeTransitionToDefault(record.path, { navigationReplace: true });
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === InAppNavigationType.PLAYGROUND) {
        apexExperiment;
      } else if (record.record.type === InAppNavigationType.SHOP_ORBS_TAB) {
        const obj7 = { tab: null, analyticsLocations: null, analyticsSource: null };
        obj7[0] = CollectibleShopTab.ORBS;
        const items1 = [QUICK_SWITCHERDefault.QUICK_SWITCHER];
        obj7[1] = items1;
        obj7[2] = QUICK_SWITCHERDefault.QUICK_SWITCHER;
        openCollectiblesShop.openCollectiblesShop(obj7);
        const tmp5Result4 = openCollectiblesShop;
      } else {
        _safeTransitionToDefault(record.path, { navigationReplace: true });
      }
    }
  }
  dispatcherDefault.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: record });
  const tmpResult5 = dispatcherDefault;
};