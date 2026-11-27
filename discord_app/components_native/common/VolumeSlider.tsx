// === Module 10398: VolumeSlider ===

// Module 10398 (VolumeSlider)
import util from "util" /* 1112 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6004 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 7167 */;
import Slider from "Slider" /* 10399 */;
import VoiceXIcon from "VoiceXIcon" /* 10402 */;
import noop from "module_19" /* 19 */;

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
    accessibilityLabel: null
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
    accessibilityLabel: null
  });
  return <View style={style}>{null}</View>;
};