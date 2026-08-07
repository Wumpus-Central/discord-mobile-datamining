// discord_app/modules/channel_list_v2/native/items/ThreadChannel.tsx
import importAllResult from "initialize";
import { View } from "inlineStyles";
import storeThread from "storeThread";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import hairlineWidth from "hairlineWidth";
import { Permissions } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { OpenThreadAnalyticsLocations as closure_16 } from "AbortCodes";
import jsxProd from "transitionToChannel";
import createCacheKey from "createCacheKey";
import { inlineStyles } from "../../../../../_runtime/07775_inlineStyles.js";

let CHANNEL_MARGIN_VERTICAL;
let closure_17;
let closure_18;
let closure_19;
let map1;
const require = arg1;
function ThreadChannel(channel) {
  let hasVideo;
  let isLocked;
  let isMentionLowImportance;
  let mentionCount;
  let muted;
  let selected;
  let selectedVoiceChannelId;
  let threadIndex;
  let unread;
  let voiceStates;
  channel = channel.channel;
  ({ selected, threadIndex } = channel);
  const threadCount = channel.threadCount;
  let importAllResult;
  let id;
  let ownerId;
  let parent_id;
  let fontScale;
  let user;
  let parentChannel;
  const tmp = callback3();
  importAllResult = tmp;
  id = channel.id;
  ownerId = undefined;
  if (channel != null) {
    ownerId = channel.ownerId;
  }
  parent_id = undefined;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  let obj = threadCount;
  let obj1 = channel(threadCount[18]);
  fontScale = obj1.useFontScale();
  let obj2 = channel(threadCount[19]);
  const items = [parent_id, ownerId, mergeGuildAvatar, getVoiceStatesForGuild, updateVoiceState, user, parentChannel, fontScale];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const isMutedResult = ownerId.isMuted(id);
    const obj = { user: outer1_10.getUser(ownerId), parentChannel: parent_id.getChannel(parent_id), voiceStates: outer1_12.getVoiceStatesForChannel(channel), hasVideo: outer1_11.hasVideo(channel.id), isLocked: !fontScale.can(outer1_14.CONNECT, channel), muted: isMutedResult, unread: null, mentionCount: null, isMentionLowImportance: null, selectedVoiceChannelId: null };
    let hasUnreadResult = !isMutedResult;
    if (!isMutedResult) {
      hasUnreadResult = user.hasUnread(tmp);
    }
    obj[6] = hasUnreadResult;
    obj[7] = user.getMentionCount(id);
    obj[8] = user.getIsMentionLowImportance(id);
    obj[9] = parentChannel.getVoiceChannelId();
    return obj;
  });
  user = stateFromStoresObject.user;
  parentChannel = stateFromStoresObject.parentChannel;
  ({ voiceStates, hasVideo, unread, mentionCount } = stateFromStoresObject);
  let obj3 = importAllResult;
  const items1 = [threadIndex, threadCount, fontScale, tmp.threadLineSegment];
  ({ isLocked, muted, isMentionLowImportance, selectedVoiceChannelId } = stateFromStoresObject);
  let num = 0;
  const memo = importAllResult.useMemo(() => {
    const style = [_undefined.threadLineSegment, ];
    let num = 0;
    const diff = threadCount - 1;
    if (0 === threadIndex) {
      num = 2;
    }
    const obj = { top: num, height: null, borderTopRightRadius: null, borderTopLeftRadius: null, borderBottomRightRadius: null, borderBottomLeftRadius: null };
    let str = "100%";
    if (threadIndex === diff) {
      const _Math = Math;
      const _Math2 = Math;
      str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
    }
    obj[1] = str;
    let num4 = 0;
    if (0 === threadIndex) {
      num4 = threadIndex(threadCount[16]).radii.round;
    }
    obj[2] = num4;
    let num5 = 0;
    if (0 === threadIndex) {
      num5 = threadIndex(threadCount[16]).radii.round;
    }
    obj[3] = num5;
    let num6 = 0;
    if (threadIndex === diff) {
      num6 = threadIndex(threadCount[16]).radii.round;
    }
    obj[4] = num6;
    let num7 = 0;
    if (threadIndex === diff) {
      num7 = threadIndex(threadCount[16]).radii.round;
    }
    obj[5] = num7;
    style[1] = obj;
    return outer1_17(id, { style });
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  let tmp8 = threadIndex;
  const items2 = [channel];
  const items3 = [channel, user, parentChannel];
  const callback = obj3.useCallback(() => {
    let obj = channel(threadCount[21]);
    obj = { source: outer1_16.CHANNEL_LIST };
    obj.transitionToThread(channel, obj);
  }, items2);
  const items4 = [memo, , ];
  obj = { color: tmp.threadLineSegment.backgroundColor, fontScale };
  const callback1 = obj3.useCallback(() => {
    if (channel.isForumPost()) {
      if (null != user) {
        if (null != parentChannel) {
          if (obj.isForumLikeChannel()) {
            threadIndex(threadCount[22])(tmp, obj);
          }
        }
      }
    }
    threadIndex(threadCount[23])(channel.id);
  }, items3);
  items4[1] = callback2(closure_21, obj);
  obj = { style: tmp.threadRow, children: null };
  obj1 = { style: tmp.unreadContainer, children: null };
  let tmp14Result = unread;
  if (unread) {
    obj2 = { style: null };
    obj2[0] = tmp.unreadIcon;
    tmp14Result = tmp14(tmp15, obj2);
  }
  obj1[1] = tmp14Result;
  const items5 = [callback2(id, obj1), , ];
  obj3 = { style: tmp.spineSpacer };
  items5[1] = callback2(id, obj3);
  const obj4 = { onPress: callback, onLongPress: callback1, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, muted: null, unread: null, resolvedUnreadSetting: null, hideIcon: true, channelInfo: null, children: null };
  let tmp8Result = tmp8(obj[24]);
  obj4[5] = tmp8(obj[25])({ channel, unread, mentionCount });
  obj4[6] = { selected };
  obj4[7] = channel;
  obj4[8] = selected;
  obj4[9] = muted;
  obj4[10] = unread;
  obj4[11] = UnreadSetting.ALL_MESSAGES;
  if (0 === mentionCount) {
    tmp14Result = null;
    if (tmp9) {
      const obj5 = { userCount: null, video: null, channel: null };
      obj5[0] = num;
      obj5[1] = hasVideo;
      obj5[2] = channel;
      tmp14Result = tmp14(tmp4(obj[26]).ConnectedUserLimit, obj5);
    }
    let tmp14Result1 = tmp14Result;
  } else {
    const obj6 = { value: null, isMentionLowImportance: null };
    obj6[0] = mentionCount;
    obj6[1] = isMentionLowImportance;
    tmp14Result1 = tmp14(tmp4(obj[27]).Badge, obj6);
  }
  obj4[13] = tmp14Result1;
  if (0 === voiceStates.length) {
    const obj7 = { children: null };
    obj4[14] = null;
    items5[2] = tmp14(tmp8Result, obj4);
    obj[1] = items5;
    items4[2] = tmp12(tmp15, obj);
    obj7[0] = items4;
    return tmp12(closure_19, obj7);
  } else {
    if (selectedVoiceChannelId !== channel.threadId) {
      if (1 !== voiceStates.length) {
        const obj8 = { users: null, max: 8, guildId: null, renderIcon: false, noPadding: true };
        tmp8Result = tmp8(obj[29]);
        const obj9 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
        const items6 = [channel];
        obj9[0] = items6;
        const obj10 = {};
        obj10[channel.id] = voiceStates;
        obj9[3] = obj10;
        obj8[0] = tmp4(obj[30]).computeSummarizedVoiceUsers(obj9);
        obj8[2] = channel.guild_id;
        let tmp14Result2 = tmp14(tmp8Result, obj8);
        const tmp4Result = tmp4(obj[30]);
      }
    }
    tmp8 = tmp8(obj[28]);
    obj = { channel: null, collapsed: false, voiceStates: null };
    obj[0] = channel;
    obj[2] = voiceStates;
    tmp14Result2 = tmp14(tmp8, obj);
  }
}
let c3 = importAllResult;
({ getScaledChannelRowHeight: map1, CHANNEL_MARGIN_VERTICAL } = hairlineWidth);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let obj = { container: null, threadRow: null, unreadContainer: null, spineSpacer: null, unreadIcon: null, threadLineSegment: null };
obj = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: require("Themes").radii.md, flex: 1 };
obj[0] = obj;
obj[1] = { flex: 0, flexDirection: "row", alignSelf: "stretch" };
obj[2] = { width: 8, alignItems: "flex-start", justifyContent: "flex-start" };
obj[3] = { width: 28 };
createCacheKey = { width: 8, height: 8, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj[4] = createCacheKey;
obj[5] = { backgroundColor: require("Themes").colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
let closure_20 = createCacheKey.createStyles(obj);
let closure_21 = importAllResult.memo((arg0) => {
  let color;
  let fontScale;
  ({ color, fontScale } = arg0);
  let obj = { width: 12, height: 16, style: null, children: null };
  obj = { position: "absolute", left: 23, top: null };
  obj[2] = callback(fontScale) / 2 - 16 + 2;
  obj[2] = obj;
  obj[3] = callback2(inlineStyles.Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" });
  return callback2(inlineStyles, obj);
});
let obj2 = { backgroundColor: require("Themes").colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
const result = require("storeThread").fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default function ConnectedThreadChannel(threadId) {
  let selected;
  let threadCount;
  let threadIndex;
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  let obj = threadId(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: null, threadId: null, threadIndex: null, threadCount: null, selected: null };
    obj[0] = stateFromStores;
    obj[1] = threadId;
    obj[2] = threadIndex;
    obj[3] = threadCount;
    obj[4] = selected;
    tmp2 = callback2(ThreadChannel, obj);
  }
  return tmp2;
};