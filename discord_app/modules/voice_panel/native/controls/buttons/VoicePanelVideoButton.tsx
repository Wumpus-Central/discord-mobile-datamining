// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx
import CameraRive from "../../../../../../discord_common/js/packages/design/components/Rive/native/generated/CameraRive.tsx";
import VideoIcon from "../../../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import VideoSlashIcon2 from "../../../../../design/components/Icon/native/redesign/generated/VideoSlashIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
  obj.children = jsx(CameraRive.CameraRive, {
    dataBinding: { fill: color, on: isVideoEnabled },
    defaultViewModelInstance: null,
    fallback: null,
  });
  return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default function VideoButton(arg0) {
  let isVideoEnabled;
  let color;
  ({ props, wrapperSpecs } = arg0);
  const voicePanelButtonStyles = isVideoEnabled(19931).useVoicePanelButtonStyles(wrapperSpecs);
  const tmp5 = color(19802)(noop.useContext(color(11924)).channelId, "VoicePanelVideoButton");
  isVideoEnabled = tmp5.isVideoEnabled;
  ({ videoSupported, videoBlocked } = tmp5);
  if (videoSupported) {
    if (isVideoEnabled) {
      let color2 = voicePanelButtonStyles.iconFillSelected.color;
    } else {
      color2 = voicePanelButtonStyles.iconFill.color;
    }
  } else {
    color = voicePanelButtonStyles.iconFillMuted.color;
    items = [color, isVideoEnabled];
    let memo = noop.useMemo(() => <VideoButtonRive isVideoEnabled={isVideoEnabled} color={color} />, items);
    const element = {
      onPress: tmp6,
      disabled: null,
      props: null,
      accessibilityLabel: null,
      style: null,
      children: null,
    };
    let tmp11 = !videoBlocked;
    if (!videoBlocked) {
      tmp11 = !videoSupported;
    }
    element.disabled = tmp11;
    element.props = props;
    const intl = tmp3(1113).intl;
    const string = intl.string;
    const t = tmp3(1113).t;
    if (isVideoEnabled) {
      let stringResult = string(t.EnX2Jl);
    } else {
      stringResult = string(t["v8K+8W"]);
    }
    element.accessibilityLabel = stringResult;
    element.style = isVideoEnabled ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
    if (videoBlocked) {
      const obj3 = { color: voicePanelButtonStyles.iconFill.color };
      memo = jsx(tmp3(15543).VideoDenyIcon, { color: voicePanelButtonStyles.iconFill.color });
    }
    element.children = memo;
    return jsx(tmp(19932), {
      onPress: tmp6,
      disabled: null,
      props: null,
      accessibilityLabel: null,
      style: null,
      children: null,
    });
  }
  const obj2 = isVideoEnabled(19931);
  tmp = color;
}
