// discord_app/modules/search/native/hooks/useOnPressSearchItem.tsx
import util from "../../../../intl/index.native.tsx";
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import MaskedLinkUtils from "../../../../utils/MaskedLinkUtils.tsx";
import SearchPlatformUtils from "../SearchPlatformUtils.tsx";
import tracking_TrackingDefault from "../tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "../SearchPlatformActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConversationPreviewStore from "../../../conversations/ConversationPreviewStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SearchQueryStore from "../stores/SearchQueryStore.tsx";

const SearchPlatformUtilsDefault = SearchPlatformUtils;

require = fn;
function addCurrentSearchQueryToSearchHistory(type) {
  const tags = SearchQueryStore.getTags(type);
  { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(type), tags };
  _require = type;
  type = type.type;
  if (constants3.DMS === type) {
    const result = require("SearchPlatformUtils").delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
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
      return { value: "IconComponent", done: null };
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
          const obj4 = { value: require("asyncRequireImpl")(paths[30], paths.paths), done: false };
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
        return { value: "IconComponent", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const SearchConstants = fn(9247);
({ SearchMediaTypes: closure_8, SearchHistoryItemTypes: closure_9, SearchQueryTagTypes: c10 } = SearchConstants);
const SearchNavigatorScreens = fn(17113).SearchNavigatorScreens;
const SearchFilterAddLocations = fn(9246).SearchFilterAddLocations;
const Constants = fn(1085);
({ Routes: map1, ComponentActions: closure_14, ME: closure_15, SearchTypes: closure_16 } = Constants);
const StaticChannelRoute = fn(2070).StaticChannelRoute;
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnPressSearchLink(arg0) {
  _require = arg0;
  const cResult = require("c").c(2);
  if (cResult[0] !== arg0) {
    const fn = function t(target, arg1) {
      type = arg1;
      const tags = SearchQueryStore.getTags(type);
      { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(type), tags };
      type = type.type;
      if (constants3.DMS === type) {
        const result = SearchPlatformUtils.delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
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
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useOnPressSearchLink(arg0) {
  let type = arg0;
  const items = [arg0];
  return noop.useCallback((target, arg1) => {
    type = arg1;
    const tags = SearchQueryStore.getTags(type);
    { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(type), tags };
    type = type.type;
    if (constants3.DMS === type) {
      const result = SearchPlatformUtils.delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
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
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnPressMessageItem(searchContext) {
  const cResult = searchContext(context[13]).c(4);
  searchContext = searchContext.searchContext;
  let obj = searchContext(context[13]);
  const navigation = searchContext(context[19]).useNavigation();
  context = noop.useContext(searchContext(context[20]).SwipeForMemberListContext);
  if (cResult[0] === context) {
    if (cResult[1] === navigation) {
      if (cResult[2] === searchContext) {
        let tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const fn = function s(arg0, arg1) {
    channel = channel.getChannel(arg0);
    searchContext = channel;
    if (null != channel) {
      const tags = SearchQueryStore.getTags(searchContext);
      let obj4 = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
      const type = searchContext.type;
      if (constants2.DMS === type) {
        const result = searchContext(context[10]).delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
        const obj = searchContext(context[10]);
      }
      const messages = navigation(context[21]).fetchMessages(arg0, arg1);
      let obj2 = navigation(context[21]);
      const result1 = searchContext(context[10]).performKeyboardAwareNavigation(() => {
        closure_1 = context;
        const obj2 = { channelId: guildId.id, guildId: null, searchContext: null };
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = closure_3_15;
        }
        obj2.guildId = guildId;
        obj2.searchContext = searchContext;
        if (null != context) {
          const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
          obj4 = {};
          const merged = Object.assign(obj2);
          obj4.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
            const ComponentDispatch = closure_0(closure_2[25]).ComponentDispatch;
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
  };
  cResult[0] = context;
  cResult[1] = navigation;
  cResult[2] = searchContext;
  cResult[3] = fn;
  tmp4 = fn;
}) : (function useOnPressMessageItem(searchContext) {
  searchContext = searchContext.searchContext;
  let context;
  const navigation = searchContext(context[19]).useNavigation();
  context = noop.useContext(searchContext(context[20]).SwipeForMemberListContext);
  const items = [navigation, searchContext, context];
  return noop.useCallback((arg0, arg1) => {
    channel = channel.getChannel(arg0);
    searchContext = channel;
    if (null != channel) {
      const tags = SearchQueryStore.getTags(searchContext);
      let obj4 = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
      const type = searchContext.type;
      if (constants2.DMS === type) {
        const result = searchContext(context[10]).delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
        const obj = searchContext(context[10]);
      }
      const messages = navigation(context[21]).fetchMessages(arg0, arg1);
      let obj2 = navigation(context[21]);
      const result1 = searchContext(context[10]).performKeyboardAwareNavigation(() => {
        closure_1 = context;
        const obj2 = { channelId: guildId.id, guildId: null, searchContext: null };
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = closure_3_15;
        }
        obj2.guildId = guildId;
        obj2.searchContext = searchContext;
        if (null != context) {
          const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
          obj4 = {};
          const merged = Object.assign(obj2);
          obj4.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
            const ComponentDispatch = closure_0(closure_2[25]).ComponentDispatch;
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
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnPressConversationCitation(searchContext) {
  const cResult = require("c").c(4);
  searchContext = searchContext.searchContext;
  _require = searchContext;
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  context = noop.useContext(require("SwipeForMemberListWrapper").SwipeForMemberListContext);
  if (cResult[0] === context) {
    if (cResult[1] === navigation) {
      if (cResult[2] === searchContext) {
        let tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
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
        return { value: "IconComponent", done: null };
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
            const parseConversationIdResult = closure_0(context[22]).parseConversationId(closure_0.sourceId);
            closure_130_3 = parseConversationIdResult;
            addCurrentSearchQueryToSearchHistory(closure_0);
            const obj8 = closure_0(context[22]);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: closure_0(context[23]).fetchConversation(channelId, parseConversationIdResult), done: false };
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
          const conversationMessages = closure_0(context[23]).fetchConversationMessages(closure_130_0, closure_130_3, { includeReactions: true, includeMessageReferences: true, isStandalone: true });
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
                const obj = { screen: closure_0(context[24]).ConversationNavigatorScreens.FOCUS, params };
                navigation.navigate("sidebar", obj);
              } else {
                navigation.navigate(closure_0(context[24]).ConversationNavigatorScreens.FOCUS, params);
              }
            });
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
          const obj6 = closure_0(context[23]);
        }
      } catch (tmp20) {
        c5 = tmp;
        throw tmp20;
      }
    }
  });
  function t1() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = context;
  cResult[1] = navigation;
  cResult[2] = searchContext;
  cResult[3] = t1;
  tmp4 = t1;
}) : (function useOnPressConversationCitation(searchContext) {
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
        return { value: "IconComponent", done: null };
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
            const parseConversationIdResult = closure_0(context[22]).parseConversationId(closure_0.sourceId);
            closure_130_3 = parseConversationIdResult;
            addCurrentSearchQueryToSearchHistory(closure_0);
            const obj8 = closure_0(context[22]);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: closure_0(context[23]).fetchConversation(channelId, parseConversationIdResult), done: false };
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
          const conversationMessages = closure_0(context[23]).fetchConversationMessages(closure_130_0, closure_130_3, { includeReactions: true, includeMessageReferences: true, isStandalone: true });
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
                const obj = { screen: closure_0(context[24]).ConversationNavigatorScreens.FOCUS, params };
                navigation.navigate("sidebar", obj);
              } else {
                navigation.navigate(closure_0(context[24]).ConversationNavigatorScreens.FOCUS, params);
              }
            });
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
          const obj6 = closure_0(context[23]);
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
});
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnPressGroupDMItem(searchContext) {
  const cResult = searchContext(576).c(3);
  searchContext = searchContext.searchContext;
  const obj = searchContext(576);
  const navigation = searchContext(1502).useNavigation();
  if (cResult[0] === navigation) {
    if (cResult[1] === searchContext) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const fn = function t(channelId) {
    closure_0 = searchContext;
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = SearchPlatformUtils.delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    ChannelActionCreatorsDefault.preload(closure_2_15, channelId);
    const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
      searchContext(dependencyMap[29]).transitionToChannel(closure_0);
    });
  };
  cResult[0] = navigation;
  cResult[1] = searchContext;
  cResult[2] = fn;
  tmp3 = fn;
}) : (function useOnPressGroupDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1502).useNavigation();
  const items = [navigation, searchContext];
  return noop.useCallback((channelId) => {
    closure_0 = searchContext;
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = SearchPlatformUtils.delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    ChannelActionCreatorsDefault.preload(closure_2_15, channelId);
    const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
      searchContext(dependencyMap[29]).transitionToChannel(closure_0);
    });
  }, items);
});
ReactCompilerGating = fn(558);
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnPressDMItem(searchContext) {
  const cResult = searchContext(576).c(3);
  searchContext = searchContext.searchContext;
  const obj = searchContext(576);
  const navigation = searchContext(1502).useNavigation();
  if (cResult[0] === navigation) {
    if (cResult[1] === searchContext) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const fn = function t(userId, arg1) {
    closure_0 = searchContext;
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = SearchPlatformUtils.delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    ChannelActionCreatorsDefault.preload(closure_2_15, arg1);
    const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
      searchContext(dependencyMap[29]).transitionToChannel(closure_0);
    });
    return arg1;
  };
  cResult[0] = navigation;
  cResult[1] = searchContext;
  cResult[2] = fn;
  tmp3 = fn;
}) : (function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1502).useNavigation();
  const items = [navigation, searchContext];
  return noop.useCallback((userId, arg1) => {
    closure_0 = searchContext;
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = SearchPlatformUtils.delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    ChannelActionCreatorsDefault.preload(closure_2_15, arg1);
    const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
      searchContext(dependencyMap[29]).transitionToChannel(closure_0);
    });
    return arg1;
  }, items);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnPressGuildTextChannel(searchContext) {
  const cResult = searchContext(576).c(2);
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const fn = function t(arg0) {
      const channel = ChannelStore.getChannel(arg0);
      let id = channel;
      if (null == channel) {
        return null;
      } else {
        const obj4 = { type: constants2.GUILD_TEXT_CHANNEL, channelId: channel.id };
        id = searchContext;
        const type = searchContext.type;
        if (constants3.DMS === type) {
          const result = SearchPlatformUtils.delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
        }
        ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
        const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => searchContext(dependencyMap[29]).transitionToChannel(id.id));
      }
    };
    cResult[0] = searchContext;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useOnPressGuildTextChannel(searchContext) {
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
        const result = SearchPlatformUtils.delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
      }
      ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
      const result1 = SearchPlatformUtils.performKeyboardAwareNavigation(() => searchContext(dependencyMap[29]).transitionToChannel(id.id));
    }
  }, items);
});
ReactCompilerGating = fn(558);
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnPressGuildVoiceChannel(searchContext) {
  const cResult = searchContext(callback[13]).c(4);
  searchContext = searchContext.searchContext;
  let obj = searchContext(callback[13]);
  const navigation = searchContext(callback[19]).useNavigation();
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
            return { value: searchContext(tmp23[31])(tmp23[36], tmp23.paths), done: false };
          }
          tmp22Result5 = searchContext(tmp23[35]);
        }
        if (tmp22Result4.getChannelRoleSubscriptionStatus(guild_id.id).needSubscriptionToAccess) {
          guild_id = guild_id.guild_id;
          searchContext(tmp23[37]);
          searchContext(tmp23[37]).transitionTo(closure_1_13.CHANNEL(guild_id, constants.ROLE_SUBSCRIPTIONS));
        } else {
          handleVoiceOrStageChannelConnectPress(guild_id);
        }
        tmp22Result4 = searchContext(tmp23[34]);
      }
      tmp22Result = searchContext(tmp23[33]);
    }
    await "IconComponent";
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
  if (cResult[0] === navigation) {
    if (cResult[1] === callback) {
      if (cResult[2] === searchContext) {
        let tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const fn = function t(arg0) {
    channel = channel.getChannel(arg0);
    searchContext = channel;
    if (null == channel) {
      return null;
    } else {
      const obj2 = { type: constants.GUILD_VOICE_CHANNEL, channelId: channel.id };
      const type = searchContext.type;
      if (constants2.DMS === type) {
        const result = searchContext(callback[10]).delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
        const obj = searchContext(callback[10]);
      }
      const parent = obj2.getParent();
      if (parent != null) {
        parent.goBack();
      }
      const result1 = searchContext(callback[10]).performKeyboardAwareNavigation(() => callback(closure_0));
      const obj3 = searchContext(callback[10]);
    }
  };
  cResult[0] = navigation;
  cResult[1] = callback;
  cResult[2] = searchContext;
  cResult[3] = fn;
  tmp4 = fn;
}) : (function useOnPressGuildVoiceChannel(searchContext) {
  searchContext = searchContext.searchContext;
  let callback;
  const navigation = searchContext(callback[19]).useNavigation();
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
            return { value: searchContext(tmp23[31])(tmp23[36], tmp23.paths), done: false };
          }
          tmp22Result5 = searchContext(tmp23[35]);
        }
        if (tmp22Result4.getChannelRoleSubscriptionStatus(guild_id.id).needSubscriptionToAccess) {
          guild_id = guild_id.guild_id;
          searchContext(tmp23[37]);
          searchContext(tmp23[37]).transitionTo(closure_1_13.CHANNEL(guild_id, constants.ROLE_SUBSCRIPTIONS));
        } else {
          handleVoiceOrStageChannelConnectPress(guild_id);
        }
        tmp22Result4 = searchContext(tmp23[34]);
      }
      tmp22Result = searchContext(tmp23[33]);
    }
    await "IconComponent";
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
        const result = searchContext(callback[10]).delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = tmp4;
export const useOnPressMessageItem = tmp5;
export const useOnPressConversationCitation = tmp6;
export const useOnPressMediaItem = function useOnPressMediaItem(searchContext) {
  searchContext = searchContext.searchContext;
  const allMediaResults = searchContext.allMediaResults;
  let onEndReached = searchContext.onEndReached;
  let onEndReachedThreshold = searchContext.onEndReachedThreshold;
  const navigation = searchContext(onEndReached[19]).useNavigation();
  const context = navigation.useContext(searchContext(onEndReached[20]).SwipeForMemberListContext);
  let items = [searchContext, navigation, context, allMediaResults, onEndReached, onEndReachedThreshold];
  return navigation.useCallback((channelId, originViewOrOriginLayout) => {
    searchContext = channelId;
    const tags = SearchQueryStore.getTags(searchContext);
    channel = { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (constants3.DMS === type) {
      const result = searchContext(onEndReached[10]).delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
      let obj2 = searchContext(onEndReached[10]);
    }
    channel = channel.getChannel(channelId.channelId);
    const type2 = channelId.type;
    if (constants.AUDIO === type2) {
      if (null != channel) {
        const messages = allMediaResults(onEndReached[21]).fetchMessages(channelId.channelId, channelId.messageId);
        const obj8 = allMediaResults(onEndReached[21]);
        const result1 = searchContext(onEndReached[10]).performKeyboardAwareNavigation(() => {
          closure_0 = channel;
          closure_1 = context;
          const obj2 = { channelId: channel.id, guildId: null, searchContext: null };
          let guildId = channel.getGuildId();
          if (guildId == null) {
            guildId = closure_3_15;
          }
          obj2.guildId = guildId;
          obj2.searchContext = searchContext;
          if (null != context) {
            const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
            const obj4 = {};
            const merged = Object.assign(obj2);
            obj4.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
              const ComponentDispatch = closure_0(closure_2[25]).ComponentDispatch;
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
          const messages1 = allMediaResults(tmp10[21]).fetchMessages(channelId.channelId, channelId.messageId);
          const obj6 = allMediaResults(tmp10[21]);
          const result2 = tmp9(tmp10[10]).performKeyboardAwareNavigation(() => {
            closure_0 = channel;
            const screenIndex = context;
            const obj2 = { channelId: channel.id, guildId: null, searchContext: null };
            let guildId = channel.getGuildId();
            if (guildId == null) {
              guildId = closure_3_15;
            }
            obj2.guildId = guildId;
            obj2.searchContext = searchContext;
            if (null != context) {
              const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: null };
              const obj4 = {};
              const merged = Object.assign(obj2);
              obj4.onBeforeJumpToMessage = function onBeforeJumpToMessage() {
                const ComponentDispatch = closure_0(closure_2[25]).ComponentDispatch;
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
        obj3 = searchContext(onEndReached[26]);
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
      searchContext(onEndReached[27]).openMediaModal(obj5);
      let obj4 = searchContext(onEndReached[27]);
    }
    const obj = { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
  }, items);
};
export const useOnPressGroupDMItem = tmp7;
export const useOnPressDMItem = tmp8;
export const useOnPressGuildTextChannel = tmp9;
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = tmp10;
export const useOnPressSearchHistoryText = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnPressSearchHistoryText(searchContext) {
  const cResult = searchContext(576).c(2);
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const fn = function t(text, tags) {
      searchContext = text;
      const type = searchContext.type;
      if (constants4.DMS === type) {
        const result = searchContext(12053).delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
        let obj2 = searchContext(12053);
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
            tracking_TrackingDefault.trackSearchFilterAdd(obj2);
          }
        });
      }
    };
    cResult[0] = searchContext;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useOnPressSearchHistoryText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return noop.useCallback((text, tags) => {
    searchContext = text;
    const type = searchContext.type;
    if (constants4.DMS === type) {
      const result = searchContext(12053).delayUntilNavigationComplete(() => allMediaResults(onEndReached[11]).addSearchHistoryItem(closure_0, channel));
      let obj2 = searchContext(12053);
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
          tracking_TrackingDefault.trackSearchFilterAdd(obj2);
        }
      });
    }
  }, items);
});