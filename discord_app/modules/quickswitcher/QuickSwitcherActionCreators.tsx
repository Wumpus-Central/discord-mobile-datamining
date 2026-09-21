// discord_app/modules/quickswitcher/QuickSwitcherActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import transitionToChannel from "../routing/transitionToChannel.tsx";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import ChannelRTCActionCreatorsDefault from "../../actions/ChannelRTCActionCreators.tsx";
import SelectedChannelActionCreatorsDefault from "../../actions/SelectedChannelActionCreators.tsx";
import AnalyticsLocationDefault from "../app_analytics/AnalyticsLocation.tsx";
import safeTransitionToDefault from "../links/safeTransitionTo.native.tsx";
import transitionToGuild from "../routing/transitionToGuild.native.tsx";
import CollectiblesActionCreators from "../collectibles/CollectiblesActionCreators.tsx";
import ValidationUtilsDefault from "../../utils/ValidationUtils.tsx";
import InstantInviteActionCreatorsDefault from "../../actions/InstantInviteActionCreators.tsx";
import GameProfileActionCreatorsDefault from "../game_profile/GameProfileActionCreators.native.tsx";
import GameProfileAnalyticUtils from "../game_profile/GameProfileAnalyticUtils.tsx";
import sortByMatchScore from "../autocompleter/index.tsx";
import DimensionActionCreatorsDefault from "../../actions/DimensionActionCreators.tsx";
import PlaygroundAccessExperiment from "../design/PlaygroundAccessExperiment.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import LibraryApplicationStore from "../../stores/LibraryApplicationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import QuickSwitcherStore from "QuickSwitcherStore.tsx";

const require = globalThis.__r;

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
    [obj.query, obj.queryMode] = items1;
    return obj;
  }
  let tmp5 = closure_19[charAtResult];
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
  const obj6 = {
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
    obj6.num_results_text_channels = QuickSwitcherStore.getResultTotals(
      sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL,
    );
    obj6.num_results_voice_channels = QuickSwitcherStore.getResultTotals(
      sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL,
    );
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
      const tmp5Result6 = transitionToChannel;
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
      }
      const obj5 = { state: null, navigationReplace: true };
      const obj6 = { analyticsSource: obj2 };
      obj5.state = obj6;
      transitionToChannel.transitionToChannel(channel1.id, obj5);
      const tmp5Result7 = transitionToChannel;
    }
  } else if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
    const obj7 = { recipientIds: null, location: "Quickswitcher" };
    const items = [record.id];
    obj7.recipientIds = items;
    ChannelActionCreatorsDefault.openPrivateChannel(obj7);
    const tmpResult8 = ChannelActionCreatorsDefault;
    DimensionActionCreatorsDefault.channelListScrollTo(closure_1_12, ChannelStore.getDMFromUserId(record.id));
    const tmpResult9 = DimensionActionCreatorsDefault;
  } else if (sortByMatchScore.AutocompleterResultTypes.GROUP_DM === type) {
    transitionToChannel.transitionToChannel(record.id, { navigationReplace: true });
    const tmp5Result8 = transitionToChannel;
    DimensionActionCreatorsDefault.channelListScrollTo(closure_1_12, record.id);
    const tmpResult10 = DimensionActionCreatorsDefault;
  } else if (sortByMatchScore.AutocompleterResultTypes.APPLICATION === type) {
    const activeLibraryApplication = LibraryApplicationStore.getActiveLibraryApplication(record.id);
    const id = record.id;
    ({ QUICK_SWITCHER, QUICK_SWITCHER: QUICK_SWITCHER2 } = __initData);
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
        const obj10 = { tab: CollectibleShopTab.ORBS, analyticsLocations: null, analyticsSource: null };
        const items1 = [AnalyticsLocationDefault.QUICK_SWITCHER];
        obj10.analyticsLocations = items1;
        obj10.analyticsSource = AnalyticsLocationDefault.QUICK_SWITCHER;
        CollectiblesActionCreators.openCollectiblesShop(obj10);
        const tmp5Result10 = CollectiblesActionCreators;
      } else {
        safeTransitionToDefault(record.path, { navigationReplace: true });
      }
    }
  }
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: record });
  const obj11 = { type: "QUICKSWITCHER_SWITCH_TO", result: record };
  const tmpResult12 = DispatcherDefault;
}
let closure_25 = async function _openInviteFromQuickSwitcher(arg0) {
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
          const obj5 = {
            value: InstantInviteActionCreatorsDefault.resolveInvite(closure_0, "Quick Switcher"),
            done: false,
          };
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
          const obj7 = { type: "INVITE_MODAL_OPEN", invite, code: closure_129_0, context: closure_130_13.APP };
          closure_130_1(closure_130_2[15]).dispatch(obj7);
          const obj = closure_130_1(closure_130_2[15]);
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
const InAppNavigationType = fn(5660).InAppNavigationType;
const ChannelRecordBase = fn(2045).ChannelRecordBase;
const Constants = fn(1074);
({
  Layers,
  ME: closure_12,
  AppContext: map1,
  AnalyticEvents: closure_14,
  AnalyticsLocations: closure_15,
  AnalyticsPages: closure_16,
} = Constants);
const isStaticChannelRoute = fn(2048).isStaticChannelRoute;
const CollectibleShopTab = fn(1076).CollectibleShopTab;
let obj = {};
obj[fn(10091).AutocompleterQuerySymbols.USER] = fn(10091).AutocompleterResultTypes.USER;
obj[fn(10091).AutocompleterQuerySymbols.TEXT_CHANNEL] = fn(10091).AutocompleterResultTypes.TEXT_CHANNEL;
obj[fn(10091).AutocompleterQuerySymbols.VOICE_CHANNEL] = fn(10091).AutocompleterResultTypes.VOICE_CHANNEL;
obj[fn(10091).AutocompleterQuerySymbols.GUILD] = fn(10091).AutocompleterResultTypes.GUILD;
obj[fn(10091).AutocompleterQuerySymbols.GAME_PROFILE] = fn(10091).AutocompleterResultTypes.GAME_PROFILE;
let closure_19 = Object.freeze(obj);
const regExp = new RegExp(
  "^" +
    fn(10091).AutocompleterQuerySymbols.USER +
    "|" +
    fn(10091).AutocompleterQuerySymbols.TEXT_CHANNEL +
    "|" +
    fn(10091).AutocompleterQuerySymbols.VOICE_CHANNEL +
    "|\\" +
    fn(10091).AutocompleterQuerySymbols.GUILD +
    "|\\" +
    fn(10091).AutocompleterQuerySymbols.GAME_PROFILE,
);
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
    const obj2 = { source, current_guild_id: guildId, current_channel_id: channelId, current_channel_type: tmp6 };
    AnalyticsUtilsDefault.track(constants.QUICKSWITCHER_OPENED, obj2);
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
  const merged = Object.assign(getQuickSwitcherOptions(arg0));
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SEARCH" });
};
export const selectResult = function selectResult(selectedIndex) {
  DispatcherDefault.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex });
};
export { switchToResult };
export const switchToResultInNewTab = function switchToResultInNewTab(type) {
  _require = type;
  type = type.type;
  if (require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL !== type) {
    if (tmp(10091).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
      if (tmp(10091).AutocompleterResultTypes.GROUP_DM !== type) {
        if (tmp(10091).AutocompleterResultTypes.DM !== type) {
          if (tmp(10091).AutocompleterResultTypes.USER === type) {
            DispatcherDefault.dispatch({ type: "QUICKSWITCHER_HIDE" });
            trackClose(constants.QUICKSWITCHER_RESULT_SELECTED, type);
            const obj3 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
            DispatcherDefault.dispatch(obj3);
            asyncGeneratorStep(async () => {
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
                      const items = [tmp5.record.id];
                      obj5.recipientIds = items;
                      dependencyMap = 1;
                      c3 = 1;
                      const obj6 = { value: tmp2(4769).openPrivateChannel(obj5), done: false };
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
                    tmp5(11255).openChannelTabActive(closure_128_0, null);
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp16) {
                  c3 = tmp;
                  throw tmp16;
                }
              }
            })().catch(() => {});
            const promise = (async () => {
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
                      const items = [tmp5.record.id];
                      obj5.recipientIds = items;
                      dependencyMap = 1;
                      c3 = 1;
                      const obj6 = { value: tmp2(4769).openPrivateChannel(obj5), done: false };
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
                    tmp5(11255).openChannelTabActive(closure_128_0, null);
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
    let obj4 = { type: "QUICKSWITCHER_SWITCH_TO", result: type };
    DispatcherDefault.dispatch(obj4);
    tmp(11255).openChannelTabActive(channel.id, guildId);
    const tmpResult = tmp(11255);
  }
};
