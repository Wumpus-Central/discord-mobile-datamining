// === Module 15604: ? ===

// Module 15604
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import callConnect from "callConnect" /* 4496 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { ChannelTypes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let c3 = importAllResult;
let obj = { width: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
let closure_12 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarDirectMessage(channelId) {
  channelId = channelId.channelId;
  let channel;
  let obj = channelId(channel[11]);
  const tmp = callback();
  obj1 = channelId(channel[12]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_7.getMentionCountForPrivateChannel(channelId).count);
  let obj2 = channelId(channel[12]);
  const items1 = [closure_6, closure_9, closure_8, closure_5, closure_4];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    channel = closure_1_6.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let user;
    if (type === ChannelTypes.DM) {
      user = closure_1_9.getUser(channel.getRecipientId());
    }
    const call = closure_1_5.getCall(channelId);
    const id = closure_1_4.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    let obj = { channel, dmRecipient: user, label: null };
    if (null != channel) {
      obj = { channel: null, unread: null, mentionCount: null, isIncomingCall: null, isOngoingCall: null };
      obj[0] = channel;
      obj[1] = stateFromStores > 0;
      obj[2] = stateFromStores;
      obj[3] = hasItem;
      obj[4] = tmp8;
      let stringResult = stateFromStores(channel[13])(obj);
    } else {
      const intl = channelId(channel[14]).intl;
      stringResult = intl.string(channelId(channel[14]).t.zLZPmk);
    }
    obj[2] = stringResult;
    return obj;
  });
  channel = stateFromStoresObject.channel;
  const dmRecipient = stateFromStoresObject.dmRecipient;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: true });
  const items2 = [channel, dmRecipient];
  ({ badge, cutouts } = stateFromStores(channel[15])({ mentionCount: stateFromStores }));
  const memo = dmRecipient.useMemo(() => {
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let tmp2;
    if (isDMResult) {
      let avatarSource;
      if (dmRecipient != null) {
        avatarSource = dmRecipient.getAvatarSource(undefined);
      }
      tmp2 = avatarSource;
    }
    return tmp2;
  }, items2);
  const items3 = [channel];
  const memo1 = dmRecipient.useMemo(() => ({
    onPress() {
      if (null != closure_2) {
        channelId(channel[16]).transitionToChannel(tmp.id);
        const obj = channelId(channel[16]);
      }
    },
    onLongPress() {
      if (null != closure_2) {
        const result = channelId(channel[17]).openChannelLongPressActionSheet(tmp.id);
        const obj = channelId(channel[17]);
      }
    }
  }), items3);
  let isMultiUserDMResult;
  const tmp8 = stateFromStores(channel[15])({ mentionCount: stateFromStores });
  if (channel != null) {
    isMultiUserDMResult = channel.isMultiUserDM();
  }
  obj = { selected: false, circle: !isMultiUserDMResult, unread: true, styles: guildsBarAnimatedWrapperStyles, label: stateFromStoresObject.label, overState: "Boolean", config: true, cutouts: false, externalChildren: "done", expandedChildren: "flowing", children: "hourglass" };
  obj[6] = memo1;
  obj[7] = cutouts;
  obj[8] = badge;
  let tmp11Result = null;
  if (null != channel) {
    obj = { channel: null };
    obj[0] = channel;
    tmp11Result = jsx(tmp7(tmp3[18]), { channel: null });
  }
  obj[9] = tmp11Result;
  let isMultiUserDMResult1;
  if (channel != null) {
    isMultiUserDMResult1 = channel.isMultiUserDM();
  }
  if (isMultiUserDMResult1) {
    obj1 = { channel: null, size: null, pileSizeOverride: null, animate: true };
    obj1[0] = channel;
    obj1[1] = tmp2(tmp3[20]).AvatarSizes.LARGE_48;
    obj1[2] = tmp2(tmp3[20]).AvatarSizes.REFRESH_MEDIUM_32;
    tmp11Result = jsx(tmp7(tmp3[19]), { channel: null, size: null, pileSizeOverride: null, animate: true });
    const tmp7Result = tmp7(tmp3[19]);
  } else {
    tmp11Result = null;
    if (null != memo) {
      obj2 = { style: null, source: null };
      obj2[0] = tmp.dm;
      obj2[1] = memo;
      tmp11Result = jsx(tmp7(tmp3[21]), { style: null, source: null });
    }
  }
  obj[10] = tmp11Result;
  return jsx(stateFromStores(channel[11]), { selected: false, circle: !isMultiUserDMResult, unread: true, styles: guildsBarAnimatedWrapperStyles, label: stateFromStoresObject.label, overState: "Boolean", config: true, cutouts: false, externalChildren: "done", expandedChildren: "flowing", children: "hourglass" });
});
let result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default memoResult;