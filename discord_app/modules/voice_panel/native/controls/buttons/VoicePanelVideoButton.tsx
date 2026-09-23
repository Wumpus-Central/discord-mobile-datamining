// === Module 17741: VoicePanelVideoButton ===

// Module 17741 (VoicePanelVideoButton)
import util from "util" /* 1115 */;
import native from "native" /* 4533 */;
import useAlertStore from "useAlertStore" /* 5195 */;
import StreamPermissionUtils from "StreamPermissionUtils" /* 8047 */;
import openIgnoreThermalStateAlert from "openIgnoreThermalStateAlert" /* 9753 */;
import CallsUtils from "CallsUtils" /* 9983 */;
import VideoIcon from "VideoIcon" /* 10451 */;
import VideoSlashIcon2 from "VideoSlashIcon" /* 13426 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 13660 */;
import VoicePanelNoVideoPermissionsAlert from "VoicePanelNoVideoPermissionsAlert" /* 17742 */;
import noop from "module_19" /* 19 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9734 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildStore from "GuildStore" /* 2064 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import PermissionStore from "PermissionStore" /* 4462 */;

require = fn;
function VideoButtonRive(arg0) {
  ({ isVideoEnabled, color } = arg0);
  const obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  const obj2 = { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null };
  let str = "CamOff";
  if (isVideoEnabled) {
    str = "CamOn";
  }
  obj2.defaultViewModelInstance = str;
  if (isVideoEnabled) {
    let VideoSlashIcon = VideoIcon.VideoIcon;
  } else {
    VideoSlashIcon = VideoSlashIcon2.VideoSlashIcon;
  }
  obj2.fallback = <VideoSlashIcon color={color} />;
  obj.children = jsx(native.CameraRive, { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null });
  return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
}
const View = fn(17).View;
const Features = fn(4852).Features;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let color;
  ({ props, wrapperSpecs } = arg0);
  const channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[9])).channelId;
  const voicePanelButtonStyles = channelId(stateFromStores1[10]).useVoicePanelButtonStyles(wrapperSpecs);
  let obj = stateFromStores2;
  let obj2 = channelId(stateFromStores1[10]);
  let tmp = stateFromStores;
  const items = [GuildStore, PermissionStore, ChannelStore];
  stateFromStores = channelId(stateFromStores1[11]).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = StreamPermissionUtils;
        isPrivateResult = obj2.canStreamInChannel(channel, GuildStore, PermissionStore, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  let obj3 = channelId(stateFromStores1[11]);
  const items1 = [MediaEngineStore];
  stateFromStores1 = channelId(stateFromStores1[11]).useStateFromStores(items1, () => MediaEngineStore.isVideoEnabled());
  let obj4 = channelId(stateFromStores1[11]);
  const items2 = [MediaEngineStore];
  stateFromStores2 = channelId(stateFromStores1[11]).useStateFromStores(items2, () => MediaEngineStore.supports(constants.VIDEO));
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
    let memo = obj.useMemo(() => <VideoButtonRive isVideoEnabled={stateFromStores1} color={color} />, items4);
    const element = { onPress: tmp9, disabled: null, props: null, accessibilityLabel: null, style: null, children: null };
    let tmp14 = !tmp8;
    if (videoEnabled) {
      tmp14 = !stateFromStores2;
    }
    element.disabled = tmp14;
    element.props = props;
    let intl = tmp3(tmp2[16]).intl;
    const string = intl.string;
    const t = tmp3(tmp2[16]).t;
    if (stateFromStores1) {
      let stringResult = string(t.EnX2Jl);
    } else {
      stringResult = string(t["v8K+8W"]);
    }
    element.accessibilityLabel = stringResult;
    element.style = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
    if (!videoEnabled) {
      const obj6 = { color: voicePanelButtonStyles.iconFill.color };
      memo = jsx(tmp3(tmp2[21]).VideoDenyIcon, { color: voicePanelButtonStyles.iconFill.color });
    }
    element.children = memo;
    return jsx(tmp(tmp2[20]), { onPress: tmp9, disabled: null, props: null, accessibilityLabel: null, style: null, children: null });
  }
  let obj5 = channelId(stateFromStores1[11]);
};