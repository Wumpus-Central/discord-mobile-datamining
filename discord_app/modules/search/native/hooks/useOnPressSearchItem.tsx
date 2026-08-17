// discord_app/modules/search/native/hooks/useOnPressSearchItem.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "prototype" /* 11510 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;
import { SearchNavigatorScreens } from "SearchNavigatorScreens" /* 15867 */;
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations" /* 8506 */;
import ME from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;

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
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
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
              closure_1 = tmp2;
              const tmp22 = guildStageVoice(table[25]);
              if (isGuildStageVoiceResult) {
                table = 2;
                c3 = 1;
                obj1 = { value: null, done: false };
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
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ SearchMediaTypes: error, SearchHistoryItemTypes: closure_8, SearchQueryTagTypes: c9 } = MessageEmbedTypes);
({ Routes: closure_12, ComponentActions: map1, ME: closure_14, SearchTypes: closure_15 } = ME);
let result = require("set").fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = function useOnPressSearchLink(searchContext) {
  closure_0 = searchContext;
  const items = [searchContext];
  return React.useCallback((target) => {
    searchContext = arg1;
    const tags = closure_1_6.getTags(searchContext);
    let obj = { type: closure_1_8.TEXT, text: closure_1_6.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(closure_1_2[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(closure_1_2[9]);
    }
    const url = closure_1_1(closure_1_2[11]).safeParseWithQuery(target);
    if (null != url) {
      if (null != url.protocol) {
        if (null != url.hostname) {
          const formatResult = tmp6(tmp7[11]).format(url);
          obj = formatResult;
          const tmp6Result = tmp6(tmp7[11]);
          obj = { href: null, onConfirm: null, trusted: null };
          obj[0] = formatResult;
          obj[1] = function onConfirm() {
            obj = obj(closure_1_2[15]);
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
    const obj3 = closure_1_1(closure_1_2[11]);
    tmp6 = closure_1_1;
    const intl = searchContext(tmp7[13]).intl;
    searchContext(closure_1_2[12]).presentFailedToast(intl.string(searchContext(closure_1_2[13]).t.XiqzAp));
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
    const channel = closure_1_5.getChannel(arg0);
    searchContext = channel;
    if (null != channel) {
      const tags = closure_1_6.getTags(searchContext);
      let obj = { type: null, text: null, tags: null };
      obj[0] = closure_1_8.TEXT;
      obj[1] = closure_1_6.getTextInputValue(searchContext);
      obj[2] = tags;
      const type = searchContext.type;
      if (closure_1_15.DMS === type) {
        obj = searchContext(context[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = obj(closure_1_2[10]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const messages = navigation(context[18]).fetchMessages(arg0, arg1);
      const obj2 = navigation(context[18]);
      const result1 = searchContext(context[9]).performKeyboardAwareNavigation(() => {
        closure_1 = closure_1_2;
        obj = { channelId: guildId.id, guildId: null, searchContext: null };
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = closure_2_14;
        }
        obj[1] = guildId;
        obj[2] = guildId;
        if (null != closure_1_2) {
          obj = { screen: null, params: null };
          obj[0] = closure_2_10.SEARCH_CHAT_PREVIEW;
          obj1 = {};
          const merged = Object.assign(obj);
          obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(channel_link) {
            const ComponentDispatch = lib(closure_1_2[19]).ComponentDispatch;
            ComponentDispatch.dispatch(closure_1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
          };
          obj[1] = obj1;
          obj.navigate("sidebar", obj);
        } else {
          obj.navigate(closure_2_10.SEARCH_CHAT_PREVIEW, obj);
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
    searchContext = channelId;
    const tags = closure_1_6.getTags(searchContext);
    let obj = { type: closure_1_8.TEXT, text: closure_1_6.getTextInputValue(searchContext), tags };
    let channel = obj;
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(onEndReached[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(onEndReached[9]);
    }
    channel = context.getChannel(channelId.channelId);
    const type2 = channelId.type;
    if (closure_1_7.AUDIO === type2) {
      if (null != channel) {
        const messages = allMediaResults(onEndReached[18]).fetchMessages(channelId.channelId, channelId.messageId);
        const obj8 = allMediaResults(onEndReached[18]);
        const result1 = searchContext(onEndReached[9]).performKeyboardAwareNavigation(() => {
          let obj = items;
          closure_0 = store;
          store = closure_1_5;
          obj = { channelId: store.id, guildId: null, searchContext: null };
          let guildId = store.getGuildId();
          if (guildId == null) {
            guildId = closure_2_14;
          }
          obj[1] = guildId;
          obj[2] = closure_0;
          if (null != closure_1_5) {
            obj = { screen: null, params: null };
            obj[0] = closure_2_10.SEARCH_CHAT_PREVIEW;
            obj1 = {};
            const merged = Object.assign(obj);
            obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(channel_link) {
              const ComponentDispatch = lib(closure_1_2[19]).ComponentDispatch;
              ComponentDispatch.dispatch(closure_1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
            };
            obj[1] = obj1;
            obj.navigate("sidebar", obj);
          } else {
            obj.navigate(closure_2_10.SEARCH_CHAT_PREVIEW, obj);
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
            closure_0 = store;
            store = closure_1_5;
            obj = { channelId: store.id, guildId: null, searchContext: null };
            let guildId = store.getGuildId();
            if (guildId == null) {
              guildId = closure_2_14;
            }
            obj[1] = guildId;
            obj[2] = closure_0;
            if (null != closure_1_5) {
              obj = { screen: null, params: null };
              obj[0] = closure_2_10.SEARCH_CHAT_PREVIEW;
              obj1 = {};
              const merged = Object.assign(obj);
              obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(channel_link) {
                const ComponentDispatch = lib(closure_1_2[19]).ComponentDispatch;
                ComponentDispatch.dispatch(closure_1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
              };
              obj[1] = obj1;
              obj.navigate("sidebar", obj);
            } else {
              obj.navigate(closure_2_10.SEARCH_CHAT_PREVIEW, obj);
            }
          });
        }
        obj3 = searchContext(onEndReached[20]);
        tmp9 = searchContext;
      }
      c2 = 0;
      c3 = 0;
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
    searchContext = channelId;
    const obj = { type: closure_1_8.GROUP_DM, channelId };
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(closure_1_2[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(closure_1_2[9]);
    }
    const parent = obj.getParent();
    if (parent != null) {
      parent.goBack();
    }
    navigation(closure_1_2[22]).preload(closure_1_14, channelId);
    const obj4 = navigation(closure_1_2[22]);
    const result1 = searchContext(closure_1_2[9]).performKeyboardAwareNavigation(() => {
      callback(closure_1_2[23]).transitionToChannel(callback);
    });
  }, items);
};
export const useOnPressDMItem = function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  let navigation;
  navigation = searchContext(1500).useNavigation();
  const items = [navigation, searchContext];
  return React.useCallback((userId) => {
    searchContext = arg1;
    const obj = { type: closure_1_8.DM, userId };
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(closure_1_2[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(closure_1_2[9]);
    }
    const parent = obj.getParent();
    if (parent != null) {
      parent.goBack();
    }
    navigation(closure_1_2[22]).preload(closure_1_14, arg1);
    const obj4 = navigation(closure_1_2[22]);
    const result1 = searchContext(closure_1_2[9]).performKeyboardAwareNavigation(() => {
      callback(closure_1_2[23]).transitionToChannel(callback);
    });
    return arg1;
  }, items);
};
export const useOnPressGuildTextChannel = function useOnPressGuildTextChannel(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return React.useCallback((arg0) => {
    const channel = closure_1_5.getChannel(arg0);
    searchContext = channel;
    if (null == channel) {
      return null;
    } else {
      let obj = { type: null, channelId: null };
      obj[0] = closure_1_8.GUILD_TEXT_CHANNEL;
      obj[1] = channel.id;
      const type = searchContext.type;
      if (closure_1_15.DMS === type) {
        obj = searchContext(closure_1_2[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = obj(closure_1_2[10]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      closure_1_1(closure_1_2[22]).preload(channel.guild_id, channel.id);
      const obj2 = closure_1_1(closure_1_2[22]);
      const result1 = searchContext(closure_1_2[9]).performKeyboardAwareNavigation(() => lib(closure_1_2[23]).transitionToChannel(lib.id));
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
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
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
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = tmp23(tmp24[25])(tmp24[31], tmp24.paths);
              return obj1;
            }
            tmp23Result1 = tmp23(tmp24[30]);
          }
          if (tmp23Result.getChannelRoleSubscriptionStatus(guild_id.id).needSubscriptionToAccess) {
            guild_id = guild_id.guild_id;
            const tmp23Result2 = tmp23(tmp24[32]);
            const transitionToResult = tmp23(tmp24[32]).transitionTo(closure_1_12.CHANNEL(guild_id, closure_1_16.ROLE_SUBSCRIPTIONS));
          } else {
            closure_1_17(guild_id);
          }
        }
      }
      yield "HermesInternal";
      if (arg0 !== 2) {
        const result = openMemberVerificationModal.openMemberVerificationModal(guildId, () => closure_1_17(closure_0));
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
    const channel = closure_1_5.getChannel(arg0);
    const lib = channel;
    if (null == channel) {
      return null;
    } else {
      let obj = { type: null, channelId: null };
      obj[0] = closure_1_8.GUILD_VOICE_CHANNEL;
      obj[1] = channel.id;
      const type = lib.type;
      if (closure_1_15.DMS === type) {
        obj = lib(callback[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = obj(closure_1_2[10]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      const parent = obj.getParent();
      if (parent != null) {
        parent.goBack();
      }
      const result1 = lib(callback[9]).performKeyboardAwareNavigation(() => closure_1_2(closure_0));
    }
  }, items);
};
export const useOnPressSearchHistoryText = function useOnPressSearchHistoryText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return React.useCallback((text, arr) => {
    searchContext = text;
    let obj = arr;
    obj = { type: closure_1_8.TEXT, text, tags: arr };
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(closure_1_2[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(closure_1_2[9]);
    }
    closure_1_1(closure_1_2[10]).updateSearchQuery(searchContext, (setTags) => {
      if (null != obj) {
        setTags.setTags(tmp);
      }
      setTags.setTextInputValue(closure_0);
    });
    const obj3 = closure_1_1(closure_1_2[10]);
    const initialMessages = closure_1_1(closure_1_2[9]).fetchInitialMessages(tmp);
    if (arr != null) {
      const item = arr.forEach((type) => {
        if (type.type === closure_1_9.COMPLETE) {
          obj = obj(closure_1_2[33]);
          obj = { searchContext: null, searchTokenType: null, location: null };
          obj[0] = closure_0;
          obj[1] = type.searchTokenType;
          obj[2] = closure_1_11.SEARCH_HISTORY;
          obj.trackSearchFilterAdd(obj);
        }
      });
    }
  }, items);
};