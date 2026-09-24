// === Module 16539: ThreadChannel ===

// Module 16539 (ThreadChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4840 */;
import inlineStyles from "inlineStyles" /* 8807 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10568 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16540 */;
import noop from "module_19" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4466 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import ReadStateStore from "ReadStateStore" /* 4844 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4848 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4853 */;

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
  fontScale = channel(threadCount[18]).useFontScale();
  const obj2 = channel(threadCount[18]);
  const items = [parent_id, ownerId, UserStore, SortedVoiceStateStore, VoiceStateStore, user, parentChannel, fontScale];
  const stateFromStoresObject = channel(threadCount[19]).useStateFromStoresObject(items, () => {
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
  const obj3 = channel(threadCount[19]);
  const items3 = [channel, user, parentChannel];
  const callback = obj4.useCallback(() => {
    transitionToChannel.transitionToThread(channel, { source: constants.CHANNEL_LIST });
  }, items2);
  const items4 = [memo, , ];
  const callback1 = obj4.useCallback(() => {
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
  items4[1] = closure_17(closure_21, { color: tmp.threadLineSegment.backgroundColor, fontScale });
  const obj6 = { style: tmp.threadRow, children: null };
  const obj7 = { style: tmp.unreadContainer, children: null };
  let tmp14Result = unread;
  if (unread) {
    const obj8 = { style: tmp.unreadIcon };
    tmp14Result = closure_17(tmp15, obj8);
  }
  obj7.children = tmp14Result;
  const items5 = [closure_17(id, obj7), closure_17(id, { style: tmp.spineSpacer }), ];
  const obj10 = { onPress: callback, onLongPress: callback1, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, muted: null, unread: null, resolvedUnreadSetting: null, hideIcon: true, channelInfo: null, children: null };
  const obj5 = { color: tmp.threadLineSegment.backgroundColor, fontScale };
  const obj9 = { style: tmp.spineSpacer };
  const tmp9 = threadIndex(obj[20])({ channel, locked: isLocked, video: hasVideo, selected });
  obj10.accessibilityLabel = tmp8(obj[25])({ channel, unread, mentionCount });
  obj10.accessibilityState = { selected };
  obj10.channel = channel;
  obj10.selected = selected;
  obj10.muted = muted;
  obj10.unread = unread;
  obj10.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  if (0 === mentionCount) {
    let tmp14Result4 = null;
    if (tmp9) {
      const obj11 = { userCount: num, video: hasVideo, channel };
      tmp14Result4 = closure_17(tmp4(obj[26]).ConnectedUserLimit, obj11);
    }
    let tmp14Result5 = tmp14Result4;
  } else {
    const obj12 = { value: mentionCount, isMentionLowImportance };
    tmp14Result5 = closure_17(tmp4(obj[27]).Badge, obj12);
  }
  obj10.channelInfo = tmp14Result5;
  if (0 === voiceStates.length) {
    const obj13 = { children: null };
    obj10.children = null;
    items5[2] = closure_17(tmp8Result, obj10);
    obj6.children = items5;
    items4[2] = closure_18(tmp15, obj6);
    obj13.children = items4;
    return closure_18(closure_19, obj13);
  } else {
    if (selectedVoiceChannelId !== channel.threadId) {
      if (1 !== voiceStates.length) {
        const obj14 = { users: null, max: 8, guildId: null, renderIcon: false, noPadding: true };
        const tmp8Result2 = tmp8(obj[29]);
        const obj15 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
        const items6 = [channel];
        obj15.channels = items6;
        const obj16 = {};
        obj16[channel.id] = voiceStates;
        obj15.voiceStates = obj16;
        obj14.users = tmp4(obj[30]).computeSummarizedVoiceUsers(obj15);
        obj14.guildId = channel.guild_id;
        let tmp14Result6 = closure_17(tmp8Result2, obj14);
        const tmp4Result = tmp4(obj[30]);
      }
    }
    tmp8 = tmp8(obj[28]);
    obj = { channel, collapsed: false, voiceStates };
    tmp14Result6 = closure_17(tmp8, obj);
  }
  tmp8Result = tmp8(obj[24]);
}
const View = fn(17).View;
const RedesignChannelListConstants = fn(10464);
({ getScaledChannelRowHeight: map1, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Permissions = fn(1074).Permissions;
const UnreadSetting = fn(5011).UnreadSetting;
let closure_16 = fn(1114).OpenThreadAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const createStyles = fn(4829);
let obj = { container: { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: nativeDefault.radii.md, flex: 1 }, threadRow: { flex: 0, flexDirection: "row", alignSelf: "stretch" }, unreadContainer: { width: 8, alignItems: "flex-start", justifyContent: "flex-start" }, spineSpacer: { width: 28 }, unreadIcon: null, threadLineSegment: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj.unreadIcon = size;
let obj3 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: nativeDefault.radii.md, flex: 1 };
obj.threadLineSegment = { backgroundColor: nativeDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
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
  const items = [ChannelStore];
  const stateFromStores = threadId(504).useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    tmp2 = closure_17(ThreadChannel, obj2);
  }
  return tmp2;
};