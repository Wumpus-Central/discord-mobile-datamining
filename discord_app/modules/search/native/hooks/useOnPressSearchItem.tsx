// discord_app/modules/search/native/hooks/useOnPressSearchItem.tsx
import SearchNavigatorScreens from "SearchNavigatorScreens";
import ComponentDispatcher from "ComponentDispatcher";
import ensureGuildLoaded from "ensureGuildLoaded";
import prototype from "prototype";
import MessageEmbedTypes from "MessageEmbedTypes";
import { SearchNavigatorScreens } from "SearchNavigatorScreens";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";
import { StaticChannelRoute } from "set";

let c9;
let closure_12;
let closure_14;
let closure_15;
let error;
let map1;
let metroImportAll;
const require = arg1;
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = _handleVoiceOrStageChannelConnectPress.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, openGuildVoiceModal) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw openGuildVoiceModal;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = openGuildVoiceModal;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw openGuildVoiceModal;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = openGuildVoiceModal;
              return obj;
            } else {
              let closure_1 = tmp2;
              const tmp22 = guildStageVoice(table[25]);
              if (isGuildStageVoiceResult) {
                table = 2;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = tmp22(tmp21[24], tmp21.paths);
                return obj1;
              } else {
                table = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = tmp22(tmp21[26], tmp21.paths);
                return obj2;
              }
              isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c3 = 3;
                throw openGuildVoiceModal;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = openGuildVoiceModal;
                return obj3;
              } else {
                openGuildVoiceModal.openGuildVoiceModal(guildStageVoice, "Channel List");
                c3 = 3;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw openGuildVoiceModal;
            } else if (arg0 !== 2) {
              openGuildVoiceModal.connectAndOpen(guildStageVoice);
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = openGuildVoiceModal;
            return obj;
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const _handleVoiceOrStageChannelConnectPress = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ SearchMediaTypes: error, SearchHistoryItemTypes: metroImportAll, SearchQueryTagTypes: c9 } = MessageEmbedTypes);
({ Routes: closure_12, ComponentActions: map1, ME: closure_14, SearchTypes: closure_15 } = ME);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = function useOnPressSearchLink(searchContext) {
  let closure_0 = searchContext;
  const items = [searchContext];
  return React.useCallback((target) => {
    const searchContext = arg1;
    const tags = outer1_6.getTags(searchContext);
    let obj = { type: outer1_8.TEXT, text: outer1_6.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (outer1_15.DMS === type) {
      const result = searchContext(outer1_2[9]).delayUntilNavigationComplete(() => {
        obj = obj(outer1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(outer1_2[9]);
    }
    const url = outer1_1(outer1_2[11]).safeParseWithQuery(target);
    if (null != url) {
      if (null != url.protocol) {
        if (null != url.hostname) {
          const formatResult = tmp6(tmp7[11]).format(url);
          obj = formatResult;
          const tmp6Result = tmp6(tmp7[11]);
          obj = { href: null, onConfirm: null, trusted: null };
          obj[0] = formatResult;
          obj[1] = function onConfirm() {
            obj = obj(outer1_2[15]);
            return obj.openURL(obj);
          };
          obj[2] = function trusted() {
            return closure_0;
          };
          searchContext(tmp7[14]).handleClick(obj);
          const obj6 = searchContext(tmp7[14]);
        }
      }
    }
    const obj3 = outer1_1(outer1_2[11]);
    tmp6 = outer1_1;
    const intl = searchContext(tmp7[13]).intl;
    searchContext(outer1_2[12]).presentFailedToast(intl.string(searchContext(outer1_2[13]).t.XiqzAp));
  }, items);
};
export const useOnPressMessageItem = function useOnPressMessageItem(searchContext) {
  searchContext = searchContext.searchContext;
  let navigation;
  let context;
  navigation = searchContext(context[16]).useNavigation();
  context = React.useContext(searchContext(context[17]).SwipeForMemberListContext);
  const items = [navigation, searchContext, context];
  return React.useCallback((arg0, arg1) => {
    const channel = outer1_5.getChannel(arg0);
    const searchContext = channel;
    if (null != channel) {
      const tags = outer1_6.getTags(searchContext);
      let obj = { type: null, text: null, tags: null };
      obj[0] = outer1_8.TEXT;
      obj[1] = outer1_6.getTextInputValue(searchContext);
      obj[2] = tags;
      const type = searchContext.type;
      if (outer1_15.DMS === type) {
        obj = searchContext(context[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = obj(outer1_2[10]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const messages = navigation(context[18]).fetchMessages(arg0, arg1);
      const obj2 = navigation(context[18]);
      const result1 = searchContext(context[9]).performKeyboardAwareNavigation(() => {
        let closure_1 = outer1_2;
        let obj = { channelId: guildId.id, guildId: null, searchContext: null };
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = outer2_14;
        }
        obj[1] = guildId;
        obj[2] = guildId;
        if (null != outer1_2) {
          obj = { screen: null, params: null };
          obj[0] = outer2_10.SEARCH_CHAT_PREVIEW;
          const obj1 = {};
          const merged = Object.assign(obj);
          obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(channel_link) {
            const ComponentDispatch = lib(outer1_2[19]).ComponentDispatch;
            ComponentDispatch.dispatch(outer1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
          };
          obj[1] = obj1;
          obj.navigate("sidebar", obj);
        } else {
          obj.navigate(outer2_10.SEARCH_CHAT_PREVIEW, obj);
        }
      });
      const obj3 = searchContext(context[9]);
    }
  }, items);
};
export const useOnPressMediaItem = function useOnPressMediaItem(searchContext) {
  searchContext = searchContext.searchContext;
  const allMediaResults = searchContext.allMediaResults;
  const onEndReached = searchContext.onEndReached;
  const onEndReachedThreshold = searchContext.onEndReachedThreshold;
  let navigation;
  let context;
  navigation = searchContext(onEndReached[16]).useNavigation();
  context = navigation.useContext(searchContext(onEndReached[17]).SwipeForMemberListContext);
  let items = [searchContext, navigation, context, allMediaResults, onEndReached, onEndReachedThreshold];
  return navigation.useCallback((channelId) => {
    const searchContext = channelId;
    const tags = outer1_6.getTags(searchContext);
    let obj = { type: outer1_8.TEXT, text: outer1_6.getTextInputValue(searchContext), tags };
    let channel = obj;
    const type = searchContext.type;
    if (outer1_15.DMS === type) {
      const result = searchContext(onEndReached[9]).delayUntilNavigationComplete(() => {
        obj = obj(outer1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(onEndReached[9]);
    }
    channel = context.getChannel(channelId.channelId);
    const type2 = channelId.type;
    if (outer1_7.AUDIO === type2) {
      if (null != channel) {
        const messages = allMediaResults(onEndReached[18]).fetchMessages(channelId.channelId, channelId.messageId);
        const obj8 = allMediaResults(onEndReached[18]);
        const result1 = searchContext(onEndReached[9]).performKeyboardAwareNavigation(() => {
          let obj = items;
          let closure_0 = store;
          store = outer1_5;
          obj = { channelId: store.id, guildId: null, searchContext: null };
          let guildId = store.getGuildId();
          if (guildId == null) {
            guildId = outer2_14;
          }
          obj[1] = guildId;
          obj[2] = closure_0;
          if (null != outer1_5) {
            obj = { screen: null, params: null };
            obj[0] = outer2_10.SEARCH_CHAT_PREVIEW;
            const obj1 = {};
            const merged = Object.assign(obj);
            obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(channel_link) {
              const ComponentDispatch = lib(outer1_2[19]).ComponentDispatch;
              ComponentDispatch.dispatch(outer1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
            };
            obj[1] = obj1;
            obj.navigate("sidebar", obj);
          } else {
            obj.navigate(outer2_10.SEARCH_CHAT_PREVIEW, obj);
          }
        });
      }
    } else {
      if (null != channel) {
        if (obj3.isChannelSpoilerGated(channel)) {
          const messages1 = allMediaResults(tmp10[18]).fetchMessages(channelId.channelId, channelId.messageId);
          const obj6 = allMediaResults(tmp10[18]);
          const result2 = tmp9(tmp10[9]).performKeyboardAwareNavigation(() => {
            let obj = items;
            let closure_0 = store;
            store = outer1_5;
            obj = { channelId: store.id, guildId: null, searchContext: null };
            let guildId = store.getGuildId();
            if (guildId == null) {
              guildId = outer2_14;
            }
            obj[1] = guildId;
            obj[2] = closure_0;
            if (null != outer1_5) {
              obj = { screen: null, params: null };
              obj[0] = outer2_10.SEARCH_CHAT_PREVIEW;
              const obj1 = {};
              const merged = Object.assign(obj);
              obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(channel_link) {
                const ComponentDispatch = lib(outer1_2[19]).ComponentDispatch;
                ComponentDispatch.dispatch(outer1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
              };
              obj[1] = obj1;
              obj.navigate("sidebar", obj);
            } else {
              obj.navigate(outer2_10.SEARCH_CHAT_PREVIEW, obj);
            }
          });
        }
        obj3 = searchContext(onEndReached[20]);
        tmp9 = searchContext;
      }
      let c2 = 0;
      let c3 = 0;
      const items = [];
      const item = channel.forEach((type) => {
        if (!tmp2) {
          items.push(type.sources);
          if (tmp6) {
            let SearchNavigatorScreens = closure_2;
          }
          closure_2 = closure_2 + 1;
          tmp6 = type.messageId === messageId.messageId && type.mediaIndex === tmp5.mediaIndex;
        }
      });
      obj = { initialSources: null, initialIndex: null, onEndReached: null, onEndReachedThreshold: null, analyticsSource: "Search", originViewOrOriginLayout: null };
      obj[0] = items;
      obj[1] = c3;
      obj[2] = c2;
      obj[3] = c3;
      obj[5] = arg1;
      searchContext(onEndReached[21]).openMediaModal(obj);
      const obj4 = searchContext(onEndReached[21]);
    }
  }, items);
};
export const useOnPressGroupDMItem = function useOnPressGroupDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  let navigation;
  navigation = searchContext(1500).useNavigation();
  const items = [navigation, searchContext];
  return React.useCallback((channelId) => {
    const searchContext = channelId;
    const obj = { type: outer1_8.GROUP_DM, channelId };
    const type = searchContext.type;
    if (outer1_15.DMS === type) {
      const result = searchContext(outer1_2[9]).delayUntilNavigationComplete(() => {
        obj = obj(outer1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(outer1_2[9]);
    }
    const parent = obj.getParent();
    if (parent != null) {
      parent.goBack();
    }
    navigation(outer1_2[22]).preload(outer1_14, channelId);
    const obj4 = navigation(outer1_2[22]);
    const result1 = searchContext(outer1_2[9]).performKeyboardAwareNavigation(() => {
      callback(outer1_2[23]).transitionToChannel(callback);
    });
  }, items);
};
export const useOnPressDMItem = function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  let navigation;
  navigation = searchContext(1500).useNavigation();
  const items = [navigation, searchContext];
  return React.useCallback((userId) => {
    const searchContext = arg1;
    const obj = { type: outer1_8.DM, userId };
    const type = searchContext.type;
    if (outer1_15.DMS === type) {
      const result = searchContext(outer1_2[9]).delayUntilNavigationComplete(() => {
        obj = obj(outer1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(outer1_2[9]);
    }
    const parent = obj.getParent();
    if (parent != null) {
      parent.goBack();
    }
    navigation(outer1_2[22]).preload(outer1_14, arg1);
    const obj4 = navigation(outer1_2[22]);
    const result1 = searchContext(outer1_2[9]).performKeyboardAwareNavigation(() => {
      callback(outer1_2[23]).transitionToChannel(callback);
    });
    return arg1;
  }, items);
};
export const useOnPressGuildTextChannel = function useOnPressGuildTextChannel(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return React.useCallback((arg0) => {
    const channel = outer1_5.getChannel(arg0);
    const searchContext = channel;
    if (null == channel) {
      return null;
    } else {
      let obj = { type: null, channelId: null };
      obj[0] = outer1_8.GUILD_TEXT_CHANNEL;
      obj[1] = channel.id;
      const type = searchContext.type;
      if (outer1_15.DMS === type) {
        obj = searchContext(outer1_2[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = obj(outer1_2[10]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      outer1_1(outer1_2[22]).preload(channel.guild_id, channel.id);
      const obj2 = outer1_1(outer1_2[22]);
      const result1 = searchContext(outer1_2[9]).performKeyboardAwareNavigation(() => lib(outer1_2[23]).transitionToChannel(lib.id));
    }
  }, items);
};
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = function useOnPressGuildVoiceChannel(searchContext) {
  searchContext = searchContext.searchContext;
  let _require = searchContext;
  let navigation;
  let callback;
  navigation = _require(callback[16]).useNavigation();
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, openMemberVerificationModal) {
      let guildId = tmp2;
      let guild_id = lib;
      if (!obj9.maybeOpenAgeGateForVoiceChannel(lib.id)) {
        let tmp23Result = tmp23(tmp24[28]);
        if (!tmp23Result.maybeOpenSpoilerGateForVoiceChannel(guild_id.id)) {
          tmp23Result = tmp23(tmp24[29]);
          guildId = guild_id.getGuildId();
          if (null != guildId) {
            if (tmp23Result1.shouldShowMembershipVerificationGate(guildId)) {
              const table = 1;
              let c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = tmp23(tmp24[25])(tmp24[31], tmp24.paths);
              return obj1;
            }
            tmp23Result1 = tmp23(tmp24[30]);
          }
          if (tmp23Result.getChannelRoleSubscriptionStatus(guild_id.id).needSubscriptionToAccess) {
            guild_id = guild_id.guild_id;
            const tmp23Result2 = tmp23(tmp24[32]);
            const transitionToResult = tmp23(tmp24[32]).transitionTo(outer1_12.CHANNEL(guild_id, outer1_16.ROLE_SUBSCRIPTIONS));
          } else {
            outer1_17(guild_id);
          }
        }
      }
      yield "HermesInternal";
      if (arg0 !== 2) {
        const result = openMemberVerificationModal.openMemberVerificationModal(guildId, () => outer1_17(closure_0));
        c3 = 3;
      }
      return openMemberVerificationModal;
    })();
  });
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  const items = [navigation, callback, searchContext];
  return React.useCallback((arg0) => {
    const channel = outer1_5.getChannel(arg0);
    const lib = channel;
    if (null == channel) {
      return null;
    } else {
      let obj = { type: null, channelId: null };
      obj[0] = outer1_8.GUILD_VOICE_CHANNEL;
      obj[1] = channel.id;
      const type = lib.type;
      if (outer1_15.DMS === type) {
        obj = lib(callback[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = obj(outer1_2[10]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const parent = obj.getParent();
      if (parent != null) {
        parent.goBack();
      }
      const result1 = lib(callback[9]).performKeyboardAwareNavigation(() => outer1_2(closure_0));
    }
  }, items);
};
export const useOnPressSearchHistoryText = function useOnPressSearchHistoryText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return React.useCallback((text, arr) => {
    const searchContext = text;
    let obj = arr;
    obj = { type: outer1_8.TEXT, text, tags: arr };
    const type = searchContext.type;
    if (outer1_15.DMS === type) {
      const result = searchContext(outer1_2[9]).delayUntilNavigationComplete(() => {
        obj = obj(outer1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(outer1_2[9]);
    }
    outer1_1(outer1_2[10]).updateSearchQuery(searchContext, (setTags) => {
      if (null != obj) {
        setTags.setTags(tmp);
      }
      setTags.setTextInputValue(closure_0);
    });
    const obj3 = outer1_1(outer1_2[10]);
    const initialMessages = outer1_1(outer1_2[9]).fetchInitialMessages(tmp);
    if (arr != null) {
      const item = arr.forEach((type) => {
        if (type.type === outer1_9.COMPLETE) {
          obj = obj(outer1_2[33]);
          obj = { searchContext: null, searchTokenType: null, location: null };
          obj[0] = closure_0;
          obj[1] = type.searchTokenType;
          obj[2] = outer1_11.SEARCH_HISTORY;
          obj.trackSearchFilterAdd(obj);
        }
      });
    }
  }, items);
};