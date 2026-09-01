// discord_app/modules/stage_channels/native/components/StageActionHeader.tsx
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import computeChannelNameDefault from "../../../channel/useChannelName.tsx";
import collectGuildAnalyticsMetadata from "../../../app_analytics/AppAnalyticsUtils.tsx";
import _modDef4723 from "../../../../actions/ModalActionCreators.tsx";
import openChannelCallModal from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import componentDidMountDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import ChannelCallNavigatorIconDefault from "../../../video_calls/native/components/ChannelCallNavigatorIcon.tsx";
import registerAssetDefault from "../../../../../_runtime/10111_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/10113_registerAsset.js";
import useMyCurrentStageChannelRoleDefault from "../../useMyCurrentStageChannelRole.tsx";
import CameraButton from "../../../video_calls/native/components/ChannelCallHeaderButtons.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../calls/ChannelRTCStore.tsx";
import closure_5 from "../../../../stores/ChannelStore.tsx";
import closure_6 from "../../../../stores/GuildReadStateStore.tsx";
import closure_7 from "../../../../stores/GuildStore.tsx";
import closure_8 from "../../StageInstanceStore.tsx";
import closure_9 from "../../StageMusicStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
class HideStageChannelCallIcon {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    obj = require("initialize");
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
    obj = { source: null, accessibilityLabel: null, onPress: null, containerStyle: null, disableBackground: true, children: null };
    tmp3 = require("ChannelCallNavigatorIcon");
    obj[0] = require("registerAsset");
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj[2] = function onPress() {
      let obj = closure_1_1(closure_1_2[14]);
      obj = { video_layout: "pop out" };
      const merged = Object.assign(channel(closure_1_2[15]).collectVoiceAnalyticsMetadata(channel.id));
      obj.track(closure_1_10.VIDEO_LAYOUT_TOGGLED, obj);
      const obj3 = channel(closure_1_2[15]);
      closure_1_1(closure_1_2[16]).setHidden(false);
      const obj4 = closure_1_1(closure_1_2[16]);
      const obj5 = closure_1_1(closure_1_2[17]);
      obj5.popWithKey(channel(closure_1_2[18]).getVoiceChannelKey(channel.id));
      const obj6 = channel(closure_1_2[18]);
      const participant = closure_1_1(closure_1_2[23]).selectParticipant(channel.id, null);
    };
    obj[3] = tmp.iconContainer;
    obj[5] = jsx(require("Button").MaskedBadge, { value: stateFromStores, maskStyle: {} });
    return jsx(tmp3, obj);
  }
}
class StageChannelCallHeader {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_14();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = require("computeChannelName")(channel);
    tmp5 = channel;
    obj = require("initialize");
    items = [];
    items[0] = closure_8;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getStageInstanceByChannel(channel.id), items1);
    obj2 = require("useStageParticipants");
    stageParticipantsCount = obj2.useStageParticipantsCount(channel.id, require("sortKey").StageChannelParticipantNamedIndex.AUDIENCE);
    obj3 = require("useStageParticipants");
    actualStageSpeakerCount = obj3.useActualStageSpeakerCount(channel.id);
    obj4 = require("initialize");
    items2 = [];
    items2[0] = closure_4;
    tmp9 = jsxs;
    tmp10 = View;
    obj = { pointerEvents: "none", style: tmp.leftTitleContainer, children: null };
    obj1 = { style: tmp.titleWrapper, children: null };
    tmp11 = null == obj4.useStateFromStores(items2, () => closure_1_4.getSelectedParticipant(channel.id));
    if (tmp11) {
      tmp12 = jsx;
      obj2 = { style: null, colors: null, start: null, end: null };
      obj2[0] = tmp.linearGradient;
      obj2[1] = ["#00000000", "#000000"];
      obj2[2] = { x: 0.85, y: 0 };
      obj2[3] = { x: 1, y: 0 };
      tmp11 = jsx(require("LinearGradient"), obj2);
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
    items3[1] = tmp13(require("Text").Text, { color: "text-overlay-light", variant: "text-md/semibold", children: topic });
    obj1[1] = items3;
    items4 = [, ];
    items4[0] = tmp9(tmp10, obj1);
    tmp9Result = null != stateFromStores;
    if (tmp9Result) {
      obj3 = { style: null, children: null };
      obj3[0] = tmp.stageInfo;
      obj4 = { source: null, size: null, disableColor: true };
      obj4[0] = require("registerAsset");
      obj4[1] = require("Button").Icon.Sizes.SMALL;
      items5 = [, , , , , ];
      items5[0] = tmp13(require("Button").Icon, obj4);
      obj5 = { variant: "text-xs/normal", style: null, children: null };
      obj5[1] = tmp.stageInfoTopic;
      obj5[2] = tmp4;
      items5[1] = tmp13(require("Text").Text, obj5);
      obj6 = { source: null, size: null, style: null };
      obj6[0] = require("registerAsset");
      obj6[1] = require("Button").Icon.Sizes.SMALL;
      obj6[2] = tmp.icon;
      items5[2] = tmp13(require("Button").Icon, obj6);
      obj7 = { variant: "text-xs/normal", children: null };
      obj7[1] = actualStageSpeakerCount;
      items5[3] = tmp13(require("Text").Text, obj7);
      obj8 = { source: null, size: null, style: null };
      obj8[0] = require("registerAsset");
      obj8[1] = require("Button").Icon.Sizes.SMALL;
      obj8[2] = tmp.icon;
      items5[4] = tmp13(require("Button").Icon, obj8);
      obj9 = { variant: "text-xs/normal", children: null };
      obj9[1] = stageParticipantsCount;
      items5[5] = tmp13(require("Text").Text, obj9);
      obj3[1] = items5;
      tmp9Result = tmp9(tmp10, obj3);
    }
    items4[1] = tmp9Result;
    obj[2] = items4;
    return tmp9(tmp10, obj);
  }
}
class StageSettingsButton {
  constructor(arg0) {
    ({ channelId, onOpenRTCDebugOverlay } = global);
    tmp = closure_14();
    obj = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disableBackground: true };
    tmp2 = require("ChannelCallNavigatorIcon");
    intl = require("getSystemLocale").intl;
    obj[0] = intl.string(require("getSystemLocale").t["lIx5+G"]);
    items = [, ];
    ({ iconBackground: arr[0], settingsButton: arr[1] } = tmp);
    obj[1] = items;
    obj[2] = require("registerAsset");
    obj[3] = function onPress() {
      return closure_1_0(closure_1_2[34]).openStageSettingsSheet(closure_0, closure_1);
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
    obj = require("initialize");
    items = [];
    items[0] = closure_5;
    items1 = [];
    items1[0] = channelId;
    stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(channelId), items1);
    closure_1 = stateFromStores;
    obj2 = require("initialize");
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
      return closure_1_7.getGuild(guild_id);
    }, items3);
    closure_2 = stateFromStores1;
    obj3 = require("useGuildEvents");
    closure_3 = obj3.useActiveEvent(channelId);
    tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores1) {
        tmp7 = jsx;
        tmp8 = closure_1;
        obj = { accessibilityLabel: null, containerStyle: null, source: null, IconComponent: null, onPress: null, disableBackground: true };
        tmp9 = require("ChannelCallNavigatorIcon");
        intl = require("getSystemLocale").intl;
        obj[0] = intl.string(require("getSystemLocale").t.VINpSK);
        obj[1] = tmp.iconBackground;
        obj[2] = require("registerAsset");
        obj[3] = require("GroupPlusIcon").GroupPlusIcon;
        obj[4] = function onPress() {
          if (null != stateFromStores1.vanityURLCode) {
            const result = channelId(stateFromStores1[38]).showVanityUrlInviteActionSheet(tmp, stateFromStores, closure_1_11.STAGE_CHANNEL);
            const obj3 = channelId(stateFromStores1[38]);
          } else {
            let obj = channelId(stateFromStores1[38]);
            obj = { source: null, guildScheduledEventId: null };
            obj[0] = closure_1_11.STAGE_CHANNEL;
            let id;
            if (id != null) {
              id = id.id;
            }
            obj[1] = id;
            const result1 = obj.showInstantInviteActionSheet(stateFromStores, obj);
            const tmp4 = stateFromStores;
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
    obj = require("initialize");
    items = [];
    items[0] = closure_9;
    stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
    closure_0 = stateFromStores;
    obj2 = require("checkVoiceStates");
    if (!obj2.useShowStageMusicMuteButton(global.channelId)) {
      return null;
    } else {
      tmp5 = jsx;
      tmp6 = closure_1;
      tmp7 = require("ChannelCallNavigatorIcon");
      intl = require("getSystemLocale").intl;
      string = intl.string;
      t = require("getSystemLocale").t;
      if (stateFromStores) {
        stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      obj = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disableBackground: true };
      obj[0] = stringResult;
      obj[1] = tmp.iconBackground;
      obj[2] = tmp6(stateFromStores ? tmp3[40] : tmp3[41]);
      obj[3] = function onPress() {
        return stateFromStores(closure_1_2[42]).updateStageMusicMuted(!stateFromStores);
      };
      tmp5Result = tmp5(tmp7, obj);
    }
    return;
  }
}
({ AnalyticEvents: c10, InstantInviteSources: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { header: null, leftTitleContainer: null, titleWrapper: null, linearGradient: null, iconBackground: null, iconContainer: null, settingsButton: null, stageInfo: null, stageInfoTopic: null, icon: null };
obj = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, overflow: "visible" };
obj[0] = obj;
obj[1] = { marginLeft: 12, flex: 1 };
obj[2] = { position: "relative", flex: 1, justifyContent: "center" };
obj[3] = { position: "absolute", zIndex: 1, left: 0, right: 0, top: 0, bottom: 0 };
createCacheKey = { backgroundColor: null };
createCacheKey[0] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.WHITE, 0.1);
obj[4] = createCacheKey;
let obj2 = { backgroundColor: null };
obj2[0] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.WHITE, 0.1);
obj[5] = obj2;
obj[6] = { marginRight: 4 };
obj[7] = { flex: 1, flexDirection: "row", alignItems: "center", color: ThemesDefault.colors.TEXT_SUBTLE };
obj[8] = { marginLeft: 4 };
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", color: ThemesDefault.colors.TEXT_SUBTLE };
obj[9] = { marginLeft: 8, marginRight: 4, tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let closure_14 = createCacheKey.createStyles(obj);
let obj4 = { marginLeft: 8, marginRight: 4, tintColor: ThemesDefault.colors.TEXT_SUBTLE };
const memoResult = importAllResult.memo((onOpenRTCDebugOverlay) => {
  ({ channel, fullscreenStream } = onOpenRTCDebugOverlay);
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  let obj = { style: callback2().header, pointerEvents: "box-none", children: null };
  const items = [callback(HideStageChannelCallIcon, { channel, fullscreenStream }), callback(StageChannelCallHeader, { channel }), , , , , ];
  if (speaker) {
    obj = { channelId: null };
    obj[0] = channel.id;
    speaker = tmp7(MusicMuteButton, obj);
  }
  items[2] = speaker;
  if (fullscreenStream) {
    obj = { channel: null };
    obj[0] = channel;
    fullscreenStream = tmp7(CameraButton.GridButton, obj);
  }
  items[3] = fullscreenStream;
  items[4] = callback(CameraButton.CameraButton, {});
  items[5] = callback(StageInviteButton, { channelId: channel.id });
  items[6] = callback(StageSettingsButton, { channelId: channel.id, onOpenRTCDebugOverlay: onOpenRTCDebugOverlay.onOpenRTCDebugOverlay });
  obj[2] = items;
  return closure_13(View, obj);
});
let result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageActionHeader.tsx");

export default memoResult;
export const closeStageModal = function closeStageModal(id) {
  let obj = expandEventPropertiesDefault;
  obj = { video_layout: "pop out" };
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectVoiceAnalyticsMetadata(id.id));
  obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj);
  const obj3 = collectGuildAnalyticsMetadata;
  componentDidMountDefault.setHidden(false);
  const obj4 = componentDidMountDefault;
  const obj5 = _modDef4723;
  obj5.popWithKey(openChannelCallModal.getVoiceChannelKey(id.id));
};
export { HideStageChannelCallIcon };
export { StageChannelCallHeader };
export const HideChannelCallButton = function HideChannelCallButton(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  obj = { source: null, accessibilityLabel: null, onPress: null, containerStyle: null, disableBackground: true, children: null };
  const tmp = callback2();
  obj[0] = registerAssetDefault;
  const intl = channel(1236).intl;
  obj[1] = intl.string(channel(1236).t.cpT0Cq);
  obj[2] = function onPress() {
    let obj = closure_1_1(closure_1_2[14]);
    obj = { video_layout: "pop out" };
    const merged = Object.assign(channel(closure_1_2[15]).collectVoiceAnalyticsMetadata(channel.id));
    obj.track(closure_1_10.VIDEO_LAYOUT_TOGGLED, obj);
    const obj3 = channel(closure_1_2[15]);
    closure_1_1(closure_1_2[16]).setHidden(false);
    const obj4 = closure_1_1(closure_1_2[16]);
    const obj5 = closure_1_1(closure_1_2[17]);
    obj5.popWithKey(channel(closure_1_2[18]).getVoiceChannelKey(channel.id));
    const obj6 = channel(closure_1_2[18]);
    const participant = closure_1_1(closure_1_2[23]).selectParticipant(channel.id, null);
  };
  obj[3] = tmp.iconContainer;
  obj[5] = callback(channel(1297).MaskedBadge, { value: stateFromStores, maskStyle: {} });
  return callback(ChannelCallNavigatorIconDefault, obj);
};
export { StageSettingsButton };
export { StageInviteButton };
export { MusicMuteButton };