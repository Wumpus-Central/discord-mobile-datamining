// === Module 16812: useOnPressSearchItem ===

// Module 16812 (useOnPressSearchItem)
import intl2 from "intl" /* 1126 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import TrackingConstants from "TrackingConstants" /* 7512 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8047 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11966 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 16813 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7108 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SearchPlatformUtilsDefault = SearchPlatformUtils;
let _require, c4, c5, navigation;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
const f146646 = async (arg0) => {
  let guildId = arg0;
  let c2 = 0;
  let c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let result;
        c3 = 2;
        if (0 === paths) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            closure_1 = tmp;
            guildId = undefined;
            const obj11 = guildId(paths[32]);
            if (!obj11.maybeOpenAgeGateForVoiceChannel(guildId.id)) {
              const tmp19Result = guildId(paths[33]);
              if (!tmp19Result.maybeOpenSpoilerGateForVoiceChannel(guildId.id)) {
                let transitionToResult;
                const tmp19Result4 = guildId(paths[34]);
                const needSubscriptionToAccess = tmp19Result4.getChannelRoleSubscriptionStatus(guildId.id).needSubscriptionToAccess;
                guildId = guildId.getGuildId();
                if (null != guildId) {
                  const tmp19Result5 = guildId(paths[35]);
                  if (tmp19Result5.shouldShowMembershipVerificationGate(guildId)) {
                    paths = 1;
                    c3 = 1;
                    const obj4 = { value: guildId(paths[31])(paths[36], paths.paths), done: false };
                    return obj4;
                  }
                }
                if (needSubscriptionToAccess) {
                  const tmp19Result6 = guildId(paths[37]);
                  transitionToResult = tmp19Result6.transitionTo(closure_1_13.CHANNEL(guildId.guild_id, constants.ROLE_SUBSCRIPTIONS));
                } else {
                  closure_1_19(guildId);
                }
                result = transitionToResult;
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          return { value, done: true };
        } else {
          result = value.openMemberVerificationModal(guildId, () => closure_2_19(guildId));
        }
        c3 = 3;
        return { value: result, done: true };
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  })();
};
function addCurrentSearchQueryToSearchHistory(type) {
  const tags = SearchQueryStore.getTags(type);
  ({ type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(type), tags });
  _require = type;
  type = type.type;
  if (constants3.DMS === type) {
    const obj2 = require("SearchPlatformUtils");
    const result = obj2.delayUntilNavigationComplete(() => {
      obj = channel(closure_2[11]);
      return obj.addSearchHistoryItem(closure_0, obj);
    });
  }
}
function handleVoiceOrStageChannelConnectPress() {
  return obj(...arguments);
}
let obj = function _handleVoiceOrStageChannelConnectPress() {
  let paths;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
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
            let closure_1 = tmp;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[30], paths.paths), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          value.openGuildVoiceModal(closure_0, "Channel List");
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
({ SearchMediaTypes: metroImportAll, SearchHistoryItemTypes: c9, SearchQueryTagTypes: c10 } = SearchConstants);
const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
({ Routes: map1, ComponentActions: closure_14, ME: closure_15, SearchTypes: closure_16 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function t(target, arg1) {
      type = arg1;
      const tags = SearchQueryStore.getTags(type);
      obj = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(type), tags };
      type = type.type;
      if (constants2.DMS === type) {
        const obj2 = SearchPlatformUtils;
        const result = obj2.delayUntilNavigationComplete(() => {
          obj = channel(closure_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const obj3 = URLUtilsDefault;
      const url = obj3.safeParseWithQuery(target);
      if (null != url) {
        if (null != url.protocol) {
          if (null != url.hostname) {
            const tmp6Result = URLUtilsDefault;
            const formatResult = tmp6Result.format(url);
            const obj4 = {
              href: formatResult,
              onConfirm() {
                      obj = closure_2_1(closure_2_2[18]);
                      return obj.openURL(formatResult);
                    },
              trusted() {
                      return closure_0;
                    }
            };
            const obj5 = MaskedLinkUtils;
            obj5.handleClick(obj4);
          }
        }
      }
      const presentFailedToast = ToastUtils.presentFailedToast;
      ToastUtils;
      const intl = intl2.intl;
      presentFailedToast(intl.string(intl2.t.XiqzAp));
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  let type = arg0;
  const items = [arg0];
  return react.useCallback((target, arg1) => {
    type = arg1;
    const tags = SearchQueryStore.getTags(type);
    obj = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(type), tags };
    type = type.type;
    if (constants2.DMS === type) {
      const obj2 = SearchPlatformUtils;
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = channel(closure_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const obj3 = URLUtilsDefault;
    const url = obj3.safeParseWithQuery(target);
    if (null != url) {
      if (null != url.protocol) {
        if (null != url.hostname) {
          const tmp6Result = URLUtilsDefault;
          const formatResult = tmp6Result.format(url);
          const obj4 = {
            href: formatResult,
            onConfirm() {
                    obj = closure_2_1(closure_2_2[18]);
                    return obj.openURL(formatResult);
                  },
            trusted() {
                    return closure_0;
                  }
          };
          const obj5 = MaskedLinkUtils;
          obj5.handleClick(obj4);
        }
      }
    }
    const presentFailedToast = ToastUtils.presentFailedToast;
    ToastUtils;
    const intl = intl2.intl;
    presentFailedToast(intl.string(intl2.t.XiqzAp));
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let context;
  obj = searchContext(context[13]);
  const cResult = obj.c(4);
  searchContext = searchContext.searchContext;
  let obj2 = searchContext(context[19]);
  navigation = obj2.useNavigation();
  context = react.useContext(searchContext(context[20]).SwipeForMemberListContext);
  if (cResult[0] === context) {
    if (cResult[1] === navigation) {
      let tmp4;
      if (cResult[2] === searchContext) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const fn = function o(arg0, arg1) {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      const tags = SearchQueryStore.getTags(channel);
      let obj4 = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(channel), tags };
      let closure_0 = channel;
      const type = channel.type;
      if (constants2.DMS === type) {
        obj = searchContext(context[10]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = channel(closure_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      let obj2 = navigation(context[21]);
      const messages = obj2.fetchMessages(arg0, arg1);
      let obj3 = searchContext(context[10]);
      const result1 = obj3.performKeyboardAwareNavigation(() => {
        let guildId;
        let obj4;
        let closure_0 = channel;
        let closure_1 = context;
        const obj2 = { channelId: channel.id, guildId, searchContext };
        guildId = channel.getGuildId();
        if (guildId == null) {
          guildId = closure_15;
        }
        if (null != context) {
          const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: obj4 };
          const navigate = navigation.navigate;
          obj4 = {
            onBeforeJumpToMessage() {
                const ComponentDispatch = channel(closure_2_2[25]).ComponentDispatch;
                obj = { channelId: id.id, screenIndex: screenIndex.screenIndex };
                ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, obj);
              }
          };
          const merged = Object.assign(obj2);
          navigate("sidebar", obj3);
        } else {
          navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
        }
      });
    }
  };
  cResult[0] = context;
  cResult[1] = navigation;
  cResult[2] = searchContext;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  let context;
  obj = searchContext(context[19]);
  navigation = obj.useNavigation();
  context = react.useContext(searchContext(context[20]).SwipeForMemberListContext);
  const items = [navigation, searchContext, context];
  return react.useCallback((arg0, arg1) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      const tags = SearchQueryStore.getTags(channel);
      let obj4 = { type: constants.TEXT, text: SearchQueryStore.getTextInputValue(channel), tags };
      let closure_0 = channel;
      const type = channel.type;
      if (constants2.DMS === type) {
        obj = searchContext(context[10]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = channel(closure_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      let obj2 = navigation(context[21]);
      const messages = obj2.fetchMessages(arg0, arg1);
      let obj3 = searchContext(context[10]);
      const result1 = obj3.performKeyboardAwareNavigation(() => {
        let guildId;
        let obj4;
        let closure_0 = channel;
        let closure_1 = context;
        const obj2 = { channelId: channel.id, guildId, searchContext };
        guildId = channel.getGuildId();
        if (guildId == null) {
          guildId = closure_15;
        }
        if (null != context) {
          const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: obj4 };
          const navigate = navigation.navigate;
          obj4 = {
            onBeforeJumpToMessage() {
                const ComponentDispatch = channel(closure_2_2[25]).ComponentDispatch;
                obj = { channelId: id.id, screenIndex: screenIndex.screenIndex };
                ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, obj);
              }
          };
          const merged = Object.assign(obj2);
          navigate("sidebar", obj3);
        } else {
          navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
        }
      });
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let context;
  obj = searchContext(context[13]);
  const cResult = obj.c(4);
  searchContext = searchContext.searchContext;
  let obj2 = searchContext(context[19]);
  navigation = obj2.useNavigation();
  context = react.useContext(searchContext(context[20]).SwipeForMemberListContext);
  if (cResult[0] === context) {
    if (cResult[1] === navigation) {
      let tmp4;
      if (cResult[2] === searchContext) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  let closure_0 = _asyncToGenerator(async function(arg0) {
    let c1;
    let c2;
    let obj9;
    closure_0 = arg0;
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
        let _var;
        let messageId;
        let channelId;
        let conversationId;
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
            let closure_3 = tmp;
            let closure_2 = tmp2;
            _var = undefined;
            messageId = undefined;
            channelId = closure_0.channelId;
            ({ guildId: c1, messageId: c2 } = closure_0);
            const sourceId = closure_0.sourceId;
            const obj8 = closure_0(context[22]);
            const parseConversationIdResult = obj8.parseConversationId(sourceId);
            conversationId = parseConversationIdResult;
            addCurrentSearchQueryToSearchHistory(closure_0);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj9.fetchConversation(channelId, parseConversationIdResult), done: false };
            obj9 = closure_0(context[23]);
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
          const obj6 = closure_0(context[23]);
          const conversationMessages = obj6.fetchConversationMessages(channelId, conversationId, { includeReactions: true, includeMessageReferences: true, isStandalone: true });
          if (null == ConversationPreviewStore.getConversation(conversationId)) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Conversation not found");
            throw error;
          } else {
            const obj7 = { channelId, guildId: _var, conversationId, title: _var, messageId };
            const conversation = ConversationPreviewStore.getConversation(conversationId);
            let title;
            if (conversation != null) {
              title = conversation.title;
            }
            _var = title;
            if (title == null) {
              const str = "";
              _var = "";
            }
            obj = closure_0(context[10]);
            const result = obj.performKeyboardAwareNavigation(() => {
              if (null != messageId) {
                const navigate = navigation.navigate;
                obj = { screen: closure_0(context[24]).ConversationNavigatorScreens.FOCUS, params };
                navigate("sidebar", obj);
              } else {
                navigation.navigate(closure_0(context[24]).ConversationNavigatorScreens.FOCUS, params);
              }
            });
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp17) {
        c5 = 3;
        throw tmp17;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = context;
  cResult[1] = navigation;
  cResult[2] = searchContext;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  let context;
  obj = searchContext(context[19]);
  navigation = obj.useNavigation();
  context = react.useContext(searchContext(context[20]).SwipeForMemberListContext);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async function(arg0) {
    let c1;
    let c2;
    let obj9;
    closure_0 = arg0;
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
        let _var;
        let messageId;
        let channelId;
        let conversationId;
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
            let closure_3 = tmp;
            let closure_2 = tmp2;
            _var = undefined;
            messageId = undefined;
            channelId = closure_0.channelId;
            ({ guildId: c1, messageId: c2 } = closure_0);
            const sourceId = closure_0.sourceId;
            const obj8 = closure_0(context[22]);
            const parseConversationIdResult = obj8.parseConversationId(sourceId);
            conversationId = parseConversationIdResult;
            addCurrentSearchQueryToSearchHistory(closure_0);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj9.fetchConversation(channelId, parseConversationIdResult), done: false };
            obj9 = closure_0(context[23]);
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
          const obj6 = closure_0(context[23]);
          const conversationMessages = obj6.fetchConversationMessages(channelId, conversationId, { includeReactions: true, includeMessageReferences: true, isStandalone: true });
          if (null == ConversationPreviewStore.getConversation(conversationId)) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Conversation not found");
            throw error;
          } else {
            const obj7 = { channelId, guildId: _var, conversationId, title: _var, messageId };
            const conversation = ConversationPreviewStore.getConversation(conversationId);
            let title;
            if (conversation != null) {
              title = conversation.title;
            }
            _var = title;
            if (title == null) {
              const str = "";
              _var = "";
            }
            obj = closure_0(context[10]);
            const result = obj.performKeyboardAwareNavigation(() => {
              if (null != messageId) {
                const navigate = navigation.navigate;
                obj = { screen: closure_0(context[24]).ConversationNavigatorScreens.FOCUS, params };
                navigate("sidebar", obj);
              } else {
                navigation.navigate(closure_0(context[24]).ConversationNavigatorScreens.FOCUS, params);
              }
            });
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp17) {
        c5 = 3;
        throw tmp17;
      }
    }
  });
  const items = [navigation, searchContext, context];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  obj = searchContext(576);
  const cResult = obj.c(3);
  searchContext = searchContext.searchContext;
  let obj2 = searchContext(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === navigation) {
    let tmp3;
    if (cResult[1] === searchContext) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const fn = function t(channelId) {
    obj = { type: constants.GROUP_DM, channelId };
    let closure_0 = searchContext;
    const type = searchContext.type;
    if (constants2.DMS === type) {
      const obj2 = SearchPlatformUtils;
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = channel(closure_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    const obj4 = ChannelActionCreatorsDefault;
    obj4.preload(closure_15, channelId);
    const obj5 = SearchPlatformUtils;
    const result1 = obj5.performKeyboardAwareNavigation(() => {
      obj = searchContext(closure_2_2[29]);
      obj.transitionToChannel(closure_0);
    });
  };
  cResult[0] = navigation;
  cResult[1] = searchContext;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  obj = searchContext(1490);
  navigation = obj.useNavigation();
  const items = [navigation, searchContext];
  return react.useCallback((channelId) => {
    obj = { type: constants.GROUP_DM, channelId };
    let closure_0 = searchContext;
    const type = searchContext.type;
    if (constants2.DMS === type) {
      const obj2 = SearchPlatformUtils;
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = channel(closure_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    const obj4 = ChannelActionCreatorsDefault;
    obj4.preload(closure_15, channelId);
    const obj5 = SearchPlatformUtils;
    const result1 = obj5.performKeyboardAwareNavigation(() => {
      obj = searchContext(closure_2_2[29]);
      obj.transitionToChannel(closure_0);
    });
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  obj = searchContext(576);
  const cResult = obj.c(3);
  searchContext = searchContext.searchContext;
  let obj2 = searchContext(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === navigation) {
    let tmp3;
    if (cResult[1] === searchContext) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const fn = function t(userId, arg1) {
    obj = { type: constants.DM, userId };
    let closure_0 = searchContext;
    const type = searchContext.type;
    if (constants2.DMS === type) {
      const obj2 = SearchPlatformUtils;
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = channel(closure_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    const obj4 = ChannelActionCreatorsDefault;
    obj4.preload(closure_15, arg1);
    const obj5 = SearchPlatformUtils;
    const result1 = obj5.performKeyboardAwareNavigation(() => {
      obj = searchContext(closure_2_2[29]);
      obj.transitionToChannel(closure_0);
    });
    return arg1;
  };
  cResult[0] = navigation;
  cResult[1] = searchContext;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  obj = searchContext(1490);
  navigation = obj.useNavigation();
  const items = [navigation, searchContext];
  return react.useCallback((userId, arg1) => {
    obj = { type: constants.DM, userId };
    let closure_0 = searchContext;
    const type = searchContext.type;
    if (constants2.DMS === type) {
      const obj2 = SearchPlatformUtils;
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = channel(closure_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const parent = navigation.getParent();
    if (parent != null) {
      parent.goBack();
    }
    const obj4 = ChannelActionCreatorsDefault;
    obj4.preload(closure_15, arg1);
    const obj5 = SearchPlatformUtils;
    const result1 = obj5.performKeyboardAwareNavigation(() => {
      obj = searchContext(closure_2_2[29]);
      obj.transitionToChannel(closure_0);
    });
    return arg1;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let tmp2;
  obj = searchContext(576);
  const cResult = obj.c(2);
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const fn = function t(arg0) {
      const channel = ChannelStore.getChannel(arg0);
      if (null == channel) {
        return null;
      } else {
        let closure_0 = searchContext;
        const type = searchContext.type;
        if (constants2.DMS === type) {
          obj = SearchPlatformUtils;
          const result = obj.delayUntilNavigationComplete(() => {
            obj = channel(closure_2[11]);
            return obj.addSearchHistoryItem(closure_0, obj);
          });
        }
        const obj2 = ChannelActionCreatorsDefault;
        obj2.preload(channel.guild_id, channel.id);
        const obj3 = SearchPlatformUtils;
        const result1 = obj3.performKeyboardAwareNavigation(() => {
          obj = searchContext(closure_2_2[29]);
          return obj.transitionToChannel(channel.id);
        });
      }
    };
    cResult[0] = searchContext;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return react.useCallback((arg0) => {
    const channel = ChannelStore.getChannel(arg0);
    if (null == channel) {
      return null;
    } else {
      let closure_0 = searchContext;
      const type = searchContext.type;
      if (constants2.DMS === type) {
        obj = SearchPlatformUtils;
        const result = obj.delayUntilNavigationComplete(() => {
          obj = channel(closure_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const obj2 = ChannelActionCreatorsDefault;
      obj2.preload(channel.guild_id, channel.id);
      const obj3 = SearchPlatformUtils;
      const result1 = obj3.performKeyboardAwareNavigation(() => {
        obj = searchContext(closure_2_2[29]);
        return obj.transitionToChannel(channel.id);
      });
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let callback;
  obj = searchContext(callback[13]);
  const cResult = obj.c(4);
  searchContext = searchContext.searchContext;
  const obj2 = searchContext(callback[19]);
  navigation = obj2.useNavigation();
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(f146646);
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  if (cResult[0] === navigation) {
    if (cResult[1] === callback) {
      let tmp4;
      if (cResult[2] === searchContext) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const fn = function t(arg0) {
    channel = channel.getChannel(arg0);
    if (null == channel) {
      return null;
    } else {
      let closure_0 = channel;
      const type = channel.type;
      if (constants2.DMS === type) {
        obj = searchContext(callback[10]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = channel(closure_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const parent = navigation.getParent();
      if (parent != null) {
        parent.goBack();
      }
      const obj3 = searchContext(callback[10]);
      const result1 = obj3.performKeyboardAwareNavigation(() => callback(channel));
    }
  };
  cResult[0] = navigation;
  cResult[1] = callback;
  cResult[2] = searchContext;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  let callback;
  obj = searchContext(callback[19]);
  navigation = obj.useNavigation();
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(f146646);
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const items = [navigation, callback, searchContext];
  return react.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    if (null == channel) {
      return null;
    } else {
      let closure_0 = channel;
      const type = channel.type;
      if (constants2.DMS === type) {
        obj = searchContext(callback[10]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = channel(closure_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const parent = navigation.getParent();
      if (parent != null) {
        parent.goBack();
      }
      const obj3 = searchContext(callback[10]);
      const result1 = obj3.performKeyboardAwareNavigation(() => callback(channel));
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let constants4;
  let tmp2;
  obj = searchContext(576);
  const cResult = obj.c(2);
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const fn = function t(text, tags) {
      searchContext = text;
      let closure_1 = tags;
      const tmp = searchContext;
      obj = { type: constants.TEXT, text, tags };
      const type = searchContext.type;
      if (constants4.DMS === type) {
        let obj2 = searchContext(dependencyMap[10]);
        const result = obj2.delayUntilNavigationComplete(() => {
          obj = channel(closure_2[11]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const obj3 = SearchPlatformActionCreatorsDefault;
      obj3.updateSearchQuery(tmp, (setTags) => {
        if (null != tags) {
          setTags.setTags(tmp);
        }
        setTags.setTextInputValue(searchContext);
      });
      const obj4 = SearchPlatformUtilsDefault;
      const initialMessages = obj4.fetchInitialMessages(tmp);
      if (tags != null) {
        const item = tags.forEach((type) => {
          if (type.type === constants2.COMPLETE) {
            const obj2 = { searchContext, searchTokenType: type.searchTokenType, location: constants3.SEARCH_HISTORY };
            obj = search_tracking_TrackingDefault;
            obj.trackSearchFilterAdd(obj2);
          }
        });
      }
    };
    cResult[0] = searchContext;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((searchContext) => {
  let constants4;
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return react.useCallback((text, tags) => {
    searchContext = text;
    let closure_1 = tags;
    const tmp = searchContext;
    obj = { type: constants.TEXT, text, tags };
    const type = searchContext.type;
    if (constants4.DMS === type) {
      let obj2 = searchContext(dependencyMap[10]);
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = channel(closure_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    const obj3 = SearchPlatformActionCreatorsDefault;
    obj3.updateSearchQuery(tmp, (setTags) => {
      if (null != tags) {
        setTags.setTags(tmp);
      }
      setTags.setTextInputValue(searchContext);
    });
    const obj4 = SearchPlatformUtilsDefault;
    const initialMessages = obj4.fetchInitialMessages(tmp);
    if (tags != null) {
      const item = tags.forEach((type) => {
        if (type.type === constants2.COMPLETE) {
          const obj2 = { searchContext, searchTokenType: type.searchTokenType, location: constants3.SEARCH_HISTORY };
          obj = search_tracking_TrackingDefault;
          obj.trackSearchFilterAdd(obj2);
        }
      });
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = tmp4;
export const useOnPressMessageItem = tmp5;
export const useOnPressConversationCitation = tmp6;
export const useOnPressMediaItem = function useOnPressMediaItem(searchContext) {
  searchContext = searchContext.searchContext;
  const allMediaResults = searchContext.allMediaResults;
  let onEndReached = searchContext.onEndReached;
  let onEndReachedThreshold = searchContext.onEndReachedThreshold;
  obj = searchContext(onEndReached[19]);
  navigation = obj.useNavigation();
  const context = navigation.useContext(searchContext(onEndReached[20]).SwipeForMemberListContext);
  let items = [searchContext, navigation, context, allMediaResults, onEndReached, onEndReachedThreshold];
  return navigation.useCallback((channelId, originViewOrOriginLayout) => {
    searchContext = channelId;
    const tags = SearchQueryStore.getTags(searchContext);
    obj = { type: constants2.TEXT, text: SearchQueryStore.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (constants3.DMS === type) {
      let obj2 = searchContext(onEndReached[10]);
      const result = obj2.delayUntilNavigationComplete(() => {
        obj = channel(closure_2[11]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
    }
    channel = channel.getChannel(channelId.channelId);
    const type2 = channelId.type;
    if (constants.AUDIO === type2) {
      if (null != channel) {
        const obj8 = allMediaResults(onEndReached[21]);
        const messages = obj8.fetchMessages(channelId.channelId, channelId.messageId);
        const obj9 = searchContext(onEndReached[10]);
        const result1 = obj9.performKeyboardAwareNavigation(() => {
          let guildId;
          let obj4;
          let closure_0 = channel;
          let closure_1 = context;
          const obj2 = { channelId: channel.id, guildId, searchContext };
          guildId = channel.getGuildId();
          if (guildId == null) {
            guildId = closure_15;
          }
          if (null != context) {
            const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: obj4 };
            const navigate = navigation.navigate;
            obj4 = {
              onBeforeJumpToMessage() {
                  const ComponentDispatch = channel(closure_2_2[25]).ComponentDispatch;
                  obj = { channelId: id.id, screenIndex: screenIndex.screenIndex };
                  ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, obj);
                }
            };
            const merged = Object.assign(obj2);
            navigate("sidebar", obj3);
          } else {
            navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
          }
        });
      }
    } else {
      if (null != channel) {
        let obj3 = searchContext(onEndReached[26]);
        const tmp9 = searchContext;
        if (obj3.isChannelSpoilerGated(channel)) {
          const obj6 = allMediaResults(onEndReached[21]);
          const messages1 = obj6.fetchMessages(channelId.channelId, channelId.messageId);
          const tmp9Result = tmp9(onEndReached[10]);
          const result2 = tmp9Result.performKeyboardAwareNavigation(() => {
            let guildId;
            let obj4;
            let closure_1 = context;
            const obj2 = { channelId: channel.id, guildId, searchContext };
            guildId = channel.getGuildId();
            if (guildId == null) {
              guildId = closure_15;
            }
            if (null != context) {
              const obj3 = { screen: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, params: obj4 };
              const navigate = navigation.navigate;
              obj4 = {
                onBeforeJumpToMessage() {
                    const ComponentDispatch = channel(closure_2_2[25]).ComponentDispatch;
                    obj = { channelId: id.id, screenIndex: screenIndex.screenIndex };
                    ComponentDispatch.dispatch(constants.HIDE_CHANNEL_DETAILS, obj);
                  }
              };
              const merged = Object.assign(obj2);
              navigate("sidebar", obj3);
            } else {
              navigation.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj2);
            }
          });
        }
      }
      onEndReached = 0;
      onEndReachedThreshold = 0;
      const items = [];
      const item = channel.forEach((type) => {
        const tmp2 = type.type !== metroImportAll.ATTACHMENT && type.type !== metroImportAll.EMBED && type.type !== metroImportAll.COMPONENT;
        if (!tmp2) {
          items.push(type.sources);
          const tmp6 = type.messageId === channelId.messageId && type.mediaIndex === tmp5.mediaIndex;
          if (tmp6) {
            closure_3 = closure_2;
          }
          closure_2 = closure_2 + 1;
        }
      });
      let obj4 = searchContext(onEndReached[27]);
      const obj5 = { initialSources: items, initialIndex: onEndReachedThreshold, onEndReached, onEndReachedThreshold, analyticsSource: "Search", originViewOrOriginLayout };
      obj4.openMediaModal(obj5);
    }
  }, items);
};
export const useOnPressGroupDMItem = tmp7;
export const useOnPressDMItem = tmp8;
export const useOnPressGuildTextChannel = tmp9;
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = tmp10;
export const useOnPressSearchHistoryText = tmp11;