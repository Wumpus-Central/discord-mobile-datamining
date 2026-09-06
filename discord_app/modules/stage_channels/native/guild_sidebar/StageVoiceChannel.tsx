// discord_app/modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import useShowMemberVerificationGate from "../../../guild_member_verification/hooks/useShowMemberVerificationGate.tsx";
import StageMediaHooks from "../../StageMediaHooks.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
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
const NO_VOICE_STATES = fn(4584).NO_VOICE_STATES;
const Constants = fn(1074);
({ MAX_STAGE_VOICE_USER_LIMIT: map1, Permissions: closure_14 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { voiceStates: { marginLeft: 36, marginBottom: 8 }, container: null };
obj = { marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
obj.container = obj;
let closure_16 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/guild_sidebar/StageVoiceChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const tmp = closure_16();
  let obj = channel(504);
  const items = [
    StageInstanceStore,
    ReadStateStore,
    UserGuildSettingsStore,
    SortedVoiceStateStore,
    PermissionStore,
    CollapsedVoiceChannelStore,
  ];
  const items1 = [channel];
  const stateFromStoresObject = obj.useStateFromStoresObject(
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
  let tmp2Result = tmp2(5431);
  const stageParticipantsCount = tmp2Result.useStageParticipantsCount(
    channel.id,
    tmp2(5425).StageChannelParticipantNamedIndex.AUDIENCE,
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
    StageChannelModalActionCreators.connectAndOpen(channel);
  }, items2);
  const callback1 = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items3);
  const tmp10 = useChannelNameDefault(channel, false);
  tmp2Result = tmp2(9471);
  const isConnectedToVoiceChannel = tmp2Result.useIsConnectedToVoiceChannel(channel);
  if (stageInstance != null) {
    const topic = stageInstance.topic;
  }
  let tmp5Result = ChannelItemDefault;
  const intl = tmp2(1114).intl;
  if (null != channel.userLimit) {
    if (channel.userLimit > 0) {
      const intl2 = tmp2(1114).intl;
      obj = { channelName: tmp10, userCount: sum, limit: channel.userLimit };
      let formatToPlainStringResult1 = intl2.formatToPlainString(tmp2(1114).t.rhh6Ev, obj);
    }
    obj = {};
    const obj1 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1 };
    const merged = Object.assign(obj1);
    obj.onPress = callback;
    obj.onLongPress = callback1;
    obj.style = tmp.container;
    obj.channel = channel;
    obj.selected = selected;
    obj.locked = locked;
    obj.isChannelLive = null != stageInstance;
    if (hasUnread) {
      hasUnread = isConnectedToVoiceChannel;
    }
    obj.unread = hasUnread;
    obj.resolvedUnreadSetting = resolvedUnreadSetting;
    obj.subtitle = topic;
    let obj2 = {
      channel,
      isChannelSelected: selected,
      isChannelCollapsed: collapsed,
      enableConnectedUserLimit: null,
      voiceStates: null,
    };
    tmp5Result = ChannelInfoDefault;
    if (!hasMedia) {
      let tmp20 = channel.userLimit > 0;
      if (tmp20) {
        tmp20 = channel.userLimit < closure_13;
      }
      hasMedia = tmp20;
    }
    obj2.enableConnectedUserLimit = hasMedia;
    obj2.voiceStates = voiceStates;
    obj.channelInfo = (
      <tmp5Result
        channel={channel}
        isChannelSelected={selected}
        isChannelCollapsed={collapsed}
        enableConnectedUserLimit={null}
        voiceStates={null}
      />
    );
    let tmp12Result = arr3.length > 0;
    if (tmp12Result) {
      let obj3 = { style: tmp.voiceStates, children: null };
      const obj4 = { channel, collapsed, voiceStates: arr3, audienceCount: stageParticipantsCount };
      obj3.children = jsx(VoiceUsersDefault, {
        channel,
        collapsed,
        voiceStates: arr3,
        audienceCount: stageParticipantsCount,
      });
      tmp12Result = <View style={tmp.voiceStates}>{null}</View>;
    }
    obj.children = tmp12Result;
    return <tmp5Result />;
  }
  formatToPlainStringResult1 = intl.formatToPlainString(channel(1114).t.TPPk2T, { channelName: tmp10 });
  if (sum > 0) {
    const intl3 = tmp2(1114).intl;
    const obj5 = { channelName: tmp10, userCount: sum };
    formatToPlainStringResult1 = intl3.formatToPlainString(tmp2(1114).t["7yr3Qc"], obj5);
  }
  const formatToPlainStringResult = intl.formatToPlainString(channel(1114).t.TPPk2T, { channelName: tmp10 });
});
