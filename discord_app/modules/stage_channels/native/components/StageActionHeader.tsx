// === Module 10027: StageActionHeader ===

// Module 10027 (StageActionHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8394 */;
import StatusBarDefault from "StatusBar" /* 9481 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 9913 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9924 */;
import _modDef10028 from "module_10028" /* 10028 */;
import _modDef10030 from "module_10030" /* 10030 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 10033 */;
import ChannelCallHeaderButtons from "ChannelCallHeaderButtons" /* 10034 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import GuildStore from "GuildStore" /* 1979 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import StageMusicStore from "StageMusicStore" /* 9899 */;

require = fn;
class HideStageChannelCallIcon {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    obj = channel(closure_2[19]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
    obj = { source: null, accessibilityLabel: null, onPress: null, containerStyle: null, disableBackground: true, children: null };
    tmp3 = closure_1(closure_2[20]);
    obj.source = closure_1(closure_2[21]);
    intl = channel(closure_2[22]).intl;
    obj.accessibilityLabel = intl.string(channel(closure_2[22]).t.cpT0Cq);
    obj.onPress = function onPress() {
      const obj = { video_layout: "pop out" };
      const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
      obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj);
      StatusBarDefault.setHidden(false);
      const obj5 = ModalActionCreatorsDefault;
      obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    };
    obj.containerStyle = tmp.iconContainer;
    obj.children = jsx(channel(closure_2[24]).MaskedBadge, { value: stateFromStores, maskStyle: {} });
    return jsx(tmp3, obj);
  }
}
class StageChannelCallHeader {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = closure_1(closure_2[25])(channel);
    tmp5 = channel;
    obj = channel(closure_2[19]);
    items = [];
    items[0] = closure_8;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
    obj2 = channel(closure_2[26]);
    stageParticipantsCount = obj2.useStageParticipantsCount(channel.id, channel(closure_2[27]).StageChannelParticipantNamedIndex.AUDIENCE);
    obj3 = channel(closure_2[26]);
    actualStageSpeakerCount = obj3.useActualStageSpeakerCount(channel.id);
    obj4 = channel(closure_2[19]);
    items2 = [];
    items2[0] = closure_4;
    tmp9 = jsxs;
    tmp10 = View;
    obj = { pointerEvents: "none", style: tmp.leftTitleContainer, children: null };
    obj1 = { style: tmp.titleWrapper, children: null };
    tmp11 = null == obj4.useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channel.id));
    if (tmp11) {
      tmp12 = jsx;
      obj2 = { style: null, colors: null, start: null, end: null };
      obj2.style = tmp.linearGradient;
      obj2.colors = ["#00000000", "#000000"];
      obj2.start = { x: 0.85, y: 0 };
      obj2.end = { x: 1, y: 0 };
      tmp11 = jsx(tmp2(tmp3[28]), obj2);
    }
    items3 = [, ];
    items3[0] = tmp11;
    tmp13 = jsx;
    topic = undefined;
    if (stateFromStores != null) {
      topic = stateFromStores.topic;
    }
    if (topic == null) {
      topic = tmp4;
    }
    items3[1] = tmp13(tmp5(tmp3[29]).Text, { color: "text-overlay-light", variant: "text-md/semibold", children: topic });
    obj1.children = items3;
    items4 = [, ];
    items4[0] = tmp9(tmp10, obj1);
    tmp9Result = null != stateFromStores;
    if (tmp9Result) {
      obj3 = { style: null, children: null };
      obj3.style = tmp.stageInfo;
      obj4 = { source: null, size: null, disableColor: true };
      obj4.source = tmp2(tmp3[30]);
      obj4.size = tmp5(tmp3[24]).Icon.Sizes.SMALL;
      items5 = [, , , , , ];
      items5[0] = tmp13(tmp5(tmp3[24]).Icon, obj4);
      obj5 = { variant: "text-xs/normal", style: null, children: null };
      obj5.style = tmp.stageInfoTopic;
      obj5.children = tmp4;
      items5[1] = tmp13(tmp5(tmp3[29]).Text, obj5);
      obj6 = { source: null, size: null, style: null };
      obj6.source = tmp2(tmp3[31]);
      obj6.size = tmp5(tmp3[24]).Icon.Sizes.SMALL;
      obj6.style = tmp.icon;
      items5[2] = tmp13(tmp5(tmp3[24]).Icon, obj6);
      obj7 = { variant: "text-xs/normal", children: null };
      obj7.children = actualStageSpeakerCount;
      items5[3] = tmp13(tmp5(tmp3[29]).Text, obj7);
      obj8 = { source: null, size: null, style: null };
      obj8.source = tmp2(tmp3[32]);
      obj8.size = tmp5(tmp3[24]).Icon.Sizes.SMALL;
      obj8.style = tmp.icon;
      items5[4] = tmp13(tmp5(tmp3[24]).Icon, obj8);
      obj9 = { variant: "text-xs/normal", children: null };
      obj9.children = stageParticipantsCount;
      items5[5] = tmp13(tmp5(tmp3[29]).Text, obj9);
      obj3.children = items5;
      tmp9Result = tmp9(tmp10, obj3);
    }
    items4[1] = tmp9Result;
    obj.children = items4;
    return tmp9(tmp10, obj);
  }
}
class StageSettingsButton {
  constructor(arg0) {
    ({ channelId, onOpenRTCDebugOverlay } = global);
    tmp = closure_14();
    obj = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disableBackground: true };
    tmp2 = onOpenRTCDebugOverlay(closure_2[20]);
    intl = channelId(closure_2[22]).intl;
    obj.accessibilityLabel = intl.string(channelId(closure_2[22]).t["lIx5+G"]);
    items = [, ];
    ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
    obj.containerStyle = items;
    obj.source = onOpenRTCDebugOverlay(closure_2[33]);
    obj.onPress = function onPress() {
      return StageChannelActionCreatorExtras.openStageSettingsSheet(closure_1_0, importDefault);
    };
    return jsx(tmp2, obj);
  }
}
class StageInviteButton {
  constructor(arg0) {
    channelId = global.channelId;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    tmp2 = channelId;
    tmp3 = closure_2;
    tmp = closure_14();
    obj = channelId(closure_2[19]);
    items = [];
    items[0] = closure_5;
    items1 = [];
    items1[0] = channelId;
    stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
    closure_1 = stateFromStores;
    obj2 = channelId(closure_2[19]);
    items2 = [];
    items2[0] = closure_7;
    items3 = [];
    items3[0] = stateFromStores;
    stateFromStores1 = obj2.useStateFromStores(items2, () => {
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return GuildStore.getGuild(guild_id);
    }, items3);
    closure_2 = stateFromStores1;
    obj3 = channelId(closure_2[35]);
    closure_3 = obj3.useActiveEvent(channelId);
    tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores1) {
        tmp7 = jsx;
        tmp8 = closure_1;
        obj = { accessibilityLabel: null, containerStyle: null, source: null, IconComponent: null, onPress: null, disableBackground: true };
        tmp9 = closure_1(tmp3[20]);
        intl = tmp2(tmp3[22]).intl;
        obj.accessibilityLabel = intl.string(tmp2(tmp3[22]).t.VINpSK);
        obj.containerStyle = tmp.iconBackground;
        obj.source = closure_1(tmp3[36]);
        obj.IconComponent = tmp2(tmp3[37]).GroupPlusIcon;
        obj.onPress = function onPress() {
          if (null != stateFromStores1.vanityURLCode) {
            const result = instant_invite_InstantInviteUtils.showVanityUrlInviteActionSheet(tmp, stateFromStores, constants2.STAGE_CHANNEL);
          } else {
            const obj = { source: constants2.STAGE_CHANNEL, guildScheduledEventId: null };
            id = undefined;
            if (id != null) {
              id = id.id;
            }
            obj.guildScheduledEventId = id;
            const result1 = obj.showInstantInviteActionSheet(stateFromStores, obj);
          }
        };
        tmp6 = jsx(tmp9, obj);
      }
    }
    return tmp6;
  }
}
class MusicMuteButton {
  constructor(arg0) {
    closure_0 = undefined;
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp = closure_14();
    obj = closure_0(closure_2[19]);
    items = [];
    items[0] = closure_9;
    stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
    closure_0 = stateFromStores;
    obj2 = closure_0(closure_2[39]);
    if (!obj2.useShowStageMusicMuteButton(global.channelId)) {
      return null;
    } else {
      tmp5 = jsx;
      tmp6 = closure_1;
      tmp7 = closure_1(tmp3[20]);
      intl = tmp2(tmp3[22]).intl;
      string = intl.string;
      t = tmp2(tmp3[22]).t;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      obj = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disableBackground: true };
      obj.accessibilityLabel = stringResult;
      obj.containerStyle = tmp.iconBackground;
      obj.source = tmp6(stateFromStores ? tmp3[40] : tmp3[41]);
      obj.onPress = function onPress() {
        return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
      };
      tmp5Result = tmp5(tmp7, obj);
    }
    return;
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let obj = { header: null, leftTitleContainer: null, titleWrapper: null, linearGradient: null, iconBackground: null, iconContainer: null, settingsButton: null, stageInfo: null, stageInfoTopic: null, icon: null };
obj = { height: fn(5682).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, overflow: "visible" };
obj.header = obj;
obj.leftTitleContainer = { marginLeft: 12, flex: 1 };
obj.titleWrapper = { position: "relative", flex: 1, justifyContent: "center" };
obj.linearGradient = { position: "absolute", zIndex: 1, left: 0, right: 0, top: 0, bottom: 0 };
const createStyles = { backgroundColor: null };
let ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
obj.iconBackground = createStyles;
let obj2 = { backgroundColor: null };
ColorUtils = fn(4409);
obj2.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
obj.iconContainer = obj2;
obj.settingsButton = { marginRight: 4 };
obj.stageInfo = { flex: 1, flexDirection: "row", alignItems: "center", color: nativeDefault.colors.TEXT_SUBTLE };
obj.stageInfoTopic = { marginLeft: 4 };
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", color: nativeDefault.colors.TEXT_SUBTLE };
obj.icon = { marginLeft: 8, marginRight: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const value = createStyles.createStyles(obj);
let obj4 = { marginLeft: 8, marginRight: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default noop.memo((onOpenRTCDebugOverlay) => {
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  let obj = { style: closure_14().header, pointerEvents: "box-none", children: null };
  const items = [closure_1_12(HideStageChannelCallIcon, { channel, fullscreenStream }), closure_1_12(StageChannelCallHeader, { channel }), , , , , ];
  if (speaker) {
    obj = { channelId: channel.id };
    speaker = tmp7(MusicMuteButton, obj);
  }
  items[2] = speaker;
  if (fullscreenStream) {
    obj = { channel };
    fullscreenStream = tmp7(ChannelCallHeaderButtons.GridButton, obj);
  }
  items[3] = fullscreenStream;
  items[4] = closure_1_12(ChannelCallHeaderButtons.CameraButton, {});
  items[5] = closure_1_12(StageInviteButton, { channelId: channel.id });
  items[6] = closure_1_12(StageSettingsButton, { channelId: channel.id, onOpenRTCDebugOverlay: onOpenRTCDebugOverlay.onOpenRTCDebugOverlay });
  obj.children = items;
  return map1(View, obj);
});
export const closeStageModal = function closeStageModal(id) {
  const obj = { video_layout: "pop out" };
  const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(id.id));
  obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj);
  StatusBarDefault.setHidden(false);
  const obj5 = ModalActionCreatorsDefault;
  obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(id.id));
};
export { HideStageChannelCallIcon };
export { StageChannelCallHeader };
export const HideChannelCallButton = function HideChannelCallButton(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [GuildReadStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  obj = { source: null, accessibilityLabel: null, onPress: null, containerStyle: null, disableBackground: true, children: null };
  const tmp = closure_14();
  obj.source = _modDef10028;
  const intl = channel(1114).intl;
  obj.accessibilityLabel = intl.string(channel(1114).t.cpT0Cq);
  obj.onPress = function onPress() {
    const obj = { video_layout: "pop out" };
    const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
    obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj);
    StatusBarDefault.setHidden(false);
    const obj5 = ModalActionCreatorsDefault;
    obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
    const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
  };
  obj.containerStyle = tmp.iconContainer;
  obj.children = closure_12(channel(1178).MaskedBadge, { value: stateFromStores, maskStyle: {} });
  return closure_12(ChannelCallNavigatorIconDefault, obj);
};
export { StageSettingsButton };
export { StageInviteButton };
export { MusicMuteButton };