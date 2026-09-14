// === Module 13395: ChannelHeader ===

// Module 13395 (ChannelHeader)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import ChatInputUtils from "ChatInputUtils" /* 4502 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11600 */;
import GuildRoleSubscriptionsChannelHeaderDefault from "GuildRoleSubscriptionsChannelHeader" /* 13396 */;
import HomeChannelHeaderDefault from "HomeChannelHeader" /* 13397 */;
import PrivateChannelHeaderDefault from "PrivateChannelHeader" /* 13398 */;
import ForumChannelHeaderDefault from "ForumChannelHeader" /* 13406 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 13408 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const ComponentActions = fn(1074).ComponentActions;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

export default function ChannelHeader(channelId) {
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
  const stateFromStores = channelId(563).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = channelId(563);
  const isChannelContentGated = channelId(4847).useIsChannelContentGated(stateFromStores);
  let tmp4 = !isChannelContentGated;
  if (!isChannelContentGated) {
    tmp4 = pressable;
  }
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let tmp8Result = jsx(GuildRoleSubscriptionsChannelHeaderDefault, {});
  } else if (channelId === tmp5.GUILD_HOME) {
    tmp8Result = jsx(HomeChannelHeaderDefault, {});
  } else {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = stateFromStores.isPrivate();
    }
    if (isPrivateResult) {
      const obj2 = { channelId, pressable: tmp4, screenIndex };
      tmp8Result = jsx(PrivateChannelHeaderDefault, { channelId, pressable: tmp4, screenIndex });
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        const obj4 = { channelId, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, searchPlaceholder: null };
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        obj4.guildId = guild_id;
        obj4.pressable = tmp4;
        obj4.isGuildMemberCountVisible = flag;
        obj4.isNavigationScreen = isNavigationScreen;
        obj4.screenIndex = screenIndex;
        let stringResult;
        if (!stateFromStores.isForumChannel()) {
          const intl = tmp(1114).intl;
          stringResult = intl.string(tmp(1114).t["L9fR+P"]);
        }
        obj4.searchPlaceholder = stringResult;
        tmp8Result = jsx(ForumChannelHeaderDefault, { channelId, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, searchPlaceholder: null });
        const tmp9Result = ForumChannelHeaderDefault;
      } else {
        const obj5 = { channelId, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, showCreateThread: null };
        let guild_id1;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        obj5.guildId = guild_id1;
        obj5.pressable = tmp4;
        obj5.isGuildMemberCountVisible = flag;
        obj5.isNavigationScreen = isNavigationScreen;
        obj5.screenIndex = screenIndex;
        obj5.showCreateThread = flag2;
        tmp8Result = jsx(GuildChannelHeaderDefault, { channelId, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, showCreateThread: null });
        const tmp9Result2 = GuildChannelHeaderDefault;
      }
    }
  }
  return tmp8Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, source) {
  if (obj.isIOS()) {
    const chatInputRef = ChatInputUtils.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
    const tmpResult = ChatInputUtils;
  }
  obj = PlatformUtils;
  if (tmpResult3.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj2 = { source, channelId, screenIndex };
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj2);
  } else {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (isReadyResult) {
      const obj3 = { channelId, source };
      rootNavigationRef.navigate("sidebar", obj3);
    }
    const tmpResult4 = RootNavigationRef;
  }
  tmpResult3 = SwipeToMemberListUtils;
};