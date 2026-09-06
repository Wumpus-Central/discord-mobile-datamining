// === Module 16642: useOnPressSearchItem ===

// Module 16642 (useOnPressSearchItem)
import util from "util" /* 1114 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import LinkingDefault from "Linking" /* 4255 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8370 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 12338 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12361 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SearchQueryStore from "SearchQueryStore" /* 12339 */;

const SearchPlatformUtilsDefault = SearchPlatformUtils;

require = fn;
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _handleVoiceOrStageChannelConnectPress(arg0) {
  let guildStageVoice = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0, value) => {
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
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_129_0 = guildStageVoice;
            const tmp21 = asyncRequireImpl;
            if (isGuildStageVoiceResult) {
              c2 = 2;
              c3 = 1;
              const obj1 = { value: tmp21(tmp20[24], tmp20.paths), done: false };
              return obj1;
            } else {
              c2 = 1;
              c3 = 1;
              const obj2 = { value: tmp21(tmp20[26], tmp20.paths), done: false };
              return obj2;
            }
            isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value.openGuildVoiceModal(closure_129_0, "Channel List");
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            value.connectAndOpen(closure_129_0);
          }
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  })();
};
const SearchConstants = fn(7878);
({ SearchMediaTypes: closure_7, SearchHistoryItemTypes: closure_8, SearchQueryTagTypes: closure_9 } = SearchConstants);
const SearchNavigatorScreens = fn(16643).SearchNavigatorScreens;
const SearchFilterAddLocations = fn(7877).SearchFilterAddLocations;
const Constants = fn(1074);
({ Routes: closure_12, ComponentActions: map1, ME: closure_14, SearchTypes: closure_15 } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = function useOnPressSearchLink(searchContext) {
  const items = [searchContext];
  return noop.useCallback((target, arg1) => {
    searchContext = arg1;
    const tags = SearchQueryStore.getTags(searchContext);
    let obj = { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = SearchPlatformUtils.delayUntilNavigationComplete(() => {
        obj = SearchPlatformActionCreatorsDefault;
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const url = URLUtilsDefault.safeParseWithQuery(target);
    if (null != url) {
      if (null != url.protocol) {
        if (null != url.hostname) {
          const formatResult = URLUtilsDefault.format(url);
          const tmp6Result = URLUtilsDefault;
          obj = {
            href: formatResult,
            onConfirm() {
                    obj = LinkingDefault;
                    return obj.openURL(obj);
                  },
            trusted() {
                    return closure_0;
                  }
          };
          MaskedLinkUtils.handleClick(obj);
        }
      }
    }
    const intl = util.intl;
    ToastUtils.presentFailedToast(intl.string(util.t.XiqzAp));
  }, items);
};
export const useOnPressMessageItem = function useOnPressMessageItem(searchContext) {
  searchContext = searchContext.searchContext;
  let context;
  const navigation = searchContext(context[16]).useNavigation();
  context = noop.useContext(searchContext(context[17]).SwipeForMemberListContext);
  const items = [navigation, searchContext, context];
  return noop.useCallback((arg0, arg1) => {
    channel = channel.getChannel(arg0);
    searchContext = channel;
    if (null != channel) {
      const tags = SearchQueryStore.getTags(searchContext);
      let obj = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
      const type = searchContext.type;
      if (constants2.DMS === type) {
        obj = searchContext(context[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = SearchPlatformActionCreatorsDefault;
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const messages = navigation(context[18]).fetchMessages(arg0, arg1);
      const obj2 = navigation(context[18]);
      const result1 = searchContext(context[9]).performKeyboardAwareNavigation(() => {
        closure_1 = context;
        obj = { channelId: guildId.id, guildId: null, searchContext: null };
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = closure_3_14;
        }
        obj.guildId = guildId;
        obj.searchContext = searchContext;
        if (null != context) {
          obj = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
          const obj1 = {};
          const merged = Object.assign(obj);
          obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
            const ComponentDispatch = closure_0(closure_2[19]).ComponentDispatch;
            ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, { channelId: closure_0.id, screenIndex: screenIndex.screenIndex });
          };
          obj.params = obj1;
          obj.navigate("sidebar", obj);
        } else {
          obj.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj);
        }
      });
      const obj3 = searchContext(context[9]);
    }
  }, items);
};
export const useOnPressMediaItem = function useOnPressMediaItem(searchContext) {
  searchContext = searchContext.searchContext;
  const allMediaResults = searchContext.allMediaResults;
  let onEndReached = searchContext.onEndReached;
  let onEndReachedThreshold = searchContext.onEndReachedThreshold;
  const navigation = searchContext(onEndReached[16]).useNavigation();
  const context = navigation.useContext(searchContext(onEndReached[17]).SwipeForMemberListContext);
  let items = [searchContext, navigation, context, allMediaResults, onEndReached, onEndReachedThreshold];
  return navigation.useCallback((channelId, originViewOrOriginLayout) => {
    searchContext = channelId;
    const tags = SearchQueryStore.getTags(searchContext);
    let obj = { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
    let channel = obj;
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = searchContext(onEndReached[9]).delayUntilNavigationComplete(() => {
        obj = SearchPlatformActionCreatorsDefault;
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(onEndReached[9]);
    }
    channel = context.getChannel(channelId.channelId);
    const type2 = channelId.type;
    if (constants.AUDIO === type2) {
      if (null != channel) {
        const messages = allMediaResults(onEndReached[18]).fetchMessages(channelId.channelId, channelId.messageId);
        const obj8 = allMediaResults(onEndReached[18]);
        const result1 = searchContext(onEndReached[9]).performKeyboardAwareNavigation(() => {
          closure_0 = channel;
          closure_1 = context;
          let obj = { channelId: channel.id, guildId: null, searchContext: null };
          let guildId = channel.getGuildId();
          if (guildId == null) {
            guildId = closure_3_14;
          }
          obj.guildId = guildId;
          obj.searchContext = searchContext;
          if (null != context) {
            obj = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
            const obj1 = {};
            const merged = Object.assign(obj);
            obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
              const ComponentDispatch = closure_0(closure_2[19]).ComponentDispatch;
              ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, { channelId: closure_0.id, screenIndex: screenIndex.screenIndex });
            };
            obj.params = obj1;
            obj.navigate("sidebar", obj);
          } else {
            obj.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj);
          }
        });
      }
    } else {
      if (null != channel) {
        if (obj3.isChannelSpoilerGated(channel)) {
          const messages1 = allMediaResults(tmp10[18]).fetchMessages(channelId.channelId, channelId.messageId);
          const obj6 = allMediaResults(tmp10[18]);
          const result2 = tmp9(tmp10[9]).performKeyboardAwareNavigation(() => {
            closure_0 = channel;
            const screenIndex = context;
            let obj = { channelId: channel.id, guildId: null, searchContext: null };
            let guildId = channel.getGuildId();
            if (guildId == null) {
              guildId = closure_3_14;
            }
            obj.guildId = guildId;
            obj.searchContext = searchContext;
            if (null != context) {
              obj = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
              const obj1 = {};
              const merged = Object.assign(obj);
              obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
                const ComponentDispatch = closure_0(closure_2[19]).ComponentDispatch;
                ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, { channelId: closure_0.id, screenIndex: screenIndex.screenIndex });
              };
              obj.params = obj1;
              obj.navigate("sidebar", obj);
            } else {
              obj.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj);
            }
          });
        }
        obj3 = searchContext(onEndReached[20]);
        tmp9 = searchContext;
      }
      onEndReached = 0;
      onEndReachedThreshold = 0;
      const items = [];
      const item = channel.forEach((type) => {
        if (!tmp2) {
          items.push(type.sources);
          if (tmp6) {
            closure_3 = closure_2;
          }
          closure_2 = closure_2 + 1;
          tmp6 = type.messageId === messageId.messageId && type.mediaIndex === tmp5.mediaIndex;
        }
      });
      obj = { initialSources: items, initialIndex: onEndReachedThreshold, onEndReached, onEndReachedThreshold, analyticsSource: "Search", originViewOrOriginLayout };
      searchContext(onEndReached[21]).openMediaModal(obj);
      const obj4 = searchContext(onEndReached[21]);
    }
  }, items);
};
export const useOnPressGroupDMItem = function useOnPressGroupDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1483).useNavigation();
  const items = [navigation, searchContext];
  return noop.useCallback((channelId) => {
    const obj = { type: constants2.GROUP_DM, channelId };
    closure_0 = searchContext;
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = SearchPlatformUtils.delayUntilNavigationComplete(() => {
        obj = SearchPlatformActionCreatorsDefault;
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    ChannelActionCreatorsDefault.preload(closure_2_14, channelId);
    const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
      searchContext(dependencyMap[23]).transitionToChannel(closure_0);
    });
  }, items);
};
export const useOnPressDMItem = function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1483).useNavigation();
  const items = [navigation, searchContext];
  return noop.useCallback((userId, arg1) => {
    const obj = { type: constants2.DM, userId };
    closure_0 = searchContext;
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = SearchPlatformUtils.delayUntilNavigationComplete(() => {
        obj = SearchPlatformActionCreatorsDefault;
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    ChannelActionCreatorsDefault.preload(closure_2_14, arg1);
    const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
      searchContext(dependencyMap[23]).transitionToChannel(closure_0);
    });
    return arg1;
  }, items);
};
export const useOnPressGuildTextChannel = function useOnPressGuildTextChannel(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return noop.useCallback((arg0) => {
    const channel = ChannelStore.getChannel(arg0);
    let id = channel;
    if (null == channel) {
      return null;
    } else {
      let obj = { type: constants2.GUILD_TEXT_CHANNEL, channelId: channel.id };
      id = searchContext;
      const type = searchContext.type;
      if (constants3.DMS === type) {
        obj = SearchPlatformUtils;
        const result = obj.delayUntilNavigationComplete(() => {
          obj = SearchPlatformActionCreatorsDefault;
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
      const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => searchContext(dependencyMap[23]).transitionToChannel(id.id));
    }
  }, items);
};
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = function useOnPressGuildVoiceChannel(searchContext) {
  searchContext = searchContext.searchContext;
  let callback;
  const navigation = searchContext(callback[16]).useNavigation();
  closure_129_0 = asyncGeneratorStep(async (arg0) => {
    closure_1 = tmp2;
    let guild_id = searchContext;
    closure_129_0 = searchContext;
    if (!obj9.maybeOpenAgeGateForVoiceChannel(searchContext.id)) {
      let tmp22Result = tmp22(tmp23[28]);
      if (!tmp22Result.maybeOpenSpoilerGateForVoiceChannel(guild_id.id)) {
        tmp22Result = tmp22(tmp23[29]);
        const guildId = guild_id.getGuildId();
        closure_129_1 = guildId;
        if (null != guildId) {
          if (tmp22Result1.shouldShowMembershipVerificationGate(guildId)) {
            c2 = 1;
            c3 = 1;
            return { value: tmp22(tmp23[25])(tmp23[31], tmp23.paths), done: false };
          }
          tmp22Result1 = tmp22(tmp23[30]);
        }
        if (tmp22Result.getChannelRoleSubscriptionStatus(guild_id.id).needSubscriptionToAccess) {
          guild_id = guild_id.guild_id;
          tmp22(tmp23[32]);
          tmp22(tmp23[32]).transitionTo(closure_1_12.CHANNEL(guild_id, constants.ROLE_SUBSCRIPTIONS));
        } else {
          handleVoiceOrStageChannelConnectPress(guild_id);
        }
      }
    }
    await "HermesInternal";
    if (arg0 !== 2) {
      const result = arg1.openMemberVerificationModal(closure_129_1, () => closure_2_17(closure_1_0));
      c3 = 3;
    }
    return arg1;
  });
  callback = noop.useCallback(function() {
    const self = this;
    const apply = searchContext.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  const items = [navigation, callback, searchContext];
  return noop.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    searchContext = channel;
    if (null == channel) {
      return null;
    } else {
      let obj = { type: constants.GUILD_VOICE_CHANNEL, channelId: channel.id };
      const type = searchContext.type;
      if (constants2.DMS === type) {
        obj = searchContext(callback[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = SearchPlatformActionCreatorsDefault;
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const parent = obj.getParent();
      if (parent != null) {
        parent.goBack();
      }
      const result1 = searchContext(callback[9]).performKeyboardAwareNavigation(() => callback(closure_0));
    }
  }, items);
};
export const useOnPressSearchHistoryText = function useOnPressSearchHistoryText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return noop.useCallback((text, tags) => {
    searchContext = text;
    let obj = { type: constants.TEXT, text, tags };
    const type = searchContext.type;
    if (constants4.DMS === type) {
      const result = searchContext(12338).delayUntilNavigationComplete(() => {
        obj = SearchPlatformActionCreatorsDefault;
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(12338);
    }
    SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (setTags) => {
      if (null != obj) {
        setTags.setTags(tmp);
      }
      setTags.setTextInputValue(closure_0);
    });
    const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(tmp);
    if (tags != null) {
      const item = tags.forEach((type) => {
        if (type.type === constants2.COMPLETE) {
          obj = { searchContext, searchTokenType: type.searchTokenType, location: constants3.SEARCH_HISTORY };
          obj.trackSearchFilterAdd(obj);
        }
      });
    }
  }, items);
};