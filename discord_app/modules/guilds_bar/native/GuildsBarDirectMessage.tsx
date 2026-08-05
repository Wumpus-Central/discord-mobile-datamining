// discord_app/modules/guilds_bar/native/GuildsBarDirectMessage.tsx
import importAllResult from "FacepileGroupDMAvatar";
import fetchFingerprint from "fetchFingerprint";
import callConnect from "callConnect";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelTypes } from "ME";
import { jsx } from "preload";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let obj = { dm: null };
obj = { width: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[0] = obj;
let closure_12 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarDirectMessage(channelId) {
  let badge;
  let cutouts;
  channelId = channelId.channelId;
  let stateFromStores;
  let channel;
  let dmRecipient;
  let obj = channelId(channel[11]);
  const tmp = callback();
  let obj1 = channelId(channel[12]);
  const items = [updateGuildUnreadSentinel];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getMentionCountForPrivateChannel(channelId).count);
  let obj2 = channelId(channel[12]);
  const items1 = [ensureGuildLoaded, mergeGuildAvatar, upsertRelationship, callConnect, fetchFingerprint];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const channel = outer1_6.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let user;
    if (type === outer1_10.DM) {
      user = outer1_9.getUser(channel.getRecipientId());
    }
    const call = outer1_5.getCall(tmp);
    const id = outer1_4.getId();
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
  dmRecipient = stateFromStoresObject.dmRecipient;
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
        avatarSource = obj2.getAvatarSource(undefined);
      }
      tmp2 = avatarSource;
      obj2 = dmRecipient;
    }
    return tmp2;
  }, items2);
  const items3 = [channel];
  const memo1 = dmRecipient.useMemo(() => ({
    onPress() {
      if (null != closure_2) {
        outer1_0(outer1_2[16]).transitionToChannel(tmp.id);
        const obj = outer1_0(outer1_2[16]);
      }
    },
    onLongPress() {
      if (null != closure_2) {
        const result = outer1_0(outer1_2[17]).openChannelLongPressActionSheet(tmp.id);
        const obj = outer1_0(outer1_2[17]);
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
    tmp11Result = tmp11(tmp7(tmp3[18]), obj);
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
    tmp11Result = tmp11(tmp7(tmp3[19]), obj1);
    const tmp7Result = tmp7(tmp3[19]);
  } else {
    tmp11Result = null;
    if (null != memo) {
      obj2 = { style: null, source: null };
      obj2[0] = tmp.dm;
      obj2[1] = memo;
      tmp11Result = tmp11(tmp7(tmp3[21]), obj2);
    }
  }
  obj[10] = tmp11Result;
  return jsx(stateFromStores(channel[11]), { selected: false, circle: !isMultiUserDMResult, unread: true, styles: guildsBarAnimatedWrapperStyles, label: stateFromStoresObject.label, overState: "Boolean", config: true, cutouts: false, externalChildren: "done", expandedChildren: "flowing", children: "hourglass" });
});
let result = require("callConnect").fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default memoResult;