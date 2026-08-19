// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import obj132 from "../../../../../utils/PlatformUtils.tsx";
import ComponentDispatcher from "../../../../../utils/ComponentDispatchUtils.tsx";
import getRootNavigationRef from "../../../RootNavigationRef.native.tsx";
import getBestActiveInput from "../../../../../utils/native/ChatInputUtils.tsx";
import useIsSwipeToMemberListEnabled from "../../sidebar/member_list/SwipeToMemberListUtils.tsx";
import _modDef12706 from "../../../../guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx";
import _modDef12707 from "HomeChannelHeader.tsx";
import GroupDmMemberCountDefault from "PrivateChannelHeader.tsx";
import _modDef12714 from "ForumChannelHeader.tsx";
import GuildChannelMemberCountDefault from "GuildChannelHeader.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import { ComponentActions } from "../../../../../Constants.tsx";
import { StaticChannelRoute } from "../../../../channel/ChannelConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

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
  let obj = channelId(647);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getChannel(channelId));
  const isChannelContentGated = channelId(5252).useIsChannelContentGated(stateFromStores);
  let tmp4 = !isChannelContentGated;
  if (!isChannelContentGated) {
    tmp4 = pressable;
  }
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let tmp8Result = jsx(_modDef12706, {});
  } else if (channelId === tmp5.GUILD_HOME) {
    tmp8Result = jsx(_modDef12707, {});
  } else {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = stateFromStores.isPrivate();
    }
    if (isPrivateResult) {
      obj = { channelId: null, pressable: null, screenIndex: null };
      obj[0] = channelId;
      obj[1] = tmp4;
      obj[2] = screenIndex;
      tmp8Result = jsx(GroupDmMemberCountDefault, { channelId: null, pressable: null, screenIndex: null });
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        obj = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, searchPlaceholder: null };
        obj[0] = channelId;
        let guild_id;
        let tmp9Result = _modDef12714;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        obj[1] = guild_id;
        obj[2] = tmp4;
        obj[3] = flag;
        obj[4] = isNavigationScreen;
        obj[5] = screenIndex;
        let stringResult;
        if (!stateFromStores.isForumChannel()) {
          const intl = tmp(1236).intl;
          stringResult = intl.string(tmp(1236).t["L9fR+P"]);
        }
        obj[6] = stringResult;
        tmp8Result = <tmp9Result channelId={null} guildId={null} pressable={null} isGuildMemberCountVisible={null} isNavigationScreen={null} screenIndex={null} searchPlaceholder={null} />;
      } else {
        obj1 = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, showCreateThread: null };
        obj1[0] = channelId;
        let guild_id1;
        tmp9Result = GuildChannelMemberCountDefault;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        obj1[1] = guild_id1;
        obj1[2] = tmp4;
        obj1[3] = flag;
        obj1[4] = isNavigationScreen;
        obj1[5] = screenIndex;
        obj1[6] = flag2;
        tmp8Result = <tmp9Result channelId={null} guildId={null} pressable={null} isGuildMemberCountVisible={null} isNavigationScreen={null} screenIndex={null} showCreateThread={null} />;
      }
    }
  }
  return tmp8Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, arg2) {
  let obj = obj132;
  if (obj.isIOS()) {
    let tmpResult = getBestActiveInput;
    const chatInputRef = tmpResult.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
  }
  tmpResult = useIsSwipeToMemberListEnabled;
  if (tmpResult.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
    obj = { source: null, channelId: null, screenIndex: null };
    obj[0] = arg2;
    obj[1] = channelId;
    obj[2] = screenIndex;
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj);
  } else {
    const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
    let isReadyResult;
    if (rootNavigationRef != null) {
      isReadyResult = rootNavigationRef.isReady();
    }
    if (isReadyResult) {
      obj = { channelId: null, source: null };
      obj[0] = channelId;
      obj[1] = arg2;
      rootNavigationRef.navigate("sidebar", obj);
    }
    const tmpResult1 = getRootNavigationRef;
  }
};