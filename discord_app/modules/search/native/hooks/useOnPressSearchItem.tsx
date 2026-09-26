// discord_app/modules/search/native/hooks/useOnPressSearchItem.tsx
import util from "../../../../intl/index.native.tsx";
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import MaskedLinkUtils from "../../../../utils/MaskedLinkUtils.tsx";
import SearchPlatformUtils from "../SearchPlatformUtils.tsx";
import search_tracking_TrackingDefault from "../tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "../SearchPlatformActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConversationPreviewStore from "../../../conversations/ConversationPreviewStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SearchQueryStore from "../stores/SearchQueryStore.tsx";

const require = globalThis.__r;
const SearchPlatformUtilsDefault = SearchPlatformUtils;

require = fn;
function addCurrentSearchQueryToSearchHistory(type) {
  const tags = SearchQueryStore.getTags(type);
  { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(type), tags };
  _require = type;
  type = type.type;
  if (constants3.DMS === type) {
    const result = require("SearchPlatformUtils").delayUntilNavigationComplete(() => {
      obj = SearchPlatformActionCreatorsDefault;
      return obj.addSearchHistoryItem(closure_0, obj);
    });
    const obj2 = require("SearchPlatformUtils");
  }
}
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _handleVoiceOrStageChannelConnectPress(arg0) {
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
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: require("asyncRequireImpl")(paths[28], paths.paths), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        value.openGuildVoiceModal(closure_129_0, "Channel List");
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const SearchConstants = fn(7303);
({ SearchMediaTypes: closure_8, SearchHistoryItemTypes: closure_9, SearchQueryTagTypes: c10 } = SearchConstants);
const SearchNavigatorScreens = fn(16455).SearchNavigatorScreens;
const SearchFilterAddLocations = fn(7302).SearchFilterAddLocations;
const Constants = fn(1074);
({ Routes: map1, ComponentActions: closure_14, ME: closure_15, SearchTypes: closure_16 } = Constants);
const StaticChannelRoute = fn(2052).StaticChannelRoute;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = function useOnPressSearchLink(searchContext) {
  const items = [searchContext];
  return noop.useCallback((target, arg1) => {
    searchContext = arg1;
    const tags = SearchQueryStore.getTags(searchContext);
    { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
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
          const obj5 = {
            href: formatResult,
            onConfirm() {
                    obj = LinkingDefault;
                    return obj.openURL(obj);
                  },
            trusted() {
                    return closure_0;
                  }
          };
          MaskedLinkUtils.handleClick(obj5);
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
  const navigation = searchContext(context[17]).useNavigation();
  context = noop.useContext(searchContext(context[18]).SwipeForMemberListContext);
  const items = [navigation, searchContext, context];
  return noop.useCallback((arg0, arg1) => {
    channel = channel.getChannel(arg0);
    searchContext = channel;
    if (null != channel) {
      const tags = SearchQueryStore.getTags(searchContext);
      let obj4 = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
      const type = searchContext.type;
      if (constants2.DMS === type) {
        const result = searchContext(context[10]).delayUntilNavigationComplete(() => {
          obj = SearchPlatformActionCreatorsDefault;
          return obj.addSearchHistoryItem(closure_0, obj);
        });
        const obj = searchContext(context[10]);
      }
      const messages = navigation(context[19]).fetchMessages(arg0, arg1);
      let obj2 = navigation(context[19]);
      const result1 = searchContext(context[10]).performKeyboardAwareNavigation(() => {
        closure_1 = context;
        const obj2 = { channelId: guildId.id, guildId: null, searchContext: null };
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = __initData;
        }
        obj2.guildId = guildId;
        obj2.searchContext = searchContext;
        if (null != context) {
          const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
          obj4 = {};
          const merged = Object.assign(obj2);
          obj4.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
            const ComponentDispatch = closure_0(closure_2[23]).ComponentDispatch;
            ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, { channelId: closure_0.id, screenIndex: screenIndex.screenIndex });
          };
          obj3.params = obj4;
          navigation.navigate("sidebar", obj3);
        } else {
          navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
        }
      });
      let obj3 = searchContext(context[10]);
    }
  }, items);
};
export const useOnPressConversationCitation = function useOnPressConversationCitation(searchContext) {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  let context;
  const navigation = require("useNavigation").useNavigation();
  context = noop.useContext(require("SwipeForMemberListWrapper").SwipeForMemberListContext);
  _require = asyncGeneratorStep(async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
            closure_3 = tmp2;
            closure_2 = tmp3;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            const channelId = closure_0.channelId;
            closure_130_0 = channelId;
            ({ guildId: closure_130_1, messageId: closure_130_2 } = closure_0);
            const parseConversationIdResult = closure_0(context[20]).parseConversationId(closure_0.sourceId);
            closure_130_3 = parseConversationIdResult;
            addCurrentSearchQueryToSearchHistory(closure_0);
            const obj8 = closure_0(context[20]);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: closure_0(context[21]).fetchConversation(channelId, parseConversationIdResult), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const conversationMessages = closure_0(context[21]).fetchConversationMessages(closure_130_0, closure_130_3, { includeReactions: true, includeMessageReferences: true, isStandalone: true });
          if (null == ConversationPreviewStore.getConversation(closure_130_3)) {
            const _Error = Error;
            const error = new Error("Conversation not found");
            throw error;
          } else {
            const obj7 = { channelId: closure_130_0, guildId: closure_130_1, conversationId: closure_130_3, title: null, messageId: null };
            const conversation = ConversationPreviewStore.getConversation(closure_130_3);
            let title;
            if (conversation != null) {
              title = conversation.title;
            }
            if (title == null) {
              title = "";
            }
            obj7.title = title;
            obj7.messageId = closure_130_2;
            closure_130_4 = obj7;
            const result = closure_0(context[10]).performKeyboardAwareNavigation(() => {
              if (null != closure_2) {
                const obj = { screen: closure_0(context[22]).ConversationNavigatorScreens.FOCUS, params };
                navigation.navigate("sidebar", obj);
              } else {
                navigation.navigate(closure_0(context[22]).ConversationNavigatorScreens.FOCUS, params);
              }
            });
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          const obj6 = closure_0(context[21]);
        }
      } catch (tmp20) {
        c5 = tmp;
        throw tmp20;
      }
    }
  });
  const items = [navigation, searchContext, context];
  return noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
};
export const useOnPressMediaItem = function useOnPressMediaItem(searchContext) {
  searchContext = searchContext.searchContext;
  const allMediaResults = searchContext.allMediaResults;
  let onEndReached = searchContext.onEndReached;
  let onEndReachedThreshold = searchContext.onEndReachedThreshold;
  const navigation = searchContext(onEndReached[17]).useNavigation();
  const context = navigation.useContext(searchContext(onEndReached[18]).SwipeForMemberListContext);
  let items = [searchContext, navigation, context, allMediaResults, onEndReached, onEndReachedThreshold];
  return navigation.useCallback((channelId, originViewOrOriginLayout) => {
    searchContext = channelId;
    const tags = SearchQueryStore.getTags(searchContext);
    channel = { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = searchContext(onEndReached[10]).delayUntilNavigationComplete(() => {
        obj = SearchPlatformActionCreatorsDefault;
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      let obj2 = searchContext(onEndReached[10]);
    }
    channel = channel.getChannel(channelId.channelId);
    const type2 = channelId.type;
    if (constants.AUDIO === type2) {
      if (null != channel) {
        const messages = allMediaResults(onEndReached[19]).fetchMessages(channelId.channelId, channelId.messageId);
        const obj8 = allMediaResults(onEndReached[19]);
        const result1 = searchContext(onEndReached[10]).performKeyboardAwareNavigation(() => {
          closure_0 = channel;
          closure_1 = context;
          const obj2 = { channelId: channel.id, guildId: null, searchContext: null };
          let guildId = channel.getGuildId();
          if (guildId == null) {
            guildId = __initData;
          }
          obj2.guildId = guildId;
          obj2.searchContext = searchContext;
          if (null != context) {
            const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
            const obj4 = {};
            const merged = Object.assign(obj2);
            obj4.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
              const ComponentDispatch = closure_0(closure_2[23]).ComponentDispatch;
              ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, { channelId: closure_0.id, screenIndex: screenIndex.screenIndex });
            };
            obj3.params = obj4;
            navigation.navigate("sidebar", obj3);
          } else {
            navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
          }
        });
        const obj9 = searchContext(onEndReached[10]);
      }
    } else {
      if (null != channel) {
        if (obj3.isChannelSpoilerGated(channel)) {
          const messages1 = allMediaResults(tmp10[19]).fetchMessages(channelId.channelId, channelId.messageId);
          const obj6 = allMediaResults(tmp10[19]);
          const result2 = tmp9(tmp10[10]).performKeyboardAwareNavigation(() => {
            closure_0 = channel;
            const screenIndex = context;
            const obj2 = { channelId: channel.id, guildId: null, searchContext: null };
            let guildId = channel.getGuildId();
            if (guildId == null) {
              guildId = __initData;
            }
            obj2.guildId = guildId;
            obj2.searchContext = searchContext;
            if (null != context) {
              const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
              const obj4 = {};
              const merged = Object.assign(obj2);
              obj4.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
                const ComponentDispatch = closure_0(closure_2[23]).ComponentDispatch;
                ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, { channelId: closure_0.id, screenIndex: screenIndex.screenIndex });
              };
              obj3.params = obj4;
              navigation.navigate("sidebar", obj3);
            } else {
              navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
            }
          });
          const tmp9Result = tmp9(tmp10[10]);
        }
        obj3 = searchContext(onEndReached[24]);
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
        tmp2 = type.type !== constants.ATTACHMENT && type.type !== constants.EMBED && type.type !== constants.COMPONENT;
      });
      const obj5 = { initialSources: items, initialIndex: onEndReachedThreshold, onEndReached, onEndReachedThreshold, analyticsSource: "Search", originViewOrOriginLayout };
      searchContext(onEndReached[25]).openMediaModal(obj5);
      let obj4 = searchContext(onEndReached[25]);
    }
    const obj = { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
  }, items);
};
export const useOnPressGroupDMItem = function useOnPressGroupDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1485).useNavigation();
  const items = [navigation, searchContext];
  return noop.useCallback((channelId) => {
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
    ChannelActionCreatorsDefault.preload(__initData, channelId);
    const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
      searchContext(dependencyMap[27]).transitionToChannel(closure_0);
    });
  }, items);
};
export const useOnPressDMItem = function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1485).useNavigation();
  const items = [navigation, searchContext];
  return noop.useCallback((userId, arg1) => {
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
    ChannelActionCreatorsDefault.preload(__initData, arg1);
    const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
      searchContext(dependencyMap[27]).transitionToChannel(closure_0);
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
      const obj4 = { type: constants2.GUILD_TEXT_CHANNEL, channelId: channel.id };
      id = searchContext;
      const type = searchContext.type;
      if (constants3.DMS === type) {
        const result = SearchPlatformUtils.delayUntilNavigationComplete(() => {
          obj = SearchPlatformActionCreatorsDefault;
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
      const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => searchContext(dependencyMap[27]).transitionToChannel(id.id));
    }
  }, items);
};
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = function useOnPressGuildVoiceChannel(searchContext) {
  searchContext = searchContext.searchContext;
  let callback;
  const navigation = searchContext(callback[17]).useNavigation();
  closure_129_0 = asyncGeneratorStep(async (arg0) => {
    closure_1 = tmp2;
    let guild_id = searchContext;
    closure_129_0 = searchContext;
    if (!obj9.maybeOpenAgeGateForVoiceChannel(searchContext.id)) {
      if (!tmp22Result.maybeOpenSpoilerGateForVoiceChannel(guild_id.id)) {
        const guildId = guild_id.getGuildId();
        closure_129_1 = guildId;
        if (null != guildId) {
          if (tmp22Result5.shouldShowMembershipVerificationGate(guildId)) {
            c2 = 1;
            c3 = 1;
            return { value: searchContext(tmp23[29])(tmp23[34], tmp23.paths), done: false };
          }
          tmp22Result5 = searchContext(tmp23[33]);
        }
        if (tmp22Result4.getChannelRoleSubscriptionStatus(guild_id.id).needSubscriptionToAccess) {
          guild_id = guild_id.guild_id;
          searchContext(tmp23[35]);
          searchContext(tmp23[35]).transitionTo(closure_1_13.CHANNEL(guild_id, constants.ROLE_SUBSCRIPTIONS));
        } else {
          handleVoiceOrStageChannelConnectPress(guild_id);
        }
        tmp22Result4 = searchContext(tmp23[32]);
      }
      tmp22Result = searchContext(tmp23[31]);
    }
    await "HermesInternal";
    if (arg0 !== 2) {
      const result = value.openMemberVerificationModal(closure_129_1, () => closure_2_19(closure_1_0));
      c3 = 3;
    }
    return value;
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
      const obj2 = { type: constants.GUILD_VOICE_CHANNEL, channelId: channel.id };
      const type = searchContext.type;
      if (constants2.DMS === type) {
        const result = searchContext(callback[10]).delayUntilNavigationComplete(() => {
          obj = SearchPlatformActionCreatorsDefault;
          return obj.addSearchHistoryItem(closure_0, obj);
        });
        const obj = searchContext(callback[10]);
      }
      const parent = obj2.getParent();
      if (parent != null) {
        parent.goBack();
      }
      const result1 = searchContext(callback[10]).performKeyboardAwareNavigation(() => callback(closure_0));
      const obj3 = searchContext(callback[10]);
    }
  }, items);
};
export const useOnPressSearchHistoryText = function useOnPressSearchHistoryText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return noop.useCallback((text, tags) => {
    searchContext = text;
    const type = searchContext.type;
    if (constants4.DMS === type) {
      const result = searchContext(11821).delayUntilNavigationComplete(() => {
        obj = SearchPlatformActionCreatorsDefault;
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      let obj2 = searchContext(11821);
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
          const obj2 = { searchContext, searchTokenType: type.searchTokenType, location: constants3.SEARCH_HISTORY };
          search_tracking_TrackingDefault.trackSearchFilterAdd(obj2);
        }
      });
    }
  }, items);
};