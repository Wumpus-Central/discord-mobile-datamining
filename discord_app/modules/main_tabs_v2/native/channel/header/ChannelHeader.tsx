// === Module 13263: ChannelHeader ===

// Module 13263 (ChannelHeader)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import SwipeToMemberListUtils from "SwipeToMemberListUtils" /* 11466 */;
import GuildRoleSubscriptionsChannelHeaderDefault from "GuildRoleSubscriptionsChannelHeader" /* 13264 */;
import HomeChannelHeaderDefault from "HomeChannelHeader" /* 13265 */;
import PrivateChannelHeaderDefault from "PrivateChannelHeader" /* 13266 */;
import ForumChannelHeaderDefault from "ForumChannelHeader" /* 13273 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 13275 */;
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
  let obj = channelId(563);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const isChannelContentGated = channelId(4771).useIsChannelContentGated(stateFromStores);
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
      obj = { channelId, pressable: tmp4, screenIndex };
      tmp8Result = jsx(PrivateChannelHeaderDefault, { channelId, pressable: tmp4, screenIndex });
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        obj = { channelId, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, searchPlaceholder: null };
        let guild_id;
        let tmp9Result = ForumChannelHeaderDefault;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        obj.guildId = guild_id;
        obj.pressable = tmp4;
        obj.isGuildMemberCountVisible = flag;
        obj.isNavigationScreen = isNavigationScreen;
        obj.screenIndex = screenIndex;
        let stringResult;
        if (!stateFromStores.isForumChannel()) {
          const intl = tmp(1114).intl;
          stringResult = intl.string(tmp(1114).t["L9fR+P"]);
        }
        obj.searchPlaceholder = stringResult;
        tmp8Result = <tmp9Result channelId={channelId} guildId={null} pressable={null} isGuildMemberCountVisible={null} isNavigationScreen={null} screenIndex={null} searchPlaceholder={null} />;
      } else {
        const obj1 = { channelId, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, showCreateThread: null };
        let guild_id1;
        tmp9Result = GuildChannelHeaderDefault;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        obj1.guildId = guild_id1;
        obj1.pressable = tmp4;
        obj1.isGuildMemberCountVisible = flag;
        obj1.isNavigationScreen = isNavigationScreen;
        obj1.screenIndex = screenIndex;
        obj1.showCreateThread = flag2;
        tmp8Result = <tmp9Result channelId={channelId} guildId={null} pressable={null} isGuildMemberCountVisible={null} isNavigationScreen={null} screenIndex={null} showCreateThread={null} />;
      }
    }
  }
  return tmp8Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, source) {
  let obj = PlatformUtils;
  if (obj.isIOS()) {
    let tmpResult = ChatInputUtils;
    const chatInputRef = tmpResult.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
  }
  tmpResult = SwipeToMemberListUtils;
  if (tmpResult.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    obj = { source, channelId, screenIndex };
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj);
  } else {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (isReadyResult) {
      obj = { channelId, source };
      rootNavigationRef.navigate("sidebar", obj);
    }
    const tmpResult1 = RootNavigationRef;
  }
};