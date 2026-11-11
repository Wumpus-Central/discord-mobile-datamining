// === Module 12980: StageActionHeader ===

// Module 12980 (StageActionHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef4209 from "module_4209" /* 4209 */;
import NavigatorConstants from "NavigatorConstants" /* 5829 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import Text_Text from "Text/Text" /* 5866 */;
import useChannelNameDefault from "useChannelName" /* 5891 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 6004 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6837 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 6840 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6880 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6886 */;
import _modDef7951 from "module_7951" /* 7951 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8394 */;
import StatusBarDefault from "StatusBar" /* 11767 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 12852 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 12868 */;
import _modDef12981 from "module_12981" /* 12981 */;
import _modDef12982 from "module_12982" /* 12982 */;
import _modDef12983 from "module_12983" /* 12983 */;
import _modDef12984 from "module_12984" /* 12984 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 12985 */;
import ChannelCallHeaderButtons from "ChannelCallHeaderButtons" /* 12986 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6997 */;
import GuildStore from "GuildStore" /* 5114 */;
import StageInstanceStore from "StageInstanceStore" /* 5097 */;
import StageMusicStore from "StageMusicStore" /* 12845 */;

require = fn;
function HideStageChannelCallIcon(channel) {
  channel = channel.channel;
  const tmp = closure_16();
  items = [GuildReadStateStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let obj2 = { source: null, accessibilityLabel: null, onPress: null, containerStyle: null, disableBackground: true, children: null };
  let obj = channel(504);
  obj2.source = _modDef12981;
  const intl = channel(1113).intl;
  obj2.accessibilityLabel = intl.string(channel(1113).t.cpT0Cq);
  obj2.onPress = function handleClose() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { video_layout: "pop out" };
    const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channel.id));
    obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
    StatusBarDefault.setHidden(false);
    const obj5 = ModalActionCreatorsDefault;
    obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
    const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
  };
  obj2.containerStyle = tmp.iconBackground;
  obj2.children = closure_13(channel(1187).MaskedBadge, { value: stateFromStores, maskStyle: {} });
  return closure_13(ChannelCallNavigatorIconDefault, obj2);
}
function StageParticipantCounts(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_16();
  const actualStageSpeakerCount = StageChannelParticipantStoreHooks.useActualStageSpeakerCount(channelId);
  const stageParticipantsCount = StageChannelParticipantStoreHooks.useStageParticipantsCount(channelId, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  const intl = util.intl;
  const obj3 = { style: tmp.counts, pointerEvents: "none", accessible: true, accessibilityLabel: intl.formatToPlainString(_modDef4209.TdMGe4, { speakerCount: actualStageSpeakerCount, audienceCount: stageParticipantsCount }), children: null };
  items = [state(native.Icon, { source: _modDef12982, size: native.Icon.Sizes.SMALL, style: tmp.icon }), state(Text_Text.Text, { variant: "body-xs/normal", children: actualStageSpeakerCount }), , ];
  const obj4 = { source: _modDef12982, size: native.Icon.Sizes.SMALL, style: tmp.icon };
  items[2] = state(native.Icon, { source: _modDef12983, size: native.Icon.Sizes.SMALL, style: tmp.icon });
  items[3] = state(Text_Text.Text, { variant: "body-xs/normal", children: stageParticipantsCount });
  obj3.children = items;
  return gesture(React4, obj3);
}
class StageChannelCallHeader {
  constructor(arg0) {
    channel = global.channel;
    flag = global.isStarting;
    if (flag === undefined) {
      flag = false;
    }
    tmp = closure_16();
    tmp2 = closure_1;
    tmp3 = closure_2;
    rect = closure_1(closure_2[31])();
    left = rect.right;
    tmp5 = I18nManager;
    tmp4 = closure_17;
    if (I18nManager.isRTL) {
      left = rect.left;
    }
    tmp4Result = tmp4(flag, left);
    tmp7 = tmp2(tmp3[32])(channel);
    tmp8 = channel;
    obj = channel(tmp3[19]);
    items = [];
    items[0] = closure_9;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
    obj2 = channel(tmp3[19]);
    items2 = [];
    items2[0] = closure_5;
    tmp11 = jsxs;
    tmp12 = View;
    obj1 = { style: tmp4Result.header, pointerEvents: "box-none", children: null };
    tmp13 = jsx;
    stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channel.id));
    items3 = [, ];
    items3[0] = jsx(HideStageChannelCallIcon, { channel });
    obj13 = { style: tmp.content, pointerEvents: "box-none", children: null };
    tmp13Result = null == stateFromStores1;
    if (tmp13Result) {
      obj14 = { pointerEvents: "none", style: null, colors: null, start: null, end: null };
      obj14.style = tmp4Result.linearGradient;
      tmp16 = closure_15;
      obj14.colors = closure_15;
      num = 0.7;
      tmp2Result = tmp2(tmp3[33]);
      if (tmp5.isRTL) {
        num = 0.3;
      }
      point = { x: null, y: 0 };
      point.x = num;
      obj14.start = point;
      num2 = 1;
      if (tmp5.isRTL) {
        num2 = 0;
      }
      point1 = { x: null, y: 0 };
      point1.x = num2;
      obj14.end = point1;
      tmp13Result = tmp13(tmp2Result, obj14);
    }
    items4 = [, , , ];
    items4[0] = tmp13Result;
    obj15 = { pointerEvents: "none", style: tmp.leftTitleContainer, children: null };
    topic = undefined;
    if (stateFromStores != null) {
      topic = stateFromStores.topic;
    }
    if (topic == null) {
      topic = tmp7;
    }
    items5 = [, ];
    items5[0] = tmp13(tmp8(tmp3[29]).Text, { color: "text-overlay-light", variant: "body-md/semibold", lineClamp: 1, children: topic });
    tmp11Result = null != stateFromStores;
    if (tmp11Result) {
      obj16 = { style: null, children: null };
      obj16.style = tmp.stageInfo;
      obj17 = { source: null, size: null, disableColor: true };
      obj17.source = tmp2(tmp3[34]);
      obj17.size = tmp8(tmp3[24]).Icon.Sizes.SMALL;
      items6 = [, ];
      items6[0] = tmp13(tmp8(tmp3[24]).Icon, obj17);
      obj18 = { variant: "body-xs/normal", style: null, lineClamp: 1, children: null };
      obj18.style = tmp.stageInfoTopic;
      obj18.children = tmp7;
      items6[1] = tmp13(tmp8(tmp3[29]).Text, obj18);
      obj16.children = items6;
      tmp11Result = tmp11(tmp12, obj16);
    }
    items5[1] = tmp11Result;
    obj15.children = items5;
    items4[1] = tmp11(tmp12, obj15);
    tmp13Result1 = null != stateFromStores;
    if (tmp13Result1) {
      tmp20 = StageParticipantCounts;
      obj19 = { channelId: null };
      obj19.channelId = channel.id;
      tmp13Result1 = tmp13(StageParticipantCounts, obj19);
    }
    items4[2] = tmp13Result1;
    items4[3] = global.children;
    obj13.children = items4;
    items3[1] = tmp11(tmp12, obj13);
    obj1.children = items3;
    return tmp11(tmp12, obj1);
  }
}
class StageSettingsButton {
  constructor(arg0) {
    ({ channelId, onOpenRTCDebugOverlay } = global);
    tmp = closure_16();
    obj = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disableBackground: true };
    tmp2 = onOpenRTCDebugOverlay(closure_2[20]);
    intl = channelId(closure_2[22]).intl;
    obj.accessibilityLabel = intl.string(channelId(closure_2[22]).t["lIx5+G"]);
    items = [, ];
    ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
    obj.containerStyle = items;
    obj.source = onOpenRTCDebugOverlay(closure_2[35]);
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
    tmp = closure_16();
    obj = channelId(closure_2[19]);
    items = [];
    items[0] = closure_6;
    items1 = [];
    items1[0] = channelId;
    stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
    closure_1 = stateFromStores;
    obj2 = channelId(closure_2[19]);
    items2 = [];
    items2[0] = closure_8;
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
    obj3 = channelId(closure_2[37]);
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
        obj1.source = closure_1(tmp3[38]);
        obj1.IconComponent = tmp2(tmp3[39]).GroupPlusIcon;
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
    tmp = closure_16();
    obj = closure_0(closure_2[19]);
    items = [];
    items[0] = closure_10;
    stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
    closure_0 = stateFromStores;
    obj2 = closure_0(closure_2[41]);
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
      obj1.source = tmp6(stateFromStores ? tmp3[42] : tmp3[43]);
      obj1.onPress = function onPress() {
        return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
      };
      tmp5Result = tmp5(tmp7, obj1);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ I18nManager: c3, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: closure_11, InstantInviteSources: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, nativeDefault.unsafe_rawColors.BLACK];
let createStyles = fn(5243);
let obj = { content: { marginStart: nativeDefault.space.PX_12, flex: 1, flexDirection: "row", alignItems: "center", alignSelf: "stretch" }, leftTitleContainer: { flex: 1, minWidth: 0, alignSelf: "stretch", justifyContent: "center", overflow: "hidden" }, iconBackground: null, settingsButton: null, stageInfo: null, stageInfoTopic: null, counts: null, icon: null };
let obj4 = { backgroundColor: null };
const ColorUtils = fn(5240);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
obj.iconBackground = obj4;
let obj3 = { marginStart: nativeDefault.space.PX_12, flex: 1, flexDirection: "row", alignItems: "center", alignSelf: "stretch" };
obj.settingsButton = { marginEnd: nativeDefault.space.PX_4 };
obj.stageInfo = { flexDirection: "row", alignItems: "center" };
let obj5 = { marginEnd: nativeDefault.space.PX_4 };
obj.stageInfoTopic = { marginStart: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
let obj7 = { marginStart: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
obj.counts = { flexDirection: "row", alignItems: "center", flexShrink: 0, marginEnd: nativeDefault.space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", flexShrink: 0, marginEnd: nativeDefault.space.PX_8 };
obj.icon = { marginStart: nativeDefault.space.PX_8, marginEnd: nativeDefault.space.PX_4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const value = createStyles.createStyles(obj);
createStyles = fn(5243);
let closure_17 = createStyles.createStyles((arg0, arg1) => {
  const space = nativeDefault.space;
  if (arg0) {
    let PX_12 = space.PX_8;
    let tmp4 = importDefault;
  } else {
    PX_12 = space.PX_12;
    tmp4 = importDefault;
  }
  const obj = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: PX_12, marginTop: null };
  let num = 0;
  if (arg0) {
    num = tmp4(575).space.PX_4;
  }
  obj.marginTop = num;
  return { header: obj, linearGradient: { position: "absolute", start: 0, end: -PX_12 + arg1, top: 0, bottom: 0 } };
});
let obj9 = { marginStart: nativeDefault.space.PX_8, marginEnd: nativeDefault.space.PX_4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default noop.memo(function StageActionHeader(onOpenRTCDebugOverlay) {
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  const tmp2 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp2 != null) {
    speaker = tmp2.speaker;
  }
  const obj = { channel, children: null };
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = state(MusicMuteButton, obj2);
  }
  items = [speaker, , , , ];
  if (fullscreenStream) {
    const obj3 = { channel };
    fullscreenStream = state(ChannelCallHeaderButtons.GridButton, obj3);
  }
  items[1] = fullscreenStream;
  items[2] = state(ChannelCallHeaderButtons.CameraButton, {});
  items[3] = state(StageInviteButton, { channelId: channel.id });
  items[4] = state(StageSettingsButton, { channelId: channel.id, onOpenRTCDebugOverlay: onOpenRTCDebugOverlay.onOpenRTCDebugOverlay });
  obj.children = items;
  return gesture(StageChannelCallHeader, obj);
});
export function closeStageModal(id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { video_layout: "pop out" };
  const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(id.id));
  obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
  StatusBarDefault.setHidden(false);
  const obj5 = ModalActionCreatorsDefault;
  obj5.popWithKey(PrivateChannelCallUtils.getVoiceChannelKey(id.id));
}
export { StageChannelCallHeader };
export { StageSettingsButton };
export { StageInviteButton };
export { MusicMuteButton };