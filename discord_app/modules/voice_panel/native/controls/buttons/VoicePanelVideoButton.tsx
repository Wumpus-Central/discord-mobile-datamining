// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import StreamPermissionUtils from "../../../../go_live/utils/StreamPermissionUtils.tsx";
import CallsUtils from "../../../../voice_calls/native/CallsUtils.tsx";
import openIgnoreThermalStateAlert from "../../../../activities/native/openIgnoreThermalStateAlert.tsx";
import VoicePanelVideoGuardErrorAlert from "../../alerts/VoicePanelVideoGuardErrorAlert.tsx";
import VoicePanelNoVideoPermissionsAlert from "../../alerts/VoicePanelNoVideoPermissionsAlert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelCallLifecycleStore from "../../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import MediaEngineStore from "../../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";

require = fn;
function VideoButtonRive(arg0) {
  ({ isVideoEnabled, color } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  obj = { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null };
  let str = "CamOff";
  if (isVideoEnabled) {
    str = "CamOn";
  }
  obj.defaultViewModelInstance = str;
  if (isVideoEnabled) {
    let VideoSlashIcon = tmp3(10110).VideoIcon;
  } else {
    VideoSlashIcon = tmp3(13046).VideoSlashIcon;
  }
  obj.fallback = <VideoSlashIcon color={color} />;
  obj.children = jsx(native.CameraRive, {
    dataBinding: { fill: color, on: isVideoEnabled },
    defaultViewModelInstance: null,
    fallback: null,
  });
  return <View dataBinding={{ fill: color, on: isVideoEnabled }} defaultViewModelInstance={null} fallback={null} />;
}
const View = fn(17).View;
const Features = fn(4585).Features;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let color;
  let obj = stateFromStores2;
  ({ props, wrapperSpecs } = arg0);
  const channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[9])).channelId;
  const voicePanelButtonStyles = channelId(stateFromStores1[10]).useVoicePanelButtonStyles(wrapperSpecs);
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
  stateFromStores1 = channelId(stateFromStores1[11]).useStateFromStores(items1, () =>
    MediaEngineStore.isVideoEnabled(),
  );
  const obj4 = channelId(stateFromStores1[11]);
  const items2 = [MediaEngineStore];
  stateFromStores2 = channelId(stateFromStores1[11]).useStateFromStores(items2, () =>
    MediaEngineStore.supports(constants.VIDEO),
  );
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
    const element = {
      onPress: tmp9,
      disabled: null,
      props: null,
      accessibilityLabel: null,
      style: null,
      children: null,
    };
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
      obj = { color: voicePanelButtonStyles.iconFill.color };
      memo = tmp12(tmp3(tmp2[21]).VideoDenyIcon, obj);
    }
    element.children = memo;
    return jsx(tmp(tmp2[20]), {
      onPress: tmp9,
      disabled: null,
      props: null,
      accessibilityLabel: null,
      style: null,
      children: null,
    });
  }
}
