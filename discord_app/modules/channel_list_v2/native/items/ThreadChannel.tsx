// === Module 16113: ThreadChannel ===

// Module 16113 (ThreadChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import inlineStyles from "inlineStyles" /* 8453 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10220 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16114 */;
import noop from "module_19" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

const inlineStylesDefault = inlineStyles;

require = fn;
function ThreadChannel(channel) {
  channel = channel.channel;
  ({ selected, threadIndex } = channel);
  const threadCount = channel.threadCount;
  let parent_id;
  let fontScale;
  let user;
  let parentChannel;
  const tmp = closure_20();
  noop = tmp;
  const id = channel.id;
  let ownerId;
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
  const items = [parent_id, ownerId, UserStore, SortedVoiceStateStore, VoiceStateStore, user, parentChannel, fontScale];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const isMutedResult = JoinedThreadsStore.isMuted(id);
    const obj = { user: UserStore.getUser(ownerId), parentChannel: ChannelStore.getChannel(parent_id), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasVideo: VoiceStateStore.hasVideo(channel.id), isLocked: !PermissionStore.can(Permissions.CONNECT, channel), muted: isMutedResult, unread: null, mentionCount: null, isMentionLowImportance: null, selectedVoiceChannelId: null };
    let hasUnreadResult = !isMutedResult;
    if (!isMutedResult) {
      hasUnreadResult = ReadStateStore.hasUnread(id);
    }
    obj.unread = hasUnreadResult;
    obj.mentionCount = ReadStateStore.getMentionCount(id);
    obj.isMentionLowImportance = ReadStateStore.getIsMentionLowImportance(id);
    obj.selectedVoiceChannelId = SelectedChannelStore.getVoiceChannelId();
    return obj;
  });
  user = stateFromStoresObject.user;
  parentChannel = stateFromStoresObject.parentChannel;
  ({ voiceStates, hasVideo, unread, mentionCount } = stateFromStoresObject);
  let obj3 = noop;
  const items1 = [threadIndex, threadCount, fontScale, tmp.threadLineSegment];
  ({ isLocked, muted, isMentionLowImportance, selectedVoiceChannelId } = stateFromStoresObject);
  let num = 0;
  const memo = noop.useMemo(() => {
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
    obj.height = str;
    let num4 = 0;
    if (0 === threadIndex) {
      num4 = nativeDefault.radii.round;
    }
    obj.borderTopRightRadius = num4;
    let num5 = 0;
    if (0 === threadIndex) {
      num5 = nativeDefault.radii.round;
    }
    obj.borderTopLeftRadius = num5;
    let num6 = 0;
    if (threadIndex === diff) {
      num6 = nativeDefault.radii.round;
    }
    obj.borderBottomRightRadius = num6;
    let num7 = 0;
    if (threadIndex === diff) {
      num7 = nativeDefault.radii.round;
    }
    obj.borderBottomLeftRadius = num7;
    style[1] = obj;
    return closure_2_17(View, { style });
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  let tmp8 = threadIndex;
  const items2 = [channel];
  const items3 = [channel, user, parentChannel];
  const callback = obj3.useCallback(() => {
    const obj = { source: constants.CHANNEL_LIST };
    obj.transitionToThread(channel, obj);
  }, items2);
  const items4 = [memo, , ];
  obj = { color: tmp.threadLineSegment.backgroundColor, fontScale };
  const callback1 = obj3.useCallback(() => {
    if (channel.isForumPost()) {
      if (null != user) {
        if (null != parentChannel) {
          if (parentChannel.isForumLikeChannel()) {
            showLongPressForumPostActionSheetDefault(channel, parentChannel);
          }
        }
      }
    }
    showThreadLongPressActionSheetDefault(channel.id);
  }, items3);
  items4[1] = closure_17(closure_21, obj);
  obj = { style: tmp.threadRow, children: null };
  obj1 = { style: tmp.unreadContainer, children: null };
  let tmp14Result = unread;
  if (unread) {
    obj2 = { style: tmp.unreadIcon };
    tmp14Result = closure_17(tmp15, obj2);
  }
  obj1.children = tmp14Result;
  const items5 = [closure_17(id, obj1), , ];
  obj3 = { style: tmp.spineSpacer };
  items5[1] = closure_17(id, obj3);
  const obj4 = { onPress: callback, onLongPress: callback1, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, muted: null, unread: null, resolvedUnreadSetting: null, hideIcon: true, channelInfo: null, children: null };
  let tmp8Result = tmp8(obj[24]);
  obj4.accessibilityLabel = tmp8(obj[25])({ channel, unread, mentionCount });
  obj4.accessibilityState = { selected };
  obj4.channel = channel;
  obj4.selected = selected;
  obj4.muted = muted;
  obj4.unread = unread;
  obj4.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  if (0 === mentionCount) {
    tmp14Result = null;
    if (tmp9) {
      const obj5 = { userCount: num, video: hasVideo, channel };
      tmp14Result = closure_17(tmp4(obj[26]).ConnectedUserLimit, obj5);
    }
    let tmp14Result1 = tmp14Result;
  } else {
    const obj6 = { value: mentionCount, isMentionLowImportance };
    tmp14Result1 = closure_17(tmp4(obj[27]).Badge, obj6);
  }
  obj4.channelInfo = tmp14Result1;
  if (0 === voiceStates.length) {
    const obj7 = { children: null };
    obj4.children = null;
    items5[2] = closure_17(tmp8Result, obj4);
    obj.children = items5;
    items4[2] = closure_18(tmp15, obj);
    obj7.children = items4;
    return closure_18(closure_19, obj7);
  } else {
    if (selectedVoiceChannelId !== channel.threadId) {
      if (1 !== voiceStates.length) {
        const obj8 = { users: null, max: 8, guildId: null, renderIcon: false, noPadding: true };
        tmp8Result = tmp8(obj[29]);
        const obj9 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
        const items6 = [channel];
        obj9.channels = items6;
        const obj10 = {};
        obj10[channel.id] = voiceStates;
        obj9.voiceStates = obj10;
        obj8.users = tmp4(obj[30]).computeSummarizedVoiceUsers(obj9);
        obj8.guildId = channel.guild_id;
        let tmp14Result2 = closure_17(tmp8Result, obj8);
        const tmp4Result = tmp4(obj[30]);
      }
    }
    tmp8 = tmp8(obj[28]);
    obj = { channel, collapsed: false, voiceStates };
    tmp14Result2 = closure_17(tmp8, obj);
  }
  tmp9 = threadIndex(obj[20])({ channel, locked: isLocked, video: hasVideo, selected });
}
const View = fn(17).View;
const RedesignChannelListConstants = fn(10118);
({ getScaledChannelRowHeight: map1, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Permissions = fn(1074).Permissions;
const UnreadSetting = fn(4742).UnreadSetting;
let closure_16 = fn(1113).OpenThreadAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
fn(4560);
let obj = { container: null, threadRow: null, unreadContainer: null, spineSpacer: null, unreadIcon: null, threadLineSegment: null };
obj = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: nativeDefault.radii.md, flex: 1 };
obj.container = obj;
obj.threadRow = { flex: 0, flexDirection: "row", alignSelf: "stretch" };
obj.unreadContainer = { width: 8, alignItems: "flex-start", justifyContent: "flex-start" };
obj.spineSpacer = { width: 28 };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj.unreadIcon = size;
const createStyles = { backgroundColor: nativeDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
obj.threadLineSegment = createStyles;
let closure_20 = createStyles.createStyles(obj);
let closure_21 = noop.memo((arg0) => {
  ({ color, fontScale } = arg0);
  const size = { width: 12, height: 16, style: null, children: null };
  const rect = { position: "absolute", left: 23, top: map1(fontScale) / 2 - 16 + 2 };
  size.style = rect;
  size.children = closure_1_17(inlineStyles.Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" });
  return closure_1_17(inlineStylesDefault, size);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default function ConnectedThreadChannel(threadId) {
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  let obj = threadId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    tmp2 = closure_17(ThreadChannel, obj);
  }
  return tmp2;
};