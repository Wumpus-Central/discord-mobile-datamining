// discord_app/modules/quickswitcher/QuickSwitcherActionCreators.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import setDefault from "../../utils/ValidationUtils.tsx";
import sortByMatchScore from "../autocompleter/index.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import { InAppNavigationType } from "../autocompleter/record/InAppNavigationRecord.tsx";
import { ChannelRecordBase } from "../../records/ChannelRecord.tsx";
import closure_7 from "../../stores/ChannelStore.tsx";
import closure_8 from "../../stores/LibraryApplicationStore.tsx";
import closure_9 from "../../stores/SelectedChannelStore.tsx";
import closure_10 from "../../stores/SelectedGuildStore.tsx";
import closure_11 from "QuickSwitcherStore.tsx";
import ME from "../../Constants.tsx";
import { isStaticChannelRoute } from "../channel/ChannelConstants.tsx";
import { CollectibleShopTab } from "../collectibles/CollectiblesShopConstants.tsx";

require = arg1;
function getQuickSwitcherOptions(str) {
  const charAtResult = str.charAt(0);
  if (charAtResult === sortByMatchScore.AutocompleterQuerySymbols.USER) {
    if (charAtResult1 === tmp2(9946).AutocompleterQuerySymbols.USER) {
      const items = [str.slice(2), tmp2(9946).AutocompleterResultTypes.USER_GLOBAL];
      let items1 = items;
    }
    charAtResult1 = str.charAt(1);
    const obj = { query: null, queryMode: null };
    [obj[0], obj[1]] = callback2(items1, 2);
    return obj;
  }
  let tmp5 = table[charAtResult];
  if (tmp5 == null) {
    tmp5 = null;
  }
  items1 = [str.replace(regExp, ""), tmp5];
}
function trackClose(QUICKSWITCHER_RESULT_SELECTED, type) {
  let obj = closure_11;
  const props = closure_11.getProps();
  ({ results, queryMode, query } = props);
  const guildId = store2.getGuildId();
  const channelId = store.getChannelId(guildId);
  const obj2 = sortByMatchScore;
  const tmp6 = results[obj2.findNextSelectedResult(obj2, sortByMatchScore.FindResultDirections.DOWN, -1, results)];
  const isEmailResult = setDefault.isEmail(query);
  const obj3 = setDefault;
  const tmp7 = importDefault;
  const isPhoneNumberResult = setDefault.isPhoneNumber(query);
  const obj4 = setDefault;
  const isUserTagLikeResult = setDefault.isUserTagLike(query);
  let tmp11 = null != channelId;
  if (tmp11) {
    tmp11 = isStaticChannelRoute(channelId);
  }
  let tmp13;
  if (!tmp11) {
    tmp13 = channelId;
  }
  obj = {
    current_channel_id: tmp13,
    current_channel_static_route: null,
    current_guild_id: null,
    query_mode: null,
    query_length: null,
    max_query_length: null,
    is_email_like: null,
    is_phone_like: null,
    is_username_like: null,
    query: null,
    top_result_type: null,
    top_result_score: null,
    num_results_total: null,
    num_results_users: null,
    num_results_text_channels: null,
    num_results_voice_channels: null,
    num_results_guilds: null,
    num_results_group_dms: null,
  };
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
    obj[13] = obj.getResultTotals(tmp4(9946).AutocompleterResultTypes.USER);
    obj[14] = obj.getResultTotals(tmp4(9946).AutocompleterResultTypes.TEXT_CHANNEL);
    obj[15] = obj.getResultTotals(tmp4(9946).AutocompleterResultTypes.VOICE_CHANNEL);
    obj[16] = obj.getResultTotals(tmp4(9946).AutocompleterResultTypes.GUILD);
    obj[17] = obj.getResultTotals(tmp4(9946).AutocompleterResultTypes.GROUP_DM);
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
        if (tmp4(9946).AutocompleterResultTypes.GUILD === type3) {
          obj.selected_guild_id = record.id;
        } else {
          if (tmp4(9946).AutocompleterResultTypes.TEXT_CHANNEL !== type3) {
            if (tmp4(9946).AutocompleterResultTypes.VOICE_CHANNEL !== type3) {
              if (tmp4(9946).AutocompleterResultTypes.GROUP_DM === type3) {
                obj.selected_channel_id = record.id;
              } else if (tmp4(9946).AutocompleterResultTypes.USER === type3) {
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
      } else if (type.type === tmp4(9946).AutocompleterResultTypes.IN_APP_NAVIGATION) {
        let type2 = `${type.type}_${type.record.type}`;
      } else {
        type2 = type.type;
      }
    }
    expandEventPropertiesDefault.track(QUICKSWITCHER_RESULT_SELECTED, obj);
  } else if (tmp6.type === tmp4(9946).AutocompleterResultTypes.IN_APP_NAVIGATION) {
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
    let obj = expandEventPropertiesDefault;
    obj = { source: null, current_guild_id: null, current_channel_id: null, current_channel_type: null };
    obj[0] = str;
    obj[1] = guildId;
    obj[2] = channelId;
    obj[3] = tmp6;
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
  obj = { type: "QUICKSWITCHER_SHOW" };
  const merged = Object.assign(getQuickSwitcherOptions(str2));
  dispatcherDefault.dispatch(obj);
}
function switchToResult(record) {
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
    let tmp5Result = tmp5(6195);
    tmp5Result.transitionToGuild(record.id, { navigationReplace: true });
  } else if (tmp5(9946).AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = authStore.getChannel(record.id);
    if (null != channel) {
      tmp5Result = tmp5(4489);
      obj = { state: null, navigationReplace: true };
      obj1 = { analyticsSource: null };
      obj1[0] = obj;
      obj[0] = obj1;
      tmp5Result.transitionToChannel(channel.id, obj);
    }
  } else if (tmp5(9946).AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = authStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        let tmpResult = tmp(4721);
        tmpResult.updateChatOpen(record.id, true);
      } else {
        tmpResult = tmp(5363);
        const voiceChannel = tmpResult.selectVoiceChannel(record.id);
      }
      const obj2 = { state: null, navigationReplace: true };
      const obj3 = { analyticsSource: null };
      obj3[0] = obj;
      obj2[0] = obj3;
      tmp5(4489).transitionToChannel(channel1.id, obj2);
      const tmp5Result1 = tmp5(4489);
    }
  } else if (tmp5(9946).AutocompleterResultTypes.USER === type) {
    const obj4 = { recipientIds: null, location: "Quickswitcher" };
    const items = [record.id];
    obj4[0] = items;
    tmp(4491).openPrivateChannel(obj4);
    const tmpResult1 = tmp(4491);
    tmp(10945).channelListScrollTo(closure_12, authStore.getDMFromUserId(record.id));
    const tmpResult2 = tmp(10945);
  } else if (tmp5(9946).AutocompleterResultTypes.GROUP_DM === type) {
    tmp5(4489).transitionToChannel(record.id, { navigationReplace: true });
    const tmp5Result2 = tmp5(4489);
    tmp(10945).channelListScrollTo(closure_12, record.id);
    const tmpResult3 = tmp(10945);
  } else if (tmp5(9946).AutocompleterResultTypes.APPLICATION === type) {
    activeLibraryApplication = activeLibraryApplication.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = closure_15);
    const resolved = Promise.resolve();
  } else if (tmp5(9946).AutocompleterResultTypes.GAME_PROFILE === type) {
    const obj5 = { gameId: null, gameProfileModalChecks: null, source: null };
    obj5[0] = record.id;
    const obj6 = { shouldOpenGameProfile: true, gameId: null };
    obj6[1] = record.id;
    obj5[1] = obj6;
    obj5[2] = tmp5(8827).GameProfileSources.QuickSwitcher;
    tmp(8821).openGameProfileModal(obj5);
    const tmpResult4 = tmp(8821);
  } else if (tmp5(9946).AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      (function openInviteFromQuickSwitcher(inviteCode) {
        const self = this;
        const apply = closure_25.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(record.inviteCode);
    } else {
      tmp(6099)(record.path, { navigationReplace: true });
    }
  } else if (tmp5(9946).AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === tmp37.PLAYGROUND) {
        const tmp5Result3 = tmp5(10946);
      } else if (record.record.type === tmp37.SHOP_ORBS_TAB) {
        const obj7 = { tab: null, analyticsLocations: null, analyticsSource: null };
        obj7[0] = CollectibleShopTab.ORBS;
        const items1 = [tmp(5981).QUICK_SWITCHER];
        obj7[1] = items1;
        obj7[2] = tmp(5981).QUICK_SWITCHER;
        tmp5(7295).openCollectiblesShop(obj7);
        const tmp5Result4 = tmp5(7295);
      } else {
        tmp(6099)(record.path, { navigationReplace: true });
      }
    }
  }
  dispatcherDefault.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: record });
}
function _openInviteFromQuickSwitcher() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function* (arg0, invite) {
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
              let obj3 = closure_1_1(closure_1_2[29]);
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({
  Layers,
  ME: closure_12,
  AppContext: map1,
  AnalyticEvents: closure_14,
  AnalyticsLocations: closure_15,
  AnalyticsPages: closure_16,
} = ME);
let obj = {};
obj[require("sortByMatchScore").AutocompleterQuerySymbols.USER] =
  require("sortByMatchScore").AutocompleterResultTypes.USER;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.TEXT_CHANNEL] =
  require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.VOICE_CHANNEL] =
  require("sortByMatchScore").AutocompleterResultTypes.VOICE_CHANNEL;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.GUILD] =
  require("sortByMatchScore").AutocompleterResultTypes.GUILD;
obj[require("sortByMatchScore").AutocompleterQuerySymbols.GAME_PROFILE] =
  require("sortByMatchScore").AutocompleterResultTypes.GAME_PROFILE;
let closure_19 = Object.freeze(obj);
const regExp = new RegExp(
  "^" +
    require("sortByMatchScore").AutocompleterQuerySymbols.USER +
    "|" +
    require("sortByMatchScore").AutocompleterQuerySymbols.TEXT_CHANNEL +
    "|" +
    require("sortByMatchScore").AutocompleterQuerySymbols.VOICE_CHANNEL +
    "|\\" +
    require("sortByMatchScore").AutocompleterQuerySymbols.GUILD +
    "|\\" +
    require("sortByMatchScore").AutocompleterQuerySymbols.GAME_PROFILE,
);
const result = require("set").fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export { getQuickSwitcherOptions };
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
    let obj = expandEventPropertiesDefault;
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
    const obj = dispatcherDefault;
  } else {
    show(str);
  }
};
export const search = function search(arg0) {
  let obj = dispatcherDefault;
  obj = { type: "QUICKSWITCHER_SEARCH" };
  const merged = Object.assign(getQuickSwitcherOptions(arg0));
  obj.dispatch(obj);
};
export const selectResult = function selectResult(selectedIndex) {
  let obj = dispatcherDefault;
  obj = { type: "QUICKSWITCHER_SELECT", selectedIndex };
  obj.dispatch(obj);
};
export { switchToResult };
export const switchToResultInNewTab = function switchToResultInNewTab(type) {
  const _require = type;
  type = type.type;
  if (require("../autocompleter/index.tsx").AutocompleterResultTypes.TEXT_CHANNEL !== type) {
    if (tmp(9946).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
      if (tmp(9946).AutocompleterResultTypes.GROUP_DM !== type) {
        if (tmp(9946).AutocompleterResultTypes.DM !== type) {
          if (tmp(9946).AutocompleterResultTypes.USER === type) {
            let obj = dispatcherDefault;
            obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
            trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
            obj = { type: "QUICKSWITCHER_SWITCH_TO", result: null };
            obj[1] = type;
            dispatcherDefault.dispatch(obj);
            let obj2 = dispatcherDefault;
            callback(function* () {
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
                      closure_1 = tmp2;
                      closure_0 = tmp5;
                      closure_0 = undefined;
                      let obj2 = closure_1_1(4491);
                      obj1 = { recipientIds: null, location: "Quickswitcher", navigateToChannel: false };
                      const items = [closure_1_0.record.id];
                      obj1[0] = items;
                      dependencyMap = 1;
                      c3 = 1;
                      obj2 = { value: null, done: false };
                      obj2[0] = obj2.openPrivateChannel(obj1);
                      return obj2;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value: null, done: true };
                    obj3[0] = arg1;
                    return obj3;
                  } else {
                    closure_0 = arg1;
                    obj = closure_1_0(10947);
                    obj.openChannelTabActive(closure_0, null);
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp16) {
                  c3 = tmp;
                  throw tmp16;
                }
              }
            })().catch(() => {});
          } else {
            switchToResult(type);
          }
        }
      }
    }
  }
  const channel = authStore.getChannel(type.record.id);
  if (null == channel) {
    switchToResult(type);
  } else {
    let guildId = channel.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    dispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
    trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
    const obj5 = dispatcherDefault;
    obj = { type: "QUICKSWITCHER_SWITCH_TO", result: null };
    obj[1] = type;
    dispatcherDefault.dispatch(obj);
    const obj6 = dispatcherDefault;
    tmp(10947).openChannelTabActive(channel.id, guildId);
    const tmpResult = tmp(10947);
  }
};
