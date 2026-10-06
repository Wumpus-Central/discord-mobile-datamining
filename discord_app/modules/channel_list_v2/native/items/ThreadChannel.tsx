// === Module 16078: ThreadChannel ===

// Module 16078 (ThreadChannel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import transitionToChannel from "transitionToChannel" /* 4907 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import inlineStyles from "inlineStyles" /* 8169 */;
import showLongPressForumPostActionSheetDefault from "showLongPressForumPostActionSheet" /* 10045 */;
import showThreadLongPressActionSheetDefault from "showThreadLongPressActionSheet" /* 16079 */;
import react_mod from "react" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4517 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11711 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;
let channel, tmp4;

let CHANNEL_MARGIN_VERTICAL;
let closure_17;
let closure_18;
let closure_19;
let map1;
let obj2;
let obj3;
let size;
let react = react_mod;
const View = react_native.View;
({ getScaledChannelRowHeight: map1, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Permissions = Constants.Permissions;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_16 = ThreadConstants.OpenThreadAnalyticsLocations;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, threadRow: { flex: 0, flexDirection: "row", alignSelf: "stretch" }, unreadContainer: { width: 8, alignItems: "flex-start", justifyContent: "flex-start" }, spineSpacer: { width: 28 }, unreadIcon: size, threadLineSegment: obj3 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginStart: 2, marginEnd: 8, borderRadius: nativeDefault.radii.md, flex: 1 };
createStyles = createStyles.createStyles;
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginLeft: -4, marginTop: 12 };
obj3 = { backgroundColor: nativeDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
let closure_20 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  color = color.color;
  const sum = map1(color.fontScale) / 2 - 16 + 2;
  if (cResult[0] !== sum) {
    const rect = { position: "absolute", left: 23, top: sum };
    cResult[0] = sum;
    cResult[1] = rect;
    tmp5 = rect;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== color) {
    const obj2 = { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" };
    const tmp8 = closure_17(inlineStyles.Path, obj2);
    cResult[2] = color;
    cResult[3] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    let tmp9;
    if (cResult[5] === tmp6) {
      tmp9 = cResult[6];
    }
    return tmp9;
  }
  const tmp10 = closure_17(inlineStylesDefault, { width: 12, height: 16, style: tmp5, children: tmp6 });
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let color;
  let fontScale;
  let rect;
  ({ color, fontScale } = arg0);
  size = { width: 12, height: 16, style: rect, children: closure_17(inlineStyles.Path, { fill: color, d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z" }) };
  rect = { position: "absolute", left: 23, top: map1(fontScale) / 2 - 16 + 2 };
  const tmp = inlineStylesDefault;
  return closure_17(tmp, size);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let hasVideo;
  let isLocked;
  let isMentionLowImportance;
  let mentionCount;
  let muted;
  let ownerId;
  let parentChannel;
  let selected;
  let threadCount;
  let threadId;
  let threadIndex;
  let unread;
  let voiceStates;
  let obj = channel(ownerId[18]);
  const cResult = obj.c(76);
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
  const tmpResult = channel(ownerId[20]);
  const fontScale = tmpResult.useFontScale();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, parentChannel, UserStore, SortedVoiceStateStore, VoiceStateStore, ReadStateStore, SelectedChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    if (cResult[2] === id) {
      if (cResult[3] === ownerId) {
        let tmp17;
        if (cResult[4] === parent_id) {
          tmp17 = cResult[5];
        }
        const tmpResult2 = channel(ownerId[21]);
        const stateFromStoresObject = tmpResult2.useStateFromStoresObject(first, tmp17);
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
            if (hasUnreadResult) {
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
        let obj2 = { top: num4, height: str, borderTopRightRadius: num7, borderTopLeftRadius: num8, borderBottomRightRadius: num9, borderBottomLeftRadius: num10 };
        cResult[6] = num4;
        cResult[7] = str;
        cResult[8] = num7;
        cResult[9] = num8;
        cResult[10] = num9;
        cResult[11] = num10;
        cResult[12] = obj2;
      }
    }
  }
  class L {
    constructor() {
      tmp = id;
      isMutedResult = closure_5.isMuted(id);
      obj = { user: closure_10.getUser(ownerId), parentChannel: closure_6.getChannel(parent_id), voiceStates: closure_12.getVoiceStatesForChannel(channel), hasVideo: closure_11.hasVideo(channel.id), isLocked: !closure_7.can(Permissions.CONNECT, channel), muted: isMutedResult, unread: null, mentionCount: null, isMentionLowImportance: null, selectedVoiceChannelId: null };
      hasUnreadResult = !isMutedResult;
      if (hasUnreadResult) {
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
}) : ((channel) => {
  let hasVideo;
  let isLocked;
  let isMentionLowImportance;
  let items5;
  let items6;
  let mentionCount;
  let muted;
  let obj13;
  let obj14;
  let selected;
  let selectedVoiceChannelId;
  let threadIndex;
  let threadLineSegment;
  let tmp15Result;
  let tmp15Result5;
  let tmp21;
  let tmp4Result;
  let unread;
  let voiceStates;
  channel = channel.channel;
  ({ selected, threadIndex } = channel);
  const threadCount = channel.threadCount;
  let parent_id;
  let fontScale;
  let user;
  let parentChannel;
  const threadId = channel.threadId;
  const tmp = closure_20();
  react = tmp;
  const id = channel.id;
  let ownerId;
  if (channel != null) {
    ownerId = channel.ownerId;
  }
  parent_id = undefined;
  if (channel != null) {
    parent_id = channel.parent_id;
  }
  let obj = channel(threadCount[20]);
  fontScale = obj.useFontScale();
  let obj2 = channel(threadCount[21]);
  const items = [parent_id, ownerId, UserStore, SortedVoiceStateStore, VoiceStateStore, user, parentChannel, fontScale];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let hasUnreadResult;
    const isMutedResult = JoinedThreadsStore.isMuted(id);
    const obj = { user: UserStore.getUser(ownerId), parentChannel: ChannelStore.getChannel(parent_id), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasVideo: VoiceStateStore.hasVideo(channel.id), isLocked: !PermissionStore.can(Permissions.CONNECT, channel), muted: isMutedResult, unread: hasUnreadResult, mentionCount: ReadStateStore.getMentionCount(id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(id), selectedVoiceChannelId: SelectedChannelStore.getVoiceChannelId() };
    hasUnreadResult = !isMutedResult && ReadStateStore.hasUnread(id);
    return obj;
  });
  user = stateFromStoresObject.user;
  parentChannel = stateFromStoresObject.parentChannel;
  ({ voiceStates, hasVideo, unread, mentionCount } = stateFromStoresObject);
  const items1 = [threadIndex, threadCount, fontScale, tmp.threadLineSegment];
  ({ isLocked, muted, isMentionLowImportance, selectedVoiceChannelId } = stateFromStoresObject);
  let num = 0;
  const memo = react.useMemo(() => {
    let num4;
    let num5;
    let num6;
    let num7;
    let str;
    const style = [threadLineSegment.threadLineSegment, ];
    let num = 0;
    const diff = threadCount - 1;
    if (0 === threadIndex) {
      num = 2;
    }
    const obj = { top: num, height: str, borderTopRightRadius: num4, borderTopLeftRadius: num5, borderBottomRightRadius: num6, borderBottomLeftRadius: num7 };
    str = "100%";
    if (threadIndex === diff) {
      const _Math = Math;
      const _Math2 = Math;
      str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
    }
    num4 = 0;
    if (0 === threadIndex) {
      num4 = nativeDefault.radii.round;
    }
    num5 = 0;
    if (0 === threadIndex) {
      num5 = nativeDefault.radii.round;
    }
    num6 = 0;
    if (threadIndex === diff) {
      num6 = nativeDefault.radii.round;
    }
    num7 = 0;
    if (threadIndex === diff) {
      num7 = nativeDefault.radii.round;
    }
    style[1] = obj;
    return closure_17(View, { style });
  }, items1);
  if (null != voiceStates) {
    num = voiceStates.length;
  }
  const items2 = [channel];
  const items3 = [channel, user, parentChannel];
  const tmp10 = threadIndex(threadCount[22])({ channel, locked: isLocked, video: hasVideo, selected });
  const callback = obj3.useCallback(() => {
    const obj = transitionToChannel;
    const obj2 = { source: constants.CHANNEL_LIST };
    obj.transitionToThread(channel, obj2);
  }, items2);
  const items4 = [memo, , ];
  const obj4 = { color: tmp.threadLineSegment.backgroundColor, fontScale };
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
  items4[1] = closure_17(closure_21, obj4);
  const obj6 = { style: tmp.unreadContainer, children: tmp15Result };
  tmp15Result = unread;
  const obj5 = { style: tmp.threadRow, children: items5 };
  if (tmp15Result) {
    const obj7 = { style: tmp.unreadIcon };
    tmp15Result = closure_17(tmp16, obj7);
  }
  items5 = [closure_17(id, obj6), , ];
  const obj8 = { style: tmp.spineSpacer };
  items5[1] = closure_17(id, obj8);
  const obj9 = { onPress: callback, onLongPress: callback1, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: threadIndex(threadCount[26])({ channel, unread, mentionCount }), accessibilityState: { selected }, channel, selected, muted, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, hideIcon: true, channelInfo: tmp15Result5, children: tmp21 };
  const tmp9Result = threadIndex(threadCount[32]);
  if (0 === mentionCount) {
    let tmp15Result4 = null;
    if (tmp10) {
      const obj10 = { userCount: num, video: hasVideo, channel };
      tmp15Result4 = closure_17(tmp4(tmp5[27]).ConnectedUserLimit, obj10);
    }
    tmp15Result5 = tmp15Result4;
  } else {
    const obj11 = { value: mentionCount, isMentionLowImportance };
    tmp15Result5 = closure_17(tmp4(tmp5[28]).Badge, obj11);
  }
  tmp21 = null;
  if (0 !== voiceStates.length) {
    if (selectedVoiceChannelId !== threadId) {
      let tmp15Result6;
      if (1 !== voiceStates.length) {
        const obj12 = { users: tmp4Result.computeSummarizedVoiceUsers(obj13), max: 8, guildId: channel.guild_id, renderIcon: false, noPadding: true };
        obj13 = { channels: items6, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: obj14 };
        items6 = [channel];
        obj14 = {};
        obj14[channel.id] = voiceStates;
        const tmp9Result2 = threadIndex(threadCount[30]);
        tmp4Result = channel(threadCount[31]);
        tmp15Result6 = closure_17(tmp9Result2, obj12);
      }
      tmp21 = tmp15Result6;
    }
    const obj15 = { channel, collapsed: false, voiceStates };
    tmp15Result6 = closure_17(threadIndex(tmp5[29]), obj15);
  }
  const obj16 = { children: items4 };
  items5[2] = closure_17(tmp9Result, obj9);
  items4[2] = closure_18(id, obj5);
  return closure_18(closure_19, obj16);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((threadId) => {
  let first;
  let selected;
  let threadCount;
  let threadIndex;
  let tmp6;
  const obj = threadId(576);
  const cResult = obj.c(9);
  const tmp = threadId;
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId) {
    const fn = function o() {
      return ChannelStore.getChannel(threadId);
    };
    cResult[1] = threadId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === selected) {
        if (cResult[5] === threadCount) {
          if (cResult[6] === threadId) {
            let tmp9;
            if (cResult[7] === threadIndex) {
              tmp9 = cResult[8];
            }
            tmp8 = tmp9;
          }
        }
      }
    }
    const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    const tmp12 = closure_17(closure_22, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = selected;
    cResult[5] = threadCount;
    cResult[6] = threadId;
    cResult[7] = threadIndex;
    cResult[8] = tmp12;
    tmp9 = tmp12;
  }
  return tmp8;
}) : ((threadId) => {
  let selected;
  let threadCount;
  let threadIndex;
  threadId = threadId.threadId;
  ({ threadIndex, threadCount, selected } = threadId);
  const items = [ChannelStore];
  const obj = threadId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
    tmp2 = closure_17(closure_22, obj2);
  }
  return tmp2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default tmp6;