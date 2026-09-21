// === Module 10284: StageActionHeader ===

// Module 10284 (StageActionHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useChannelNameDefault from "useChannelName" /* 4909 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4957 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4963 */;
import LinearGradientDefault from "LinearGradient" /* 5198 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8665 */;
import _modDef8897 from "module_8897" /* 8897 */;
import _modDef8900 from "module_8900" /* 8900 */;
import StatusBarDefault from "StatusBar" /* 9650 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10076 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 10169 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10182 */;
import _modDef10285 from "module_10285" /* 10285 */;
import _modDef10286 from "module_10286" /* 10286 */;
import _modDef10287 from "module_10287" /* 10287 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 10290 */;
import ChannelCallHeaderButtons from "ChannelCallHeaderButtons" /* 10291 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4772 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7872 */;
import GuildStore from "GuildStore" /* 2063 */;
import StageInstanceStore from "StageInstanceStore" /* 2046 */;
import StageMusicStore from "StageMusicStore" /* 10155 */;

require = fn;
class HideStageChannelCallIcon {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    obj = channel(closure_2[19]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
    obj1 = { source: null, accessibilityLabel: null, onPress: null, containerStyle: null, disableBackground: true, children: null };
    tmp3 = closure_1(closure_2[20]);
    obj1.source = closure_1(closure_2[21]);
    intl = channel(closure_2[22]).intl;
    obj1.accessibilityLabel = intl.string(channel(closure_2[22]).t.cpT0Cq);
    obj1.onPress = function onPress() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { video_layout: "pop out" };
      const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
      obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
      StatusBarDefault.setHidden(false);
      const obj5 = ModalActionCreatorsDefault;
      obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    };
    obj1.containerStyle = tmp.iconContainer;
    obj1.children = jsx(channel(closure_2[24]).MaskedBadge, { value: stateFromStores, maskStyle: {} });
    return jsx(tmp3, obj1);
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
    obj1 = { pointerEvents: "none", style: tmp.leftTitleContainer, children: null };
    obj15 = { style: tmp.titleWrapper, children: null };
    tmp11 = null == obj4.useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channel.id));
    if (tmp11) {
      tmp12 = jsx;
      obj16 = { style: null, colors: null, start: null, end: null };
      obj16.style = tmp.linearGradient;
      obj16.colors = ["#00000000", "#000000"];
      obj16.start = { x: 0.85, y: 0 };
      obj16.end = { x: 1, y: 0 };
      tmp11 = jsx(tmp2(tmp3[28]), obj16);
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
    obj15.children = items3;
    items4 = [, ];
    items4[0] = tmp9(tmp10, obj15);
    tmp9Result = null != stateFromStores;
    if (tmp9Result) {
      obj17 = { style: null, children: null };
      obj17.style = tmp.stageInfo;
      obj18 = { source: null, size: null, disableColor: true };
      obj18.source = tmp2(tmp3[30]);
      obj18.size = tmp5(tmp3[24]).Icon.Sizes.SMALL;
      items5 = [, , , , , ];
      items5[0] = tmp13(tmp5(tmp3[24]).Icon, obj18);
      obj19 = { variant: "text-xs/normal", style: null, children: null };
      obj19.style = tmp.stageInfoTopic;
      obj19.children = tmp4;
      items5[1] = tmp13(tmp5(tmp3[29]).Text, obj19);
      obj20 = { source: null, size: null, style: null };
      obj20.source = tmp2(tmp3[31]);
      obj20.size = tmp5(tmp3[24]).Icon.Sizes.SMALL;
      obj20.style = tmp.icon;
      items5[2] = tmp13(tmp5(tmp3[24]).Icon, obj20);
      obj21 = { variant: "text-xs/normal", children: null };
      obj21.children = actualStageSpeakerCount;
      items5[3] = tmp13(tmp5(tmp3[29]).Text, obj21);
      obj22 = { source: null, size: null, style: null };
      obj22.source = tmp2(tmp3[32]);
      obj22.size = tmp5(tmp3[24]).Icon.Sizes.SMALL;
      obj22.style = tmp.icon;
      items5[4] = tmp13(tmp5(tmp3[24]).Icon, obj22);
      obj23 = { variant: "text-xs/normal", children: null };
      obj23.children = stageParticipantsCount;
      items5[5] = tmp13(tmp5(tmp3[29]).Text, obj23);
      obj17.children = items5;
      tmp9Result = tmp9(tmp10, obj17);
    }
    items4[1] = tmp9Result;
    obj1.children = items4;
    return tmp9(tmp10, obj1);
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
        obj1 = { accessibilityLabel: null, containerStyle: null, source: null, IconComponent: null, onPress: null, disableBackground: true };
        tmp9 = closure_1(tmp3[20]);
        intl = tmp2(tmp3[22]).intl;
        obj1.accessibilityLabel = intl.string(tmp2(tmp3[22]).t.VINpSK);
        obj1.containerStyle = tmp.iconBackground;
        obj1.source = closure_1(tmp3[36]);
        obj1.IconComponent = tmp2(tmp3[37]).GroupPlusIcon;
        obj1.onPress = function onPress() {
          if (null != stateFromStores1.vanityURLCode) {
            const result = instant_invite_InstantInviteUtils.showVanityUrlInviteActionSheet(tmp, stateFromStores, constants2.STAGE_CHANNEL);
          } else {
            const obj2 = { source: constants2.STAGE_CHANNEL, guildScheduledEventId: null };
            id = undefined;
            if (id != null) {
              id = id.id;
            }
            obj2.guildScheduledEventId = id;
            const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(stateFromStores, obj2);
          }
        };
        tmp6 = jsx(tmp9, obj1);
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
      obj1 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disableBackground: true };
      obj1.accessibilityLabel = stringResult;
      obj1.containerStyle = tmp.iconBackground;
      obj1.source = tmp6(stateFromStores ? tmp3[40] : tmp3[41]);
      obj1.onPress = function onPress() {
        return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
      };
      tmp5Result = tmp5(tmp7, obj1);
    }
    return;
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4756);
let obj = { header: { height: fn(5899).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, overflow: "visible" }, leftTitleContainer: { marginLeft: 12, flex: 1 }, titleWrapper: { position: "relative", flex: 1, justifyContent: "center" }, linearGradient: { position: "absolute", zIndex: 1, left: 0, right: 0, top: 0, bottom: 0 }, iconBackground: null, iconContainer: null, settingsButton: null, stageInfo: null, stageInfoTopic: null, icon: null };
let obj4 = { backgroundColor: null };
let ColorUtils = fn(4605);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
obj.iconBackground = obj4;
let obj5 = { backgroundColor: null };
ColorUtils = fn(4605);
obj5.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
obj.iconContainer = obj5;
obj.settingsButton = { marginRight: 4 };
let obj3 = { height: fn(5899).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, overflow: "visible" };
obj.stageInfo = { flex: 1, flexDirection: "row", alignItems: "center", color: nativeDefault.colors.TEXT_SUBTLE };
obj.stageInfoTopic = { marginLeft: 4 };
let obj7 = { flex: 1, flexDirection: "row", alignItems: "center", color: nativeDefault.colors.TEXT_SUBTLE };
obj.icon = { marginLeft: 8, marginRight: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const value = createStyles.createStyles(obj);
let obj9 = { marginLeft: 8, marginRight: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default noop.memo((onOpenRTCDebugOverlay) => {
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  const obj = { style: closure_14().header, pointerEvents: "box-none", children: null };
  const items = [closure_1_12(HideStageChannelCallIcon, { channel, fullscreenStream }), closure_1_12(StageChannelCallHeader, { channel }), , , , , ];
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = closure_1_12(MusicMuteButton, obj2);
  }
  items[2] = speaker;
  if (fullscreenStream) {
    const obj3 = { channel };
    fullscreenStream = closure_1_12(ChannelCallHeaderButtons.GridButton, obj3);
  }
  items[3] = fullscreenStream;
  items[4] = closure_1_12(ChannelCallHeaderButtons.CameraButton, {});
  items[5] = closure_1_12(StageInviteButton, { channelId: channel.id });
  items[6] = closure_1_12(StageSettingsButton, { channelId: channel.id, onOpenRTCDebugOverlay: onOpenRTCDebugOverlay.onOpenRTCDebugOverlay });
  obj.children = items;
  return map1(View, obj);
});
export const closeStageModal = function closeStageModal(id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { video_layout: "pop out" };
  const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(id.id));
  obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
  StatusBarDefault.setHidden(false);
  const obj5 = ModalActionCreatorsDefault;
  obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(id.id));
};
export { HideStageChannelCallIcon };
export { StageChannelCallHeader };
export const HideChannelCallButton = function HideChannelCallButton(channel) {
  channel = channel.channel;
  const tmp = closure_14();
  const items = [GuildReadStateStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let obj2 = { source: null, accessibilityLabel: null, onPress: null, containerStyle: null, disableBackground: true, children: null };
  let obj = channel(504);
  obj2.source = _modDef10285;
  const intl = channel(1115).intl;
  obj2.accessibilityLabel = intl.string(channel(1115).t.cpT0Cq);
  obj2.onPress = function onPress() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { video_layout: "pop out" };
    const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
    obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
    StatusBarDefault.setHidden(false);
    const obj5 = ModalActionCreatorsDefault;
    obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
    const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
  };
  obj2.containerStyle = tmp.iconContainer;
  obj2.children = closure_12(channel(1177).MaskedBadge, { value: stateFromStores, maskStyle: {} });
  return closure_12(ChannelCallNavigatorIconDefault, obj2);
};
export { StageSettingsButton };
export { StageInviteButton };
export { MusicMuteButton };