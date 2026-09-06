// === Module 10986: QuickSwitcherActionCreators ===

// Module 10986 (QuickSwitcherActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7244 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import ValidationUtilsDefault from "ValidationUtils" /* 8376 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8378 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8680 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import sortByMatchScore from "sortByMatchScore" /* 9835 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10987 */;
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 10988 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 7397 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 9834 */;

require = fn;
function getQuickSwitcherOptions(str) {
  const charAtResult = str.charAt(0);
  if (charAtResult === sortByMatchScore.AutocompleterQuerySymbols.USER) {
    if (charAtResult1 === sortByMatchScore.AutocompleterQuerySymbols.USER) {
      const items = [str.slice(2), sortByMatchScore.AutocompleterResultTypes.USER_GLOBAL];
      let items1 = items;
    }
    charAtResult1 = str.charAt(1);
    const obj = { query: null, queryMode: null };
    [obj.query, obj.queryMode] = _slicedToArray(items1, 2);
    return obj;
  }
  let tmp5 = closure_19[charAtResult];
  if (tmp5 == null) {
    tmp5 = null;
  }
  items1 = [str.replace(regExp, ""), tmp5];
}
function trackClose(QUICKSWITCHER_RESULT_SELECTED, type) {
  let obj = QuickSwitcherStore;
  const props = QuickSwitcherStore.getProps();
  ({ results, queryMode, query } = props);
  const guildId = SelectedGuildStore.getGuildId();
  const channelId = SelectedChannelStore.getChannelId(guildId);
  const obj2 = sortByMatchScore;
  const tmp6 = results[obj2.findNextSelectedResult(obj2, sortByMatchScore.FindResultDirections.DOWN, -1, results)];
  const isEmailResult = ValidationUtilsDefault.isEmail(query);
  const isPhoneNumberResult = ValidationUtilsDefault.isPhoneNumber(query);
  const isUserTagLikeResult = ValidationUtilsDefault.isUserTagLike(query);
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
  obj.current_channel_static_route = tmp14;
  obj.current_guild_id = guildId;
  if (queryMode == null) {
    queryMode = "GENERAL";
  }
  obj.query_mode = queryMode;
  obj.query_length = query.length;
  obj.max_query_length = props.maxQueryLength;
  obj.is_email_like = isEmailResult;
  obj.is_phone_like = isPhoneNumberResult;
  obj.is_username_like = isUserTagLikeResult;
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
  obj.query = tmp15;
  if (null == tmp6) {
    obj.top_result_type = null;
    let score = null;
    if (null != tmp6) {
      score = tmp6.score;
    }
    obj.top_result_score = score;
    obj.num_results_total = obj.getResultTotals();
    obj.num_results_users = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.USER);
    obj.num_results_text_channels = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL);
    obj.num_results_voice_channels = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL);
    obj.num_results_guilds = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.GUILD);
    obj.num_results_group_dms = obj.getResultTotals(sortByMatchScore.AutocompleterResultTypes.GROUP_DM);
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
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
    AnalyticsUtilsDefault.track(QUICKSWITCHER_RESULT_SELECTED, obj);
    const tmp7Result = AnalyticsUtilsDefault;
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
  if (!QuickSwitcherStore.isOpen()) {
    const guildId = SelectedGuildStore.getGuildId();
    const channelId = SelectedChannelStore.getChannelId(guildId);
    let tmp6;
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      tmp6 = type;
    }
    let obj = { source: str, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
  obj = { type: "QUICKSWITCHER_SHOW" };
  const merged = Object.assign(getQuickSwitcherOptions(str2));
  DispatcherDefault.dispatch(obj);
}
function switchToResult(record) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = DispatcherDefault;
  obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  obj = { page: constants2.QUICK_SWITCHER };
  if (sortByMatchScore.AutocompleterResultTypes.GUILD === type) {
    let tmp5Result = transitionToGuild;
    tmp5Result.transitionToGuild(record.id, { navigationReplace: true });
  } else if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = ChannelStore.getChannel(record.id);
    if (null != channel) {
      tmp5Result = transitionToChannel;
      obj = { state: null, navigationReplace: true };
      const obj1 = { analyticsSource: obj };
      obj.state = obj1;
      tmp5Result.transitionToChannel(channel.id, obj);
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = ChannelStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        let tmpResult = ChannelRTCActionCreatorsDefault;
        tmpResult.updateChatOpen(record.id, true);
      } else {
        tmpResult = SelectedChannelActionCreatorsDefault;
        const voiceChannel = tmpResult.selectVoiceChannel(record.id);
      }
      const obj2 = { state: null, navigationReplace: true };
      const obj3 = { analyticsSource: obj };
      obj2.state = obj3;
      transitionToChannel.transitionToChannel(channel1.id, obj2);
      const tmp5Result1 = transitionToChannel;
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
    const obj4 = { recipientIds: null, location: "Quickswitcher" };
    const items = [record.id];
    obj4.recipientIds = items;
    ChannelActionCreatorsDefault.openPrivateChannel(obj4);
    const tmpResult1 = ChannelActionCreatorsDefault;
    DimensionActionCreatorsDefault.channelListScrollTo(closure_1_12, ChannelStore.getDMFromUserId(record.id));
    const tmpResult2 = DimensionActionCreatorsDefault;
  } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
    transitionToChannel.transitionToChannel(record.id, { navigationReplace: true });
    const tmp5Result2 = transitionToChannel;
    DimensionActionCreatorsDefault.channelListScrollTo(closure_1_12, record.id);
    const tmpResult3 = DimensionActionCreatorsDefault;
  } else if (sortByMatchScore.AutocompleterResultTypes.APPLICATION === type) {
    const activeLibraryApplication = LibraryApplicationStore.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = __initData);
    const resolved = Promise.resolve();
  } else if (sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE === type) {
    const obj5 = { gameId: record.id, gameProfileModalChecks: null, source: null };
    const obj6 = { shouldOpenGameProfile: true, gameId: record.id };
    obj5.gameProfileModalChecks = obj6;
    obj5.source = GameProfileAnalyticUtils.GameProfileSources.QuickSwitcher;
    GameProfileActionCreatorsDefault.openGameProfileModal(obj5);
    const tmpResult4 = GameProfileActionCreatorsDefault;
  } else if (sortByMatchScore.AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      (function openInviteFromQuickSwitcher() {
        const self = this;
        const apply = closure_1_25.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(record.inviteCode);
    } else {
      safeTransitionToDefault(record.path, { navigationReplace: true });
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
    if (record.record.type !== InAppNavigationType.SETTINGS) {
      if (record.record.type === InAppNavigationType.PLAYGROUND) {
        PlaygroundAccessExperiment;
      } else if (record.record.type === InAppNavigationType.SHOP_ORBS_TAB) {
        const obj7 = { tab: CollectibleShopTab.ORBS, analyticsLocations: null, analyticsSource: null };
        const items1 = [AnalyticsLocationDefault.QUICK_SWITCHER];
        obj7.analyticsLocations = items1;
        obj7.analyticsSource = AnalyticsLocationDefault.QUICK_SWITCHER;
        CollectiblesActionCreators.openCollectiblesShop(obj7);
        const tmp5Result4 = CollectiblesActionCreators;
      } else {
        safeTransitionToDefault(record.path, { navigationReplace: true });
      }
    }
  }
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: record });
  const obj8 = { type: "QUICKSWITCHER_SWITCH_TO", result: record };
  const tmpResult5 = DispatcherDefault;
}
let closure_25 = async function _openInviteFromQuickSwitcher(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          let invite;
          let obj3 = InstantInviteActionCreatorsDefault;
          c3 = 1;
          c4 = 1;
          const obj1 = { value: obj3.resolveInvite(closure_0, "Quick Switcher"), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        invite = value.invite;
        if (null != invite) {
          obj = closure_130_1(closure_130_2[15]);
          obj3 = { type: "INVITE_MODAL_OPEN", invite, code: closure_129_0, context: closure_130_13.APP };
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
};
const InAppNavigationType = fn(5443).InAppNavigationType;
const ChannelRecordBase = fn(1961).ChannelRecordBase;
const Constants = fn(1074);
({ Layers, ME: closure_12, AppContext: map1, AnalyticEvents: closure_14, AnalyticsLocations: closure_15, AnalyticsPages: closure_16 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const CollectibleShopTab = fn(1076).CollectibleShopTab;
let obj = {};
obj[fn(9835).AutocompleterQuerySymbols.USER] = fn(9835).AutocompleterResultTypes.USER;
obj[fn(9835).AutocompleterQuerySymbols.TEXT_CHANNEL] = fn(9835).AutocompleterResultTypes.TEXT_CHANNEL;
obj[fn(9835).AutocompleterQuerySymbols.VOICE_CHANNEL] = fn(9835).AutocompleterResultTypes.VOICE_CHANNEL;
obj[fn(9835).AutocompleterQuerySymbols.GUILD] = fn(9835).AutocompleterResultTypes.GUILD;
obj[fn(9835).AutocompleterQuerySymbols.GAME_PROFILE] = fn(9835).AutocompleterResultTypes.GAME_PROFILE;
let closure_19 = Object.freeze(obj);
const regExp = new RegExp("^" + fn(9835).AutocompleterQuerySymbols.USER + "|" + fn(9835).AutocompleterQuerySymbols.TEXT_CHANNEL + "|" + fn(9835).AutocompleterQuerySymbols.VOICE_CHANNEL + "|\\" + fn(9835).AutocompleterQuerySymbols.GUILD + "|\\" + fn(9835).AutocompleterQuerySymbols.GAME_PROFILE);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export { getQuickSwitcherOptions };
export const trackOpen = function trackOpen(source) {
  if (!QuickSwitcherStore.isOpen()) {
    const guildId = SelectedGuildStore.getGuildId();
    const channelId = SelectedChannelStore.getChannelId(guildId);
    let tmp6;
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let type = null;
      if (null != channel) {
        type = channel.type;
      }
      tmp6 = type;
    }
    const obj = { source, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    obj.track(constants.QUICKSWITCHER_OPENED, obj);
  }
};
export { trackClose };
export { show };
export const hide = function hide() {
  trackClose(constants.QUICKSWITCHER_CLOSED);
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
};
export const toggle = function toggle() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "KEYBIND";
  }
  if (QuickSwitcherStore.isOpen()) {
    trackClose(constants.QUICKSWITCHER_CLOSED);
    DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
  } else {
    show(str);
  }
};
export const search = function search(arg0) {
  const obj = { type: "QUICKSWITCHER_SEARCH" };
  const merged = Object.assign(getQuickSwitcherOptions(arg0));
  obj.dispatch(obj);
};
export const selectResult = function selectResult(selectedIndex) {
  const obj = { type: "QUICKSWITCHER_SELECT", selectedIndex };
  obj.dispatch(obj);
};
export { switchToResult };
export const switchToResultInNewTab = function switchToResultInNewTab(type) {
  _require = type;
  type = type.type;
  if (require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL !== type) {
    if (tmp(9835).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
      if (tmp(9835).AutocompleterResultTypes.GROUP_DM !== type) {
        if (tmp(9835).AutocompleterResultTypes.DM !== type) {
          if (tmp(9835).AutocompleterResultTypes.USER === type) {
            let obj = DispatcherDefault;
            obj.dispatch({ type: "QUICKSWITCHER_HIDE" });
            trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
            obj = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
            DispatcherDefault.dispatch(obj);
            asyncGeneratorStep(async () => {
              if (c3 === 2) {
                c3 = 3;
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
                  c3 = 2;
                  if (0 === dependencyMap) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_128_0 = undefined;
                      let obj2 = tmp2(4573);
                      const obj1 = { recipientIds: null, location: "Quickswitcher", navigateToChannel: false };
                      const items = [tmp5.record.id];
                      obj1.recipientIds = items;
                      dependencyMap = 1;
                      c3 = 1;
                      obj2 = { value: null, done: false };
                      obj2.value = obj2.openPrivateChannel(obj1);
                      return obj2;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_128_0 = value;
                    obj = tmp5(10989);
                    obj.openChannelTabActive(closure_128_0, null);
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp16) {
                  c3 = tmp;
                  throw tmp16;
                }
              }
            })().catch(() => {

            });
            const promise = (async () => {
              if (c3 === 2) {
                c3 = 3;
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
                  c3 = 2;
                  if (0 === dependencyMap) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_128_0 = undefined;
                      let obj2 = tmp2(4573);
                      const obj1 = { recipientIds: null, location: "Quickswitcher", navigateToChannel: false };
                      const items = [tmp5.record.id];
                      obj1.recipientIds = items;
                      dependencyMap = 1;
                      c3 = 1;
                      obj2 = { value: null, done: false };
                      obj2.value = obj2.openPrivateChannel(obj1);
                      return obj2;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_128_0 = value;
                    obj = tmp5(10989);
                    obj.openChannelTabActive(closure_128_0, null);
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp16) {
                  c3 = tmp;
                  throw tmp16;
                }
              }
            })();
          } else {
            switchToResult(type);
          }
        }
      }
    }
  }
  const channel = ChannelStore.getChannel(type.record.id);
  if (null == channel) {
    switchToResult(type);
  } else {
    let guildId = channel.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
    trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
    obj = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
    DispatcherDefault.dispatch(obj);
    tmp(10989).openChannelTabActive(channel.id, guildId);
    const tmpResult = tmp(10989);
  }
};