// discord_app/components_native/common/VolumeSlider.tsx
import util from "../../intl/index.native.tsx";
import PerceptualVolumeUtils from "../../utils/PerceptualVolumeUtils.tsx";
import VoiceNormalIcon from "../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import Slider from "../../design/components/Slider/native/Slider.native.tsx";
import VoiceXIcon from "../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function formatVolume(arg0) {
  return "" + Math.round(arg0) + "%";
}
const View = fn(17).View;
let closure_3 = fn(5855).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxVolume) {
  maxVolume = maxVolume.maxVolume;
  ({ style, value } = maxVolume);
  if (maxVolume === undefined) {
    maxVolume = closure_3;
  }
  ({ onValueChange: require, accessibilityLabel } = maxVolume);
  const obj = { style, children: null };
  const obj2 = {
    value: PerceptualVolumeUtils.amplitudeToPerceptual(value),
    maxValue: maxVolume,
    onChange(arg0) {
      return closure_1_0(PerceptualVolumeUtils.perceptualToAmplitude(arg0));
    },
    formatValue: formatVolume,
    startIcon: jsx(VoiceXIcon.VoiceXIcon, {}),
    endIcon: jsx(VoiceNormalIcon.VoiceNormalIcon, {}),
    accessibilityLabel: null,
  };
  if (accessibilityLabel == null) {
    const intl = util.intl;
    accessibilityLabel = intl.string(util.t.xPHVBs);
  }
  obj2.accessibilityLabel = accessibilityLabel;
  obj.children = jsx(Slider.Slider, {
    value: PerceptualVolumeUtils.amplitudeToPerceptual(value),
    maxValue: maxVolume,
    onChange(arg0) {
      return closure_1_0(PerceptualVolumeUtils.perceptualToAmplitude(arg0));
    },
    formatValue: formatVolume,
    startIcon: jsx(VoiceXIcon.VoiceXIcon, {}),
    endIcon: jsx(VoiceNormalIcon.VoiceNormalIcon, {}),
    accessibilityLabel: null,
  });
  return <View style={style}>{null}</View>;
}
