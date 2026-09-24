// discord_app/modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import useShowMemberVerificationGate from "../../../guild_member_verification/hooks/useShowMemberVerificationGate.tsx";
import StageMediaHooks from "../../StageMediaHooks.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import ChannelItemDefault from "../../../guild_sidebar/native/ChannelItem.tsx";
import VoiceUsersDefault from "../../../guild_sidebar/native/VoiceUsers.tsx";
import ChannelInfoDefault from "../../../guild_sidebar/native/ChannelInfo.tsx";
import useStageChannelSpeakerVoiceStatesDefault from "../../useStageChannelSpeakerVoiceStates.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CollapsedVoiceChannelStore from "../../../../stores/CollapsedVoiceChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";
import StageInstanceStore from "../../StageInstanceStore.tsx";

require = fn;
const View = fn(17).View;
const NO_VOICE_STATES = fn(4853).NO_VOICE_STATES;
const Constants = fn(1074);
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj = {
  voiceStates: { marginLeft: 36, marginBottom: 8 },
  container: {
    marginVertical: fn(10464).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_16 = createStyles.createStyles(obj);
let obj3 = {
  marginVertical: fn(10464).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const tmp = closure_16();
  const items = [
    StageInstanceStore,
    ReadStateStore,
    UserGuildSettingsStore,
    SortedVoiceStateStore,
    PermissionStore,
    CollapsedVoiceChannelStore,
  ];
  const items1 = [channel];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(
    items,
    () => {
      const obj = {
        stageInstance: StageInstanceStore.getStageInstanceByChannel(channel.id),
        hasUnread: ReadStateStore.hasUnread(channel.id),
        resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
        voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel),
        hasMedia: StageMediaHooks.getStageHasMedia(channel.id),
        locked: !PermissionStore.can(constants.CONNECT, channel),
        collapsed: CollapsedVoiceChannelStore.isCollapsed(channel.id),
      };
      return obj;
    },
    items1,
  );
  ({ stageInstance, hasUnread, hasMedia, collapsed } = stateFromStoresObject);
  ({ resolvedUnreadSetting, voiceStates, locked } = stateFromStoresObject);
  let arr3 = useStageChannelSpeakerVoiceStatesDefault(channel.guild_id)[channel.id];
  if (arr3 == null) {
    arr3 = NO_VOICE_STATES;
  }
  let obj = channel(504);
  const stageParticipantsCount = channel(5736).useStageParticipantsCount(
    channel.id,
    tmp2(5730).StageChannelParticipantNamedIndex.AUDIENCE,
  );
  const sum = stageParticipantsCount + arr3.length;
  const items2 = [channel];
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
  const tmp10 = useChannelNameDefault(channel, false);
  const tmp2Result = channel(5736);
  const isConnectedToVoiceChannel = channel(9727).useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    const topic = stageInstance.topic;
  }
  const tmp2Result2 = channel(9727);
  const intl = tmp2(1115).intl;
  const tmp5Result = ChannelItemDefault;
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = tmp2(1115).intl;
      let obj2 = { channelName: tmp10, userCount: sum, limit: channel.userLimit };
      let formatToPlainStringResult1 = intl2.formatToPlainString(tmp2(1115).t.rhh6Ev, obj2);
    }
    let obj3 = {};
    const obj4 = {
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainStringResult1,
      accessibilityHint: null,
    };
    const intl3 = tmp2(1115).intl;
    obj4.accessibilityHint = intl3.string(tmp2(1115).t.g6pBAk);
    const merged = Object.assign(obj4);
    obj3.onPress = callback;
    obj3.onLongPress = callback1;
    obj3.style = tmp.container;
    obj3.channel = channel;
    obj3.selected = selected;
    obj3.locked = locked;
    obj3.isChannelLive = null != stageInstance;
    if (hasUnread) {
      hasUnread = isConnectedToVoiceChannel;
    }
    obj3.unread = hasUnread;
    obj3.resolvedUnreadSetting = resolvedUnreadSetting;
    obj3.subtitle = topic;
    const obj5 = {
      channel,
      isChannelSelected: selected,
      isChannelCollapsed: collapsed,
      enableConnectedUserLimit: null,
      voiceStates: null,
    };
    if (!hasMedia) {
      let tmp20 = channel.userLimit > 0;
      if (tmp20) {
        tmp20 = channel.userLimit < closure_13;
      }
      hasMedia = tmp20;
    }
    obj5.enableConnectedUserLimit = hasMedia;
    obj5.voiceStates = voiceStates;
    obj3.channelInfo = jsx(ChannelInfoDefault, {
      channel,
      isChannelSelected: selected,
      isChannelCollapsed: collapsed,
      enableConnectedUserLimit: null,
      voiceStates: null,
    });
    let tmp12Result = arr3.length > 0;
    if (tmp12Result) {
      const obj6 = { style: tmp.voiceStates, children: null };
      const obj7 = { channel, collapsed, voiceStates: arr3, audienceCount: stageParticipantsCount };
      obj6.children = jsx(VoiceUsersDefault, {
        channel,
        collapsed,
        voiceStates: arr3,
        audienceCount: stageParticipantsCount,
      });
      tmp12Result = <View style={tmp.voiceStates}>{null}</View>;
    }
    obj3.children = tmp12Result;
    return <tmp5Result />;
  }
  formatToPlainStringResult1 = intl.formatToPlainString(channel(1115).t.TPPk2T, { channelName: tmp10 });
  if (sum > 0) {
    const intl4 = tmp2(1115).intl;
    const obj8 = { channelName: tmp10, userCount: sum };
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1115).t["7yr3Qc"], obj8);
  }
  const formatToPlainStringResult = intl.formatToPlainString(channel(1115).t.TPPk2T, { channelName: tmp10 });
});
