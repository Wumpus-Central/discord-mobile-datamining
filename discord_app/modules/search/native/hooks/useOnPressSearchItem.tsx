// discord_app/modules/search/native/hooks/useOnPressSearchItem.tsx
import isDiscordProxiedAssetUrlDefault from "../../../../utils/URLUtils.tsx";
import _modDef4770 from "../../../../actions/ChannelActionCreators.tsx";
import performKeyboardAwareNavigationDefault from "../SearchPlatformUtils.tsx";
import _modDef11534 from "../SearchPlatformActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import prototype from "../stores/SearchQueryStore.tsx";
import MessageEmbedTypes from "../../SearchConstants.tsx";
import { SearchNavigatorScreens } from "../components/navigator/SearchNavigatorConstants.tsx";
import { SearchFilterAddLocations } from "../tracking/TrackingConstants.tsx";
import ME from "../../../../Constants.tsx";
import { StaticChannelRoute } from "../../../channel/ChannelConstants.tsx";

const require = fn;
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
let result = require("obj132").fileFinishedImporting("modules/search/native/hooks/useOnPressSearchItem.tsx");

export const useOnPressSearchLink = function useOnPressSearchLink(searchContext) {
  closure_0 = searchContext;
  const items = [searchContext];
  return React.useCallback((target) => {
    searchContext = arg1;
    const tags = closure_1_6.getTags(searchContext);
    let obj = { type: closure_1_8.TEXT, text: closure_1_6.getTextInputValue(searchContext), tags };
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(dependencyMap[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(dependencyMap[9]);
    }
    const url = isDiscordProxiedAssetUrlDefault.safeParseWithQuery(target);
    if (null != url) {
      if (null != url.protocol) {
        if (null != url.hostname) {
          const formatResult = isDiscordProxiedAssetUrlDefault.format(url);
          const tmp6Result = isDiscordProxiedAssetUrlDefault;
          obj = { href: null, onConfirm: null, trusted: null };
          obj[0] = formatResult;
          obj[1] = function onConfirm() {
            obj = obj(closure_1_2[15]);
            return obj.openURL(obj);
          };
          obj[2] = function trusted() {
            return closure_0;
          };
          searchContext(dependencyMap[14]).handleClick(obj);
          const obj6 = searchContext(dependencyMap[14]);
        }
      }
    }
    const intl = searchContext(dependencyMap[13]).intl;
    searchContext(dependencyMap[12]).presentFailedToast(intl.string(searchContext(dependencyMap[13]).t.XiqzAp));
    const obj4 = searchContext(dependencyMap[12]);
  }, items);
};
export const useOnPressMessageItem = function useOnPressMessageItem(searchContext) {
  searchContext = searchContext.searchContext;
  let context;
  const navigation = searchContext(context[16]).useNavigation();
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
        closure_1 = context;
        obj = { channelId: guildId.id, guildId: null, searchContext: null };
        guildId = guildId.getGuildId();
        if (guildId == null) {
          guildId = closure_2_14;
        }
        obj[1] = guildId;
        obj[2] = guildId;
        if (null != context) {
          obj = { screen: null, params: null };
          obj[0] = SearchNavigatorScreens.SEARCH_CHAT_PREVIEW;
          obj1 = {};
          const merged = Object.assign(obj);
          obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(closure_1_2) {
            const ComponentDispatch = lib(closure_1_2[19]).ComponentDispatch;
            ComponentDispatch.dispatch(closure_1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
          };
          obj[1] = obj1;
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
  const onEndReached = searchContext.onEndReached;
  const onEndReachedThreshold = searchContext.onEndReachedThreshold;
  const navigation = searchContext(onEndReached[16]).useNavigation();
  const context = navigation.useContext(searchContext(onEndReached[17]).SwipeForMemberListContext);
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
          closure_0 = store;
          store = context;
          let obj = { channelId: store.id, guildId: null, searchContext: null };
          let guildId = store.getGuildId();
          if (guildId == null) {
            guildId = closure_2_14;
          }
          obj[1] = guildId;
          obj[2] = closure_0;
          if (null != context) {
            obj = { screen: null, params: null };
            obj[0] = SearchNavigatorScreens.SEARCH_CHAT_PREVIEW;
            obj1 = {};
            const merged = Object.assign(obj);
            obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(closure_1_2) {
              const ComponentDispatch = lib(closure_1_2[19]).ComponentDispatch;
              ComponentDispatch.dispatch(closure_1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
            };
            obj[1] = obj1;
            obj.navigate("sidebar", obj);
          } else {
            obj.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj);
          }
        });
        const obj9 = searchContext(onEndReached[9]);
      }
    } else {
      if (null != channel) {
        if (obj3.isChannelSpoilerGated(channel)) {
          const messages1 = allMediaResults(onEndReached[18]).fetchMessages(channelId.channelId, channelId.messageId);
          const obj6 = allMediaResults(onEndReached[18]);
          const result2 = tmp9(onEndReached[9]).performKeyboardAwareNavigation(() => {
            closure_0 = store;
            store = context;
            let obj = { channelId: store.id, guildId: null, searchContext: null };
            let guildId = store.getGuildId();
            if (guildId == null) {
              guildId = closure_2_14;
            }
            obj[1] = guildId;
            obj[2] = closure_0;
            if (null != context) {
              obj = { screen: null, params: null };
              obj[0] = SearchNavigatorScreens.SEARCH_CHAT_PREVIEW;
              obj1 = {};
              const merged = Object.assign(obj);
              obj1.onBeforeJumpToMessage = function onBeforeJumpToMessage(closure_1_2) {
                const ComponentDispatch = lib(closure_1_2[19]).ComponentDispatch;
                ComponentDispatch.dispatch(closure_1_13.HIDE_CHANNEL_DETAILS, { channelId: lib.id, screenIndex: screenIndex.screenIndex });
              };
              obj[1] = obj1;
              obj.navigate("sidebar", obj);
            } else {
              obj.navigate(SearchNavigatorScreens.SEARCH_CHAT_PREVIEW, obj);
            }
          });
          const tmp9Result = tmp9(onEndReached[9]);
        }
        obj3 = searchContext(onEndReached[20]);
        tmp9 = searchContext;
      }
      c2 = 0;
      c3 = 0;
      const items = [];
      const item = channel.forEach((item, index) => {
        if (!tmp2) {
          items.push(item.sources);
          if (tmp6) {
            closure_3 = closure_2;
          }
          closure_2 = closure_2 + 1;
          tmp6 = item.messageId === messageId.messageId && item.mediaIndex === tmp5.mediaIndex;
        }
        tmp2 = item.type !== closure_2_7.ATTACHMENT && item.type !== closure_2_7.EMBED && item.type !== closure_2_7.COMPONENT;
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
  const navigation = searchContext(1500).useNavigation();
  const items = [navigation, searchContext];
  return React.useCallback((channelId) => {
    searchContext = channelId;
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(dependencyMap[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(dependencyMap[9]);
    }
    const parent = { type: closure_1_8.GROUP_DM, channelId }.getParent();
    if (parent != null) {
      parent.goBack();
    }
    navigation(dependencyMap[22]).preload(closure_1_14, channelId);
    const obj4 = navigation(dependencyMap[22]);
    const result1 = searchContext(dependencyMap[9]).performKeyboardAwareNavigation(() => {
      callback(closure_1_2[23]).transitionToChannel(callback);
    });
    const obj5 = searchContext(dependencyMap[9]);
  }, items);
};
export const useOnPressDMItem = function useOnPressDMItem(searchContext) {
  searchContext = searchContext.searchContext;
  const navigation = searchContext(1500).useNavigation();
  const items = [navigation, searchContext];
  return React.useCallback((userId) => {
    searchContext = arg1;
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(dependencyMap[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(dependencyMap[9]);
    }
    const parent = { type: closure_1_8.DM, userId }.getParent();
    if (parent != null) {
      parent.goBack();
    }
    navigation(dependencyMap[22]).preload(closure_1_14, arg1);
    const obj4 = navigation(dependencyMap[22]);
    const result1 = searchContext(dependencyMap[9]).performKeyboardAwareNavigation(() => {
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
        obj = searchContext(dependencyMap[9]);
        const result = obj.delayUntilNavigationComplete(() => {
          obj = obj(closure_1_2[10]);
          return obj.addSearchHistoryItem(closure_0, obj);
        });
      }
      _modDef4770.preload(channel.guild_id, channel.id);
      const result1 = searchContext(dependencyMap[9]).performKeyboardAwareNavigation(() => lib(closure_1_2[23]).transitionToChannel(lib.id));
      const obj3 = searchContext(dependencyMap[9]);
    }
  }, items);
};
export { handleVoiceOrStageChannelConnectPress };
export const useOnPressGuildVoiceChannel = function useOnPressGuildVoiceChannel(searchContext) {
  searchContext = searchContext.searchContext;
  let _require = searchContext;
  let callback;
  const navigation = _require(callback[16]).useNavigation();
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0, openMemberVerificationModal) {
      let guildId = tmp2;
      let guild_id = lib;
      if (!obj9.maybeOpenAgeGateForVoiceChannel(lib.id)) {
        let tmp23Result = lib(tmp24[28]);
        if (!tmp23Result.maybeOpenSpoilerGateForVoiceChannel(guild_id.id)) {
          tmp23Result = lib(tmp24[29]);
          guildId = guild_id.getGuildId();
          if (null != guildId) {
            if (tmp23Result1.shouldShowMembershipVerificationGate(guildId)) {
              const table = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = lib(tmp24[25])(tmp24[31], tmp24.paths);
              return obj1;
            }
            tmp23Result1 = lib(tmp24[30]);
          }
          if (tmp23Result.getChannelRoleSubscriptionStatus(guild_id.id).needSubscriptionToAccess) {
            guild_id = guild_id.guild_id;
            const tmp23Result2 = lib(tmp24[32]);
            const transitionToResult = lib(tmp24[32]).transitionTo(closure_1_12.CHANNEL(guild_id, closure_1_16.ROLE_SUBSCRIPTIONS));
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
      const result1 = lib(callback[9]).performKeyboardAwareNavigation(() => callback(closure_0));
      const obj3 = lib(callback[9]);
    }
  }, items);
};
export const useOnPressSearchHistoryText = function useOnPressSearchHistoryText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  return React.useCallback((text, arr) => {
    searchContext = text;
    const type = searchContext.type;
    if (closure_1_15.DMS === type) {
      const result = searchContext(dependencyMap[9]).delayUntilNavigationComplete(() => {
        obj = obj(closure_1_2[10]);
        return obj.addSearchHistoryItem(closure_0, obj);
      });
      const obj2 = searchContext(dependencyMap[9]);
    }
    _modDef11534.updateSearchQuery(searchContext, (setTags) => {
      if (null != obj) {
        setTags.setTags(tmp);
      }
      setTags.setTextInputValue(closure_0);
    });
    const initialMessages = performKeyboardAwareNavigationDefault.fetchInitialMessages(tmp);
    if (arr != null) {
      const item = arr.forEach((item, index) => {
        if (item.type === closure_1_9.COMPLETE) {
          obj(closure_1_2[33]);
          obj = { searchContext: null, searchTokenType: null, location: null };
          obj[0] = closure_0;
          obj[1] = item.searchTokenType;
          obj[2] = closure_1_11.SEARCH_HISTORY;
          obj.trackSearchFilterAdd(obj);
        }
      });
    }
  }, items);
};