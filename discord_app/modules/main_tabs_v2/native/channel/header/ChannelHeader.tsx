// === Module 13123: ChannelHeader ===

// Module 13123 (ChannelHeader)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ChatInputUtils from "ChatInputUtils" /* 4751 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11140 */;
import GuildRoleSubscriptionsChannelHeaderDefault from "GuildRoleSubscriptionsChannelHeader" /* 13124 */;
import HomeChannelHeaderDefault from "HomeChannelHeader" /* 13125 */;
import PrivateChannelHeaderDefault from "PrivateChannelHeader" /* 13126 */;
import ForumChannelHeaderDefault from "ForumChannelHeader" /* 13134 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 13136 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let isGuildMemberCountVisible;
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  let showCreateThread;
  let tmp9;
  const obj = channelId(576);
  const cResult = obj.c(27);
  channelId = channelId.channelId;
  ({ screenIndex, isNavigationScreen, pressable, isGuildMemberCountVisible, showCreateThread } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = channelId(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  const tmpResult2 = channelId(5106);
  const isChannelContentGated = tmpResult2.useIsChannelContentGated(stateFromStores);
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let tmp36;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp39 = jsx(GuildRoleSubscriptionsChannelHeaderDefault, {});
      cResult[3] = tmp39;
      tmp36 = tmp39;
    } else {
      tmp36 = cResult[3];
    }
    return tmp36;
  } else if (channelId === tmp12.GUILD_HOME) {
    let tmp32;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp35 = jsx(HomeChannelHeaderDefault, {});
      cResult[4] = tmp35;
      tmp32 = tmp35;
    } else {
      tmp32 = cResult[4];
    }
    return tmp32;
  } else {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = stateFromStores.isPrivate();
    }
    if (isPrivateResult) {
      if (cResult[5] === (!isChannelContentGated && (undefined === pressable || pressable))) {
        if (cResult[6] === channelId) {
          let tmp28;
          if (cResult[7] === screenIndex) {
            tmp28 = cResult[8];
          }
          return tmp28;
        }
      }
      const tmp31 = jsx(PrivateChannelHeaderDefault, { channelId, pressable: !isChannelContentGated && (undefined === pressable || pressable), screenIndex });
      cResult[5] = !isChannelContentGated && (undefined === pressable || pressable);
      cResult[6] = channelId;
      cResult[7] = screenIndex;
      cResult[8] = tmp31;
      tmp28 = tmp31;
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        let tmp22;
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        if (cResult[9] !== stateFromStores) {
          let stringResult;
          if (!stateFromStores.isForumChannel()) {
            const intl = tmp(1126).intl;
            stringResult = intl.string(tmp(1126).t["L9fR+P"]);
          }
          cResult[9] = stateFromStores;
          cResult[10] = stringResult;
          tmp22 = stringResult;
        } else {
          tmp22 = cResult[10];
        }
        if (cResult[11] === (!isChannelContentGated && (undefined === pressable || pressable))) {
          if (cResult[12] === channelId) {
            if (cResult[13] === (undefined === isGuildMemberCountVisible || isGuildMemberCountVisible)) {
              if (cResult[14] === isNavigationScreen) {
                if (cResult[15] === screenIndex) {
                  if (cResult[16] === guild_id) {
                    let tmp24;
                    if (cResult[17] === tmp22) {
                      tmp24 = cResult[18];
                    }
                    return tmp24;
                  }
                }
              }
            }
          }
        }
        const tmp27 = jsx(ForumChannelHeaderDefault, { channelId, guildId: guild_id, pressable: !isChannelContentGated && (undefined === pressable || pressable), isGuildMemberCountVisible: undefined === isGuildMemberCountVisible || isGuildMemberCountVisible, isNavigationScreen, screenIndex, searchPlaceholder: tmp22 });
        cResult[11] = !isChannelContentGated && (undefined === pressable || pressable);
        cResult[12] = channelId;
        cResult[13] = undefined === isGuildMemberCountVisible || isGuildMemberCountVisible;
        cResult[14] = isNavigationScreen;
        cResult[15] = screenIndex;
        cResult[16] = guild_id;
        cResult[17] = tmp22;
        cResult[18] = tmp27;
        tmp24 = tmp27;
      } else {
        let guild_id1;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        if (cResult[19] === (!isChannelContentGated && (undefined === pressable || pressable))) {
          if (cResult[20] === channelId) {
            if (cResult[21] === (undefined === isGuildMemberCountVisible || isGuildMemberCountVisible)) {
              if (cResult[22] === isNavigationScreen) {
                if (cResult[23] === screenIndex) {
                  if (cResult[24] === (undefined !== showCreateThread && showCreateThread)) {
                    let tmp17;
                    if (cResult[25] === guild_id1) {
                      tmp17 = cResult[26];
                    }
                    return tmp17;
                  }
                }
              }
            }
          }
        }
        const tmp20 = jsx(GuildChannelHeaderDefault, { channelId, guildId: guild_id1, pressable: !isChannelContentGated && (undefined === pressable || pressable), isGuildMemberCountVisible: undefined === isGuildMemberCountVisible || isGuildMemberCountVisible, isNavigationScreen, screenIndex, showCreateThread: undefined !== showCreateThread && showCreateThread });
        cResult[19] = !isChannelContentGated && (undefined === pressable || pressable);
        cResult[20] = channelId;
        cResult[21] = undefined === isGuildMemberCountVisible || isGuildMemberCountVisible;
        cResult[22] = isNavigationScreen;
        cResult[23] = screenIndex;
        cResult[24] = undefined !== showCreateThread && showCreateThread;
        cResult[25] = guild_id1;
        cResult[26] = tmp20;
        tmp17 = tmp20;
      }
    }
  }
}) : ((channelId) => {
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  let tmp8Result;
  channelId = channelId.channelId;
  ({ screenIndex, isNavigationScreen, pressable } = channelId);
  if (pressable === undefined) {
    pressable = true;
  }
  let flag = channelId.isGuildMemberCountVisible;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channelId.showCreateThread;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [ChannelStore];
  const obj = channelId(573);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj3 = channelId(5106);
  const isChannelContentGated = obj3.useIsChannelContentGated(stateFromStores);
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    tmp8Result = jsx(GuildRoleSubscriptionsChannelHeaderDefault, {});
  } else if (channelId === tmp5.GUILD_HOME) {
    tmp8Result = jsx(HomeChannelHeaderDefault, {});
  } else {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = stateFromStores.isPrivate();
    }
    if (isPrivateResult) {
      tmp8Result = jsx(PrivateChannelHeaderDefault, { channelId, pressable: !isChannelContentGated && pressable, screenIndex });
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        let guild_id;
        ForumChannelHeaderDefault;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        let stringResult;
        if (!stateFromStores.isForumChannel()) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t["L9fR+P"]);
        }
        tmp8Result = <tmp9Result channelId={channelId} guildId={guild_id} pressable={!isChannelContentGated && pressable} isGuildMemberCountVisible={flag} isNavigationScreen={isNavigationScreen} screenIndex={screenIndex} searchPlaceholder={stringResult} />;
      } else {
        let guild_id1;
        GuildChannelHeaderDefault;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        tmp8Result = <tmp9Result2 channelId={channelId} guildId={guild_id1} pressable={!isChannelContentGated && pressable} isGuildMemberCountVisible={flag} isNavigationScreen={isNavigationScreen} screenIndex={screenIndex} showCreateThread={flag2} />;
      }
    }
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

export default tmp3;
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, source) {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const tmpResult = ChatInputUtils;
    const chatInputRef = tmpResult.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
  }
  const tmpResult3 = SwipeToMemberListUtils;
  if (tmpResult3.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj2 = { source, channelId, screenIndex };
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj2);
  } else {
    const tmpResult4 = RootNavigationRef;
    const rootNavigationRef = tmpResult4.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (isReadyResult) {
      const obj3 = { channelId, source };
      rootNavigationRef.navigate("sidebar", obj3);
    }
  }
};