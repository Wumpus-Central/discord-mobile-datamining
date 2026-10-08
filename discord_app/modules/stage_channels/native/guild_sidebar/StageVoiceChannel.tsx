// === Module 16465: StageVoiceChannel ===

// Module 16465 (StageVoiceChannel)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1893 */;
import useChannelNameDefault from "useChannelName" /* 5417 */;
import StageMediaHooks from "StageMediaHooks" /* 5891 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6149 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7476 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 8163 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10264 */;
import VoiceUsersDefault from "VoiceUsers" /* 16343 */;
import ChannelItemDefault from "ChannelItem" /* 16353 */;
import ChannelInfoDefault from "ChannelInfo" /* 16456 */;
import useStageChannelSpeakerVoiceStatesDefault from "useStageChannelSpeakerVoiceStates" /* 16466 */;
import noop from "module_19" /* 19 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7238 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5114 */;
import StageInstanceStore from "StageInstanceStore" /* 2068 */;

require = fn;
function getStageChannelAccessibilityProps(arg0) {
  ({ channelName, channel, userCount } = arg0);
  const intl = util.intl;
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = util.intl;
      const obj = { channelName, userCount, limit: channel.userLimit };
      let formatToPlainStringResult1 = intl2.formatToPlainString(util.t.rhh6Ev, obj);
    }
    const obj2 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, accessibilityHint: null };
    const intl3 = util.intl;
    obj2.accessibilityHint = intl3.string(util.t.g6pBAk);
    return obj2;
  }
  formatToPlainStringResult1 = intl.formatToPlainString(util.t.TPPk2T, { channelName });
  if (userCount > 0) {
    const intl4 = util.intl;
    const obj3 = { channelName, userCount };
    formatToPlainStringResult1 = intl4.formatToPlainString(util.t["7yr3Qc"], obj3);
  }
  const formatToPlainStringResult = intl.formatToPlainString(util.t.TPPk2T, { channelName });
}
const View = fn(17).View;
const NO_VOICE_STATES = fn(5114).NO_VOICE_STATES;
const Constants = fn(1085);
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 }, container: { marginVertical: fn(11776).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_17 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(11776).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StageVoiceChannel(channel) {
  const cResult = channel(576).c(38);
  channel = channel.channel;
  closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore, ReadStateStore, UserGuildSettingsStore, SortedVoiceStateStore, PermissionStore, CollapsedVoiceChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function b() {
      const obj = { stageInstance: StageInstanceStore.getStageInstanceByChannel(channel.id), hasUnread: ReadStateStore.hasUnread(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasMedia: StageMediaHooks.getStageHasMedia(channel.id), locked: !PermissionStore.can(constants.CONNECT, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) };
      return obj;
    };
    const items1 = [channel];
    cResult[1] = channel;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp13 = items1;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  let obj = channel(576);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(first, tmp12, tmp13);
  ({ stageInstance, hasUnread, resolvedUnreadSetting, voiceStates, hasMedia, locked, collapsed } = stateFromStoresObject);
  let arr3 = useStageChannelSpeakerVoiceStatesDefault(channel.guild_id)[channel.id];
  if (arr3 == null) {
    arr3 = NO_VOICE_STATES;
  }
  const tmpResult = channel(504);
  const stageParticipantsCount = channel(5961).useStageParticipantsCount(channel.id, tmp(5955).StageChannelParticipantNamedIndex.AUDIENCE);
  const sum = stageParticipantsCount + arr3.length;
  if (cResult[4] !== channel) {
    class N {
      constructor() {
        tmp = channel;
        guildId = channel.getGuildId();
        if (null != guildId) {
          tmp3 = closure_0;
          tmp4 = closure_3;
          obj = closure_0(closure_3[21]);
          if (obj.shouldShowMembershipVerificationGate(guildId)) {
            tmp7 = closure_0;
            tmp8 = closure_3;
            obj4 = closure_0(closure_3[22]);
            return obj4.openMemberVerificationModal(guildId);
          }
        }
        obj2 = closure_2(closure_3[23]);
        result = obj2.dismissGlobalKeyboard();
        obj3 = closure_0(closure_3[24]);
        openGuildVoiceModalResult = obj3.openGuildVoiceModal(tmp, "Channel List");
        return;
      }
    }
    cResult[4] = channel;
    cResult[5] = N;
  } else {
    class N {
      constructor() {
        tmp = channel;
        guildId = channel.getGuildId();
        if (null != guildId) {
          tmp3 = closure_0;
          tmp4 = closure_3;
          obj = closure_0(closure_3[21]);
          if (obj.shouldShowMembershipVerificationGate(guildId)) {
            tmp7 = closure_0;
            tmp8 = closure_3;
            obj4 = closure_0(closure_3[22]);
            return obj4.openMemberVerificationModal(guildId);
          }
        }
        obj2 = closure_2(closure_3[23]);
        result = obj2.dismissGlobalKeyboard();
        obj3 = closure_0(closure_3[24]);
        openGuildVoiceModalResult = obj3.openGuildVoiceModal(tmp, "Channel List");
        return;
      }
    }
  }
  if (cResult[6] !== channel.id) {
    class N {
      constructor() {
        tmp = channel;
        guildId = channel.getGuildId();
        if (null != guildId) {
          tmp3 = closure_0;
          tmp4 = closure_3;
          obj = closure_0(closure_3[21]);
          if (obj.shouldShowMembershipVerificationGate(guildId)) {
            tmp7 = closure_0;
            tmp8 = closure_3;
            obj4 = closure_0(closure_3[22]);
            return obj4.openMemberVerificationModal(guildId);
          }
        }
        obj2 = closure_2(closure_3[23]);
        result = obj2.dismissGlobalKeyboard();
        obj3 = closure_0(closure_3[24]);
        openGuildVoiceModalResult = obj3.openGuildVoiceModal(tmp, "Channel List");
        return;
      }
    }
    cResult[6] = channel.id;
    cResult[7] = tmp20;
  } else {
    class N {
      constructor() {
        tmp = channel;
        guildId = channel.getGuildId();
        if (null != guildId) {
          tmp3 = closure_0;
          tmp4 = closure_3;
          obj = closure_0(closure_3[21]);
          if (obj.shouldShowMembershipVerificationGate(guildId)) {
            tmp7 = closure_0;
            tmp8 = closure_3;
            obj4 = closure_0(closure_3[22]);
            return obj4.openMemberVerificationModal(guildId);
          }
        }
        obj2 = closure_2(closure_3[23]);
        result = obj2.dismissGlobalKeyboard();
        obj3 = closure_0(closure_3[24]);
        openGuildVoiceModalResult = obj3.openGuildVoiceModal(tmp, "Channel List");
        return;
      }
    }
  }
  const tmp21 = useChannelNameDefault(channel, false);
  const tmpResult3 = channel(5961);
  const isConnectedToVoiceChannel = channel(10337).useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    class N {
      constructor() {
        tmp = channel;
        guildId = channel.getGuildId();
        if (null != guildId) {
          tmp3 = closure_0;
          tmp4 = closure_3;
          obj = closure_0(closure_3[21]);
          if (obj.shouldShowMembershipVerificationGate(guildId)) {
            tmp7 = closure_0;
            tmp8 = closure_3;
            obj4 = closure_0(closure_3[22]);
            return obj4.openMemberVerificationModal(guildId);
          }
        }
        obj2 = closure_2(closure_3[23]);
        result = obj2.dismissGlobalKeyboard();
        obj3 = closure_0(closure_3[24]);
        openGuildVoiceModalResult = obj3.openGuildVoiceModal(tmp, "Channel List");
        return;
      }
    }
  }
  if (cResult[8] === channel) {
    class N {
      constructor() {
        tmp = channel;
        guildId = channel.getGuildId();
        if (null != guildId) {
          tmp3 = closure_0;
          tmp4 = closure_3;
          obj = closure_0(closure_3[21]);
          if (obj.shouldShowMembershipVerificationGate(guildId)) {
            tmp7 = closure_0;
            tmp8 = closure_3;
            obj4 = closure_0(closure_3[22]);
            return obj4.openMemberVerificationModal(guildId);
          }
        }
        obj2 = closure_2(closure_3[23]);
        result = obj2.dismissGlobalKeyboard();
        obj3 = closure_0(closure_3[24]);
        openGuildVoiceModalResult = obj3.openGuildVoiceModal(tmp, "Channel List");
        return;
      }
    }
  }
  const tmpResult4 = channel(10337);
  cResult[8] = channel;
  cResult[9] = tmp21;
  cResult[10] = sum;
  cResult[11] = getStageChannelAccessibilityProps({ channel, channelName: tmp21, userCount: sum });
  const tmp23 = getStageChannelAccessibilityProps({ channel, channelName: tmp21, userCount: sum });
}) : (function StageVoiceChannel(channel) {
  channel = channel.channel;
  const selected = channel.selected;
  const tmp = closure_17();
  const items = [StageInstanceStore, ReadStateStore, UserGuildSettingsStore, SortedVoiceStateStore, PermissionStore, CollapsedVoiceChannelStore];
  const items1 = [channel];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    const obj = { stageInstance: StageInstanceStore.getStageInstanceByChannel(channel.id), hasUnread: ReadStateStore.hasUnread(channel.id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel), hasMedia: StageMediaHooks.getStageHasMedia(channel.id), locked: !PermissionStore.can(constants.CONNECT, channel), collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id) };
    return obj;
  }, items1);
  ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
  ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
  let arr3 = useStageChannelSpeakerVoiceStatesDefault(channel.guild_id)[channel.id];
  if (arr3 == null) {
    arr3 = NO_VOICE_STATES;
  }
  let obj = channel(504);
  const stageParticipantsCount = channel(5961).useStageParticipantsCount(channel.id, tmp2(5955).StageChannelParticipantNamedIndex.AUDIENCE);
  const items2 = [channel];
  const sum = stageParticipantsCount + arr3.length;
  const items3 = [channel.id];
  const callback = noop.useCallback(() => {
    const guildId = channel.getGuildId();
    if (null != guildId) {
      if (obj.shouldShowMembershipVerificationGate(guildId)) {
        return MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
      }
      obj = useShowMemberVerificationGate;
    }
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    PrivateChannelCallUtils.openGuildVoiceModal(channel, "Channel List");
  }, items2);
  const callback1 = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items3);
  const tmp2Result = channel(5961);
  const tmp10 = useChannelNameDefault(channel, false);
  let topic;
  const isConnectedToVoiceChannel = channel(10337).useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    topic = stageInstance.topic;
  }
  let obj2 = {};
  const tmp2Result2 = channel(10337);
  const merged = Object.assign(getStageChannelAccessibilityProps({ channel, channelName: tmp10, userCount: sum }));
  obj2.onPress = callback;
  obj2.onLongPress = callback1;
  obj2.style = tmp.container;
  obj2.channel = channel;
  obj2.selected = selected;
  obj2.locked = locked;
  obj2.isChannelLive = null != stageInstance;
  if (hasUnread) {
    hasUnread = isConnectedToVoiceChannel;
  }
  obj2.unread = hasUnread;
  obj2.resolvedUnreadSetting = resolvedUnreadSetting;
  obj2.subtitle = topic;
  let obj3 = { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, enableConnectedUserLimit: null, voiceStates: null };
  const tmp5Result = ChannelItemDefault;
  if (!hasMedia) {
    let tmp17 = channel.userLimit > 0;
    if (tmp17) {
      tmp17 = channel.userLimit < closure_13;
    }
    hasMedia = tmp17;
  }
  obj3.enableConnectedUserLimit = hasMedia;
  obj3.voiceStates = voiceStates;
  obj2.channelInfo = jsx(ChannelInfoDefault, { channel, isChannelSelected: selected, isChannelCollapsed: collapsed, enableConnectedUserLimit: null, voiceStates: null });
  let tmp13Result = arr3.length > 0;
  if (tmp13Result) {
    const obj4 = { style: tmp.voiceStates, children: null };
    const obj5 = { channel, collapsed, voiceStates: arr3, audienceCount: stageParticipantsCount };
    obj4.children = jsx(VoiceUsersDefault, { channel, collapsed, voiceStates: arr3, audienceCount: stageParticipantsCount });
    tmp13Result = <View style={tmp.voiceStates}>{null}</View>;
  }
  obj2.children = tmp13Result;
  return <tmp5Result />;
}));