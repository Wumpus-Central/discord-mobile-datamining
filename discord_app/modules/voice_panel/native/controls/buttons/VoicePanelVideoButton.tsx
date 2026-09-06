// === Module 17196: VideoButtonRive ===

// Module 17196 (VideoButtonRive)
import ManaContext from "ManaContext" /* 4271 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "initialize" /* 9486 */;
import closure_6 from "ensureGuildLoaded" /* 1957 */;
import closure_7 from "createGuildRecordFromRust" /* 1979 */;
import closure_8 from "_detectH265HardwareDecode" /* 1908 */;
import closure_9 from "getUncachedChannelPermissions" /* 4199 */;
import { Features } from "DesktopSources" /* 4585 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function VideoButtonRive(arg0) {
  ({ isVideoEnabled, color } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  obj = { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null };
  let str = "CamOff";
  if (isVideoEnabled) {
    str = "CamOn";
  }
  obj[1] = str;
  if (isVideoEnabled) {
    let VideoSlashIcon = tmp3(10110).VideoIcon;
  } else {
    VideoSlashIcon = tmp3(13046).VideoSlashIcon;
  }
  obj[2] = <VideoSlashIcon color={color} />;
  obj[1] = jsx(ManaContext.CameraRive, { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null });
  return <View dataBinding={{ fill: color, on: isVideoEnabled }} defaultViewModelInstance={null} fallback={null} />;
}
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let channelId;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  closure_4 = undefined;
  let color;
  let obj = stateFromStores2;
  ({ props, wrapperSpecs } = arg0);
  channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[9])).channelId;
  const voicePanelButtonStyles = channelId(stateFromStores1[10]).useVoicePanelButtonStyles(wrapperSpecs);
  let obj2 = channelId(stateFromStores1[10]);
  let tmp = stateFromStores;
  const items = [closure_7, closure_9, closure_6];
  stateFromStores = channelId(stateFromStores1[11]).useStateFromStores(items, () => {
    const channel = closure_1_6.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = channelId(stateFromStores1[12]);
        isPrivateResult = obj2.canStreamInChannel(channel, closure_1_7, closure_1_9, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  let obj3 = channelId(stateFromStores1[11]);
  const items1 = [closure_8];
  stateFromStores1 = channelId(stateFromStores1[11]).useStateFromStores(items1, () => closure_8.isVideoEnabled());
  const obj4 = channelId(stateFromStores1[11]);
  const items2 = [closure_8];
  stateFromStores2 = channelId(stateFromStores1[11]).useStateFromStores(items2, () => closure_8.supports(constants.VIDEO));
  const VideoGuardExperiment = channelId(stateFromStores1[13]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelVideoButton" }).videoEnabled;
  closure_4 = tmp8;
  const items3 = [channelId, stateFromStores1, stateFromStores, stateFromStores2, !videoEnabled];
  if (stateFromStores2) {
    if (stateFromStores1) {
      let color2 = voicePanelButtonStyles.iconFillSelected.color;
    } else {
      color2 = voicePanelButtonStyles.iconFill.color;
    }
  } else {
    color = voicePanelButtonStyles.iconFillMuted.color;
    const items4 = [color, stateFromStores1];
    let memo = obj.useMemo(() => closure_1_11(closure_1_12, { isVideoEnabled: stateFromStores1, color }), items4);
    obj = { onPress: null, disabled: null, props: null, accessibilityLabel: null, style: null, children: null };
    obj[0] = tmp9;
    let tmp14 = !tmp8;
    if (videoEnabled) {
      tmp14 = !stateFromStores2;
    }
    obj[1] = tmp14;
    obj[2] = props;
    let intl = tmp3(tmp2[16]).intl;
    const string = intl.string;
    const t = tmp3(tmp2[16]).t;
    if (stateFromStores1) {
      let stringResult = string(t.EnX2Jl);
    } else {
      stringResult = string(t["v8K+8W"]);
    }
    obj[3] = stringResult;
    obj[4] = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
    if (!videoEnabled) {
      obj = { color: null };
      obj[0] = voicePanelButtonStyles.iconFill.color;
      memo = tmp12(tmp3(tmp2[21]).VideoDenyIcon, obj);
    }
    obj[5] = memo;
    return jsx(tmp(tmp2[20]), { onPress: null, disabled: null, props: null, accessibilityLabel: null, style: null, children: null });
  }
};