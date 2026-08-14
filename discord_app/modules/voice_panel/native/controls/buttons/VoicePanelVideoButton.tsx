// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx
import ManaContext from "ManaContext";
import { View } from "AnimatedButtonWrapper";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Features } from "DesktopSources";
import { jsx } from "VideoSlashIcon";
import { ManaContext } from "../../../../../../discord_common/js/packages/design/native.tsx";

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
    let VideoSlashIcon = tmp3(7780).VideoIcon;
  } else {
    VideoSlashIcon = tmp3(12408).VideoSlashIcon;
  }
  obj[2] = <VideoSlashIcon color={color} />;
  obj[1] = jsx(ManaContext.CameraRive, { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null });
  return <View dataBinding={{ fill: color, on: isVideoEnabled }} defaultViewModelInstance={null} fallback={null} />;
}
let result = require("initialize").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let props;
  let wrapperSpecs;
  let channelId;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let color;
  let obj = stateFromStores2;
  ({ props, wrapperSpecs } = arg0);
  channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[9])).channelId;
  const voicePanelButtonStyles = channelId(stateFromStores1[10]).useVoicePanelButtonStyles(wrapperSpecs);
  let obj2 = channelId(stateFromStores1[10]);
  let tmp = stateFromStores;
  const items = [createGuildRecordFromRust, getUncachedChannelPermissions, ensureGuildLoaded];
  stateFromStores = channelId(stateFromStores1[11]).useStateFromStores(items, () => {
    const channel = outer1_6.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = channelId(stateFromStores1[12]);
        isPrivateResult = obj2.canStreamInChannel(channel, outer1_7, outer1_9, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  let obj3 = channelId(stateFromStores1[11]);
  const items1 = [_detectH265HardwareDecode];
  stateFromStores1 = channelId(stateFromStores1[11]).useStateFromStores(items1, () => _detectH265HardwareDecode.isVideoEnabled());
  const obj4 = channelId(stateFromStores1[11]);
  const items2 = [_detectH265HardwareDecode];
  stateFromStores2 = channelId(stateFromStores1[11]).useStateFromStores(items2, () => _detectH265HardwareDecode.supports(constants.VIDEO));
  const items3 = [channelId, stateFromStores1, stateFromStores, stateFromStores2];
  if (stateFromStores2) {
    if (stateFromStores1) {
      let color2 = voicePanelButtonStyles.iconFillSelected.color;
    } else {
      color2 = voicePanelButtonStyles.iconFill.color;
    }
  } else {
    color = voicePanelButtonStyles.iconFillMuted.color;
    obj = { onPress: null, disabled: null, props: null, accessibilityLabel: null, style: null, children: null };
    obj[0] = tmp8;
    obj[1] = !stateFromStores2;
    obj[2] = props;
    const intl = tmp3(tmp2[18]).intl;
    const string = intl.string;
    const t = tmp3(tmp2[18]).t;
    if (stateFromStores1) {
      let stringResult = string(t.EnX2Jl);
    } else {
      stringResult = string(t["v8K+8W"]);
    }
    obj[3] = stringResult;
    obj[4] = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
    const items4 = [color, stateFromStores1];
    obj[5] = obj.useMemo(() => outer1_11(outer1_12, { isVideoEnabled: stateFromStores1, color }), items4);
    return jsx(tmp(tmp2[17]), { onPress: null, disabled: null, props: null, accessibilityLabel: null, style: null, children: null });
  }
};