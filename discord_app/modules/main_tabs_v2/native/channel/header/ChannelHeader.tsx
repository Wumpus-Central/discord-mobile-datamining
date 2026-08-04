// discord_app/modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx
import "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ComponentActions } from "ME";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx");

export default function ChannelHeader(channelId) {
  let isNavigationScreen;
  let pressable;
  let screenIndex;
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
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getChannel(channelId));
  const isChannelContentGated = channelId(4407).useIsChannelContentGated(stateFromStores);
  let tmp4 = !isChannelContentGated;
  if (!isChannelContentGated) {
    tmp4 = pressable;
  }
  if (channelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let tmp8Result = jsx(importDefault(10150), {});
  } else if (channelId === tmp5.GUILD_HOME) {
    tmp8Result = jsx(importDefault(10152), {});
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
      tmp8Result = jsx(importDefault(10154), { channelId: null, pressable: null, screenIndex: null });
    } else {
      let isForumLikeChannelResult;
      if (stateFromStores != null) {
        isForumLikeChannelResult = stateFromStores.isForumLikeChannel();
      }
      if (isForumLikeChannelResult) {
        obj = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, searchPlaceholder: null };
        obj[0] = channelId;
        let guild_id;
        let tmp9Result = tmp9(10160);
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
        tmp8Result = tmp8(tmp9Result, obj);
      } else {
        const obj1 = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null, showCreateThread: null };
        obj1[0] = channelId;
        let guild_id1;
        tmp9Result = tmp9(10162);
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        obj1[1] = guild_id1;
        obj1[2] = tmp4;
        obj1[3] = flag;
        obj1[4] = isNavigationScreen;
        obj1[5] = screenIndex;
        obj1[6] = flag2;
        tmp8Result = tmp8(tmp9Result, obj1);
      }
    }
  }
  return tmp8Result;
};
export const navigateToChannelDetails = function navigateToChannelDetails(channelId, screenIndex, arg2) {
  let obj = require(500) /* set */;
  if (obj.isIOS()) {
    let tmpResult = tmp(4052);
    const chatInputRef = tmpResult.getChatInputRef(channelId, screenIndex);
    if (chatInputRef != null) {
      chatInputRef.blur();
    }
  }
  tmpResult = tmp(10131);
  if (tmpResult.isSwipeToMemberListEnabled()) {
    const ComponentDispatch = tmp(1231).ComponentDispatch;
    obj = { source: null, channelId: null, screenIndex: null };
    obj[0] = arg2;
    obj[1] = channelId;
    obj[2] = screenIndex;
    ComponentDispatch.dispatch(ComponentActions.SHOW_CHANNEL_DETAILS, obj);
  } else {
    const rootNavigationRef = tmp(4045).getRootNavigationRef();
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
    const tmpResult1 = tmp(4045);
  }
};