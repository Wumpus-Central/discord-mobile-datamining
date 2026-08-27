// === Module 15614: ThreadChannel ===

// Module 15614 (ThreadChannel)
import ThemesDefault from "Themes" /* 712 */;
import inlineStyles from "inlineStyles" /* 8173 */;
import inlineStylesDefault from "inlineStyles" /* 8173 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "storeThread" /* 4091 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "getUncachedChannelPermissions" /* 4089 */;
import closure_8 from "generateOldThreadCutoff" /* 4460 */;
import closure_9 from "handleConnectionOpen" /* 1981 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import closure_11 from "updateVoiceState" /* 4464 */;
import closure_12 from "getVoiceStatesForGuild" /* 4520 */;
import hairlineWidth from "hairlineWidth" /* 10121 */;
import { Permissions } from "ME" /* 676 */;
import { UnreadSetting } from "ReadStateTypes" /* 4655 */;
import { OpenThreadAnalyticsLocations as closure_16 } from "AbortCodes" /* 1235 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function ThreadChannel(channel) {
  channel = channel.channel;
  ({ selected, threadIndex } = channel);
  const threadCount = channel.threadCount;
  importAllResult = undefined;
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
  obj1 = channel(threadCount[18]);
  fontScale = obj1.useFontScale();
  let obj2 = channel(threadCount[19]);
  const items = [parent_id, ownerId, closure_10, closure_12, closure_11, user, parentChannel, fontScale];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const isMutedResult = ownerId.isMuted(id);
    const obj = { user: closure_1_10.getUser(ownerId), parentChannel: parent_id.getChannel(parent_id), voiceStates: closure_1_12.getVoiceStatesForChannel(channel), hasVideo: closure_1_11.hasVideo(channel.id), isLocked: !fontScale.can(closure_1_14.CONNECT, channel), muted: isMutedResult, unread: null, mentionCount: null, isMentionLowImportance: null, selectedVoiceChannelId: null };
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
    const style = [threadLineSegment.threadLineSegment, ];
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
    return closure_1_17(id, { style });
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  let tmp8 = threadIndex;
  const items2 = [channel];
  const items3 = [channel, user, parentChannel];
  const callback = obj3.useCallback(() => {
    let obj = channel(threadCount[21]);
    obj = { source: closure_1_16.CHANNEL_LIST };
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
obj = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: ThemesDefault.radii.md, flex: 1 };
obj[0] = obj;
obj[1] = { flex: 0, flexDirection: "row", alignSelf: "stretch" };
obj[2] = { width: 8, alignItems: "flex-start", justifyContent: "flex-start" };
obj[3] = { width: 28 };
createCacheKey = { width: 8, height: 8, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj[4] = createCacheKey;
obj[5] = { backgroundColor: ThemesDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
let closure_20 = createCacheKey.createStyles(obj);
let closure_21 = importAllResult.memo((arg0) => {
  ({ color, fontScale } = arg0);
  let obj = { width: 12, height: 16, style: null, children: null };
  obj = { position: "absolute", left: 23, top: callback(fontScale) / 2 - 16 + 2 };
  obj[2] = obj;
  obj[3] = callback2(inlineStyles.Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" });
  return callback2(inlineStylesDefault, obj);
});
let obj2 = { backgroundColor: ThemesDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default function ConnectedThreadChannel(threadId) {
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  let obj = threadId(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(threadId));
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