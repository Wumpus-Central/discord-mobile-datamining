// === Module 12705: ChannelHeader ===

// Module 12705 (ChannelHeader)
import noopAll from "noop" /* 19 */;
import obj132 from "obj132" /* 500 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4230 */;
import getBestActiveInput from "getBestActiveInput" /* 4237 */;
import useIsSwipeToMemberListEnabled from "useIsSwipeToMemberListEnabled" /* 10667 */;
import _modDef12706 from "module_12706" /* 12706 */;
import _modDef12707 from "module_12707" /* 12707 */;
import GroupDmMemberCountDefault from "GroupDmMemberCount" /* 12708 */;
import _modDef12714 from "module_12714" /* 12714 */;
import GuildChannelMemberCountDefault from "GuildChannelMemberCount" /* 12716 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { ComponentActions } from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import { jsx } from "jsxProd" /* 21 */;

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