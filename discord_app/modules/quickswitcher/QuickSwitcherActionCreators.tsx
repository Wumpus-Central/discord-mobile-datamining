// === Module 10205: QuickSwitcherActionCreators ===

// Module 10205 (QuickSwitcherActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import transitionToChannel from "transitionToChannel" /* 6000 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6872 */;
import transitionToGuild from "transitionToGuild" /* 7168 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7199 */;
import ValidationUtilsDefault from "ValidationUtils" /* 7592 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7594 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8069 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8418 */;
import sortByMatchScore from "sortByMatchScore" /* 10178 */;
import ChannelTabsActionCreators from "ChannelTabsActionCreators" /* 10210 */;
import DimensionActionCreatorsDefault from "DimensionActionCreators" /* 10211 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10212 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10217 */;
import PlaygroundAccessExperiment from "PlaygroundAccessExperiment" /* 10503 */;
import showChannelTabLimitToast from "showChannelTabLimitToast" /* 10504 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelTabsStore from "ChannelTabsStore" /* 10206 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2160 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 10177 */;

const require = globalThis.__r;

require = fn;
function getQuickSwitcherOptions(str) {
  const charAtResult = str.charAt(0);
  if (charAtResult === sortByMatchScore.AutocompleterQuerySymbols.USER) {
    if (charAtResult1 === sortByMatchScore.AutocompleterQuerySymbols.USER) {
      items = [str.slice(2), sortByMatchScore.AutocompleterResultTypes.USER_GLOBAL];
      let items1 = items;
    }
    charAtResult1 = str.charAt(1);
    const obj = { query: null, queryMode: null };
    [obj.query, obj.queryMode] = items1;
    return obj;
  }
  let tmp5 = closure_20[charAtResult];
  if (tmp5 == null) {
    tmp5 = null;
  }
  items1 = [str.replace(regExp, ""), tmp5];
}
function trackClose(QUICKSWITCHER_RESULT_SELECTED, type) {
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
  const obj6 = { current_channel_id: tmp13, current_channel_static_route: null, current_guild_id: null, query_mode: null, query_length: null, max_query_length: null, is_email_like: null, is_phone_like: null, is_username_like: null, query: null, top_result_type: null, top_result_score: null, num_results_total: null, num_results_users: null, num_results_text_channels: null, num_results_voice_channels: null, num_results_guilds: null, num_results_group_dms: null };
  let tmp14;
  if (tmp11) {
    tmp14 = channelId;
  }
  obj6.current_channel_static_route = tmp14;
  obj6.current_guild_id = guildId;
  if (queryMode == null) {
    queryMode = "GENERAL";
  }
  obj6.query_mode = queryMode;
  obj6.query_length = query.length;
  obj6.max_query_length = props.maxQueryLength;
  obj6.is_email_like = isEmailResult;
  obj6.is_phone_like = isPhoneNumberResult;
  obj6.is_username_like = isUserTagLikeResult;
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
  obj6.query = tmp15;
  if (null == tmp6) {
    obj6.top_result_type = null;
    let score = null;
    if (null != tmp6) {
      score = tmp6.score;
    }
    obj6.top_result_score = score;
    obj6.num_results_total = QuickSwitcherStore.getResultTotals();
    obj6.num_results_users = QuickSwitcherStore.getResultTotals(sortByMatchScore.AutocompleterResultTypes.USER);
    obj6.num_results_text_channels = QuickSwitcherStore.getResultTotals(sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL);
    obj6.num_results_voice_channels = QuickSwitcherStore.getResultTotals(sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL);
    obj6.num_results_guilds = QuickSwitcherStore.getResultTotals(sortByMatchScore.AutocompleterResultTypes.GUILD);
    obj6.num_results_group_dms = QuickSwitcherStore.getResultTotals(sortByMatchScore.AutocompleterResultTypes.GROUP_DM);
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let type1 = null;
      if (null != channel) {
        type1 = channel.type;
      }
      obj6.current_channel_type = type1;
    }
    if (null != type) {
      ({ type: type3, record } = type);
      if (null == type) {
        obj6.selected_type = null;
        obj6.selected_score = tmp27;
        obj6.selected_index = results.indexOf(type);
        if (sortByMatchScore.AutocompleterResultTypes.GUILD === type3) {
          obj6.selected_guild_id = record.id;
        } else {
          if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL !== type3) {
            if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL !== type3) {
              if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type3) {
                obj6.selected_channel_id = record.id;
              } else if (sortByMatchScore.AutocompleterResultTypes.USER === type3) {
                obj6.selected_user_id = record.id;
              }
            }
          }
          if (record instanceof ChannelRecordBase) {
            let guild_id = null;
            if (null != record.guild_id) {
              guild_id = record.guild_id;
            }
            obj6.selected_guild_id = guild_id;
          }
          obj6.selected_channel_id = record.id;
        }
      } else if (type.type === sortByMatchScore.AutocompleterResultTypes.IN_APP_NAVIGATION) {
        let type2 = `${type.type}_${type.record.type}`;
      } else {
        type2 = type.type;
      }
    }
    AnalyticsUtilsDefault.track(QUICKSWITCHER_RESULT_SELECTED, obj6);
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
    const obj2 = { source: str, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    AnalyticsUtilsDefault.track(constants.QUICKSWITCHER_OPENED, obj2);
  }
  const merged = Object.assign(getQuickSwitcherOptions(str2));
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SHOW" });
  const obj4 = { type: "QUICKSWITCHER_SHOW" };
}
function switchToResult(record) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, record);
  ({ type, record } = record);
  const obj2 = { page: constants2.QUICK_SWITCHER };
  if (sortByMatchScore.AutocompleterResultTypes.GUILD === type) {
    transitionToGuild.transitionToGuild(record.id, { navigationReplace: true });
    const tmp5Result = transitionToGuild;
  } else if (sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL === type) {
    const channel = ChannelStore.getChannel(record.id);
    if (null != channel) {
      const obj3 = { state: null, navigationReplace: true };
      const obj4 = { analyticsSource: obj2 };
      obj3.state = obj4;
      transitionToChannel.transitionToChannel(channel.id, obj3);
      const tmp5Result7 = transitionToChannel;
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL === type) {
    const channel1 = ChannelStore.getChannel(record.id);
    if (null != channel1) {
      if (flag) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(record.id, true);
        const tmpResult = ChannelRTCActionCreatorsDefault;
      } else {
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(record.id);
        const tmpResult7 = SelectedChannelActionCreatorsDefault;
        ChannelTabsActionCreators.showCallViewOnJoin(record.id);
        const tmp5Result8 = ChannelTabsActionCreators;
      }
      const obj5 = { state: null, navigationReplace: true };
      const obj6 = { analyticsSource: obj2 };
      obj5.state = obj6;
      transitionToChannel.transitionToChannel(channel1.id, obj5);
      const tmp5Result9 = transitionToChannel;
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
    const obj7 = { recipientIds: null, location: "Quickswitcher" };
    items = [record.id];
    obj7.recipientIds = items;
    ChannelActionCreatorsDefault.openPrivateChannel(obj7);
    const tmpResult8 = ChannelActionCreatorsDefault;
    DimensionActionCreatorsDefault.channelListScrollTo(state, ChannelStore.getDMFromUserId(record.id));
    const tmpResult9 = DimensionActionCreatorsDefault;
  } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
    transitionToChannel.transitionToChannel(record.id, { navigationReplace: true });
    const tmp5Result10 = transitionToChannel;
    DimensionActionCreatorsDefault.channelListScrollTo(state, record.id);
    const tmpResult10 = DimensionActionCreatorsDefault;
  } else if (sortByMatchScore.AutocompleterResultTypes.APPLICATION === type) {
    const activeLibraryApplication = LibraryApplicationStore.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = closure_1_16);
    const resolved = Promise.resolve();
  } else if (sortByMatchScore.AutocompleterResultTypes.GAME_PROFILE === type) {
    const obj8 = { gameId: record.id, gameProfileModalChecks: null, source: null };
    const obj9 = { shouldOpenGameProfile: true, gameId: record.id };
    obj8.gameProfileModalChecks = obj9;
    obj8.source = GameProfileAnalyticUtils.GameProfileSources.QuickSwitcher;
    GameProfileActionCreatorsDefault.openGameProfileModal(obj8);
    const tmpResult11 = GameProfileActionCreatorsDefault;
  } else if (sortByMatchScore.AutocompleterResultTypes.LINK === type) {
    if (null != record.inviteCode) {
      (function openInviteFromQuickSwitcher() {
        const self = this;
        const apply = closure_1_27.apply;
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
        const obj10 = { tab: CollectibleShopTab.ORBS, analyticsLocations: null, analyticsSource: null };
        const items1 = [AnalyticsLocationDefault.QUICK_SWITCHER];
        obj10.analyticsLocations = items1;
        obj10.analyticsSource = AnalyticsLocationDefault.QUICK_SWITCHER;
        CollectiblesActionCreators.openCollectiblesShop(obj10);
        const tmp5Result12 = CollectiblesActionCreators;
      } else {
        safeTransitionToDefault(record.path, { navigationReplace: true });
      }
    }
  }
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: record });
  const obj11 = { type: "QUICKSWITCHER_SWITCH_TO", result: record };
  const tmpResult12 = DispatcherDefault;
}
let closure_27 = async function _openInviteFromQuickSwitcher(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          let invite;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: InstantInviteActionCreatorsDefault.resolveInvite(closure_0, "Quick Switcher"), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        invite = value.invite;
        if (null != invite) {
          const obj7 = { type: "INVITE_MODAL_OPEN", invite, code: closure_129_0, context: closure_130_14.APP };
          closure_130_1(closure_130_2[16]).dispatch(obj7);
          const obj = closure_130_1(closure_130_2[16]);
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
const InAppNavigationType = fn(6900).InAppNavigationType;
const ChannelRecordBase = fn(5096).ChannelRecordBase;
const Constants = fn(1072);
({ Layers, ME: map1, AppContext: closure_14, AnalyticEvents: closure_15, AnalyticsLocations: closure_16, AnalyticsPages: closure_17 } = Constants);
const isStaticChannelRoute = fn(5099).isStaticChannelRoute;
const CollectibleShopTab = fn(1074).CollectibleShopTab;
let obj = {};
obj[fn(10178).AutocompleterQuerySymbols.USER] = fn(10178).AutocompleterResultTypes.USER;
obj[fn(10178).AutocompleterQuerySymbols.TEXT_CHANNEL] = fn(10178).AutocompleterResultTypes.TEXT_CHANNEL;
obj[fn(10178).AutocompleterQuerySymbols.VOICE_CHANNEL] = fn(10178).AutocompleterResultTypes.VOICE_CHANNEL;
obj[fn(10178).AutocompleterQuerySymbols.GUILD] = fn(10178).AutocompleterResultTypes.GUILD;
obj[fn(10178).AutocompleterQuerySymbols.GAME_PROFILE] = fn(10178).AutocompleterResultTypes.GAME_PROFILE;
let closure_20 = Object.freeze(obj);
const regExp = new RegExp("^" + fn(10178).AutocompleterQuerySymbols.USER + "|" + fn(10178).AutocompleterQuerySymbols.TEXT_CHANNEL + "|" + fn(10178).AutocompleterQuerySymbols.VOICE_CHANNEL + "|\\" + fn(10178).AutocompleterQuerySymbols.GUILD + "|\\" + fn(10178).AutocompleterQuerySymbols.GAME_PROFILE);
let items = [, , ];
({ SETTINGS: arr[0], PLAYGROUND: arr[1], SHOP_ORBS_TAB: arr[2] } = InAppNavigationType);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quickswitcher/QuickSwitcherActionCreators.tsx");

export { getQuickSwitcherOptions };
export function trackOpen(source) {
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
    const obj2 = { source, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    AnalyticsUtilsDefault.track(constants.QUICKSWITCHER_OPENED, obj2);
  }
}
export { trackClose };
export { show };
export function hide() {
  trackClose(constants.QUICKSWITCHER_CLOSED);
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
}
export function toggle() {
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
}
export function search(arg0) {
  const merged = Object.assign(getQuickSwitcherOptions(arg0));
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SEARCH" });
}
export function selectResult(selectedIndex) {
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex });
}
export { switchToResult };
export function switchToResultInNewTab(type) {
  _require = type;
  if (ChannelTabsStore.isActiveTabFresh()) {
    switchToResult(type);
  } else {
    type = type.type;
    if (require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL !== type) {
      if (tmp(tmp2[13]).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
        if (tmp(tmp2[13]).AutocompleterResultTypes.GROUP_DM !== type) {
          if (tmp(tmp2[13]).AutocompleterResultTypes.DM !== type) {
            if (tmp(tmp2[13]).AutocompleterResultTypes.USER === type) {
              require("Dispatcher").dispatch({ type: "QUICKSWITCHER_HIDE" });
              trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
              let obj2 = require("Dispatcher");
              let obj4 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
              require("Dispatcher").dispatch(obj4);
              let obj3 = require("Dispatcher");
              if (tmpResult.ensureRoomForChannelTab()) {
                importDefault = ChannelTabsStore.getActiveTabId();
                path(function*() {
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp4 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
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
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          closure_128_0 = undefined;
                          const obj5 = { recipientIds: null, location: "Quickswitcher", navigateToChannel: false };
                          items = [tmp5.record.id];
                          obj5.recipientIds = items;
                          dependencyMap = 1;
                          c3 = 1;
                          const obj6 = { value: tmp2(8069).openPrivateChannel(obj5), done: false };
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
                        closure_128_0 = value;
                        const obj = tmp5(10210);
                        obj.openChannelTabActive(closure_128_0, null, "quick_switcher", closure_129_1);
                        c3 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp18) {
                      c3 = tmp;
                      throw tmp18;
                    }
                  }
                })().catch(() => {

                });
                const promise = path(function*() {
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp4 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
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
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          closure_128_0 = undefined;
                          const obj5 = { recipientIds: null, location: "Quickswitcher", navigateToChannel: false };
                          items = [tmp5.record.id];
                          obj5.recipientIds = items;
                          dependencyMap = 1;
                          c3 = 1;
                          const obj6 = { value: tmp2(8069).openPrivateChannel(obj5), done: false };
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
                        closure_128_0 = value;
                        const obj = tmp5(10210);
                        obj.openChannelTabActive(closure_128_0, null, "quick_switcher", closure_129_1);
                        c3 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp18) {
                      c3 = tmp;
                      throw tmp18;
                    }
                  }
                })();
              }
              tmpResult = tmp(tmp2[30]);
            } else {
              function navigateInNewTab(fn) {
                if (ChannelTabsStore.isEnabled()) {
                  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
                  trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, result);
                  const obj4 = { type: "QUICKSWITCHER_SWITCH_TO", result };
                  DispatcherDefault.dispatch(obj4);
                  if (obj5.ensureRoomForChannelTab()) {
                    let tmp13 = 0 !== ChannelTabsStore.getTabs().length;
                    if (tmp13) {
                      tmp13 = null == ChannelTabsActionCreators.openCopyOfActiveTab("quick_switcher");
                      const tmp12Result = ChannelTabsActionCreators;
                    }
                    if (!tmp13) {
                      fn();
                    }
                  }
                  obj5 = showChannelTabLimitToast;
                } else {
                  switchToResult(result);
                }
              }
              if (tmp(tmp2[13]).AutocompleterResultTypes.GUILD === type) {
                navigateInNewTab(() => transitionToGuild.transitionToGuild(result.record.id, { navigationReplace: true }));
              } else if (tmp(tmp2[13]).AutocompleterResultTypes.LINK === type) {
                record = type.record;
                if (null != record.inviteCode) {
                  switchToResult(type);
                } else {
                  navigateInNewTab(() => safeTransitionToDefault(record.path, { navigationReplace: true }));
                }
              } else if (tmp(tmp2[13]).AutocompleterResultTypes.IN_APP_NAVIGATION === type) {
                if (set.has(type.record.type)) {
                  switchToResult(type);
                } else {
                  path = type.record.path;
                  navigateInNewTab(() => safeTransitionToDefault(path, { navigationReplace: true }));
                }
              } else {
                switchToResult(type);
              }
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
      require("Dispatcher").dispatch({ type: "QUICKSWITCHER_HIDE" });
      trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
      let obj7 = require("Dispatcher");
      let obj5 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
      require("Dispatcher").dispatch(obj5);
      const obj8 = require("Dispatcher");
      if (tmpResult3.ensureRoomForChannelTab()) {
        tmp(tmp2[21]).openChannelTabActive(channel.id, guildId, "quick_switcher");
        const tmpResult4 = tmp(tmp2[21]);
      }
      tmpResult3 = tmp(tmp2[30]);
    }
  }
}