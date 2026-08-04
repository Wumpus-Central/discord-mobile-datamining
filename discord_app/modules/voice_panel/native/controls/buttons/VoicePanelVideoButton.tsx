import VideoIcon from "VideoIcon";
import { View } from "getSystemLocale";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { jsx } from "set";

const require = arg1;
function VideoButtonRive(arg0) {
  let color;
  let isVideoEnabled;
  ({ isVideoEnabled, color } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  obj = { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null };
  let str = "CamOff";
  if (isVideoEnabled) {
    str = "CamOn";
  }
  obj[1] = str;
  if (isVideoEnabled) {
    let VideoSlashIcon = tmp3(7635).VideoIcon;
  } else {
    VideoSlashIcon = tmp3(12234).VideoSlashIcon;
  }
  obj[2] = <VideoSlashIcon color={color} />;
  obj[1] = jsx(require(3997) /* ManaContext */.CameraRive, { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null });
  return <View dataBinding={{ fill: color, on: isVideoEnabled }} defaultViewModelInstance={null} fallback={null} />;
}
let result = require("initialize").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let props;
  let wrapperSpecs;
  let channelId;
  let voicePanelButtonStyles;
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores1;
  ({ props, wrapperSpecs } = arg0);
  channelId = stateFromStores1.useContext(voicePanelButtonStyles(stateFromStores[8])).channelId;
  voicePanelButtonStyles = channelId(stateFromStores[9]).useVoicePanelButtonStyles(wrapperSpecs);
  let obj2 = channelId(stateFromStores[9]);
  const items = [createGuildRecordFromRust, getUncachedChannelPermissions, ensureGuildLoaded];
  stateFromStores = channelId(stateFromStores[10]).useStateFromStores(items, () => {
    const channel = outer1_6.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = channelId(stateFromStores[11]);
        isPrivateResult = obj2.canStreamInChannel(channel, outer1_7, outer1_9, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  let obj3 = channelId(stateFromStores[10]);
  const items1 = [_detectH265HardwareDecode];
  stateFromStores1 = channelId(stateFromStores[10]).useStateFromStores(items1, () => videoEnabled.isVideoEnabled());
  const items2 = [channelId, stateFromStores1, stateFromStores];
  const callback = stateFromStores1.useCallback(() => {
    if (stateFromStores) {
      channel = outer1_6.getChannel(channel);
      if (null != channel) {
        if (!stateFromStores1) {
          if (outer1_5.isReactingToThermalState()) {
            const result = channelId(stateFromStores[15]).openIgnoreThermalStateAlert(() => {
              if (null != channel) {
                channel(outer1_2[14]).handleToggleVideo(tmp);
                const obj = channel(outer1_2[14]);
              }
            });
            const obj2 = channelId(stateFromStores[15]);
          }
        }
        if (null != channel) {
          channelId(stateFromStores[14]).handleToggleVideo(channel);
          const obj3 = channelId(stateFromStores[14]);
        }
      }
    } else {
      channelId(stateFromStores[12]).openAlert(channelId(stateFromStores[13]).VOICE_PANEL_NO_VIDEO_PERMS_KEY, outer1_10(voicePanelButtonStyles(stateFromStores[13]), {}));
      let obj = channelId(stateFromStores[12]);
    }
  }, items2);
  obj = { onPress: callback, props, accessibilityLabel: null, style: null, children: null };
  const obj4 = channelId(stateFromStores[10]);
  const tmp5 = jsx;
  const intl = channelId(stateFromStores[17]).intl;
  const string = intl.string;
  const t = channelId(stateFromStores[17]).t;
  if (stateFromStores1) {
    let stringResult = string(t.EnX2Jl);
  } else {
    stringResult = string(t["v8K+8W"]);
  }
  obj[2] = stringResult;
  obj[3] = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  const items3 = [voicePanelButtonStyles.iconFill.color, voicePanelButtonStyles.iconFillSelected.color, stateFromStores1];
  obj[4] = obj.useMemo(() => {
    const obj = { isVideoEnabled: stateFromStores1, color: null };
    if (stateFromStores1) {
      let color = tmp3.iconFillSelected.color;
    } else {
      color = tmp3.iconFill.color;
    }
    obj[1] = color;
    return outer1_10(outer1_11, obj);
  }, items3);
  return tmp5(voicePanelButtonStyles(stateFromStores[16]), obj);
};