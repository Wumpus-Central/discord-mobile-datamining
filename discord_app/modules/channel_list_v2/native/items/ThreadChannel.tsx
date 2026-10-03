// === Module 16035: ThreadChannel ===

// Module 16035 (ThreadChannel)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10032 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16036 */;
import noop from "module_19" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const RedesignChannelListConstants = fn(11697);
({ getScaledChannelRowHeight: map1, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Permissions = fn(1085).Permissions;
const UnreadSetting = fn(5072).UnreadSetting;
let closure_16 = fn(1125).OpenThreadAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: nativeDefault.radii.md, flex: 1 }, threadRow: { flex: 0, flexDirection: "row", alignSelf: "stretch" }, unreadContainer: { width: 8, alignItems: "flex-start", justifyContent: "flex-start" }, spineSpacer: { width: 28 }, unreadIcon: null, threadLineSegment: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj.unreadIcon = size;
let obj3 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: nativeDefault.radii.md, flex: 1 };
obj.threadLineSegment = { backgroundColor: nativeDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
let closure_20 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_21 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  const cResult = c.c(7);
  color = color.color;
  const sum = __initData2(color.fontScale) / 2 - 16 + 2;
  if (cResult[0] !== sum) {
    const rect = { position: "absolute", left: 23, top: sum };
    cResult[0] = sum;
    cResult[1] = rect;
    let tmp5 = rect;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== color) {
    const obj2 = { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" };
    const tmp8 = constants(inlineStyles.Path, obj2);
    cResult[2] = color;
    cResult[3] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === tmp6) {
      let tmp9 = cResult[6];
    }
    return tmp9;
  }
  const tmp10 = constants(inlineStylesDefault, { width: 12, height: 16, style: tmp5, children: tmp6 });
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  ({ color, fontScale } = arg0);
  const size = { width: 12, height: 16, style: null, children: null };
  const rect = { position: "absolute", left: 23, top: __initData2(fontScale) / 2 - 16 + 2 };
  size.style = rect;
  size.children = constants(inlineStyles.Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" });
  return constants(inlineStylesDefault, size);
}));
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(ownerId[18]).c(76);
  channel = channel.channel;
  ({ selected, threadIndex } = channel);
  ({ threadId, threadCount } = channel);
  closure_20();
  const id = channel.id;
  ownerId = undefined;
  if (channel != null) {
    ownerId = channel.ownerId;
  }
  let parent_id;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  let obj = channel(ownerId[18]);
  const fontScale = channel(ownerId[20]).useFontScale();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, parentChannel, UserStore, SortedVoiceStateStore, VoiceStateStore, ReadStateStore, SelectedChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    if (cResult[2] === id) {
      if (cResult[3] === ownerId) {
        if (cResult[4] === parent_id) {
          let tmp17 = cResult[5];
        }
        const stateFromStoresObject = tmp(tmp2[21]).useStateFromStoresObject(first, tmp17);
        const user = stateFromStoresObject.user;
        parentChannel = stateFromStoresObject.parentChannel;
        ({ voiceStates, hasVideo, isLocked, muted, unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
        let num4 = 0;
        const selectedVoiceChannelId = stateFromStoresObject.selectedVoiceChannelId;
        const diff = threadCount - 1;
        if (0 === threadIndex) {
          num4 = 2;
        }
        let str = "100%";
        if (threadIndex === diff) {
          const _Math = Math;
          const _Math2 = Math;
          str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
        }
        let num7 = 0;
        if (0 === threadIndex) {
          num7 = id(tmp2[16]).radii.round;
        }
        let num8 = 0;
        if (0 === threadIndex) {
          num8 = id(tmp2[16]).radii.round;
        }
        let num9 = 0;
        if (threadIndex === diff) {
          num9 = id(tmp2[16]).radii.round;
        }
        let num10 = 0;
        if (threadIndex === diff) {
          num10 = id(tmp2[16]).radii.round;
        }
        class L {
          constructor() {
            tmp = id;
            isMutedResult = closure_5.isMuted(id);
            obj = { user: closure_10.getUser(ownerId), parentChannel: closure_6.getChannel(parent_id), voiceStates: closure_12.getVoiceStatesForChannel(channel), hasVideo: closure_11.hasVideo(channel.id), isLocked: !closure_7.can(Permissions.CONNECT, channel), muted: isMutedResult, unread: null, mentionCount: null, isMentionLowImportance: null, selectedVoiceChannelId: null };
            hasUnreadResult = !isMutedResult;
            if (!isMutedResult) {
              tmp4 = closure_8;
              hasUnreadResult = closure_8.hasUnread(tmp);
            }
            obj.unread = hasUnreadResult;
            obj.mentionCount = closure_8.getMentionCount(tmp);
            obj.isMentionLowImportance = closure_8.getIsMentionLowImportance(tmp);
            obj.selectedVoiceChannelId = closure_9.getVoiceChannelId();
            return obj;
          }
        }
        const obj2 = { top: num4, height: str, borderTopRightRadius: num7, borderTopLeftRadius: num8, borderBottomRightRadius: num9, borderBottomLeftRadius: num10 };
        cResult[6] = num4;
        cResult[7] = str;
        cResult[8] = num7;
        cResult[9] = num8;
        cResult[10] = num9;
        cResult[11] = num10;
        cResult[12] = obj2;
        const tmpResult2 = tmp(tmp2[21]);
      }
    }
  }
  class L {
    constructor() {
      tmp = id;
      isMutedResult = closure_5.isMuted(id);
      obj = { user: closure_10.getUser(ownerId), parentChannel: closure_6.getChannel(parent_id), voiceStates: closure_12.getVoiceStatesForChannel(channel), hasVideo: closure_11.hasVideo(channel.id), isLocked: !closure_7.can(Permissions.CONNECT, channel), muted: isMutedResult, unread: null, mentionCount: null, isMentionLowImportance: null, selectedVoiceChannelId: null };
      hasUnreadResult = !isMutedResult;
      if (!isMutedResult) {
        tmp4 = closure_8;
        hasUnreadResult = closure_8.hasUnread(tmp);
      }
      obj.unread = hasUnreadResult;
      obj.mentionCount = closure_8.getMentionCount(tmp);
      obj.isMentionLowImportance = closure_8.getIsMentionLowImportance(tmp);
      obj.selectedVoiceChannelId = closure_9.getVoiceChannelId();
      return obj;
    }
  }
  cResult[1] = channel;
  cResult[2] = id;
  cResult[3] = ownerId;
  cResult[4] = parent_id;
  cResult[5] = L;
  tmp17 = L;
  const tmpResult = channel(ownerId[20]);
}) : ((channel) => {
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
  fontScale = channel(threadCount[20]).useFontScale();
  const obj2 = channel(threadCount[20]);
  const items = [parent_id, ownerId, UserStore, SortedVoiceStateStore, VoiceStateStore, user, parentChannel, fontScale];
  const stateFromStoresObject = channel(threadCount[21]).useStateFromStoresObject(items, () => {
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
    return constants(View, { style });
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  let tmp8 = threadIndex;
  const items2 = [channel];
  const obj3 = channel(threadCount[21]);
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
  const tmp9 = threadIndex(obj[22])({ channel, locked: isLocked, video: hasVideo, selected });
  obj10.accessibilityLabel = tmp8(obj[26])({ channel, unread, mentionCount });
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
      tmp14Result4 = closure_17(tmp4(obj[27]).ConnectedUserLimit, obj11);
    }
    let tmp14Result5 = tmp14Result4;
  } else {
    const obj12 = { value: mentionCount, isMentionLowImportance };
    tmp14Result5 = closure_17(tmp4(obj[28]).Badge, obj12);
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
        const tmp8Result2 = tmp8(obj[30]);
        const obj15 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
        const items6 = [channel];
        obj15.channels = items6;
        const obj16 = {};
        obj16[channel.id] = voiceStates;
        obj15.voiceStates = obj16;
        obj14.users = tmp4(obj[31]).computeSummarizedVoiceUsers(obj15);
        obj14.guildId = channel.guild_id;
        let tmp14Result6 = closure_17(tmp8Result2, obj14);
        const tmp4Result = tmp4(obj[31]);
      }
    }
    tmp8 = tmp8(obj[29]);
    obj = { channel, collapsed: false, voiceStates };
    tmp14Result6 = closure_17(tmp8, obj);
  }
  tmp8Result = tmp8(obj[32]);
});
ReactCompilerGating = fn(558);
const obj4 = { backgroundColor: nativeDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((threadId) => {
  const cResult = threadId(576).c(9);
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId) {
    const fn = function o() {
      return ChannelStore.getChannel(threadId);
    };
    cResult[1] = threadId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = threadId(576);
  const stateFromStores = threadId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === selected) {
        if (cResult[5] === threadCount) {
          if (cResult[6] === threadId) {
          }
        }
      }
    }
    const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    const tmp11 = closure_17(closure_22, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = selected;
    cResult[5] = threadCount;
    cResult[6] = threadId;
    cResult[7] = threadIndex;
    cResult[8] = tmp11;
  }
  const tmpResult = threadId(504);
}) : ((threadId) => {
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  const items = [ChannelStore];
  const stateFromStores = threadId(504).useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    tmp2 = closure_17(closure_22, obj2);
  }
  return tmp2;
});